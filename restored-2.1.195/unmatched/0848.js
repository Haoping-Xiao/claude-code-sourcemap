// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lLs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lLs = E(() => {
  Ign = R(by(), 1);
});
function cLs(e, t) {
  let n = L2u(e),
    r,
    o,
    s,
    i = async a => {
      if (a?.forceRefresh) return await n(a);
      if (s?.expiration) {
        if (s?.expiration?.getTime() < Date.now()) s = void 0;
      }
      if (r) await r;else if (!s || t?.(s)) if (s) {
        if (!o) o = n(a).then(l => {
          s = l, o = void 0;
        });
      } else return r = n(a).then(l => {
        s = l, r = void 0;
      }), i(a);
      return s;
    };
  return i;
}
var L2u = e => async t => {
  let n;
  for (let r of e) try {
    return await r(t);
  } catch (o) {
    if (n = o, o?.tryNextLink) continue;
    throw o;
  }
  throw n;
};
var lPr = e => e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");