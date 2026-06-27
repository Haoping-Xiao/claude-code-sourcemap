// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hua
// matched 2.1.88 source: node_modules/long/umd/index.js
// class=partial  jaccard=0.1017  score=1  fileCov=0.1017
// note: low-confidence suggestion: node_modules/long/umd/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hua = E(() => {
  Vb();
});
function $Nn(e, t) {
  if (!e || t === null || typeof t !== "object") return;
  if (e.type === "object" && e.properties && typeof e.properties === "object") {
    let n = t,
      r = e.properties;
    for (let o of Object.keys(r)) {
      let s = r[o];
      if (n[o] === void 0 && Object.prototype.hasOwnProperty.call(s, "default")) n[o] = s.default;
      if (n[o] !== void 0) $Nn(s, n[o]);
    }
  }
  if (Array.isArray(e.anyOf)) {
    for (let n of e.anyOf) if (typeof n !== "boolean") $Nn(n, t);
  }
  if (Array.isArray(e.oneOf)) {
    for (let n of e.oneOf) if (typeof n !== "boolean") $Nn(n, t);
  }
}
function wup(e) {
  if (!e) return {
    supportsFormMode: false,
    supportsUrlMode: false
  };
  let t = e.form !== void 0,
    n = e.url !== void 0;
  return {
    supportsFormMode: t || !t && !n,
    supportsUrlMode: n
  };
}
var ONn;