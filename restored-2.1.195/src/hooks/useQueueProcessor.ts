// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KEc
// matched 2.1.88 source: src/hooks/useQueueProcessor.ts
// class=modified  jaccard=0.5499  score=1  fileCov=0.5499
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function YEc({ executeQueuedInput: e, hasActiveLocalJsxUI: t, queryGuard: n }) {
  let r = ntn.useSyncExternalStore(n.subscribe, n.getSnapshot),
    o = ntn.useSyncExternalStore(HSe, Rut);
  ntn.useEffect(() => {
    if (r) return;
    if (t) return;
    if (o.length === 0) return;
    zEc({
      executeInput: e,
    });
  }, [o, r, e, t, n]);
}
var ntn;
