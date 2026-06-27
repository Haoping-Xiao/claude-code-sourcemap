// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vEl
// matched 2.1.88 source: src/tasks/LocalMainSessionTask.ts
// class=modified  jaccard=0.216  score=0.3006  fileCov=0.4343
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vEl] deps: Xr, ft, jc, ii, At, Jt, K0, Wso, Fso, Gso
((wXn = require("fs")),
  (zoe = require("fs/promises")),
  (QAe = require("path")),
  (nyf = ve(() =>
    H.strictObject({
      method: H.enum([
        "project_info",
        "project_read",
        "project_search",
        "project_write",
        "project_delete",
      ]),
      path: H.string()
        .min(1)
        .max(255)
        .optional()
        .describe(
          'project_read/project_write/project_delete: doc path. project_write: an existing path is replaced in place; a new bare filename (no "/") is namespaced to "claude/<name>".',
        ),
      content: H.string()
        .optional()
        .describe(
          "project_write: inline doc text. Mutually exclusive with local_path. Use local_path for anything you have on disk.",
        ),
      local_path: H.string()
        .min(1)
        .optional()
        .describe(
          "project_write: a file inside the working directory to upload. The " +
            "tool reads, encodes, and uploads directly \u2014 contents never enter " +
            "your context. Mutually exclusive with content.",
        ),
      force: H.boolean()
        .optional()
        .describe(
          "project_write: bypass the chat-injection budget guard. Set only when the write is genuinely worth degrading chat to retrieval mode for everyone in the project.",
        ),
      query: H.string().min(1).optional().describe("project_search: knowledge-base query"),
      n: H.number()
        .int()
        .min(1)
        .max(15)
        .optional()
        .describe("project_search: number of hits (default 5)"),
    }),
  )),
  (Bzt = {
    notice: H.string().optional(),
  }),
  (mEl = ve(() =>
    H.object({
      knowledge_size: H.number(),
      max_knowledge_size: H.number(),
      search_threshold: H.number().nullable(),
      rag_active: H.boolean(),
      remaining_budget: H.number().nullable(),
    }),
  )),
  (ryf = ve(() =>
    H.discriminatedUnion("method", [
      H.object({
        method: H.literal("project_info"),
        ...Bzt,
        name: H.string(),
        description: H.string(),
        instructions: H.string(),
        docs: H.array(
          H.object({
            path: H.string(),
            created_at: H.string().nullable(),
          }),
        ),
        files: H.array(
          H.object({
            path: H.string(),
            file_kind: H.string(),
            created_at: H.string().nullable(),
          }),
        ).optional(),
        sync_sources: H.array(
          H.object({
            type: H.string().nullable(),
            config: H.record(H.string(), H.unknown()),
          }),
        ).optional(),
        knowledge: mEl(),
      }),
      H.object({
        method: H.literal("project_read"),
        ...Bzt,
        path: H.string(),
        file_kind: H.string().optional(),
        content: H.string().optional(),
        local_file: H.string().optional(),
        created_at: H.string().nullable(),
      }),
      H.object({
        method: H.literal("project_search"),
        ...Bzt,
        rag: H.boolean(),
        hits: H.array(
          H.object({
            name: H.string().optional(),
            doc_uuid: H.string().optional(),
            text: H.string().optional(),
          }),
        ).optional(),
        docs: H.array(H.string()).optional(),
      }),
      H.object({
        method: H.literal("project_write"),
        ...Bzt,
        path: H.string(),
        doc_uuid: H.string(),
        replaced: H.boolean(),
        knowledge: mEl(),
      }),
      H.object({
        method: H.literal("project_delete"),
        ...Bzt,
        path: H.string(),
        deleted: H.boolean(),
      }),
    ]),
  )),
  (oyf = {
    project_info: [],
    project_read: ["path"],
    project_search: ["query"],
    project_write: ["path"],
    project_delete: ["path"],
  }));
U$ = class U$ extends Error {
  constructor(e) {
    super(e);
    this.name = "ProjectsPreconditionError";
  }
};
cyf = ti({
  name: fEl,
  searchHint: "read and write the session's attached claude.ai project",
  maxResultSizeChars: 300000,
  persistenceThresholdCeiling: 300000,
  isEnabled() {
    return Us("allow_projects_tool") && gEl() !== void 0;
  },
  async description() {
    return BRo;
  },
  async prompt() {
    return BRo;
  },
  get inputSchema() {
    return nyf();
  },
  get outputSchema() {
    return ryf();
  },
  isConcurrencySafe() {
    return false;
  },
  isReadOnly(e) {
    return syf(e.method);
  },
  isDestructive(e) {
    return e.method === "project_write" || e.method === "project_delete";
  },
  userFacingName(e) {
    return `Project: ${vXn(e)}`;
  },
  getToolUseSummary(e) {
    return e?.method ? vXn(e) : null;
  },
  toAutoClassifierInput(e) {
    return vXn(e);
  },
  renderToolUseMessage(e) {
    return vXn(e);
  },
  async validateInput(e) {
    let t = oyf[e.method].filter((n) => e[n] === void 0);
    if (t.length > 0)
      return {
        result: false,
        message: `${e.method} requires: ${t.join(", ")}.`,
        errorCode: 1,
      };
    if (e.method === "project_write") {
      let n = e.content !== void 0,
        r = e.local_path !== void 0;
      if (n === r)
        return {
          result: false,
          message: 'project_write requires exactly one of "content" or "local_path".',
          errorCode: 1,
        };
    }
    return {
      result: true,
    };
  },
  async call(e, t) {
    let n = t.abortController.signal,
      r = gEl();
    if (!r)
      throw new U$(
        "No project attached to this session. Project tools are available when the session is started inside a claude.ai Project.",
      );
    let o = "";
    try {
      let s = await lyf();
      o = s.accessToken;
      let i = await gyf(e, r, n);
      return {
        data: s.expanded
          ? {
              ...i,
              notice: ayf,
            }
          : i,
      };
    } catch (s) {
      if (n.aborted) throw new ru();
      let i = Ksa(be(s), o);
      if (s instanceof U$) throw new U$(i);
      let a = on(s),
        l = Error(i);
      if (
        (Vo(s) && a !== "EACCES" && a !== "EPERM") ||
        Qie(s) ||
        a === "ENOSPC" ||
        a === "EDQUOT" ||
        a === "EIO"
      )
        l.code = a;
      throw l;
    }
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: De(e),
    };
  },
});
function yyf() {
  let e = xEl.randomBytes(8),
    t = "s";
  for (let n = 0; n < 8; n++) t += TASK_ID_ALPHABET[e[n] % TASK_ID_ALPHABET.length];
  return t;
}
function registerMainSessionTask(
  description,
  setAppState,
  mainThreadAgentDefinition,
  existingAbortController,
) {
  let o = yyf();
  ZAe(o, uk(Bu(o)));
  let s = existingAbortController ?? Sl(),
    i = mainThreadAgentDefinition ?? hyf,
    a = {
      ...LT(o, "local_agent", description),
      type: "local_agent",
      status: "running",
      agentId: o,
      ownerAgentId: ls(),
      prompt: description,
      selectedAgent: i,
      agentType: "main-session",
      abortController: s,
      retrieved: false,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      isBackgrounded: true,
      pendingMessages: [],
      retain: false,
      diskLoaded: false,
    };
  return (
    T(`[LocalMainSessionTask] Registering task ${o} with description: ${description}`),
    setAppState.register(a),
    T(
      `[LocalMainSessionTask] After registration, task ${o} exists in state: ${setAppState.get(o) !== void 0}`,
    ),
    {
      taskId: o,
      abortSignal: s.signal,
    }
  );
}
function completeMainSessionTask(taskId, success, setAppState) {
  let r = success ? "completed" : "failed",
    o,
    s;
  if (
    (setAppState.update(taskId, (i) => {
      if (i.status !== "running") return i;
      return (
        (o = i.toolUseId),
        (s = i.description),
        {
          ...i,
          status: r,
          endTime: Date.now(),
          notified: true,
        }
      );
    }),
    setAppState.updateTranscript(taskId, (i) => ({
      ...i,
      messages: i.messages.length ? [i.messages.at(-1)] : [],
    })),
    jy(taskId),
    s === void 0)
  )
    return;
  if (success) xe("task_main_session");
  else Le("task_main_session", "task_main_session_failed");
  xf(taskId, r, {
    toolUseId: o,
    summary: s,
  });
}
function isMainSessionTask(task) {
  if (typeof task !== "object" || task === null || !("type" in task) || !("agentType" in task))
    return false;
  return task.type === "local_agent" && task.agentType === "main-session";
}
function startBackgroundSession({
  messages: e,
  queryParams: t,
  description: n,
  taskRegistry: r,
  agentDefinition: o,
  setAppState: s,
}) {
  let { taskId: i, abortSignal: a } = registerMainSessionTask(n, r, o);
  Kpe(e, i).catch((u) => T(`bg-session initial transcript write failed: ${u}`));
  let l = t.toolUseContext.agentContext,
    c = {
      agentId: i,
      parentAgentId: YY(l) ? void 0 : l.agentId,
      agentType: "subagent",
      subagentName: "main-session",
      isBuiltIn: true,
      isAsync: true,
      isMainSession: true,
    };
  return (
    x9(c, async () => {
      let u = [...e],
        d = null;
      try {
        let p = [],
          f = 0,
          m = 0,
          g = e.at(-1)?.uuid ?? null;
        for await (let h of CN({
          messages: u,
          ...t,
          toolUseContext: {
            ...t.toolUseContext,
            agentId: Bu(i),
            agentContext: c,
          },
        })) {
          if (a.aborted) {
            let y = false;
            if (
              (r.update(
                i,
                (b) => (
                  (y = b.notified === true),
                  y
                    ? b
                    : {
                        ...b,
                        notified: true,
                      }
                ),
              ),
              !y)
            )
              xf(i, "stopped", {
                summary: n,
              });
            return;
          }
          if (
            h.type === "progress" &&
            h.data.type === "repl_tool_call" &&
            h.data.phase === "start"
          ) {
            if (
              (p.push({
                toolName: h.data.toolName,
                input: h.data.toolInput,
              }),
              p.length > IEl)
            )
              p.shift();
            let y = p.at(-1);
            r.update(i, (b) => {
              if (b.progress?.recentActivities?.at(-1) === y) return b;
              return {
                ...b,
                progress: {
                  tokenCount: m,
                  toolUseCount: f,
                  recentActivities: [...p],
                },
              };
            });
            continue;
          }
          if (h.type === "active_goal") {
            s?.((y) =>
              y.activeGoal === h.value
                ? y
                : {
                    ...y,
                    activeGoal: h.value,
                  },
            );
            continue;
          }
          if (h.type !== "user" && h.type !== "assistant" && h.type !== "system") continue;
          if (
            (u.push(h),
            (d = Bpe(u, h, d)),
            Kpe([h], i, g).catch((y) => T(`bg-session transcript write failed: ${y}`)),
            (g = h.uuid),
            h.type === "assistant")
          ) {
            for (let y of h.message.content)
              if (y.type === "text") m += If(y.text);
              else if (y.type === "tool_use") {
                if ((f++, y.name === Fm)) continue;
                let b = {
                  toolName: y.name,
                  input: y.input,
                };
                if ((p.push(b), p.length > IEl)) p.shift();
              }
          }
          (r.update(i, (y) => {
            let b = y.progress;
            if (b?.tokenCount === m && b.toolUseCount === f) return y;
            return {
              ...y,
              progress: {
                tokenCount: m,
                toolUseCount: f,
                recentActivities: b?.toolUseCount === f ? b.recentActivities : [...p],
              },
            };
          }),
            r.updateTranscript(i, (y) =>
              y.messages === u
                ? y
                : {
                    ...y,
                    messages: u,
                  },
            ));
        }
        completeMainSessionTask(i, true, r);
      } catch (p) {
        (ke(p), completeMainSessionTask(i, false, r));
      } finally {
        if (d) u.push(...d.preserved);
      }
    }),
    i
  );
}
var xEl,
  hyf,
  TASK_ID_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz",
  IEl = 5;
