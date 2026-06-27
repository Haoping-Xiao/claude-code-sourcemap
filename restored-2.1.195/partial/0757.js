// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dmn
// matched 2.1.88 source: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
// class=partial  jaccard=0.0875  score=1  fileCov=0.0875
// note: low-confidence suggestion: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dmn = E(() => {
  iIs();
});
function PCe(e) {
  return new Promise((t, n) => {
    let r = cIs.request({
      method: "GET",
      ...e,
      hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1")
    });
    r.on("error", o => {
      n(Object.assign(new Pmn.ProviderError("Unable to connect to instance metadata service"), o)), r.destroy();
    }), r.on("timeout", () => {
      n(new Pmn.ProviderError("TimeoutError from instance metadata service")), r.destroy();
    }), r.on("response", o => {
      let {
        statusCode: s = 400
      } = o;
      if (s < 200 || 300 <= s) n(Object.assign(new Pmn.ProviderError("Error response received from instance metadata service"), {
        statusCode: s
      })), r.destroy();
      let i = [];
      o.on("data", a => {
        i.push(a);
      }), o.on("end", () => {
        t(lIs.Buffer.concat(i)), r.destroy();
      });
    }), r.end();
  });
}
var Pmn, lIs, cIs;