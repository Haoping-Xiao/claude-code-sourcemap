// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N0c
// matched 2.1.88 source: src/hooks/useSessionBackgrounding.ts
// class=modified  jaccard=0.6628  score=0.8717  fileCov=0.7344
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module N0c] deps: @xmldom/xmldom/lib/entities.js, services/analytics/index.ts, tools/BashTool/UI.tsx, services/analytics/index.ts, screens/REPL.tsx, components/CustomSelect/use-multi-select-state.ts, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, context/notifications.tsx, utils/authFileDescriptor.ts, utils/nativeInstaller/download.ts, utils/messageQueueManager.ts, utils/messages.ts, utils/permissions/filesystem.ts, utils/stats.ts, tasks/RemoteAgentTask/RemoteAgentTask.tsx, utils/words.ts, keybindings/useShortcutDisplay.ts, components/design-system/Dialog.tsx
((M0c = require("fs/promises")), ($0c = require("path")), (ivt = R(rt(), 1)), (NNe = R(se(), 1)));
function useSessionBackgrounding({
  setMessages: e,
  setIsLoading: t,
  resetLoadingState: n,
  setAbortController: r,
  onBackgroundQuery: o,
}) {
  let s = Ht((d) => d.foregroundedTaskId),
    i = Ht((d) => (d.foregroundedTaskId ? d.tasks[d.foregroundedTaskId] : void 0)),
    a = Ht((d) => (d.foregroundedTaskId ? d.transcripts[d.foregroundedTaskId]?.messages : void 0)),
    l = Ho(),
    c = avt.useRef(0),
    u = avt.useCallback(() => {
      if (s) {
        (l((d) => {
          let p = d.foregroundedTaskId;
          if (!p) return d;
          let f = d.tasks[p];
          if (!f)
            return {
              ...d,
              foregroundedTaskId: void 0,
            };
          return {
            ...d,
            foregroundedTaskId: void 0,
            tasks: {
              ...d.tasks,
              [p]: {
                ...f,
                isBackgrounded: true,
              },
            },
          };
        }),
          e([]),
          n(),
          r(null));
        return;
      }
      o();
    }, [s, l, e, n, r, o]);
  return (
    avt.useEffect(() => {
      if (!s) {
        c.current = 0;
        return;
      }
      if (!i || i.type !== "local_agent") {
        (l((p) => ({
          ...p,
          foregroundedTaskId: void 0,
        })),
          n(),
          (c.current = 0));
        return;
      }
      let d = a ?? [];
      if (d.length !== c.current) ((c.current = d.length), e([...d]));
      if (i.status === "running") {
        let p = i.abortController;
        if (p?.signal.aborted) {
          (l((f) => {
            if (!f.foregroundedTaskId) return f;
            let m = f.tasks[f.foregroundedTaskId];
            if (!m)
              return {
                ...f,
                foregroundedTaskId: void 0,
              };
            return {
              ...f,
              foregroundedTaskId: void 0,
              tasks: {
                ...f.tasks,
                [f.foregroundedTaskId]: {
                  ...m,
                  isBackgrounded: true,
                },
              },
            };
          }),
            n(),
            r(null),
            (c.current = 0));
          return;
        }
        if ((t(true), p)) r(p);
      } else
        (l((p) => {
          let f = p.foregroundedTaskId;
          if (!f) return p;
          let m = p.tasks[f];
          if (!m)
            return {
              ...p,
              foregroundedTaskId: void 0,
            };
          return {
            ...p,
            foregroundedTaskId: void 0,
            tasks: {
              ...p.tasks,
              [f]: {
                ...m,
                isBackgrounded: true,
              },
            },
          };
        }),
          n(),
          r(null),
          (c.current = 0));
    }, [s, i, a, l, e, t, n, r]),
    {
      handleBackgroundSession: u,
    }
  );
}
var avt;
