// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PGc
// matched 2.1.88 source: node_modules/node-forge/lib/kem.js
// class=new  jaccard=0.0256  score=0.0781  fileCov=0.0367
// note: nearest: node_modules/node-forge/lib/kem.js (0.0256); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
class jgr {
  #e;
  #t;
  #n;
  #r;
  #o;
  #l;
  #s;
  #a;
  constructor(e = {}) {
    this.#a = new trn(e);
  }
  setIssuer(e) {
    return this.#a.iss = e, this;
  }
  setSubject(e) {
    return this.#a.sub = e, this;
  }
  setAudience(e) {
    return this.#a.aud = e, this;
  }
  setJti(e) {
    return this.#a.jti = e, this;
  }
  setNotBefore(e) {
    return this.#a.nbf = e, this;
  }
  setExpirationTime(e) {
    return this.#a.exp = e, this;
  }
  setIssuedAt(e) {
    return this.#a.iat = e, this;
  }
  setProtectedHeader(e) {
    return O3(this.#r, "setProtectedHeader"), this.#r = e, this;
  }
  setKeyManagementParameters(e) {
    return O3(this.#n, "setKeyManagementParameters"), this.#n = e, this;
  }
  setContentEncryptionKey(e) {
    return O3(this.#e, "setContentEncryptionKey"), this.#e = e, this;
  }
  setInitializationVector(e) {
    return O3(this.#t, "setInitializationVector"), this.#t = e, this;
  }
  replicateIssuerAsHeader() {
    return this.#o = true, this;
  }
  replicateSubjectAsHeader() {
    return this.#l = true, this;
  }
  replicateAudienceAsHeader() {
    return this.#s = true, this;
  }
  async encrypt(e, t) {
    let n = new NQo(this.#a.data());
    if (this.#r && (this.#o || this.#l || this.#s)) this.#r = {
      ...this.#r,
      iss: this.#o ? this.#a.iss : void 0,
      sub: this.#l ? this.#a.sub : void 0,
      aud: this.#s ? this.#a.aud : void 0
    };
    if (n.setProtectedHeader(this.#r), this.#t) n.setInitializationVector(this.#t);
    if (this.#e) n.setContentEncryptionKey(this.#e);
    if (this.#n) n.setKeyManagementParameters(this.#n);
    return n.encrypt(e, t);
  }
}