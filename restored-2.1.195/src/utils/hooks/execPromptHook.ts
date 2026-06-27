// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P5o
// matched 2.1.88 source: src/utils/hooks/execPromptHook.ts
// class=modified  jaccard=0.2443  score=0.4701  fileCov=0.3372
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module P5o] deps: Xr, i$, wGt
iZt = ve(() =>
  H.object({
    ok: H.boolean().describe("Whether the condition was met"),
    reason: H.string().describe("Reason, if the condition was not met").optional(),
    impossible: H.boolean()
      .describe("Whether the condition can never be satisfied (only meaningful when ok is false)")
      .optional(),
  }),
);
async function cic(e, t, n, r, o, s, i, a) {
  let l = a || `hook-${lic.randomUUID()}`,
    c = n === "Stop" || n === "SubagentStop";
  try {
    let u = c
        ? `Based on the conversation transcript above, has the following stopping condition been satisfied? Answer based on transcript evidence only.

Condition: ${e.prompt}`
        : e.prompt,
      d = klr(u, r);
    T(`Hooks: Processing prompt hook with prompt: ${d}`);
    let p = Rn({
        content: d,
      }),
      f = e.model ?? Fw(),
      m = (_) => (i && i.length > 0 ? [...Bem(i, f, _), p] : [p]),
      g = m();
    T(`Hooks: Querying model with ${g.length} messages`);
    let h = e.timeout ? e.timeout * 1000 : 30000,
      { signal: y, cleanup: b } = xL(o, {
        timeoutMs: h,
      });
    try {
      let A = (D) =>
          yYe({
            messages: D,
            systemPrompt: Sc([
              c
                ? `You are evaluating a stop-condition hook in Claude Code. Read the conversation transcript carefully, then judge whether the user-provided condition is satisfied.

Your response must be a JSON object with one of these shapes:
- {"ok": true, "reason": "<quote evidence from the transcript that satisfies the condition>"}
- {"ok": false, "reason": "<quote what is missing or what blocks the condition>"}
- {"ok": false, "impossible": true, "reason": "<explain why the condition can never be satisfied>"}

Always include a "reason" field, quoting specific text from the transcript whenever possible. If the transcript does not contain clear evidence that the condition is satisfied, return {"ok": false, "reason": "insufficient evidence in transcript"}.

Only use {"ok": false, "impossible": true} when the condition is genuinely unachievable in this session \u2014 for example: the condition is self-contradictory, it depends on a resource or capability that is unavailable, or the assistant has explicitly tried, exhausted reasonable approaches, and stated it cannot be done. Apply your own judgment when deciding this \u2014 the assistant claiming the goal is impossible is evidence, not proof; independently confirm the condition is genuinely unachievable rather than deferring to the assistant's self-assessment. Do not use it just because the goal has not been reached yet or because progress is slow. When in doubt, return {"ok": false} without "impossible".`
                : `You are evaluating a hook condition in Claude Code. Judge whether the user-provided condition is met.

Your response must be a JSON object with one of these shapes:
- {"ok": true, "reason": "<reason the condition is met>"}
- {"ok": false, "reason": "<reason the condition is not met>"}

Always include a "reason" field.`,
            ]),
            thinkingConfig: {
              type: "disabled",
            },
            tools: [],
            signal: y,
            options: {
              async getToolPermissionContext() {
                return Fr(s);
              },
              model: f,
              toolChoice: void 0,
              isNonInteractiveSession: true,
              hasAppendSystemPrompt: false,
              agents: [],
              querySource: "hook_prompt",
              promptTooLongIsHandled: true,
              mcpTools: [],
              agentId: s.agentId,
              agentContext: s.agentContext,
              stickyBetas: RR(u0()),
              outputFormat: {
                type: "json_schema",
                schema: {
                  type: "object",
                  properties: {
                    ok: {
                      type: "boolean",
                    },
                    reason: {
                      type: "string",
                    },
                    impossible: {
                      type: "boolean",
                    },
                  },
                  required: ["ok", "reason"],
                  additionalProperties: false,
                },
              },
            },
          }),
        v = await A(g);
      if (hSe(v) && i && i.length > 0)
        (G("tengu_hook_prompt_too_long_retry", {
          evaluatorModel: f,
        }),
          (g = m(uic / 2)),
          T(`Hooks: evaluator prompt too long; retrying with ${g.length} messages`),
          (v = await A(g)));
      if ((b(), v.isApiErrorMessage)) {
        let D = zl(v.message.content).trim();
        return (
          T(`Hooks: prompt-hook evaluator API error: ${D}`, {
            level: "error",
          }),
          {
            hook: e,
            outcome: "non_blocking_error",
            message: ai({
              type: "hook_non_blocking_error",
              hookName: t,
              toolUseID: l,
              hookEvent: n,
              stderr: `Hook evaluator API error: ${D}`,
              stdout: "",
              exitCode: 1,
            }),
          }
        );
      }
      let x = zl(v.message.content).trim();
      T(`Hooks: Model response: ${x}`);
      let I = Ia(vG(x), false);
      if (!I)
        return (
          T(`Hooks: error parsing response as JSON: ${x}`),
          {
            hook: e,
            outcome: "non_blocking_error",
            message: ai({
              type: "hook_non_blocking_error",
              hookName: t,
              toolUseID: l,
              hookEvent: n,
              stderr: "JSON validation failed",
              stdout: x,
              exitCode: 1,
            }),
          }
        );
      let k = iZt().safeParse(I);
      if (!k.success)
        return (
          T(`Hooks: model response does not conform to expected schema: ${k.error.message}`),
          {
            hook: e,
            outcome: "non_blocking_error",
            message: ai({
              type: "hook_non_blocking_error",
              hookName: t,
              toolUseID: l,
              hookEvent: n,
              stderr: `Schema validation failed: ${k.error.message}`,
              stdout: x,
              exitCode: 1,
            }),
          }
        );
      if (!k.data.ok) {
        if (k.data.impossible === true && c)
          return (
            T(`Hooks: Prompt hook condition judged impossible: ${k.data.reason}`),
            {
              hook: e,
              outcome: "success",
              impossible: true,
              stopReason: k.data.reason,
              message: ai({
                type: "hook_success",
                hookName: t,
                toolUseID: l,
                hookEvent: n,
                content: "",
              }),
            }
          );
        return (
          T(`Hooks: Prompt hook condition was not met: ${k.data.reason}`),
          {
            hook: e,
            outcome: "blocking",
            blockingError: {
              blockingError: `[${e.prompt}]: ${k.data.reason}`,
              command: e.prompt,
            },
            preventContinuation: !c && e.continueOnBlock !== true,
            stopReason: k.data.reason,
          }
        );
      }
      return (
        T(`Hooks: Prompt hook condition was met: ${k.data.reason}`),
        {
          hook: e,
          outcome: "success",
          stopReason: k.data.reason,
          message: ai({
            type: "hook_success",
            hookName: t,
            toolUseID: l,
            hookEvent: n,
            content: "",
          }),
        }
      );
    } catch (_) {
      if ((b(), y.aborted))
        return {
          hook: e,
          outcome: "cancelled",
        };
      throw _;
    }
  } catch (u) {
    let d = be(u);
    return (
      T(`Hooks: Prompt hook error: ${d}`),
      {
        hook: e,
        outcome: "non_blocking_error",
        message: ai({
          type: "hook_non_blocking_error",
          hookName: t,
          toolUseID: l,
          hookEvent: n,
          stderr: `Error executing prompt hook: ${d}`,
          stdout: "",
          exitCode: 1,
        }),
      }
    );
  }
}
function Oem(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type === "assistant" && "usage" in n.message && n.message.model !== _I) {
      let r = n.message.usage;
      return (
        r.input_tokens +
        (r.cache_creation_input_tokens ?? 0) +
        (r.cache_read_input_tokens ?? 0) +
        r.output_tokens
      );
    }
  }
  return 0;
}
function Nem(e) {
  let t = 0;
  for (let n of e)
    t += n.type === "assistant" || n.type === "user" ? PRe(n.message.content) : De(n).length / 4;
  return Math.ceil(t);
}
function Bem(e, t, n = uic) {
  let r = Sy(t) || rU(t) ? 1000000 /* 1e6 */ : YOt,
    o = Math.floor(r * n);
  if (Oem(e) <= o) return e;
  let s = Tut(e),
    i = 0,
    a = s.length;
  for (let u = s.length - 1; u >= 0; u--) {
    let d = Nem(s[u]);
    if (a < s.length && i + d > o) break;
    ((i += d), (a = u));
  }
  let l = s.slice(a).flat(),
    c = e.length - l.length;
  if (c <= 0) return e;
  return (
    T(
      `Hooks: truncated Stop transcript ${e.length}\u2192${l.length} msgs (budget ${o}, model ${t})`,
    ),
    G("tengu_hook_prompt_transcript_truncated", {
      droppedMessages: c,
      keptMessages: l.length,
      budget: o,
      evaluatorModel: t,
    }),
    [
      Rn({
        content: `[Earlier conversation truncated to fit the hook evaluator's context window \u2014 ${c} earlier messages omitted. Evaluate the condition against the recent transcript below; if the required evidence may be in the omitted prefix, return {"ok": false, "reason": "insufficient evidence in transcript"}.]`,
      }),
      ...l,
    ]
  );
}
var lic,
  uic = 0.5;
