// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bzo
// matched 2.1.88 source: src/utils/sessionRestore.ts
// class=modified  jaccard=0.0971  score=0.1617  fileCov=0.1955
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Bzo = E(() => {
  ft();
  dn();
  kt();
  pQ();
  Lze();
});
function Ghm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type !== "assistant") continue;
    let r = n.message.content.find((i) => i.type === "tool_use" && i.name === s$);
    if (!r || r.type !== "tool_use") continue;
    let o = r.input;
    if (o === null || typeof o !== "object") return [];
    let s = hft().safeParse(o.todos);
    return s.success ? s.data : [];
  }
  return [];
}
function NEc(e) {
  if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag) return !1;
  let t = yD(e.resume);
  if (!t) return !1;
  return (PA(Fb(t), "resume"), !0);
}
function Qen(e, t) {
  if (e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0)
    XVt(e.fileHistorySnapshots, (n) => {
      t((r) => ({
        ...r,
        fileHistory: n,
      }));
    });
  if (
    ((Bzo(), ro(Nzo)).restoreGoalFromTranscript(e.messages, t),
    !EH() && e.messages && e.messages.length > 0)
  ) {
    let n = Ghm(e.messages);
    if (n.length > 0) {
      let r = Rt();
      t((o) => ({
        ...o,
        todos: {
          ...o.todos,
          [r]: n,
        },
      }));
    }
  }
}
function Whm(e) {
  return;
}
function Zen(e, t) {
  if (!e && !t) return;
  return {
    name: e ?? "",
    color: t === "default" ? void 0 : t,
  };
}
function VTe(e, t, n) {
  if (t)
    return {
      agentDefinition: t,
      agentType: void 0,
    };
  if (!e)
    return (
      kK(void 0),
      CNe(void 0),
      {
        agentDefinition: void 0,
        agentType: void 0,
      }
    );
  let r = n.activeAgents.find((o) => o.agentType === e);
  if (!r)
    return (
      T(`Resumed session had agent "${e}" but it is no longer available. Using default behavior.`),
      kK(void 0),
      CNe(void 0),
      {
        agentDefinition: void 0,
        agentType: void 0,
      }
    );
  if ((kK(r.agentType), CNe(r), !r_() && r.model && r.model !== "inherit")) {
    let o = zo(r.model);
    if (KS(o) || xa(o)) py(o);
    else
      T(
        `Agent model "${r.model}" is not in the availableModels allowlist; keeping the session model`,
        {
          level: "warn",
        },
      );
  }
  return {
    agentDefinition: r,
    agentType: r.agentType,
  };
}
async function qhm(e, t) {
  if (t || !e) return;
  let n = jO(e);
  if (n === "default" && e !== "default") return;
  if (n === "plan" || n === "bypassPermissions") return;
  if (n === "default") {
    {
      let { isAutoModeFromFallback: r } = await Promise.resolve().then(() => (Eoe(), Ope));
      if (r()) return "default";
    }
    return;
  }
  if (n === "auto") {
    let { isAutoModeGateEnabled: r } = await Promise.resolve().then(() => (__(), T6n));
    if (!r()) return;
  }
  return n;
}
function Uzo() {
  return Boolean(
    r_() !== void 0 ||
    Oe.ANTHROPIC_MODEL ||
    Oe.ANTHROPIC_DEFAULT_FABLE_MODEL ||
    Oe.ANTHROPIC_DEFAULT_OPUS_MODEL ||
    Oe.ANTHROPIC_DEFAULT_SONNET_MODEL ||
    Oe.ANTHROPIC_DEFAULT_HAIKU_MODEL ||
    !td(),
  );
}
function w7e(e, t, n, r = (o) => o()) {
  if (Uzo()) return;
  let o = UEc(e, t);
  if (o.kind === "none") return;
  if (o.kind === "mode_dependent_setting") {
    r(() =>
      G("tengu_resume_model_restore", {
        outcome: $e("skipped_mode_dependent_setting"),
        is_eap: !1,
      }),
    );
    return;
  }
  if (o.kind === "declined")
    r(() =>
      G("tengu_resume_model_restore", {
        outcome: $e("declined"),
        decline_reason: Oo(o.reason),
        is_eap: i_e(o.model),
      }),
    );
  if (o.kind === "declined") {
    let s = (t && dp(t)) || "the default model";
    n?.(
      `Session model ${o.model} could not be restored (${Vhm[o.reason]}) \u2014 using ${s} instead.`,
    );
    return;
  }
  return o.model;
}
function BEc(e, t) {
  let n = UEc(e, t);
  return n.kind === "ok" ? n.model : void 0;
}
function zhm(e, t) {
  if (e === "opusplan") return t.includes("opus") || t.includes("sonnet");
  if (e === "haiku") return t.includes("haiku") || t.includes("sonnet");
  return !1;
}
function UEc(e, t) {
  let n = new Set(_7s.map(mo)),
    r = t ? zo(t) : void 0,
    o = r ? dp(r) : void 0;
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (i?.type !== "assistant" || i.isMeta || i.message.model === _I) continue;
    let a = i.message.model,
      l = GG();
    if (trt(l) && !i_e(a) && zhm(l, mo(a)))
      return {
        kind: "mode_dependent_setting",
      };
    let c = !(n.has(mo(a)) || i_e(a) || dp(a) === o)
      ? "unknown_family"
      : !KS(a) && !xa(a)
        ? "not_allowed"
        : FJl(a)
          ? "retired"
          : void 0;
    if (c)
      return {
        kind: "declined",
        model: a,
        reason: c,
      };
    if (
      ((t && Sy(t)) || (r !== void 0 && Sy(r))) &&
      I9(a) &&
      (dp(a) === o || (t && mo(zo(dp(t))) === mo(a)))
    )
      return {
        kind: "ok",
        model: a + "[1m]",
      };
    return {
      kind: "ok",
      model: a,
    };
  }
  return {
    kind: "none",
  };
}
function Khm(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r?.type === "system" && r.subtype === "model_refusal_fallback") {
      let o = dp(r.fallbackModel),
        s = dp(t);
      return o === s || mo(o) === mo(s);
    }
  }
  return !1;
}
function etn(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type === "system" && n.subtype === "model_refusal_fallback") n.neutralizedByFork = !0;
  }
}
function Yhm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type === "system" && n.subtype === "model_refusal_fallback")
      return n.neutralizedByFork === !0
        ? {
            fallbackModel: n.fallbackModel,
          }
        : void 0;
  }
  return;
}
function cpr(e, t) {
  G("tengu_resume_model_restore", {
    outcome: $e(e),
    is_eap: i_e(t),
  });
}
function $Ec() {
  Promise.resolve()
    .then(() => (hgt(), iAo))
    .then((e) => e.fetchBootstrapData());
}
function C7e(e, t, n) {
  if (!Khm(e, t)) return (py(t), $Ec(), cpr("restored", t), t);
  if (n) {
    (G("tengu_refusal_fallback_resume_latch", {
      action: $e("fork_skip_restore"),
    }),
      cpr("skipped_fork_fallback", t));
    return;
  }
  let r = Yhm(e);
  if (r && dp(r.fallbackModel) === dp(t)) {
    (G("tengu_refusal_fallback_resume_latch", {
      action: $e("fork_neutralized_skip"),
    }),
      cpr("skipped_fork_neutralized", t));
    return;
  }
  return (
    py(t),
    $Ec(),
    lJe({
      fallbackModel: t,
      previousOverride: void 0,
      previousAppStateModel: $2() ?? null,
      previousModelForSession: null,
    }),
    cpr("restored", t),
    G("tengu_refusal_fallback_resume_latch", {
      action: $e("relatch"),
    }),
    t
  );
}
async function Xhm(e, t, n, r) {
  if (!e) return r;
  CP.cache.clear?.();
  let o = await CP(t),
    s = [...o.allAgents, ...n];
  return {
    ...o,
    allAgents: s,
    activeAgents: YF(s),
  };
}
function ttn(e, t) {
  let n = Gm();
  if (n) {
    fq(n);
    return;
  }
  if (!e) {
    if (e === null) return;
    if (!t || $t() === t) return;
    try {
      process.chdir(t);
    } catch {
      return;
    }
    (Uy(t),
      _D($t()),
      ak(),
      k$e(),
      gS.cache.clear?.(),
      mY(),
      cb.cache.clear?.(),
      bS()?.refreshGitBranch?.());
    return;
  }
  try {
    process.chdir(e.worktreePath);
  } catch {
    fq(null);
    return;
  }
  (Uy(e.worktreePath),
    _D($t()),
    qlr(e),
    ak(),
    k$e(),
    gS.cache.clear?.(),
    mY(),
    bS()?.refreshGitBranch?.());
}
function FEc(e) {
  let t = Gm();
  if (!t) return;
  if ((qlr(null), ak(), k$e(), gS.cache.clear?.(), t.worktreePath === e)) return;
  try {
    process.chdir(t.originalCwd);
  } catch {
    return;
  }
  (Uy(t.originalCwd), _D($t()), mY(), bS()?.refreshGitBranch?.());
}
async function upr(e, t, n) {
  let r;
  if (((r = n.modeApi?.matchSessionMode(e.mode)), r)) e.messages.push(cc(r, "warning"));
  if (!t.forkSession) {
    let h = t.sessionIdOverride ?? e.sessionId;
    if (h)
      (PA(Fb(h), "resume", t.transcriptPath ? OEc.dirname(t.transcriptPath) : null),
        await Xen(),
        await BQ(),
        G8n(h));
  } else if (e.contentReplacements?.length) await Uze(e.contentReplacements);
  if (
    (Gse(
      t.forkSession
        ? {
            ...e,
            worktreeSession: void 0,
            bridgeSessionId: void 0,
            bridgeLastSeq: void 0,
            bridgeDialogKinds: void 0,
          }
        : e,
    ),
    !t.forkSession)
  )
    (ttn(e.worktreeSession), Hme());
  let { agentDefinition: o, agentType: s } = VTe(
      e.agentSetting,
      n.mainThreadAgentDefinition,
      n.agentDefinitions,
    ),
    i = await qhm(e.permissionMode, n.permissionModeCliSet);
  if (t.forkSession) etn(e.messages);
  let a = w7e(e.messages, n.initialState.mainLoopModel, (h) => e.messages.push(cc(h, "warning"))),
    l = a ? C7e(e.messages, a, t.forkSession) : void 0,
    c;
  if (i) {
    let { transitionPermissionMode: h } = await Promise.resolve().then(() => (__(), T6n)),
      y = n.initialState.toolPermissionContext;
    try {
      c = {
        ...h(y.mode, i, y),
        mode: i,
      };
    } catch (b) {
      T(`[sessionRestore] transitionPermissionMode rejected restored mode '${i}': ${b}`);
    }
  }
  Z1e(n.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
  let u = t.includeAttribution ? Whm(e) : void 0,
    d = Zen(e.agentName, e.agentColor),
    p = n.initialState.standaloneAgentContext
      ? {
          ...d,
          ...n.initialState.standaloneAgentContext,
        }
      : d;
  JY(p?.name);
  let f = await Xhm(!!r, n.currentCwd, n.cliAgents, n.agentDefinitions),
    m = n.initialState.initialMessage;
  if (
    Oe.CLAUDE_CODE_RESUME_INTERRUPTED_TURN &&
    e.turnInterruptionState?.kind === "interrupted_prompt" &&
    Y1(e.turnInterruptionState.message.origin)
  )
    (T("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn"),
      t9t(e.messages, e.turnInterruptionState.message),
      (m = {
        message: e.turnInterruptionState.message,
      }));
  let g = n.initialState;
  return (
    (Bzo(), ro(Nzo)).restoreGoalFromTranscript(e.messages, (h) => {
      g = h(g);
    }),
    {
      messages: e.messages.filter((h) => !(h.type === "system" && h.subtype === "bridge_status")),
      fileHistorySnapshots: e.fileHistorySnapshots,
      contentReplacements: e.contentReplacements,
      agentName: e.agentName,
      agentColor: e.agentColor === "default" ? void 0 : e.agentColor,
      restoredAgentDef: o,
      initialState: {
        ...g,
        initialMessage: m,
        ...(!t.forkSession &&
          e.bridgeSessionId &&
          !(g.replBridgeEnabled && !g.replBridgeOutboundOnly) && {
            replBridgeEnabled: !0,
            replBridgeOutboundOnly: !1,
          }),
        ...{},
        ...(s && {
          agent: s,
        }),
        ...(l && {
          mainLoopModel: l,
        }),
        ...(u && {
          attribution: u,
        }),
        ...(p && {
          standaloneAgentContext: p,
        }),
        ...(c && {
          toolPermissionContext: c,
        }),
        agentDefinitions: f,
      },
    }
  );
}
var OEc, Vhm;
