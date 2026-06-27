// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ovo
// matched 2.1.88 source: src/types/hooks.ts
// class=new  jaccard=0.0382  score=0.2126  fileCov=0.0444
// note: nearest: src/types/hooks.ts (0.0382); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ovo = E(() => {
  Xr();
  L9t = Dy({
    kind: "permission_browser",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e && "verbPhrase" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
var D9t;