// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YDc
// matched 2.1.88 source: src/hooks/notifs/useAutoModeUnavailableNotification.ts
// class=partial  jaccard=0.1394  score=0.3597  fileCov=0.1854
// note: low-confidence suggestion: src/hooks/notifs/useAutoModeUnavailableNotification.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YDc] deps: context/notifications.tsx, context/notifications.tsx, utils/modelCost.ts, utils/profilerBase.ts, services/analytics/index.ts
zDc = R(lt(), 1), Vfr = R(rt(), 1);
function JDc() {
  let e = XDc.c(5),
    {
      addNotification: t
    } = Li(),
    n = Ht(LCm),
    r = kH(),
    o = zfr.useRef(void 0),
    s,
    i;
  if (e[0] !== t || e[1] !== n || e[2] !== r) s = () => {
    if (da() || !F6()) return;
    if (!n || !mMe(r) || !gMe(n)) {
      o.current = void 0;
      return;
    }
    let a = S8e(r, n) ? "on" : "pairing";
    if (o.current === a) return;
    o.current = a, t({
      key: "advisor-experimental",
      kind: "event",
      text: a === "on" ? "Advisor Tool (experimental) is on and may use more tokens \xB7 /advisor" : "Advisor will not activate on the main model (advisor is less capable); subagents may still use it and may use more tokens \xB7 /advisor",
      priority: "medium",
      fold: RCm
    });
  }, i = [n, r, t], e[0] = t, e[1] = n, e[2] = r, e[3] = s, e[4] = i;else s = e[3], i = e[4];
  zfr.useEffect(s, i);
}
function RCm(e, t) {
  return t;
}
function LCm(e) {
  return e.advisorModel;
}
var XDc, zfr;