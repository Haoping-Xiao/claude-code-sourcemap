// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B4l
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var B4l = Q((q6S, N4l) => {
  var kUf = d1e();
  function rAt(e) {
    if (this.mode = kUf.BYTE, typeof e === "string") this.data = new TextEncoder().encode(e);else this.data = new Uint8Array(e);
  }
  rAt.getBitsLength = function (t) {
    return t * 8;
  };
  rAt.prototype.getLength = function () {
    return this.data.length;
  };
  rAt.prototype.getBitsLength = function () {
    return rAt.getBitsLength(this.data.length);
  };
  rAt.prototype.write = function (e) {
    for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8);
  };
  N4l.exports = rAt;
});