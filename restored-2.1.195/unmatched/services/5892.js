// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VXo
// matched 2.1.88 source: node_modules/@smithy/eventstream-codec/dist-cjs/index.js
// class=new  jaccard=0.0115  score=0.119  fileCov=0.0125
// note: nearest: node_modules/@smithy/eventstream-codec/dist-cjs/index.js (0.0115); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Snn(e) {
  switch (e) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new od(`Unsupported JWE Algorithm: ${e}`);
  }
}
var Qme = e => VNe(new Uint8Array(Snn(e) >> 3));