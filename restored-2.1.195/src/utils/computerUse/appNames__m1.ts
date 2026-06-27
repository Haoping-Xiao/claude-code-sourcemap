// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZSe
// matched 2.1.88 source: src/utils/computerUse/appNames.ts
// class=modified (alt of src/utils/computerUse/appNames.ts)  jaccard=0.1177  score=0.815  fileCov=0.1209
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function isUserFacingPath(path, homeDir) {
  if (ixp.some((n) => path.startsWith(n))) return true;
  if (homeDir) {
    let n = homeDir.endsWith("/") ? `${homeDir}Applications/` : `${homeDir}/Applications/`;
    if (path.startsWith(n)) return true;
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
  let filtered = IRa(e, true);
  if (filtered.length <= 50) return filtered;
  return [...filtered.slice(0, 50), `\u2026 and ${filtered.length - 50} more`];
}
function fxp(e) {
  return IRa(e, false);
}
function xRa(e, t) {
  let { alwaysKept: n, rest: r } = e.reduce(
      (i, a) => {
        if (lxp.has(a.bundleId)) i.alwaysKept.push(a.displayName);
        else if (isUserFacingPath(a.path, t) && !dxp(a.displayName)) i.rest.push(a.displayName);
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
