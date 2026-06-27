// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vUc
// matched 2.1.88 source: src/utils/idleTimeout.ts
// class=modified  jaccard=0.3145  score=0.6645  fileCov=0.3739
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vUc] deps: ft, Yf
((AUc = require("async_hooks")), (HUc = require("path")));
((yLm = new AUc.AsyncLocalStorage()), (_Lm = new TUc()));
function createIdleTimeoutManager(isIdle) {
  let t = process.env.CLAUDE_CODE_EXIT_AFTER_STOP_DELAY,
    n = t ? parseInt(t, 10) : null,
    r = n && !isNaN(n) && n > 0,
    o = null,
    s = 0;
  return {
    start() {
      if (o) (clearTimeout(o), (o = null));
      if (r)
        ((s = Date.now()),
          (o = setTimeout(() => {
            let i = Date.now() - s;
            if (isIdle() && i >= n) (T(`Exiting after ${n}ms of idle time`), Bc());
          }, n)));
    },
    stop() {
      if (o) (clearTimeout(o), (o = null));
    },
  };
}
