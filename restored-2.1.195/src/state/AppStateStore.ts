// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h6
// matched 2.1.88 source: src/state/AppStateStore.ts
// class=modified  jaccard=0.2696  score=0.4689  fileCov=0.3881
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: makeSetWebBrowserSlice, getDefaultWebBrowserState, getDefaultAppState, IDLE_SPECULATION_STATE
// [unwrapped __esm module h6] deps: ft, Lo, je, Bi, ys, ggo, gM, sa, vn, Ao
((n$a = require("crypto")), (r$a = require("fs/promises")), (hJ = require("path")), (BRp = []));
hgo = new Map();
Ajn = qZe(async (e) => {
  let t = FRp(e),
    n = hgo.get(t);
  if (n !== void 0) return n === "internal";
  let r = await bRt(e);
  if (!r) return (hgo.set(t, "none"), false);
  let o = URp(r);
  return (hgo.set(t, o ? "internal" : "external"), o);
});
var _go = {};
function getDefaultWebBrowserState() {
  return {
    view: void 0,
    logs: [],
    unreadErrors: 0,
    unreadWarnings: 0,
    cleanupRegistered: false,
  };
}
function makeSetWebBrowserSlice(e) {
  return (t) =>
    e((n) => {
      let r = {
          webBrowser: n.webBrowser,
          bagelActive: n.bagelActive,
          bagelUrl: n.bagelUrl,
          bagelPanelVisible: n.bagelPanelVisible,
        },
        o = t(r);
      if (o === r) return n;
      return {
        ...n,
        ...o,
      };
    });
}
var a$a = {};
function getDefaultAppState() {
  let e = (Mp(), ro(ejr)),
    t = e.isTeammate() && e.isPlanModeRequired() ? "plan" : "default";
  return {
    settings: Dr(),
    tasks: {},
    transcripts: {},
    taskDecorations: {},
    agentNameRegistry: new Map(),
    agentTypesInvokedThisSession: new Set(),
    verbose: false,
    showMessageTimestamps: false,
    mainLoopModel: null,
    mainLoopModelForSession: null,
    statusLineText: void 0,
    prStatus: null,
    prNeedsAuth: false,
    expandedView: "none",
    replTab: "convo",
    isBriefOnly: false,
    briefTranscript: false,
    coordinatorTaskIndex: -1,
    workflowFooterIndex: 0,
    viewSelectionMode: "none",
    queueEditIndex: null,
    footerSelection: null,
    footerLinks: [],
    remoteSessionUrl: void 0,
    remoteConnectionStatus: "connecting",
    remoteBootstrap: null,
    remoteBackgroundTaskCount: 0,
    replBridgeEnabled: false,
    replBridgeAutoOnByDefault: false,
    replBridgeExplicit: false,
    replBridgeOutboundOnly: false,
    replBridgeConnected: false,
    replBridgeSessionActive: false,
    replBridgeSkipNextArchive: false,
    replBridgeReconnecting: false,
    replBridgeConnectUrl: void 0,
    replBridgeSessionUrl: void 0,
    replBridgeEnvironmentId: void 0,
    replBridgeSessionId: void 0,
    replBridgeError: void 0,
    replBridgeInitialName: void 0,
    showRemoteCallout: false,
    toolPermissionContext: {
      ...b1(),
      mode: t,
    },
    agent: void 0,
    agentDefinitions: {
      activeAgents: [],
      allAgents: [],
    },
    skillTruncationStats: null,
    skillTools: [],
    fileHistory: {
      snapshots: [],
      trackedFiles: new Set(),
      snapshotSequence: 0,
    },
    attribution: Xpt(),
    mcp: {
      clientsInitialized: false,
      clients: [],
      tools: [],
      commands: [],
      resources: {},
      resourceTemplates: {},
      suppressedClaudeAiConnectors: [],
      pluginReconnectKey: 0,
    },
    plugins: {
      enabled: [],
      disabled: [],
      commands: [],
      errors: [],
      warnings: [],
      installationStatus: {
        marketplaces: [],
        plugins: [],
      },
      needsRefresh: false,
    },
    setupIssues: {
      settingsErrorCount: 0,
      lspFailedCount: 0,
      installBrokenMessages: [],
      installPathCount: 0,
      marketplaceIssueCount: 0,
      chromeExtensionIssueCount: 0,
      npmInstallDeprecated: false,
      sandboxIssueCount: 0,
      statuslineIssueCount: 0,
      flaggedPluginCount: 0,
      modelDeprecationWarning: null,
      modelRestrictedWarning: null,
      existingClaudeSubscription: null,
    },
    todos: {},
    replContexts: {},
    notifications: {
      current: null,
      queue: [],
      pinned: [],
    },
    autoUpdaterResult: null,
    frameUrls: {},
    frameNavPath: null,
    frameExpanded: false,
    elicitation: {
      queue: [],
    },
    thinkingEnabled: Ule(),
    promptSuggestionEnabled: bjn(),
    awaySummaryEnabled: Kpt(),
    displayedMessageContent: {},
    sessionHooks: new Map(),
    inbox: {
      messages: [],
    },
    workerSandboxPermissions: {
      queue: [],
      selectedIndex: 0,
    },
    pendingMemoryUpdates: [],
    pendingWorkerRequest: null,
    pendingSandboxRequest: null,
    promptSuggestion: {
      text: null,
      promptId: null,
      shownAt: 0,
      acceptedAt: 0,
      generationRequestId: null,
    },
    speculation: IDLE_SPECULATION_STATE,
    speculationSessionTimeSavedMs: 0,
    authVersion: 0,
    policyVersion: 0,
    initialMessage: null,
    effortValue: void 0,
    ultracode: void 0,
    cacheMissAckedAtOutputTokens: -1,
    activeOverlays: new Set(),
    fastMode: false,
    storedImagePaths: new Map(),
    imageDescriptions: new Map(),
    classifierApprovals: {
      approvals: new Map(),
      checking: new Set(),
    },
    teammateColors: {
      assignments: new Map(),
      index: 0,
    },
    webBrowser: ro(_go).getDefaultWebBrowserState(),
  };
}
var IDLE_SPECULATION_STATE;
