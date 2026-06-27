// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zHi
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/oauth2client.js
// class=new  jaccard=0.0213  score=1  fileCov=0.0213
// note: nearest: node_modules/google-auth-library/build/src/auth/oauth2client.js (0.0213); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zHi = Q(qwn => {
  Object.defineProperty(qwn, "__esModule", {
    value: true
  });
  qwn.buildPayloadForJwsSign = VHi;
  qwn.getJwsSign = kId;
  var CId = uot(),
    IId = "RS256",
    xId = "https://oauth2.googleapis.com/token";
  function VHi(e) {
    let t = Math.floor(new Date().getTime() / 1000);
    return {
      iss: e.iss,
      scope: e.scope,
      aud: xId,
      exp: t + 3600,
      iat: t,
      sub: e.sub,
      ...e.additionalClaims
    };
  }
  function kId(e) {
    let t = VHi(e);
    return (0, CId.sign)({
      header: {
        alg: IId
      },
      payload: t,
      secret: e.key
    });
  }
});