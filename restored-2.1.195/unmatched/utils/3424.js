// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A1a
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var A1a = E(() => {
  mVe();
  Iho = new Set();
  xde(() => Iho.clear());
});
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