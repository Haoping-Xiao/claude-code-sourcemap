// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Vr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Vr = Q(yVr => {
  Object.defineProperty(yVr, "__esModule", {
    value: true
  });
  yVr.fromArrayBufferToHex = GCd;
  function GCd(e) {
    return Array.from(new Uint8Array(e)).map(n => n.toString(16).padStart(2, "0")).join("");
  }
});