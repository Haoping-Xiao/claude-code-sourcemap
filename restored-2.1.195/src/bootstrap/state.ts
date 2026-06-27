// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ih
// matched 2.1.88 source: src/bootstrap/state.ts
// class=modified  jaccard=0.4877  score=0.5695  fileCov=0.7724
// note: deminified; 315 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: waitForScrollIdle, updateLastInteractionTime, switchSession, snapshotOutputTokensForTurn, setUserMsgOptIn, setUseCoworkPlugins, setTracerProvider, setThinkingTypeOverride, setTerminalFocusForState, setTeleportedSessionInfo, setTeamMemoryServerStatus, setSystemPromptSectionCacheEntry, setSyncedPluginDirs, setStrictToolResultPairing, setStrictMcpConfig, setStatsStore, setStartupPolicySnapshot, setSessionTrustAccepted, setSessionStartType, setSessionSource, setSessionSkillAllowlist …
function Fie() {
  return {
    sent: new Set(),
    rejected: new Set(),
  };
}
function RR(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
  };
}
function Wve(e, t) {
  if (!e.rejected.has(t)) e.sent.add(t);
}
function FBe(e, t) {
  return e.sent.has(t) && !e.rejected.has(t);
}
function jie(e, t) {
  (e.sent.delete(t), e.rejected.add(t));
}
function jBe(e, t) {
  return e.rejected.has(t);
}
function hrs() {
  let e = "";
  if (
    typeof process !== "undefined" &&
    typeof process.cwd === "function" &&
    typeof Xyr.realpathSync === "function"
  ) {
    let n = grs.cwd();
    try {
      e = Qwt(Xyr.realpathSync(n));
    } catch {
      e = Qwt(n);
    }
  }
  return {
    originalCwd: e,
    projectRoot: e,
    totalCostUSD: 0,
    totalAPIDuration: 0,
    totalAPIDurationWithoutRetries: 0,
    totalToolDuration: 0,
    startTime: Date.now(),
    lastInteractionTime: Date.now(),
    totalLinesAdded: 0,
    totalLinesRemoved: 0,
    hasUnknownModelCost: false,
    cwd: e,
    modelUsage: {},
    mainLoopModelOverride: void 0,
    refusalFallbackModelLatch: void 0,
    sdkDialogHostActive: false,
    sdkSupportedDialogKinds: void 0,
    sdkSupportedDialogKindsSource: void 0,
    replConfigArgv: [],
    initialMainLoopModel: void 0,
    modelStrings: null,
    isInteractive: false,
    permissionPromptToolName: void 0,
    attacherCaps: null,
    hasStreamingInput: false,
    modelOverrideOptOutForSession: false,
    rendererMode: void 0,
    strictToolResultPairing: false,
    memoryToggledOff: false,
    teamMemoryServerStatus: void 0,
    sdkAgentProgressSummariesEnabled: false,
    userMsgOptIn: false,
    searchToolsOptIn: false,
    clientType: "cli",
    sessionSource: void 0,
    sessionStartType: "fresh",
    questionPreviewFormat: void 0,
    sessionIngressToken: void 0,
    oauthTokenFromFd: void 0,
    oauthScopesFromFd: void 0,
    apiKeyFromFd: void 0,
    gatewayAuth: null,
    gatewayRefreshInFlight: null,
    startupPolicySnapshot: void 0,
    flagSettingsPath: void 0,
    flagSettingsExpectedContent: void 0,
    flagSettingsInline: null,
    parentManagedSettings: null,
    allowedSettingSources: [
      "userSettings",
      "projectSettings",
      "localSettings",
      "flagSettings",
      "policySettings",
    ],
    meter: null,
    sessionCounter: null,
    locCounter: null,
    prCounter: null,
    commitCounter: null,
    costCounter: null,
    tokenCounter: null,
    codeEditToolDecisionCounter: null,
    activeTimeCounter: null,
    statsStore: null,
    sessionId: Xwt() ?? Age.randomUUID(),
    mainAgentId: null,
    parentSessionId: void 0,
    loggerProvider: null,
    eventLogger: null,
    pendingOTelEvents: [],
    meterProvider: null,
    tracerProvider: null,
    cachedTelemetryResource: null,
    cachedOtlpHttpAgentFactory: {
      direct: null,
      proxied: null,
    },
    foundryDeploymentCapabilities: new Map(),
    agentColorMap: new Map(),
    agentColorIndex: 0,
    lastAPIRequest: null,
    lastCancelledAPIMessageId: null,
    lastAPIRequestMessages: null,
    lastClassifierRequests: null,
    cachedClaudeMdContent: null,
    inMemoryErrorLog: [],
    inlinePlugins: [],
    inlinePluginsNoMcp: [],
    inlinePluginUrls: [],
    syncedPluginDirs: [],
    chromeFlagOverride: void 0,
    onboardingShownThisSession: false,
    useCoworkPlugins: false,
    disableSlashCommands: false,
    sessionBypassPermissionsMode: false,
    scheduledTasksEnabled: false,
    sessionPrResolved: false,
    sessionCronTasks: [],
    loopChainStartedAt: Object.create(null),
    loopTickInFlightPrompt: null,
    loopConsecutiveKeepalives: 0,
    sessionCreatedTeams: new Set(),
    inheritedTeamName: void 0,
    sessionTrustAccepted: false,
    sessionPersistenceDisabled: false,
    hasExitedPlanMode: false,
    needsPlanModeExitAttachment: false,
    needsAutoModeExitAttachment: false,
    lspRecommendationShownThisSession: false,
    initJsonSchema: null,
    registeredHooks: null,
    planSlugCache: new Map(),
    teleportedSessionInfo: null,
    invokedSkills: new Map(),
    slowOperations: [],
    sdkBetas: void 0,
    longContext1mCreditsBlocked: false,
    fableCreditsRequired: false,
    fableConsentSessionFallback: false,
    fableBridgeDialogTimedOut: false,
    fableConsentDialogInteracted: false,
    sdkOAuthTokenRefreshCallback: null,
    hostAuthTokenRefreshCallback: null,
    mainThreadAgentType: void 0,
    mainThreadAgentHooks: void 0,
    sessionSkillAllowlist: void 0,
    caps: lzc,
    replBridgeActive: false,
    mainLoopBusy: false,
    directConnectServerUrl: void 0,
    mcpConnectNonBlocking: false,
    strictMcpConfig: false,
    activeRoutine: void 0,
    systemPromptSectionCache: new Map(),
    lastEmittedDate: null,
    additionalDirectoriesForClaudeMd: [],
    allowedChannels: [],
    hasDevChannels: false,
    sessionProjectDir: null,
    promptCache1hAllowlist: null,
    stickyBetas: Fie(),
    thinkingTypeOverrides: new Map(),
    inferenceProfileBackingModels: new Map(),
    promptId: null,
    promptIndex: 0,
    lastMainRequestId: void 0,
    lastMainThreadCacheTtlMs: null,
    lastApiCompletionTimestamp: null,
    pendingPostCompaction: false,
  };
}
function setSessionOverridesGetter(e) {
  l0 = e;
}
function getSessionId() {
  return l0()?.sessionId ?? Bt.sessionId;
}
function mainAgentId() {
  let e = l0()?.sessionId;
  if (e) return Bu(e);
  return ((Bt.mainAgentId ??= Bu(Bt.sessionId)), Bt.mainAgentId);
}
function regenerateSessionId(e = {}) {
  if (e.setCurrentAsParent) Bt.parentSessionId = Bt.sessionId;
  (Bt.planSlugCache.delete(Bt.sessionId),
    (Bt.sessionId = Age.randomUUID()),
    (Bt.sessionProjectDir = null),
    (Bt.promptIndex = 0),
    (Bt.lastCancelledAPIMessageId = null));
  let t = _rs();
  return (yrs(Bt.sessionId, "clear", t), Bt.sessionId);
}
function yrs(e, t, n) {
  if (n) Xon.emit(e, t, n);
  else Xon.emit(e, t);
}
function getParentSessionId() {
  let e = l0();
  return e ? e.parentSessionId : Bt.parentSessionId;
}
function switchSession(e, t, n = null) {
  let r;
  if (Bt.sessionId !== e)
    (Bt.planSlugCache.delete(Bt.sessionId),
      (Bt.lastCancelledAPIMessageId = null),
      (r = _rs()),
      (Bt.parentSessionId = void 0));
  ((Bt.sessionId = e), (Bt.sessionProjectDir = n), yrs(e, t, r));
}
function _rs() {
  let e = Bt.refusalFallbackModelLatch;
  if (((Bt.refusalFallbackModelLatch = void 0), !e || Bt.mainLoopModelOverride !== e.fallbackModel))
    return;
  return (
    (Bt.mainLoopModelOverride = e.previousOverride),
    {
      appStateModel: e.previousAppStateModel,
      forSessionValue: e.previousModelForSession,
      overrideValue: e.previousOverride,
      restoredToExplicitOverride: e.previousOverride !== void 0,
      fallbackModel: e.fallbackModel,
    }
  );
}
function getSessionProjectDir() {
  let e = l0();
  return e ? e.sessionProjectDir : Bt.sessionProjectDir;
}
function getOriginalCwd() {
  return l0()?.originalCwd ?? Bt.originalCwd;
}
function getProjectRoot() {
  return l0()?.projectRoot ?? Bt.projectRoot;
}
function Qwt(e) {
  return e;
}
function setOriginalCwd(e) {
  ((Bt.originalCwd = Qwt(e)), Zyr.emit(Bt.originalCwd));
}
function setProjectRoot(e) {
  Bt.projectRoot = Qwt(e);
}
function getCwdState() {
  return Bt.cwd;
}
function setCwdState(e) {
  Bt.cwd = Qwt(e);
}
function resetStartTime() {
  Bt.startTime = Date.now();
}
function getDirectConnectServerUrl() {
  return Bt.directConnectServerUrl;
}
function setDirectConnectServerUrl(e) {
  Bt.directConnectServerUrl = e;
}
function getMcpConnectNonBlocking() {
  return Bt.mcpConnectNonBlocking;
}
function setMcpConnectNonBlocking(e) {
  Bt.mcpConnectNonBlocking = e;
}
function getStrictMcpConfig() {
  return Bt.strictMcpConfig;
}
function setStrictMcpConfig(e) {
  Bt.strictMcpConfig = e;
}
function getActiveRoutine() {
  return Bt.activeRoutine;
}
function setActiveRoutine(e) {
  Bt.activeRoutine = e;
}
function addToTotalDurationState(e, t) {
  ((Bt.totalAPIDuration += e), (Bt.totalAPIDurationWithoutRetries += t));
}
function resetTotalDurationStateAndCost_FOR_TESTS_ONLY() {
  ((Bt.totalAPIDuration = 0), (Bt.totalAPIDurationWithoutRetries = 0), (Bt.totalCostUSD = 0));
}
function addToTotalCostState(e, t, n) {
  ((Bt.modelUsage[n] = t), (Bt.totalCostUSD += e));
}
function getTotalCostUSD() {
  return Bt.totalCostUSD;
}
function getTotalAPIDuration() {
  return Bt.totalAPIDuration;
}
function getTotalDuration() {
  return Date.now() - Bt.startTime;
}
function getTotalAPIDurationWithoutRetries() {
  return Bt.totalAPIDurationWithoutRetries;
}
function getTotalToolDuration() {
  return Bt.totalToolDuration;
}
function addToToolDuration(e) {
  Bt.totalToolDuration += e;
}
function getStatsStore() {
  return Bt.statsStore;
}
function setStatsStore(e) {
  Bt.statsStore = e;
}
function updateLastInteractionTime(e) {
  if (e) brs();
  else Zon = true;
}
function flushInteractionTime() {
  if (Zon) brs();
}
function brs() {
  ((Bt.lastInteractionTime = Date.now()), (Zon = false), d_r.emit());
}
function resetInteractionBaseline() {
  ((Bt.lastInteractionTime = Date.now()), (Zon = false));
}
function addToTotalLinesChanged(e, t) {
  ((Bt.totalLinesAdded += e), (Bt.totalLinesRemoved += t));
}
function getTotalLinesAdded() {
  return Bt.totalLinesAdded;
}
function getTotalLinesRemoved() {
  return Bt.totalLinesRemoved;
}
function getTotalInputTokens() {
  return oJe(Object.values(Bt.modelUsage), "inputTokens");
}
function getTotalOutputTokens() {
  return oJe(Object.values(Bt.modelUsage), "outputTokens");
}
function getTotalCacheReadInputTokens() {
  return oJe(Object.values(Bt.modelUsage), "cacheReadInputTokens");
}
function getTotalCacheCreationInputTokens() {
  return oJe(Object.values(Bt.modelUsage), "cacheCreationInputTokens");
}
function getTotalWebSearchRequests() {
  return oJe(Object.values(Bt.modelUsage), "webSearchRequests");
}
function getTurnOutputTokens() {
  return getTotalOutputTokens() - m_r;
}
function getCurrentTurnTokenBudget() {
  return g_r;
}
function snapshotOutputTokensForTurn(e) {
  ((m_r = getTotalOutputTokens()), (g_r = e), (tsn = 0));
}
function getBudgetContinuationCount() {
  return tsn;
}
function incrementBudgetContinuationCount() {
  tsn++;
}
function setHasUnknownModelCost() {
  Bt.hasUnknownModelCost = true;
}
function hasUnknownModelCost() {
  return Bt.hasUnknownModelCost;
}
function getLastMainRequestId() {
  return Bt.lastMainRequestId;
}
function setLastMainRequestId(e) {
  Bt.lastMainRequestId = e;
}
function getLastMainThreadCacheTtlMs() {
  return Bt.lastMainThreadCacheTtlMs;
}
function setLastMainThreadCacheTtlMs(e) {
  Bt.lastMainThreadCacheTtlMs = e;
}
function getLastApiCompletionTimestamp() {
  return Bt.lastApiCompletionTimestamp;
}
function setLastApiCompletionTimestamp(e) {
  Bt.lastApiCompletionTimestamp = e;
}
function markPostCompaction() {
  Bt.pendingPostCompaction = true;
}
function consumePostCompaction() {
  let e = Bt.pendingPostCompaction;
  return ((Bt.pendingPostCompaction = false), e);
}
function getLastInteractionTime() {
  return Bt.lastInteractionTime;
}
function setTerminalFocusForState(e) {
  ((S_r = e), E_r.emit());
}
function getTerminalFocus() {
  return S_r;
}
function isUserActiveForNotifications() {
  let e = getTerminalFocus();
  if (e !== void 0) return e;
  return Date.now() - getLastInteractionTime() < NOTIF_ACTIVE_THRESHOLD_MS;
}
function markScrollActivity() {
  if (((Jon = true), Jwt)) clearTimeout(Jwt);
  ((Jwt = setTimeout(() => {
    ((Jon = false), (Jwt = void 0));
  }, Srs)),
    Jwt.unref?.());
}
function getIsScrollDraining() {
  return Jon;
}
async function waitForScrollIdle() {
  while (Jon) await new Promise((e) => setTimeout(e, Srs));
}
function getModelUsage() {
  return Bt.modelUsage;
}
function getUsageForModel(e) {
  return Bt.modelUsage[e];
}
function getMainLoopModelOverride() {
  return Bt.mainLoopModelOverride;
}
function getInitialMainLoopModel() {
  return Bt.initialMainLoopModel;
}
function setMainLoopModelOverride(e) {
  Bt.mainLoopModelOverride = e;
}
function latchRefusalFallbackModel(e) {
  let t = Bt.refusalFallbackModelLatch;
  if (t && Bt.mainLoopModelOverride === t.fallbackModel) {
    Bt.refusalFallbackModelLatch = {
      ...t,
      fallbackModel: e.fallbackModel,
    };
    return;
  }
  Bt.refusalFallbackModelLatch = e;
}
function clearRefusalFallbackModelLatch() {
  Bt.refusalFallbackModelLatch = void 0;
}
function getRefusalFallbackModelLatch() {
  return Bt.refusalFallbackModelLatch;
}
function rewriteRefusalFallbackPreviousOverride(e) {
  if (Bt.refusalFallbackModelLatch)
    Bt.refusalFallbackModelLatch = {
      ...Bt.refusalFallbackModelLatch,
      previousOverride: e,
    };
}
function setSdkDialogHostActive(e) {
  Bt.sdkDialogHostActive = e;
}
function isSdkDialogHostActive() {
  return Bt.sdkDialogHostActive;
}
function setSdkSupportedDialogKinds(e, t) {
  ((Bt.sdkSupportedDialogKinds = e),
    (Bt.sdkSupportedDialogKindsSource = e === void 0 ? void 0 : t));
}
function getSdkSupportedDialogKinds() {
  return Bt.sdkSupportedDialogKinds;
}
function getSdkDialogCapabilitySource() {
  if (Bt.sdkSupportedDialogKinds === void 0) return "none";
  return Bt.sdkSupportedDialogKindsSource ?? "none";
}
function getReplConfigArgv() {
  return Bt.replConfigArgv;
}
function setReplConfigArgv(e) {
  Bt.replConfigArgv = e;
}
function setInitialMainLoopModel(e) {
  Bt.initialMainLoopModel = e;
}
function getSdkBetas() {
  return l0()?.sdkBetas ?? Bt.sdkBetas;
}
function setSdkBetas(e) {
  Bt.sdkBetas = e;
}
function isLongContext1mCreditsBlocked() {
  return Bt.longContext1mCreditsBlocked;
}
function setLongContext1mCreditsBlocked(e) {
  Bt.longContext1mCreditsBlocked = e;
}
function isFableCreditsRequired() {
  return Bt.fableCreditsRequired;
}
function setFableCreditsRequired(e) {
  Bt.fableCreditsRequired = e;
}
function hasFableBridgeDialogTimedOut() {
  return Bt.fableBridgeDialogTimedOut;
}
function setFableBridgeDialogTimedOut(e = true) {
  Bt.fableBridgeDialogTimedOut = e;
}
function hasFableConsentDialogInteracted() {
  return Bt.fableConsentDialogInteracted;
}
function setFableConsentDialogInteracted(e = true) {
  Bt.fableConsentDialogInteracted = e;
}
function hasFableConsentSessionFallback() {
  return Bt.fableConsentSessionFallback;
}
function setFableConsentSessionFallback(e) {
  Bt.fableConsentSessionFallback = e;
}
function getSdkOAuthTokenRefreshCallback() {
  return Bt.sdkOAuthTokenRefreshCallback;
}
function setSdkOAuthTokenRefreshCallback(e) {
  Bt.sdkOAuthTokenRefreshCallback = e;
}
function getHostAuthTokenRefreshCallback() {
  return Bt.hostAuthTokenRefreshCallback;
}
function setHostAuthTokenRefreshCallback(e) {
  Bt.hostAuthTokenRefreshCallback = e;
}
function resetCostState() {
  ((Bt.totalCostUSD = 0),
    (Bt.totalAPIDuration = 0),
    (Bt.totalAPIDurationWithoutRetries = 0),
    (Bt.totalToolDuration = 0),
    (Bt.startTime = Date.now()),
    (Bt.totalLinesAdded = 0),
    (Bt.totalLinesRemoved = 0),
    (Bt.hasUnknownModelCost = false),
    (Bt.modelUsage = {}),
    (Bt.promptId = null));
}
function setCostStateForRestore({
  totalCostUSD: e,
  totalAPIDuration: t,
  totalAPIDurationWithoutRetries: n,
  totalToolDuration: r,
  totalLinesAdded: o,
  totalLinesRemoved: s,
  lastDuration: i,
  modelUsage: a,
}) {
  if (
    ((Bt.totalCostUSD = e),
    (Bt.totalAPIDuration = t),
    (Bt.totalAPIDurationWithoutRetries = n),
    (Bt.totalToolDuration = r),
    (Bt.totalLinesAdded = o),
    (Bt.totalLinesRemoved = s),
    a)
  )
    Bt.modelUsage = a;
  if (i) Bt.startTime = Date.now() - i;
}
function resetStateForTests() {
  throw Error("resetStateForTests can only be called in tests");
}
function getModelStrings() {
  return Bt.modelStrings;
}
function setModelStrings(e) {
  Bt.modelStrings = e;
}
function resetModelStrings() {
  Bt.modelStrings = null;
}
function resetModelStringsForTestingOnly() {
  resetModelStrings();
}
function setMeter(e, t) {
  ((Bt.meter = e),
    (Bt.sessionCounter = t("claude_code.session.count", {
      description: "Count of CLI sessions started",
    })),
    (Bt.locCounter = t("claude_code.lines_of_code.count", {
      description:
        "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed and the 'model' attribute indicating which model made the change",
    })),
    (Bt.prCounter = t("claude_code.pull_request.count", {
      description: "Number of pull requests created",
    })),
    (Bt.commitCounter = t("claude_code.commit.count", {
      description: "Number of git commits created",
    })),
    (Bt.costCounter = t("claude_code.cost.usage", {
      description: "Cost of the Claude Code session",
      unit: "USD",
    })),
    (Bt.tokenCounter = t("claude_code.token.usage", {
      description: "Number of tokens used",
      unit: "tokens",
    })),
    (Bt.codeEditToolDecisionCounter = t("claude_code.code_edit_tool.decision", {
      description:
        "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools",
    })),
    (Bt.activeTimeCounter = t("claude_code.active_time.total", {
      description: "Total active time in seconds",
      unit: "s",
    })));
}
function getMeter() {
  return Bt.meter;
}
function getSessionCounter() {
  return Bt.sessionCounter;
}
function getLocCounter() {
  return Bt.locCounter;
}
function getPrCounter() {
  return Bt.prCounter;
}
function getCommitCounter() {
  return Bt.commitCounter;
}
function getCostCounter() {
  return Bt.costCounter;
}
function getTokenCounter() {
  return Bt.tokenCounter;
}
function getCodeEditToolDecisionCounter() {
  return Bt.codeEditToolDecisionCounter;
}
function getActiveTimeCounter() {
  return Bt.activeTimeCounter;
}
function getLoggerProvider() {
  return Bt.loggerProvider;
}
function setLoggerProvider(e) {
  Bt.loggerProvider = e;
}
function getEventLogger() {
  return Bt.eventLogger;
}
function setEventLogger(e) {
  if (((Bt.eventLogger = e), !e)) return;
  let t = Bt.pendingOTelEvents;
  if (((Bt.pendingOTelEvents = null), t)) for (let n of t) e.emit(n);
}
function bufferPendingOTelEvent(e) {
  if (Bt.pendingOTelEvents === null || Bt.pendingOTelEvents.length >= bzc) return false;
  return (Bt.pendingOTelEvents.push(e), true);
}
function discardPendingOTelEvents() {
  Bt.pendingOTelEvents = null;
}
function getMeterProvider() {
  return Bt.meterProvider;
}
function setMeterProvider(e) {
  Bt.meterProvider = e;
}
function getTracerProvider() {
  return Bt.tracerProvider;
}
function setTracerProvider(e) {
  Bt.tracerProvider = e;
}
function getFoundryDeploymentCapabilities() {
  return Bt.foundryDeploymentCapabilities;
}
function getCachedTelemetryResource() {
  return Bt.cachedTelemetryResource;
}
function setCachedTelemetryResource(e) {
  Bt.cachedTelemetryResource = e;
}
function getCachedOtlpHttpAgentFactory(e) {
  return Bt.cachedOtlpHttpAgentFactory[e ? "proxied" : "direct"];
}
function setCachedOtlpHttpAgentFactory(e, t) {
  Bt.cachedOtlpHttpAgentFactory[e ? "proxied" : "direct"] = t;
}
function getIsNonInteractiveSession() {
  return !Bt.isInteractive;
}
function getIsInteractive() {
  return Bt.isInteractive;
}
function setIsInteractive(e) {
  Bt.isInteractive = e;
}
function getPermissionPromptToolName() {
  return Bt.permissionPromptToolName;
}
function setPermissionPromptToolName(e) {
  Bt.permissionPromptToolName = e;
}
function getAttacherCaps() {
  return Bt.attacherCaps;
}
function setAttacherCaps(e) {
  ((Bt.attacherCaps = e), rbr.emit());
}
function getModelOverrideOptOutForSession() {
  return Bt.modelOverrideOptOutForSession;
}
function setModelOverrideOptOutForSession() {
  Bt.modelOverrideOptOutForSession = true;
}
function getHasStreamingInput() {
  return Bt.hasStreamingInput;
}
function setHasStreamingInput(e) {
  Bt.hasStreamingInput = e;
}
function getClientType() {
  return Bt.clientType;
}
function setClientType(e) {
  Bt.clientType = e;
}
function getSdkAgentProgressSummariesEnabled() {
  return Bt.sdkAgentProgressSummariesEnabled;
}
function setSdkAgentProgressSummariesEnabled(e) {
  Bt.sdkAgentProgressSummariesEnabled = e;
}
function getRendererModeForAnalytics() {
  return Bt.rendererMode;
}
function setRendererModeForAnalytics(e) {
  Bt.rendererMode = e;
}
function getStrictToolResultPairing() {
  return Bt.strictToolResultPairing;
}
function setStrictToolResultPairing(e) {
  Bt.strictToolResultPairing = e;
}
function getMemoryToggledOff() {
  return Bt.memoryToggledOff;
}
function setMemoryToggledOff(e) {
  Bt.memoryToggledOff = e;
}
function getTeamMemoryServerStatus() {
  return Bt.teamMemoryServerStatus;
}
function setTeamMemoryServerStatus(e) {
  Bt.teamMemoryServerStatus = e;
}
function getUserMsgOptIn() {
  return Bt.userMsgOptIn;
}
function setUserMsgOptIn(e) {
  Bt.userMsgOptIn = e;
}
function getSearchToolsOptIn() {
  return Bt.searchToolsOptIn;
}
function setSearchToolsOptIn(e) {
  Bt.searchToolsOptIn = e;
}
function getSessionSource() {
  return Bt.sessionSource;
}
function setSessionSource(e) {
  Bt.sessionSource = e;
}
function getSessionStartType() {
  return Bt.sessionStartType;
}
function setSessionStartType(e) {
  Bt.sessionStartType = e;
}
function getQuestionPreviewFormat() {
  return Bt.questionPreviewFormat;
}
function setQuestionPreviewFormat(e) {
  Bt.questionPreviewFormat = e;
}
function getAgentColorMap() {
  return Bt.agentColorMap;
}
function getFlagSettingsPath() {
  return Bt.flagSettingsPath;
}
function setFlagSettingsPath(e) {
  Bt.flagSettingsPath = e;
}
function getFlagSettingsExpectedContent() {
  return Bt.flagSettingsExpectedContent;
}
function setFlagSettingsExpectedContent(e) {
  Bt.flagSettingsExpectedContent = e;
}
function getFlagSettingsInline() {
  return Bt.flagSettingsInline;
}
function setFlagSettingsInline(e) {
  Bt.flagSettingsInline = e;
}
function getParentManagedSettings() {
  return Bt.parentManagedSettings;
}
function setParentManagedSettings(e) {
  Bt.parentManagedSettings = e;
}
function getSessionIngressToken() {
  let e = l0();
  return e ? e.secrets.sessionIngressToken : Bt.sessionIngressToken;
}
function setSessionIngressToken(e) {
  Bt.sessionIngressToken = e;
}
function getOauthTokenFromFd() {
  return Bt.oauthTokenFromFd;
}
function setOauthTokenFromFd(e) {
  Bt.oauthTokenFromFd = e;
}
function getOauthScopesFromFd() {
  return Bt.oauthScopesFromFd;
}
function setOauthScopesFromFd(e) {
  Bt.oauthScopesFromFd = e;
}
function getApiKeyFromFd() {
  return Bt.apiKeyFromFd;
}
function setApiKeyFromFd(e) {
  Bt.apiKeyFromFd = e;
}
function resetFdCredentialState() {
  ((Bt.sessionIngressToken = void 0),
    (Bt.oauthTokenFromFd = void 0),
    (Bt.oauthScopesFromFd = void 0),
    (Bt.apiKeyFromFd = void 0));
}
function getGatewayAuth() {
  return Bt.gatewayAuth;
}
function isGatewayAuthExpired() {
  let e = Bt.gatewayAuth;
  return !!e && e.expiresAt <= Date.now();
}
function isGatewayAuthPinned(e) {
  return !!e && !e.unpinned;
}
function setGatewayAuth(e) {
  Bt.gatewayAuth = e;
}
function getStartupPolicySnapshot() {
  return Bt.startupPolicySnapshot;
}
function setStartupPolicySnapshot(e) {
  Bt.startupPolicySnapshot = e;
}
function getGatewayRefreshInFlight() {
  return Bt.gatewayRefreshInFlight;
}
function setGatewayRefreshInFlight(e) {
  Bt.gatewayRefreshInFlight = e;
}
function setLastAPIRequest(e) {
  Bt.lastAPIRequest = e;
}
function getLastAPIRequest() {
  return Bt.lastAPIRequest;
}
function setLastCancelledAPIMessageId(e) {
  Bt.lastCancelledAPIMessageId = e;
}
function getLastCancelledAPIMessageId() {
  return Bt.lastCancelledAPIMessageId;
}
function setLastAPIRequestMessages(e) {
  Bt.lastAPIRequestMessages = e;
}
function getLastAPIRequestMessages() {
  return Bt.lastAPIRequestMessages;
}
function setLastClassifierRequests(e) {
  Bt.lastClassifierRequests = e;
}
function getLastClassifierRequests() {
  return Bt.lastClassifierRequests;
}
function setCachedClaudeMdContent(e) {
  let t = l0();
  if (t) t.cachedClaudeMdContent = e;
  else Bt.cachedClaudeMdContent = e;
}
function getCachedClaudeMdContent() {
  let e = l0();
  return e ? e.cachedClaudeMdContent : Bt.cachedClaudeMdContent;
}
function addToInMemoryErrorLog(e) {
  if (Bt.inMemoryErrorLog.length >= 100) Bt.inMemoryErrorLog.shift();
  Bt.inMemoryErrorLog.push(e);
}
function getAllowedSettingSources() {
  return Bt.allowedSettingSources;
}
function setAllowedSettingSources(e) {
  Bt.allowedSettingSources = e;
}
function preferThirdPartyAuthentication() {
  return getIsNonInteractiveSession() && Bt.clientType !== "claude-vscode";
}
function setInlinePlugins(e) {
  Bt.inlinePlugins = e;
}
function getInlinePlugins() {
  return Bt.inlinePlugins;
}
function setInlinePluginsNoMcp(e) {
  Bt.inlinePluginsNoMcp = e;
}
function getInlinePluginsNoMcp() {
  return Bt.inlinePluginsNoMcp;
}
function setInlinePluginUrls(e) {
  Bt.inlinePluginUrls = e;
}
function getInlinePluginUrls() {
  return Bt.inlinePluginUrls;
}
function setSyncedPluginDirs(e) {
  Bt.syncedPluginDirs = e;
}
function getSyncedPluginDirs() {
  return Bt.syncedPluginDirs;
}
function setChromeFlagOverride(e) {
  Bt.chromeFlagOverride = e;
}
function getChromeFlagOverride() {
  return Bt.chromeFlagOverride;
}
function setOnboardingShownThisSession(e) {
  Bt.onboardingShownThisSession = e;
}
function getOnboardingShownThisSession() {
  return Bt.onboardingShownThisSession;
}
function setUseCoworkPlugins(e) {
  ((Bt.useCoworkPlugins = e), n_());
}
function getUseCoworkPlugins() {
  return Bt.useCoworkPlugins;
}
function setDisableSlashCommands(e) {
  Bt.disableSlashCommands = e;
}
function getDisableSlashCommands() {
  return Bt.disableSlashCommands;
}
function setSessionBypassPermissionsMode(e) {
  Bt.sessionBypassPermissionsMode = e;
}
function getSessionBypassPermissionsMode() {
  return Bt.sessionBypassPermissionsMode;
}
function setScheduledTasksEnabled(e) {
  Bt.scheduledTasksEnabled = e;
}
function getScheduledTasksEnabled() {
  return Bt.scheduledTasksEnabled;
}
function getSessionCronTasks() {
  return l0()?.sessionCronTasks ?? Bt.sessionCronTasks;
}
function getSessionPrResolved() {
  return Bt.sessionPrResolved;
}
function setSessionPrResolved(e) {
  Bt.sessionPrResolved = e;
}
function addSessionCronTask(e) {
  Bt.sessionCronTasks.push(e);
}
function getLoopChainStartedAt(e) {
  return Bt.loopChainStartedAt[e];
}
function setLoopChainStartedAt(e, t) {
  Bt.loopChainStartedAt[e] = t;
}
function deleteLoopChainStartedAt(e) {
  delete Bt.loopChainStartedAt[e];
}
function getLoopTickInFlightPrompt() {
  return Bt.loopTickInFlightPrompt;
}
function setLoopTickInFlightPrompt(e) {
  Bt.loopTickInFlightPrompt = e;
}
function getLoopConsecutiveKeepalives() {
  return Bt.loopConsecutiveKeepalives;
}
function setLoopConsecutiveKeepalives(e) {
  Bt.loopConsecutiveKeepalives = e;
}
function removeSessionCronTasks(e) {
  if (e.length === 0) return 0;
  let t = new Set(e),
    n = Bt.sessionCronTasks.filter((o) => !t.has(o.id)),
    r = Bt.sessionCronTasks.length - n.length;
  if (r === 0) return 0;
  return ((Bt.sessionCronTasks = n), r);
}
function setSessionTrustAccepted(e) {
  Bt.sessionTrustAccepted = e;
}
function getSessionTrustAccepted() {
  return Bt.sessionTrustAccepted;
}
function setSessionPersistenceDisabled(e) {
  Bt.sessionPersistenceDisabled = e;
}
function isSessionPersistenceDisabled() {
  return Bt.sessionPersistenceDisabled;
}
function hasExitedPlanModeInSession() {
  return Bt.hasExitedPlanMode;
}
function setHasExitedPlanMode(e) {
  Bt.hasExitedPlanMode = e;
}
function needsPlanModeExitAttachment() {
  return Bt.needsPlanModeExitAttachment;
}
function setNeedsPlanModeExitAttachment(e) {
  Bt.needsPlanModeExitAttachment = e;
}
function handlePlanModeTransition(e, t) {
  if (t === "plan" && e !== "plan") Bt.needsPlanModeExitAttachment = false;
  if (e === "plan" && t !== "plan") Bt.needsPlanModeExitAttachment = true;
}
function needsAutoModeExitAttachment() {
  return Bt.needsAutoModeExitAttachment;
}
function setNeedsAutoModeExitAttachment(e) {
  Bt.needsAutoModeExitAttachment = e;
}
function handleAutoModeTransition(e, t) {
  if ((e === "auto" && t === "plan") || (e === "plan" && t === "auto")) return;
  let n = e === "auto",
    r = t === "auto";
  if (r && !n) Bt.needsAutoModeExitAttachment = false;
  if (n && !r) Bt.needsAutoModeExitAttachment = true;
}
function hasShownLspRecommendationThisSession() {
  return Bt.lspRecommendationShownThisSession;
}
function setLspRecommendationShownThisSession(e) {
  Bt.lspRecommendationShownThisSession = e;
}
function setInitJsonSchema(e) {
  Bt.initJsonSchema = e;
}
function getInitJsonSchema() {
  return Bt.initJsonSchema;
}
function setMcpClientsAccessor(e) {
  Qbr = e;
}
function getMcpClientsFromAccessor() {
  return Qbr?.();
}
function Tsn() {
  return l0() ?? Bt;
}
function registerHookCallbacks(e) {
  let t = Tsn();
  if (!t.registeredHooks) t.registeredHooks = {};
  for (let [n, r] of Object.entries(e)) {
    let o = n;
    if (!t.registeredHooks[o]) t.registeredHooks[o] = [];
    t.registeredHooks[o].push(...r);
  }
}
function getRegisteredHooks() {
  return Tsn().registeredHooks;
}
function clearRegisteredHooks() {
  Tsn().registeredHooks = null;
}
function clearRegisteredPluginHooks() {
  let e = Tsn();
  if (!e.registeredHooks) return;
  let t = {};
  for (let [n, r] of Object.entries(e.registeredHooks)) {
    let o = r.filter((s) => !("pluginRoot" in s));
    if (o.length > 0) t[n] = o;
  }
  e.registeredHooks = Object.keys(t).length > 0 ? t : null;
}
function getPlanSlugCache() {
  return Bt.planSlugCache;
}
function getSessionCreatedTeams() {
  return l0()?.sessionCreatedTeams ?? Bt.sessionCreatedTeams;
}
function getInheritedTeamName() {
  return Bt.inheritedTeamName;
}
function setInheritedTeamName(e) {
  Bt.inheritedTeamName = e;
}
function setTeleportedSessionInfo(e) {
  Bt.teleportedSessionInfo = {
    isTeleported: true,
    hasLoggedFirstMessage: false,
    sessionId: e.sessionId,
  };
}
function getTeleportedSessionInfo() {
  return Bt.teleportedSessionInfo;
}
function markFirstTeleportMessageLogged() {
  if (Bt.teleportedSessionInfo) Bt.teleportedSessionInfo.hasLoggedFirstMessage = true;
}
function addInvokedSkill(e, t, n, r = null) {
  let o = `${r ?? ""}:${e}`;
  Bt.invokedSkills.set(o, {
    skillName: e,
    skillPath: t,
    content: n,
    invokedAt: Date.now(),
    agentId: r,
  });
}
function getInvokedSkills() {
  return Bt.invokedSkills;
}
function getInvokedSkillsForAgent(e) {
  let t = e ?? null,
    n = new Map();
  for (let [r, o] of Bt.invokedSkills) if (o.agentId === t) n.set(r, o);
  return n;
}
function clearInvokedSkills(e) {
  if (!e || e.size === 0) {
    Bt.invokedSkills.clear();
    return;
  }
  for (let [t, n] of Bt.invokedSkills)
    if (n.agentId === null || !e.has(n.agentId)) Bt.invokedSkills.delete(t);
}
function clearInvokedSkillsForAgent(e) {
  for (let [t, n] of Bt.invokedSkills) if (n.agentId === e) Bt.invokedSkills.delete(t);
}
function addSlowOperation(e, t) {
  return;
}
function getSlowOperations() {
  if (Bt.slowOperations.length === 0) return mrs;
  let e = Date.now();
  if (Bt.slowOperations.some((t) => e - t.timestamp >= Jyr)) {
    if (
      ((Bt.slowOperations = Bt.slowOperations.filter((t) => e - t.timestamp < Jyr)),
      Bt.slowOperations.length === 0)
    )
      return mrs;
  }
  return Bt.slowOperations;
}
function getMainThreadAgentType() {
  let e = l0();
  return e ? e.mainThreadAgentType : Bt.mainThreadAgentType;
}
function setMainThreadAgentType(e) {
  let t = l0();
  if (t) t.mainThreadAgentType = e;
  else Bt.mainThreadAgentType = e;
}
function getMainThreadAgentHooks() {
  let e = l0();
  return e ? e.mainThreadAgentHooks : Bt.mainThreadAgentHooks;
}
function setMainThreadAgentHooks(e) {
  let t = l0();
  if (t) t.mainThreadAgentHooks = e;
  else Bt.mainThreadAgentHooks = e;
}
function getSessionSkillAllowlist() {
  return Bt.sessionSkillAllowlist;
}
function setSessionSkillAllowlist(e) {
  Bt.sessionSkillAllowlist = e;
}
function getCaps() {
  return Bt.caps;
}
function setCaps(e) {
  Bt.caps = e;
}
function getIsRemoteMode() {
  return Bt.caps.workspace === "remote";
}
function setIsRemoteMode(e) {
  Bt.caps = {
    ...Bt.caps,
    workspace: e ? "remote" : "local",
  };
}
function getSystemPromptSectionCache() {
  return Bt.systemPromptSectionCache;
}
function setSystemPromptSectionCacheEntry(e, t) {
  Bt.systemPromptSectionCache.set(e, t);
}
function clearSystemPromptSectionState() {
  Bt.systemPromptSectionCache.clear();
}
function getLastEmittedDate() {
  return Bt.lastEmittedDate;
}
function setLastEmittedDate(e) {
  Bt.lastEmittedDate = e;
}
function getAdditionalDirectoriesForClaudeMd() {
  return Bt.additionalDirectoriesForClaudeMd;
}
function setAdditionalDirectoriesForClaudeMd(e) {
  Bt.additionalDirectoriesForClaudeMd = e;
}
function getAllowedChannels() {
  return Bt.allowedChannels;
}
function setAllowedChannels(e) {
  Bt.allowedChannels = e;
}
function getHasDevChannels() {
  return Bt.hasDevChannels;
}
function setHasDevChannels(e) {
  Bt.hasDevChannels = e;
}
function getPromptCache1hAllowlist() {
  return Bt.promptCache1hAllowlist;
}
function setPromptCache1hAllowlist(e) {
  Bt.promptCache1hAllowlist = e;
}
function getThinkingTypeOverride(e) {
  return Bt.thinkingTypeOverrides.get(e);
}
function setThinkingTypeOverride(e, t) {
  Bt.thinkingTypeOverrides.set(e, t);
}
function getInferenceProfileBackingModelCached(e) {
  return Bt.inferenceProfileBackingModels.get(e);
}
function setInferenceProfileBackingModel(e, t) {
  Bt.inferenceProfileBackingModels.set(e, t);
}
function getStickyBetas() {
  return l0()?.stickyBetas ?? Bt.stickyBetas;
}
function clearBetaHeaderLatches() {
  let e = l0();
  if (e) e.stickyBetas = Fie();
  else Bt.stickyBetas = Fie();
}
function getPromptId() {
  return Bt.promptId;
}
function setPromptId(e) {
  Bt.promptId = e;
}
function incrementPromptIndex() {
  return (Bt.promptIndex++, Bt.promptIndex);
}
function getPromptIndex() {
  return Bt.promptIndex;
}
function isReplBridgeActive() {
  return Bt.replBridgeActive ?? false;
}
function setReplBridgeActive(e) {
  if (Bt.replBridgeActive === e) return;
  Bt.replBridgeActive = e;
}
function getMainLoopBusy() {
  return Bt.mainLoopBusy ?? false;
}
function setMainLoopBusy(e) {
  if (Bt.mainLoopBusy === e) return;
  Bt.mainLoopBusy = e;
}
var Xyr,
  grs,
  lzc,
  Bt,
  l0 = () => {
    return;
  },
  Xon,
  onSessionSwitch,
  Zyr,
  onOriginalCwdChange,
  Zon = false,
  d_r,
  onInteraction,
  m_r = 0,
  g_r = null,
  tsn = 0,
  NOTIF_ACTIVE_THRESHOLD_MS = 60000,
  S_r = void 0,
  E_r,
  onTerminalFocusChange,
  Jon = false,
  Jwt,
  Srs = 150,
  bzc = 100,
  rbr,
  onAttacherCapsChange,
  Qbr,
  frs = 10,
  Jyr = 10000 /* 1e4 */,
  mrs;
