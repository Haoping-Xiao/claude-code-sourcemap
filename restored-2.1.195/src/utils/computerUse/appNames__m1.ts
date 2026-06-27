// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZSe
// matched 2.1.88 source: src/utils/computerUse/appNames.ts
// class=modified (alt of src/utils/computerUse/appNames.ts)  jaccard=0.1177  score=0.815  fileCov=0.1209
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function uxp(e, t) {
  if (ixp.some((n) => e.startsWith(n))) return true;
  if (t) {
    let n = t.endsWith("/") ? `${t}Applications/` : `${t}/Applications/`;
    if (e.startsWith(n)) return true;
  }
  return false;
}
function dxp(e) {
  return axp.some((t) => t.test(e));
}
function IRa(e, t) {
  let n = new Set();
  return e
    .map((r) => r.trim())
    .filter((r) => {
      if (!r) return false;
      if (r.length > 40) return false;
      if (t && !cxp.test(r)) return false;
      if (n.has(r)) return false;
      return (n.add(r), true);
    })
    .sort((r, o) => r.localeCompare(o));
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
  let { alwaysKept: n, rest: r } = e.reduce(
      (i, a) => {
        if (lxp.has(a.bundleId)) i.alwaysKept.push(a.displayName);
        else if (uxp(a.path, t) && !dxp(a.displayName)) i.rest.push(a.displayName);
        return i;
      },
      {
        alwaysKept: [],
        rest: [],
      },
    ),
    o = fxp(n),
    s = new Set(o);
  return [...o, ...pxp(r).filter((i) => !s.has(i))];
}
var ixp, axp, lxp, cxp;
