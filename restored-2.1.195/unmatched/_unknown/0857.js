// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BLs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BLs = Q(hPr => {
  var NLs = e => encodeURIComponent(e).replace(/[!'()*]/g, Eju),
    Eju = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
    Aju = e => e.split("/").map(NLs).join("/");
  hPr.escapeUri = NLs;
  hPr.escapeUriPath = Aju;
});