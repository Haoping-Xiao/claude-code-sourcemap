#!/usr/bin/env node
// 把 2.1.195 的每个模块匹配回 2.1.88 的原始文件 (基于 IDF 加权的字符串字面量重合)。
//
// 用法: node tools/05-match-modules.mjs [modules-dir] [ref-index.json] [out.json]

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { fingerprintSet } from "./lib/strings.mjs";

const MOD_DIR = process.argv[2] || "work/2.1.195/modules";
const REF = process.argv[3] || "work/2.1.195/ref-2.1.88.index.json";
const OUT = process.argv[4] || "work/2.1.195/match-report.json";
const MIN_LEN = 6;
const CAND_DF_CAP = 400; // 仅用辨识度较高的字符串生成候选

console.log(`[05] loading ref index ${REF} ...`);
const ref = JSON.parse(readFileSync(REF, "utf-8"));
const N = ref.meta.N;
const df = ref.df;

// idf
const idf = Object.create(null);
for (const s in df) idf[s] = Math.log(N / df[s]);
const IDF_UNKNOWN = Math.log(N / 0.5); // 未在参照库出现的字符串

// 文件表
const fileList = [];
for (const rel in ref.byFile) {
  const e = ref.byFile[rel];
  const set = new Set(e.strings);
  let weight = 0;
  for (const s of set) weight += idf[s] ?? IDF_UNKNOWN;
  fileList.push({ rel, app: e.app, set, weight });
}
console.log(`[05] ref files: ${fileList.length}`);

// 倒排表 (仅 df<=cap 的字符串)
const inverted = new Map();
for (let fi = 0; fi < fileList.length; fi++) {
  for (const s of fileList[fi].set) {
    if ((df[s] || 0) > CAND_DF_CAP) continue;
    let a = inverted.get(s);
    if (!a) inverted.set(s, (a = []));
    a.push(fi);
  }
}
console.log(`[05] inverted index keys: ${inverted.size}`);

// 模块清单
const manifest = JSON.parse(readFileSync(join(MOD_DIR, "manifest.json"), "utf-8"));
const mods = manifest.modules; // name -> {file, type, exports, primaryName, deps, size}
const names = Object.keys(mods);
console.log(`[05] modules: ${names.length}`);

function isVendorPath(rel) {
  return rel.includes("node_modules/") || rel.startsWith("vendor/") || rel.includes("/vendor/");
}

const report = {};
let done = 0;
let cUnchanged = 0, cModified = 0, cNew = 0, cVendor = 0, cPartial = 0;

for (const name of names) {
  const meta = mods[name];
  let content;
  try { content = readFileSync(join(MOD_DIR, meta.file), "utf-8"); } catch { continue; }
  // 去掉首行 resplit header
  content = content.replace(/^\/\/ resplit:.*\n/, "");
  const S = fingerprintSet(content, MIN_LEN);

  let moduleWeight = 0;
  for (const s of S) moduleWeight += idf[s] ?? IDF_UNKNOWN;

  // 候选
  const overlap = new Map(); // fi -> weighted overlap
  for (const s of S) {
    if ((df[s] || 0) > CAND_DF_CAP) continue;
    const arr = inverted.get(s);
    if (!arr) continue;
    const w = idf[s] ?? IDF_UNKNOWN;
    for (const fi of arr) overlap.set(fi, (overlap.get(fi) || 0) + w);
  }

  // 对候选精确计算完整重合 (含全部共享字符串, 不止 df<=cap 的)
  let best = null;
  for (const [fi, approx] of overlap) {
    const f = fileList[fi];
    let ov = 0;
    for (const s of S) if (f.set.has(s)) ov += idf[s] ?? IDF_UNKNOWN;
    const score = moduleWeight > 0 ? ov / moduleWeight : 0;       // 模块被该文件覆盖比例
    const fileCov = f.weight > 0 ? ov / f.weight : 0;             // 该文件被模块覆盖比例
    const jacc = (moduleWeight + f.weight - ov) > 0 ? ov / (moduleWeight + f.weight - ov) : 0;
    if (!best || score > best.score || (score === best.score && fileCov > best.fileCov)) {
      best = { rel: f.rel, app: f.app, score, fileCov, jacc };
    }
  }

  // 用 jaccard (双向重合) 作为主置信度, 避免"小模块恰为大文件子集"造成的假匹配。
  let cls, vendor = false;
  const j = best ? best.jacc : 0;
  if (!best || j < 0.06) {
    cls = "new";
  } else if (j >= 0.80 && best.fileCov >= 0.55) {
    cls = "unchanged";
  } else if (j >= 0.25) {
    cls = "modified";
  } else {
    cls = "partial"; // 有线索但置信度低: 记录建议路径, 但不当作可靠匹配
  }
  if (best && isVendorPath(best.rel) && (cls === "unchanged" || cls === "modified")) vendor = true;

  if (vendor) cVendor++;
  else if (cls === "unchanged") cUnchanged++;
  else if (cls === "modified") cModified++;
  else if (cls === "partial") cPartial++;
  else cNew++;

  report[name] = {
    file: meta.file,
    type: meta.type,
    primaryName: meta.primaryName || null,
    nExports: (meta.exports || []).length,
    size: meta.size,
    nStrings: S.size,
    match: best ? { path: best.rel, app: best.app, score: +best.score.toFixed(4), fileCov: +best.fileCov.toFixed(4), jaccard: +best.jacc.toFixed(4) } : null,
    class: cls,
    vendor,
  };

  if (++done % 500 === 0) console.log(`[05] matched ${done}/${names.length}`);
}

writeFileSync(OUT, JSON.stringify({ meta: { modules: names.length, candDfCap: CAND_DF_CAP }, stats: { unchanged: cUnchanged, modified: cModified, partial: cPartial, new: cNew, vendor: cVendor }, report }, null, 0));
console.log(`[05] done. unchanged=${cUnchanged} modified=${cModified} partial=${cPartial} new=${cNew} vendor=${cVendor}`);
console.log(`[05] wrote ${OUT}`);
