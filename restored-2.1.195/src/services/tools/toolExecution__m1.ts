// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xyl
// matched 2.1.88 source: src/services/tools/toolExecution.ts
// class=modified (alt of src/services/tools/toolExecution.ts)  jaccard=0.0524  score=0.1916  fileCov=0.0672
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Xyl]
Mmf = new Set([
  "Read",
  "Write",
  "Edit",
  "Glob",
  "Grep",
  "NotebookEdit",
  "TodoWrite",
  "TaskCreate",
  "TaskGet",
  "TaskList",
  "TaskStop",
  "TaskUpdate",
]);
function Jyl(e, t) {
  return {
    error: t,
  };
}
function rRo(e, t, n, r, o) {
  let s = {},
    i = [],
    a = [...t.options.tools, ...e];
  for (let l of e) s[l.name] = checkPermissionsAndCallTool(l, t, n, r, i, a, o);
  return s;
}
function checkPermissionsAndCallTool(
  tool,
  toolUseContext,
  input,
  r,
  canUseTool,
  assistantMessage,
  messageId,
) {
  let a = async (l, c) => {
    let u = c?.toolUseID ?? `repl_${Qyl.randomUUID()}`,
      d = (g) => (
        canUseTool.push({
          id: u,
          name: tool.name,
          input: l,
        }),
        messageId?.({
          type: "progress",
          toolUseID: u,
          data: {
            type: "repl_tool_call",
            toolName: tool.name,
            toolInput: l,
            toolUseId: u,
            phase: "error",
            error: g,
          },
        }),
        Jyl(tool.name, g)
      ),
      p = (g, h) =>
        messageId?.({
          type: "progress",
          toolUseID: u,
          data: {
            type: "repl_tool_call",
            toolName: tool.name,
            toolInput: g,
            toolUseId: u,
            phase: "executing",
            nativeTimeoutMs: h,
          },
        });
    messageId?.({
      type: "progress",
      toolUseID: u,
      data: {
        type: "repl_tool_call",
        toolName: tool.name,
        toolInput: l,
        toolUseId: u,
        phase: "start",
      },
    });
    let f = l,
      m;
    try {
      let g = tool.inputSchema.safeParse(l);
      if (!g.success) return d(Y6e(tool.name, g.error));
      let h = g.data,
        y = Hzt(tool, toolUseContext);
      if (y.denyMessage)
        return (
          G("tengu_tool_use_isolation_latch_denied", {
            toolName: Ui(tool.name),
            toolUseID: u,
            isMcp: tool.isMcp ?? false,
            isolationLatch: Oo(y.activeLatch),
            isolationClassifiedAs: Oo(y.classifiedAs),
            replInnerCall: true,
          }),
          d(y.denyMessage)
        );
      let b = h,
        _,
        S;
      for await (let L of _zt(
        toolUseContext,
        tool,
        h,
        u,
        r.message.id,
        r.requestId,
        void 0,
        void 0,
      )) {
        if (L.type === "hookPermissionResult") _ = L.hookPermissionResult;
        if (L.type === "hookUpdatedInput") b = L.updatedInput;
        if (L.type === "stopReason") S = L.stopReason;
        if (L.type === "stop") return d(S ?? "Blocked by PreToolUse hook");
      }
      let A = {
          ...toolUseContext,
          options: {
            ...toolUseContext.options,
            tools: assistantMessage,
          },
          messages: [
            ...toolUseContext.messages,
            ...canUseTool.map((L) =>
              dE({
                content: [
                  {
                    type: "tool_use",
                    id: L.id,
                    name: L.name,
                    input: L.input,
                  },
                ],
                isVirtual: true,
              }),
            ),
          ],
        },
        v = await yzt(_, tool, b, A, input, r, u),
        C = v.decision;
      if (((b = v.input), C.behavior !== "allow")) {
        toolUseContext.onPermissionDenial?.(tool, u, b);
        let L = C.behavior === "deny" ? (C.message ?? "Permission denied") : "Permission denied";
        return d(`Permission denied for ${tool.name}: ${L}`);
      }
      if (
        ((f = C.updatedInput ?? b),
        tool.name === Co && f && typeof f === "object" && "_simulatedSedEdit" in f)
      ) {
        let { _simulatedSedEdit: L, ...M } = f;
        f = M;
      }
      let x = Yyl(tool, f);
      (p(f, x),
        G("tengu_repl_inner_executing", {
          toolName: Ui(tool.name),
          nativeTimeoutMs: x,
          isMcp: tool.isMcp ?? false,
        }),
        (m = Date.now()));
      let I = await tool.call(
          f,
          {
            ...toolUseContext,
            toolUseId: u,
            userModified: C.userModified ?? false,
            fileReadingLimits: {
              maxTokens: 1 / 0,
              maxSizeBytes: 268435456,
            },
            globLimits: {
              maxResults: 25000,
            },
          },
          input,
          r,
        ),
        k = Date.now() - m;
      p(f, void 0);
      let D = false;
      for await (let L of gzt(
        toolUseContext,
        tool,
        u,
        r.message.id,
        f,
        I.data,
        r.requestId,
        void 0,
        void 0,
        k,
      ))
        if (
          ((D = true),
          "updatedToolOutput" in L &&
            tool.outputSchema?.safeParse(L.updatedToolOutput)?.success !== false)
        )
          I.data = L.updatedToolOutput;
      if (D) Z7n(tool.name, u, f, toolUseContext.readFileState);
      let P = I.data;
      if (tool.isMcp && Array.isArray(I.data)) {
        let L = I.data
          .filter(
            (M) =>
              M != null &&
              typeof M === "object" &&
              "type" in M &&
              M.type === "text" &&
              "text" in M &&
              typeof M.text === "string",
          )
          .map((M) => M.text);
        if (L.length === I.data.length && L.length > 0) {
          let M = L.join(`
`);
          try {
            P = Ft(M);
          } catch {
            P = M;
          }
        }
      }
      (canUseTool.push({
        id: u,
        name: tool.name,
        input: f,
      }),
        messageId?.({
          type: "progress",
          toolUseID: u,
          data: {
            type: "repl_tool_call",
            toolName: tool.name,
            toolInput: f,
            toolUseId: u,
            phase: "complete",
            result: P,
          },
        }));
      let O = P;
      if (
        O != null &&
        typeof O === "object" &&
        O.file != null &&
        typeof O.file === "object" &&
        typeof O.file.base64 === "string" &&
        O.file.base64.length > 0
      ) {
        let L = O.file.base64.length;
        if (O.type === "image" && typeof O.file.type === "string")
          return {
            ...O,
            file: {
              ...O.file,
              base64: `[${L} base64 chars \u2014 rendered as image in REPL result]`,
            },
          };
        if (O.type === "pdf")
          return {
            ...O,
            file: {
              ...O.file,
              base64: `[${L} base64 chars \u2014 rendered as document in REPL result]`,
            },
          };
      }
      return P;
    } catch (g) {
      let h = YAe(g),
        y = lh(g);
      if (m !== void 0) p(f, void 0);
      for await (let b of hzt(
        toolUseContext,
        tool,
        u,
        r.message.id,
        f,
        h,
        y,
        r.requestId,
        void 0,
        void 0,
        m !== void 0 ? Date.now() - m : void 0,
      ));
      if (
        (messageId?.({
          type: "progress",
          toolUseID: u,
          data: {
            type: "repl_tool_call",
            toolName: tool.name,
            toolInput: f,
            toolUseId: u,
            phase: "error",
            error: h,
          },
        }),
        tool.name === Co &&
          g instanceof oM &&
          g.hadSandboxViolation &&
          l?.dangerouslyDisableSandbox !== true &&
          xo.isSandboxingEnabled() &&
          xo.areUnsandboxedCommandsAllowed())
      )
        return (
          T("REPL Bash sandbox violation \u2014 auto-retrying unsandboxed"),
          a(
            {
              ...l,
              dangerouslyDisableSandbox: true,
              ...false,
            },
            {
              toolUseID: u,
            },
          )
        );
      return (
        canUseTool.push({
          id: u,
          name: tool.name,
          input: f,
        }),
        Jyl(tool.name, h)
      );
    }
  };
  return a;
}
var Qyl;
