// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gen
// matched 2.1.88 source: src/remote/sdkMessageAdapter.ts
// class=modified  jaccard=0.3178  score=0.3957  fileCov=0.6174
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function jbc(e) {
  return (
    e.type !== "control_request" &&
    e.type !== "control_response" &&
    e.type !== "keep_alive" &&
    e.type !== "control_cancel_request" &&
    e.type !== "transcript_mirror" &&
    !(e.type === "system" && e.subtype === "task_summary")
  );
}
function sgm(e) {
  return {
    type: "assistant",
    message: e.message,
    uuid: e.uuid,
    requestId: void 0,
    timestamp: new Date().toISOString(),
    error: e.error,
  };
}
function convertStreamEvent(msg) {
  return {
    type: "stream_event",
    event: msg.event,
    ...(msg.ttft_ms !== void 0 && {
      ttftMs: msg.ttft_ms,
    }),
  };
}
function convertResultMessage(msg) {
  if (msg.subtype === "success")
    return {
      type: "system",
      subtype: "informational",
      content: "Session completed successfully",
      level: "info",
      uuid: msg.uuid,
      timestamp: new Date().toISOString(),
    };
  let t = msg.errors.filter((n) => !n.startsWith("[ede_diagnostic]"));
  if (t.length === 0) return null;
  return {
    type: "system",
    subtype: "informational",
    content: Ja(t.join(", ")),
    level: "warning",
    uuid: msg.uuid,
    timestamp: new Date().toISOString(),
  };
}
function lgm(e) {
  return {
    type: "system",
    subtype: "informational",
    content: `Cloud session initialized (model: ${Ja(e.model)})`,
    level: "info",
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
  };
}
function convertStatusMessage(msg) {
  if (!msg.status) return null;
  return {
    type: "system",
    subtype: "informational",
    content:
      msg.status === "compacting" ? "Compacting conversation\u2026" : `Status: ${Ja(msg.status)}`,
    level: "info",
    uuid: msg.uuid,
    timestamp: new Date().toISOString(),
  };
}
function convertToolProgressMessage(msg) {
  return {
    type: "system",
    subtype: "informational",
    content: `Tool ${Ja(msg.tool_name)} running for ${msg.elapsed_time_seconds}s\u2026`,
    level: "info",
    uuid: msg.uuid,
    timestamp: new Date().toISOString(),
    toolUseID: msg.tool_use_id,
  };
}
function convertCompactBoundaryMessage(msg) {
  return {
    type: "system",
    subtype: "compact_boundary",
    content: "Conversation compacted",
    level: "info",
    uuid: msg.uuid,
    timestamp: new Date().toISOString(),
    compactMetadata: fJt(msg.compact_metadata),
  };
}
function convertSDKMessage(msg, opts) {
  switch (msg.type) {
    case "control_request":
    case "control_response":
    case "control_cancel_request":
      return {
        type: "ignored",
      };
    case "assistant":
      return {
        type: "message",
        message: sgm(msg),
      };
    case "user": {
      let n = msg.message?.content,
        r = Array.isArray(n) && n.some((s) => s.type === "tool_result");
      if (opts?.convertToolResults && r)
        return {
          type: "message",
          message: Rn({
            content: n,
            toolUseResult: msg.tool_use_result,
            uuid: msg.uuid,
            timestamp: msg.timestamp,
          }),
        };
      if (msg.isSynthetic && !ez(msg.origin))
        return {
          type: "ignored",
        };
      let o =
        n === _N ||
        (Array.isArray(n) && n.some((s) => s.type === "text" && (s.text === _N || s.text === Jv)));
      if ((opts?.convertUserTextMessages || o) && !r) {
        if (typeof n === "string" || Array.isArray(n))
          return {
            type: "message",
            message: Rn({
              content: n,
              toolUseResult: msg.tool_use_result,
              uuid: msg.uuid,
              timestamp: msg.timestamp,
            }),
          };
      }
      return {
        type: "ignored",
      };
    }
    case "stream_event":
      return {
        type: "stream_event",
        event: convertStreamEvent(msg),
      };
    case "result": {
      if (msg.subtype === "success")
        return {
          type: "ignored",
        };
      let n = convertResultMessage(msg);
      return n
        ? {
            type: "message",
            message: n,
          }
        : {
            type: "ignored",
          };
    }
    case "system":
      if (msg.subtype === "init")
        return {
          type: "message",
          message: lgm(msg),
        };
      if (msg.subtype === "status") {
        if (msg.status === "requesting")
          return {
            type: "stream_event",
            event: {
              type: "stream_request_start",
            },
          };
        let n = convertStatusMessage(msg);
        return n
          ? {
              type: "message",
              message: n,
            }
          : {
              type: "ignored",
            };
      }
      if (msg.subtype === "compact_boundary")
        return {
          type: "message",
          message: convertCompactBoundaryMessage(msg),
        };
      if (msg.subtype === "model_refusal_fallback")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_refusal_fallback",
            content: Ja(msg.content),
            level: "warning",
            trigger: msg.trigger,
            direction: msg.direction,
            originalModel: msg.original_model,
            fallbackModel: msg.fallback_model,
            requestId: msg.request_id,
            apiRefusalCategory: msg.api_refusal_category ?? null,
            apiRefusalExplanation: msg.api_refusal_explanation ?? null,
            ...(msg.retracted_message_uuids !== void 0 && {
              retractedMessageUuids: msg.retracted_message_uuids,
            }),
            ...(msg.refused_user_message_uuid !== void 0 && {
              refusedUserMessageUuid: msg.refused_user_message_uuid,
            }),
            isMeta: false,
            uuid: msg.uuid,
            timestamp: new Date().toISOString(),
          },
        };
      if (msg.subtype === "model_fallback")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_fallback",
            content: Ja(msg.content),
            level: "warning",
            trigger: msg.trigger,
            originalModel: msg.original_model,
            fallbackModel: msg.fallback_model,
            isMeta: false,
            uuid: msg.uuid,
            timestamp: new Date().toISOString(),
          },
        };
      if (msg.subtype === "model_consent_fallback")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_consent_fallback",
            content: Ja(msg.content),
            level: "warning",
            choice: msg.choice,
            originalModel: msg.original_model,
            fallbackModel: msg.fallback_model,
            persistedAsDefault: msg.persisted_as_default,
            isMeta: false,
            uuid: msg.uuid,
            timestamp: new Date().toISOString(),
          },
        };
      if (msg.subtype === "informational")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "informational",
            content: Ja(msg.content),
            level: msg.level,
            isMeta: false,
            uuid: msg.uuid,
            timestamp: new Date().toISOString(),
            ...(msg.tool_use_id && {
              toolUseID: msg.tool_use_id,
            }),
            ...(msg.prevent_continuation && {
              preventContinuation: msg.prevent_continuation,
            }),
          },
        };
      if (msg.subtype === "permission_denied") {
        if (opts?.convertToolResults)
          return {
            type: "ignored",
          };
        let n = msg.decision_reason
          ? ` \u2014 ${msg.decision_reason}`
          : msg.decision_reason_type
            ? ` (${msg.decision_reason_type})`
            : "";
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "informational",
            content: Ja(`Permission denied: ${msg.tool_name}${n}`),
            level: "warning",
            uuid: msg.uuid,
            timestamp: new Date().toISOString(),
            toolUseID: msg.tool_use_id,
          },
        };
      }
      if (msg.subtype === "local_command_output")
        return {
          type: "message",
          message: dE({
            content: Ja(msg.content),
            uuid: () => msg.uuid,
          }),
        };
      return (
        T(`[sdkMessageAdapter] Ignoring system message subtype: ${msg.subtype}`),
        {
          type: "ignored",
        }
      );
    case "tool_progress":
      return {
        type: "message",
        message: convertToolProgressMessage(msg),
      };
    case "auth_status":
      return (
        T("[sdkMessageAdapter] Ignoring auth_status message"),
        {
          type: "ignored",
        }
      );
    case "tool_use_summary":
      return (
        T("[sdkMessageAdapter] Ignoring tool_use_summary message"),
        {
          type: "ignored",
        }
      );
    case "rate_limit_event":
      return (
        T("[sdkMessageAdapter] Ignoring rate_limit_event message"),
        {
          type: "ignored",
        }
      );
    case "env_manager_log": {
      let n =
        typeof msg.data?.content === "string"
          ? msg.data.content
          : typeof msg.message === "string"
            ? msg.message
            : null;
      if (n === null)
        return (
          T(
            "[sdkMessageAdapter] env_manager_log without data.content/message \u2014 orchestrator wire change?",
            {
              level: "warn",
            },
          ),
          {
            type: "env_log",
            message: "",
          }
        );
      let r = n.split(/\r\n?|\n/),
        o = "";
      for (let s = r.length - 1; s >= 0; s--) if (((o = Ja(r[s]).trim()), o !== "")) break;
      return {
        type: "env_log",
        message: o,
      };
    }
    default:
      return (
        T(`[sdkMessageAdapter] Unknown message type: ${msg.type}`),
        {
          type: "ignored",
        }
      );
  }
}
function Gdr(e) {
  return e.type === "result";
}
