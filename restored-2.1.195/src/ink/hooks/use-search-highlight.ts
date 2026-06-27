// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E8o
// matched 2.1.88 source: src/ink/hooks/use-search-highlight.ts
// class=modified  jaccard=0.4892  score=1  fileCov=0.4892
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module E8o] deps: utils/debug.ts, context/notifications.tsx, services/analytics/index.ts, constants/outputStyles.ts, utils/diff.ts, utils/plugins/pluginPolicy.ts, highlight.js/lib/languages/reasonml.js, marked/lib/marked.esm.js, hooks/useTerminalSize.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, services/api/errorUtils.ts, utils/config.ts, has-flag/index.js, utils/fsOperations.ts, utils/debug.ts, utils/git.ts, utils/tempfile.ts, main.tsx, utils/git.ts, hooks/fileSuggestions.ts, utils/worktree.ts, utils/messages.ts, utils/agentContext.ts, utils/plans.ts, hooks/notifs/useSettingsErrors.tsx, utils/model/check1mAccess.ts, constants/prompts.ts, utils/Cursor.ts
((dmc = R(lt(), 1)), (wA = R(rt(), 1)), (OTe = R(se(), 1)));
xcm = /\x1b\[[\d;]*m|\x1b\]8;[^\x07\x1b]*(?:\x07|\x1b\\)/g;
mmc = wA.memo(wcm);
function gmc() {
  vur.useContext(B_e);
  let e = Cu.get(process.stdout);
  return vur.useMemo(() => {
    if (!e)
      return {
        setQuery: () => {},
        scanElement: () => [],
        setPositions: () => {},
      };
    return {
      setQuery: (t) => e.setSearchHighlight(t),
      scanElement: (t) => e.scanElementSubtree(t),
      setPositions: (t) => e.setSearchPositions(t),
    };
  }, [e]);
}
var vur;
