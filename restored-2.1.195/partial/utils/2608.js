// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module II
// matched 2.1.88 source: src/utils/plugins/addDirPluginSettings.ts
// class=partial  jaccard=0.2042  score=0.8152  fileCov=0.2141
// note: low-confidence suggestion: src/utils/plugins/addDirPluginSettings.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var II = E(() => {
  kt();
  Du();
  er();
  fn();
  vn();
  Sbe();
  $g();
  ZC();
  I8();
  aS();
  aeo();
  meo = require("path");
});
function tWe() {
  let e = {};
  for (let t of c0()) for (let n of UKi) {
    let {
      settings: r
    } = a9(heo.join(t, ".claude", n));
    if (!r?.enabledPlugins) continue;
    Object.assign(e, r.enabledPlugins);
  }
  return e;
}
function yeo() {
  let e = {};
  for (let t of c0()) for (let n of UKi) {
    let {
      settings: r
    } = a9(heo.join(t, ".claude", n));
    if (!r?.extraKnownMarketplaces) continue;
    Object.assign(e, r.extraKnownMarketplaces);
  }
  return e;
}
var heo, UKi;