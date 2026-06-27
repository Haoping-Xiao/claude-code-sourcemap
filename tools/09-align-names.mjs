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
// 全局 df (来自参照索引): 用于判断共享字符串是否全局唯一 (df==1 => 强证据)
let DF = {};
const REF_INDEX = process.env.REF_INDEX || `work/${VERSION}/ref-2.1.88.index.json`;
if (existsSync(REF_INDEX)) { try { DF = JSON.parse(readFileSync(REF_INDEX, "utf-8")).df || {}; } catch {} }
const isGlobalUnique = (s) => DF["str:" + s] === 1;

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

// 提取函数参数名 (仅简单 Identifier 参数; 解构/默认值跳过为 null 占位以保持位置)
function paramNames(fnNode) {
  if (!fnNode || !fnNode.params) return [];
  return fnNode.params.map((p) => (p && p.type === "Identifier" ? p.name : null));
}
function fnOf(node) {
  if (!node) return null;
  if (node.type === "FunctionDeclaration" || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") return node;
  return null;
}

// 从语句数组提取命名顶层声明 -> [{name, strings:Set, params:[..]}]
function declsFromBody(body) {
  const out = [];
  for (let stmt of body) {
    if (stmt.type === "ExportNamedDeclaration" && stmt.declaration) stmt = stmt.declaration;
    else if (stmt.type === "ExportDefaultDeclaration" && stmt.declaration) stmt = stmt.declaration;
    if (stmt.type === "FunctionDeclaration" && stmt.id) {
      const s = new Set(); collectStrings(stmt.body, s); out.push({ name: stmt.id.name, strings: s, params: paramNames(stmt) });
    } else if (stmt.type === "ClassDeclaration" && stmt.id) {
      const s = new Set(); collectStrings(stmt.body, s); out.push({ name: stmt.id.name, strings: s, params: [] });
    } else if (stmt.type === "VariableDeclaration") {
      for (const d of stmt.declarations) {
        if (d.id && d.id.type === "Identifier" && d.init) {
          const s = new Set(); collectStrings(d.init, s);
          out.push({ name: d.id.name, strings: s, params: paramNames(fnOf(d.init)) });
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
const autoParams = {};
let modules = 0, mapped = 0;
for (const [modVar, m] of Object.entries(report)) {
  if (!m.match) continue; // app 与 vendor 匹配都做命名对齐 (2.1.88 的 node_modules 是真实有名源码)
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
    let c = 0, longHit = false, uniqHit = false;
    for (const s of a.strings) if (b.strings.has(s)) { c++; if (s.length >= 12) longHit = true; if (isGlobalUnique(s)) uniqHit = true; }
    return { c, longHit, uniqHit };
  }
  // 每个 mod decl 的最佳 orig; 每个 orig decl 的最佳 mod (互为最佳判定)
  const bestForMod = new Map();
  for (const md of modDecls) {
    let best = null;
    for (const od of origDecls) {
      const { c, longHit, uniqHit } = shared(md, od);
      if (c === 0) continue;
      const score = c + (longHit ? 0.5 : 0) + (uniqHit ? 1 : 0);
      if (!best || score > best.score) best = { od, c, longHit, uniqHit, score };
    }
    if (best) bestForMod.set(md, best);
  }
  const bestForOrig = new Map();
  for (const od of origDecls) {
    let best = null;
    for (const md of modDecls) {
      const { c, longHit, uniqHit } = shared(md, od);
      if (c === 0) continue;
      const score = c + (longHit ? 0.5 : 0) + (uniqHit ? 1 : 0);
      if (!best || score > best.score) best = { md, score };
    }
    if (best) bestForOrig.set(od, best);
  }

  const renameMap = {};
  const paramMap = {}; // minifiedDeclName -> { oldParam: newParam }
  const usedTargets = new Set();
  for (const [md, best] of bestForMod) {
    const od = best.od;
    // 互为最佳 + (>=2 共享 或 (>=1 且 有长串/全局唯一))
    const mutual = bestForOrig.get(od)?.md === md;
    const strong = best.c >= 2 || (best.c >= 1 && (best.longHit || best.uniqHit));
    if (!mutual || !strong) continue;
    if (!isValidName(od.name)) continue;
    if (md.name !== od.name && !usedTargets.has(od.name)) {
      renameMap[md.name] = od.name;
      usedTargets.add(od.name);
    }
    // 参数名按位对齐 (参数位置稳定; 仅两侧均为简单 Identifier 且不同名时)
    const pm = {};
    const n = Math.min(md.params.length, od.params.length);
    const seen = new Set();
    for (let i = 0; i < n; i++) {
      const o = md.params[i], nw = od.params[i];
      if (o && nw && o !== nw && isValidName(nw) && !seen.has(nw) && !(o in pm)) { pm[o] = nw; seen.add(nw); }
    }
    if (Object.keys(pm).length) paramMap[md.name] = pm;
  }
  if (Object.keys(renameMap).length) { auto[modVar] = renameMap; mapped += Object.keys(renameMap).length; }
  if (Object.keys(paramMap).length) { autoParams[modVar] = paramMap; }
  modules++;
}

writeFileSync(OUT, JSON.stringify(auto, null, 0));
const OUTP = process.env.AUTO_PARAM_RENAMES || `work/${VERSION}/auto-param-renames.json`;
writeFileSync(OUTP, JSON.stringify(autoParams, null, 0));
let pcount = 0; for (const k in autoParams) for (const f in autoParams[k]) pcount += Object.keys(autoParams[k][f]).length;
console.log(`[09] processed ${modules} matched modules; produced ${mapped} decl-renames across ${Object.keys(auto).length} modules -> ${OUT}`);
console.log(`[09] produced ${pcount} param-renames across ${Object.keys(autoParams).length} modules -> ${OUTP}`);
