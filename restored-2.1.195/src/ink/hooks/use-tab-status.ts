// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V5i
// matched 2.1.88 source: src/ink/hooks/use-tab-status.ts
// class=modified  jaccard=0.1519  score=0.4801  fileCov=0.1818
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var V5i = E(() => {
  jh();
  EW();
  ((Sat = R(rt(), 1)),
    (WWd = {
      idle: {
        indicator: bat(0, 215, 95),
        status: "Idle",
        statusColor: bat(136, 136, 136),
      },
      busy: {
        indicator: bat(255, 149, 0),
        status: "Working\u2026",
        statusColor: bat(255, 149, 0),
      },
      waiting: {
        indicator: bat(95, 135, 255),
        status: "Waiting",
        statusColor: bat(95, 135, 255),
      },
    }));
});
function Ja(e) {
  return Bun.stripANSI(e);
}
function S0e(e) {
  let t = FLn.useContext(g8);
  FLn.useEffect(() => {
    if (e === null || !t) return;
    let n = Ja(e);
    t(QS(wy.SET_TITLE_AND_ICON, n));
  }, [e, t]);
}
var FLn;
