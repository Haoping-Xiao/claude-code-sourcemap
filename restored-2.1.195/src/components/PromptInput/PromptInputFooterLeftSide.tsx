// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F6o
// matched 2.1.88 source: src/components/PromptInput/PromptInputFooterLeftSide.tsx
// class=modified  jaccard=0.2467  score=0.4231  fileCov=0.3718
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module F6o] deps: ft, Ed, tC, rJt, gNo, M_c, _i, wOe, Ye, ps, dn, uo, er, Lo, es, uf, ggo, sa, Yf, sr, gDe, LW, B_, CH, RLe, $_c, SNo
((Xfm = R(lt(), 1)), (U6o = R(rt(), 1)), (N_c = R(se(), 1)));
function PromptInputFooterLeftSide(e) {
  let t = Idr.c(58),
    {
      exitMessage: n,
      leftArrowPending: r,
      leftArrowDetachAvailable: o,
      vimMode: s,
      hideVimModeIndicator: i,
      mode: a,
      toolPermissionContext: l,
      suppressHint: c,
      suppressHintExceptStatusline: u,
      isInputEmpty: d,
      isLoading: p,
      isExternalLoading: f,
      betweenCalls: m,
      tasksSelected: g,
      tmuxSelected: h,
      isPasting: y,
      showExpandPasteHint: b,
      isSearching: _,
      historyQuery: S,
      setHistoryQuery: A,
      historyFailedMatch: v,
      onOpenTasksDialog: C,
    } = e,
    x = u === void 0 ? c : u,
    I = f === void 0 ? false : f,
    k = m === void 0 ? true : m;
  E_c();
  let D = fLn(),
    P;
  if (t[0] !== D) ((P = rmm(D) && !vl()), (t[0] = D), (t[1] = P));
  else P = t[1];
  let O = P,
    L = L_c(p, O),
    M = C_c(),
    N;
  if (t[2] !== M || t[3] !== L.pr || t[4] !== O)
    ((N =
      O && L.pr
        ? L.pr
        : M
          ? {
              number: M.number,
              url: M.url,
              reviewState: void 0,
              kind: void 0,
            }
          : null),
      (t[2] = M),
      (t[3] = L.pr),
      (t[4] = O),
      (t[5] = N));
  else N = t[5];
  let B = N,
    $ = !B && O && L.needsAuth,
    q = Ht(Zfm),
    W;
  if (t[6] !== B || t[7] !== q)
    ((W = B ? sWt(B.url, q) : void 0), (t[6] = B), (t[7] = q), (t[8] = W));
  else W = t[8];
  Eal(W, B?.url, B?.kind);
  let V = Ho(),
    Y = B?.number,
    z = B?.url,
    K = B?.reviewState,
    Z = B?.kind,
    J = L.lastUpdated > 0 || Nre.disabled,
    ne,
    oe;
  if (
    t[9] !== Z ||
    t[10] !== Y ||
    t[11] !== K ||
    t[12] !== z ||
    t[13] !== J ||
    t[14] !== q ||
    t[15] !== V
  )
    ((ne = () => {
      V((ie) => {
        let le =
            !J &&
            ie.prStatus !== null &&
            (Y === void 0 ||
              (Y === ie.prStatus.number &&
                ie.prStatus.kind === Z &&
                K === void 0 &&
                ie.prStatus.reviewState !== void 0)),
          He =
            ie.prStatus?.number === Y &&
            ie.prStatus?.url === z &&
            ie.prStatus?.reviewState === K &&
            ie.prStatus?.kind === Z,
          ye =
            le || He
              ? ie.prStatus
              : Y !== void 0 && z !== void 0
                ? {
                    number: Y,
                    url: z,
                    reviewState: K,
                    kind: Z,
                  }
                : null,
          ue = Cdc(
            ie.footerLinks,
            lIo,
            Sal(ye, ye ? (ye.kind === "cr" ? ye.url : sWt(ye.url, q)) : void 0),
          );
        if (ye === ie.prStatus && ue === ie.footerLinks) return ie;
        return {
          ...ie,
          prStatus: ye,
          footerLinks: ue,
        };
      });
    }),
      (oe = [Y, z, K, Z, J, q, V]),
      (t[9] = Z),
      (t[10] = Y),
      (t[11] = K),
      (t[12] = z),
      (t[13] = J),
      (t[14] = q),
      (t[15] = V),
      (t[16] = ne),
      (t[17] = oe));
  else ((ne = t[16]), (oe = t[17]));
  Kz.useEffect(ne, oe);
  let re, ee;
  if (t[18] !== $ || t[19] !== V)
    ((ee = () => {
      V((ie) =>
        ie.prNeedsAuth === $
          ? ie
          : {
              ...ie,
              prNeedsAuth: $,
            },
      );
    }),
      (re = [$, V]),
      (t[18] = $),
      (t[19] = V),
      (t[20] = re),
      (t[21] = ee));
  else ((re = t[20]), (ee = t[21]));
  if ((Kz.useEffect(ee, re), n.show)) {
    let ie =
        n.action === "clear"
          ? "/clear"
          : Js() || LO("catchupReplay")
            ? "detach (session keeps running)"
            : "exit",
      le;
    if (t[22] !== n.key || t[23] !== ie)
      ((le = li.jsxs(
        w,
        {
          dimColor: true,
          children: ["Press ", n.key, " again to", " ", ie],
        },
        "exit-message",
      )),
        (t[22] = n.key),
        (t[23] = ie),
        (t[24] = le));
    else le = t[24];
    return le;
  }
  if (y) {
    let ie;
    if (t[25] === Symbol.for("react.memo_cache_sentinel"))
      ((ie = li.jsx(
        w,
        {
          dimColor: true,
          children: "Pasting\u2026",
        },
        "pasting-message",
      )),
        (t[25] = ie));
    else ie = t[25];
    return ie;
  }
  if (b && !_) {
    let ie;
    if (t[26] === Symbol.for("react.memo_cache_sentinel"))
      ((ie = li.jsx(
        w,
        {
          dimColor: true,
          children: "paste again to expand",
        },
        "expand-paste-hint",
      )),
        (t[26] = ie));
    else ie = t[26];
    return ie;
  }
  let ce;
  if (t[27] !== i || t[28] !== _ || t[29] !== s)
    ((ce = V$() && !i && s !== "NORMAL" && !_),
      (t[27] = i),
      (t[28] = _),
      (t[29] = s),
      (t[30] = ce));
  else ce = t[30];
  let ae = ce,
    de;
  if (t[31] !== v || t[32] !== S || t[33] !== _ || t[34] !== A)
    ((de =
      _ &&
      li.jsx(T_c, {
        value: S,
        onChange: A,
        historyFailedMatch: v,
      })),
      (t[31] = v),
      (t[32] = S),
      (t[33] = _),
      (t[34] = A),
      (t[35] = de));
  else de = t[35];
  let Ee;
  if (t[36] !== ae || t[37] !== s)
    ((Ee = ae
      ? li.jsxs(
          w,
          {
            dimColor: true,
            children: ["-- ", s, " --"],
          },
          "vim-indicator",
        )
      : null),
      (t[36] = ae),
      (t[37] = s),
      (t[38] = Ee));
  else Ee = t[38];
  let me = !c && !ae,
    pe = !x && !ae,
    ge;
  if (
    t[39] !== k ||
    t[40] !== I ||
    t[41] !== d ||
    t[42] !== p ||
    t[43] !== o ||
    t[44] !== r ||
    t[45] !== a ||
    t[46] !== C ||
    t[47] !== $ ||
    t[48] !== me ||
    t[49] !== pe ||
    t[50] !== g ||
    t[51] !== h ||
    t[52] !== l
  )
    ((ge = li.jsx(ModeIndicator, {
      mode: a,
      toolPermissionContext: l,
      showHint: me,
      denseShowHint: pe,
      isInputEmpty: d,
      isLoading: p,
      isExternalLoading: I,
      betweenCalls: k,
      leftArrowPending: r,
      leftArrowDetachAvailable: o,
      tasksSelected: g,
      tmuxSelected: h,
      onOpenTasksDialog: C,
      prNeedsAuth: $,
    })),
      (t[39] = k),
      (t[40] = I),
      (t[41] = d),
      (t[42] = p),
      (t[43] = o),
      (t[44] = r),
      (t[45] = a),
      (t[46] = C),
      (t[47] = $),
      (t[48] = me),
      (t[49] = pe),
      (t[50] = g),
      (t[51] = h),
      (t[52] = l),
      (t[53] = ge));
  else ge = t[53];
  let he;
  if (t[54] !== de || t[55] !== Ee || t[56] !== ge)
    ((he = li.jsxs(U, {
      justifyContent: "flex-start",
      gap: 1,
      children: [de, Ee, ge],
    })),
      (t[54] = de),
      (t[55] = Ee),
      (t[56] = ge),
      (t[57] = he));
  else he = t[57];
  return he;
}
function Zfm(e) {
  return e.settings?.prUrlTemplate;
}
function ModeIndicator({
  mode: e,
  toolPermissionContext: t,
  showHint: n,
  denseShowHint: r,
  isInputEmpty: o,
  isLoading: s,
  isExternalLoading: i,
  betweenCalls: a,
  leftArrowPending: l,
  leftArrowDetachAvailable: c,
  tasksSelected: u,
  tmuxSelected: d,
  onOpenTasksDialog: p,
  prNeedsAuth: f,
}) {
  let { columns: m } = br();
  t6e();
  let g = at("tengu_copper_thistle", false),
    h = Uu("chat:cycleMode", "Chat", "shift+tab"),
    y = Ht((Be) => Be.tasks),
    b = Ht((Be) => Be.taskDecorations),
    _ = Ht(
      (Be) =>
        (Be.footerSelection === "tasks" && Be.coordinatorTaskIndex >= 0) ||
        Be.footerSelection === "workflows",
    ),
    S = Ht((Be) => Be.footerSelection !== null),
    A = Ht((Be) => Be.viewSelectionMode),
    v = Ht((Be) => Be.viewingAgentTaskId),
    C = Ht((Be) => Be.expandedView),
    x = k_c({
      excludeKeyed: g,
    }),
    I = Ht((Be) => false),
    k = $me(),
    D = P0((Be) => Be.voiceState),
    P = P0((Be) => Be.voiceWarmingUp),
    O = q5i(),
    L = Z_e().getState,
    M = Jfm?.isCoordinatorMode() === true,
    N = Kz.useMemo(() => On(Object.values(y), PAt), [y]),
    B = $Vt(),
    $ = B !== void 0 && B.length > 0,
    q = Uu("chat:cancel", "Chat", "esc").toLowerCase(),
    W = Uu("app:toggleTodos", "Global", "ctrl+t"),
    V = Uu("voice:pushToTalk", "Chat", "space"),
    [Y] = Kz.useState(() => (Dt().voiceFooterHintSeenCount ?? 0) < Qfm),
    z = Kz.useRef(false);
  Kz.useEffect(() => {
    {
      if (!k || !Y) return;
      if (z?.current) return;
      if (z) z.current = true;
      let Be = (Dt().voiceFooterHintSeenCount ?? 0) + 1;
      gn((Me) => {
        if ((Me.voiceFooterHintSeenCount ?? 0) >= Be) return Me;
        return {
          ...Me,
          voiceFooterHintSeenCount: Be,
        };
      });
    }
  }, [k, Y, z]);
  let K = Sd();
  if (e === "bash")
    return li.jsx(w, {
      color: "bashBorder",
      children: "! for shell mode",
    });
  let Z = t?.mode,
    J = !tws(Z),
    ne = v ? y[v] : void 0,
    oe = A === "viewing-agent" && ne?.type === "in_process_teammate",
    re = oe && ne != null && ne.status !== "running",
    ee = N > 0,
    ce = (M || J ? 1 : 0) + (ee ? 1 : 0),
    ae =
      !g && f && !x.some((Be) => Be.key === lIo)
        ? li.jsx(
            w,
            {
              dimColor: true,
              children: "gh auth login",
            },
            "pr-status",
          )
        : null,
    de = null,
    Ee = ce < 2 && !((ae || x.length > 0) && m < 60 + (de ? 8 : 0)) && !(de && m < 56),
    me = Ju(),
    pe = me ? LO("setPermissionMode") && !me.viewerOnly : !vl(),
    ge = !K && v === void 0 && omm(m);
  if (_)
    return li.jsx(U, {
      height: 1,
      overflow: "hidden",
      children: li.jsx(Wyc, {}),
    });
  if (g) {
    let Be = N,
      Me = Be >= 2,
      Ue = N >= 1,
      tt = !!Z && J && pe,
      bt = false,
      Ke = Nme(y, b, v).length > 0 || (v !== void 0 && kZ(y[v])),
      Et = c && !oe && o && !S,
      ct = k && D === "idle" && Y && n,
      Je = "none";
    if (k && P) Je = "warmup";
    else if (l && Et && !K) Je = "agents";
    else if (re) Je = "interrupt";
    else if (!r) Je = "none";
    else if (s && !O) Je = Et && !K ? "interrupt_agents" : "interrupt";
    else if ((Ue || Ke) && !_) Je = "manage";
    else if ($) Je = "ctrl_t";
    else if (Et && !K) Je = "agents";
    else if (ct) Je = "voice";
    else if (tt) Je = "cycle";
    else Je = n && !K ? "shortcuts" : "none";
    let gt = C === "tasks" ? "hide tasks" : "show tasks",
      st =
        Je === "cycle"
          ? li.jsxs(w, {
              dimColor: true,
              children: [
                " ",
                li.jsx(ht, {
                  chord: h,
                  action: "cycle",
                  parens: true,
                  format: {
                    keyCase: "lower",
                  },
                }),
              ],
            })
          : null,
      xt =
        Je === "manage" && Ue
          ? li.jsxs(w, {
              dimColor: true,
              children: [
                " ",
                u
                  ? li.jsx(ht, {
                      chord: "enter",
                      action: "view tasks",
                      parens: true,
                    })
                  : li.jsx(ht, {
                      chord: "down",
                      action: "manage",
                      parens: true,
                    }),
              ],
            })
          : null,
      vt = null;
    if (Je === "warmup") vt = li.jsx(u7e, {}, "voice-warmup");
    else if (Je === "manage" && !Ue)
      vt = li.jsx(w, {
        dimColor: true,
        children: u
          ? li.jsx(ht, {
              chord: "enter",
              action: "view tasks",
            })
          : li.jsx(ht, {
              chord: "down",
              action: "manage",
            }),
      });
    else if (Je === "interrupt" || Je === "interrupt_agents")
      vt = li.jsxs(w, {
        dimColor: true,
        children: [
          li.jsx(ht, {
            chord: q,
            action: re ? "return to team lead" : "interrupt",
            format: {
              keyCase: "lower",
            },
          }),
          Je === "interrupt_agents" &&
            li.jsxs(li.Fragment, {
              children: [" \xB7 ", CG, " for agents"],
            }),
        ],
      });
    else if (Je === "ctrl_t")
      vt = li.jsx(w, {
        dimColor: true,
        children: li.jsx(ht, {
          chord: W,
          action: gt,
          format: {
            keyCase: "lower",
          },
        }),
      });
    else if (Je === "agents")
      vt = li.jsxs(w, {
        dimColor: true,
        children: [CG, " ", l ? "again " : "", "for agents"],
      });
    else if (Je === "voice")
      vt = li.jsxs(w, {
        dimColor: true,
        children: ["hold ", V, " to speak"],
      });
    else if (Je === "shortcuts")
      vt = li.jsx(w, {
        dimColor: true,
        children: "? for shortcuts",
      });
    let jt =
        tt && Z
          ? li.jsxs(
              w,
              {
                color: BB(Z),
                children: [
                  li.jsxs(w, {
                    "aria-hidden": true,
                    children: [Ret(Z), " "],
                  }),
                  _Y(Z).toLowerCase(),
                  " on",
                  st,
                ],
              },
              "mode",
            )
          : null,
      en = null,
      Dn = Ue
        ? Me
          ? li.jsx(tmm, {
              count: Be,
              selected: u,
              onClick: p,
            })
          : li.jsx(O6o, {
              tasksSelected: u,
              onOpenDialog: p,
            })
        : null;
    if (!jt && !en && !Dn && x.length === 0 && !vt)
      return Ns()
        ? li.jsx(w, {
            children: " ",
          })
        : null;
    let nn = Dn || x.length > 0 || vt;
    return li.jsxs(U, {
      height: 1,
      overflow: "hidden",
      children: [
        jt &&
          li.jsxs(U, {
            flexShrink: 0,
            children: [
              jt,
              (en || nn) &&
                li.jsx(w, {
                  dimColor: true,
                  children: " \xB7 ",
                }),
            ],
          }),
        en &&
          li.jsxs(U, {
            flexShrink: 0,
            children: [
              en,
              nn &&
                li.jsx(w, {
                  dimColor: true,
                  children: " \xB7 ",
                }),
            ],
          }),
        Dn &&
          li.jsxs(U, {
            flexShrink: 0,
            children: [
              Dn,
              xt,
              (x.length > 0 || vt) &&
                li.jsx(w, {
                  dimColor: true,
                  children: " \xB7 ",
                }),
            ],
          }),
        x.map((Ln, Hn) =>
          li.jsxs(
            U,
            {
              flexShrink: 0,
              children: [
                li.jsx(B_c, {
                  link: Ln,
                }),
                (Hn < x.length - 1 || !!vt) &&
                  li.jsx(w, {
                    dimColor: true,
                    children: " \xB7 ",
                  }),
              ],
            },
            Ln.url,
          ),
        ),
        vt &&
          li.jsx(w, {
            wrap: "truncate",
            children: vt,
          }),
        null,
      ],
    });
  }
  let he =
      Z && J && pe
        ? li.jsxs(
            w,
            {
              color: BB(Z),
              children: [
                li.jsxs(w, {
                  "aria-hidden": true,
                  children: [Ret(Z), " "],
                }),
                _Y(Z).toLowerCase(),
                " on",
                Ee &&
                  li.jsxs(w, {
                    dimColor: true,
                    children: [
                      " ",
                      li.jsx(ht, {
                        chord: h,
                        action: "cycle",
                        parens: true,
                        format: {
                          keyCase: "lower",
                        },
                      }),
                    ],
                  }),
              ],
            },
            "mode",
          )
        : null,
    ie = x.map((Be) =>
      li.jsx(
        B_c,
        {
          link: Be,
        },
        Be.key ?? Be.url,
      ),
    ),
    le = [...[]],
    He = n ? getSpinnerHintParts(s, q, W, $, C, O) : [];
  if (re)
    le.push(
      li.jsx(
        w,
        {
          dimColor: true,
          children: li.jsx(ht, {
            chord: q,
            action: "return to team lead",
            format: {
              keyCase: "lower",
            },
          }),
        },
        "esc-return",
      ),
    );
  else if (n) le.push(...He);
  let ye =
      (Js() || da()) && c && o && !S && !K
        ? li.jsxs(
            w,
            {
              dimColor: true,
              children: [CG, " for agents"],
            },
            "bg-detach",
          )
        : null,
    we =
      !oe &&
      o &&
      !S &&
      DXn(
        Cbt({
          isBg: Js(),
          isLoading: s,
          isExternalLoading: i,
          betweenCalls: a,
          inFlight: {
            count: 0,
            kinds: [],
          },
        }),
      ) &&
      Dt().leftArrowOpensAgents !== false &&
      !K
        ? li.jsxs(
            w,
            {
              dimColor: true,
              children: [CG, " ", l ? "again " : "", "for agents"],
            },
            "fg-agents",
          )
        : null,
    Ce = Nme(y, b, v).length > 0 || (v !== void 0 && kZ(y[v])),
    Ie = ee
      ? li.jsx(O6o, {
          tasksSelected: u,
          onOpenDialog: p,
        })
      : null;
  if (le.length === 0 && !Ie && !he && !ae && ie.length === 0 && !ye && n) {
    if (!K)
      le.push(
        li.jsx(
          w,
          {
            dimColor: true,
            children: "? for shortcuts",
          },
          "shortcuts-hint",
        ),
      );
  }
  if (we) le.push(we);
  let Ve = Dt().copyOnSelect ?? true,
    Ze = O && (!Ve || yb());
  if (k && P) le.push(li.jsx(u7e, {}, "voice-warmup"));
  else if (Ns() && Ze) {
    let Be = Vt() === "macos",
      Me = Be && (L()?.lastPressHadAlt ?? false);
    le.push(
      li.jsx(
        w,
        {
          dimColor: true,
          children: li.jsxs(Tn, {
            children: [
              !Ve &&
                li.jsx(ht, {
                  chord: "ctrl+c",
                  action: "copy",
                }),
              yb() &&
                (Me
                  ? li.jsx(w, {
                      children: "set macOptionClickForcesSelection in VS Code settings",
                    })
                  : li.jsxs(w, {
                      children: [Be ? "option+click" : "shift+click", " to native select"],
                    })),
            ],
          }),
        },
        "selection-copy",
      ),
    );
  } else if (le.length > 0 && n && k && D === "idle" && He.length === 0 && Y)
    le.push(
      li.jsxs(
        w,
        {
          dimColor: true,
          children: ["hold ", V, " to speak"],
        },
        "voice-hint",
      ),
    );
  if ((Ie || Ce) && n && !_)
    le.push(
      li.jsx(
        w,
        {
          dimColor: true,
          children: u
            ? li.jsx(ht, {
                chord: "enter",
                action: "view tasks",
              })
            : li.jsx(ht, {
                chord: "down",
                action: "manage",
              }),
        },
        "manage-tasks",
      ),
    );
  if (le.length === 0 && !Ie && !he && !de && !ae && ie.length === 0 && !ye)
    return Ns()
      ? li.jsx(w, {
          children: " ",
        })
      : null;
  return li.jsxs(U, {
    height: 1,
    overflow: "hidden",
    children: [
      he &&
        li.jsxs(U, {
          flexShrink: 0,
          children: [
            he,
            (de || ye || ae || ie.length > 0 || Ie || le.length > 0) &&
              li.jsx(w, {
                dimColor: true,
                children: " \xB7 ",
              }),
          ],
        }),
      de &&
        li.jsxs(U, {
          flexShrink: 0,
          children: [
            de,
            (ye || ae || ie.length > 0 || Ie || le.length > 0) &&
              li.jsx(w, {
                dimColor: true,
                children: " \xB7 ",
              }),
          ],
        }),
      ye &&
        li.jsxs(U, {
          flexShrink: 0,
          children: [
            ye,
            (ae || ie.length > 0 || Ie || le.length > 0) &&
              li.jsx(w, {
                dimColor: true,
                children: " \xB7 ",
              }),
          ],
        }),
      ae &&
        li.jsxs(U, {
          flexShrink: 0,
          children: [
            ae,
            (ie.length > 0 || Ie || le.length > 0) &&
              li.jsx(w, {
                dimColor: true,
                children: " \xB7 ",
              }),
          ],
        }),
      ie.length > 0 &&
        li.jsxs(U, {
          flexShrink: 0,
          children: [
            li.jsx(Tn, {
              children: ie,
            }),
            (Ie || le.length > 0) &&
              li.jsx(w, {
                dimColor: true,
                children: " \xB7 ",
              }),
          ],
        }),
      Ie &&
        li.jsxs(U, {
          flexShrink: 0,
          children: [
            Ie,
            le.length > 0 &&
              li.jsx(w, {
                dimColor: true,
                children: " \xB7 ",
              }),
          ],
        }),
      le.length > 0 &&
        li.jsx(w, {
          wrap: "truncate",
          children: li.jsx(Tn, {
            children: le,
          }),
        }),
    ],
  });
}
function getSpinnerHintParts(e, t, n, r, o, s) {
  let i = o === "tasks" ? "hide tasks" : "show tasks",
    a = r;
  return [
    ...(e && !s
      ? [
          li.jsx(
            w,
            {
              dimColor: true,
              children: li.jsx(ht, {
                chord: t,
                action: "interrupt",
                format: {
                  keyCase: "lower",
                },
              }),
            },
            "esc",
          ),
        ]
      : []),
    ...(a
      ? [
          li.jsx(
            w,
            {
              dimColor: true,
              children: li.jsx(ht, {
                chord: n,
                action: i,
                format: {
                  keyCase: "lower",
                },
              }),
            },
            "toggle-tasks",
          ),
        ]
      : []),
  ];
}
function rmm(e) {
  if (Js() && e === "unknown") return false;
  return Dt().prStatusFooterEnabled ?? true;
}
function B_c(e) {
  let t = Idr.c(17),
    { link: n } = e,
    r;
  if (t[0] !== n.prefix)
    ((r =
      n.prefix !== void 0 &&
      li.jsxs(li.Fragment, {
        children: [
          li.jsx(w, {
            dimColor: true,
            children: n.prefix,
          }),
          " ",
        ],
      })),
      (t[0] = n.prefix),
      (t[1] = r));
  else r = t[1];
  let o = !n.color,
    s;
  if (t[2] !== n.color || t[3] !== n.label || t[4] !== o)
    ((s = li.jsx(w, {
      color: n.color,
      dimColor: o,
      children: n.label,
    })),
      (t[2] = n.color),
      (t[3] = n.label),
      (t[4] = o),
      (t[5] = s));
  else s = t[5];
  let i = !n.color,
    a;
  if (t[6] !== n.color || t[7] !== n.label || t[8] !== i)
    ((a = li.jsx(w, {
      color: n.color,
      dimColor: i,
      underline: true,
      children: n.label,
    })),
      (t[6] = n.color),
      (t[7] = n.label),
      (t[8] = i),
      (t[9] = a));
  else a = t[9];
  let l;
  if (t[10] !== n.url || t[11] !== s || t[12] !== a)
    ((l = li.jsx(xs, {
      url: n.url,
      fallback: s,
      assumeSupport: false,
      children: a,
    })),
      (t[10] = n.url),
      (t[11] = s),
      (t[12] = a),
      (t[13] = l));
  else l = t[13];
  let c;
  if (t[14] !== r || t[15] !== l)
    ((c = li.jsxs(w, {
      children: [r, l],
    })),
      (t[14] = r),
      (t[15] = l),
      (t[16] = c));
  else c = t[16];
  return c;
}
function omm(e) {
  return Ns() && e >= O_c;
}
var Idr,
  Kz,
  li,
  Jfm,
  Qfm = 3,
  tmm;
