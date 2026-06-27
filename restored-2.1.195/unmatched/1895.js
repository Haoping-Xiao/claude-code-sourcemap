// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FSi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FSi = E(() => {
  Mvn();
  USi(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  $vd = [$p.NOT_FOUND, $p.REQUEST_TIMEOUT, $p.TOO_MANY_REQUESTS, $p.SERVER_ERROR, $p.SERVICE_UNAVAILABLE, $p.GATEWAY_TIMEOUT];
});
class M9 {
  constructor(e, t, n) {
    this.httpMethod = e, this._baseEndpoint = t, this.headers = {}, this.bodyParameters = {}, this.queryParameters = {}, this.retryPolicy = n || new gwn();
  }
  computeUri() {
    let e = new Map();
    if (this.queryParameters) Fa.addExtraQueryParameters(e, this.queryParameters);
    let t = u1.mapToQueryString(e);
    return sf.appendQueryString(this._baseEndpoint, t);
  }
  computeParametersBodyString() {
    let e = new Map();
    if (this.bodyParameters) Fa.addExtraQueryParameters(e, this.bodyParameters);
    return u1.mapToQueryString(e);
  }
}