// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hka
// matched 2.1.88 source: src/services/mcp/elicitationHandler.ts
// class=modified  jaccard=0.5444  score=0.7486  fileCov=0.6662
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hka] deps: fpo
Owp = ppo;
gka = class gka extends Error {
  constructor(e) {
    super(
      `streamed >${Math.round(e / 1024 / 1024)}MB ${mpo}. The server is likely returning non-protocol data. Disconnecting to prevent unbounded memory growth.`,
    );
    this.name = "HttpBodyOverflowError";
  }
};
function Bwp(e) {
  return e.mode === "url" ? "url" : "form";
}
function findElicitationInQueue(queue, serverName, elicitationId) {
  return queue.findIndex(
    (r) =>
      r.serverName === serverName &&
      r.params.mode === "url" &&
      "elicitationId" in r.params &&
      r.params.elicitationId === elicitationId,
  );
}
function registerElicitationHandler(client, serverName, setAppState, r) {
  try {
    (client.setRequestHandler(uhe, async (o, s) => {
      if (r) r.pendingElicitations++;
      sn(serverName, `Received elicitation request: ${De(o)}`);
      let i = Bwp(o.params);
      G("tengu_mcp_elicitation_shown", {
        mode: $e(i),
      });
      try {
        let a = await runElicitationHooks(serverName, o.params, s.signal);
        if (a)
          return (
            sn(serverName, `Elicitation resolved by hook: ${De(a)}`),
            G("tengu_mcp_elicitation_response", {
              mode: $e(i),
              action: $e(a.action),
            }),
            xe("mcp_elicitation_handle"),
            a
          );
        let l = i === "url" && "elicitationId" in o.params ? o.params.elicitationId : void 0,
          u = await new Promise((p) => {
            let f = () => {
              p({
                action: "cancel",
              });
            };
            if (s.signal.aborted) {
              f();
              return;
            }
            let m = l
              ? {
                  actionLabel: "Skip confirmation",
                }
              : void 0;
            (setAppState((g) => ({
              ...g,
              elicitation: {
                queue: [
                  ...g.elicitation.queue,
                  {
                    serverName: serverName,
                    requestId: s.requestId,
                    params: o.params,
                    signal: s.signal,
                    waitingState: m,
                    respond: (h) => {
                      (s.signal.removeEventListener("abort", f),
                        G("tengu_mcp_elicitation_response", {
                          mode: $e(i),
                          action: $e(h.action),
                        }),
                        p(h));
                    },
                  },
                ],
              },
            })),
              s.signal.addEventListener("abort", f, {
                once: true,
              }));
          });
        sn(serverName, `Elicitation response: ${De(u)}`);
        let d = await runElicitationResultHooks(serverName, u, s.signal, i, l);
        return (xe("mcp_elicitation_handle"), d);
      } catch (a) {
        return (
          au(serverName, `Elicitation error: ${a}`),
          Le("mcp_elicitation_handle", "handler_error"),
          {
            action: "cancel",
          }
        );
      } finally {
        if (r) (r.pendingElicitations--, (r.lastElicitationClosedAt = Date.now()));
      }
    }),
      client.setNotificationHandler(Dkt, (o) => {
        let { elicitationId: s } = o.params;
        (sn(serverName, `Received elicitation completion notification: ${s}`),
          cJ({
            message: `MCP server "${serverName}" confirmed elicitation ${s} complete`,
            notificationType: "elicitation_complete",
          }));
        let i = false;
        if (
          (setAppState((a) => {
            let l = findElicitationInQueue(a.elicitation.queue, serverName, s);
            if (l === -1) return a;
            i = true;
            let c = [...a.elicitation.queue];
            return (
              (c[l] = {
                ...c[l],
                completed: true,
              }),
              {
                ...a,
                elicitation: {
                  queue: c,
                },
              }
            );
          }),
          !i)
        )
          sn(serverName, `Ignoring completion notification for unknown elicitation: ${s}`);
      }));
  } catch {
    return;
  }
}
async function runElicitationHooks(serverName, params, signal) {
  try {
    let r = params.mode === "url" ? "url" : "form",
      o = "url" in params ? params.url : void 0,
      s = "elicitationId" in params ? params.elicitationId : void 0,
      { elicitationResponse: i, blockingError: a } = await W3t({
        serverName: serverName,
        message: params.message,
        requestedSchema: "requestedSchema" in params ? params.requestedSchema : void 0,
        signal: signal,
        mode: r,
        url: o,
        elicitationId: s,
      });
    if (a)
      return {
        action: "decline",
      };
    if (i)
      return {
        action: i.action,
        content: i.content,
      };
    return;
  } catch (r) {
    au(serverName, `Elicitation hook error: ${r}`);
    return;
  }
}
async function runElicitationResultHooks(serverName, result, signal, mode, elicitationId) {
  try {
    let { elicitationResultResponse: s, blockingError: i } = await q3t({
      serverName: serverName,
      action: result.action,
      content: result.content,
      signal: signal,
      mode: mode,
      elicitationId: elicitationId,
    });
    if (i)
      return (
        cJ({
          message: `Elicitation response for server "${serverName}": decline`,
          notificationType: "elicitation_response",
        }),
        {
          action: "decline",
        }
      );
    let a = s
      ? {
          action: s.action,
          content: s.content ?? result.content,
        }
      : result;
    return (
      cJ({
        message: `Elicitation response for server "${serverName}": ${a.action}`,
        notificationType: "elicitation_response",
      }),
      a
    );
  } catch (s) {
    return (
      au(serverName, `ElicitationResult hook error: ${s}`),
      cJ({
        message: `Elicitation response for server "${serverName}": ${result.action}`,
        notificationType: "elicitation_response",
      }),
      result
    );
  }
}
