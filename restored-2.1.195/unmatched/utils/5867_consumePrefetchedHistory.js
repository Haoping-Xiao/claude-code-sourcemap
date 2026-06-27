// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Fc
// matched 2.1.88 source: src/commands/insights.ts
// class=new  jaccard=0.0115  score=0.1397  fileCov=0.0124
// note: nearest: src/commands/insights.ts (0.0115); dir inferred from dep-graph -> utils; 4 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: reportPrefetchOutcome, prefetchRemoteHistory, historyPageToSeed, consumePrefetchedHistory
// [unwrapped __esm module $Fc] deps: services/analytics/index.ts, utils/plugins/refresh.ts, services/mcp/client.ts, utils/suggestions/skillUsageTracking.ts, @opentelemetry/core/build/src/platform/node/performance.js, @smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js, utils/subprocessEnv.ts, utils/permissions/permissionSetup.ts, cli/transports/transportUtils.ts, cli/remoteIO.ts, utils/sessionStorage.ts, cli/print.ts, utils/sessionActivity.ts, services/mcp/auth.ts, utils/toolPool.ts, utils/debug.ts, fb, services/analytics/growthbook.ts, entrypoints/sdk/coreSchemas.ts, utils/config.ts, services/api/errors.ts, utils/sessionStorage.ts, tools/WebFetchTool/utils.ts, utils/errors.ts, utils/debug.ts, utils/git/gitConfigParser.ts, services/mockRateLimits.ts, tools/AgentTool/loadAgentsDir.ts, tools/AgentTool/built-in/exploreAgent.ts, utils/messageQueueManager.ts, utils/messageQueueManager.ts, bmr, utils/queryContext.ts, commands/install.tsx, utils/sequential.ts, utils/stringUtils.ts, services/api/logging.ts, services/api/filesApi.ts, services/mcp/channelPermissions.ts, services/mcp/channelNotification.ts, utils/plugins/pluginIdentifier.ts, utils/generators.ts, services/mcp/client.ts, memdir/findRelevantMemories.ts, @modelcontextprotocol/sdk/dist/esm/types.js, utils/imageValidation.ts, QueryEngine.ts, utils/claudemd.ts, utils/file.ts, services/PromptSuggestion/speculation.ts, screens/REPL.tsx, tools/AgentTool/builtInAgents.ts, utils/sessionStorage.ts, utils/idleTimeout.ts, utils/ultraplan/keyword.ts, utils/gracefulShutdown.ts, utils/debugFilter.ts, cli/print.ts, utils/fsOperations.ts, utils/hooks/sessionHooks.ts, lodash-es/_arrayPush.js, ghe, yBn, utils/plugins/mcpPluginIntegration.ts, @aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js, bridge/bridgeEnabled.ts, utils/semver.ts, utils/imageResizer.ts, utils/swarm/constants.ts, bridge/codeSessionApi.ts, @anthropic-ai/sdk/internal/detect-platform.mjs, hooks/useReplBridge.tsx, utils/claudeInChrome/mcpServer.ts, utils/permissions/permissionSetup.ts, components/FeedbackSurvey/useFeedbackSurvey.tsx, utils/settings/constants.ts, utils/permissions/PermissionPromptToolResultSchema.ts, screens/REPL.tsx, hooks/useCanUseTool.tsx, commands/rename/generateSessionName.ts, QueryEngine.ts, tools/AgentTool/AgentTool.tsx, utils/background/remote/remoteSession.ts, commands/add-dir/index.ts, e7o, constants/outputStyles.ts, utils/settings/settings.ts, tools/WebFetchTool/prompt.ts, state/AppState.tsx, utils/modelCost.ts, utils/markdownConfigLoader.ts, services/PromptSuggestion/promptSuggestion.ts, cli/print.ts, utils/swarm/backends/teammateModeSnapshot.ts, utils/http.ts, bridge/bridgeApi.ts, main.tsx, utils/staticRender.tsx, bridge/sessionRunner.ts, utils/status.tsx, undici/lib/web/cache/cache.js, services/analytics/index.ts, rit, migrations/migrateSonnet45ToSonnet46.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, tools/ListMcpResourcesTool/ListMcpResourcesTool.ts, tools/ReadMcpResourceTool/ReadMcpResourceTool.ts, tools/ReadMcpResourceTool/ReadMcpResourceTool.ts, bridge/bridgeMessaging.ts, utils/plans.ts, state/AppStateStore.ts, utils/processUserInput/processUserInput.ts, tools/SkillTool/SkillTool.ts, services/mcp/client.ts, tools/McpAuthTool/McpAuthTool.ts, services/mcp/utils.ts, components/MCPServerDialogCopy.tsx, services/mcp/auth.ts, utils/proxy.ts, utils/worktree.ts, @modelcontextprotocol/sdk/dist/esm/types.js, Ox, services/mcp/xaa.ts, cli/print.ts, services/mcp/vscodeSdkMcp.ts, hooks/useIdeLogging.ts, services/mcp/utils.ts, services/mcp/config.ts, services/api/grove.ts, components/tasks/RemoteSessionDetailDialog.tsx, utils/messages.ts, B7t, services/rateLimitMessages.ts, env-paths/index.js, fast-xml-parser/lib/fxp.cjs, services/api/errorUtils.ts, utils/agentContext.ts, utils/model/model.ts, query.ts, utils/tempfile.ts, utils/thinking.ts, utils/betas.ts, bridge/jwtUtils.ts, services/analytics/index.ts, @smithy/core/dist-cjs/submodules/cbor/index.js, cli/print.ts, constants/system.ts, utils/getWorktreePaths.ts, H4n, cli/print.ts, utils/bash/bashParser.ts, utils/permissions/shellRuleMatching.ts, utils/claudemd.ts, context.ts, utils/sessionStart.ts, utils/task/diskOutput.ts, services/api/errors.ts, @ant/claude-for-chrome-mcp/src/mcpSocketClient.ts, utils/attachments.ts, cli/print.ts, google-auth-library/build/src/crypto/node/crypto.js, services/api/claude.ts, utils/fsOperations.ts, utils/transcriptSearch.ts, utils/plugins/zipCacheAdapters.ts, hooks/useSettingsChange.ts, utils/sessionStorage.ts, services/PromptSuggestion/speculation.ts, tools/AgentTool/loadAgentsDir.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, tasks/LocalAgentTask/LocalAgentTask.tsx, commands/reload-plugins/reload-plugins.ts, utils/plugins/loadPluginAgents.ts, tools/BriefTool/prompt.ts, utils/concurrentSessions.ts, utils/teammateMailbox.ts, utils/swarm/spawnInProcess.ts, utils/tasks.ts, components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx, hooks/useInboxPoller.ts, tasks/RemoteAgentTask/RemoteAgentTask.tsx, tasks/RemoteAgentTask/RemoteAgentTask.tsx, utils/bash/ast.ts, tasks/stopTask.ts, utils/sessionState.ts, utils/sdkEventQueue.ts, commands/insights.ts, fast-xml-parser/lib/fxp.cjs, services/analytics/growthbook.ts, utils/errors.ts, undici/lib/core/symbols.js, utils/sessionIngressAuth.ts, services/analytics/metadata.ts, utils/diff.ts
V7e = require("fs/promises"), q7e = require("path"), Kme = require("process"), px = require("crypto"), iFc = (gjn(), ro(rgo)), WNe = (l$(), ro(qW)), PLm = (qYo(), ro(RPc)), MLm = (F2t(), ro(Kra)), aFc = (WW(), ro(Ioa)), $Lm = (KWe(), ro(zWe)), OLm = (VKt(), ro(NQn)), fnn = new Set(), Dmr = [];
function YLm() {
  if (mnn === null) mnn = CXo.join(NFc.tmpdir(), `cc-history-prefetch-${process.pid}`), Ci(() => mnn === null ? void 0 : Yme.rm(mnn, {
    recursive: true,
    force: true
  }).catch(() => {}));
  return mnn;
}
function prefetchRemoteHistory(e) {
  if (fr() !== "firstParty") return;
  if (!gtn.test(e)) {
    T(`[historyPrefetch] ${e} fails CCR_SESSION_ID_RE \u2014 refusing`, {
      level: "warn"
    });
    return;
  }
  let t = gnn.get(e);
  if (t && !t.settled) return;
  let n = YLm(),
    r = CXo.join(n, `${e}.${Date.now()}.json`),
    o = performance.now(),
    s = (async () => {
      await Yme.mkdir(n, {
        recursive: true,
        mode: 448
      });
      let a = await Os.get(`/v1/code/sessions/${e}/events?limit=${Wdr}&sort_order=desc`, {
        auth: "teleport-org",
        responseType: "stream",
        timeout: 15000,
        validateStatus: () => true
      });
      if (!a.ok) return T(`[historyPrefetch] ${e} gate=${a.reason} ${"detail" in a ? a.detail : ""}`), null;
      if (a.status !== 200) return T(`[historyPrefetch] ${e} HTTP ${a.status}`), a.data.resume(), null;
      return await BFc.pipeline(a.data, OFc.createWriteStream(r, {
        mode: 384
      })), r;
    })().catch(a => (T(`[historyPrefetch] ${e} failed: ${be(a)}`), Yme.unlink(r).catch(() => {}), null)),
    i = {
      path: r,
      written: s,
      settled: false
    };
  if (gnn.set(e, i), t) Yme.unlink(t.path).catch(() => {});
  s.then(a => {
    i.settled = true, T(`[historyPrefetch] ${e} ${a ? `\u2192 ${a}` : "null"} +${(performance.now() - o).toFixed(0)}ms`);
  });
}
async function consumePrefetchedHistory(e, t) {
  if (!gnn.has(e)) prefetchRemoteHistory(e);
  let n = gnn.get(e);
  if (gnn.delete(e), !n) return null;
  let r = await n.written;
  if (r === null) return null;
  let o;
  try {
    o = await Yme.readFile(r, "utf8");
  } catch (u) {
    if (!wn(u)) T(`[historyPrefetch] read ${r} failed: ${be(u)}`);
    return null;
  } finally {
    await Yme.unlink(r).catch(() => {});
  }
  let s = JLm(o);
  if (s === null) return T(`[historyPrefetch] ${e} parse failed`), null;
  if (!s.hasMore) return historyPageToSeed(s, t);
  let i = await qdr(e).catch(() => null);
  if (i === null) return historyPageToSeed(s, t);
  let {
      events: a,
      firstId: l
    } = s,
    c = 1;
  while (l !== null && c < KLm) {
    let u = await Vdr(i, l);
    if (u === null) break;
    c++, a.unshift(...u.events), l = u.hasMore ? u.firstId : null, s = u;
  }
  return T(`[historyPrefetch] ${e} walked ${c} pages, ${a.length} events, complete=${l === null}`), historyPageToSeed({
    events: a,
    firstId: l,
    hasMore: l !== null
  }, t);
}
function JLm(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  let n = Array.isArray(t.data) ? t.data : [],
    r = [];
  for (let s = n.length - 1; s >= 0; s--) {
    let i = n[s];
    if (i?.payload) {
      let a = i.sequence_num === void 0 ? void 0 : parseInt(String(i.sequence_num), 10);
      r.push({
        payload: i.payload,
        createdAt: i.created_at,
        source: i.source,
        sequenceNum: a !== void 0 && !isNaN(a) ? a : void 0
      });
    }
  }
  let o = t.next_cursor ?? null;
  return {
    events: r,
    firstId: o,
    hasMore: o !== null
  };
}
function historyPageToSeed(e, t) {
  let n = [],
    r = 0,
    o = new Set();
  for (let s of e.events) {
    if (s.sequenceNum !== void 0 && s.sequenceNum > r) r = s.sequenceNum;
    if (s.source === "worker") {
      let a = ENe(s.payload);
      if (a) for (let l of a.uuids) o.add(l);
    }
    if (!QLm(s)) continue;
    let i = ANe(s.payload, t ? {
      convertToolResults: true,
      convertUserTextMessages: true
    } : {
      convertUserTextMessages: true
    });
    if (i.type === "message") n.push(i.message);
  }
  if (o.size > 0) n = n.filter(s => !o.has(s.uuid));
  return {
    messages: n,
    maxSequenceNum: r,
    complete: !e.hasMore
  };
}
function QLm(e) {
  if (e.source === void 0 || e.source === "worker") return true;
  if (e.payload.type === "user") return !z4o(e.payload);
  return V4o.has(e.payload.type);
}
function reportPrefetchOutcome(e) {
  if (e === null) It("remote_history_prefetch", "miss");else if (!e.complete) It("remote_history_prefetch", "incomplete");else if (e.maxSequenceNum === 0) It("remote_history_prefetch", "no_seq");else xe("remote_history_prefetch");
}
var OFc,
  Yme,
  NFc,
  CXo,
  BFc,
  KLm = 10,
  mnn = null,
  gnn;