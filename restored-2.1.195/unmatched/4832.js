// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O4l
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var O4l = Q((W6S, $4l) => {
  var xUf = d1e(),
    MUo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
  function nAt(e) {
    this.mode = xUf.ALPHANUMERIC, this.data = e;
  }
  nAt.getBitsLength = function (t) {
    return 11 * Math.floor(t / 2) + 6 * (t % 2);
  };
  nAt.prototype.getLength = function () {
    return this.data.length;
  };
  nAt.prototype.getBitsLength = function () {
    return nAt.getBitsLength(this.data.length);
  };
  nAt.prototype.write = function (t) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
      let r = MUo.indexOf(this.data[n]) * 45;
      r += MUo.indexOf(this.data[n + 1]), t.put(r, 11);
    }
    if (this.data.length % 2) t.put(MUo.indexOf(this.data[n]), 6);
  };
  $4l.exports = nAt;
});