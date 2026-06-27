// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I_c
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var I_c = E(() => {
  ag();
  id();
  Ld();
  je();
  At();
  w_c = require("fs"), Cdr = R(rt(), 1);
});
function k_c(e) {
  let t = Ht(r => r.footerLinks),
    n = e?.excludeKeyed === !0;
  return x_c.useMemo(() => {
    let r = n ? t.filter(o => o.key === void 0) : t;
    return r.length <= UZt ? r : r.slice(0, UZt);
  }, [t, n]);
}
var x_c;