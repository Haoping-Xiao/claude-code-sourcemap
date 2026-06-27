// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DMo
// matched 2.1.88 source: src/services/tokenEstimation.ts
// class=modified  jaccard=0.322  score=0.8087  fileCov=0.3485
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DMo] deps: wpn, Sae, RF, jG, Lo, wr, fn, At, co, Jt
((fYt = require("crypto")), (pHe = require("fs/promises")), (xSt = require("path")));
function hasThinkingBlocks(messages) {
  for (let t of messages)
    if (t.role === "assistant" && Array.isArray(t.content)) {
      for (let n of t.content)
        if (
          typeof n === "object" &&
          n !== null &&
          "type" in n &&
          (n.type === "thinking" || n.type === "redacted_thinking")
        )
          return true;
    }
  return false;
}
function stripToolSearchFieldsFromMessages(messages) {
  return messages.map((t) => {
    if (!Array.isArray(t.content)) return t;
    let n = t.content.map((r) => {
      if (r.type === "tool_use") {
        let o = r;
        return {
          type: "tool_use",
          id: o.id,
          name: o.name,
          input: o.input,
        };
      }
      if (r.type === "tool_result") {
        let o = r;
        if (Array.isArray(o.content)) {
          let s = o.content.filter((i) => !ese(i));
          if (s.length === 0)
            return {
              ...o,
              content: [
                {
                  type: "text",
                  text: "[tool references]",
                },
              ],
            };
          if (s.length !== o.content.length)
            return {
              ...o,
              content: s,
            };
        }
      }
      return r;
    });
    return {
      ...t,
      content: n,
    };
  });
}
async function Ukl(e) {
  if (!e) return 0;
  return countMessagesTokensWithAPI(
    [
      {
        role: "user",
        content: e,
      },
    ],
    [],
  );
}
async function countMessagesTokensWithAPI(messages, tools, n) {
  return (
    (messages = MMo(messages)),
    LMo(messages, tools, async () => {
      try {
        let r = n ?? As(),
          o = V9(r),
          s = hasThinkingBlocks(messages);
        if (l_(r) === "bedrock")
          return countTokensWithBedrock({
            model: dp(r),
            messages: messages,
            tools: tools,
            betas: o,
            containsThinking: s,
          });
        let a = await G9({
            maxRetries: 1,
            model: r,
            source: "count_tokens",
            agentContext: of(),
          }),
          l = o.filter((u) => E2r.has(u)),
          c = await a.beta.messages.countTokens({
            model: dp(r),
            messages:
              messages.length > 0
                ? messages
                : [
                    {
                      role: "user",
                      content: "foo",
                    },
                  ],
            tools: tools,
            ...(l.length > 0 && {
              betas: fI(l),
            }),
            ...(s && {
              thinking: {
                type: "enabled",
                budget_tokens: PMo,
              },
            }),
          });
        if (typeof c.input_tokens !== "number") return null;
        return c.input_tokens;
      } catch (r) {
        if (
          (T(`countTokens API call failed: ${r instanceof Error ? r.message : String(r)}`, {
            level: "error",
          }),
          km())
        )
          return countTokensViaHaikuFallback(messages, tools).catch(() => null);
        return null;
      }
    })
  );
}
async function countTokensViaHaikuFallback(messages, tools) {
  return (
    (messages = MMo(messages)),
    LMo(messages, tools, async () => {
      let n = hasThinkingBlocks(messages),
        r = ut(process.env.CLAUDE_CODE_USE_VERTEX) && Yie(Fw()) === "global",
        o = ut(process.env.CLAUDE_CODE_USE_BEDROCK) && n,
        s = ut(process.env.CLAUDE_CODE_USE_VERTEX) && n,
        i = r || o || s ? jx() : Fw(),
        a = await G9({
          maxRetries: 1,
          model: i,
          source: "count_tokens",
          agentContext: of(),
        }),
        l = stripToolSearchFieldsFromMessages(messages),
        c =
          l.length > 0
            ? l
            : [
                {
                  role: "user",
                  content: "count",
                },
              ],
        d = V9(i).filter((y) => E2r.has(y)),
        f = (
          await a.beta.messages.create({
            model: dp(i),
            max_tokens: n ? Nkl : 1,
            messages: c,
            tools: tools.length > 0 ? tools : void 0,
            ...(d.length > 0 && {
              betas: fI(d),
            }),
            metadata: uLe(),
            ...W8e(),
            ...(n && {
              thinking: {
                type: "enabled",
                budget_tokens: PMo,
              },
            }),
          })
        ).usage,
        m = f.input_tokens,
        g = f.cache_creation_input_tokens || 0,
        h = f.cache_read_input_tokens || 0;
      return m + g + h;
    })
  );
}
function qv(e, t) {
  let n = 0;
  for (let r of e) n += roughTokenCountEstimationForMessage(r, t);
  return n;
}
function roughTokenCountEstimationForMessage(message, t) {
  if (
    (message.type === "assistant" || message.type === "user" || message.type === "api_system") &&
    message.message?.content
  )
    return PRe(message.message?.content, t);
  if (message.type === "attachment" && message.attachment) {
    let n = AZn(message.attachment),
      r = 0;
    for (let o of n) r += PRe(o.message.content, t);
    return r;
  }
  return 0;
}
async function countTokensWithBedrock({
  model: e,
  messages: t,
  tools: n,
  betas: r,
  containsThinking: o,
}) {
  try {
    let s = await h7s(),
      i = YBr(e) ? e : await DIe(e);
    if (!i) return null;
    let a = {
        anthropic_version: "bedrock-2023-05-31",
        messages:
          t.length > 0
            ? t
            : [
                {
                  role: "user",
                  content: "foo",
                },
              ],
        max_tokens: o ? Nkl : 1,
        ...(n.length > 0 && {
          tools: n,
        }),
        ...(r.length > 0 && {
          anthropic_beta: fI(r),
        }),
        ...(o && {
          thinking: {
            type: "enabled",
            budget_tokens: PMo,
          },
        }),
      },
      { CountTokensCommand: l } = await Promise.resolve().then(() => (DSn(), KBr)),
      c = {
        modelId: i,
        input: {
          invokeModel: {
            body: new TextEncoder().encode(De(a)),
          },
        },
      };
    return (await s.send(new l(c))).inputTokens ?? null;
  } catch (s) {
    return (
      T(`Bedrock CountTokens failed: ${s}`, {
        level: "error",
      }),
      null
    );
  }
}
var PMo = 1024,
  Nkl = 2048;
