// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $_l
// matched 2.1.88 source: src/tools/WebSearchTool/WebSearchTool.ts
// class=modified (alt of src/tools/WebSearchTool/WebSearchTool.ts)  jaccard=0.1026  score=0.8999  fileCov=0.1038
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $_l] deps: commands/add-dir/validation.ts, hooks/useTerminalSize.ts, utils/profilerBase.ts
XAe = R(se(), 1);
function makeToolSchema(input) {
  return {
    type: "web_search_20250305",
    name: "web_search",
    allowed_domains: input.allowed_domains,
    blocked_domains: input.blocked_domains,
    max_uses: 8,
  };
}
function makeOutputFromSearchResponse(result, query, durationSeconds) {
  let r = [],
    textAcc = "",
    s = true,
    i = 0,
    a = 0;
  for (let l of result) {
    if (l.type === "server_tool_use") {
      if ((i++, s)) {
        if (((s = false), textAcc.trim().length > 0)) r.push(textAcc.trim());
        textAcc = "";
      }
      continue;
    }
    if (l.type === "web_search_tool_result") {
      if ((a++, !Array.isArray(l.content))) {
        let u = `Web search error: ${l.content.error_code}`;
        (T(u, {
          level: "error",
        }),
          r.push(u));
        continue;
      }
      let c = l.content.map((u) => ({
        title: u.title,
        url: u.url,
      }));
      r.push({
        tool_use_id: l.tool_use_id,
        content: c,
      });
    }
    if (l.type === "text")
      if (s) textAcc += l.text;
      else ((s = true), (textAcc = l.text));
  }
  if (textAcc.length) r.push(textAcc.trim());
  return {
    query: query,
    results: r,
    durationSeconds: durationSeconds,
    searchCount: Math.max(i, a),
  };
}
var Igf, xgf, kgf, dXn;
