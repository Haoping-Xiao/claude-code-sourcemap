// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PFn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PFn = E(() => {
  pJ = {
    clipboardRead: !1,
    clipboardWrite: !1,
    systemKeyCombos: !1
  };
});
function m0a(e, t) {
  return Math.floor((e - 1) / t) + 1;
}
function g0a(e, t, n) {
  return m0a(e, n) * m0a(t, n);
}
function MFn(e, t, n) {
  let {
    pxPerToken: r,
    maxTargetPx: o,
    maxTargetTokens: s
  } = n;
  if (e <= o && t <= o && g0a(e, t, r) <= s) return [e, t];
  if (t > e) {
    let [c, u] = MFn(t, e, n);
    return [u, c];
  }
  let i = e / t,
    a = e,
    l = 1;
  for (;;) {
    if (l + 1 === a) return [l, Math.max(Math.round(l / i), 1)];
    let c = Math.floor((l + a) / 2),
      u = Math.max(Math.round(c / i), 1);
    if (c <= o && g0a(c, u, r) <= s) l = c;else a = c;
  }
}
var Fpo;