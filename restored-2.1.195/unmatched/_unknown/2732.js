// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tro
// matched 2.1.88 source: node_modules/@grpc/grpc-js/build/src/resolving-call.js
// class=new  jaccard=0.0158  score=0.4339  fileCov=0.0161
// note: nearest: node_modules/@grpc/grpc-js/build/src/resolving-call.js (0.0158); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tro] deps: protobufjs/ext/descriptor/index.js, Qne
atp = -9223372036854775808n;
bta = Object.freeze({
  ns: 1n,
  us: 1000n,
  µs: 1000n,
  ms: 1000n * 1000n,
  s: 1000n * 1000n * 1000n,
  m: 1000n * 1000n * 1000n * 60n,
  h: 1000n * 1000n * 1000n * 60n * 60n
}), yta = /^\d+/, ltp = new RegExp(`^(${Object.keys(bta).join("|")})`);
function nro(e = 0n, t = 0n) {
  let n = e * a2t + BigInt(t),
    r = n % a2t < 0n ? 1n : 0n,
    o = n / a2t - r,
    s = Number(n % a2t + r * a2t);
  if (o > ctp || o < utp) throw Error("timestamp out of range");
  return F0(M1, {
    seconds: o,
    nanos: s
  });
}
var ctp = 253402300799n,
  utp,
  a2t = 1000000000n;