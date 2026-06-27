// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sTi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sTi = Q(RVr => {
  Object.defineProperty(RVr, "__esModule", {
    value: true
  });
  RVr.revokeToken = GId;
  var FId = "https://oauth2.googleapis.com/revoke?token=",
    jId = true;
  async function GId(e, t) {
    let n = FId + e;
    return await t.request({
      url: n,
      retry: jId
    });
  }
});