// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H7n
// matched 2.1.88 source: src/hooks/useSwarmPermissionPoller.ts
// class=modified  jaccard=0.2904  score=0.5918  fileCov=0.3631
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module H7n] deps: Xr, DE, jgl
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
function parsePermissionUpdates(e) {
  if (!Array.isArray(e)) return [];
  let t = nbt(),
    n = [];
  for (let r of e) {
    let o = t.safeParse(r);
    if (o.success) n.push(o.data);
    else
      T(`[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${o.error.message}`, {
        level: "warn",
      });
  }
  return n;
}
function registerPermissionCallback(e) {
  (rbt.set(e.requestId, e),
    T(`[SwarmPermissionPoller] Registered callback for request ${e.requestId}`));
}
function unregisterPermissionCallback(e) {
  (rbt.delete(e), T(`[SwarmPermissionPoller] Unregistered callback for request ${e}`));
}
function Wgl(e) {
  return rbt.has(e);
}
function qgl() {
  (rbt.clear(), z6t.clear());
}
function processMailboxPermissionResponse(e) {
  let t = rbt.get(e.requestId);
  if (!t)
    return (
      T(`[SwarmPermissionPoller] No callback registered for mailbox response ${e.requestId}`),
      false
    );
  if (
    (T(
      `[SwarmPermissionPoller] Processing mailbox response for request ${e.requestId}: ${e.decision}`,
    ),
    rbt.delete(e.requestId),
    e.decision === "approved")
  ) {
    let n = parsePermissionUpdates(e.permissionUpdates),
      r = e.updatedInput;
    t.onAllow(r, n);
  } else t.onReject(e.feedback);
  return true;
}
function registerSandboxPermissionCallback(e) {
  (z6t.set(e.requestId, e),
    T(`[SwarmPermissionPoller] Registered sandbox callback for request ${e.requestId}`));
}
function zgl(e) {
  return z6t.has(e);
}
function processSandboxPermissionResponse(e) {
  let t = z6t.get(e.requestId);
  if (!t)
    return (
      T(`[SwarmPermissionPoller] No sandbox callback registered for request ${e.requestId}`),
      false
    );
  return (
    T(
      `[SwarmPermissionPoller] Processing sandbox response for request ${e.requestId}: allow=${e.allow}`,
    ),
    z6t.delete(e.requestId),
    t.resolve(e.allow),
    true
  );
}
var rbt, z6t;
