// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g3n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var g3n = Q(zft => {
  Object.defineProperty(zft, "__esModule", {
    value: !0
  });
  zft.ExactPredicate = zft.PatternPredicate = void 0;
  var eOp = /[\^$\\.+?()[\]{}|]/g;
  class Ayo {
    _matchAll;
    _regexp;
    constructor(e) {
      if (e === "*") this._matchAll = !0, this._regexp = /.*/;else this._matchAll = !1, this._regexp = new RegExp(Ayo.escapePattern(e));
    }
    match(e) {
      if (this._matchAll) return !0;
      return this._regexp.test(e);
    }
    static escapePattern(e) {
      return `^${e.replace(eOp, "\\$&").replace("*", ".*")}$`;
    }
    static hasWildcard(e) {
      return e.includes("*");
    }
  }
  zft.PatternPredicate = Ayo;
  class rUa {
    _matchAll;
    _pattern;
    constructor(e) {
      this._matchAll = e === void 0, this._pattern = e;
    }
    match(e) {
      if (this._matchAll) return !0;
      if (e === this._pattern) return !0;
      return !1;
    }
  }
  zft.ExactPredicate = rUa;
});