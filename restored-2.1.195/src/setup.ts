// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bdc
// matched 2.1.88 source: src/setup.ts
// class=modified  jaccard=0.3445  score=0.7002  fileCov=0.4041
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: setup, isRemoteCoworkEntrypointExempted, isDesktopEntrypointExempted
// [unwrapped __esm module Bdc] deps: utils/config.ts, utils/debug.ts
((Jcr = require("fs/promises")), ($dc = require("os")), (Odc = require("path")));
async function setup(
  cwd,
  permissionMode,
  allowDangerouslySkipPermissions,
  worktreeEnabled,
  worktreeName,
  tmuxEnabled,
  customSessionId,
  worktreePRNumber,
  messagingSocketPath,
) {
  In("info", "setup_started");
  let c = process.version.match(/^v(\d+)\./)?.[1];
  if (!c || parseInt(c) < 18)
    (console.error(wt.bold.red("Error: Claude Code requires Node.js version 18 or higher.")),
      process.exit(1));
  if (customSessionId) PA(Fb(customSessionId), "startup_custom_id");
  if (!md() || messagingSocketPath !== void 0);
  if (process.env.CLAUDE_BG_BACKEND === "daemon") {
    let { startRendezvousServer: g } = await Promise.resolve().then(() => (Oze(), qQn));
    g();
  }
  if ((await lgo(), !Ir())) {
    if (el()) {
      let g = await Ndc();
      if (g.status === "restored")
        console.log(
          wt.yellow(
            "Detected an interrupted iTerm2 setup. Your original settings have been restored. You may need to restart iTerm2 for the changes to take effect.",
          ),
        );
      else if (g.status === "failed")
        console.error(
          wt.red(
            `Failed to restore iTerm2 settings. Please manually restore your original settings with: defaults import com.googlecode.iterm2 ${g.backupPath}.`,
          ),
        );
    }
    try {
      let g = await kDn();
      if (g.status === "restored")
        console.log(
          wt.yellow(
            "Detected an interrupted Terminal.app setup. Your original settings have been restored. You may need to restart Terminal.app for the changes to take effect.",
          ),
        );
      else if (g.status === "failed")
        console.error(
          wt.red(
            `Failed to restore Terminal.app settings. Please manually restore your original settings with: defaults import com.apple.Terminal ${g.backupPath}.`,
          ),
        );
    } catch (g) {
      ke(g);
    }
  }
  try {
    Uy(cwd);
  } catch (g) {
    (process.stderr.write(
      wt.red(`Error: Can't access working directory ${wt.bold(cwd)}: ${be(g)}
`),
    ),
      sv("setcwd"),
      process.exit(1));
  }
  let u = performance.now();
  if (
    (bNi(),
    Zc("setup_hooks_snapshot_ms", performance.now() - u, u),
    In("info", "setup_hooks_captured", {
      duration_ms: Math.round(performance.now() - u),
    }),
    !da())
  ) {
    let g = performance.now();
    (hca(cwd), Zc("setup_file_watcher_ms", performance.now() - g, g));
  }
  let d = performance.now();
  if (worktreeEnabled) {
    let g = Jte(),
      h = await cb();
    if (!g && !h)
      (process.stderr.write(
        wt.red(`Error: Can only use --worktree in a git repository, but ${wt.bold(cwd)} is not a git repository. Configure a WorktreeCreate hook in settings.json to use --worktree with other VCS systems.
`),
      ),
        process.exit(1));
    let y = worktreePRNumber ? `pr-${worktreePRNumber}` : (worktreeName ?? L$e()),
      b;
    if (h) {
      let S = qf($t());
      if (!S)
        (process.stderr.write(
          wt.red(`Error: Could not determine the main git repository root.
`),
        ),
          process.exit(1));
      if (HRt($t())) (In("info", "worktree_resolved_to_main_repo"), process.chdir(S), Uy(S));
      b = tmuxEnabled ? Vlr(S, VYe(y)) : void 0;
    } else b = tmuxEnabled ? Vlr($t(), VYe(y)) : void 0;
    let _;
    try {
      _ = await xzt(Rt(), y, b, {
        prNumber: worktreePRNumber,
        fromCwd: cwd,
      });
    } catch (S) {
      (process.stderr.write(
        wt.red(`Error creating worktree: ${be(S)}
`),
      ),
        sv("worktree_create"),
        process.exit(1));
    }
    if (
      (G("tengu_worktree_created", {
        tmux_enabled: tmuxEnabled,
      }),
      tmuxEnabled && b)
    ) {
      let S = await Q5o(b, _.worktreePath);
      if (S.created)
        console.log(
          wt.green(`Created tmux session: ${wt.bold(b)}
To attach: ${wt.bold(`tmux attach -t ${b}`)}`),
        );
      else console.error(wt.yellow(`Warning: Failed to create tmux session: ${S.error}`));
    }
    (process.chdir(_.worktreePath),
      Uy(_.worktreePath),
      _D($t()),
      Hge($t()),
      fq(_),
      ak(),
      Rke(),
      Zc("setup_worktree_ms", performance.now() - d, d));
  }
  if ((In("info", "setup_background_jobs_starting"), !md()))
    try {
      Ddc();
    } catch (g) {
      ke(g);
    }
  (D9e(),
    In("info", "setup_background_jobs_launched"),
    pa("setup_before_prefetch"),
    In("info", "setup_prefetch_starting"));
  let p = (Ir() && Oe.CLAUDE_CODE_SYNC_PLUGIN_INSTALL) || md() || Tl();
  if (!p) mA(rc());
  if (
    (Promise.resolve()
      .then(() => (A5e(), Aao))
      .then((g) => {
        if (!p) (g.loadPluginHooks(), g.setupPluginHookHotReload());
      }),
    !md())
  ) {
    if (
      (Promise.resolve()
        .then(() => (JDo(), nCl))
        .then((g) => g.registerSessionFileAccessHooks()),
      !da() && ad())
    )
      Promise.resolve()
        .then(() => (YJn(), KJn))
        .then((g) => g.startMemoryWatcher());
  }
  (cGo(), G("tengu_started", {}), Z9r(Ir()));
  let f = (jo() || {}).proxyAuthHelper;
  if (
    ($Or({
      helper: f,
      fromProjectOrLocal:
        yn("projectSettings")?.proxyAuthHelper === f || yn("localSettings")?.proxyAuthHelper === f,
      trustAccepted: ad,
    }),
    NOr(),
    pa("setup_after_prefetch"),
    !md())
  ) {
    let g = performance.now();
    (await UGl(Dt().lastReleaseNotesSeen), Zc("setup_release_notes_ms", performance.now() - g, g));
  }
  if (permissionMode === "bypassPermissions" || allowDangerouslySkipPermissions) {
    if (
      typeof process.getuid === "function" &&
      process.getuid() === 0 &&
      process.env.IS_SANDBOX !== "1" &&
      !Oe.CLAUDE_CODE_BUBBLEWRAP
    )
      (console.error(
        "--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons",
      ),
        process.exit(1));
  }
  let projectConfig = Lg();
  if (projectConfig.lastCost !== void 0 && projectConfig.lastDuration !== void 0)
    G("tengu_exit", {
      last_session_cost: projectConfig.lastCost,
      last_session_api_duration: projectConfig.lastAPIDuration,
      last_session_tool_duration: projectConfig.lastToolDuration,
      last_session_duration: projectConfig.lastDuration,
      last_session_lines_added: projectConfig.lastLinesAdded,
      last_session_lines_removed: projectConfig.lastLinesRemoved,
      last_session_total_input_tokens: projectConfig.lastTotalInputTokens,
      last_session_total_output_tokens: projectConfig.lastTotalOutputTokens,
      last_session_total_cache_creation_input_tokens:
        projectConfig.lastTotalCacheCreationInputTokens,
      last_session_total_cache_read_input_tokens: projectConfig.lastTotalCacheReadInputTokens,
      last_session_fps_average: projectConfig.lastFpsAverage,
      last_session_fps_low_1_pct: projectConfig.lastFpsLow1Pct,
      last_session_graceful_shutdown: projectConfig.lastGracefulShutdown ?? false,
      last_session_version_base: projectConfig.lastVersionBase ?? "unknown",
      last_session_id: Hr(projectConfig.lastSessionId),
      ...projectConfig.lastSessionMetrics,
    });
}
function isDesktopEntrypointExempted(e) {
  return false;
}
function isRemoteCoworkEntrypointExempted(e) {
  return false;
}
