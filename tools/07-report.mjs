#!/usr/bin/env node
// 覆盖率报告 + 抽样验证。
//  1) 统计匹配/还原各类别占比 (整体 & 仅 app)。
//  2) 验证匹配可靠性: 对随机若干 unchanged/modified, 用"仅属于该 2.1.88 文件的
//     独有字符串(df==1)"是否出现在 2.1.195 模块中, 作为匹配正确性的硬证据。
//  3) 抽样解析还原后的 src 文件, 统计语法可解析率。
//
// 用法: node tools/07-report.mjs

import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { parse } from "@babel/parser";
import { fingerprintSet } from "./lib/strings.mjs";

const report = JSON.parse(readFileSync("work/2.1.195/match-report.json", "utf-8"));
const ref = JSON.parse(readFileSync("work/2.1.195/ref-2.1.88.index.json", "utf-8"));
const restoreManifest = JSON.parse(readFileSync("restored-2.1.195/restore-manifest.json", "utf-8"));
const MOD_DIR = "work/2.1.195/modules";
const entries = Object.entries(report.report);

// ── 1) 覆盖率统计 ───────────────────────────────────────────────────────────
const all = {}, app = {};
for (const [, m] of entries) {
  all[m.class] = (all[m.class] || 0) + 1;
  if (m.match && m.match.app && !m.vendor) app[m.class] = (app[m.class] || 0) + 1;
}
const coveredFiles = new Set();
for (const [, m] of entries) if ((m.class === "unchanged" || m.class === "modified") && m.match && m.match.app) coveredFiles.add(m.match.path);
const refAppFiles = Object.keys(ref.byFile).filter((p) => ref.byFile[p].app).length;

console.log("=== 覆盖率 ===");
console.log("模块总数:", entries.length);
console.log("整体分类:", JSON.stringify(all));
console.log("app 分类 :", JSON.stringify(app));
console.log(`匹配到的 2.1.88 app 文件: ${coveredFiles.size} / ${refAppFiles} (${(coveredFiles.size/refAppFiles*100).toFixed(1)}%)`);

// ── 2) 匹配可靠性硬验证 (df==1 独有字符串) ──────────────────────────────────
// 构造 df 表已在 ref.df 中
const df = ref.df;
function uniqueStringsOf(path) {
  const e = ref.byFile[path];
  if (!e) return [];
  return e.strings.filter((s) => df[s] === 1);
}
const candidates = entries.filter(([, m]) => (m.class === "unchanged" || m.class === "modified") && m.match && m.match.app);
// 取 jaccard 较高的样本
candidates.sort((a, b) => b[1].match.jaccard - a[1].match.jaccard);
const sample = [];
for (let i = 0; i < candidates.length && sample.length < 12; i += Math.max(1, Math.floor(candidates.length / 12))) sample.push(candidates[i]);

console.log("\n=== 匹配可靠性验证 (独有字符串命中) ===");
let verified = 0;
for (const [name, m] of sample) {
  const uniq = uniqueStringsOf(m.match.path);
  if (uniq.length === 0) { console.log(`  ${m.match.path}: (无独有字符串, 跳过)`); continue; }
  const content = readFileSync(join(MOD_DIR, m.file), "utf-8");
  const modSet = fingerprintSet(content, 6);
  const hit = uniq.filter((s) => modSet.has(s));
  const ok = hit.length > 0;
  if (ok) verified++;
  const ex = hit[0] ? JSON.stringify(hit[0].slice(0, 48)) : "-";
  console.log(`  [${ok ? "OK" : "??"}] ${m.match.path}  独有命中 ${hit.length}/${uniq.length}  e.g. ${ex}`);
}
console.log(`独有字符串验证通过: ${verified}/${sample.length}`);

// ── 3) 还原 src 文件语法可解析率 (抽样) ─────────────────────────────────────
const srcFiles = restoreManifest.files.filter((f) => f.out.startsWith("src/"));
const step = Math.max(1, Math.floor(srcFiles.length / 200));
let parsed = 0, failed = 0;
const fails = [];
for (let i = 0; i < srcFiles.length; i += step) {
  const f = srcFiles[i];
  const p = join("restored-2.1.195", f.out);
  if (!existsSync(p)) continue;
  const code = readFileSync(p, "utf-8");
  try {
    parse(code, { sourceType: "module", errorRecovery: false, plugins: ["typescript", "jsx"] });
    parsed++;
  } catch (e) {
    failed++;
    if (fails.length < 5) fails.push(`${f.out}: ${e.message.split("\n")[0]}`);
  }
}
console.log("\n=== 还原 src 语法可解析率 (抽样) ===");
console.log(`parsed=${parsed} failed=${failed} (${(parsed/(parsed+failed)*100).toFixed(1)}%)`);
for (const x of fails) console.log("  fail:", x);

console.log("\n[07] done.");
