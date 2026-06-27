// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X6
// matched 2.1.88 source: src/utils/api.ts
// class=modified  jaccard=0.3116  score=0.6031  fileCov=0.3919
// note: deminified; 8 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module X6] deps: constants/keys.ts, main.tsx, utils/git.ts, utils/fsOperations.ts, services/analytics/index.ts, rit, constants/prompts.ts, tools/WebSearchTool/prompt.ts, utils/settings/settings.ts, utils/config.ts, has-flag/index.js, memdir/findRelevantMemories.ts, commands/insights.ts, commands/commit-push-pr.ts, types/plugin.ts, tools/GlobTool/prompt.ts, utils/markdownConfigLoader.ts, utils/agentContext.ts, utils/sessionStorage.ts, constants/outputStyles.ts, tools/ExitPlanModeTool/constants.ts, tools/PowerShellTool/PowerShellTool.tsx, utils/xdg.ts, tools/AgentTool/built-in/exploreAgent.ts, tools/AgentTool/loadAgentsDir.ts, utils/task/diskOutput.ts, utils/fileOperationAnalytics.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, k0, utils/words.ts, tools/ScheduleCronTool/prompt.ts, services/analytics/growthbook.ts, utils/debug.ts, utils/permissions/permissionSetup.ts, utils/betas.ts, tools/ToolSearchTool/prompt.ts, utils/debug.ts, tools/EnterWorktreeTool/EnterWorktreeTool.ts, tools/AgentTool/agentMemory.ts, utils/thinking.ts, utils/attachments.ts, utils/attribution.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, entrypoints/sdk/coreSchemas.ts
((zYe = require("os")),
  (cac = require("path")),
  (mtm = (f4(), ro(URe)).BRIEF_PROACTIVE_SECTION),
  (oqo = (l3(), ro(CQ))),
  (rNe = {
    fable: "claude-fable-5",
    opus: "claude-opus-4-8",
    sonnet: "claude-sonnet-4-6",
    haiku: "claude-haiku-4-5-20251001",
  }));
sqo = Cn(() => {
  let e = Oe.CLAUDE_CODE_OWNERSHIP_FRAME,
    t = e || at("tengu_walnut_prism", false);
  if (t) T(`ownership_frame_arm_active source=${e ? "env" : "growthbook"}`);
  return t;
});
Ntm = Cn(() => {
  let e = Oe.CLAUDE_CODE_ACT_DONT_REDERIVE,
    t = e ?? at("tengu_cedar_lantern", true);
  if (t) T(`act_dont_rederive_arm_active source=${e !== void 0 ? "env" : "growthbook"}`);
  return t;
});
function Qtm(e) {
  return ((dac ??= new Map(Object.values(yc).map((t) => [mo(t.firstParty), t]))), dac.get(mo(e)));
}
function enm(e, t) {
  if (t.length === 0) return e;
  let n = e.properties;
  if (!n || typeof n !== "object") return e;
  let r = {
    ...n,
  };
  for (let o of t) delete r[o];
  return {
    ...e,
    properties: r,
  };
}
function tnm(e, t) {
  return enm(t, Ztm[e] ?? []);
}
async function nnm(e, t) {
  if (!iqo()) return e.prompt(t);
  if (e.searchHint) return e.searchHint;
  let n = await e.prompt(t);
  return (
    bi(
      n,
      `

`,
    ).trim() || n
  );
}
async function toolToAPISchema(tool, options) {
  let n = fr(),
    r = options.model ? Qtm(options.model) : void 0,
    o = ph(options.model) ? "L:" : "",
    s =
      (n === "vertex" && r?.eagerInputStreaming?.vertex) ||
      (n === "bedrock" && r?.eagerInputStreaming?.bedrock)
        ? "F:"
        : "",
    i = "",
    a =
      o +
      s +
      "" +
      ("inputJSONSchema" in tool && tool.inputJSONSchema
        ? `${tool.name}:${onm(tool.inputJSONSchema)}`
        : tool.name),
    l = Uvi(),
    c = l.get(a);
  if (!c) {
    let d = at("tengu_tool_pear", false),
      f =
        "inputJSONSchema" in tool && tool.inputJSONSchema
          ? tool.inputJSONSchema
          : aOe(tool.inputSchema);
    if (!el()) f = tnm(tool.name, f);
    if (
      ((c = {
        name: tool.name,
        description: await nnm(tool, options),
        input_schema: f,
      }),
      d && tool.strict === true && options.model && j4e(options.model))
    )
      c.strict = true;
    let m = process.env.CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING;
    if (
      !ml(m) &&
      ((n === "firstParty" && _u() && at("tengu_fgts", false)) ||
        (n === "vertex" &&
          !process.env.ANTHROPIC_VERTEX_BASE_URL &&
          r?.eagerInputStreaming?.vertex) ||
        (n === "bedrock" &&
          !process.env.ANTHROPIC_BEDROCK_BASE_URL &&
          r?.eagerInputStreaming?.bedrock) ||
        ut(m))
    )
      c.eager_input_streaming = true;
    l.set(a, c);
  }
  let u = {
    name: c.name,
    description: c.description,
    input_schema: c.input_schema,
    ...(c.strict && {
      strict: true,
    }),
    ...(c.eager_input_streaming && {
      eager_input_streaming: true,
    }),
  };
  if (options.deferLoading) u.defer_loading = true;
  if (options.cacheControl) u.cache_control = options.cacheControl;
  if (F4e()) {
    let d = new Set(["name", "description", "input_schema", "cache_control"]),
      p = Object.keys(u).filter((f) => !d.has(f));
    if (p.length > 0)
      return (
        logStripOnce(p),
        {
          name: u.name,
          description: u.description,
          input_schema: u.input_schema,
          ...(u.cache_control && {
            cache_control: u.cache_control,
          }),
        }
      );
  }
  return u;
}
function logStripOnce(stripped) {
  if (pac) return;
  ((pac = true),
    T(
      `[betas] Stripped from tool schemas: [${stripped.join(", ")}] (experimental betas disabled)`,
    ));
}
function onm(e) {
  let t = fac.get(e);
  if (t === void 0) ((t = De(e)), fac.set(e, t));
  return t;
}
function logAPIPrefix(systemPrompt) {
  let [t] = splitSysPromptPrefix(systemPrompt),
    n = t?.text;
  G("tengu_sysprompt_block", {
    length: n?.length ?? 0,
    hash: n ? mac.createHash("sha256").update(n).digest("hex") : "",
  });
}
function splitSysPromptPrefix(systemPrompt, options) {
  let n = Qxe(),
    r = systemPrompt.findIndex((c) => c === Oae);
  if (n && options?.skipGlobalCacheForSystemPrompt && r === -1) {
    G("tengu_sysprompt_using_tool_based_cache", {
      promptBlockCount: systemPrompt.length,
    });
    let c,
      u,
      d = [];
    for (let m of systemPrompt) {
      if (!m) continue;
      if (m === Oae) continue;
      if (m.startsWith("x-anthropic-billing-header")) c = m;
      else if (Jkn.has(m)) u = m;
      else d.push(m);
    }
    let p = [];
    if (c)
      p.push({
        text: c,
        cacheScope: null,
      });
    if (u)
      p.push({
        text: u,
        cacheScope: "org",
      });
    let f = d.join(`

`);
    if (f)
      p.push({
        text: f,
        cacheScope: "org",
      });
    return p;
  }
  if (n)
    if (r !== -1) {
      let c,
        u,
        d = [],
        p = [];
      for (let h = 0; h < systemPrompt.length; h++) {
        let y = systemPrompt[h];
        if (!y || y === Oae) continue;
        if (y.startsWith("x-anthropic-billing-header")) c = y;
        else if (Jkn.has(y)) u = y;
        else if (h < r) d.push(y);
        else p.push(y);
      }
      let f = [];
      if (c)
        f.push({
          text: c,
          cacheScope: null,
        });
      if (u)
        f.push({
          text: u,
          cacheScope: null,
        });
      let m = d.join(`

`);
      if (m)
        f.push({
          text: m,
          cacheScope: "global",
        });
      let g = p.join(`

`);
      if (g)
        f.push({
          text: g,
          cacheScope: "org",
        });
      return (
        G("tengu_sysprompt_boundary_found", {
          blockCount: f.length,
          staticBlockLength: m.length,
          dynamicBlockLength: g.length,
        }),
        f
      );
    } else
      G("tengu_sysprompt_missing_boundary_marker", {
        promptBlockCount: systemPrompt.length,
      });
  let o,
    s,
    i = [];
  for (let c of systemPrompt) {
    if (!c) continue;
    if (c.startsWith("x-anthropic-billing-header")) o = c;
    else if (Jkn.has(c)) s = c;
    else i.push(c);
  }
  let a = [];
  if (o)
    a.push({
      text: o,
      cacheScope: null,
    });
  if (s)
    a.push({
      text: s,
      cacheScope: "org",
    });
  let l = i.join(`

`);
  if (l)
    a.push({
      text: l,
      cacheScope: "org",
    });
  return a;
}
function ekl(e, t) {
  return [
    ...e,
    Object.entries(t).map(([n, r]) => `${n}: ${r}`).join(`
`),
  ].filter(Boolean);
}
function prependUserContext(messages, context) {
  if (Object.entries(context).length === 0) return messages;
  return [
    Rn({
      content: `<system-reminder>
As you answer the user's questions, you can use the following context:
${Object.entries(context).map(
  ([n, r]) => `# ${n}
${r}`,
).join(`
`)}

      IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.
</system-reminder>
`,
      isMeta: true,
    }),
    ...messages,
  ];
}
async function logContextMetrics(mcpConfigs, toolPermissionContext) {
  if (Rj()) return;
  let [{ tools: n }, r, o, s] = await Promise.all([
      yGt(mcpConfigs),
      F$(toolPermissionContext),
      uS(),
      hH(),
    ]),
    i = s.gitStatus?.length ?? 0,
    a = o.claudeMd?.length ?? 0,
    l = i + a,
    c = $t(),
    u = C8e(toolPermissionContext),
    d = w8e(u, c),
    p = await nOn(c, AbortSignal.timeout(1000), d),
    f = 0,
    m = 0,
    g = 0,
    h = 0,
    y = 0,
    b = r.filter((S) => !S.isMcp);
  ((f = n.length), (h = b.length));
  let _ = new Set();
  for (let S of n) {
    let A = S.name.split("__");
    if (A.length >= 3 && A[1]) _.add(A[1]);
  }
  m = _.size;
  for (let S of n) {
    let v = "inputJSONSchema" in S && S.inputJSONSchema ? S.inputJSONSchema : aOe(S.inputSchema);
    g += If(De(v));
  }
  for (let S of b) {
    let A = "inputJSONSchema" in S && S.inputJSONSchema ? S.inputJSONSchema : aOe(S.inputSchema);
    y += If(De(A));
  }
  G("tengu_context_size", {
    git_status_size: i,
    claude_md_size: a,
    has_user_email: Boolean(o.userEmail),
    total_context_size: l,
    project_file_count_rounded: p,
    mcp_tools_count: f,
    mcp_servers_count: m,
    mcp_tools_tokens: g,
    non_mcp_tools_count: h,
    non_mcp_tools_tokens: y,
  });
}
function normalizeToolInput(tool, input, agentId) {
  switch (tool.name) {
    case Ds: {
      try {
        if (input === null || typeof input !== "object") return input;
        let r = input,
          o = r.offset;
        if (typeof o === "string") {
          let s = o.trim();
          if (/^[-+]?\d+(\.\d+)?$/.test(s)) {
            let i = Number(s);
            if (Number.isFinite(i))
              return {
                ...r,
                offset: i,
              };
          }
        }
      } catch (r) {
        ke(Error(`normalizeToolInput Read.offset coercion failed: ${r}`));
      }
      return input;
    }
    case jD: {
      let r = bP(agentId),
        o = _P(agentId);
      return (
        H6n(),
        r !== null
          ? {
              ...input,
              plan: r,
              planFilePath: o,
            }
          : input
      );
    }
    case cl.name: {
      let r = cl.inputSchema.parse(input),
        { command: o, timeout: s, description: i } = r,
        a = $t(),
        l = o.replace(`cd ${a} && `, "");
      if (Vt() === "windows") l = l.replace(`cd ${TD(a)} && `, "");
      if (((l = l.replaceAll("\\\\;", "\\;")), /^echo\s+["']?[^|&;><]*["']?$/i.test(l.trim())))
        G("tengu_bash_tool_simple_echo", {});
      let c = "run_in_background" in r ? r.run_in_background : void 0;
      return {
        command: l,
        description: i,
        ...(s !== void 0 && {
          timeout: s,
        }),
        ...(i !== void 0 && {
          description: i,
        }),
        ...(c !== void 0 && {
          run_in_background: c,
        }),
        ...("dangerouslyDisableSandbox" in r &&
          r.dangerouslyDisableSandbox !== void 0 && {
            dangerouslyDisableSandbox: r.dangerouslyDisableSandbox,
          }),
        ...false,
      };
    }
    case xH.name: {
      let o = {
        ...input,
      };
      if ("old_str" in o) {
        if (!("old_string" in o)) o.old_string = o.old_str;
        delete o.old_str;
      }
      if ("new_str" in o) {
        if (!("new_string" in o)) o.new_string = o.new_str;
        delete o.new_str;
      }
      let s = xH.inputSchema.parse(o),
        { file_path: i, edits: a } = Del({
          file_path: s.file_path,
          edits: [
            {
              old_string: s.old_string,
              new_string: s.new_string,
              replace_all: s.replace_all,
            },
          ],
        });
      return {
        replace_all: a[0].replace_all,
        file_path: i,
        old_string: a[0].old_string,
        new_string: a[0].new_string,
      };
    }
    case dA.name: {
      let r = dA.inputSchema.parse(input),
        o = /\.(md|mdx)$/i.test(r.file_path);
      return {
        file_path: r.file_path,
        content: o ? r.content : _vo(r.content),
      };
    }
    case U8: {
      let r = input,
        o = r.task_id ?? r.agentId ?? r.bash_id,
        s = r.timeout ?? (typeof r.wait_up_to === "number" ? r.wait_up_to * 1000 : void 0);
      return {
        task_id: o ?? "",
        block: r.block ?? true,
        timeout: s ?? 30000,
      };
    }
    default:
      return input;
  }
}
function Xlr(e) {
  if (typeof e === "string") {
    if (!e.includes("\\u")) return e;
    return e.replace(
      /\\u([dD][89aAbB][0-9a-fA-F]{2})\\u([dD][c-fC-F][0-9a-fA-F]{2})|\\u([0-9a-fA-F]{4})/g,
      (t, n, r, o, s) => {
        let i = s;
        while (i > 0 && e[i - 1] === "\\") i--;
        if ((s - i) & 1) return t;
        if (n !== void 0) return String.fromCharCode(parseInt(n, 16), parseInt(r, 16));
        let a = parseInt(o, 16);
        if (a >= 55296 && a <= 57343) return t;
        return String.fromCharCode(a);
      },
    );
  }
  if (Array.isArray(e)) return e.map(Xlr);
  if (e !== null && typeof e === "object") {
    let t = {};
    for (let [n, r] of Object.entries(e)) t[n] = Xlr(r);
    return t;
  }
  return e;
}
function normalizeToolInputForAPI(tool, input) {
  switch (tool.name) {
    case jD: {
      if (input && typeof input === "object" && ("plan" in input || "planFilePath" in input)) {
        let { plan: n, planFilePath: r, ...o } = input;
        return o;
      }
      return input;
    }
    case xH.name: {
      if (input && typeof input === "object" && "edits" in input) {
        let { old_string: n, new_string: r, replace_all: o, ...s } = input;
        return s;
      }
      return input;
    }
    default:
      return input;
  }
}
var mac,
  dac,
  Ztm,
  pac = false,
  fac;
