// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TJt
// matched 2.1.88 source: src/utils/toolPool.ts
// class=modified (alt of src/utils/toolPool.ts)  jaccard=0.0951  score=0.3933  fileCov=0.1114
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var TJt = E(() => {
  gdn();
  dre();
  ZWe();
  dn();
  f4();
  c9t();
  wr();
  ((IVf = new Set([j1, K2t])), (xVf = ["subscribe_pr_activity", "unsubscribe_pr_activity"]));
  e4o = (l$(), ro(qW));
});
function Msr(e, t, n) {
  let r = Ht((i) => i.replBridgeEnabled),
    o = Ht((i) => i.replBridgeOutboundOnly),
    s = Ht((i) => i.skillTools);
  return (
    ewe(r && !o),
    eYl.useMemo(() => {
      let i = TQ(n, t, {
        skillTools: s,
      });
      return hYe(e, i, n.mode);
    }, [e, t, s, n, r, o])
  );
}
var eYl;
