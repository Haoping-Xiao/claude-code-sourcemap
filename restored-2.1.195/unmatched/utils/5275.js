// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mic
// matched 2.1.88 source: src/components/mcp/MCPStdioServerMenu.tsx
// class=new  jaccard=0.0414  score=0.1366  fileCov=0.056
// note: nearest: src/components/mcp/MCPStdioServerMenu.tsx (0.0414); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mic = E(() => {
  Rx();
  EAe();
  je();
  At();
  Mh();
  dr();
  _1();
  cdo();
  h7n();
});
function qem(e, t) {
  let n = o => {
      let s = t;
      for (let i of o.split(".")) {
        if (s == null || typeof s !== "object") return;
        s = s[i];
      }
      return s;
    },
    r = o => {
      if (typeof o === "string") return o.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_.]*)\}/g, (s, i) => {
        let a = n(i);
        if (a === void 0 || a === null) return "";
        return typeof a === "object" ? De(a) : String(a);
      });
      if (Array.isArray(o)) return o.map(r);
      if (o !== null && typeof o === "object") {
        let s = {};
        for (let [i, a] of Object.entries(o)) s[i] = r(a);
        return s;
      }
      return o;
    };
  return r(e);
}
async function O5o(e, t, n, r, o, s = lp) {
  let i = r ?? tUe();
  if (i === void 0) {
    let p = `mcp_tool hooks are not available for the '${t}' hook event (no MCP client context)`;
    return T(`Hooks: mcp_tool hook skipped \u2014 ${p}`, {
      level: "warn"
    }), {
      ok: false,
      body: "",
      error: p
    };
  }
  let a = i.find(p => p.name === e.server);
  if (!a || a.type !== "connected") {
    let p = `MCP server '${e.server}' not connected`;
    return T(`Hooks: mcp_tool hook skipped \u2014 ${p}`, {
      level: "warn"
    }), {
      ok: false,
      body: "",
      error: p
    };
  }
  let l = e.input ? qem(e.input, n) : {},
    c = e.timeout ? e.timeout * 1000 : s,
    {
      signal: u,
      cleanup: d
    } = xL(o, {
      timeoutMs: c
    });
  try {
    T(`Hooks: mcp_tool calling ${e.server}/${e.tool} with ${Object.keys(l).length} arg(s)`);
    let p = await a.client.callTool({
      name: e.tool,
      arguments: l
    }, z2, {
      signal: u,
      timeout: c
    });
    d();
    let f = Array.isArray(p.content) ? p.content.map(m => m.type === "text" ? m.text : `[${m.type}]`).join(`
`) : "";
    if (p.isError) return {
      ok: false,
      body: f,
      error: f || "MCP tool returned an error"
    };
    return {
      ok: true,
      body: f
    };
  } catch (p) {
    if (d(), u.aborted) return {
      ok: false,
      body: "",
      aborted: true
    };
    let f = be(p);
    return T(`Hooks: mcp_tool hook error: ${f}`, {
      level: "error"
    }), {
      ok: false,
      body: "",
      error: f
    };
  }
}