// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module two
// matched 2.1.88 source: src/types/hooks.ts
// class=new  jaccard=0.0393  score=0.2515  fileCov=0.0444
// note: nearest: src/types/hooks.ts (0.0393); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var two = E(() => {
  Xr();
  J9t = Dy({
    kind: "permission_skill",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e && "skill" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
var Q9t;