// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ILe
// matched 2.1.88 source: src/tools/ListMcpResourcesTool/prompt.ts
// class=modified  jaccard=0.4918  score=0.4918  fileCov=1
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
var LIST_MCP_RESOURCES_TOOL_NAME = "ListMcpResourcesTool",
  DESCRIPTION = `
Lists available resources from configured MCP servers.
Each resource object includes a 'server' field indicating which server it's from.

Usage examples:
- List all resources from all servers: \`listMcpResources\`
- List resources from a specific server: \`listMcpResources({ server: "myserver" })\`
`,
  PROMPT = `
List available resources from configured MCP servers.
Each returned resource will include all standard MCP resource fields plus a 'server' field 
indicating which server the resource belongs to.

Parameters:
- server (optional): The name of a specific MCP server to get resources from. If not provided,
  resources from all servers will be returned.
`;
function sP(e, t, n) {
  if (!(n?.supportsHyperlinks ?? vI())) {
    if (t !== void 0) {
      let c = Ja(t);
      if (c !== e && e !== `http://${c}` && e !== `https://${c}`) return `${t} (${e})`;
    }
    return e;
  }
  let l = ((n?.themeName ? eUi(n.themeName) : false) ? wt.blue : wt.blueBright)(t ?? e);
  return `${Yua}${e}${Xua}${l}${Yua}${Xua}`;
}
var Yua = "\x1B]8;;",
  Xua = "\x07";
