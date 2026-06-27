// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ewo
// matched 2.1.88 source: src/utils/hooks.ts
// class=new  jaccard=0.0085  score=0.27  fileCov=0.0087
// note: nearest: src/utils/hooks.ts (0.0085); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ewo = E(() => {
  Xr();
  X9t = Dy({
    kind: "permission_powershell",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e && "command" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
var J9t;