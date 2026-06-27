// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zcr
// matched 2.1.88 source: src/entrypoints/mcp.ts
// class=modified  jaccard=0.0886  score=0.3363  fileCov=0.1073
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Fdc = {};
_t(Fdc, {
  startMCPServer: () => startMCPServer,
  createMCPServer: () => createMCPServer,
});
async function startMCPServer(e, t, n) {
  Uy(e);
  let r = createMCPServer(t, n),
    o = new oFe();
  await r.connect(o);
}
function createMCPServer(e, t) {
  XTl(pDo());
  let n = QU(V1),
    r = new mhe(
      {
        name: "claude/tengu",
        version: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
      },
      {
        capabilities: {
          tools: {},
        },
      },
    );
  return (
    r.setRequestHandler(XK, async () => {
      let o = b1(),
        s = F$(o);
      return {
        tools: await Promise.all(
          s.map(async (i) => ({
            ...i,
            description: await i.prompt({
              getToolPermissionContext: async () => o,
              tools: s,
              agents: [],
            }),
            inputSchema: aOe(i.inputSchema),
            outputSchema: void 0,
          })),
        ),
      };
    }),
    r.setRequestHandler(qV, async ({ params: { name: o, arguments: s } }) => {
      let i = b1(),
        a = F$(i),
        l = _l(a, o);
      if (!l) throw Error(`Tool ${o} not found`);
      let c = {
        abortController: Sl(),
        messageQueue: Ug,
        agentContext: of(),
        options: {
          commands: Zim,
          tools: a,
          mainLoopModel: As(),
          thinkingConfig: {
            type: "disabled",
          },
          mcpClients: [],
          mcpResources: {},
          isNonInteractiveSession: true,
          debug: e,
          verbose: t,
          agentDefinitions: {
            activeAgents: [],
            allAgents: [],
          },
        },
        getAppState: () => y6(),
        setAppState: () => {},
        getMcp: () => y6().mcp,
        getWebBrowser: () => y6().webBrowser,
        setToolPermissionContext: () => {},
        taskRegistry: xAt,
        sessionHooksRegistry: For,
        getReplContexts: () => ({}),
        setReplContext: () => {},
        setWebBrowserSlice: () => {},
        setArtifactReadVersion: () => {},
        agentLifecycle: Uor,
        teammateColors: jor,
        rootToolSurface: {
          tools: a,
          mainLoopModel: As(),
        },
        messages: [],
        turnStartIndex: 0,
        readFileState: n,
        getFileHistoryState: () => {
          return;
        },
        applyFileHistoryOp: () => {},
        applyAttributionOp: () => {},
      };
      try {
        if (!l.isEnabled()) {
          let p = `Tool ${o} is not enabled`;
          return (
            T(`MCP server: ${p}`, {
              level: "error",
            }),
            {
              isError: true,
              content: [
                {
                  type: "text",
                  text: p,
                },
              ],
            }
          );
        }
        let u = await l.validateInput?.(s ?? {}, c);
        if (u && !u.result) {
          let p = `Tool ${o} input is invalid: ${u.message}`;
          return (
            T(`MCP server: ${p}`, {
              level: "error",
            }),
            {
              isError: true,
              content: [
                {
                  type: "text",
                  text: p,
                },
              ],
            }
          );
        }
        let d = await l.call(
          s ?? {},
          c,
          RL,
          dE({
            content: [],
          }),
        );
        return {
          content: [
            {
              type: "text",
              text: typeof d === "string" ? d : De(d.data),
            },
          ],
        };
      } catch (u) {
        let p =
          (u instanceof Error ? eRo(u) : [String(u)])
            .filter(Boolean)
            .join(
              `
`,
            )
            .trim() || "Error";
        if (u instanceof ru || u instanceof oM || u instanceof ade)
          T(`MCP server tool call '${o}' failed: ${p}`, {
            level: "error",
          });
        else ke(u);
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: p,
            },
          ],
        };
      }
    }),
    r
  );
}
var Zim;
