// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fZr
// matched 2.1.88 source: vendor/modifiers-napi-src/index.ts
// class=partial  jaccard=0.1721  score=1  fileCov=0.1721
// note: low-confidence suggestion: vendor/modifiers-napi-src/index.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fZr = E(() => {
  n6i = require("module"), r6i = require("url"), nPn = require("path");
});
function s6i() {
  return;
}
function i6i(e) {
  return !1;
}
var o6i = !1;
function Kj(e, t, n, r = $6d, o) {
  let s = ks(),
    i = P0e.useRef(0),
    a = P0e.useRef(void 0),
    l = P0e.useCallback(() => {
      if (a.current) a.current(), a.current = void 0;
    }, []);
  return P0e.useEffect(() => () => {
    l();
  }, [l]), P0e.useCallback(() => {
    let c = Date.now();
    if (c - i.current <= r && a.current !== void 0) l(), e(!1), t();else n?.(), e(!0), l(), a.current = s.setTimeout(() => {
      e(!1), a.current = void 0, o?.();
    }, r);
    i.current = c;
  }, [e, t, n, o, l, s, r]);
}
var P0e,
  $6d = 800;