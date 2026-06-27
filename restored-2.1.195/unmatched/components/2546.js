// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Ge
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $Ge = E(() => {
  eJr();
  dbe = R(rt(), 1);
});
function M0(e, t, n = false) {
  _6i.useEffect(() => {
    let r = e.current;
    if (!r) return;
    let o = bne(r);
    if (!t) {
      if (n && o.activeElement === r) o.blur();
      return;
    }
    return o.focus(r), o.subscribe(() => {
      let s = e.current;
      if (!s || o.activeElement === s) return;
      if (!o.activeElement) {
        o.focus(s);
        return;
      }
      let i = s.parentNode;
      while (i) {
        if (i === o.activeElement) {
          o.focus(s);
          return;
        }
        i = i.parentNode;
      }
    });
  }, [t, e, n]);
}
var _6i;