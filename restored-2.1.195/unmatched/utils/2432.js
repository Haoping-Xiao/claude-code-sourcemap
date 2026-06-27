// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QBt
// matched 2.1.88 source: src/components/TextInput.tsx
// class=new  jaccard=0.0183  score=0.2977  fileCov=0.0191
// note: nearest: src/components/TextInput.tsx (0.0183); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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