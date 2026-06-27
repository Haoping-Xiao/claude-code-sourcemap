// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tzi
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0318  score=0.6938  fileCov=0.0323
// note: nearest: node_modules/react/cjs/react.production.js (0.0318); dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tzi] deps: Mce, AW, Ye, uo
Q6i = R(lt(), 1), Z6i = require("url"), $Ut = R(se(), 1);
function Tn(e) {
  let t = nzi.c(5),
    {
      children: n
    } = e,
    r,
    o;
  if (t[0] !== n) {
    o = Symbol.for("react.early_return_sentinel");
    e: {
      let i = HPn.Children.toArray(n).filter(vzd);
      if (i.length === 0) {
        o = null;
        break e;
      }
      r = i.map(Tzd);
    }
    t[0] = n, t[1] = r, t[2] = o;
  } else r = t[1], o = t[2];
  if (o !== Symbol.for("react.early_return_sentinel")) return o;
  let s;
  if (t[3] !== r) s = BGe.jsx(BGe.Fragment, {
    children: r
  }), t[3] = r, t[4] = s;else s = t[4];
  return s;
}
function Tzd(e, t) {
  return BGe.jsxs(rzi.Fragment, {
    children: [t > 0 && BGe.jsx(w, {
      dimColor: true,
      children: " \xB7 "
    }), e]
  }, HPn.isValidElement(e) ? e.key ?? t : t);
}
function vzd(e) {
  return e !== "";
}
var nzi, rzi, HPn, BGe;