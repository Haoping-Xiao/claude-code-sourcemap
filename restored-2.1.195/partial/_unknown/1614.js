// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j4r
// matched 2.1.88 source: node_modules/@anthropic-ai/bedrock-sdk/core/streaming.mjs
// class=partial  jaccard=0.2112  score=0.9538  fileCov=0.2133
// note: low-confidence suggestion: node_modules/@anthropic-ai/bedrock-sdk/core/streaming.mjs; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module j4r] deps: mMt
kdi = {
  off: 0,
  error: 200,
  warn: 300,
  info: 400,
  debug: 500
};
tgd = {
  error: gMt,
  warn: gMt,
  info: gMt,
  debug: gMt
}, Rdi = new WeakMap();
function isAbortError(e) {
  return typeof e === "object" && e !== null && ("name" in e && e.name === "AbortError" || "message" in e && String(e.message).includes("FetchRequestCanceledException"));
}
var Ddi,
  G4r = e => new TextDecoder("utf-8").decode(e),
  Ldi = e => new TextEncoder().encode(e),
  ngd = () => {
    let e = new $Hn({
      utf8Encoder: G4r,
      utf8Decoder: Ldi
    });
    return {
      base64Decoder: OHn,
      base64Encoder: NHn,
      utf8Decoder: Ldi,
      utf8Encoder: G4r,
      eventStreamMarshaller: e,
      streamCollector: Ddi.streamCollector
    };
  },
  WHn;