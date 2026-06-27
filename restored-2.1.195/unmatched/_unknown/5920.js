// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ejc
// matched 2.1.88 source: node_modules/@azure/core-rest-pipeline/dist/esm/policies/bearerTokenAuthenticationPolicy.js
// class=new  jaccard=0.0283  score=0.1047  fileCov=0.0373
// note: nearest: node_modules/@azure/core-rest-pipeline/dist/esm/policies/bearerTokenAuthenticationPolicy.js (0.0283); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ejc = E(() => {
  ZXo();
  agr();
  wm();
});
class Inn {
  constructor(e) {
    this._flattened = new JNe(e);
  }
  setContentEncryptionKey(e) {
    return this._flattened.setContentEncryptionKey(e), this;
  }
  setInitializationVector(e) {
    return this._flattened.setInitializationVector(e), this;
  }
  setProtectedHeader(e) {
    return this._flattened.setProtectedHeader(e), this;
  }
  setKeyManagementParameters(e) {
    return this._flattened.setKeyManagementParameters(e), this;
  }
  async encrypt(e, t) {
    let n = await this._flattened.encrypt(e, t);
    return [n.protected, n.encrypted_key, n.iv, n.ciphertext, n.tag].join(".");
  }
}