// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mpc
// matched 2.1.88 source: src/utils/caCertsConfig.ts
// class=modified  jaccard=0.4691  score=0.7333  fileCov=0.5656
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mpc] deps: constants/oauth.ts
llm = new Set([
  "api.anthropic.com",
  "api-staging.anthropic.com",
  ...ydn.map((e) => new URL(e).hostname),
]);
function applyExtraCACertsFromConfig() {
  if (process.env.NODE_EXTRA_CA_CERTS) return;
  let e = getExtraCertsPathFromConfig();
  if (e)
    ((process.env.NODE_EXTRA_CA_CERTS = e),
      T(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${e}`));
}
function getExtraCertsPathFromConfig() {
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
