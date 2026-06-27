// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lEc
// matched 2.1.88 source: src/hooks/useBackgroundTaskNavigation.ts
// class=partial  jaccard=0.1965  score=0.6786  fileCov=0.2167
// note: low-confidence suggestion: src/hooks/useBackgroundTaskNavigation.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lEc] deps: services/analytics/index.ts, utils/debug.ts, context/notifications.tsx, tools/BashTool/UI.tsx, utils/tempfile.ts, utils/agentContext.ts, components/HistorySearchDialog.tsx, entrypoints/sdk/coreSchemas.ts, context/notifications.tsx, components/CustomSelect/use-multi-select-state.ts, hooks/useIdeAtMentioned.ts, vendor/image-processor-src/index.ts, utils/suggestions/directoryCompletion.ts, utils/toolSearch.ts, fb, utils/task/framework.ts, components/tasks/renderToolActivity.tsx, tasks/LocalShellTask/LocalShellTask.tsx, tasks/stopTask.ts, utils/messageQueueManager.ts, fast-xml-parser/lib/fxp.cjs, tasks/InProcessTeammateTask/InProcessTeammateTask.tsx
GTe = R(rt(), 1);
function useBackgroundTaskNavigation({
  inputOwnsEscape: e,
  isTranscriptScreen: t
}) {
  let n = Ht(l => l.tasks),
    r = Ht(l => l.viewSelectionMode),
    o = Ht(l => l.viewingAgentTaskId),
    s = Ho(),
    i = $T();
  return {
    handleKeyDown: l => {
      if (t) return;
      if (l.name === "escape" && r === "viewing-agent") {
        if (e) return;
        l.preventDefault();
        let c = o;
        if (c) {
          let u = n[c];
          if (uE(u) && u.status === "running") {
            u.currentWorkAbortController?.abort();
            return;
          }
          if (El(u) && (u.status === "running" || sw(u))) {
            MTt(u, i, s);
            return;
          }
        }
        Wq(s);
      }
    },
    handleKeyDownCapture: () => {}
  };
}