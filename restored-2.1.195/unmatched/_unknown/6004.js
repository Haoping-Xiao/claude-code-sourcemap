// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kGc
// matched 2.1.88 source: node_modules/@azure/core-rest-pipeline/dist/esm/policies/bearerTokenAuthenticationPolicy.js
// class=new  jaccard=0.0292  score=0.1181  fileCov=0.0373
// note: nearest: node_modules/@azure/core-rest-pipeline/dist/esm/policies/bearerTokenAuthenticationPolicy.js (0.0292); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kGc = E(() => {
  SGc();
  nrn();
  AR();
});
class NQo {
  #e;
  constructor(e) {
    this.#e = new PQo(e);
  }
  setContentEncryptionKey(e) {
    return this.#e.setContentEncryptionKey(e), this;
  }
  setInitializationVector(e) {
    return this.#e.setInitializationVector(e), this;
  }
  setProtectedHeader(e) {
    return this.#e.setProtectedHeader(e), this;
  }
  setKeyManagementParameters(e) {
    return this.#e.setKeyManagementParameters(e), this;
  }
  async encrypt(e, t) {
    let n = await this.#e.encrypt(e, t);
    return [n.protected, n.encrypted_key, n.iv, n.ciphertext, n.tag].join(".");
  }
}