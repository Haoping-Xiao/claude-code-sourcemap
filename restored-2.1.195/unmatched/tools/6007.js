// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DGc
// matched 2.1.88 source: node_modules/commander/lib/argument.js
// class=new  jaccard=0.042  score=0.2676  fileCov=0.0475
// note: nearest: node_modules/commander/lib/argument.js (0.042); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
class owt {
  #e;
  #t;
  constructor(e = {}) {
    this.#t = new trn(e);
  }
  setIssuer(e) {
    return this.#t.iss = e, this;
  }
  setSubject(e) {
    return this.#t.sub = e, this;
  }
  setAudience(e) {
    return this.#t.aud = e, this;
  }
  setJti(e) {
    return this.#t.jti = e, this;
  }
  setNotBefore(e) {
    return this.#t.nbf = e, this;
  }
  setExpirationTime(e) {
    return this.#t.exp = e, this;
  }
  setIssuedAt(e) {
    return this.#t.iat = e, this;
  }
  setProtectedHeader(e) {
    return this.#e = e, this;
  }
  async sign(e, t) {
    let n = new UQo(this.#t.data());
    if (n.setProtectedHeader(this.#e), Array.isArray(this.#e?.crit) && this.#e.crit.includes("b64") && this.#e.b64 === false) throw new oXe("JWTs MUST NOT use unencoded payload");
    return n.sign(e, t);
  }
}