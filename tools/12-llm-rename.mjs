#!/usr/bin/env node
// LLM 变量名还原 (humanify 式, 但用 2.1.88 原函数作参照, 准确度更高)。
// 仅负责"产出重命名建议", 实际重命名由 06-restore.mjs 走 AST 作用域安全应用。
//
// 后端 (按存在的环境变量自动选择):
//   GEMINI_API_KEY  (推荐, 免费档)  |  OPENAI_API_KEY  |  ANTHROPIC_API_KEY
//
// 产物: work/<ver>/llm-local-renames.json  (与 local-renames.json 同结构, 由 06 合并)
//   { moduleVar: { fnMinifiedName: { oldLocal: newName } } }
//
// 用法:
//   GEMINI_API_KEY=... node tools/12-llm-rename.mjs [--limit N] [--include-new] [--only <substr>]
//
// 无 key 时打印说明并退出 0 (run-all 中为可选步骤)。

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { parse } from "@babel/parser";
import _generate from "@babel/generator";
const generate = _generate.default || _generate;

const VERSION = process.env.VERSION || "2.1.195";
const MOD_DIR = process.env.MOD_DIR || `work/${VERSION}/modules`;
const REPORT = process.env.MATCH_REPORT || `work/${VERSION}/match-report.json`;
const REF_ROOT = process.env.REF_ROOT || "restored-src";
const OUT = process.env.LLM_LOCAL_RENAMES || `work/${VERSION}/llm-local-renames.json`;

const args = process.argv.slice(2);
const opt = { limit: Infinity, includeNew: false, only: null, concurrency: 4 };
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--limit") opt.limit = parseInt(args[++i], 10);
  else if (args[i] === "--include-new") opt.includeNew = true;
  else if (args[i] === "--only") opt.only = args[++i];
  else if (args[i] === "--concurrency") opt.concurrency = parseInt(args[++i], 10);
}

// ── 后端 ────────────────────────────────────────────────────────────────────
const GEMINI = process.env.GEMINI_API_KEY, OPENAI = process.env.OPENAI_API_KEY, ANTHROPIC = process.env.ANTHROPIC_API_KEY;
const backend = GEMINI ? "gemini" : OPENAI ? "openai" : ANTHROPIC ? "anthropic" : null;
if (!backend) {
  console.log("[12] 未检测到 LLM API key (GEMINI_API_KEY / OPENAI_API_KEY / ANTHROPIC_API_KEY)。");
  console.log("[12] 设置任一 key 后重跑可对全部函数(含全新模块)做 LLM 变量名还原。跳过。");
  process.exit(0);
}

async function llmJson(prompt) {
  try {
    if (backend === "gemini") {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI}`, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0, responseMimeType: "application/json" } }),
      });
      const j = await r.json();
      return j.candidates?.[0]?.content?.parts?.[0]?.text || "";
    } else if (backend === "openai") {
      const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${OPENAI}` },
        body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", temperature: 0, response_format: { type: "json_object" }, messages: [{ role: "user", content: prompt }] }),
      });
      const j = await r.json();
      return j.choices?.[0]?.message?.content || "";
    } else {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "content-type": "application/json", "x-api-key": ANTHROPIC, "anthropic-version": "2023-06-01" },
        body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || "claude-3-5-haiku-latest", max_tokens: 1024, messages: [{ role: "user", content: prompt }] }),
      });
      const j = await r.json();
      return j.content?.[0]?.text || "";
    }
  } catch (e) { return ""; }
}

function safeJson(s) {
  if (!s) return null;
  const a = s.indexOf("{"), b = s.lastIndexOf("}");
  if (a < 0 || b < 0) return null;
  try { return JSON.parse(s.slice(a, b + 1)); } catch { return null; }
}

// ── 提取每个函数的代码 + 自身作用域 minified 局部 ────────────────────────────
function parseSafe(code, ts) {
  try { return parse(code, { sourceType: ts ? "module" : "script", allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true, errorRecovery: true, plugins: ts ? ["typescript", "jsx"] : ["jsx"] }); } catch { return null; }
}
const MINI = /^[a-zA-Z_$][a-zA-Z0-9_$]{0,2}$/; // 看起来像压缩名(<=3 字符)
function functionsOf(ast) {
  const out = [];
  const stmts = [...ast.program.body];
  for (const s of ast.program.body) {
    if (s.type === "VariableDeclaration" && s.declarations[0]?.init?.type === "CallExpression") {
      const a = s.declarations[0].init.arguments[0];
      if (a && (a.type === "ArrowFunctionExpression" || a.type === "FunctionExpression") && a.body.type === "BlockStatement") stmts.push(...a.body.body);
    }
  }
  for (let st of stmts) {
    if (st.type === "ExportNamedDeclaration" && st.declaration) st = st.declaration;
    let name = null, fn = null;
    if (st.type === "FunctionDeclaration" && st.id) { name = st.id.name; fn = st; }
    else if (st.type === "VariableDeclaration" && st.declarations[0]?.id?.type === "Identifier") {
      const init = st.declarations[0].init;
      if (init && (init.type === "FunctionExpression" || init.type === "ArrowFunctionExpression")) { name = st.declarations[0].id.name; fn = init; }
    }
    if (!name || !fn) continue;
    const params = (fn.params || []).filter((p) => p.type === "Identifier" && MINI.test(p.name)).map((p) => p.name);
    out.push({ name, node: fn });
  }
  return out;
}

const report = JSON.parse(readFileSync(REPORT, "utf-8")).report;
const out = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf-8")) : {}; // 续跑

let targets = Object.entries(report).filter(([, m]) => {
  if (opt.only && !(m.match && m.match.path && m.match.path.includes(opt.only))) return false;
  if (m.match && m.match.app && (m.class === "modified" || m.class === "unchanged")) return true;
  if (opt.includeNew && m.class === "new") return true;
  return false;
});
targets = targets.slice(0, opt.limit);
console.log(`[12] backend=${backend}; ${targets.length} modules to process`);

let done = 0, renamed = 0;
for (const [modVar, m] of targets) {
  if (out[modVar]) { done++; continue; } // 已处理
  const modFile = join(MOD_DIR, m.file);
  if (!existsSync(modFile)) continue;
  const ast = parseSafe(readFileSync(modFile, "utf-8").replace(/^\/\/ resplit:.*\n/, ""), false);
  if (!ast) continue;
  const refCode = (m.match && m.match.app && existsSync(join(REF_ROOT, m.match.path))) ? readFileSync(join(REF_ROOT, m.match.path), "utf-8") : null;
  const fns = functionsOf(ast);
  const modMap = {};
  for (const f of fns) {
    let src; try { src = generate(f.node, { concise: false }).code; } catch { continue; }
    if (src.length > 6000) src = src.slice(0, 6000);
    const prompt = `You are renaming minified JavaScript identifiers. Below is a function from claude-code ${VERSION}.${refCode ? " A reference (the original TypeScript of a previous version) is also given; prefer its real names where they correspond." : ""}\nReturn ONLY a JSON object mapping short/minified local identifiers (params and locals, 1-3 chars) to clear camelCase names. Do NOT include property names, globals, or names you are unsure about.\n\n=== ${VERSION} function (minified locals) ===\n${src}\n${refCode ? "\n=== reference original source (previous version, may differ) ===\n" + refCode.slice(0, 6000) + "\n" : ""}\nJSON:`;
    const resp = await llmJson(prompt);
    const map = safeJson(resp);
    if (!map) continue;
    const clean = {};
    for (const [k, v] of Object.entries(map)) {
      if (typeof v !== "string" || !/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(v)) continue;
      if (!MINI.test(k) || k === v) continue;
      clean[k] = v;
    }
    if (Object.keys(clean).length) { modMap[f.name] = clean; renamed += Object.keys(clean).length; }
  }
  if (Object.keys(modMap).length) out[modVar] = modMap;
  if (++done % 20 === 0) { writeFileSync(OUT, JSON.stringify(out)); console.log(`[12] ${done}/${targets.length} modules, ${renamed} renames so far`); }
}
writeFileSync(OUT, JSON.stringify(out));
console.log(`[12] done. ${renamed} LLM local renames across ${Object.keys(out).length} modules -> ${OUT}`);
