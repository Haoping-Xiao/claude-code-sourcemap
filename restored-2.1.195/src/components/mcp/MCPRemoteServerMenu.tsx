// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LBo
// matched 2.1.88 source: src/components/mcp/MCPRemoteServerMenu.tsx
// class=modified  jaccard=0.2697  score=0.4138  fileCov=0.4364
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LBo] deps: Ye, Bs
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
  server: e,
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
    p = Ht((ie) => ie.mcp),
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
  let Y = e.isAuthenticated || (e.client.type === "connected" && t > 0),
    z = LEt(),
    K = BT.useCallback(async () => {
      (S(false), v(null), y(true));
      try {
        let ie = await z(e.name),
          le = ie.client.type === "connected";
        if (
          (G("tengu_claudeai_mcp_auth_completed", {
            success: le,
          }),
          le)
        )
          o(`Authentication successful. Connected to ${e.name}.`);
        else if (ie.client.type === "needs-auth")
          o(
            `Tried reconnecting, but ${e.name} is still unauthorized. Make sure the browser sign-in completed, then try again from /mcp.`,
          );
        else {
          let He = ie.client.type === "failed" ? Gnr(ie.client) : "";
          o(
            He
              ? `Tried reconnecting to ${e.name}, but the connection failed: ${He}`
              : `Tried reconnecting to ${e.name}, but the connection failed. Restart Claude Code to retry.`,
          );
        }
      } catch (ie) {
        (G("tengu_claudeai_mcp_auth_completed", {
          success: false,
        }),
          o(sXt(ie, e.name)));
      } finally {
        y(false);
      }
    }, [z, e.name, o]),
    Z = BT.useCallback(async () => {
      (await ST(e.name, {
        ...e.config,
        scope: e.scope,
      }),
        f((ie) => {
          let le = ie.mcp.clients.map((we) =>
              we.name === e.name
                ? {
                    ...we,
                    type: "needs-auth",
                  }
                : we,
            ),
            He = OUn(ie.mcp.tools, e.name),
            ye = $dt(ie.mcp.commands, e.name),
            ue = Odt(ie.mcp.resources, e.name);
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
        o(`Disconnected from ${e.name}.`),
        x(false),
        k(false));
    }, [e.name, e.config, e.scope, f, o]);
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
  let ne = Cx(String(e.name)),
    oe = $Un(p.commands, e.name).length,
    re = ZOe(),
    ee = BT.useCallback(async () => {
      let ie = (e.config.type === "claudeai-proxy" ? oDe(e.config) : null) ?? OSe();
      (v(ie), S(true), G("tengu_claudeai_mcp_auth_started", {}), await ac(ie));
    }, [e.config]),
    ce = BT.useCallback(() => {
      (x(true), G("tengu_claudeai_mcp_clear_auth_started", {}));
    }, []),
    ae = BT.useCallback(async () => {
      let ie = e.client.type !== "disabled";
      try {
        if ((await re(e.name), e.config.type === "claudeai-proxy"))
          G("tengu_claudeai_mcp_toggle", {
            new_state: We(ie ? "disabled" : "enabled"),
          });
        r();
      } catch (le) {
        o(`Failed to ${ie ? "disable" : "enable"} MCP server '${e.name}': ${be(le)}`);
      }
    }, [e.client.type, e.config.type, e.name, re, r, o]),
    de = BT.useCallback(async () => {
      let ie = r6(e.name, {
        ...e.config,
        scope: e.scope,
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
        if (e.isAuthenticated)
          await FSe(e.name, ie.config, {
            preserveStepUpState: true,
          });
        (await sJ(e.name, ie.config, g, le.signal, {
          onWaitingForCallback: (ye) => {
            V(() => ye);
          },
        }),
          G("tengu_mcp_auth_config_authenticate", {
            wasAuthenticated: e.isAuthenticated,
          }));
        let He = await z(e.name);
        if (He.client.type === "connected") {
          let ye = Y
            ? `Authentication successful. Reconnected to ${e.name}.`
            : `Authentication successful. Connected to ${e.name}.`;
          o(ye);
        } else if (He.client.type === "needs-auth")
          o(
            `Got new credentials, but ${e.name} rejected them on reconnect. Try re-authenticating, or restart Claude Code if it persists.`,
          );
        else {
          sn(e.name, "Reconnection failed after authentication");
          let ye = He.client.type === "failed" ? Gnr(He.client) : "";
          o(
            ye
              ? `Got new credentials, but reconnecting to ${e.name} failed: ${ye}`
              : `Got new credentials, but reconnecting to ${e.name} failed. Restart Claude Code to retry.`,
          );
        }
      } catch (He) {
        if (He instanceof Error && !(He instanceof N4)) d(He.message);
      } finally {
        (c(false), (b.current = null), V(null), B(""));
      }
    }, [e.isAuthenticated, e.config, e.name, e.scope, o, z, Y]),
    Ee = async () => {
      if (e.config.type === "claudeai-proxy") return;
      if (e.config)
        (await FSe(e.name, e.config),
          G("tengu_mcp_auth_config_clear", {}),
          await ST(e.name, {
            ...e.config,
            scope: e.scope,
          }),
          f((ie) => {
            let le = ie.mcp.clients.map((we) =>
                we.name === e.name
                  ? {
                      ...we,
                      type: "failed",
                    }
                  : we,
              ),
              He = OUn(ie.mcp.tools, e.name),
              ye = $dt(ie.mcp.commands, e.name),
              ue = Odt(ie.mcp.resources, e.name);
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
          o(`Authentication cleared for ${e.name}.`));
    };
  if (l) {
    let ie =
      e.config.type !== "claudeai-proxy" && e.config.oauth?.xaa
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
          children: ["Authenticating with ", e.name, "\u2026"],
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
          children: ["Authenticating with ", e.name, "\u2026"],
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
          children: ["Clear authentication for ", e.name],
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
              children: e.name,
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
  let me = [];
  if (e.client.type === "disabled")
    me.push({
      label: "Enable",
      value: "toggle-enabled",
    });
  if (e.client.type === "connected" && t > 0)
    me.push({
      label: "View tools",
      value: "tools",
    });
  let pe = (e.config.type === "sse" || e.config.type === "http") && e3e(e.config),
    ge =
      (e.config.type === "sse" || e.config.type === "http") &&
      _In(e.config, !!Ws()?.accessToken || KSe());
  if (e.config.type === "claudeai-proxy") {
    if (e.client.type === "connected")
      me.push({
        label: "Clear authentication",
        value: "claudeai-clear-auth",
      });
    else if (e.client.type !== "disabled")
      me.push({
        label: "Authenticate",
        value: "claudeai-auth",
      });
  } else {
    if (Y) {
      if (!ge)
        me.push({
          label: "Re-authenticate",
          value: "reauth",
        });
      me.push({
        label: "Clear authentication",
        value: "clear-auth",
      });
    }
    if (!Y && !ge)
      me.push({
        label: "Authenticate",
        value: "auth",
      });
  }
  let he = e.config.type !== "claudeai-proxy" && !!e.config.headersHelper;
  if (e.client.type !== "disabled") {
    if (e.client.type !== "needs-auth" || he || pe)
      me.push({
        label: "Reconnect",
        value: "reconnectMcpServer",
      });
    me.push({
      label: "Disable",
      value: "toggle-enabled",
    });
  }
  if (me.length === 0)
    me.push({
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
                    e.client.type === "disabled"
                      ? ns.jsxs(w, {
                          children: [Io("inactive", i)(nt.radioOff), " disabled"],
                        })
                      : e.client.type === "connected"
                        ? e.client.toolsListError
                          ? ns.jsxs(w, {
                              children: [
                                ns.jsx(Hs, {
                                  status: "warning",
                                  withSpace: true,
                                }),
                                "connected \xB7 tools fetch failed",
                              ],
                            })
                          : e.client.capabilities?.tools && t === 0
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
                        : e.client.type === "pending"
                          ? ns.jsxs(w, {
                              children: [
                                ns.jsx(w, {
                                  dimColor: true,
                                  children: nt.radioOff,
                                }),
                                " connecting\u2026",
                              ],
                            })
                          : e.client.type === "needs-auth"
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
                                  e.client.errorCode === "INVALID_CONFIG"
                                    ? "config issue"
                                    : "failed",
                                ],
                              }),
                  ],
                }),
                (e.client.type === "failed" || e.client.type === "needs-auth") &&
                  e.client.error &&
                  ns.jsxs(Km.Row, {
                    children: [
                      ns.jsx(ns.Fragment, {
                        children: "Issue:",
                      }),
                      ns.jsx(w, {
                        dimColor: true,
                        children: e.client.error,
                      }),
                    ],
                  }),
                e.transport !== "claudeai-proxy" &&
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
                      children: e.config.url,
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
                      children: cF(e.scope),
                    }),
                  ],
                }),
              ],
            }),
            e.client.type === "connected" &&
              ns.jsx(jnr, {
                serverToolsCount: t,
                serverPromptsCount: oe,
                serverResourcesCount: p.resources[e.name]?.length || 0,
              }),
            e.client.type === "connected" &&
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
            e.client.type === "connected" &&
              e.client.toolsListError &&
              ns.jsxs(U, {
                flexDirection: "column",
                children: [
                  ns.jsx(w, {
                    bold: true,
                    children: "Issue: ",
                  }),
                  ns.jsx(w, {
                    dimColor: true,
                    children: e.client.toolsListError,
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
        me.length > 0 &&
          ns.jsx(U, {
            children: ns.jsx(Sr, {
              options: me,
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
                      let le = await z(e.name);
                      if (e.config.type === "claudeai-proxy")
                        G("tengu_claudeai_mcp_reconnect", {
                          success: le.client.type === "connected",
                        });
                      let { message: He } = Wnr(le, e.name, {
                        hasHeadersHelper: he,
                      });
                      o(He);
                    } catch (le) {
                      if (e.config.type === "claudeai-proxy")
                        G("tengu_claudeai_mcp_reconnect", {
                          success: false,
                        });
                      o(sXt(le, e.name));
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
