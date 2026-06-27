// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H7n
// matched 2.1.88 source: src/hooks/useSwarmPermissionPoller.ts
// class=modified  jaccard=0.2904  score=0.5918  fileCov=0.3631
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module H7n] deps: @modelcontextprotocol/sdk/dist/esm/types.js, utils/permissions/PermissionMode.ts, utils/permissions/PermissionRule.ts
((tbt = ve(() =>
  ol.enum(["userSettings", "projectSettings", "localSettings", "session", "cliArg"]),
)),
  (nbt = ve(() =>
    ol.discriminatedUnion("type", [
      ol.object({
        type: ol.literal("addRules"),
        rules: ol.array(A7n()),
        behavior: E7n(),
        destination: tbt(),
      }),
      ol.object({
        type: ol.literal("replaceRules"),
        rules: ol.array(A7n()),
        behavior: E7n(),
        destination: tbt(),
      }),
      ol.object({
        type: ol.literal("removeRules"),
        rules: ol.array(A7n()),
        behavior: E7n(),
        destination: tbt(),
      }),
      ol.object({
        type: ol.literal("setMode"),
        mode: qRt(),
        destination: tbt(),
      }),
      ol.object({
        type: ol.literal("addDirectories"),
        directories: ol.array(ol.string()),
        destination: tbt(),
      }),
      ol.object({
        type: ol.literal("removeDirectories"),
        directories: ol.array(ol.string()),
        destination: tbt(),
      }),
    ]),
  )));
function parsePermissionUpdates(raw) {
  if (!Array.isArray(raw)) return [];
  let t = nbt(),
    n = [];
  for (let r of raw) {
    let o = t.safeParse(r);
    if (o.success) n.push(o.data);
    else
      T(`[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${o.error.message}`, {
        level: "warn",
      });
  }
  return n;
}
function registerPermissionCallback(callback) {
  (rbt.set(callback.requestId, callback),
    T(`[SwarmPermissionPoller] Registered callback for request ${callback.requestId}`));
}
function unregisterPermissionCallback(requestId) {
  (rbt.delete(requestId),
    T(`[SwarmPermissionPoller] Unregistered callback for request ${requestId}`));
}
function Wgl(e) {
  return rbt.has(e);
}
function qgl() {
  (rbt.clear(), z6t.clear());
}
function processMailboxPermissionResponse(params) {
  let callback = rbt.get(params.requestId);
  if (!callback)
    return (
      T(`[SwarmPermissionPoller] No callback registered for mailbox response ${params.requestId}`),
      false
    );
  if (
    (T(
      `[SwarmPermissionPoller] Processing mailbox response for request ${params.requestId}: ${params.decision}`,
    ),
    rbt.delete(params.requestId),
    params.decision === "approved")
  ) {
    let n = parsePermissionUpdates(params.permissionUpdates),
      r = params.updatedInput;
    callback.onAllow(r, n);
  } else callback.onReject(params.feedback);
  return true;
}
function registerSandboxPermissionCallback(callback) {
  (z6t.set(callback.requestId, callback),
    T(`[SwarmPermissionPoller] Registered sandbox callback for request ${callback.requestId}`));
}
function zgl(e) {
  return z6t.has(e);
}
function processSandboxPermissionResponse(params) {
  let t = z6t.get(params.requestId);
  if (!t)
    return (
      T(`[SwarmPermissionPoller] No sandbox callback registered for request ${params.requestId}`),
      false
    );
  return (
    T(
      `[SwarmPermissionPoller] Processing sandbox response for request ${params.requestId}: allow=${params.allow}`,
    ),
    z6t.delete(params.requestId),
    t.resolve(params.allow),
    true
  );
}
var rbt, z6t;
