// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $_l
// matched 2.1.88 source: src/tools/WebSearchTool/WebSearchTool.ts
// class=modified (alt of src/tools/WebSearchTool/WebSearchTool.ts)  jaccard=0.0836  score=1  fileCov=0.0836
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var $_l = E(() => {
  ql();
  Ye();
  es();
  XAe = R(se(), 1);
});
function Rgf(e) {
  return {
    type: "web_search_20250305",
    name: "web_search",
    allowed_domains: e.allowed_domains,
    blocked_domains: e.blocked_domains,
    max_uses: 8,
  };
}
function Lgf(e, t, n) {
  let r = [],
    o = "",
    s = true,
    i = 0,
    a = 0;
  for (let l of e) {
    if (l.type === "server_tool_use") {
      if ((i++, s)) {
        if (((s = false), o.trim().length > 0)) r.push(o.trim());
        o = "";
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
      if (s) o += l.text;
      else ((s = true), (o = l.text));
  }
  if (o.length) r.push(o.trim());
  return {
    query: t,
    results: r,
    durationSeconds: n,
    searchCount: Math.max(i, a),
  };
}
var Igf, xgf, kgf, dXn;
