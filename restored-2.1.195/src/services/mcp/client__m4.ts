// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yec
// matched 2.1.88 source: src/services/mcp/client.ts
// class=modified (alt of src/services/mcp/client.ts)  jaccard=0.0099  score=0.2963  fileCov=0.0101
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yec] deps: @modelcontextprotocol/sdk/dist/esm/server/index.js, MQe, @modelcontextprotocol/sdk/dist/esm/shared/protocol.js, @modelcontextprotocol/sdk/dist/esm/types.js, utils/settings/permissionValidation.ts, @modelcontextprotocol/sdk/dist/esm/types.js, zod/v4/classic/schemas.js
WKf = {
  type: "object",
  properties: {},
};
YJt = {
  completion: {
    values: [],
    hasMore: false,
  },
};
function fetchToolsForClient(e, t, n, r, o) {
  let s = {};
  if (o?.searchHint) s["anthropic/searchHint"] = o.searchHint;
  if (o?.alwaysLoad) s["anthropic/alwaysLoad"] = true;
  return {
    name: e,
    description: t,
    inputSchema: n,
    handler: r,
    annotations: o?.annotations,
    _meta: Object.keys(s).length > 0 ? s : void 0,
  };
}
function bec(e) {
  let t = new W3o(
    {
      name: e.name,
      version: e.version ?? "1.0.0",
    },
    {
      capabilities: {
        tools: e.tools ? {} : void 0,
      },
      instructions: e.instructions,
    },
  );
  if (e.tools)
    e.tools.forEach((n) => {
      for (let r of Object.values(n.inputSchema)) {
        if (!VKf(r)) continue;
        let o = r.description;
        if (o && !lG.has(r))
          lG.add(r, {
            description: o,
          });
      }
      t.registerTool(
        n.name,
        {
          description: n.description,
          inputSchema: n.inputSchema,
          annotations: n.annotations,
          _meta: e.alwaysLoad
            ? {
                "anthropic/alwaysLoad": true,
                ...n._meta,
              }
            : n._meta,
        },
        n.handler,
      );
    });
  return {
    type: "sdk",
    name: e.name,
    instance: t,
  };
}
function VKf(e) {
  return typeof e === "object" && e !== null && "_zod" in e;
}
