// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dpi
// matched 2.1.88 source: node_modules/@typespec/ts-http-runtime/dist/esm/util/sanitizer.js
// class=partial  jaccard=0.1224  score=1  fileCov=0.1224
// note: low-confidence suggestion: node_modules/@typespec/ts-http-runtime/dist/esm/util/sanitizer.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dpi = E(() => {
  Rpi = require("util"), Lpi = Rpi.inspect.custom;
});
class Ele {
  constructor({
    additionalAllowedHeaderNames: e = [],
    additionalAllowedQueryParameters: t = []
  } = {}) {
    e = vgd.concat(e), t = wgd.concat(t), this.allowedHeaderNames = new Set(e.map(n => n.toLowerCase())), this.allowedQueryParameters = new Set(t.map(n => n.toLowerCase()));
  }
  sanitize(e) {
    let t = new Set();
    return JSON.stringify(e, (n, r) => {
      if (r instanceof Error) return Object.assign(Object.assign({}, r), {
        name: r.name,
        message: r.message
      });
      if (n === "headers") return this.sanitizeHeaders(r);else if (n === "url") return this.sanitizeUrl(r);else if (n === "query") return this.sanitizeQuery(r);else if (n === "body") return;else if (n === "response") return;else if (n === "operationSpec") return;else if (Array.isArray(r) || EMt(r)) {
        if (t.has(r)) return "[Circular]";
        t.add(r);
      }
      return r;
    }, 2);
  }
  sanitizeUrl(e) {
    if (typeof e !== "string" || e === null || e === "") return e;
    let t = new URL(e);
    if (!t.search) return e;
    for (let [n] of t.searchParams) if (!this.allowedQueryParameters.has(n.toLowerCase())) t.searchParams.set(n, y3r);
    return t.toString();
  }
  sanitizeHeaders(e) {
    let t = {};
    for (let n of Object.keys(e)) if (this.allowedHeaderNames.has(n.toLowerCase())) t[n] = e[n];else t[n] = y3r;
    return t;
  }
  sanitizeQuery(e) {
    if (typeof e !== "object" || e === null) return e;
    let t = {};
    for (let n of Object.keys(e)) if (this.allowedQueryParameters.has(n.toLowerCase())) t[n] = e[n];else t[n] = y3r;
    return t;
  }
}
var y3r = "REDACTED",
  vgd,
  wgd;