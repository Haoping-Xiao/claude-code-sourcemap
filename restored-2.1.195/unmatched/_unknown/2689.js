// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f$n
// matched 2.1.88 source: node_modules/@grpc/grpc-js/build/src/duration.js
// class=new  jaccard=0.0391  score=0.0402  fileCov=0.5829
// note: nearest: node_modules/@grpc/grpc-js/build/src/duration.js (0.0391); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var f$n = E(() => {
  ino = Symbol.for("@bufbuild/protobuf/text-encoding");
});
class jFt {
  constructor(e = FFt().encodeUtf8) {
    this.encodeUtf8 = e, this.stack = [], this.chunks = [], this.buf = [];
  }
  finish() {
    if (this.buf.length) this.chunks.push(new Uint8Array(this.buf)), this.buf = [];
    let e = 0;
    for (let r = 0; r < this.chunks.length; r++) e += this.chunks[r].length;
    let t = new Uint8Array(e),
      n = 0;
    for (let r = 0; r < this.chunks.length; r++) t.set(this.chunks[r], n), n += this.chunks[r].length;
    return this.chunks = [], t;
  }
  fork() {
    return this.stack.push({
      chunks: this.chunks,
      buf: this.buf
    }), this.chunks = [], this.buf = [], this;
  }
  join() {
    let e = this.finish(),
      t = this.stack.pop();
    if (!t) throw Error("invalid state, fork stack empty");
    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e);
  }
  tag(e, t) {
    return this.uint32((e << 3 | t) >>> 0);
  }
  raw(e) {
    if (this.buf.length) this.chunks.push(new Uint8Array(this.buf)), this.buf = [];
    return this.chunks.push(e), this;
  }
  uint32(e) {
    TQi(e);
    while (e > 127) this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  int32(e) {
    return ano(e), BFt(e, this.buf), this;
  }
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  string(e) {
    let t = this.encodeUtf8(e);
    return this.uint32(t.byteLength), this.raw(t);
  }
  float(e) {
    yZd(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
  }
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
  }
  fixed32(e) {
    TQi(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
  }
  sfixed32(e) {
    ano(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
  }
  sint32(e) {
    return ano(e), e = (e << 1 ^ e >> 31) >>> 0, BFt(e, this.buf), this;
  }
  sfixed64(e) {
    let t = new Uint8Array(8),
      n = new DataView(t.buffer),
      r = U_.enc(e);
    return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t);
  }
  fixed64(e) {
    let t = new Uint8Array(8),
      n = new DataView(t.buffer),
      r = U_.uEnc(e);
    return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t);
  }
  int64(e) {
    let t = U_.enc(e);
    return c$n(t.lo, t.hi, this.buf), this;
  }
  sint64(e) {
    let t = U_.enc(e),
      n = t.hi >> 31,
      r = t.lo << 1 ^ n,
      o = (t.hi << 1 | t.lo >>> 31) ^ n;
    return c$n(r, o, this.buf), this;
  }
  uint64(e) {
    let t = U_.uEnc(e);
    return c$n(t.lo, t.hi, this.buf), this;
  }
}
class zlt {
  constructor(e, t = FFt().decodeUtf8) {
    this.decodeUtf8 = t, this.varint64 = mQi, this.uint32 = yQi, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
  }
  tag() {
    let e = this.pos,
      t = this.uint32(),
      n = this.pos - e;
    if (n > 5 || n == 5 && this.buf[this.pos - 1] > 15) throw Error("illegal tag: varint overflows uint32");
    let r = t >>> 3,
      o = t & 7;
    if (r <= 0 || o > 5) throw Error("illegal tag: field no " + r + " wire type " + o);
    return [r, o];
  }
  skip(e, t) {
    let n = this.pos;
    switch (e) {
      case sC.Varint:
        while (this.buf[this.pos++] & 128);
        break;
      case sC.Bit64:
        this.pos += 4;
      case sC.Bit32:
        this.pos += 4;
        break;
      case sC.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case sC.StartGroup:
        for (;;) {
          let [o, s] = this.tag();
          if (s === sC.EndGroup) {
            if (t !== void 0 && o !== t) throw Error("invalid end group tag");
            break;
          }
          this.skip(s, o);
        }
        break;
      default:
        throw Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(n, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) throw RangeError("premature EOF");
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let e = this.uint32();
    return e >>> 1 ^ -(e & 1);
  }
  int64() {
    return U_.dec(...this.varint64());
  }
  uint64() {
    return U_.uDec(...this.varint64());
  }
  sint64() {
    let [e, t] = this.varint64(),
      n = -(e & 1);
    return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, U_.dec(e, t);
  }
  bool() {
    let [e, t] = this.varint64();
    return e !== 0 || t !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, !0);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, !0);
  }
  fixed64() {
    return U_.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return U_.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, !0);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, !0);
  }
  bytes() {
    let e = this.uint32(),
      t = this.pos;
    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
  }
  string(e) {
    return this.decodeUtf8(this.bytes(), e);
  }
}
function ano(e) {
  if (typeof e == "string") e = Number(e);else if (typeof e != "number") throw Error("invalid int32: " + typeof e);
  if (!Number.isInteger(e) || e > dno || e < pno) throw Error("invalid int32: " + e);
}
function TQi(e) {
  if (typeof e == "string") e = Number(e);else if (typeof e != "number") throw Error("invalid uint32: " + typeof e);
  if (!Number.isInteger(e) || e > uno || e < 0) throw Error("invalid uint32: " + e);
}
function yZd(e) {
  if (typeof e == "string") {
    let t = e;
    if (e = Number(e), Number.isNaN(e) && t !== "NaN") throw Error("invalid float32: " + t);
  } else if (typeof e != "number") throw Error("invalid float32: " + typeof e);
  if (Number.isFinite(e) && (e > lno || e < cno)) throw Error("invalid float32: " + e);
}
var sC,
  lno = 340282346638528860000000000000000000000,
  cno = -340282346638528860000000000000000000000,
  uno = 4294967295,
  dno = 2147483647,
  pno = -2147483648;