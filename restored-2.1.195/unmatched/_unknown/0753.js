// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KLr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KLr = Q(jCs => {
  var zLr = FCs();
  function TNu(e) {
    let t = [];
    for (let n of Object.keys(e).sort()) {
      let r = e[n];
      if (n = zLr.escapeUri(n), Array.isArray(r)) for (let o = 0, s = r.length; o < s; o++) t.push(`${n}=${zLr.escapeUri(r[o])}`);else {
        let o = n;
        if (r || typeof r === "string") o += `=${zLr.escapeUri(r)}`;
        t.push(o);
      }
    }
    return t.join("&");
  }
  jCs.buildQueryString = TNu;
});