// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rpl
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rpl = Q((Zdb, kpl) => {
  var Xcf = XKn(),
    Jcf = Bxo();
  kpl.exports = Zxo;
  function Zxo(e, t) {
    this._window = e, this._href = t;
  }
  Zxo.prototype = Object.create(Jcf.prototype, {
    constructor: {
      value: Zxo
    },
    href: {
      get: function () {
        return this._href;
      },
      set: function (e) {
        this.assign(e);
      }
    },
    assign: {
      value: function (e) {
        var t = new Xcf(this._href),
          n = t.resolve(e);
        this._href = n;
      }
    },
    replace: {
      value: function (e) {
        this.assign(e);
      }
    },
    reload: {
      value: function () {
        this.assign(this.href);
      }
    },
    toString: {
      value: function () {
        return this.href;
      }
    }
  });
});