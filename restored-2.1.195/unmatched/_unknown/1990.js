// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KHi
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/oauth2client.js
// class=new  jaccard=0.0135  score=0.53  fileCov=0.0137
// note: nearest: node_modules/google-auth-library/build/src/auth/oauth2client.js (0.0135); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KHi = Q(IVr => {
  Object.defineProperty(IVr, "__esModule", {
    value: true
  });
  IVr.getToken = MId;
  var RId = zHi(),
    LId = "https://oauth2.googleapis.com/token",
    DId = "urn:ietf:params:oauth:grant-type:jwt-bearer",
    PId = e => ({
      method: "POST",
      url: LId,
      data: new URLSearchParams({
        grant_type: DId,
        assertion: (0, RId.getJwsSign)(e)
      }),
      responseType: "json",
      retryConfig: {
        httpMethodsToRetry: ["POST"]
      }
    });
  async function MId(e) {
    if (!e.transporter) throw Error("No transporter set.");
    try {
      let t = PId(e);
      return (await e.transporter.request(t)).data;
    } catch (t) {
      let n = t,
        r = n.response?.data;
      if (r?.error) n.message = `${r.error}: ${r.error_description}`;
      throw n;
    }
  }
});