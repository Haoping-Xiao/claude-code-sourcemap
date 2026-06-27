// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lBr
// matched 2.1.88 source: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js
// class=partial  jaccard=0.2008  score=1  fileCov=0.2008
// note: low-confidence suggestion: node_modules/@aws-sdk/middleware-websocket/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lBr = E(() => {
  K8s();
  Y8s();
  X8s();
  J8s();
});
var Q8s = (e, t) => n => r => {
    let {
      request: o
    } = r;
    if (O2e.isInstance(o) && e.requestHandler.metadata?.handlerProtocol?.toLowerCase().includes("websocket")) {
      o.protocol = "wss:", o.method = "GET", o.path = `${o.path}-websocket`;
      let {
        headers: s
      } = o;
      delete s["content-type"], delete s["x-amz-content-sha256"];
      for (let i of Object.keys(s)) if (i.indexOf(t.headerPrefix) === 0) {
        let a = i.replace(t.headerPrefix, "");
        o.query[a] = s[i];
      }
      if (s["x-amz-user-agent"]) o.query["user-agent"] = s["x-amz-user-agent"];
      o.headers = {
        host: s.host ?? o.hostname
      };
    }
    return n(r);
  },
  Z8s;