// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S7r
// matched 2.1.88 source: node_modules/semver/index.js
// class=new  jaccard=0.0452  score=1  fileCov=0.0452
// note: nearest: node_modules/semver/index.js (0.0452); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var S7r = Q((gKh, b2i) => {
  var y2i = /^[0-9]+$/,
    _2i = (e, t) => {
      let n = y2i.test(e),
        r = y2i.test(t);
      if (n && r) e = +e, t = +t;
      return e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
    },
    TFd = (e, t) => _2i(t, e);
  b2i.exports = {
    compareIdentifiers: _2i,
    rcompareIdentifiers: TFd
  };
});