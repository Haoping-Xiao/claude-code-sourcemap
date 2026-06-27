// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h6o
// matched 2.1.88 source: src/hooks/unifiedSuggestions.ts
// class=modified  jaccard=0.3274  score=0.5283  fileCov=0.4626
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module h6o] deps: zb, je, ih, Jt
((DTt = new Map()), (pdr = new Set()), (pyc = Mi()), (fyc = pyc.subscribe));
ypm = ve(() =>
  dt.object({
    results: dt.string(),
  }),
);
function createSuggestionFromSource(source) {
  switch (source.type) {
    case "file":
      return {
        id: `file-${source.path}`,
        displayText: source.displayText,
        description: source.description,
      };
    case "mcp_resource":
      return {
        id: `mcp-resource-${source.server}__${source.uri}`,
        displayText: source.displayText,
        description: source.description,
      };
    case "mcp_resource_template":
      return {
        id: `mcp-template::${source.server}__${source.uriTemplate}`,
        displayText: source.displayText,
        description: source.description,
        metadata: {
          replacement: y6o("@", source.displayText, true),
          partial: true,
        },
      };
    case "agent":
      return {
        id: `agent-${source.agentType}`,
        displayText: source.displayText,
        description: source.description,
        color: source.color,
      };
  }
}
function Len(e) {
  return Rs(e, Apm);
}
function Hpm(e, t, n = false) {
  if (!t && !n) return [];
  try {
    let r = e.map((s) => ({
      type: "agent",
      displayText: `${s.agentType} (agent)`,
      description: Len(s.whenToUse),
      agentType: s.agentType,
      color: JEe(s.agentType),
    }));
    if (!t) return r;
    let o = t.toLowerCase();
    return r.filter(
      (s) => s.agentType.toLowerCase().includes(o) || s.displayText.toLowerCase().includes(o),
    );
  } catch (r) {
    return (ke(r), []);
  }
}
async function generateUnifiedSuggestions(query, mcpResources, agents, r, o = false, s = {}) {
  if (!mcpResources && !o) return [];
  let [i, a] = await Promise.all([
      t7t(query, mcpResources, o),
      Promise.resolve(Hpm(r, mcpResources, o)),
    ]),
    l = i.map((f) => ({
      type: "file",
      displayText: f.displayText,
      description: f.description,
      path: f.displayText,
      filename: byc.basename(f.displayText),
      score: f.metadata?.score,
    })),
    c = Object.values(agents)
      .flat()
      .map((f) => ({
        type: "mcp_resource",
        displayText: `${f.server}:${f.uri}`,
        description: Len(f.description || f.name || f.uri),
        server: f.server,
        uri: f.uri,
        name: f.name || f.uri,
      })),
    u = Object.values(s)
      .flat()
      .map((f) => ({
        type: "mcp_resource_template",
        displayText: `${f.server}:${Ywo(f.uriTemplate)}`,
        description: Len(f.description || f.name || f.uriTemplate),
        server: f.server,
        uriTemplate: f.uriTemplate,
        name: f.name || f.uriTemplate,
      }));
  if (!mcpResources) return [...l, ...c, ...u, ...a].slice(0, Ren).map(createSuggestionFromSource);
  let d = [...c, ...u, ...a],
    p = [];
  for (let f of l)
    p.push({
      source: f,
      score: f.score ?? 0.5,
    });
  if (d.length > 0) {
    let m = new oZ(d, {
      includeScore: true,
      threshold: 0.6,
      keys: [
        {
          name: "displayText",
          weight: 2,
        },
        {
          name: "name",
          weight: 3,
        },
        {
          name: "server",
          weight: 1,
        },
        {
          name: "description",
          weight: 1,
        },
        {
          name: "agentType",
          weight: 3,
        },
        {
          name: "uriTemplate",
          weight: 2,
        },
      ],
    }).search(mcpResources, {
      limit: Ren,
    });
    for (let g of m) {
      let h = g.item.type === "mcp_resource" ? 0.15 : 0;
      p.push({
        source: g.item,
        score: (g.score ?? 0.5) + h,
      });
    }
  }
  return (
    p.sort((f, m) => f.score - m.score),
    p
      .slice(0, Ren)
      .map((f) => f.source)
      .map(createSuggestionFromSource)
  );
}
async function mdr(e, t, n, r) {
  let o = e.indexOf(":");
  if (o === -1) return null;
  let s = e.slice(0, o),
    i = e.slice(o + 1),
    a = t[s];
  if (!a || a.length === 0) return null;
  let l = Pol(i, a);
  if (!l) {
    if (!i) return null;
    let h = a.filter((y) => y.uriTemplate.startsWith(i) && y.uriTemplate.length > i.length);
    if (h.length === 0) return null;
    return h.slice(0, Ren).map((y) => {
      let b = Ywo(y.uriTemplate);
      return {
        id: `mcp-template::${s}__${y.uriTemplate}`,
        displayText: `${s}:${b}`,
        description: Len(y.description || y.name || y.uriTemplate),
        metadata: {
          replacement: y6o(r, `${s}:${b}`, true),
          partial: true,
        },
      };
    });
  }
  let c = hc(s),
    u = n.find((h) => hc(h.name) === c && h.type === "connected");
  if (!u) return [];
  let d = {};
  for (let [h, y] of Object.entries(l.resolvedArgs))
    try {
      d[h] = decodeURIComponent(y);
    } catch {
      d[h] = y;
    }
  let p = (() => {
      try {
        return decodeURIComponent(l.argValue);
      } catch {
        return l.argValue;
      }
    })(),
    f = await XRa(u, l.template.uriTemplate, l.argName, p, d);
  if (f.length === 0) return [];
  let m = Len(l.template.description || l.template.name || ""),
    g = Dol(l);
  return f.slice(0, Ren).map((h) => {
    let y = Mol(i, l, h);
    return {
      id: `mcp-template-value::${s}__${y}`,
      displayText: y.slice(l.valueStartIndex),
      description: m,
      metadata: {
        replacement: y6o(r, `${s}:${y}`, g),
        partial: g,
      },
    };
  });
}
function y6o(e, t, n) {
  if (e === "@" && t.includes(" ")) return n ? `@"${t}` : `@"${t}"`;
  if (e === "/") return `/${t.replace(/ /g, "%20")}`;
  return `${e}${t}`;
}
var byc,
  Ren = 15,
  Apm = 60;
