// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y4r
// matched 2.1.88 source: node_modules/@smithy/eventstream-codec/dist-cjs/index.js
// class=partial  jaccard=0.1986  score=1  fileCov=0.1986
// note: low-confidence suggestion: node_modules/@smithy/eventstream-codec/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y4r = E(() => {
  h4r();
});
class _4r {
  constructor(e, t) {
    this.toUtf8 = e, this.fromUtf8 = t;
  }
  format(e) {
    let t = [];
    for (let o of Object.keys(e)) {
      let s = this.fromUtf8(o);
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
        return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
      case "integer":
        let n = new DataView(new ArrayBuffer(5));
        return n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer);
      case "long":
        let r = new Uint8Array(9);
        return r[0] = 5, r.set(e.value.bytes, 1), r;
      case "binary":
        let o = new DataView(new ArrayBuffer(3 + e.value.byteLength));
        o.setUint8(0, 6), o.setUint16(1, e.value.byteLength, !1);
        let s = new Uint8Array(o.buffer);
        return s.set(e.value, 3), s;
      case "string":
        let i = this.fromUtf8(e.value),
          a = new DataView(new ArrayBuffer(3 + i.byteLength));
        a.setUint8(0, 7), a.setUint16(1, i.byteLength, !1);
        let l = new Uint8Array(a.buffer);
        return l.set(i, 3), l;
      case "timestamp":
        let c = new Uint8Array(9);
        return c[0] = 8, c.set(Srt.fromNumber(e.value.valueOf()).bytes, 1), c;
      case "uuid":
        if (!wmd.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
        let u = new Uint8Array(17);
        return u[0] = 9, u.set(hui(e.value.replace(/\-/g, "")), 1), u;
    }
  }
  parse(e) {
    let t = {},
      n = 0;
    while (n < e.byteLength) {
      let r = e.getUint8(n++),
        o = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, r));
      switch (n += r, e.getUint8(n++)) {
        case 0:
          t[o] = {
            type: bui,
            value: !0
          };
          break;
        case 1:
          t[o] = {
            type: bui,
            value: !1
          };
          break;
        case 2:
          t[o] = {
            type: _md,
            value: e.getInt8(n++)
          };
          break;
        case 3:
          t[o] = {
            type: bmd,
            value: e.getInt16(n, !1)
          }, n += 2;
          break;
        case 4:
          t[o] = {
            type: Smd,
            value: e.getInt32(n, !1)
          }, n += 4;
          break;
        case 5:
          t[o] = {
            type: Emd,
            value: new Srt(new Uint8Array(e.buffer, e.byteOffset + n, 8))
          }, n += 8;
          break;
        case 6:
          let s = e.getUint16(n, !1);
          n += 2, t[o] = {
            type: Amd,
            value: new Uint8Array(e.buffer, e.byteOffset + n, s)
          }, n += s;
          break;
        case 7:
          let i = e.getUint16(n, !1);
          n += 2, t[o] = {
            type: Hmd,
            value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, i))
          }, n += i;
          break;
        case 8:
          t[o] = {
            type: Tmd,
            value: new Date(new Srt(new Uint8Array(e.buffer, e.byteOffset + n, 8)).valueOf())
          }, n += 8;
          break;
        case 9:
          let a = new Uint8Array(e.buffer, e.byteOffset + n, 16);
          n += 16, t[o] = {
            type: vmd,
            value: `${uxe(a.subarray(0, 4))}-${uxe(a.subarray(4, 6))}-${uxe(a.subarray(6, 8))}-${uxe(a.subarray(8, 10))}-${uxe(a.subarray(10))}`
          };
          break;
        default:
          throw Error("Unrecognized header type tag");
      }
    }
    return t;
  }
}
var _ui,
  bui = "boolean",
  _md = "byte",
  bmd = "short",
  Smd = "integer",
  Emd = "long",
  Amd = "binary",
  Hmd = "string",
  Tmd = "timestamp",
  vmd = "uuid",
  wmd;