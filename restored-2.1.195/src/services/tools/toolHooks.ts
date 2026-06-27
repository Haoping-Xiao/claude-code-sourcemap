// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mzt
// matched 2.1.88 source: src/services/tools/toolHooks.ts
// class=modified  jaccard=0.5296  score=0.7633  fileCov=0.6337
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mzt = E(() => {
  At();
  co();
  sr();
});
async function* gzt(e, t, n, r, o, s, i, a, l, c) {
  if (w$e(t)) return;
  if (e.options.bareFork) return;
  let u = Date.now();
  try {
    let d = Fr(e).mode;
    for await (let p of Szt(t.name, n, o, s, e, d, e.abortController.signal, void 0, c))
      try {
        if (p.message?.type === "attachment" && p.message.attachment.type === "hook_cancelled") {
          (G("tengu_post_tool_hooks_cancelled", {
            toolName: Ui(t.name),
            queryChainId: Hr(e.queryTracking?.chainId),
            queryDepth: e.queryTracking?.depth,
          }),
            yield {
              message: ai({
                type: "hook_cancelled",
                hookName: `PostToolUse:${t.name}`,
                toolUseID: n,
                hookEvent: "PostToolUse",
              }),
            });
          continue;
        }
        if (
          p.message &&
          !(p.message.type === "attachment" && p.message.attachment.type === "hook_blocking_error")
        )
          yield {
            message: p.message,
          };
        if (p.blockingError)
          yield {
            message: ai({
              type: "hook_blocking_error",
              hookName: `PostToolUse:${t.name}`,
              toolUseID: n,
              hookEvent: "PostToolUse",
              blockingError: p.blockingError,
            }),
          };
        if (p.updatedToolOutput !== void 0)
          yield {
            updatedToolOutput: p.updatedToolOutput,
          };
        if (p.updatedMCPToolOutput !== void 0 && gk(t))
          yield {
            updatedToolOutput: p.updatedMCPToolOutput,
          };
        if (p.preventContinuation) {
          yield {
            message: ai({
              type: "hook_stopped_continuation",
              message: p.stopReason || "Execution stopped by PostToolUse hook",
              hookName: `PostToolUse:${t.name}`,
              toolUseID: n,
              hookEvent: "PostToolUse",
            }),
          };
          return;
        }
        if (p.additionalContexts && p.additionalContexts.length > 0)
          yield {
            message: ai({
              type: "hook_additional_context",
              content: p.additionalContexts,
              hookName: `PostToolUse:${t.name}`,
              toolUseID: n,
              hookEvent: "PostToolUse",
            }),
          };
      } catch (f) {
        let m = Date.now() - u;
        (G("tengu_post_tool_hook_error", {
          messageID: Hr(r),
          toolName: Ui(t.name),
          isMcp: t.isMcp ?? false,
          duration: m,
          queryChainId: Hr(e.queryTracking?.chainId),
          queryDepth: e.queryTracking?.depth,
          ...(a && {
            mcpServerType: $e(a),
          }),
          ...(i && {
            requestId: Hr(i),
          }),
        }),
          yield {
            message: ai({
              type: "hook_error_during_execution",
              content: YAe(f),
              hookName: `PostToolUse:${t.name}`,
              toolUseID: n,
              hookEvent: "PostToolUse",
            }),
          });
      }
  } catch (d) {
    if (lh(d)) {
      if (e.abortController.signal.aborted) throw d;
      (T("PostToolUse hook timed out (per-hook abort)"),
        G("tengu_sdk_hook_callback_timeout", {
          hookEvent: We("PostToolUse"),
          toolName: Ui(t.name),
        }));
      return;
    }
    ke(d);
  }
}
async function* hzt(e, t, n, r, o, s, i, a, l, c, u) {
  if (w$e(t)) return;
  if (e.options.bareFork) return;
  let d = Date.now();
  try {
    let p = Fr(e).mode;
    for await (let f of Ezt(t.name, n, o, s, e, i, p, e.abortController.signal, void 0, u))
      try {
        if (f.message?.type === "attachment" && f.message.attachment.type === "hook_cancelled") {
          (G("tengu_post_tool_failure_hooks_cancelled", {
            toolName: Ui(t.name),
            queryChainId: Hr(e.queryTracking?.chainId),
            queryDepth: e.queryTracking?.depth,
          }),
            yield {
              message: ai({
                type: "hook_cancelled",
                hookName: `PostToolUseFailure:${t.name}`,
                toolUseID: n,
                hookEvent: "PostToolUseFailure",
              }),
            });
          continue;
        }
        if (
          f.message &&
          !(f.message.type === "attachment" && f.message.attachment.type === "hook_blocking_error")
        )
          yield {
            message: f.message,
          };
        if (f.blockingError)
          yield {
            message: ai({
              type: "hook_blocking_error",
              hookName: `PostToolUseFailure:${t.name}`,
              toolUseID: n,
              hookEvent: "PostToolUseFailure",
              blockingError: f.blockingError,
            }),
          };
        if (f.additionalContexts && f.additionalContexts.length > 0)
          yield {
            message: ai({
              type: "hook_additional_context",
              content: f.additionalContexts,
              hookName: `PostToolUseFailure:${t.name}`,
              toolUseID: n,
              hookEvent: "PostToolUseFailure",
            }),
          };
      } catch (m) {
        let g = Date.now() - d;
        (G("tengu_post_tool_failure_hook_error", {
          messageID: Hr(r),
          toolName: Ui(t.name),
          isMcp: t.isMcp ?? false,
          duration: g,
          queryChainId: Hr(e.queryTracking?.chainId),
          queryDepth: e.queryTracking?.depth,
          ...(l && {
            mcpServerType: $e(l),
          }),
          ...(a && {
            requestId: Hr(a),
          }),
        }),
          yield {
            message: ai({
              type: "hook_error_during_execution",
              content: YAe(m),
              hookName: `PostToolUseFailure:${t.name}`,
              toolUseID: n,
              hookEvent: "PostToolUseFailure",
            }),
          });
      }
  } catch (p) {
    if (lh(p)) {
      if (e.abortController.signal.aborted) T("PostToolUseFailure hook cancelled (parent abort)");
      else
        (T("PostToolUseFailure hook timed out (per-hook abort)"),
          G("tengu_sdk_hook_callback_timeout", {
            hookEvent: We("PostToolUseFailure"),
            toolName: Ui(t.name),
          }));
      return;
    }
    ke(p);
  }
}
async function yzt(e, t, n, r, o, s, i) {
  if (w$e(t))
    return {
      decision: {
        behavior: "allow",
        updatedInput: n,
      },
      input: n,
    };
  let a = t.requiresUserInteraction?.(),
    l = r.requireCanUseTool;
  if (e?.behavior === "deny")
    return (
      T(`Hook denied tool use for ${t.name}`),
      {
        decision: e,
        input: n,
      }
    );
  if (e?.behavior !== "allow" && e?.behavior !== "ask")
    return {
      decision: await o(t, n, r, s, i),
      input: n,
    };
  let c = e.behavior,
    u = e.updatedInput ?? n,
    d = a && e.updatedInput !== void 0;
  if (c === "allow" && ((a && !d) || l))
    return (
      T(`Hook approved tool use for ${t.name}, but canUseTool is required`),
      {
        decision: await o(t, u, r, s, i),
        input: u,
      }
    );
  let p = await u$e(t, u, {
    ...r,
    toolUseId: i,
  });
  if (p?.behavior === "deny")
    return (
      T(`Hook returned '${c}' for ${t.name}, but deny rule overrides: ${p.message}`),
      {
        decision: p,
        input: u,
      }
    );
  if (p?.behavior === "ask")
    return (
      T(
        `Hook returned '${c}' for ${t.name}, but ask rule/safety check requires full permission pipeline`,
      ),
      {
        decision: await o(t, u, r, s, i),
        input: u,
      }
    );
  if (c === "allow")
    return (
      T(
        d
          ? `Hook satisfied user interaction for ${t.name} via updatedInput`
          : `Hook approved tool use for ${t.name}, bypassing permission prompt`,
      ),
      {
        decision: e,
        input: u,
      }
    );
  return {
    decision: await o(t, u, r, s, i, e),
    input: u,
  };
}
async function* _zt(e, t, n, r, o, s, i, a) {
  if (w$e(t)) return;
  if (e.options.bareFork) return;
  let l = Date.now(),
    c,
    u = false;
  try {
    for await (let d of bzt(t.name, r, n, e, Fr(e).mode, e.abortController.signal))
      try {
        if (
          d.message &&
          !(d.message.type === "attachment" && d.message.attachment.type === "hook_blocking_error")
        )
          yield {
            type: "message",
            message: {
              message: d.message,
            },
          };
        if (d.blockingError) {
          u = true;
          let p = tRo(`PreToolUse:${t.name}`, d.blockingError);
          yield {
            type: "hookPermissionResult",
            hookPermissionResult: {
              behavior: "deny",
              message: p,
              decisionReason: {
                type: "hook",
                hookName: `PreToolUse:${t.name}`,
                reason: p,
              },
            },
          };
        }
        if (d.updatedInput !== void 0) {
          let p = t.inputSchema.safeParse(d.updatedInput),
            f = p.success ? [] : p.error.issues.filter((m) => m.code !== "unrecognized_keys");
          if (!p.success && f.length > 0) {
            let m = new ol.ZodError(f),
              g = `PreToolUse hook for ${t.name} returned updatedInput that failed schema validation: ${Y6e(t.name, m)}`;
            (T(g, {
              level: "warn",
            }),
              (u = true),
              yield {
                type: "hookPermissionResult",
                hookPermissionResult: {
                  behavior: "deny",
                  message: g,
                  decisionReason: {
                    type: "hook",
                    hookName: `PreToolUse:${t.name}`,
                    hookSource: d.hookSource,
                    reason: g,
                  },
                },
              });
            continue;
          }
        }
        if (d.preventContinuation) {
          if (
            (yield {
              type: "preventContinuation",
              shouldPreventContinuation: true,
            },
            d.stopReason)
          )
            yield {
              type: "stopReason",
              stopReason: d.stopReason,
            };
        }
        if (d.permissionBehavior !== void 0) {
          if (
            (T(`Hook result has permissionBehavior=${d.permissionBehavior}`),
            d.permissionBehavior === "defer")
          ) {
            c = d.hookSource || `PreToolUse:${t.name}`;
            continue;
          }
          if (d.permissionBehavior === "deny") u = true;
          let p = {
            type: "hook",
            hookName: `PreToolUse:${t.name}`,
            hookSource: d.hookSource,
            reason: d.hookPermissionDecisionReason,
          };
          if (d.permissionBehavior === "allow")
            yield {
              type: "hookPermissionResult",
              hookPermissionResult: {
                behavior: "allow",
                updatedInput: d.updatedInput,
                decisionReason: p,
              },
            };
          else if (d.permissionBehavior === "ask")
            yield {
              type: "hookPermissionResult",
              hookPermissionResult: {
                behavior: "ask",
                updatedInput: d.updatedInput,
                message:
                  d.hookPermissionDecisionReason ||
                  `Hook PreToolUse:${t.name} ${Z0o(d.permissionBehavior)} this tool`,
                decisionReason: p,
              },
            };
          else
            yield {
              type: "hookPermissionResult",
              hookPermissionResult: {
                behavior: d.permissionBehavior,
                message:
                  d.hookPermissionDecisionReason ||
                  `Hook PreToolUse:${t.name} ${Z0o(d.permissionBehavior)} this tool`,
                decisionReason: p,
              },
            };
        }
        if (d.updatedInput && d.permissionBehavior === void 0)
          yield {
            type: "hookUpdatedInput",
            updatedInput: d.updatedInput,
          };
        if (d.additionalContexts && d.additionalContexts.length > 0)
          yield {
            type: "additionalContext",
            message: {
              message: ai({
                type: "hook_additional_context",
                content: d.additionalContexts,
                hookName: `PreToolUse:${t.name}`,
                toolUseID: r,
                hookEvent: "PreToolUse",
              }),
            },
          };
        if (e.abortController.signal.aborted) {
          (G("tengu_pre_tool_hooks_cancelled", {
            toolName: Ui(t.name),
            queryChainId: Hr(e.queryTracking?.chainId),
            queryDepth: e.queryTracking?.depth,
          }),
            yield {
              type: "message",
              message: {
                message: ai({
                  type: "hook_cancelled",
                  hookName: `PreToolUse:${t.name}`,
                  toolUseID: r,
                  hookEvent: "PreToolUse",
                }),
              },
            },
            yield {
              type: "stop",
            });
          return;
        }
      } catch (p) {
        ke(p);
        let f = Date.now() - l;
        (G("tengu_pre_tool_hook_error", {
          messageID: Hr(o),
          toolName: Ui(t.name),
          isMcp: t.isMcp ?? false,
          duration: f,
          queryChainId: Hr(e.queryTracking?.chainId),
          queryDepth: e.queryTracking?.depth,
          ...(i && {
            mcpServerType: $e(i),
          }),
          ...(s && {
            requestId: Hr(s),
          }),
        }),
          yield {
            type: "message",
            message: {
              message: ai({
                type: "hook_error_during_execution",
                content: YAe(p),
                hookName: `PreToolUse:${t.name}`,
                toolUseID: r,
                hookEvent: "PreToolUse",
              }),
            },
          },
          yield {
            type: "stop",
          });
      }
  } catch (d) {
    if (lh(d)) {
      if (e.abortController.signal.aborted) T("PreToolUse hook cancelled (parent abort)");
      else
        (T("PreToolUse hook timed out (per-hook abort)"),
          G("tengu_sdk_hook_callback_timeout", {
            hookEvent: We("PreToolUse"),
            toolName: Ui(t.name),
          }));
    } else ke(d);
    yield {
      type: "stop",
    };
    return;
  }
  if (c && !u)
    yield {
      type: "defer",
      hookName: c,
    };
}
