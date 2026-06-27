// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mzt
// matched 2.1.88 source: src/services/tools/toolHooks.ts
// class=modified  jaccard=0.5296  score=0.7633  fileCov=0.6337
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function* runPostToolUseHooks(
  toolUseContext,
  tool,
  toolUseID,
  messageId,
  toolInput,
  toolResponse,
  requestId,
  mcpServerType,
  mcpServerBaseUrl,
  c,
) {
  if (w$e(tool)) return;
  if (toolUseContext.options.bareFork) return;
  let u = Date.now();
  try {
    let d = Fr(toolUseContext).mode;
    for await (let p of Szt(
      tool.name,
      toolUseID,
      toolInput,
      toolResponse,
      toolUseContext,
      d,
      toolUseContext.abortController.signal,
      void 0,
      c,
    ))
      try {
        if (p.message?.type === "attachment" && p.message.attachment.type === "hook_cancelled") {
          (G("tengu_post_tool_hooks_cancelled", {
            toolName: Ui(tool.name),
            queryChainId: Hr(toolUseContext.queryTracking?.chainId),
            queryDepth: toolUseContext.queryTracking?.depth,
          }),
            yield {
              message: ai({
                type: "hook_cancelled",
                hookName: `PostToolUse:${tool.name}`,
                toolUseID: toolUseID,
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
              hookName: `PostToolUse:${tool.name}`,
              toolUseID: toolUseID,
              hookEvent: "PostToolUse",
              blockingError: p.blockingError,
            }),
          };
        if (p.updatedToolOutput !== void 0)
          yield {
            updatedToolOutput: p.updatedToolOutput,
          };
        if (p.updatedMCPToolOutput !== void 0 && gk(tool))
          yield {
            updatedToolOutput: p.updatedMCPToolOutput,
          };
        if (p.preventContinuation) {
          yield {
            message: ai({
              type: "hook_stopped_continuation",
              message: p.stopReason || "Execution stopped by PostToolUse hook",
              hookName: `PostToolUse:${tool.name}`,
              toolUseID: toolUseID,
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
              hookName: `PostToolUse:${tool.name}`,
              toolUseID: toolUseID,
              hookEvent: "PostToolUse",
            }),
          };
      } catch (f) {
        let m = Date.now() - u;
        (G("tengu_post_tool_hook_error", {
          messageID: Hr(messageId),
          toolName: Ui(tool.name),
          isMcp: tool.isMcp ?? false,
          duration: m,
          queryChainId: Hr(toolUseContext.queryTracking?.chainId),
          queryDepth: toolUseContext.queryTracking?.depth,
          ...(mcpServerType && {
            mcpServerType: $e(mcpServerType),
          }),
          ...(requestId && {
            requestId: Hr(requestId),
          }),
        }),
          yield {
            message: ai({
              type: "hook_error_during_execution",
              content: YAe(f),
              hookName: `PostToolUse:${tool.name}`,
              toolUseID: toolUseID,
              hookEvent: "PostToolUse",
            }),
          });
      }
  } catch (d) {
    if (lh(d)) {
      if (toolUseContext.abortController.signal.aborted) throw d;
      (T("PostToolUse hook timed out (per-hook abort)"),
        G("tengu_sdk_hook_callback_timeout", {
          hookEvent: We("PostToolUse"),
          toolName: Ui(tool.name),
        }));
      return;
    }
    ke(d);
  }
}
async function* runPostToolUseFailureHooks(
  toolUseContext,
  tool,
  toolUseID,
  messageId,
  processedInput,
  error,
  isInterrupt,
  requestId,
  mcpServerType,
  mcpServerBaseUrl,
  u,
) {
  if (w$e(tool)) return;
  if (toolUseContext.options.bareFork) return;
  let d = Date.now();
  try {
    let p = Fr(toolUseContext).mode;
    for await (let f of Ezt(
      tool.name,
      toolUseID,
      processedInput,
      error,
      toolUseContext,
      isInterrupt,
      p,
      toolUseContext.abortController.signal,
      void 0,
      u,
    ))
      try {
        if (f.message?.type === "attachment" && f.message.attachment.type === "hook_cancelled") {
          (G("tengu_post_tool_failure_hooks_cancelled", {
            toolName: Ui(tool.name),
            queryChainId: Hr(toolUseContext.queryTracking?.chainId),
            queryDepth: toolUseContext.queryTracking?.depth,
          }),
            yield {
              message: ai({
                type: "hook_cancelled",
                hookName: `PostToolUseFailure:${tool.name}`,
                toolUseID: toolUseID,
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
              hookName: `PostToolUseFailure:${tool.name}`,
              toolUseID: toolUseID,
              hookEvent: "PostToolUseFailure",
              blockingError: f.blockingError,
            }),
          };
        if (f.additionalContexts && f.additionalContexts.length > 0)
          yield {
            message: ai({
              type: "hook_additional_context",
              content: f.additionalContexts,
              hookName: `PostToolUseFailure:${tool.name}`,
              toolUseID: toolUseID,
              hookEvent: "PostToolUseFailure",
            }),
          };
      } catch (m) {
        let g = Date.now() - d;
        (G("tengu_post_tool_failure_hook_error", {
          messageID: Hr(messageId),
          toolName: Ui(tool.name),
          isMcp: tool.isMcp ?? false,
          duration: g,
          queryChainId: Hr(toolUseContext.queryTracking?.chainId),
          queryDepth: toolUseContext.queryTracking?.depth,
          ...(mcpServerType && {
            mcpServerType: $e(mcpServerType),
          }),
          ...(requestId && {
            requestId: Hr(requestId),
          }),
        }),
          yield {
            message: ai({
              type: "hook_error_during_execution",
              content: YAe(m),
              hookName: `PostToolUseFailure:${tool.name}`,
              toolUseID: toolUseID,
              hookEvent: "PostToolUseFailure",
            }),
          });
      }
  } catch (p) {
    if (lh(p)) {
      if (toolUseContext.abortController.signal.aborted)
        T("PostToolUseFailure hook cancelled (parent abort)");
      else
        (T("PostToolUseFailure hook timed out (per-hook abort)"),
          G("tengu_sdk_hook_callback_timeout", {
            hookEvent: We("PostToolUseFailure"),
            toolName: Ui(tool.name),
          }));
      return;
    }
    ke(p);
  }
}
async function resolveHookPermissionDecision(
  hookPermissionResult,
  tool,
  input,
  toolUseContext,
  canUseTool,
  assistantMessage,
  toolUseID,
) {
  if (w$e(tool))
    return {
      decision: {
        behavior: "allow",
        updatedInput: input,
      },
      input: input,
    };
  let a = tool.requiresUserInteraction?.(),
    l = toolUseContext.requireCanUseTool;
  if (hookPermissionResult?.behavior === "deny")
    return (
      T(`Hook denied tool use for ${tool.name}`),
      {
        decision: hookPermissionResult,
        input: input,
      }
    );
  if (hookPermissionResult?.behavior !== "allow" && hookPermissionResult?.behavior !== "ask")
    return {
      decision: await canUseTool(tool, input, toolUseContext, assistantMessage, toolUseID),
      input: input,
    };
  let c = hookPermissionResult.behavior,
    u = hookPermissionResult.updatedInput ?? input,
    d = a && hookPermissionResult.updatedInput !== void 0;
  if (c === "allow" && ((a && !d) || l))
    return (
      T(`Hook approved tool use for ${tool.name}, but canUseTool is required`),
      {
        decision: await canUseTool(tool, u, toolUseContext, assistantMessage, toolUseID),
        input: u,
      }
    );
  let p = await u$e(tool, u, {
    ...toolUseContext,
    toolUseId: toolUseID,
  });
  if (p?.behavior === "deny")
    return (
      T(`Hook returned '${c}' for ${tool.name}, but deny rule overrides: ${p.message}`),
      {
        decision: p,
        input: u,
      }
    );
  if (p?.behavior === "ask")
    return (
      T(
        `Hook returned '${c}' for ${tool.name}, but ask rule/safety check requires full permission pipeline`,
      ),
      {
        decision: await canUseTool(tool, u, toolUseContext, assistantMessage, toolUseID),
        input: u,
      }
    );
  if (c === "allow")
    return (
      T(
        d
          ? `Hook satisfied user interaction for ${tool.name} via updatedInput`
          : `Hook approved tool use for ${tool.name}, bypassing permission prompt`,
      ),
      {
        decision: hookPermissionResult,
        input: u,
      }
    );
  return {
    decision: await canUseTool(
      tool,
      u,
      toolUseContext,
      assistantMessage,
      toolUseID,
      hookPermissionResult,
    ),
    input: u,
  };
}
async function* runPreToolUseHooks(
  toolUseContext,
  tool,
  processedInput,
  toolUseID,
  messageId,
  requestId,
  mcpServerType,
  mcpServerBaseUrl,
) {
  if (w$e(tool)) return;
  if (toolUseContext.options.bareFork) return;
  let l = Date.now(),
    c,
    u = false;
  try {
    for await (let d of bzt(
      tool.name,
      toolUseID,
      processedInput,
      toolUseContext,
      Fr(toolUseContext).mode,
      toolUseContext.abortController.signal,
    ))
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
          let p = tRo(`PreToolUse:${tool.name}`, d.blockingError);
          yield {
            type: "hookPermissionResult",
            hookPermissionResult: {
              behavior: "deny",
              message: p,
              decisionReason: {
                type: "hook",
                hookName: `PreToolUse:${tool.name}`,
                reason: p,
              },
            },
          };
        }
        if (d.updatedInput !== void 0) {
          let p = tool.inputSchema.safeParse(d.updatedInput),
            f = p.success ? [] : p.error.issues.filter((m) => m.code !== "unrecognized_keys");
          if (!p.success && f.length > 0) {
            let m = new ol.ZodError(f),
              g = `PreToolUse hook for ${tool.name} returned updatedInput that failed schema validation: ${Y6e(tool.name, m)}`;
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
                    hookName: `PreToolUse:${tool.name}`,
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
            c = d.hookSource || `PreToolUse:${tool.name}`;
            continue;
          }
          if (d.permissionBehavior === "deny") u = true;
          let p = {
            type: "hook",
            hookName: `PreToolUse:${tool.name}`,
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
                  `Hook PreToolUse:${tool.name} ${Z0o(d.permissionBehavior)} this tool`,
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
                  `Hook PreToolUse:${tool.name} ${Z0o(d.permissionBehavior)} this tool`,
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
                hookName: `PreToolUse:${tool.name}`,
                toolUseID: toolUseID,
                hookEvent: "PreToolUse",
              }),
            },
          };
        if (toolUseContext.abortController.signal.aborted) {
          (G("tengu_pre_tool_hooks_cancelled", {
            toolName: Ui(tool.name),
            queryChainId: Hr(toolUseContext.queryTracking?.chainId),
            queryDepth: toolUseContext.queryTracking?.depth,
          }),
            yield {
              type: "message",
              message: {
                message: ai({
                  type: "hook_cancelled",
                  hookName: `PreToolUse:${tool.name}`,
                  toolUseID: toolUseID,
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
          messageID: Hr(messageId),
          toolName: Ui(tool.name),
          isMcp: tool.isMcp ?? false,
          duration: f,
          queryChainId: Hr(toolUseContext.queryTracking?.chainId),
          queryDepth: toolUseContext.queryTracking?.depth,
          ...(mcpServerType && {
            mcpServerType: $e(mcpServerType),
          }),
          ...(requestId && {
            requestId: Hr(requestId),
          }),
        }),
          yield {
            type: "message",
            message: {
              message: ai({
                type: "hook_error_during_execution",
                content: YAe(p),
                hookName: `PreToolUse:${tool.name}`,
                toolUseID: toolUseID,
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
      if (toolUseContext.abortController.signal.aborted)
        T("PreToolUse hook cancelled (parent abort)");
      else
        (T("PreToolUse hook timed out (per-hook abort)"),
          G("tengu_sdk_hook_callback_timeout", {
            hookEvent: We("PreToolUse"),
            toolName: Ui(tool.name),
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
