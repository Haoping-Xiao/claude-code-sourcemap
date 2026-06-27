// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UNr
// matched 2.1.88 source: node_modules/@aws-sdk/middleware-eventstream/dist-cjs/index.js
// class=partial  jaccard=0.1  score=1  fileCov=0.1
// note: low-confidence suggestion: node_modules/@aws-sdk/middleware-eventstream/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var f8s = e => (t, n) => async r => {
    let {
      request: o
    } = r;
    if (!L2e.isInstance(o)) return t(r);
    return e.eventStreamPayloadHandler.handle(t, r, n);
  },
  m8s;