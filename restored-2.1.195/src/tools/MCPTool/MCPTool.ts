// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sSa
// matched 2.1.88 source: src/tools/MCPTool/MCPTool.ts
// class=modified  jaccard=0.5149  score=0.7175  fileCov=0.6458
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sSa = E(() => {
  Xr();
  ii();
  y4t();
  ILe();
  aco();
  ((__p = ve(() => H.object({}).passthrough())),
    (b_p = ve(() =>
      H.union([
        H.string(),
        H.array(
          H.object({
            type: H.string(),
          }).passthrough(),
        ),
        H.undefined(),
      ]).describe("MCP tool execution result"),
    )),
    (lco = ti({
      isMcp: true,
      isOpenWorld() {
        return false;
      },
      name: "mcp",
      maxResultSizeChars: 100000 /* 1e5 */,
      async description() {
        return mda;
      },
      async prompt() {
        return fda;
      },
      get inputSchema() {
        return __p();
      },
      get outputSchema() {
        return b_p();
      },
      async call() {
        return {
          data: "",
        };
      },
      async checkPermissions() {
        return {
          behavior: "passthrough",
          message: "MCPTool requires permission.",
        };
      },
      renderToolUseMessage: rSa,
      userFacingName: () => "mcp",
      renderToolUseProgressMessage: oSa,
      renderToolResultMessage: hBn,
      isResultTruncated(e, t) {
        let n = t?.columns;
        if (typeof e === "string") return X1(e, n);
        if (Array.isArray(e)) return e.some((r) => r.type === "text" && X1(r.text, n));
        return false;
      },
      mapToolResultToToolResultBlockParam(e, t) {
        return {
          tool_use_id: t,
          type: "tool_result",
          content: Uut(e),
        };
      },
    })));
});
function S_p(e, t) {
  var n = [];
  return (
    mdn(e, function (r, o, s) {
      if (t(r, o, s)) n.push(r);
    }),
    n
  );
}
var iSa;
