// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I3t
// matched 2.1.88 source: src/tools/ReadMcpResourceTool/ReadMcpResourceTool.ts
// class=modified  jaccard=0.3694  score=0.4971  fileCov=0.5899
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var I3t = E(() => {
  Vb();
  Xr();
  BI();
  E3t();
  qNn();
  ii();
  vn();
  qdt();
  Jt();
  I8();
  ILe();
  dqe();
  IIa();
  ((Cvp = ve(() =>
    H.object({
      server: H.string().describe("The MCP server name"),
      uri: H.string().describe("The resource URI to read"),
    }),
  )),
    (Ivp = new Set([-32002, Si.InvalidParams])),
    (xvp = ve(() =>
      H.object({
        contents: H.array(
          H.object({
            uri: H.string().describe("Resource URI"),
            mimeType: H.string().optional().describe("MIME type of the content"),
            text: H.string().optional().describe("Text content of the resource"),
            blobSavedTo: H.string().optional().describe("Path where binary blob content was saved"),
          }),
        ),
        error: H.string()
          .optional()
          .describe("Human-readable error when the server could not read the resource"),
      }),
    )),
    (u5 = ti({
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
      name: "ReadMcpResourceTool",
      aliases: ["ReadMcpResource"],
      searchHint: "read a specific MCP resource by URI",
      maxResultSizeChars: 100000 /* 1e5 */,
      async description() {
        return sIa;
      },
      async prompt() {
        return iIa;
      },
      get inputSchema() {
        return Cvp();
      },
      get outputSchema() {
        return xvp();
      },
      async call(e, { options: { mcpClients: t } }) {
        let { server: n, uri: r } = e,
          o = WNn(t, n);
        if (o.config.pluginSource) Zj(o.config.pluginSource);
        let s = await CSe(o),
          i;
        try {
          i = await s.client.request(
            {
              method: "resources/read",
              params: {
                uri: r,
              },
            },
            fae,
          );
        } catch (l) {
          if (l instanceof gi) {
            if (l.code === Si.MethodNotFound)
              return (
                au(
                  o.name,
                  "resources/read returned -32601 MethodNotFound \u2014 server advertises resources but does not implement reads",
                ),
                {
                  data: {
                    contents: [],
                    error: `Server "${o.name}" advertises resource support but does not implement resource reads.`,
                  },
                }
              );
            if (Ivp.has(l.code)) {
              (au(o.name, `resources/read returned ${l.code} \u2014 resource not found`),
                v4.cache.delete(o.name),
                cde.cache.delete(o.name));
              let c = uqe(s.capabilities)
                ? ` If the URI is a directory resource, use ${aJ} instead.`
                : "";
              return {
                data: {
                  contents: [],
                  error: `Resource not found: ${r} \u2014 it may have been deleted or the URI is stale. Re-run ${Kue} to refresh.${c}`,
                },
              };
            }
          }
          throw l;
        }
        return {
          data: {
            contents: await Promise.all(
              i.contents.map(async (l, c) => {
                if ("text" in l)
                  return {
                    uri: l.uri,
                    mimeType: l.mimeType,
                    text: l.text,
                  };
                if (!("blob" in l) || typeof l.blob !== "string")
                  return {
                    uri: l.uri,
                    mimeType: l.mimeType,
                  };
                let u = `mcp-resource-${Date.now()}-${c}-${Math.random().toString(36).slice(2, 8)}`,
                  d = await fqe(Buffer.from(l.blob, "base64"), l.mimeType, u);
                if ("error" in d)
                  return {
                    uri: l.uri,
                    mimeType: l.mimeType,
                    text: `Binary content could not be saved to disk: ${d.error}`,
                  };
                return {
                  uri: l.uri,
                  mimeType: l.mimeType,
                  blobSavedTo: d.filepath,
                  text: C3t(
                    d.filepath,
                    l.mimeType,
                    d.size,
                    `[Resource from ${o.name} at ${l.uri}] `,
                  ),
                };
              }),
            ),
          },
        };
      },
      renderToolUseMessage: vIa,
      userFacingName: wIa,
      renderToolResultMessage: CIa,
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
        return {
          tool_use_id: t,
          type: "tool_result",
          content: De(e),
        };
      },
    })));
});
function xIa(e) {
  if (!kvp.test(e)) return;
  (G("tengu_git_operation", {
    operation: We("pr_create"),
  }),
    YBe()?.add(1));
}
var kvp;
