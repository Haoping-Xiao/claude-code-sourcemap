// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MGe
// matched 2.1.88 source: vendor/modifiers-napi-src/index.ts
// class=partial  jaccard=0.19  score=0.4643  fileCov=0.2433
// note: low-confidence suggestion: vendor/modifiers-napi-src/index.ts; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: prewarm, isModifierPressed, getModifiers
// [unwrapped __esm module MGe] deps: marked/lib/marked.esm.js, utils/truncate.ts, ink/line-width-cache.ts
C6d = /^[\p{L}\p{N}\p{M}_]$/u, Xat = /\s/, I6d = /\p{N}/u, x6d = new RegExp(uZr + "$"), k6d = new RegExp("^" + uZr), R6d = new RegExp(uZr, "g");
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
  if (!t) return false;
  try {
    return t.isModifierPressed(e);
  } catch {
    return false;
  }
}
function prewarm() {
  dZr();
}
var n6i,
  r6i,
  nPn,
  tPn = null;