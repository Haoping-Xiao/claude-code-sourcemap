// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B8n
// matched 2.1.88 source: src/types/hooks.ts
// class=new  jaccard=0.0382  score=0.2152  fileCov=0.0444
// note: nearest: src/types/hooks.ts (0.0382); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var B8n = E(() => {
  Xr();
  y8e = Dy({
    kind: "permission_ask_user_question",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e && "questions" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
var _8e;