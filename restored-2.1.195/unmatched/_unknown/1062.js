// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KGs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KGs = E(() => {
  WGs();
  qGs();
  VGs();
  zGs();
});
var YGs = e => {
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
  XGs = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials(),
    token: e.token()
  });
var Wyn,
  JGs = (e, t) => {
    let n = Object.assign(Wyn.getAwsRegionExtensionConfiguration(e), Oyn(e), jGs(e), YGs(e));
    return t.forEach(r => r.configure(n)), Object.assign(e, Wyn.resolveAwsRegionExtensionConfiguration(n), zOr(n), GGs(n), XGs(n));
  };