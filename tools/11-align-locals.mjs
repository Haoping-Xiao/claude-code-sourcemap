#!/usr/bin/env node
// 函数级"局部变量名"对齐: 把 2.1.195 反压缩函数里的局部变量(e/t/n...)对齐到
// 对应 2.1.88 原函数的真实局部名。
//
// 核心思路(免 LLM, 利用唯一资产 2.1.88 源码):
//  - 函数配对: 用函数体内的字符串字面量做指纹, 互为最佳 + 强证据。
//  - 局部配对: 用"在该变量上访问的属性名集合(obj.prop)"做指纹 —— 属性名在 TS->JS
//    转译与压缩中**不被改名**, 是稳定且有区分度的信号。Jaccard 最大 + 互为最佳 + 阈值。
//
// 输出: work/<ver>/local-renames.json = { moduleVar: { fnMinifiedName: { oldLocal: origLocal } } }
// 由 06-restore.mjs 在(改函数名之前)按函数作用域应用。
//
// 用法: node tools/11-align-locals.mjs

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default || _traverse;

const VERSION = process.env.VERSION || "2.1.195";
const MOD_DIR = process.env.MOD_DIR || `work/${VERSION}/modules`;
const REPORT = process.env.MATCH_REPORT || `work/${VERSION}/match-report.json`;
const REF_ROOT = process.env.REF_ROOT || "restored-src";
const OUT = process.env.LOCAL_RENAMES || `work/${VERSION}/local-renames.json`;

const report = JSON.parse(readFileSync(REPORT, "utf-8")).report;

function parseSafe(code, ts) {
  try {
    return parse(code, { sourceType: ts ? "module" : "script", allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true, allowSuperOutsideMethod: true, errorRecovery: true, plugins: ts ? ["typescript", "jsx"] : ["jsx"] });
  } catch { return null; }
}

const VALID = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const isValid = (n) => typeof n === "string" && VALID.test(n) && n.length >= 2 && n.length <= 40;

// 提取每个具名函数: { name, bodyStrings:Set, bindings: Map(name -> Set(propNames)) }
function extractFunctions(ast) {
  const funcs = [];
  traverse(ast, {
    Function(path) {
      let name = null;
      if (path.isFunctionDeclaration() && path.node.id) name = path.node.id.name;
      else if (path.parentPath.isVariableDeclarator() && path.parent.id && path.parent.id.type === "Identifier") name = path.parent.id.name;
      else if (path.parentPath.isAssignmentExpression() && path.parent.left.type === "Identifier") name = path.parent.left.name;
      if (!name) return;
      const bindings = new Map();
      for (const b in path.scope.bindings) bindings.set(b, new Set());
      const bodyStrings = new Set();
      path.traverse({
        StringLiteral(p) { if (p.node.value && p.node.value.length >= 4) bodyStrings.add(p.node.value); },
        TemplateElement(p) { const c = p.node.value && p.node.value.cooked; if (c && c.length >= 4) bodyStrings.add(c); },
        MemberExpression(p) {
          const o = p.node.object;
          if (o.type === "Identifier" && bindings.has(o.name)) {
            const prop = p.node.computed
              ? (p.node.property.type === "StringLiteral" ? p.node.property.value : null)
              : (p.node.property && p.node.property.name);
            if (prop && prop.length >= 2) bindings.get(o.name).add("." + prop);
          }
        },
      });
      funcs.push({ name, bindings, bodyStrings });
    },
  });
  return funcs;
}

function shareCount(a, b) { let c = 0; for (const s of a) if (b.has(s)) c++; return c; }

let modules = 0, totalLocals = 0;
const out = {};

for (const [modVar, m] of Object.entries(report)) {
  if (!m.match || !m.match.path) continue;
  if (!(m.class === "modified" || m.class === "unchanged" || m.class === "partial")) continue;
  const origPath = join(REF_ROOT, m.match.path);
  const modFile = join(MOD_DIR, m.file);
  if (!existsSync(origPath) || !existsSync(modFile)) continue;
  const origAst = parseSafe(readFileSync(origPath, "utf-8"), true);
  const modAst = parseSafe(readFileSync(modFile, "utf-8").replace(/^\/\/ resplit:.*\n/, ""), false);
  if (!origAst || !modAst) continue;

  const origFns = extractFunctions(origAst).filter((f) => f.bodyStrings.size > 0 || f.bindings.size > 0);
  const modFns = extractFunctions(modAst).filter((f) => f.bodyStrings.size > 0 || f.bindings.size > 0);
  if (!origFns.length || !modFns.length) continue;

  // 函数配对: bodyStrings 互为最佳 + 共享>=2
  const bestO = new Map(); // modFn -> origFn
  for (const mf of modFns) {
    let best = null, bs = 0;
    for (const of_ of origFns) { const c = shareCount(mf.bodyStrings, of_.bodyStrings); if (c > bs) { bs = c; best = of_; } }
    if (best && bs >= 2) bestO.set(mf, { of: best, c: bs });
  }
  const bestM = new Map(); // origFn -> modFn
  for (const of_ of origFns) {
    let best = null, bs = 0;
    for (const mf of modFns) { const c = shareCount(mf.bodyStrings, of_.bodyStrings); if (c > bs) { bs = c; best = mf; } }
    if (best && bs >= 2) bestM.set(of_, best);
  }

  const modMap = {};
  for (const [mf, { of: of_ }] of bestO) {
    if (bestM.get(of_) !== mf) continue; // 互为最佳
    // 局部配对: 属性指纹 Jaccard / 共享数
    const fnMap = {};
    const usedTargets = new Set();
    const modBindings = [...mf.bindings.entries()];
    const origBindings = [...of_.bindings.entries()].filter(([n, s]) => isValid(n) && s.size > 0);
    for (const [mName, mProps] of modBindings) {
      if (mProps.size === 0) continue;
      let best = null, bScore = 0;
      for (const [oName, oProps] of origBindings) {
        const c = shareCount(mProps, oProps);
        if (c > bScore) { bScore = c; best = oName; }
      }
      // 强证据: 共享属性 >=2 (或 >=1 且该属性较长/独特)
      if (!best || bScore < 2) continue;
      if (mName === best || !isValid(best) || usedTargets.has(best)) continue;
      // 互为最佳校验
      let backName = null, backScore = 0;
      for (const [mn, mp] of modBindings) { if (mp.size === 0) continue; const c = shareCount(mp, of_.bindings.get(best) || new Set()); if (c > backScore) { backScore = c; backName = mn; } }
      if (backName !== mName) continue;
      fnMap[mName] = best;
      usedTargets.add(best);
    }
    if (Object.keys(fnMap).length) { modMap[mf.name] = fnMap; totalLocals += Object.keys(fnMap).length; }
  }
  if (Object.keys(modMap).length) { out[modVar] = modMap; modules++; }
}

writeFileSync(OUT, JSON.stringify(out, null, 0));
console.log(`[11] aligned ${totalLocals} local variables across ${modules} modules -> ${OUT}`);
