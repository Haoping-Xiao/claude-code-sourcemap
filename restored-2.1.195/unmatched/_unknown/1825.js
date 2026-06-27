// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H5r
// matched 2.1.88 source: node_modules/semver/index.js
// class=new  jaccard=0.0452  score=1  fileCov=0.0452
// note: nearest: node_modules/semver/index.js (0.0452); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module H5r] (exports=Ekh, module=Zyi)
var Ekh = {};
var Zyi = {
  exports: Ekh
};
var Jyi = /^[0-9]+$/,
  Qyi = (e, t) => {
    let n = Jyi.test(e),
      r = Jyi.test(t);
    if (n && r) e = +e, t = +t;
    return e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
  },
  BSd = (e, t) => Qyi(t, e);
Zyi.exports = {
  compareIdentifiers: Qyi,
  rcompareIdentifiers: BSd
};