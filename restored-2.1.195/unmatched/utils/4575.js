// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rOo
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rOo = E(() => {
  Jt();
  nOo = class nOo {
    chunks = [];
    static encoder = new TextEncoder();
    push(e) {
      if (e.length > 0) this.chunks.push(nOo.encoder.encode(e));
    }
    toBuffer() {
      return Buffer.concat(this.chunks);
    }
  };
});
function VSt(e) {
  return Skf.some(t => e.includes(t));
}
function Rer(e) {
  return e.some(t => {
    try {
      return VSt(De(t));
    } catch {
      return !0;
    }
  });
}
var Skf;