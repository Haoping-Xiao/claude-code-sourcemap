// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MGe
// matched 2.1.88 source: node_modules/asynckit/lib/defer.js
// class=partial  jaccard=0.2036  score=0.2036  fileCov=1
// note: low-confidence suggestion: node_modules/asynckit/lib/defer.js; dir inferred from dep-graph -> hooks; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var MGe = E(() => {
  Tc();
  Xge();
  m0();
  C6d = /^[\p{L}\p{N}\p{M}_]$/u, Xat = /\s/, I6d = /\p{N}/u, x6d = new RegExp(uZr + "$"), k6d = new RegExp("^" + uZr), R6d = new RegExp(uZr, "g");
});
var pZr = {};
_t(pZr, {
  prewarm: () => prewarm,
  isModifierPressed: () => isModifierPressed,
  getModifiers: () => getModifiers
});
function L6d(e) {
  return typeof e === "object" && e !== null && "getModifiers" in e && typeof e.getModifiers === "function" && "isModifierPressed" in e && typeof e.isModifierPressed === "function";
}
function dZr() {
  if (tPn) return tPn;
  return null;
}
function getModifiers() {
  let e = dZr();
  if (!e) return [];
  try {
    return e.getModifiers();
  } catch {
    return [];
  }
}
function isModifierPressed(e) {
  let t = dZr();
  if (!t) return !1;
  try {
    return t.isModifierPressed(e);
  } catch {
    return !1;
  }
}
function prewarm() {
  dZr();
}
var n6i,
  r6i,
  nPn,
  tPn = null;