// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t4r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var t4r = E(() => {
  lMt();
  uMt();
  _je();
  SHn = {}, e4r = [];
});
var AHn = ({
  headers: e
}, t, n) => {
  let r = {};
  for (let o of Object.keys(e).sort()) {
    if (e[o] == null) continue;
    let s = o.toLowerCase();
    if (s in Sci || t?.has(s) || Eci.test(s) || Aci.test(s)) {
      if (!n || n && !n.has(s)) continue;
    }
    r[s] = e[o].trim().replace(/\s+/g, " ");
  }
  return r;
};