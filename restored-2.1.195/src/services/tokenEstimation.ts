// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DMo
// matched 2.1.88 source: src/services/tokenEstimation.ts
// class=modified  jaccard=0.316  score=0.6819  fileCov=0.3706
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var DMo = E(() => {
  wpn();
  Sae();
  RF();
  jG();
  Lo();
  wr();
  fn();
  At();
  co();
  Jt();
  ((fYt = require("crypto")), (pHe = require("fs/promises")), (xSt = require("path")));
});
function Bkl(e) {
  for (let t of e)
    if (t.role === "assistant" && Array.isArray(t.content)) {
      for (let n of t.content)
        if (
          typeof n === "object" &&
          n !== null &&
          "type" in n &&
          (n.type === "thinking" || n.type === "redacted_thinking")
        )
          return !0;
    }
  return !1;
}
function cCf(e) {
  return e.map((t) => {
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
  return P5e(
    [
      {
        role: "user",
        content: e,
      },
    ],
    [],
  );
}
async function P5e(e, t, n) {
  return (
    (e = MMo(e)),
    LMo(e, t, async () => {
      try {
        let r = n ?? As(),
          o = V9(r),
          s = Bkl(e);
        if (l_(r) === "bedrock")
          return dCf({
            model: dp(r),
            messages: e,
            tools: t,
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
              e.length > 0
                ? e
                : [
                    {
                      role: "user",
                      content: "foo",
                    },
                  ],
            tools: t,
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
          return vMo(e, t).catch(() => null);
        return null;
      }
    })
  );
}
async function vMo(e, t) {
  return (
    (e = MMo(e)),
    LMo(e, t, async () => {
      let n = Bkl(e),
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
        l = cCf(e),
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
            tools: t.length > 0 ? t : void 0,
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
  for (let r of e) n += uCf(r, t);
  return n;
}
function uCf(e, t) {
  if (
    (e.type === "assistant" || e.type === "user" || e.type === "api_system") &&
    e.message?.content
  )
    return PRe(e.message?.content, t);
  if (e.type === "attachment" && e.attachment) {
    let n = AZn(e.attachment),
      r = 0;
    for (let o of n) r += PRe(o.message.content, t);
    return r;
  }
  return 0;
}
async function dCf({ model: e, messages: t, tools: n, betas: r, containsThinking: o }) {
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
