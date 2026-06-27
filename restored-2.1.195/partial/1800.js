// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ghi
// matched 2.1.88 source: node_modules/@azure/msal-node/dist/crypto/CryptoProvider.mjs
// class=partial  jaccard=0.1457  score=0.6712  fileCov=0.1569
// note: low-confidence suggestion: node_modules/@azure/msal-node/dist/crypto/CryptoProvider.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ghi = E(() => {
  Zb();
  Tv();
  K$t();
  Pvn();
  jhi = R(require("crypto")); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
class zye {
  constructor() {
    this.pkceGenerator = new JWr(), this.guidGenerator = new z$t(), this.hashUtils = new h4e();
  }
  base64UrlEncode() {
    throw Error("Method not implemented.");
  }
  encodeKid() {
    throw Error("Method not implemented.");
  }
  createNewGuid() {
    return this.guidGenerator.generateGuid();
  }
  base64Encode(e) {
    return ZG.base64Encode(e);
  }
  base64Decode(e) {
    return ZG.base64Decode(e);
  }
  generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  }
  getPublicKeyThumbprint() {
    throw Error("Method not implemented.");
  }
  removeTokenBindingKey() {
    throw Error("Method not implemented.");
  }
  clearKeystore() {
    throw Error("Method not implemented.");
  }
  signJwt() {
    throw Error("Method not implemented.");
  }
  async hashString(e) {
    return ZG.base64EncodeUrl(this.hashUtils.sha256(e).toString(c1.BASE64), c1.BASE64);
  }
}