// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NDc
// matched 2.1.88 source: src/hooks/notifs/useTeammateShutdownNotification.ts
// class=modified  jaccard=0.2624  score=0.594  fileCov=0.3198
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NDc] deps: Ed, aE, id, q6o
(($Dc = R(lt(), 1)), (qfr = R(rt(), 1)));
function BDc(e) {
  if (!("text" in e)) return 1;
  let t = e.text.match(/^(\d+)/);
  return t?.[1] ? parseInt(t[1], 10) : 1;
}
function TCm(e, t) {
  return UDc(BDc(e) + 1);
}
function UDc(e) {
  return {
    key: "teammate-spawn",
    kind: "event",
    text: e === 1 ? "1 teammate started" : `${e} teammates started`,
    priority: "low",
    timeoutMs: 5000,
    fold: TCm,
  };
}
function vCm(e, t) {
  return FDc(BDc(e) + 1);
}
function FDc(e) {
  return {
    key: "teammate-shutdown",
    kind: "event",
    text: e === 1 ? "1 teammate shut down" : `${e} teammates shut down`,
    priority: "low",
    timeoutMs: 5000,
    fold: vCm,
  };
}
function jDc() {
  let e = Ht((o) => o.tasks),
    { addNotification: t } = Li(),
    n = Otn.useRef(new Set()),
    r = Otn.useRef(new Set());
  Otn.useEffect(() => {
    if (Ju() !== null) return;
    for (let [o, s] of Object.entries(e)) {
      if (!uE(s)) continue;
      if (s.status === "running" && !n.current.has(o)) (n.current.add(o), t(UDc(1)));
      if (s.status === "completed" && !r.current.has(o)) (r.current.add(o), t(FDc(1)));
    }
  }, [e, t]);
}
var Otn;
