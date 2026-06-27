// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xLc
// matched 2.1.88 source: src/hooks/useMinDisplayTime.ts
// class=partial  jaccard=0.2086  score=1  fileCov=0.2086
// note: low-confidence suggestion: src/hooks/useMinDisplayTime.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xLc] deps: services/analytics/index.ts, undici/lib/mock/mock-agent.js, constants/oauth.ts, context/notifications.tsx, hooks/useTerminalSize.ts, services/analytics/growthbook.ts, utils/debug.ts, utils/semver.ts, commands/copy/copy.tsx, utils/http.ts, utils/config.ts, utils/debug.ts, utils/profilerBase.ts, utils/log.ts
CLc = R(lt(), 1), Ifr = R(rt(), 1), L3 = R(se(), 1);
function kLc(e, t) {
  let n = xfr.useRef(false);
  xfr.useEffect(() => {
    if (!K_() || n.current) return;
    if (n.current = true, e) XVt(e, t);
  }, [e, t]);
}
var xfr;