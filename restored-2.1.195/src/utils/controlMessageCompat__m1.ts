// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module svo
// matched 2.1.88 source: src/utils/controlMessageCompat.ts
// class=modified (alt of src/utils/controlMessageCompat.ts)  jaccard=0.1019  score=0.1504  fileCov=0.2399
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module svo] deps: Xr
D9t = Dy({
  kind: "permission_enter_plan_mode",
  payload: ve(() =>
    H.custom(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e,
    ),
  ),
  result: ve(() => H.custom((e) => typeof e === "object" && e !== null && "behavior" in e)),
  default: {
    behavior: "cancelled",
  },
});
var Vht;
