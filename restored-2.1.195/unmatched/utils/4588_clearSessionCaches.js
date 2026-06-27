// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JSt
// matched 2.1.88 source: src/commands/clear/caches.ts
// class=new  jaccard=0.032  score=1  fileCov=0.032
// note: nearest: src/commands/clear/caches.ts (0.032); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var JSt = E(() => {
  pq();
  jDl();
  id();
  kt();
  er();
  Lo();
  je();
  At();
  Bi();
  ys();
  sa();
  ZYt();
  sp();
  vn();
  Hu();
  tre();
  dr();
  ih();
  WDl = require("fs"), qDl = R(D3e(), 1), jN = R(require("path"));
  Cfe = VDl();
});
var QSt = {};
_t(QSt, {
  clearSessionCaches: () => clearSessionCaches
});
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