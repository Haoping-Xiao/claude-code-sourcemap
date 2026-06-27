// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lze
// matched 2.1.88 source: src/tools/WebFetchTool/utils.ts
// class=modified (alt of src/tools/WebFetchTool/utils.ts)  jaccard=0.0326  score=0.0757  fileCov=0.0542
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lze] deps: kt, Du, Xr, ft, ZWe, kgo, ii, RX, S$, f4, u_, uDe, lf, nC, EI, lC, Dgo, jv, cft, LX, LL, fp, og, Vv, Il, je, f6, At, lT, sp, Rd, vn, co, p8t, QH, aze, Jt, eLe, sr, aS, m5, mzt, T3e, K0, GX, IX, dn, Rx, BI, ALo, Ox, kst, g$, Q0o, eXn, X6e
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
