// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lnc
// matched 2.1.88 source: src/utils/github/ghAuthStatus.ts
// class=modified  jaccard=0.3744  score=0.485  fileCov=0.6213
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Lnc] deps: HU
((IXf = {
  type: "local-jsx",
  name: "workflows",
  aliases: [],
  description: "Browse running and completed workflows",
  isEnabled: () => JS(),
  immediate: true,
  load: () => Promise.resolve().then(() => (knc(), Inc)),
}),
  (xXf = IXf));
async function aar() {
  if (!(await Gf("gh"))) return "not_installed";
  try {
    let { exitCode: t } = await pv("gh", ["auth", "token"], {
      stdout: "ignore",
      stderr: "ignore",
      timeout: 5000,
      reject: false,
    });
    return t === 0 ? "authenticated" : "not_authenticated";
  } catch {
    return "not_installed";
  }
}
