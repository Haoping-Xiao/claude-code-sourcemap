// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U_t
// matched 2.1.88 source: src/hooks/toolPermission/PermissionContext.ts
// class=modified  jaccard=0.4026  score=0.6649  fileCov=0.5051
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module U_t] deps: FAe, ih
((xdf = ["sandbox", "permission", "worker-sandbox", "elicitation", "dialog"]),
  (EQ = (() => {
    let e = Mi(),
      t = {
        sandbox: null,
        permission: null,
        "worker-sandbox": null,
        elicitation: null,
        dialog: null,
      },
      n = null;
    function r() {
      let o = null;
      for (let s of xdf) {
        let i = t[s];
        if (i) {
          o = i;
          break;
        }
      }
      if (o?.text === n?.text) return;
      ((n = o), e.emit(o));
    }
    return {
      subscribe: e.subscribe,
      emit(o, s = "permission") {
        let i =
          o === null
            ? null
            : typeof o === "string"
              ? {
                  text: o,
                }
              : o;
        if (t[s]?.text === i?.text) return;
        ((t[s] = i), r());
      },
    };
  })()));
function RYn(e) {
  let t = false,
    n = false;
  return {
    resolve(r) {
      if (n) return;
      ((n = true), (t = true), e(r));
    },
    isResolved() {
      return t;
    },
    claim() {
      if (t) return false;
      return ((t = true), true);
    },
  };
}
function createPermissionContext(
  tool,
  input,
  toolUseContext,
  assistantMessage,
  toolUseID,
  setToolPermissionContext,
  queueOps,
) {
  let a = assistantMessage.message.id,
    l = Fr(toolUseContext).mode;
  function c(d, p) {
    O$a(
      {
        tool: tool,
        input: p?.input ?? input,
        toolUseContext: toolUseContext,
        messageId: a,
        toolUseID: toolUseID,
        permissionMode: l,
      },
      d,
      p?.permissionPromptStartTimeMs,
    );
  }
  let u = {
    tool: tool,
    input: input,
    toolUseContext: toolUseContext,
    assistantMessage: assistantMessage,
    messageId: a,
    toolUseID: toolUseID,
    setClassifierApprovals: queueOps,
    permissionMode: l,
    logDecision: c,
    logCancelled() {
      G("tengu_tool_use_cancelled", {
        messageID: Hr(a),
        toolName: Ui(tool.name),
      });
    },
    persistPermissions(d) {
      if (d.length === 0) return false;
      return (
        Y8(d),
        setToolPermissionContext(T4(Fr(toolUseContext), d)),
        d.some((p) => Pao(p.destination))
      );
    },
    setModeFromBridge(d) {
      return Zpe(d, Fr(toolUseContext), toolUseContext.setToolPermissionContext);
    },
    resolveIfAborted(d) {
      if (!toolUseContext.abortController.signal.aborted) return false;
      return (this.logCancelled(), d(this.cancelAndAbort(void 0, true)), true);
    },
    cancelAndAbort(d, p, f) {
      let m = !!toolUseContext.agentId,
        g = d ? `${m ? DYn : o_t}${d}` : m ? AQ : d6e,
        h = m ? g : d$e(g);
      if (
        p ||
        HYn({
          feedback: d,
          contentBlocks: f,
          isSubagent: m,
        })
      )
        (T(`Aborting: tool=${tool.name} isAbort=${p} hasFeedback=${!!d} isSubagent=${m}`),
          toolUseContext.abortController.abort());
      return {
        behavior: "ask",
        message: h,
        contentBlocks: f,
      };
    },
    ...{},
    async runHooks(d, p, f, m) {
      for await (let g of jAe(
        tool.name,
        toolUseID,
        input,
        toolUseContext,
        d,
        p,
        toolUseContext.abortController.signal,
      ))
        if (g.permissionRequestResult) {
          let h = g.permissionRequestResult;
          if (h.behavior === "allow") {
            let y = h.updatedInput ?? f ?? input;
            if (h.updatedInput) {
              let b = F_t(
                await u$e(tool, y, {
                  ...toolUseContext,
                  toolUseId: toolUseID,
                }),
                tool.name,
              );
              if (b?.behavior === "deny")
                return (
                  this.logDecision(
                    {
                      decision: "reject",
                      source: "config",
                    },
                    {
                      input: y,
                      permissionPromptStartTimeMs: m,
                    },
                  ),
                  {
                    ...b,
                    decideLocation: "ask-path",
                  }
                );
              if (b?.behavior === "ask")
                return {
                  reprompted: b,
                  finalInput: y,
                };
            }
            return this.handleHookAllow(y, h.updatedPermissions ?? [], m);
          } else if (h.behavior === "deny") {
            if (
              (this.logDecision(
                {
                  decision: "reject",
                  source: {
                    type: "hook",
                  },
                },
                {
                  permissionPromptStartTimeMs: m,
                },
              ),
              h.interrupt)
            )
              (T(`Hook interrupt: tool=${tool.name} hookMessage=${h.message}`),
                toolUseContext.abortController.abort());
            return this.buildDeny(h.message || "Permission denied by hook", {
              type: "hook",
              hookName: "PermissionRequest",
              reason: h.message,
            });
          }
        }
      return null;
    },
    buildAllow(d, p) {
      return {
        behavior: "allow",
        updatedInput: d,
        userModified: p?.userModified ?? false,
        ...(p?.decisionReason && {
          decisionReason: p.decisionReason,
        }),
        ...(p?.acceptFeedback && {
          acceptFeedback: p.acceptFeedback,
        }),
        ...(p?.contentBlocks &&
          p.contentBlocks.length > 0 && {
            contentBlocks: p.contentBlocks,
          }),
      };
    },
    buildDeny(d, p) {
      return {
        behavior: "deny",
        message: d,
        decisionReason: p,
        decideLocation: "ask-path",
      };
    },
    handleUserAllow(d, p, f, m, g, h) {
      let y = this.persistPermissions(p);
      (IYn(p),
        this.logDecision(
          {
            decision: "accept",
            source: {
              type: "user",
              permanent: y,
            },
          },
          {
            input: d,
            permissionPromptStartTimeMs: m,
          },
        ));
      let b = tool.inputsEquivalent ? !tool.inputsEquivalent(input, d) : false,
        _ = f?.trim();
      return this.buildAllow(d, {
        userModified: b,
        decisionReason: h,
        acceptFeedback: _ || void 0,
        contentBlocks: g,
      });
    },
    handleHookAllow(d, p, f) {
      let m = this.persistPermissions(p);
      return (
        this.logDecision(
          {
            decision: "accept",
            source: {
              type: "hook",
              permanent: m,
            },
          },
          {
            input: d,
            permissionPromptStartTimeMs: f,
          },
        ),
        this.buildAllow(d, {
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest",
          },
        })
      );
    },
  };
  return Object.freeze(u);
}
function jfl(e) {
  let t = e.input;
  if (e.tool.name === mf) return kYn(t);
  if (e.tool.name === Xx)
    return {
      text: "approve plan",
    };
  let n = e.tool.userFacingName(e.input).trim(),
    r =
      typeof t?.command === "string"
        ? t.command
        : typeof t?.file_path === "string"
          ? t.file_path
          : typeof t?.url === "string"
            ? t.url
            : "",
    o = n || e.tool.name;
  return {
    text: r && !o.includes(r) ? R6t(`approve ${o}: ${r}`) : `approve ${o}`,
  };
}
