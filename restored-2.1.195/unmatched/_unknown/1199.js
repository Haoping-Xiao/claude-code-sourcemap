// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZNr
// matched 2.1.88 source: node_modules/@smithy/signature-v4/dist-cjs/index.js
// class=new  jaccard=0.0556  score=1  fileCov=0.0556
// note: nearest: node_modules/@smithy/signature-v4/dist-cjs/index.js (0.0556); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZNr = E(() => {
  k8s = {}, QNr = {};
  for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase();
    if (t.length === 1) t = `0${t}`;
    k8s[e] = t, QNr[t] = e;
  }
});
class fnt {
  bytes;
  constructor(e) {
    if (this.bytes = e, e.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(e) {
    if (e > 9223372036854776000 || e < -9223372036854776000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
    let t = new Uint8Array(8);
    for (let n = 7, r = Math.abs(Math.round(e)); n > -1 && r > 0; n--, r /= 256) t[n] = r;
    if (e < 0) L8s(t);
    return new fnt(t);
  }
  valueOf() {
    let e = this.bytes.slice(0),
      t = e[0] & 128;
    if (t) L8s(e);
    return parseInt(IIe(e), 16) * (t ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function L8s(e) {
  for (let t = 0; t < 8; t++) e[t] ^= 255;
  for (let t = 7; t > -1; t--) if (e[t]++, e[t] !== 0) break;
}