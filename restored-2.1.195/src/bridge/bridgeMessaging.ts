// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rir
// matched 2.1.88 source: src/bridge/bridgeMessaging.ts
// class=modified  jaccard=0.3463  score=0.4276  fileCov=0.6453
// note: deminified; 8 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rir] deps: Ld
nir = ["exit", "quit", ":q", ":q!", ":wq", ":wq!"];
((o6f = {
  type: "local-jsx",
  name: "exit",
  aliases: ["quit"],
  get description() {
    return pJl();
  },
  immediate: true,
  requires: {
    ink: true,
  },
  fleetHostCall: async ({ exit: e }) => e(),
  load: () => Promise.resolve().then(() => (cJl(), aJl)),
}),
  (fJl = {
    type: "local",
    name: "exit",
    supportsNonInteractive: true,
    get description() {
      return pJl();
    },
    load: () => Promise.resolve().then(() => (dJl(), uJl)),
  }),
  (P4o = o6f));
function oir(e) {
  if (e === null || typeof e !== "object") return e;
  let t = e;
  if ("requestId" in t && !("request_id" in t)) ((t.request_id = t.requestId), delete t.requestId);
  if ("response" in t && t.response !== null && typeof t.response === "object") {
    let n = t.response;
    if ("requestId" in n && !("request_id" in n))
      ((n.request_id = n.requestId), delete n.requestId);
  }
  return e;
}
function lTe(e) {
  if (!Array.isArray(e)) return [];
  return e.filter((t) => typeof t === "string" && t.length > 0 && t.length <= 64).slice(0, 32);
}
var xJt = 32;
function isSDKMessage(value) {
  return (
    value !== null && typeof value === "object" && "type" in value && typeof value.type === "string"
  );
}
function isSDKControlResponse(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    "type" in value &&
    value.type === "control_response" &&
    "response" in value
  );
}
function isSDKControlRequest(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    "type" in value &&
    value.type === "control_request" &&
    "request_id" in value &&
    "request" in value
  );
}
function isEligibleBridgeMessage(e) {
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual) return false;
  return (
    e.type === "user" ||
    e.type === "assistant" ||
    (e.type === "system" && e.subtype === "local_command")
  );
}
function mJl(e) {
  if (!xut(e)) return;
  let t = e.message.content,
    n;
  if (typeof t === "string") n = t;
  else
    for (let o of t)
      if (o.type === "text") {
        n = o.text;
        break;
      }
  if (!n) return;
  return FZe(n) || void 0;
}
function handleIngressMessage(
  data,
  recentPostedUUIDs,
  recentInboundUUIDs,
  onInboundMessage,
  onPermissionResponse,
  onControlRequest,
) {
  try {
    let i = oir(Ft(data));
    if (isSDKControlResponse(i)) {
      (T("[bridge:repl] Ingress message type=control_response"), onPermissionResponse?.(i));
      return;
    }
    if (isSDKControlRequest(i)) {
      (T(`[bridge:repl] Inbound control_request subtype=${i.request.subtype}`),
        onControlRequest?.(i));
      return;
    }
    if (!isSDKMessage(i)) return;
    let a = "uuid" in i && typeof i.uuid === "string" ? i.uuid : void 0;
    if (a && recentPostedUUIDs.has(a)) {
      T(`[bridge:repl] Ignoring echo: type=${i.type} uuid=${a}`);
      return;
    }
    if (a && recentInboundUUIDs.has(a)) {
      T(`[bridge:repl] Ignoring re-delivered inbound: type=${i.type} uuid=${a}`);
      return;
    }
    if (
      (T(`[bridge:repl] Ingress message type=${i.type}${a ? ` uuid=${a}` : ""}`), i.type === "user")
    ) {
      if (a) recentInboundUUIDs.add(a);
      (G("tengu_bridge_message_received", {
        is_repl: true,
      }),
        xe("bridge_message_receive"),
        onInboundMessage?.(i));
    } else T(`[bridge:repl] Ignoring non-user inbound message: type=${i.type}`);
  } catch (i) {
    (T(`[bridge:repl] Failed to parse ingress message: ${be(i)}`),
      Le("bridge_message_receive", "bridge_message_receive_parse_failed"));
  }
}
function handleServerControlRequest(request, handlers) {
  let {
    transport: n,
    sessionId: r,
    outboundOnly: o,
    getInitializeState: s,
    onInterrupt: i,
    onDialogKindsDeclared: a,
    onSetModel: l,
    onSetMaxThinkingTokens: c,
    onSetPermissionMode: u,
    onRenameSession: d,
    onSetColor: p,
    onFileSuggestions: f,
    onReadFile: m,
    onGetContextUsage: g,
    onGetUsage: h,
    onMcpAuthenticate: y,
    onMcpOauthCallbackUrl: b,
    onMcpReconnect: _,
    onMcpStatus: S,
  } = handlers;
  if (!n) {
    T("[bridge:repl] Cannot respond to control_request: transport not configured");
    return;
  }
  let A;
  if (o && request.request.subtype !== "initialize") {
    A = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: request.request_id,
        error: OUTBOUND_ONLY_ERROR,
      },
    };
    let C = {
      ...A,
      session_id: r,
    };
    (n.write(C),
      T(
        `[bridge:repl] Rejected ${request.request.subtype} (outbound-only) request_id=${request.request_id}`,
      ));
    return;
  }
  switch (request.request.subtype) {
    case "initialize": {
      try {
        let C = lTe(request.request.supportedDialogKinds);
        if (C.length > 0) a?.(C);
      } catch (C) {
        T(`[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${be(C)}`);
      }
      A = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: request.request_id,
          response: {
            commands: [],
            agents: [],
            output_style: "normal",
            available_output_styles: ["normal"],
            models: [],
            account: {},
            pid: process.pid,
            ...s?.(),
          },
        },
      };
      break;
    }
    case "set_model": {
      let C = l?.(request.request.model);
      if (C && !C.ok)
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: C.error,
          },
        };
      else
        A = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
          },
        };
      break;
    }
    case "set_max_thinking_tokens":
      (c?.(request.request.max_thinking_tokens, request.request.thinking_display),
        (A = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
          },
        }));
      break;
    case "set_permission_mode": {
      let C = u?.(request.request.mode) ?? {
        ok: false,
        error:
          "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)",
      };
      if (C.ok)
        A = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
          },
        };
      else
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: C.error,
          },
        };
      break;
    }
    case "rename_session": {
      let C = d?.(request.request.title) ?? {
        ok: false,
        error:
          "rename_session is not supported in this context (onRenameSession callback not registered)",
      };
      if (C.ok)
        A = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
          },
        };
      else
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: C.error,
          },
        };
      break;
    }
    case "set_color": {
      let C = p?.(request.request.color) ?? {
        ok: false,
        error: "set_color is not supported in this context (onSetColor callback not registered)",
      };
      if (C.ok)
        A = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
          },
        };
      else
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: C.error,
          },
        };
      break;
    }
    case "file_suggestions": {
      if (!f) {
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error:
              "file_suggestions is not supported in this context (onFileSuggestions callback not registered)",
          },
        };
        break;
      }
      f(request.request.query)
        .then((C) => ({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
            response: {
              suggestions: C,
            },
          },
        }))
        .catch((C) => ({
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: be(C),
          },
        }))
        .then((C) => {
          let x = {
            ...C,
            session_id: r,
          };
          (n.write(x),
            T(
              `[bridge:repl] Sent control_response for file_suggestions request_id=${request.request_id} result=${C.response.subtype}`,
            ));
        });
      return;
    }
    case "read_file": {
      if (!m) {
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error:
              "read_file is not supported in this context (onReadFile callback not registered)",
          },
        };
        break;
      }
      m(request.request.path, request.request.max_bytes, request.request.encoding)
        .then((C) => ({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
            response: C,
          },
        }))
        .catch((C) => ({
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: be(C),
          },
        }))
        .then((C) => {
          let x = {
            ...C,
            session_id: r,
          };
          (n.write(x),
            T(
              `[bridge:repl] Sent control_response for read_file request_id=${request.request_id} result=${C.response.subtype}`,
            ));
        });
      return;
    }
    case "get_context_usage": {
      if (!g) {
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error:
              "get_context_usage is not supported in this context (onGetContextUsage callback not registered)",
          },
        };
        break;
      }
      g()
        .then((C) => ({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
            response: {
              ...C,
            },
          },
        }))
        .catch((C) => ({
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: be(C),
          },
        }))
        .then((C) => {
          let x = {
            ...C,
            session_id: r,
          };
          (n.write(x),
            T(
              `[bridge:repl] Sent control_response for get_context_usage request_id=${request.request_id} result=${C.response.subtype}`,
            ));
        });
      return;
    }
    case "get_usage": {
      if (!h) {
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error:
              "get_usage is not supported in this context (onGetUsage callback not registered)",
          },
        };
        break;
      }
      h()
        .then((C) => ({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
            response: {
              ...C,
            },
          },
        }))
        .catch((C) => ({
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: be(C),
          },
        }))
        .then((C) => {
          let x = {
            ...C,
            session_id: r,
          };
          (n.write(x),
            T(
              `[bridge:repl] Sent control_response for get_usage request_id=${request.request_id} result=${C.response.subtype}`,
            ));
        });
      return;
    }
    case "mcp_status":
      A = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: request.request_id,
          response: {
            mcpServers: S?.() ?? [],
          },
        },
      };
      break;
    case "mcp_authenticate":
    case "mcp_oauth_callback_url":
    case "mcp_reconnect": {
      let C = request.request,
        { subtype: x, serverName: I } = C,
        k =
          C.subtype === "mcp_authenticate"
            ? y && ((D) => y(D, C.redirectUri))
            : C.subtype === "mcp_oauth_callback_url"
              ? b && ((D) => b(D, C.callbackUrl))
              : _;
      if (!k) {
        A = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: `${x} is not supported in this context (callback not registered)`,
          },
        };
        break;
      }
      k(I)
        .then((D) => ({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
            response: D ?? {},
          },
        }))
        .catch((D) => ({
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: be(D),
          },
        }))
        .then((D) => {
          let P = {
            ...D,
            session_id: r,
          };
          (n.write(P),
            T(
              `[bridge:repl] Sent control_response for ${x} request_id=${request.request_id} result=${D.response.subtype}`,
            ));
        });
      return;
    }
    case "interrupt":
      (i?.(),
        (A = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id,
          },
        }));
      break;
    default:
      A = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: request.request_id,
          error: `REPL bridge does not handle control_request subtype: ${request.request.subtype}`,
        },
      };
  }
  let v = {
    ...A,
    session_id: r,
  };
  (n.write(v),
    T(
      `[bridge:repl] Sent control_response for ${request.request.subtype} request_id=${request.request_id} result=${A.response.subtype}`,
    ));
}
function makeResultMessage(sessionId) {
  return {
    type: "result",
    subtype: "success",
    duration_ms: 0,
    duration_api_ms: 0,
    is_error: false,
    num_turns: 0,
    result: "",
    stop_reason: null,
    total_cost_usd: 0,
    usage: {
      ...xb,
    },
    modelUsage: {},
    permission_denials: [],
    session_id: sessionId,
    uuid: kJt.randomUUID(),
  };
}
function yJl(e, t) {
  return {
    type: "system",
    subtype: "worker_shutting_down",
    reason: t,
    session_id: e,
    uuid: kJt.randomUUID(),
  };
}
function _Jl(e, t) {
  return {
    type: "assistant",
    message: {
      id: kJt.randomUUID(),
      container: null,
      model: _I,
      role: "assistant",
      stop_details: null,
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: {
        ...xb,
      },
      content: [
        {
          type: "text",
          text: e,
          citations: null,
        },
      ],
      context_management: null,
    },
    parent_tool_use_id: null,
    session_id: t,
    uuid: kJt.randomUUID(),
  };
}
class iHt {
  capacity;
  ring;
  set = new Set();
  writeIdx = 0;
  constructor(e) {
    ((this.capacity = e), (this.ring = Array(e)));
  }
  add(e) {
    if (this.set.has(e)) return;
    let t = this.ring[this.writeIdx];
    if (t !== void 0) this.set.delete(t);
    ((this.ring[this.writeIdx] = e),
      this.set.add(e),
      (this.writeIdx = (this.writeIdx + 1) % this.capacity));
  }
  has(e) {
    return this.set.has(e);
  }
  clear() {
    (this.set.clear(), this.ring.fill(void 0), (this.writeIdx = 0));
  }
}
var kJt,
  OUTBOUND_ONLY_ERROR =
    "This session is outbound-only. Enable Remote Control locally to allow inbound control.";
