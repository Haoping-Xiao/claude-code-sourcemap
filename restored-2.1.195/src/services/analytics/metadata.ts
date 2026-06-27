// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kst
// matched 2.1.88 source: src/services/analytics/metadata.ts
// class=modified  jaccard=0.1974  score=0.3864  fileCov=0.2875
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var kst = E(() => {
  ((wzr = [
    "/v2/session_ingress/shttp/mcp/",
    "/v2/session_ingress/mcp/ws/",
    "/v2/ccr-sessions/",
    "/v1/code/",
  ]),
    (O$d = process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL));
  N$d = new Set(["bridge.claudeusercontent.com", "bridge-staging.claudeusercontent.com"]);
});
var Co = "Bash";
function Cf(e) {
  if (e == null) return;
  return /^[A-Za-z0-9._:[\]-]{1,100}$/.test(e) ? kh(e) : We("nonconforming");
}
var pke = () => {};
function Ui(e) {
  let t = Object.hasOwn(gOi, e) ? gOi[e] : void 0;
  if (t) return kh(t);
  if (e.startsWith("mcp__")) return We("mcp_tool");
  return kh(e);
}
function Gte(e) {
  return kh(Bh(e) ?? "");
}
function sg() {
  return ut(process.env.OTEL_LOG_TOOL_DETAILS);
}
function Rst() {
  return ut(process.env.OTEL_LOG_TOOL_CONTENT);
}
function hOi(e, t) {
  if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent") return true;
  if (e === "claudeai-proxy") return true;
  if (t && pOi(t)) return true;
  if (t && X9(t)) return true;
  return false;
}
function fke(e, t) {
  if (xzr.has(e)) return true;
  if (t === void 0) return hOi(void 0, void 0);
  if ("url" in t && mOi(t.url)) return true;
  return hOi(t.type, dke(t));
}
function lW(e, t) {
  if (!t) return {};
  let n = fkn(e);
  if (!n) return {};
  return {
    mcpServerName: n.serverName,
    mcpToolName: n.mcpToolName,
  };
}
function fkn(e) {
  if (!e.startsWith("mcp__")) return;
  let t = e.split("__");
  if (t.length < 3) return;
  let n = t[1],
    r = t.slice(2).join("__");
  if (!n || !r) return;
  return {
    serverName: n,
    mcpToolName: r,
  };
}
function kzr(e, t, n) {
  if (e !== "Skill") return;
  if (typeof t === "object" && t !== null && "skill" in t && typeof t.skill === "string")
    return t.skill;
  return;
}
function Rzr(e, t) {
  if (e !== "Agent" && e !== "Task") return;
  if (
    typeof t === "object" &&
    t !== null &&
    "subagent_type" in t &&
    typeof t.subagent_type === "string"
  )
    return t.subagent_type;
  return;
}
function nNt(e, t, n) {
  let r = {};
  if (!sg()) return r;
  let o =
      e === Co &&
      t !== null &&
      typeof t === "object" &&
      "command" in t &&
      typeof t.command === "string",
    s =
      e === rLt &&
      t !== null &&
      typeof t === "object" &&
      "command" in t &&
      typeof t.command === "string";
  if (o) {
    let c = t,
      u = c.command.trim().split(/\s+/);
    if (((r.bash_command = u[0] || ""), (r.full_command = c.command), c.timeout !== void 0))
      r.timeout = c.timeout;
    if (c.description !== void 0) r.description = c.description;
    if ("dangerouslyDisableSandbox" in c) r.dangerouslyDisableSandbox = c.dangerouslyDisableSandbox;
  } else if (s) {
    let c = t,
      u = c.command.trim().split(/\s+/);
    if (((r.bash_command = u[0] || ""), (r.full_command = c.command), c.timeout_ms !== void 0))
      r.timeout = c.timeout_ms;
  }
  let i = fkn(e);
  if (i) ((r.mcp_server_name = i.serverName), (r.mcp_tool_name = i.mcpToolName));
  let a = kzr(e, t, n);
  if (a) r.skill_name = a;
  let l = Rzr(e, t);
  if (l) r.subagent_type = l;
  return r;
}
function Izr(e, t = 0) {
  if (typeof e === "string") {
    if (e.length > B$d) return `${e.slice(0, U$d)}\u2026[${e.length} chars]`;
    return e;
  }
  if (typeof e === "number" || typeof e === "boolean" || e === null || e === void 0) return e;
  if (t >= F$d) return "<nested>";
  if (Array.isArray(e)) {
    let n = e.slice(0, dkn).map((r) => Izr(r, t + 1));
    if (e.length > dkn) n.push(`\u2026[${e.length} items]`);
    return n;
  }
  if (typeof e === "object") {
    let n = Object.entries(e).filter(([o]) => !o.startsWith("_")),
      r = n.slice(0, dkn).map(([o, s]) => [o, Izr(s, t + 1)]);
    if (n.length > dkn) r.push(["\u2026", `${n.length} keys`]);
    return Object.fromEntries(r);
  }
  return String(e);
}
function SOi(e) {
  if (!sg()) return;
  let t = Izr(e),
    n = De(t);
  if (n.length > yOi) n = n.slice(0, yOi) + "\u2026[truncated]";
  return n;
}
function jte(e) {
  let t = _Oi.extname(e).toLowerCase();
  if (!t || t === ".") return;
  let n = t.slice(1);
  if (n.length > j$d) return We("other");
  return kh(n);
}
function EOi(e, t) {
  if (!e.includes(".") && !t) return;
  let n,
    r = new Set();
  if (t) {
    let o = jte(t);
    if (o) (r.add(o), (n = o));
  }
  for (let o of e.split(W$d)) {
    if (!o) continue;
    let s = o.split(q$d);
    if (s.length < 2) continue;
    let i = s[0],
      a = i.lastIndexOf("/"),
      l = a >= 0 ? i.slice(a + 1) : i;
    if (!G$d.has(l)) continue;
    for (let c = 1; c < s.length; c++) {
      let u = s[c];
      if (u.charCodeAt(0) === 45) continue;
      let d = jte(u);
      if (d && !r.has(d)) (r.add(d), (n = n ? n + "," + d : d));
    }
  }
  if (!n) return;
  return kh(n);
}
function Lzr(e) {
  if (!e.includes(".")) return;
  let t = new Set();
  for (let r of e.toLowerCase().matchAll(V$d)) t.add(r[1]);
  if (t.size === 0) return;
  let n = [...t].sort().join(",");
  return kh(n);
}
function AOi(e) {
  if (!e) return 0;
  let t = 0;
  for (let n of e) {
    if (n.type !== "user" && n.type !== "assistant") continue;
    let r = n.message.content;
    if (!Array.isArray(r)) continue;
    for (let o of r) if (o.type === "document" || o.type === "image") t += De(o).length;
  }
  return t;
}
function tS(e) {
  if (e == null) return We("none");
  let t = e.match(z$d);
  if (t) return kh(t[0]);
  return We("other");
}
function Z9(e) {
  if (e == null) return We("none");
  if (K$d.has(e)) return kh(e);
  return We("other");
}
function Y$d() {
  let e = WPt.getStore();
  if (e) {
    let a = {
      agentId: e.agentId,
      parentSessionId: e.parentSessionId,
      agentType: e.agentType,
    };
    if (e.parentAgentId) a.parentAgentId = e.parentAgentId;
    if (e.agentType === "teammate") a.teamName = e.teamName;
    return a;
  }
  let t = PD(),
    n = VG(),
    r = rp(),
    s = wf() ? "teammate" : t ? "standalone" : void 0;
  if (t || s || n || r)
    return {
      ...(t && {
        agentId: t,
      }),
      ...(s && {
        agentType: s,
      }),
      ...(n && {
        parentSessionId: n,
      }),
      ...(r && {
        teamName: r,
      }),
    };
  let i = qve();
  if (i)
    return {
      parentSessionId: i,
    };
  return {};
}
function HOi() {
  return {
    ...b3e,
  };
}
function J$d() {
  try {
    let e = process.memoryUsage();
    if (e.rss > b3e.rss) b3e.rss = e.rss;
    if (e.heapUsed > b3e.heapUsed) b3e.heapUsed = e.heapUsed;
    if (e.external > b3e.external) b3e.external = e.external;
    hzr();
    let t = process.cpuUsage(),
      n = Date.now(),
      r;
    if (pkn && Czr) {
      let o = n - Czr;
      if (o > 0) {
        let s = t.user - pkn.user,
          i = t.system - pkn.system;
        r = ((s + i) / (o * 1000)) * 100;
      }
    }
    return (
      (pkn = t),
      (Czr = n),
      {
        uptime: process.uptime(),
        rss: e.rss,
        heapTotal: e.heapTotal,
        heapUsed: e.heapUsed,
        external: e.external,
        arrayBuffers: e.arrayBuffers,
        constrainedMemory: process.constrainedMemory(),
        cpuUsage: t,
        cpuPercent: r,
      }
    );
  } catch {
    return;
  }
}
async function mkn(e = {}) {
  let t = e.model ? String(e.model) : As(),
    n = typeof e.betas === "string" ? e.betas : fI(V9(t)).join(","),
    [r, o] = await Promise.all([X$d(), yfn()]),
    s = J$d(),
    i = exe(),
    a = i ? (fy() !== null ? "1" : "0") : void 0,
    l = SCt();
  return {
    model: t,
    sessionId: Rt(),
    userType: "external",
    ...(n.length > 0 && {
      betas: n,
    }),
    envContext: r,
    ...(process.env.CLAUDE_CODE_ENTRYPOINT && {
      entrypoint: process.env.CLAUDE_CODE_ENTRYPOINT,
    }),
    ...(i && {
      sessionKind: i,
    }),
    ...(a && {
      hasAttacher: a,
    }),
    ...(process.env.CLAUDE_AGENT_SDK_VERSION && {
      agentSdkVersion: process.env.CLAUDE_AGENT_SDK_VERSION,
    }),
    isInteractive: String(Ax()),
    clientType: bCt(),
    ...(s && {
      processMetrics: s,
    }),
    sweBenchRunId: process.env.SWE_BENCH_RUN_ID || "",
    sweBenchInstanceId: process.env.SWE_BENCH_INSTANCE_ID || "",
    sweBenchTaskId: process.env.SWE_BENCH_TASK_ID || "",
    ...Y$d(),
    ...(Di() && {
      subscriptionType: Di(),
    }),
    ...(o && {
      rh: o,
    }),
    ...(l && {
      rendererMode: l,
    }),
  };
}
function TOi(e, t, n = {}) {
  let {
      envContext: r,
      processMetrics: o,
      rh: s,
      coachMode: i,
      observerMode: a,
      sessionKind: l,
      hasAttacher: c,
      rendererMode: u,
      subscriptionType: d,
      parentAgentId: p,
      ...f
    } = e,
    m = {
      platform: r.platform,
      platform_raw: r.platformRaw,
      arch: r.arch,
      node_version: r.nodeVersion,
      terminal: r.terminal || "unknown",
      shell: r.shell,
      package_managers: r.packageManagers,
      runtimes: r.runtimes,
      is_running_with_bun: r.isRunningWithBun,
      is_ci: r.isCi,
      is_claubbit: r.isClaubbit,
      is_claude_code_remote: r.isClaudeCodeRemote,
      is_local_agent_mode: r.isLocalAgentMode,
      is_conductor: r.isConductor,
      is_github_action: r.isGithubAction,
      is_claude_code_action: r.isClaudeCodeAction,
      is_claude_ai_auth: r.isClaudeAiAuth,
      version: r.version,
      build_time: r.buildTime,
      deployment_environment: r.deploymentEnvironment,
    };
  if (r.remoteEnvironmentType) m.remote_environment_type = r.remoteEnvironmentType;
  if (r.claudeCodeContainerId) m.claude_code_container_id = r.claudeCodeContainerId;
  if (r.claudeCodeRemoteSessionId) m.claude_code_remote_session_id = r.claudeCodeRemoteSessionId;
  if (r.tags)
    m.tags = r.tags
      .split(",")
      .map((y) => y.trim())
      .filter(Boolean);
  if (r.githubEventName) m.github_event_name = r.githubEventName;
  if (r.githubActionsRunnerEnvironment)
    m.github_actions_runner_environment = r.githubActionsRunnerEnvironment;
  if (r.githubActionsRunnerOs) m.github_actions_runner_os = r.githubActionsRunnerOs;
  if (r.githubActionRef) m.github_action_ref = r.githubActionRef;
  if (r.wslVersion) m.wsl_version = r.wslVersion;
  if (r.linuxDistroId) m.linux_distro_id = r.linuxDistroId;
  if (r.linuxDistroVersion) m.linux_distro_version = r.linuxDistroVersion;
  if (r.linuxKernel) m.linux_kernel = r.linuxKernel;
  if (r.vcs) m.vcs = r.vcs;
  if (r.versionBase) m.version_base = r.versionBase;
  let g = {
    session_id: f.sessionId,
    model: f.model,
    user_type: f.userType,
    is_interactive: f.isInteractive === "true",
    client_type: f.clientType,
  };
  if (f.betas) g.betas = f.betas;
  if (f.entrypoint) g.entrypoint = f.entrypoint;
  if (f.agentSdkVersion) g.agent_sdk_version = f.agentSdkVersion;
  if (f.sweBenchRunId) g.swe_bench_run_id = f.sweBenchRunId;
  if (f.sweBenchInstanceId) g.swe_bench_instance_id = f.sweBenchInstanceId;
  if (f.sweBenchTaskId) g.swe_bench_task_id = f.sweBenchTaskId;
  if (f.agentId) g.agent_id = f.agentId;
  if (f.parentSessionId) g.parent_session_id = f.parentSessionId;
  if (f.agentType) g.agent_type = f.agentType;
  if (f.teamName) g.team_name = f.teamName;
  if (t.githubActionsMetadata) {
    let y = t.githubActionsMetadata;
    m.github_actions_metadata = {
      actor_id: y.actorId,
      repository_id: y.repositoryId,
      repository_owner_id: y.repositoryOwnerId,
    };
  }
  let h;
  if (t.accountUuid || t.organizationUuid)
    h = {
      account_uuid: t.accountUuid,
      organization_uuid: t.organizationUuid,
    };
  return {
    env: m,
    ...(o && {
      process: Buffer.from(De(o)).toString("base64"),
    }),
    ...(h && {
      auth: h,
    }),
    core: g,
    additional: {
      ...(s && {
        rh: s,
      }),
      ...(i && {
        coach_mode: i,
      }),
      ...(a && {
        observer_mode: a,
      }),
      ...(l && {
        session_kind: l,
      }),
      ...(c && {
        has_attacher: c,
      }),
      ...(u && {
        renderer_mode: u,
      }),
      ...(d && {
        subscription_type: d,
      }),
      ...(p && {
        parent_agent_id: p,
      }),
      ...n,
    },
  };
}
var _Oi,
  gOi,
  xzr,
  B$d = 512,
  U$d = 128,
  yOi = 4096,
  dkn = 20,
  F$d = 2,
  j$d = 10,
  G$d,
  W$d,
  q$d,
  V$d,
  z$d,
  K$d,
  rNt,
  X$d,
  pkn = null,
  Czr = null,
  b3e;
