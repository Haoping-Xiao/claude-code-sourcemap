// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jjs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
// class=new  jaccard=0.0531  score=1  fileCov=0.0531
// note: nearest: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js (0.0531); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jjs] deps: g2s, Ejs, Pjs, Ojs, Bjs, Yjs
Xjs = R(by(), 1);
var kyn,
  IOr = (e = {}) => async ({
    callerClientConfig: t
  } = {}) => {
    let n = {
      ...e,
      parentClientConfig: {
        ...t,
        ...e.parentClientConfig
      }
    };
    n.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
    let r = await kyn.parseKnownFiles(n);
    return COr(kyn.getProfileName({
      profile: e.profile ?? t?.profile
    }), r, n);
  };