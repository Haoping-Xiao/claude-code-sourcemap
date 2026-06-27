// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gor
// matched 2.1.88 source: src/utils/agenticSessionSearch.ts
// class=partial  jaccard=0.1115  score=0.2355  fileCov=0.1748
// note: low-confidence suggestion: src/utils/agenticSessionSearch.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Gor = E(() => {
  xAt = {
    register() {},
    update() {},
    updateTranscript() {},
    getTranscript() {
      return;
    },
    remove() {},
    evictTerminal() {},
    applyOffsetsAndEvict() {},
    get() {
      return;
    },
    all() {
      return {};
    },
    abortSpeculation() {}
  };
});
function UGf(e) {
  return e.slice(0, OGf).map(t => {
    let n = qg(t) ?? "?",
      r = DFe(t),
      o = [n, r];
    if (t.tag) o.push(`[tag: ${t.tag}]`);
    if (t.gitBranch) o.push(`[branch: ${t.gitBranch}]`);
    if (t.projectPath) o.push(`[path: ${t.projectPath}]`);
    return o.join(" ");
  }).join(`
`);
}
function FGf(e, t, n, r) {
  let o = y6(),
    s = new Map(r.map(a => [a, {
      path: a,
      source: "session"
    }])),
    i = {
      ...o,
      toolPermissionContext: {
        ...o.toolPermissionContext,
        additionalWorkingDirectories: s
      }
    };
  return {
    messageQueue: Ug,
    agentContext: of(),
    options: {
      commands: [],
      debug: !1,
      mainLoopModel: As(),
      tools: e,
      verbose: !1,
      thinkingConfig: {
        type: "disabled"
      },
      mcpClients: [],
      mcpResources: {},
      isNonInteractiveSession: !0,
      agentDefinitions: {
        activeAgents: [],
        allAgents: []
      },
      autoCompactWindow: i.autoCompactWindow,
      fastMode: i.fastMode,
      cacheBreakerPhrase: i.cacheBreakerPhrase
    },
    abortController: n,
    readFileState: QU(V1),
    getAppState: () => i,
    setAppState: () => {},
    getMcp: () => i.mcp,
    getWebBrowser: () => i.webBrowser,
    setToolPermissionContext: () => {},
    taskRegistry: xAt,
    sessionHooksRegistry: For,
    getReplContexts: () => ({}),
    setReplContext: () => {},
    setWebBrowserSlice: () => {},
    setArtifactReadVersion: () => {},
    agentLifecycle: Uor,
    teammateColors: jor,
    rootToolSurface: {
      tools: e,
      mainLoopModel: As()
    },
    messages: t,
    turnStartIndex: 0,
    getFileHistoryState: () => {
      return;
    },
    applyFileHistoryOp: () => {},
    applyAttributionOp: () => {}
  };
}
function jGf(e) {
  let t = n => ({
    behavior: "deny",
    message: n,
    decisionReason: {
      type: "other",
      reason: "session_search_out_of_scope"
    }
  });
  return async (n, r, ...o) => {
    let s = await RL(n, r, ...o);
    if (s.behavior === "ask") return t(s.message);
    if (s.behavior === "allow") {
      let i = n.getPath?.(r),
        a = i && ds(i);
      if (a && !e.some(l => a === l || a.startsWith(l + Wor.sep))) return t(`${a} is outside the session transcript directories`);
    }
    return s;
  };
}
function GGf(e) {
  let t = e.findLast(n => n.type === "assistant");
  if (!t || t.type !== "assistant") return "";
  return t.message.content.filter(n => n.type === "text").map(n => n.type === "text" ? n.text : "").join(`
`);
}
async function qor(e, t, n) {
  if (!e.trim() || t.length === 0) return [];
  let r = Uo(t.map(h => h.fullPath && Wor.dirname(h.fullPath)).filter(h => h != null));
  if (r.length === 0) return [];
  let o = UGf(t),
    s = `Search query: "${e}"

Search ONLY these transcript directories (other paths are out of scope):
${r.join(`
`)}

Recent sessions (id title metadata) \u2014 partial list, the match may not be here:
${o}

Find sessions whose transcript content matches the query by grepping the .jsonl files under the directories above.`,
    i = [Rn({
      content: s
    })];
  if (n?.aborted) return [];
  let a = new AbortController(),
    l = () => a.abort();
  n?.addEventListener("abort", l);
  let c = FGf(NGf, i, a, r);
  T(`Agentic search: querying ${t.length} logs for "${e}" across ${r.length} dirs`);
  let u = [...i];
  try {
    for await (let h of CN({
      messages: i,
      systemPrompt: Sc([BGf]),
      userContext: {},
      systemContext: {},
      canUseTool: jGf(r),
      toolUseContext: c,
      querySource: "session_search",
      maxTurns: $Gf
    })) {
      if (h.type === "stream_event" || h.type === "stream_request_start") continue;
      if (h.type === "assistant" || h.type === "user") u.push(h);
    }
  } catch (h) {
    if (a.signal.aborted) return [];
    return ke(h), [];
  } finally {
    n?.removeEventListener("abort", l);
  }
  let d = GGf(u);
  T(`Agentic search response: ${d}`);
  let p = Array.from(d.matchAll(/"session_ids"\s*:\s*(\[[^\]]*\])/g)).at(-1)?.[1];
  if (!p) return T("Agentic search: no session_ids array in final response"), [];
  let f;
  try {
    f = Uo(Ft(p));
  } catch (h) {
    return T(`Agentic search: failed to parse session_ids array from model response: ${h instanceof Error ? h.message : String(h)}`, {
      level: "error"
    }), [];
  }
  let m = new Map();
  for (let h of t) {
    let y = qg(h);
    if (y) m.set(y, h);
  }
  let g = f.map(h => m.get(h)).filter(h => h !== void 0);
  return T(`Agentic search found ${g.length}/${f.length} resumable sessions`), g;
}
var Wor,
  $Gf = 20,
  OGf = 50,
  NGf,
  BGf = `You are searching for past Claude Code conversation sessions on behalf of the user.

Session transcripts are stored as .jsonl files under the projects directory. Each line is a JSON message; user and assistant messages contain a "content" field with the conversation text. The filename (without .jsonl) is the session ID.

You have Grep and Read tools. Use Grep with files_with_matches mode to scan transcript content efficiently before reading individual files.

When you have identified the matching sessions, end with ONLY a JSON object on its own line:
{"session_ids": ["<uuid>", ...]}

Return session IDs ordered by relevance (most relevant first). Return an empty array if nothing matches.`;