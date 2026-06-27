// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kP
// matched 2.1.88 source: src/components/design-system/Tabs.tsx
// class=modified  jaccard=0.1174  score=0.5196  fileCov=0.1317
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kP] deps: react/cjs/react.production.js, components/design-system/Ratchet.tsx, utils/sideQuestion.ts, ink/focus.ts, components/VirtualMessageList.tsx, screens/REPL.tsx, marked/lib/marked.esm.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, react/cjs/react.production.js
((v7t = R(lt(), 1)),
  (FL = R(rt(), 1)),
  (GN = R(se(), 1)),
  (itr = FL.createContext({
    selectedTab: void 0,
    width: void 0,
    headerFocused: false,
    focusHeader: () => {},
    blurHeader: () => {},
    registerOptIn: () => () => {},
  })));
function aEt(e) {
  switch (e) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return (
        T(`Unknown compliance_taint '${e}' from policyLimits`, {
          level: "warn",
        }),
        e
      );
  }
}
