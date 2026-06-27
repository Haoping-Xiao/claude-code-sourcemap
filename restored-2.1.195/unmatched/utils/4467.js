// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dQn
// matched 2.1.88 source: src/services/compact/postCompactCleanup.ts
// class=new  jaccard=0.057  score=0.316  fileCov=0.0651
// note: nearest: src/services/compact/postCompactCleanup.ts (0.057); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dQn] deps: screens/REPL.tsx, utils/debug.ts, utils/errors.ts, utils/worktree.ts, utils/sequential.ts, components/Settings/Config.tsx, utils/model/check1mAccess.ts, dn, services/analytics/growthbook.ts, utils/debug.ts, utils/analyzeContext.ts, xao
Eq = new Map(), iPo = new Map(), DKt = new Map(), xze = new Set();
function hfe(e, t, n, r) {
  let o = y3e(e);
  if (uQn(n, "post_compact_cleanup", e), o) {
    if (uS.cache.clear?.(), hjt("compact"), OCt(), r === void 0) UCt();
    sQn(), kxa(), pll(t ? qMe(t) : void 0);
  }
  if (o) yTf.resetAutonomousLoopDelivered();
  if (o && t) {
    let s = Gb();
    t(i => {
      if (i.cacheMissAckedAtOutputTokens === s) return i;
      return {
        ...i,
        cacheMissAckedAtOutputTokens: s
      };
    });
  }
  mPo();
}
var yTf;