// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MPc
// matched 2.1.88 source: src/components/AutoModeOptInDialog.tsx
// class=partial  jaccard=0.1108  score=0.2085  fileCov=0.1913
// note: low-confidence suggestion: src/components/AutoModeOptInDialog.tsx; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: AutoDefaultNudgeDialog
// [unwrapped __esm module MPc] deps: services/analytics/index.ts, tools/BashTool/UI.tsx, services/analytics/index.ts, utils/toolSearch.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, context/notifications.tsx, utils/ShellCommand.ts, tasks/InProcessTeammateTask/InProcessTeammateTask.tsx, utils/cronScheduler.ts, utils/cronJitterConfig.ts, hooks/useScheduledTasks.ts, utils/cronJitterConfig.ts, utils/debug.ts, utils/messageQueueManager.ts, utils/messages.ts, constants/system.ts
yvt = R(rt(), 1), rIm = (KWe(), ro(zWe));
function AutoModeOptInDialog(t0) {
  let t = $Pc.c(18),
    {
      currentMode: n,
      onDone: r
    } = t0,
    o,
    s;
  if (t[0] !== n) o = () => {
    G("tengu_auto_default_nudge_shown", {
      current_mode: $e(n)
    });
  }, s = [n], t[0] = n, t[1] = o, t[2] = s;else o = t[1], s = t[2];
  OPc.useEffect(o, s), ig();
  let i;
  if (t[3] !== n || t[4] !== r) i = function (h) {
    if (h === "accept") io("userSettings", {
      permissions: {
        defaultMode: "auto"
      }
    });
    gn(iIm), G("tengu_auto_default_nudge_resolved", {
      choice: $e(h),
      current_mode: $e(n)
    }), r(h === "accept");
  }, t[3] = n, t[4] = r, t[5] = i;else i = t[5];
  let a = i,
    l;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) l = jNe.jsx(U, {
    marginBottom: 1,
    flexDirection: "column",
    children: jNe.jsx(w, {
      children: "Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest."
    })
  }), t[6] = l;else l = t[6];
  let c;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) c = {
    label: "Yes, set auto mode as my default permission mode",
    value: "accept"
  }, t[7] = c;else c = t[7];
  let u;
  if (t[8] !== n) u = _Y(n).toLowerCase(), t[8] = n, t[9] = u;else u = t[9];
  let d = `No, keep ${u}`,
    p;
  if (t[10] !== d) p = [c, {
    label: d,
    value: "decline"
  }], t[10] = d, t[11] = p;else p = t[11];
  let f;
  if (t[12] !== a) f = () => a("decline"), t[12] = a, t[13] = f;else f = t[13];
  let m;
  if (t[14] !== a || t[15] !== p || t[16] !== f) m = jNe.jsx(Lf, {
    title: "Make auto mode your default permission mode?",
    children: jNe.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [l, jNe.jsx(U, {
        children: jNe.jsx(Sr, {
          options: p,
          onChange: a,
          onCancel: f
        })
      })]
    })
  }), t[14] = a, t[15] = p, t[16] = f, t[17] = m;else m = t[17];
  return m;
}
function iIm(e) {
  return e.hasSeenAutoDefaultNudge ? e : {
    ...e,
    hasSeenAutoDefaultNudge: true
  };
}
var $Pc, OPc, jNe;