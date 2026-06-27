#!/usr/bin/env node
// 构建 2.1.88 参照指纹索引: 对 restored-src 下每个文件提取字符串字面量集合,
// 用于把 2.1.195 的每个模块匹配回对应的 2.1.88 原始文件。
//
// 用法: node tools/04-build-ref-index.mjs [restored-src-dir] [out.json]

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";
import { fingerprintTokens } from "./lib/strings.mjs";

const ROOT = process.argv[2] || "restored-src";
const OUT = process.argv[3] || "work/2.1.195/ref-2.1.88.index.json";
const MIN_LEN = 6;

const exts = new Set([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"]);

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) {
      walk(p, acc);
    } else {
      const dot = name.lastIndexOf(".");
      const ext = dot >= 0 ? name.slice(dot) : "";
      if (exts.has(ext)) acc.push(p);
    }
  }
  return acc;
}

console.log(`[04] scanning ${ROOT} ...`);
const files = walk(ROOT);
console.log(`[04] ${files.length} source files`);

const byFile = {}; // relpath -> { strings: [...], n, app: bool }
const df = Object.create(null); // string -> document frequency

let done = 0;
for (const f of files) {
  let code;
  try { code = readFileSync(f, "utf-8"); } catch { continue; }
  const set = fingerprintTokens(code, { strMinLen: MIN_LEN, propMinLen: 5 });
  if (set.size === 0) continue;
  const rel = relative(ROOT, f);
  const isApp = rel.startsWith("src/") || rel.startsWith("src\\");
  const arr = [...set];
  byFile[rel] = { strings: arr, n: arr.length, app: isApp };
  for (const s of set) df[s] = (df[s] || 0) + 1;
  if (++done % 500 === 0) console.log(`[04] indexed ${done}/${files.length}`);
}

const N = Object.keys(byFile).length;
console.log(`[04] indexed ${N} files with strings; vocab=${Object.keys(df).length}`);

writeFileSync(OUT, JSON.stringify({ meta: { root: ROOT, N, minLen: MIN_LEN }, df, byFile }));
console.log(`[04] wrote ${OUT}`);
