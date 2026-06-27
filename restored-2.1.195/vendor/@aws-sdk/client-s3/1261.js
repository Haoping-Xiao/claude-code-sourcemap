// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cYs
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: @aws-sdk/client-s3; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uYs = e => {
    let {
      httpAuthSchemes: t,
      httpAuthSchemeProvider: n,
      credentials: r,
      token: o
    } = e;
    return {
      setHttpAuthScheme(s) {
        let i = t.findIndex(a => a.schemeId === s.schemeId);
        if (i === -1) t.push(s);else t.splice(i, 1, s);
      },
      httpAuthSchemes() {
        return t;
      },
      setHttpAuthSchemeProvider(s) {
        n = s;
      },
      httpAuthSchemeProvider() {
        return n;
      },
      setCredentials(s) {
        r = s;
      },
      credentials() {
        return r;
      },
      setToken(s) {
        o = s;
      },
      token() {
        return o;
      }
    };
  },
  dYs = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials(),
    token: e.token()
  });
var aSn,
  pYs = (e, t) => {
    let n = Object.assign(aSn.getAwsRegionExtensionConfiguration(e), eSn(e), rYs(e), uYs(e));
    return t.forEach(r => r.configure(n)), Object.assign(e, aSn.resolveAwsRegionExtensionConfiguration(n), _Br(n), oYs(n), dYs(n));
  };