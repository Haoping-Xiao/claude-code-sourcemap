// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F_c
// matched 2.1.88 source: src/ink/components/Box.tsx
// class=new  jaccard=0.0506  score=0.318  fileCov=0.0567
// note: nearest: src/ink/components/Box.tsx (0.0506); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module F_c] deps: hooks/useTerminalSize.ts, ink/termio/types.ts, utils/Cursor.ts, nk, utils/permissions/PermissionMode.ts, cli/print.ts, components/tasks/AsyncAgentDetailDialog.tsx, components/HistorySearchDialog.tsx, components/PromptInput/HistorySearchInput.tsx, context/notifications.tsx, dom-mutator/dist/dom-mutator.cjs.production.min.js, services/analytics/index.ts, utils/concurrentSessions.ts, tools/AgentTool/resumeAgent.ts, @xmldom/xmldom/lib/entities.js, services/analytics/growthbook.ts, utils/signal.ts, utils/cronScheduler.ts, components/PromptInput/PromptInputQueuedCommands.tsx, hooks/usePrStatus.ts, components/Settings/Config.tsx, utils/ghPrStatus.ts, components/messageActions.tsx, tools/shared/gitOperationTracking.ts, components/mcp/MCPAgentServerMenu.tsx, components/ConfigurableShortcutHint.tsx, ink/components/ClockContext.tsx, components/ConfigurableShortcutHint.tsx, components/CustomSelect/select.tsx, components/design-system/Ratchet.tsx, W9n, utils/shell/readOnlyCommandValidation.ts, services/compact/compactWarningHook.ts, state/AppState.tsx, main.tsx, components/PromptInput/PromptInputFooterLeftSide.tsx, ink/terminal.ts, react/cjs/react.production.js, utils/config.ts, utils/platform.ts
Idr = R(lt(), 1), Kz = R(rt(), 1), li = R(se(), 1), Jfm = (l$(), ro(qW));
tmm = Kz.memo(function (t) {
  let n = Idr.c(11),
    {
      count: r,
      selected: o,
      onClick: s
    } = t,
    [i, a] = Kz.useState(false),
    l = o || i,
    c;
  if (n[0] === Symbol.for("react.memo_cache_sentinel")) c = li.jsxs(w, {
    "aria-hidden": true,
    children: [Uvs, " "]
  }), n[0] = c;else c = n[0];
  let u;
  if (n[1] !== r || n[2] !== l) u = li.jsxs(w, {
    color: "background",
    inverse: l,
    children: [c, r, " background"]
  }), n[1] = r, n[2] = l, n[3] = u;else u = n[3];
  let d = u;
  if (!s) return d;
  let p;
  if (n[4] !== s) p = () => s(), n[4] = s, n[5] = p;else p = n[5];
  let f, m;
  if (n[6] === Symbol.for("react.memo_cache_sentinel")) f = () => a(true), m = () => a(false), n[6] = f, n[7] = m;else f = n[6], m = n[7];
  let g;
  if (n[8] !== d || n[9] !== p) g = li.jsx(U, {
    onClick: p,
    onMouseEnter: f,
    onMouseLeave: m,
    children: d
  }), n[8] = d, n[9] = p, n[10] = g;else g = n[10];
  return g;
});
function W6o() {
  if (j6o === void 0) j6o = (Dt().seenNotifications?.[G6o] ?? 0) < smm;
  return j6o;
}
function G_c() {
  if (j_c) return;
  if (!W6o()) return;
  j_c = true, gn(e => {
    let t = e.seenNotifications ?? {};
    return {
      ...e,
      seenNotifications: {
        ...t,
        [G6o]: (t[G6o] ?? 0) + 1
      }
    };
  });
}
var G6o = "rc-active-badge",
  smm = 5,
  j_c = false,
  j6o;