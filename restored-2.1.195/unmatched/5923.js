// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lgr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lgr = E(() => {
  sB();
  njc();
  $vt();
  wm();
  YP();
  Hnn();
  Bvt();
});
class xnn {
  constructor(e) {
    this._flattened = new X7e(e);
  }
  setProtectedHeader(e) {
    return this._flattened.setProtectedHeader(e), this;
  }
  async sign(e, t) {
    let n = await this._flattened.sign(e, t);
    if (n.payload === void 0) throw TypeError("use the flattened module for creating JWS with b64: false");
    return `${n.protected}.${n.payload}.${n.signature}`;
  }
}