// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rko
// matched 2.1.88 source: src/hooks/toolPermission/handlers/interactiveHandler.ts
// class=modified  jaccard=0.1289  score=0.3415  fileCov=0.1716
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Rko = E(() => {
  Jt();
  Un();
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
});
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
function Zfl(e) {
  let {
      ctx: t,
      description: n,
      result: r,
      displayInput: o,
      permissionPromptStartTimeMs: s,
      awaitAutomatedChecksBeforeDialog: i,
      bridgeCallbacks: a,
      channelCallbacks: l,
      claim: c,
      isResolved: u,
      onWin: d,
      onReprompt: p,
    } = e,
    { setClassifierApprovals: f } = t,
    m = a ? Qfl.randomUUID() : void 0,
    g,
    h;
  function y(b) {
    if (a && m) {
      if (b) a.sendResponse(m, b);
      a.cancelRequest(m);
    }
    (g?.(), h?.());
  }
  if (a && m) {
    let b = "";
    if (t.tool.name !== Co && t.tool.name !== Ss)
      try {
        b = t.tool.getToolUseSummary?.(o) ?? t.tool.getActivityDescription?.(o) ?? "";
      } catch {
        b = "";
      }
    a.sendRequest(m, t.tool.name, o, t.toolUseID, b, r.suggestions, r.blockedPath);
    let _ = t.toolUseContext.abortController.signal;
    ((g = a.onResponse(m, (S) => {
      if (!c()) return;
      if ((xe("permission_bridge_relay"), g)) _.removeEventListener("abort", g);
      if ((VMe(f, t.toolUseID), h?.(), S.behavior === "allow")) {
        if ((Pdf(t, S.updatedPermissions ?? []), S.updatedPermissions?.length))
          IYn(S.updatedPermissions);
        (t.logDecision(
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
          d(t.buildAllow(S.updatedInput ?? o)));
      } else
        (t.logDecision(
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
          d(t.cancelAndAbort(S.message)));
    })),
      _.addEventListener("abort", g, {
        once: !0,
      }));
  }
  if (l && !t.tool.requiresUserInteraction?.()) {
    let b = Kfl(t.toolUseID),
      _ = MA(),
      S = Xfl(t.toolUseContext.getMcp().clients, (A) => p$e(A, _) !== void 0);
    if (S.length > 0) {
      let A = {
        request_id: b,
        tool_name: t.tool.name,
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
      let v = t.toolUseContext.abortController.signal,
        C = l.onResponse(b, (x) => {
          if (!c()) return;
          if ((xe("permission_channel_relay"), h?.(), VMe(f, t.toolUseID), a && m))
            a.cancelRequest(m);
          if ((g?.(), x.behavior === "allow"))
            (t.logDecision(
              {
                decision: "accept",
                source: {
                  type: "user",
                  permanent: !1,
                },
              },
              {
                permissionPromptStartTimeMs: s,
              },
            ),
              d(t.buildAllow(o)));
          else
            (t.logDecision(
              {
                decision: "reject",
                source: {
                  type: "user_reject",
                  hasFeedback: !1,
                },
              },
              {
                permissionPromptStartTimeMs: s,
              },
            ),
              d(t.cancelAndAbort(`Denied via channel ${x.fromServer}`)));
        });
      ((h = () => {
        (C(), v.removeEventListener("abort", h));
      }),
        v.addEventListener("abort", h, {
          once: !0,
        }));
    }
  }
  if (!i)
    (async () => {
      if (u()) return;
      let b = await t.runHooks(Fr(t.toolUseContext).mode, r.suggestions, r.updatedInput, s);
      if (b && "reprompted" in b) {
        if (u()) return;
        if ((VMe(f, t.toolUseID), a && m)) (a.cancelRequest(m), (m = void 0));
        (g?.(), h?.(), p(b.finalInput, b.reprompted.decisionReason, b.reprompted));
        return;
      }
      if (!b || !c()) return;
      if (a && m) a.cancelRequest(m);
      (g?.(), h?.(), d(b));
    })();
  return {
    notifyBridgeAndTeardown: y,
  };
}
var Qfl;
