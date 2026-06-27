#!/usr/bin/env node
// 自动跨版本命名对齐: 对每个匹配到 2.1.88 文件的模块, 用"声明内字符串字面量"把
// 2.1.195 的顶层声明(函数/常量/类)对齐到 2.1.88 的同名声明, 产出 minified->原名 映射。
// 高精度策略: 仅在共享多个/较长字符串且互为最佳匹配时重命名, 避免误命名。
//
// 输出: work/<ver>/auto-renames.json = { "<moduleVar>": { "minified": "OriginalName", ... } }
// 由 06-restore.mjs 自动合并。
//
// 用法: node tools/09-align-names.mjs

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { parse } from "@babel/parser";

const VERSION = process.env.VERSION || "2.1.195";
const MOD_DIR = process.env.MOD_DIR || `work/${VERSION}/modules`;
const REPORT = process.env.MATCH_REPORT || `work/${VERSION}/match-report.json`;
const REF_ROOT = process.env.REF_ROOT || "restored-src";
const OUT = process.env.AUTO_RENAMES || `work/${VERSION}/auto-renames.json`;
const MINLEN = 6;

const report = JSON.parse(readFileSync(REPORT, "utf-8")).report;

function collectStrings(node, set) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) { for (const x of node) collectStrings(x, set); return; }
  if (node.type === "StringLiteral" && typeof node.value === "string") {
    if (node.value.length >= MINLEN) set.add(node.value);
  } else if (node.type === "TemplateElement" && node.value && node.value.cooked) {
    if (node.value.cooked.length >= MINLEN) set.add(node.value.cooked);
  }
  for (const k in node) {
    if (k === "loc" || k === "start" || k === "end" || k === "leadingComments" || k === "trailingComments") continue;
    const v = node[k];
    if (v && typeof v === "object") collectStrings(v, set);
  }
}

// 从语句数组提取命名顶层声明 -> [{name, strings:Set}]
function declsFromBody(body) {
  const out = [];
  for (let stmt of body) {
    if (stmt.type === "ExportNamedDeclaration" && stmt.declaration) stmt = stmt.declaration;
    else if (stmt.type === "ExportDefaultDeclaration" && stmt.declaration) stmt = stmt.declaration;
    if (stmt.type === "FunctionDeclaration" && stmt.id) {
      const s = new Set(); collectStrings(stmt.body, s); out.push({ name: stmt.id.name, strings: s });
    } else if (stmt.type === "ClassDeclaration" && stmt.id) {
      const s = new Set(); collectStrings(stmt.body, s); out.push({ name: stmt.id.name, strings: s });
    } else if (stmt.type === "VariableDeclaration") {
      for (const d of stmt.declarations) {
        if (d.id && d.id.type === "Identifier" && d.init) {
          const s = new Set(); collectStrings(d.init, s); out.push({ name: d.id.name, strings: s });
        }
      }
    }
  }
  return out;
}

function parseSafe(code, ts) {
  try {
    return parse(code, { sourceType: ts ? "module" : "script", allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true, allowSuperOutsideMethod: true, errorRecovery: true, plugins: ts ? ["typescript", "jsx"] : ["jsx"] });
  } catch { return null; }
}

// 2.1.195 模块的真实声明可能在 program 顶层(ESM: 函数与包裹体平级), 也可能在
// 包裹体 arrow 内(CJS: Q((exports,module)=>{...body...}))。两处都收集。
function moduleStatements(ast) {
  const stmts = [...ast.program.body];
  for (const stmt of ast.program.body) {
    if (stmt.type === "VariableDeclaration" && stmt.declarations.length === 1) {
      const d = stmt.declarations[0];
      if (d.init && d.init.type === "CallExpression" && d.init.arguments.length === 1) {
        const a = d.init.arguments[0];
        if ((a.type === "ArrowFunctionExpression" || a.type === "FunctionExpression") && a.body.type === "BlockStatement") {
          stmts.push(...a.body.body);
        }
      }
    }
  }
  return stmts;
}

const VALID = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function isValidName(n) { return VALID.test(n) && n.length >= 2 && n.length <= 60; }

const auto = {};
let modules = 0, mapped = 0;
for (const [modVar, m] of Object.entries(report)) {
  if (!m.match || !m.match.app || m.vendor) continue;
  if (!(m.class === "modified" || m.class === "unchanged" || m.class === "partial")) continue;
  const origPath = join(REF_ROOT, m.match.path);
  if (!existsSync(origPath)) continue;
  const modFile = join(MOD_DIR, m.file);
  if (!existsSync(modFile)) continue;

  const origAst = parseSafe(readFileSync(origPath, "utf-8"), true);
  const modAst = parseSafe(readFileSync(modFile, "utf-8").replace(/^\/\/ resplit:.*\n/, ""), false);
  if (!origAst || !modAst) continue;

  const origDecls = declsFromBody(origAst.program.body).filter((d) => d.strings.size > 0 && isValidName(d.name));
  const modDecls = declsFromBody(moduleStatements(modAst)).filter((d) => d.strings.size > 0);
  if (!origDecls.length || !modDecls.length) continue;

  // 计算共享字符串得分
  function shared(a, b) {
    let c = 0, longHit = false;
    for (const s of a.strings) if (b.strings.has(s)) { c++; if (s.length >= 12) longHit = true; }
    return { c, longHit };
  }
  // 每个 mod decl 的最佳 orig; 每个 orig decl 的最佳 mod (互为最佳判定)
  const bestForMod = new Map();
  for (const md of modDecls) {
    let best = null;
    for (const od of origDecls) {
      const { c, longHit } = shared(md, od);
      if (c === 0) continue;
      const score = c + (longHit ? 0.5 : 0);
      if (!best || score > best.score) best = { od, c, longHit, score };
    }
    if (best) bestForMod.set(md, best);
  }
  const bestForOrig = new Map();
  for (const od of origDecls) {
    let best = null;
    for (const md of modDecls) {
      const { c, longHit } = shared(md, od);
      if (c === 0) continue;
      const score = c + (longHit ? 0.5 : 0);
      if (!best || score > best.score) best = { md, score };
    }
    if (best) bestForOrig.set(od, best);
  }

  const renameMap = {};
  const usedTargets = new Set();
  for (const [md, best] of bestForMod) {
    const od = best.od;
    // 互为最佳 + (>=2 共享 或 (>=1 且 有长串))
    const mutual = bestForOrig.get(od)?.md === md;
    const strong = best.c >= 2 || (best.c >= 1 && best.longHit);
    if (!mutual || !strong) continue;
    if (md.name === od.name || !isValidName(od.name)) continue;
    if (usedTargets.has(od.name)) continue;
    if (md.name.length > od.name.length + 4) { /* 允许 */ }
    renameMap[md.name] = od.name;
    usedTargets.add(od.name);
  }
  if (Object.keys(renameMap).length) { auto[modVar] = renameMap; mapped += Object.keys(renameMap).length; }
  modules++;
}

writeFileSync(OUT, JSON.stringify(auto, null, 0));
console.log(`[09] processed ${modules} matched modules; produced ${mapped} auto-renames across ${Object.keys(auto).length} modules -> ${OUT}`);
