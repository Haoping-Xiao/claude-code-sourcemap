// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FJr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FJr = E(() => {
  fGe();
  X_e();
  OLn = R(rt(), 1);
});
function BLn(e) {
  let t = _8.useContext(SW),
    n = e === null ? null : Math.ceil(BJr(e) / $U) * $U,
    r = _8.useRef(null),
    o = _8.useMemo(() => {
      if (!t || n === null) return rat;
      return s => t.subscribeFollower(() => {
        r.current = t.now(), s();
      });
    }, [t, n]);
  return _8.useSyncExternalStore(o, () => {
    if (!t || n === null) return r.current = null, 0;
    if (r.current === null) r.current = t.now();
    return Math.floor(r.current / n) * n;
  });
}
function Gc(e, t, n) {
  let r = _8.useRef(e);
  r.current = e;
  let o = _8.useContext(SW),
    s = n?.immediate ?? !1,
    i = _8.useRef(null),
    a = _8.useMemo(() => !o || t === null ? l => (i.current = null, () => {}) : l => {
      if (s && i.current === null) r.current();
      i.current = t;
      let c = !1,
        u,
        d = () => {
          if (c) return;
          try {
            r.current();
          } finally {
            if (!c) u = o.setTimeout(d, t);
          }
        };
      return u = o.setTimeout(d, t), () => {
        c = !0, u();
      };
    }, [o, t, s]);
  _8.useSyncExternalStore(a, mLn);
}
var _8;