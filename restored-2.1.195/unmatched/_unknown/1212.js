// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n6s
// matched 2.1.88 source: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js
// class=new  jaccard=0.0595  score=1  fileCov=0.0595
// note: nearest: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js (0.0595); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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