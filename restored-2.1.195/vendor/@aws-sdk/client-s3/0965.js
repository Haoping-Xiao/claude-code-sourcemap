// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fUs
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: @aws-sdk/client-s3; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mUs = e => {
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
  gUs = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials()
  });
var qhn,
  hUs = (e, t) => {
    let n = Object.assign(qhn.getAwsRegionExtensionConfiguration(e), $hn(e), aUs(e), mUs(e));
    return t.forEach(r => r.configure(n)), Object.assign(e, qhn.resolveAwsRegionExtensionConfiguration(n), C$r(n), lUs(n), gUs(n));
  };