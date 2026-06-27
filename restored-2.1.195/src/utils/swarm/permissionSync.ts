// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l0o
// matched 2.1.88 source: src/utils/swarm/permissionSync.ts
// class=modified  jaccard=0.3296  score=0.7651  fileCov=0.3667
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module l0o] deps: @modelcontextprotocol/sdk/dist/esm/types.js
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
function createPermissionRequest(params) {
  let t = params.teamName || rp(),
    n = params.workerId || PD(),
    r = params.workerName || Oh(),
    o = params.workerColor || Sv();
  if (!t) throw Error("Team name is required for permission requests");
  if (!n) throw Error("Worker ID is required for permission requests");
  if (!r) throw Error("Worker name is required for permission requests");
  return {
    id: Opf(),
    workerId: n,
    workerName: r,
    workerColor: o,
    teamName: t,
    toolName: params.toolName,
    toolUseId: params.toolUseId,
    description: params.description,
    input: params.input,
    permissionSuggestions: params.permissionSuggestions || [],
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
async function getLeaderName(teamName) {
  let t = teamName || rp();
  if (!t) return null;
  let n = await hoe(t);
  if (!n) return (T(`[PermissionSync] Team file not found for team: ${t}`), null);
  return n.members.find((o) => o.agentId === n.leadAgentId)?.name || Hd;
}
async function sendPermissionRequestViaMailbox(request) {
  let t = await getLeaderName(request.teamName);
  if (!t)
    return (T("[PermissionSync] Cannot send permission request: leader name not found"), false);
  try {
    let n = zTo({
      request_id: request.id,
      agent_id: request.workerName,
      tool_name: request.toolName,
      tool_use_id: request.toolUseId,
      description: request.description,
      input: request.input,
      permission_suggestions: request.permissionSuggestions,
    });
    return (
      await fg(
        t,
        {
          from: request.workerName,
          text: De(n),
          timestamp: new Date().toISOString(),
          color: request.workerColor,
        },
        request.teamName,
      ),
      T(`[PermissionSync] Sent permission request ${request.id} to leader ${t} via mailbox`),
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
async function sendPermissionResponseViaMailbox(workerName, resolution, requestId, teamName) {
  let o = teamName || rp();
  if (!o)
    return (T("[PermissionSync] Cannot send permission response: team name not found"), false);
  try {
    let s = KTo({
      request_id: requestId,
      subtype: resolution.decision === "approved" ? "success" : "error",
      error: resolution.feedback,
      updated_input: resolution.updatedInput,
      permission_updates: resolution.permissionUpdates,
    });
    return (
      await fg(
        workerName,
        {
          from: Hd,
          text: De(s),
          timestamp: new Date().toISOString(),
        },
        o,
      ),
      T(
        `[PermissionSync] Sent permission response for ${requestId} to worker ${workerName} via mailbox`,
      ),
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
async function sendSandboxPermissionRequestViaMailbox(host, requestId, teamName) {
  let r = teamName || rp();
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
      requestId: requestId,
      workerId: s,
      workerName: i,
      workerColor: a,
      host: host,
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
        `[PermissionSync] Sent sandbox permission request ${requestId} for host ${host} to leader ${o} via mailbox`,
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
async function sendSandboxPermissionResponseViaMailbox(
  workerName,
  requestId,
  host,
  allow,
  teamName,
) {
  let s = teamName || rp();
  if (!s)
    return (
      T("[PermissionSync] Cannot send sandbox permission response: team name not found"),
      false
    );
  try {
    let i = XTo({
      requestId: requestId,
      host: host,
      allow: allow,
    });
    return (
      await fg(
        workerName,
        {
          from: Hd,
          text: De(i),
          timestamp: new Date().toISOString(),
        },
        s,
      ),
      T(
        `[PermissionSync] Sent sandbox permission response for ${requestId} (host: ${host}, allow: ${allow}) to worker ${workerName} via mailbox`,
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
