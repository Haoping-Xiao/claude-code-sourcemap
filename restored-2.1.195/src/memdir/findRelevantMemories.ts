// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QMo
// matched 2.1.88 source: src/memdir/findRelevantMemories.ts
// class=modified  jaccard=0.232  score=0.3486  fileCov=0.4095
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QMo] deps: lodash-es/memoize.js, services/analytics/growthbook.ts, main.tsx, utils/settings/settings.ts
xCf = ["off", "infinite", "fixed", "countdown"];
NZn = Cn(() => {
  let e = Oe.CLAUDE_CODE_TOTAL_TOKENS_REMINDER;
  if (JMo(e)) return e;
  let t = Dr().totalTokensReminder;
  if (JMo(t)) return t;
  let n = at("tengu_lapis_anchor", "off");
  return JMo(n) ? n : "off";
});
function DCf(e) {
  return e.map((t) => {
    let n = t.chunk.slice(0, 300).replace(/\s+/g, " ").trim();
    return `- {id: "${t.id}", source: ${t.source}} ${t.title}: ${n}${t.chunk.length > 300 ? "\u2026" : ""}`;
  }).join(`
`);
}
async function _0l(e, t, n, r, o = new Set(), s = Promise.resolve([])) {
  n.lastUsage = null;
  let i = {
      type: "ephemeral",
    },
    a =
      Tla(n, t) ??
      (await DQn(t, r).then((y) =>
        y.length > 0 && !r.aborted ? vla(n, t, y, PQn(y), i) : void 0,
      )),
    c = (
      await Promise.race([
        s,
        Nn(LCf, r, {
          unref: true,
        }).then(() => []),
      ])
    ).filter((y) => !o.has(y.url || `aki:${y.id}`));
  if (c.length === 0 && (!a || a.memories.every((y) => o.has(y.filePath)))) {
    if (!r.aborted) It("memory_recall_select", a ? "all_surfaced" : "no_candidates");
    return {
      memories: [],
      knowledge: [],
    };
  }
  let u = a?.messages ?? [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Available memories:
(none \u2014 this session has no local memory files yet)`,
            ...(i && {
              cache_control: i,
            }),
          },
        ],
      },
    ],
    d = new Map((a?.memories ?? []).map((y) => [y.filename, y])),
    { selectedMemories: p, selectedKnowledgeIds: f } = await selectRelevantMemories(
      e,
      t,
      n,
      u,
      d,
      i,
      r,
      c,
    ),
    m = new Map(c.map((y) => [y.id, y])),
    g = Uo(f)
      .map((y) => m.get(y))
      .filter((y) => y !== void 0)
      .slice(0, 3);
  return {
    memories: p
      .map((y) => d.get(y))
      .filter((y) => y !== void 0 && !o.has(y.filePath))
      .map((y) => ({
        path: y.filePath,
        mtimeMs: y.mtimeMs,
      })),
    knowledge: g,
  };
}
async function selectRelevantMemories(query, memories, signal, recentTools, o, s, i, a) {
  let l =
      a.length > 0
        ? `

Knowledge-index results for this query (select by id):
${DCf(a)}`
        : "",
    c = `Select memories relevant to:
${query}${l}`,
    u =
      a.length > 0
        ? `Select memories relevant to:
${query}

(${a.length} knowledge-index results were offered for this query)`
        : c,
    d = {
      selectedMemories: [],
      selectedKnowledgeIds: [],
    };
  try {
    let p = await yN({
        model: jx(),
        system: [
          {
            type: "text",
            text: MCf,
            cache_control: s,
          },
        ],
        skipSystemPromptPrefix: true,
        messages: [
          ...recentTools,
          {
            role: "user",
            content: [
              {
                type: "text",
                text: c,
                cache_control: s,
              },
            ],
          },
        ],
        max_tokens: 256,
        output_format: {
          type: "json_schema",
          schema: {
            type: "object",
            properties: {
              selected_memories: {
                type: "array",
                items: {
                  type: "string",
                },
              },
              selected_knowledge_ids: {
                type: "array",
                items: {
                  type: "string",
                },
              },
            },
            required: ["selected_memories"],
            additionalProperties: false,
          },
        },
        signal: i,
        querySource: X1n,
      }),
      f = p.content.find((g) => g.type === "text");
    if (!f || f.type !== "text") return d;
    let m = Ft(vG(f.text));
    return (
      wla(signal, memories, u, f.text),
      (signal.lastUsage = {
        cacheReadInputTokens: p.usage.cache_read_input_tokens ?? 0,
        cacheCreationInputTokens: p.usage.cache_creation_input_tokens ?? 0,
        turnCount: (recentTools.length + 1) / 2,
      }),
      xe("memory_recall_select"),
      {
        selectedMemories: m.selected_memories.filter((g) => o.has(g)),
        selectedKnowledgeIds: m.selected_knowledge_ids ?? [],
      }
    );
  } catch (p) {
    if (((signal.lastUsage = null), i.aborted)) return d;
    return (
      It("memory_recall_select", "memory_recall_select_query_failed"),
      T(`[memdir] selectRelevantMemories failed: ${be(p)}`, {
        level: "warn",
      }),
      d
    );
  }
}
var LCf = 3500,
  PCf = "",
  MCf;
