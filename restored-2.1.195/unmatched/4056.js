// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u8t
// class=new  (no 2.1.88 match)
// note: 0 renamed
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
  if (e === void 0) return !0;
  return e === t;
}
function D6n(e) {
  return e ?? "main session";
}