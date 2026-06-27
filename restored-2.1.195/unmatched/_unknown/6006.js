// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LGc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LGc = E(() => {
  NZ();
  Bgr();
  AR();
  sK();
  Znn();
  Jnn();
  nwt();
  oBe();
});
class UQo {
  #e;
  constructor(e) {
    this.#e = new BQo(e);
  }
  setProtectedHeader(e) {
    return this.#e.setProtectedHeader(e), this;
  }
  async sign(e, t) {
    let n = await this.#e.sign(e, t);
    if (n.payload === void 0) throw TypeError("use the flattened module for creating JWS with b64: false");
    return `${n.protected}.${n.payload}.${n.signature}`;
  }
}