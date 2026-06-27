// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module er
// matched 2.1.88 source: src/utils/config.ts
// class=modified (alt of src/utils/config.ts)  jaccard=0.1516  score=0.5453  fileCov=0.1735
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: trackDatadogEvent, shutdownDatadog, resetDatadogInit, initializeDatadog, DATADOG_LOGS_ENDPOINT, DATADOG_CLIENT_TOKEN
// [unwrapped __esm module er] deps: Qi, ghe, ft, Uh, kt, Xzr, Lo, fd, Ld, je, Mm, wr, fn, At, oc, ys, sa, Rd, Hu, qd, W0r, hY, Sx, T3e, Jt, BRt
((FVo = require("crypto")),
  (Ucc = require("fs")),
  (HS = require("path")),
  (asm = (lH(), ro(Rkn))),
  ($Vo = new Set()),
  (JYe = {
    allowedTools: [],
    mcpContextUris: [],
    mcpServers: {},
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    hasTrustDialogAccepted: false,
    projectOnboardingSeenCount: 0,
    hasClaudeMdExternalIncludesApproved: false,
    hasClaudeMdExternalIncludesWarningShown: false,
  }));
((I7 = Cme()),
  (wcr = [
    "apiKeyHelper",
    "installMethod",
    "autoUpdates",
    "autoUpdatesProtectedForNative",
    "theme",
    "verbose",
    "preferredNotifChannel",
    "shiftEnterKeyBindingInstalled",
    "editorMode",
    "hasUsedBackslashReturn",
    "autoCompactEnabled",
    "autoScrollEnabled",
    "showTurnDuration",
    "externalEditorContext",
    "showMessageTimestamps",
    "diffTool",
    "env",
    "tipsHistory",
    "todoFeatureEnabled",
    "showExpandedTodos",
    "briefTranscript",
    "diffSidebarOpen",
    "messageIdleNotifThresholdMs",
    "autoConnectIde",
    "autoInstallIdeExtension",
    "fileCheckpointingEnabled",
    "terminalProgressBarEnabled",
    "showStatusInTerminalTab",
    "taskCompleteNotifEnabled",
    "inputNeededNotifEnabled",
    "agentPushNotifEnabled",
    "respectGitignore",
    "claudeInChromeDefaultEnabled",
    "hasCompletedClaudeInChromeOnboarding",
    "lspRecommendationDisabled",
    "lspRecommendationNeverPlugins",
    "lspRecommendationIgnoredCount",
    "copyFullResponse",
    "copyOnSelect",
    "leftArrowOpensAgents",
    "defaultToAgentsView",
    "permissionExplainerEnabled",
    "prStatusFooterEnabled",
    "remoteControlAtStartup",
    "autoUploadSessions",
    "autoAddRemoteControlDaemonWorker",
    "remoteDialogSeen",
  ]));
Fcc = ["allowedTools", "hasTrustDialogAccepted", "hasCompletedProjectOnboarding"];
((dsm = {
  ...I7,
  autoUpdates: false,
}),
  (LoA = {
    ...JYe,
  }));
p2 = {
  config: null,
  mtime: 0,
};
Ci(async () => {
  fsm();
});
Ime = Cn(() => {
  let e = yr(),
    t = qf(e);
  if (t) return t9(t);
  return t9(HS.resolve(e));
});
((ysm = oTt), (_sm = sTt), (bsm = kZt), (Ssm = CZt), (Esm = UVo));
((Hsm = NVo), (Tsm = dsm));
r1i(() => x0());
var CWt = {};
function Wcc(e) {
  return e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`);
}
async function zVo() {
  if (LZt.length === 0) return;
  let e = LZt;
  LZt = [];
  try {
    await lb.post(DATADOG_LOGS_ENDPOINT, e, {
      headers: {
        "Content-Type": "application/json",
        "DD-API-KEY": DATADOG_CLIENT_TOKEN,
      },
      timeout: Ism,
    });
  } catch (t) {
    T(`Failed to flush logs to Datadog: ${t}`, {
      level: "error",
    });
  }
}
function Rsm() {
  if (ITe) return;
  ITe = setTimeout(() => {
    ((ITe = null), zVo());
  }, Psm()).unref();
}
function resetDatadogInit() {
  (initializeDatadog.cache?.clear?.(), (DZt = null));
}
async function shutdownDatadog() {
  if (ITe) (clearTimeout(ITe), (ITe = null));
  await zVo();
}
async function trackDatadogEvent(e, t) {
  if (fr() !== "firstParty") return;
  let n = DZt;
  if (n === null) n = await initializeDatadog();
  if (!n || !xsm.has(e)) return;
  try {
    let r = await mkn({
        model: t.model,
        betas: t.betas,
      }),
      { envContext: o, ...s } = r,
      i = {
        ...s,
        ...o,
        ...t,
        userBucket: Dsm(),
      };
    if (typeof i.toolName === "string" && i.toolName.startsWith("mcp__")) i.toolName = "mcp";
    if (typeof i.model === "string") {
      if (!i.model.toLowerCase().includes("claude")) return;
      let d = mo(ya(i.model));
      i.model = d in Z2e ? d : "other";
    }
    if (typeof i.version === "string")
      i.version = i.version.replace(/^(\d+\.\d+\.\d+-dev\.\d{8})\.t\d+\.sha[a-f0-9]+$/, "$1");
    if (i.status !== void 0 && i.status !== null) {
      let d = String(i.status);
      i.http_status = d;
      let p = d.charAt(0);
      if (p >= "1" && p <= "5") i.http_status_range = `${p}xx`;
      delete i.status;
    }
    let l = i,
      u = {
        ddsource: "nodejs",
        ddtags: [
          `event:${e}`,
          ...ksm.filter((d) => l[d] !== void 0 && l[d] !== null).map((d) => `${Wcc(d)}:${l[d]}`),
        ].join(","),
        message: e,
        service: "claude-code",
        hostname: "claude-code",
        env: "external",
      };
    for (let [d, p] of Object.entries(i)) if (p !== void 0 && p !== null) u[Wcc(d)] = p;
    if ((LZt.push(u), LZt.length >= Csm)) {
      if (ITe) (clearTimeout(ITe), (ITe = null));
      zVo();
    } else Rsm();
  } catch (r) {
    ke(r);
  }
}
function Psm() {
  return parseInt(process.env.CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS || "", 10) || wsm;
}
var qcc,
  DATADOG_LOGS_ENDPOINT = "https://http-intake.logs.us5.datadoghq.com/api/v2/logs",
  DATADOG_CLIENT_TOKEN = "pubea5604404508cdd34afb69e6f42a05bc",
  wsm = 15000,
  Csm = 100,
  Ism = 5000,
  xsm,
  ksm,
  LZt,
  ITe = null,
  DZt = null,
  initializeDatadog,
  Lsm = 30,
  Dsm;
