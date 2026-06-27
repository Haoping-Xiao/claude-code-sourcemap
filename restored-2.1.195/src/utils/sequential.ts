// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vn
// matched 2.1.88 source: src/utils/sequential.ts
// class=modified  jaccard=0.5221  score=0.726  fileCov=0.6502
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vn] deps: lodash-es/memoize.js, services/analytics/index.ts, env-paths/index.js, utils/cachePaths.ts, utils/privacyLevel.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/log.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts
Tpn = [];
WZe = [];
qag = Cn(() => process.argv.includes("--hard-fail"));
function qZe(e) {
  let t = [],
    n = false;
  async function r() {
    if (n) return;
    if (t.length === 0) return;
    n = true;
    while (t.length > 0) {
      let { args: o, resolve: s, reject: i, context: a } = t.shift();
      try {
        let l = await e.apply(a, o);
        s(l);
      } catch (l) {
        i(l);
      }
    }
    if (((n = false), t.length > 0)) r();
  }
  return function (...o) {
    return new Promise((s, i) => {
      (t.push({
        args: o,
        resolve: s,
        reject: i,
        context: this,
      }),
        r());
    });
  };
}
function MDu(e, t, n) {
  if ((n !== void 0 && !Die(e[t], n)) || (n === void 0 && !(t in e))) dwe(e, t, n);
}
var tRt;
