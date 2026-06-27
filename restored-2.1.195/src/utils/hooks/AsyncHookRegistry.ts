// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PZn
// matched 2.1.88 source: src/utils/hooks/AsyncHookRegistry.ts
// class=modified  jaccard=0.6772  score=0.9167  fileCov=0.7216
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module PZn] deps: qfn, je, tA
CCf = ["SessionStart", "Setup"];
function d0l({
  processId: e,
  hookId: t,
  asyncResponse: n,
  hookName: r,
  hookEvent: o,
  command: s,
  shellCommand: i,
  toolName: a,
  pluginId: l,
}) {
  let c = n.asyncTimeout || 15000;
  T(`Hooks: Registering async hook ${e} (${r}) with timeout ${c}ms`);
  let u = DZn({
    hookId: t,
    hookName: r,
    hookEvent: o,
    getOutput: async () => {
      let d = Afe.get(e)?.shellCommand?.taskOutput;
      if (!d)
        return {
          stdout: "",
          stderr: "",
          output: "",
        };
      let p = await d.getStdout(),
        f = d.getStderr();
      return {
        stdout: p,
        stderr: f,
        output: p + f,
      };
    },
  });
  Afe.set(e, {
    processId: e,
    hookId: t,
    hookName: r,
    hookEvent: o,
    toolName: a,
    pluginId: l,
    command: s,
    startTime: Date.now(),
    timeout: c,
    responseAttachmentSent: false,
    shellCommand: i,
    stopProgressInterval: u,
  });
}
async function zMo(e, t, n) {
  e.stopProgressInterval();
  let r = e.shellCommand?.taskOutput,
    o = r ? await r.getStdout() : "",
    s = r?.getStderr() ?? "";
  (e.shellCommand?.cleanup(),
    Ok({
      hookId: e.hookId,
      hookName: e.hookName,
      hookEvent: e.hookEvent,
      output: o + s,
      stdout: o,
      stderr: s,
      exitCode: t,
      outcome: n,
    }));
}
async function p0l() {
  let e = [],
    t = Afe.size;
  T(`Hooks: Found ${t} total hooks in registry`);
  let n = Array.from(Afe.values()),
    r = await Promise.allSettled(
      n.map(async (s) => {
        let i = (await s.shellCommand?.taskOutput.getStdout()) ?? "",
          a = s.shellCommand?.taskOutput.getStderr() ?? "";
        if (
          (T(
            `Hooks: Checking hook ${s.processId} (${s.hookName}) - attachmentSent: ${s.responseAttachmentSent}, stdout length: ${i.length}`,
          ),
          !s.shellCommand)
        )
          return (
            T(`Hooks: Hook ${s.processId} has no shell command, removing from registry`),
            s.stopProgressInterval(),
            {
              type: "remove",
              processId: s.processId,
            }
          );
        if (
          (T(`Hooks: Hook shell status ${s.shellCommand.status}`),
          s.shellCommand.status === "killed")
        )
          return (
            T(`Hooks: Hook ${s.processId} is ${s.shellCommand.status}, removing from registry`),
            s.stopProgressInterval(),
            s.shellCommand.cleanup(),
            {
              type: "remove",
              processId: s.processId,
            }
          );
        if (s.shellCommand.status !== "completed")
          return {
            type: "skip",
          };
        if (s.responseAttachmentSent)
          return (
            T(`Hooks: Skipping hook ${s.processId} - already delivered`),
            s.stopProgressInterval(),
            {
              type: "remove",
              processId: s.processId,
            }
          );
        let l = i.split(`
`);
        T(`Hooks: Processing ${l.length} lines of stdout for ${s.processId}`);
        let u = (await s.shellCommand.result).code,
          d = {};
        for (let p of l)
          if (p.trim().startsWith("{")) {
            T(`Hooks: Found JSON line: ${p.trim().substring(0, 100)}...`);
            try {
              let f = Ft(p.trim());
              if (!("async" in f)) {
                (T(`Hooks: Found sync response from ${s.processId}: ${De(f)}`), (d = f));
                break;
              }
            } catch {
              T(`Hooks: Failed to parse JSON from ${s.processId}: ${p.trim()}`);
            }
          }
        if (
          ((s.responseAttachmentSent = true),
          await zMo(s, u, u === 0 ? "success" : "error"),
          Object.keys(d).length === 0 && u === 0 && !a.trim())
        )
          return (
            T(
              `Hooks: ${s.processId} (${s.hookName}) produced no response payload \u2014 skipping attachment`,
            ),
            {
              type: "remove",
              processId: s.processId,
              isSessionStart: s.hookEvent === "SessionStart",
            }
          );
        return {
          type: "response",
          processId: s.processId,
          isSessionStart: s.hookEvent === "SessionStart",
          payload: {
            processId: s.processId,
            response: d,
            hookName: s.hookName,
            hookEvent: s.hookEvent,
            toolName: s.toolName,
            pluginId: s.pluginId,
            stdout: i,
            stderr: a,
            exitCode: u,
          },
        };
      }),
    ),
    o = false;
  for (let s of r) {
    if (s.status !== "fulfilled") {
      T(`Hooks: checkForAsyncHookResponses callback rejected: ${s.reason}`, {
        level: "error",
      });
      continue;
    }
    let i = s.value;
    if (i.type === "remove") {
      if ((Afe.delete(i.processId), "isSessionStart" in i && i.isSessionStart)) o = true;
    } else if (i.type === "response") {
      if ((e.push(i.payload), Afe.delete(i.processId), i.isSessionStart)) o = true;
    }
  }
  if (o) (T("Invalidating session env cache after SessionStart hook completed"), Eut());
  return (T(`Hooks: checkForNewResponses returning ${e.length} responses`), e);
}
function f0l(e) {
  for (let t of e) {
    let n = Afe.get(t);
    if (n && n.responseAttachmentSent)
      (T(`Hooks: Removing delivered hook ${t}`), n.stopProgressInterval(), Afe.delete(t));
  }
}
async function KMo() {
  let e = Array.from(Afe.values());
  (await Promise.all(
    e.map(async (t) => {
      if (t.shellCommand?.status === "completed") {
        let n = await t.shellCommand.result;
        await zMo(t, n.code, n.code === 0 ? "success" : "error");
      } else {
        if (t.shellCommand && t.shellCommand.status !== "killed") t.shellCommand.kill();
        await zMo(t, 1, "cancelled");
      }
    }),
  ),
    Afe.clear());
}
var Afe;
