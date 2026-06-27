// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yjs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
// class=new  jaccard=0.0554  score=1  fileCov=0.0554
// note: nearest: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js (0.0554); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Yjs = E(() => {
  Vjs = R(UR(), 1);
});
var Xjs,
  COr = async (e, t, n, r = {}, o = !1) => {
    let s = t[e];
    if (Object.keys(r).length > 0 && HOr(s)) return TOr(s, n);
    if (o || f2s(s, {
      profile: e,
      logger: n.logger
    })) return m2s(e, t, n, r, COr);
    if (HOr(s)) return TOr(s, n);
    if (zjs(s)) return Kjs(s, n);
    if (Ljs(s)) return Djs(n, e);
    if ($js(s)) return await Mjs(e, s, n);
    if (bjs(s)) return Sjs(e, n);
    throw new Xjs.CredentialsProviderError(`Could not resolve credentials using profile: [${e}] in configuration/credentials file(s).`, {
      logger: n.logger
    });
  };