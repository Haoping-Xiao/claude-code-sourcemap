// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qqn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qqn = Q(fgt => {
  Object.defineProperty(fgt, "__esModule", {
    value: true
  });
  fgt.ExactPredicate = fgt.PatternPredicate = void 0;
  var D6p = /[\^$\\.+?()[\]{}|]/g;
  class zEo {
    _matchAll;
    _regexp;
    constructor(e) {
      if (e === "*") this._matchAll = true, this._regexp = /.*/;else this._matchAll = false, this._regexp = new RegExp(zEo.escapePattern(e));
    }
    match(e) {
      if (this._matchAll) return true;
      return this._regexp.test(e);
    }
    static escapePattern(e) {
      return `^${e.replace(D6p, "\\$&").replace("*", ".*")}$`;
    }
    static hasWildcard(e) {
      return e.includes("*");
    }
  }
  fgt.PatternPredicate = zEo;
  class Q8a {
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
  fgt.ExactPredicate = Q8a;
});