// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pee
// matched 2.1.88 source: src/services/oauth/crypto.ts
// class=modified (alt of src/services/oauth/crypto.ts)  jaccard=0.332  score=1  fileCov=0.332
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Pee = E(() => {
  fys();
  mys();
  D_ = {
    ...yxr,
    ...pys,
  };
});
function _xr(e, t) {
  return zwe(e, new D_.classes.URLSearchParams(), {
    visitor: function (n, r, o, s) {
      if (D_.isNode && or.isBuffer(n)) return (this.append(r, n.toString("base64")), !1);
      return s.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
