// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module v8l
// matched 2.1.88 source: src/utils/messages/mappers.ts
// class=modified  jaccard=0.4034  score=0.5509  fileCov=0.601
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var v8l = E(() => {
  Yyt();
  Ye();
  ps();
  ii();
  LL();
  es();
  i6e();
  Bs();
  vi();
  Ko();
  rjo();
  YHe();
  ((H8l = R(lt(), 1)), (_E = R(se(), 1)));
});
function csr(e) {
  return e.flatMap((t) => {
    switch (t.type) {
      case "assistant":
        return [
          {
            type: "assistant",
            message: t.message,
            uuid: t.uuid,
            requestId: void 0,
            timestamp: new Date().toISOString(),
          },
        ];
      case "user":
        return [
          {
            type: "user",
            message: t.message,
            uuid: t.uuid ?? w8l.randomUUID(),
            timestamp: t.timestamp ?? new Date().toISOString(),
            isMeta: t.isSynthetic,
          },
        ];
      case "system":
        if (t.subtype === "compact_boundary")
          return [
            {
              type: "system",
              content: "Conversation compacted",
              level: "info",
              subtype: "compact_boundary",
              compactMetadata: fJt(t.compact_metadata),
              uuid: t.uuid,
              timestamp: new Date().toISOString(),
            },
          ];
        return [];
      default:
        return [];
    }
  });
}
function MAt(e) {
  let { preservedSegment: t, preservedMessages: n } = e;
  return {
    trigger: e.trigger,
    pre_tokens: e.preTokens,
    ...(e.postTokens !== void 0 && {
      post_tokens: e.postTokens,
    }),
    ...(e.durationMs !== void 0 && {
      duration_ms: e.durationMs,
    }),
    ...(e.userContext !== void 0 && {
      user_context: e.userContext,
    }),
    ...(e.messagesSummarized !== void 0 && {
      messages_summarized: e.messagesSummarized,
    }),
    ...(e.precomputed !== void 0 && {
      precomputed: e.precomputed,
    }),
    ...(e.preCompactDiscoveredTools !== void 0 && {
      pre_compact_discovered_tools: e.preCompactDiscoveredTools,
    }),
    ...(t && {
      preserved_segment: {
        head_uuid: t.headUuid,
        anchor_uuid: t.anchorUuid,
        tail_uuid: t.tailUuid,
      },
    }),
    ...(n && {
      preserved_messages: {
        anchor_uuid: n.anchorUuid,
        uuids: n.uuids,
        ...(n.allUuids !== void 0 && {
          all_uuids: n.allUuids,
        }),
      },
    }),
  };
}
function fJt(e) {
  let { preserved_segment: t, preserved_messages: n } = e;
  return {
    trigger: e.trigger,
    preTokens: e.pre_tokens,
    ...(e.post_tokens !== void 0 && {
      postTokens: e.post_tokens,
    }),
    ...(e.duration_ms !== void 0 && {
      durationMs: e.duration_ms,
    }),
    ...(e.user_context !== void 0 && {
      userContext: e.user_context,
    }),
    ...(e.messages_summarized !== void 0 && {
      messagesSummarized: e.messages_summarized,
    }),
    ...(e.precomputed !== void 0 && {
      precomputed: e.precomputed,
    }),
    ...(e.pre_compact_discovered_tools !== void 0 && {
      preCompactDiscoveredTools: [...e.pre_compact_discovered_tools],
    }),
    ...(t && {
      preservedSegment: {
        headUuid: t.head_uuid,
        anchorUuid: t.anchor_uuid,
        tailUuid: t.tail_uuid,
      },
    }),
    ...(n && {
      preservedMessages: {
        anchorUuid: n.anchor_uuid,
        uuids: [...n.uuids],
        ...(n.all_uuids !== void 0 && {
          allUuids: [...n.all_uuids],
        }),
      },
    }),
  };
}
function C8l(e, t) {
  return e.flatMap((n) => {
    switch (n.type) {
      case "assistant": {
        let r = u5f(n),
          o = $bt(r.content, t);
        return [
          {
            type: "assistant",
            message: r,
            session_id: Rt(),
            parent_tool_use_id: null,
            uuid: n.uuid,
            error: n.error,
            ...(n.requestId !== void 0 && {
              request_id: n.requestId,
            }),
            ...(o.length > 0 && {
              tool_use_meta: o,
            }),
          },
        ];
      }
      case "user":
        return [
          {
            type: "user",
            message: n.message,
            session_id: Rt(),
            parent_tool_use_id: null,
            uuid: n.uuid,
            timestamp: n.timestamp,
            isSynthetic: n.isMeta || n.isVisibleInTranscriptOnly,
            ...(n.toolUseResult !== void 0 && {
              tool_use_result: n.toolUseResult,
            }),
            ...(n.origin !== void 0 && {
              origin: n.origin,
            }),
          },
        ];
      case "system":
        if (n.subtype === "compact_boundary" && n.compactMetadata)
          return [
            {
              type: "system",
              subtype: "compact_boundary",
              session_id: Rt(),
              uuid: n.uuid,
              compact_metadata: MAt(n.compactMetadata),
            },
          ];
        if (
          n.subtype === "local_command" &&
          (n.content.includes(`<${KC}>`) || n.content.includes(`<${aY}>`))
        )
          return [mJt(n.content, n.uuid)];
        return [];
      default:
        return [];
    }
  });
}
function mJt(e, t) {
  let n = Ja(e)
    .replace(/<local-command-stdout>([\s\S]*?)<\/local-command-stdout>/, "$1")
    .replace(/<local-command-stderr>([\s\S]*?)<\/local-command-stderr>/, "$1")
    .trim();
  return {
    type: "assistant",
    message: dE({
      content: n,
    }).message,
    parent_tool_use_id: null,
    session_id: Rt(),
    uuid: t,
  };
}
function I8l(e, { includeOverageInUse: t = true } = {}) {
  if (!e) return;
  return {
    status: e.status,
    ...(e.resetsAt !== void 0 && {
      resetsAt: e.resetsAt,
    }),
    ...(e.rateLimitType !== void 0 && {
      rateLimitType: e.rateLimitType,
    }),
    ...(e.utilization !== void 0 && {
      utilization: e.utilization,
    }),
    ...(e.overageStatus !== void 0 && {
      overageStatus: e.overageStatus,
    }),
    ...(e.overageResetsAt !== void 0 && {
      overageResetsAt: e.overageResetsAt,
    }),
    ...(e.overageDisabledReason !== void 0 && {
      overageDisabledReason:
        e.overageDisabledReason === "org_spend_cap_reached"
          ? "org_level_disabled_until"
          : e.overageDisabledReason,
    }),
    ...(e.isUsingOverage !== void 0 && {
      isUsingOverage: e.isUsingOverage,
    }),
    ...(e.overageInUse !== void 0 &&
      t && {
        overageInUse: e.overageInUse,
      }),
    ...(e.surpassedThreshold !== void 0 && {
      surpassedThreshold: e.surpassedThreshold,
    }),
    ...(e.overagePeriodMonthly !== void 0 && {
      overagePeriodMonthly: e.overagePeriodMonthly,
    }),
    ...(e.overagePeriodChannel !== void 0 && {
      overagePeriodChannel: e.overagePeriodChannel,
    }),
    ...(e.errorCode !== void 0 && {
      errorCode: e.errorCode,
    }),
    ...(e.canUserPurchaseCredits !== void 0 && {
      canUserPurchaseCredits: e.canUserPurchaseCredits,
    }),
    ...(e.hasChargeableSavedPaymentMethod !== void 0 && {
      hasChargeableSavedPaymentMethod: e.hasChargeableSavedPaymentMethod,
    }),
  };
}
function u5f(e) {
  let t = e.message.content;
  if (!Array.isArray(t)) return e.message;
  let n = t.map((r) => {
    if (r.type !== "tool_use") return r;
    if (r.name === jD) {
      let o = bP();
      if (o)
        return {
          ...r,
          input: {
            ...r.input,
            plan: o,
          },
        };
    }
    return r;
  });
  return {
    ...e.message,
    content: n,
  };
}
var w8l;
