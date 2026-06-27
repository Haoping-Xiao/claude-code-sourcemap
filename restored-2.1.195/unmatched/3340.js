// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ymo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ymo = E(() => {
  vGt();
  MM();
  zH();
});
function D2n(e) {
  return e.replace(/`[^`\n]+`/g, (t, n) => {
    let r = e[n - 1];
    return r === "!" || r === "`" ? t : "`" + Ff(" ", t.length - 2) + "`";
  });
}
function c6(e) {
  return e.replace(/`!/g, "` !").replace(/!`/g, "! `").replace(/(^|\s)!/gm, "$1\\!");
}