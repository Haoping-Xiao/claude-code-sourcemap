// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module frr
// matched 2.1.88 source: src/commands/plugin/BrowseMarketplace.tsx
// class=modified  jaccard=0.2898  score=0.5266  fileCov=0.3918
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module frr]
_z = R(rt(), 1);
function BrowseMarketplace({
  error: e,
  setError: t,
  result: n,
  setResult: r,
  setViewState: o,
  onInstallComplete: s,
  onSearchModeChange: i,
  targetMarketplace: a,
  targetPlugin: l,
}) {
  let [c, u] = J_.useState("marketplace-list"),
    [d, p] = J_.useState(null),
    [f, m] = J_.useState(null),
    [marketplaces, h] = J_.useState([]),
    [availablePlugins, b] = J_.useState([]),
    [_, S] = J_.useState(true),
    [A, v] = J_.useState(null),
    [C, x] = J_.useState(false),
    I = () => x(false),
    {
      query: k,
      setQuery: D,
      cursorOffset: P,
      setCursorOffset: O,
      handleKeyDown: L,
      handlePaste: M,
    } = Uk({
      isActive: c === "plugin-list" && C && !_,
      onExit: I,
      onExitUp: I,
    }),
    N = C && k !== "";
  (J_.useEffect(() => {
    i(N);
  }, [N, i]),
    J_.useEffect(() => () => i(false), [i]));
  let B = Pg(),
    { columns: $ } = br(),
    q = J_.useMemo(() => {
      if (!k) return availablePlugins;
      let ue = k.toLowerCase();
      return availablePlugins.filter(
        (we) =>
          we.entry.name.toLowerCase().includes(ue) ||
          we.entry.displayName?.toLowerCase().includes(ue) ||
          we.entry.description?.toLowerCase().includes(ue),
      );
    }, [availablePlugins, k]),
    [W, V] = J_.useState(0),
    [selectedForInstall, z] = J_.useState(new Set()),
    [K, Z] = J_.useState(new Set()),
    pagination = FEt({
      totalItems: q.length,
      selectedIndex: W,
    });
  J_.useEffect(() => {
    V(0);
  }, [k]);
  let [ne, oe] = J_.useState(0),
    [re, ee] = J_.useState(false),
    [ce, ae] = J_.useState(null),
    [de, Ee] = J_.useState(null),
    me = J_.useCallback(() => {
      if (c === "plugin-list") {
        if (a)
          o({
            type: "manage-marketplaces",
            targetMarketplace: a,
          });
        else if (marketplaces.length === 1)
          o({
            type: "menu",
          });
        else (u("marketplace-list"), p(null), z(new Set()), V(0));
      } else if (c === "plugin-details") (u("plugin-list"), m(null));
      else
        o({
          type: "menu",
        });
    }, [c, a, o, marketplaces.length]);
  ($r("confirm:no", me, {
    context: "Settings",
    isActive: typeof c === "string" && !(c === "plugin-list" && C),
  }),
    J_.useEffect(() => {
      let ue = false;
      async function we() {
        try {
          let Ce = await om(),
            { marketplaces: Ie, failures: Ve } = await rse(Ce);
          if (ue) return;
          let Ze = [];
          for (let { name: Ue, config: tt, data: bt } of Ie)
            if (bt) {
              let Ke = On(bt.plugins, (Et) => b5(MQ(Et.name, Ue)));
              Ze.push({
                name: Ue,
                totalPlugins: bt.plugins.length,
                installedCount: Ke,
                source: zze(tt.source),
              });
            }
          (Ze.sort((Ue, tt) => {
            if (Ue.name === "claude-plugin-directory") return -1;
            if (tt.name === "claude-plugin-directory") return 1;
            return 0;
          }),
            h(Ze));
          let Be = On(Ie, (Ue) => Ue.data !== null),
            Me = $St(Ve, Be);
          if (Me)
            if (Me.type === "warning") Ee(Me.message + ". Showing available marketplaces.");
            else throw Error(Me.message);
          if (Ze.length === 1 && !a && !l) {
            let Ue = Ze[0];
            if (Ue) (p(Ue.name), u("plugin-list"));
          }
          if (a && !Ze.some((Ue) => Ue.name === a)) t(`Marketplace "${a}" not found`);
          else if (l) {
            let Ue = null,
              tt = null,
              bt = a ? [a] : Object.keys(Ce);
            for (let Ke of bt) {
              let Et = await G$(Ke);
              if (Et) {
                let ct = Et.plugins.find((Je) => Je.name === l);
                if (ct) {
                  let Je = MQ(ct.name, Ke);
                  ((Ue = {
                    entry: ct,
                    marketplaceName: Ke,
                    pluginId: Je,
                    isInstalled: Xze(Je),
                  }),
                    (tt = Ke));
                  break;
                }
              }
            }
            if (ue) return;
            if (Ue && tt) {
              let Ke = Ue.pluginId;
              if (Xze(Ke)) {
                let ct = await $Et(Ke),
                  Je = await orr(Ke, ct);
                if (ue) return;
                if (Je) u(Je);
                else if (ct === null)
                  t(
                    `Plugin '${Ke}' is already installed globally. Use '/plugin' to manage existing plugins.`,
                  );
                else if ((r(`Plugin "${Ke}" is already installed${ct.suffix}`), ct.changed))
                  await s();
              } else (p(tt), m(Ue), u("plugin-details"));
            } else {
              let Ke = a ? `marketplace "${a}"` : "any marketplace";
              t(`Plugin "${l}" not found in ${Ke}`);
            }
          } else if (a) (p(a), u("plugin-list"));
        } catch (Ce) {
          if (ue) return;
          t(Ce instanceof Error ? Ce.message : "Failed to load marketplaces");
        } finally {
          if (!ue) S(false);
        }
      }
      return (
        we(),
        () => {
          ue = true;
        }
      );
    }, [t, r, s, a, l]));
  let pe = J_.useRef(0);
  J_.useEffect(() => {
    if (!d) return;
    let ue = false,
      we = ++pe.current;
    async function Ce(Ie) {
      S(true);
      try {
        let Ve = await G$(Ie);
        if (ue) return;
        if (!Ve) throw Error(`Failed to load marketplace: ${Ie}`);
        let Ze = [];
        for (let Be of Ve.plugins) {
          let Me = MQ(Be.name, Ie);
          if (GI(Me)) continue;
          Ze.push({
            entry: Be,
            marketplaceName: Ie,
            pluginId: Me,
            isInstalled: Xze(Me),
          });
        }
        try {
          let Be = await OEt();
          if (ue) return;
          if ((v(Be), Be))
            Ze.sort((Me, Ue) => {
              let tt = Be.get(Me.pluginId) ?? 0,
                bt = Be.get(Ue.pluginId) ?? 0;
              if (tt !== bt) return bt - tt;
              return Me.entry.name.localeCompare(Ue.entry.name);
            });
          else Ze.sort((Me, Ue) => Me.entry.name.localeCompare(Ue.entry.name));
        } catch (Be) {
          if (ue) return;
          (T(`Failed to fetch install counts: ${be(Be)}`),
            Ze.sort((Me, Ue) => Me.entry.name.localeCompare(Ue.entry.name)));
        }
        (b(Ze), V(0), z(new Set()), x(false), D(""));
      } catch (Ve) {
        if (ue) return;
        t(Ve instanceof Error ? Ve.message : "Failed to load plugins");
      } finally {
        if (pe.current === we) S(false);
      }
    }
    return (
      Ce(d),
      () => {
        ue = true;
      }
    );
  }, [d, t, D]);
  let ge = async () => {
      if (selectedForInstall.size === 0) return;
      let ue = availablePlugins.filter((Be) => selectedForInstall.has(Be.pluginId));
      Z(new Set(ue.map((Be) => Be.pluginId)));
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
      (Z(new Set()), z(new Set()), Ah());
      let Ze =
        Ve.length > 0 ? ` Disabled by default \u2014 enable in /plugin: ${Ve.join(", ")}.` : "";
      if (Ce === 0) {
        let Be = `\u2713 Installed ${we} ${bn(we, "plugin")}. Run /reload-plugins to activate.${Ze}`;
        r(Be);
      } else if (we === 0) t(`Failed to install: ${MSt(Ie, true)}`);
      else {
        let Be = `\u2713 Installed ${we} of ${we + Ce} plugins. Failed: ${MSt(Ie, false)}. Run /reload-plugins to activate successfully installed plugins.${Ze}`;
        r(Be);
      }
      if (we > 0) await s();
      o({
        type: "menu",
      });
    },
    he = async (ue, we = "user") => {
      (ee(true), ae(null));
      let Ce = await bOe({
        pluginId: ue.pluginId,
        entry: ue.entry,
        marketplaceName: ue.marketplaceName,
        scope: we,
      });
      if (Ce.success) {
        let Ie = await mXt(ue.pluginId);
        if (Ie) {
          (ee(false),
            u({
              type: "plugin-options",
              plugin: Ie,
              pluginId: ue.pluginId,
              depNote: Ce.depNote,
            }));
          return;
        }
        (r(Ce.message),
          await s(),
          o({
            type: "menu",
          }));
      } else (ee(false), ae(Ce.error));
    };
  (J_.useEffect(() => {
    if (e) r(e);
  }, [e, r]),
    No(
      {
        "select:previous": () => {
          if (W > 0) V(W - 1);
        },
        "select:next": () => {
          if (W < marketplaces.length - 1) V(W + 1);
        },
        "select:accept": () => {
          let ue = marketplaces[W];
          if (ue) (p(ue.name), u("plugin-list"));
        },
      },
      {
        context: "Select",
        isActive: c === "marketplace-list",
      },
    ));
  function ie(ue) {
    if (C) {
      L(ue);
      return;
    }
    if (ue.ctrl || ue.meta || _) return;
    if (ue.key === "/") (ue.preventDefault(), x(true), D(""));
    else if (ue.key.length === 1 && ue.key !== " ") (ue.preventDefault(), x(true), D(ue.key));
  }
  function le(ue) {
    if (C) {
      M(ue);
      return;
    }
    if (_) return;
    let we = (ue.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (!we) return;
    (ue.preventDefault(), x(true), D(we));
  }
  (No(
    {
      "select:previous": () => {
        if (W === 0) {
          if (availablePlugins.length > 0) x(true);
        } else pagination.handleSelectionChange(W - 1, V);
      },
      "select:next": () => {
        if (W < q.length - 1) pagination.handleSelectionChange(W + 1, V);
      },
      "select:accept": () => {
        if (W < q.length) {
          let ue = q[W];
          if (ue)
            if (ue.isInstalled)
              o({
                type: "manage-plugins",
                targetPlugin: ue.entry.name,
                targetMarketplace: ue.marketplaceName,
              });
            else (m(ue), u("plugin-details"), oe(0), ae(null));
        }
      },
    },
    {
      context: "Select",
      isActive: c === "plugin-list" && !C && !_,
    },
  ),
    No(
      {
        "plugin:toggle": () => {
          if (W < q.length) {
            let ue = q[W];
            if (ue && !ue.isInstalled) {
              let we = new Set(selectedForInstall);
              if (we.has(ue.pluginId)) we.delete(ue.pluginId);
              else we.add(ue.pluginId);
              z(we);
            }
          }
        },
        "plugin:install": () => {
          if (selectedForInstall.size === 0) return false;
          if (K.size > 0) return;
          ge();
        },
      },
      {
        context: "Plugin",
        isActive: c === "plugin-list" && !C && !_,
      },
    ));
  let He = J_.useMemo(() => {
    if (!f) return [];
    let ue = f.entry.homepage,
      we = n1e(f);
    return UEt(ue, we);
  }, [f]);
  if (
    (No(
      {
        "select:previous": () => {
          if (ne > 0) oe(ne - 1);
        },
        "select:next": () => {
          if (ne < He.length - 1) oe(ne + 1);
        },
        "select:accept": () => {
          if (!f) return;
          let ue = He[ne]?.action,
            we = f.entry.homepage,
            Ce = n1e(f);
          if (ue === "install-user") he(f, "user");
          else if (ue === "install-project") he(f, "project");
          else if (ue === "install-local") he(f, "local");
          else if (ue === "homepage" && we) ac(we);
          else if (ue === "github" && Ce) ac(`https://github.com/${Ce}`);
          else if (ue === "back") (u("plugin-list"), m(null));
        },
      },
      {
        context: "Select",
        isActive: c === "plugin-details" && !!f && !_ && !re,
      },
    ),
    typeof c === "object" && c.type === "plugin-options")
  )
    return hi.jsx(srr, {
      viewState: c,
      onFinish: (ue, we) => {
        if ((r(ue), we)) s();
        o({
          type: "menu",
        });
      },
    });
  if (_)
    return hi.jsx(Vc, {
      message: "Loading\u2026",
    });
  if (e)
    return hi.jsx(Va, {
      error: e,
    });
  if (c === "marketplace-list") {
    if (marketplaces.length === 0)
      return hi.jsxs(U, {
        flexDirection: "column",
        children: [
          hi.jsx(U, {
            marginBottom: 1,
            children: hi.jsx(w, {
              bold: true,
              children: "Select marketplace",
            }),
          }),
          hi.jsx(w, {
            children: "No marketplaces configured.",
          }),
          hi.jsxs(w, {
            dimColor: true,
            children: ["Add a marketplace first using ", "'Add marketplace'", "."],
          }),
          hi.jsx(U, {
            marginTop: 1,
            paddingLeft: 1,
            children: hi.jsx(w, {
              dimColor: true,
              children: hi.jsx(mr, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "go back",
              }),
            }),
          }),
        ],
      });
    return hi.jsxs(U, {
      flexDirection: "column",
      children: [
        hi.jsx(U, {
          marginBottom: 1,
          children: hi.jsx(w, {
            bold: true,
            children: "Select marketplace",
          }),
        }),
        de &&
          hi.jsx(U, {
            marginBottom: 1,
            flexDirection: "column",
            children: hi.jsxs(w, {
              color: "warning",
              children: [
                hi.jsx(Hs, {
                  status: "warning",
                  withSpace: true,
                }),
                de,
              ],
            }),
          }),
        marketplaces.map((ue, we) =>
          hi.jsxs(
            U,
            {
              flexDirection: "column",
              marginBottom: we < marketplaces.length - 1 ? 1 : 0,
              children: [
                hi.jsx(U, {
                  children: hi.jsxs(w, {
                    color: W === we ? "suggestion" : void 0,
                    children: [W === we ? nt.pointer : " ", " ", ue.name],
                  }),
                }),
                hi.jsx(U, {
                  marginLeft: 2,
                  children: hi.jsx(w, {
                    dimColor: true,
                    children: hi.jsxs(Tn, {
                      children: [
                        hi.jsxs(hi.Fragment, {
                          children: [
                            ue.totalPlugins,
                            " ",
                            bn(ue.totalPlugins, "plugin"),
                            " available",
                          ],
                        }),
                        ue.installedCount > 0 && `${ue.installedCount} already installed`,
                        ue.source,
                      ],
                    }),
                  }),
                }),
              ],
            },
            ue.name,
          ),
        ),
        hi.jsx(U, {
          marginTop: 1,
          children: hi.jsx(w, {
            dimColor: true,
            italic: true,
            children: hi.jsxs(Tn, {
              children: [
                hi.jsx(mr, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select",
                }),
                hi.jsx(mr, {
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
  if (c === "plugin-details" && f) {
    let ue = f.entry.homepage,
      we = n1e(f),
      Ce = UEt(ue, we);
    return hi.jsxs(U, {
      flexDirection: "column",
      children: [
        hi.jsx(U, {
          marginBottom: 1,
          children: hi.jsx(w, {
            bold: true,
            children: "Plugin Details",
          }),
        }),
        hi.jsxs(U, {
          flexDirection: "column",
          marginBottom: 1,
          children: [
            hi.jsx(w, {
              bold: true,
              children: fS(f.entry),
            }),
            f.entry.version &&
              hi.jsxs(w, {
                dimColor: true,
                children: ["Version: ", f.entry.version],
              }),
            hi.jsx(drr, {
              pluginId: f.pluginId,
            }),
            f.entry.description &&
              hi.jsx(U, {
                marginTop: 1,
                children: hi.jsx(w, {
                  children: f.entry.description,
                }),
              }),
            f.entry.author &&
              hi.jsx(U, {
                marginTop: 1,
                children: hi.jsxs(w, {
                  dimColor: true,
                  children: [
                    "By:",
                    " ",
                    typeof f.entry.author === "string" ? f.entry.author : f.entry.author.name,
                  ],
                }),
              }),
          ],
        }),
        hi.jsx(prr, {
          plugin: f,
        }),
        hi.jsx(xNf, {
          pluginId: f.pluginId,
        }),
        hi.jsx(lrr, {}),
        ce &&
          hi.jsx(U, {
            marginBottom: 1,
            children: hi.jsx(Va, {
              error: ce,
            }),
          }),
        hi.jsx(U, {
          flexDirection: "column",
          children: Ce.map((Ie, Ve) =>
            hi.jsxs(
              U,
              {
                children: [
                  ne === Ve &&
                    hi.jsx(w, {
                      children: "> ",
                    }),
                  ne !== Ve &&
                    hi.jsx(w, {
                      children: "  ",
                    }),
                  hi.jsx(w, {
                    bold: ne === Ve,
                    children:
                      re && Ie.action.startsWith("install-") ? "Installing\u2026" : Ie.label,
                  }),
                ],
              },
              Ie.action,
            ),
          ),
        }),
        hi.jsx(U, {
          marginTop: 1,
          paddingLeft: 1,
          children: hi.jsx(w, {
            dimColor: true,
            children: hi.jsxs(Tn, {
              children: [
                hi.jsx(mr, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select",
                }),
                hi.jsx(mr, {
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
  if (availablePlugins.length === 0)
    return hi.jsxs(U, {
      flexDirection: "column",
      children: [
        hi.jsx(U, {
          marginBottom: 1,
          children: hi.jsx(w, {
            bold: true,
            children: "Install plugins",
          }),
        }),
        hi.jsx(Fl, {
          hint: "All plugins from this marketplace are already installed.",
          children: "No new plugins available to install.",
        }),
        hi.jsx(U, {
          marginLeft: 3,
          children: hi.jsx(w, {
            dimColor: true,
            italic: true,
            children: hi.jsx(mr, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back",
            }),
          }),
        }),
      ],
    });
  let ye = pagination.getVisibleItems(q);
  return hi.jsxs(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: ie,
    onPaste: le,
    children: [
      hi.jsxs(U, {
        children: [
          hi.jsx(w, {
            bold: true,
            children: "Install Plugins",
          }),
          pagination.needsPagination &&
            hi.jsxs(w, {
              dimColor: true,
              children: [
                " ",
                "(",
                pagination.scrollPosition.current,
                "/",
                pagination.scrollPosition.total,
                ")",
              ],
            }),
        ],
      }),
      hi.jsx(U, {
        marginBottom: 1,
        children: hi.jsx(LP, {
          query: k,
          isFocused: C,
          isTerminalFocused: B,
          width: $ - 4,
          cursorOffset: P,
          onCursorOffsetChange: O,
          onFocus: () => x(true),
        }),
      }),
      q.length === 0 &&
        k &&
        hi.jsx(U, {
          marginBottom: 1,
          children: hi.jsxs(Fl, {
            children: ['No plugins match "', k, '"'],
          }),
        }),
      pagination.scrollPosition.canScrollUp &&
        hi.jsx(U, {
          children: hi.jsxs(w, {
            dimColor: true,
            children: [" ", nt.arrowUp, " more above"],
          }),
        }),
      ye.map((ue, we) => {
        let Ce = pagination.toActualIndex(we),
          Ie = W === Ce,
          Ve = selectedForInstall.has(ue.pluginId),
          Ze = K.has(ue.pluginId),
          Be = we === ye.length - 1,
          Me = A?.get(ue.pluginId);
        return hi.jsxs(
          U,
          {
            flexDirection: "column",
            marginBottom: Be && !e ? 0 : 1,
            children: [
              hi.jsxs(U, {
                children: [
                  hi.jsxs(w, {
                    color: Ie && !C ? "suggestion" : void 0,
                    children: [Ie && !C ? nt.pointer : " ", " "],
                  }),
                  hi.jsxs(w, {
                    color: ue.isInstalled ? "success" : void 0,
                    children: [
                      ue.isInstalled ? nt.tick : Ze ? nt.ellipsis : Ve ? nt.radioOn : nt.radioOff,
                      " ",
                      fS(ue.entry),
                      ue.entry.category &&
                        hi.jsxs(w, {
                          dimColor: true,
                          children: [" [", ue.entry.category, "]"],
                        }),
                      ue.entry.tags?.includes("community-managed") &&
                        hi.jsx(w, {
                          dimColor: true,
                          children: " [Community Managed]",
                        }),
                      hi.jsx(mz, {
                        when: ue.isInstalled,
                        children: "installed",
                      }),
                      Me !== void 0 &&
                        d === xI &&
                        hi.jsxs(w, {
                          dimColor: true,
                          children: [" \xB7 ", rrr(Me), " installs"],
                        }),
                    ],
                  }),
                ],
              }),
              ue.entry.description &&
                hi.jsxs(U, {
                  marginLeft: 4,
                  children: [
                    hi.jsx(w, {
                      dimColor: true,
                      children: Rs(ue.entry.description, 60),
                    }),
                    ue.entry.version &&
                      hi.jsxs(w, {
                        dimColor: true,
                        children: [" \xB7 v", ue.entry.version],
                      }),
                  ],
                }),
            ],
          },
          ue.pluginId,
        );
      }),
      pagination.scrollPosition.canScrollDown &&
        hi.jsx(U, {
          children: hi.jsxs(w, {
            dimColor: true,
            children: [" ", nt.arrowDown, " more below"],
          }),
        }),
      e &&
        hi.jsx(U, {
          marginTop: 1,
          children: hi.jsxs(w, {
            color: "error",
            children: [
              hi.jsx(Hs, {
                status: "error",
                withSpace: true,
              }),
              e,
            ],
          }),
        }),
      hi.jsx(P2l, {
        hasSelection: selectedForInstall.size > 0,
        canToggle: W < q.length && !q[W]?.isInstalled,
        canView: W < q.length,
      }),
    ],
  });
}
function xNf(e) {
  let t = $2l.c(21),
    { pluginId: n } = e,
    [r, o] = J_.useState(null),
    s,
    i;
  if (t[0] !== n)
    ((s = () => {
      o(null);
      let y = false;
      return (
        I2l(n, mo(As()))
          .then((b) => {
            if (!y) o(b);
          })
          .catch(kNf),
        () => {
          y = true;
        }
      );
    }),
      (i = [n]),
      (t[0] = n),
      (t[1] = s),
      (t[2] = i));
  else ((s = t[1]), (i = t[2]));
  if ((J_.useEffect(s, i), r === null)) return null;
  let a = r.alwaysOn >= C2l,
    l;
  if (t[3] !== r.isEstimate)
    ((l =
      r.isEstimate &&
      hi.jsx(w, {
        dimColor: true,
        children: " (estimated)",
      })),
      (t[3] = r.isEstimate),
      (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] !== l)
    ((c = hi.jsxs(w, {
      bold: true,
      children: ["Context cost", l, ":"],
    })),
      (t[5] = l),
      (t[6] = c));
  else c = t[6];
  let u = a ? "warning" : void 0,
    d = !a,
    p;
  if (t[7] !== r.alwaysOn) ((p = sae(r.alwaysOn)), (t[7] = r.alwaysOn), (t[8] = p));
  else p = t[8];
  let f;
  if (t[9] !== u || t[10] !== d || t[11] !== p)
    ((f = hi.jsxs(w, {
      color: u,
      dimColor: d,
      children: ["\xB7 Every turn: ", p, " tokens"],
    })),
      (t[9] = u),
      (t[10] = d),
      (t[11] = p),
      (t[12] = f));
  else f = t[12];
  let m;
  if (t[13] !== r.onInvoke) ((m = sae(r.onInvoke)), (t[13] = r.onInvoke), (t[14] = m));
  else m = t[14];
  let g;
  if (t[15] !== m)
    ((g = hi.jsxs(w, {
      dimColor: true,
      children: ["\xB7 When invoked: ", m, " tokens"],
    })),
      (t[15] = m),
      (t[16] = g));
  else g = t[16];
  let h;
  if (t[17] !== g || t[18] !== c || t[19] !== f)
    ((h = hi.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [c, f, g],
    })),
      (t[17] = g),
      (t[18] = c),
      (t[19] = f),
      (t[20] = h));
  else h = t[20];
  return h;
}
function kNf() {}
var $2l, J_, hi;
