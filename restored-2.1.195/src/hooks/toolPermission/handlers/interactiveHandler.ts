// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rko
// matched 2.1.88 source: src/hooks/toolPermission/handlers/interactiveHandler.ts
// class=modified  jaccard=0.2634  score=0.5584  fileCov=0.3327
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Rko] deps: utils/fsOperations.ts, services/analytics/growthbook.ts
Ddf = [
  "fuck",
  "shit",
  "cunt",
  "cock",
  "dick",
  "twat",
  "piss",
  "crap",
  "bitch",
  "whore",
  "ass",
  "tit",
  "cum",
  "fag",
  "dyke",
  "nig",
  "kike",
  "rape",
  "nazi",
  "damn",
  "poo",
  "pee",
  "wank",
  "anus",
];
function Pdf(e, t) {
  if (t.length === 0) return;
  let n = [];
  for (let r of t)
    if (r.type === "setMode") {
      let o = e.setModeFromBridge(r.mode);
      if (!o.ok)
        (T(`bridge setMode '${r.mode}' rejected (${o.error}); falling back to 'default'`),
          e.setModeFromBridge("default"));
    } else n.push(r);
  if (n.length > 0) e.persistPermissions(n);
}
function handleInteractivePermission(params) {
  let {
      ctx: ctx,
      description: n,
      result: result,
      displayInput: o,
      permissionPromptStartTimeMs: s,
      awaitAutomatedChecksBeforeDialog: i,
      bridgeCallbacks: bridgeCallbacks,
      channelCallbacks: l,
      claim: c,
      isResolved: u,
      onWin: d,
      onReprompt: p,
    } = params,
    { setClassifierApprovals: f } = ctx,
    m = bridgeCallbacks ? Qfl.randomUUID() : void 0,
    g,
    h;
  function y(b) {
    if (bridgeCallbacks && m) {
      if (b) bridgeCallbacks.sendResponse(m, b);
      bridgeCallbacks.cancelRequest(m);
    }
    (g?.(), h?.());
  }
  if (bridgeCallbacks && m) {
    let b = "";
    if (ctx.tool.name !== Co && ctx.tool.name !== Ss)
      try {
        b = ctx.tool.getToolUseSummary?.(o) ?? ctx.tool.getActivityDescription?.(o) ?? "";
      } catch {
        b = "";
      }
    bridgeCallbacks.sendRequest(
      m,
      ctx.tool.name,
      o,
      ctx.toolUseID,
      b,
      result.suggestions,
      result.blockedPath,
    );
    let _ = ctx.toolUseContext.abortController.signal;
    ((g = bridgeCallbacks.onResponse(m, (S) => {
      if (!c()) return;
      if ((xe("permission_bridge_relay"), g)) _.removeEventListener("abort", g);
      if ((VMe(f, ctx.toolUseID), h?.(), S.behavior === "allow")) {
        if ((Pdf(ctx, S.updatedPermissions ?? []), S.updatedPermissions?.length))
          IYn(S.updatedPermissions);
        (ctx.logDecision(
          {
            decision: "accept",
            source: {
              type: "user",
              permanent: !!S.updatedPermissions?.length,
            },
          },
          {
            input: S.updatedInput ?? o,
            permissionPromptStartTimeMs: s,
          },
        ),
          d(ctx.buildAllow(S.updatedInput ?? o)));
      } else
        (ctx.logDecision(
          {
            decision: "reject",
            source: {
              type: "user_reject",
              hasFeedback: !!S.message,
            },
          },
          {
            permissionPromptStartTimeMs: s,
          },
        ),
          d(ctx.cancelAndAbort(S.message)));
    })),
      _.addEventListener("abort", g, {
        once: true,
      }));
  }
  if (l && !ctx.tool.requiresUserInteraction?.()) {
    let b = Kfl(ctx.toolUseID),
      _ = MA(),
      S = Xfl(ctx.toolUseContext.getMcp().clients, (A) => p$e(A, _) !== void 0);
    if (S.length > 0) {
      let A = {
        request_id: b,
        tool_name: ctx.tool.name,
        description: n,
        input_preview: Yfl(o),
      };
      for (let x of S) {
        if (x.type !== "connected") continue;
        x.client
          .notification({
            method: kko,
            params: A,
          })
          .catch((I) => {
            (Le("permission_channel_relay", "permission_channel_relay_send_failed"),
              T(`Channel permission_request failed for ${x.name}: ${be(I)}`, {
                level: "error",
              }));
          });
      }
      let v = ctx.toolUseContext.abortController.signal,
        C = l.onResponse(b, (x) => {
          if (!c()) return;
          if ((xe("permission_channel_relay"), h?.(), VMe(f, ctx.toolUseID), bridgeCallbacks && m))
            bridgeCallbacks.cancelRequest(m);
          if ((g?.(), x.behavior === "allow"))
            (ctx.logDecision(
              {
                decision: "accept",
                source: {
                  type: "user",
                  permanent: false,
                },
              },
              {
                permissionPromptStartTimeMs: s,
              },
            ),
              d(ctx.buildAllow(o)));
          else
            (ctx.logDecision(
              {
                decision: "reject",
                source: {
                  type: "user_reject",
                  hasFeedback: false,
                },
              },
              {
                permissionPromptStartTimeMs: s,
              },
            ),
              d(ctx.cancelAndAbort(`Denied via channel ${x.fromServer}`)));
        });
      ((h = () => {
        (C(), v.removeEventListener("abort", h));
      }),
        v.addEventListener("abort", h, {
          once: true,
        }));
    }
  }
  if (!i)
    (async () => {
      if (u()) return;
      let b = await ctx.runHooks(
        Fr(ctx.toolUseContext).mode,
        result.suggestions,
        result.updatedInput,
        s,
      );
      if (b && "reprompted" in b) {
        if (u()) return;
        if ((VMe(f, ctx.toolUseID), bridgeCallbacks && m))
          (bridgeCallbacks.cancelRequest(m), (m = void 0));
        (g?.(), h?.(), p(b.finalInput, b.reprompted.decisionReason, b.reprompted));
        return;
      }
      if (!b || !c()) return;
      if (bridgeCallbacks && m) bridgeCallbacks.cancelRequest(m);
      (g?.(), h?.(), d(b));
    })();
  return {
    notifyBridgeAndTeardown: y,
  };
}
var Qfl;
