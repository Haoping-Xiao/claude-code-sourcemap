// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JSt
// matched 2.1.88 source: src/commands/clear/caches.ts
// class=partial  jaccard=0.1098  score=0.6245  fileCov=0.1176
// note: low-confidence suggestion: src/commands/clear/caches.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: clearSessionCaches
// [unwrapped __esm module JSt] deps: utils/markdownConfigLoader.ts, components/TrustDialog/utils.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/debug.ts, utils/config.ts, utils/fsOperations.ts, utils/debug.ts, utils/errors.ts, constants/files.ts, utils/fsOperations.ts, utils/git.ts, hooks/fileSuggestions.ts, utils/worktree.ts, utils/sequential.ts, utils/file.ts, utils/ripgrep.ts, utils/settings/settings.ts, bootstrap/state.ts
WDl = require("fs"), qDl = R(D3e(), 1), jN = R(require("path"));
Cfe = VDl();
function clearSessionCaches(e = new Set(), t) {
  let n = e.size > 0;
  if (uS.cache.clear?.(), hH.cache.clear?.(), zso.cache.clear?.(), cb.cache.clear?.(), sSe.cache.clear?.(), HOo(Cfe), W0(), !n) cca();
  if (NCt(null), hfe(void 0, t), KW(), hjt("session_start"), t?.(r => {
    if (r.storedImagePaths.size === 0 && r.imageDescriptions.size === 0 && Object.keys(r.displayedMessageContent).length === 0) return r;
    return {
      ...r,
      storedImagePaths: new Map(),
      imageDescriptions: new Map(),
      displayedMessageContent: {}
    };
  }), BQa(), !n) qgl();
  if (rRr(), JDl(), !n) Hrl();
  eSr(e), V0r(), tvl(), lLa(), Promise.resolve().then(() => (mko(), ifl)).then(({
    clearWebFetchCache: r
  }) => r()), Promise.resolve().then(() => (Q1n(), Lla)).then(({
    clearToolSearchDescriptionCache: r
  }) => r()), Promise.resolve().then(() => (ty(), GSt)).then(({
    clearAgentDefinitionsCache: r
  }) => r()), Promise.resolve().then(() => (Qbe(), Bra)).then(({
    clearPromptCache: r
  }) => r());
}