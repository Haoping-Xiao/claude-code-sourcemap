// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cdi
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cdi = E(() => {
  vdi();
  DSn();
});
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
        done: !0,
        value: void 0
      };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}