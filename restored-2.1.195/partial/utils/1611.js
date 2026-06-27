// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cdi
// matched 2.1.88 source: node_modules/@anthropic-ai/bedrock-sdk/internal/shims.mjs
// class=partial  jaccard=0.2281  score=1  fileCov=0.2281
// note: low-confidence suggestion: node_modules/@anthropic-ai/bedrock-sdk/internal/shims.mjs; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Idi(e) {
  if (e[Symbol.asyncIterator]) return e;
  let t = e.getReader();
  return {
    async next() {
      try {
        let n = await t.read();
        if (n?.done) t.releaseLock();
        return n;
      } catch (n) {
        throw t.releaseLock(), n;
      }
    },
    async return() {
      let n = t.cancel();
      return t.releaseLock(), await n, {
        done: true,
        value: void 0
      };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}