// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wii
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wii = Q(hrt => {
  Object.defineProperty(hrt, "__esModule", {
    value: true
  });
  hrt.toUtf8 = hrt.fromUtf8 = void 0;
  function Lfd(e) {
    return new TextEncoder().encode(e);
  }
  hrt.fromUtf8 = Lfd;
  function Dfd(e) {
    return new TextDecoder("utf-8").decode(e);
  }
  hrt.toUtf8 = Dfd;
});