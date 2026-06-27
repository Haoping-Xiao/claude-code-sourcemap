// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TY
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var TY = Q(yIs => {
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
});
var c2e;