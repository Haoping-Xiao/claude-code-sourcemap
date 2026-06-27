// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zvo
// matched 2.1.88 source: src/utils/controlMessageCompat.ts
// class=modified (alt of src/utils/controlMessageCompat.ts)  jaccard=0.0937  score=0.1333  fileCov=0.2399
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Zvo] deps: Xr
Y9t = Dy({
  kind: "permission_monitor",
  payload: ve(() =>
    H.custom(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "intervalMs" in e,
    ),
  ),
  result: ve(() => H.custom((e) => typeof e === "object" && e !== null && "behavior" in e)),
  default: {
    behavior: "cancelled",
  },
});
var kMe;
