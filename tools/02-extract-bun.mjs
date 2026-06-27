#!/usr/bin/env node
// 从 bun --compile 二进制中提取内嵌的 minified JS 模块。
//
// 原理: Bun standalone 把每个模块的源码以明文存进数据段, 每个模块以
//   `// @bun ...` banner 开头, 以 NUL 字节结尾。
// 该方法对 bun 模块表(struct)的版本差异更鲁棒 (bun-demincer 的 extract.mjs
// 对本版本的模块表解析会错位)。
//
// 用法: node tools/02-extract-bun.mjs <claude-binary> <out-dir>

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const binPath = process.argv[2];
const outDir = process.argv[3] || "dist/2.1.195";
if (!binPath) {
  console.error("Usage: node 02-extract-bun.mjs <claude-binary> <out-dir>");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

const buf = readFileSync(binPath);
console.log(`[02] binary size: ${(buf.length / 1024 / 1024).toFixed(1)} MB`);

// 找到所有 `// @bun` banner 的偏移
const banner = Buffer.from("// @bun");
const nul = 0x00;
const hits = [];
let idx = 0;
while ((idx = buf.indexOf(banner, idx)) !== -1) {
  hits.push(idx);
  idx += banner.length;
}
console.log(`[02] found ${hits.length} '// @bun' banners`);

// 提取每个 banner 模块 (banner -> 下一个 NUL)
const modules = [];
for (const start of hits) {
  let end = buf.indexOf(nul, start);
  if (end === -1) end = buf.length;
  const text = buf.slice(start, end);
  // 只保留能 utf-8 解码且像 JS 的模块
  let s;
  try {
    s = text.toString("utf-8");
  } catch {
    continue;
  }
  modules.push({ start, end, len: end - start, text: s });
}

// 按长度排序, 最大的就是应用主 bundle (cli.js, ~17.9MB)
modules.sort((a, b) => b.len - a.len);
console.log(`[02] decoded module sizes (top 6):`);
for (const m of modules.slice(0, 6)) {
  const head = m.text.slice(0, 90).replace(/\n/g, "\\n");
  console.log(`     off=${m.start} len=${m.len}  ${head}`);
}

const main = modules[0];
if (!main || main.len < 1_000_000) {
  console.error("[02] ERROR: main bundle not found / too small");
  process.exit(1);
}

writeFileSync(join(outDir, "cli.js"), main.text, "utf-8");
console.log(`[02] wrote ${join(outDir, "cli.js")} (${main.len} bytes)`);

// 其它应用 CJS 模块 (如 image-processor.js 等小型 helper)
let helperN = 0;
for (const m of modules.slice(1)) {
  if (!m.text.startsWith("// @bun @bytecode @bun-cjs")) continue;
  if (m.len < 200) continue;
  const name = m.text.includes("image-processor")
    ? "image-processor.js"
    : `helper-${++helperN}.js`;
  writeFileSync(join(outDir, name), m.text, "utf-8");
  console.log(`[02] wrote ${name} (${m.len} bytes)`);
}

// 校验: 版本号
const verMatch = main.text.match(/Version:\s*([0-9]+\.[0-9]+\.[0-9]+)/) ||
  main.text.match(/"([0-9]+\.[0-9]+\.[0-9]+)"/);
console.log(`[02] embedded version hint: ${verMatch ? verMatch[1] : "(not found)"}`);
console.log("[02] done.");
