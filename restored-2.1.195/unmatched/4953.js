// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d9l
// matched 2.1.88 source: src/utils/ultraplan/ccrSession.ts
// class=new  jaccard=0.028  score=0.4801  fileCov=0.0288
// note: nearest: src/utils/ultraplan/ccrSession.ts (0.028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var d9l = E(() => {
  je();
  Cv();
  gP();
  eme = class eme extends Error {
    reason;
    rejectCount;
    eventStats;
    constructor(e, t, n, r, o) {
      super(e, o);
      this.reason = t;
      this.rejectCount = n;
      this.eventStats = r;
      this.name = "UltraplanPollError";
    }
  };
});
function tme() {
  return at("tengu_ultraplan_config", null)?.enabled === !0 && K8e() && !da();
}