// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MAe
// matched 2.1.88 source: src/utils/telemetry/betaSessionTracing.ts
// class=modified (alt of src/utils/telemetry/betaSessionTracing.ts)  jaccard=0.0269  score=0.1079  fileCov=0.0345
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MAe] deps: services/policyLimits/index.ts, utils/analyzeContext.ts, services/compact/autoCompact.ts, diff/libesm/util/string.js, utils/sessionEnvironment.ts, services/toolUseSummary/toolUseSummaryGenerator.ts, services/compact/prompt.ts, services/compact/postCompactCleanup.ts, utils/debug.ts, dn, services/analytics/firstPartyEventLoggingExporter.ts, utils/permissions/permissionSetup.ts, utils/imageValidation.ts, utils/imageResizer.ts, utils/tempfile.ts, services/mockRateLimits.ts, utils/errors.ts, utils/sequential.ts, follow-redirects/index.js, services/api/errors.ts, utils/debug.ts, utils/model/model.ts, utils/messages.ts, utils/pdf.ts, utils/computerUse/cleanup.ts, utils/api.ts, services/PromptSuggestion/speculation.ts, utils/headlessProfiler.ts, services/analytics/index.ts, utils/claudeInChrome/common.ts, utils/concurrentSessions.ts, utils/messageQueueManager.ts, utils/messageQueueManager.ts, services/api/errors.ts, utils/agentContext.ts, cost-tracker.ts, utils/words.ts, utils/imageValidation.ts, semver/internal/parse-options.js, @modelcontextprotocol/sdk/dist/esm/types.js, memdir/findRelevantMemories.ts, services/mcp/types.ts, main.tsx, hooks/usePasteHandler.ts, utils/model/check1mAccess.ts, commands/plugin/ManagePlugins.tsx, utils/worktree.ts, services/compact/compact.ts, services/tools/toolExecution.ts, services/tools/StreamingToolExecutor.ts, utils/queryProfiler.ts, tools/WebFetchTool/utils.ts, cli/print.ts, utils/mcpOutputStorage.ts, utils/plans.ts, query/config.ts, query/deps.ts, utils/crypto.ts, services/analytics/index.ts, utils/codeIndexing.ts, screens/REPL.tsx, services/compact/compact.ts, utils/file.ts, tools/TaskStopTool/prompt.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, Il, services/api/claude.ts, query.ts
rMo = new Set(["interrupt", "refusal-fallback-edit"]);
function uwf(e) {
  if (e?.startsWith("file:")) {
    let t = e.slice(5);
    return t
      ? {
          mode: "file",
          dir: tZn.resolve(t),
        }
      : {
          mode: "disabled",
        };
  }
  return ut(e)
    ? {
        mode: "inline",
      }
    : {
        mode: "disabled",
      };
}
function rkl() {
  let e = process.env.OTEL_LOG_RAW_API_BODIES;
  if (!eZn || eZn.raw !== e)
    eZn = {
      raw: e,
      config: uwf(e),
    };
  return eZn.config;
}
function okl() {
  return rkl().mode !== "disabled";
}
async function dwf(e, t, n) {
  try {
    await aYt.writeFile(t, n);
  } catch (r) {
    if (!wn(r)) throw r;
    (await aYt.mkdir(e, {
      recursive: true,
    }),
      await aYt.writeFile(t, n));
  }
}
function truncateContent(content, t, n) {
  let r = rkl();
  if (r.mode === "disabled") return;
  let o = De(t);
  if (r.mode === "file") {
    let i = content === "api_request_body" ? "request" : "response",
      a = n.request_id ?? lMo.randomUUID(),
      l = /^[A-Za-z0-9_-]+$/.test(a) ? a : lMo.randomUUID(),
      c = tZn.join(r.dir, `${l}.${i}.json`);
    (dwf(r.dir, c, o).catch((u) =>
      T(`OTEL raw body file write failed: ${u}`, {
        level: "error",
      }),
    ),
      Jc(content, {
        body_ref: c,
        body_length: String(Buffer.byteLength(o)),
        ...n,
      }));
    return;
  }
  let s = o.length > nkl;
  Jc(content, {
    body: s
      ? o.slice(0, nkl) +
        `

[TRUNCATED - Content exceeds 60KB limit]`
      : o,
    body_length: String(o.length),
    ...(s && {
      body_truncated: "true",
    }),
    ...n,
  });
}
function ikl(e) {
  return e.map((t) => {
    if (t.type === "thinking")
      return {
        ...t,
        thinking: "<REDACTED>",
      };
    if (t.type === "redacted_thinking")
      return {
        ...t,
        data: "<REDACTED>",
      };
    return t;
  });
}
function pwf(e) {
  return {
    ...e,
    messages: e.messages.map((t) =>
      t.role === "assistant" && Array.isArray(t.content)
        ? {
            ...t,
            content: ikl(t.content),
          }
        : t,
    ),
  };
}
function nZn(e, t) {
  if (!okl()) return;
  let n = pwf(e);
  truncateContent("api_request_body", n, {
    model: e.model,
    query_source: t,
  });
}
function akl(e, t) {
  if (!okl() || e.length === 0) return;
  let n = e.at(-1),
    r = e.flatMap((s) => s.message.content),
    o = {
      ...n.message,
      content: ikl(r),
    };
  truncateContent("api_response_body", o, {
    model: t.model,
    query_source: t.querySource,
    request_id: t.requestId ?? void 0,
  });
}
var lMo,
  aYt,
  tZn,
  nkl = 61440,
  eZn;
