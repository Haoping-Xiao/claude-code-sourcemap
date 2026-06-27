// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rOo
// matched 2.1.88 source: node_modules/protobufjs/src/type.js
// class=new  jaccard=0.0152  score=0.4939  fileCov=0.0155
// note: nearest: node_modules/protobufjs/src/type.js (0.0152); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rOo] deps: utils/fsOperations.ts
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
function VSt(e) {
  return Skf.some(t => e.includes(t));
}
function Rer(e) {
  return e.some(t => {
    try {
      return VSt(De(t));
    } catch {
      return true;
    }
  });
}
var Skf;