// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ivo
// matched 2.1.88 source: src/types/hooks.ts
// class=new  jaccard=0.0393  score=0.2515  fileCov=0.0444
// note: nearest: src/types/hooks.ts (0.0393); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ivo = E(() => {
  Xr();
  Vht = Dy({
    kind: "permission_exit_plan_mode_v2",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e && "plan" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
var fMe;