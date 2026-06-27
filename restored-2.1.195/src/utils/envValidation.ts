// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iia
// matched 2.1.88 source: src/utils/envValidation.ts
// class=modified  jaccard=0.4324  score=0.6106  fileCov=0.597
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var iia = E(() => {
  wr();
  fn();
  Fh();
  Un();
  eap = new Set(["prompt_suggestion", "away_summary", "agent_summary", "memdir_aki_extract"]);
});
function Fue(e, t, n, r) {
  if (!t)
    return {
      effective: n,
      status: "valid",
    };
  let o = parseInt(t, 10);
  if (isNaN(o) || o <= 0) {
    let s = {
      effective: n,
      status: "invalid",
      message: `Invalid value "${t}" (using default: ${n})`,
    };
    return (T(`${e} ${s.message}`), s);
  }
  if (o > r) {
    let s = {
      effective: r,
      status: "capped",
      message: `Capped from ${o} to ${r}`,
    };
    return (T(`${e} ${s.message}`), s);
  }
  return {
    effective: o,
    status: "valid",
  };
}
