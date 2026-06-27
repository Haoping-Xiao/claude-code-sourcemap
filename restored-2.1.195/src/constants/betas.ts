// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TM
// matched 2.1.88 source: src/constants/betas.ts
// class=modified  jaccard=0.2577  score=0.2783  fileCov=0.7762
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var TM = E(() => {
  Rc();
  ((Y2e = OE("claude_code", "claude-code-20250219")),
    (qIe = OE("oauth_auth", kw)),
    (Gnt = OE("interleaved_thinking", "interleaved-thinking-2025-05-14")),
    (FY = OE("long_context", "context-1m-2025-08-07")),
    (X2e = OE("context_management", "context-management-2025-06-27")),
    (lte = OE("structured_outputs", "structured-outputs-2025-12-15")),
    (IPt = OE("web_search", "web-search-2025-03-05")),
    (p2r = OE("tool_search", "advanced-tool-use-2025-11-20")),
    (xPt = OE("tool_search", "tool-search-tool-2025-10-19")),
    (Wnt = OE("effort", "effort-2025-11-24")),
    (lAn = OE("task_budgets", "task-budgets-2026-03-13")),
    (qnt = OE("prompt_caching_scope", "prompt-caching-scope-2026-01-05")),
    (J2e = OE("extended_cache_ttl", "extended-cache-ttl-2025-04-11")),
    (Vnt = OE("speed", "fast-mode-2026-02-01")),
    (kPt = OE("redact_thinking", "redact-thinking-2026-02-12")),
    (cAn = OE("thinking_token_count", "thinking-token-count-2026-05-13")),
    (RPt = OE("narration_summaries", "summarize-connector-text-2026-03-13")),
    (T0 = OE("afk_mode", "afk-mode-2026-01-31")),
    (f2r = OE("advisor_tool", "advisor-tool-2026-03-01")),
    (fye = OE("cache_diagnosis", "cache-diagnosis-2026-04-07")),
    (m2r = OE("context_hint", "context-hint-2026-04-09")),
    (g2r = OE("mcp_servers", "mcp-servers-2025-12-04")),
    (h2r = OE("files_api", "files-api-2025-04-14")),
    (y2r = OE("environments", "environments-2025-11-01")),
    (_2r = OE("ccr_byoc", "ccr-byoc-2025-07-29")),
    (jY = OE("mid_conversation_system", "mid-conversation-system-2026-04-07")),
    (r1 = OE("server_side_fallback", "server-side-fallback-2026-06-01")),
    (o1 = OE("fallback_credit", "fallback-credit-2026-06-01")),
    (Udd = Object.freeze(
      [
        Y2e,
        qIe,
        Gnt,
        FY,
        X2e,
        lte,
        IPt,
        p2r,
        xPt,
        Wnt,
        lAn,
        qnt,
        J2e,
        Vnt,
        kPt,
        cAn,
        RPt,
        T0,
        f2r,
        fye,
        m2r,
        g2r,
        h2r,
        y2r,
        _2r,
        jY,
        r1,
        o1,
      ].filter((e) => e !== null),
    )),
    (uoi = new Map(Udd.map((e) => [e.header, e]))));
  ((S2r = new Set([Gnt, FY, xPt])), (E2r = new Set([Y2e, Gnt, X2e, qIe])));
});
function poi(e) {
  if (e.length === znt.length && e.every((t) => znt.includes(t))) return;
  ((znt = e), doi.emit(znt));
}
function T9(e) {
  return znt.includes(e);
}
function ale() {
  return znt;
}
var znt, doi, LPt;
