// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PQs
// matched 2.1.88 source: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/signin/index.js
// class=vendor  jaccard=0.0723  score=1  fileCov=0.0723
// note: identified by fingerprint: @aws-sdk/client-s3; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MQs = e => {
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
  $Qs = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials()
  });
var lEn,
  OQs = (e, t) => {
    let n = Object.assign(lEn.getAwsRegionExtensionConfiguration(e), tEn(e), IQs(e), MQs(e));
    return t.forEach(r => r.configure(n)), Object.assign(e, lEn.resolveAwsRegionExtensionConfiguration(n), MUr(n), xQs(n), $Qs(n));
  };