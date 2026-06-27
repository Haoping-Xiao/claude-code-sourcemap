// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mh
// matched 2.1.88 source: src/utils/proxy.ts
// class=partial  jaccard=0.09  score=1  fileCov=0.09
// note: low-confidence suggestion: src/utils/proxy.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Mh = E(() => {
  Hp();
  Qi();
  ft();
  Vet();
  bLt();
  je();
  fn();
  u9();
  OB();
  s4s = R(_Lt(), 1), kOr = require("net");
  MOr = Cn(e => {
    let t = require("undici"),
      n = UB(),
      r = DG(),
      o = {
        httpProxy: e,
        httpsProxy: e,
        noProxy: process.env.NO_PROXY || process.env.no_proxy
      };
    if (n || r) {
      let s = {
        ...(n && {
          cert: n.cert,
          key: n.key,
          passphrase: n.passphrase
        }),
        ...(r && {
          ca: r
        })
      };
      o.connect = s, o.requestTls = s;
    }
    return new t.EnvHttpProxyAgent(o);
  });
  Ftt = {
    helper: void 0,
    fromProjectOrLocal: !1,
    trustAccepted: () => !1
  };
});
var bDt;