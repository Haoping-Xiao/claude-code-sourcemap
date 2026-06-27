// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jGo
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0068  score=0.0842  fileCov=0.0073
// note: nearest: src/utils/sessionStorage.ts (0.0068); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jGo = E(() => {
  iu();
  lH();
  z7r();
  Jke();
  AW();
  ZS();
  OM();
  q7();
  jh();
  kt();
  wr();
  At();
  Bi();
  _Ge();
  Is();
  Vke();
  Jt();
  nne();
  Gfe();
  UGo();
  WL();
  q$();
  Qnc = require("crypto"), Znc = require("net"), sJf = Buffer.from([127]), dar = Buffer.from("\x1B[98;5u", "latin1"), par = Buffer.from("\x1B[27;5;98~", "latin1"), nrc = Buffer.from("\x1B[122;5u", "latin1"), rrc = Buffer.from("\x1B[27;5;122~", "latin1"), iJf = Buffer.from("\x1B[27u", "latin1"), aJf = Buffer.from("\x1B[27;1u", "latin1"), cJf = Buffer.from("\x1B[99;5u", "latin1"), uJf = Buffer.from("\x1B[27;5;99~", "latin1"), Xnc = Buffer.from(uz, "ascii"), hQt = Buffer.from("\x1B[?9001", "ascii");
  gZ = Buffer.alloc(0);
});
function mar() {
  if (Vt() === "macos") return 0;
  return at("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
}
function _Qt() {
  let e = mar();
  return e > 0 && irc.freemem() < e;
}
function arc() {
  return at("tengu_bg_retire_grace_bridged_min", 480) * 60000;
}
function gar() {
  return at("tengu_bg_attach_upgrade", !0);
}
var irc;