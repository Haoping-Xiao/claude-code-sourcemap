// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FCs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FCs = Q(VLr => {
  var UCs = e => encodeURIComponent(e).replace(/[!'()*]/g, ANu),
    ANu = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
    HNu = e => e.split("/").map(UCs).join("/");
  VLr.escapeUri = UCs;
  VLr.escapeUriPath = HNu;
});