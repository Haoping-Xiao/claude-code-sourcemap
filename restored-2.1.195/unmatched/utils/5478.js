// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I_c
// matched 2.1.88 source: src/components/PromptInput/PromptInputQueuedCommands.tsx
// class=new  jaccard=0.037  score=0.347  fileCov=0.0398
// note: nearest: src/components/PromptInput/PromptInputQueuedCommands.tsx (0.037); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I_c] deps: utils/claudeInChrome/common.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/concurrentSessions.ts, utils/debug.ts, utils/errors.ts
w_c = require("fs"), Cdr = R(rt(), 1);
function k_c(e) {
  let t = Ht(r => r.footerLinks),
    n = e?.excludeKeyed === true;
  return x_c.useMemo(() => {
    let r = n ? t.filter(o => o.key === void 0) : t;
    return r.length <= UZt ? r : r.slice(0, UZt);
  }, [t, n]);
}
var x_c;