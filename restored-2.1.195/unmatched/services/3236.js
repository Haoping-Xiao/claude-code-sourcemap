// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eIa
// matched 2.1.88 source: src/tools/MCPTool/MCPTool.ts
// class=new  jaccard=0.0561  score=0.237  fileCov=0.0685
// note: nearest: src/tools/MCPTool/MCPTool.ts (0.0561); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eIa = E(() => {
  yBn();
  Xr();
  ft();
  Cre();
  cqe();
  BI();
  Ox();
  wr();
  fn();
  At();
  vn();
  nvp = ve(() => H.object({})), rvp = ve(() => H.object({
    callback_url: H.string().describe("The full callback URL from the browser address bar after authorizing, e.g. http://localhost:<port>/callback?code=...&state=...")
  }));
});
function hk() {
  return at("tengu_mcp_skills", false);
}
function tIa(e) {
  return e?.extensions?.[Ldo] !== void 0;
}
var Ldo = "io.modelcontextprotocol/skills";