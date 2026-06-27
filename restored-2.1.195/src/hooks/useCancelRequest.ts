// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iEc
// matched 2.1.88 source: src/hooks/useCancelRequest.ts
// class=modified  jaccard=0.4151  score=0.6657  fileCov=0.5245
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iEc] deps: tC, Yj, ps
((sEc = R(lt(), 1)),
  (yhm = {
    setCursorOffset: () => {},
    clearBuffer: () => {},
    resetHistory: () => {},
  }));
function kzo(e) {
  return (
    (El(e) && (e.status === "running" || sw(e))) ||
    (e.type === "in_process_teammate" && e.status === "running")
  );
}
function Rzo(e) {
  let {
      onCancel: t,
      onAgentsKilled: n,
      isMessageSelectorVisible: r,
      screen: o,
      abortSignal: s,
      isExternalLoading: i = false,
      popCommandFromQueue: a,
      isLocalJSXCommand: l,
      isInputOverlayActive: c,
      isVimEditing: u,
      inputMode: d,
      isInputEmpty: p,
      getInFlightMessageId: f,
    } = e,
    m = Dc(),
    g = Ho(),
    h = $T(),
    y = Mme().length,
    { addNotification: b, removeNotification: _ } = Li(),
    S = GTe.useRef(0),
    A = Ht((Y) => Y.viewSelectionMode),
    v = Ht((Y) => Y.effortValue),
    [, C] = GTe.useState(0),
    x = NRe(),
    I = Ht((Y) => Object.values(Y.tasks).some(kzo)),
    k = GTe.useCallback(() => {
      let Y = m.getState().tasks,
        z = Object.entries(Y).filter(([, J]) => kzo(J));
      if (z.length === 0) return false;
      for (let [J, ne] of z) if ((Iyt(J, h), El(ne))) ife(J, h);
      Mvl(Y, h, "user");
      for (let [J, ne] of z) if (ne.type === "in_process_teammate") uMe(J, h, g);
      let K = [];
      for (let [J, ne] of z)
        if ((K.push(ne.description), ne.type !== "in_process_teammate"))
          xf(J, "stopped", {
            toolUseId: ne.toolUseId,
            summary: ne.description,
          });
      let Z =
        K.length === 1
          ? `Background agent "${K[0]}" was stopped by the user.`
          : `${K.length} background agents were stopped by the user: ${K.map((J) => `"${J}"`).join(", ")}.`;
      return (
        Ad({
          agentId: ls(),
          value: Z,
          mode: "task-notification",
        }),
        n(),
        true
      );
    }, [m, n, h, g]),
    D = GTe.useCallback(
      (Y = false) => {
        let z = lL(As(), v),
          K = f?.(),
          Z = {
            source: We("escape"),
            streamMode: $e(dEe().mode),
            ...(z && {
              effort_level: $e(z),
            }),
            ...(K && {
              message_id: Hr(K),
            }),
          };
        if (GOn() > 0) C((J) => J + 1);
        if ((s !== void 0 && !s.aborted) || i) {
          (G("tengu_cancel", Z), t());
          return;
        }
        if (TSe()) {
          if (a) {
            a();
            return;
          }
        }
        if (!Y && I && k()) {
          G("tengu_cancel", Z);
          return;
        }
        (G("tengu_cancel", Z), t());
      },
      [s, i, a, t, f, v, I, k],
    ),
    P = z6i(),
    O = (s !== void 0 && !s.aborted) || i,
    L = y > 0,
    M = d !== void 0 && d !== "prompt" && p,
    N = A === "viewing-agent",
    B = o !== "transcript" && !r && !l && !P && !c,
    $ = B && (O || L || x || I) && !M && !u && !N,
    q = B && (O || L || x || I || N);
  $r("chat:cancel", D, {
    context: "Chat",
    isActive: $,
  });
  let W = GTe.useCallback(() => {
    if (N) {
      let { viewingAgentTaskId: Y, tasks: z } = m.getState(),
        K = Y ? z[Y] : void 0;
      if (kZ(K)) MTt(K, h, g);
      if ((Wq(g), O || L || x)) D(true);
      return;
    }
    D();
  }, [N, m, h, g, O, L, x, D]);
  $r("app:interrupt", W, {
    context: "Global",
    isActive: q,
  });
  let V = GTe.useCallback(() => {
    let Y = m.getState().tasks;
    if (!Object.values(Y).some(kzo)) {
      b({
        key: "kill-agents-none",
        kind: "feedback",
        text: "No background agents running",
        priority: "immediate",
        timeoutMs: 2000,
      });
      return;
    }
    let K = Date.now();
    if (K - S.current <= aEc) {
      ((S.current = 0), _("kill-agents-confirm"));
      let ne = lL(As(), v);
      (G("tengu_cancel", {
        source: We("kill_agents"),
        ...(ne && {
          effort_level: $e(ne),
        }),
      }),
        uua(),
        k());
      return;
    }
    S.current = K;
    let J = eC("chat:killAgents", "Chat", "ctrl+x ctrl+k");
    b({
      key: "kill-agents-confirm",
      kind: "feedback",
      text: `Press ${J} again to stop background agents`,
      priority: "immediate",
      timeoutMs: aEc,
    });
  }, [m, b, _, k, v]);
  return (
    $r("chat:killAgents", V, {
      context: "Chat",
    }),
    null
  );
}
var GTe,
  aEc = 3000;
