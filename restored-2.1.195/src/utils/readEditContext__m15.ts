// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DHe
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified (alt of src/utils/readEditContext.ts)  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var DHe = E(() => {
  ft();
  dn();
  Un();
  oo();
  er();
  je();
  wr();
  fn();
  Bi();
  vn();
  Is();
  Jt();
  VM();
  kZn();
  PFl();
  ((_se = require("fs/promises")),
    (OFl = require("os")),
    (tZ = require("path")),
    (pBo = require("url")),
    (MFl = `${fBo}.json`));
});
var _Bo = {};
_t(_Bo, {
  skillIndexCacheKey: () => skillIndexCacheKey,
  getSkillIndex: () => getSkillIndex,
  clearSkillIndexCache: () => clearSkillIndexCache,
});
function skillIndexCacheKey(e, t) {
  return `${hKt()}:${G6()}:${e}:${(t ?? [])
    .map((n) => n.name)
    .sort()
    .join(",")}`;
}
function clearSkillIndexCache() {
  getSkillIndex.cache?.clear?.();
}
var getSkillIndex;
