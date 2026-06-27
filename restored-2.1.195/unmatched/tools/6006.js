// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LGc
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/googleauth.js
// class=new  jaccard=0.0076  score=0.3726  fileCov=0.0077
// note: nearest: node_modules/google-auth-library/build/src/auth/googleauth.js (0.0076); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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