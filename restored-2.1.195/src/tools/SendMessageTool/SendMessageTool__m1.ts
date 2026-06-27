// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YEl
// matched 2.1.88 source: src/tools/SendMessageTool/SendMessageTool.ts
// class=modified (alt of src/tools/SendMessageTool/SendMessageTool.ts)  jaccard=0.1948  score=0.3724  fileCov=0.2901
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YEl] deps: Xr, ft, GF, ii, pMe, S_, xht, LEl, sA, Il, je, wr, At, es, Yp, bm, DE, PDe, _a, dr, Jt, hN, MEl, hP, Mp, YI, fh, qzt, FEl, WEl
((qEl = /^[^\n\r]{1,200}$/),
  (MXn = new Map()),
  (vyf = ve(() =>
    H.discriminatedUnion("type", [
      H.object({
        type: H.literal("shutdown_request"),
        reason: H.string().optional(),
      }),
      H.object({
        type: H.literal("shutdown_response"),
        request_id: H.string().regex(qEl, "must be the request id being responded to"),
        approve: Y0(),
        reason: H.string().optional(),
      }),
      H.object({
        type: H.literal("plan_approval_response"),
        request_id: H.string().regex(qEl, "must be the request id being responded to"),
        approve: Y0(),
        feedback: H.string().optional(),
      }),
    ]),
  )),
  (VEl = ve(() =>
    H.object({
      to: H.string().describe("Recipient: teammate name"),
      summary: H.string()
        .max(200)
        .optional()
        .describe(
          "A 5-10 word summary shown as a preview in the UI (required when message is a string)",
        ),
      message: H.union([H.string().describe("Plain text message content"), vyf()]),
    }),
  )),
  (wyf = ve(() =>
    VEl().extend({
      message: H.string().describe("Plain text message content"),
    }),
  )));
OXn = class OXn extends Error {
  constructor(e) {
    super(e);
    this.name = "SendMessagePreconditionError";
  }
};
Myf = ti({
  name: Ly,
  searchHint: "send messages to agent teammates",
  maxResultSizeChars: 100000 /* 1e5 */,
  userFacingName() {
    return "SendMessage";
  },
  get inputSchema() {
    return Cyf();
  },
  shouldDefer: true,
  isReadOnly(e) {
    return typeof e.message === "string";
  },
  backfillObservableInput(e) {
    if ("type" in e) return;
    if (typeof e.to !== "string") return;
    if (typeof e.message === "string")
      ((e.type = "message"), (e.recipient = e.to), (e.content = e.message));
    else if (typeof e.message === "object" && e.message !== null) {
      let t = e.message;
      if (((e.type = t.type), (e.recipient = e.to), t.request_id !== void 0))
        e.request_id = t.request_id;
      if (t.approve !== void 0) e.approve = t.approve;
      let n = t.reason ?? t.feedback;
      if (n !== void 0) e.content = n;
    }
  },
  toAutoClassifierInput(e) {
    if (typeof e.message === "string") return `to ${e.to}: ${e.message}`;
    switch (e.message.type) {
      case "shutdown_request":
        return `shutdown_request to ${e.to}`;
      case "shutdown_response":
        return `shutdown_response ${e.message.approve ? "approve" : "reject"} ${e.message.request_id}`;
      case "plan_approval_response":
        return `plan_approval ${e.message.approve ? "approve" : "reject"} to ${e.to}`;
    }
  },
  async checkPermissions(e, t) {
    return {
      behavior: "allow",
      updatedInput: e,
    };
  },
  async validateInput(e, t) {
    if (e.to.trim().length === 0)
      return {
        result: false,
        message: "to must not be empty",
        errorCode: 9,
      };
    if (e.to === "*")
      return {
        result: false,
        message: 'broadcast (to: "*") is no longer supported \u2014 send a message per recipient',
        errorCode: 9,
      };
    let n = gZa(e.to);
    if ((n.scheme === "bridge" || n.scheme === "uds") && n.target.trim().length === 0)
      return {
        result: false,
        message: "address target must not be empty",
        errorCode: 9,
      };
    if (!nAe(n.target) || !nAe(e.to))
      return {
        result: false,
        message: `'${e.to}' is not a local socket address. Use an address from ${Mct}.`,
        errorCode: 9,
      };
    if (e.to.includes("@"))
      return {
        result: false,
        message: "to must be a bare teammate name \u2014 there is only one team per session",
        errorCode: 9,
      };
    if (typeof e.message === "string") {
      if (!e.summary || e.summary.trim().length === 0)
        return {
          result: false,
          message: "summary is required when message is a string",
          errorCode: 9,
        };
      if (kF(e.message))
        return {
          result: false,
          message:
            'message text must not be a teammate protocol frame (permission/mode/plan/shutdown JSON) \u2014 to respond to a plan or shutdown request, use the structured object form ({"message": {"type": ...}}); otherwise send plain text',
          errorCode: 9,
        };
      try {
        let r = Ft(e.message);
        if (
          r !== null &&
          typeof r === "object" &&
          "type" in r &&
          typeof r.type === "string" &&
          [
            "idle_notification",
            "teammate_terminated",
            "task_assignment",
            "task_completed",
            "shutdown_rejected",
          ].includes(r.type)
        )
          return {
            result: false,
            message:
              "message text must not be a teammate lifecycle/task frame (idle/terminated/task/shutdown JSON) \u2014 send plain text instead",
            errorCode: 9,
          };
      } catch {}
      return {
        result: true,
      };
    }
    if (!el())
      return {
        result: false,
        message: "Structured team-protocol messages are only available with agent teams enabled.",
        errorCode: 9,
      };
    if (e.message.type === "shutdown_response" && e.to !== Hd)
      return {
        result: false,
        message: `shutdown_response must be sent to "${Hd}"`,
        errorCode: 9,
      };
    if (e.message.type === "shutdown_response" && e.message.approve && e.message.reason !== void 0)
      return {
        result: false,
        message:
          "reason is only delivered on rejections (approve: false) \u2014 approvals are sent as a silent confirmation with no reason text; omit reason or reject instead",
        errorCode: 9,
      };
    if (
      e.message.type === "shutdown_response" &&
      !e.message.approve &&
      (!e.message.reason || e.message.reason.trim().length === 0)
    )
      return {
        result: false,
        message: "reason is required when rejecting a shutdown request",
        errorCode: 9,
      };
    return {
      result: true,
    };
  },
  async description() {
    return BEl;
  },
  async prompt() {
    return UEl(el());
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: [
        {
          type: "text",
          text: De(e),
        },
      ],
    };
  },
  async call(e, t, n, r) {
    let o = t.agentId,
      s = o ? zEl(t, o) : void 0,
      i =
        o !== void 0 && s !== void 0
          ? {
              kind: "peer",
              from: s,
              senderTaskId: o,
            }
          : {
              kind: "coordinator",
            },
      a = await REl(e.to, e.message, t.getAppState());
    if (a.kind === "team-unknown")
      return {
        data: {
          success: false,
          message: a.suggestion
            ? `No teammate named '${e.to}' in team '${a.teamName}'. Did you mean '${a.suggestion}'?`
            : `No teammate named '${e.to}' in team '${a.teamName}'. Valid names: ${a.names.join(", ")}. Spawn one with ${ss}({name: '${e.to}'}) \u2014 or message the lead to do so.`,
        },
      };
    if (typeof e.message !== "string") {
      if (t.agentId) {
        let c = t.getAppState().tasks[t.agentId];
        if (El(c) || t.agentContext?.agentType !== "teammate")
          return {
            data: {
              success: false,
              message:
                "Structured team-protocol messages (shutdown/plan responses and requests) are acts of the session itself and cannot be sent by a background subagent. Send a plain text message instead.",
            },
          };
      }
      switch (e.message.type) {
        case "shutdown_request":
          return kyf(e.to, e.message.reason, t);
        case "shutdown_response":
          if (e.message.approve) return Ryf(e.message.request_id, t);
          return Lyf(e.message.request_id, e.message.reason);
        case "plan_approval_response":
          if (e.message.approve) return Dyf(e.to, e.message.request_id, e.message.feedback, t);
          return Pyf(e.to, e.message.request_id, e.message.feedback ?? "Plan needs revision", t);
      }
    }
    let l = o !== void 0 && s !== void 0 ? XZa(s, e.message) : e.message;
    switch (a.kind) {
      case "main": {
        if (o === void 0)
          return {
            data: {
              success: false,
              message: `You are the main conversation \u2014 "${Q5}" addresses you. Send to a named agent instead.`,
            },
          };
        return (
          j_({
            mode: "prompt",
            agentId: ls(),
            value: l,
            priority: "next",
            origin: i,
            skipSlashCommands: true,
            isMeta: true,
          }),
          {
            data: {
              success: true,
              message: "Message queued for the main conversation's next turn.",
            },
          }
        );
      }
      case "agent-live":
        return (
          oze(a.agentId, l, t.taskRegistry, {
            origin: i,
            isMeta: true,
          }),
          {
            data: {
              success: true,
              message: `Message queued for delivery to ${e.to} at its next tool round.`,
            },
          }
        );
      case "agent-stopped-by-user":
        return {
          data: {
            success: false,
            message: `Agent "${e.to}" was stopped by the user and was not resumed. Treat its work as cancelled; only start a new agent for it if the user explicitly asks.`,
          },
        };
      case "agent-stopped": {
        let c = Boolean(Oe.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS);
        try {
          let u = await eHe({
            agentId: a.agentId,
            prompt: l,
            promptOrigin: i,
            toolUseContext: t,
            canUseTool: n,
            invokingRequestId: r?.requestId,
            awaitCompletion: c,
          });
          return {
            data: {
              success: true,
              message: c
                ? `Agent "${e.to}" was stopped (${a.status}); resumed it with your message and ran to completion. Result:

${u.finalText || "(no text output)"}`
                : `Agent "${e.to}" was stopped (${a.status}); resumed it in the background with your message. You'll be notified when it finishes. Output: ${u.outputFile}`,
            },
          };
        } catch (u) {
          return {
            data: {
              success: false,
              message:
                u instanceof Ibt
                  ? be(u)
                  : u instanceof qF
                    ? `Agent "${e.to}" is stopped (${a.status}) and could not be resumed: ${be(u)}`
                    : `Agent "${e.to}" was resumed but ${u instanceof Error && u.name === "AbortError" ? "was interrupted" : "failed while running"}: ${be(u)}`,
            },
          };
        }
      }
      case "agent-evicted": {
        let c = a.agentId,
          u = MXn.get(c);
        if (u) {
          let f = await u,
            m = f ? t.getAppState().tasks[f] : void 0;
          if (m && uE(m))
            return (
              await fg(
                m.identity.agentName,
                {
                  from: $Xn(t),
                  text: e.message,
                  summary: e.summary,
                  timestamp: new Date().toISOString(),
                  color: Sv(),
                },
                m.identity.teamName,
              ),
              {
                data: {
                  success: true,
                  message: `Teammate "${e.to}" is already running; queued your message for its next turn.`,
                },
              }
            );
        }
        let d = XY();
        MXn.set(c, d.promise);
        let p = null;
        try {
          if (((p = await DEl(c)), p)) {
            let g = p.name ?? e.to,
              h = p.teamName ?? rp(t.getAppState().teamContext);
            for (let b of Object.values(t.getAppState().tasks))
              if (
                uE(b) &&
                b.status === "running" &&
                (b.identity.resumableAgentId === c ||
                  (b.identity.agentName === g && b.identity.teamName === h))
              )
                return (
                  d.resolve(b.id),
                  await fg(
                    b.identity.agentName,
                    {
                      from: $Xn(t),
                      text: e.message,
                      summary: e.summary,
                      timestamp: new Date().toISOString(),
                      color: Sv(),
                    },
                    b.identity.teamName,
                  ),
                  {
                    data: {
                      success: true,
                      message: `Teammate "${e.to}" is already running; queued your message for its next turn.`,
                    },
                  }
                );
            let y = await PEl({
              resumableAgentId: c,
              prompt: e.message,
              senderName: s,
              meta: p,
              fallbackName: e.to,
              toolUseContext: t,
            });
            return (
              d.resolve(y.taskId),
              {
                data: {
                  success: true,
                  message:
                    y.resumedMessageCount > 0
                      ? `Teammate "${e.to}" was not running; resumed it as an in-process teammate with ${y.resumedMessageCount} prior messages and your message as its next prompt.`
                      : `Teammate "${e.to}" was not running; resumed it as an in-process teammate (no prior transcript) with your message as its next prompt.`,
                },
              }
            );
          }
          d.resolve(null);
          let f = Boolean(Oe.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS),
            m = await eHe({
              agentId: c,
              prompt: l,
              promptOrigin: i,
              toolUseContext: t,
              canUseTool: n,
              invokingRequestId: r?.requestId,
              awaitCompletion: f,
            });
          return {
            data: {
              success: true,
              message: f
                ? `Agent "${e.to}" had no active task; resumed from transcript with your message and ran to completion. Result:

${m.finalText || "(no text output)"}`
                : `Agent "${e.to}" had no active task; resumed from transcript in the background with your message. You'll be notified when it finishes. Output: ${m.outputFile}`,
            },
          };
        } catch (f) {
          return (
            d.resolve(null),
            {
              data: {
                success: false,
                message:
                  f instanceof Ibt
                    ? be(f)
                    : p
                      ? `Failed to resume teammate "${e.to}": ${be(f)}`
                      : f instanceof qF
                        ? `Agent "${e.to}" could not be resumed: ${be(f)}`
                        : `Agent "${e.to}" was resumed but ${f instanceof Error && f.name === "AbortError" ? "was interrupted" : "failed while running"}: ${be(f)}`,
              },
            }
          );
        } finally {
          MXn.delete(c);
        }
      }
      case "mailbox":
        return xyf(e.to, e.message, e.summary, t);
    }
  },
  renderToolUseMessage: jEl,
  renderToolResultMessage: GEl,
});
function XEl(e) {
  return (
    $yf +
    Oyf.parse(e, {
      async: false,
    })
  );
}
var $yf = `<style>:root{color-scheme:light}body{background:#faf9f5;color:#141413;max-width:760px;margin:0 auto;padding:20px 32px;font:14px/1.5 ui-rounded,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}h1,h2,h3,h4,h5,h6{margin:1em 0 .3em;line-height:1.2;font-weight:600}h1{font-size:1.5em}h2{font-size:1.2em}h3{font-size:1.05em}p,ul,ol{margin:.5em 0}a{color:#c6613f;text-decoration:none}a:hover{text-decoration:underline}code{background:#f0ede4;padding:.1em .3em;border-radius:4px;font:.92em ui-monospace,Menlo,monospace;color:#141413}pre{background:#f0ede4;padding:10px;border-radius:8px;overflow-x:auto;line-height:1.4}pre code{background:none;padding:0}blockquote{border-left:3px solid #d97757;margin:.6em 0;padding:.1em .8em;color:#5c5b57}table{border-collapse:collapse;margin:.6em 0}th,td{border:1px solid #e5e1d8;padding:4px 10px}th{background:#f0ede4}hr{border:0;border-top:1px solid #e5e1d8;margin:1em 0}</style>
`,
  Oyf;
