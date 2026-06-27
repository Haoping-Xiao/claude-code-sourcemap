// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s4r
// matched 2.1.88 source: node_modules/@smithy/eventstream-codec/dist-cjs/index.js
// class=vendor  jaccard=0.2226  score=1  fileCov=0.2226
// note: identified by fingerprint: @smithy/eventstream-codec; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
class _HeaderMarshaller {
  format(e) {
    let t = [];
    for (let o of Object.keys(e)) {
      let s = cMt(o);
      t.push(Uint8Array.from([s.byteLength]), s, this.formatHeaderValue(e[o]));
    }
    let n = new Uint8Array(t.reduce((o, s) => o + s.byteLength, 0)),
      r = 0;
    for (let o of t) n.set(o, r), r += o.byteLength;
    return n;
  }
  formatHeaderValue(e) {
    switch (e.type) {
      case "boolean":
        return Uint8Array.from([e.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, e.value]);
      case "short":
        let t = new DataView(new ArrayBuffer(3));
        return t.setUint8(0, 3), t.setInt16(1, e.value, false), new Uint8Array(t.buffer);
      case "integer":
        let n = new DataView(new ArrayBuffer(5));
        return n.setUint8(0, 4), n.setInt32(1, e.value, false), new Uint8Array(n.buffer);
      case "long":
        let r = new Uint8Array(9);
        return r[0] = 5, r.set(e.value.bytes, 1), r;
      case "binary":
        let o = new DataView(new ArrayBuffer(3 + e.value.byteLength));
        o.setUint8(0, 6), o.setUint16(1, e.value.byteLength, false);
        let s = new Uint8Array(o.buffer);
        return s.set(e.value, 3), s;
      case "string":
        let i = cMt(e.value),
          a = new DataView(new ArrayBuffer(3 + i.byteLength));
        a.setUint8(0, 7), a.setUint16(1, i.byteLength, false);
        let l = new Uint8Array(a.buffer);
        return l.set(i, 3), l;
      case "timestamp":
        let c = new Uint8Array(9);
        return c[0] = 8, c.set(_Int64.fromNumber(e.value.valueOf()).bytes, 1), c;
      case "uuid":
        if (!Jfd.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
        let u = new Uint8Array(17);
        return u[0] = 9, u.set(zai(e.value.replace(/\-/g, "")), 1), u;
    }
  }
}
class _Int64 {
  constructor(e) {
    if (this.bytes = e, e.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(e) {
    if (e > 9223372036854776000 || e < -9223372036854776000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
    let t = new Uint8Array(8);
    for (let n = 7, r = Math.abs(Math.round(e)); n > -1 && r > 0; n--, r /= 256) t[n] = r;
    if (e < 0) kci(t);
    return new _Int64(t);
  }
  valueOf() {
    let e = this.bytes.slice(0),
      t = e[0] & 128;
    if (t) kci(e);
    return parseInt(gte(e), 16) * (t ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function kci(e) {
  for (let t = 0; t < 8; t++) e[t] ^= 255;
  for (let t = 7; t > -1; t--) if (e[t]++, e[t] !== 0) break;
}
var xci, Jfd;