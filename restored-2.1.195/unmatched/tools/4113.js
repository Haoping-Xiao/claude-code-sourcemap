// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OCo
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0033  score=1  fileCov=0.0033
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0033); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OCo] deps: jv, DCo, Kyt
cof = Vsl * 2, PCo = new Map();
function sQ(e, t, n = 1000, r = 0, o) {
  let s = ks(),
    i = () => Yi(Math.max(0, (o ?? Date.now()) - e - r)),
    a = Dzn.useCallback(l => {
      if (!t) return () => {};
      let c,
        u = () => {
          try {
            l();
          } finally {
            c = s.setTimeout(u, n);
          }
        };
      return c = s.setTimeout(u, n), () => c();
    }, [t, n, s]);
  return Dzn.useSyncExternalStore(a, i, i);
}
var Dzn;