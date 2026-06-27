// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b7o
// matched 2.1.88 source: src/commands/resume/resume.tsx
// class=modified (alt of src/commands/resume/resume.tsx)  jaccard=0.0592  score=0.0949  fileCov=0.1359
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: parsePrIdentifier, ResumeConversation, LiveBgMessage
var iOc = {};
function parsePrIdentifier(e) {
  let t = parseInt(e, 10);
  if (!isNaN(t) && t > 0) return t;
  let n = e.match(
    /(?:https?:\/\/)?[^/\s]+\/[^\s]+?\/(?:pull|pull-requests|-\/merge_requests)\/(\d+)/,
  );
  if (n?.[1]) return parseInt(n[1], 10);
  return null;
}
function ResumeConversation({
  commands: e,
  worktreePaths: t,
  initialTools: n,
  mcpClients: r,
  dynamicMcpConfig: o,
  debug: s,
  mainThreadAgentDefinition: i,
  autoConnectIdeFlag: a,
  strictMcpConfig: l = false,
  systemPrompt: c,
  appendSystemPrompt: u,
  initialSearchQuery: d,
  disableSlashCommands: p = false,
  forkSession: f,
  filterByPr: m,
  thinkingConfig: g,
  fallbackModel: h,
  onTurnComplete: y,
  onCaptureSnapshot: b,
}) {
  let { rows: _ } = br(),
    S = Ht((pe) => pe.agentDefinitions),
    A = Ht((pe) => pe.standaloneAgentContext),
    v = Ht((pe) => pe.mainLoopModel),
    C = Ho(),
    [x, I] = dx.useState([]),
    [k, D] = dx.useState(true),
    [P, O] = dx.useState(false),
    [L, M] = dx.useState(false),
    [N, B] = dx.useState(null),
    [$, q] = dx.useState(null),
    [W, V] = dx.useState(null),
    Y = dx.useRef(null),
    [z, K] = dx.useState(0),
    Z = dx.useRef(0),
    J = dx.useRef(0),
    ne = dx.useMemo(() => {
      let pe = x.filter((ge) => !ge.isSidechain);
      if (m !== void 0) {
        if (m === true) pe = pe.filter((ge) => ge.prNumber !== void 0);
        else if (typeof m === "number") pe = pe.filter((ge) => ge.prNumber === m);
        else if (typeof m === "string") {
          let ge = parsePrIdentifier(m);
          if (ge !== null) pe = pe.filter((he) => he.prNumber === ge);
        }
      }
      return pe;
    }, [x, m]),
    oe = VHe(),
    re = dx.useMemo(() => Oe.CLAUDE_CODE_DISABLE_TERMINAL_TITLE, []);
  (S0e(N || re ? null : "claude \xB7 resume"),
    dx.useEffect(() => {
      oZt(t)
        .then((pe) => {
          ((Y.current = pe),
            (Z.current = pe.logs.length),
            I(pe.logs),
            D(false),
            xe("screen_resume_conversation"));
        })
        .catch((pe) => {
          (Le("screen_resume_conversation", "resume_conversation_load_failed"), ke(pe), D(false));
        });
    }, [t]));
  let ee = dx.useRef(false),
    ce = dx.useCallback((pe) => {
      if (ee.current) return;
      let ge = Y.current;
      if (!ge || ge.nextIndex >= ge.allStatLogs.length) return;
      ee.current = true;
      let he = false;
      GYe(ge.allStatLogs, ge.nextIndex, pe)
        .then((ie) => {
          if (Y.current !== ge) return;
          if (((ge.nextIndex = ie.nextIndex), ie.logs.length > 0)) {
            let le = Z.current;
            (ie.logs.forEach((He, ye) => {
              He.value = le + ye;
            }),
              I((He) => He.concat(ie.logs)),
              (Z.current += ie.logs.length));
          } else if (ge.nextIndex < ge.allStatLogs.length) he = true;
        })
        .finally(() => {
          if (((ee.current = false), he)) ce(pe);
        });
    }, []),
    ae = dx.useCallback(
      (pe) => {
        D(true);
        let ge = ++J.current,
          he = Y.current;
        ((Y.current = null),
          K((le) => le + 1),
          (pe ? _lr() : oZt(t))
            .then((le) => {
              if (J.current !== ge) return;
              ((Y.current = le), (Z.current = le.logs.length), I(le.logs));
            })
            .catch((le) => {
              if (J.current !== ge) return;
              if (he !== null) Y.current = he;
              (I((He) => He.slice()), ke(le));
            })
            .finally(() => {
              if (J.current !== ge) return;
              D(false);
            }));
      },
      [t],
    ),
    de = dx.useCallback(() => {
      let pe = !L;
      (M(pe), ae(pe));
    }, [L, ae]);
  function Ee() {
    process.exit(1);
  }
  async function me(pe) {
    O(true);
    let ge = performance.now(),
      he = Vor(pe, L, t);
    if (he.isCrossProject) {
      if (!he.isSameRepoWorktree) {
        let He = await AI(he.command);
        if (He) process.stdout.write(He);
        V(he.command);
        return;
      }
    }
    if (!f) {
      let He = qg(pe);
      if (He && (await Tpe(He))) {
        q({
          sessionId: He,
          projectPath: pe.projectPath,
        });
        return;
      }
    }
    let ie = false,
      le = "load_error";
    try {
      let He = await vpe(pe, void 0, {
        forkSession: f ?? false,
      });
      if (!He)
        throw (
          G("tengu_session_resumed", {
            entrypoint: We("picker"),
            success: false,
            failure_reason: We("not_found_picker"),
          }),
          (ie = true),
          Error("Failed to load conversation")
        );
      le = "processing_error";
      {
        let Ze = (l$(), ro(qW)).matchSessionMode(He.mode);
        if (Ze) {
          let { getAgentDefinitionsWithOverrides: Be, getActiveAgentsFromList: Me } =
            (ty(), ro(GSt));
          Be.cache.clear?.();
          let Ue = await Be(yr());
          (C((tt) => ({
            ...tt,
            agentDefinitions: {
              ...Ue,
              allAgents: Ue.allAgents,
              activeAgents: Me(Ue.allAgents),
            },
          })),
            He.messages.push(cc(Ze, "warning")));
        }
      }
      if (He.sessionId && !f)
        (PA(Fb(He.sessionId), "resume", pe.fullPath ? rOc.dirname(pe.fullPath) : null),
          await Xen(),
          await BQ(),
          G8n(He.sessionId));
      else if (f && He.contentReplacements?.length) await Uze(He.contentReplacements);
      let { agentDefinition: ye } = VTe(He.agentSetting, i, S);
      if (ye?.mcpServers?.length) await wft();
      if (
        (C((Ve) => ({
          ...Ve,
          agent: ye?.agentType,
        })),
        f)
      )
        etn(He.messages);
      let ue = w7e(He.messages, v, (Ve) => He.messages.push(cc(Ve, "warning"))),
        we = ue ? C7e(He.messages, ue, Boolean(f)) : void 0;
      if (we)
        C((Ve) =>
          Ve.mainLoopModel === we
            ? Ve
            : {
                ...Ve,
                mainLoopModel: we,
              },
        );
      {
        let { saveMode: Ve } = (_a(), ro(nVe)),
          { isCoordinatorMode: Ze } = (l$(), ro(qW));
        Ve(Ze() ? "coordinator" : "normal");
      }
      let Ce = Zen(He.agentName, He.agentColor),
        Ie = A
          ? {
              ...Ce,
              ...A,
            }
          : Ce;
      if (Ie)
        C((Ve) => ({
          ...Ve,
          standaloneAgentContext: Ie,
        }));
      if (
        (JY(Ie?.name),
        Gse(
          f
            ? {
                ...He,
                worktreeSession: void 0,
                bridgeSessionId: void 0,
                bridgeLastSeq: void 0,
                bridgeDialogKinds: void 0,
              }
            : He,
        ),
        ZQt(iMe(He), C),
        !f && He.bridgeSessionId)
      )
        C((Ve) =>
          Ve.replBridgeEnabled && !Ve.replBridgeOutboundOnly
            ? Ve
            : {
                ...Ve,
                replBridgeEnabled: true,
                replBridgeOutboundOnly: false,
              },
        );
      if (!f) {
        if ((ttn(He.worktreeSession), He.sessionId)) Hme();
      }
      (G("tengu_session_resumed", {
        entrypoint: We("picker"),
        success: true,
        resume_duration_ms: Math.round(performance.now() - ge),
      }),
        I([]),
        B({
          messages: He.messages,
          fileHistorySnapshots: He.fileHistorySnapshots,
          contentReplacements: He.contentReplacements,
          agentName: He.agentName,
          agentColor: He.agentColor === "default" ? void 0 : He.agentColor,
          mainThreadAgentDefinition: ye,
        }));
    } catch (He) {
      if (!ie) {
        let ye = le;
        G("tengu_session_resumed", {
          entrypoint: We("picker"),
          success: false,
          failure_reason: $e(ye),
          error_name: Zr(He).name,
        });
      }
      throw (ke(He), He);
    }
  }
  if ($)
    return yw.jsx(LiveBgMessage, {
      ...$,
    });
  if (W)
    return yw.jsx(Ixm, {
      command: W,
    });
  if (N)
    return yw.jsx(KYo, {
      debug: s,
      commands: e,
      initialTools: n,
      initialMessages: N.messages,
      initialFileHistorySnapshots: N.fileHistorySnapshots,
      initialContentReplacements: N.contentReplacements,
      initialAgentName: N.agentName,
      initialAgentColor: N.agentColor,
      mcpClients: r,
      dynamicMcpConfig: Avt(o ?? {}, N.mainThreadAgentDefinition, {
        strictMcpConfig: l,
      }),
      strictMcpConfig: l,
      systemPrompt: c,
      appendSystemPrompt: u,
      mainThreadAgentDefinition: N.mainThreadAgentDefinition,
      autoConnectIdeFlag: a,
      disableSlashCommands: p,
      thinkingConfig: g,
      fallbackModel: h,
      onTurnComplete: y,
      onCaptureSnapshot: b,
    });
  if (k && (x.length === 0 || ne.length === 0))
    return yw.jsx(S7o, {
      children: yw.jsx(Vc, {
        message: "Loading conversations\u2026",
      }),
    });
  if (P)
    return yw.jsx(S7o, {
      children: yw.jsx(Vc, {
        message: "Resuming conversation\u2026",
      }),
    });
  return yw.jsx(S7o, {
    children: yw.jsx(Bor, {
      logs: ne,
      maxHeight: _,
      onCancel: Ee,
      onSelect: me,
      onLogsChanged: oe ? () => ae(L) : void 0,
      onLoadMore: ce,
      initialSearchQuery: d,
      isLoading: k,
      reloadGeneration: z,
      showAllProjects: L,
      onToggleAllProjects: de,
      onAgenticSearch: qor,
    }),
  });
}
function S7o(e) {
  let t = ymr.c(3),
    { children: n } = e;
  if (!Ns()) return n;
  let r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = Tit()), (t[0] = r));
  else r = t[0];
  let o;
  if (t[1] !== n)
    ((o = yw.jsx(evt, {
      mouseTracking: r,
      children: n,
    })),
      (t[1] = n),
      (t[2] = o));
  else o = t[2];
  return o;
}
function Ixm(e) {
  let t = ymr.c(8),
    { command: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = []), (t[0] = r));
  else r = t[0];
  Pd(xxm, 100, r);
  let o;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((o = yw.jsx(w, {
      children: "This conversation is from a different directory.",
    })),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((s = yw.jsx(w, {
      children: "To resume, run:",
    })),
      (t[2] = s));
  else s = t[2];
  let i;
  if (t[3] !== n)
    ((i = yw.jsxs(U, {
      flexDirection: "column",
      children: [
        s,
        yw.jsxs(w, {
          children: [" ", n],
        }),
      ],
    })),
      (t[3] = n),
      (t[4] = i));
  else i = t[4];
  let a;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((a = yw.jsx(w, {
      dimColor: true,
      children: "(Command copied to clipboard)",
    })),
      (t[5] = a));
  else a = t[5];
  let l;
  if (t[6] !== i)
    ((l = yw.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [o, i, a],
    })),
      (t[6] = i),
      (t[7] = l));
  else l = t[7];
  return l;
}
function xxm() {
  process.exit(0);
}
function LiveBgMessage(e) {
  let t = ymr.c(11),
    { sessionId: n, projectPath: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((o = []), (t[0] = o));
  else o = t[0];
  Pd(kxm, 100, o);
  let s;
  if (t[1] !== r) ((s = r && r !== yr() ? `cd ${ja([r])} ${$2o()} ` : ""), (t[1] = r), (t[2] = s));
  else s = t[2];
  let i = s,
    a;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((a = yw.jsx(w, {
      children: "That session is still running as a background agent.",
    })),
      (t[3] = a));
  else a = t[3];
  let l;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((l = yw.jsxs(w, {
      children: [
        "Open ",
        yw.jsx(w, {
          bold: true,
          children: "claude agents",
        }),
        " to attach to it, or run:",
      ],
    })),
      (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] !== i || t[6] !== n)
    ((c = yw.jsxs(U, {
      flexDirection: "column",
      children: [
        l,
        yw.jsxs(w, {
          children: [" ", i, "claude --resume ", n, " --fork-session"],
        }),
      ],
    })),
      (t[5] = i),
      (t[6] = n),
      (t[7] = c));
  else c = t[7];
  let u;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((u = yw.jsx(w, {
      dimColor: true,
      children: "to branch off a copy.",
    })),
      (t[8] = u));
  else u = t[8];
  let d;
  if (t[9] !== c)
    ((d = yw.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [a, c, u],
    })),
      (t[9] = c),
      (t[10] = d));
  else d = t[10];
  return d;
}
function kxm() {
  process.exit(0);
}
var ymr, rOc, dx, yw;
