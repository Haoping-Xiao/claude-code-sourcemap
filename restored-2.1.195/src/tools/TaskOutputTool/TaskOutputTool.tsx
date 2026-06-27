// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mRo
// matched 2.1.88 source: src/tools/TaskOutputTool/TaskOutputTool.tsx
// class=modified  jaccard=0.367  score=0.5389  fileCov=0.5351
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mRo = E(() => {
  Xr();
  B_();
  Ko();
  E5();
  b8t();
  ql();
  Ye();
  nk();
  ii();
  At();
  co();
  PDe();
  Jt();
  sr();
  bH();
  pRo();
  F8t();
  qzn();
  ((x_l = R(lt(), 1)),
    (nm = R(se(), 1)),
    (Agf = ve(() =>
      H.strictObject({
        task_id: H.string().describe("The task ID to get output from"),
        block: Y0(H.boolean().default(!0)).describe("Whether to wait for completion"),
        timeout: H.number().min(0).max(600000).default(30000).describe("Max wait time in ms"),
      }),
    )));
  uXn = ti({
    name: U8,
    searchHint: "read output/logs from a background task",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    aliases: ["AgentOutputTool", "BashOutputTool", "AgentOutput", "BashOutput"],
    userFacingName() {
      return "Task Output";
    },
    get inputSchema() {
      return Agf();
    },
    async description() {
      return "[Deprecated] \u2014 for bash and remote_agent tasks, prefer Read on the output file path; for local_agent tasks, use the Agent tool result directly";
    },
    isConcurrencySafe(e) {
      return this.isReadOnly?.(e) ?? !1;
    },
    isEnabled() {
      return !0;
    },
    isReadOnly(e) {
      return !0;
    },
    toAutoClassifierInput(e) {
      return e.task_id;
    },
    async prompt() {
      return `DEPRECATED: Background tasks return their output file path in the tool result, and you receive a <task-notification> with the same path when the task completes.
- For bash tasks: prefer using the Read tool on that output file path \u2014 it contains stdout/stderr.
- For local_agent tasks: use the Agent tool result directly. Do NOT Read the .output file \u2014 it is a symlink to the full subagent conversation transcript (JSONL) and will overflow your context window.
- For remote_agent tasks: prefer using the Read tool on the output file path \u2014 it contains the streamed remote session output (same as bash).

- Retrieves output from a running or completed task (background shell, agent, or remote session)
- Takes a task_id parameter identifying the task
- Returns the task output along with status information
- Use block=true (default) to wait for task completion
- Use block=false for non-blocking check of current status
- Task IDs can be found using the /tasks command
- Works with all task types: background shells, async agents, and remote sessions`;
    },
    async validateInput({ task_id: e }, { getAppState: t }) {
      if (!e)
        return {
          result: !1,
          message: "Task ID is required",
          errorCode: 1,
        };
      if (!t().tasks?.[e])
        return {
          result: !1,
          message: `No task found with ID: ${e}`,
          errorCode: 2,
        };
      return {
        result: !0,
      };
    },
    async call(e, t, n, r, o) {
      let { task_id: s, block: i, timeout: a } = e,
        c = t.getAppState().tasks?.[s];
      if (!c) throw Error(`No task found with ID: ${s}`);
      if (!i) {
        if (c.status !== "running" && c.status !== "pending")
          return (
            t.taskRegistry.update(s, (d) => ({
              ...d,
              notified: !0,
            })),
            {
              data: {
                retrieval_status: "success",
                task: await cXn(c),
              },
            }
          );
        return {
          data: {
            retrieval_status: "not_ready",
            task: await cXn(c),
          },
        };
      }
      if (o)
        o({
          type: "progress",
          toolUseID: `task-output-waiting-${Date.now()}`,
          data: {
            type: "waiting_for_task",
            taskDescription: c.description,
            taskType: c.type,
          },
        });
      let u = await Hgf(s, t.getAppState, a, t.abortController);
      if (!u)
        return {
          data: {
            retrieval_status: "timeout",
            task: null,
          },
        };
      if (u.status === "running" || u.status === "pending")
        return {
          data: {
            retrieval_status: "timeout",
            task: await cXn(u),
          },
        };
      return (
        t.taskRegistry.update(s, (d) => ({
          ...d,
          notified: !0,
        })),
        {
          data: {
            retrieval_status: "success",
            task: await cXn(u),
          },
        }
      );
    },
    mapToolResultToToolResultBlockParam(e, t) {
      let n = [];
      if ((n.push(`<retrieval_status>${e.retrieval_status}</retrieval_status>`), e.task)) {
        if (
          (n.push(`<task_id>${e.task.task_id}</task_id>`),
          n.push(`<task_type>${e.task.task_type}</task_type>`),
          n.push(`<status>${e.task.status}</status>`),
          e.task.exitCode !== void 0 && e.task.exitCode !== null)
        )
          n.push(`<exit_code>${e.task.exitCode}</exit_code>`);
        if (e.task.output?.trim()) {
          let { content: r } = I_l(e.task.output, e.task.task_id);
          n.push(`<output>
${r.trimEnd()}
</output>`);
        }
        if (e.task.error) n.push(`<error>${e.task.error}</error>`);
      }
      return {
        tool_use_id: t,
        type: "tool_result",
        content: n.join(`

`),
      };
    },
    renderToolUseMessage(e) {
      let { block: t = !0 } = e;
      if (!t) return "non-blocking";
      return "";
    },
    renderToolUseTag(e) {
      if (!e.task_id) return null;
      return nm.jsxs(w, {
        dimColor: !0,
        children: [" ", e.task_id],
      });
    },
    renderToolUseProgressMessage(e) {
      let n = e.at(-1)?.data;
      return nm.jsxs(U, {
        flexDirection: "column",
        children: [
          n?.taskDescription &&
            nm.jsxs(w, {
              children: ["\xA0\xA0", n.taskDescription],
            }),
          nm.jsxs(w, {
            children: [
              "\xA0\xA0\xA0\xA0\xA0Waiting for task",
              " ",
              nm.jsx(w, {
                dimColor: !0,
                children: nm.jsx(ht, {
                  chord: "escape",
                  action: "give additional instructions",
                  parens: !0,
                  format: {
                    keyCase: "lower",
                  },
                }),
              }),
            ],
          }),
        ],
      });
    },
    renderToolResultMessage(e, t, { verbose: n, theme: r }) {
      return nm.jsx(Tgf, {
        content: e,
        verbose: n,
        theme: r,
      });
    },
    renderToolUseRejectedMessage() {
      return nm.jsx(jpe, {});
    },
    renderToolUseErrorMessage(e, { verbose: t }) {
      return nm.jsx(AT, {
        result: e,
        verbose: t,
      });
    },
  });
});
function k_l() {
  if (fr() !== "firstParty") return !1;
  if (!Oe.CLAUDE_CODE_WEBSEARCH_USE_CCR_PROXY) return !1;
  return !!Z8t();
}
function wgf() {
  return `${(Oe.ANTHROPIC_BASE_URL || "https://api.anthropic.com").replace(/\/+$/, "")}/v1/code/sessions/${encodeURIComponent(Z8t())}/worker/web-search`;
}
async function R_l(e, t, n) {
  let r = cke(),
    o;
  try {
    o = await po.post(
      wgf(),
      {
        query: e,
        ...(n?.allowed_domains?.length && {
          allowed_domains: n.allowed_domains,
        }),
        ...(n?.blocked_domains?.length && {
          blocked_domains: n.blocked_domains,
        }),
      },
      {
        signal: t,
        timeout: 40000,
        maxContentLength: 12582912,
        headers: {
          ...r,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
        },
        validateStatus: () => !0,
      },
    );
  } catch (i) {
    if (dM(i)) throw new ru();
    let a = i instanceof Error && "code" in i ? String(i.code) : void 0;
    return (
      T(`ccr websearch-proxy transport error: ${a}`, {
        level: "warn",
      }),
      {
        ok: !1,
        source: "proxy",
        statusCode: 502,
        errorType: "PROXY_TRANSPORT",
        errorMessage: `Request to the WebSearch proxy failed (${a ?? "transport error"}).`,
      }
    );
  }
  if (o.status !== 200) {
    let i = typeof o.data?.message === "string" ? o.data.message.slice(0, 200) : void 0;
    return (
      T(`ccr websearch-proxy returned HTTP ${o.status}${i ? `: ${i}` : ""}`, {
        level: "warn",
      }),
      {
        ok: !1,
        source: "proxy",
        statusCode: o.status,
        errorType: "PROXY_REJECTED",
        errorMessage: `The WebSearch proxy rejected the request (HTTP ${o.status}${i ? `: ${i}` : ""}).`,
      }
    );
  }
  let s = vgf().safeParse(o.data);
  if (!s.success)
    return (
      T(`ccr websearch-proxy returned unparseable body: ${s.error.message}`, {
        level: "warn",
      }),
      {
        ok: !1,
        source: "proxy",
        statusCode: 502,
        errorType: "PROXY_BAD_RESPONSE",
        errorMessage: "The WebSearch proxy returned a malformed response.",
      }
    );
  if (s.data.error)
    return (
      T(`ccr websearch-proxy search error: ${s.data.error.error_type}`, {
        level: "warn",
      }),
      {
        ok: !1,
        source: "target",
        statusCode: 502,
        errorType: s.data.error.error_type,
        errorMessage: s.data.error.error_message,
      }
    );
  return {
    ok: !0,
    results: s.data.results
      .filter((i) => i.url)
      .map((i) => ({
        title: i.title,
        url: i.url,
      })),
  };
}
var vgf;
