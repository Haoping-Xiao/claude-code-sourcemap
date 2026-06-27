// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U8n
// matched 2.1.88 source: src/utils/hooks.ts
// class=new  jaccard=0.0083  score=0.2687  fileCov=0.0084
// note: nearest: src/utils/hooks.ts (0.0083); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var U8n = E(() => {
  Xr();
  _8e = Dy({
    kind: "permission_bash",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e && "command" in e && "classifierState" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
var L9t;