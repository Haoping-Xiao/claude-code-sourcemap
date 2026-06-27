// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n6s
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var n6s = E(() => {
  z8s();
  e6s();
});
var r6s = e => e.protocol === "ws:" || e.protocol === "wss:";
class cBr {
  signer;
  constructor(e) {
    this.signer = e.signer;
  }
  presign(e, t = {}) {
    return this.signer.presign(e, t);
  }
  async sign(e, t) {
    if (O2e.isInstance(e) && r6s(e)) return {
      ...(await this.signer.presign({
        ...e,
        body: ""
      }, {
        ...t,
        expiresIn: 60,
        unsignableHeaders: new Set(Object.keys(e.headers).filter(r => r !== "host"))
      })),
      body: e.body
    };else return this.signer.sign(e, t);
  }
}