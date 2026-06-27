// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ieo
// matched 2.1.88 source: src/utils/telemetry/pluginTelemetry.ts
// class=new  jaccard=0.0593  score=1  fileCov=0.0593
// note: nearest: src/utils/telemetry/pluginTelemetry.ts (0.0593); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ieo = E(() => {
  vf();
  dr();
});
function eFt(e) {
  return bKi.createHash("sha256").update(e + TKd).digest("hex").slice(0, 16);
}
var bKi,
  TKd = "claude-plugin-telemetry-v1";