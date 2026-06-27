// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZSe
// matched 2.1.88 source: src/utils/computerUse/appNames.ts
// class=new  jaccard=0.0542  score=0.6514  fileCov=0.0559
// note: nearest: src/utils/computerUse/appNames.ts (0.0542); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZSe = E(() => {
  je();
  k7();
  y1();
  Un();
  kt();
  Pzr();
});
function uxp(e, t) {
  if (ixp.some(n => e.startsWith(n))) return true;
  if (t) {
    let n = t.endsWith("/") ? `${t}Applications/` : `${t}/Applications/`;
    if (e.startsWith(n)) return true;
  }
  return false;
}
function dxp(e) {
  return axp.some(t => t.test(e));
}
function IRa(e, t) {
  let n = new Set();
  return e.map(r => r.trim()).filter(r => {
    if (!r) return false;
    if (r.length > 40) return false;
    if (t && !cxp.test(r)) return false;
    if (n.has(r)) return false;
    return n.add(r), true;
  }).sort((r, o) => r.localeCompare(o));
}
function pxp(e) {
  let t = IRa(e, true);
  if (t.length <= 50) return t;
  return [...t.slice(0, 50), `\u2026 and ${t.length - 50} more`];
}
function fxp(e) {
  return IRa(e, false);
}
function xRa(e, t) {
  let {
      alwaysKept: n,
      rest: r
    } = e.reduce((i, a) => {
      if (lxp.has(a.bundleId)) i.alwaysKept.push(a.displayName);else if (uxp(a.path, t) && !dxp(a.displayName)) i.rest.push(a.displayName);
      return i;
    }, {
      alwaysKept: [],
      rest: []
    }),
    o = fxp(n),
    s = new Set(o);
  return [...o, ...pxp(r).filter(i => !s.has(i))];
}
var ixp, axp, lxp, cxp;