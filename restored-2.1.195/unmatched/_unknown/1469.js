// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module csi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var csi = Q((xsh, lsi) => {
  lsi.exports = Opd;
  var $pd = Object.getPrototypeOf || function (e) {
    return e.__proto__;
  };
  function Opd(e) {
    if (e === null || typeof e !== "object") return e;
    if (e instanceof Object) var t = {
      __proto__: $pd(e)
    };else var t = Object.create(null);
    return Object.getOwnPropertyNames(e).forEach(function (n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
    }), t;
  }
});