// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SEc
// matched 2.1.88 source: src/hooks/useCanUseTool.tsx
// class=modified  jaccard=0.1967  score=0.6121  fileCov=0.2247
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var SEc = E(() => {
  dn();
  sA();
  At();
  vn();
  J_t();
  sbt();
  L6t();
});
function EEc(e, t) {
  return W1.includes(e)
    ? De({
        command: t.command,
      })
    : De(t);
}
function _hm(e) {
  let t = AEc.c(10),
    n = ks(),
    { recordDenial: r, getDenials: o, removeDenial: s } = BAt(),
    { addNotification: i } = Li(),
    a = Ho(),
    l;
  if (t[0] !== a) ((l = qMe(a)), (t[0] = a), (t[1] = l));
  else l = t[1];
  let c = l,
    u;
  if (
    t[2] !== i ||
    t[3] !== n ||
    t[4] !== o ||
    t[5] !== r ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== e
  )
    ((u = async (d, p, f, m, g, h) => {
      let y;
      {
        let _ = o();
        if (_.length > 0) {
          let S = EEc(d.name, p);
          y = _.find((A) => A.toolName === d.name && A.inputKey === S);
        }
      }
      let b = new Promise((_) => {
        let S = LYn(d, p, f, m, g, e, c);
        if (S.resolveIfAborted(_)) return;
        return (h !== void 0 ? Promise.resolve(h) : lbt(d, p, f, m, g, i, c))
          .then(async (v) => {
            if (v.behavior === "allow") {
              if (S.resolveIfAborted(_)) return;
              if (
                v.decisionReason?.type === "classifier" &&
                v.decisionReason.classifier === "auto-mode"
              )
                lll(c, g, v.decisionReason.reason);
              (S.logDecision(
                {
                  decision: "accept",
                  source: "config",
                },
                {
                  input: v.updatedInput ?? p,
                },
              ),
                _(
                  S.buildAllow(v.updatedInput ?? p, {
                    decisionReason: v.decisionReason,
                  }),
                ));
              return;
            }
            let C = f.getAppState(),
              x = Fr(f),
              I = await d.description(p, {
                isNonInteractiveSession: f.options.isNonInteractiveSession,
                toolPermissionContext: x,
                tools: f.options.tools,
              });
            if (S.resolveIfAborted(_)) return;
            switch (v.behavior) {
              case "deny": {
                if (
                  (S.logDecision({
                    decision: "reject",
                    source: "config",
                  }),
                  v.decisionReason?.type === "classifier" &&
                    v.decisionReason.classifier === "auto-mode")
                ) {
                  r({
                    toolName: d.name,
                    display: I,
                    inputKey: EEc(d.name, p),
                    reason: v.decisionReason.reason ?? "",
                    timestamp: Date.now(),
                  });
                  let k = "";
                  if (((k = v.decisionReason.reason ?? ""), k.length > 80))
                    k = `${k.slice(0, 79)}\u2026`;
                  i({
                    key: "auto-mode-denied",
                    kind: "warning",
                    priority: "immediate",
                    jsx: wNe.jsxs(wNe.Fragment, {
                      children: [
                        wNe.jsxs(w, {
                          color: "error",
                          children: [d.userFacingName(p).toLowerCase(), " denied by auto mode"],
                        }),
                        k
                          ? wNe.jsxs(w, {
                              dimColor: true,
                              children: [" \xB7 ", k],
                            })
                          : null,
                        wNe.jsx(w, {
                          dimColor: true,
                          children: " \xB7 /permissions",
                        }),
                      ],
                    }),
                  });
                }
                _(v);
                return;
              }
              case "ask": {
                if (x.awaitAutomatedChecksBeforeDialog) {
                  let D = await N8n({
                    ctx: S,
                    ...{},
                    updatedInput: v.updatedInput,
                    suggestions: v.suggestions,
                    permissionMode: x.mode,
                  });
                  if (D) {
                    _(D);
                    return;
                  }
                }
                if (S.resolveIfAborted(_)) return;
                let k = await bEc({
                  ctx: S,
                  description: I,
                  ...{},
                  updatedInput: v.updatedInput,
                  suggestions: v.suggestions,
                });
                if (k) {
                  _(k);
                  return;
                }
                b7n(
                  {
                    ctx: S,
                    description: I,
                    result: v,
                    awaitAutomatedChecksBeforeDialog: x.awaitAutomatedChecksBeforeDialog,
                    bridgeCallbacks: C.replBridgePermissionCallbacks,
                    channelCallbacks: C.channelPermissionCallbacks,
                  },
                  _,
                );
                return;
              }
            }
          })
          .catch((v) => {
            if (v instanceof ru || v instanceof tf)
              (T(`Permission check threw ${v.constructor.name} for tool=${d.name}: ${v.message}`),
                S.logCancelled(),
                _(S.cancelAndAbort(void 0, true)));
            else (ke(v), _(S.cancelAndAbort(void 0, true)));
          })
          .finally(() => {
            VMe(c, g);
          });
      });
      if (y) {
        let _ = y;
        b.then((S) => {
          if (S.behavior === "allow")
            (G("tengu_auto_mode_subsequent_approval", {
              toolName: Ui(d.name),
              msSinceDeny: Date.now() - _.timestamp,
              allowReasonType: Oo(S.decisionReason?.type),
            }),
              s(_));
        });
      }
      return b;
    }),
      (t[2] = i),
      (t[3] = n),
      (t[4] = o),
      (t[5] = r),
      (t[6] = s),
      (t[7] = c),
      (t[8] = e),
      (t[9] = u));
  else u = t[9];
  return u;
}
var AEc, wNe, HEc;
