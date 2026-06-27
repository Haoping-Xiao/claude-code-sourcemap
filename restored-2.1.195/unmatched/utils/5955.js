// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kJo
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
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