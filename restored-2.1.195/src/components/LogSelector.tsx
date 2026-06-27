// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MVl
// matched 2.1.88 source: src/components/LogSelector.tsx
// class=modified  jaccard=0.1323  score=0.4939  fileCov=0.1531
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MVl] deps: Ye, Vl
((DVl = R(lt(), 1)), (aJt = R(rt(), 1)), (x2o = R(se(), 1)));
function NVl(e, t) {
  let n = e.replace(/\s+/g, " ").trim();
  return Rs(n, t);
}
function k2o({ before: e, match: t, after: n }, r) {
  return wt.dim(e) + r(t) + wt.dim(n);
}
function RGf(e) {
  return e.replace(new RegExp($jn.source + '[^,\\s"]*', "g"), (t) => {
    let n = Ojn(t);
    return n ? `PR #${n.prNumber} ${n.prRepository}` : t;
  });
}
function LGf(e, t, n) {
  let r = e.toLowerCase().indexOf(t.toLowerCase());
  if (r === -1) return null;
  let o = r + t.length,
    s = Math.max(0, r - n),
    i = Math.min(e.length, o + n),
    a = e.slice(s, r),
    l = e.slice(r, o),
    c = e.slice(o, i);
  return {
    before: (s > 0 ? "\u2026" : "") + a.replace(/\s+/g, " ").trimStart(),
    match: l.trim(),
    after: c.replace(/\s+/g, " ").trimEnd() + (i < e.length ? "\u2026" : ""),
  };
}
function buildLogLabel(log, maxLabelWidth, options) {
  let { isGroupHeader: r = false, isChild: o = false, forkCount: s = 0 } = options || {},
    i = r && s > 0 ? vGf : o ? wGf : 0,
    a = r && s > 0 ? ` (+${s} other ${s === 1 ? "session" : "sessions"})` : "",
    l = log.isSidechain ? " (sidechain)" : "",
    c = maxLabelWidth - i - l.length - a.length;
  return `${NVl(DFe(log), c)}${l}${a}`;
}
function L2o(e, t) {
  let { isChild: n = false, showProjectPath: r = false } = t || {},
    o = n ? "    " : "",
    s = QJe(e),
    i = r && e.projectPath ? ` \xB7 ${e.projectPath}` : "";
  return o + s + i;
}
function LogSelector({
  logs: e,
  maxHeight: t = 1 / 0,
  forceWidth: n,
  onCancel: r,
  onSelect: o,
  onLogsChanged: s,
  onLoadMore: i,
  initialSearchQuery: a,
  isLoading: l = false,
  reloadGeneration: c = 0,
  showAllProjects: u = false,
  onToggleAllProjects: d,
  onAgenticSearch: p,
}) {
  let f = bb(br()),
    m = n === void 0 ? f.columns : n,
    g = ig(r),
    h = Pg(),
    y = ks(),
    b = VHe(),
    _ = false,
    S = GD(),
    A = Ou.useMemo(() => (Pn) => V_e(Pn, S.warning), [S.warning]),
    v = false,
    [C, x] = Ou.useState(null),
    [I, k] = Ou.useState(true),
    [D, P] = Ou.useState(false),
    [O, L] = Ou.useState(false),
    [M, N] = Ou.useState(null),
    [B, $] = Ou.useState(null),
    [q, W] = Ou.useState([]),
    [V, Y] = Ou.useState(false),
    z = Ou.useMemo(() => yr(), []),
    [K, Z] = Ou.useState(""),
    [J, ne] = Ou.useState(0),
    [oe, re] = Ou.useState(new Set()),
    [ee, ce] = Ou.useState(null),
    [ae, de] = Ou.useState(1),
    [Ee, me] = Ou.useState(a ? "search" : "list"),
    [pe, ge] = Ou.useState(null),
    he = Ou.useRef(null),
    [ie, le] = Ou.useState({
      status: "idle",
    }),
    [He, ye] = Ou.useState(false),
    ue = Ou.useRef(null),
    {
      query: we,
      setQuery: Ce,
      cursorOffset: Ie,
      handleKeyDown: Ve,
      handlePaste: Ze,
    } = Uk({
      isActive: Ee === "search" && ie.status !== "searching",
      onExit: () => {
        (me("list"),
          G("tengu_session_search_toggled", {
            enabled: false,
          }));
      },
      onExitUp: () => {
        (me("list"),
          G("tengu_session_search_toggled", {
            enabled: false,
          }));
      },
      passthroughCtrlKeys: e.length === 0 ? ["n", "a"] : ["n"],
      initialQuery: a || "",
    }),
    Be = RGf(we),
    Me = Ou.useDeferredValue(Be),
    [Ue, tt] = Ou.useState("");
  Ou.useEffect(() => {
    if (!Me) {
      tt("");
      return;
    }
    return y.setTimeout(() => tt(Me), 300);
  }, [Me, y]);
  let [bt, Ke] = Ou.useState(null),
    [Et, ct] = Ou.useState(false);
  Ou.useEffect(() => {
    ub().then((lr) => x(lr));
    let Pn = Date.now();
    e9(z)
      .then((lr) => {
        (G("tengu_worktree_detection", {
          duration_ms: Date.now() - Pn,
          worktree_count: lr.length,
          success: true,
        }),
          L(lr.length > 1),
          W(lr),
          N(lr[0] ?? null));
        let eo = lr.filter((Kn) => z === Kn || z.startsWith(Kn + wAt.sep));
        (eo.sort((Kn, Nt) => Nt.length - Kn.length), $(eo[0] ?? null), Y(true));
      })
      .catch(() => {
        (G("tengu_worktree_detection", {
          duration_ms: Date.now() - Pn,
          worktree_count: 0,
          success: false,
        }),
          Y(true));
      });
  }, [z]);
  let Je = Ou.useMemo(() => new Map(e.map((Pn) => [Pn, PGf(Pn)])), [e]),
    gt = Ou.useMemo(() => null, [e, Je, false]),
    st = Ou.useMemo(() => {
      let Pn = e;
      if (b)
        Pn = e.filter((lr) => {
          let eo = Rt(),
            Kn = qg(lr);
          if (eo && Kn === eo) return true;
          if (lr.customTitle ?? lr.aiTitle) return true;
          if (lJt(lr.messages)) return true;
          if (lr.firstPrompt || lr.customTitle || lr.aiTitle) return true;
          return false;
        });
      if (!I && C) Pn = Pn.filter((lr) => lr.gitBranch === C);
      if (O && !D && !u) {
        let lr = B ?? z;
        Pn = Pn.filter((eo) => {
          if (eo.isAlias) return true;
          let Kn = eo.projectPath;
          if (Kn === void 0) return false;
          let Nt = null;
          for (let Ut of q)
            if (Kn === Ut || Kn.startsWith(Ut + wAt.sep)) {
              if (Nt === null || Ut.length > Nt.length) Nt = Ut;
            }
          if (Nt === null) return Kn === lr;
          return Nt === lr;
        });
      }
      return Pn;
    }, [e, b, I, C, O, D, u, z, B, q]),
    xt = Ou.useMemo(() => {
      if (!Be) return st;
      let Pn = Be.toLowerCase();
      return st.filter((lr) => {
        let eo = DFe(lr).toLowerCase(),
          Kn = (lr.gitBranch || "").toLowerCase(),
          Nt = (lr.tag || "").toLowerCase(),
          Ut = lr.prNumber ? `pr #${lr.prNumber} ${lr.prRepository || ""}`.toLowerCase() : "";
        return eo.includes(Pn) || Kn.includes(Pn) || Nt.includes(Pn) || Ut.includes(Pn);
      });
    }, [st, Be]);
  (Ou.useEffect(() => {}, [Me, Ue, false]),
    Ou.useEffect(() => {
      if ((Ke(null), !Me)) ct(false);
      return;
    }, [Ue, Me, gt, false, y]));
  let { filteredLogs: vt, snippets: jt } = Ou.useMemo(() => {
      let Pn = new Map(),
        lr = xt;
      if (bt && Ue && bt.query === Ue) {
        for (let Ut of bt.results)
          if (Ut.searchableText) {
            let Fn = LGf(Ut.searchableText, Ue, kGf);
            if (Fn) Pn.set(Ut.log, Fn);
          }
        let eo = new Set(lr.map((Ut) => Ut.messages[0]?.uuid)),
          Kn = new Set(st),
          Nt = bt.results
            .map((Ut) => Ut.log)
            .filter((Ut) => !eo.has(Ut.messages[0]?.uuid) && Kn.has(Ut));
        lr = [...lr, ...Nt];
      }
      return {
        filteredLogs: lr,
        snippets: Pn,
      };
    }, [xt, bt, Ue, st]),
    en = Ou.useMemo(() => {
      if (ie.status === "results" && ie.results.length > 0) {
        let Pn = new Set(st);
        return ie.results.filter((lr) => Pn.has(lr));
      }
      return vt;
    }, [ie, vt, st]),
    Dn = m - 2 * mbe,
    nn = Math.max(30, Dn - 4),
    Ln = Ou.useMemo(() => {
      if (!b) return [];
      let Pn = MGf(en);
      return Array.from(Pn.entries()).map(([lr, eo]) => {
        let Kn = eo[0],
          Nt = en.indexOf(Kn),
          Ut = jt.get(Kn),
          Fn = Ut ? k2o(Ut, A) : null;
        if (eo.length === 1) {
          let Mo = L2o(Kn, {
            showProjectPath: u,
          });
          return {
            id: `log:${lr}:0`,
            value: {
              log: Kn,
              indexInFiltered: Nt,
            },
            label: buildLogLabel(Kn, nn),
            description: Fn
              ? `${Mo}
  ${Fn}`
              : Mo,
            dimDescription: true,
          };
        }
        let xi = eo.length - 1,
          jn = eo.slice(1).map((Mo, rs) => {
            let js = en.indexOf(Mo),
              Gn = jt.get(Mo),
              cr = Gn ? k2o(Gn, A) : null,
              Lt = L2o(Mo, {
                isChild: true,
                showProjectPath: u,
              });
            return {
              id: `log:${lr}:${rs + 1}`,
              value: {
                log: Mo,
                indexInFiltered: js,
              },
              label: buildLogLabel(Mo, nn, {
                isChild: true,
              }),
              description: cr
                ? `${Lt}
      ${cr}`
                : Lt,
              dimDescription: true,
            };
          }),
          So = L2o(Kn, {
            showProjectPath: u,
          });
        return {
          id: `group:${lr}`,
          value: {
            log: Kn,
            indexInFiltered: Nt,
          },
          label: buildLogLabel(Kn, nn, {
            isGroupHeader: true,
            forkCount: xi,
          }),
          description: Fn
            ? `${So}
  ${Fn}`
            : So,
          dimDescription: true,
          children: jn,
        };
      });
    }, [b, en, nn, u, jt, A]),
    Hn = Ou.useMemo(() => {
      if (b) return [];
      return en.map((Pn, lr) => {
        let Kn = DFe(Pn) + (Pn.isSidechain ? " (sidechain)" : ""),
          Nt = NVl(Kn, nn),
          Ut = QJe(Pn),
          Fn = u && Pn.projectPath ? ` \xB7 ${Pn.projectPath}` : "",
          xi = jt.get(Pn),
          jn = xi ? k2o(xi, A) : null;
        return {
          label: Nt,
          description: jn
            ? `${Ut}${Fn}
  ${jn}`
            : Ut + Fn,
          dimDescription: true,
          value: lr.toString(),
        };
      });
    }, [b, en, A, nn, u, jt]),
    kr = ee?.value.log ?? null,
    Mr = () => {
      if (!b || !kr) return "";
      let Pn = qg(kr);
      if (!Pn) return "";
      let lr = en.filter((Ut) => qg(Ut) === Pn);
      if (!(lr.length > 1)) return "";
      let Kn = oe.has(Pn);
      if (lr.indexOf(kr) > 0 || Kn)
        return Wl.jsx(ht, {
          chord: "left",
          action: "collapse",
        });
      return Wl.jsx(ht, {
        chord: "right",
        action: "expand",
      });
    },
    fe = Ou.useCallback(async () => {
      let Pn = kr ? qg(kr) : void 0;
      if (!kr || !Pn) {
        (me("list"), Z(""));
        return;
      }
      if (K.trim()) {
        if ((await Aq(Pn, K.trim(), kr.fullPath), b && s)) s();
      }
      (me("list"), Z(""));
    }, [kr, K, s, b]),
    Te = Ou.useCallback(() => {
      (me("list"),
        Ce(""),
        G("tengu_session_search_toggled", {
          enabled: false,
        }));
    }, [Ce]),
    Re = Ou.useCallback(() => {
      (me("search"),
        G("tengu_session_search_toggled", {
          enabled: true,
        }));
    }, []),
    Ne = Ou.useCallback(async () => {
      we.trim();
      return;
    }, [we, p, false, st]);
  (Ou.useEffect(() => {
    if (c === 0) return;
    (ue.current?.abort(),
      le((Pn) =>
        Pn.status === "idle"
          ? Pn
          : {
              status: "idle",
            },
      ),
      ye(false),
      Ke(null));
  }, [c]),
    Ou.useEffect(() => {
      if (ie.status !== "idle" && ie.status !== "searching") {
        if ((ie.status === "results" && ie.query !== we) || ie.status === "error")
          le({
            status: "idle",
          });
      }
    }, [we, ie]),
    Ou.useEffect(
      () => () => {
        ue.current?.abort();
      },
      [],
    ));
  let it = Ou.useRef(ie.status);
  Ou.useEffect(() => {
    let Pn = it.current;
    if (((it.current = ie.status), Pn === "searching" && ie.status === "results")) {
      if (b && Ln.length > 0) ce(Ln[0]);
      else if (!b && en.length > 0) {
        let lr = en[0];
        ce({
          id: "0",
          value: {
            log: lr,
            indexInFiltered: 0,
          },
          label: "",
        });
      }
    }
  }, [ie.status, b, Ln, en]);
  let Tt = Ou.useCallback(
      (Pn) => {
        let lr = parseInt(Pn, 10),
          eo = en[lr];
        if (!eo || he.current === lr.toString()) return;
        ((he.current = lr.toString()),
          ce({
            id: lr.toString(),
            value: {
              log: eo,
              indexInFiltered: lr,
            },
            label: "",
          }),
          de(lr + 1));
      },
      [en],
    ),
    un = Ou.useCallback(
      (Pn) => {
        ce(Pn);
        let lr = en.findIndex((eo) => qg(eo) === qg(Pn.value.log));
        if (lr >= 0) de(lr + 1);
      },
      [en],
    );
  ($r(
    "confirm:no",
    () => {
      (ue.current?.abort(),
        le({
          status: "idle",
        }),
        G("tengu_agentic_search_cancelled", {}));
    },
    {
      context: "Confirmation",
      isActive: Ee !== "preview" && ie.status === "searching",
    },
  ),
    $r(
      "confirm:no",
      () => {
        (me("list"), Z(""));
      },
      {
        context: "Settings",
        isActive: Ee === "rename" && ie.status !== "searching",
      },
    ),
    $r(
      "confirm:no",
      () => {
        (Ce(""), ye(false), r?.());
      },
      {
        context: "Confirmation",
        isActive:
          Ee !== "preview" && Ee !== "rename" && Ee !== "search" && He && ie.status !== "searching",
      },
    ));
  function ze(Pn) {
    if (Ee === "preview") return;
    if (ie.status === "searching") return;
    if (Ee === "rename");
    else if (Ee === "search") {
      if ((Ve(Pn), Pn.ctrl && Pn.key === "n")) (Pn.preventDefault(), Te());
      else if (Pn.ctrl && Pn.key === "a" && d && e.length === 0)
        (Pn.preventDefault(),
          d(),
          G("tengu_session_all_projects_toggled", {
            enabled: u,
          }));
      else if (Pn.key === "return" || Pn.key === "down") we.trim();
    } else {
      if (He) {
        if (Pn.key === "return") {
          (Pn.preventDefault(), Ne(), ye(false));
          return;
        } else if (Pn.key === "down") {
          if ((Pn.preventDefault(), ye(false), en.length === 0)) me("search");
          return;
        } else if (Pn.key === "up") {
          (Pn.preventDefault(), me("search"), ye(false));
          return;
        }
      }
      if (en.length === 0 && !He && (Pn.key === "up" || Pn.key === "down" || Pn.key === "return")) {
        (Pn.preventDefault(), me("search"));
        return;
      }
      let lr = !Pn.ctrl && !Pn.meta,
        eo = Pn.key.toLowerCase();
      if (Pn.ctrl && Pn.key === "a" && d)
        (Pn.preventDefault(),
          d(),
          G("tengu_session_all_projects_toggled", {
            enabled: u,
          }));
      else if (Pn.ctrl && Pn.key === "b") {
        Pn.preventDefault();
        let Kn = !I;
        (k(Kn),
          G("tengu_session_branch_filter_toggled", {
            enabled: !Kn,
          }));
      } else if (Pn.ctrl && Pn.key === "w" && O) {
        Pn.preventDefault();
        let Kn = !D;
        (P(Kn),
          G("tengu_session_worktree_filter_toggled", {
            enabled: !Kn,
          }));
      } else if (eo === "/" && lr)
        (Pn.preventDefault(),
          me("search"),
          ye(false),
          G("tengu_session_search_toggled", {
            enabled: true,
          }));
      else if (Pn.ctrl && Pn.key === "r" && kr)
        (Pn.preventDefault(), me("rename"), Z(""), G("tengu_session_rename_started", {}));
      else if (((Pn.key === " " && lr) || (Pn.ctrl && Pn.key === "v")) && kr && !He)
        (Pn.preventDefault(),
          ge(kr),
          me("preview"),
          G("tengu_session_preview_opened", {
            messageCount: kr.messageCount,
          }));
      else if (!Pn.defaultPrevented && lr && Pn.key.length === 1 && Pn.key !== " ")
        (Pn.preventDefault(),
          me("search"),
          ye(false),
          Ce(Pn.key),
          G("tengu_session_search_toggled", {
            enabled: true,
          }));
    }
  }
  function Mt(Pn) {
    if (Ee === "search") {
      Ze(Pn);
      return;
    }
    let lr = (Pn.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (Ee === "preview" || Ee === "rename" || ie.status === "searching" || He || !kr || !lr)
      return;
    (Pn.preventDefault(),
      me("search"),
      Ce(lr),
      G("tengu_session_search_toggled", {
        enabled: true,
      }));
  }
  let Qt = [],
    Er = !!d && !u && V,
    pt = M ?? z;
  if (Er) Qt.push(wAt.basename(pt));
  if (!I && C) Qt.push(C);
  if (O && !D && !u) {
    let Pn = B ?? z;
    if (!(Er && pt === Pn)) Qt.push(wAt.basename(Pn));
  }
  let ln = !!d && !u && !V,
    pn = (Qt.length > 0 || ln) && Ee !== "search",
    Rr = 8 + (pn ? 1 : 0),
    _o = 2,
    Xo = Math.max(1, Math.floor((t - Rr - _o) / 3));
  if (
    (Ou.useEffect(() => {
      if (!i) return;
      let Pn = Xo * 2;
      if (ae + Pn >= en.length) i(Xo * 3);
    }, [ae, Xo, en.length, i]),
    e.length === 0 && !d)
  )
    return null;
  if (Ee === "preview" && pe && b)
    return Wl.jsx(RVl, {
      log: pe,
      onExit: () => {
        (me("list"), ge(null));
      },
      onSelect: o,
    });
  return Wl.jsx(U, {
    flexDirection: "column",
    height: t - 1,
    onKeyDown: ze,
    onPaste: Mt,
    children: Wl.jsxs(Fu, {
      color: "suggestion",
      children: [
        Wl.jsx(U, {
          flexShrink: 0,
          children: Wl.jsxs(w, {
            bold: true,
            color: "suggestion",
            children: [
              "Resume session",
              Ee === "list" &&
                en.length > Xo &&
                Wl.jsxs(w, {
                  dimColor: true,
                  children: [" ", "(", ae, " of ", en.length, ")"],
                }),
              l &&
                Wl.jsx(w, {
                  dimColor: true,
                  children: " \xB7 Refreshing\u2026",
                }),
            ],
          }),
        }),
        Wl.jsx(LP, {
          query: we,
          isFocused: Ee === "search",
          isTerminalFocused: h,
          cursorOffset: Ie,
        }),
        pn &&
          (Qt.length > 0
            ? Wl.jsx(U, {
                flexShrink: 0,
                paddingLeft: 2,
                children: Wl.jsx(w, {
                  dimColor: true,
                  children: Wl.jsx(Tn, {
                    children: Qt,
                  }),
                }),
              })
            : Wl.jsx(U, {
                flexShrink: 0,
                height: 1,
              })),
        Wl.jsx(U, {
          flexShrink: 0,
          children: Wl.jsx(w, {
            children: " ",
          }),
        }),
        ie.status === "searching" &&
          Wl.jsxs(U, {
            paddingLeft: 1,
            flexShrink: 0,
            children: [
              Wl.jsx(Vu, {}),
              Wl.jsx(w, {
                children: " Searching\u2026",
              }),
            ],
          }),
        ie.status === "results" &&
          ie.results.length > 0 &&
          Wl.jsx(U, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: Wl.jsx(w, {
              dimColor: true,
              italic: true,
              children: "Claude found these results:",
            }),
          }),
        ie.status === "results" &&
          ie.results.length === 0 &&
          vt.length === 0 &&
          Wl.jsx(U, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: Wl.jsx(Fl, {
              children: "No matching sessions found.",
            }),
          }),
        ie.status === "error" &&
          vt.length === 0 &&
          Wl.jsx(U, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: Wl.jsx(Fl, {
              children: "No matching sessions found.",
            }),
          }),
        Ee === "search" &&
          Boolean(we.trim()) &&
          vt.length === 0 &&
          !Et &&
          !l &&
          ie.status === "idle" &&
          Wl.jsx(U, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: Wl.jsxs(Fl, {
              children: ['No sessions match "', we, '".'],
            }),
          }),
        Boolean(we.trim()) && p && false,
        e.length === 0 &&
          Ee === "list" &&
          ie.status === "idle" &&
          !l &&
          !we.trim() &&
          Wl.jsx(U, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: Wl.jsx(Fl, {
              hint: u
                ? void 0
                : Wl.jsx(ht, {
                    chord: "ctrl+a",
                    action: "show all projects",
                    format: {
                      modCase: "title",
                      charCase: "upper",
                    },
                  }),
              children: u ? "No conversations found." : "No conversations found in this project.",
            }),
          }),
        ie.status === "searching"
          ? null
          : Ee === "rename" && kr
            ? Wl.jsxs(U, {
                paddingLeft: 2,
                flexDirection: "column",
                children: [
                  Wl.jsx(w, {
                    bold: true,
                    children: "Rename session:",
                  }),
                  Wl.jsx(U, {
                    paddingTop: 1,
                    children: Wl.jsx(Ta, {
                      value: K,
                      onChange: Z,
                      onSubmit: fe,
                      placeholder: DFe(kr, "Enter new session name"),
                      columns: Dn - 2,
                      cursorOffset: J,
                      onChangeCursorOffset: ne,
                      showCursor: true,
                    }),
                  }),
                ],
              })
            : b
              ? Wl.jsx(PVl, {
                  nodes: Ln,
                  onSelect: (Pn) => {
                    o(Pn.value.log);
                  },
                  onFocus: un,
                  onCancel: r,
                  focusNodeId: ee?.id,
                  visibleOptionCount: Xo,
                  layout: "expanded",
                  isDisabled: Ee === "search" || He,
                  hideIndexes: false,
                  isNodeExpanded: (Pn) => {
                    if (Ee === "search" || !I) return true;
                    let lr =
                      typeof Pn === "string" && Pn.startsWith("group:") ? Pn.substring(6) : null;
                    return lr ? oe.has(lr) : false;
                  },
                  onExpand: (Pn) => {
                    let lr =
                      typeof Pn === "string" && Pn.startsWith("group:") ? Pn.substring(6) : null;
                    if (lr)
                      (re((eo) => new Set(eo).add(lr)), G("tengu_session_group_expanded", {}));
                  },
                  onCollapse: (Pn) => {
                    let lr =
                      typeof Pn === "string" && Pn.startsWith("group:") ? Pn.substring(6) : null;
                    if (lr)
                      re((eo) => {
                        let Kn = new Set(eo);
                        return (Kn.delete(lr), Kn);
                      });
                  },
                  onUpFromFirstItem: Re,
                })
              : Wl.jsx(Sr, {
                  options: Hn,
                  onChange: (Pn) => {
                    let lr = parseInt(Pn, 10),
                      eo = en[lr];
                    if (eo) o(eo);
                  },
                  visibleOptionCount: Xo,
                  onCancel: r,
                  onFocus: Tt,
                  defaultFocusValue: ee?.id.toString(),
                  layout: "expanded",
                  isDisabled: Ee === "search" || He,
                  onUpFromFirstItem: Re,
                }),
        Wl.jsx(U, {
          paddingLeft: 2,
          children: g.pending
            ? Wl.jsxs(w, {
                dimColor: true,
                children: ["Press ", g.keyName, " again to exit"],
              })
            : Ee === "rename"
              ? Wl.jsx(w, {
                  dimColor: true,
                  children: Wl.jsxs(Tn, {
                    children: [
                      Wl.jsx(ht, {
                        chord: "enter",
                        action: "save",
                      }),
                      Wl.jsx(mr, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel",
                      }),
                    ],
                  }),
                })
              : ie.status === "searching"
                ? Wl.jsx(w, {
                    dimColor: true,
                    children: Wl.jsxs(Tn, {
                      children: [
                        Wl.jsx(w, {
                          children: "Searching with Claude\u2026",
                        }),
                        Wl.jsx(mr, {
                          action: "confirm:no",
                          context: "Confirmation",
                          fallback: "Esc",
                          description: "cancel",
                        }),
                      ],
                    }),
                  })
                : He
                  ? Wl.jsx(w, {
                      dimColor: true,
                      children: Wl.jsxs(Tn, {
                        children: [
                          Wl.jsx(ht, {
                            chord: "enter",
                            action: "search",
                          }),
                          Wl.jsx(ht, {
                            chord: "down",
                            action: "skip",
                          }),
                          Wl.jsx(mr, {
                            action: "confirm:no",
                            context: "Confirmation",
                            fallback: "Esc",
                            description: "cancel",
                          }),
                        ],
                      }),
                    })
                  : Ee === "search"
                    ? Wl.jsx(w, {
                        dimColor: true,
                        children: Wl.jsxs(Tn, {
                          children: [
                            Wl.jsx(w, {
                              children: "Type to Search",
                            }),
                            e.length === 0 &&
                              d &&
                              Wl.jsx(ht, {
                                chord: "ctrl+a",
                                action: u ? "only show current repo" : "show all projects",
                                format: {
                                  modCase: "title",
                                  charCase: "upper",
                                },
                              }),
                            Wl.jsx(ht, {
                              chord: "enter",
                              action: "select",
                            }),
                            Wl.jsx(mr, {
                              action: "confirm:no",
                              context: "Confirmation",
                              fallback: "Esc",
                              description: "clear",
                            }),
                          ],
                        }),
                      })
                    : Wl.jsx(w, {
                        dimColor: true,
                        children: Wl.jsxs(Tn, {
                          children: [
                            d &&
                              Wl.jsx(ht, {
                                chord: "ctrl+a",
                                action: u ? "only show current repo" : "show all projects",
                                format: {
                                  modCase: "title",
                                  charCase: "upper",
                                },
                              }),
                            C &&
                              Wl.jsx(ht, {
                                chord: "ctrl+b",
                                action: I ? "only show current branch" : "show all branches",
                                format: {
                                  modCase: "title",
                                  charCase: "upper",
                                },
                              }),
                            O &&
                              Wl.jsx(ht, {
                                chord: "ctrl+w",
                                action: D ? "only show current worktree" : "show all worktrees",
                                format: {
                                  modCase: "title",
                                  charCase: "upper",
                                },
                              }),
                            kr &&
                              Wl.jsx(ht, {
                                chord: "space",
                                action: "preview",
                              }),
                            kr &&
                              Wl.jsx(ht, {
                                chord: "ctrl+r",
                                action: "rename",
                                format: {
                                  modCase: "title",
                                  charCase: "upper",
                                },
                              }),
                            Wl.jsx(w, {
                              children: "Type to search",
                            }),
                            Wl.jsx(mr, {
                              action: "confirm:no",
                              context: "Confirmation",
                              fallback: "Esc",
                              description: "cancel",
                            }),
                            Mr(),
                          ],
                        }),
                      }),
        }),
      ],
    }),
  });
}
function extractSearchableText(message) {
  if (message.type !== "user" && message.type !== "assistant") return "";
  let t = "message" in message ? message.message?.content : void 0;
  if (!t) return "";
  if (typeof t === "string") return t;
  if (Array.isArray(t))
    return t
      .map((n) => {
        if (typeof n === "string") return n;
        if ("text" in n && typeof n.text === "string") return n.text;
        return "";
      })
      .filter(Boolean)
      .join(" ");
  return "";
}
function PGf(e) {
  let n = (
      e.messages.length <= CGf
        ? e.messages
        : [...e.messages.slice(0, $Vl), ...e.messages.slice(-$Vl)]
    )
      .map(extractSearchableText)
      .filter(Boolean)
      .join(" "),
    o =
      `${[e.customTitle, e.aiTitle, e.summary, e.firstPrompt, e.gitBranch, e.tag, e.prNumber ? `PR #${e.prNumber}` : void 0, e.prRepository].filter(Boolean).join(" ")} ${n}`.trim();
  return o.length > OVl ? o.slice(0, OVl) : o;
}
function MGf(e) {
  let t = new Map();
  for (let n of e) {
    let r = qg(n);
    if (r) {
      let o = t.get(r);
      if (o) o.push(n);
      else t.set(r, [n]);
    }
  }
  return (
    t.forEach((n) =>
      n.sort((r, o) => new Date(o.modified).getTime() - new Date(r.modified).getTime()),
    ),
    t
  );
}
var wAt,
  Ou,
  Wl,
  vGf = 2,
  wGf = 4,
  CGf = 2000,
  $Vl = 1000,
  OVl = 50000,
  IGf = 0.3,
  xGf = 60000,
  kGf = 50;
