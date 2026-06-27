// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w8t
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var w8t = E(() => {
  ft();
  loe();
  SJ();
  Cc();
  WVt();
  vi();
  eE();
  fH();
  Ed();
  O0();
  HN();
  HI();
  Ye();
  ps();
  Un();
  _F();
  EVe();
  yzn();
  cCo();
  oo();
  Il();
  je();
  At();
  vn();
  OMe();
  co();
  Ls();
  mCo();
  lg();
  Ote();
  fsl = R(lt(), 1), msl = R(rt(), 1), n6e = R(se(), 1);
});
async function hsl(e) {
  return yl("api_admin_request_create", async () => {
    let t = await Os.post("/api/oauth/organizations/:orgUUID/admin_requests", e, {
      auth: "teleport-org"
    });
    if (!t.ok) throw Error(t.reason === "no-auth" ? t.detail : `admin_requests: ${t.reason}`);
    return t.data;
  });
}
async function ysl(e, t) {
  return yl("api_admin_request_list", async () => {
    let n = new URLSearchParams({
      request_type: e
    });
    for (let o of t) n.append("statuses", o);
    let r = await Os.get(`/api/oauth/organizations/:orgUUID/admin_requests/me?${n}`, {
      auth: "teleport-org"
    });
    if (!r.ok) throw Error(r.reason === "no-auth" ? r.detail : `admin_requests/me: ${r.reason}`);
    return r.data;
  });
}
async function _sl(e) {
  return yl("api_admin_request_eligibility", async () => {
    let t = await Os.get(`/api/oauth/organizations/:orgUUID/admin_requests/eligibility?request_type=${e}`, {
      auth: "teleport-org"
    });
    if (!t.ok) throw Error(t.reason === "no-auth" ? t.detail : `admin_requests/eligibility: ${t.reason}`);
    return t.data;
  });
}