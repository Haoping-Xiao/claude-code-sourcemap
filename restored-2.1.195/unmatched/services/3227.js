// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module udo
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/index.js
// class=new  jaccard=0.0263  score=0.1791  fileCov=0.0298
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/client/index.js (0.0263); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var udo = E(() => {
  wUn();
});
function yCa() {
  return at("tengu_mcp_stateless_skip_init", !0);
}
function _Ca() {
  if (!yCa()) return {};
  let e = CUn(),
    t = Buffer.from(De(e)).toString("base64");
  if (Buffer.byteLength(t, "ascii") > fTp) return T("[claudeai-mcp] client capabilities header exceeds size limit \u2014 omitting init-projection headers"), {};
  return {
    "anthropic-mcp-client-capabilities": t,
    "MCP-Protocol-Version": uae
  };
}
function IUn(e) {
  return e.type === "claudeai-proxy" && e.stateless === !0 && yCa();
}
function bCa(e) {
  if (!IUn(e) || e.type !== "claudeai-proxy") return;
  if (e.cachedInitResponse == null) return;
  let t = Ekt.safeParse(e.cachedInitResponse);
  if (!t.success) {
    T(`[claudeai-mcp] cached_init_response for ${e.id} failed InitializeResult validation \u2014 falling back to real initialize`);
    return;
  }
  return t.data;
}
function SCa(e, t) {
  let n = e.send.bind(e);
  e.send = async (r, o) => {
    if (t !== void 0 && WUe(r) && r.method === "initialize") {
      let s = {
        jsonrpc: "2.0",
        id: r.id,
        result: t
      };
      queueMicrotask(() => e.onmessage?.(s));
      return;
    }
    if (Hcn(r) && r.method === "notifications/initialized") return;
    return n(r, o);
  };
}
function ddo(e, t) {
  let n = new URL(t).href;
  return async (r, o) => {
    if ((o?.method ?? "GET").toUpperCase() !== "GET") return e(r, o);
    let s = typeof r === "object" && r !== null && "url" in r ? r.url : String(r);
    if (new URL(s).href === n) return new Response(null, {
      status: 405,
      statusText: "Method Not Allowed"
    });
    return e(r, o);
  };
}
var fTp = 6144;