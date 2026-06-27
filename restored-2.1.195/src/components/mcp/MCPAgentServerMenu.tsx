// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZFl
// matched 2.1.88 source: src/components/mcp/MCPAgentServerMenu.tsx
// class=modified  jaccard=0.3162  score=0.4105  fileCov=0.5791
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZFl] deps: np, kt, Yfe
JFl = {
  connected: "connected",
  pending: "connecting",
  disabled: "disabled",
  failed: "not connected",
  "needs-auth": "needs authentication",
  "needs-approval": "pending approval",
};
function MCPAgentServerMenu({ agentServer: e, onCancel: t, onComplete: n }) {
  let [r] = na(),
    [o, s] = bse.useState(false),
    [i, a] = bse.useState(null),
    [l, c] = bse.useState(null),
    u = bse.useRef(null);
  bse.useEffect(() => () => u.current?.abort(), []);
  let d = bse.useCallback(() => {
    if (o) (u.current?.abort(), (u.current = null), s(false), c(null));
  }, [o]);
  $r("confirm:no", d, {
    context: "Confirmation",
    isActive: o,
  });
  let p = bse.useCallback(async () => {
      if (!e.needsAuth || !e.url || (e.transport !== "http" && e.transport !== "sse")) return;
      let g = r6(e.name, {
        type: e.transport,
        url: e.url,
      });
      if (g.kind === "anthropic-hosted") {
        a(g.message);
        return;
      }
      if (g.kind !== "oauth") return;
      (s(true), a(null));
      let h = new AbortController();
      u.current = h;
      try {
        (await sJ(e.name, g.config, c, h.signal),
          n(
            `Authentication successful for ${e.name}. The server will connect when the agent runs.`,
          ));
      } catch (y) {
        if (y instanceof Error && !(y instanceof N4)) a(y.message);
      } finally {
        (s(false), (u.current = null));
      }
    }, [e, n]),
    f = Cx(String(e.name));
  if (o)
    return rd.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        rd.jsxs(w, {
          color: "claude",
          children: ["Authenticating with ", e.name, "\u2026"],
        }),
        rd.jsxs(U, {
          children: [
            rd.jsx(Vu, {}),
            rd.jsx(w, {
              children: " A browser window will open for authentication",
            }),
          ],
        }),
        l &&
          rd.jsxs(U, {
            flexDirection: "column",
            children: [
              rd.jsx(w, {
                dimColor: true,
                children: "If your browser doesn't open automatically, copy this URL manually:",
              }),
              rd.jsx(xs, {
                url: l,
              }),
            ],
          }),
        rd.jsx(U, {
          marginLeft: 3,
          children: rd.jsxs(w, {
            dimColor: true,
            children: [
              "Return here after authenticating in your browser.",
              " ",
              rd.jsx(mr, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "go back",
              }),
            ],
          }),
        }),
      ],
    });
  let m = [];
  if (e.needsAuth)
    m.push({
      label: e.isAuthenticated ? "Re-authenticate" : "Authenticate",
      value: "auth",
    });
  return (
    m.push({
      label: "Back",
      value: "back",
    }),
    rd.jsxs(zn, {
      title: `${f} MCP Server`,
      subtitle: "agent-only",
      onCancel: t,
      inputGuide: rd.jsxs(Tn, {
        children: [
          rd.jsx(ht, {
            chord: ["up", "down"],
            action: "navigate",
          }),
          rd.jsx(ht, {
            chord: "enter",
            action: "confirm",
          }),
          rd.jsx(mr, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "go back",
          }),
        ],
      }),
      children: [
        rd.jsxs(Km, {
          box: "plain",
          columns: [
            {
              bold: true,
              width: 8,
            },
            {},
          ],
          children: [
            rd.jsxs(Km.Row, {
              children: [
                rd.jsx(rd.Fragment, {
                  children: "Type:",
                }),
                rd.jsx(w, {
                  dimColor: true,
                  children: e.transport,
                }),
              ],
            }),
            e.url &&
              rd.jsxs(Km.Row, {
                children: [
                  rd.jsx(rd.Fragment, {
                    children: "URL:",
                  }),
                  rd.jsx(w, {
                    dimColor: true,
                    children: e.url,
                  }),
                ],
              }),
            e.command &&
              rd.jsxs(Km.Row, {
                children: [
                  rd.jsx(rd.Fragment, {
                    children: "Command:",
                  }),
                  rd.jsx(w, {
                    dimColor: true,
                    children: e.command,
                  }),
                ],
              }),
            rd.jsxs(Km.Row, {
              children: [
                rd.jsx(rd.Fragment, {
                  children: "Used by:",
                }),
                rd.jsx(w, {
                  dimColor: true,
                  children: e.sourceAgents.join(", "),
                }),
              ],
            }),
          ],
        }),
        rd.jsx(U, {
          children: rd.jsxs(Km, {
            box: "plain",
            columns: [
              {
                bold: true,
                width: 8,
              },
              {},
            ],
            children: [
              rd.jsxs(Km.Row, {
                children: [
                  rd.jsx(rd.Fragment, {
                    children: "Status:",
                  }),
                  rd.jsxs(w, {
                    children: [Io("inactive", r)(nt.radioOff), " not connected (agent-only)"],
                  }),
                ],
              }),
              e.needsAuth &&
                rd.jsxs(Km.Row, {
                  children: [
                    rd.jsx(rd.Fragment, {
                      children: "Auth:",
                    }),
                    e.isAuthenticated
                      ? rd.jsxs(w, {
                          children: [Io("success", r)(nt.tick), " authenticated"],
                        })
                      : rd.jsxs(w, {
                          children: [
                            Io("warning", r)(nt.triangleUpOutline),
                            " may need authentication",
                          ],
                        }),
                  ],
                }),
            ],
          }),
        }),
        rd.jsx(U, {
          children: rd.jsx(w, {
            dimColor: true,
            children: "This server connects only when running the agent.",
          }),
        }),
        i &&
          rd.jsx(U, {
            children: rd.jsx(Va, {
              error: i,
            }),
          }),
        rd.jsx(U, {
          children: rd.jsx(Sr, {
            options: m,
            onChange: async (g) => {
              switch (g) {
                case "auth":
                  await p();
                  break;
                case "back":
                  t();
                  break;
              }
            },
            onCancel: t,
          }),
        }),
      ],
    })
  );
}
var bse, rd;
