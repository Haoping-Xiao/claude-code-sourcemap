// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JYo
// matched 2.1.88 source: src/utils/plugins/mcpPluginIntegration.ts
// class=new  jaccard=0.0143  score=0.3061  fileCov=0.0148
// note: nearest: src/utils/plugins/mcpPluginIntegration.ts (0.0143); dir inferred from dep-graph -> _root; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JYo = E(() => {
  wr();
});
function ZPc(e) {
  let t = Tl() ? "safe mode" : qtn() ? "hermetic mode" : void 0;
  if (!t) return {
    servers: e,
    dropped: [],
    reason: t
  };
  let n = {},
    r = [];
  for (let [o, s] of Object.entries(e)) if (s.type === "sdk") n[o] = s;else r.push(o);
  return {
    servers: n,
    dropped: r,
    reason: t
  };
}