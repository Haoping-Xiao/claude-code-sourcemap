// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qnr
// matched 2.1.88 source: src/components/mcp/CapabilitiesSection.tsx
// class=modified (alt of src/components/mcp/CapabilitiesSection.tsx)  jaccard=0.0527  score=0.057  fileCov=0.4099
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qnr] deps: si, kt, O0, _i, jh, Ye, ps, Cre, Yle, cqe, a5, BI, Yfe, g$, uo, oo, vy, At, vn, sr, Cc, mE, Bs, vi, f_, Ko, gm, gKe, EC, Mg, LBo
((BT = R(rt(), 1)), (ns = R(se(), 1)));
function iXt({
  server: e,
  serverToolsCount: t,
  onViewTools: n,
  onCancel: r,
  onComplete: o,
  borderless: s = false,
}) {
  let [i] = na(),
    a = Ht((h) => h.mcp),
    l = LEt(),
    c = ZOe(),
    [u, d] = Vnr.useState(false),
    p = Vnr.useCallback(async () => {
      let h = e.client.type !== "disabled";
      try {
        (await c(e.name), r());
      } catch (y) {
        o(`Failed to ${h ? "disable" : "enable"} MCP server '${e.name}': ${be(y)}`);
      }
    }, [e.client.type, e.name, c, r, o]),
    f = Cx(String(e.name)),
    m = $Un(a.commands, e.name).length,
    g = [];
  if (e.client.type !== "disabled" && t > 0)
    g.push({
      label: "View tools",
      value: "tools",
    });
  if (e.client.type !== "disabled")
    g.push({
      label: "Reconnect",
      value: "reconnectMcpServer",
    });
  if (
    (g.push({
      label: e.client.type !== "disabled" ? "Disable" : "Enable",
      value: "toggle-enabled",
    }),
    g.length === 0)
  )
    g.push({
      label: "Back",
      value: "back",
    });
  if (u)
    return ud.jsxs(zn, {
      title: `${f} MCP Server`,
      onCancel: () => {},
      hideBorder: s,
      hideInputGuide: true,
      children: [
        ud.jsxs(w, {
          color: "text",
          children: [
            "Reconnecting to ",
            ud.jsx(w, {
              bold: true,
              children: e.name,
            }),
          ],
        }),
        ud.jsxs(U, {
          children: [
            ud.jsx(Vu, {}),
            ud.jsx(w, {
              children: " Restarting MCP server process",
            }),
          ],
        }),
        ud.jsx(w, {
          dimColor: true,
          children: "This may take a few moments.",
        }),
      ],
    });
  return ud.jsxs(zn, {
    title: `${f} MCP Server`,
    onCancel: r,
    hideBorder: s,
    inputGuide: ud.jsxs(Tn, {
      children: [
        ud.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        ud.jsx(ht, {
          chord: "enter",
          action: "select",
        }),
        ud.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "back",
        }),
      ],
    }),
    children: [
      ud.jsxs(U, {
        flexDirection: "column",
        gap: 0,
        children: [
          ud.jsxs(Km, {
            box: "plain",
            columns: [
              {
                bold: true,
              },
              {},
            ],
            children: [
              ud.jsxs(Km.Row, {
                children: [
                  ud.jsx(ud.Fragment, {
                    children: "Status:",
                  }),
                  e.client.type === "disabled"
                    ? ud.jsxs(w, {
                        children: [Io("inactive", i)(nt.radioOff), " disabled"],
                      })
                    : e.client.type === "connected"
                      ? e.client.toolsListError
                        ? ud.jsxs(w, {
                            children: [
                              ud.jsx(Hs, {
                                status: "warning",
                                withSpace: true,
                              }),
                              "connected \xB7 tools fetch failed",
                            ],
                          })
                        : e.client.capabilities?.tools && t === 0
                          ? ud.jsxs(w, {
                              children: [
                                ud.jsx(Hs, {
                                  status: "warning",
                                  withSpace: true,
                                }),
                                "connected \xB7 no tools",
                              ],
                            })
                          : ud.jsxs(w, {
                              children: [
                                ud.jsx(Hs, {
                                  status: "success",
                                  withSpace: true,
                                }),
                                "connected",
                              ],
                            })
                      : e.client.type === "pending"
                        ? ud.jsxs(w, {
                            children: [
                              ud.jsx(Hs, {
                                status: "pending",
                                withSpace: true,
                              }),
                              "connecting\u2026",
                            ],
                          })
                        : ud.jsxs(w, {
                            children: [
                              ud.jsx(Hs, {
                                status: "error",
                                withSpace: true,
                              }),
                              "failed",
                            ],
                          }),
                ],
              }),
              ud.jsxs(Km.Row, {
                children: [
                  ud.jsx(ud.Fragment, {
                    children: "Command:",
                  }),
                  ud.jsx(w, {
                    dimColor: true,
                    children: e.config.command,
                  }),
                ],
              }),
              e.config.args &&
                e.config.args.length > 0 &&
                ud.jsxs(Km.Row, {
                  children: [
                    ud.jsx(ud.Fragment, {
                      children: "Args:",
                    }),
                    ud.jsx(w, {
                      dimColor: true,
                      children: e.config.args.join(" "),
                    }),
                  ],
                }),
              ud.jsxs(Km.Row, {
                children: [
                  ud.jsx(ud.Fragment, {
                    children: "Config location:",
                  }),
                  ud.jsx(w, {
                    dimColor: true,
                    children: cF(P4(e.name)?.scope ?? "dynamic"),
                  }),
                ],
              }),
            ],
          }),
          e.client.type === "connected" &&
            ud.jsx(jnr, {
              serverToolsCount: t,
              serverPromptsCount: m,
              serverResourcesCount: a.resources[e.name]?.length || 0,
            }),
          e.client.type === "connected" &&
            t > 0 &&
            ud.jsxs(U, {
              children: [
                ud.jsx(w, {
                  bold: true,
                  children: "Tools: ",
                }),
                ud.jsxs(w, {
                  dimColor: true,
                  children: [t, " ", bn(t, "tool")],
                }),
              ],
            }),
          e.client.type === "connected" &&
            e.client.toolsListError &&
            ud.jsxs(U, {
              flexDirection: "column",
              children: [
                ud.jsx(w, {
                  bold: true,
                  children: "Issue: ",
                }),
                ud.jsx(w, {
                  dimColor: true,
                  children: e.client.toolsListError,
                }),
              ],
            }),
        ],
      }),
      g.length > 0 &&
        ud.jsx(U, {
          children: ud.jsx(Sr, {
            options: g,
            onChange: async (h) => {
              if (h === "tools") n();
              else if (h === "reconnectMcpServer") {
                d(true);
                try {
                  let y = await l(e.name),
                    { message: b } = Wnr(y, e.name);
                  o?.(b);
                } catch (y) {
                  o?.(sXt(y, e.name));
                } finally {
                  d(false);
                }
              } else if (h === "toggle-enabled") await p();
              else if (h === "back") r();
            },
            onCancel: r,
          }),
        }),
    ],
  });
}
var Vnr, ud;
