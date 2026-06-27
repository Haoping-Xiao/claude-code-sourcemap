// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module inr
// matched 2.1.88 source: src/utils/auth.ts
// class=new  jaccard=0.0117  score=0.5911  fileCov=0.0118
// note: nearest: src/utils/auth.ts (0.0117); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var inr = E(() => {
  Kv();
  g$();
  L7();
  Ye();
  bEt();
  xoe();
  ENo = R(lt(), 1), Lb = R(se(), 1);
});
async function EEt(e, t = {}) {
  try {
    process.kill(e, "SIGTERM");
  } catch (r) {
    if (on(r) === "EPERM") return "eperm";
    return "exited";
  }
  let n = Date.now() + (t.gracefulMs ?? 2000);
  while (Date.now() < n) {
    try {
      process.kill(e, 0);
    } catch {
      return "exited";
    }
    await Nn(50);
  }
  return "timed-out";
}