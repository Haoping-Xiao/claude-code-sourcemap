// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wDc
// matched 2.1.88 source: src/hooks/useVoiceIntegration.tsx
// class=new  jaccard=0.0298  score=0.6602  fileCov=0.0303
// note: nearest: src/hooks/useVoiceIntegration.tsx (0.0298); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wDc = E(() => {
  Ed();
  Ye();
  kt();
  z1();
  Vyt();
  xjt();
  uo();
  oo();
  e1();
  NX();
  Ao();
  TDc = R(lt(), 1), tve = R(rt(), 1), fvt = R(se(), 1);
});
function IDc() {
  let e = CDc.c(13),
    {
      addNotification: t
    } = Li(),
    n = mvt.useRef(null),
    r = mvt.useRef(false),
    o = G_(),
    s;
  e: s = null;
  let i = s,
    a;
  e: a = null;
  let l = a,
    c;
  if (e[3] === Symbol.for("react.memo_cache_sentinel")) c = () => {
    n.current = null;
  }, e[3] = c;else c = e[3];
  let u;
  if (e[4] === Symbol.for("react.memo_cache_sentinel")) u = [i?.intervalMs], e[4] = u;else u = e[4];
  mvt.useEffect(c, u);
  let d;
  if (e[5] !== t) d = (h, y) => false, e[5] = t, e[6] = d;else d = e[6];
  let p = d,
    f;
  if (e[7] !== p) f = () => {}, e[7] = p, e[8] = f;else f = e[8];
  let m;
  if (e[9] === Symbol.for("react.memo_cache_sentinel")) m = [l?.start, l?.end], e[9] = m;else m = e[9];
  mvt.useEffect(f, m);
  let g;
  if (e[10] !== t || e[11] !== p) g = () => {}, e[10] = t, e[11] = p, e[12] = g;else g = e[12];
  Gc(g, i || l ? ACm : null);
}
var CDc,
  mvt,
  xDc,
  ACm = 60000;