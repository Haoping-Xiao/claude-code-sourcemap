// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bxr
// matched 2.1.88 source: node_modules/axios/lib/defaults/index.js
// class=new  jaccard=0.0453  score=0.7282  fileCov=0.0461
// note: nearest: node_modules/axios/lib/defaults/index.js (0.0453); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bxr = E(() => {
  XH();
  Pdn = _bu;
});
function bbu(e, t, n) {
  if (or.isString(e)) try {
    return (t || JSON.parse)(e), or.trim(e);
  } catch (r) {
    if (r.name !== "SyntaxError") throw r;
  }
  return (n || JSON.stringify)(e);
}
var bZe = (e, t) => e != null && or.hasOwnProp(e, t) ? e[t] : void 0,
  Sxr,
  SZe;