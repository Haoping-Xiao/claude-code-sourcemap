// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RXo
// matched 2.1.88 source: src/utils/hash.ts
// class=partial  jaccard=0.1603  score=0.2061  fileCov=0.4188
// note: low-confidence suggestion: src/utils/hash.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RXo = E(() => {
  rB();
  $mr = rDm;
});
function oB(...e) {
  let t = e.reduce((o, {
      length: s
    }) => o + s, 0),
    n = new Uint8Array(t),
    r = 0;
  return e.forEach(o => {
    n.set(o, r), r += o.length;
  }), n;
}
function ZFc(e, t) {
  return oB(IS.encode(e), new Uint8Array([0]), t);
}
function LXo(e, t, n) {
  if (t < 0 || t >= Omr) throw RangeError(`value must be >= 0 and <= ${Omr - 1}. Received ${t}`);
  e.set([t >>> 24, t >>> 16, t >>> 8, t & 255], n);
}
function Nmr(e) {
  let t = Math.floor(e / Omr),
    n = e % Omr,
    r = new Uint8Array(8);
  return LXo(r, t, 0), LXo(r, n, 4), r;
}
function Bmr(e) {
  let t = new Uint8Array(4);
  return LXo(t, e), t;
}
function Umr(e) {
  return oB(Bmr(e.length), e);
}
async function e2c(e, t, n) {
  let r = Math.ceil((t >> 3) / 32),
    o = new Uint8Array(r * 32);
  for (let s = 0; s < r; s++) {
    let i = new Uint8Array(4 + e.length + n.length);
    i.set(Bmr(s + 1)), i.set(e, 4), i.set(n, 4 + e.length), o.set(await $mr("sha256", i), s * 32);
  }
  return o.slice(0, t >> 3);
}
var IS,
  fx,
  Omr = 4294967296;