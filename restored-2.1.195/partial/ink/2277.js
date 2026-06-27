// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gUi
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=partial  jaccard=0.064  score=1  fileCov=0.064
// note: low-confidence suggestion: node_modules/react/cjs/react.production.js; dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gUi = Q(j0n => {
  var IBd = Symbol.for("react.transitional.element"),
    xBd = Symbol.for("react.fragment");
  function mUi(e, t, n) {
    var r = null;
    if (n !== void 0 && (r = "" + n), t.key !== void 0 && (r = "" + t.key), "key" in t) {
      n = {};
      for (var o in t) o !== "key" && (n[o] = t[o]);
    } else n = t;
    return t = n.ref, {
      $$typeof: IBd,
      type: e,
      key: r,
      ref: t !== void 0 ? t : null,
      props: n
    };
  }
  j0n.Fragment = xBd;
  j0n.jsx = mUi;
  j0n.jsxs = mUi;
});