// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qgc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qgc = E(() => {
  Qho();
  Our = R(rt(), 1);
});
function Vum() {
  return Date.now() - Ex();
}
function zum(e) {
  return Vum() < e;
}
function Kum(e) {
  return !zum(e);
}
function ben(e, t) {
  let n = Z7(),
    [r, o] = _en.useState(!1);
  _en.useEffect(() => {
    Zwt();
  }, []), _en.useEffect(() => {
    o(!1);
  }, [e, t, n]), Gc(() => {
    if (Kum(Vgc)) o(!0), bpe({
      message: e,
      notificationType: t
    }, n);
  }, r ? null : Vgc);
}
var _en,
  Vgc = 6000;