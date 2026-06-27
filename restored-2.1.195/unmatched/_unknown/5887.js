// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xmr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xmr = E(() => {
  jXo();
  rB();
  iie();
});
async function Jmr(e, t, n, r, o = new Uint8Array(0), s = new Uint8Array(0)) {
  if (!OC(e)) throw TypeError(_w(e, ...Z_));
  if (dV(e, "ECDH"), !OC(t)) throw TypeError(_w(t, ...Z_));
  dV(t, "ECDH", "deriveBits");
  let i = oB(Umr(IS.encode(n)), Umr(o), Umr(s), Bmr(r)),
    a;
  if (e.algorithm.name === "X25519") a = 256;else if (e.algorithm.name === "X448") a = 448;else a = Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  let l = new Uint8Array(await Ru.subtle.deriveBits({
    name: e.algorithm.name,
    public: e
  }, t, a));
  return e2c(l, r, i);
}
async function p2c(e) {
  if (!OC(e)) throw TypeError(_w(e, ...Z_));
  return Ru.subtle.generateKey(e.algorithm, true, ["deriveBits"]);
}
function Qmr(e) {
  if (!OC(e)) throw TypeError(_w(e, ...Z_));
  return ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve) || e.algorithm.name === "X25519" || e.algorithm.name === "X448";
}