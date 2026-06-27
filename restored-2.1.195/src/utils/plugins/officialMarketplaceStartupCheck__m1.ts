// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tLc
// matched 2.1.88 source: src/utils/plugins/officialMarketplaceStartupCheck.ts
// class=modified (alt of src/utils/plugins/officialMarketplaceStartupCheck.ts)  jaccard=0.0979  score=0.597  fileCov=0.1048
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tLc] deps: dn, Un, kt, er, je, fn, eMn, lE, oWe, S$o, WI
ZRc = require("path");
Hfr = {
  MAX_ATTEMPTS: 10,
  INITIAL_DELAY_MS: 3600000,
  BACKOFF_MULTIPLIER: 2,
  MAX_DELAY_MS: 604800000,
};
function rLc() {
  let e = nLc.c(3),
    t = Ho(),
    n = Tfr.useRef(false),
    r,
    o;
  if (e[0] !== t)
    ((r = () => {
      if (da() || n.current) return;
      ((n.current = true),
        eLc()
          .then((s) => {
            let i =
              (s.configSaveFailed ? 1 : 0) +
              (!s.installed && s.skipped && s.reason === "unknown" ? 1 : 0);
            (VL("plugins", i),
              t((a) => {
                if (a.setupIssues.marketplaceIssueCount === i) return a;
                return {
                  ...a,
                  setupIssues: {
                    ...a.setupIssues,
                    marketplaceIssueCount: i,
                  },
                };
              }));
          })
          .catch(ke));
    }),
      (o = [t]),
      (e[0] = t),
      (e[1] = r),
      (e[2] = o));
  else ((r = e[1]), (o = e[2]));
  Tfr.useEffect(r, o);
}
var nLc, Tfr;
