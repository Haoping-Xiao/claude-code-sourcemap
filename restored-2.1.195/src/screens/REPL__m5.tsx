// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $al
// matched 2.1.88 source: src/screens/REPL.tsx
// class=modified (alt of src/screens/REPL.tsx)  jaccard=0.0028  score=0.4788  fileCov=0.0028
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $al] deps: services/analytics/index.ts, @xmldom/xmldom/lib/entities.js, hooks/useMinDisplayTime.ts, utils/ghPrStatus.ts, components/design-system/Ratchet.tsx, ink/dom.ts, hooks/useTerminalSize.ts, context/notifications.tsx, services/mockRateLimits.ts, utils/memoryFileDetection.ts, ZPe, utils/nativeInstaller/download.ts, utils/profilerBase.ts, main.tsx, utils/settings/constants.ts, utils/messages.ts, services/teamMemorySync/secretScanner.ts, react/cjs/react.production.js, components/IdeOnboardingDialog.tsx, ink/styles.ts, components/messages/teamMemCollapsed.tsx, entrypoints/sdk/coreSchemas.ts, components/messages/AdvisorMessage.tsx, LCo, components/design-system/LoadingState.tsx, components/messages/CollapsedReadSearchContent.tsx
((rKn = R(lt(), 1)), (Pal = require("path")), (s_t = R(rt(), 1)), (Hi = R(se(), 1)));
function REPL() {
  let e = Oal.c(2),
    t = Uu("app:toggleTranscript", "Global", "ctrl+o"),
    n;
  if (e[0] !== t)
    ((n = oKn.jsx(U, {
      marginY: 1,
      children: oKn.jsxs(w, {
        dimColor: true,
        children: ["\u273B Conversation compacted (", t, " for history)"],
      }),
    })),
      (e[0] = t),
      (e[1] = n));
  else n = e[1];
  return n;
}
var Oal, oKn;
