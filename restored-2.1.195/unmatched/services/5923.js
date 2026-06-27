// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lgr
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/googleauth.js
// class=new  jaccard=0.0075  score=0.2836  fileCov=0.0077
// note: nearest: node_modules/google-auth-library/build/src/auth/googleauth.js (0.0075); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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