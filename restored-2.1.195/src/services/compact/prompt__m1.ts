// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i0o
// matched 2.1.88 source: src/services/compact/prompt.ts
// class=modified (alt of src/services/compact/prompt.ts)  jaccard=0.0103  score=0.0127  fileCov=0.0515
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: workflowPermissionDialog
// [unwrapped __esm module i0o] deps: @modelcontextprotocol/sdk/dist/esm/types.js, dn, utils/debug.ts, utils/ShellCommand.ts, services/mockRateLimits.ts, screens/REPL.tsx, Il, utils/fsOperations.ts, utils/permissions/permissionSetup.ts, tasks/LocalAgentTask/LocalAgentTask.tsx, utils/crypto.ts, node-fetch/lib/index.js, zml, Kml, utils/markdownConfigLoader.ts, tools/AgentTool/loadAgentsDir.ts, main.tsx, utils/effort.ts, utils/pdfUtils.ts, services/api/overageCreditGrant.ts
((hgl = require("crypto")),
  (ygl = require("path")),
  (kpf = ve(() =>
    H.strictObject({
      script: H.string()
        .max(Oj)
        .refine(sEe, xpf)
        .optional()
        .describe(
          "Self-contained workflow script. Must begin with `export const meta = { name, description, phases }` (pure literal, no computed values) followed by the script body using agent()/parallel()/pipeline()/phase().",
        ),
      name: H.string()
        .optional()
        .describe(
          "Name of a predefined workflow (built-in or from .claude/workflows/). Resolves to a self-contained script.",
        ),
      description: H.string()
        .optional()
        .describe("Ignored \u2014 set the workflow description in the script's `meta` block."),
      title: H.string()
        .optional()
        .describe("Ignored \u2014 set the workflow title in the script's `meta` block."),
      args: H.unknown()
        .optional()
        .describe(
          "Optional input value exposed to the script as the global `args`, verbatim. Pass arrays/objects as actual JSON values, NOT as a " +
            "JSON-encoded string \u2014 a stringified list breaks `args.filter`/" +
            "`args.map` in the script. Use for parameterized named workflows (e.g. a research question).",
        ),
      scriptPath: H.string()
        .optional()
        .describe(
          "Path to a workflow script file on disk. Every Workflow invocation persists its script under the session directory and returns the path in the tool result. To iterate, edit that file with Write/Edit and re-invoke Workflow with the same `scriptPath` instead of re-sending the full script. Takes precedence over `script` and `name`.",
        ),
      resumeFromRunId: H.string()
        .regex(/^wf_[a-z0-9-]{6,}$/)
        .optional()
        .describe(
          `Run ID of a prior Workflow invocation to resume from. Completed agent() calls with unchanged (prompt, opts) return their cached results instantly; only edited or new calls re-run. Same-session only. Stop the prior run first (${QD}) before resuming.`,
        ),
      ...!1,
    }).refine((e) => e.script || e.name || e.scriptPath, {
      message: "Must provide script, name, or scriptPath",
    }),
  )),
  (Rpf = ve(() =>
    H.object({
      status: H.enum(["async_launched", "remote_launched"]),
      taskId: H.string(),
      taskType: H.enum(["local_workflow", "remote_agent"])
        .optional()
        .describe(
          "TaskType of the registered background task \u2014 'local_workflow' for in-process runs, 'remote_agent' when remote:true dispatches to CCR. Set on all new writes; absent only on transcripts written before this field existed.",
        ),
      workflowName: H.string()
        .optional()
        .describe(
          "meta.name from the workflow script \u2014 same value as task_started.workflow_name. Set on all new writes; absent only on transcripts written before this field existed.",
        ),
      runId: H.string()
        .optional()
        .describe(
          "Local workflow run identifier for resumeFromRunId. Absent for remote_launched (the CCR session URL is the resume handle there) and on transcripts written before this field existed.",
        ),
      summary: H.string().optional(),
      transcriptDir: H.string()
        .optional()
        .describe("Directory where subagent transcripts are written during execution"),
      scriptPath: H.string()
        .optional()
        .describe(
          "Path to the persisted workflow script for this invocation. Editable via Write/Edit; pass back as `scriptPath` to re-run without resending the script.",
        ),
      sessionUrl: H.string().optional().describe("CCR session URL when status is remote_launched"),
      warning: H.string()
        .optional()
        .describe(
          "Non-blocking heads-up (e.g. local git state diverges from the pushed branch the cloud session will clone)",
        ),
      error: H.string().optional().describe("Set if syntax check failed"),
    }),
  )));
u7n = class u7n extends Error {
  constructor(e) {
    super(e);
    this.name = "WorkflowInputError";
  }
};
ggl = {
  result: !1,
  message: "Tool dispatch was retracted by a server fallback; the input may be truncated.",
  errorCode: 7,
};
Mpf = ti({
  name: uC,
  aliases: ["RunWorkflow"],
  searchHint: "orchestrate subagents with deterministic JavaScript workflow",
  maxResultSizeChars: 1e5,
  isEnabled: () => JS(),
  async prompt() {
    return Jko;
  },
  async description() {
    return Jko;
  },
  get inputSchema() {
    return kpf();
  },
  get outputSchema() {
    return Rpf();
  },
  toAutoClassifierInput(e) {
    return e.script ?? e.name ?? "";
  },
  async validateInput(e, t) {
    if (cSe(t.abortController.signal)) return ggl;
    if (Nkn())
      return {
        result: !1,
        message: "Dynamic workflows are disabled by managed settings (`disableWorkflows`).",
        errorCode: 5,
      };
    if (!JS())
      return {
        result: !1,
        message:
          'Dynamic workflows are not enabled for this session (org policy, launch gate, or the "Dynamic workflows" setting in /config).',
        errorCode: 6,
      };
    let n = await mgl(e);
    if (cSe(t.abortController.signal)) return ggl;
    if ("error" in n)
      return {
        result: !1,
        message: n.error,
        errorCode: 1,
      };
    let r = ZI(n.script);
    if ("error" in r)
      return {
        result: !1,
        message: `Invalid workflow script: ${r.error}`,
        errorCode: 2,
      };
    if (e.script && uml(r.scriptBody))
      return {
        result: !1,
        message:
          "Workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.",
        errorCode: 4,
      };
    if (e.resumeFromRunId) {
      for (let [o, s] of Object.entries(t.taskRegistry.all()))
        if (
          s.type === "local_workflow" &&
          s.status === "running" &&
          s.workflowRunId === e.resumeFromRunId
        )
          return {
            result: !1,
            message: `Workflow ${e.resumeFromRunId} is still running (task ${o}). Stop it first with ${QD}({taskId: "${o}"}) before resuming.`,
            errorCode: 3,
          };
    }
    return {
      result: !0,
    };
  },
  async checkPermissions(e, t) {
    let n = Fr(t),
      r = e.scriptPath ? void 0 : e.name,
      o = (c) => (r ? Goe(n, uC, c).get(r) : void 0),
      s = o("deny");
    if (s)
      return {
        behavior: "deny",
        message: `Workflow ${r} blocked by permission rules`,
        decisionReason: {
          type: "rule",
          rule: s,
        },
      };
    let i = e;
    if (e.scriptPath) {
      let c = await U3e(e.scriptPath);
      if (!("error" in c))
        i = {
          ...e,
          script: c.script,
        };
    } else if (e.name) {
      let c = await B6t(e.name, $t());
      i = {
        ...e,
        script: c?.script,
      };
    }
    let a = o("ask");
    if (a)
      return {
        behavior: "ask",
        message: "Review dynamic workflow before running",
        updatedInput: i,
        decisionReason: {
          type: "rule",
          rule: a,
        },
      };
    let l = o("allow");
    if (l)
      return {
        behavior: "allow",
        updatedInput: i,
        decisionReason: {
          type: "rule",
          rule: l,
        },
      };
    return {
      behavior: "ask",
      message: "Review dynamic workflow before running",
      updatedInput: i,
      ...(r && {
        suggestions: [
          {
            type: "addRules",
            rules: [
              {
                toolName: uC,
                ruleContent: r,
              },
            ],
            behavior: "allow",
            destination: "localSettings",
          },
        ],
      }),
    };
  },
  userFacingName() {
    return "Workflow";
  },
  getToolUseSummary(e) {
    if (e?.name) return `dynamic workflow: ${e.name}`;
    if (!e?.script) return null;
    let t = ZI(e.script);
    if (!("error" in t)) return t.meta.description;
    let n =
      e.script
        .split(
          `
`,
        )
        .find((r) => r.trim()) ?? "";
    return n.length > 50 ? n.slice(0, 49) + "\u2026" : n;
  },
  async call(e, t, n, r, o) {
    let s = await mgl(e);
    if ("error" in s) throw new u7n(s.error);
    let { script: i, source: a, resolvedScriptPath: l } = s,
      c = ZI(i);
    if ("error" in c) throw new u7n(`Invalid workflow script: ${c.error}`);
    let u = e.resumeFromRunId ?? `wf_${hgl.randomUUID().slice(0, 12)}`,
      d = iN("local_workflow"),
      p = c.meta.description,
      f = c.meta.name,
      m = K_t(c.scriptBody);
    if (!m.ok)
      return (
        Le("task_local_workflow", "compile_failed"),
        {
          data: {
            status: "async_launched",
            taskId: d,
            taskType: "local_workflow",
            workflowName: f,
            runId: u,
            summary: p,
            error: m.error,
          },
        }
      );
    let g = Foe(u),
      h = l ?? VNi(f, u, i),
      y = e.scriptPath ? "scriptPath" : (a ?? "inline"),
      b = Lpf(f, a),
      _ = Ppf(c.meta.description, a);
    return (
      G("tengu_workflow_launched", {
        invocation_mode: We(e.scriptPath ? "scriptPath" : e.name ? "named" : "inline"),
        workflow_source: $e(y),
        workflow_name: b,
        workflow_description: _,
        phase_count: c.meta.phases?.length ?? 0,
        launched_from_subagent: t.agentId != null,
        has_args: e.args != null,
        is_resume: e.resumeFromRunId != null,
        script_size_chars: i.length,
      }),
      Yko({
        taskId: d,
        workflowRunId: u,
        script: i,
        scriptPath: h,
        args: e.args,
        meta: c.meta,
        vmScript: m.vmScript,
        toolUseContext: t,
        canUseTool: n,
        toolUseId: t.toolUseId,
        transcriptDir: g,
        telemetry: {
          source: y,
          name: b,
          description: _,
        },
        isResume: e.resumeFromRunId != null,
      }),
      {
        data: {
          status: "async_launched",
          taskId: d,
          taskType: "local_workflow",
          workflowName: f,
          runId: u,
          summary: p,
          transcriptDir: g,
          scriptPath: h,
        },
      }
    );
  },
  renderToolUseMessage: cgl,
  renderToolUseProgressMessage: ugl,
  renderToolResultMessage: dgl,
  renderToolUseRejectedMessage: pgl,
  mapToolResultToToolResultBlockParam(e, t) {
    if (e.error)
      return {
        tool_use_id: t,
        type: "tool_result",
        content: `Workflow script has a syntax error and was not launched:
${e.error}`,
        is_error: !0,
      };
    if (e.status === "remote_launched")
      return {
        tool_use_id: t,
        type: "tool_result",
        content:
          `Workflow launched in a remote CCR session. Task ID: ${e.taskId}
Session: ${e.sessionUrl}
` +
          (e.summary
            ? `Summary: ${e.summary}
`
            : "") +
          (e.warning
            ? `Warning: ${e.warning}
`
            : "") +
          `
The workflow runs against a fresh clone of the pushed branch; phase progress is visible at the session URL, not in /workflows. You will be notified when it completes.`,
        is_error: !1,
      };
    let n = e.summary
        ? `
Summary: ${e.summary}`
        : "",
      r = e.transcriptDir
        ? `
Transcript dir: ${e.transcriptDir}`
        : "",
      o = e.scriptPath
        ? `
Script file: ${e.scriptPath}
(Edit this file with Write/Edit and re-invoke Workflow with {scriptPath: "${e.scriptPath}"} to iterate without resending the script.)`
        : "",
      s =
        e.scriptPath && e.runId
          ? `
Run ID: ${e.runId}
To resume after editing the script: Workflow({scriptPath: "${e.scriptPath}", resumeFromRunId: "${e.runId}"}) \u2014 completed agents return cached results.`
          : "",
      i = `Workflow launched in background. Task ID: ${e.taskId}${n}${r}${o}${s}

You will be notified when it completes. Use /workflows to watch live progress.`;
    return {
      tool_use_id: t,
      type: "tool_result",
      content: i,
      is_error: !1,
    };
  },
});
var workflowPermissionDialog;
