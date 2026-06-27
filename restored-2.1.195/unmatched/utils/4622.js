// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module atr
// matched 2.1.88 source: src/utils/debug.ts
// class=new  jaccard=0.0453  score=1  fileCov=0.0453
// note: nearest: src/utils/debug.ts (0.0453); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var atr = E(() => {
  je();
});
function jQ() {
  let e = Dr()?.autoUpdatesChannel;
  if (e && e !== "latest") return e;
  return "latest";
}