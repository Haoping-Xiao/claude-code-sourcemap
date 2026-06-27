// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DGc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DGc = E(() => {
  LGc();
});
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
    if (n.setProtectedHeader(this.#e), Array.isArray(this.#e?.crit) && this.#e.crit.includes("b64") && this.#e.b64 === !1) throw new oXe("JWTs MUST NOT use unencoded payload");
    return n.sign(e, t);
  }
}