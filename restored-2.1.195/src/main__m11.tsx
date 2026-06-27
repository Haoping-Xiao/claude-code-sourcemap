// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qtn
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0075  score=0.1149  fileCov=0.0079
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: spawnSpare, runBgSpare, reapOrphanSpares, claimSpare
// [unwrapped __esm module Qtn] deps: utils/sessionIngressAuth.ts, @ant/claude-for-chrome-mcp/src/mcpSocketClient.ts, utils/attachments.ts, utils/settings/mdm/settings.ts, @opentelemetry/resources/build/src/detectors/platform/node/machine-id/execAsync.js, commander/lib/help.js, @mixmark-io/domino/lib/Document.js, @xmldom/xmldom/lib/entities.js, lodash-es/negate.js, services/mcp/auth.ts, lH, commands/mcp/addCommand.ts, services/plugins/pluginCliCommands.ts, commands/remote-env/index.ts, main.tsx, @aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js, utils/caCertsConfig.ts, jwa/index.js, utils/permissions/permissionSetup.ts, @xmldom/xmldom/lib/entities.js, constants/oauth.ts, context.ts, entrypoints/init.ts, utils/Cursor.ts, commands/reload-plugins/reload-plugins.ts, @growthbook/growthbook/dist/esm/core.mjs, services/analytics/growthbook.ts, services/analytics/firstPartyEventLoggingExporter.ts, services/api/firstTokenDate.ts, utils/teleport/gitBundle.ts, components/LogoV2/GuestPassesUpsell.tsx, utils/analyzeContext.ts, utils/permissions/permissionSetup.ts, utils/computerUse/common.ts, bridge/bridgeEnabled.ts, utils/semver.ts, @smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js, commands/bridge/bridge.tsx, tools/SyntheticOutputTool/SyntheticOutputTool.ts, utils/apiPreconnect.ts, utils/managedEnv.ts, cost-tracker.ts, services/PromptSuggestion/promptSuggestion.ts, skills/loadSkillsDir.ts, utils/http.ts, utils/config.ts, Kke, utils/tempfile.ts, tools/FileReadTool/FileReadTool.ts, utils/modelCost.ts, utils/config.ts, utils/permissions/bypassPermissionsKillswitch.ts, utils/messages.ts, utils/platform.ts, utils/log.ts, services/remoteManagedSettings/securityCheck.tsx, main.tsx, utils/plugins/loadPluginAgents.ts, utils/teleport/api.ts, tools/WebFetchTool/prompt.ts, components/Settings/Config.tsx, hooks/useSettingsChange.ts, utils/fsOperations.ts, utils/swarm/teammateInit.ts, utils/permissions/permissionSetup.ts, types/generated/google/protobuf/timestamp.ts, dn, services/analytics/growthbook.ts, utils/debug.ts, bridge/bridgeApi.ts, utils/permissions/permissionSetup.ts, main.tsx, cli/print.ts, services/analytics/index.ts, e7o, utils/sessionStorage.ts, bootstrap/state.ts, ink/terminal.ts, ink/terminal.ts, ink/terminal.ts, components/InvalidSettingsDialog.tsx, services/api/errorUtils.ts, services/mcp/client.ts, Ox, utils/shell/readOnlyCommandValidation.ts, mOc, tools/AgentTool/builtInAgents.ts, tools/AgentTool/loadAgentsDir.ts, tools/AgentTool/loadAgentsDir.ts, tools/SkillTool/prompt.ts, tools/ToolSearchTool/ToolSearchTool.ts, commands/resume/resume.tsx, utils/plugins/zipCacheAdapters.ts, utils/claudeInChrome/common.ts, services/mcp/useManageMCPConnections.ts, utils/claudemd.ts, has-flag/index.js, services/api/filesApi.ts, utils/telemetry/pluginTelemetry.ts, utils/deepLink/registerProtocol.ts, main.tsx, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/exampleCommands.ts, rit, main.tsx, services/analytics/metadata.ts, utils/teleport.tsx, utils/git.ts, commands/remote-setup/api.ts, utils/plugins/loadPluginHooks.ts, utils/settings/constants.ts, utils/sequential.ts, utils/transcriptSearch.ts, commands/model/model.tsx, utils/agentContext.ts, bridge/jwtUtils.ts, utils/status.tsx, main.tsx, utils/permissions/PermissionMode.ts, utils/markdownConfigLoader.ts, utils/permissions/permissionSetup.ts, utils/permissions/PermissionUpdate.ts, utils/task/sdkProgress.ts, services/lsp/config.ts, utils/settings/pluginOnlyPolicy.ts, utils/plugins/lspPluginIntegration.ts, tools/SkillTool/prompt.ts, main.tsx, commands/plugin/ManagePlugins.tsx, utils/ripgrep.ts, utils/plans.ts, state/AppState.tsx, @anthropic-ai/sandbox-runtime/dist/utils/debug.js, cli/print.ts, utils/settings/mdm/settings.ts, utils/settings/settings.ts, utils/settings/settings.ts, Sx, @growthbook/growthbook/dist/esm/mongrule.mjs, utils/telemetry/skillLoadedEvent.ts, utils/plugins/addDirPluginSettings.ts, LOc, utils/sessionUrl.ts, main.tsx, utils/sessionStorage.ts, services/mcp/config.ts, services/mcp/utils.ts, components/MCPServerDialogCopy.tsx, services/tips/tipRegistry.ts, cli/print.ts, utils/api.ts, utils/debugFilter.ts, state/AppStateStore.ts, utils/computerUse/gates.ts, utils/concurrentSessions.ts, utils/fsOperations.ts, utils/debug.ts, utils/errors.ts, utils/gracefulShutdown.ts, utils/hooks/AsyncHookRegistry.ts, utils/model/modelCapabilities.ts, utils/context.ts, services/api/errors.ts, utils/stringUtils.ts, utils/Shell.ts, cli/print.ts, services/teamMemorySync/secretScanner.ts, services/vcr.ts, migrations/migrateSonnet45ToSonnet46.ts, services/analytics/index.ts, migrations/migrateAutoUpdatesToSettings.ts, migrations/migrateBypassPermissionsAcceptedToSettings.ts, migrations/migrateEnableAllProjectMcpServersToSettings.ts, migrations/migrateLegacyOpusToCurrent.ts, @opentelemetry/otlp-transformer/build/src/common/internal.js, migrations/migrateOpusToOpus1m.ts, components/BridgeDialog.tsx, migrations/migrateSonnet1mToSonnet45.ts, migrations/migrateSonnet45ToSonnet46.ts, memdir/paths.ts, migrations/resetAutoModeOptInForDefaultOffer.ts, migrations/resetProToOpusDefault.ts, main.tsx, d1c, utils/sessionState.ts, utils/swarm/backends/teammateModeSnapshot.ts, utils/nativeInstaller/installer.ts, services/PromptSuggestion/promptSuggestion.ts, tools/BashTool/sedValidation.ts, commands/install.tsx, components/Settings/Config.tsx, google-auth-library/build/src/crypto/node/crypto.js, utils/betas.ts, utils/git/gitConfigParser.ts, utils/permissions/permissionSetup.ts, @anthropic-ai/bedrock-sdk/client.mjs, utils/plugins/loadPluginAgents.ts, H4n, commands/release-notes/release-notes.ts, utils/bash/bashParser.ts, bmr, utils/teleport/api.ts, b8n, utils/background/remote/preconditions.ts, utils/heapDumpService.ts, tasks/RemoteAgentTask/RemoteAgentTask.tsx, utils/thinking.ts, utils/user.ts, constants/prompts.ts
((z5c = require("crypto")), (PZo = require("fs")), (fve = require("path")));
process.env.NoDefaultCurrentDirectoryInExePath = "1";
pa("main_tsx_entry");
Zc("node_boot_ms", process.uptime() * 1000, 0);
oZa();
ALr();
Ajr();
((MZo = (l$(), ro(qW))), (G5c = (Eoe(), ro(Ope))));
pa("main_tsx_imports_loaded");
if (I1m()) process.exit(1);
async function run(e) {
  let t = e[0];
  if (!t)
    (process.stderr.write(`[bg-spare] missing claim sock path
`),
      process.exit(2));
  let n = await j1m(),
    r = Promise.resolve().then(() => (Qtn(), phr)),
    o = () => {
      try {
        Y5c.unlinkSync(t);
      } catch {}
    },
    s = () => {
      (o(), process.exit(0));
    },
    i = (d) => {
      (o(),
        process.stderr.write(`[bg-spare] uncaughtException: ${be(d)}
`),
        sv("spare_uncaught"),
        process.exit(1));
    },
    a = process.ppid,
    l = setInterval(
      (d, p) => {
        if (process.ppid !== d) (p(), process.exit(0));
      },
      2000,
      a,
      o,
    );
  l.unref();
  for (let d of ["SIGTERM", "SIGHUP", "SIGINT"]) process.on(d, s);
  process.on("uncaughtException", i);
  let c = () => {
      clearInterval(l);
      for (let d of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(d, s);
      process.off("uncaughtException", i);
    },
    u;
  try {
    u = await Pcr(t, void 0, n);
  } catch (d) {
    (o(),
      process.stderr.write(`[bg-spare] claim recv failed: ${be(d)}
`),
      sv("spare_claim_recv"),
      process.exit(1));
  }
  c();
  try {
    (await r, await Mcr(u, r));
  } catch (d) {
    let p = xd(d) ?? BK(d) ?? "Error";
    throw (
      sv("spare_postclaim:" + p, u.env.CLAUDE_JOB_DIR),
      process.stderr.write(`[bg-spare] post-claim init failed: ${be(d)}
`),
      d
    );
  }
}
async function j1m() {
  let e = Oe.CLAUDE_BG_CLAIM_AUTH;
  delete process.env.CLAUDE_BG_CLAIM_AUTH;
  let t = Oe.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if ((delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, !t)) return e;
  let n = await SSt(t);
  if ((await XP.unlink(t).catch(() => {}), !n?.claimAuth))
    T("[bg-spare] tokens file unreadable; claim gate degraded", {
      level: "warn",
    });
  return n?.claimAuth ?? e;
}
async function spawnSpare(e) {
  if (Vt() === "windows") return null;
  return yl("daemon_bg_spare_refill", async () => {
    let t = fhr.randomBytes(4).toString("hex"),
      n = ANl(t),
      r = HNl(t),
      o = fhr.randomBytes(16).toString("hex"),
      s = fhr.randomBytes(16).toString("hex");
    await XP.mkdir(YQ(), {
      recursive: true,
      mode: 448,
    }).catch(() => {});
    let i = await s9o(`spare-${t}`, {
      ptyAuth: o,
      claimAuth: s,
    });
    (await XP.unlink(n).catch(() => {}), await XP.unlink(r).catch(() => {}));
    let [a, ...l] = z1m(),
      c = await XP.open(GL(n), "w").catch(() => null),
      u;
    try {
      ((u = Bun.spawn([a, ...l, "--bg-pty-host", n, "200", "50", "--", a, ...l, "--bg-spare", r], {
        cwd: YQ(),
        env: G1m(
          i
            ? {
                tokensPath: i,
              }
            : {
                ptyAuth: o,
                claimAuth: s,
              },
        ),
        stdio: ["ignore", "ignore", c?.fd ?? "ignore"],
        detached: true,
        windowsHide: true,
      })),
        u.unref());
    } catch (p) {
      if (i) XP.unlink(i).catch(() => {});
      throw p;
    } finally {
      await c?.close().catch(() => {});
    }
    let d = {
      hostPid: u.pid,
      ptySock: n,
      claimSock: r,
      ptyAuth: o,
      claimAuth: s,
      startedAt: Date.now(),
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      dispose() {
        try {
          u.kill("SIGTERM");
        } catch {}
      },
    };
    return (
      u.exited.then(async () => {
        if ((XP.unlink(n).catch(() => {}), XP.unlink(r).catch(() => {}), i))
          XP.unlink(i).catch(() => {});
        let p = ((await nR(GL(n), 1048576)) ?? "").slice(0, 2000).trim();
        if (p.length > 0)
          T(
            `bg spare host pid=${u.pid} exit stderr:
${p}`,
            {
              level: "warn",
            },
          );
        (XP.unlink(GL(n)).catch(() => {}), XP.unlink(DP(n)).catch(() => {}), e.onExit());
      }),
      e.log(`bg spare spawned host pid=${u.pid}`),
      d
    );
  });
}
function G1m(e) {
  let t = {
    ...process.env,
  };
  for (let n of i9o) delete t[n];
  if (l9o(t)) {
    let n = t.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
    if (n) delete t[n];
    for (let r of FUt) delete t[r];
  } else if (t.ANTHROPIC_BASE_URL) delete t.ANTHROPIC_AUTH_TOKEN;
  for (let n of a9o) delete t[n];
  for (let n of Object.keys(t)) if (jUt.some((r) => n.startsWith(r))) delete t[n];
  if (Vt() === "macos") delete t.CLAUDE_CODE_OAUTH_TOKEN;
  return (
    Object.assign(t, {
      CLAUDE_CODE_SESSION_KIND: "bg",
      CLAUDE_BG_BACKEND: "daemon",
      CLAUDE_ENABLE_STREAM_WATCHDOG: "1",
      FORCE_COLOR: "3",
      COLORTERM: "truecolor",
      BROWSER: "true",
      ...("tokensPath" in e
        ? {
            CLAUDE_BG_SOCKET_TOKENS_PATH: e.tokensPath,
          }
        : {
            CLAUDE_BG_PTY_AUTH: e.ptyAuth,
            CLAUDE_BG_CLAIM_AUTH: e.claimAuth,
          }),
    }),
    t
  );
}
function claimSpare(e, t, n, r) {
  let o = Oz.claim(e, {
    pid: t.hostPid,
    ptySockPath: t.ptySock,
    spawnPty: n,
    getAuthSnapshot: r,
    ptyAuth: t.ptyAuth,
  });
  return (
    o9o(e.short, r?.())
      .then((s) => q1m(t.claimSock, W1m(e, s, o.socketAuth(), t.claimAuth)))
      .catch((s) => {
        (G("tengu_bg_sendclaim_failed", {
          short: e.short,
          errno: xd(s),
          error: be(s).slice(0, 100),
        }),
          T(`[bg-spare] send-claim failed: ${be(s)}`, {
            level: "warn",
          }));
        let i = ghr.connect(t.ptySock);
        (i.on("error", () => {}),
          i.once("connect", () => {
            (i.write(
              UL({
                t: "kill",
                sig: "SIGTERM",
              }),
            ),
              i.end());
          }));
      }),
    o
  );
}
function W1m(e, t, n, r) {
  let { env: o, argv: s } = Oz.buildClaimFrame(e, t, n);
  return {
    cwd: e.cwd,
    env: o,
    argv: s,
    sessionId: e.sessionId,
    auth: r,
  };
}
async function q1m(e, t) {
  let n = Date.now(),
    r = 5000;
  for (let o = 0; ; o++) {
    if (Date.now() - n > 5000) throw Error("send-claim timeout");
    try {
      await V1m(e, t);
      return;
    } catch (s) {
      let i = on(s);
      if (!(i === "ENOENT" || i === "ECONNREFUSED") || o >= K5c.length) throw s;
      await Nn(K5c[o] ?? 500);
    }
  }
}
function V1m(e, t) {
  return new Promise((n, r) => {
    let o = ghr.connect(e);
    (o.once("error", r),
      o.once("connect", () => {
        o.end(
          De(t) +
            `
`,
          () => n(),
        );
      }));
  });
}
async function reapOrphanSpares(e, t) {
  if (Vt() === "windows") return;
  let n = new Set();
  for (let s of e.values()) {
    let i = s.rosterEntry().ptySock;
    if (i) n.add(i);
  }
  let r = await XP.readdir(YQ()).catch(() => []),
    o = 0;
  for (let s of r) {
    if (!s.endsWith(".pty.sock")) continue;
    let i = mhr.join(YQ(), s);
    if (n.has(i)) continue;
    o++;
    let a = ghr.connect(i);
    (a.on("error", () => {
      XP.unlink(i).catch(() => {});
    }),
      a.once("connect", () => {
        (a.resume(),
          a.write(
            UL({
              t: "kill",
              sig: "SIGTERM",
            }),
          ),
          a.end(),
          setTimeout((l) => l.destroy(), 2000, a).unref());
      }));
  }
  for (let s of r) {
    let i = [".err", ".late"].find((a) => s.endsWith(`.pty.sock${a}`));
    if (i) {
      let a = s.slice(0, -i.length);
      if (!r.includes(a)) XP.unlink(mhr.join(YQ(), s)).catch(() => {});
    }
    if (s.endsWith(".claim.sock")) XP.unlink(mhr.join(YQ(), s)).catch(() => {});
  }
  if (o) t(`bg orphan-spare reap: ${o}`);
}
function z1m() {
  return dm() ? [process.execPath] : [process.execPath, process.argv[1]];
}
var fhr, Y5c, XP, ghr, mhr, K5c;
