// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lnc
// matched 2.1.88 source: src/utils/github/ghAuthStatus.ts
// class=modified  jaccard=0.4954  score=0.5614  fileCov=0.8083
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Lnc = E(() => {
  HU();
  ((IXf = {
    type: "local-jsx",
    name: "workflows",
    aliases: [],
    description: "Browse running and completed workflows",
    isEnabled: () => JS(),
    immediate: !0,
    load: () => Promise.resolve().then(() => (knc(), Inc)),
  }),
    (xXf = IXf));
});
async function aar() {
  if (!(await Gf("gh"))) return "not_installed";
  try {
    let { exitCode: t } = await pv("gh", ["auth", "token"], {
      stdout: "ignore",
      stderr: "ignore",
      timeout: 5000,
      reject: !1,
    });
    return t === 0 ? "authenticated" : "not_authenticated";
  } catch {
    return "not_installed";
  }
}
