#!/usr/bin/env node
// 全量语法验证: 解析 restored-<ver>/ 下所有 .js/.ts/.tsx, 报告可解析率与失败样本。
// 用法: node tools/10-validate-parse.mjs [restored-dir]

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join } from "path";
import { parse } from "@babel/parser";

const VERSION = process.env.VERSION || "2.1.195";
const ROOT = process.argv[2] || process.env.OUT_DIR || `restored-${VERSION}`;
if (!existsSync(ROOT)) { console.error(`[10] not found: ${ROOT}`); process.exit(1); }

function walk(d, a = []) {
  for (const n of readdirSync(d)) {
    const p = join(d, n); const s = statSync(p);
    if (s.isDirectory()) walk(p, a);
    else if (/\.(js|ts|tsx|mjs|cjs)$/.test(n)) a.push(p);
  }
  return a;
}

const files = walk(ROOT);
let ok = 0, fail = 0; const fails = [];
for (const f of files) {
  const code = readFileSync(f, "utf8");
  const ts = /\.(ts|tsx)$/.test(f);
  try {
    parse(code, { sourceType: "module", errorRecovery: false, plugins: ts ? ["typescript", "jsx"] : ["jsx"] });
    ok++;
  } catch (e) {
    fail++;
    if (fails.length < 30) fails.push(f + ": " + e.message.split("\n")[0]);
  }
}
console.log(`[10] ${ROOT}: total=${files.length} ok=${ok} fail=${fail} (${(ok / files.length * 100).toFixed(2)}%)`);
for (const x of fails) console.log("  FAIL", x);
process.exit(fail > 0 ? 2 : 0);
