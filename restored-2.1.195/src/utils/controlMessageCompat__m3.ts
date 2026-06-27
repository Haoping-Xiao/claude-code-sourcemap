// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module two
// matched 2.1.88 source: src/utils/controlMessageCompat.ts
// class=modified (alt of src/utils/controlMessageCompat.ts)  jaccard=0.1019  score=0.1504  fileCov=0.2399
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module two] deps: @modelcontextprotocol/sdk/dist/esm/types.js
J9t = Dy({
  kind: "permission_skill",
  payload: ve(() =>
    H.custom(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "skill" in e,
    ),
  ),
  result: ve(() => H.custom((e) => typeof e === "object" && e !== null && "behavior" in e)),
  default: {
    behavior: "cancelled",
  },
});
var Q9t;
