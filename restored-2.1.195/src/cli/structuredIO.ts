// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nXo
// matched 2.1.88 source: src/cli/structuredIO.ts
// class=modified  jaccard=0.1256  score=0.1456  fileCov=0.4765
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nXo] deps: utils/fsOperations.ts
nLm = /\u2028|\u2029/g;
function rUc(e, t) {
  try {
    return e.getToolUseSummary?.(t) ?? e.getActivityDescription?.(t) ?? "";
  } catch (n) {
    return (
      T(`describeToolUseForPush failed: ${n}`, {
        level: "error",
      }),
      ""
    );
  }
}
function oLm(e, t) {
  if (!e.requiresUserInteraction?.()) return;
  switch (e.name) {
    case mf: {
      let n = Array.isArray(t?.questions) ? t.questions : [],
        r = n[0],
        o = r?.header || r?.question,
        s = n.length > 1 ? ` (+${n.length - 1} more)` : "";
      return {
        label: "Question",
        body: o ? o + s : "Tap to answer",
      };
    }
    case Xx:
      return {
        label: "Plan",
        body: "Plan ready for review",
      };
    case kct:
      return {
        label: ufe(e.name),
        body: "",
      };
    default:
      return {
        label: ufe(e.name),
        body: "",
      };
  }
}
function sLm(e, t, n, r) {
  let o = oLm(e, t);
  if (o)
    return {
      tool_name: e.name,
      display_tool_name: o.label,
      action_description: o.body,
      raw_command: void 0,
      tool_use_id: n,
      request_id: "",
      input: t,
    };
  let s =
      (e.name === Co || e.name === Ss) && typeof t.command === "string" ? xc(t.command) : void 0,
    i =
      s !== void 0
        ? typeof t.description === "string" && t.description
          ? xc(t.description)
          : $a(s, nP)
        : xc(rUc(e, t));
  return {
    tool_name: e.name,
    display_tool_name: ufe(e.name),
    action_description: i,
    raw_command: s,
    tool_use_id: n,
    request_id: r,
    input: t,
  };
}
class StructuredIO {
  input;
  replayUserMessages;
  structuredInput;
  pendingRequests = new Map();
  publishedPendingActionDetails = new Map();
  timedOutUserDialogs = new Map();
  restoredWorkerState = Promise.resolve(null);
  hydratePrefetch = Promise.resolve(null);
  inputClosed = false;
  unexpectedResponseCallback;
  resolvedToolUseIds = new Set();
  prependedLines = [];
  stallTimer;
  stallFired = false;
  createdAt = Date.now();
  onControlRequestSent;
  onControlRequestResolved;
  onUserDialogParked;
  onCommandLifecycle;
  sessionState;
  outbound = new E4();
  constructor(e, t, n) {
    this.input = e;
    this.replayUserMessages = t;
    ((this.input = e), (this.sessionState = n ?? new Ztn()), (this.structuredInput = this.read()));
  }
  trackResolvedToolUseId(e) {
    if (e.request.subtype === "can_use_tool") {
      if (
        (this.resolvedToolUseIds.add(e.request.tool_use_id), this.resolvedToolUseIds.size > iLm)
      ) {
        let t = this.resolvedToolUseIds.values().next().value;
        if (t !== void 0) this.resolvedToolUseIds.delete(t);
      }
    }
  }
  flushInternalEvents() {
    return Promise.resolve();
  }
  flushDeliveryAcks() {
    return Promise.resolve();
  }
  flushClientEvents() {
    return Promise.resolve(true);
  }
  flushSessionState() {
    return Promise.resolve();
  }
  get internalEventsPending() {
    return 0;
  }
  prependUserMessage(e) {
    this.prependedLines.push(
      De({
        type: "user",
        session_id: "",
        message: {
          role: "user",
          content: e,
        },
        parent_tool_use_id: null,
      }) +
        `
`,
    );
  }
  async *read() {
    let e = "",
      t = async function* () {
        for (;;) {
          if (this.prependedLines.length > 0)
            ((e = this.prependedLines.join("") + e), (this.prependedLines = []));
          let n = e.indexOf(`
`);
          if (n === -1) break;
          let r = e.slice(0, n);
          e = e.slice(n + 1);
          let o = await this.processLine(r);
          if (o)
            (In("info", "cli_stdin_message_parsed", {
              type: o.type,
            }),
              yield o);
        }
      }.bind(this);
    yield* t();
    for await (let n of this.input) ((e += n), yield* t());
    if (e) {
      let n = await this.processLine(e);
      if (n) yield n;
    }
    this.inputClosed = true;
    for (let n of this.pendingRequests.values())
      n.reject(Error("Tool permission stream closed before response received"));
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values())
      .map((e) => e.request)
      .filter((e) => e.request.subtype === "can_use_tool");
  }
  getPendingUserDialogRequests() {
    return Array.from(this.pendingRequests.values())
      .map((e) => e.request)
      .filter((e) => e.request.subtype === "request_user_dialog");
  }
  republishSurvivingPendingAction() {
    let e;
    for (let [t, n] of this.publishedPendingActionDetails) if (this.pendingRequests.has(t)) e = n;
    if (!e) return;
    (this.sessionState.republishPendingAction(e),
      G("tengu_pending_action_republished", {
        survivor_kind: $e(e.tool_name.startsWith("dialog:") ? "dialog" : "permission"),
        pending_permission_requests: this.getPendingPermissionRequests().length,
        pending_dialog_requests: this.getPendingUserDialogRequests().length,
      }));
  }
  cancelPendingUserDialogs(e, t) {
    let n = 0;
    for (let { request: r } of Array.from(this.pendingRequests.values())) {
      if (r.request.subtype !== "request_user_dialog" || r.request.dialog_kind !== e) continue;
      (G("tengu_request_user_dialog_implicit_cancel", {
        dialog_kind: Dd(e),
        reason: $e(t),
      }),
        this.injectControlResponse({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: r.request_id,
            response: {
              behavior: "cancelled",
            },
          },
        }),
        (n += 1));
    }
    return n;
  }
  setUnexpectedResponseCallback(e) {
    this.unexpectedResponseCallback = e;
  }
  ignoresErrorShapedDialogResponse(e, t) {
    if (t.subtype !== "error" || e.request.request.subtype !== "request_user_dialog") return false;
    return (
      G("tengu_request_user_dialog_response_ignored", {
        shape: $e("error"),
        dialog_kind: Dd(e.request.request.dialog_kind),
      }),
      T(
        `Ignoring error-shaped control_response for parked request_user_dialog request_id=${t.request_id} \u2014 not a human choice; dialog stays parked (error: ${t.error})`,
      ),
      true
    );
  }
  injectControlResponse(e) {
    let t = e.response?.request_id;
    if (!t) return;
    let n = this.pendingRequests.get(t);
    if (!n) {
      G("tengu_inject_control_response_unknown_id", {
        pending_control_requests: this.pendingRequests.size,
      });
      return;
    }
    if (this.ignoresErrorShapedDialogResponse(n, e.response)) return;
    if (
      (this.trackResolvedToolUseId(n.request),
      this.pendingRequests.delete(t),
      this.write({
        type: "control_cancel_request",
        request_id: t,
      }),
      e.response.subtype === "error")
    )
      n.reject(Error(e.response.error));
    else {
      let r = e.response.response;
      if (n.schema)
        try {
          n.resolve(n.schema.parse(r));
        } catch (o) {
          n.reject(o);
        }
      else n.resolve({});
    }
  }
  setOnControlRequestSent(e) {
    this.onControlRequestSent = e;
  }
  setOnControlRequestResolved(e) {
    this.onControlRequestResolved = e;
  }
  async processLine(e) {
    if (!e) return;
    try {
      let t = oir(Ft(e));
      if (t.type === "keep_alive") return;
      if (t.type === "update_environment_variables") {
        let n = [],
          r = [];
        for (let [o, s] of Object.entries(t.variables)) {
          if (!cLm.has(o)) {
            r.push(o);
            continue;
          }
          ((process.env[o] = s), n.push(o));
        }
        if (r.length > 0)
          T(
            `[structuredIO] refused update_environment_variables for non-allowlisted keys: ${r.join(", ")}`,
          );
        if (n.includes("CLAUDE_CODE_OAUTH_TOKEN")) dU();
        if (
          (T(`[structuredIO] applied update_environment_variables: ${n.join(", ")}`),
          typeof t.request_id === "string" && t.request_id)
        )
          $i(
            De({
              type: "control_response",
              response: {
                subtype: "success",
                request_id: t.request_id,
              },
            }) +
              `
`,
          );
        return;
      }
      if (t.type === "control_response") {
        let n = "uuid" in t && typeof t.uuid === "string" ? t.uuid : void 0;
        if (n) this.onCommandLifecycle?.(n, "completed");
        let r = this.pendingRequests.get(t.response.request_id);
        if (!r) {
          let s = this.timedOutUserDialogs.get(t.response.request_id);
          if (s) {
            this.timedOutUserDialogs.delete(t.response.request_id);
            let l = t.response.subtype === "success" ? t.response.response?.behavior : void 0,
              c = t.response.subtype;
            (G("tengu_request_user_dialog_late_answer", {
              dialog_kind: Dd(s.dialogKind),
              lateness_ms: Date.now() - s.timedOutAt,
              response_subtype: $e(c === "success" || c === "error" ? c : "other"),
              behavior: $e(
                l === "completed" || l === "cancelled" ? l : l === void 0 ? "absent" : "other",
              ),
            }),
              T(
                `Ignoring late request_user_dialog answer for request_id=${t.response.request_id}: the park deadline already settled this dialog as cancelled ${Date.now() - s.timedOutAt}ms ago`,
              ));
            return;
          }
          let a = (t.response.subtype === "success" ? t.response.response : void 0)?.toolUseID;
          if (typeof a === "string" && this.resolvedToolUseIds.has(a)) {
            T(
              `Ignoring duplicate control_response for already-resolved toolUseID=${a} request_id=${t.response.request_id}`,
            );
            return;
          }
          if (this.unexpectedResponseCallback) await this.unexpectedResponseCallback(t);
          return;
        }
        if (this.ignoresErrorShapedDialogResponse(r, t.response)) return;
        if (
          (this.trackResolvedToolUseId(r.request),
          this.pendingRequests.delete(t.response.request_id),
          r.request.request.subtype === "can_use_tool" && this.onControlRequestResolved)
        )
          this.onControlRequestResolved(t.response.request_id);
        if (XBc(r.request)) eXo();
        if (t.response.subtype === "error") {
          r.reject(Error(t.response.error));
          return;
        }
        let o = t.response.response;
        if (r.schema)
          try {
            r.resolve(r.schema.parse(o));
          } catch (s) {
            r.reject(s);
          }
        else r.resolve({});
        if (this.replayUserMessages) return t;
        return;
      }
      if (YBc(t)) eXo();
      if (
        t.type !== "user" &&
        t.type !== "bash_command" &&
        t.type !== "control_request" &&
        t.type !== "assistant" &&
        t.type !== "system"
      ) {
        T(`Ignoring unknown message type: ${t.type}`, {
          level: "warn",
        });
        return;
      }
      if (t.type === "control_request") {
        if (!t.request) rXo("Error: Missing request on control_request");
        return t;
      }
      if (t.type === "assistant" || t.type === "system") return t;
      if (t.type === "bash_command") return t;
      if (t.message.role !== "user")
        rXo(`Error: Expected message role 'user', got '${t.message.role}'`);
      return t;
    } catch (t) {
      rXo(`Error parsing streaming input line: ${e}: ${t}`);
    }
  }
  resetStallWatchdog() {
    this.stallFired = false;
  }
  trackWrite(e) {
    if (this.stallTimer) clearTimeout(this.stallTimer);
    if (e.type !== "result" && !this.stallFired)
      ((this.stallTimer = setTimeout(
        (t) => {
          if (this.sessionState.getState() !== "running") return;
          ((this.stallFired = true),
            G("tengu_sdk_stall", {
              session_age_ms: Date.now() - this.createdAt,
              session_state: $e(this.sessionState.getState()),
              last_message_type: t,
              pending_control_requests: this.pendingRequests.size,
            }));
        },
        uLm,
        e.type,
      )),
        this.stallTimer.unref());
    if (e.type !== "system" && Math.random() < dLm) {
      let t = zBc().safeParse(e);
      if (!t.success)
        G("tengu_sdk_schema_violation", {
          message_type: $e(e.type),
          error_path: t.error.issues[0]?.path.join(".") ?? "",
        });
    }
  }
  async write(e) {
    (this.trackWrite(e),
      $i(
        G7e(e) +
          `
`,
      ));
  }
  async sendRequest(e, t, n, r = xvt.randomUUID()) {
    let o = {
      type: "control_request",
      request_id: r,
      request: e,
    };
    if (this.inputClosed) throw Error("Stream closed");
    if (n?.aborted) throw Error("Request aborted");
    if ((this.outbound.enqueue(o), e.subtype === "can_use_tool" && this.onControlRequestSent))
      this.onControlRequestSent(o);
    let s = () => {
      this.outbound.enqueue({
        type: "control_cancel_request",
        request_id: r,
      });
      let a = this.pendingRequests.get(r);
      if (a) (this.trackResolvedToolUseId(a.request), a.reject(new ru()));
    };
    if (n)
      n.addEventListener("abort", s, {
        once: true,
      });
    let i = Date.now();
    try {
      return await new Promise((a, l) => {
        this.pendingRequests.set(r, {
          request: {
            type: "control_request",
            request_id: r,
            request: e,
          },
          resolve: (c) => {
            a(c);
          },
          reject: l,
          schema: t,
        });
      });
    } finally {
      if (
        (G("tengu_sdk_control_roundtrip", {
          subtype: $e(e.subtype),
          duration_ms: Date.now() - i,
          aborted: n?.aborted ?? false,
        }),
        n)
      )
        n.removeEventListener("abort", s);
      this.pendingRequests.delete(r);
    }
  }
  createCanUseTool(e) {
    return async (t, n, r, o, s, i) => {
      let a = i ?? (await RL(t, n, r, o, s));
      if (a.behavior === "allow") return a;
      if (a.behavior === "deny") {
        let m = a.decisionReason;
        return (
          this.outbound.enqueue({
            type: "system",
            subtype: "permission_denied",
            tool_name: t.name,
            tool_use_id: s,
            agent_id: r.agentId,
            decision_reason_type: m?.type,
            decision_reason: fzt(m),
            message: a.message,
            uuid: xvt.randomUUID(),
            session_id: Rt(),
          }),
          a
        );
      }
      let l = a.updatedInput ?? n,
        c = a.suggestions;
      if (
        t.name === Co &&
        typeof l.command === "string" &&
        c?.length &&
        !c.some((m) => m.destination !== "session")
      )
        c = [...J$e(l.command), ...c];
      let u = new AbortController(),
        d = r.abortController.signal,
        p = () => u.abort();
      d.addEventListener("abort", p, {
        once: true,
      });
      let f = xvt.randomUUID();
      try {
        let m = executePermissionRequestHooksForSDK(t, s, l, r, c).then((A) => ({
          source: "hook",
          decision: A,
        }));
        if (e) {
          let A = sLm(t, l, s, f);
          (this.publishedPendingActionDetails.set(f, A), e(A));
        }
        let g = a.decisionReason,
          h = Sq(g),
          y = t.name === Co || t.name === Ss,
          b =
            (a.metadata && "command" in a.metadata ? a.metadata.command.description : void 0) ||
            (y && typeof l.command === "string"
              ? typeof l.description === "string" && l.description
                ? xc(l.description)
                : $a(xc(l.command), nP)
              : rUc(t, l)) ||
            void 0,
          _ = this.sendRequest(
            {
              subtype: "can_use_tool",
              tool_name: t.name,
              display_name: ufe(t.name),
              input: l,
              ...(b && {
                description: b,
              }),
              permission_suggestions: c,
              blocked_path: a.blockedPath,
              decision_reason: fzt(g),
              decision_reason_type: g?.type,
              classifier_approvable: h ? !Sq(g, (A) => !A.classifierApprovable) : void 0,
              tool_use_id: s,
              agent_id: r.agentId,
            },
            unn(),
            u.signal,
            f,
          ).then((A) => ({
            source: "sdk",
            result: A,
          })),
          S = await Promise.race([m, _]);
        if (S.source === "hook") {
          if (S.decision) return (_.catch(() => {}), u.abort(), S.decision);
          let A = await _;
          return Ivt(A.result, t, l, r);
        }
        return Ivt(S.result, t, l, r);
      } catch (m) {
        return Ivt(
          {
            behavior: "deny",
            message: `Tool permission request failed: ${m}`,
            toolUseID: s,
          },
          t,
          l,
          r,
        );
      } finally {
        if (
          (this.publishedPendingActionDetails.delete(f),
          this.getPendingPermissionRequests().length === 0 &&
            this.getPendingUserDialogRequests().length === 0)
        )
          this.sessionState.notifyStateChanged("running");
        else (this.sessionState.reteeWaitingOnUser(), this.republishSurvivingPendingAction());
        d.removeEventListener("abort", p);
      }
    };
  }
  createHookCallback(e, t) {
    return {
      type: "callback",
      timeout: t,
      callback: async (n, r, o) => {
        try {
          return await this.sendRequest(
            {
              subtype: "hook_callback",
              callback_id: e,
              input: n,
              tool_use_id: r || void 0,
            },
            XHt(),
            o,
          );
        } catch (s) {
          if (lh(s)) throw s;
          return (console.error(`Error in hook callback ${e}:`, s), {});
        }
      },
    };
  }
  async handleElicitation(e, t, n, r, o, s, i, a) {
    try {
      return await this.sendRequest(
        {
          subtype: "elicitation",
          mcp_server_name: e,
          message: t,
          mode: o,
          url: s,
          elicitation_id: i,
          requested_schema: n,
          title: a?.title,
          display_name: a?.displayName,
          description: a?.description,
        },
        PBc(),
        r,
      );
    } catch {
      return {
        action: "cancel",
      };
    }
  }
  async requestUserDialog(e, t, n) {
    let r = xvt.randomUUID(),
      o = ZBc(e, t, r, n?.toolUseId);
    (this.publishedPendingActionDetails.set(r, o),
      this.sessionState.notifyStateChanged("requires_action", o),
      this.onUserDialogParked?.(o),
      G("tengu_request_user_dialog_requires_action", {
        dialog_kind: Dd(e),
      }));
    let s = tUc(),
      i;
    if (s > 0)
      ((i = setTimeout(
        (a, l, c) => {
          if (!this.pendingRequests.has(a)) return;
          (this.timedOutUserDialogs.set(a, {
            dialogKind: l,
            timedOutAt: Date.now(),
          }),
            G("tengu_request_user_dialog_timeout", {
              dialog_kind: Dd(l),
              timeout_ms: c,
            }),
            this.injectControlResponse({
              type: "control_response",
              response: {
                subtype: "success",
                request_id: a,
                response: {
                  behavior: "cancelled",
                },
              },
            }));
        },
        s,
        r,
        e,
        s,
      )),
        i.unref());
    try {
      return await this.sendRequest(
        {
          subtype: "request_user_dialog",
          dialog_kind: e,
          payload: t,
          tool_use_id: n?.toolUseId,
        },
        $Bc(),
        n?.signal,
        r,
      );
    } catch {
      return {
        behavior: "cancelled",
      };
    } finally {
      if (i !== void 0) clearTimeout(i);
      if (
        (this.publishedPendingActionDetails.delete(r),
        this.getPendingUserDialogRequests().length === 0 &&
          this.getPendingPermissionRequests().length === 0)
      )
        this.sessionState.notifyStateChanged("running");
      else {
        if (!this.timedOutUserDialogs.has(r)) this.sessionState.reteeWaitingOnUser();
        this.republishSurvivingPendingAction();
      }
    }
  }
  createSandboxAskCallback(e) {
    let t = new Map(),
      n = async (r) => {
        try {
          let o = {
              type: "addRules",
              rules: [
                {
                  toolName: Sb,
                  ruleContent: `domain:${r}`,
                },
              ],
              behavior: "allow",
              destination: "localSettings",
            },
            s = await this.sendRequest(
              {
                subtype: "can_use_tool",
                tool_name: j8e,
                display_name: ufe(j8e),
                input: {
                  host: r,
                },
                permission_suggestions: [o],
                tool_use_id: xvt.randomUUID(),
                description: `Allow network connection to ${r}?`,
              },
              unn(),
            );
          if (s.behavior !== "allow") return false;
          let i = s.updatedPermissions;
          if (i && i.length > 0) (Y8(i), e?.((a) => T4(a, i)));
          return (xo.addSessionAllowedHost(r), true);
        } catch {
          return false;
        }
      };
    return (r) => {
      let o = r.host,
        s = t.get(o);
      if (s) return s;
      let i = n(o).finally(() => {
        t.delete(o);
      });
      return (t.set(o, i), i);
    };
  }
  async sendMcpMessage(e, t) {
    return (
      await this.sendRequest(
        {
          subtype: "mcp_message",
          server_name: e,
          message: t,
        },
        H.object({
          mcp_response: H.any(),
        }),
      )
    ).mcp_response;
  }
  async requestOAuthTokenRefresh() {
    return (
      await this.sendRequest(
        {
          subtype: "oauth_token_refresh",
        },
        BBc(),
        AbortSignal.timeout(aLm),
      )
    ).accessToken;
  }
  async requestHostAuthTokenRefresh(e = lLm) {
    return (
      await this.sendRequest(
        {
          subtype: "host_auth_token_refresh",
        },
        FBc(),
        AbortSignal.timeout(e),
      )
    ).authToken;
  }
}
function rXo(e) {
  (console.error(e), process.exit(1));
}
async function executePermissionRequestHooksForSDK(
  toolName,
  toolUseID,
  input,
  toolUseContext,
  suggestions,
) {
  let s = Fr(toolUseContext).mode,
    i = jAe(
      toolName.name,
      toolUseID,
      input,
      toolUseContext,
      s,
      suggestions,
      toolUseContext.abortController.signal,
    );
  for await (let a of i)
    if (
      a.permissionRequestResult &&
      (a.permissionRequestResult.behavior === "allow" ||
        a.permissionRequestResult.behavior === "deny")
    ) {
      let l = a.permissionRequestResult;
      if (l.behavior === "allow") {
        let c = l.updatedInput || input;
        if (l.updatedInput) {
          let d = F_t(
            await u$e(toolName, c, {
              ...toolUseContext,
              toolUseId: toolUseID,
            }),
            toolName.name,
          );
          if (d)
            return d.behavior === "ask"
              ? {
                  behavior: "deny",
                  message: d.message,
                  decisionReason: d.decisionReason ?? WRt,
                  decideLocation: "ask-path",
                }
              : {
                  ...d,
                  decideLocation: "ask-path",
                };
        }
        let u = l.updatedPermissions ?? [];
        if (u.length > 0) (Y8(u), toolUseContext.setToolPermissionContext((d) => T4(d, u)));
        return {
          behavior: "allow",
          updatedInput: c,
          userModified: false,
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest",
          },
        };
      } else
        return {
          behavior: "deny",
          message: l.message || "Permission denied by PermissionRequest hook",
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest",
          },
          decideLocation: "ask-path",
        };
    }
  return;
}
var xvt,
  iLm = 1000,
  aLm = 30000,
  lLm = 30000,
  cLm,
  uLm = 300000,
  dLm = 0.01;
