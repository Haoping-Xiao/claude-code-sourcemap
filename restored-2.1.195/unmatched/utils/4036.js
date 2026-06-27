// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nwo
// matched 2.1.88 source: src/tools/shared/spawnMultiAgent.ts
// class=new  jaccard=0.0235  score=0.2215  fileCov=0.0256
// note: nearest: src/tools/shared/spawnMultiAgent.ts (0.0235); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nwo = E(() => {
  Xr();
  Q9t = Dy({
    kind: "permission_webfetch",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e && "hostname" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
});
function xnl(e, t) {
  for (let n of Object.values(t.tasks)) if (uE(n) && n.identity.agentName === e) return n.id;
  return;
}
function rwo(e, t, n) {
  t.update(e, r => ({
    ...r,
    awaitingPlanApproval: n
  }));
}
function knl(e, t, n) {
  let r = n.get(e);
  if (!r || !uE(r) || !r.awaitingPlanApproval) return !1;
  if (!t.approved) return rwo(e, n, !1), !0;
  let o = owo(t.permissionMode);
  return n.update(e, s => ({
    ...s,
    awaitingPlanApproval: !1,
    permissionMode: o
  })), Mht(r.identity.teamName, r.identity.agentName, o), !0;
}
function owo(e) {
  let t = $x(jO(e ?? "default"));
  if (t === "bypassPermissions" && wU()) return "default";
  if (t === "auto" && !Zv()) return "default";
  return t;
}