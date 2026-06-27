// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f6
// matched 2.1.88 source: src/utils/xdg.ts
// class=modified  jaccard=0.4604  score=1  fileCov=0.4604
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module f6] deps: services/analytics/index.ts, tools/ExitPlanModeTool/constants.ts, tools/PowerShellTool/PowerShellTool.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, tools/SyntheticOutputTool/SyntheticOutputTool.ts
((j0p = new Set()), (G0p = new Set([wu, qc])));
function K2n(e) {
  return {
    env: e?.env ?? process.env,
    home: e?.homedir ?? process.env.HOME ?? qPa.homedir(),
  };
}
function Y2n(e) {
  let { env: t, home: n } = K2n(e);
  return t.XDG_STATE_HOME ?? FGt.join(n, ".local", "state");
}
function VPa(e) {
  let { env: t, home: n } = K2n(e);
  return t.XDG_CACHE_HOME ?? FGt.join(n, ".cache");
}
function Ore(e) {
  let { env: t, home: n } = K2n(e);
  return t.XDG_DATA_HOME ?? FGt.join(n, ".local", "share");
}
function Sde(e) {
  let { home: t } = K2n(e);
  return FGt.join(t, ".local", "bin");
}
var qPa, FGt;
