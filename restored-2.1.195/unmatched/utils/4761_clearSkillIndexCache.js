// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DHe
// matched 2.1.88 source: src/services/mcp/useManageMCPConnections.ts
// class=new  jaccard=0.0101  score=0.4123  fileCov=0.0102
// note: nearest: src/services/mcp/useManageMCPConnections.ts (0.0101); dir inferred from dep-graph -> utils; 3 renamed
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
  _se = require("fs/promises"), OFl = require("os"), tZ = require("path"), pBo = require("url"), MFl = `${fBo}.json`;
});
var _Bo = {};
_t(_Bo, {
  skillIndexCacheKey: () => skillIndexCacheKey,
  getSkillIndex: () => getSkillIndex,
  clearSkillIndexCache: () => clearSkillIndexCache
});
function skillIndexCacheKey(e, t) {
  return `${hKt()}:${G6()}:${e}:${(t ?? []).map(n => n.name).sort().join(",")}`;
}
function clearSkillIndexCache() {
  getSkillIndex.cache?.clear?.();
}
var getSkillIndex;