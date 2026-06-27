// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lAc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lAc = E(() => {
  dre();
  iAc = R(rt(), 1);
});
function tym(e, t) {
  if (t.length === 0) return e;
  let n = new Set(e.map(xu)),
    r = t.map(o => o.isMcp && n.has(xu(o)) ? {
      ...o,
      isHidden: !0
    } : o);
  return oE([...e, ...r], "name");
}
function jzo(e, t) {
  return cAc.useMemo(() => tym(e, t), [e, t]);
}
var cAc;