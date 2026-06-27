// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EDc
// matched 2.1.88 source: src/context/notifications.tsx
// class=partial  jaccard=0.1296  score=0.22  fileCov=0.2398
// note: low-confidence suggestion: src/context/notifications.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EDc = E(() => {
  bDc();
  er();
  je();
  lE();
  Xh();
});
function ADc() {
  let {
      addNotification: e
    } = Li(),
    t = Ffr.useRef(ale());
  Ffr.useEffect(() => {
    if (da()) return;
    function n(r) {
      let o = r.filter(s => !t.current.includes(s));
      t.current = r;
      for (let s of o) e({
        key: `compliance-taint-${s}`,
        kind: "event",
        priority: "immediate",
        requeueOnPreempt: !0,
        text: `${aEt(s)} \xB7 some features are restricted \xB7 /status for details`
      });
    }
    return n(ale()), LPt(n);
  }, [e]);
}
var Ffr;