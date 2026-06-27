// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yni
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: @aws-sdk/client-s3; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _ni = e => {
    let {
      httpAuthSchemes: t,
      httpAuthSchemeProvider: n,
      credentials: r
    } = e;
    return {
      setHttpAuthScheme(o) {
        let s = t.findIndex(i => i.schemeId === o.schemeId);
        if (s === -1) t.push(o);else t.splice(s, 1, o);
      },
      httpAuthSchemes() {
        return t;
      },
      setHttpAuthSchemeProvider(o) {
        n = o;
      },
      httpAuthSchemeProvider() {
        return n;
      },
      setCredentials(o) {
        r = o;
      },
      credentials() {
        return r;
      }
    };
  },
  bni = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials()
  });
var NEn,
  Sni = (e, t) => {
    let n = Object.assign(NEn.getAwsRegionExtensionConfiguration(e), xEn(e), dni(e), _ni(e));
    return t.forEach(r => r.configure(n)), Object.assign(e, NEn.resolveAwsRegionExtensionConfiguration(n), lFr(n), pni(n), bni(n));
  };