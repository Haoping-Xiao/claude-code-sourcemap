// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DDc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.002  score=0.3295  fileCov=0.002
// note: nearest: src/screens/REPL.tsx (0.002); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DDc] deps: context/notifications.tsx, commands/model/model.tsx, context/notifications.tsx
RDc = R(lt(), 1), Gfr = R(rt(), 1);
function PDc() {
  let e = Ho(),
    t = Ht(o => o.mcp.commands),
    [n, r] = $tn.useState(0);
  $tn.useEffect(() => {
    if (!Wfr || !Zio() || N2()) return;
    return n$.subscribe(() => r(o => o + 1));
  }, []), $tn.useEffect(() => {
    if (!Wfr || !Zio() || N2()) return;
    let o = false;
    return aC(yr()).then(s => {
      if (o) return;
      let i = AYt(t),
        a = Due(yQ([...s, ...i]), RK());
      e(l => {
        if (Wfr.skillToolMembershipUnchanged(l.skillTools, a)) return l;
        return {
          ...l,
          skillTools: Wfr.buildSkillTools(a, {
            emitTelemetry: l.skillTools.length === 0
          })
        };
      });
    }).catch(ke), () => {
      o = true;
    };
  }, [e, t, n]);
}
var $tn,
  Wfr = null;