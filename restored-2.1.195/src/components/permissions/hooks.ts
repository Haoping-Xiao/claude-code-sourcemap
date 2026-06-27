// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h0o
// matched 2.1.88 source: src/components/permissions/hooks.ts
// class=modified  jaccard=0.1012  score=0.1483  fileCov=0.2413
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module h0o] deps: Xr, jc, ii, S_, u8t, Z6, fn, h7n, hyt, _$, lg, _m, S$, N6e, xgl, yyt, wX, Pgl
Ogl = require("net");
Jpf = {
  message: `timeout_ms must be \u2264 ${f0o}`,
  path: ["timeout_ms"],
};
((eff = ve(() =>
  H.strictObject({
    ...Xpf(),
    command: Kpf().optional().describe(Vpf),
    ws: Ypf().optional(),
  })
    .refine((e) => Zpf(e.command, e.ws), "exactly one of command or ws")
    .refine(Qpf, Jpf),
)),
  (tff = ve(() =>
    H.object({
      taskId: H.string().describe("ID of the background monitor task."),
      timeoutMs: H.number().describe("Timeout deadline in milliseconds (0 when persistent)."),
      persistent: H.boolean()
        .optional()
        .describe("No timeout \u2014 runs until TaskStop or session end."),
    }),
  )));
((off = {
  name: yT,
  maxResultSizeChars: 10000 /* 1e4 */,
  shouldDefer: true,
  userFacingName: kgl,
  getToolUseSummary: Dgl,
  getActivityDescription(e) {
    return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
  },
  isEnabled() {
    return jW() && Su();
  },
  isConcurrencySafe() {
    return true;
  },
  renderToolUseMessage: Rgl,
  renderToolResultMessage: Lgl,
  get outputSchema() {
    return tff();
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: `Monitor started (task ${e.taskId}, ${e.persistent ? "persistent \u2014 runs until TaskStop or session end" : `timeout ${e.timeoutMs}ms`}). You will be notified on each event. Keep working \u2014 do not poll or sleep. Events may arrive while you are waiting for the user \u2014 an event is not their reply.`,
    };
  },
}),
  (sff = ti({
    ...off,
    searchHint:
      "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
    async description() {
      return Loo + Doo + Roo();
    },
    async prompt() {
      return Loo + Doo + Roo();
    },
    get inputSchema() {
      return eff();
    },
    toAutoClassifierInput(e) {
      return e.ws ? `websocket ${e.ws.url}` : (e.command ?? "");
    },
    async checkPermissions(e, t) {
      if (e.ws) return rff(e.ws);
      return V6t(
        {
          ...e,
          command: e.command,
        },
        t,
      );
    },
    async call(e, t) {
      if (e.ws)
        return Igl(
          {
            ...e,
            ...m0o(e),
            ws: e.ws,
          },
          t,
        );
      return nff(e.command, e, t);
    },
  })));
function rfe(e) {
  return e;
}
function y0o(e) {
  return aff.find((t) => t.matches(e));
}
function b7n(e, t) {
  let { ctx: n, description: r, result: o, awaitAutomatedChecksBeforeDialog: s } = e,
    i = Xvo(n.toolUseContext),
    a =
      _7n !== null && Fgl !== null && n.tool === _7n
        ? (f) => {
            if (f.behavior === "allow") Fgl.recordWorkflowUsageConsent();
            t(f);
          }
        : t,
    { resolve: l, isResolved: c, claim: u } = RYn(a),
    d = {
      resolve: l,
      isResolved: c,
      claim: u,
    },
    p = y0o(n.tool);
  if (p !== void 0) {
    Z_t(e, d, {
      dialog: p.dialog,
      buildDescriptor: ({ input: f, permissionResult: m }) =>
        p.build({
          tool: n.tool,
          input: f,
          description: r,
          toolUseID: n.toolUseID,
          permissionResult: m,
          assistantMessage: n.assistantMessage,
          theme: "dark",
          requestSource: i,
        }),
    });
    return;
  }
  if (z9t(n.tool)) {
    let f = o.updatedInput ?? n.input,
      m = K9t(n.tool, f);
    if (m !== null) {
      let g = wfl(n.tool, f, n.toolUseContext),
        h = Date.now(),
        y;
      Z_t(e, d, {
        dialog: fMe,
        buildDescriptor: ({ input: b, permissionResult: _ }) => {
          let S = K9t(n.tool, b) ?? m,
            A = h6n({
              tool: n.tool,
              input: b,
              description: r,
              toolUseID: n.toolUseID,
              permissionResult: _,
              assistantMessage: n.assistantMessage,
              theme: "dark",
              requestSource: i,
              filePath: S,
            });
          if (g !== null && y?.isReprompted() !== true)
            return {
              ...A,
              showingDiffInIDE: true,
              ideName: g.ideName,
            };
          return A;
        },
        unaryEvent: wnl(n.tool, f, m),
        onRacersReady: (b) => {
          if (((y = b), g === null)) return;
          let { closeTab: _ } = Cfl({
            ctx: n,
            tool: n.tool,
            input: f,
            permissionResult: o,
            permissionPromptStartTimeMs: h,
            eligibility: g,
            claim: d.claim,
            notifyBridge: b.notifyBridge,
            dismissAndTeardown: b.dismissAndTeardown,
            resolveOnce: d.resolve,
          });
          b.addTeardown(_);
        },
      });
      return;
    }
    Z_t(e, d, {
      dialog: kMe,
      buildDescriptor: ({ input: g, permissionResult: h }) =>
        yP({
          tool: n.tool,
          input: g,
          description: r,
          toolUseID: n.toolUseID,
          permissionResult: h,
          assistantMessage: n.assistantMessage,
          theme: "dark",
          requestSource: i,
        }),
    });
    return;
  }
  if (n.tool === cl) {
    let f = o.updatedInput ?? n.input,
      m = typeof f.command === "string" ? f.command : "",
      g = T8e(m);
    if (g !== null) {
      Z_t(e, d, {
        dialog: fMe,
        buildDescriptor: ({ input: y, permissionResult: b }) => {
          let _ = typeof y.command === "string" ? y.command : "",
            S = T8e(_) ?? g;
          return Cnl({
            tool: n.tool,
            input: y,
            description: r,
            toolUseID: n.toolUseID,
            permissionResult: b,
            assistantMessage: n.assistantMessage,
            theme: "dark",
            requestSource: i,
            sedInfo: S,
          });
        },
        unaryEvent: Inl(g.filePath),
      });
      return;
    }
    let h = Fr(n.toolUseContext);
    Z_t(e, d, {
      dialog: _8e,
      buildDescriptor: ({ input: y, permissionResult: b }) =>
        m6n({
          tool: n.tool,
          input: y,
          description: r,
          toolUseID: n.toolUseID,
          permissionResult: b,
          assistantMessage: n.assistantMessage,
          theme: "dark",
          requestSource: i,
          classifierState: "none",
          toolPermissionContext: h,
        }),
    });
    return;
  }
  Z_t(e, d, {
    dialog: kMe,
    buildDescriptor: ({ input: f, permissionResult: m }) =>
      yP({
        tool: n.tool,
        input: f,
        description: r,
        toolUseID: n.toolUseID,
        permissionResult: m,
        assistantMessage: n.assistantMessage,
        theme: "dark",
        requestSource: i,
      }),
  });
}
function Z_t(e, t, n) {
  let {
      ctx: r,
      description: o,
      result: s,
      awaitAutomatedChecksBeforeDialog: i,
      bridgeCallbacks: a,
      channelCallbacks: l,
    } = e,
    { resolve: c, isResolved: u, claim: d } = t,
    p = r.toolUseContext.requestDialog;
  if (p === void 0) return;
  let f = p,
    m = r.toolUseContext.agentContext,
    g = m.agentType === "teammate" || (ZIe(m) && m.isAsync === true),
    h = Date.now(),
    y = s.updatedInput ?? r.input,
    b = s.decisionReason,
    _ = s,
    S = 0,
    A,
    v = [];
  function C() {
    if (v.length === 0) return;
    let $ = v.splice(0, v.length);
    for (let q of $)
      try {
        q();
      } catch (W) {
        T(`Dialog teardown failed: ${be(W)}`, {
          level: "error",
        });
      }
  }
  let x = false,
    I = n.unaryEvent ?? {
      completion_type: "tool_use_single",
      language_name: "none",
    },
    k = r.toolUseContext.abortController.signal;
  function D() {
    if (x) return;
    x = true;
    let $ = r.permissionMode;
    (r.toolUseContext.applyAttributionOp({
      kind: "incrementPermissionPrompt",
    }),
      G("tengu_tool_use_show_permission_request", {
        messageID: Hr(r.messageId),
        toolName: Ui(r.tool.name),
        isMcp: r.tool.isMcp ?? false,
        decisionReasonType: Oo(_.decisionReason?.type),
        sandboxEnabled: xo.isSandboxingEnabled(),
        permissionMode: $e($),
        requestSource: Oo(Xvo(r.toolUseContext)?.type),
      }),
      Eko({
        completion_type: I.completion_type,
        event: "response",
        metadata: {
          language_name: I.language_name,
          message_id: r.assistantMessage.message.id,
          platform: Oe.platform,
        },
      }));
  }
  function P($) {
    Eko({
      completion_type: I.completion_type,
      event: $,
      metadata: {
        language_name: I.language_name,
        message_id: r.assistantMessage.message.id,
        platform: Oe.platform,
      },
    });
  }
  function O() {
    (A?.abort(), EQ.emit(null), M(), C());
  }
  let { notifyBridgeAndTeardown: L } = Zfl({
      ctx: r,
      description: o,
      result: s,
      displayInput: y,
      permissionPromptStartTimeMs: h,
      awaitAutomatedChecksBeforeDialog: i,
      bridgeCallbacks: a,
      channelCallbacks: l,
      claim: d,
      isResolved: u,
      onWin($) {
        (O(), c($));
      },
      onReprompt($, q, W) {
        ((y = $), (b = q), (_ = W), A?.abort(), C(), N());
      },
    }),
    M = wke.subscribe(() => {
      if (u()) return;
      RL(r.tool, r.input, r.toolUseContext, r.assistantMessage, r.toolUseID)
        .then(($) => {
          if ($.behavior !== "allow") return;
          if (!d()) return;
          (M(),
            L(),
            A?.abort(),
            EQ.emit(null),
            C(),
            r.logDecision({
              decision: "accept",
              source: "config",
            }),
            c(
              r.buildAllow($.updatedInput ?? r.input, {
                decisionReason: $.decisionReason,
              }),
            ));
        })
        .catch(($) => {
          if (!lh($)) ke($);
        });
    });
  function N() {
    let $ = ++S,
      q = new AbortController();
    A = q;
    let W = () => q.abort();
    k.addEventListener("abort", W, {
      once: true,
    });
    let V = n.buildDescriptor({
      input: y,
      permissionResult: _,
    });
    (D(),
      EQ.emit(
        jfl({
          tool: r.tool,
          input: y,
        }),
      ),
      f(n.dialog, V, {
        signal: q.signal,
        queueBehind: g,
      }).then((Y) => {
        if ((k.removeEventListener("abort", W), $ !== S)) return;
        if (!d()) return;
        B(Y);
      }));
  }
  function B($) {
    switch ((EQ.emit(null), M(), C(), $.behavior)) {
      case "allow": {
        (L({
          behavior: "allow",
          updatedInput: $.updatedInput,
          updatedPermissions: $.permissionUpdates ?? [],
        }),
          P("accept"),
          c(
            r.handleUserAllow(
              $.updatedInput,
              $.permissionUpdates ?? [],
              $.feedback,
              h,
              $.contentBlocks,
              b,
            ),
          ));
        return;
      }
      case "deny": {
        (L({
          behavior: "deny",
          message: $.feedback ?? "User denied permission",
        }),
          P("reject"),
          r.logDecision(
            {
              decision: "reject",
              source: {
                type: "user_reject",
                hasFeedback: !!$.feedback,
              },
            },
            {
              permissionPromptStartTimeMs: h,
              input: y,
            },
          ),
          c(r.cancelAndAbort($.feedback, void 0, $.contentBlocks)));
        return;
      }
      case "cancelled": {
        if (
          (L({
            behavior: "deny",
            message: "User aborted",
          }),
          P("reject"),
          r.logCancelled(),
          r.logDecision(
            {
              decision: "reject",
              source: {
                type: "user_abort",
              },
            },
            {
              permissionPromptStartTimeMs: h,
              input: y,
            },
          ),
          g)
        ) {
          c({
            behavior: "ask",
            message: AQ,
          });
          return;
        }
        c(r.cancelAndAbort(void 0, true));
        return;
      }
    }
  }
  (n.onRacersReady?.({
    dismissAndTeardown: O,
    notifyBridge: L,
    isReprompted: () => S > 1,
    addTeardown: ($) => {
      v.push($);
    },
  }),
    N());
}
var Ngl = null,
  Bgl = null,
  _7n,
  Ugl,
  Fgl,
  iff,
  aff;
