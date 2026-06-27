// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zRc
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.005  score=0.2453  fileCov=0.005
// note: nearest: src/components/Settings/Config.tsx (0.005); dir inferred from dep-graph -> utils; 0 renamed
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
    t = Afr.useRef(false);
  Afr.useEffect(() => {
    if (da() || t.current) return;
    t.current = true;
    let n = kge(),
      r = Dt();
    if (!(n === true || Oe.CLAUDE_CODE_ENABLE_CFC || r.claudeInChromeDefaultEnabled === true) || !tXt(n)) return;
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