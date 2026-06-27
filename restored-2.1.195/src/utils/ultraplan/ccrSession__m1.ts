// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d9l
// matched 2.1.88 source: src/utils/ultraplan/ccrSession.ts
// class=modified (alt of src/utils/ultraplan/ccrSession.ts)  jaccard=0.0427  score=0.5293  fileCov=0.0444
// note: deminified; 0 identifiers renamed from _t exports
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
  return at("tengu_ultraplan_config", null)?.enabled === true && K8e() && !da();
}
