// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L0o
// matched 2.1.88 source: src/tools/shared/spawnMultiAgent.ts
// class=modified  jaccard=0.3563  score=0.5052  fileCov=0.5472
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var L0o = E(() => {
  ste();
  Ls();
});
function L7n(e) {
  let t = Dt().teammateDefaultModel;
  if (t === null) return e ?? nzt();
  if (t !== void 0) {
    let n = zo(t);
    if (xa(n)) return n;
    D0o(t);
  }
  return nzt();
}
function P0o(e, t) {
  let n = process.env.CLAUDE_CODE_SUBAGENT_MODEL;
  if (n && n !== "inherit") {
    let r = zo(n);
    if (xa(r)) return r;
    return (D0o(n), L7n(t));
  }
  if (e === "inherit") return t ?? L7n(t);
  if (e !== void 0 && !xa(e)) return (D0o(e), L7n(t));
  return e ?? L7n(t);
}
function D0o(e) {
  T(
    `Teammate model "${e}" is not in the availableModels allowlist; using the default teammate model instead`,
    {
      level: "warn",
    },
  );
}
async function Iff(e) {
  return (await $n(M6, ["has-session", "-t", e])).code === 0;
}
async function xff(e) {
  if (!(await Iff(e))) {
    let n = await $n(M6, ["new-session", "-d", "-s", e]);
    if (n.code !== 0)
      throw (
        Le("subagent_launch", "subagent_teammate_tmux_session_failed"),
        Error(`Failed to create tmux session '${e}': ${n.stderr || "Unknown error"}`)
      );
  }
}
function Phl() {
  if (process.env[sht]) return process.env[sht];
  return dm() ? process.execPath : process.argv[1];
}
function Mhl(e) {
  let t = [],
    { planModeRequired: n, permissionMode: r, skipModel: o, effortValue: s } = e || {};
  if (n);
  else if (r === "bypassPermissions") t.push("--dangerously-skip-permissions");
  else if (r === "acceptEdits") t.push("--permission-mode acceptEdits");
  else if (r === "auto") t.push("--permission-mode auto");
  if (!o) {
    let c = r_();
    if (c) t.push(`--model ${ja([c])}`);
  }
  if (typeof s === "string" && vke()) t.push(`--effort ${s}`);
  let i = JBe() ?? XBe();
  if (i) t.push(`--settings ${ja([i])}`);
  let a = PV();
  for (let c of a) t.push(`--plugin-dir ${ja([c])}`);
  for (let c of MV()) t.push(`--plugin-dir-no-mcp ${ja([c])}`);
  for (let c of aee()) t.push(`--plugin-url ${ja([c])}`);
  let l = kge();
  if (l === !0) t.push("--chrome");
  else if (l === !1) t.push("--no-chrome");
  return t.join(" ");
}
async function M0o(e, t, n, r, o) {
  for (let [l, c] of [
    ["name", e],
    ["team_name", t],
  ])
    if (tel(c))
      throw (
        Le("subagent_launch", "subagent_teammate_control_chars"),
        Error(
          l === "name"
            ? "Invalid name: control characters are not allowed in agent or team names"
            : "Invalid team_name: control characters are not allowed in agent or team names",
        )
      );
  let s = await Lpe(t, (l) => {
    let c = kff(e, l),
      u = pte(c, t),
      d = r.assign(u);
    return (
      l.members.push({
        agentId: u,
        name: c,
        color: d,
        joinedAt: Date.now(),
        tmuxPaneId: "",
        subscriptions: [],
        ...n,
      }),
      {
        sanitizedName: c,
        teammateId: u,
        teammateColor: d,
      }
    );
  });
  if (!s)
    throw (
      Le("subagent_launch", "subagent_teammate_internal_invariant"),
      Error("reserveTeammateIdentity: updateTeamFile returned undefined")
    );
  let i = !1,
    a;
  try {
    return await o(
      s,
      () => {
        i = !0;
      },
      (l) => {
        a = l;
      },
    );
  } catch (l) {
    if (!i) {
      if (a)
        try {
          await a();
        } catch (c) {
          T(`[spawnTeammate] pane cleanup failed for ${s.teammateId}: ${be(c)}`);
        }
      await jTo(t, s.teammateId);
    } else
      T(
        `[spawnTeammate] post-commit failure for ${s.teammateId}; entry kept (agent already running): ${be(l)}`,
      );
    throw l;
  }
}
async function $0o(e, t, n) {
  await Lpe(e, (r) => {
    let o = r.members.find((s) => s.agentId === t);
    if (!o) return !1;
    ((o.tmuxPaneId = n.tmuxPaneId), (o.backendType = n.backendType));
  });
}
function kff(e, t) {
  let n = FTo(e);
  if (n === Q5)
    throw Error(
      '"main" is a reserved recipient name (SendMessage routes it to the main conversation) \u2014 choose another teammate name.',
    );
  let r = new Set(t.members.map((s) => s.name.toLowerCase()));
  if (!r.has(n.toLowerCase())) return n;
  let o = 2;
  while (r.has(`${n}-${o}`.toLowerCase())) o++;
  return `${n}-${o}`;
}
async function Rff(e, t) {
  let { setAppState: n, getAppState: r } = t,
    { name: o, prompt: s, agent_type: i, cwd: a, plan_mode_required: l } = e,
    c = P0o(e.model, r().mainLoopModel);
  if (!o || !s)
    throw (
      Le("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let u = r(),
    d = u.teamContext?.teamName;
  if (!d)
    throw (
      Le("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  let p = a || $t();
  return M0o(
    o,
    d,
    {
      agentType: i,
      model: c,
      prompt: s,
      planModeRequired: l,
      cwd: p,
    },
    t.teammateColors,
    async ({ sanitizedName: f, teammateId: m, teammateColor: g }, h, y) => {
      let b = await A$e();
      if (b.needsIt2Setup && t.requestDialog) {
        let L = await YPe(),
          M = await t.requestDialog(x8n, {
            tmuxAvailable: L,
          });
        if (M === "cancelled")
          throw (
            Le("subagent_launch", "subagent_teammate_iterm_cancelled"),
            new IF("Teammate spawn cancelled - iTerm2 setup required")
          );
        if (M === "installed" || M === "use-tmux") (tzt(), (b = await A$e()));
      }
      let _ = await Chl(),
        { paneId: S, isFirstTeammate: A } = await Ihl(f, g);
      if (
        (y(() => b.backend.killPane(S, !_)),
        await $0o(d, m, {
          tmuxPaneId: S,
          backendType: b.backend.type,
        }),
        A && _)
      )
        await xhl();
      let v = Phl(),
        C = [
          `--agent-id ${ja([m])}`,
          `--agent-name ${ja([f])}`,
          `--team-name ${ja([d])}`,
          `--agent-color ${ja([g])}`,
          `--parent-session-id ${ja([Rt()])}`,
          l ? "--plan-mode-required" : "",
          i ? `--agent-type ${ja([i])}` : "",
        ]
          .filter(Boolean)
          .join(" "),
        x = Mhl({
          planModeRequired: l,
          permissionMode: u.toolPermissionContext.mode,
          effortValue: u.effortValue,
          skipModel: !!c,
        });
      if (c) x = x ? `${x} --model ${ja([c])}` : `--model ${ja([c])}`;
      let I = x ? ` ${x}` : "",
        k = Q6t(),
        D = `cd ${ja([p])} && env ${k} ${ja([v])} ${C}${I}`;
      (await S9t(f, d),
        await fg(
          f,
          {
            from: Hd,
            text: s,
            timestamp: new Date().toISOString(),
          },
          d,
        ),
        await khl(S, D, !_),
        h());
      let P = _ ? "current" : P6,
        O = _ ? "current" : "swarm-view";
      return (
        n((L) => ({
          ...L,
          teamContext: {
            ...L.teamContext,
            teamName: d ?? L.teamContext?.teamName ?? "default",
            teamFilePath: L.teamContext?.teamFilePath ?? "",
            leadAgentId: L.teamContext?.leadAgentId ?? "",
            teammates: {
              ...(L.teamContext?.teammates || {}),
              [m]: {
                name: f,
                agentType: i,
                color: g,
                tmuxSessionName: P,
                tmuxPaneId: S,
                cwd: p,
                spawnedAt: Date.now(),
              },
            },
          },
        })),
        $hl(t.taskRegistry, {
          teammateId: m,
          sanitizedName: f,
          teamName: d,
          teammateColor: g,
          prompt: s,
          plan_mode_required: l,
          paneId: S,
          insideTmux: _,
          backendType: b.backend.type,
          toolUseId: t.toolUseId,
          cwd: p,
        }),
        {
          data: {
            teammate_id: m,
            agent_id: m,
            agent_type: i,
            model: c,
            name: f,
            color: g,
            tmux_session_name: P,
            tmux_window_name: O,
            tmux_pane_id: S,
            team_name: d,
            is_splitpane: !0,
            plan_mode_required: l,
          },
        }
      );
    },
  );
}
async function Lff(e, t) {
  let { setAppState: n, getAppState: r } = t,
    { name: o, prompt: s, agent_type: i, cwd: a, plan_mode_required: l } = e,
    c = P0o(e.model, r().mainLoopModel);
  if (!o || !s)
    throw (
      Le("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let u = r(),
    d = u.teamContext?.teamName;
  if (!d)
    throw (
      Le("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  let p = a || $t();
  return M0o(
    o,
    d,
    {
      agentType: i,
      model: c,
      prompt: s,
      planModeRequired: l,
      cwd: p,
    },
    t.teammateColors,
    async ({ sanitizedName: f, teammateId: m, teammateColor: g }, h, y) => {
      let b = `teammate-${k8n(f)}`;
      await xff(P6);
      let _ = await $n(M6, ["new-window", "-t", P6, "-n", b, "-P", "-F", "#{pane_id}", "--", KPe]);
      if (_.code !== 0)
        throw (
          Le("subagent_launch", "subagent_teammate_tmux_window_failed"),
          Error(`Failed to create tmux window: ${_.stderr}`)
        );
      let S = _.stdout.trim();
      (y(() => $n(M6, ["kill-pane", "-t", S])),
        await $0o(d, m, {
          tmuxPaneId: S,
          backendType: "tmux",
        }));
      let A = Phl(),
        v = [
          `--agent-id ${ja([m])}`,
          `--agent-name ${ja([f])}`,
          `--team-name ${ja([d])}`,
          `--agent-color ${ja([g])}`,
          `--parent-session-id ${ja([Rt()])}`,
          l ? "--plan-mode-required" : "",
          i ? `--agent-type ${ja([i])}` : "",
        ]
          .filter(Boolean)
          .join(" "),
        C = Mhl({
          planModeRequired: l,
          permissionMode: u.toolPermissionContext.mode,
          effortValue: u.effortValue,
          skipModel: !!c,
        });
      if (c) C = C ? `${C} --model ${ja([c])}` : `--model ${ja([c])}`;
      let x = C ? ` ${C}` : "",
        I = Q6t(),
        k = `cd ${ja([p])} && env ${I} ${ja([A])} ${v}${x}`;
      (await S9t(f, d),
        await fg(
          f,
          {
            from: Hd,
            text: s,
            timestamp: new Date().toISOString(),
          },
          d,
        ));
      try {
        Lht(k);
      } catch (D) {
        throw (Le("subagent_launch", "subagent_teammate_control_chars"), D);
      }
      try {
        await I7n([], S, k);
      } catch (D) {
        throw (Le("subagent_launch", "subagent_teammate_tmux_respawn_failed"), D);
      }
      return (
        h(),
        n((D) => ({
          ...D,
          teamContext: {
            ...D.teamContext,
            teamName: d ?? D.teamContext?.teamName ?? "default",
            teamFilePath: D.teamContext?.teamFilePath ?? "",
            leadAgentId: D.teamContext?.leadAgentId ?? "",
            teammates: {
              ...(D.teamContext?.teammates || {}),
              [m]: {
                name: f,
                agentType: i,
                color: g,
                tmuxSessionName: P6,
                tmuxPaneId: S,
                cwd: p,
                spawnedAt: Date.now(),
              },
            },
          },
        })),
        $hl(t.taskRegistry, {
          teammateId: m,
          sanitizedName: f,
          teamName: d,
          teammateColor: g,
          prompt: s,
          plan_mode_required: l,
          paneId: S,
          insideTmux: !1,
          backendType: "tmux",
          toolUseId: t.toolUseId,
          cwd: p,
        }),
        {
          data: {
            teammate_id: m,
            agent_id: m,
            agent_type: i,
            model: c,
            name: f,
            color: g,
            tmux_session_name: P6,
            tmux_window_name: b,
            tmux_pane_id: S,
            team_name: d,
            is_splitpane: !1,
            plan_mode_required: l,
          },
        }
      );
    },
  );
}
function $hl(
  e,
  {
    teammateId: t,
    sanitizedName: n,
    teamName: r,
    teammateColor: o,
    prompt: s,
    plan_mode_required: i,
    paneId: a,
    insideTmux: l,
    backendType: c,
    toolUseId: u,
    cwd: d,
  },
) {
  let p = iN("in_process_teammate"),
    f = `${s.substring(0, 50)}${s.length > 50 ? "..." : ""}`,
    m = new AbortController(),
    g = {
      ...LT(p, "in_process_teammate", f, u),
      type: "in_process_teammate",
      status: "running",
      cwd: d,
      identity: {
        agentId: t,
        agentName: n,
        teamName: r,
        color: o,
        planModeRequired: i ?? !1,
        parentSessionId: Rt(),
      },
      prompt: s,
      abortController: m,
      awaitingPlanApproval: !1,
      permissionMode: i ? "plan" : "default",
      isIdle: !1,
      shutdownRequested: !1,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      pendingUserMessages: [],
    };
  (e.register(g),
    m.signal.addEventListener(
      "abort",
      () => {
        if (u9t(c)) ezt(c).killPane(a, !l);
      },
      {
        once: !0,
      },
    ));
}
async function Lhl(e, t) {
  let { setAppState: n, getAppState: r } = t,
    { name: o, prompt: s, agent_type: i, plan_mode_required: a } = e,
    l = P0o(e.model, r().mainLoopModel);
  if (!o || !s)
    throw (
      Le("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let u = r().teamContext?.teamName;
  if (!u)
    throw (
      Le("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  return M0o(
    o,
    u,
    {
      agentType: i,
      model: l,
      prompt: s,
      planModeRequired: a,
      cwd: $t(),
    },
    t.teammateColors,
    async ({ sanitizedName: d, teammateId: p, teammateColor: f }, m) => {
      await $0o(u, p, {
        tmuxPaneId: "in-process",
        backendType: "in-process",
      });
      let g;
      if (i) {
        let C = t.options.agentDefinitions.activeAgents.find((x) => x.agentType === i);
        if (C && F6e(C)) g = C;
        T(`[handleSpawnInProcess] agent_type=${i}, found=${!!g}`);
      }
      let h = {
        name: d,
        teamName: u,
        prompt: s,
        color: f,
        planModeRequired: a ?? !1,
        model: l,
      };
      await S9t(d, u);
      let y = await $ht(h, t);
      if (!y.ok)
        throw (
          Le("subagent_launch", "subagent_teammate_inprocess_failed"),
          T(`[handleSpawnInProcess] spawn failed: ${y.error}`),
          Error("Failed to spawn in-process teammate")
        );
      (m(),
        ibt({
          identity: y.identity,
          taskId: y.taskId,
          prompt: s,
          description: e.description,
          model: l,
          agentDefinition: g,
          teammateContext: y.teammateContext,
          toolUseContext: {
            ...t,
            messages: [],
          },
          abortController: y.abortController,
          invokingRequestId: e.invokingRequestId,
        }),
        T(`[handleSpawnInProcess] Started agent execution for ${p}`));
      let b = r().teamContext?.leadAgentId,
        _ = !b,
        S = b ?? pte(Hd, u),
        A = _ ? t.teammateColors.assign(S) : void 0;
      return (
        n((v) => {
          let C = v.teamContext?.teammates || {},
            x = _
              ? {
                  [S]: {
                    name: Hd,
                    agentType: Hd,
                    color: A,
                    tmuxSessionName: "in-process",
                    tmuxPaneId: "leader",
                    cwd: $t(),
                    spawnedAt: Date.now(),
                  },
                }
              : {};
          return {
            ...v,
            teamContext: {
              ...v.teamContext,
              teamName: u ?? v.teamContext?.teamName ?? "default",
              teamFilePath: v.teamContext?.teamFilePath ?? "",
              leadAgentId: S,
              teammates: {
                ...C,
                ...x,
                [p]: {
                  name: d,
                  agentType: i,
                  color: f,
                  tmuxSessionName: "in-process",
                  tmuxPaneId: "in-process",
                  cwd: $t(),
                  spawnedAt: Date.now(),
                },
              },
            },
          };
        }),
        {
          data: {
            teammate_id: p,
            agent_id: p,
            agent_type: i,
            model: l,
            name: d,
            color: f,
            tmux_session_name: "in-process",
            tmux_window_name: "in-process",
            tmux_pane_id: "in-process",
            team_name: u,
            is_splitpane: !1,
            plan_mode_required: a,
          },
        }
      );
    },
  );
}
async function Dff(e, t, n) {
  if (e.prompt && kF(e.prompt))
    throw (Le("subagent_launch", "subagent_teammate_protocol_frame_prompt"), Error(I9t));
  if (U6e()) return Lhl(e, t);
  try {
    await A$e();
  } catch (o) {
    if (ODe() !== "auto") throw (Le("subagent_launch", "subagent_teammate_pane_unavailable"), o);
    return (
      T(`[handleSpawn] No pane backend available, falling back to in-process: ${be(o)}`),
      k0o(),
      Pff(n),
      Lhl(e, t)
    );
  }
  if (e.use_splitpane !== !1) return Rff(e, t);
  return Lff(e, t);
}
function Pff(e) {
  if (Dhl) return;
  Dhl = !0;
  let t = $6()
    ? 'To force iTerm2 panes, set teammateMode: "iterm2" in settings and enable the iTerm2 Python API (Preferences > General > Magic).'
    : 'To use terminal panes, set teammateMode: "tmux" in settings.';
  e?.({
    type: "notification",
    notification: {
      key: "teammate-auto-fallback",
      text: `Couldn't open a teammate pane \u2014 running in-process instead. ${t}`,
      color: "warning",
      priority: "high",
    },
  });
}
async function Ohl(e, t, n) {
  return Dff(e, t, n);
}
var Dhl = !1;
