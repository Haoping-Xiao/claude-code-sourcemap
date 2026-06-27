// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dqc
// matched 2.1.88 source: src/entrypoints/cli.tsx
// class=modified  jaccard=0.2421  score=0.4629  fileCov=0.3366
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Dqc]
LNm = new Set(["update", "upgrade"]);
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
con();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let e = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = e ? `${e} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
function Pqc(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (
      n === "--debug" ||
      n === "-d" ||
      n === "--debug-to-stderr" ||
      n === "-d2e" ||
      n.startsWith("--debug=") ||
      n.startsWith("--debug-file=")
    )
      continue;
    if (n === "--debug-file" && t + 1 < e.length) {
      t++;
      continue;
    }
    return false;
  }
  return true;
}
function DNm(e) {
  let t,
    n,
    r,
    o,
    s,
    i = [];
  for (let a = 0; a < e.length; a++) {
    let l = e[a],
      c = l.indexOf("="),
      [u, d] = c > 0 ? [l.slice(0, c), l.slice(c + 1)] : [l, void 0],
      p = d !== void 0 || a + 1 < e.length;
    if (u === "--dangerously-skip-permissions") t = "bypassPermissions";
    else if (u === "--allow-dangerously-skip-permissions") s = true;
    else if (u === "--permission-mode" && p) t = d ?? e[++a];
    else if (u === "--model" && p) n = d ?? e[++a];
    else if (u === "--effort" && p) r = d ?? e[++a];
    else if (u === "--agent" && p) o = d ?? e[++a];
    else i.push(l);
  }
  return {
    dispatchDefaults:
      t || n || r || o || s
        ? {
            permissionMode: t,
            model: n,
            effort: r,
            agent: o,
            allowBypass: s,
          }
        : void 0,
    rest: i,
  };
}
async function PNm() {
  let e = lon(process.argv);
  if (e) (console.error(e), process.exit(1));
  let t = process.argv.slice(2);
  if (
    (t.length === 1 || (t.length === 2 && t[1] === "--verbose")) &&
    (t[0] === "--version" || t[0] === "-v" || t[0] === "-V")
  ) {
    if (
      (console.log(
        `${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        } (Claude Code)${L2()}`,
      ),
      t.length === 2 &&
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.GIT_SHA)
    )
      console.log(
        `Commit: ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.GIT_SHA
        }`,
      );
    return;
  }
  let { profileCheckpoint: n } = await Promise.resolve().then(() => (sG(), jis));
  if ((n("cli_entry"), process.argv[2] === "--claude-in-chrome-mcp")) {
    n("cli_claude_in_chrome_mcp_path");
    let { runClaudeInChromeMcpServer: f } = await Promise.resolve().then(() => (Ofo(), $fo));
    await f();
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    n("cli_chrome_native_host_path");
    let { runChromeNativeHost: f } = await Promise.resolve().then(() => (ruc(), nuc));
    await f();
    return;
  } else if (process.argv[2] === "--computer-use-mcp") {
    n("cli_computer_use_mcp_path");
    let { runComputerUseMcpServer: f } = await Promise.resolve().then(() => (Hfo(), Afo));
    await f();
    return;
  }
  if (t[0] === "--daemon-worker") {
    let { loadFastPathPolicy: f } = await Promise.resolve().then(() => (kme(), kTe)),
      m = await f();
    if (m)
      process.stderr.write(`${m}
`);
    let { runDaemonWorker: g } = await Promise.resolve().then(() => (sQt(), Ltc));
    await g(t[1]);
    return;
  }
  if (t[0] === "--bg-pty-host") {
    let { ensureFastPathSettingsLoaded: f } = await Promise.resolve().then(() => (kme(), kTe));
    await f();
    let { runPtyHost: m } = await Promise.resolve().then(() => (muc(), fuc));
    await m(t.slice(1));
    return;
  }
  if (t[0] === "--bg-spare") {
    let { ensureFastPathSettingsLoaded: f } = await Promise.resolve().then(() => (kme(), kTe));
    await f();
    let { runBgSpare: m } = await Promise.resolve().then(() => (BZo(), X5c));
    await m(t.slice(1));
    return;
  }
  if (t[0] === "--preload") {
    let { ensureFastPathSettingsLoaded: f } = await Promise.resolve().then(() => (kme(), kTe));
    await f();
    let { runPreload: m } = await Promise.resolve().then(() => (tqc(), eqc));
    await m(t.slice(1));
    return;
  }
  if (
    t[0] === "remote-control" ||
    t[0] === "rc" ||
    t[0] === "remote" ||
    t[0] === "sync" ||
    t[0] === "bridge"
  ) {
    n("cli_bridge_path");
    let { loadFastPathPolicy: f } = await Promise.resolve().then(() => (kme(), kTe));
    {
      let $ = await f();
      if ($) {
        let { exitWithError: q } = await Promise.resolve().then(() => (ED(), bUe));
        q($);
      }
    }
    let {
        getBridgeDisabledReason: m,
        checkBridgeMinVersion: g,
        getBridgeAuthDebugInfo: h,
      } = await Promise.resolve().then(() => (SC(), Hcr)),
      { BRIDGE_LOGIN_ERROR: y } = await Promise.resolve().then(() => osl),
      { bridgeMain: b } = await Promise.resolve().then(() => (Yir(), Kir)),
      { exitWithError: _ } = await Promise.resolve().then(() => (ED(), bUe)),
      { getSettingsWithErrors: S } = await Promise.resolve().then(() => (dr(), EY));
    if (S().settings.disableRemoteControl === true)
      _(
        "Error: Remote Control is disabled by your organization's policy (managed setting `disableRemoteControl`).",
      );
    let { hasStoredOAuthToken: A } = await Promise.resolve().then(() => (oo(), pU));
    if (!A()) _(y + h());
    let v = await m();
    if (v) _(`Error: ${v}` + h());
    let C = g();
    if (C) _(C);
    let { waitForPolicyLimitsToLoad: x } = await Promise.resolve().then(() => (_F(), bWt)),
      { isPolicyAllowed: I } = await Promise.resolve().then(() => (jc(), SNt));
    if ((await x(), !I("allow_remote_control")))
      _("Error: Remote Control is disabled by your organization's policy.");
    let [
      { initSinks: k },
      { initialize1PEventLogging: D, shutdown1PEventLogging: P },
      { shutdownDatadog: O },
      { sleep: L },
    ] = await Promise.all([
      Promise.resolve().then(() => (wYe(), bHt)),
      Promise.resolve().then(() => (y1(), E3e)),
      Promise.resolve().then(() => (k7(), CWt)),
      Promise.resolve().then(() => iMt),
    ]);
    (k(), D());
    let { getTrustedDeviceUnenrolledReason: M, enrollTrustedDeviceIfNeeded: N } =
      await Promise.resolve().then(() => (SJ(), Qjn));
    await N();
    let B = await M();
    if (B)
      (await Promise.race([
        Promise.all([P(), O()]),
        L(500, void 0, {
          unref: true,
        }),
      ]).catch(() => {}),
        _(`Error: ${B}`));
    await b(t.slice(1));
    return;
  }
  if (t[0] === "daemon") {
    n("cli_daemon_path");
    let { ensureFastPathSettingsLoaded: f } = await Promise.resolve().then(() => (kme(), kTe));
    await f();
    let { initSinks: m } = await Promise.resolve().then(() => (wYe(), bHt));
    m();
    let { daemonMain: g } = await Promise.resolve().then(() => (Rqc(), kqc));
    await g(t.slice(1));
    return;
  }
  if (
    t[0] === "logs" ||
    t[0] === "attach" ||
    t[0] === "stop" ||
    t[0] === "kill" ||
    t[0] === "respawn" ||
    t[0] === "rm" ||
    t.includes("--bg") ||
    t.includes("--background")
  ) {
    n("cli_bg_path");
    let { loadFastPathPolicy: f } = await Promise.resolve().then(() => (kme(), kTe));
    {
      let h = await f(),
        y = ["logs", "stop", "kill", "rm"].includes(t[0] ?? "");
      if (h)
        if (y)
          process.stderr.write(`${h}
`);
        else {
          let { exitWithError: b } = await Promise.resolve().then(() => (ED(), bUe));
          b(h);
        }
    }
    let m = await Promise.resolve().then(() => (lH(), Rkn));
    if ((await m.ensureFleetGateHydrated(), !m.isAgentsFleetEnabled())) {
      let h = t[0],
        y =
          h !== void 0 && ["logs", "attach", "stop", "kill", "respawn", "rm"].includes(h)
            ? h
            : (t.find(
                (b) =>
                  b === "--bg" ||
                  b === "--background" ||
                  b === "--routine" ||
                  b.startsWith("--routine="),
              ) ?? "--bg");
      return m.fleetGateRejected(y);
    }
    let g = await Promise.resolve().then(() => (LQt(), ooc));
    switch (t[0]) {
      case "logs":
      case "attach":
      case "stop":
      case "kill":
      case "respawn":
      case "rm": {
        let [
          { initializeAnalyticsSink: h },
          { initialize1PEventLogging: y, shutdown1PEventLogging: b },
          { shutdownDatadog: _ },
          { sleep: S },
        ] = await Promise.all([
          Promise.resolve().then(() => (ZSe(), dpt)),
          Promise.resolve().then(() => (y1(), E3e)),
          Promise.resolve().then(() => (k7(), CWt)),
          Promise.resolve().then(() => iMt),
        ]);
        if ((h(), y(), t[0] === "logs")) await g.logsHandler(t[1]);
        else if (t[0] === "attach") await g.attachHandler(t[1]);
        else if (t[0] === "respawn") await g.respawnHandler(t[1]);
        else if (t[0] === "rm") await g.rmHandler(t[1]);
        else await g.stopHandler(t[1]);
        return (
          await Promise.race([
            Promise.all([b(), _()]),
            S(500, void 0, {
              unref: true,
            }),
          ]).catch(() => {}),
          process.exit(process.exitCode ?? 0)
        );
      }
      default: {
        let [
          { initializeAnalyticsSink: h },
          { initialize1PEventLogging: y, shutdown1PEventLogging: b },
          { shutdownDatadog: _ },
          { logEvent: S },
          { sleep: A },
        ] = await Promise.all([
          Promise.resolve().then(() => (ZSe(), dpt)),
          Promise.resolve().then(() => (y1(), E3e)),
          Promise.resolve().then(() => (k7(), CWt)),
          Promise.resolve().then(() => (kt(), jCt)),
          Promise.resolve().then(() => iMt),
        ]);
        (h(),
          y(),
          S("tengu_background", {
            via_flag: true,
            via: We("flag"),
          }),
          await g.handleBgFlag(t),
          await Promise.race([
            Promise.all([b(), _()]),
            A(500, void 0, {
              unref: true,
            }),
          ]).catch(() => {}),
          process.exit(process.exitCode ?? 0));
      }
    }
    return;
  }
  let r = aon(t),
    { dispatchDefaults: o, rest: s } = DNm(r.rest),
    i = r.hasAgentsPositional && Pqc(s);
  if ((i || (Pqc(t) && process.stdin.isTTY)) && process.stdout.isTTY) {
    let { startCapturingEarlyInput: f, consumeEarlyInput: m } = await Promise.resolve().then(
      () => (Kke(), h7r),
    );
    f();
    let { enableConfigs: g, getGlobalConfig: h } = await Promise.resolve().then(() => (er(), NQ)),
      y = false,
      b = false;
    try {
      (g(), (b = h().defaultToAgentsView === true), (y = i || b));
    } catch {}
    if (y) {
      if (r.config.settings) {
        let { loadSettingsFromFlag: I } = await Promise.resolve().then(() => (A7o(), HOc));
        I(r.config.settings);
      }
      if (r.config.pluginDir.length > 0 || r.config.pluginDirNoMcp.length > 0) {
        let [{ setInlinePlugins: I, setInlinePluginsNoMcp: k }, { clearPluginCache: D }] =
          await Promise.all([
            Promise.resolve().then(() => (ft(), twe)),
            Promise.resolve().then(() => (Xh(), uLl)),
          ]);
        (I(r.config.pluginDir), k(r.config.pluginDirNoMcp), D("claude agents --plugin-dir"));
      }
      let { loadFastPathPolicy: _ } = await Promise.resolve().then(() => (kme(), kTe)),
        S = await _();
      if (S) {
        let { exitWithError: I } = await Promise.resolve().then(() => (ED(), bUe));
        I(S);
      }
      {
        let { areSideloadFlagsDisabledByPolicy: I, sideloadFlagsBlockedMessage: k } =
          await Promise.resolve().then(() => (WI(), nPa));
        if (I()) {
          let D = [];
          if (r.config.pluginDir.length > 0) D.push("--plugin-dir");
          if (r.config.pluginDirNoMcp.length > 0) D.push("--plugin-dir-no-mcp");
          if (D.length > 0) {
            let { exitWithError: P } = await Promise.resolve().then(() => (ED(), bUe));
            P(k(D));
          }
        }
      }
      let {
        isAgentsFleetEnabled: A,
        ensureFleetGateHydrated: v,
        fleetGateRejected: C,
        consumeAgentViewRelaunchMarker: x,
      } = await Promise.resolve().then(() => (lH(), Rkn));
      if (
        (await v({
          kickGrowthBook: false,
        }),
        A())
      ) {
        let [
            { applyFleetViewHostWindowsEnv: I },
            { createRoot: k },
            { getBaseRenderOptions: D },
            { resolve: P },
            { setIsInteractive: O, setSessionStartType: L },
          ] = await Promise.all([
            Promise.resolve().then(() => (tvt(), _tn)),
            Promise.resolve().then(() => (Ye(), wW)),
            Promise.resolve().then(() => (Gre(), I4n)),
            import("path"),
            Promise.resolve().then(() => (ft(), twe)),
          ]),
          M = x();
        (O(true), L("agents_view"));
        let N = () => {};
        process.on("unhandledRejection", N);
        let B = Promise.resolve();
        (setImmediate(() => {
          ((B = Promise.all([
            Promise.resolve().then(() => (Yp(), kWt)),
            Promise.resolve().then(() => (VJt(), kir)),
            Promise.resolve().then(() => (ZSe(), dpt)),
            Promise.resolve().then(() => (y1(), E3e)),
            Promise.resolve().then(() => (kt(), jCt)),
            Promise.resolve().then(() => (sA(), VMa)),
            Promise.resolve().then(() => (Un(), Kzr)),
            Promise.resolve().then(() => (cur(), wfc)),
            Promise.resolve().then(() => (er(), NQ)),
            Promise.resolve().then(() => (OMe(), csl)),
          ])
            .then(
              ([
                { setupGracefulShutdown: V },
                { initializeErrorLogSink: Y },
                { initializeAnalyticsSink: z },
                { initialize1PEventLogging: K },
                { logEvent: Z },
                { captureTeammateModeSnapshotIfEnabled: J },
                { initializeGrowthBook: ne },
                { initializeTelemetryAfterTrust: oe },
                { checkHasTrustDialogAccepted: re },
                { applyConfigEnvironmentVariables: ee },
              ]) => {
                if ((V(), ne().catch(() => {}), Y(), z(), K(), re())) (ee(), oe());
                return (
                  Z("tengu_fleetview", {
                    defaultToAgentsView: b,
                    relaunch: M,
                  }),
                  J()
                );
              },
            )
            .finally(() => process.off("unhandledRejection", N))),
            Promise.resolve()
              .then(() => (Ken(), rpr))
              .then((V) => V.startBackgroundHousekeeping()));
        }),
          m(),
          I());
        let $ = await k(D(false)),
          q = {
            cwdFilter: r.cwdFilter,
            dispatchExtraArgs: OXe($Xe(r.config, P)),
            dispatchDefaults: o,
          };
        {
          let { mountFleetViewWithComposerBack: V } = await Promise.resolve().then(
            () => (vtn(), Ttn),
          );
          await V($, q);
        }
        await B.catch(() => {});
        let { gracefulShutdown: W } = await Promise.resolve().then(() => (Yp(), kWt));
        await W(0, "other", {
          suppressResumeHint: true,
        });
        return;
      }
      if (i) return C("claude agents");
    }
  }
  if (
    (t.includes("--tmux") || t.includes("--tmux=classic")) &&
    (t.includes("-w") || t.includes("--worktree") || t.some((f) => f.startsWith("--worktree=")))
  ) {
    n("cli_tmux_worktree_fast_path");
    let { enableConfigs: f } = await Promise.resolve().then(() => (er(), NQ));
    f();
    let { isWorktreeModeEnabled: m } = await Promise.resolve().then(() => Zbl);
    if (m()) {
      let { execIntoTmuxWorktree: g } = await Promise.resolve().then(() => (aR(), lac)),
        h = await g(t);
      if (h.handled) return;
      if (h.error) {
        let { exitWithError: y } = await Promise.resolve().then(() => (ED(), bUe));
        y(h.error);
      }
    }
  }
  if (t.length === 1 && (t[0] === "--update" || t[0] === "--upgrade"))
    process.argv = [process.argv[0], process.argv[1], "update"];
  let l = t.indexOf("--");
  if ((l === -1 ? t : t.slice(0, l)).includes("--bare")) process.env.CLAUDE_CODE_SIMPLE = "1";
  let { NON_REPL_SUBCOMMANDS: c } = await Promise.resolve().then(() => (Dqc(), Lqc));
  if (!c.has(process.argv[2] ?? "")) {
    let { startCapturingEarlyInput: f } = await Promise.resolve().then(() => (Kke(), h7r));
    f();
  }
  let [{ startMdmRawRead: u }, { startKeychainPrefetch: d }] = await Promise.all([
    Promise.resolve().then(() => (ymn(), Qws)),
    Promise.resolve().then(() => (urt(), Ksi)),
  ]);
  (u(), d(), n("cli_before_main_import"));
  let { main: p } = await Promise.resolve().then(() => (Qtn(), phr));
  (n("cli_after_main_import"), await p(), n("cli_after_main_complete"));
}
PNm();
