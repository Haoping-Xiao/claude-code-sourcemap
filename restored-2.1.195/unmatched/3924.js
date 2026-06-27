// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XXa
// matched 2.1.88 source: node_modules/@opentelemetry/otlp-transformer/build/src/generated/root.js
// class=new  jaccard=0.0074  score=0.1122  fileCov=0.0079
// note: nearest: node_modules/@opentelemetry/otlp-transformer/build/src/generated/root.js (0.0074); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XXa = E(() => {
  Xr();
  je();
  At();
  Ao();
  pht();
  Epe();
  dn();
  kt();
  RHo();
  zXa = ["positive", "neutral", "negative", "unknown"];
  cXp = {
    name: LHo,
    description: "Rate how a context tip was received based on subsequent user behavior.",
    input_schema: {
      type: "object",
      properties: {
        acted_on: {
          type: "boolean",
          description: "Did the user try the suggested action?"
        },
        reception: {
          type: "string",
          enum: [...zXa],
          description: "How was the tip received? neutral is the expected default."
        }
      },
      required: ["acted_on", "reception"]
    }
  }, uXp = ve(() => H.object({
    acted_on: H.boolean(),
    reception: H.enum(zXa)
  }));
});
function DVt() {
  if (md()) return !1;
  if (!Us("allow_context_tips")) return !1;
  return at("tengu_amber_quill", !1);
}
async function QXa(e, t, n, r, o) {
  if (!Us("allow_context_tips")) return Promise.resolve();
  if (YXa(e, r.messages, t), !DVt()) return Promise.resolve();
  if (Dr().spinnerTipsEnabled === !1) return Promise.resolve();
  if (Js() && fy() === null) return Promise.resolve();
  if (e.maxIdleGapMinutes = Math.max(e.maxIdleGapMinutes, $Xa(r.messages)), e.inFlight) return Promise.resolve();
  if (e.shownTipIds.size >= 3) return Promise.resolve();
  let s = P9n(r);
  if (s < 3) return Promise.resolve();
  if (s < e.lastAttemptTurn) e.lastAttemptTurn = -1 / 0;
  if (s - e.lastAttemptTurn < 5) return Promise.resolve();
  e.inFlight = !0;
  let i = Rt(),
    a;
  try {
    let u = new Set(t.map(y => y.name)),
      d = PXa(r.messages),
      p = eA(r.messages),
      [f, m, g] = await Promise.all([bHo(), dCe().catch(() => 0), qs().stat(JXa.join(tr(), "CLAUDE.md")).then(() => !0, () => !1)]),
      h = f && On(f, y => !y.startsWith("claude-bg-"));
    a = OXa({
      ...r,
      toolNames: u,
      idleGapMinutes: e.maxIdleGapMinutes,
      contextTokens: p,
      subscriptionType: Di(),
      lastTurnThinkingTokens: d.thinking,
      lastTurnOutputTokens: d.output,
      tmuxSessionCount: h,
      worktreeCount: m,
      hasUserMemoryFile: g,
      staleFileTokens: p > 200000 ? MXa(r.messages, n) : 0
    }, {
      has: y => e.shownTipIds.has(y) || Spe(`ctx:${y}`) < pXp
    });
  } catch (u) {
    return e.inFlight = !1, T(`[context-tips] eligibility error: ${be(u)}`), It("tips_context_show", "tips_context_show_eligibility_failed"), Promise.resolve();
  }
  if (a.length === 0) return e.inFlight = !1, T("[context-tips] no eligible entries, skipping"), Promise.resolve();
  e.lastAttemptTurn = s, e.maxIdleGapMinutes = 0, T(`[context-tips] classifier eligible, firing sideQuery (${a.length} entries)`), e.classifier ??= VXa();
  let l = r.messages.length + 1;
  CXa();
  let c = IXa();
  return e.classifier.classify(r.messages, t, {
    numStartups: r.numStartups,
    turnCount: s,
    mcpServers: r.mcpClients.map(u => u.name),
    teamMcpServers: (c?.mcp_servers ?? []).map(u => ({
      name: u.name,
      userCount: u.user_count
    })),
    teamSkills: (c?.skills ?? []).map(u => ({
      name: u.name,
      userCount: u.user_count
    }))
  }, a, AbortSignal.timeout(1e4)).then(({
    tip: u,
    classifierLogId: d
  }) => {
    if (!u) return;
    if (Rt() !== i) {
      T("[context-tips] session changed mid-classify, dropping");
      return;
    }
    e.shownTipIds.add(u.featureId), uht(`ctx:${u.featureId}`), KXa(e, u, d, l), T(`[context-tips] showing tip: feature=${u.featureId}`), o(u), xe("tips_context_show", {
      feature_id: Hr(u.featureId) ?? We("unknown")
    });
  }).catch(u => {
    let d = be(u);
    T(`[context-tips] classifier error: ${d}`), fht({
      outcome: "outer_error",
      error: d
    }), It("tips_context_show", "tips_context_show_outer_error");
  }).finally(() => {
    e.inFlight = !1;
  });
}
var JXa,
  pXp = 50;