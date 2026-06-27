// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qol
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qol = E(() => {
  Xa();
  Ye();
  co();
  Cc();
  ql();
  Gol = R(lt(), 1), DT = R(se(), 1);
});
function Dyt() {
  let e = Sd(),
    t = Z7();
  return zol.useCallback(() => {
    if (!e) return;
    let n = Date.now();
    if (n - Vol < nrf) return;
    Vol = n, t.notifyBell();
  }, [e, t]);
}
var zol,
  Vol = 0,
  nrf = 500,
  Kol = 5000;