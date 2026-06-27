// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iia
// matched 2.1.88 source: src/utils/envValidation.ts
// class=modified  jaccard=0.4324  score=0.6106  fileCov=0.597
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iia] deps: wr, fn, Fh, Un
eap = new Set(["prompt_suggestion", "away_summary", "agent_summary", "memdir_aki_extract"]);
function validateBoundedIntEnvVar(name, value, defaultValue, upperLimit) {
  if (!value)
    return {
      effective: defaultValue,
      status: "valid",
    };
  let o = parseInt(value, 10);
  if (isNaN(o) || o <= 0) {
    let s = {
      effective: defaultValue,
      status: "invalid",
      message: `Invalid value "${value}" (using default: ${defaultValue})`,
    };
    return (T(`${name} ${s.message}`), s);
  }
  if (o > upperLimit) {
    let s = {
      effective: upperLimit,
      status: "capped",
      message: `Capped from ${o} to ${upperLimit}`,
    };
    return (T(`${name} ${s.message}`), s);
  }
  return {
    effective: o,
    status: "valid",
  };
}
