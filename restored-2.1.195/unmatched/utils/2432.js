// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QBt
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var QBt = E(() => {
  ZS();
  Un();
  fn();
  uf();
  Y9();
});
function wne() {
  if (ZBt !== void 0) return ZBt;
  if (Oe.CLAUDE_CODE_ACCESSIBILITY) return ZBt = true;
  if (UD()) return ZBt = true;
  return ZBt = !p0e() && LJr();
}
function LJr() {
  if (Oe.CLAUDE_CODE_ACCESSIBILITY) return true;
  if (UD()) return true;
  if (ut(process.env.CLAUDE_CODE_NATIVE_CURSOR)) return true;
  return at("tengu_native_cursor", false);
}
var ZBt;