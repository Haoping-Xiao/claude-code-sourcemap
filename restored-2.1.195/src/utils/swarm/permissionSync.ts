// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l0o
// matched 2.1.88 source: src/utils/swarm/permissionSync.ts
// class=modified  jaccard=0.3296  score=0.7651  fileCov=0.3667
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module l0o] deps: Xr
$pf = Dy({
  kind: "permission_workflow",
  payload: ve(() =>
    H.custom(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "script" in e,
    ),
  ),
  result: ve(() => H.custom((e) => typeof e === "object" && e !== null && "behavior" in e)),
  default: {
    behavior: "cancelled",
  },
});
function Opf() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function createPermissionRequest(e) {
  let t = e.teamName || rp(),
    n = e.workerId || PD(),
    r = e.workerName || Oh(),
    o = e.workerColor || Sv();
  if (!t) throw Error("Team name is required for permission requests");
  if (!n) throw Error("Worker ID is required for permission requests");
  if (!r) throw Error("Worker name is required for permission requests");
  return {
    id: Opf(),
    workerId: n,
    workerName: r,
    workerColor: o,
    teamName: t,
    toolName: e.toolName,
    toolUseId: e.toolUseId,
    description: e.description,
    input: e.input,
    permissionSuggestions: e.permissionSuggestions || [],
    createdAt: Date.now(),
  };
}
function Npf(e) {
  if (!(e || rp())) return false;
  let n = PD();
  return !n || n === "team-lead";
}
function X_t() {
  let e = rp(),
    t = PD();
  return !!e && !!t && !Npf();
}
async function getLeaderName(e) {
  let t = e || rp();
  if (!t) return null;
  let n = await hoe(t);
  if (!n) return (T(`[PermissionSync] Team file not found for team: ${t}`), null);
  return n.members.find((o) => o.agentId === n.leadAgentId)?.name || Hd;
}
async function sendPermissionRequestViaMailbox(e) {
  let t = await getLeaderName(e.teamName);
  if (!t)
    return (T("[PermissionSync] Cannot send permission request: leader name not found"), false);
  try {
    let n = zTo({
      request_id: e.id,
      agent_id: e.workerName,
      tool_name: e.toolName,
      tool_use_id: e.toolUseId,
      description: e.description,
      input: e.input,
      permission_suggestions: e.permissionSuggestions,
    });
    return (
      await fg(
        t,
        {
          from: e.workerName,
          text: De(n),
          timestamp: new Date().toISOString(),
          color: e.workerColor,
        },
        e.teamName,
      ),
      T(`[PermissionSync] Sent permission request ${e.id} to leader ${t} via mailbox`),
      true
    );
  } catch (n) {
    return (
      T(`[PermissionSync] Failed to send permission request via mailbox: ${n}`),
      ke(n),
      false
    );
  }
}
async function sendPermissionResponseViaMailbox(e, t, n, r) {
  let o = r || rp();
  if (!o)
    return (T("[PermissionSync] Cannot send permission response: team name not found"), false);
  try {
    let s = KTo({
      request_id: n,
      subtype: t.decision === "approved" ? "success" : "error",
      error: t.feedback,
      updated_input: t.updatedInput,
      permission_updates: t.permissionUpdates,
    });
    return (
      await fg(
        e,
        {
          from: Hd,
          text: De(s),
          timestamp: new Date().toISOString(),
        },
        o,
      ),
      T(`[PermissionSync] Sent permission response for ${n} to worker ${e} via mailbox`),
      true
    );
  } catch (s) {
    return (
      T(`[PermissionSync] Failed to send permission response via mailbox: ${s}`),
      ke(s),
      false
    );
  }
}
function generateSandboxRequestId() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
async function sendSandboxPermissionRequestViaMailbox(e, t, n) {
  let r = n || rp();
  if (!r)
    return (
      T("[PermissionSync] Cannot send sandbox permission request: team name not found"),
      Le("swarm_sandbox_permission_request", "no_team_name"),
      false
    );
  let o = await getLeaderName(r);
  if (!o)
    return (
      T("[PermissionSync] Cannot send sandbox permission request: leader name not found"),
      Le("swarm_sandbox_permission_request", "no_leader"),
      false
    );
  let s = PD(),
    i = Oh(),
    a = Sv();
  if (!s || !i)
    return (
      T("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found"),
      Le("swarm_sandbox_permission_request", "no_worker_identity"),
      false
    );
  try {
    let l = YTo({
      requestId: t,
      workerId: s,
      workerName: i,
      workerColor: a,
      host: e,
    });
    return (
      await fg(
        o,
        {
          from: i,
          text: De(l),
          timestamp: new Date().toISOString(),
          color: a,
        },
        r,
      ),
      T(
        `[PermissionSync] Sent sandbox permission request ${t} for host ${e} to leader ${o} via mailbox`,
      ),
      xe("swarm_sandbox_permission_request"),
      true
    );
  } catch (l) {
    return (
      T(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${l}`),
      ke(l),
      Le("swarm_sandbox_permission_request", "mailbox_write_failed"),
      false
    );
  }
}
async function sendSandboxPermissionResponseViaMailbox(e, t, n, r, o) {
  let s = o || rp();
  if (!s)
    return (
      T("[PermissionSync] Cannot send sandbox permission response: team name not found"),
      false
    );
  try {
    let i = XTo({
      requestId: t,
      host: n,
      allow: r,
    });
    return (
      await fg(
        e,
        {
          from: Hd,
          text: De(i),
          timestamp: new Date().toISOString(),
        },
        s,
      ),
      T(
        `[PermissionSync] Sent sandbox permission response for ${t} (host: ${n}, allow: ${r}) to worker ${e} via mailbox`,
      ),
      true
    );
  } catch (i) {
    return (
      T(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${i}`),
      ke(i),
      false
    );
  }
}
