// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SEe
// matched 2.1.88 source: src/hooks/notifs/useCanSwitchToExistingSubscription.tsx
// class=modified  jaccard=0.1657  score=0.3148  fileCov=0.2593
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SEe] deps: screens/REPL.tsx
((Hft = R(rt(), 1)), (xho = Hft.createContext(true)));
async function T1a() {
  if (bo()) return null;
  let e = await R7s();
  if (!e) return null;
  if (e.account.has_claude_max && !FX()) return "Max";
  if (e.account.has_claude_pro && !Taa()) return "Pro";
  return null;
}
function v1a() {
  return (Dt().seenNotifications?.[LWt] ?? 0) < kho;
}
function _temp2() {
  (gn((e) => {
    let t = e.seenNotifications ?? {};
    return {
      ...e,
      seenNotifications: {
        ...t,
        [LWt]: (t[LWt] ?? 0) + 1,
      },
    };
  }),
    G("tengu_switch_to_subscription_notice_shown", {}));
}
function w1a(e) {
  let t = H1a.c(3),
    { subscriptionType: n } = e;
  b6("subscription-switch", _temp2);
  let r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((r = DWt.jsxs(w, {
      color: "text",
      dimColor: true,
      children: [" ", "\xB7 /login to activate"],
    })),
      (t[0] = r));
  else r = t[0];
  let o;
  if (t[1] !== n)
    ((o = DWt.jsx(U, {
      children: DWt.jsxs(w, {
        color: "suggestion",
        children: ["Use your existing Claude ", n, " plan with Claude Code", r],
      }),
    })),
      (t[1] = n),
      (t[2] = o));
  else o = t[2];
  return o;
}
var H1a,
  DWt,
  LWt = "subscription-switch",
  kho = 3;
