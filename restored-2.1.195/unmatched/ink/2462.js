// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jLn
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0236  score=0.8813  fileCov=0.0237
// note: nearest: node_modules/react/cjs/react.production.js (0.0236); dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jLn] deps: jh, EW
FLn = R(rt(), 1);
function Pd(e, t, n) {
  let r = ebe.useContext(SW),
    o = typeof e === "function",
    s = o ? e : null,
    i = o ? t : e,
    a = o ? void 0 : t,
    l = ebe.useRef(s);
  l.current = s;
  let c = ebe.useRef(null),
    u = r?.setTimeout ?? nat,
    d = ebe.useMemo(() => {
      if (i === null) return rat;
      let f = m => (c.current = null, m(), u(() => {
        if (c.current = f, o) l.current?.();else m();
      }, i));
      return f;
    }, [u, i, o, a, ...(n ?? [])]),
    p = ebe.useSyncExternalStore(d, o ? qWd : () => c.current === d);
  if (!o) return p;
}
var ebe,
  qWd = () => false;