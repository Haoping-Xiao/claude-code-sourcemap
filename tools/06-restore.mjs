#!/usr/bin/env node
// 生成 restored-2.1.195/ 源码树:
//  - unchanged: 直接采用 2.1.88 原始 .ts (含真实命名+注释), 放到对应路径。
//  - modified : 反压缩(格式化)+按 _t 导出名做模块内重命名, 放到匹配到的 2.1.88 路径。
//  - partial  : 反压缩, 放 partial/ (附低置信度建议路径)。
//  - new      : 反压缩, 放 unmatched/。
//  - vendor   : 放 vendor/ (matched 用 2.1.88 路径; 否则 id)。
//
// 用法: node tools/06-restore.mjs

import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";
import * as prettier from "prettier";
import { createRequire } from "module";

const traverse = _traverse.default || _traverse;
const generate = _generate.default || _generate;

// wakaru 结构化反压缩 (CJS require: ESM dist 的 prettier import 缺扩展名会坏)
const require = createRequire(import.meta.url);
const { runTransformationRules } = require("@wakaru/unminify");
// 仅语义安全的规则: 与 bun-demincer SAFE_WAKARU_RULES 一致
const WAKARU_RULES = ["un-boolean", "un-typeof", "un-numeric-literal", "un-bracket-notation"];
const WAKARU_MAX = 600_000; // 超大模块跳过 wakaru (耗时/风险)
async function wakaru(code) {
  if (code.length > WAKARU_MAX) return code;
  // 新版 claude 大量使用 `using`/`await using` (explicit resource management),
  // wakaru 的 jscodeshift 解析器不支持 -> 直接跳过, 避免无谓的解析失败与噪音。
  if (/(^|[^.\w$])(?:await\s+)?using\s+[A-Za-z_$]/.test(code)) return code;
  const origErr = console.error, origWarn = console.warn, origLog = console.log;
  console.error = console.warn = console.log = () => {};
  try {
    const r = await runTransformationRules({ path: "m.js", source: code }, WAKARU_RULES);
    return r.code ?? code;
  } catch {
    return code;
  } finally {
    console.error = origErr; console.warn = origWarn; console.log = origLog;
  }
}

const VERSION = process.env.VERSION || "2.1.195";
const MOD_DIR = process.env.MOD_DIR || `work/${VERSION}/modules`;
const REPORT = process.env.MATCH_REPORT || `work/${VERSION}/match-report.json`;
const REF_ROOT = process.env.REF_ROOT || "restored-src";
const OUT = process.env.OUT_DIR || `restored-${VERSION}`;

const report = JSON.parse(readFileSync(REPORT, "utf-8"));
const entries = Object.entries(report.report);
console.log(`[06] ${entries.length} modules`);

// 模块变量名 -> 可读标签 (匹配到的 2.1.88 路径), 用于把依赖注释里的 minified 模块名翻译为文件名。
const MODVAR_LABEL = {};
for (const [v, m] of entries) {
  if (m.match && m.match.path) {
    MODVAR_LABEL[v] = m.match.path.replace(/^src\//, "").replace(/^node_modules\//, "");
  }
}

// 可选的 AI/人工重命名层: tools/ai-renames.json = { "<moduleVar>": {"oldLocal":"NewName",...} }
// 这些 per-module 局部重命名会并入作用域重命名, 可复现(随 06 一起跑), 与 _t 导出名互补。
// 也兼容 bun-demincer ai-rename.mjs 的产物(配 API key 时)。
let AI_RENAMES = {};
const AI_RENAMES_PATH = process.env.AI_RENAMES || "tools/ai-renames.json";
if (existsSync(AI_RENAMES_PATH)) {
  try { AI_RENAMES = JSON.parse(readFileSync(AI_RENAMES_PATH, "utf-8")); } catch {}
  console.log(`[06] loaded AI/manual renames for ${Object.keys(AI_RENAMES).length} modules from ${AI_RENAMES_PATH}`);
}
// 自动跨版本对齐重命名 (09-align-names.mjs 产物); 手工 ai-renames 优先级更高(后合并)。
let AUTO_RENAMES = {};
const AUTO_RENAMES_PATH = process.env.AUTO_RENAMES || `work/${VERSION}/auto-renames.json`;
if (existsSync(AUTO_RENAMES_PATH)) {
  try { AUTO_RENAMES = JSON.parse(readFileSync(AUTO_RENAMES_PATH, "utf-8")); } catch {}
  console.log(`[06] loaded auto-aligned renames for ${Object.keys(AUTO_RENAMES).length} modules from ${AUTO_RENAMES_PATH}`);
}
// 厂商指纹覆盖 (match-vendors.mjs 产物): moduleVar -> package, 识别 2.1.88 未含的第三方模块。
let VENDOR_OVERRIDES = {};
const VENDOR_OVERRIDES_PATH = process.env.VENDOR_OVERRIDES || `work/${VERSION}/vendor-overrides.json`;
if (existsSync(VENDOR_OVERRIDES_PATH)) {
  try {
    const ov = JSON.parse(readFileSync(VENDOR_OVERRIDES_PATH, "utf-8")).overrides || {};
    for (const f in ov) if (ov[f].moduleName) VENDOR_OVERRIDES[ov[f].moduleName] = ov[f].package || "_unknown";
  } catch {}
  console.log(`[06] loaded ${Object.keys(VENDOR_OVERRIDES).length} vendor fingerprint overrides from ${VENDOR_OVERRIDES_PATH}`);
}

function mergedRenames(name) {
  const a = AUTO_RENAMES[name], b = AI_RENAMES[name];
  if (!a && !b) return undefined;
  return { ...(a || {}), ...(b || {}) }; // 手工覆盖自动
}
// 自动参数名对齐 (09 产物): { moduleVar: { minifiedDeclName: { oldParam: newParam } } }
let PARAM_RENAMES = {};
const PARAM_RENAMES_PATH = process.env.AUTO_PARAM_RENAMES || `work/${VERSION}/auto-param-renames.json`;
if (existsSync(PARAM_RENAMES_PATH)) {
  try { PARAM_RENAMES = JSON.parse(readFileSync(PARAM_RENAMES_PATH, "utf-8")); } catch {}
  console.log(`[06] loaded auto param-renames for ${Object.keys(PARAM_RENAMES).length} modules from ${PARAM_RENAMES_PATH}`);
}
// 函数局部变量重命名 (11-align-locals 产物): { moduleVar: { fnName: { oldLocal: newLocal } } }
let LOCAL_RENAMES = {};
const LOCAL_RENAMES_PATH = process.env.LOCAL_RENAMES || `work/${VERSION}/local-renames.json`;
if (existsSync(LOCAL_RENAMES_PATH)) {
  try { LOCAL_RENAMES = JSON.parse(readFileSync(LOCAL_RENAMES_PATH, "utf-8")); } catch {}
  console.log(`[06] loaded local renames for ${Object.keys(LOCAL_RENAMES).length} modules from ${LOCAL_RENAMES_PATH}`);
}
// LLM 局部重命名 (12-llm-rename 产物, 需 API key 时才有); 与算法对齐结果合并。
let LLM_LOCAL_RENAMES = {};
const LLM_LOCAL_RENAMES_PATH = process.env.LLM_LOCAL_RENAMES || `work/${VERSION}/llm-local-renames.json`;
if (existsSync(LLM_LOCAL_RENAMES_PATH)) {
  try { LLM_LOCAL_RENAMES = JSON.parse(readFileSync(LLM_LOCAL_RENAMES_PATH, "utf-8")); } catch {}
  console.log(`[06] loaded LLM local renames for ${Object.keys(LLM_LOCAL_RENAMES).length} modules from ${LLM_LOCAL_RENAMES_PATH}`);
}
// 合并某模块的 参数 + 局部(算法) + 局部(LLM) per-function 重命名 (算法优先, 因为是 2.1.88 校验过的)
function scopedRenamesFor(name) {
  const p = PARAM_RENAMES[name], l = LOCAL_RENAMES[name], g = LLM_LOCAL_RENAMES[name];
  if (!p && !l && !g) return null;
  const out = {};
  for (const fn in (g || {})) out[fn] = { ...(g[fn]) };              // LLM 最低优先
  for (const fn in (l || {})) out[fn] = { ...(out[fn] || {}), ...(l[fn]) }; // 算法局部覆盖 LLM
  for (const fn in (p || {})) out[fn] = { ...(out[fn] || {}), ...(p[fn]) }; // 参数(2.1.88 位对齐)最高
  return out;
}

// ── helpers ───────────────────────────────────────────────────────────────

// 从模块内容提取 _t(target,{ExportName:()=>localVar}) -> {localVar: exportName}
function extractRenames(content) {
  const map = {};
  const re = /_t\([^,]+,\s*\{/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    let i = m.index + m[0].length, depth = 1;
    while (i < content.length && depth > 0) {
      if (content[i] === "{") depth++;
      else if (content[i] === "}") depth--;
      i++;
    }
    const body = content.slice(m.index + m[0].length, i - 1);
    const pr = /([A-Za-z_$][A-Za-z0-9_$]*):\s*\(\)\s*=>\s*([A-Za-z_$][A-Za-z0-9_$]*)/g;
    let p;
    while ((p = pr.exec(body)) !== null) {
      const exportName = p[1], local = p[2];
      if (exportName === local) continue;
      if (exportName.length < 2) continue;
      if (exportName.startsWith("_")) continue;
      // 同一 local 冲突 -> 取第一个
      if (!(local in map)) map[local] = exportName;
    }
  }
  return map;
}

const RESERVED = new Set(["default","this","arguments","null","true","false","var","let","const","function","return","new","typeof","in","of","class"]);

// 从 `IDENT.displayName="Name"` 模式恢复真实名 (React 组件等)。-> {local: Name}
function extractDisplayNames(code) {
  const map = {};
  const re = /\b([A-Za-z_$][A-Za-z0-9_$]*)\.displayName\s*=\s*"([^"\\]{1,60})"/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    const local = m[1];
    let name = m[2].trim();
    // 规范化为合法标识符
    name = name.replace(/[^A-Za-z0-9_$]+/g, "_").replace(/^[^A-Za-z_$]+/, "");
    if (!name || name.length < 2) continue;
    if (local === name) continue;
    if (!(local in map)) map[local] = name;
  }
  return map;
}

// 解开 bundler 的 __esm 惰性包裹: `var NAME = E(()=>{ <deps-init>; <real> })`
// -> 直接展开 <real> 到顶层, 并把开头的依赖初始化调用(ft();Zf();...)收进注释。
// 仅在精确匹配该模式时处理; 失败则原样返回。便于阅读(还原树非用于重组)。
function isInitCall(node) {
  // ExpressionStatement: f()  或  f(),g(),...  (全为零参标识符调用)
  if (node.type !== "ExpressionStatement") return null;
  const exprs = node.expression.type === "SequenceExpression" ? node.expression.expressions : [node.expression];
  const names = [];
  for (const e of exprs) {
    if (e.type === "CallExpression" && e.callee.type === "Identifier" && e.arguments.length === 0) names.push(e.callee.name);
    else return null;
  }
  return names;
}
function unwrapEsm(ast) {
  const body = ast.program.body;
  const out = [];
  let unwrapped = 0;
  for (const stmt of body) {
    let handled = false;
    if (stmt.type === "VariableDeclaration" && stmt.declarations.length === 1) {
      const d = stmt.declarations[0];
      if (d.init && d.init.type === "CallExpression" && d.init.callee.type === "Identifier" &&
          d.init.callee.name.length <= 2 && d.init.arguments.length === 1) {
        const arg = d.init.arguments[0];
        const isArrow = arg.type === "ArrowFunctionExpression" || arg.type === "FunctionExpression";
        const modName = d.id.type === "Identifier" ? d.id.name : "?";
        if (isArrow && arg.body.type === "BlockStatement" && arg.params.length === 0) {
          // __esm 惰性模块: 0 参
          const inner = arg.body.body.slice();
          const deps = [];
          while (inner.length) {
            const names = isInitCall(inner[0]);
            if (names) { deps.push(...names); inner.shift(); } else break;
          }
          if (inner.length) {
            const depLabels = deps.map((d) => MODVAR_LABEL[d] || d);
            inner[0].leadingComments = [{ type: "CommentLine", value: ` [unwrapped __esm module ${modName}]${depLabels.length ? " deps: " + depLabels.join(", ") : ""}` }, ...(inner[0].leadingComments || [])];
          }
          out.push(...inner);
          unwrapped++; handled = true;
        } else if (isArrow && arg.body.type === "BlockStatement" && arg.params.length >= 1 && arg.params.length <= 2 &&
                   arg.params.every((p) => p.type === "Identifier")) {
          // __commonJS 模块: (exports[, module]) 参; 注入自包含的 exports/module 声明
          const exP = arg.params[0].name;
          const modP = arg.params[1] ? arg.params[1].name : null;
          const prelude = [];
          prelude.push(t.variableDeclaration("var", [t.variableDeclarator(t.identifier(exP), t.objectExpression([]))]));
          if (modP) prelude.push(t.variableDeclaration("var", [t.variableDeclarator(t.identifier(modP), t.objectExpression([t.objectProperty(t.identifier("exports"), t.identifier(exP))]))]));
          prelude[0].leadingComments = [{ type: "CommentLine", value: ` [unwrapped __commonJS module ${modName}] (exports=${exP}${modP ? ", module=" + modP : ""})` }];
          out.push(...prelude, ...arg.body.body);
          unwrapped++; handled = true;
        }
      }
    }
    if (!handled) out.push(stmt);
  }
  ast.program.body = out;
  return unwrapped;
}

// 折叠 __export 表: `_t(T,{k:()=>v,...})` -> 移除该语句, 把导出名汇总成注释挂到首条语句。
function simplifyExports(ast) {
  const body = ast.program.body;
  const out = [];
  const exportNames = [];
  for (const stmt of body) {
    let drop = false;
    if (stmt.type === "ExpressionStatement" && stmt.expression.type === "CallExpression") {
      const c = stmt.expression;
      if (c.callee.type === "Identifier" && c.callee.name === "_t" && c.arguments.length === 2 &&
          c.arguments[1].type === "ObjectExpression") {
        for (const pr of c.arguments[1].properties) {
          if (pr.type === "ObjectProperty" && pr.key) exportNames.push(pr.key.name || pr.key.value);
        }
        drop = true;
      }
    }
    if (!drop) out.push(stmt);
  }
  if (exportNames.length && out.length) {
    const uniq = [...new Set(exportNames)];
    const txt = ` module exports: ${uniq.join(", ")}`;
    // 分多行避免超长
    out[0].leadingComments = [{ type: "CommentLine", value: txt.length > 500 ? txt.slice(0, 500) + " …" : txt }, ...(out[0].leadingComments || [])];
  }
  ast.program.body = out;
  return exportNames.length;
}

// 删除零引用的空对象声明 `var X = {}` (折叠 _t 后遗留的导出目标)。
// 只删 init 为空 ObjectExpression 且无任何引用者, 注入的 exports/module 因被引用而保留。
function removeDeadExportObjects(ast) {
  traverse(ast, {
    Program(path) {
      path.scope.crawl(); // 重新计算作用域/引用 (前面手动改过 body 数组, 缓存已过期)
      for (const name of Object.keys(path.scope.bindings)) {
        const b = path.scope.bindings[name];
        if (b.references !== 0 || b.constantViolations.length !== 0) continue;
        const node = b.path.node;
        if (b.path.type === "VariableDeclarator" && node.init &&
            node.init.type === "ObjectExpression" && node.init.properties.length === 0 &&
            b.path.parentPath.node.declarations.length === 1) {
          b.path.parentPath.remove();
        }
      }
      path.stop();
    },
  });
}

// 函数作用域内重命名 (参数 + 局部变量): 仅改"本函数自身作用域拥有的绑定", 安全。
function applyScopedRenames(ast, fnRenames) {
  traverse(ast, {
    Function(path) {
      let key = null;
      if (path.node.type === "FunctionDeclaration" && path.node.id) key = path.node.id.name;
      else if (path.parentPath.isVariableDeclarator() && path.parent.id && path.parent.id.type === "Identifier") key = path.parent.id.name;
      else if (path.parentPath.isAssignmentExpression() && path.parent.left.type === "Identifier") key = path.parent.left.name;
      if (!key) return;
      const pm = fnRenames[key];
      if (!pm) return;
      for (const [op, np] of Object.entries(pm)) {
        if (RESERVED.has(np)) continue;
        // 仅当 op 是本函数自身作用域的绑定(参数或局部)且目标名未占用时才改
        if (path.scope.bindings[op] && !path.scope.getBinding(np)) {
          try { path.scope.rename(op, np); } catch {}
        }
      }
    },
  });
}

async function deobfuscate(content, { pretty, structural = true, extraRenames = null, scopedRenames = null }) {
  let code = content.replace(/^\/\/ resplit:.*\n/, "");
  const renames = extractRenames(code);
  // 合并 displayName 恢复 (不覆盖已有的 _t 导出名)
  for (const [local, name] of Object.entries(extractDisplayNames(code))) {
    if (!(local in renames)) renames[local] = name;
  }
  // 合并 AI/人工 per-module 重命名 (覆盖优先, 因为是针对该模块的精确命名)
  if (extraRenames) for (const [local, name] of Object.entries(extraRenames)) renames[local] = name;
  if (structural) code = await wakaru(code);
  let ast;
  try {
    ast = parse(code, {
      sourceType: "script",
      allowReturnOutsideFunction: true,
      allowSuperOutsideMethod: true,
      allowAwaitOutsideFunction: true,
      errorRecovery: true,
      plugins: ["jsx"],
    });
  } catch (e) {
    return { code: code, renamed: 0, ok: false, note: "parse-failed: " + e.message };
  }
  // 先解开 __esm/__commonJS 包裹: 让导出 local 上升到 Program 作用域, 提升重命名命中率
  try { unwrapEsm(ast); } catch { /* keep wrapped */ }

  // 参数 + 局部变量名恢复 (在改函数名之前: 函数名仍是 minified, 与键一致)
  if (scopedRenames) { try { applyScopedRenames(ast, scopedRenames); } catch {} }

  // 模块内作用域重命名 (导出 local -> 原始导出名)
  let renamed = 0;
  try {
    traverse(ast, {
      Program(path) {
        for (const [oldN, newN] of Object.entries(renames)) {
          if (RESERVED.has(newN)) continue;
          const b = path.scope.getBinding(oldN);
          if (b && !path.scope.getBinding(newN)) {
            path.scope.rename(oldN, newN);
            renamed++;
          }
        }
        path.stop();
      },
    });
  } catch { /* 重命名失败不致命 */ }

  // 折叠 _t(target,{k:()=>v,...}) 导出表为一行注释 (重命名后多为 identity 噪声)
  try { simplifyExports(ast); } catch { /* keep as-is */ }

  // 清理因折叠导出表而变成死代码的空导出对象 `var X = {}` (仅在零引用时删除)
  try { removeDeadExportObjects(ast); } catch { /* keep as-is */ }

  let out;
  try {
    out = generate(ast, { comments: true, retainLines: false, compact: false, concise: false }).code;
  } catch (e) {
    return { code, renamed, ok: false, note: "generate-failed: " + e.message };
  }
  if (pretty) {
    try {
      out = await prettier.format(out, { parser: "babel", printWidth: 100, semi: true });
    } catch { /* prettier 失败用 babel 输出 */ }
  }
  return { code: out, renamed, ok: true };
}

function header(meta) {
  const lines = [
    "// ─────────────────────────────────────────────────────────────────────────",
    `// restored from claude-code 2.1.195 (deminified) — module ${meta.mod}`,
  ];
  if (meta.match) {
    lines.push(`// matched 2.1.88 source: ${meta.match.path}`);
    lines.push(`// class=${meta.cls}  jaccard=${meta.match.jaccard}  score=${meta.match.score}  fileCov=${meta.match.fileCov}`);
  } else {
    lines.push(`// class=${meta.cls}  (no 2.1.88 match)`);
  }
  if (meta.exports) lines.push(`// exports: ${meta.exports}`);
  if (meta.note) lines.push(`// note: ${meta.note}`);
  lines.push("// ─────────────────────────────────────────────────────────────────────────", "");
  return lines.join("\n");
}

function writeOut(rel, content) {
  const full = join(OUT, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
}

// ── 1) 选定每个目标路径的主模块 (jaccard 最高), 解决冲突 ───────────────────

function targetFor(name, m) {
  const match = m.match;
  if (m.vendor) {
    return match ? "vendor/" + match.path : null; // 仅 matched vendor 给 2.1.88 路径
  }
  if ((m.class === "unchanged" || m.class === "modified") && match && match.app) {
    return "src/" + match.path.replace(/^src\//, "");
  }
  return null; // partial/new/unmatched-vendor 单独处理
}

const byTarget = new Map(); // targetRel -> [{name,m}]
const standalone = []; // partial / new
for (const [name, m] of entries) {
  const t = targetFor(name, m);
  if (t) {
    if (!byTarget.has(t)) byTarget.set(t, []);
    byTarget.get(t).push({ name, m });
  } else {
    standalone.push({ name, m });
  }
}

// ── 2) 写 matched 模块 ──────────────────────────────────────────────────────

const outManifest = { generatedAt: new Date().toISOString(), files: [] };
let nUnchanged = 0, nModified = 0, nVendor = 0, nPartial = 0, nNew = 0, nParseFail = 0, nRenamed = 0;
let processed = 0;

for (const [target, list] of byTarget) {
  list.sort((a, b) => (b.m.match.jaccard - a.m.match.jaccard));
  for (let k = 0; k < list.length; k++) {
    const { name, m } = list[k];
    // 同路径多模块: 主模块用原路径, 其余加后缀
    let rel = target;
    if (k > 0) {
      rel = target.replace(/(\.[^./]+)$/, `__m${k}$1`);
    }
    const modFile = join(MOD_DIR, m.file);
    let content = existsSync(modFile) ? readFileSync(modFile, "utf-8") : "";
    const exportsList = (m.nExports ? "" : ""); // exports in manifest separately; keep brief

    if (m.class === "unchanged" && k === 0 && m.match && existsSync(join(REF_ROOT, m.match.path))) {
      // 采用 2.1.88 原文 (真实命名+注释)
      const orig = readFileSync(join(REF_ROOT, m.match.path), "utf-8");
      const h = header({ mod: name, match: m.match, cls: "unchanged (adopted 2.1.88 original)", note: "code ~unchanged across versions; using 2.1.88 source verbatim" });
      writeOut(rel, h + orig);
      m.vendor ? nVendor++ : nUnchanged++;
    } else {
      const pretty = !m.vendor; // app 文件用 prettier, vendor 用 babel 输出
      const r = await deobfuscate(content, { pretty, structural: !m.vendor, extraRenames: mergedRenames(name), scopedRenames: scopedRenamesFor(name) });
      if (!r.ok) nParseFail++;
      nRenamed += r.renamed;
      const clsLabel = m.vendor ? "vendor" : m.class;
      const h = header({ mod: name, match: m.match, cls: clsLabel + (k>0?` (alt of ${target})`:""), note: r.ok ? `deminified; ${r.renamed} identifiers renamed (exports/displayName/curated)` : r.note });
      writeOut(rel, h + r.code);
      if (m.vendor) nVendor++;
      else if (m.class === "unchanged") nUnchanged++;
      else nModified++;
    }
    if (++processed % 500 === 0) console.log(`[06] processed ${processed} matched...`);
    outManifest.files.push({ module: name, out: rel, class: m.class, vendor: m.vendor, match: m.match });
  }
}

// ── 2.5) 依赖图推断目录: 给 partial/new 模块按"已匹配邻居"的多数票归类 ────────
const graph = JSON.parse(readFileSync(join(MOD_DIR, "graph.json"), "utf-8")).modules;
function topSeg(p) {
  const s = p.replace(/^src\//, "").split("/");
  return s.length > 1 ? s[0] : "_root";
}
// 已匹配 app 模块 -> 顶层目录
const nameToDir = {};
for (const [name, m] of entries) {
  if ((m.class === "unchanged" || m.class === "modified") && m.match && m.match.app && !m.vendor) {
    nameToDir[name] = topSeg(m.match.path);
  }
}
// 反向依赖
const rdeps = Object.create(null);
for (const n in graph) for (const d of (graph[n].deps || [])) (rdeps[d] || (rdeps[d] = [])).push(n);
// 两轮 flood-fill 推断
const inferred = {};
function voteDir(name, useInferred) {
  const nbs = new Set([...(graph[name]?.deps || []), ...(rdeps[name] || [])]);
  const votes = {};
  for (const nb of nbs) {
    const d = nameToDir[nb] || (useInferred ? inferred[nb] : null);
    if (d) votes[d] = (votes[d] || 0) + 1;
  }
  let best = null, bn = 0;
  for (const d in votes) if (votes[d] > bn) { bn = votes[d]; best = d; }
  return best;
}
const standaloneSet = new Set(standalone.filter((x) => !x.m.vendor).map((x) => x.name));
for (let pass = 0; pass < 2; pass++) {
  for (const name of standaloneSet) {
    const d = voteDir(name, pass > 0);
    if (d) inferred[name] = d;
  }
}
let nInferred = 0;
for (const n of standaloneSet) if (inferred[n]) nInferred++;
console.log(`[06] inferred directory for ${nInferred}/${standaloneSet.size} unmatched(app) modules via dep-graph`);

// ── 3) 写 partial / new / unmatched-vendor ─────────────────────────────────

for (const { name, m } of standalone) {
  const modFile = join(MOD_DIR, m.file);
  if (!existsSync(modFile)) continue;
  const content = readFileSync(modFile, "utf-8");
  const base = m.file.replace(/^\d+_?/, "").replace(/\.js$/, "") || "module";
  const idBase = m.file.replace(/\.js$/, "");
  let dir, note, cls;
  const inf = inferred[name];
  const sub = inf ? "/" + inf : "/_unknown";
  const vendorPkg = VENDOR_OVERRIDES[name];
  if (m.vendor) { dir = "vendor/_unmatched"; cls = "vendor"; note = m.match ? `nearest: ${m.match.path}` : ""; nVendor++; }
  else if (vendorPkg) { dir = "vendor/" + vendorPkg; cls = "vendor"; note = `identified by fingerprint: ${vendorPkg}`; nVendor++; }
  else if (m.class === "partial") { dir = "partial" + sub; cls = "partial"; note = m.match ? `low-confidence suggestion: ${m.match.path}` : ""; nPartial++; }
  else { dir = "unmatched" + sub; cls = "new"; note = m.match ? `nearest: ${m.match.path} (${m.match.jaccard})` : ""; nNew++; }
  if (inf && cls === "new") note = (note ? note + "; " : "") + `dir inferred from dep-graph -> ${inf}`;

  const r = await deobfuscate(content, { pretty: false, structural: !m.vendor, extraRenames: mergedRenames(name), scopedRenames: scopedRenamesFor(name) });
  if (!r.ok) nParseFail++;
  nRenamed += r.renamed;
  const rel = `${dir}/${idBase}.js`;
  // 指纹识别的 vendor: 抑制误导性的低置信"2.1.88 匹配"行 (其 nearest 并非真匹配)
  const headerMatch = (cls === "vendor" && vendorPkg && (!m.match || m.match.jaccard < 0.25)) ? null : m.match;
  const h = header({ mod: name, match: headerMatch, cls, note: (note ? note + "; " : "") + (r.ok ? `${r.renamed} renamed` : r.note) });
  writeOut(rel, h + r.code);
  if (++processed % 500 === 0) console.log(`[06] processed ${processed} total...`);
  outManifest.files.push({ module: name, out: rel, class: m.class, vendor: m.vendor, match: m.match });
}

writeOut("restore-manifest.json", JSON.stringify(outManifest, null, 0));

console.log(`\n[06] === restore summary ===`);
console.log(`  unchanged(adopted): ${nUnchanged}`);
console.log(`  modified(deminified): ${nModified}`);
console.log(`  partial: ${nPartial}`);
console.log(`  new(unmatched): ${nNew}`);
console.log(`  vendor: ${nVendor}`);
console.log(`  parse failures: ${nParseFail}`);
console.log(`  identifiers renamed (total): ${nRenamed}`);
console.log(`  total files written: ${outManifest.files.length}`);
console.log(`[06] output: ${OUT}/`);
