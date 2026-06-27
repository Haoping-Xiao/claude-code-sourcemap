// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w8t
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/response.js
// class=new  jaccard=0.0162  score=0.1145  fileCov=0.0185
// note: nearest: node_modules/undici/lib/web/fetch/response.js (0.0162); dir inferred from dep-graph -> utils; 0 renamed
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