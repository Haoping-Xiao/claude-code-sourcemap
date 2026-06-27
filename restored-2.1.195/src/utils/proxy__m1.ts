// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mh
// matched 2.1.88 source: src/utils/proxy.ts
// class=modified (alt of src/utils/proxy.ts)  jaccard=0.1218  score=0.7267  fileCov=0.1277
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mh] deps: axios/lib/axios.js, lodash-es/memoize.js, services/analytics/index.ts, utils/caCerts.ts, utils/mtls.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/mtls.ts, utils/execFileNoThrowPortable.ts
((s4s = R(_Lt(), 1)), (kOr = require("net")));
MOr = Cn((e) => {
  let t = require("undici"),
    n = UB(),
    r = DG(),
    o = {
      httpProxy: e,
      httpsProxy: e,
      noProxy: process.env.NO_PROXY || process.env.no_proxy,
    };
  if (n || r) {
    let s = {
      ...(n && {
        cert: n.cert,
        key: n.key,
        passphrase: n.passphrase,
      }),
      ...(r && {
        ca: r,
      }),
    };
    ((o.connect = s), (o.requestTls = s));
  }
  return new t.EnvHttpProxyAgent(o);
});
Ftt = {
  helper: void 0,
  fromProjectOrLocal: false,
  trustAccepted: () => false,
};
var bDt;
