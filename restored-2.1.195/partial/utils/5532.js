// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lEc
// matched 2.1.88 source: src/hooks/useBackgroundTaskNavigation.ts
// class=partial  jaccard=0.1965  score=0.6786  fileCov=0.2167
// note: low-confidence suggestion: src/hooks/useBackgroundTaskNavigation.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lEc = E(() => {
  ft();
  kt();
  uo();
  gq();
  Cp();
  Ao();
  OTt();
  Hde();
  Ed();
  tC();
  CTt();
  kne();
  ps();
  rSe();
  fb();
  ydr();
  rme();
  S_();
  q6e();
  bm();
  tA();
  dMe();
  GTe = R(rt(), 1);
});
function cEc({
  inputOwnsEscape: e,
  isTranscriptScreen: t
}) {
  let n = Ht(l => l.tasks),
    r = Ht(l => l.viewSelectionMode),
    o = Ht(l => l.viewingAgentTaskId),
    s = Ho(),
    i = $T();
  return {
    handleKeyDown: l => {
      if (t) return;
      if (l.name === "escape" && r === "viewing-agent") {
        if (e) return;
        l.preventDefault();
        let c = o;
        if (c) {
          let u = n[c];
          if (uE(u) && u.status === "running") {
            u.currentWorkAbortController?.abort();
            return;
          }
          if (El(u) && (u.status === "running" || sw(u))) {
            MTt(u, i, s);
            return;
          }
        }
        Wq(s);
      }
    },
    handleKeyDownCapture: () => {}
  };
}