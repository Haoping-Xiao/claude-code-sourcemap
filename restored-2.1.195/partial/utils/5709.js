// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zRc
// matched 2.1.88 source: src/commands/chrome/index.ts
// class=partial  jaccard=0.1588  score=1  fileCov=0.1588
// note: low-confidence suggestion: src/commands/chrome/index.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zRc = E(() => {
  ft();
  Ed();
  uo();
  MPe();
  wr();
  vn();
  BJ();
  gz();
  Efr = R(rt(), 1);
});
function KRc() {
  let e = Ho(),
    t = Afr.useRef(!1);
  Afr.useEffect(() => {
    if (da() || t.current) return;
    t.current = !0;
    let n = kge(),
      r = Dt();
    if (!(n === !0 || Oe.CLAUDE_CODE_ENABLE_CFC || r.claudeInChromeDefaultEnabled === !0) || !tXt(n)) return;
    if (r.chromeExtension?.pairedDeviceId) return;
    if (!bo()) {
      VL("chrome", 1);
      return;
    }
    if (nv()) return;
    Kfe().then(s => {
      if (s) return;
      VL("chrome", 1), e(i => {
        if (i.setupIssues.chromeExtensionIssueCount === 1) return i;
        return {
          ...i,
          setupIssues: {
            ...i.setupIssues,
            chromeExtensionIssueCount: 1
          }
        };
      });
    }).catch(ke);
  }, [e]);
}
var Afr;