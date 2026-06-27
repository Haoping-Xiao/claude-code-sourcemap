// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aBr
// matched 2.1.88 source: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js
// class=new  jaccard=0.0191  score=1  fileCov=0.0191
// note: nearest: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js (0.0191); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var W8s = () => {};
var q8s = () => e => async t => {
    let n = {
        ...t.input
      },
      r = await e(t),
      o = r.output;
    if (n.SessionId && o.SessionId == null) o.SessionId = n.SessionId;
    return r;
  },
  V8s;