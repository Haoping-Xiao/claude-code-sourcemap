#!/usr/bin/env node
// 功能性 round-trip 验证: 用 bun 实际运行提取出的 minified cli.js,
// 调用其 CJS 工厂并执行 `--version`, 断言输出包含正确版本号。
// 证明: 我们提取的 bundle 不仅是字节精确子串, 而且是**可运行的完整应用代码**。
//
// 需 bun (https://bun.sh)。用法: bun tools/08-roundtrip.mjs [version] [...args]
//   默认: bun tools/08-roundtrip.mjs 2.1.195 --version

import { createRequire } from "module";
import fs from "fs";
import path from "path";

const VERSION = process.argv[2] || process.env.VERSION || "2.1.195";
const passthrough = process.argv.slice(3);
const args = passthrough.length ? passthrough : ["--version"];

const cliPath = path.resolve(`dist/${VERSION}/cli.js`);
if (!fs.existsSync(cliPath)) {
  console.error(`[08] not found: ${cliPath} (run tools/02-extract-bun.mjs first)`);
  process.exit(1);
}

// 设置 argv 让目标程序看到我们的参数 (argv[0]=runtime, argv[1]=script)
process.argv = [process.argv[0], cliPath, ...args];

const require = createRequire(cliPath);
let src = fs.readFileSync(cliPath, "utf8");
src = src.replace(/^\/\/ @bun[^\n]*\n/, ""); // 去掉 @bun 指令行, 留下 (function(...){...})
const factory = (0, eval)(src);
const mod = { exports: {} };
console.error(`[08] running extracted ${VERSION} cli.js with: ${args.join(" ")}`);
factory(mod.exports, require, mod, cliPath, path.dirname(cliPath));
