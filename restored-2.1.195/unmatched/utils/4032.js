// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zvo
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
// class=new  jaccard=0.0122  score=0.2413  fileCov=0.0126
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/types.js (0.0122); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zvo = E(() => {
  Xr();
  Y9t = Dy({
    kind: "permission_monitor",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e && "intervalMs" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
var kMe;