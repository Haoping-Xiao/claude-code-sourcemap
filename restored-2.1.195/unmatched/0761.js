// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gIs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gIs = Q(mIs => {
  function zNu(e) {
    let t = {};
    if (e = e.replace(/^\?/, ""), e) for (let n of e.split("&")) {
      let [r, o = null] = n.split("=");
      if (r = decodeURIComponent(r), o) o = decodeURIComponent(o);
      if (!(r in t)) t[r] = o;else if (Array.isArray(t[r])) t[r].push(o);else t[r] = [t[r], o];
    }
    return t;
  }
  mIs.parseQueryString = zNu;
});