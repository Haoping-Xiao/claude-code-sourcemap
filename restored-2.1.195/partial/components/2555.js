// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yj
// matched 2.1.88 source: src/components/messages/CompactBoundaryMessage.tsx
// class=partial  jaccard=0.1814  score=1  fileCov=0.1814
// note: low-confidence suggestion: src/components/messages/CompactBoundaryMessage.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Yj = E(() => {
  ih();
  SZr();
  H0e();
  EZr = R(lt(), 1), Qat = R(rt(), 1), L6i = R(se(), 1);
  R6i = Qat.createContext(null);
});
function $r(e, t, n = {}) {
  let {
      context: r = "Global",
      isActive: o = !0
    } = n,
    s = KE(),
    i = O0e.useRef(t);
  i.current = t, O0e.useEffect(() => {
    if (!s || !o) return;
    return s.registerHandler({
      action: e,
      context: r,
      handler: () => i.current(),
      singleKey: !0
    });
  }, [e, r, s, o]);
}
function No(e, t = {}) {
  let {
      context: n = "Global",
      isActive: r = !0
    } = t,
    o = KE(),
    s = O0e.useRef(e);
  s.current = e;
  let i = Object.keys(e).sort().join("|");
  O0e.useEffect(() => {
    if (!o || !r) return;
    let a = [];
    for (let l of Object.keys(s.current)) a.push(o.registerHandler({
      action: l,
      context: n,
      handler: () => s.current[l]?.(),
      singleKey: !0
    }));
    return () => {
      for (let l of a) l();
    };
  }, [n, i, o, r]);
}
function Zat(e, {
  isActive: t = !0
} = {}) {
  let n = KE(),
    r = O0e.useRef(e);
  r.current = e, O0e.useEffect(() => {
    if (!t || !n) return;
    return n.registerPreDispatch((o, s, i) => r.current(o, s, i));
  }, [t, n]);
}
var O0e;