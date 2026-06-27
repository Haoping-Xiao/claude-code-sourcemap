// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qAs
// matched 2.1.88 source: node_modules/cross-spawn/lib/parse.js
// class=partial  jaccard=0.2167  score=1  fileCov=0.2167
// note: low-confidence suggestion: node_modules/cross-spawn/lib/parse.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qAs = Q((bug, WAs) => {
  var XPu = require("path"),
    jAs = PAs(),
    GAs = MAs(),
    JPu = FAs(),
    QPu = /\.(?:com|exe)$/i,
    ZPu = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function eMu(e) {
    e.file = jAs(e);
    let t = e.file && JPu(e.file);
    if (t) return e.args.unshift(e.file), e.command = t, jAs(e);
    return e.file;
  }
  function tMu(e) {
    return e;
  }
  function nMu(e, t, n) {
    if (t && !Array.isArray(t)) n = t, t = null;
    t = t ? t.slice(0) : [], n = Object.assign({}, n);
    let r = {
      command: e,
      args: t,
      options: n,
      file: void 0,
      original: {
        command: e,
        args: t
      }
    };
    return n.shell ? r : tMu(r);
  }
  WAs.exports = nMu;
});