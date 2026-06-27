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

const MOD_DIR = "work/2.1.195/modules";
const REPORT = "work/2.1.195/match-report.json";
const REF_ROOT = "restored-src";
const OUT = "restored-2.1.195";

const report = JSON.parse(readFileSync(REPORT, "utf-8"));
const entries = Object.entries(report.report);
console.log(`[06] ${entries.length} modules`);

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
        if (arg.type === "ArrowFunctionExpression" && arg.params.length === 0 && arg.body.type === "BlockStatement") {
          const inner = arg.body.body.slice();
          const deps = [];
          while (inner.length) {
            const names = isInitCall(inner[0]);
            if (names) { deps.push(...names); inner.shift(); } else break;
          }
          const modName = d.id.type === "Identifier" ? d.id.name : "?";
          // 用注释承载 unwrap 信息, 不引入多余语句: 挂到第一条 inner 上
          if (inner.length) {
            inner[0].leadingComments = [{ type: "CommentLine", value: ` [unwrapped __esm module ${modName}]${deps.length ? " deps: " + deps.join(", ") : ""}` }, ...(inner[0].leadingComments || [])];
          }
          out.push(...inner);
          unwrapped++;
          handled = true;
        }
      }
    }
    if (!handled) out.push(stmt);
  }
  ast.program.body = out;
  return unwrapped;
}

async function deobfuscate(content, { pretty, structural = true }) {
  let code = content.replace(/^\/\/ resplit:.*\n/, "");
  const renames = extractRenames(code);
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
  // 模块内作用域重命名 (仅在 Program 作用域有绑定的导出 local)
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

  // 解开 __esm 包裹 (失败不致命)
  try { unwrapEsm(ast); } catch { /* keep wrapped */ }

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
      const r = await deobfuscate(content, { pretty, structural: !m.vendor });
      if (!r.ok) nParseFail++;
      nRenamed += r.renamed;
      const clsLabel = m.vendor ? "vendor" : m.class;
      const h = header({ mod: name, match: m.match, cls: clsLabel + (k>0?` (alt of ${target})`:""), note: r.ok ? `deminified; ${r.renamed} identifiers renamed from _t exports` : r.note });
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
  if (m.class === "partial") { dir = "partial" + sub; cls = "partial"; note = m.match ? `low-confidence suggestion: ${m.match.path}` : ""; nPartial++; }
  else if (m.vendor) { dir = "vendor/_unmatched"; cls = "vendor"; note = m.match ? `nearest: ${m.match.path}` : ""; nVendor++; }
  else { dir = "unmatched" + sub; cls = "new"; note = m.match ? `nearest: ${m.match.path} (${m.match.jaccard})` : ""; nNew++; }
  if (inf) note = (note ? note + "; " : "") + `dir inferred from dep-graph -> ${inf}`;

  const r = await deobfuscate(content, { pretty: false, structural: !m.vendor });
  if (!r.ok) nParseFail++;
  nRenamed += r.renamed;
  const rel = `${dir}/${idBase}.js`;
  const h = header({ mod: name, match: m.match, cls, note: (note ? note + "; " : "") + (r.ok ? `${r.renamed} renamed` : r.note) });
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
