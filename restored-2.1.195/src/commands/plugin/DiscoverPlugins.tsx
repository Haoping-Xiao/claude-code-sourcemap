// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N2l
// matched 2.1.88 source: src/commands/plugin/DiscoverPlugins.tsx
// class=modified  jaccard=0.2936  score=0.4925  fileCov=0.421
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module N2l] deps: si, Cc, vKe, Bs, B_, f_, CH, gm, Pfe, dse, _i, Ye, ps, vy, je, At, es, Ao, vq, _k, gHe, lE, e1e, oWe, pXt, vfe, WI, sr, g0, irr, VBo, zBo, frr
(($2l = R(lt(), 1)), (J_ = R(rt(), 1)), (hi = R(se(), 1)));
function U2l({
  error: e,
  setError: t,
  result: n,
  setResult: r,
  setViewState: o,
  onInstallComplete: s,
  onSearchModeChange: i,
  getSessionContext: a,
  grantedSuggestions: l,
  targetPlugin: c,
}) {
  let [u, d] = bA.useState("plugin-list"),
    [p, f] = bA.useState(null),
    [m, g] = bA.useState([]),
    [h, y] = bA.useState(!0),
    [b, _] = bA.useState(null),
    [S, A] = bA.useState(new Map()),
    [v, C] = bA.useState(!1),
    x = () => C(!1),
    {
      query: I,
      setQuery: k,
      cursorOffset: D,
      setCursorOffset: P,
      handleKeyDown: O,
      handlePaste: L,
    } = Uk({
      isActive: u === "plugin-list" && v && !h,
      onExit: x,
      onExitUp: x,
    }),
    M = v && I !== "";
  (bA.useEffect(() => {
    i(M);
  }, [M, i]),
    bA.useEffect(() => () => i(!1), [i]));
  let N = Pg(),
    { columns: B } = br(),
    $ = bA.useMemo(() => {
      if (!I) return m;
      let ue = I.toLowerCase();
      return m.filter(
        (we) =>
          we.entry.name.toLowerCase().includes(ue) ||
          we.entry.displayName?.toLowerCase().includes(ue) ||
          we.entry.description?.toLowerCase().includes(ue) ||
          we.marketplaceName.toLowerCase().includes(ue),
      );
    }, [m, I]),
    [q, W] = bA.useState(0),
    [V, Y] = bA.useState(new Set()),
    [z, K] = bA.useState(new Set()),
    Z = FEt({
      totalItems: $.length,
      selectedIndex: q,
    });
  bA.useEffect(() => {
    W(0);
  }, [I]);
  let [J, ne] = bA.useState(0),
    [oe, re] = bA.useState(!1),
    [ee, ce] = bA.useState(null),
    [ae, de] = bA.useState(null),
    [Ee, me] = bA.useState(null);
  bA.useEffect(() => {
    let ue = !1;
    async function we() {
      try {
        let Ce = await om(),
          { marketplaces: Ie, failures: Ve } = await rse(Ce);
        if (ue) return;
        let Ze = [];
        for (let { name: Et, data: ct } of Ie)
          if (ct)
            for (let Je of ct.plugins) {
              let gt = MQ(Je.name, Et);
              Ze.push({
                entry: Je,
                marketplaceName: Et,
                pluginId: gt,
                isInstalled: b5(gt),
              });
            }
        let Be = Ze.filter((Et) => !Et.isInstalled && !GI(Et.pluginId));
        try {
          let Et = await OEt();
          if (ue) return;
          if ((_(Et), Et))
            Be.sort((ct, Je) => {
              let gt = Et.get(ct.pluginId) ?? 0,
                st = Et.get(Je.pluginId) ?? 0;
              if (gt !== st) return st - gt;
              return ct.entry.name.localeCompare(Je.entry.name);
            });
          else Be.sort((ct, Je) => ct.entry.name.localeCompare(Je.entry.name));
        } catch (Et) {
          (T(`Failed to fetch install counts: ${be(Et)}`),
            Be.sort((ct, Je) => ct.entry.name.localeCompare(Je.entry.name)));
        }
        let Me = new Map();
        try {
          let Et = a?.(),
            ct = new Set(kGt());
          for (let Je of Be) {
            if (!ct.has(Je.marketplaceName)) continue;
            if (Je.marketplaceName !== xI) {
              let xt = Ce[Je.marketplaceName]?.source;
              if (!xt || !RGt(Je.marketplaceName, xt)) continue;
            }
            let gt = Znr(Je.entry.name, Je.entry.relevance);
            if (!gt) continue;
            if (RXa(Je.pluginId) > 0 && !l?.has(Je.pluginId)) continue;
            let st = await err(gt, Et);
            if (st) Me.set(Je.pluginId, st);
          }
        } catch (Et) {
          T(`Failed to compute plugin suggestions: ${be(Et)}`);
        }
        if (ue) return;
        A(Me);
        let Ue =
          Me.size > 0
            ? [
                ...Be.filter((Et) => Me.has(Et.pluginId)),
                ...Be.filter((Et) => !Me.has(Et.pluginId)),
              ]
            : Be;
        g(Ue);
        let tt = Object.keys(Ce).length;
        if (Be.length === 0) {
          let Et = await uRl({
            configuredMarketplaceCount: tt,
            failedMarketplaceCount: Ve.length,
          });
          if (ue) return;
          if (
            Et === "all-plugins-installed" &&
            Ze.length > 0 &&
            Ze.every((ct) => ct.isInstalled && !Xze(ct.pluginId)) &&
            !Ze.some((ct) => GI(ct.pluginId))
          )
            Et = "all-plugins-project-installed";
          me(Et);
        }
        let bt = On(Ie, (Et) => Et.data !== null),
          Ke = $St(Ve, bt);
        if (Ke)
          if (Ke.type === "warning")
            de(Ke.message + (Be.length > 0 ? ". Showing available plugins." : "."));
          else throw Error(Ke.message);
        if (c) {
          let Et = Ze.find((ct) => ct.entry.name === c);
          if (Et) {
            if (Xze(Et.pluginId)) {
              let ct = await $Et(Et.pluginId),
                Je = await orr(Et.pluginId, ct);
              if (ue) return;
              if (Je) d(Je);
              else if (ct === null)
                t(
                  `Plugin '${Et.pluginId}' is already installed. Use '/plugin' to manage existing plugins.`,
                );
              else if ((r(`Plugin "${Et.pluginId}" is already installed${ct.suffix}`), ct.changed))
                await s?.();
            } else (f(Et), d("plugin-details"));
          } else t(`Plugin "${c}" not found in any marketplace`);
        }
      } catch (Ce) {
        if (ue) return;
        t(Ce instanceof Error ? Ce.message : "Failed to load plugins");
      } finally {
        if (!ue) y(!1);
      }
    }
    return (
      we(),
      () => {
        ue = !0;
      }
    );
  }, [t, r, s, a, l, c]);
  let pe = bA.useRef(!1);
  bA.useEffect(() => {
    if (pe.current || h || e !== null || n !== null || u !== "plugin-list" || S.size === 0) return;
    pe.current = !0;
    let ue = [...S.keys()];
    for (let we of ue) l?.add(we);
    LXa(ue);
  }, [h, e, n, u, S, l]);
  let ge = async () => {
      if (V.size === 0) return;
      let ue = m.filter((Be) => V.has(Be.pluginId));
      K(new Set(ue.map((Be) => Be.pluginId)));
      let we = 0,
        Ce = 0,
        Ie = [],
        Ve = [];
      for (let Be of ue) {
        let Me = await bOe({
          pluginId: Be.pluginId,
          entry: Be.entry,
          marketplaceName: Be.marketplaceName,
          scope: "user",
        });
        if (Me.success) {
          if ((we++, Me.installedDisabled)) Ve.push(Be.entry.name);
        } else
          (Ce++,
            Ie.push({
              name: Be.entry.name,
              reason: Me.error,
            }));
      }
      (K(new Set()), Y(new Set()), Ah());
      let Ze =
        Ve.length > 0 ? ` Disabled by default \u2014 enable in /plugin: ${Ve.join(", ")}.` : "";
      if (Ce === 0) {
        let Be = `\u2713 Installed ${we} ${bn(we, "plugin")}. Run /reload-plugins to activate.${Ze}`;
        r(Be);
      } else if (we === 0) t(`Failed to install: ${MSt(Ie, !0)}`);
      else {
        let Be = `\u2713 Installed ${we} of ${we + Ce} plugins. Failed: ${MSt(Ie, !1)}. Run /reload-plugins to activate successfully installed plugins.${Ze}`;
        r(Be);
      }
      if (we > 0) {
        if (s) await s();
      }
      o({
        type: "menu",
      });
    },
    he = async (ue, we = "user") => {
      (re(!0), ce(null));
      let Ce = await bOe({
        pluginId: ue.pluginId,
        entry: ue.entry,
        marketplaceName: ue.marketplaceName,
        scope: we,
      });
      if (Ce.success) {
        let Ie = await mXt(ue.pluginId);
        if (Ie) {
          (re(!1),
            d({
              type: "plugin-options",
              plugin: Ie,
              pluginId: ue.pluginId,
              depNote: Ce.depNote,
            }));
          return;
        }
        if ((r(Ce.message), s)) await s();
        o({
          type: "menu",
        });
      } else (re(!1), ce(Ce.error));
    };
  (bA.useEffect(() => {
    if (e) r(e);
  }, [e, r]),
    $r(
      "confirm:no",
      () => {
        (d("plugin-list"), f(null));
      },
      {
        context: "Settings",
        isActive: u === "plugin-details",
      },
    ),
    $r(
      "confirm:no",
      () => {
        o({
          type: "menu",
        });
      },
      {
        context: "Settings",
        isActive: u === "plugin-list" && !v,
      },
    ));
  function ie(ue) {
    if (v) {
      O(ue);
      return;
    }
    if (ue.ctrl || ue.meta || h) return;
    if (ue.key === "/") (ue.preventDefault(), C(!0), k(""));
    else if (ue.key.length === 1 && ue.key !== " ") (ue.preventDefault(), C(!0), k(ue.key));
  }
  function le(ue) {
    if (v) {
      L(ue);
      return;
    }
    if (h) return;
    let we = (ue.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (!we) return;
    (ue.preventDefault(), C(!0), k(we));
  }
  (No(
    {
      "select:previous": () => {
        if (q === 0) {
          if (!h && m.length > 0) C(!0);
        } else Z.handleSelectionChange(q - 1, W);
      },
      "select:next": () => {
        if (q < $.length - 1) Z.handleSelectionChange(q + 1, W);
      },
      "select:accept": () => {
        if (q < $.length) {
          let ue = $[q];
          if (ue)
            if (ue.isInstalled)
              o({
                type: "manage-plugins",
                targetPlugin: ue.entry.name,
                targetMarketplace: ue.marketplaceName,
              });
            else (f(ue), d("plugin-details"), ne(0), ce(null));
        }
      },
    },
    {
      context: "Select",
      isActive: u === "plugin-list" && !v,
    },
  ),
    No(
      {
        "plugin:toggle": () => {
          if (q < $.length) {
            let ue = $[q];
            if (ue && !ue.isInstalled) {
              let we = new Set(V);
              if (we.has(ue.pluginId)) we.delete(ue.pluginId);
              else we.add(ue.pluginId);
              Y(we);
            }
          }
        },
        "plugin:install": () => {
          if (V.size === 0) return !1;
          if (z.size > 0) return;
          ge();
        },
      },
      {
        context: "Plugin",
        isActive: u === "plugin-list" && !v,
      },
    ));
  let He = bA.useMemo(() => {
    if (!p) return [];
    let ue = p.entry.homepage,
      we = n1e(p);
    return UEt(ue, we);
  }, [p]);
  if (
    (No(
      {
        "select:previous": () => {
          if (J > 0) ne(J - 1);
        },
        "select:next": () => {
          if (J < He.length - 1) ne(J + 1);
        },
        "select:accept": () => {
          if (!p) return;
          let ue = He[J]?.action,
            we = p.entry.homepage,
            Ce = n1e(p);
          if (ue === "install-user") he(p, "user");
          else if (ue === "install-project") he(p, "project");
          else if (ue === "install-local") he(p, "local");
          else if (ue === "homepage" && we) ac(we);
          else if (ue === "github" && Ce) ac(`https://github.com/${Ce}`);
          else if (ue === "back") (d("plugin-list"), f(null));
        },
      },
      {
        context: "Select",
        isActive: u === "plugin-details" && !!p && !oe,
      },
    ),
    typeof u === "object" && u.type === "plugin-options")
  )
    return pi.jsx(srr, {
      viewState: u,
      onFinish: (ue, we) => {
        if ((r(ue), we && s)) s();
        o({
          type: "menu",
        });
      },
    });
  if (h)
    return pi.jsx(Vc, {
      message: "Loading\u2026",
    });
  if (e)
    return pi.jsx(Va, {
      error: e,
    });
  if (u === "plugin-details" && p) {
    let ue = p.entry.homepage,
      we = n1e(p),
      Ce = UEt(ue, we);
    return pi.jsxs(U, {
      flexDirection: "column",
      children: [
        pi.jsx(U, {
          marginBottom: 1,
          children: pi.jsx(w, {
            bold: !0,
            children: "Plugin details",
          }),
        }),
        pi.jsxs(U, {
          flexDirection: "column",
          marginBottom: 1,
          children: [
            pi.jsx(w, {
              bold: !0,
              children: fS(p.entry),
            }),
            pi.jsxs(w, {
              dimColor: !0,
              children: ["from ", p.marketplaceName],
            }),
            p.entry.version &&
              pi.jsxs(w, {
                dimColor: !0,
                children: ["Version: ", p.entry.version],
              }),
            pi.jsx(drr, {
              pluginId: p.pluginId,
            }),
            p.entry.description &&
              pi.jsx(U, {
                marginTop: 1,
                children: pi.jsx(w, {
                  children: p.entry.description,
                }),
              }),
            p.entry.author &&
              pi.jsx(U, {
                marginTop: 1,
                children: pi.jsxs(w, {
                  dimColor: !0,
                  children: [
                    "By:",
                    " ",
                    typeof p.entry.author === "string" ? p.entry.author : p.entry.author.name,
                  ],
                }),
              }),
          ],
        }),
        pi.jsx(prr, {
          plugin: p,
        }),
        pi.jsx(lrr, {}),
        ee &&
          pi.jsx(U, {
            marginBottom: 1,
            children: pi.jsx(Va, {
              error: ee,
            }),
          }),
        pi.jsx(U, {
          flexDirection: "column",
          children: Ce.map((Ie, Ve) =>
            pi.jsxs(
              U,
              {
                children: [
                  J === Ve &&
                    pi.jsx(w, {
                      children: "> ",
                    }),
                  J !== Ve &&
                    pi.jsx(w, {
                      children: "  ",
                    }),
                  pi.jsx(w, {
                    bold: J === Ve,
                    children:
                      oe && Ie.action.startsWith("install-") ? "Installing\u2026" : Ie.label,
                  }),
                ],
              },
              Ie.action,
            ),
          ),
        }),
        pi.jsx(U, {
          marginTop: 1,
          children: pi.jsx(w, {
            dimColor: !0,
            children: pi.jsxs(Tn, {
              children: [
                pi.jsx(mr, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select",
                }),
                pi.jsx(mr, {
                  action: "confirm:no",
                  context: "Settings",
                  fallback: "Esc",
                  description: "go back",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  if (m.length === 0)
    return pi.jsxs(U, {
      flexDirection: "column",
      children: [
        pi.jsx(U, {
          marginBottom: 1,
          children: pi.jsx(w, {
            bold: !0,
            children: "Discover plugins",
          }),
        }),
        ae &&
          pi.jsx(U, {
            marginBottom: 1,
            children: pi.jsx(qk, {
              status: "warning",
              children: ae,
            }),
          }),
        pi.jsx(LNf, {
          reason: Ee,
        }),
        pi.jsx(U, {
          marginTop: 1,
          children: pi.jsx(w, {
            dimColor: !0,
            italic: !0,
            children: pi.jsx(mr, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back",
            }),
          }),
        }),
      ],
    });
  let ye = Z.getVisibleItems($);
  return pi.jsxs(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: ie,
    onPaste: le,
    children: [
      pi.jsxs(U, {
        children: [
          pi.jsx(w, {
            bold: !0,
            children: "Discover plugins",
          }),
          Z.needsPagination &&
            pi.jsxs(w, {
              dimColor: !0,
              children: [" ", "(", Z.scrollPosition.current, "/", Z.scrollPosition.total, ")"],
            }),
        ],
      }),
      pi.jsx(U, {
        marginBottom: 1,
        children: pi.jsx(LP, {
          query: I,
          isFocused: v,
          isTerminalFocused: N,
          width: B - 4,
          cursorOffset: D,
          onCursorOffsetChange: P,
          onFocus: () => C(!0),
        }),
      }),
      ae &&
        pi.jsx(U, {
          marginBottom: 1,
          children: pi.jsx(qk, {
            status: "warning",
            children: ae,
          }),
        }),
      $.length === 0 &&
        I &&
        pi.jsx(U, {
          marginBottom: 1,
          children: pi.jsxs(Fl, {
            children: ['No plugins match "', I, '"'],
          }),
        }),
      Z.scrollPosition.canScrollUp &&
        pi.jsx(U, {
          children: pi.jsxs(w, {
            dimColor: !0,
            children: [" ", nt.arrowUp, " more above"],
          }),
        }),
      ye.map((ue, we) => {
        let Ce = Z.toActualIndex(we),
          Ie = q === Ce,
          Ve = V.has(ue.pluginId),
          Ze = z.has(ue.pluginId),
          Be = b?.get(ue.pluginId),
          Me = S.get(ue.pluginId),
          Ue = we === ye.length - 1;
        return pi.jsxs(
          U,
          {
            flexDirection: "column",
            marginBottom: Ue ? 0 : 1,
            children: [
              pi.jsxs(U, {
                children: [
                  pi.jsxs(w, {
                    color: Ie && !v ? "suggestion" : void 0,
                    children: [Ie && !v ? nt.pointer : " ", " "],
                  }),
                  pi.jsxs(w, {
                    children: [
                      Ze ? nt.ellipsis : Ve ? nt.radioOn : nt.radioOff,
                      " ",
                      fS(ue.entry),
                      pi.jsxs(w, {
                        dimColor: !0,
                        children: [" \xB7 ", ue.marketplaceName],
                      }),
                      Me &&
                        pi.jsxs(w, {
                          dimColor: !0,
                          children: [" ", "\xB7 ", DNf(Me)],
                        }),
                      ue.entry.tags?.includes("community-managed") &&
                        pi.jsx(w, {
                          dimColor: !0,
                          children: " [Community Managed]",
                        }),
                      Be !== void 0 &&
                        ue.marketplaceName === xI &&
                        pi.jsxs(w, {
                          dimColor: !0,
                          children: [" \xB7 ", rrr(Be), " installs"],
                        }),
                    ],
                  }),
                ],
              }),
              ue.entry.description &&
                pi.jsx(U, {
                  marginLeft: 4,
                  children: pi.jsx(w, {
                    dimColor: !0,
                    children: Rs(ue.entry.description, 60),
                  }),
                }),
            ],
          },
          `${Z.startIndex}-${ue.pluginId}`,
        );
      }),
      Z.scrollPosition.canScrollDown &&
        pi.jsx(U, {
          children: pi.jsxs(w, {
            dimColor: !0,
            children: [" ", nt.arrowDown, " more below"],
          }),
        }),
      pi.jsx(RNf, {
        hasSelection: V.size > 0,
        canToggle: q < $.length && !$[q]?.isInstalled,
        canView: q < $.length,
      }),
    ],
  });
}
function RNf(e) {
  let t = YBo.c(12),
    { hasSelection: n, canToggle: r, canView: o } = e,
    s;
  if (t[0] !== n)
    ((s =
      n &&
      pi.jsx(mr, {
        action: "plugin:install",
        context: "Plugin",
        fallback: "i",
        description: "install",
        bold: !0,
      })),
      (t[0] = n),
      (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((i = pi.jsx(w, {
      children: "Type to search",
    })),
      (t[2] = i));
  else i = t[2];
  let a;
  if (t[3] !== r)
    ((a =
      r &&
      pi.jsx(mr, {
        action: "plugin:toggle",
        context: "Plugin",
        fallback: "Space",
        description: "toggle",
      })),
      (t[3] = r),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] !== o)
    ((l =
      o &&
      pi.jsx(mr, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "view",
      })),
      (t[5] = o),
      (t[6] = l));
  else l = t[6];
  let c;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((c = pi.jsx(mr, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back",
    })),
      (t[7] = c));
  else c = t[7];
  let u;
  if (t[8] !== s || t[9] !== a || t[10] !== l)
    ((u = pi.jsx(U, {
      marginTop: 1,
      children: pi.jsx(w, {
        dimColor: !0,
        italic: !0,
        children: pi.jsxs(Tn, {
          children: [s, i, a, l, c],
        }),
      }),
    })),
      (t[8] = s),
      (t[9] = a),
      (t[10] = l),
      (t[11] = u));
  else u = t[11];
  return u;
}
function LNf(e) {
  let t = YBo.c(7),
    { reason: n } = e;
  switch (n) {
    case "git-not-installed": {
      let r;
      if (t[0] === Symbol.for("react.memo_cache_sentinel"))
        ((r = pi.jsxs(pi.Fragment, {
          children: [
            pi.jsx(w, {
              dimColor: !0,
              children: "Git is required to install marketplaces.",
            }),
            pi.jsx(w, {
              dimColor: !0,
              children: "Please install git and restart Claude Code.",
            }),
          ],
        })),
          (t[0] = r));
      else r = t[0];
      return r;
    }
    case "all-blocked-by-policy": {
      let r;
      if (t[1] === Symbol.for("react.memo_cache_sentinel"))
        ((r = pi.jsxs(pi.Fragment, {
          children: [
            pi.jsx(w, {
              dimColor: !0,
              children: "Your organization policy does not allow any external marketplaces.",
            }),
            pi.jsx(w, {
              dimColor: !0,
              children: "Contact your administrator.",
            }),
          ],
        })),
          (t[1] = r));
      else r = t[1];
      return r;
    }
    case "policy-restricts-sources": {
      let r;
      if (t[2] === Symbol.for("react.memo_cache_sentinel"))
        ((r = pi.jsxs(pi.Fragment, {
          children: [
            pi.jsx(w, {
              dimColor: !0,
              children: "Your organization restricts which marketplaces can be added.",
            }),
            pi.jsx(w, {
              dimColor: !0,
              children: "Switch to the Marketplaces tab to view allowed sources.",
            }),
          ],
        })),
          (t[2] = r));
      else r = t[2];
      return r;
    }
    case "all-marketplaces-failed": {
      let r;
      if (t[3] === Symbol.for("react.memo_cache_sentinel"))
        ((r = pi.jsxs(pi.Fragment, {
          children: [
            pi.jsx(w, {
              dimColor: !0,
              children: "Failed to load marketplace data.",
            }),
            pi.jsx(w, {
              dimColor: !0,
              children: "Check your network connection.",
            }),
          ],
        })),
          (t[3] = r));
      else r = t[3];
      return r;
    }
    case "all-plugins-installed": {
      let r;
      if (t[4] === Symbol.for("react.memo_cache_sentinel"))
        ((r = pi.jsxs(pi.Fragment, {
          children: [
            pi.jsx(w, {
              dimColor: !0,
              children: "All available plugins are already installed.",
            }),
            pi.jsx(w, {
              dimColor: !0,
              children: "Check for new plugins later or add more marketplaces.",
            }),
          ],
        })),
          (t[4] = r));
      else r = t[4];
      return r;
    }
    case "all-plugins-project-installed": {
      let r;
      if (t[5] === Symbol.for("react.memo_cache_sentinel"))
        ((r = pi.jsxs(pi.Fragment, {
          children: [
            pi.jsx(w, {
              dimColor: !0,
              children: "All available plugins are installed for this project.",
            }),
            pi.jsx(w, {
              dimColor: !0,
              children: "Use the Browse tab to install at user scope.",
            }),
          ],
        })),
          (t[5] = r));
      else r = t[5];
      return r;
    }
    case "no-marketplaces-configured":
    default: {
      let r;
      if (t[6] === Symbol.for("react.memo_cache_sentinel"))
        ((r = pi.jsx(Fl, {
          hint: "Add a marketplace first using the Marketplaces tab.",
          children: "No plugins available.",
        })),
          (t[6] = r));
      else r = t[6];
      return r;
    }
  }
}
function DNf(e) {
  switch (e.signal) {
    case "cwd":
      return "suggested for this directory";
    case "cli":
      return `suggested for ${Rs(e.command, KBo)} commands`;
    case "hosts":
      return `suggested for ${Rs(e.host, KBo)}`;
    case "filesRead":
      return `suggested for ${B2l(e.file)}`;
    case "manifestDep":
      return `suggested from ${B2l(e.file)}`;
  }
}
function B2l(e) {
  return JJe(kd(e).replaceAll("\\", "/"), KBo);
}
var YBo,
  bA,
  pi,
  KBo = 32;
