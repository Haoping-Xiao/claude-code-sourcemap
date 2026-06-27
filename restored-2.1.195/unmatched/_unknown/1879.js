// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xSi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xSi = Q((E0h, ISi) => {
  ISi.exports = {
    decode: y5r(),
    verify: Vbi(),
    sign: CSi(),
    JsonWebTokenError: tOt(),
    NotBeforeError: _5r(),
    TokenExpiredError: b5r()
  };
});
class Tte {
  static fromAssertion(e) {
    let t = new Tte();
    return t.jwt = e, t;
  }
  static fromCertificate(e, t, n) {
    let r = new Tte();
    if (r.privateKey = t, r.thumbprint = e, r.useSha256 = !1, n) r.publicCertificate = this.parseCertificate(n);
    return r;
  }
  static fromCertificateWithSha256Thumbprint(e, t, n) {
    let r = new Tte();
    if (r.privateKey = t, r.thumbprint = e, r.useSha256 = !0, n) r.publicCertificate = this.parseCertificate(n);
    return r;
  }
  getJwt(e, t, n) {
    if (this.privateKey && this.thumbprint) {
      if (this.jwt && !this.isExpired() && t === this.issuer && n === this.jwtAudience) return this.jwt;
      return this.createJwt(e, t, n);
    }
    if (this.jwt) return this.jwt;
    throw ts(FE.invalidAssertion);
  }
  createJwt(e, t, n) {
    this.issuer = t, this.jwtAudience = n;
    let r = Av.nowSeconds();
    this.expirationTime = r + 600;
    let s = {
        alg: this.useSha256 ? s7.PSS_256 : s7.RSA_256
      },
      i = this.useSha256 ? s7.X5T_256 : s7.X5T;
    if (Object.assign(s, {
      [i]: ZG.base64EncodeUrl(this.thumbprint, c1.HEX)
    }), this.publicCertificate) Object.assign(s, {
      [s7.X5C]: this.publicCertificate
    });
    let a = {
      [s7.AUDIENCE]: this.jwtAudience,
      [s7.EXPIRATION_TIME]: this.expirationTime,
      [s7.ISSUER]: this.issuer,
      [s7.SUBJECT]: this.issuer,
      [s7.NOT_BEFORE]: r,
      [s7.JWT_ID]: e.createNewGuid()
    };
    return this.jwt = kSi.default.sign(a, this.privateKey, {
      header: s
    }), this.jwt;
  }
  isExpired() {
    return this.expirationTime < Av.nowSeconds();
  }
  static parseCertificate(e) {
    let t = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs,
      n = [],
      r;
    while ((r = t.exec(e)) !== null) n.push(r[1].replace(/\r*\n/g, vo.EMPTY_STRING));
    return n;
  }
}
var kSi;