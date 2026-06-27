// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A1a
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0012  score=0.6907  fileCov=0.0012
// note: nearest: src/screens/REPL.tsx (0.0012); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module A1a] deps: mVe
Iho = new Set();
xde(() => Iho.clear());
function gVe() {
  return Hft.useContext(xho);
}
function b6(e, t, {
  enabled: n = true
} = {}) {
  let r = gVe();
  Hft.useEffect(() => {
    if (!n || !r) return;
    if (E1a(e)) t();
  }, [n, r, e, t]);
}
var Hft, xho;