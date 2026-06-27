// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hNo
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.022  score=0.514  fileCov=0.0225
// note: nearest: node_modules/react/cjs/react.production.js (0.022); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hNo = E(() => {
  cne();
  jh();
  dn();
  er();
  m0();
  hEt = R(rt(), 1);
});
function D1l(e) {
  let t = R1l.c(3),
    {
      children: n
    } = e,
    r = yEt.useRef(null),
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) o = {
    setHandler: a => {
      r.current = a;
    },
    tryDelete: a => r.current?.(a) ?? false
  }, t[0] = o;else o = t[0];
  let s = o,
    i;
  if (t[1] !== n) i = P1l.jsx(L1l.Provider, {
    value: s,
    children: n
  }), t[1] = n, t[2] = i;else i = t[2];
  return i;
}
function nnr() {
  return yEt.useContext(L1l);
}
var R1l, yEt, P1l, L1l;