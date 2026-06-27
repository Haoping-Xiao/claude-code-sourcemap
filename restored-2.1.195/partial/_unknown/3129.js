// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rEa
// matched 2.1.88 source: node_modules/@inquirer/core/dist/esm/lib/pagination/use-pagination.mjs
// class=partial  jaccard=0.246  score=0.536  fileCov=0.3125
// note: low-confidence suggestion: node_modules/@inquirer/core/dist/esm/lib/pagination/use-pagination.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function oEa({
  active: e,
  pageSize: t,
  total: n
}) {
  let r = Math.floor(t / 2);
  if (n <= t || e < r) return e;
  if (e >= n - r) return e + t - n;
  return r;
}
function sEa({
  active: e,
  lastActive: t,
  total: n,
  pageSize: r,
  pointer: o
}) {
  if (n <= r) return e;
  if (t < e && e - t < r) return Math.min(Math.floor(r / 2), o + e - t);
  return o;
}
function Cco({
  items: e,
  active: t,
  renderItem: n,
  pageSize: r,
  loop: o = true
}) {
  let s = DLe({
      position: 0,
      lastActive: 0
    }),
    i = o ? sEa({
      active: t,
      lastActive: s.current.lastActive,
      total: e.length,
      pageSize: r,
      pointer: s.current.position
    }) : oEa({
      active: t,
      total: e.length,
      pageSize: r
    });
  return s.current.position = i, s.current.lastActive = t, nEa({
    items: e,
    width: xBn(),
    renderItem: n,
    active: t,
    position: i,
    pageSize: r
  }).join(`
`);
}