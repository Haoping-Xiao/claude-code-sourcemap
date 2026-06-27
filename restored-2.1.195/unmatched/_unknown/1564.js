// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hui = E(() => {
  Sui = R(PHn(), 1), dxe = Eui * 2, Cmd = dxe + Sje * 2;
});
class S4r {
  constructor(e, t) {
    this.headerMarshaller = new _4r(e, t), this.messageBuffer = [], this.isEndOfStream = false;
  }
  feed(e) {
    this.messageBuffer.push(this.decode(e));
  }
  endOfStream() {
    this.isEndOfStream = true;
  }
  getMessage() {
    let e = this.messageBuffer.pop(),
      t = this.isEndOfStream;
    return {
      getMessage() {
        return e;
      },
      isEndOfStream() {
        return t;
      }
    };
  }
  getAvailableMessages() {
    let e = this.messageBuffer;
    this.messageBuffer = [];
    let t = this.isEndOfStream;
    return {
      getMessages() {
        return e;
      },
      isEndOfStream() {
        return t;
      }
    };
  }
  encode({
    headers: e,
    body: t
  }) {
    let n = this.headerMarshaller.format(e),
      r = n.byteLength + t.byteLength + 16,
      o = new Uint8Array(r),
      s = new DataView(o.buffer, o.byteOffset, o.byteLength),
      i = new Tui.Crc32();
    return s.setUint32(0, r, false), s.setUint32(4, n.byteLength, false), s.setUint32(8, i.update(o.subarray(0, 8)).digest(), false), o.set(n, 12), o.set(t, n.byteLength + 12), s.setUint32(r - 4, i.update(o.subarray(8, r - 4)).digest(), false), o;
  }
  decode(e) {
    let {
      headers: t,
      body: n
    } = Aui(e);
    return {
      headers: this.headerMarshaller.parse(t),
      body: n
    };
  }
  formatHeaders(e) {
    return this.headerMarshaller.format(e);
  }
}
var Tui;