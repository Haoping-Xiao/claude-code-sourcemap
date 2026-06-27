// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lze
// matched 2.1.88 source: src/tools/WebFetchTool/utils.ts
// class=modified (alt of src/tools/WebFetchTool/utils.ts)  jaccard=0.0326  score=0.0757  fileCov=0.0542
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lze] deps: utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts, @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/index.ts, main.tsx, services/mcp/useManageMCPConnections.ts, services/mockRateLimits.ts, @xmldom/xmldom/lib/entities.js, tools/BashTool/bashPermissions.ts, tools/BriefTool/prompt.ts, utils/markdownConfigLoader.ts, utils/toolResultStorage.ts, tools/GlobTool/prompt.ts, types/plugin.ts, tools/ExitPlanModeTool/constants.ts, tools/PowerShellTool/PowerShellTool.tsx, utils/shell/readOnlyCommandValidation.ts, tools/ScheduleCronTool/prompt.ts, tools/shared/gitOperationTracking.ts, @xmldom/xmldom/lib/entities.js, utils/sessionActivity.ts, screens/REPL.tsx, utils/teammateContext.ts, services/PromptSuggestion/speculation.ts, Il, utils/debug.ts, utils/xdg.ts, utils/errors.ts, utils/permissions/permissionSetup.ts, utils/worktree.ts, utils/settings/constants.ts, utils/sequential.ts, utils/messages.ts, p8t, tools/TaskStopTool/prompt.ts, utils/queryHelpers.ts, utils/fsOperations.ts, utils/stream.ts, services/teamMemorySync/secretScanner.ts, utils/telemetry/pluginTelemetry.ts, @smithy/core/dist-cjs/submodules/cbor/index.js, services/tools/toolHooks.ts, utils/permissions/permissionSetup.ts, utils/mcpOutputStorage.ts, services/vcr.ts, tools/BriefTool/prompt.ts, dn, utils/env.ts, services/mcp/client.ts, services/tools/toolExecution.ts, Ox, services/analytics/metadata.ts, services/mcp/xaa.ts, utils/toolErrors.ts, hooks/notifs/useMcpConnectivityStatus.tsx, undici/lib/core/symbols.js
a_f = new Set([
  "AgentPreconditionError",
  "AgentTypeError",
  "ArtifactInputError",
  "ConnectorRegistryUnavailableError",
  "PluginSkillSearchUnavailableError",
  "CtxAgentValidationError",
  "DesignSyncPreconditionError",
  "DomainBlockedError",
  "DomainCheckFailedError",
  "EgressBlockedError",
  "RipgrepTimeoutError",
  "FileStateError",
  "FileTooLargeError",
  "ImageResizeError",
  "McpError",
  "McpResponseSchemaError",
  "MonitorMcpPreconditionError",
  "MonitorWsPreconditionError",
  "NotebookReadError",
  "PlanPreconditionError",
  "ProjectsPreconditionError",
  "RemoteAgentPreconditionError",
  "SandboxBridgeUnavailableError",
  "SandboxInitFailedError",
  "SelfHostedRunnerApiError",
  "SendMessagePreconditionError",
  "StreamableHTTPError",
  "StopTaskError",
  "SwarmPaneError",
  "SymlinkWriteRefusedError",
  "TooManyRedirectsError",
  "WebFetchTransportError",
  "WorkflowInputError",
  "WorkflowRemotePreconditionError",
  "WorktreeGitTransientError",
  "WorktreeIsolationError",
]);
function g_f() {
  let e = parseInt(process.env.CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY || "", 10);
  return e > 0 ? e : 10;
}
async function* wLo(e, t, n, r) {
  let o = r;
  for (let { isConcurrencySafe: s, blocks: i } of h_f(e, o))
    if (s) {
      let a = {};
      for await (let l of __f(i, t, n, o)) {
        if (tz(l)) {
          yield l;
          continue;
        }
        if (l.contextLayers) {
          let { toolUseID: c, layers: u } = l.contextLayers;
          if (!a[c]) a[c] = [];
          a[c].push(...u);
        }
        yield {
          message: l.message,
          newContext: o,
        };
      }
      for (let l of i) {
        let c = a[l.id];
        if (!c || c.length === 0) continue;
        o = nKt(o, c);
      }
      yield {
        newContext: o,
      };
    } else
      for await (let a of y_f(i, t, n, o)) {
        if (tz(a)) {
          yield a;
          continue;
        }
        if (a.newContext) o = a.newContext;
        yield {
          message: a.message,
          newContext: o,
        };
      }
}
function h_f(e, t) {
  return e.reduce((n, r) => {
    let o = _l(t.options.tools, r.name, t.options.toolAliases),
      s = o?.inputSchema.safeParse(r.input),
      i = s?.success
        ? (() => {
            try {
              return Boolean(o?.isConcurrencySafe(s.data));
            } catch {
              return false;
            }
          })()
        : false;
    if (i && n.at(-1)?.isConcurrencySafe) n.at(-1).blocks.push(r);
    else
      n.push({
        isConcurrencySafe: i,
        blocks: [r],
      });
    return n;
  }, []);
}
async function* y_f(e, t, n, r) {
  let o = r;
  for (let s of e) {
    for await (let i of eKt(
      s,
      t.find((a) => a.message.content.some((l) => l.type === "tool_use" && l.id === s.id)),
      n,
      o,
      () => new Date().toISOString(),
    )) {
      if (tz(i)) {
        yield i;
        continue;
      }
      if (i.contextLayers) o = nKt(o, i.contextLayers.layers);
      yield {
        message: i.message,
        newContext: o,
      };
    }
    yield {
      type: "set_in_progress_tool_use_ids",
      op: {
        action: "remove",
        ids: [s.id],
      },
    };
  }
}
async function* __f(e, t, n, r) {
  yield* fKn(
    e.map(async function* (o) {
      (yield* eKt(
        o,
        t.find((s) => s.message.content.some((i) => i.type === "tool_use" && i.id === o.id)),
        n,
        r,
        () => new Date().toISOString(),
      ),
        yield {
          type: "set_in_progress_tool_use_ids",
          op: {
            action: "remove",
            ids: [o.id],
          },
        });
    }),
    g_f(),
  );
}
