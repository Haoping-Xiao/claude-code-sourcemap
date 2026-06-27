// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nxl
// matched 2.1.88 source: src/utils/codeIndexing.ts
// class=new  jaccard=0.03  score=0.773  fileCov=0.0303
// note: nearest: src/utils/codeIndexing.ts (0.03); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nxl = E(() => {
  dn();
  QQn();
});
function Bxl(e) {
  let t = e.toLowerCase();
  return /\b(wtf|wth|ffs|omfg|shit(ty|tiest)?|dumbass|horrible|awful|piss(ed|ing)? off|piece of (shit|crap|junk)|what the (fuck|hell)|fucking? (broken|useless|terrible|awful|horrible)|fuck you|screw (this|you)|so frustrating|this sucks|damn it)\b/.test(t);
}
function Uxl(e) {
  let t = e.toLowerCase().trim();
  if (t === "continue") return true;
  return /\b(keep going|go on)\b/.test(t);
}
function Fxl(e) {
  let t = e.toLowerCase();
  return /\bgo to (sleep|bed)\b/.test(t);
}
function jxl(e) {
  let t = e.trim();
  if (t.length > 40) return false;
  if (/^(\?+|\.{2,}|\u2026+)$/u.test(t)) return true;
  let n = t.toLowerCase().replace(/^[\u00BF\u00A1]+|[?!.\u00BF\u00A1\uFF1F\uFF01\u3002\u2026]+$/gu, "").trim();
  if (/^(hi+|hello+|he+y+|yo+)$/.test(n)) return true;
  return qvf.has(n);
}
var qvf;