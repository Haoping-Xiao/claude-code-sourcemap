// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ote
// matched 2.1.88 source: src/utils/user.ts
// class=modified  jaccard=0.1049  score=0.3427  fileCov=0.1313
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ote] deps: Qi, ft, oo, er, Lo, wr, fn, OB
Xot = Cn((e) => {
  let t = oW(),
    n = Dt(),
    r,
    o,
    s;
  if (e) {
    if (((r = Di() ?? void 0), (o = rW() ?? void 0), r && n.claudeCodeFirstTokenDate)) {
      let c = new Date(n.claudeCodeFirstTokenDate).getTime();
      if (!isNaN(c)) s = c;
    }
  }
  let i = Lc(),
    a = gwi(i?.organizationUuid),
    l = gwi(i?.accountUuid);
  return {
    deviceId: t,
    sessionId: Rt(),
    email: Y0d(),
    appVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
    platform: W0t(),
    organizationUuid: a,
    accountUuid: l,
    userType: "external",
    subscriptionType: r,
    rateLimitTier: o,
    firstTokenTime: s,
    ...(ut(process.env.GITHUB_ACTIONS) && {
      githubActionsMetadata: {
        actor: process.env.GITHUB_ACTOR,
        actorId: process.env.GITHUB_ACTOR_ID,
        repository: process.env.GITHUB_REPOSITORY,
        repositoryId: process.env.GITHUB_REPOSITORY_ID,
        repositoryOwner: process.env.GITHUB_REPOSITORY_OWNER,
        repositoryOwnerId: process.env.GITHUB_REPOSITORY_OWNER_ID,
      },
    }),
  };
});
((qle = Cn(async () => {
  let e = await S0("git config --get user.email", {
    reject: false,
    cwd: $t(),
  });
  return e.exitCode === 0 && e.stdout ? e.stdout.trim() : void 0;
})),
  (_wi = Cn(async () => {
    let e = await S0("git config --get user.name", {
      reject: false,
      cwd: $t(),
    });
    return e.exitCode === 0 && e.stdout ? e.stdout.trim() : void 0;
  })));
async function Q0d(e) {
  return (await m8r).getRandomValues(new Uint8Array(e));
}
async function Z0d(e) {
  let n = "",
    r = await Q0d(e);
  for (let o = 0; o < e; o++) {
    let s = r[o] % 66;
    n += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[s];
  }
  return n;
}
async function eRd(e) {
  return await Z0d(e);
}
async function tRd(e) {
  let t = await (await m8r).subtle.digest("SHA-256", new TextEncoder().encode(e));
  return btoa(String.fromCharCode(...new Uint8Array(t)))
    .replace(/\//g, "_")
    .replace(/\+/g, "-")
    .replace(/=/g, "");
}
async function g8r(e) {
  if (!e) e = 43;
  if (e < 43 || e > 128) throw `Expected a length between 43 and 128. Received ${e}.`;
  let t = await eRd(e),
    n = await tRd(t);
  return {
    code_verifier: t,
    code_challenge: n,
  };
}
var m8r;
