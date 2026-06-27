// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BAs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BAs = Q((yug, NAs) => {
  var zPu = OAs();
  NAs.exports = (e = "") => {
    let t = e.match(zPu);
    if (!t) return null;
    let [n, r] = t[0].replace(/#! ?/, "").split(" "),
      o = n.split("/").pop();
    if (o === "env") return r;
    return r ? `${o} ${r}` : o;
  };
});