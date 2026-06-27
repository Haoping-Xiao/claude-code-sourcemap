// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mon
// matched 2.1.88 source: node_modules/lodash-es/_Stack.js
// class=partial  jaccard=0.1317  score=0.7235  fileCov=0.1386
// note: low-confidence suggestion: node_modules/lodash-es/_Stack.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mon] deps: lodash-es/_isKeyable.js, lts, uts, pts, lodash-es/_Hash.js
GXe.prototype.clear = rts;
GXe.prototype.delete = ats;
GXe.prototype.get = cts;
GXe.prototype.has = dts;
GXe.prototype.set = fts;
$Be = GXe;
function _9c(e, t) {
  var n = this.__data__;
  if (n instanceof Pve) {
    var r = n.__data__;
    if (!$ve || r.length < y9c - 1) return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new $Be(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var y9c = 200,
  gts;