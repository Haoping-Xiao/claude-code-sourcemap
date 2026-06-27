// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YOe
// matched 2.1.88 source: node_modules/mute-stream/lib/index.js
// class=partial  jaccard=0.1247  score=0.5708  fileCov=0.1376
// note: low-confidence suggestion: node_modules/mute-stream/lib/index.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YOe] deps: At, Bi, aEe, OI
gNl = require("fs"), zQ = require("fs/promises"), CNo = require("os"), wKe = require("path");
function dnr(e, t) {
  let n = new yNl.StringDecoder("utf8"),
    r = "",
    o = false,
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
        if (o = true, r = "", "destroy" in e) e.destroy();
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