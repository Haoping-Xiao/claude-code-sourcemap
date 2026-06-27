// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rua
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js
// class=new  jaccard=0.0328  score=1  fileCov=0.0328
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js (0.0328); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rua = E(() => {
  Vb();
  oke();
  kua();
  Lup = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
  };
  wSe = class wSe extends Error {
    constructor(e, t) {
      super(`Streamable HTTP error: ${t}`);
      this.code = e;
    }
  };
});
function Dup(e, t, n) {
  var r = -1,
    o = e.length,
    s = t.length,
    i = {};
  while (++r < o) {
    var a = r < s ? t[r] : void 0;
    n(i, e[r], a);
  }
  return i;
}
var Lua;