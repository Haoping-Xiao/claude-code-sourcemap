// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IFs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var IFs = Q($tt => {
  Object.defineProperty($tt, "__esModule", {
    value: !0
  });
  $tt.resolveHttpAuthRuntimeConfig = $tt.getHttpAuthExtensionConfiguration = void 0;
  var R8u = e => {
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
  };
  $tt.getHttpAuthExtensionConfiguration = R8u;
  var L8u = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials()
  });
  $tt.resolveHttpAuthRuntimeConfig = L8u;
});