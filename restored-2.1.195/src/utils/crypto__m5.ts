// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pvn
// matched 2.1.88 source: src/utils/crypto.ts
// class=unchanged (alt of src/utils/crypto.ts)  jaccard=1  score=1  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Pvn = E(() => {
  Tv();
  Fhi = R(require("crypto")); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
class JWr {
  constructor() {
    this.hashUtils = new h4e();
  }
  async generatePkceCodes() {
    let e = this.generateCodeVerifier(),
      t = this.generateCodeChallengeFromVerifier(e);
    return {
      verifier: e,
      challenge: t,
    };
  }
  generateCodeVerifier() {
    let e = [],
      t = 256 - (256 % Svn.CV_CHARSET.length);
    while (e.length <= bhi) {
      let r = jhi.default.randomBytes(1)[0];
      if (r >= t) continue;
      let o = r % Svn.CV_CHARSET.length;
      e.push(Svn.CV_CHARSET[o]);
    }
    let n = e.join(vo.EMPTY_STRING);
    return ZG.base64EncodeUrl(n);
  }
  generateCodeChallengeFromVerifier(e) {
    return ZG.base64EncodeUrl(this.hashUtils.sha256(e).toString(c1.BASE64), c1.BASE64);
  }
}
var jhi;
