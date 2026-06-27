// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ILe
// matched 2.1.88 source: src/tools/ListMcpResourcesTool/prompt.ts
// class=modified  jaccard=0.5701  score=0.5701  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ILe = E(() => {
  iu();
  Q8();
  zX();
  Tc();
  t0e();
});
var Kue = "ListMcpResourcesTool",
  zua = `
Lists available resources from configured MCP servers.
Each resource object includes a 'server' field indicating which server it's from.

Usage examples:
- List all resources from all servers: \`listMcpResources\`
- List resources from a specific server: \`listMcpResources({ server: "myserver" })\`
`,
  Kua = `
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
