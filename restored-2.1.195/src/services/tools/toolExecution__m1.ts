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
function checkPermissionsAndCallTool(e, t, n, r, o, s, i) {
  let a = async (l, c) => {
    let u = c?.toolUseID ?? `repl_${Qyl.randomUUID()}`,
      d = (g) => (
        o.push({
          id: u,
          name: e.name,
          input: l,
        }),
        i?.({
          type: "progress",
          toolUseID: u,
          data: {
            type: "repl_tool_call",
            toolName: e.name,
            toolInput: l,
            toolUseId: u,
            phase: "error",
            error: g,
          },
        }),
        Jyl(e.name, g)
      ),
      p = (g, h) =>
        i?.({
          type: "progress",
          toolUseID: u,
          data: {
            type: "repl_tool_call",
            toolName: e.name,
            toolInput: g,
            toolUseId: u,
            phase: "executing",
            nativeTimeoutMs: h,
          },
        });
    i?.({
      type: "progress",
      toolUseID: u,
      data: {
        type: "repl_tool_call",
        toolName: e.name,
        toolInput: l,
        toolUseId: u,
        phase: "start",
      },
    });
    let f = l,
      m;
    try {
      let g = e.inputSchema.safeParse(l);
      if (!g.success) return d(Y6e(e.name, g.error));
      let h = g.data,
        y = Hzt(e, t);
      if (y.denyMessage)
        return (
          G("tengu_tool_use_isolation_latch_denied", {
            toolName: Ui(e.name),
            toolUseID: u,
            isMcp: e.isMcp ?? false,
            isolationLatch: Oo(y.activeLatch),
            isolationClassifiedAs: Oo(y.classifiedAs),
            replInnerCall: true,
          }),
          d(y.denyMessage)
        );
      let b = h,
        _,
        S;
      for await (let L of _zt(t, e, h, u, r.message.id, r.requestId, void 0, void 0)) {
        if (L.type === "hookPermissionResult") _ = L.hookPermissionResult;
        if (L.type === "hookUpdatedInput") b = L.updatedInput;
        if (L.type === "stopReason") S = L.stopReason;
        if (L.type === "stop") return d(S ?? "Blocked by PreToolUse hook");
      }
      let A = {
          ...t,
          options: {
            ...t.options,
            tools: s,
          },
          messages: [
            ...t.messages,
            ...o.map((L) =>
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
        v = await yzt(_, e, b, A, n, r, u),
        C = v.decision;
      if (((b = v.input), C.behavior !== "allow")) {
        t.onPermissionDenial?.(e, u, b);
        let L = C.behavior === "deny" ? (C.message ?? "Permission denied") : "Permission denied";
        return d(`Permission denied for ${e.name}: ${L}`);
      }
      if (
        ((f = C.updatedInput ?? b),
        e.name === Co && f && typeof f === "object" && "_simulatedSedEdit" in f)
      ) {
        let { _simulatedSedEdit: L, ...M } = f;
        f = M;
      }
      let x = Yyl(e, f);
      (p(f, x),
        G("tengu_repl_inner_executing", {
          toolName: Ui(e.name),
          nativeTimeoutMs: x,
          isMcp: e.isMcp ?? false,
        }),
        (m = Date.now()));
      let I = await e.call(
          f,
          {
            ...t,
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
          n,
          r,
        ),
        k = Date.now() - m;
      p(f, void 0);
      let D = false;
      for await (let L of gzt(t, e, u, r.message.id, f, I.data, r.requestId, void 0, void 0, k))
        if (
          ((D = true),
          "updatedToolOutput" in L &&
            e.outputSchema?.safeParse(L.updatedToolOutput)?.success !== false)
        )
          I.data = L.updatedToolOutput;
      if (D) Z7n(e.name, u, f, t.readFileState);
      let P = I.data;
      if (e.isMcp && Array.isArray(I.data)) {
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
      (o.push({
        id: u,
        name: e.name,
        input: f,
      }),
        i?.({
          type: "progress",
          toolUseID: u,
          data: {
            type: "repl_tool_call",
            toolName: e.name,
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
        t,
        e,
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
        (i?.({
          type: "progress",
          toolUseID: u,
          data: {
            type: "repl_tool_call",
            toolName: e.name,
            toolInput: f,
            toolUseId: u,
            phase: "error",
            error: h,
          },
        }),
        e.name === Co &&
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
        o.push({
          id: u,
          name: e.name,
          input: f,
        }),
        Jyl(e.name, h)
      );
    }
  };
  return a;
}
var Qyl;
