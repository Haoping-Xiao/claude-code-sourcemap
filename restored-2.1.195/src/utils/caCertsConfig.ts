// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mpc
// matched 2.1.88 source: src/utils/caCertsConfig.ts
// class=modified  jaccard=0.6044  score=0.7411  fileCov=0.7662
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Mpc = E(() => {
  Rc();
  llm = new Set([
    "api.anthropic.com",
    "api-staging.anthropic.com",
    ...ydn.map((e) => new URL(e).hostname),
  ]);
});
function $pc() {
  if (process.env.NODE_EXTRA_CA_CERTS) return;
  let e = clm();
  if (e)
    ((process.env.NODE_EXTRA_CA_CERTS = e),
      T(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${e}`));
}
function clm() {
  try {
    let t = Dt()?.env,
      r = (Om("userSettings") ? yn("userSettings") : void 0)?.env;
    T(
      `CA certs: Config fallback - globalEnv keys: ${t ? Object.keys(t).join(",") : "none"}, settingsEnv keys: ${r ? Object.keys(r).join(",") : "none"}`,
    );
    let o = r?.NODE_EXTRA_CA_CERTS || t?.NODE_EXTRA_CA_CERTS;
    if (o) T(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${o}`);
    return o;
  } catch (e) {
    T(`CA certs: Config fallback failed: ${e}`, {
      level: "error",
    });
    return;
  }
}
