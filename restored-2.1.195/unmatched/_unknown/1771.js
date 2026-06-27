// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module thi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var thi = E(() => {
  oT();
  JR();
  C0(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
class f4e {
  constructor(e, t) {
    this.cryptoUtils = e, this.performanceClient = t;
  }
  async generateCnf(e, t) {
    this.performanceClient?.addQueueMeasurement(ao.PopTokenGenerateCnf, e.correlationId);
    let n = await dh(this.generateKid.bind(this), ao.PopTokenGenerateCnf, t, this.performanceClient, e.correlationId)(e),
      r = this.cryptoUtils.base64UrlEncode(JSON.stringify(n));
    return {
      kid: n.kid,
      reqCnfString: r
    };
  }
  async generateKid(e) {
    return this.performanceClient?.addQueueMeasurement(ao.PopTokenGenerateKid, e.correlationId), {
      kid: await this.cryptoUtils.getPublicKeyThumbprint(e),
      xms_ksl: b_d.SW
    };
  }
  async signPopToken(e, t, n) {
    return this.signPayload(e, t, n);
  }
  async signPayload(e, t, n, r) {
    let {
        resourceRequestMethod: o,
        resourceRequestUri: s,
        shrClaims: i,
        shrNonce: a,
        shrOptions: l
      } = n,
      u = (s ? new sf(s) : void 0)?.getUrlComponents();
    return this.cryptoUtils.signJwt({
      at: e,
      ts: D9(),
      m: o?.toUpperCase(),
      u: u?.HostNameAndPort,
      nonce: a || this.cryptoUtils.createNewGuid(),
      p: u?.AbsolutePath,
      q: u?.QueryString ? [[], u.QueryString] : void 0,
      client_claims: i || void 0,
      ...r
    }, t, l, n.correlationId);
  }
}
var b_d;