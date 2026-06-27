// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lql
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0022  score=0.8247  fileCov=0.0022
// note: nearest: src/screens/REPL.tsx (0.0022); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lql = E(() => {
  Ye();
  kt();
  m_t();
  wAe();
  mVe();
  SEe();
  Cor = R(lt(), 1), iql = R(rt(), 1), zN = R(se(), 1);
  xde(I4f);
});
function uql({
  char: e = Gee
}) {
  let t = Sd(),
    [n] = JXt.useState(() => Mv(Dr().prefersReducedMotion)),
    [r, o] = JXt.useState(n || t),
    s = JXt.useRef(null),
    [i, a] = Kf(r ? null : 50);
  if (Pd(() => o(true), r ? null : D4f, [r]), r) return XXt.jsx(U, {
    ref: i,
    children: XXt.jsx(w, {
      color: P4f,
      children: e
    })
  });
  if (s.current === null) s.current = a;
  let c = (a - s.current) / cql * 360 % 360,
    u = yb() ? oPn(c) : c;
  return XXt.jsx(U, {
    ref: i,
    children: XXt.jsx(w, {
      color: qM(iPn(u)),
      children: e
    })
  });
}
var JXt,
  XXt,
  cql = 1500,
  L4f = 2,
  D4f,
  P4f;