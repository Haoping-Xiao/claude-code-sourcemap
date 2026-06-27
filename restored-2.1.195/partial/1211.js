// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e6s
// matched 2.1.88 source: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js
// class=partial  jaccard=0.1564  score=1  fileCov=0.1564
// note: low-confidence suggestion: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var e6s = E(() => {
  lBr();
  Z8s = {
    name: "websocketEndpointMiddleware",
    tags: ["WEBSOCKET", "EVENT_STREAM"],
    relation: "after",
    toMiddleware: "eventStreamHeaderMiddleware",
    override: !0
  };
});
var t6s = (e, t) => ({
  applyToStack: n => {
    n.addRelativeTo(Q8s(e, t), Z8s), n.add(q8s(), V8s);
  }
});