// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A0o
// matched 2.1.88 source: src/utils/swarm/backends/PaneBackendExecutor.ts
// class=modified  jaccard=0.411  score=0.5055  fileCov=0.6872
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module A0o] deps: C7n, ft, Cp, NDe, hN
yff = [
  "CLAUDE_CODE_USE_BEDROCK",
  "CLAUDE_CODE_USE_VERTEX",
  "CLAUDE_CODE_USE_FOUNDRY",
  "CLAUDE_CODE_USE_ANTHROPIC_AWS",
  "CLAUDE_CODE_USE_MANTLE",
  "ANTHROPIC_AWS_WORKSPACE_ID",
  "ANTHROPIC_AWS_BASE_URL",
  "ANTHROPIC_AWS_API_KEY",
  "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
  "AWS_BEARER_TOKEN_BEDROCK",
  "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
  "CLAUDE_CODE_SKIP_MANTLE_AUTH",
  "AWS_REGION",
  "AWS_DEFAULT_REGION",
  "AWS_PROFILE",
  "AWS_CONFIG_FILE",
  "AWS_SHARED_CREDENTIALS_FILE",
  "ANTHROPIC_BEDROCK_SERVICE_TIER",
  "CLAUDE_CODE_SUBAGENT_MODEL",
  "ANTHROPIC_BASE_URL",
  "CLAUDE_CONFIG_DIR",
  "CLAUDE_CODE_REMOTE",
  "CLAUDE_CODE_REMOTE_MEMORY_DIR",
  "HTTPS_PROXY",
  "https_proxy",
  "HTTP_PROXY",
  "http_proxy",
  "NO_PROXY",
  "no_proxy",
  ...J6t,
  ...Object.keys(B6e),
  "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
  "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
  "DISABLE_ERROR_REPORTING",
  "DISABLE_GROWTHBOOK",
  "DISABLE_TELEMETRY",
  "DO_NOT_TRACK",
];
class PaneBackendExecutor {
  type;
  backend;
  context = null;
  spawnedTeammates;
  cleanupRegistered = false;
  constructor(e) {
    ((this.backend = e), (this.type = e.type), (this.spawnedTeammates = new Map()));
  }
  setContext(e) {
    this.context = e;
  }
  async isAvailable() {
    return this.backend.isAvailable();
  }
  async spawn(e) {
    let t = pte(e.name, e.teamName);
    if (kF(e.prompt))
      return (
        Le("swarm_pane_spawn", "protocol_frame_prompt"),
        {
          success: false,
          agentId: t,
          error: I9t,
        }
      );
    if (!this.context)
      return (
        T(`[PaneBackendExecutor] spawn() called without context for ${e.name}`),
        Le("swarm_pane_spawn", "no_context"),
        {
          success: false,
          agentId: t,
          error: "PaneBackendExecutor not initialized. Call setContext() before spawn().",
        }
      );
    let n = "pane_create";
    try {
      let r = e.color ?? this.context.teammateColors.assign(t),
        { paneId: o, isFirstTeammate: s } = await this.backend.createTeammatePaneInSwarmView(
          e.name,
          r,
        ),
        i = await coe();
      if (s && i) await this.backend.enablePaneBorderStatus();
      let a = dhl(),
        l = [
          `--agent-id ${ja([t])}`,
          `--agent-name ${ja([e.name])}`,
          `--team-name ${ja([e.teamName])}`,
          `--agent-color ${ja([r])}`,
          `--parent-session-id ${ja([e.parentSessionId || Rt()])}`,
          e.planModeRequired ? "--plan-mode-required" : "",
        ]
          .filter(Boolean)
          .join(" "),
        c = phl({
          planModeRequired: e.planModeRequired,
          permissionMode: Fr(this.context).mode,
          effortValue: this.context.getAppState().effortValue,
          skipModel: !!e.model,
        });
      if (e.model) c = c ? `${c} --model ${ja([e.model])}` : `--model ${ja([e.model])}`;
      let u = c ? ` ${c}` : "",
        d = e.cwd,
        p = Q6t(),
        f = `cd ${ja([d])} && env ${p} ${ja([a])} ${l}${u}`;
      if (
        ((n = "send_command"),
        await this.backend.sendCommandToPane(o, f, !i),
        this.spawnedTeammates.set(t, {
          paneId: o,
          insideTmux: i,
        }),
        !this.cleanupRegistered)
      )
        ((this.cleanupRegistered = true),
          Ci(async () => {
            for (let [m, g] of this.spawnedTeammates)
              (T(`[PaneBackendExecutor] Cleanup: killing pane for ${m}`),
                await this.backend.killPane(g.paneId, !g.insideTmux));
            this.spawnedTeammates.clear();
          }));
      return (
        await fg(
          e.name,
          {
            from: "team-lead",
            text: e.prompt,
            timestamp: new Date().toISOString(),
          },
          e.teamName,
        ),
        T(`[PaneBackendExecutor] Spawned teammate ${t} in pane ${o}`),
        xe("swarm_pane_spawn"),
        {
          success: true,
          agentId: t,
          paneId: o,
        }
      );
    } catch (r) {
      let o = r instanceof Error ? r.message : String(r);
      return (
        T(`[PaneBackendExecutor] Failed to spawn ${t}: ${o}`),
        Le("swarm_pane_spawn", n === "pane_create" ? "pane_create_failed" : "send_command_failed"),
        {
          success: false,
          agentId: t,
          error: o,
        }
      );
    }
  }
  async sendMessage(e, t) {
    T(`[PaneBackendExecutor] sendMessage() to ${e}: ${t.text.substring(0, 50)}...`);
    let n = qPt(e);
    if (!n) throw Error(`Invalid agentId format: ${e}. Expected format: agentName@teamName`);
    let { agentName: r, teamName: o } = n;
    (await fg(
      r,
      {
        text: t.text,
        from: t.from,
        color: t.color,
        timestamp: t.timestamp ?? new Date().toISOString(),
      },
      o,
    ),
      T(`[PaneBackendExecutor] sendMessage() completed for ${e}`));
  }
  async terminate(e, t) {
    T(`[PaneBackendExecutor] terminate() called for ${e}: ${t}`);
    let n = qPt(e);
    if (!n) return (T("[PaneBackendExecutor] terminate() failed: invalid agentId format"), false);
    let { agentName: r, teamName: o } = n,
      s = {
        type: "shutdown_request",
        requestId: `shutdown-${e}-${Date.now()}`,
        from: "team-lead",
        reason: t,
      };
    return (
      await fg(
        r,
        {
          from: "team-lead",
          text: De(s),
          timestamp: new Date().toISOString(),
        },
        o,
      ),
      T(`[PaneBackendExecutor] terminate() sent shutdown request to ${e}`),
      true
    );
  }
  async kill(e) {
    T(`[PaneBackendExecutor] kill() called for ${e}`);
    let t = this.spawnedTeammates.get(e);
    if (!t)
      return (
        T(`[PaneBackendExecutor] kill() failed: teammate ${e} not found in spawned map`),
        false
      );
    let { paneId: n, insideTmux: r } = t,
      o = await this.backend.killPane(n, !r);
    if (o) (this.spawnedTeammates.delete(e), T(`[PaneBackendExecutor] kill() succeeded for ${e}`));
    else T(`[PaneBackendExecutor] kill() failed for ${e}`);
    return o;
  }
  async isActive(e) {
    if ((T(`[PaneBackendExecutor] isActive() called for ${e}`), !this.spawnedTeammates.get(e)))
      return (T(`[PaneBackendExecutor] isActive(): teammate ${e} not found`), false);
    return true;
  }
}
function mhl(e) {
  return new PaneBackendExecutor(e);
}
