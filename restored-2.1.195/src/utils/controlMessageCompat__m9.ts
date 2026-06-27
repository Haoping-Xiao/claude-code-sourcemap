// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nwo
// matched 2.1.88 source: src/utils/controlMessageCompat.ts
// class=modified (alt of src/utils/controlMessageCompat.ts)  jaccard=0.0652  score=0.0821  fileCov=0.2399
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nwo] deps: @modelcontextprotocol/sdk/dist/esm/types.js
Q9t = Dy({
  kind: "permission_webfetch",
  payload: ve(() =>
    H.custom(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "hostname" in e,
    ),
  ),
  result: ve(() => H.custom((e) => typeof e === "object" && e !== null && "behavior" in e)),
  default: {
    behavior: "cancelled",
  },
});
function xnl(e, t) {
  for (let n of Object.values(t.tasks)) if (uE(n) && n.identity.agentName === e) return n.id;
  return;
}
function rwo(e, t, n) {
  t.update(e, (r) => ({
    ...r,
    awaitingPlanApproval: n,
  }));
}
function knl(e, t, n) {
  let r = n.get(e);
  if (!r || !uE(r) || !r.awaitingPlanApproval) return false;
  if (!t.approved) return (rwo(e, n, false), true);
  let o = owo(t.permissionMode);
  return (
    n.update(e, (s) => ({
      ...s,
      awaitingPlanApproval: false,
      permissionMode: o,
    })),
    Mht(r.identity.teamName, r.identity.agentName, o),
    true
  );
}
function owo(e) {
  let t = $x(jO(e ?? "default"));
  if (t === "bypassPermissions" && wU()) return "default";
  if (t === "auto" && !Zv()) return "default";
  return t;
}
