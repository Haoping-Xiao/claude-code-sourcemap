// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n4r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var n4r = E(() => {
  _je();
});
var r4r = ({
  query: e = {}
}) => {
  let t = [],
    n = {};
  for (let r of Object.keys(e).sort()) {
    if (r.toLowerCase() === _ci) continue;
    t.push(r);
    let o = e[r];
    if (typeof o === "string") n[r] = `${axe(r)}=${axe(o)}`;else if (Array.isArray(o)) n[r] = o.slice(0).reduce((s, i) => s.concat([`${axe(r)}=${axe(i)}`]), []).sort().join("&");
  }
  return t.map(r => n[r]).filter(r => r).join("&");
};