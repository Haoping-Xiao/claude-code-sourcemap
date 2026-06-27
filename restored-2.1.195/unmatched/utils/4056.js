// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u8t
// matched 2.1.88 source: src/utils/agentId.ts
// class=new  jaccard=0.0521  score=0.315  fileCov=0.0587
// note: nearest: src/utils/agentId.ts (0.0521); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var u8t = E(() => {
  je();
  vn();
  bm();
  tA();
  bH();
});
function gyt(e) {
  if (e.agentId) return e.agentId;
  let t = w0();
  return t ? Bu(t.agentId) : void 0;
}
function Crl(e, t) {
  if (e === void 0) return true;
  return e === t;
}
function D6n(e) {
  return e ?? "main session";
}