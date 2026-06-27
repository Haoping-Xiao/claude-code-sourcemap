// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H3t
// matched 2.1.88 source: src/tools/ReadMcpResourceTool/ReadMcpResourceTool.ts
// class=modified (alt of src/tools/ReadMcpResourceTool/ReadMcpResourceTool.ts)  jaccard=0.2145  score=0.3793  fileCov=0.3306
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var H3t = E(() => {
  Vb();
  Xr();
  BI();
  E3t();
  Ire();
  qNn();
  ii();
  vn();
  cDe();
  Jt();
  sr();
  I8();
  ILe();
  dqe();
  pIa();
  ((uvp = ve(() =>
    H.object({
      server: H.string().describe("The MCP server name"),
      uri: H.string().describe("The directory resource URI to list"),
    }),
  )),
    (dvp = ve(() =>
      H.object({
        resources: H.array(
          H.object({
            uri: H.string().describe("Child resource URI"),
            name: H.string().describe("Child resource name"),
            mimeType: H.string().optional().describe("Child MIME type"),
          }),
        ).describe(
          `Direct children of the directory resource. Subdirectories appear with mimeType "${S3t}".`,
        ),
        error: H.string()
          .optional()
          .describe("Human-readable error when the server could not list the directory"),
      }),
    )),
    (xre = ti({
      isConcurrencySafe() {
        return true;
      },
      isReadOnly() {
        return true;
      },
      toAutoClassifierInput(e) {
        return `${e.server} ${e.uri}`;
      },
      shouldDefer: true,
      name: aJ,
      aliases: ["ReadMcpResourceDir"],
      searchHint: "list the children of an MCP directory resource",
      maxResultSizeChars: 100000 /* 1e5 */,
      async description() {
        return aIa;
      },
      async prompt() {
        return lIa;
      },
      get inputSchema() {
        return uvp();
      },
      get outputSchema() {
        return dvp();
      },
      async call(e, { options: { mcpClients: t } }) {
        let { server: n, uri: r } = e,
          o = WNn(t, n);
        if (!hk())
          return {
            data: {
              resources: [],
              error: "Directory listing is not enabled in this build.",
            },
          };
        if (!uqe(o.capabilities))
          return {
            data: {
              resources: [],
              error: `Server "${o.name}" does not support directory listing.`,
            },
          };
        if (o.config.pluginSource) Zj(o.config.pluginSource);
        let s = await CSe(o),
          i;
        try {
          i = await oIa(s, r);
        } catch (l) {
          if (l instanceof gi && l.code === Si.InvalidParams)
            return (
              au(o.name, `resources/directory/read returned ${l.code} \u2014 not a directory`),
              {
                data: {
                  resources: [],
                  error: `Not a directory resource: ${r}. If it is a file resource, use ${ide} instead.`,
                },
              }
            );
          throw l;
        }
        return {
          data: {
            resources: i.map((l) => ({
              uri: lDe(l.uri),
              name: B4(l.name),
              mimeType: l.mimeType !== void 0 ? B4(l.mimeType) : void 0,
            })),
          },
        };
      },
      renderToolUseMessage: cIa,
      userFacingName: uIa,
      renderToolResultMessage: dIa,
      isResultTruncated(e, { columns: t }) {
        if (e.error) return X1(e.error, t);
        return X1(De(e, null, 2), t);
      },
      mapToolResultToToolResultBlockParam(e, t) {
        if (e.error)
          return {
            tool_use_id: t,
            type: "tool_result",
            content: e.error,
          };
        let n = e.resources.map((o) => `${o.name}${o.mimeType === S3t ? "/" : ""}`).join(`
`),
          r =
            e.resources.length > 0
              ? `Directory listing (${e.resources.length} ${bn(e.resources.length, "entry", "entries")}):
${n}`
              : "Directory is empty.";
        return {
          tool_use_id: t,
          type: "tool_result",
          content: `${r}

${De(e)}`,
        };
      },
    })));
});
function fvp() {
  let e = process.env.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (e) {
    let t = parseInt(e, 10);
    if (!isNaN(t) && t > 0) return t;
  }
  return;
}
var pvp = 25000,
  ade,
  jSe,
  pqe;
