// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EDc
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0075  score=0.5121  fileCov=0.0075
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0075); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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
        requeueOnPreempt: true,
        text: `${aEt(s)} \xB7 some features are restricted \xB7 /status for details`
      });
    }
    return n(ale()), LPt(n);
  }, [e]);
}
var Ffr;