// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pfe
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.005  score=0.2747  fileCov=0.005
// note: nearest: src/components/Settings/Config.tsx (0.005); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pfe] deps: Xa, $Ge, Ye, wr, _Ge, n$l
S1o = R(rt(), 1), g3 = R(se(), 1);
function V$() {
  return wc("editorMode", "normal").value === "vim";
}
function r$l() {
  if (Oe.terminal, eZr()) return "shift + \u23CE for newline";
  return tZr() ? "\\\u23CE for newline" : "backslash (\\) + return (\u23CE) for newline";
}
function o$l(e, t) {
  if (t.ctrl || t.meta) return false;
  if (sLf.has(e)) return false;
  return e.length > 0 && !/^\s/.test(e);
}
function s$l(e) {
  return e.length > 0 && ".,?!:;)]".includes(e.charAt(0));
}
var sLf;