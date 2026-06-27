// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eAl
// matched 2.1.88 source: src/commands/insights.ts
// class=new  jaccard=0.0026  score=0.1908  fileCov=0.0026
// note: nearest: src/commands/insights.ts (0.0026); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: ArtifactTool
// [unwrapped __esm module eAl]
WRo = new Map(), qRo = new Map();
var sAl = {};
function JRo(e) {
  return nHe ? nHe.mcpFromGatedInput(e) : void 0;
}
function XRo(e) {
  return nHe ? nHe.frameMcpSummary(JRo(e)) : "";
}
function rAl(e, t) {
  if (e?.title === void 0) return;
  if (t === void 0) return e.title;
  let n = Oue(t);
  return n !== null && Oue(e.url) === n ? e.title : void 0;
}
async function oAl(e) {
  let t = await pY(e);
  if (t) return `File not found: ${e}. Did you mean ${t}?`;
  let n = lCe(e),
    r = n && O$e.extname(n).toLowerCase();
  if (r === ".html" || r === ".htm" || r === ".md") return `File not found: ${e}. Did you mean ${n}?`;
  return `File not found: ${e}. Create the file first (Write tool, or via shell if Write is unavailable), then retry with the same path.`;
}
var sze,
  O$e,
  tHe,
  nHe = null,
  tAl,
  nAl,
  Nyf,
  ArtifactTool;