// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ygr
// matched 2.1.88 source: node_modules/node-fetch/lib/index.js
// class=new  jaccard=0.0366  score=0.4424  fileCov=0.0383
// note: nearest: node_modules/node-fetch/lib/index.js (0.0366); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module ygr] (exports=uzH, module=Yjc)
var uzH = {};
var Yjc = {
  exports: uzH
};
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
    let t = false;
    try {
      let n;
      if (typeof e.body !== "object" || Buffer.isBuffer(e.body)) n = JSON.parse(e.body);else n = e.body;
      if (t = typeof n.error === "string" && n.error.length, t) Object.defineProperty(e, "body", {
        value: n,
        configurable: true
      });
    } catch (n) {}
    return t;
  };
function nPm(e, {
  statusCode: t = 200,
  body: n = true,
  bearer: r = false
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