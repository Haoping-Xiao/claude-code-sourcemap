// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fEc
// matched 2.1.88 source: src/hooks/useSwarmInitialization.ts
// class=partial  jaccard=0.2467  score=1  fileCov=0.2467
// note: low-confidence suggestion: src/hooks/useSwarmInitialization.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fEc = E(() => {
  je();
  pQ();
  $I();
  Jt();
  Mp();
  YI();
  hP();
});
function gEc(e, t, {
  enabled: n = !0
} = {}) {
  mEc.useEffect(() => {
    if (!n) return;
    if (el()) {
      let r = t?.[0],
        o = r && "teamName" in r ? r.teamName : void 0,
        s = r && "agentName" in r ? r.agentName : void 0;
      if (o && s) {
        pEc(e, o, s);
        let a = J4(o)?.members.find(l => l.name === s);
        if (a) Dzo(e, Rt(), {
          teamName: o,
          agentId: a.agentId,
          agentName: s
        });
      } else {
        let i = ije?.();
        if (i?.teamName && i?.agentId && i?.agentName) Dzo(e, Rt(), {
          teamName: i.teamName,
          agentId: i.agentId,
          agentName: i.agentName
        });
      }
    }
  }, [e, t, n]);
}
var mEc;