// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hka
// matched 2.1.88 source: src/services/mcp/elicitationHandler.ts
// class=modified  jaccard=0.5444  score=0.7486  fileCov=0.6662
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var hka = E(() => {
  fpo();
  Owp = ppo;
  gka = class gka extends Error {
    constructor(e) {
      super(
        `streamed >${Math.round(e / 1024 / 1024)}MB ${mpo}. The server is likely returning non-protocol data. Disconnecting to prevent unbounded memory growth.`,
      );
      this.name = "HttpBodyOverflowError";
    }
  };
});
function Bwp(e) {
  return e.mode === "url" ? "url" : "form";
}
function Uwp(e, t, n) {
  return e.findIndex(
    (r) =>
      r.serverName === t &&
      r.params.mode === "url" &&
      "elicitationId" in r.params &&
      r.params.elicitationId === n,
  );
}
function yka(e, t, n, r) {
  try {
    (e.setRequestHandler(uhe, async (o, s) => {
      if (r) r.pendingElicitations++;
      sn(t, `Received elicitation request: ${De(o)}`);
      let i = Bwp(o.params);
      G("tengu_mcp_elicitation_shown", {
        mode: $e(i),
      });
      try {
        let a = await j3t(t, o.params, s.signal);
        if (a)
          return (
            sn(t, `Elicitation resolved by hook: ${De(a)}`),
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
            (n((g) => ({
              ...g,
              elicitation: {
                queue: [
                  ...g.elicitation.queue,
                  {
                    serverName: t,
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
        sn(t, `Elicitation response: ${De(u)}`);
        let d = await G3t(t, u, s.signal, i, l);
        return (xe("mcp_elicitation_handle"), d);
      } catch (a) {
        return (
          au(t, `Elicitation error: ${a}`),
          Le("mcp_elicitation_handle", "handler_error"),
          {
            action: "cancel",
          }
        );
      } finally {
        if (r) (r.pendingElicitations--, (r.lastElicitationClosedAt = Date.now()));
      }
    }),
      e.setNotificationHandler(Dkt, (o) => {
        let { elicitationId: s } = o.params;
        (sn(t, `Received elicitation completion notification: ${s}`),
          cJ({
            message: `MCP server "${t}" confirmed elicitation ${s} complete`,
            notificationType: "elicitation_complete",
          }));
        let i = false;
        if (
          (n((a) => {
            let l = Uwp(a.elicitation.queue, t, s);
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
          sn(t, `Ignoring completion notification for unknown elicitation: ${s}`);
      }));
  } catch {
    return;
  }
}
async function j3t(e, t, n) {
  try {
    let r = t.mode === "url" ? "url" : "form",
      o = "url" in t ? t.url : void 0,
      s = "elicitationId" in t ? t.elicitationId : void 0,
      { elicitationResponse: i, blockingError: a } = await W3t({
        serverName: e,
        message: t.message,
        requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0,
        signal: n,
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
    au(e, `Elicitation hook error: ${r}`);
    return;
  }
}
async function G3t(e, t, n, r, o) {
  try {
    let { elicitationResultResponse: s, blockingError: i } = await q3t({
      serverName: e,
      action: t.action,
      content: t.content,
      signal: n,
      mode: r,
      elicitationId: o,
    });
    if (i)
      return (
        cJ({
          message: `Elicitation response for server "${e}": decline`,
          notificationType: "elicitation_response",
        }),
        {
          action: "decline",
        }
      );
    let a = s
      ? {
          action: s.action,
          content: s.content ?? t.content,
        }
      : t;
    return (
      cJ({
        message: `Elicitation response for server "${e}": ${a.action}`,
        notificationType: "elicitation_response",
      }),
      a
    );
  } catch (s) {
    return (
      au(e, `ElicitationResult hook error: ${s}`),
      cJ({
        message: `Elicitation response for server "${e}": ${t.action}`,
        notificationType: "elicitation_response",
      }),
      t
    );
  }
}
