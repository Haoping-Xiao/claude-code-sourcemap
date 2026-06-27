// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LBo
// matched 2.1.88 source: src/components/mcp/MCPRemoteServerMenu.tsx
// class=modified  jaccard=0.2697  score=0.4138  fileCov=0.4364
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LBo] deps: hooks/useTerminalSize.ts, components/CustomSelect/select.tsx
((o2l = R(lt(), 1)), (DEt = R(se(), 1)));
function Gnr(e) {
  let t = "url" in e.config ? e.config.url : null,
    n = e.errorCode;
  if (
    n === "INVALID_CONFIG" ||
    n === "AUTH_HEADER_REJECTED" ||
    n === "FIRST_PARTY_AUTH_REJECTED" ||
    n === "ENDPOINT_NOT_FOUND"
  )
    return e.error ?? n;
  if (n) {
    let r = Number(n),
      o =
        n === "23"
          ? "request timed out"
          : Number.isInteger(r) && r >= 100 && r <= 599
            ? `HTTP ${n}`
            : n;
    return t ? `${o} at ${t}` : o;
  }
  return e.error ?? "";
}
function Wnr(e, t, n) {
  switch (e.client.type) {
    case "connected":
      if (e.client.toolsListError)
        return {
          message: `Reconnected to ${t}, but fetching tools failed: ${e.client.toolsListError}`,
          success: false,
        };
      return {
        message: `Reconnected to ${t}.`,
        success: true,
      };
    case "needs-auth":
      return {
        message: n?.hasHeadersHelper
          ? `${t} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.`
          : `${t} requires authentication. Use the 'Authenticate' option.`,
        success: false,
      };
    case "failed": {
      let r = Gnr(e.client);
      return {
        message: r ? `Failed to reconnect to ${t}: ${r}` : `Failed to reconnect to ${t}.`,
        success: false,
      };
    }
    default:
      return {
        message: `Unknown result when reconnecting to ${t}.`,
        success: false,
      };
  }
}
function sXt(e, t) {
  let n = e instanceof Error ? e.message : String(e);
  return `Error reconnecting to ${t}: ${n}`;
}
function MCPRemoteServerMenu({
  server: server,
  serverToolsCount: t,
  onViewTools: n,
  onCancel: r,
  onComplete: o,
  borderless: s = false,
}) {
  let [i] = na();
  ig();
  let { columns: a } = br(),
    [l, c] = BT.useState(false),
    [u, d] = BT.useState(null),
    mcp = Ht((ie) => ie.mcp),
    f = Ho(),
    [m, g] = BT.useState(null),
    [h, y] = BT.useState(false),
    b = BT.useRef(null),
    [_, S] = BT.useState(false),
    [A, v] = BT.useState(null),
    [C, x] = BT.useState(false),
    [I, k] = BT.useState(false),
    [D, P] = BT.useState(false),
    O = ks(),
    L = BT.useRef(void 0),
    M = BT.useRef(false),
    [N, B] = BT.useState(""),
    [$, q] = BT.useState(0),
    [W, V] = BT.useState(null);
  BT.useEffect(
    () => () => {
      if (((M.current = true), b.current?.abort(), L.current !== void 0)) L.current();
    },
    [],
  );
  let Y = server.isAuthenticated || (server.client.type === "connected" && t > 0),
    z = LEt(),
    K = BT.useCallback(async () => {
      (S(false), v(null), y(true));
      try {
        let ie = await z(server.name),
          le = ie.client.type === "connected";
        if (
          (G("tengu_claudeai_mcp_auth_completed", {
            success: le,
          }),
          le)
        )
          o(`Authentication successful. Connected to ${server.name}.`);
        else if (ie.client.type === "needs-auth")
          o(
            `Tried reconnecting, but ${server.name} is still unauthorized. Make sure the browser sign-in completed, then try again from /mcp.`,
          );
        else {
          let He = ie.client.type === "failed" ? Gnr(ie.client) : "";
          o(
            He
              ? `Tried reconnecting to ${server.name}, but the connection failed: ${He}`
              : `Tried reconnecting to ${server.name}, but the connection failed. Restart Claude Code to retry.`,
          );
        }
      } catch (ie) {
        (G("tengu_claudeai_mcp_auth_completed", {
          success: false,
        }),
          o(sXt(ie, server.name)));
      } finally {
        y(false);
      }
    }, [z, server.name, o]),
    Z = BT.useCallback(async () => {
      (await ST(server.name, {
        ...server.config,
        scope: server.scope,
      }),
        f((ie) => {
          let le = ie.mcp.clients.map((we) =>
              we.name === server.name
                ? {
                    ...we,
                    type: "needs-auth",
                  }
                : we,
            ),
            He = OUn(ie.mcp.tools, server.name),
            ye = $dt(ie.mcp.commands, server.name),
            ue = Odt(ie.mcp.resources, server.name);
          return {
            ...ie,
            mcp: {
              ...ie.mcp,
              clients: le,
              tools: He,
              commands: ye,
              resources: ue,
            },
          };
        }),
        G("tengu_claudeai_mcp_clear_auth_completed", {}),
        o(`Disconnected from ${server.name}.`),
        x(false),
        k(false));
    }, [server.name, server.config, server.scope, f, o]);
  ($r(
    "confirm:no",
    () => {
      (b.current?.abort(), (b.current = null), c(false), g(null));
    },
    {
      context: "Confirmation",
      isActive: l,
    },
  ),
    $r(
      "confirm:no",
      () => {
        (S(false), v(null));
      },
      {
        context: "Confirmation",
        isActive: _,
      },
    ),
    $r(
      "confirm:no",
      () => {
        (x(false), k(false));
      },
      {
        context: "Confirmation",
        isActive: C,
      },
    ));
  function J(ie) {
    if (ie.key === "return" && _) (ie.preventDefault(), K());
    if (ie.key === "return" && C)
      if ((ie.preventDefault(), I)) Z();
      else (k(true), ac(OSe()));
    if (ie.key === "c" && !ie.ctrl && !ie.meta && !D) {
      let le = m || A || (I ? OSe() : null);
      if (le)
        (ie.preventDefault(),
          AI(le).then((He) => {
            if (M.current) return;
            if (He) process.stdout.write(He);
            if ((P(true), L.current !== void 0)) L.current();
            L.current = O.setTimeout(() => P(false), 2000);
          }));
    }
  }
  let ne = Cx(String(server.name)),
    oe = $Un(mcp.commands, server.name).length,
    re = ZOe(),
    ee = BT.useCallback(async () => {
      let ie = (server.config.type === "claudeai-proxy" ? oDe(server.config) : null) ?? OSe();
      (v(ie), S(true), G("tengu_claudeai_mcp_auth_started", {}), await ac(ie));
    }, [server.config]),
    ce = BT.useCallback(() => {
      (x(true), G("tengu_claudeai_mcp_clear_auth_started", {}));
    }, []),
    ae = BT.useCallback(async () => {
      let ie = server.client.type !== "disabled";
      try {
        if ((await re(server.name), server.config.type === "claudeai-proxy"))
          G("tengu_claudeai_mcp_toggle", {
            new_state: We(ie ? "disabled" : "enabled"),
          });
        r();
      } catch (le) {
        o(`Failed to ${ie ? "disable" : "enable"} MCP server '${server.name}': ${be(le)}`);
      }
    }, [server.client.type, server.config.type, server.name, re, r, o]),
    de = BT.useCallback(async () => {
      let ie = r6(server.name, {
        ...server.config,
        scope: server.scope,
      });
      if (ie.kind === "anthropic-hosted") {
        d(ie.message);
        return;
      }
      if (ie.kind !== "oauth") return;
      (c(true), d(null));
      let le = new AbortController();
      b.current = le;
      try {
        if (server.isAuthenticated)
          await FSe(server.name, ie.config, {
            preserveStepUpState: true,
          });
        (await sJ(server.name, ie.config, g, le.signal, {
          onWaitingForCallback: (ye) => {
            V(() => ye);
          },
        }),
          G("tengu_mcp_auth_config_authenticate", {
            wasAuthenticated: server.isAuthenticated,
          }));
        let He = await z(server.name);
        if (He.client.type === "connected") {
          let ye = Y
            ? `Authentication successful. Reconnected to ${server.name}.`
            : `Authentication successful. Connected to ${server.name}.`;
          o(ye);
        } else if (He.client.type === "needs-auth")
          o(
            `Got new credentials, but ${server.name} rejected them on reconnect. Try re-authenticating, or restart Claude Code if it persists.`,
          );
        else {
          sn(server.name, "Reconnection failed after authentication");
          let ye = He.client.type === "failed" ? Gnr(He.client) : "";
          o(
            ye
              ? `Got new credentials, but reconnecting to ${server.name} failed: ${ye}`
              : `Got new credentials, but reconnecting to ${server.name} failed. Restart Claude Code to retry.`,
          );
        }
      } catch (He) {
        if (He instanceof Error && !(He instanceof N4)) d(He.message);
      } finally {
        (c(false), (b.current = null), V(null), B(""));
      }
    }, [server.isAuthenticated, server.config, server.name, server.scope, o, z, Y]),
    Ee = async () => {
      if (server.config.type === "claudeai-proxy") return;
      if (server.config)
        (await FSe(server.name, server.config),
          G("tengu_mcp_auth_config_clear", {}),
          await ST(server.name, {
            ...server.config,
            scope: server.scope,
          }),
          f((ie) => {
            let le = ie.mcp.clients.map((we) =>
                we.name === server.name
                  ? {
                      ...we,
                      type: "failed",
                    }
                  : we,
              ),
              He = OUn(ie.mcp.tools, server.name),
              ye = $dt(ie.mcp.commands, server.name),
              ue = Odt(ie.mcp.resources, server.name);
            return {
              ...ie,
              mcp: {
                ...ie.mcp,
                clients: le,
                tools: He,
                commands: ye,
                resources: ue,
              },
            };
          }),
          o(`Authentication cleared for ${server.name}.`));
    };
  if (l) {
    let ie =
      server.config.type !== "claudeai-proxy" && server.config.oauth?.xaa
        ? " Authenticating via your identity provider"
        : " A browser window will open for authentication";
    return ns.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: J,
      children: [
        ns.jsxs(w, {
          color: "claude",
          children: ["Authenticating with ", server.name, "\u2026"],
        }),
        ns.jsxs(U, {
          children: [
            ns.jsx(Vu, {}),
            ns.jsx(w, {
              children: ie,
            }),
          ],
        }),
        m &&
          ns.jsxs(U, {
            flexDirection: "column",
            children: [
              ns.jsxs(U, {
                children: [
                  ns.jsxs(w, {
                    dimColor: true,
                    children: [
                      "If your browser doesn't open automatically, copy this URL manually",
                      " ",
                    ],
                  }),
                  D
                    ? ns.jsx(w, {
                        color: "success",
                        children: "(Copied!)",
                      })
                    : ns.jsx(w, {
                        dimColor: true,
                        children: ns.jsx(ht, {
                          chord: "c",
                          action: "copy",
                          parens: true,
                        }),
                      }),
                ],
              }),
              ns.jsx(xs, {
                url: m,
              }),
            ],
          }),
        l &&
          m &&
          W &&
          ns.jsxs(U, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              ns.jsx(w, {
                dimColor: true,
                children:
                  "If the redirect page shows a connection error, paste the URL from your browser's address bar:",
              }),
              ns.jsxs(U, {
                children: [
                  ns.jsxs(w, {
                    dimColor: true,
                    children: ["URL ", ">", " "],
                  }),
                  ns.jsx(Ta, {
                    value: N,
                    onChange: B,
                    onSubmit: (le) => {
                      (W(le.trim()), B(""));
                    },
                    cursorOffset: $,
                    onChangeCursorOffset: q,
                    columns: a - 8,
                  }),
                ],
              }),
            ],
          }),
        ns.jsx(U, {
          marginLeft: 3,
          children: ns.jsxs(w, {
            dimColor: true,
            children: [
              "Return here after authenticating in your browser. Press",
              " ",
              ns.jsx(ht, {
                chord: "escape",
                action: "go back",
              }),
              ".",
            ],
          }),
        }),
      ],
    });
  }
  if (_)
    return ns.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: J,
      children: [
        ns.jsxs(w, {
          color: "claude",
          children: ["Authenticating with ", server.name, "\u2026"],
        }),
        ns.jsxs(U, {
          children: [
            ns.jsx(Vu, {}),
            ns.jsx(w, {
              children: " A browser window will open for authentication",
            }),
          ],
        }),
        A &&
          ns.jsxs(U, {
            flexDirection: "column",
            children: [
              ns.jsxs(U, {
                children: [
                  ns.jsxs(w, {
                    dimColor: true,
                    children: [
                      "If your browser doesn't open automatically, copy this URL manually",
                      " ",
                    ],
                  }),
                  D
                    ? ns.jsx(w, {
                        color: "success",
                        children: "(Copied!)",
                      })
                    : ns.jsx(w, {
                        dimColor: true,
                        children: ns.jsx(ht, {
                          chord: "c",
                          action: "copy",
                          parens: true,
                        }),
                      }),
                ],
              }),
              ns.jsx(xs, {
                url: A,
              }),
            ],
          }),
        ns.jsxs(U, {
          marginLeft: 3,
          flexDirection: "column",
          children: [
            ns.jsxs(w, {
              color: "permission",
              children: [
                "Press ",
                ns.jsx(w, {
                  bold: true,
                  children: "Enter",
                }),
                " after authenticating in your browser.",
              ],
            }),
            ns.jsx(w, {
              dimColor: true,
              italic: true,
              children: ns.jsx(mr, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "back",
              }),
            }),
          ],
        }),
      ],
    });
  if (C)
    return ns.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: J,
      children: [
        ns.jsxs(w, {
          color: "claude",
          children: ["Clear authentication for ", server.name],
        }),
        I
          ? ns.jsxs(ns.Fragment, {
              children: [
                ns.jsx(w, {
                  children: 'Find the MCP server in the browser and click "Disconnect".',
                }),
                ns.jsxs(U, {
                  flexDirection: "column",
                  children: [
                    ns.jsxs(U, {
                      children: [
                        ns.jsxs(w, {
                          dimColor: true,
                          children: [
                            "If your browser didn't open automatically, copy this URL manually",
                            " ",
                          ],
                        }),
                        D
                          ? ns.jsx(w, {
                              color: "success",
                              children: "(Copied!)",
                            })
                          : ns.jsx(w, {
                              dimColor: true,
                              children: ns.jsx(ht, {
                                chord: "c",
                                action: "copy",
                                parens: true,
                              }),
                            }),
                      ],
                    }),
                    ns.jsx(xs, {
                      url: OSe(),
                    }),
                  ],
                }),
                ns.jsxs(U, {
                  marginLeft: 3,
                  flexDirection: "column",
                  children: [
                    ns.jsxs(w, {
                      color: "permission",
                      children: [
                        "Press ",
                        ns.jsx(w, {
                          bold: true,
                          children: "Enter",
                        }),
                        " when done.",
                      ],
                    }),
                    ns.jsx(w, {
                      dimColor: true,
                      italic: true,
                      children: ns.jsx(mr, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "back",
                      }),
                    }),
                  ],
                }),
              ],
            })
          : ns.jsxs(ns.Fragment, {
              children: [
                ns.jsx(w, {
                  children:
                    'This will open claude.ai in the browser. Find the MCP server in the list and click "Disconnect".',
                }),
                ns.jsxs(U, {
                  marginLeft: 3,
                  flexDirection: "column",
                  children: [
                    ns.jsxs(w, {
                      color: "permission",
                      children: [
                        "Press",
                        " ",
                        ns.jsx(ht, {
                          chord: "enter",
                          action: "open the browser",
                          bold: true,
                        }),
                        ".",
                      ],
                    }),
                    ns.jsx(w, {
                      dimColor: true,
                      italic: true,
                      children: ns.jsx(mr, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "back",
                      }),
                    }),
                  ],
                }),
              ],
            }),
      ],
    });
  if (h)
    return ns.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        ns.jsxs(w, {
          color: "text",
          children: [
            "Connecting to ",
            ns.jsx(w, {
              bold: true,
              children: server.name,
            }),
            "\u2026",
          ],
        }),
        ns.jsxs(U, {
          children: [
            ns.jsx(Vu, {}),
            ns.jsx(w, {
              children: " Establishing connection to MCP server",
            }),
          ],
        }),
        ns.jsx(w, {
          dimColor: true,
          children: "This may take a few moments.",
        }),
      ],
    });
  let menuOptions = [];
  if (server.client.type === "disabled")
    menuOptions.push({
      label: "Enable",
      value: "toggle-enabled",
    });
  if (server.client.type === "connected" && t > 0)
    menuOptions.push({
      label: "View tools",
      value: "tools",
    });
  let pe = (server.config.type === "sse" || server.config.type === "http") && e3e(server.config),
    ge =
      (server.config.type === "sse" || server.config.type === "http") &&
      _In(server.config, !!Ws()?.accessToken || KSe());
  if (server.config.type === "claudeai-proxy") {
    if (server.client.type === "connected")
      menuOptions.push({
        label: "Clear authentication",
        value: "claudeai-clear-auth",
      });
    else if (server.client.type !== "disabled")
      menuOptions.push({
        label: "Authenticate",
        value: "claudeai-auth",
      });
  } else {
    if (Y) {
      if (!ge)
        menuOptions.push({
          label: "Re-authenticate",
          value: "reauth",
        });
      menuOptions.push({
        label: "Clear authentication",
        value: "clear-auth",
      });
    }
    if (!Y && !ge)
      menuOptions.push({
        label: "Authenticate",
        value: "auth",
      });
  }
  let he = server.config.type !== "claudeai-proxy" && !!server.config.headersHelper;
  if (server.client.type !== "disabled") {
    if (server.client.type !== "needs-auth" || he || pe)
      menuOptions.push({
        label: "Reconnect",
        value: "reconnectMcpServer",
      });
    menuOptions.push({
      label: "Disable",
      value: "toggle-enabled",
    });
  }
  if (menuOptions.length === 0)
    menuOptions.push({
      label: "Back",
      value: "back",
    });
  return ns.jsx(U, {
    flexDirection: "column",
    paddingX: s ? 1 : 0,
    children: ns.jsxs(zn, {
      title: `${ne} MCP Server`,
      onCancel: r,
      hideBorder: s,
      inputGuide: ns.jsxs(Tn, {
        children: [
          ns.jsx(ht, {
            chord: ["up", "down"],
            action: "navigate",
          }),
          ns.jsx(ht, {
            chord: "enter",
            action: "select",
          }),
          ns.jsx(mr, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "back",
          }),
        ],
      }),
      children: [
        ns.jsxs(U, {
          flexDirection: "column",
          gap: 0,
          children: [
            ns.jsxs(Km, {
              box: "plain",
              columns: [
                {
                  bold: true,
                },
                {},
              ],
              children: [
                ns.jsxs(Km.Row, {
                  children: [
                    ns.jsx(ns.Fragment, {
                      children: "Status:",
                    }),
                    server.client.type === "disabled"
                      ? ns.jsxs(w, {
                          children: [Io("inactive", i)(nt.radioOff), " disabled"],
                        })
                      : server.client.type === "connected"
                        ? server.client.toolsListError
                          ? ns.jsxs(w, {
                              children: [
                                ns.jsx(Hs, {
                                  status: "warning",
                                  withSpace: true,
                                }),
                                "connected \xB7 tools fetch failed",
                              ],
                            })
                          : server.client.capabilities?.tools && t === 0
                            ? ns.jsxs(w, {
                                children: [
                                  ns.jsx(Hs, {
                                    status: "warning",
                                    withSpace: true,
                                  }),
                                  "connected \xB7 no tools",
                                ],
                              })
                            : ns.jsxs(w, {
                                children: [
                                  ns.jsx(Hs, {
                                    status: "success",
                                    withSpace: true,
                                  }),
                                  "connected",
                                ],
                              })
                        : server.client.type === "pending"
                          ? ns.jsxs(w, {
                              children: [
                                ns.jsx(w, {
                                  dimColor: true,
                                  children: nt.radioOff,
                                }),
                                " connecting\u2026",
                              ],
                            })
                          : server.client.type === "needs-auth"
                            ? ns.jsxs(w, {
                                children: [
                                  Io("warning", i)(nt.triangleUpOutline),
                                  " needs authentication",
                                ],
                              })
                            : ns.jsxs(w, {
                                children: [
                                  ns.jsx(Hs, {
                                    status: "error",
                                    withSpace: true,
                                  }),
                                  server.client.errorCode === "INVALID_CONFIG"
                                    ? "config issue"
                                    : "failed",
                                ],
                              }),
                  ],
                }),
                (server.client.type === "failed" || server.client.type === "needs-auth") &&
                  server.client.error &&
                  ns.jsxs(Km.Row, {
                    children: [
                      ns.jsx(ns.Fragment, {
                        children: "Issue:",
                      }),
                      ns.jsx(w, {
                        dimColor: true,
                        children: server.client.error,
                      }),
                    ],
                  }),
                server.transport !== "claudeai-proxy" &&
                  ns.jsxs(Km.Row, {
                    children: [
                      ns.jsx(ns.Fragment, {
                        children: "Auth:",
                      }),
                      Y
                        ? ns.jsxs(w, {
                            children: [
                              ns.jsx(Hs, {
                                status: "success",
                                withSpace: true,
                              }),
                              "authenticated",
                            ],
                          })
                        : ns.jsxs(w, {
                            children: [
                              ns.jsx(Hs, {
                                status: "error",
                                withSpace: true,
                              }),
                              "not authenticated",
                            ],
                          }),
                    ],
                  }),
                ns.jsxs(Km.Row, {
                  children: [
                    ns.jsx(ns.Fragment, {
                      children: "URL:",
                    }),
                    ns.jsx(w, {
                      dimColor: true,
                      children: server.config.url,
                    }),
                  ],
                }),
                ns.jsxs(Km.Row, {
                  children: [
                    ns.jsx(ns.Fragment, {
                      children: "Config location:",
                    }),
                    ns.jsx(w, {
                      dimColor: true,
                      children: cF(server.scope),
                    }),
                  ],
                }),
              ],
            }),
            server.client.type === "connected" &&
              ns.jsx(jnr, {
                serverToolsCount: t,
                serverPromptsCount: oe,
                serverResourcesCount: mcp.resources[server.name]?.length || 0,
              }),
            server.client.type === "connected" &&
              t > 0 &&
              ns.jsxs(U, {
                children: [
                  ns.jsx(w, {
                    bold: true,
                    children: "Tools: ",
                  }),
                  ns.jsxs(w, {
                    dimColor: true,
                    children: [t, " ", bn(t, "tool")],
                  }),
                ],
              }),
            server.client.type === "connected" &&
              server.client.toolsListError &&
              ns.jsxs(U, {
                flexDirection: "column",
                children: [
                  ns.jsx(w, {
                    bold: true,
                    children: "Issue: ",
                  }),
                  ns.jsx(w, {
                    dimColor: true,
                    children: server.client.toolsListError,
                  }),
                ],
              }),
          ],
        }),
        u &&
          ns.jsx(U, {
            children: ns.jsx(Va, {
              error: u,
            }),
          }),
        menuOptions.length > 0 &&
          ns.jsx(U, {
            children: ns.jsx(Sr, {
              options: menuOptions,
              onChange: async (ie) => {
                switch (ie) {
                  case "tools":
                    n();
                    break;
                  case "auth":
                  case "reauth":
                    await de();
                    break;
                  case "clear-auth":
                    await Ee();
                    break;
                  case "claudeai-auth":
                    await ee();
                    break;
                  case "claudeai-clear-auth":
                    ce();
                    break;
                  case "reconnectMcpServer":
                    y(true);
                    try {
                      let le = await z(server.name);
                      if (server.config.type === "claudeai-proxy")
                        G("tengu_claudeai_mcp_reconnect", {
                          success: le.client.type === "connected",
                        });
                      let { message: He } = Wnr(le, server.name, {
                        hasHeadersHelper: he,
                      });
                      o(He);
                    } catch (le) {
                      if (server.config.type === "claudeai-proxy")
                        G("tengu_claudeai_mcp_reconnect", {
                          success: false,
                        });
                      o(sXt(le, server.name));
                    } finally {
                      y(false);
                    }
                    break;
                  case "toggle-enabled":
                    await ae();
                    break;
                  case "back":
                    r();
                    break;
                }
              },
              onCancel: r,
            }),
          }),
      ],
    }),
  });
}
var BT, ns;
