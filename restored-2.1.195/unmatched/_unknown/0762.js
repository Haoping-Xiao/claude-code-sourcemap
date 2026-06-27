// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TY
// matched 2.1.88 source: node_modules/follow-redirects/index.js
// class=new  jaccard=0.0292  score=0.6861  fileCov=0.0296
// note: nearest: node_modules/follow-redirects/index.js (0.0292); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module TY] (exports=yIs)
var yIs = {};
var KNu = gIs(),
  hIs = e => {
    if (typeof e === "string") return hIs(new URL(e));
    let {
        hostname: t,
        pathname: n,
        port: r,
        protocol: o,
        search: s
      } = e,
      i;
    if (s) i = KNu.parseQueryString(s);
    return {
      hostname: t,
      port: r ? parseInt(r) : void 0,
      protocol: o,
      path: n,
      query: i
    };
  };
yIs.parseUrl = hIs;
var c2e;