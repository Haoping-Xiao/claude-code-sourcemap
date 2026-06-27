// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Ec
// matched 2.1.88 source: src/hooks/toolPermission/handlers/swarmWorkerHandler.ts
// class=partial  jaccard=0.1068  score=0.3923  fileCov=0.128
// note: low-confidence suggestion: src/hooks/toolPermission/handlers/swarmWorkerHandler.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Ec = E(() => {
  uo();
  rme();
  S_();
  spr = R(rt(), 1);
});
async function bEc(e) {
  if (!el() || !X_t()) return null;
  let {
      ctx: t,
      description: n,
      updatedInput: r,
      suggestions: o
    } = e,
    s = r ?? t.input,
    i = null;
  if (i) return i;
  try {
    let a = () => t.toolUseContext.setAppState(c => ({
        ...c,
        pendingWorkerRequest: null
      })),
      l = await new Promise(c => {
        let {
            resolve: u,
            claim: d
          } = RYn(c),
          p = d7n({
            toolName: t.tool.name,
            toolUseId: t.toolUseID,
            input: s,
            description: n,
            permissionSuggestions: o
          });
        T7n({
          requestId: p.id,
          toolUseId: t.toolUseID,
          onAllow(f, m, g, h) {
            if (!d()) return;
            a();
            let y = f && Object.keys(f).length > 0 ? f : s;
            u(t.handleUserAllow(y, m, g, void 0, h));
          },
          onReject(f, m) {
            if (!d()) return;
            a(), t.logDecision({
              decision: "reject",
              source: {
                type: "user_reject",
                hasFeedback: !!f
              }
            }), u(t.cancelAndAbort(f, void 0, m));
          }
        }), p7n(p), t.toolUseContext.setAppState(f => ({
          ...f,
          pendingWorkerRequest: {
            toolName: t.tool.name,
            toolUseId: t.toolUseID,
            description: n
          }
        })), t.toolUseContext.abortController.signal.addEventListener("abort", () => {
          if (!d()) return;
          a(), t.logCancelled(), u(t.cancelAndAbort(void 0, !0));
        }, {
          once: !0
        });
      });
    return xe("permission_swarm_forward"), l;
  } catch (a) {
    return Le("permission_swarm_forward", "permission_swarm_forward_failed"), ke(Zr(a)), null;
  }
}