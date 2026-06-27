// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mal
// matched 2.1.88 source: src/hooks/useMinDisplayTime.ts
// class=modified  jaccard=0.3449  score=1  fileCov=0.3449
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mal] deps: @xmldom/xmldom/lib/entities.js, utils/nativeInstaller/download.ts, utils/profilerBase.ts, utils/messages.ts, @xmldom/xmldom/lib/entities.js, ink/termio/types.ts, hooks/useTerminalSize.ts, context/notifications.tsx, utils/ink.ts, services/PromptSuggestion/promptSuggestion.ts, components/DiagnosticsDisplay.tsx, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts, utils/teammateMailbox.ts, react/cjs/react.production.js, components/messages/ShutdownMessage.tsx, undici/lib/mock/mock-agent.js, ink/measure-text.ts, commands/add-dir/validation.ts, components/messages/UserImageMessage.tsx, components/messages/PlanApprovalMessage.tsx, utils/messages.ts, components/messages/UserAgentNotificationMessage.tsx, components/messages/AttachmentMessage.tsx
((t_t = R(lt(), 1)), (Zzn = require("path")), (aIo = R(rt(), 1)), (Ts = R(se(), 1)));
function gal(e, t) {
  let n = ks(),
    [r, o] = n_t.useState(e),
    s = n_t.useRef(e !== void 0 ? Date.now() : 0);
  return (
    n_t.useEffect(() => {
      if (e !== void 0) {
        ((s.current = Date.now()), o(e));
        return;
      }
      let i = t - (Date.now() - s.current);
      if (i <= 0) {
        o(void 0);
        return;
      }
      return n.setTimeout(() => o(void 0), i);
    }, [e, t, n]),
    r
  );
}
var n_t;
