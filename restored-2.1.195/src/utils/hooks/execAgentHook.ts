// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dic
// matched 2.1.88 source: src/utils/hooks/execAgentHook.ts
// class=modified  jaccard=0.4582  score=0.7392  fileCov=0.5466
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dic] deps: ft, kt, ZE, tP, U1, Vv, EAe, BE, Il, je, At, Rd, co, Ao, Jt, P5o
lic = require("crypto");
async function pic(e, t, n, r, o, s, i, a) {
  let l = i || `hook-${M5o.randomUUID()}`,
    c = s.agentId ? uk(s.agentId) : em(),
    u = jd(qt(), c).resolvedPath,
    d = Date.now();
  try {
    let p = klr(e.prompt, r);
    T(`Hooks: Processing agent hook with prompt: ${p}`);
    let m = [
      Rn({
        content: p,
      }),
    ];
    T(`Hooks: Starting agent query with ${m.length} messages`);
    let g = e.timeout ? e.timeout * 1000 : 60000,
      h = Sl(),
      { signal: y, cleanup: b } = xL(o, {
        timeoutMs: g,
      }),
      _ = () => h.abort();
    y.addEventListener("abort", _);
    let S = h.signal;
    try {
      let A = aic(),
        v = [...Uem(s.options.tools), A],
        x =
          n === "Stop" || n === "SubagentStop"
            ? "You are verifying a stop condition in Claude Code. Your task is to verify that the agent completed the given plan."
            : `You are evaluating a ${n} hook in Claude Code. Your task is to evaluate the condition described in the user message.`,
        I = Sc([
          `${x} The conversation transcript is available at: ${u}
You can read this file to analyze the conversation history if needed.

Use the available tools to inspect the codebase and verify the condition.
Use as few steps as possible - be efficient and direct.

When done, return your result using the ${Ip} tool with:
- ok: true if the condition is met
- ok: false with reason if the condition is not met`,
        ]),
        k = e.model ?? Fw(),
        D = 50,
        P = Bu(`${Rlr}${M5o.randomUUID()}`),
        O = {
          ...s,
          agentId: P,
          abortController: h,
          options: {
            ...s.options,
            tools: v,
            mainLoopModel: k,
            isNonInteractiveSession: !0,
            requiresStructuredOutput: !0,
            thinkingConfig: {
              type: "disabled",
            },
            activeMcpServer: void 0,
            activeMcpTool: void 0,
            refreshTools: void 0,
            refreshMcpClients: void 0,
          },
          getAppState() {
            let B = s.getAppState(),
              $ = B.toolPermissionContext.alwaysAllowRules.session ?? [];
            return {
              ...B,
              toolPermissionContext: {
                ...B.toolPermissionContext,
                mode: "dontAsk",
                alwaysAllowRules: {
                  ...B.toolPermissionContext.alwaysAllowRules,
                  session: [...$, `Read(/${u})`],
                },
              },
            };
          },
        },
        L = null,
        M = 0,
        N = !1;
      for await (let B of CN({
        messages: m,
        systemPrompt: I,
        userContext: {},
        systemContext: {},
        canUseTool: RL,
        toolUseContext: O,
        querySource: "hook_agent",
      })) {
        if (
          (nNe(B, {
            onMessage: () => {},
            onUpdateLength: () => {},
            onSetStreamMode: () => {},
            onStreamingToolUses: () => {},
          }),
          B.type === "stream_event" || B.type === "stream_request_start")
        )
          continue;
        if (B.type === "assistant") {
          if ((M++, M >= 50)) {
            ((N = !0), T(`Hooks: Agent turn ${M} hit max turns, aborting`), h.abort());
            break;
          }
        }
        if (B.type === "attachment" && B.attachment.type === "structured_output") {
          let $ = iZt().safeParse(B.attachment.data);
          if ($.success) {
            ((L = $.data), T(`Hooks: Got structured output: ${De(L)}`), h.abort());
            break;
          }
        }
      }
      if ((y.removeEventListener("abort", _), b(), !L)) {
        if (N)
          return (
            T("Hooks: Agent hook did not complete within 50 turns"),
            G("tengu_agent_stop_hook_max_turns", {
              durationMs: Date.now() - d,
              turnCount: M,
              hookEvent: $e(n),
              agentName: a,
            }),
            {
              hook: e,
              outcome: "cancelled",
            }
          );
        return (
          T("Hooks: Agent hook did not return structured output"),
          G("tengu_agent_stop_hook_error", {
            durationMs: Date.now() - d,
            turnCount: M,
            errorType: 1,
            hookEvent: $e(n),
            agentName: a,
          }),
          {
            hook: e,
            outcome: "cancelled",
          }
        );
      }
      if (!L.ok)
        return (
          T(`Hooks: Agent hook condition was not met: ${L.reason}`),
          G("tengu_agent_stop_hook_blocking", {
            durationMs: Date.now() - d,
            turnCount: M,
            hookEvent: $e(n),
            agentName: a,
          }),
          {
            hook: e,
            outcome: "blocking",
            blockingError: {
              blockingError: `Agent hook condition was not met: ${L.reason}`,
              command: e.prompt,
            },
          }
        );
      return (
        T("Hooks: Agent hook condition was met"),
        G("tengu_agent_stop_hook_success", {
          durationMs: Date.now() - d,
          turnCount: M,
          hookEvent: $e(n),
          agentName: a,
        }),
        {
          hook: e,
          outcome: "success",
          message: ai({
            type: "hook_success",
            hookName: t,
            toolUseID: l,
            hookEvent: n,
            content: "",
          }),
        }
      );
    } catch (A) {
      if ((y.removeEventListener("abort", _), b(), S.aborted))
        return {
          hook: e,
          outcome: "cancelled",
        };
      throw A;
    }
  } catch (p) {
    let f = be(p);
    return (
      T(`Hooks: Agent hook error: ${f}`),
      G("tengu_agent_stop_hook_error", {
        durationMs: Date.now() - d,
        errorType: 2,
        hookEvent: $e(n),
        agentName: a,
      }),
      {
        hook: e,
        outcome: "non_blocking_error",
        message: ai({
          type: "hook_non_blocking_error",
          hookName: t,
          toolUseID: l,
          hookEvent: n,
          stderr: `Error executing agent hook: ${f}`,
          stdout: "",
          exitCode: 1,
        }),
      }
    );
  }
}
function Uem(e) {
  return e.filter((t) => !Ql(t, Ip) && !jRe.has(t.name) && !Ql(t, ss));
}
var M5o,
  Rlr = "hook-agent-";
