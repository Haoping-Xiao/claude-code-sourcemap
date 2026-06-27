// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DDc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DDc = E(() => {
  Ed();
  OJt();
  uo();
  RDc = R(lt(), 1), Gfr = R(rt(), 1);
});
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