// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kst
// matched 2.1.88 source: src/services/analytics/metadata.ts
// class=modified  jaccard=0.4716  score=0.7383  fileCov=0.5663
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kst]
((wzr = [
  "/v2/session_ingress/shttp/mcp/",
  "/v2/session_ingress/mcp/ws/",
  "/v2/ccr-sessions/",
  "/v1/code/",
]),
  (O$d = process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL));
N$d = new Set(["bridge.claudeusercontent.com", "bridge-staging.claudeusercontent.com"]);
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
function isAnalyticsToolDetailsLoggingEnabled(mcpServerType, mcpServerBaseUrl) {
  if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent") return true;
  if (mcpServerType === "claudeai-proxy") return true;
  if (mcpServerBaseUrl && pOi(mcpServerBaseUrl)) return true;
  if (mcpServerBaseUrl && X9(mcpServerBaseUrl)) return true;
  return false;
}
function fke(e, t) {
  if (xzr.has(e)) return true;
  if (t === void 0) return isAnalyticsToolDetailsLoggingEnabled(void 0, void 0);
  if ("url" in t && mOi(t.url)) return true;
  return isAnalyticsToolDetailsLoggingEnabled(t.type, dke(t));
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
function extractSkillName(toolName, input, n) {
  if (toolName !== "Skill") return;
  if (
    typeof input === "object" &&
    input !== null &&
    "skill" in input &&
    typeof input.skill === "string"
  )
    return input.skill;
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
  let a = extractSkillName(e, t, n);
  if (a) r.skill_name = a;
  let l = Rzr(e, t);
  if (l) r.subagent_type = l;
  return r;
}
function truncateToolInputValue(value, t = 0) {
  if (typeof value === "string") {
    if (value.length > B$d) return `${value.slice(0, U$d)}\u2026[${value.length} chars]`;
    return value;
  }
  if (typeof value === "number" || typeof value === "boolean" || value === null || value === void 0)
    return value;
  if (t >= F$d) return "<nested>";
  if (Array.isArray(value)) {
    let n = value.slice(0, dkn).map((r) => truncateToolInputValue(r, t + 1));
    if (value.length > dkn) n.push(`\u2026[${value.length} items]`);
    return n;
  }
  if (typeof value === "object") {
    let n = Object.entries(value).filter(([o]) => !o.startsWith("_")),
      r = n.slice(0, dkn).map(([o, s]) => [o, truncateToolInputValue(s, t + 1)]);
    if (n.length > dkn) r.push(["\u2026", `${n.length} keys`]);
    return Object.fromEntries(r);
  }
  return String(value);
}
function extractToolInputForTelemetry(input) {
  if (!sg()) return;
  let t = truncateToolInputValue(input),
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
function getAgentIdentification() {
  let agentContext = WPt.getStore();
  if (agentContext) {
    let a = {
      agentId: agentContext.agentId,
      parentSessionId: agentContext.parentSessionId,
      agentType: agentContext.agentType,
    };
    if (agentContext.parentAgentId) a.parentAgentId = agentContext.parentAgentId;
    if (agentContext.agentType === "teammate") a.teamName = agentContext.teamName;
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
    ...getAgentIdentification(),
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
function to1PEventFormat(metadata, userMetadata, n = {}) {
  let {
      envContext: envContext,
      processMetrics: o,
      rh: s,
      coachMode: i,
      observerMode: a,
      sessionKind: l,
      hasAttacher: c,
      rendererMode: u,
      subscriptionType: d,
      parentAgentId: p,
      ...coreFields
    } = metadata,
    env = {
      platform: envContext.platform,
      platform_raw: envContext.platformRaw,
      arch: envContext.arch,
      node_version: envContext.nodeVersion,
      terminal: envContext.terminal || "unknown",
      shell: envContext.shell,
      package_managers: envContext.packageManagers,
      runtimes: envContext.runtimes,
      is_running_with_bun: envContext.isRunningWithBun,
      is_ci: envContext.isCi,
      is_claubbit: envContext.isClaubbit,
      is_claude_code_remote: envContext.isClaudeCodeRemote,
      is_local_agent_mode: envContext.isLocalAgentMode,
      is_conductor: envContext.isConductor,
      is_github_action: envContext.isGithubAction,
      is_claude_code_action: envContext.isClaudeCodeAction,
      is_claude_ai_auth: envContext.isClaudeAiAuth,
      version: envContext.version,
      build_time: envContext.buildTime,
      deployment_environment: envContext.deploymentEnvironment,
    };
  if (envContext.remoteEnvironmentType)
    env.remote_environment_type = envContext.remoteEnvironmentType;
  if (envContext.claudeCodeContainerId)
    env.claude_code_container_id = envContext.claudeCodeContainerId;
  if (envContext.claudeCodeRemoteSessionId)
    env.claude_code_remote_session_id = envContext.claudeCodeRemoteSessionId;
  if (envContext.tags)
    env.tags = envContext.tags
      .split(",")
      .map((y) => y.trim())
      .filter(Boolean);
  if (envContext.githubEventName) env.github_event_name = envContext.githubEventName;
  if (envContext.githubActionsRunnerEnvironment)
    env.github_actions_runner_environment = envContext.githubActionsRunnerEnvironment;
  if (envContext.githubActionsRunnerOs)
    env.github_actions_runner_os = envContext.githubActionsRunnerOs;
  if (envContext.githubActionRef) env.github_action_ref = envContext.githubActionRef;
  if (envContext.wslVersion) env.wsl_version = envContext.wslVersion;
  if (envContext.linuxDistroId) env.linux_distro_id = envContext.linuxDistroId;
  if (envContext.linuxDistroVersion) env.linux_distro_version = envContext.linuxDistroVersion;
  if (envContext.linuxKernel) env.linux_kernel = envContext.linuxKernel;
  if (envContext.vcs) env.vcs = envContext.vcs;
  if (envContext.versionBase) env.version_base = envContext.versionBase;
  let core = {
    session_id: coreFields.sessionId,
    model: coreFields.model,
    user_type: coreFields.userType,
    is_interactive: coreFields.isInteractive === "true",
    client_type: coreFields.clientType,
  };
  if (coreFields.betas) core.betas = coreFields.betas;
  if (coreFields.entrypoint) core.entrypoint = coreFields.entrypoint;
  if (coreFields.agentSdkVersion) core.agent_sdk_version = coreFields.agentSdkVersion;
  if (coreFields.sweBenchRunId) core.swe_bench_run_id = coreFields.sweBenchRunId;
  if (coreFields.sweBenchInstanceId) core.swe_bench_instance_id = coreFields.sweBenchInstanceId;
  if (coreFields.sweBenchTaskId) core.swe_bench_task_id = coreFields.sweBenchTaskId;
  if (coreFields.agentId) core.agent_id = coreFields.agentId;
  if (coreFields.parentSessionId) core.parent_session_id = coreFields.parentSessionId;
  if (coreFields.agentType) core.agent_type = coreFields.agentType;
  if (coreFields.teamName) core.team_name = coreFields.teamName;
  if (userMetadata.githubActionsMetadata) {
    let y = userMetadata.githubActionsMetadata;
    env.github_actions_metadata = {
      actor_id: y.actorId,
      repository_id: y.repositoryId,
      repository_owner_id: y.repositoryOwnerId,
    };
  }
  let h;
  if (userMetadata.accountUuid || userMetadata.organizationUuid)
    h = {
      account_uuid: userMetadata.accountUuid,
      organization_uuid: userMetadata.organizationUuid,
    };
  return {
    env: env,
    ...(o && {
      process: Buffer.from(De(o)).toString("base64"),
    }),
    ...(h && {
      auth: h,
    }),
    core: core,
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
