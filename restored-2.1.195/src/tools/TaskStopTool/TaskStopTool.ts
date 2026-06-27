// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q0o
// matched 2.1.88 source: src/tools/TaskStopTool/TaskStopTool.ts
// class=modified  jaccard=0.5476  score=0.6503  fileCov=0.7761
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: sanitizeSessionNamePrefix, getBridgeTokenOverride, getBridgeSessionNamePrefix, getBridgeBaseUrlOverride, getBridgeBaseUrl, getBridgeAccessToken
// [unwrapped __esm module q0o] deps: Xr, ii, q6e, hyt, Jt, yyl
((rmf = ve(() =>
  H.strictObject({
    task_id: H.string().optional().describe("The ID of the background task to stop"),
    shell_id: H.string().optional().describe("Deprecated: use task_id instead"),
  }),
)),
  (omf = ve(() =>
    H.object({
      message: H.string().describe("Status message about the operation"),
      task_id: H.string().describe("The ID of the task that was stopped"),
      task_type: H.string().describe("The type of the task that was stopped"),
      command: H.string().optional().describe("The command or description of the stopped task"),
    }),
  )),
  (gbt = ti({
    name: QD,
    searchHint: "kill a running background task",
    aliases: ["KillShell", "KillBash"],
    maxResultSizeChars: 100000 /* 1e5 */,
    userFacingName: () => "Stop Task",
    get inputSchema() {
      return rmf();
    },
    get outputSchema() {
      return omf();
    },
    shouldDefer: true,
    isConcurrencySafe() {
      return true;
    },
    toAutoClassifierInput(e) {
      return e.task_id ?? e.shell_id ?? "";
    },
    async validateInput({ task_id: e, shell_id: t }, { taskRegistry: n }) {
      let r = e ?? t;
      if (!r)
        return {
          result: false,
          message: "Missing required parameter: task_id",
          errorCode: 1,
        };
      let o = n.get(r);
      if (!o)
        return {
          result: false,
          message: `No task found with ID: ${r}`,
          errorCode: 1,
        };
      if (o.status !== "running" && !azt(o))
        return {
          result: false,
          message: `Task ${r} is not running (status: ${o.status})`,
          errorCode: 3,
        };
      return {
        result: true,
      };
    },
    async description() {
      return "Stop a running background task by ID";
    },
    async prompt() {
      return roa;
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: De(e),
      };
    },
    renderToolUseMessage: gyl,
    renderToolResultMessage: hyl,
    async call({ task_id: e, shell_id: t }, n) {
      let { taskRegistry: r, setAppState: o } = n,
        s = e ?? t;
      if (!s) throw Error("Missing required parameter: task_id");
      let i = await mbt(s, {
        taskRegistry: r,
        setAppState: o,
        callerAgentId: gyt(n),
        killedBy: "parent",
      });
      return {
        data: {
          message: `Successfully stopped task: ${i.taskId} (${i.command})`,
          task_id: i.taskId,
          task_type: i.taskType,
          command: i.command,
        },
      };
    },
  })));
function getBridgeTokenOverride() {
  return;
}
function getBridgeBaseUrlOverride() {
  return;
}
function getBridgeAccessToken() {
  let e = getBridgeTokenOverride();
  if (e !== void 0) return e;
  if (!Jl() || !bo()) return;
  return Ws()?.accessToken;
}
function getBridgeBaseUrl() {
  return getBridgeBaseUrlOverride() ?? $s().BASE_API_URL;
}
function getBridgeSessionNamePrefix() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || _yl.hostname();
  return sanitizeSessionNamePrefix(e) || "remote-control";
}
function sanitizeSessionNamePrefix(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
var _yl;
