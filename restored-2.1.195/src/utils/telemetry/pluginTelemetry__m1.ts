// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ieo
// matched 2.1.88 source: src/utils/telemetry/pluginTelemetry.ts
// class=modified (alt of src/utils/telemetry/pluginTelemetry.ts)  jaccard=0.0521  score=1  fileCov=0.0521
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function eFt(e) {
  return bKi
    .createHash("sha256")
    .update(e + PLUGIN_ID_HASH_SALT)
    .digest("hex")
    .slice(0, 16);
}
var bKi,
  PLUGIN_ID_HASH_SALT = "claude-plugin-telemetry-v1";
