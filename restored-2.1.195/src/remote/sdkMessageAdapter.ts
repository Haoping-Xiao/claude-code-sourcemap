// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gen
// matched 2.1.88 source: src/remote/sdkMessageAdapter.ts
// class=modified  jaccard=0.3178  score=0.3957  fileCov=0.6174
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Gen = E(() => {
  kt();
});
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
function igm(e) {
  return {
    type: "stream_event",
    event: e.event,
    ...(e.ttft_ms !== void 0 && {
      ttftMs: e.ttft_ms,
    }),
  };
}
function agm(e) {
  if (e.subtype === "success")
    return {
      type: "system",
      subtype: "informational",
      content: "Session completed successfully",
      level: "info",
      uuid: e.uuid,
      timestamp: new Date().toISOString(),
    };
  let t = e.errors.filter((n) => !n.startsWith("[ede_diagnostic]"));
  if (t.length === 0) return null;
  return {
    type: "system",
    subtype: "informational",
    content: Ja(t.join(", ")),
    level: "warning",
    uuid: e.uuid,
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
function cgm(e) {
  if (!e.status) return null;
  return {
    type: "system",
    subtype: "informational",
    content:
      e.status === "compacting" ? "Compacting conversation\u2026" : `Status: ${Ja(e.status)}`,
    level: "info",
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
  };
}
function ugm(e) {
  return {
    type: "system",
    subtype: "informational",
    content: `Tool ${Ja(e.tool_name)} running for ${e.elapsed_time_seconds}s\u2026`,
    level: "info",
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
    toolUseID: e.tool_use_id,
  };
}
function dgm(e) {
  return {
    type: "system",
    subtype: "compact_boundary",
    content: "Conversation compacted",
    level: "info",
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
    compactMetadata: fJt(e.compact_metadata),
  };
}
function ANe(e, t) {
  switch (e.type) {
    case "control_request":
    case "control_response":
    case "control_cancel_request":
      return {
        type: "ignored",
      };
    case "assistant":
      return {
        type: "message",
        message: sgm(e),
      };
    case "user": {
      let n = e.message?.content,
        r = Array.isArray(n) && n.some((s) => s.type === "tool_result");
      if (t?.convertToolResults && r)
        return {
          type: "message",
          message: Rn({
            content: n,
            toolUseResult: e.tool_use_result,
            uuid: e.uuid,
            timestamp: e.timestamp,
          }),
        };
      if (e.isSynthetic && !ez(e.origin))
        return {
          type: "ignored",
        };
      let o =
        n === _N ||
        (Array.isArray(n) && n.some((s) => s.type === "text" && (s.text === _N || s.text === Jv)));
      if ((t?.convertUserTextMessages || o) && !r) {
        if (typeof n === "string" || Array.isArray(n))
          return {
            type: "message",
            message: Rn({
              content: n,
              toolUseResult: e.tool_use_result,
              uuid: e.uuid,
              timestamp: e.timestamp,
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
        event: igm(e),
      };
    case "result": {
      if (e.subtype === "success")
        return {
          type: "ignored",
        };
      let n = agm(e);
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
      if (e.subtype === "init")
        return {
          type: "message",
          message: lgm(e),
        };
      if (e.subtype === "status") {
        if (e.status === "requesting")
          return {
            type: "stream_event",
            event: {
              type: "stream_request_start",
            },
          };
        let n = cgm(e);
        return n
          ? {
              type: "message",
              message: n,
            }
          : {
              type: "ignored",
            };
      }
      if (e.subtype === "compact_boundary")
        return {
          type: "message",
          message: dgm(e),
        };
      if (e.subtype === "model_refusal_fallback")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_refusal_fallback",
            content: Ja(e.content),
            level: "warning",
            trigger: e.trigger,
            direction: e.direction,
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            requestId: e.request_id,
            apiRefusalCategory: e.api_refusal_category ?? null,
            apiRefusalExplanation: e.api_refusal_explanation ?? null,
            ...(e.retracted_message_uuids !== void 0 && {
              retractedMessageUuids: e.retracted_message_uuids,
            }),
            ...(e.refused_user_message_uuid !== void 0 && {
              refusedUserMessageUuid: e.refused_user_message_uuid,
            }),
            isMeta: false,
            uuid: e.uuid,
            timestamp: new Date().toISOString(),
          },
        };
      if (e.subtype === "model_fallback")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_fallback",
            content: Ja(e.content),
            level: "warning",
            trigger: e.trigger,
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            isMeta: false,
            uuid: e.uuid,
            timestamp: new Date().toISOString(),
          },
        };
      if (e.subtype === "model_consent_fallback")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_consent_fallback",
            content: Ja(e.content),
            level: "warning",
            choice: e.choice,
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            persistedAsDefault: e.persisted_as_default,
            isMeta: false,
            uuid: e.uuid,
            timestamp: new Date().toISOString(),
          },
        };
      if (e.subtype === "informational")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "informational",
            content: Ja(e.content),
            level: e.level,
            isMeta: false,
            uuid: e.uuid,
            timestamp: new Date().toISOString(),
            ...(e.tool_use_id && {
              toolUseID: e.tool_use_id,
            }),
            ...(e.prevent_continuation && {
              preventContinuation: e.prevent_continuation,
            }),
          },
        };
      if (e.subtype === "permission_denied") {
        if (t?.convertToolResults)
          return {
            type: "ignored",
          };
        let n = e.decision_reason
          ? ` \u2014 ${e.decision_reason}`
          : e.decision_reason_type
            ? ` (${e.decision_reason_type})`
            : "";
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "informational",
            content: Ja(`Permission denied: ${e.tool_name}${n}`),
            level: "warning",
            uuid: e.uuid,
            timestamp: new Date().toISOString(),
            toolUseID: e.tool_use_id,
          },
        };
      }
      if (e.subtype === "local_command_output")
        return {
          type: "message",
          message: dE({
            content: Ja(e.content),
            uuid: () => e.uuid,
          }),
        };
      return (
        T(`[sdkMessageAdapter] Ignoring system message subtype: ${e.subtype}`),
        {
          type: "ignored",
        }
      );
    case "tool_progress":
      return {
        type: "message",
        message: ugm(e),
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
        typeof e.data?.content === "string"
          ? e.data.content
          : typeof e.message === "string"
            ? e.message
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
        T(`[sdkMessageAdapter] Unknown message type: ${e.type}`),
        {
          type: "ignored",
        }
      );
  }
}
function Gdr(e) {
  return e.type === "result";
}
