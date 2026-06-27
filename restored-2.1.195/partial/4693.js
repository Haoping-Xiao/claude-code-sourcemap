// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YOe
// matched 2.1.88 source: node_modules/mute-stream/lib/index.js
// class=partial  jaccard=0.2233  score=0.6018  fileCov=0.2621
// note: low-confidence suggestion: node_modules/mute-stream/lib/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var YOe = E(() => {
  At();
  Bi();
  aEe();
  OI();
  gNl = require("fs"), zQ = require("fs/promises"), CNo = require("os"), wKe = require("path");
});
function dnr(e, t) {
  let n = new yNl.StringDecoder("utf8"),
    r = "",
    o = !1,
    s = a => {
      if (o) return;
      r += typeof a === "string" ? a : n.write(a);
      let l;
      while ((l = r.indexOf(`
`)) >= 0) {
        let c = r.slice(0, l);
        if (r = r.slice(l + 1), c) t(c);
      }
      if (r.length > E$f) {
        if (o = !0, r = "", "destroy" in e) e.destroy();
      }
    },
    i = () => {
      if (o) return;
      if (r += n.end(), r) t(r), r = "";
    };
  return e.on("data", s), e.on("end", i), e.on("close", i), () => {
    e.off("data", s), e.off("end", i), e.off("close", i);
  };
}
var yNl,
  E$f = 1048576;