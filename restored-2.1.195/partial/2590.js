// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BZr
// matched 2.1.88 source: src/components/permissions/rules/AddWorkspaceDirectory.tsx
// class=partial  jaccard=0.1689  score=1  fileCov=0.1689
// note: low-confidence suggestion: src/components/permissions/rules/AddWorkspaceDirectory.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BZr = E(() => {
  si();
  qLn();
  Mg();
  Ye();
  ps();
  TZr();
  Cc();
  Vl();
  Bs();
  vi();
  f_();
  Ko();
  OUt();
  NUt = R(lt(), 1), GGe = R(rt(), 1), $v = R(se(), 1), sKd = [{
    value: "yes-session",
    label: "Yes, for this session"
  }, {
    value: "yes-remember",
    label: "Yes, and remember this directory"
  }, {
    value: "no",
    label: "No"
  }];
});
function Gzi(e) {
  let t = e.toUpperCase();
  return cKd.has(t) || jUt.some(n => t.startsWith(n));
}
function Wzi(e) {
  return uKd.has(e.toUpperCase());
}
var UUt, UZr, FUt, FZr, jZr, jzi, cKd, jUt, uKd, qzi, ilt;