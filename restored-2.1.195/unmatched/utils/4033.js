// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y6n
// matched 2.1.88 source: src/types/hooks.ts
// class=new  jaccard=0.0394  score=0.2587  fileCov=0.0444
// note: nearest: src/types/hooks.ts (0.0394); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y6n = E(() => {
  Xr();
  kMe = Dy({
    kind: "permission_prompt",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
var X9t;