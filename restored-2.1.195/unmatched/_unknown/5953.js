// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ygr
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/sse.js
// class=new  jaccard=0.0466  score=0.2579  fileCov=0.0539
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/client/sse.js (0.0466); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ygr = Q((uzH, Yjc) => {
  var {
      STATUS_CODES: xJo
    } = require("http"),
    {
      format: Kjc
    } = require("util"),
    {
      OPError: hgr
    } = Xme(),
    ZDm = IJo(),
    ePm = e => {
      let t = ZDm(e.headers["www-authenticate"]);
      if (t.error) throw new hgr(t, e);
    },
    tPm = e => {
      let t = !1;
      try {
        let n;
        if (typeof e.body !== "object" || Buffer.isBuffer(e.body)) n = JSON.parse(e.body);else n = e.body;
        if (t = typeof n.error === "string" && n.error.length, t) Object.defineProperty(e, "body", {
          value: n,
          configurable: !0
        });
      } catch (n) {}
      return t;
    };
  function nPm(e, {
    statusCode: t = 200,
    body: n = !0,
    bearer: r = !1
  } = {}) {
    if (e.statusCode !== t) {
      if (r) ePm(e);
      if (tPm(e)) throw new hgr(e.body, e);
      throw new hgr({
        error: Kjc("expected %i %s, got: %i %s", t, xJo[t], e.statusCode, xJo[e.statusCode])
      }, e);
    }
    if (n && !e.body) throw new hgr({
      error: Kjc("expected %i %s with body but no body was returned", t, xJo[t])
    }, e);
    return e.body;
  }
  Yjc.exports = nPm;
});