// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QEc
// matched 2.1.88 source: node_modules/axios/lib/adapters/http.js
// class=new  jaccard=0.0172  score=0.2354  fileCov=0.0182
// note: nearest: node_modules/axios/lib/adapters/http.js (0.0172); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var QEc = E(() => {
  S_();
});
function eAc(e) {
  let t = ks(),
    n = VTt.useSyncExternalStore(HSe, Rut),
    r = Ht(s => s.tasks),
    o = VTt.useRef(new Set());
  VTt.useEffect(() => {
    if (n.length === 0) return;
    let s = JEc(n, r);
    if (s.length === 0) return;
    let i = [],
      a = [];
    for (let c of s) {
      if (o.current.has(c.agentId)) continue;
      o.current.add(c.agentId), i.push(...c.consumedCommands), a.push(c);
    }
    if (i.length > 0) lua(i);
    let l = o.current;
    for (let c of a) {
      let u = t.setTimeout(() => eym({
        agentId: c.agentId,
        inFlight: l
      }), ZEc);
      e(c.agentId, c.prompt).catch(d => {
        if (d instanceof qF) T(`[wakeRouter] resume state error for ${c.agentId}: ${be(d)}`);else ke(d);
      }).finally(() => {
        u(), l.delete(c.agentId);
      });
    }
  }, [n, r, e, t]);
}
function eym(e) {
  T(`[wakeRouter] dispatch for ${e.agentId} exceeded ${ZEc}ms; releasing inFlight reservation`, {
    level: "warn"
  }), e.inFlight.delete(e.agentId);
}
var VTt,
  ZEc = 60000;