// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kJo
// matched 2.1.88 source: node_modules/gtoken/build/src/index.js
// class=new  jaccard=0.0369  score=0.3384  fileCov=0.0398
// note: nearest: node_modules/gtoken/build/src/index.js (0.0369); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kJo = Q((pzH, Zjc) => {
  var rPm = Lnn(),
    Jjc = Pnn();
  class Qjc {
    constructor(e) {
      Object.assign(this, e);
      let {
        constructor: t,
        ...n
      } = Object.getOwnPropertyDescriptors(this.constructor.prototype);
      Object.defineProperties(this, n);
    }
    set expires_in(e) {
      this.expires_at = Jjc() + Number(e);
    }
    get expires_in() {
      return Math.max.apply(null, [this.expires_at - Jjc(), 0]);
    }
    expired() {
      return this.expires_in === 0;
    }
    claims() {
      if (!this.id_token) throw TypeError("id_token not present in TokenSet");
      return JSON.parse(rPm.decode(this.id_token.split(".")[1]));
    }
  }
  Zjc.exports = Qjc;
});