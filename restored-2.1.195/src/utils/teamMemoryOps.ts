// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xbt
// matched 2.1.88 source: src/utils/teamMemoryOps.ts
// class=modified  jaccard=0.5751  score=1  fileCov=0.5751
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Xbt] deps: services/analytics/metadata.ts, memdir/teamMemPrompts.ts, tools/FileEditTool/constants.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/windowsPaths.ts
q$e = require("path");
function yvl(e) {
  let t = e;
  if (!t) return false;
  if (t.path && P7(t.path)) return true;
  return false;
}
function _vl(e, t) {
  if (e !== Wc && e !== ka) return false;
  let n = t,
    r = n?.file_path ?? n?.path;
  return r !== void 0 && P7(r);
}
function appendTeamMemorySummaryParts(memoryCounts, isActive, parts) {
  let r = memoryCounts.teamMemoryReadCount ?? 0,
    o = memoryCounts.teamMemorySearchCount ?? 0,
    s = memoryCounts.teamMemoryWriteCount ?? 0;
  if (r > 0) {
    let i = isActive
      ? parts.length === 0
        ? "Recalling"
        : "recalling"
      : parts.length === 0
        ? "Recalled"
        : "recalled";
    parts.push(`${i} ${r} team ${r === 1 ? "memory" : "memories"}`);
  }
  if (o > 0) {
    let i = isActive
      ? parts.length === 0
        ? "Searching"
        : "searching"
      : parts.length === 0
        ? "Searched"
        : "searched";
    parts.push(`${i} team memories`);
  }
  if (s > 0) {
    let i = isActive
      ? parts.length === 0
        ? "Writing"
        : "writing"
      : parts.length === 0
        ? "Wrote"
        : "wrote";
    parts.push(`${i} ${s} team ${s === 1 ? "memory" : "memories"}`);
  }
}
