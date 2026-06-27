// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C4c
// matched 2.1.88 source: node_modules/extend/index.js
// class=partial  jaccard=0.1112  score=0.8091  fileCov=0.1142
// note: low-confidence suggestion: node_modules/extend/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var C4c = Q((HzH, w4c) => {
  var NJo = Dnn();
  function v4c(e, ...t) {
    for (let n of t) {
      if (!NJo(n)) continue;
      for (let [r, o] of Object.entries(n)) {
        if (r === "__proto__" || r === "constructor") continue;
        if (NJo(e[r]) && NJo(o)) e[r] = v4c(e[r], o);else if (typeof o !== "undefined") e[r] = o;
      }
    }
    return e;
  }
  w4c.exports = v4c;
});