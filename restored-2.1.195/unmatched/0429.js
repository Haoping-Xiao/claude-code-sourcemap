// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fIr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fIr = E(() => {
  yAr();
  tQe();
  wfs();
  Oun();
  ZJe();
});
class u0t {
  append(e) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, e]) : e;
  }
  readMessage() {
    if (!this._buffer) return null;
    let e = this._buffer.indexOf(`
`);
    if (e === -1) return null;
    let t = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
    return this._buffer = this._buffer.subarray(e + 1), mIr(t);
  }
  clear() {
    this._buffer = void 0;
  }
}
function mIr(e) {
  return pae.parse(JSON.parse(e));
}
function Uun(e) {
  return JSON.stringify(e) + `
`;
}