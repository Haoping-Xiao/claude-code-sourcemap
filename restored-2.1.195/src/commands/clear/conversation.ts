// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rKe
// matched 2.1.88 source: src/commands/clear/conversation.ts
// class=modified  jaccard=0.2871  score=0.5429  fileCov=0.3787
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var rKe = E(() => {
  ft();
  Zf();
  YWe();
  S4();
  JSt();
  sa();
  sbt();
  l8t();
  mLe();
  d8n();
  aSt();
  _pt();
  rq();
  Vv();
  sN();
  dC();
  BR();
  gM();
});
var ZDl = {};
_t(ZDl, {
  clearConversation: () => clearConversation,
});
async function* clearConversation({
  setMessages: e,
  readFileState: t,
  loadedNestedMemoryPaths: n,
  sessionEnvVars: r,
  memorySelector: o,
  getAppState: s,
  setAppState: i,
  isolationLatch: a,
  clearedSessionTitle: l,
}) {
  let c = s7t();
  await oKe("clear", {
    getAppState: s,
    setAppState: i,
    signal: AbortSignal.timeout(c),
  });
  let u = sCt();
  if (u)
    G("tengu_cache_eviction_hint", {
      scope: We("conversation_clear"),
      last_request_id: Hr(u),
    });
  let d = new Set(),
    p = [],
    f = (S) => "isBackgrounded" in S && S.isBackgrounded === false;
  if (s)
    for (let S of Object.values(s().tasks)) {
      if (f(S)) continue;
      if (El(S)) (d.add(S.agentId), p.push(S));
      else if (uE(S)) d.add(S.identity.agentId);
    }
  (e(() => []), IOo(d, i));
  let m = yr();
  try {
    Uy(m);
  } catch {
    T(`/clear: originalCwd "${m}" no longer exists; falling back`);
    let S = rc();
    if (S !== m)
      try {
        Uy(S);
      } catch {}
  }
  if ((t.clear(), n)) for (let S of Object.keys(n)) delete n[S];
  if ((r?.clear(), y5e(o), a && d.size === 0)) a.current = null;
  if (i)
    i((S) => {
      let A = {};
      for (let [v, C] of Object.entries(S.tasks)) {
        if (!f(C)) {
          A[v] = C;
          continue;
        }
        try {
          if (C.status === "running") {
            if (vT(C)) {
              if ((C.shellCommand?.kill(), C.shellCommand?.cleanup(), C.cleanupTimeoutId))
                clearTimeout(C.cleanupTimeoutId);
            }
            if ("abortController" in C) C.abortController?.abort();
          }
        } catch (x) {
          ke(x);
        }
        jy(v);
      }
      return {
        ...S,
        tasks: A,
        ...{},
        attribution: Xpt(),
        cacheBreakerPhrase: void 0,
        activeGoal: void 0,
        frameUrls: {},
        frameNavPath: null,
        frameExpanded: false,
        footerLinks: S.footerLinks.filter((v) => v.key !== void 0),
        standaloneAgentContext: S.standaloneAgentContext?.prideGradient
          ? {
              prideGradient: S.standaloneAgentContext.prideGradient,
            }
          : void 0,
        fileHistory: {
          snapshots: [],
          trackedFiles: new Set(),
          snapshotSequence: 0,
        },
      };
    });
  if (s) {
    for (let S of s().mcp.clients)
      if (S.name === "ide" && S.type === "connected")
        ((S.client.onclose = void 0), await ST(S.name, S.config).catch(() => {}));
  }
  ePl();
  let g = Gg(Rt()),
    h = Rt(),
    y = l ? (ML() ?? em()) : void 0;
  if (
    (o7t(),
    yield {
      type: "conversation_reset",
      newConversationId: QDl.randomUUID(),
    },
    Qyr({
      setCurrentAsParent: true,
    }),
    S1a(),
    process.env.CLAUDE_CODE_SESSION_ID)
  )
    process.env.CLAUDE_CODE_SESSION_ID = Rt();
  if ((await BQ(), await tKi(Rt(), em()), l)) await Aq(h, l, y, "user");
  else if (g) await Aq(Rt(), g, void 0, "user");
  for (let S of p) {
    if (S.status !== "running") continue;
    ZAe(S.id, uk(Bu(S.agentId)));
  }
  {
    let { saveMode: S } = (_a(), ro(nVe)),
      { isCoordinatorMode: A } = (l$(), ro(qW));
    S(A() ? "coordinator" : "normal");
  }
  let b = Gm();
  if (b) fq(b);
  if (a?.current) Ife(a.current);
  let _ = await z8("clear");
  if (_.length > 0) e(() => _);
}
var QDl;
