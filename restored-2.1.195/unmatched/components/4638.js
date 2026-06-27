// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pfe
// matched 2.1.88 source: src/utils/config.ts
// class=new  jaccard=0.0125  score=0.2586  fileCov=0.013
// note: nearest: src/utils/config.ts (0.0125); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Pfe = E(() => {
  Xa();
  $Ge();
  Ye();
  wr();
  _Ge();
  n$l();
  S1o = R(rt(), 1), g3 = R(se(), 1);
});
function V$() {
  return wc("editorMode", "normal").value === "vim";
}
function r$l() {
  if (Oe.terminal, eZr()) return "shift + \u23CE for newline";
  return tZr() ? "\\\u23CE for newline" : "backslash (\\) + return (\u23CE) for newline";
}
function o$l(e, t) {
  if (t.ctrl || t.meta) return !1;
  if (sLf.has(e)) return !1;
  return e.length > 0 && !/^\s/.test(e);
}
function s$l(e) {
  return e.length > 0 && ".,?!:;)]".includes(e.charAt(0));
}
var sLf;