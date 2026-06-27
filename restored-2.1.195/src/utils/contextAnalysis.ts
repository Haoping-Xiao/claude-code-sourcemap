// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q1n
// matched 2.1.88 source: src/utils/contextAnalysis.ts
// class=modified  jaccard=0.3618  score=0.4012  fileCov=0.7868
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Q1n] deps: Qi, Xr, kt, Ox, ii, je, sr, GX, IX, fut, LX
((kla = ve(() =>
  H.object({
    query: H.string().describe(
      'Query to find deferred tools. Use "select:<tool_name>" for direct selection, or keywords to search.',
    ),
    max_results: H.number()
      .optional()
      .default(5)
      .describe("Maximum number of results to return (default: 5)"),
  }),
)),
  (Rla = ve(() =>
    H.object({
      matches: H.array(H.string()),
      query: H.string(),
      total_deferred_tools: H.number(),
      pending_mcp_servers: H.array(H.string()).optional(),
    }),
  )));
J1n = Cn(
  async (e, t) => {
    let n = _l(t, e);
    if (!n) return "";
    return n.prompt({
      getToolPermissionContext: async () => ({
        mode: "default",
        additionalWorkingDirectories: new Map(),
        alwaysAllowRules: {},
        alwaysDenyRules: {},
        alwaysAskRules: {},
        isBypassPermissionsModeAvailable: false,
        mcpPermissionModeOverrides: {},
      }),
      tools: t,
      agents: [],
    });
  },
  (e) => e,
);
$jt = ti({
  isEnabled() {
    return o$();
  },
  isConcurrencySafe() {
    return true;
  },
  isReadOnly() {
    return true;
  },
  name: _h,
  maxResultSizeChars: 100000 /* 1e5 */,
  async description() {
    return XOn();
  },
  async prompt() {
    return XOn();
  },
  get inputSchema() {
    return kla();
  },
  get outputSchema() {
    return Rla();
  },
  async call(
    e,
    {
      options: { tools: t, refreshTools: n, mcpClients: r, refreshMcpClients: o },
      abortController: s,
    },
  ) {
    let { query: i, max_results: a = 5 } = e,
      l = n?.() ?? t,
      c = l.filter(y4);
    Cla(c);
    let u = () => o?.() ?? r;
    function d() {
      return u()
        .filter((v) => v.type === "pending")
        .map((v) => v.name);
    }
    function p(v, C) {
      let x = Array.isArray(v) ? v.join(" ") : v,
        I = new Set();
      for (let D of x.matchAll(/mcp__([a-zA-Z0-9._-]+)/g)) {
        let P = D[1],
          O = P.indexOf("__");
        I.add(O >= 0 ? P.slice(0, O) : P);
      }
      let k = x.toLowerCase();
      for (let D of C) if (new RegExp(`\\b${wx(D)}\\b`, "i").test(k)) I.add(D);
      return [...I];
    }
    function f() {
      let v = n?.() ?? l,
        C = new Set(l.map((k) => k.name)),
        x = On(v, (k) => !C.has(k.name)),
        I = v.filter(y4);
      return (
        Cla(I),
        {
          freshTools: v,
          freshDeferred: I,
          newCount: x,
        }
      );
    }
    async function m(v) {
      let C = Date.now(),
        x = C + zlp;
      while (Date.now() < x && !s.signal.aborted) {
        let I = u().filter((k) => k.type === "pending");
        if (I.length === 0) break;
        if (v.length > 0 && !I.some((k) => v.includes(k.name) || v.includes(hc(k.name)))) break;
        await Nn(50, s.signal);
      }
      return Date.now() - C;
    }
    async function g(v, C, x) {
      let I = f(),
        k = d(),
        D = k.length;
      if (!n || (I.newCount === 0 && D === 0)) return null;
      let P = I.newCount > 0 ? await v(I.freshDeferred, I.freshTools) : [],
        O = 0,
        L = true,
        M = p(
          x,
          u().map(($) => $.name),
        ),
        N = k.map(hc),
        B = M.length === 0 || M.some(($) => k.includes($) || N.includes($));
      if (P.length === 0 && D > 0 && B)
        ((L = false), (O = await m(M)), (I = f()), (P = await v(I.freshDeferred, I.freshTools)));
      return (
        G("tengu_tool_search_mcp_wait", {
          queryType: $e(C),
          refreshOnly: L,
          waitedMs: O,
          pendingBefore: D,
          pendingAfter: d().length,
          matchesAfterWait: P.length,
          targetServerCount: M.length,
          skippedPollNoTargetPending: D > 0 && !B && P.length === 0,
        }),
        {
          matches: P,
          freshDeferred: I.freshDeferred,
          freshTools: I.freshTools,
        }
      );
    }
    function h(v, C, x) {
      if (x.length === 0 || C.length === 0) return;
      let I = new Set(C.map((D) => D.split("__")[1]).filter(Boolean)),
        k = On(x, (D) => I.has(hc(D)));
      G("tengu_sdk_mcp_false_unavailable", {
        queryType: $e(v),
        pendingServers: x.length,
        targetedPendingServers: k,
      });
    }
    function y(v, C, x) {
      let I = u(),
        k = x?.freshDeferred ?? c,
        D = x?.freshTools ?? l;
      G("tengu_tool_search_outcome", {
        queryLength: i.length,
        querySelectCount: C === "select" ? hu(i, ",") + 1 : void 0,
        queryType: $e(C),
        matchCount: v.length,
        totalDeferredTools: k.length,
        maxResults: a,
        hasMatches: v.length > 0,
        mcpServersConfigured: I.length,
        mcpServersConnected: On(I, (P) => P.type === "connected"),
        mcpServersPending: On(I, (P) => P.type === "pending"),
        mcpToolsInPool: On(D, (P) => !!P.mcpInfo),
        ...{},
      });
    }
    let b = i.match(/^select:(.+)$/i);
    if (b) {
      let v = b[1]
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean),
        C = [],
        x = [];
      for (let k of v) {
        let D = _l(c, k) ?? _l(l, k);
        if (D) {
          if (!C.includes(D.name)) C.push(D.name);
        } else x.push(k);
      }
      let I;
      if (x.length > 0) {
        let k = await g(
          async (D, P) => {
            let O = [];
            for (let L of x) {
              let M = _l(D, L) ?? _l(P, L);
              if (M && !O.includes(M.name)) O.push(M.name);
            }
            return O;
          },
          "select",
          x,
        );
        if (k) {
          if (((I = k), k.matches.length > 0)) {
            let D = [...C, ...k.matches],
              P = x.filter((O) => !k.matches.includes(O));
            if (P.length > 0)
              T(
                `ToolSearchTool: partial select after MCP refresh \u2014 found: ${D.join(", ")}, missing: ${P.join(", ")}`,
              );
            else T(`ToolSearchTool: selected ${D.join(", ")} after MCP refresh`);
            return (y(D, "select", k), mut(D, i, k.freshDeferred.length, []));
          }
        }
      }
      if (C.length === 0) {
        (T(`ToolSearchTool: select failed \u2014 none found: ${x.join(", ")}`), y([], "select", I));
        let k = d();
        return (
          h(
            "select",
            x.filter((D) => D.startsWith("mcp__")),
            k,
          ),
          mut([], i, I?.freshDeferred.length ?? c.length, k)
        );
      }
      if (x.length > 0)
        T(`ToolSearchTool: partial select \u2014 found: ${C.join(", ")}, missing: ${x.join(", ")}`);
      else T(`ToolSearchTool: selected ${C.join(", ")}`);
      return (y(C, "select", I), mut(C, i, I?.freshDeferred.length ?? c.length, []));
    }
    let _ = await xla(i, c, l, a);
    T(`ToolSearchTool: keyword search for "${i}", found ${_.length} matches`);
    let S;
    if (_.length === 0) {
      let v = await g((C, x) => xla(i, C, x, a), "keyword", i);
      if (v) {
        if (((S = v), v.matches.length > 0))
          return (
            (_ = v.matches),
            T(
              `ToolSearchTool: keyword search for "${i}" found ${_.length} matches after MCP refresh`,
            ),
            y(_, "keyword", v),
            mut(_, i, v.freshDeferred.length, [])
          );
      }
    }
    y(_, "keyword", S);
    let A = S?.freshDeferred.length ?? c.length;
    if (_.length === 0) {
      let v = d();
      return (h("keyword", i.match(/mcp__[A-Za-z0-9_-]+/g) ?? [], v), mut(_, i, A, v));
    }
    return mut(_, i, A, []);
  },
  renderToolUseMessage() {
    return null;
  },
  userFacingName: () => "",
  mapToolResultToToolResultBlockParam(e, t) {
    if (e.matches.length === 0) {
      let n = "No matching deferred tools found";
      if (e.pending_mcp_servers && e.pending_mcp_servers.length > 0) {
        let r = e.pending_mcp_servers,
          o =
            r.length > Vue
              ? `${r.slice(0, Vue).join(", ")}, \u2026and ${r.length - Vue} more`
              : r.join(", ");
        n += `. Some MCP servers are still connecting: ${o}. Their tools will become available shortly \u2014 try searching again. If you're looking for a capability rather than a specific tool name, try keywords that might match the server's purpose (e.g., 'slack message', 'calendar event'). Once you find a matching tool, call it directly \u2014 do not stop after searching.`;
      }
      return {
        type: "tool_result",
        tool_use_id: t,
        content: n,
      };
    }
    return {
      type: "tool_result",
      tool_use_id: t,
      content: e.matches.map((n) => ({
        type: "tool_reference",
        tool_name: n,
      })),
    };
  },
});
function Z1n(e) {
  let t = {
      toolRequests: new Map(),
      toolResults: new Map(),
      humanMessages: 0,
      assistantMessages: 0,
      localCommandOutputs: 0,
      other: 0,
      attachments: new Map(),
      duplicateFileReads: new Map(),
      total: 0,
    },
    n = new Map(),
    r = new Map(),
    o = new Map();
  return (
    e.forEach((i) => {
      if (i.type === "attachment") {
        let a = i.attachment.type || "unknown";
        t.attachments.set(a, (t.attachments.get(a) || 0) + 1);
      }
    }),
    lk(e).forEach((i) => {
      let { content: a } = i.message;
      if (typeof a === "string") {
        let l = If(a);
        if (((t.total += l), i.type === "user" && a.includes("local-command-stdout")))
          t.localCommandOutputs += l;
        else t[i.type === "user" ? "humanMessages" : "assistantMessages"] += l;
      } else a.forEach((l) => Jlp(l, i, t, n, r, o));
    }),
    o.forEach((i, a) => {
      if (i.count > 1) {
        let c = Math.floor(i.totalTokens / i.count) * (i.count - 1);
        t.duplicateFileReads.set(a, {
          count: i.count,
          tokens: c,
        });
      }
    }),
    t
  );
}
function Jlp(e, t, n, r, o, s) {
  let i = If(De(e));
  switch (((n.total += i), e.type)) {
    case "text":
      if (t.type === "user" && "text" in e && e.text.includes("local-command-stdout"))
        n.localCommandOutputs += i;
      else n[t.type === "user" ? "humanMessages" : "assistantMessages"] += i;
      break;
    case "tool_use": {
      if ("name" in e && "id" in e) {
        let a = e.name || "unknown";
        if (
          (Dla(n.toolRequests, a, i),
          r.set(e.id, a),
          a === "Read" &&
            "input" in e &&
            e.input &&
            typeof e.input === "object" &&
            "file_path" in e.input)
        ) {
          let l = String(e.input.file_path);
          o.set(e.id, l);
        }
      }
      break;
    }
    case "tool_result": {
      if ("tool_use_id" in e) {
        let a = r.get(e.tool_use_id) || "unknown";
        if ((Dla(n.toolResults, a, i), a === "Read")) {
          let l = o.get(e.tool_use_id);
          if (l) {
            let c = s.get(l) || {
              count: 0,
              totalTokens: 0,
            };
            s.set(l, {
              count: c.count + 1,
              totalTokens: c.totalTokens + i,
            });
          }
        }
      }
      break;
    }
    case "image":
    case "server_tool_use":
    case "web_search_tool_result":
    case "search_result":
    case "document":
    case "thinking":
    case "redacted_thinking":
    case "code_execution_tool_result":
    case "mcp_tool_use":
    case "mcp_tool_result":
    case "container_upload":
    case "web_fetch_tool_result":
    case "bash_code_execution_tool_result":
    case "text_editor_code_execution_tool_result":
    case "tool_search_tool_result":
    case "advisor_tool_result":
    case "compaction":
      n.other += i;
      break;
  }
}
function Dla(e, t, n) {
  e.set(t, (e.get(t) || 0) + n);
}
function eNn(e) {
  let t = {
    total_tokens: e.total,
    human_message_tokens: e.humanMessages,
    assistant_message_tokens: e.assistantMessages,
    local_command_output_tokens: e.localCommandOutputs,
    other_tokens: e.other,
  };
  (e.attachments.forEach((r, o) => {
    t[`attachment_${o}_count`] = r;
  }),
    e.toolRequests.forEach((r, o) => {
      t[`tool_request_${o}_tokens`] = r;
    }),
    e.toolResults.forEach((r, o) => {
      t[`tool_result_${o}_tokens`] = r;
    }));
  let n = [...e.duplicateFileReads.values()].reduce((r, o) => r + o.tokens, 0);
  if (
    ((t.duplicate_read_tokens = n),
    (t.duplicate_read_file_count = e.duplicateFileReads.size),
    e.total > 0)
  ) {
    ((t.human_message_percent = Math.round((e.humanMessages / e.total) * 100)),
      (t.assistant_message_percent = Math.round((e.assistantMessages / e.total) * 100)),
      (t.local_command_output_percent = Math.round((e.localCommandOutputs / e.total) * 100)),
      (t.duplicate_read_percent = Math.round((n / e.total) * 100)));
    let r = [...e.toolRequests.values()].reduce((s, i) => s + i, 0),
      o = [...e.toolResults.values()].reduce((s, i) => s + i, 0);
    ((t.tool_request_percent = Math.round((r / e.total) * 100)),
      (t.tool_result_percent = Math.round((o / e.total) * 100)),
      e.toolRequests.forEach((s, i) => {
        t[`tool_request_${i}_percent`] = Math.round((s / e.total) * 100);
      }),
      e.toolResults.forEach((s, i) => {
        t[`tool_result_${i}_percent`] = Math.round((s / e.total) * 100);
      }));
  }
  return t;
}
