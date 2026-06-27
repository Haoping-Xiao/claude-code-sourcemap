// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FIo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FIo = Q((adb, Bcl) => {
  var Ncl = S_t();
  Bcl.exports = UIo;
  function UIo() {
    Ncl.call(this), this.view = null, this.detail = 0;
  }
  UIo.prototype = Object.create(Ncl.prototype, {
    constructor: {
      value: UIo
    },
    initUIEvent: {
      value: function (e, t, n, r, o) {
        this.initEvent(e, t, n), this.view = r, this.detail = o;
      }
    }
  });
});