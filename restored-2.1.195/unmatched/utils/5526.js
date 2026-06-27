// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XSc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XSc = E(() => {
  fn();
  KSc = R(rt(), 1);
});
function JSc(e, t) {
  let n = T7e.useRef(e ?? null),
    r = T7e.useRef(!e);
  return T7e.useEffect(() => {
    let o = n.current;
    if (!o) return;
    let s = false;
    return o.then(i => {
      if (s) return;
      if (r.current = true, n.current = null, i.length > 0) t(a => [...i, ...a]);
    }), () => {
      s = true;
    };
  }, [t]), T7e.useCallback(async () => {
    if (r.current || !n.current) return;
    let o = await n.current;
    if (r.current) return;
    if (r.current = true, n.current = null, o.length > 0) t(s => [...o, ...s]);
  }, [t]);
}
var T7e;