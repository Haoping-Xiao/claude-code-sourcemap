// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fut
// matched 2.1.88 source: src/tools/ToolSearchTool/ToolSearchTool.ts
// class=modified (alt of src/tools/ToolSearchTool/ToolSearchTool.ts)  jaccard=0.165  score=0.744  fileCov=0.1749
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: outputSchema, inputSchema, clearToolSearchDescriptionCache, ToolSearchTool
var Lla = {};
function Klp(e) {
  return e
    .map((t) => t.name)
    .sort()
    .join(",");
}
function Cla(e) {
  let t = Klp(e);
  if (eao !== t)
    (T("ToolSearchTool: cache invalidated - deferred tools changed"),
      J1n.cache.clear?.(),
      (eao = t));
}
function clearToolSearchDescriptionCache() {
  (J1n.cache.clear?.(), (eao = null));
}
function mut(e, t, n, r) {
  return {
    data: {
      matches: e,
      query: t,
      total_deferred_tools: n,
      ...(r.length > 0 && {
        pending_mcp_servers: r,
      }),
    },
  };
}
function Ila(e) {
  let t = e.name,
    n = e.mcpInfo ?? eI(t);
  if (n) {
    let o = [n.serverName, n.toolName].filter((i) => Boolean(i)).map((i) => i.toLowerCase()),
      s = o.flatMap((i) => i.split(/[\s_.]+/)).filter(Boolean);
    return {
      parts: s,
      coarseParts: o,
      full: s.join(" "),
      isMcp: true,
    };
  }
  let r = t
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll("_", " ")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  return {
    parts: r,
    coarseParts: [t.toLowerCase()],
    full: r.join(" "),
    isMcp: false,
  };
}
function Xlp(e) {
  let t = new Map();
  for (let n of e) if (!t.has(n)) t.set(n, new RegExp(`\\b${wx(n)}\\b`));
  return t;
}
async function xla(e, t, n, r) {
  let o = e.toLowerCase().trim(),
    s = t.find((f) => f.name.toLowerCase() === o) ?? n.find((f) => f.name.toLowerCase() === o);
  if (s) return [s.name];
  if (o.startsWith("mcp__") && o.length > 5) {
    let f = t
      .filter((m) => m.name.toLowerCase().startsWith(o))
      .slice(0, r)
      .map((m) => m.name);
    if (f.length > 0) return f;
  }
  let i = o.split(/\s+/).filter((f) => f.length > 0),
    a = [],
    l = [];
  for (let f of i)
    if (f.startsWith("+") && f.length > 1) a.push(f.slice(1));
    else l.push(f);
  let c = a.length > 0 ? [...a, ...l] : i,
    u = Xlp(c),
    d = t;
  if (a.length > 0)
    d = (
      await Promise.all(
        t.map(async (m) => {
          let g = Ila(m),
            y = (await J1n(m.name, n)).toLowerCase(),
            b = m.searchHint?.toLowerCase() ?? "";
          return a.every((S) => {
            let A = u.get(S);
            return (
              g.parts.includes(S) ||
              g.parts.some((v) => v.includes(S)) ||
              g.coarseParts.includes(S) ||
              g.coarseParts.some((v) => v.includes(S)) ||
              A.test(y) ||
              (b && A.test(b))
            );
          })
            ? m
            : null;
        }),
      )
    ).filter((m) => m !== null);
  return (
    await Promise.all(
      d.map(async (f) => {
        let m = Ila(f),
          h = (await J1n(f.name, n)).toLowerCase(),
          y = f.searchHint?.toLowerCase() ?? "",
          b = 0;
        for (let _ of c) {
          let S = u.get(_);
          if (m.parts.includes(_)) b += m.isMcp ? 12 : 10;
          else if (m.parts.some((A) => A.includes(_))) b += m.isMcp ? 6 : 5;
          if (m.coarseParts.includes(_)) b += m.isMcp ? 12 : 10;
          else if (m.coarseParts.some((A) => A.includes(_))) b += m.isMcp ? 4 : 3;
          if (m.full.includes(_) && b === 0) b += 3;
          if (y && S.test(y)) b += 4;
          if (S.test(h)) b += 2;
        }
        return {
          name: f.name,
          score: b,
        };
      }),
    )
  )
    .filter((f) => f.score > 0)
    .sort((f, m) => m.score - f.score)
    .slice(0, r)
    .map((f) => f.name);
}
var inputSchema,
  outputSchema,
  zlp = 5000,
  eao = null,
  J1n,
  ToolSearchTool;
