// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V9n
// matched 2.1.88 source: src/components/Spinner/useStalledAnimation.ts
// class=modified  jaccard=0.577  score=1  fileCov=0.577
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module V9n] deps: Tc, Ye
fJa = R(rt(), 1);
function $Ho(e, t, n = false, r = false) {
  let o = UVt.useRef(e),
    s = UVt.useRef(t),
    i = UVt.useRef(0),
    a = UVt.useRef(e);
  if (t > s.current) ((o.current = e), (s.current = t), (i.current = 0), (a.current = e));
  let l;
  if (n) ((l = 0), (o.current = e));
  else l = e - o.current;
  let c = l > 10000 /* 1e4 */ && !n,
    u = c ? Math.min((l - 10000) /* 1e4 */ / 10000 /* 1e4 */, 1) : 0;
  if (!r && (u > 0 || i.current > 0)) {
    let p = e - a.current;
    if (p >= 50) {
      let f = Math.floor(p / 50),
        m = i.current;
      for (let g = 0; g < f; g++) {
        let h = u - m;
        if (Math.abs(h) < 0.01) {
          m = u;
          break;
        }
        m += h * 0.1;
      }
      ((i.current = m), (a.current = e));
    }
  } else ((i.current = u), (a.current = e));
  let d = r ? u : i.current;
  return {
    isStalled: c,
    stalledIntensity: d,
    timeSinceLastToken: l,
  };
}
var UVt;
