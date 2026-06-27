// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h4r
// matched 2.1.88 source: node_modules/@smithy/eventstream-codec/dist-cjs/index.js
// class=partial  jaccard=0.0804  score=1  fileCov=0.0804
// note: low-confidence suggestion: node_modules/@smithy/eventstream-codec/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var h4r = E(() => {
  gui = {}, g4r = {};
  for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase();
    if (t.length === 1) t = `0${t}`;
    gui[e] = t, g4r[t] = e;
  }
});
class Srt {
  constructor(e) {
    if (this.bytes = e, e.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(e) {
    if (e > 9223372036854776000 || e < -9223372036854776000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
    let t = new Uint8Array(8);
    for (let n = 7, r = Math.abs(Math.round(e)); n > -1 && r > 0; n--, r /= 256) t[n] = r;
    if (e < 0) yui(t);
    return new Srt(t);
  }
  valueOf() {
    let e = this.bytes.slice(0),
      t = e[0] & 128;
    if (t) yui(e);
    return parseInt(uxe(e), 16) * (t ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function yui(e) {
  for (let t = 0; t < 8; t++) e[t] ^= 255;
  for (let t = 7; t > -1; t--) if (e[t]++, e[t] !== 0) break;
}