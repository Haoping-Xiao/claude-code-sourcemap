// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tkn
// matched 2.1.88 source: src/utils/worktree.ts
// class=modified (alt of src/utils/worktree.ts)  jaccard=0.0141  score=0.2317  fileCov=0.0147
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Tkn]
((UOi = require("path")),
  (gOd = new Set([
    ".git",
    "hooks",
    ".husky",
    ".githooks",
    "node_modules",
    ".vscode",
    ".idea",
    "head",
    "config",
    "objects",
    "refs",
    ".claude",
    "skills",
    "commands",
    "agents",
    ".cargo",
    ".devcontainer",
    ".yarn",
    ".mvn",
  ])));
function yOd(e) {
  return FOi.randomBytes(4).readUInt32BE(0) % e;
}
function pNt(e) {
  return e[yOd(e.length)];
}
function vkn() {
  let e = pNt(jOi),
    t = pNt(hOd),
    n = pNt(GOi);
  return `${e}-${t}-${n}`;
}
function Yzr(e, t = {}) {
  let { words: n = 4, maxLen: r = 40 } = t;
  return e
    .replace(_Od, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, n)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, r)
    .replace(/^-+|-+$/g, "");
}
function $st() {
  let e = pNt(jOi),
    t = pNt(GOi);
  return `${e}-${t}`;
}
var FOi, jOi, GOi, hOd, _Od;
