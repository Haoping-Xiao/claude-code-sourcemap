// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oLc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
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
    t = vfr.useRef(!1);
  vfr.useEffect(() => {
    if (da() || t.current) return;
    if (t.current = !0, !v1a() || Lor()) return;
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