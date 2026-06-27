// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tzo
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=modified  jaccard=0.2744  score=0.4487  fileCov=0.4139
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tzo] deps: context/notifications.tsx, utils/mcpInstructionsDelta.ts, tools/AgentTool/agentColorManager.ts, commands/color/color.ts, utils/plugins/installCounts.ts, utils/swarm/teammateLayoutManager.ts, utils/swarm/backends/detection.ts, utils/concurrentSessions.ts, utils/teammate.ts, components/design-system/ThemeProvider.tsx
GTt = R(rt(), 1);
function PromptInput({
  debug: e,
  ideSelection: t,
  toolPermissionContext: n,
  setToolPermissionContext: r,
  apiKeyStatus: o,
  commands: s,
  agents: i,
  isLoading: a,
  betweenCalls: l = true,
  isExternalLoading: c = false,
  verbose: u,
  messagesRef: d,
  hasMessages: p,
  hasAssistantMessage: f,
  lastAssistantMessageId: m,
  tokenUsage: g,
  onInputChange: h,
  mode: y,
  onModeChange: b,
  stashedPrompt: _,
  setStashedPrompt: S,
  submitCount: A,
  onShowMessageSelector: v,
  mcpClients: C,
  pastedContents: x,
  setPastedContents: I,
  showBashesDialog: k,
  setShowBashesDialog: D,
  onExit: P,
  onLeftArrowOnEmpty: O,
  onLeftArrowOnEmptyTimeout: L,
  getToolUseContext: M,
  onSubmit: N,
  onAgentSubmit: B,
  onDismissSideQuestion: $,
  isSideQuestionVisible: q,
  onInputOverlayActiveChange: W,
  onVimEditingChange: V,
  onInputOwnsEscapeChange: Y,
  initialVimMode: z,
  onVimModeChange: K,
  hasSuppressedDialogs: Z,
  isLocalJSXCommandActive: J = false,
  insertTextRef: ne,
  voiceInterimRange: oe,
  sessionEnvVars: re,
}) {
  let ee = jQn(),
    ce = kH(),
    ae = pbe() || J,
    [de, Ee] = Po.useState(z ?? "INSERT");
  Po.useEffect(() => K?.(de), [de, K]);
  let me = Po.useRef(false),
    pe = Po.useCallback((Ot) => {
      ((me.current = false), Ee(Ot));
    }, []),
    ge = V$(),
    [he, ie] = Po.useState(false),
    [le, He] = Po.useState(false),
    ye = he || le;
  Po.useEffect(() => (W(ye), () => W(false)), [ye, W]);
  let ue = ge && de !== "NORMAL";
  Po.useEffect(() => (V(ue), () => V(false)), [ue, V]);
  let [we, Ce] = Po.useState(false),
    [Ie, Ve] = Po.useState({
      show: false,
    }),
    [Ze, Be] = Po.useState(false),
    [Me, Ue] = Po.useState(ee.length),
    tt = Po.useRef(Me);
  tt.current = Me;
  let bt = Po.useRef(x);
  bt.current = x;
  let Ke = Po.useRef(Promise.resolve()),
    Et = Po.useRef(ee);
  if (ee !== Et.current) (Ue(ee.length), (Et.current = ee));
  let ct = Po.useCallback(
      (Ot) => {
        ((Et.current = Ot), h(Ot));
      },
      [h],
    ),
    Je = Po.useRef(null);
  if (ne)
    ne.current = {
      cursorOffset: Me,
      submit: (Ot, Mn) => void Je.current?.(Ot, Mn),
      insert: (Ot) => {
        let Eo = Me === ee.length && ee.length > 0 && !/\s$/.test(ee) ? " " + Ot : Ot,
          wa = ee.slice(0, Me) + Eo + ee.slice(Me);
        ((Et.current = wa), h(wa), Ue(Me + Eo.length));
      },
      setInputWithCursor: (Ot, Mn) => {
        ((Et.current = Ot), h(Ot), Ue(Mn));
      },
    };
  let gt = Dc(),
    st = Ho(),
    xt = Ht((Ot) => Ot.queueEditIndex),
    vt = Po.useCallback(
      (Ot) => {
        st((Mn) =>
          Mn.queueEditIndex === Ot
            ? Mn
            : {
                ...Mn,
                queueEditIndex: Ot,
              },
        );
      },
      [st],
    ),
    jt = Po.useRef(ee);
  Po.useEffect(() => {
    if (jt.current === ee) return;
    if (((jt.current = ee), gt.getState().queueEditIndex !== null)) vt(null);
  }, [ee, vt, gt]);
  let en = $T(),
    Dn = Ht((Ot) => Ot.tasks),
    nn = Ht((Ot) => Ot.workflowDetail),
    Ln = nn?.taskId;
  Po.useEffect(() => {
    if (Ln === void 0 || Dn[Ln]) return;
    st((Ot) =>
      Ot.workflowDetail === void 0
        ? Ot
        : {
            ...Ot,
            workflowDetail: void 0,
          },
    );
  }, [Ln, Dn, st]);
  let { columns: Hn, rows: kr } = br(),
    fe =
      Ht(
        (Ot) =>
          Ot.replBridgeError === void 0 &&
          Ot.replBridgeConnected &&
          (Ot.replBridgeExplicit || Ot.replBridgeReconnecting),
      ) &&
      Hn >= V6o &&
      xC(),
    Te = Ht((Ot) => false),
    Re = false,
    Ne = Ht((Ot) => false),
    it = Ht((Ot) => Object.keys(Ot.frameUrls).length > 0),
    Tt = it && WRe(),
    un = Ht((Ot) => Ot.teamContext),
    ze = Mme();
  Po.useEffect(() => {
    if (xt === null) return;
    let Ot = On(ze, XW);
    if (Ot === 0) vt(null);
    else if (xt > Ot - 1) vt(Ot - 1);
  }, [ze, xt, vt]);
  let Mt = Ht((Ot) => Ot.promptSuggestion),
    Qt = Ht((Ot) => Ot.speculation),
    Er = Ht((Ot) => Ot.speculationSessionTimeSavedMs),
    pt = Ht((Ot) => Ot.viewingAgentTaskId),
    ln = Ht((Ot) => Ot.viewSelectionMode),
    pn =
      ue ||
      ye ||
      y !== "prompt" ||
      xt !== null ||
      (!Jj() && ze.some(XW)) ||
      !!q ||
      Qt.status === "active";
  Po.useEffect(() => (Y?.(pn), () => Y?.(false)), [pn, Y]);
  let ir = Ht((Ot) => Ot.isBriefOnly) && !pt,
    Rr = Ht((Ot) => Ot.mainLoopModel),
    _o = Ht((Ot) => Ot.mainLoopModelForSession),
    Xo = Ht((Ot) => Ot.thinkingEnabled),
    Pn = Ht((Ot) => (sc() ? Ot.fastMode : false)),
    lr = Ht((Ot) => Ot.effortValue),
    eo = Ht((Ot) => Ot.ultracode),
    Kn = cOe(gt.getState()),
    Nt = Kn?.identity.agentName,
    Ut = Kn?.identity.color && Ky.includes(Kn.identity.color) ? Kn.identity.color : void 0,
    Fn = gYt(gt.getState()),
    xi = Fn.type === "leader" ? void 0 : (gt.getState().transcripts[Fn.task.id]?.messages ?? Ymm),
    jn = Po.useMemo(() => (xi ? Zmm(xi) : void 0), [xi]),
    So = Po.useMemo(() => {
      if (Kn)
        return {
          ...n,
          mode: Kn.permissionMode,
        };
      return n;
    }, [Kn, n]),
    {
      historyQuery: Mo,
      setHistoryQuery: rs,
      historyMatch: js,
      historyFailedMatch: Gn,
      handleKeyDown: cr,
      openSearch: Lt,
    } = Vhc(
      (Ot) => {
        (I(Ot.pastedContents), NC(Ot.display));
      },
      ee,
      ct,
      Ue,
      Me,
      b,
      y,
      he,
      ie,
      I,
      x,
    ),
    En = Po.useRef(-1);
  if (En.current === -1) En.current = Qmm(d.current);
  let Sn = Po.useRef(false),
    [Jn, Qn] = Po.useState(false),
    gr = Ht((Ot) => Ot.coordinatorTaskIndex),
    fo = Ht((Ot) => Ot.taskDecorations),
    cs = Po.useCallback(
      (Ot) =>
        st((Mn) => {
          let Eo = typeof Ot === "function" ? Ot(Mn.coordinatorTaskIndex) : Ot;
          if (Eo === Mn.coordinatorTaskIndex) return Mn;
          return {
            ...Mn,
            coordinatorTaskIndex: Eo,
          };
        }),
      [st],
    ),
    Gs = Adr(),
    la = Po.useMemo(() => Object.values(Dn).some(PAt), [Dn]),
    Fi = la ? -1 : 0,
    xn = Po.useMemo(() => Nme(Dn, fo, pt).map((Ot) => Ot.id), [Dn, fo, pt]),
    nr = Po.useRef(xn);
  Po.useEffect(() => {
    let Ot = nr.current;
    nr.current = xn;
    let Mn = Fyc(gr, Ot, xn);
    if (Mn !== gr) cs(Mn);
    else if (gr >= Gs) cs(Math.max(Fi, Gs - 1));
    else if (gr < Fi) cs(Fi);
  }, [xn, Gs, gr, Fi, cs]);
  let [Yn, Xn] = Po.useState(false),
    [Jr, zr] = Po.useState(false),
    to = ks(),
    vs = Po.useRef(null);
  Po.useEffect(
    () => () => {
      if (vs.current) vs.current();
    },
    [],
  );
  let [bs, Da] = Po.useState(false),
    [Qs, To] = Po.useState(false),
    [ji, us] = Po.useState(false),
    [X, Se] = Po.useState(false),
    [qe, ot] = Po.useState(false),
    [zt, cn] = Po.useState(false),
    [hr, Tr] = Po.useState(null),
    Br = Po.useRef(null);
  Po.useEffect(
    () => () => {
      if (Br.current) (Br.current(), (Br.current = null));
    },
    [],
  );
  let fi = Po.useMemo(
      () =>
        hr !== null && !Kn
          ? {
              ...So,
              mode: "auto",
            }
          : So,
      [So, hr, Kn],
    ),
    oi = Po.useMemo(() => Pen(Dn), [Dn]),
    Pa = Gs > 0 || la,
    nc = oi.length > 0 && y === "prompt" && !Ie.show && !Yn,
    Qp = Po.useMemo(
      () =>
        [
          Pa && "tasks",
          nc && "workflows",
          Re && "tmux",
          Ne && "bagel",
          fe && "bridge",
          Tt && "frame",
        ].filter(Boolean),
      [Pa, nc, Re, Ne, fe, Tt],
    ),
    sd = Ht((Ot) => Ot.workflowFooterIndex),
    ca = Po.useCallback(
      (Ot) =>
        st((Mn) => {
          let Eo = typeof Ot === "function" ? Ot(Mn.workflowFooterIndex) : Ot;
          if (Eo === Mn.workflowFooterIndex) return Mn;
          return {
            ...Mn,
            workflowFooterIndex: Eo,
          };
        }),
      [st],
    ),
    _p = Po.useMemo(() => oi.map((Ot) => Ot.id), [oi]),
    bg = Po.useRef(_p);
  Po.useEffect(() => {
    let Ot = bg.current;
    bg.current = _p;
    let Mn = Ot[sd];
    if (Mn !== void 0) {
      let Eo = _p.indexOf(Mn);
      if (Eo !== -1 && Eo !== sd) {
        ca(Eo);
        return;
      }
    }
    if (sd >= _p.length) ca(Math.max(0, _p.length - 1));
  }, [_p, sd, ca]);
  let C_ = Ht((Ot) => Ot.footerSelection),
    Xm = C_ && Qp.includes(C_) ? C_ : null;
  Po.useEffect(() => {
    if (C_ && !Xm)
      st((Ot) =>
        Ot.footerSelection === null
          ? Ot
          : {
              ...Ot,
              footerSelection: null,
              frameExpanded: false,
            },
      );
  }, [C_, Xm, st]);
  let Zy = Xm === "tasks",
    dd = Xm === "workflows",
    Ch = Xm === "tmux",
    kS = Xm === "bagel",
    Pb = Xm === "bridge",
    ay = Xm === "frame";
  function dl(Ot) {
    if (
      (st((Mn) => {
        if (Mn.footerSelection === Ot) return Mn;
        if (Ot === "frame")
          return {
            ...Mn,
            footerSelection: Ot,
            frameNavPath: Object.keys(Mn.frameUrls).at(-1) ?? null,
            frameExpanded: false,
          };
        if (Mn.footerSelection === "frame")
          return {
            ...Mn,
            footerSelection: Ot,
            frameExpanded: false,
          };
        return {
          ...Mn,
          footerSelection: Ot,
        };
      }),
      Ot === "tasks")
    )
      cs(Fi);
    if (Ot === "workflows") ca(0);
  }
  function nb(Ot, Mn = false) {
    let Eo = Xm ? Qp.indexOf(Xm) : -1,
      wa = Qp[Eo + Ot];
    if (wa) {
      if ((dl(wa), wa === "tasks" && Ot < 0 && Gs > 0)) cs(Gs - 1);
      if (wa === "workflows" && Ot < 0) ca(Math.max(0, oi.length - 1));
      return true;
    }
    if (Ot < 0 && Mn) return (dl(null), true);
    return false;
  }
  let {
      suggestion: KT,
      markAccepted: rh,
      logOutcomeAtSubmission: Jm,
      markShown: ly,
    } = Xhc({
      inputValue: ee,
      isAssistantResponding: a,
    }),
    Cd = Po.useMemo(
      () => (he && js ? BU(typeof js === "string" ? js : js.display) : ee),
      [he, js, ee],
    ),
    Ji = Po.useMemo(() => kCn(Cd), [Cd]),
    oh = Ht((Ot) => Ot.ultraplanSessionUrl),
    Sg = Ht((Ot) => Ot.ultraplanLaunching),
    rb = Po.useMemo(() => (tme() && !oh && !Sg ? $Zn(Cd) : []), [Cd, oh, Sg]),
    HR = Po.useMemo(() => (W6() ? g0l(Cd) : []), [Cd]),
    TE = Po.useMemo(() => (JS() && Fkn() ? XMo(Cd) : []), [Cd]),
    [RA, mx] = Po.useState(false),
    YT = Po.useRef(false),
    Ih = Uu("chat:workflowKeywordToggle", "Chat", "alt+w"),
    XT = Po.useMemo(() => q$o(Cd), [Cd]),
    Wn = Po.useMemo(
      () =>
        wor(Cd).filter((Mn) => {
          let Eo = Cd.slice(Mn.start + 1, Mn.end);
          return y_t(Eo, s);
        }),
      [Cd, s],
    ),
    Cs = Po.useMemo(() => [], [Cd]),
    Ya = Po.useSyncExternalStore(fyc, gyc),
    Ki = Po.useMemo(() => (fdr(gt.getState().mcp.clients) ? hyc(Cd) : []), [Cd, gt.getState]),
    Yc = Po.useMemo(() => {
      if (!el()) return [];
      if (!un?.teammates) return [];
      let Ot = [],
        Mn = un.teammates;
      if (!Mn) return Ot;
      let Eo = /(^|\s)@([\w-]+)/g,
        wa = Object.values(Mn),
        pc;
      while ((pc = Eo.exec(Cd)) !== null) {
        let Rp = pc[1] ?? "",
          mt = pc.index + Rp.length,
          Vn = pc[0].trimStart(),
          Bn = pc[2],
          Nr = wa.find((Ur) => Ur.name === Bn);
        if (Nr?.color) {
          let Ur = C$[Nr.color];
          if (Ur)
            Ot.push({
              start: mt,
              end: mt + Vn.length,
              themeColor: Ur,
            });
        }
      }
      return Ot;
    }, [Cd, un]),
    Yl = Po.useMemo(
      () =>
        jM(Cd)
          .filter((Ot) => Ot.match.startsWith("[Image"))
          .map((Ot) => ({
            start: Ot.index,
            end: Ot.index + Ot.match.length,
          })),
      [Cd],
    ),
    dc = Yl.some((Ot) => Ot.start === Me);
  Po.useEffect(() => {
    let Ot = Yl.find((Mn) => Me > Mn.start && Me < Mn.end);
    if (Ot) {
      let Mn = (Ot.start + Ot.end) / 2;
      Ue(Me < Mn ? Ot.start : Ot.end);
    }
  }, [Me, Yl]);
  let et = Po.useMemo(() => {
      let Ot = [];
      for (let Mn of Yl)
        if (Me === Mn.start)
          Ot.push({
            start: Mn.start,
            end: Mn.end,
            color: void 0,
            inverse: true,
            priority: 8,
          });
      if (he && js && !Gn)
        Ot.push({
          start: Me,
          end: Me + Mo.length,
          color: "warning",
          priority: 20,
        });
      for (let Mn of XT)
        Ot.push({
          start: Mn.start,
          end: Mn.end,
          color: "warning",
          priority: 15,
        });
      for (let Mn of Wn)
        Ot.push({
          start: Mn.start,
          end: Mn.end,
          color: "suggestion",
          priority: 5,
        });
      for (let Mn of Cs)
        Ot.push({
          start: Mn.start,
          end: Mn.end,
          color: "suggestion",
          priority: 5,
        });
      for (let Mn of Ki)
        Ot.push({
          start: Mn.start,
          end: Mn.end,
          color: "suggestion",
          priority: 5,
        });
      for (let Mn of Yc)
        Ot.push({
          start: Mn.start,
          end: Mn.end,
          color: Mn.themeColor,
          priority: 5,
        });
      if (oe)
        Ot.push({
          start: oe.start,
          end: oe.end,
          color: void 0,
          dimColor: true,
          priority: 1,
        });
      if (B4e())
        for (let Mn of Ji)
          for (let Eo = Mn.start; Eo < Mn.end; Eo++)
            Ot.push({
              start: Eo,
              end: Eo + 1,
              color: q9(Eo - Mn.start),
              shimmerColor: q9(Eo - Mn.start, true),
              priority: 10,
            });
      if (tme())
        for (let Mn of rb)
          for (let Eo = Mn.start; Eo < Mn.end; Eo++)
            Ot.push({
              start: Eo,
              end: Eo + 1,
              color: q9(Eo - Mn.start),
              shimmerColor: q9(Eo - Mn.start, true),
              priority: 10,
            });
      if (JS() && !RA)
        for (let Mn of TE)
          for (let Eo = Mn.start; Eo < Mn.end; Eo++)
            Ot.push({
              start: Eo,
              end: Eo + 1,
              color: "autoAccept",
              shimmerColor: "autoAcceptShimmer",
              priority: 10,
            });
      return Ot;
    }, [he, Mo, js, Gn, Me, XT, Yl, Yc, Wn, Cs, Ki, oe, Ji, rb, TE, RA]),
    { addNotification: Xe, removeNotification: tn } = Li();
  (Po.useEffect(() => {
    if (Ji.length && B4e())
      Xe({
        key: "ultrathink-active",
        kind: "feedback",
        text: "Deeper reasoning requested for this turn",
        priority: "immediate",
        timeoutMs: 5000,
      });
    else tn("ultrathink-active");
  }, [Xe, tn, Ji.length]),
    Po.useEffect(() => {
      if (tme() && rb.length)
        Xe({
          key: "ultraplan-active",
          kind: "feedback",
          text: "This prompt will launch an ultraplan session in Claude Code on the web",
          priority: "immediate",
          timeoutMs: 5000,
        });
      else tn("ultraplan-active");
    }, [Xe, tn, rb.length]),
    Po.useEffect(() => {
      if (W6() && HR.length)
        Xe({
          key: "ultrareview-active",
          kind: "contextual",
          text: "Run /code-review ultra after Claude finishes to review these changes in the cloud",
          priority: "immediate",
          timeoutMs: 5000,
        });
    }, [Xe, HR.length]),
    Po.useEffect(() => {
      if (JS() && TE.length && !RA)
        Xe({
          key: "workflow-keyword-active",
          text: `Dynamic workflow requested for this turn${Ih ? ` \xB7 ${Ih} to ignore` : ""}`,
          priority: "immediate",
          timeoutMs: 30000,
        });
      else tn("workflow-keyword-active");
    }, [Xe, tn, TE.length, RA, Ih]),
    Po.useEffect(() => {
      if (TE.length === 0 && RA) (mx(false), (YT.current = false), tn("workflow-keyword-ignored"));
    }, [TE.length, RA, tn]));
  let Ar = Po.useCallback(() => {
      if (TE.length === 0) return;
      let Ot = !YT.current;
      if ((mx(Ot), (YT.current = Ot), Ot))
        (G("tengu_workflow_keyword_dismissed", {}),
          Xe({
            key: "workflow-keyword-ignored",
            text: `Ultracode keyword ignored for this prompt${Ih ? ` \xB7 ${Ih} to undo` : ""}`,
            priority: "immediate",
            timeoutMs: 5000,
          }));
      else (G("tengu_workflow_keyword_restored", {}), tn("workflow-keyword-ignored"));
    }, [TE.length, Ih, Xe, tn]),
    Yr = Po.useRef(ee.length),
    Wo = Po.useRef(ee.length),
    Ri = Po.useCallback(() => {
      tn("stash-hint");
    }, [tn]);
  Po.useEffect(() => {
    let Ot = Yr.current,
      Mn = Wo.current,
      Eo = ee.length;
    if (((Yr.current = Eo), Eo > Mn)) {
      Wo.current = Eo;
      return;
    }
    if (Eo === 0) {
      Wo.current = 0;
      return;
    }
    let wa = Mn >= 20 && Eo <= 5,
      pc = Ot >= 20 && Eo <= 5;
    if (wa && !pc) {
      if (!Dt().hasUsedStash)
        Xe({
          key: "stash-hint",
          kind: "hint",
          jsx: Ud.jsxs(w, {
            dimColor: true,
            children: [
              "Tip:",
              " ",
              Ud.jsx(mr, {
                action: "chat:stash",
                context: "Chat",
                fallback: "ctrl+s",
                description: "stash",
              }),
            ],
          }),
          priority: "immediate",
          timeoutMs: sdr,
        });
      Wo.current = Eo;
    }
  }, [ee.length, Xe]);
  let {
      pushToBuffer: qa,
      undo: Mc,
      canUndo: Fd,
      clearBuffer: cm,
    } = Khc({
      maxBufferSize: 50,
      debounceMs: 1000,
    }),
    Qm = Po.useCallback(
      (Ot, Mn, Eo, wa) => {
        let pc = !wa?.continuesGesture && ge && (de !== "INSERT" || !me.current);
        (qa(Ot, Mn, Eo, {
          immediate: pc,
        }),
          (me.current = ge));
      },
      [qa, de, ge],
    );
  cbc({
    input: ee,
    pastedContents: x,
    onInputChange: ct,
    setCursorOffset: Ue,
    setPastedContents: I,
  });
  let Jk = gbc({
      input: ee,
      submitCount: A,
      hasMessages: p,
      viewingAgentName: Nt,
    }),
    JT = Po.useCallback(
      (Ot) => {
        if (Ot === "?") {
          (G("tengu_help_toggled", {}), He((Rp) => !Rp));
          return;
        }
        (He(false), Ri(), KMa(), dfe(st));
        let Mn = Ot.length === ee.length + 1,
          Eo = Me === 0,
          wa = ek(Ot);
        if (Eo && wa !== "prompt") {
          if (Mn) {
            b(wa);
            return;
          }
          if (ee.length === 0) {
            b(wa);
            let Rp = BU(Ot).replaceAll("\t", "    ");
            (Qm(ee, Me, x), ct(Rp), Ue(Rp.length));
            return;
          }
        }
        let pc = Ot.replaceAll("\t", "    ");
        if (ee !== pc) Qm(ee, Me, x);
        (st((Rp) =>
          Rp.footerSelection === null
            ? Rp
            : {
                ...Rp,
                footerSelection: null,
                frameExpanded: false,
              },
        ),
          ct(pc));
      },
      [ct, b, ee, Me, Qm, x, Ri, st],
    ),
    {
      resetHistory: RS,
      onHistoryUp: cD,
      onHistoryDown: Yu,
      dismissSearchHint: pl,
      historyIndex: v2,
      historyTotal: U3,
      historyEdited: e_,
    } = Whc(
      (Ot, Mn, Eo) => {
        (JT(Ot), b(Mn), I(Eo));
      },
      ee,
      x,
      Ue,
      y,
      jn,
    );
  (Po.useEffect(() => {
    RS();
  }, [pt, RS]),
    Po.useEffect(() => {
      if (he) pl();
    }, [he, pl]));
  function gx() {
    if (JP.length > 1) return;
    let Ot = ee.indexOf(`
`);
    if (Ot !== -1 && Me > Ot) return;
    let Mn = On(ze, XW);
    if (Jj()) {
      let Eo = gt.getState().queueEditIndex;
      if (Eo === null && Mn > 0) {
        vt(Mn - 1);
        return;
      }
      if (Eo !== null) {
        if (Eo > 0) vt(Eo - 1);
        else (vt(null), cD());
        return;
      }
    } else if (Mn > 0) {
      ob();
      return;
    }
    cD();
  }
  function Ma() {
    if (JP.length > 1) return;
    let Ot = ee.lastIndexOf(`
`);
    if (Ot !== -1 && Me <= Ot) return;
    if (Jj()) {
      let Mn = gt.getState().queueEditIndex;
      if (Mn !== null) {
        let Eo = On(ze, XW);
        if (Mn < Eo - 1) vt(Mn + 1);
        else vt(null);
        return;
      }
    }
    if (Yu() && Qp.length > 0) {
      let Mn = Qp[0];
      if ((dl(Mn), Mn === "tasks" && !Dt().hasSeenTasksHint))
        gn((Eo) =>
          Eo.hasSeenTasksHint
            ? Eo
            : {
                ...Eo,
                hasSeenTasksHint: true,
              },
        );
    }
  }
  let [Eg, fO] = Po.useState({
      suggestions: [],
      selectedSuggestion: -1,
      hoveredSuggestionId: null,
      commandArgumentHint: void 0,
    }),
    uD = Po.useCallback((Ot) => {
      fO((Mn) => (typeof Ot === "function" ? Ot(Mn) : Ot));
    }, []),
    Qk = Po.useCallback(() => {
      let Ot = gt.getState().queueEditIndex;
      if (Ot === null) return false;
      let Mn = dua(Ot, ee, Me);
      if ((vt(null), !Mn)) return false;
      if ((ct(Mn.text), b("prompt"), Ue(Mn.cursorOffset), Mn.images.length > 0))
        I((Eo) => {
          let wa = {
            ...Eo,
          };
          for (let pc of Mn.images) wa[pc.id] = pc;
          return wa;
        });
      return (xe("input_queue_pop_to_edit"), true);
    }, [ct, b, ee, Me, I, vt, gt]),
    NC = Po.useCallback(
      async (Ot, Mn = false) => {
        Ot = Ot.trimEnd();
        let Eo = gt.getState();
        if (Jj() && Eo.queueEditIndex !== null && Qk()) return;
        if (Eo.footerSelection && Qp.includes(Eo.footerSelection)) return;
        if (Br.current !== null) {
          (Br.current(),
            (Br.current = null),
            cn(true),
            T(
              "[auto-mode] onSubmit: consent debounce pending \u2014 showing opt-in dialog instead of submitting",
            ));
          return;
        }
        let wa = Object.values(x).some((Ur) => Ur.type === "image"),
          pc = Mt.text,
          Rp = Ot === pc,
          mt = Boolean(Rp && pc && Mt.acceptedAt > Mt.shownAt);
        if (Rp && pc && !wa && !Eo.viewingAgentTaskId) {
          if (Qt.status === "active" && Date.now() - Qt.startTime > yHl) dfe(st, "stale");
          else if (Qt.status === "active") {
            (rh(),
              Jm(pc, {
                skipReset: true,
              }),
              RS(),
              N(
                pc,
                {
                  setCursorOffset: Ue,
                  clearBuffer: cm,
                  resetHistory: () => {},
                },
                {
                  state: Qt,
                  speculationSessionTimeSavedMs: Er,
                  setAppState: st,
                },
              ));
            return;
          }
          if (Mt.shownAt > 0) rh();
        }
        if (el()) {
          let Ur = xyc(Ot);
          if (Ur) {
            let fs = await kyc(Ur.recipientName, sX(Ur.message, x), un, fg);
            if (fs.success) {
              (Xe({
                key: "direct-message-sent",
                kind: "feedback",
                text: `Sent to @${fs.recipientName}`,
                priority: "immediate",
                timeoutMs: 3000,
              }),
                ct(""),
                I({}),
                Ue(0),
                cm(),
                RS(),
                xe("input_at_member_message"));
              return;
            } else if (fs.error === "no_team_context");
          }
        }
        if (Ot.trim() === "" && !wa) {
          xe("prompt_submit_empty");
          return;
        }
        let Vn =
          Eg.suggestions.length > 0 && Eg.suggestions.every((Ur) => Ur.description === "directory");
        if (Eg.suggestions.length > 0 && !Mn && !Vn) {
          T(`[onSubmit] early return: suggestions showing (count=${Eg.suggestions.length})`);
          return;
        }
        if (Mt.text && Mt.shownAt > 0) Jm(Ot);
        (tn("stash-hint"), RS());
        let Bn = gYt(gt.getState());
        if (Bn.type !== "leader" && B) {
          let Ur = JMe(Ot),
            fs = Ur && fA(Ur.commandName, s);
          if (!(fs?.type === "local" || fs?.type === "local-jsx")) {
            (G("tengu_transcript_input_to_teammate", {}),
              await B(Ot, Bn.task, {
                setCursorOffset: Ue,
                clearBuffer: cm,
                resetHistory: () => {},
              }));
            return;
          }
        }
        let Nr =
          YT.current || mt
            ? {
                suppressWorkflowKeyword: YT.current || void 0,
                inputSource: mt ? "suggestion_accepted" : void 0,
              }
            : void 0;
        await N(
          Ot,
          {
            setCursorOffset: Ue,
            clearBuffer: cm,
            resetHistory: () => {},
          },
          void 0,
          Nr,
        );
      },
      [Mt, Qt, Er, un, gt, Qp, Eg.suggestions, s, N, B, cm, RS, Jm, st, rh, x, I, tn, Xe, ct, Qk],
    );
  Je.current = NC;
  let {
    suggestions: JP,
    selectedSuggestion: ige,
    commandArgumentHint: die,
    suggestionsEmptyMessage: dD,
    inlineGhostText: GZ,
    maxColumnWidth: pie,
    handleKeyDown: fie,
    selectSuggestion: WZ,
    setHoveredSuggestion: w2,
    hoveredSuggestionId: Zp,
  } = vyc({
    commands: s,
    onInputChange: ct,
    onSubmit: NC,
    setCursorOffset: Ue,
    input: ee,
    cursorOffset: Me,
    mode: y,
    agents: i,
    setSuggestionsState: uD,
    suggestionsState: Eg,
    suppressSuggestions: he || v2 > 0,
    markAccepted: rh,
    onModeChange: b,
    sessionEnvVars: re,
  });
  function gve(Ot) {
    if (ji) return;
    if ((cr(Ot), Ot.defaultPrevented || Ot.didStopImmediatePropagation())) return;
    if ((fie(Ot), Ot.defaultPrevented || Ot.didStopImmediatePropagation())) return;
    if (
      JS() &&
      Ot.name === "backspace" &&
      !Ot.meta &&
      !Ot.ctrl &&
      !Ot.superKey &&
      !he &&
      (!V$() || de === "INSERT") &&
      !YT.current &&
      TE.some((Mn) => Mn.end === Me)
    ) {
      (Ot.preventDefault(), Ar());
      return;
    }
    if (Vt() === "macos" && _qi(Ot.key)) {
      let Mn = aQr[Ot.key],
        Eo = ZQr();
      Xe({
        key: "option-meta-hint",
        kind: "contextual",
        jsx: Eo
          ? Ud.jsxs(w, {
              dimColor: true,
              children: [
                "To enable ",
                Mn,
                ", set ",
                Ud.jsx(w, {
                  bold: true,
                  children: "Option as Meta",
                }),
                " in",
                " ",
                Eo,
                " preferences (\u2318,)",
              ],
            })
          : Ud.jsxs(w, {
              dimColor: true,
              children: ["To enable ", Mn, ", run /terminal-setup"],
            }),
        priority: "immediate",
        timeoutMs: 5000,
      });
    }
    if ((C2(Ot), Ot.name === "escape")) {
      if (lK()) return;
      if (V$() && de !== "NORMAL") return;
      if (!Jj()) {
        if (ze.some(XW)) {
          ob();
          return;
        }
      }
      if (p && !ee && !a) gie();
    }
    if (Ot.name === "return" && le) He(false);
  }
  function C2(Ot) {
    if (Ot.name === "escape" && V$() && de !== "NORMAL") return;
    let Mn = Jj() && Ot.name === "escape";
    if (
      (Me === 0 || Mn) &&
      (Ot.name === "escape" ||
        Ot.name === "backspace" ||
        Ot.name === "delete" ||
        (Ot.ctrl && Ot.key === "u"))
    )
      (b("prompt"), He(false));
    if (le && ee === "" && (Ot.name === "backspace" || Ot.name === "delete")) He(false);
  }
  function lK() {
    if (gt.getState().queueEditIndex !== null) return (vt(null), true);
    if (Qt.status === "active") return (dfe(st), true);
    if (q && $) return ($(), true);
    if (le) return (He(false), true);
    return false;
  }
  function Mb(Ot) {
    if ((C2(Ot), Ot.ctrl || Ot.meta)) return;
    if (V$() && de === "NORMAL") {
      if (Ot.key === "j") return (Ot.preventDefault(), uK());
      if (Ot.key === "k") return (Ot.preventDefault(), _ie());
      if (Ot.key === "l") return (Ot.preventDefault(), G3());
      if (Ot.key === "h") return (Ot.preventDefault(), pB());
    }
    if ([...Ot.key].length === 1)
      (Ot.preventDefault(), JT(ee.slice(0, Me) + Ot.key + ee.slice(Me)), Ue(Me + Ot.key.length));
  }
  let BC = y === "prompt" && JP.length === 0 && KT && !pt;
  if (BC) ly();
  if (Mt.text && !KT && Mt.shownAt === 0 && !pt)
    (b$("timing", Mt.text),
      st((Ot) => ({
        ...Ot,
        promptSuggestion: {
          text: null,
          promptId: null,
          shownAt: 0,
          acceptedAt: 0,
          generationRequestId: null,
        },
      })));
  function mO(Ot, Mn, Eo, wa, pc, Rp) {
    (G("tengu_paste_image", {}), xe(pc ? "input_image_drag" : "input_image_paste"), b("prompt"));
    let mt = En.current++,
      Vn = {
        id: mt,
        type: "image",
        content: Ot,
        mediaType: Mn || "image/png",
        filename: Eo || "Pasted image",
        dimensions: wa,
        sourcePath: pc,
      };
    (hTt(Vn, st),
      yTt(Vn, st),
      I((Nr) => ({
        ...Nr,
        [mt]: Vn,
      })),
      (bt.current = {
        ...bt.current,
        [mt]: Vn,
      }));
    let Bn = Sn.current ? " " : "";
    (yV(Bn + KDn(mt), {
      continuesGesture: Rp,
    }),
      (Sn.current = true));
  }
  let $b = Po.useMemo(() => Object.values(x).some((Ot) => Ot.type === "image"), [x]);
  Po.useEffect(() => {
    if (!$b) return;
    let Ot = new Set(jM(ee).map((Mn) => Mn.id));
    I((Mn) => {
      let Eo = Object.values(Mn).filter((pc) => pc.type === "image" && !Ot.has(pc.id));
      if (Eo.length === 0) return Mn;
      let wa = {
        ...Mn,
      };
      for (let pc of Eo) delete wa[pc.id];
      return wa;
    });
  }, [ee, $b, I]);
  function lB(Ot) {
    let Mn = K8i(ee, x);
    if (Mn?.id !== Ot) return false;
    if (
      (Qm(ee, Me, x),
      ct(Mn.expanded),
      Ue(Mn.cursorOffset),
      I((Eo) => {
        let { [Mn.id]: wa, ...pc } = Eo;
        return pc;
      }),
      vs.current)
    )
      (vs.current(), (vs.current = null));
    return (zr(false), true);
  }
  function hx(Ot) {
    Sn.current = false;
    let Mn = Ja(Ot)
      .replace(
        /\r\n|\r/g,
        `
`,
      )
      .replaceAll("\t", "    ");
    if (ee.length === 0) {
      let Rp = ek(Mn);
      if (Rp !== "prompt") (b(Rp), (Mn = BU(Mn)));
    }
    let Eo = En.current - 1;
    if (x[Eo]?.type === "text" && x[Eo].content === Mn && lB(Eo)) return;
    let wa = L0e(Mn),
      pc = Math.max(0, Math.min(kr - 10, 2));
    if (Mn.length > LGe || wa > pc) {
      xe("input_paste_large");
      let Rp = En.current++,
        mt = {
          id: Rp,
          type: "text",
          content: Mn,
        };
      if (
        (I((Vn) => ({
          ...Vn,
          [Rp]: mt,
        })),
        yV(Kat(Rp, wa)),
        Mn.length <= YDn)
      ) {
        if ((zr(true), vs.current)) vs.current();
        vs.current = to.setTimeout(() => {
          (zr(false), (vs.current = null));
        }, 8000);
      }
    } else yV(Mn);
  }
  let mie = Po.useCallback((Ot, Mn) => {
    if (!Sn.current) return Ot;
    if (((Sn.current = false), o$l(Ot, Mn) && !s$l(Ot))) return " " + Ot;
    return Ot;
  }, []);
  function yV(Ot, Mn) {
    let Eo = Et.current,
      wa = tt.current;
    Qm(Eo, wa, bt.current, Mn);
    let pc = Eo.slice(0, wa) + Ot + Eo.slice(wa);
    (ct(pc), (tt.current = wa + Ot.length), Ue(wa + Ot.length));
  }
  let gie = Kj(
      () => {},
      () => v(),
    ),
    ob = Po.useCallback(() => {
      let Ot = n4t(ee, Me);
      if (!Ot) return false;
      if ((ct(Ot.text), b("prompt"), Ue(Ot.cursorOffset), Ot.images.length > 0))
        I((Mn) => {
          let Eo = {
            ...Mn,
          };
          for (let wa of Ot.images) Eo[wa.id] = wa;
          return Eo;
        });
      return (xe("input_queue_pop_to_edit"), true);
    }, [ct, b, ee, Me, I]);
  Uur(C, function (Ot) {
    (G("tengu_ext_at_mentioned", {}), yV(Fur(Ot, ee[Me - 1])));
  });
  let sb = Po.useCallback(() => {
      if (Fd) {
        let Ot = Mc();
        if (Ot) (ct(Ot.text), Ue(Ot.cursorOffset), I(Ot.pastedContents));
      }
    }, [Fd, Mc, ct, I]),
    F3 = Po.useCallback(() => {
      Qm(ee, Me, x);
      let Ot =
        ee.slice(0, Me) +
        `
` +
        ee.slice(Me);
      (ct(Ot), Ue(Me + 1));
    }, [ee, Me, ct, Qm, x]),
    cB = Po.useCallback(async () => {
      (G("tengu_external_editor_used", {}), Da(true));
      try {
        let Ot = Dt().externalEditorContext
            ? pcr(d.current).messages.join(`

`) || void 0
            : void 0,
          Mn = await K$(ee, x, Ot);
        if (Mn.error)
          (Xe({
            key: "external-editor-error",
            kind: "warning",
            text: Mn.error,
            color: "warning",
            priority: "high",
          }),
            It("input_external_editor", "editor_error"));
        else xe("input_external_editor");
        if (Mn.content !== null && Mn.content !== ee)
          (Qm(ee, Me, x), ct(Mn.content), Ue(Mn.content.length));
      } catch (Ot) {
        if (Ot instanceof Error) ke(Ot);
        (Xe({
          key: "external-editor-error",
          kind: "warning",
          text: `External editor failed: ${be(Ot)}`,
          color: "warning",
          priority: "high",
        }),
          Le("input_external_editor", "spawn_failed"));
      } finally {
        Da(false);
      }
    }, [ee, Me, x, d, Qm, ct, Xe]),
    qZ = Po.useCallback(() => {
      if (ee.trim() === "" && _ !== void 0) {
        if ((ct(_.text), Ue(_.cursorOffset), I(_.pastedContents), _.launchWarning))
          cHe(_.launchWarning);
        (S(void 0), xe("input_stash"));
      } else if (ee.trim() !== "")
        (S({
          text: ee,
          cursorOffset: Me,
          pastedContents: x,
          launchWarning: exl() ?? void 0,
        }),
          ct(""),
          Ue(0),
          I({}),
          gn((Ot) => {
            if (Ot.hasUsedStash) return Ot;
            return {
              ...Ot,
              hasUsedStash: true,
            };
          }),
          xe("input_stash"));
    }, [ee, Me, _, ct, S, x, I]),
    [uB, j3] = Po.useState(0);
  Po.useLayoutEffect(() => {
    if (uB === 0) return;
    Cu.get(process.stdout)?.forceRedraw();
  }, [uB]);
  let TR = Uu("chat:clearScreen", "Chat", "cmd+k"),
    vR = Uu("chat:clearInput", "Chat", "ctrl+l"),
    cK = Po.useRef(TR),
    LA = Po.useCallback((Ot) => {
      if (!Ns()) return;
      if (Ot)
        Ve({
          show: true,
          key: cK.current,
          action: "clear",
        });
      else
        Ve((Mn) =>
          Mn.action === "clear"
            ? {
                show: false,
              }
            : Mn,
        );
    }, []),
    hie = Po.useCallback(() => {
      if (!Ns()) return;
      Je.current?.("/clear", true);
    }, []),
    QT = Kj(LA, hie, void 0, 2000),
    LS = Po.useCallback(() => {
      ((cK.current = TR), QT());
    }, [TR, QT]);
  obc(LS);
  let VZ = Po.useCallback(() => {
      (j3((Ot) => Ot + 1), (cK.current = vR), QT());
    }, [vR, QT]),
    DS = Po.useCallback(() => {
      if (!vl()) return false;
      return (
        Xe({
          key: "remote-inference-config-unavailable",
          kind: "feedback",
          text: "Fast mode switching in cloud sessions is coming soon \u2014 set at session creation for now",
          priority: "medium",
        }),
        true
      );
    }, [Xe]),
    _V = Po.useCallback(() => {
      if (vl() && !LO("modelCatalog")) {
        Xe({
          key: "remote-model-picker-unavailable",
          kind: "feedback",
          text: "Model picker shows local options in cloud sessions \u2014 pass a model name, e.g. /model sonnet",
          priority: "medium",
        });
        return;
      }
      if ((To((Ot) => !Ot), le)) He(false);
    }, [le, Xe]),
    Sw = Po.useCallback(() => {
      if (!NA() && DS()) return;
      if ((Se((Ot) => !Ot), le)) He(false);
    }, [le, Xe, DS]),
    Cm = Po.useCallback(() => {
      if (!NA() && DS()) return;
      if ((ot((Ot) => !Ot), le)) He(false);
    }, [le, DS]),
    Ef = Po.useCallback(() => {
      if (vs.current) (vs.current(), (vs.current = null));
      if ((zr(false), el() && Kn && pt)) {
        let pc = {
            ...n,
            mode: Kn.permissionMode,
          },
          Rp = bdr(pc, void 0);
        (G("tengu_mode_cycle", {
          to: $e(Rp),
        }),
          xe("mode_switch"));
        let mt = pt;
        if (
          (st((Vn) => {
            let Bn = Vn.tasks[mt];
            if (!Bn || Bn.type !== "in_process_teammate") return Vn;
            if (Bn.permissionMode === Rp) return Vn;
            return {
              ...Vn,
              tasks: {
                ...Vn.tasks,
                [mt]: {
                  ...Bn,
                  permissionMode: Rp,
                },
              },
            };
          }),
          le)
        )
          He(false);
        return;
      }
      let Ot =
        hr !== null
          ? {
              ...n,
              mode: "auto",
            }
          : n;
      T(
        `[auto-mode] handleCycleMode: currentMode=${Ot.mode} appStateMode=${n.mode} isAutoModeAvailable=${n.isAutoModeAvailable} showAutoModeOptIn=${zt} timeoutPending=${!!Br.current}`,
      );
      let Mn = bdr(Ot, un);
      if (Mn === Ot.mode) {
        if ((Le("mode_switch", "no_other_modes"), vl()))
          Xe({
            key: "remote-permission-mode-noop",
            kind: "feedback",
            text: "No other permission modes are available in this cloud session",
            priority: "medium",
          });
        return;
      }
      let Eo = false;
      if (((Eo = Mn === "auto" && Ot.mode !== "auto" && !RG() && !pt), Eo)) {
        if ((Tr(n.mode), Br.current)) Br.current();
        if (
          ((Br.current = to.setTimeout(() => {
            (cn(true), (Br.current = null));
          }, 800)),
          xe("mode_switch"),
          le)
        )
          He(false);
        return;
      }
      if (zt || Br.current) {
        if (zt) G("tengu_auto_mode_opt_in_dialog_decline", {});
        if ((cn(false), Br.current)) (Br.current(), (Br.current = null));
        Tr(null);
      }
      let { context: wa } = Ryc(Ot, un, "shift_tab");
      if (
        (G("tengu_mode_cycle", {
          to: $e(Mn),
        }),
        !NA())
      )
        xe("mode_switch");
      if (Mn === "plan") xe("mode_plan_enter");
      else if (n.mode === "plan") xe("mode_plan_exit");
      if (Mn === "auto") xe("mode_auto_enter");
      if (Mn === "plan")
        gn((pc) => ({
          ...pc,
          lastPlanModeUse: Date.now(),
        }));
      if (
        (st((pc) => ({
          ...pc,
          toolPermissionContext: {
            ...wa,
            mode: Mn,
          },
        })),
        r({
          ...wa,
          mode: Mn,
        }),
        (Ke.current = Ke.current.then(() => u8e(Mn, un?.teamName))),
        le)
      )
        He(false);
    }, [n, hr, un, pt, Kn, st, r, le, zt, Xe, to]),
    Zk = Po.useCallback(() => {
      {
        (cn(false), Tr(null));
        let Ot = AZ(hr ?? n.mode, "auto", n, "auto_opt_in");
        if (
          (st((Mn) => ({
            ...Mn,
            toolPermissionContext: {
              ...Ot,
              mode: "auto",
            },
          })),
          r({
            ...Ot,
            mode: "auto",
          }),
          xe("mode_auto_enter"),
          le)
        )
          He(false);
      }
    }, [le, hr, n, st, r]),
    Ew = Po.useCallback(
      (Ot) => {
        if (
          (T(`[auto-mode] handleAutoModeOptInDecline(${Ot}): clearing pending consent (was ${hr})`),
          xe("mode_auto_opt_in_decline"),
          cn(false),
          Br.current)
        )
          (Br.current(), (Br.current = null));
        if (hr) {
          if ((Tr(null), Ot === "dont-ask"))
            (st((Mn) => ({
              ...Mn,
              toolPermissionContext: {
                ...Mn.toolPermissionContext,
                isAutoModeAvailable: false,
              },
            })),
              r({
                ...n,
                isAutoModeAvailable: false,
              }));
        }
      },
      [hr, n, st, r],
    ),
    { dispatchPasteEvent: Ob } = TW(),
    yie = Po.useCallback(() => {
      (Xn(true),
        k0e(Gh(ce))
          .then(async (Ot) => {
            if (Ot) {
              mO(Ot.base64, Ot.mediaType, void 0, Ot.dimensions);
              return;
            }
            let Mn = await QNt("clipboard");
            if (Mn && !S8i(Mn)) {
              (It("input_image_paste", "text_fallback"), Ob(Mn));
              return;
            }
            Le("input_image_paste", Mn ? "binary_garbage" : "not_found");
            let Eo = eC("chat:imagePaste", "Chat", "ctrl+v"),
              wa = Oe.isSSH()
                ? "No image found in clipboard. You're SSH'd; try scp?"
                : `No image found in clipboard. Use ${Eo} to paste images.`;
            Xe({
              key: "no-image-in-clipboard",
              kind: "feedback",
              text: wa,
              priority: "immediate",
              timeoutMs: 1000,
            });
          })
          .catch((Ot) => {
            (Le("input_image_paste", "clipboard_read_failed"), ke(Ot));
          })
          .finally(() => Xn(false)));
    }, [Xe, mO, Ob, ce]),
    ZT = KE();
  Po.useEffect(() => {
    if (!ZT || ae) return;
    let Ot = Sqi(TGe("enter"), "Chat", ZT.bindings) === "chat:submit";
    return ZT.registerHandler({
      action: "chat:submit",
      context: "Chat",
      handler: () => {
        Je.current?.(Et.current);
      },
      singleKey: !Ot,
    });
  }, [ZT, ae]);
  let Im = Po.useMemo(
    () => ({
      "chat:undo": sb,
      "chat:newline": F3,
      "chat:clearScreen": LS,
      "chat:externalEditor": cB,
      "chat:stash": qZ,
      "chat:clearInput": VZ,
      "chat:modelPicker": _V,
      "chat:thinkingToggle": Cm,
      "chat:cycleMode": Ef,
      "chat:imagePaste": yie,
    }),
    [sb, F3, LS, cB, qZ, VZ, _V, Cm, Ef, yie],
  );
  (No(Im, {
    context: "Chat",
    isActive: !ae && !he,
  }),
    $r("chat:fastMode", Sw, {
      context: "Chat",
      isActive: !ae && sc() && Fx(),
    }),
    $r("chat:workflowKeywordToggle", Ar, {
      context: "Chat",
      isActive: !ae && TE.length > 0,
    }),
    $r(
      "help:dismiss",
      () => {
        He(false);
      },
      {
        context: "Help",
        isActive: le,
      },
    ));
  function ua() {
    if (vl()) {
      Xe({
        key: "remote-history-search-unavailable",
        kind: "feedback",
        text: "History search isn't available in cloud sessions yet",
        priority: "medium",
      });
      return;
    }
    (us(true), He(false));
  }
  ($r("history:search", ua, {
    context: "Global",
    isActive: lne() && !ae,
  }),
    $r(
      "app:interrupt",
      () => {
        dfe(st);
      },
      {
        context: "Global",
        isActive: !a && Qt.status === "active",
      },
    ));
  function _ie() {
    if (Zy && Gs > 0 && gr > Fi) {
      cs((Ot) => Ot - 1);
      return;
    }
    if (dd && sd > 0) {
      ca((Ot) => Ot - 1);
      return;
    }
    nb(-1, true);
  }
  function uK() {
    if (Zy && Gs > 0) {
      if (gr < Gs - 1) {
        cs((Ot) => Ot + 1);
        return;
      }
      nb(1);
      return;
    }
    if (Zy) {
      if (!nb(1)) (D(true), dl(null));
      return;
    }
    if (dd) {
      if (sd < oi.length - 1) {
        ca((Ot) => Ot + 1);
        return;
      }
      nb(1);
      return;
    }
    nb(1);
  }
  function dB(Ot) {
    st((Mn) => {
      let Eo = Object.keys(Mn.frameUrls),
        wa = Eo.length;
      if (wa <= 1) return Mn;
      let pc = vdr(Object.entries(Mn.frameUrls), Mn.frameNavPath),
        Rp = Eo[(pc + Ot + wa) % wa] ?? null;
      if (Rp === Mn.frameNavPath && !Mn.frameExpanded) return Mn;
      return {
        ...Mn,
        frameNavPath: Rp,
        frameExpanded: false,
      };
    });
  }
  function G3() {
    if (ay) {
      dB(1);
      return;
    }
    nb(1);
  }
  function pB() {
    if (ay) {
      dB(-1);
      return;
    }
    nb(-1);
  }
  No(
    {
      "footer:up": _ie,
      "footer:down": uK,
      "footer:next": G3,
      "footer:previous": pB,
      "footer:openSelected": () => {
        if (le) He(false);
        switch (Xm) {
          case "tasks": {
            let Ot = gr >= 1 ? Nme(Dn, fo, pt)[gr - 1]?.id : void 0;
            if (Ot) Hz(Ot, st);
            else if (gr === 0 && Gs > 0) Wq(st);
            else (D(true), dl(null));
            break;
          }
          case "workflows": {
            let Ot = oi[sd];
            if (Ot)
              (xe("workflow_progress_preview"),
                st((Mn) =>
                  Mn.workflowDetail?.taskId === Ot.id
                    ? Mn
                    : {
                        ...Mn,
                        workflowDetail: {
                          taskId: Ot.id,
                        },
                      },
                ),
                dl(null));
            break;
          }
          case "tmux":
            break;
          case "bagel":
            break;
          case "bridge":
            (Qn(true), dl(null));
            break;
          case "frame": {
            let Ot = gt.getState(),
              Mn = Object.entries(Ot.frameUrls),
              Eo = Mn[vdr(Mn, Ot.frameNavPath)]?.[1]?.url;
            if (Eo) (ac(Eo), xe("frame_link_open"));
            st((wa) =>
              wa.frameExpanded
                ? wa
                : {
                    ...wa,
                    frameExpanded: true,
                  },
            );
            break;
          }
        }
      },
      "footer:clearSelection": () => {
        if (ay && gt.getState().frameExpanded) {
          st((Ot) =>
            !Ot.frameExpanded
              ? Ot
              : {
                  ...Ot,
                  frameExpanded: false,
                },
          );
          return;
        }
        (lK(), dl(null));
      },
      "footer:close": () => {
        if (Zy && gr >= 1) {
          let Ot = Nme(Dn, fo, pt)[gr - 1];
          if (!Ot) return false;
          if (ln === "viewing-agent" && Ot.id === pt) {
            (JT(ee.slice(0, Me) + "x" + ee.slice(Me)), Ue(Me + 1));
            return;
          }
          if (MTt(Ot, en, st) === "dismissed") cs((Eo) => Math.max(Fi, Eo - 1));
          return;
        }
        if (dd) {
          let Ot = oi[sd];
          if (!Ot) return false;
          Iyc(Ot.id, Ot.status, en, st);
          return;
        }
        return false;
      },
    },
    {
      context: "Footer",
      isActive: !!Xm && !ae,
    },
  );
  let gO = $dr(),
    hO = Sd(),
    fB = sc() ? cle() : false,
    I2 = sc() ? Pn && (Fx() || fB) : false,
    bie = _bc(I2 ?? false),
    e0 = I2
      ? hO
        ? fB
          ? "fast mode (cooling down)"
          : "fast mode"
        : bie
          ? `${x1e(true, fB)} ${wt.reset.dim("/fast")}`
          : x1e(true, fB)
      : void 0,
    I_ = DMl(lr, ce, ir),
    Sie = I_ !== void 0 && Xte(ce, lr, eo),
    vE = MMl(Sie),
    zZ = $Ml([vE, e0]),
    hve = nbc(v2, U3, e_),
    pXe = hve
      ? {
          content: ` ${wt.dim(hve)} `,
          position: "top",
          align: "start",
          offset: 2,
        }
      : void 0,
    wR = PMl(I_, Sie);
  Po.useEffect(() => {
    if (!wR) {
      tn("effort-level");
      return;
    }
    (tn("effort-level"),
      Xe({
        key: "effort-level",
        kind: "feedback",
        text: wR,
        priority: "high",
        timeoutMs: 10000 /* 1e4 */,
      }));
  }, [wR, Xe, tn]);
  let yO = Hn - Xmm,
    KZ = Abc(eo === true, Hn),
    Aw = Ns() ? Math.max(Kmm, Math.floor(kr / 2) - zmm) : void 0,
    x2 = Po.useCallback(
      (Ot) => {
        if (he) return;
        if (
          (st((pc) =>
            pc.footerSelection === null
              ? pc
              : {
                  ...pc,
                  footerSelection: null,
                  frameExpanded: false,
                },
          ),
          !ee)
        )
          return;
        let Mn = Ul.fromText(ee, yO, Me),
          Eo = Mn.getViewportStartLine(Aw),
          wa = Mn.measuredText.getOffsetFromPosition({
            line: Ot.localRow + Eo,
            column: Ot.localCol,
          });
        Ue(wa);
      },
      [ee, yO, he, Me, Aw, st],
    ),
    W3 = Po.useRef(null),
    bV = Po.useRef(null);
  bV.current = (Ot) => {
    if (!ee || he || ae) return false;
    let Mn = W3.current,
      Eo = Mn ? Cy.get(Mn) : void 0,
      wa = OBt(Ot);
    if (!Eo || !wa) return false;
    let { start: pc, end: Rp } = wa;
    if (pc.row < Eo.y || Rp.row < Eo.y || pc.row >= Eo.y + Eo.height || Rp.row >= Eo.y + Eo.height)
      return false;
    let mt = Ul.fromText(ee, yO, Me),
      Vn = mt.getViewportStartLine(Aw),
      Bn = (fs, wi) =>
        mt.measuredText.getOffsetFromPosition({
          line: fs - Eo.y + Vn,
          column: Math.max(0, wi - Eo.x),
        }),
      Nr = Math.max(0, Bn(pc.row, pc.col)),
      Ur = Math.min(ee.length, Bn(Rp.row, Rp.col + 1));
    if (Ur <= Nr) return false;
    return (Qm(ee, Me, x), ct(ee.slice(0, Nr) + ee.slice(Ur)), Ue(Nr), true);
  };
  let q3 = nnr();
  Po.useEffect(
    () => (q3.setHandler((Ot) => bV.current?.(Ot) ?? false), () => q3.setHandler(null)),
    [q3],
  );
  let SV = Po.useCallback((Ot) => D(Ot ?? true), [D]),
    EV = BC && KT ? KT : Jk,
    age = Po.useMemo(
      () =>
        ee.includes(`
`),
      [ee],
    ),
    YZ = Po.useRef(false),
    XZ = Po.useCallback(
      (Ot, Mn) => {
        let Eo = false;
        (Wie(),
          st(
            (Rp) => (
              (Eo = sc() && !rg(Ot) && !!Rp.fastMode),
              {
                ...Rp,
                mainLoopModel: Ot,
                mainLoopModelForSession: null,
                ...(Eo && {
                  fastMode: false,
                }),
              }
            ),
          ),
          To(false));
        let wa = (Pn ?? false) && !Eo,
          pc = `Model set to ${bj(Ot)}${YZ.current ? " and saved as your default for new sessions" : " for this session only"}`;
        if (((YZ.current = false), xOe(Ot, wa, nT()))) pc += " \xB7 Draws from usage credits";
        if (Eo) pc += " \xB7 Fast mode OFF";
        (Xe({
          key: "model-switched",
          kind: "feedback",
          jsx: Ud.jsx(w, {
            children: pc,
          }),
          priority: "immediate",
          timeoutMs: 3000,
        }),
          G("tengu_model_picker_hotkey", {
            model: Ot,
          }));
      },
      [st, Xe, Pn],
    ),
    Eie = Po.useCallback(() => {
      ((YZ.current = false), To(false));
    }, []),
    Aie = Po.useMemo(() => {
      if (!Qs) return null;
      return Ud.jsx(U, {
        flexDirection: "column",
        marginTop: 1,
        children: Ud.jsx(hKe, {
          initial: Rr,
          sessionModel: _o,
          onSelect: XZ,
          onSetDefault: (Ot) => {
            if (FQ(Ot)) return;
            ((YZ.current = true), _7t(Ot));
          },
          onCancel: Eie,
          isStandaloneCommand: true,
          showFastModeNotice: sc() && Pn && rg(Rr) && Fx(),
        }),
      });
    }, [Qs, Rr, _o, XZ, Eie, Pn]),
    AV = Po.useCallback(
      (Ot) => {
        if ((Se(false), Ot))
          Xe({
            key: "fast-mode-toggled",
            kind: "feedback",
            jsx: Ud.jsx(w, {
              children: Ot,
            }),
            priority: "immediate",
            timeoutMs: 3000,
          });
      },
      [Xe],
    ),
    dK = Po.useMemo(() => {
      if (!X) return null;
      return Ud.jsx(U, {
        flexDirection: "column",
        marginTop: 1,
        children: Ud.jsx(Lsr, {
          onDone: AV,
          unavailableReason: lle(),
        }),
      });
    }, [X, AV]),
    Hie = Po.useCallback(
      (Ot) => {
        (st((Mn) => ({
          ...Mn,
          thinkingEnabled: Ot,
        })),
          ot(false),
          Ju()
            ?.sendControlRequest({
              subtype: "set_max_thinking_tokens",
              max_thinking_tokens: Ot ? null : 0,
            })
            .catch((Mn) => {
              T(`[remote] set_max_thinking_tokens failed: ${Mn}`);
            }),
          G("tengu_thinking_toggled_hotkey", {
            enabled: Ot,
          }),
          xe("thinking_toggle"),
          Xe({
            key: "thinking-toggled-hotkey",
            kind: "feedback",
            jsx: Ud.jsxs(w, {
              color: Ot ? "suggestion" : void 0,
              dimColor: !Ot,
              children: ["Thinking ", Ot ? "on" : "off"],
            }),
            priority: "immediate",
            timeoutMs: 3000,
          }));
      },
      [st, Xe],
    ),
    Tie = Po.useCallback(() => {
      ot(false);
    }, []),
    lge = Po.useMemo(() => {
      if (!qe) return null;
      return Ud.jsx(U, {
        flexDirection: "column",
        marginTop: 1,
        children: Ud.jsx(Xyc, {
          currentValue: Xo ?? true,
          onSelect: Hie,
          onCancel: Tie,
          isMidConversation: f,
        }),
      });
    }, [qe, Xo, Hie, Tie, f]),
    JZ = Po.useMemo(
      () =>
        zt
          ? Ud.jsx(w6o, {
              onAccept: Zk,
              onDecline: Ew,
            })
          : null,
      [zt, Zk, Ew],
    );
  Gql(Ns() ? JZ : null);
  let mB = Ln ? Dn[Ln] : void 0;
  if (mB && mB.type === "local_workflow") {
    let Ot = mB.status === "running",
      Mn = (Eo) => {
        if (Eo)
          Xe({
            key: "workflow-save-result",
            kind: "feedback",
            text: Eo,
            priority: "high",
            timeoutMs: 8000,
          });
        st((wa) =>
          wa.workflowDetail === void 0 && wa.footerSelection === null
            ? wa
            : {
                ...wa,
                workflowDetail: void 0,
                footerSelection: null,
              },
        );
      };
    return Ud.jsx(yJt, {
      workflow: mB,
      initialPhaseIndex: nn?.phaseIndex,
      onDone: Mn,
      onKill: Ot ? () => qAe(mB.id, en) : void 0,
      onPause: Ot ? () => R6e(mB.id, en) : void 0,
      onResume: (Eo) => {
        (Mn(), Je.current?.(Eo, true));
      },
      onSkipAgent: Ot ? (Eo) => $6t(mB.id, Eo, en) : void 0,
      onRetryAgent: Ot ? (Eo) => O6t(mB.id, Eo, en) : void 0,
    });
  }
  if (k)
    return Ud.jsx(Ssr, {
      onDone: () => D(false),
      toolUseContext: M(d.current, [], new AbortController(), ce),
      initialDetailTaskId: typeof k === "string" ? k : void 0,
    });
  if (lne() && ji)
    return Ud.jsx(Vyc, {
      initialQuery: ee,
      onSelect: (Ot) => {
        let Mn = ek(Ot.display),
          Eo = BU(Ot.display);
        (b(Mn), ct(Eo), I(Ot.pastedContents), Ue(Eo.length), us(false));
      },
      onCancel: () => us(false),
    });
  if (Aie) return Aie;
  if (dK) return dK;
  if (lge) return lge;
  if (Jn)
    return Ud.jsx($yc, {
      onDone: () => {
        (Qn(false), dl(null));
      },
    });
  let HV = {
      multiline: true,
      onKeyDownBefore: gve,
      onSubmit: NC,
      onChange: JT,
      value: js ? BU(typeof js === "string" ? js : js.display) : ee,
      onHistoryUp: gx,
      onHistoryDown: Ma,
      onHistoryReset: RS,
      placeholder: EV,
      onExit: P,
      onExitMessage: (Ot, Mn) =>
        Ve((Eo) =>
          Ot
            ? {
                show: Ot,
                key: Mn,
              }
            : Eo.action === "clear"
              ? Eo
              : {
                  show: false,
                },
        ),
      onLeftArrowOnEmpty: O,
      onLeftArrowOnEmptyTimeout: L,
      onLeftArrowOnEmptyMessage: Js() || da() ? void 0 : Be,
      onImagePaste: mO,
      columns: yO,
      maxVisibleLines: Aw,
      disableCursorMovementForUpDownKeys: JP.length > 0 || !!Xm,
      disableEscapeDoublePress: JP.length > 0,
      cursorOffset: Me,
      onChangeCursorOffset: Ue,
      onPaste: hx,
      onIsPastingChange: Xn,
      focus: !he && !ae,
      showCursor: !Xm && !he && !dc,
      argumentHint: die,
      onUndo: Fd
        ? () => {
            let Ot = Mc();
            if (Ot) (ct(Ot.text), Ue(Ot.cursorOffset), I(Ot.pastedContents));
          }
        : void 0,
      highlights: et,
      inlineGhostText: GZ,
      inputFilter: mie,
    },
    vie = hO
      ? {}
      : {
          borderColor: (() => {
            let Ot = {
              bash: "bashBorder",
            };
            if (Ot[y]) return Ot[y];
            if (oU()) return "promptBorder";
            let Mn = Sv();
            if (Mn && Ky.includes(Mn)) return C$[Mn];
            return "promptBorder";
          })(),
          borderStyle: "round",
          borderLeft: false,
          borderRight: false,
          borderBottom: true,
        };
  if (bs)
    return Ud.jsx(U, {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      ...vie,
      width: "100%",
      children: Ud.jsx(w, {
        dimColor: true,
        italic: true,
        children: "Save and close editor to continue...",
      }),
    });
  let t0 = V$()
      ? Ud.jsx(k6o, {
          ...HV,
          initialMode: de,
          onModeChange: pe,
          onOpenHistorySearch: lne() ? ua : Lt,
        })
      : Ud.jsx(Ta, {
          ...HV,
        }),
    QZ = Ns() && (JP.length > 0 || zt),
    Bf = gO
      ? Ud.jsxs(Ud.Fragment, {
          children: [
            Ud.jsx(Ben, {
              banner: gO,
              columns: Hn,
              fastModeTag: e0,
            }),
            Ud.jsxs(U, {
              flexDirection: "row",
              width: "100%",
              children: [
                Ud.jsx(X6o, {
                  mode: y,
                  isLoading: a,
                  viewingAgentName: Nt,
                  viewingAgentColor: Ut,
                }),
                Ud.jsx(U, {
                  ref: W3,
                  flexGrow: 1,
                  flexShrink: 1,
                  tabIndex: -1,
                  onClick: x2,
                  children: t0,
                }),
              ],
            }),
            Ud.jsx(Ben, {
              banner: gO,
              columns: Hn,
              fastModeTag: e0,
              borderOnly: true,
            }),
          ],
        })
      : Ud.jsxs(Ud.Fragment, {
          children: [
            hO &&
              vE &&
              Ud.jsx(w, {
                children: vE,
              }),
            hO &&
              e0 &&
              Ud.jsx(w, {
                color: "fastMode",
                dimColor: fB,
                children: e0,
              }),
            Ud.jsxs(U, {
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              ...vie,
              width: "100%",
              borderText: hO ? void 0 : (KZ ?? pXe ?? zZ),
              children: [
                Ud.jsx(X6o, {
                  mode: y,
                  isLoading: a,
                  viewingAgentName: Nt,
                  viewingAgentColor: Ut,
                }),
                Ud.jsx(U, {
                  ref: W3,
                  flexGrow: 1,
                  flexShrink: 1,
                  tabIndex: -1,
                  onClick: x2,
                  children: t0,
                }),
              ],
            }),
          ],
        });
  return Ud.jsxs(U, {
    flexDirection: "column",
    marginTop: ir || QZ ? 0 : 1,
    children: [
      Xm &&
        !ae &&
        Ud.jsx(U, {
          tabIndex: 0,
          autoFocus: true,
          onKeyDown: Mb,
        }),
      !Ns() && Ud.jsx(Ldr, {}),
      Z &&
        Ud.jsx(U, {
          marginTop: 1,
          marginLeft: 2,
          children: Ud.jsx(w, {
            dimColor: true,
            children: "Waiting for permission\u2026",
          }),
        }),
      !hO && Bf,
      Ud.jsx(p_c, {}),
      Ud.jsx(X_c, {
        apiKeyStatus: o,
        debug: e,
        exitMessage: Ie,
        leftArrowPending: Ze,
        leftArrowDetachAvailable: O !== void 0,
        vimMode: V$() ? de : void 0,
        mode: y,
        isAutoUpdating: we,
        verbose: u,
        onChangeIsUpdating: Ce,
        suggestions: JP,
        selectedSuggestion: ige,
        suggestionsEmptyMessage: dD,
        maxColumnWidth: pie,
        hoveredSuggestionId: Zp,
        onSelectSuggestion: WZ,
        onHoverSuggestion: w2,
        toolPermissionContext: fi,
        helpOpen: le,
        suppressHint: ee.length > 0,
        isLoading: a,
        isExternalLoading: c,
        betweenCalls: l,
        tasksSelected: Zy,
        bridgeSelected: Pb,
        tmuxSelected: Ch,
        ideSelection: t,
        mcpClients: C,
        isPasting: Yn,
        showExpandPasteHint: Jr,
        hasStash: _ !== void 0,
        isInputWrapped: age,
        messagesRef: d,
        lastAssistantMessageId: m,
        tokenUsage: g,
        isSearching: he,
        historyQuery: Mo,
        setHistoryQuery: rs,
        historyFailedMatch: Gn,
        onOpenTasksDialog: Ns() ? SV : void 0,
      }),
      it && WRe() ? Ud.jsx(t_c, {}) : null,
      Ns() ? null : JZ,
      Ns()
        ? Ud.jsx(U, {
            position: "absolute",
            marginTop: ir ? -2 : -1,
            height: JP.length === 0 && !zt ? 1 : 0,
            width: "100%",
            paddingLeft: 2,
            paddingRight: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
            overflow: "hidden",
            children: Ud.jsx(idr, {
              apiKeyStatus: o,
              isAutoUpdating: we,
              verbose: u,
              tokenUsage: g,
              onChangeIsUpdating: Ce,
              isInputWrapped: age,
              hasStash: _ !== void 0,
            }),
          })
        : null,
      hO && Bf,
    ],
  });
}
function Qmm(e) {
  let t = 0;
  for (let n of e)
    if (n.type === "user") {
      if (n.imagePasteIds) {
        for (let r of n.imagePasteIds) if (r > t) t = r;
      }
      if (Array.isArray(n.message.content)) {
        for (let r of n.message.content)
          if (r.type === "text") {
            let o = jM(r.text);
            for (let s of o) if (s.id > t) t = s.id;
          }
      }
    }
  return t + 1;
}
function Zmm(e) {
  let t = [];
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type === "user" && !r.isMeta && !KAe(r) && !(r.origin && r.origin.kind !== "human")) {
      let o = P$(r);
      if (o?.trim() && !jzn(o) && o.length <= YDn)
        t.push({
          display: o,
          pastedContents: {},
        });
    }
  }
  return t;
}
var vbc,
  Po,
  Ud,
  zmm = 5,
  Kmm = 3,
  Ymm,
  Xmm = 3,
  wbc;
