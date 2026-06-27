// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NDc
// matched 2.1.88 source: src/hooks/notifs/useTeammateShutdownNotification.ts
// class=modified  jaccard=0.2624  score=0.594  fileCov=0.3198
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NDc] deps: Ed, aE, id, q6o
(($Dc = R(lt(), 1)), (qfr = R(rt(), 1)));
function BDc(e) {
  if (!("text" in e)) return 1;
  let t = e.text.match(/^(\d+)/);
  return t?.[1] ? parseInt(t[1], 10) : 1;
}
function TCm(e, t) {
  return makeSpawnNotif(BDc(e) + 1);
}
function makeSpawnNotif(count) {
  return {
    key: "teammate-spawn",
    kind: "event",
    text: count === 1 ? "1 teammate started" : `${count} teammates started`,
    priority: "low",
    timeoutMs: 5000,
    fold: TCm,
  };
}
function vCm(e, t) {
  return makeShutdownNotif(BDc(e) + 1);
}
function makeShutdownNotif(count) {
  return {
    key: "teammate-shutdown",
    kind: "event",
    text: count === 1 ? "1 teammate shut down" : `${count} teammates shut down`,
    priority: "low",
    timeoutMs: 5000,
    fold: vCm,
  };
}
function useTeammateLifecycleNotification() {
  let e = Ht((o) => o.tasks),
    { addNotification: t } = Li(),
    n = Otn.useRef(new Set()),
    r = Otn.useRef(new Set());
  Otn.useEffect(() => {
    if (Ju() !== null) return;
    for (let [o, s] of Object.entries(e)) {
      if (!uE(s)) continue;
      if (s.status === "running" && !n.current.has(o)) (n.current.add(o), t(makeSpawnNotif(1)));
      if (s.status === "completed" && !r.current.has(o))
        (r.current.add(o), t(makeShutdownNotif(1)));
    }
  }, [e, t]);
}
var Otn;
