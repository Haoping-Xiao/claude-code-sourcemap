// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yrr
// matched 2.1.88 source: src/commands/plugin/ManageMarketplaces.tsx
// class=modified  jaccard=0.3905  score=0.6039  fileCov=0.5249
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function rjl({
  setViewState: e,
  error: t,
  setError: n,
  setResult: r,
  exitState: o,
  onManageComplete: s,
  targetMarketplace: i,
  action: a,
}) {
  let [l, c] = X$.useState([]),
    [u, d] = X$.useState(true),
    [p, f] = X$.useState(0),
    [m, g] = X$.useState(false),
    [h, y] = X$.useState(null),
    [b, _] = X$.useState(null),
    [S, A] = X$.useState(null),
    [v, C] = X$.useState("list"),
    [x, I] = X$.useState(null),
    [k, D] = X$.useState(0),
    P = X$.useRef(false),
    O = ks(),
    L = X$.useRef(void 0),
    M = X$.useRef(true);
  (X$.useEffect(
    () => () => {
      ((M.current = false), L.current?.());
    },
    [],
  ),
    X$.useEffect(() => {
      async function J() {
        try {
          let ne = await om(),
            { enabled: oe, disabled: re } = await OT(),
            ee = [...oe, ...re],
            { marketplaces: ce, failures: ae } = await rse(ne),
            de = f3(),
            Ee = [];
          for (let { name: ge, config: he, data: ie } of ce) {
            let le = ee.filter((He) => He.source.endsWith(`@${ge}`));
            Ee.push({
              name: ge,
              source: zze(he.source),
              lastUpdated: he.lastUpdated,
              pluginCount: ie?.plugins.length,
              installedPlugins: le,
              pendingUpdate: false,
              pendingRemove: false,
              autoUpdate: khe(ge, he, de[ge]?.autoUpdate),
            });
          }
          (Ee.sort((ge, he) => {
            if (ge.name === "claude-plugin-directory") return -1;
            if (he.name === "claude-plugin-directory") return 1;
            return ge.name.localeCompare(he.name);
          }),
            c(Ee));
          let me = On(ce, (ge) => ge.data !== null),
            pe = $St(ae, me);
          if (pe)
            if (pe.type === "warning") y(pe.message);
            else throw Error(pe.message);
          if (i && !P.current && !t) {
            P.current = true;
            let ge = Ee.findIndex((he) => he.name === i);
            if (ge >= 0) {
              let he = Ee[ge];
              if (a) {
                f(ge + 1);
                let ie = Ee.map((le, He) =>
                  He === ge
                    ? {
                        ...le,
                        pendingUpdate: a === "update",
                        pendingRemove: a === "remove",
                      }
                    : le,
                );
                (c(ie), $(ie));
              } else if (he) (f(ge + 1), I(he), L.current?.(), C("details"));
            } else n(`Marketplace not found: ${i}`);
          }
        } catch (ne) {
          (n(ne instanceof Error ? ne.message : "Failed to load marketplaces"),
            y(ne instanceof Error ? ne.message : "Failed to load marketplaces"));
        } finally {
          d(false);
        }
      }
      J();
    }, [i, a, t]));
  let N = () => l.some((J) => J.pendingUpdate || J.pendingRemove),
    B = () => {
      let J = On(l, (oe) => oe.pendingUpdate),
        ne = On(l, (oe) => oe.pendingRemove);
      return {
        updateCount: J,
        removeCount: ne,
      };
    },
    $ = async (J) => {
      let ne = J || l,
        oe = v === "details";
      (g(true), y(null), _(null), A(null));
      try {
        let re = yn("userSettings"),
          ee = 0,
          ce = 0,
          ae = new Set();
        for (let ye of ne) {
          if (ye.pendingRemove) {
            if (ye.installedPlugins.length > 0) {
              let ue = {
                ...re?.enabledPlugins,
              };
              for (let we of ye.installedPlugins) {
                let Ce = MQ(we.name, ye.name);
                ue[Ce] = false;
              }
              io("userSettings", {
                enabledPlugins: ue,
              });
            }
            (await OSt(ye.name),
              ce++,
              G("tengu_marketplace_removed", {
                marketplace_name: ye.name,
                plugins_uninstalled: ye.installedPlugins.length,
              }));
            continue;
          }
          if (ye.pendingUpdate)
            (await ise(ye.name, (ue) => {
              A(ue);
            }),
              ee++,
              ae.add(ye.name.toLowerCase()),
              G("tengu_marketplace_updated", {
                marketplace_name: ye.name,
              }));
        }
        let de = 0;
        if (ae.size > 0) {
          let { updated: ye } = await tUo(ae);
          de = ye.length;
        }
        if ((Ah(), await s(), !M.current)) return;
        let Ee = await om(),
          { enabled: me, disabled: pe } = await OT();
        if (!M.current) return;
        let ge = [...me, ...pe],
          { marketplaces: he } = await rse(Ee);
        if (!M.current) return;
        let ie = f3(),
          le = [];
        for (let { name: ye, config: ue, data: we } of he) {
          let Ce = ge.filter((Ie) => Ie.source.endsWith(`@${ye}`));
          le.push({
            name: ye,
            source: zze(ue.source),
            lastUpdated: ue.lastUpdated,
            pluginCount: we?.plugins.length,
            installedPlugins: Ce,
            pendingUpdate: false,
            pendingRemove: false,
            autoUpdate: khe(ye, ue, ie[ye]?.autoUpdate),
          });
        }
        if (
          (le.sort((ye, ue) => {
            if (ye.name === "claude-plugin-directory") return -1;
            if (ue.name === "claude-plugin-directory") return 1;
            return ye.name.localeCompare(ue.name);
          }),
          c(le),
          oe && x)
        ) {
          let ye = le.find((ue) => ue.name === x.name);
          if (ye) I(ye);
        }
        let He = [];
        if (ee > 0) {
          let ye = de > 0 ? ` (${de} ${bn(de, "plugin")} bumped)` : "";
          He.push(`Updated ${ee} ${bn(ee, "marketplace")}${ye}`);
        }
        if (ce > 0) He.push(`Removed ${ce} ${bn(ce, "marketplace")}`);
        if (He.length > 0) {
          let ye = `${nt.tick} ${He.join(", ")}`;
          if (oe) _(ye);
          else {
            if (!M.current) return;
            (r(ye),
              L.current?.(),
              (L.current = O.setTimeout(
                () =>
                  e({
                    type: "menu",
                  }),
                2000,
              )));
          }
        } else if (!oe) {
          if (!M.current) return;
          e({
            type: "menu",
          });
        }
      } catch (re) {
        let ee = be(re);
        if (!M.current) return;
        (y(ee), n(ee));
      } finally {
        if (M.current) (g(false), A(null));
      }
    },
    q = async () => {
      if (!x) return;
      let J = l.map((ne) =>
        ne.name === x.name
          ? {
              ...ne,
              pendingRemove: true,
            }
          : ne,
      );
      (c(J), await $(J));
    },
    W = (J) => {
      if (!J) return [];
      let ne = [
        {
          label: `Browse plugins (${J.pluginCount ?? 0})`,
          value: "browse",
        },
        {
          label: "Update marketplace",
          secondaryLabel: J.lastUpdated
            ? `(last updated ${new Date(J.lastUpdated).toLocaleDateString()})`
            : void 0,
          value: "update",
        },
      ];
      if (!o1e())
        ne.push({
          label: J.autoUpdate ? "Disable auto-update" : "Enable auto-update",
          value: "toggle-auto-update",
        });
      return (
        ne.push({
          label: "Remove marketplace",
          value: "remove",
        }),
        ne
      );
    },
    V = async (J) => {
      let ne = !J.autoUpdate;
      try {
        (await SRl(J.name, ne),
          c((oe) =>
            oe.map((re) =>
              re.name === J.name
                ? {
                    ...re,
                    autoUpdate: ne,
                  }
                : re,
            ),
          ),
          I((oe) =>
            oe
              ? {
                  ...oe,
                  autoUpdate: ne,
                }
              : oe,
          ));
      } catch (oe) {
        y(oe instanceof Error ? oe.message : "Failed to update setting");
      }
    };
  ($r(
    "confirm:no",
    () => {
      (L.current?.(), C("list"), D(0));
    },
    {
      context: "Confirmation",
      isActive: !m && (v === "details" || v === "confirm-remove"),
    },
  ),
    $r(
      "confirm:no",
      () => {
        (L.current?.(),
          c((J) =>
            J.map((ne) => ({
              ...ne,
              pendingUpdate: false,
              pendingRemove: false,
            })),
          ),
          f(0));
      },
      {
        context: "Confirmation",
        isActive: !m && v === "list" && N(),
      },
    ),
    $r(
      "confirm:no",
      () => {
        e({
          type: "menu",
        });
      },
      {
        context: "Confirmation",
        isActive: !m && v === "list" && !N(),
      },
    ),
    No(
      {
        "select:previous": () => f((J) => Math.max(0, J - 1)),
        "select:next": () => {
          let J = l.length + 1;
          f((ne) => Math.min(J - 1, ne + 1));
        },
        "select:accept": () => {
          L.current?.();
          let J = p - 1;
          if (p === 0)
            e({
              type: "add-marketplace",
            });
          else if (N()) $();
          else {
            let ne = l[J];
            if (ne) (I(ne), C("details"), D(0));
          }
        },
      },
      {
        context: "Select",
        isActive: !m && v === "list",
      },
    ));
  function Y(J) {
    if (J.ctrl || J.meta || m) return;
    let ne = p - 1;
    if ((J.key === "u" || J.key === "U") && ne >= 0)
      (J.preventDefault(),
        L.current?.(),
        c((oe) =>
          oe.map((re, ee) =>
            ee === ne
              ? {
                  ...re,
                  pendingUpdate: !re.pendingUpdate,
                  pendingRemove: re.pendingUpdate ? re.pendingRemove : false,
                }
              : re,
          ),
        ));
    else if ((J.key === "d" || J.key === "D") && ne >= 0) {
      let oe = l[ne];
      if (oe) (J.preventDefault(), I(oe), L.current?.(), C("confirm-remove"));
    }
  }
  No(
    {
      "select:previous": () => D((J) => Math.max(0, J - 1)),
      "select:next": () => {
        let J = W(x);
        D((ne) => Math.min(J.length - 1, ne + 1));
      },
      "select:accept": () => {
        if ((L.current?.(), !x)) return;
        let ne = W(x)[k];
        if (ne?.value === "browse")
          e({
            type: "browse-marketplace",
            targetMarketplace: x.name,
          });
        else if (ne?.value === "update") {
          let oe = l.map((re) =>
            re.name === x.name
              ? {
                  ...re,
                  pendingUpdate: true,
                }
              : re,
          );
          (c(oe), $(oe));
        } else if (ne?.value === "toggle-auto-update") V(x);
        else if (ne?.value === "remove") C("confirm-remove");
      },
    },
    {
      context: "Select",
      isActive: !m && v === "details",
    },
  );
  function z(J) {
    if (J.ctrl || J.meta || m) return;
    if (J.key === "y" || J.key === "Y") (J.preventDefault(), L.current?.(), q());
    else if (J.key === "n" || J.key === "N")
      (J.preventDefault(), L.current?.(), C("list"), I(null));
  }
  if (u)
    return Ks.jsx(w, {
      children: "Loading marketplaces\u2026",
    });
  if (l.length === 0)
    return Ks.jsxs(U, {
      flexDirection: "column",
      children: [
        Ks.jsx(U, {
          marginBottom: 1,
          children: Ks.jsx(w, {
            bold: true,
            children: "Manage marketplaces",
          }),
        }),
        Ks.jsxs(U, {
          flexDirection: "row",
          gap: 1,
          children: [
            Ks.jsxs(w, {
              color: "suggestion",
              children: [nt.pointer, " +"],
            }),
            Ks.jsx(w, {
              bold: true,
              color: "suggestion",
              children: "Add Marketplace",
            }),
          ],
        }),
        Ks.jsx(U, {
          marginTop: 1,
          children: Ks.jsx(w, {
            dimColor: true,
            italic: true,
            children: o.pending
              ? Ks.jsxs(Ks.Fragment, {
                  children: ["Press ", o.keyName, " again to go back"],
                })
              : Ks.jsxs(Tn, {
                  children: [
                    Ks.jsx(mr, {
                      action: "select:accept",
                      context: "Select",
                      fallback: "Enter",
                      description: "select",
                    }),
                    Ks.jsx(mr, {
                      action: "confirm:no",
                      context: "Confirmation",
                      fallback: "Esc",
                      description: "go back",
                    }),
                  ],
                }),
          }),
        }),
      ],
    });
  if (v === "confirm-remove" && x) {
    let J = x.installedPlugins.length;
    return Ks.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: z,
      children: [
        Ks.jsxs(w, {
          bold: true,
          color: "warning",
          children: [
            "Remove marketplace ",
            Ks.jsx(w, {
              italic: true,
              children: x.name,
            }),
            "?",
          ],
        }),
        Ks.jsxs(U, {
          flexDirection: "column",
          children: [
            J > 0 &&
              Ks.jsx(U, {
                marginTop: 1,
                children: Ks.jsxs(w, {
                  color: "warning",
                  children: [
                    "This will also uninstall ",
                    J,
                    " ",
                    bn(J, "plugin"),
                    " from this marketplace:",
                  ],
                }),
              }),
            x.installedPlugins.length > 0 &&
              Ks.jsx(U, {
                flexDirection: "column",
                marginTop: 1,
                marginLeft: 2,
                children: x.installedPlugins.map((ne) =>
                  Ks.jsx(
                    iE,
                    {
                      children: Ks.jsx(w, {
                        dimColor: true,
                        children: ne.name,
                      }),
                    },
                    ne.name,
                  ),
                ),
              }),
            Ks.jsx(U, {
              marginTop: 1,
              children: Ks.jsxs(w, {
                children: [
                  "Press ",
                  Ks.jsx(w, {
                    bold: true,
                    children: "y",
                  }),
                  " to confirm or ",
                  Ks.jsx(w, {
                    bold: true,
                    children: "n",
                  }),
                  " to cancel",
                ],
              }),
            }),
          ],
        }),
      ],
    });
  }
  if (v === "details" && x) {
    let J = x.pendingUpdate || m,
      ne = W(x);
    return Ks.jsxs(U, {
      flexDirection: "column",
      children: [
        Ks.jsx(w, {
          bold: true,
          children: x.name,
        }),
        Ks.jsx(w, {
          dimColor: true,
          children: x.source,
        }),
        Ks.jsx(U, {
          marginTop: 1,
          children: Ks.jsxs(w, {
            children: [x.pluginCount || 0, " available", " ", bn(x.pluginCount || 0, "plugin")],
          }),
        }),
        x.installedPlugins.length > 0 &&
          Ks.jsxs(U, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              Ks.jsxs(w, {
                bold: true,
                children: ["Installed plugins (", x.installedPlugins.length, "):"],
              }),
              Ks.jsx(U, {
                flexDirection: "column",
                marginLeft: 1,
                children: x.installedPlugins.map((oe) =>
                  Ks.jsxs(
                    iE,
                    {
                      children: [
                        oe.name,
                        `
`,
                        Ks.jsx(w, {
                          dimColor: true,
                          children: oe.manifest.description,
                        }),
                      ],
                    },
                    oe.name,
                  ),
                ),
              }),
            ],
          }),
        J &&
          Ks.jsxs(U, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              Ks.jsx(w, {
                color: "claude",
                children: "Updating marketplace\u2026",
              }),
              S &&
                Ks.jsx(w, {
                  dimColor: true,
                  children: S,
                }),
            ],
          }),
        !J &&
          b &&
          Ks.jsx(U, {
            marginTop: 1,
            children: Ks.jsx(w, {
              color: "claude",
              children: b,
            }),
          }),
        !J &&
          h &&
          Ks.jsx(U, {
            marginTop: 1,
            children: Ks.jsx(Va, {
              error: h,
            }),
          }),
        !J &&
          Ks.jsx(U, {
            flexDirection: "column",
            marginTop: 1,
            children: ne.map((oe, re) => {
              if (!oe) return null;
              return Ks.jsxs(
                mH,
                {
                  isFocused: re === k,
                  children: [
                    oe.label,
                    oe.secondaryLabel &&
                      Ks.jsxs(w, {
                        dimColor: true,
                        children: [" ", oe.secondaryLabel],
                      }),
                  ],
                },
                oe.value,
              );
            }),
          }),
        !J &&
          !o1e() &&
          x.autoUpdate &&
          Ks.jsx(U, {
            marginTop: 1,
            children: Ks.jsx(w, {
              dimColor: true,
              children:
                "Auto-update enabled. Claude Code will automatically update this marketplace and its installed plugins.",
            }),
          }),
        Ks.jsx(U, {
          marginTop: 1,
          children: Ks.jsx(w, {
            dimColor: true,
            italic: true,
            children: J
              ? Ks.jsx(Ks.Fragment, {
                  children: "Please wait\u2026",
                })
              : Ks.jsxs(Tn, {
                  children: [
                    Ks.jsx(mr, {
                      action: "select:accept",
                      context: "Select",
                      fallback: "Enter",
                      description: "select",
                    }),
                    Ks.jsx(mr, {
                      action: "confirm:no",
                      context: "Confirmation",
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
  let { updateCount: K, removeCount: Z } = B();
  return Ks.jsxs(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: Y,
    children: [
      Ks.jsx(U, {
        marginBottom: 1,
        children: Ks.jsx(w, {
          bold: true,
          children: "Manage marketplaces",
        }),
      }),
      Ks.jsxs(U, {
        flexDirection: "row",
        gap: 1,
        marginBottom: 1,
        children: [
          Ks.jsxs(w, {
            color: p === 0 ? "suggestion" : void 0,
            children: [p === 0 ? nt.pointer : " ", " +"],
          }),
          Ks.jsx(w, {
            bold: true,
            color: p === 0 ? "suggestion" : void 0,
            children: "Add Marketplace",
          }),
        ],
      }),
      Ks.jsx(U, {
        flexDirection: "column",
        children: l.map((J, ne) => {
          let oe = ne + 1 === p,
            re = [];
          if (J.pendingUpdate) re.push("UPDATE");
          if (J.pendingRemove) re.push("REMOVE");
          return Ks.jsxs(
            U,
            {
              flexDirection: "row",
              gap: 1,
              marginBottom: 1,
              children: [
                Ks.jsxs(w, {
                  color: oe ? "suggestion" : void 0,
                  children: [oe ? nt.pointer : " ", " ", J.pendingRemove ? nt.cross : nt.bullet],
                }),
                Ks.jsxs(U, {
                  flexDirection: "column",
                  flexGrow: 1,
                  children: [
                    Ks.jsxs(U, {
                      flexDirection: "row",
                      gap: 1,
                      children: [
                        Ks.jsxs(w, {
                          bold: true,
                          strikethrough: J.pendingRemove,
                          dimColor: J.pendingRemove,
                          children: [
                            J.name === "claude-plugins-official" &&
                              Ks.jsx(w, {
                                color: "claude",
                                children: "\u273B ",
                              }),
                            J.name,
                            J.name === "claude-plugins-official" &&
                              Ks.jsx(w, {
                                color: "claude",
                                children: " \u273B",
                              }),
                          ],
                        }),
                        re.length > 0 &&
                          Ks.jsxs(w, {
                            color: "warning",
                            children: ["[", re.join(", "), "]"],
                          }),
                      ],
                    }),
                    Ks.jsx(w, {
                      dimColor: true,
                      children: J.source,
                    }),
                    Ks.jsxs(w, {
                      dimColor: true,
                      children: [
                        J.pluginCount !== void 0 &&
                          Ks.jsxs(Ks.Fragment, {
                            children: [J.pluginCount, " available"],
                          }),
                        J.installedPlugins.length > 0 &&
                          Ks.jsxs(Ks.Fragment, {
                            children: [" \u2022 ", J.installedPlugins.length, " installed"],
                          }),
                        J.lastUpdated &&
                          Ks.jsxs(Ks.Fragment, {
                            children: [
                              " ",
                              "\u2022 Updated",
                              " ",
                              new Date(J.lastUpdated).toLocaleDateString(),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            J.name,
          );
        }),
      }),
      N() &&
        Ks.jsxs(U, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            Ks.jsxs(w, {
              children: [
                Ks.jsx(w, {
                  bold: true,
                  children: "Pending changes:",
                }),
                " ",
                Ks.jsx(w, {
                  dimColor: true,
                  children: Ks.jsx(mr, {
                    action: "select:accept",
                    context: "Select",
                    fallback: "Enter",
                    description: "apply",
                  }),
                }),
              ],
            }),
            K > 0 &&
              Ks.jsxs(iE, {
                children: ["Update ", K, " ", bn(K, "marketplace")],
              }),
            Z > 0 &&
              Ks.jsxs(iE, {
                color: "warning",
                children: ["Remove ", Z, " ", bn(Z, "marketplace")],
              }),
          ],
        }),
      m &&
        Ks.jsx(U, {
          marginTop: 1,
          children: Ks.jsx(w, {
            color: "claude",
            children: "Processing changes\u2026",
          }),
        }),
      h &&
        Ks.jsx(U, {
          marginTop: 1,
          children: Ks.jsx(Va, {
            error: h,
          }),
        }),
      Ks.jsx(GNf, {
        exitState: o,
        hasPendingActions: N(),
      }),
    ],
  });
}
function GNf(e) {
  let t = njl.c(18),
    { exitState: n, hasPendingActions: r } = e;
  if (n.pending) {
    let d;
    if (t[0] !== n.keyName)
      ((d = Ks.jsx(U, {
        marginTop: 1,
        children: Ks.jsxs(w, {
          dimColor: true,
          italic: true,
          children: ["Press ", n.keyName, " again to go back"],
        }),
      })),
        (t[0] = n.keyName),
        (t[1] = d));
    else d = t[1];
    return d;
  }
  let o;
  if (t[2] !== r)
    ((o =
      r &&
      Ks.jsx(mr, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "apply changes",
      })),
      (t[2] = r),
      (t[3] = o));
  else o = t[3];
  let s;
  if (t[4] !== r)
    ((s =
      !r &&
      Ks.jsx(mr, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "select",
      })),
      (t[4] = r),
      (t[5] = s));
  else s = t[5];
  let i;
  if (t[6] !== r)
    ((i =
      !r &&
      Ks.jsx(ht, {
        chord: "u",
        action: "update",
      })),
      (t[6] = r),
      (t[7] = i));
  else i = t[7];
  let a;
  if (t[8] !== r)
    ((a =
      !r &&
      Ks.jsx(ht, {
        chord: "d",
        action: "remove",
      })),
      (t[8] = r),
      (t[9] = a));
  else a = t[9];
  let l = r ? "cancel" : "go back",
    c;
  if (t[10] !== l)
    ((c = Ks.jsx(mr, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: l,
    })),
      (t[10] = l),
      (t[11] = c));
  else c = t[11];
  let u;
  if (t[12] !== o || t[13] !== s || t[14] !== i || t[15] !== a || t[16] !== c)
    ((u = Ks.jsx(U, {
      marginTop: 1,
      children: Ks.jsx(w, {
        dimColor: true,
        italic: true,
        children: Ks.jsxs(Tn, {
          children: [o, s, i, a, c],
        }),
      }),
    })),
      (t[12] = o),
      (t[13] = s),
      (t[14] = i),
      (t[15] = a),
      (t[16] = c),
      (t[17] = u));
  else u = t[17];
  return u;
}
var njl, X$, Ks;
