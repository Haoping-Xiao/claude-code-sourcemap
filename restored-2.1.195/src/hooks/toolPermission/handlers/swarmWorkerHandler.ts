// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Ec
// matched 2.1.88 source: src/hooks/toolPermission/handlers/swarmWorkerHandler.ts
// class=modified  jaccard=0.4027  score=0.8202  fileCov=0.4417
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _Ec] deps: context/notifications.tsx, components/tasks/renderToolActivity.tsx, tasks/LocalShellTask/LocalShellTask.tsx
spr = R(rt(), 1);
async function handleSwarmWorkerPermission(params) {
  if (!el() || !X_t()) return null;
  let { ctx: ctx, description: n, updatedInput: r, suggestions: o } = params,
    s = r ?? ctx.input,
    i = null;
  if (i) return i;
  try {
    let a = () =>
        ctx.toolUseContext.setAppState((c) => ({
          ...c,
          pendingWorkerRequest: null,
        })),
      l = await new Promise((c) => {
        let { resolve: u, claim: d } = RYn(c),
          p = d7n({
            toolName: ctx.tool.name,
            toolUseId: ctx.toolUseID,
            input: s,
            description: n,
            permissionSuggestions: o,
          });
        (T7n({
          requestId: p.id,
          toolUseId: ctx.toolUseID,
          onAllow(f, m, g, h) {
            if (!d()) return;
            a();
            let y = f && Object.keys(f).length > 0 ? f : s;
            u(ctx.handleUserAllow(y, m, g, void 0, h));
          },
          onReject(f, m) {
            if (!d()) return;
            (a(),
              ctx.logDecision({
                decision: "reject",
                source: {
                  type: "user_reject",
                  hasFeedback: !!f,
                },
              }),
              u(ctx.cancelAndAbort(f, void 0, m)));
          },
        }),
          p7n(p),
          ctx.toolUseContext.setAppState((f) => ({
            ...f,
            pendingWorkerRequest: {
              toolName: ctx.tool.name,
              toolUseId: ctx.toolUseID,
              description: n,
            },
          })),
          ctx.toolUseContext.abortController.signal.addEventListener(
            "abort",
            () => {
              if (!d()) return;
              (a(), ctx.logCancelled(), u(ctx.cancelAndAbort(void 0, true)));
            },
            {
              once: true,
            },
          ));
      });
    return (xe("permission_swarm_forward"), l);
  } catch (a) {
    return (Le("permission_swarm_forward", "permission_swarm_forward_failed"), ke(Zr(a)), null);
  }
}
