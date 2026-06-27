// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QBt
// class=new  (no 2.1.88 match)
// note: 0 renamed
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
  if (Oe.CLAUDE_CODE_ACCESSIBILITY) return ZBt = !0;
  if (UD()) return ZBt = !0;
  return ZBt = !p0e() && LJr();
}
function LJr() {
  if (Oe.CLAUDE_CODE_ACCESSIBILITY) return !0;
  if (UD()) return !0;
  if (ut(process.env.CLAUDE_CODE_NATIVE_CURSOR)) return !0;
  return at("tengu_native_cursor", !1);
}
var ZBt;