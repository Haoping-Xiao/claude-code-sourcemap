// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ejc
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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