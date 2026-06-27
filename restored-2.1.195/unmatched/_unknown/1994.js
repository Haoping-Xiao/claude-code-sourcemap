// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sTi
// matched 2.1.88 source: node_modules/gtoken/build/src/index.js
// class=new  jaccard=0.0215  score=0.5832  fileCov=0.0218
// note: nearest: node_modules/gtoken/build/src/index.js (0.0215); 0 renamed
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