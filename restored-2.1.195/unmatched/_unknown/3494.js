// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g3n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var g3n = Q(zft => {
  Object.defineProperty(zft, "__esModule", {
    value: true
  });
  zft.ExactPredicate = zft.PatternPredicate = void 0;
  var eOp = /[\^$\\.+?()[\]{}|]/g;
  class Ayo {
    _matchAll;
    _regexp;
    constructor(e) {
      if (e === "*") this._matchAll = true, this._regexp = /.*/;else this._matchAll = false, this._regexp = new RegExp(Ayo.escapePattern(e));
    }
    match(e) {
      if (this._matchAll) return true;
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
      if (this._matchAll) return true;
      if (e === this._pattern) return true;
      return false;
    }
  }
  zft.ExactPredicate = rUa;
});