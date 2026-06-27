// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Udo
// matched 2.1.88 source: src/utils/codeIndexing.ts
// class=modified  jaccard=0.7833  score=0.9897  fileCov=0.7897
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Udo]
((Bdo = {
  src: "sourcegraph",
  cody: "cody",
  aider: "aider",
  tabby: "tabby",
  tabnine: "tabnine",
  augment: "augment",
  pieces: "pieces",
  qodo: "qodo",
  aide: "aide",
  hound: "hound",
  seagoat: "seagoat",
  bloop: "bloop",
  gitloop: "gitloop",
  q: "amazon-q",
  gemini: "gemini",
}),
  (Rvp = [
    {
      pattern: /^sourcegraph$/i,
      tool: "sourcegraph",
    },
    {
      pattern: /^cody$/i,
      tool: "cody",
    },
    {
      pattern: /^openctx$/i,
      tool: "openctx",
    },
    {
      pattern: /^aider$/i,
      tool: "aider",
    },
    {
      pattern: /^continue$/i,
      tool: "continue",
    },
    {
      pattern: /^github[-_]?copilot$/i,
      tool: "github-copilot",
    },
    {
      pattern: /^copilot$/i,
      tool: "github-copilot",
    },
    {
      pattern: /^cursor$/i,
      tool: "cursor",
    },
    {
      pattern: /^tabby$/i,
      tool: "tabby",
    },
    {
      pattern: /^codeium$/i,
      tool: "codeium",
    },
    {
      pattern: /^tabnine$/i,
      tool: "tabnine",
    },
    {
      pattern: /^augment[-_]?code$/i,
      tool: "augment",
    },
    {
      pattern: /^augment$/i,
      tool: "augment",
    },
    {
      pattern: /^windsurf$/i,
      tool: "windsurf",
    },
    {
      pattern: /^aide$/i,
      tool: "aide",
    },
    {
      pattern: /^codestory$/i,
      tool: "aide",
    },
    {
      pattern: /^pieces$/i,
      tool: "pieces",
    },
    {
      pattern: /^qodo$/i,
      tool: "qodo",
    },
    {
      pattern: /^amazon[-_]?q$/i,
      tool: "amazon-q",
    },
    {
      pattern: /^gemini[-_]?code[-_]?assist$/i,
      tool: "gemini",
    },
    {
      pattern: /^gemini$/i,
      tool: "gemini",
    },
    {
      pattern: /^hound$/i,
      tool: "hound",
    },
    {
      pattern: /^seagoat$/i,
      tool: "seagoat",
    },
    {
      pattern: /^bloop$/i,
      tool: "bloop",
    },
    {
      pattern: /^gitloop$/i,
      tool: "gitloop",
    },
    {
      pattern: /^claude[-_]?context$/i,
      tool: "claude-context",
    },
    {
      pattern: /^code[-_]?index[-_]?mcp$/i,
      tool: "code-index-mcp",
    },
    {
      pattern: /^code[-_]?index$/i,
      tool: "code-index-mcp",
    },
    {
      pattern: /^local[-_]?code[-_]?search$/i,
      tool: "local-code-search",
    },
    {
      pattern: /^codebase$/i,
      tool: "autodev-codebase",
    },
    {
      pattern: /^autodev[-_]?codebase$/i,
      tool: "autodev-codebase",
    },
    {
      pattern: /^code[-_]?context$/i,
      tool: "claude-context",
    },
  ]));
function Lvp(e, t, n) {
  var r = -1,
    o = e.length;
  if (t < 0) t = -t > o ? 0 : o + t;
  if (((n = n > o ? o : n), n < 0)) n += o;
  ((o = t > n ? 0 : (n - t) >>> 0), (t >>>= 0));
  var s = Array(o);
  while (++r < o) s[r] = e[r + t];
  return s;
}
var rFn;
