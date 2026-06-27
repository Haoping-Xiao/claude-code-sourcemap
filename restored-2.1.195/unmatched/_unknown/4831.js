// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M4l
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var M4l = Q((G6S, P4l) => {
  var IUf = d1e();
  function tAt(e) {
    this.mode = IUf.NUMERIC, this.data = e.toString();
  }
  tAt.getBitsLength = function (t) {
    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
  };
  tAt.prototype.getLength = function () {
    return this.data.length;
  };
  tAt.prototype.getBitsLength = function () {
    return tAt.getBitsLength(this.data.length);
  };
  tAt.prototype.write = function (t) {
    let n, r, o;
    for (n = 0; n + 3 <= this.data.length; n += 3) r = this.data.substr(n, 3), o = parseInt(r, 10), t.put(o, 10);
    let s = this.data.length - n;
    if (s > 0) r = this.data.substr(n), o = parseInt(r, 10), t.put(o, s * 3 + 1);
  };
  P4l.exports = tAt;
});