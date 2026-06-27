// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zrt
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/cache/CacheManager.mjs
// class=vendor  jaccard=0.0493  score=0.9632  fileCov=0.0494
// note: identified by fingerprint: @azure/msal-common; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function xgi(e, t) {
  return !!e && !!t && e === t.split(".")[1];
}
function g$t(e, t, n, r) {
  if (r) {
    let {
        oid: o,
        sub: s,
        tid: i,
        name: a,
        tfp: l,
        acr: c,
        preferred_username: u,
        upn: d,
        login_hint: p
      } = r,
      f = i || l || c || "";
    return {
      tenantId: f,
      localAccountId: o || s || "",
      name: a,
      username: u || d || "",
      loginHint: p,
      isHomeTenant: xgi(f, e)
    };
  } else return {
    tenantId: n,
    localAccountId: t,
    username: "",
    isHomeTenant: xgi(n, e)
  };
}
function OTn(e, t, n, r) {
  let o = e;
  if (t) {
    let {
      isHomeTenant: s,
      ...i
    } = t;
    o = {
      ...e,
      ...i
    };
  }
  if (n) {
    let {
      isHomeTenant: s,
      ...i
    } = g$t(e.homeAccountId, e.localAccountId, e.tenantId, n);
    return o = {
      ...o,
      ...i,
      idTokenClaims: n,
      idToken: r
    }, o;
  }
  return o;
}