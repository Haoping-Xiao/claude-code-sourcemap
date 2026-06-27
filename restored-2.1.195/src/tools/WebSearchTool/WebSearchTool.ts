// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hRo
// matched 2.1.88 source: src/tools/WebSearchTool/WebSearchTool.ts
// class=modified  jaccard=0.5223  score=0.673  fileCov=0.7
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hRo] deps: utils/status.tsx, @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/index.ts, services/analytics/growthbook.ts, utils/shell/prefix.ts, frt, services/mockRateLimits.ts, utils/debug.ts, utils/errors.ts, utils/messages.ts, utils/agentContext.ts, utils/fsOperations.ts, tools/WebSearchTool/UI.tsx, tools/GrepTool/prompt.ts, tools/WebSearchTool/WebSearchTool.ts, Il
((Igf = ve(() =>
  H.strictObject({
    query: H.string().min(2).describe("The search query to use"),
    allowed_domains: H.array(H.string())
      .optional()
      .describe("Only include search results from these domains"),
    blocked_domains: H.array(H.string())
      .optional()
      .describe("Never include search results from these domains"),
  }),
)),
  (xgf = ve(() => {
    let e = H.object({
      title: H.string().describe("The title of the search result"),
      url: H.string().describe("The URL of the search result"),
    });
    return H.object({
      tool_use_id: H.string().describe("ID of the tool use"),
      content: H.array(e).describe("Array of search hits"),
    });
  })),
  (kgf = ve(() =>
    H.object({
      query: H.string().describe("The search query that was executed"),
      results: H.array(H.union([xgf(), H.string()])).describe(
        "Search results and/or text commentary from the model",
      ),
      durationSeconds: H.number().describe("Time taken to complete the search operation"),
      searchCount: H.number().optional().describe("Number of web searches performed"),
    }),
  )));
dXn = ti({
  name: GW,
  searchHint: "search the web for current information",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  async description(e) {
    return `Claude wants to search the web for: ${e.query}`;
  },
  userFacingName() {
    return "Web Search";
  },
  getToolUseSummary: gRo,
  getActivityDescription(e) {
    let t = gRo(e);
    return t ? `Searching for ${t}` : "Searching the web";
  },
  isEnabled() {
    let e = fr();
    if (e === "firstParty" || e === "anthropicAws") return !0;
    if (e === "gateway") return !1;
    if (e === "vertex") {
      let t = As();
      return (
        t.includes("claude-fable-5") ||
        t.includes("claude-opus-4") ||
        t.includes("claude-sonnet-4") ||
        t.includes("claude-haiku-4")
      );
    }
    if (e === "foundry") return !0;
    return !1;
  },
  get inputSchema() {
    return Igf();
  },
  get outputSchema() {
    return kgf();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return e.query;
  },
  async checkPermissions(e) {
    return {
      behavior: "passthrough",
      message: "WebSearchTool requires permission.",
      suggestions: [
        {
          type: "addRules",
          rules: [
            {
              toolName: GW,
            },
          ],
          behavior: "allow",
          destination: "localSettings",
        },
      ],
    };
  },
  async prompt({ model: e }) {
    return Eoa(e);
  },
  renderToolUseMessage: D_l,
  renderToolUseProgressMessage: P_l,
  renderToolResultMessage: M_l,
  extractSearchText() {
    return "";
  },
  async validateInput(e) {
    let { query: t, allowed_domains: n, blocked_domains: r } = e;
    if (!t.length)
      return {
        result: !1,
        message: "Error: Missing query",
        errorCode: 1,
      };
    if (n?.length && r?.length)
      return {
        result: !1,
        message:
          "Error: Cannot specify both allowed_domains and blocked_domains in the same request",
        errorCode: 2,
      };
    return {
      result: !0,
    };
  },
  async call(e, t, n, r, o) {
    let s = performance.now(),
      { query: i } = e;
    if (k_l()) {
      let S = await R_l(i, t.abortController.signal, {
          allowed_domains: e.allowed_domains,
          blocked_domains: e.blocked_domains,
        }),
        A = (performance.now() - s) / 1000;
      if (!S.ok)
        throw new mi(
          De({
            error_type: S.errorType,
            source: S.source,
            message: S.errorMessage,
          }),
          "web-search-ccr-proxy",
        );
      if (o)
        o({
          type: "progress",
          toolUseID: "ccr-proxy-search-1",
          data: {
            type: "search_results_received",
            resultCount: S.results.length,
            query: i,
          },
        });
      return {
        data: {
          query: i,
          results: [
            {
              tool_use_id: "ccr-proxy-search-1",
              content: S.results,
            },
          ],
          durationSeconds: A,
          searchCount: 1,
        },
      };
    }
    let a = Rn({
        content: "Perform a web search for the query: " + i,
      }),
      l = Rgf(e),
      u = at("tengu_plum_vx3", !1) ? Fw() : t.options.mainLoopModel;
    if (fr() === "foundry" && !gle(u, "web_search"))
      throw Error("Web search is not available on this Foundry deployment.");
    let d = ybt({
        messages: [a],
        systemPrompt: Sc(["You are an assistant for performing a web search tool use"]),
        thinkingConfig: {
          type: "disabled",
        },
        tools: [],
        signal: t.abortController.signal,
        options: {
          getToolPermissionContext: async () => Fr(t),
          model: u,
          toolChoice: {
            type: "tool",
            name: "web_search",
          },
          isNonInteractiveSession: t.options.isNonInteractiveSession,
          hasAppendSystemPrompt: !!t.options.appendSystemPrompt,
          extraToolSchemas: [l],
          querySource: "web_search_tool",
          enablePromptCaching: !1,
          agents: t.options.agentDefinitions.activeAgents,
          mcpTools: [],
          agentId: t.agentId,
          agentContext: t.agentContext,
          stickyBetas: RR(u0()),
          effortValue: gg(t),
        },
      }),
      p = [],
      f = null,
      m = "",
      g = 0,
      h = new Map();
    for await (let S of d) {
      if (S.type === "assistant") {
        p.push(...S.message.content);
        continue;
      }
      if (S.type === "stream_event" && S.event?.type === "content_block_start") {
        let A = S.event.content_block;
        if (A && A.type === "server_tool_use") {
          ((f = A.id), (m = ""));
          continue;
        }
      }
      if (f && S.type === "stream_event" && S.event?.type === "content_block_delta") {
        let A = S.event.delta;
        if (A?.type === "input_json_delta" && A.partial_json) {
          m += A.partial_json;
          try {
            let v = m.match(/"query"\s*:\s*"((?:[^"\\]|\\.)*)"/);
            if (v && v[1]) {
              let C = Ft('"' + v[1] + '"');
              if (!h.has(f) || h.get(f) !== C) {
                if ((h.set(f, C), g++, o))
                  o({
                    type: "progress",
                    toolUseID: `search-progress-${g}`,
                    data: {
                      type: "query_update",
                      query: C,
                    },
                  });
              }
            }
          } catch {}
        }
      }
      if (S.type === "stream_event" && S.event?.type === "content_block_start") {
        let A = S.event.content_block;
        if (A && A.type === "web_search_tool_result") {
          let v = A.tool_use_id,
            C = h.get(v) || i,
            x = A.content;
          if ((g++, o))
            o({
              type: "progress",
              toolUseID: v || `search-progress-${g}`,
              data: {
                type: "search_results_received",
                resultCount: Array.isArray(x) ? x.length : 0,
                query: C,
              },
            });
        }
      }
    }
    if (fr() === "foundry" && !gle(u, "web_search"))
      throw Error("Web search is not available on this Foundry deployment.");
    let b = (performance.now() - s) / 1000;
    return {
      data: Lgf(p, i, b),
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    let { query: n, results: r } = e,
      o = `Web search results for query: "${n}"

`;
    return (
      (r ?? []).forEach((s) => {
        if (s == null) return;
        if (typeof s === "string")
          o +=
            s +
            `

`;
        else if (s.content?.length > 0)
          o += `Links: ${De(s.content)}

`;
        else
          o += `No links found.

`;
      }),
      (o += `
REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.`),
      {
        tool_use_id: t,
        type: "tool_result",
        content: o.trim(),
      }
    );
  },
});
var O_l = "TestingPermission",
  Dgf,
  v0b;
