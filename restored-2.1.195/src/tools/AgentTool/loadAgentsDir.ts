// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wer
// matched 2.1.88 source: src/tools/AgentTool/loadAgentsDir.ts
// class=modified  jaccard=0.335  score=0.7121  fileCov=0.3875
// note: deminified; 14 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: toAgentInfos, parseAgentsFromJson, parseAgentFromMarkdown, parseAgentFromJson, normalizeAgentType, isPluginAgent, isCustomAgent, isBuiltInAgent, hasRequiredMcpServers, getBuiltInAgents, getAgentDefinitionsWithOverrides, getActiveAgentsFromList, filterAgentsByMcpRequirements, clearAgentDefinitionsCache, agentMcpSpecsToScopedConfigs
var GSt = {};
function agentMcpSpecsToScopedConfigs(e) {
  if (!e.mcpServers?.length) return {};
  if (VE("mcp") && !L_e(e.source))
    return (
      T(
        `[Agent: ${e.agentType}] Skipping frontmatter MCP servers: strictPluginOnlyCustomization locks MCP to plugin-only (agent source: ${e.source})`,
      ),
      {}
    );
  let t = {};
  for (let n of e.mcpServers) {
    if (typeof n === "string") continue;
    let r = Object.entries(n);
    if (r.length !== 1) {
      T(`[Agent: ${e.agentType}] Invalid MCP server spec: expected exactly one key`, {
        level: "warn",
      });
      continue;
    }
    let [o, s] = r[0];
    if (mlt(o)) {
      T(`[Agent: ${e.agentType}] Skipping reserved MCP server name '${o}' in frontmatter`, {
        level: "warn",
      });
      continue;
    }
    if (s.type === "sse-ide" || s.type === "ws-ide") {
      T(
        `[Agent: ${e.agentType}] Skipping internal-only MCP transport '${s.type}' for '${o}' in frontmatter`,
        {
          level: "warn",
        },
      );
      continue;
    }
    t[o] = {
      ...s,
      scope: "agent",
    };
  }
  return t;
}
function toAgentInfos(e) {
  return e.map((t) => ({
    name: t.agentType,
    description: t.whenToUse,
    model: t.model === "inherit" ? void 0 : t.model,
  }));
}
function isBuiltInAgent(e) {
  return e.source === "built-in";
}
function isCustomAgent(e) {
  return e.source !== "built-in" && e.source !== "plugin";
}
function isPluginAgent(e) {
  return e.source === "plugin";
}
function getActiveAgentsFromList(e) {
  let t = e.filter((u) => u.source === "built-in"),
    n = e.filter((u) => u.source === "plugin"),
    r = e.filter((u) => u.source === "userSettings"),
    s = [
      ...e.filter((u) => u.source === "projectSettings" && u.fromAdditionalDirectory),
      ...e.filter((u) => u.source === "projectSettings" && !u.fromAdditionalDirectory).sort(WSt),
    ],
    i = e.filter((u) => u.source === "policySettings"),
    a = e.filter((u) => u.source === "flagSettings"),
    l = [t, n, r, s, a, i],
    c = new Map();
  for (let u of l) for (let d of u) c.set(d.agentType, d);
  return Array.from(c.values()).sort((u, d) => u.agentType.localeCompare(d.agentType));
}
function hasRequiredMcpServers(e, t) {
  if (!e.requiredMcpServers || e.requiredMcpServers.length === 0) return true;
  return e.requiredMcpServers.every((n) =>
    t.some((r) => r.toLowerCase().includes(n.toLowerCase())),
  );
}
function filterAgentsByMcpRequirements(e, t) {
  return e.filter((n) => hasRequiredMcpServers(n, t));
}
function clearAgentDefinitionsCache() {
  (getAgentDefinitionsWithOverrides.cache?.clear?.(), _q.cache?.clear?.(), ZZn());
}
function Gxf(e) {
  let { name: t, description: n } = e;
  if (!t || typeof t !== "string") return 'Missing required "name" field in frontmatter';
  if (t.startsWith("-")) return 'Invalid "name": names must not start with "-"';
  if (!n || typeof n !== "string") return 'Missing required "description" field in frontmatter';
  return "Unknown parsing error";
}
function Wxf(e, t) {
  if (!e.hooks) return;
  let n = IG().safeParse(e.hooks);
  if (!n.success) {
    T(`Invalid hooks in agent '${t}': ${n.error.message}`);
    return;
  }
  return n.data;
}
function parseAgentFromJson(e, t, n = "flagSettings") {
  try {
    if (e.startsWith("-"))
      return (
        T(`Agent '${e}' has an invalid name: names must not start with '-'`, {
          level: "error",
        }),
        null
      );
    let r = CLl().parse(t),
      o = TOe(r.tools);
    if (lu() && r.memory && o !== void 0) {
      let l = new Set(o);
      for (let c of [Wc, ka, Ds]) if (!l.has(c)) o = [...o, c];
    }
    let s = r.disallowedTools !== void 0 ? TOe(r.disallowedTools) : void 0,
      i = r.prompt;
    return {
      agentType: e,
      whenToUse: r.description,
      ...(o !== void 0 && {
        tools: o,
      }),
      ...(s !== void 0 && {
        disallowedTools: s,
      }),
      getSystemPrompt: () => {
        if (lu() && r.memory)
          return (
            i +
            `

` +
            B3e(e, r.memory)
          );
        return i;
      },
      source: n,
      ...(r.model && {
        model: r.model,
      }),
      ...(r.effort !== void 0 && {
        effort: r.effort,
      }),
      ...(r.permissionMode && {
        permissionMode: r.permissionMode,
      }),
      ...(r.mcpServers &&
        r.mcpServers.length > 0 && {
          mcpServers: r.mcpServers,
        }),
      ...(r.hooks && {
        hooks: r.hooks,
      }),
      ...(r.maxTurns !== void 0 && {
        maxTurns: r.maxTurns,
      }),
      ...(r.skills &&
        r.skills.length > 0 && {
          skills: r.skills,
        }),
      ...(r.initialPrompt && {
        initialPrompt: r.initialPrompt,
      }),
      ...(r.background && {
        background: r.background,
      }),
      ...(r.memory && {
        memory: r.memory,
      }),
      ...(r.isolation && {
        isolation: r.isolation,
      }),
    };
  } catch (r) {
    let o = r instanceof Error ? r.message : String(r);
    return (
      T(`Error parsing agent '${e}' from JSON: ${o}`, {
        level: "error",
      }),
      null
    );
  }
}
function parseAgentsFromJson(e, t = "flagSettings") {
  try {
    let n = jxf().parse(e);
    return Object.entries(n)
      .map(([r, o]) => parseAgentFromJson(r, o, t))
      .filter((r) => r !== null);
  } catch (n) {
    let r = n instanceof Error ? n.message : String(n);
    return (
      T(`Error parsing agents from JSON: ${r}`, {
        level: "error",
      }),
      []
    );
  }
}
function parseAgentFromMarkdown(e, t, n, r, o) {
  try {
    let { name: s, description: i } = n;
    if (!s || typeof s !== "string") return null;
    if (s.startsWith("-"))
      return (
        T(`Agent file ${e} has invalid name '${s}': names must not start with '-'`, {
          level: "error",
        }),
        null
      );
    if ((w3e("agent", n), !i || typeof i !== "string"))
      return (T(`Agent file ${e} is missing required 'description' in frontmatter`), null);
    i = i.replaceAll(
      "\\n",
      `
`,
    );
    let { color: a, model: l } = n,
      c;
    if (typeof l === "string" && l.trim().length > 0) {
      let W = l.trim();
      c = W.toLowerCase() === "inherit" ? "inherit" : W;
    }
    let u = n.background;
    if (u !== void 0 && u !== "true" && u !== "false" && u !== true && u !== false)
      T(
        `Agent file ${e} has invalid background value '${u}'. Must be 'true', 'false', or omitted.`,
      );
    let d = u === "true" || u === true ? true : void 0,
      p = ["user", "project", "local"],
      f = n.memory,
      m;
    if (f !== void 0)
      if (p.includes(f)) m = f;
      else T(`Agent file ${e} has invalid memory value '${f}'. Valid options: ${p.join(", ")}`);
    let g = ["worktree", "remote"],
      h = n.isolation,
      y;
    if (h !== void 0)
      if (g.includes(h)) y = h;
      else T(`Agent file ${e} has invalid isolation value '${h}'. Valid options: ${g.join(", ")}`);
    let b = n.effort,
      _ = b !== void 0 ? TU(b) : void 0;
    if (b !== void 0 && _ === void 0)
      T(`Agent file ${e} has invalid effort '${b}'. Valid options: ${xv.join(", ")} or an integer`);
    let S = n.permissionMode,
      A = S && yM.includes(S);
    if (S && !A) {
      let W = `Agent file ${e} has invalid permissionMode '${S}'. Valid options: ${yM.join(", ")}`;
      T(W);
    }
    let v = n.maxTurns,
      C = Mkn(v);
    if (v !== void 0 && C === void 0)
      T(`Agent file ${e} has invalid maxTurns '${v}'. Must be a positive integer.`);
    let x = vLl.basename(e, ".md"),
      I = TOe(n.tools);
    if (lu() && m && I !== void 0) {
      let W = new Set(I);
      for (let V of [Wc, ka, Ds]) if (!W.has(V)) I = [...I, V];
    }
    let k = n.disallowedTools,
      D = k !== void 0 ? TOe(k) : void 0,
      P = kQ(n.skills),
      O = n.initialPrompt,
      L = typeof O === "string" && O.trim() ? O : void 0,
      M = n.mcpServers,
      N;
    if (Array.isArray(M))
      N = M.map((W) => {
        let V = wLl().safeParse(W);
        if (V.success) return V.data;
        return (
          T(`Agent file ${e} has invalid mcpServers item: ${De(W)}. Error: ${V.error.message}`),
          null
        );
      }).filter((W) => W !== null);
    let B = Wxf(n, s),
      $ = r.trim();
    return {
      baseDir: t,
      agentType: s,
      whenToUse: i,
      ...(I !== void 0 && {
        tools: I,
      }),
      ...(D !== void 0 && {
        disallowedTools: D,
      }),
      ...(P !== void 0 && {
        skills: P,
      }),
      ...(L !== void 0 && {
        initialPrompt: L,
      }),
      ...(N !== void 0 &&
        N.length > 0 && {
          mcpServers: N,
        }),
      ...(B !== void 0 && {
        hooks: B,
      }),
      getSystemPrompt: () => {
        if (lu() && m) {
          let W = B3e(s, m);
          return (
            $ +
            `

` +
            W
          );
        }
        return $;
      },
      source: o,
      filename: x,
      ...(a &&
        typeof a === "string" &&
        Ky.includes(a) && {
          color: a,
        }),
      ...(c !== void 0 && {
        model: c,
      }),
      ...(_ !== void 0 && {
        effort: _,
      }),
      ...(A && {
        permissionMode: S,
      }),
      ...(C !== void 0 && {
        maxTurns: C,
      }),
      ...(d && {
        background: d,
      }),
      ...(m && {
        memory: m,
      }),
      ...(y && {
        isolation: y,
      }),
    };
  } catch (s) {
    let i = s instanceof Error ? s.message : String(s);
    return (
      T(`Error parsing agent from ${e}: ${i}`, {
        level: "error",
      }),
      null
    );
  }
}
function normalizeAgentType(e) {
  return e
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\p{White_Space}\p{Pd}_]+/gu, "");
}
var vLl, wLl, CLl, jxf, getAgentDefinitionsWithOverrides;
