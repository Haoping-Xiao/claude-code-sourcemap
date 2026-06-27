// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GEc
// matched 2.1.88 source: src/utils/handlePromptSubmit.ts
// class=modified  jaccard=0.321  score=0.6633  fileCov=0.3835
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var GEc = E(() => {
  Ao();
  I7e();
});
function dpr(e, t) {
  if (t === void 0) return;
  for (let n of e) if (n.type === "user" && n.uuid === t) n.verifiedSlackHumanTurn = true;
}
function Zhm() {
  Bc(0);
}
async function ppr(e) {
  let {
      helpers: t,
      queryGuard: n,
      isExternalLoading: r = false,
      commands: o,
      onInputChange: s,
      setPastedContents: i,
      setToolJSX: a,
      getToolUseContext: l,
      messages: c,
      mainLoopModel: u,
      ideSelection: d,
      setUserInputOnProcessing: p,
      setAbortController: f,
      onQuery: m,
      getAppState: g,
      setAppState: h,
      onBeforeQuery: y,
      canUseTool: b,
      queuedCommands: _,
      uuid: S,
      skipSlashCommands: A,
    } = e,
    { setCursorOffset: v, clearBuffer: C, resetHistory: x } = t;
  if (_?.length) {
    (jKt(),
      await WEc({
        inputSource: "queued",
        queuedCommands: _,
        messages: c,
        mainLoopModel: u,
        ideSelection: d,
        querySource: e.querySource,
        commands: o,
        queryGuard: n,
        setToolJSX: a,
        getToolUseContext: l,
        setUserInputOnProcessing: p,
        setAbortController: f,
        onQuery: m,
        getAppState: g,
        setAppState: h,
        onBeforeQuery: y,
        resetHistory: x,
        canUseTool: b,
        onInputChange: s,
        deferSlashToEngine: e.deferSlashToEngine,
      }));
    return;
  }
  let I = e.input ?? "",
    k = e.mode ?? "prompt",
    D = e.pastedContents ?? {},
    P = new Set(jM(I).map((W) => W.id)),
    O = cv(D, (W) => W.type !== "image" || P.has(W.id)),
    L = Object.values(O).some(qze);
  if (I.trim() === "") return;
  if (k !== "bash" && !A && nir.includes(I.trim())) {
    if (o.find((V) => V.name === "exit"))
      ppr({
        ...e,
        input: "/exit",
      });
    else Zhm();
    return;
  }
  kEc();
  let M = sX(I, O),
    N = jM(I).filter((W) => O[W.id]?.type === "text"),
    B = N.length,
    $ = N.reduce((W, V) => W + (O[V.id]?.content.length ?? 0), 0);
  if (
    (G("tengu_paste_text", {
      pastedTextCount: B,
      pastedTextBytes: $,
    }),
    !A && M.trim().startsWith("/"))
  ) {
    let W = M.trim(),
      { name: V, args: Y } = p_t(W),
      z = o.find(
        (K) => YMe(K, Y) && Ik(K) && (K.name === V || K.aliases?.includes(V) || xu(K) === V),
      );
    if (z && z.type === "local-jsx" && (n.isActive || r)) {
      (G("tengu_immediate_command_executed", {
        commandName: z.name,
      }),
        s(""),
        v(0),
        i({}),
        C());
      let K = l(c, [], Sl(), u),
        Z = false,
        J = (re, ee) => {
          if (
            ((Z = true),
            a({
              jsx: null,
              shouldHidePromptInput: false,
              clearLocalJSX: true,
            }),
            re && ee?.display !== "skip" && e.addNotification)
          )
            e.addNotification({
              key: `immediate-${z.name}`,
              kind: "feedback",
              text: re,
              priority: "immediate",
            });
          if (ee?.nextInput)
            if (ee.submitNextInput)
              j_({
                agentId: ls(),
                value: ee.nextInput,
                mode: "prompt",
                origin: {
                  kind: "auto-continuation",
                },
              });
            else s(ee.nextInput);
        },
        oe = await (
          await z.load()
        ).call(
          J,
          {
            ...K,
            isMidTurn: true,
          },
          Y,
          V,
        );
      if (oe && !Z)
        a({
          jsx: oe,
          shouldHidePromptInput: false,
          isLocalJSXCommand: true,
          isImmediate: true,
        });
      return;
    }
  }
  if (n.isActive || r) {
    if (k !== "prompt" && k !== "bash") {
      Le("prompt_queued", "mode_not_queueable");
      return;
    }
    if (e.hasInterruptibleToolInProgress) {
      T(`[interrupt] Aborting current turn: streamMode=${e.streamMode}`);
      let W = lL(u, g().effortValue);
      (G("tengu_cancel", {
        source: We("interrupt_on_submit"),
        streamMode: Oo(e.streamMode),
        ...(W && {
          effort_level: $e(W),
        }),
      }),
        e.abortController?.abort(eP("interrupt")));
    }
    (j_({
      agentId: ls(),
      value: M.trim(),
      preExpansionValue: I.trim(),
      mode: k,
      pastedContents: L ? O : void 0,
      skipSlashCommands: A,
      suppressWorkflowKeyword: e.suppressWorkflowKeyword,
      inputSource: e.inputSource,
      uuid: S,
      origin: {
        kind: "human",
      },
    }),
      xe("prompt_queued"),
      s(""),
      v(0),
      i({}),
      x(),
      C());
    return;
  }
  jKt();
  let q = {
    value: M,
    preExpansionValue: I,
    mode: k,
    pastedContents: L ? O : void 0,
    skipSlashCommands: A,
    suppressWorkflowKeyword: e.suppressWorkflowKeyword,
    uuid: S,
    agentId: ls(),
    origin: {
      kind: "human",
    },
  };
  (xe("prompt_submit"),
    await WEc({
      inputSource: e.inputSource ?? "typed",
      queuedCommands: [q],
      messages: c,
      mainLoopModel: u,
      ideSelection: d,
      querySource: e.querySource,
      commands: o,
      queryGuard: n,
      setToolJSX: a,
      getToolUseContext: l,
      setUserInputOnProcessing: p,
      setAbortController: f,
      onQuery: m,
      getAppState: g,
      setAppState: h,
      onBeforeQuery: y,
      resetHistory: x,
      canUseTool: b,
      onInputChange: s,
      deferSlashToEngine: e.deferSlashToEngine,
    }));
}
async function WEc(e) {
  let {
      messages: t,
      mainLoopModel: n,
      ideSelection: r,
      querySource: o,
      queryGuard: s,
      setToolJSX: i,
      getToolUseContext: a,
      setUserInputOnProcessing: l,
      setAbortController: c,
      onQuery: u,
      getAppState: d,
      setAppState: p,
      onBeforeQuery: f,
      resetHistory: m,
      canUseTool: g,
      queuedCommands: h,
      inputSource: y,
    } = e,
    b = Sl();
  c(b);
  function _() {
    return {
      ...a(t, [], b, n),
      deferSlashToEngine: e.deferSlashToEngine,
    };
  }
  try {
    (s.reserve(), jp("query_process_user_input_start"));
    let S = [],
      A = false,
      v,
      C,
      x,
      I,
      k,
      D,
      P = h ?? [],
      O = P[0]?.workload,
      L = O !== void 0 && P.every(($) => $.workload === O) ? O : void 0,
      M = Math.max(
        0,
        P.findIndex(($) => $.mode !== "task-notification" && Y1($.origin) && !$.isMeta),
      ),
      N = P[M]?.value,
      B =
        typeof N === "string"
          ? N
          : N
            ? zl(
                N,
                `
`,
              )
            : "";
    await CAn(L, () =>
      SFn(B, async () => {
        let $ = _();
        for (let q = 0; q < P.length; q++) {
          let W = P[q],
            V = q === M,
            Y =
              W.origin ??
              (W.mode === "task-notification"
                ? {
                    kind: "task-notification",
                  }
                : void 0),
            z = W.isMeta || !YW(Y) ? "system" : (W.inputSource ?? y),
            K = await bTt({
              input: W.value,
              preExpansionInput: W.preExpansionValue,
              promptSource: z,
              suppressWorkflowKeyword: W.suppressWorkflowKeyword,
              mode: W.mode,
              setToolJSX: i,
              context: $,
              pastedContents: W.pastedContents,
              messages: t,
              setUserInputOnProcessing: V ? l : void 0,
              isAlreadyProcessing: !V,
              querySource: o,
              canUseTool: g,
              uuid: W.uuid,
              ideSelection: V ? r : void 0,
              skipSlashCommands: W.skipSlashCommands,
              bridgeOrigin: W.bridgeOrigin,
              isMeta: W.isMeta,
              skipAttachments: !V,
              origin: Y,
            });
          if (Y) fcr(K.messages, Y);
          if (W.priority === "later") {
            for (let Z of K.messages) if (Z.type === "user") Z.queuePriority = "later";
          }
          if (W.verifiedSlackHumanTurn) dpr(K.messages, W.uuid);
          if ((S.push(...K.messages), K.engineDeferredSlash)) D = K.engineDeferredSlash;
          if (V)
            ((A = K.shouldQuery),
              (v = K.allowedTools),
              (C = K.model),
              (x = K.effort),
              (I = K.nextInput),
              (k = K.submitNextInput));
        }
        if ((jp("query_process_user_input_end"), K_()))
          (jp("query_file_history_snapshot_start"),
            S.filter(_Zt).forEach((q) => {
              Z9e(
                () => d().fileHistory,
                (W) =>
                  p((V) => {
                    let Y = aMe(V.fileHistory, W);
                    if (Y === V.fileHistory) return V;
                    return {
                      ...V,
                      fileHistory: Y,
                    };
                  }),
                q.uuid,
              );
            }),
            jp("query_file_history_snapshot_end"));
        if (S.length) {
          (m(),
            i({
              jsx: null,
              shouldHidePromptInput: false,
              clearLocalJSX: true,
            }));
          let q = P[M],
            W = q?.mode ?? "prompt",
            V = q && typeof q.value === "string" ? q.value : void 0,
            Y = W === "prompt" || (W === "bash" && A),
            z = P.some((Z) => Z.stopHookActive) ? true : void 0,
            K = q?.clientPlatform;
          await u(
            S,
            b,
            A,
            v ?? [],
            C ? GPt(C, n) : n,
            Y ? f : void 0,
            V,
            x,
            z,
            K,
            $.options?.activeSkill,
            D,
          );
        } else
          (s.cancelReservation(),
            i({
              jsx: null,
              shouldHidePromptInput: false,
              clearLocalJSX: true,
            }),
            m(),
            c(null),
            dde());
        if (I)
          if (k)
            j_({
              agentId: ls(),
              value: I,
              mode: "prompt",
              origin: {
                kind: "auto-continuation",
              },
            });
          else e.onInputChange(I);
      }),
    );
  } finally {
    (s.cancelReservation(), l(void 0), dde());
  }
}
