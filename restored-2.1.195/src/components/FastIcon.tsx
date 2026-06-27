// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Isr
// matched 2.1.88 source: src/components/FastIcon.tsx
// class=modified  jaccard=0.3435  score=1  fileCov=0.3435
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Isr = E(() => {
  Un();
});
function Bzl(e) {
  let t = Nzl.c(2),
    { cooldown: n } = e;
  if (n) {
    let o;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((o = Fjo.jsx(w, {
        color: "promptBorder",
        dimColor: !0,
        children: gCe,
      })),
        (t[0] = o));
    else o = t[0];
    return o;
  }
  let r;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((r = Fjo.jsx(w, {
      color: "fastMode",
      children: gCe,
    })),
      (t[1] = r));
  else r = t[1];
  return r;
}
function x1e(e = !0, t = !1) {
  if (!e) return gCe;
  let n = mW(wc("theme", "dark").value);
  if (t) return wt.dim(Io("promptBorder", n)(gCe));
  return Io("fastMode", n)(gCe);
}
var Nzl, Fjo;
