// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ejc
// class=new  (no 2.1.88 match)
// note: 0 renamed
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