// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CUa
// matched 2.1.88 source: node_modules/@opentelemetry/sdk-trace-base/build/src/platform/node/RandomIdGenerator.js
// class=partial  jaccard=0.2426  score=0.6099  fileCov=0.2872
// note: low-confidence suggestion: node_modules/@opentelemetry/sdk-trace-base/build/src/platform/node/RandomIdGenerator.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CUa = E(() => {
  wUa();
  DVe = class DVe extends kyo {
    onShutdown() {}
  };
});
class Yft {
  generateTraceId = IUa(16);
  generateSpanId = IUa(8);
}
function IUa(e) {
  return function () {
    for (let n = 0; n < e / 4; n++) w3n.writeUInt32BE(Math.random() * 4294967296 >>> 0, n * 4);
    for (let n = 0; n < e; n++) if (w3n[n] > 0) break;else if (n === e - 1) w3n[e - 1] = 1;
    return w3n.toString("hex", 0, e);
  };
}
var w3n;