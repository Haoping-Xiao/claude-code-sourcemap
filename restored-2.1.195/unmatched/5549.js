// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KEc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KEc = E(() => {
  Rur();
  bm();
  kut();
});
function YEc({
  executeQueuedInput: e,
  hasActiveLocalJsxUI: t,
  queryGuard: n
}) {
  let r = ntn.useSyncExternalStore(n.subscribe, n.getSnapshot),
    o = ntn.useSyncExternalStore(HSe, Rut);
  ntn.useEffect(() => {
    if (r) return;
    if (t) return;
    if (o.length === 0) return;
    zEc({
      executeInput: e
    });
  }, [o, r, e, t, n]);
}
var ntn;