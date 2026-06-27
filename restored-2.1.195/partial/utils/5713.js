// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oLc
// matched 2.1.88 source: src/hooks/notifs/useStartupNotification.ts
// class=partial  jaccard=0.153  score=0.3884  fileCov=0.2015
// note: low-confidence suggestion: src/hooks/notifs/useStartupNotification.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var oLc = E(() => {
  ft();
  uo();
  vn();
  tLc();
  gz();
  nLc = R(lt(), 1), Tfr = R(rt(), 1);
});
function sLc() {
  let e = Ho(),
    t = vfr.useRef(false);
  vfr.useEffect(() => {
    if (da() || t.current) return;
    if (t.current = true, !v1a() || Lor()) return;
    T1a().then(n => {
      if (n === null) return;
      e(r => {
        if (r.setupIssues.existingClaudeSubscription === n) return r;
        return {
          ...r,
          setupIssues: {
            ...r.setupIssues,
            existingClaudeSubscription: n
          }
        };
      });
    }).catch(ke);
  }, [e]);
}
var vfr;