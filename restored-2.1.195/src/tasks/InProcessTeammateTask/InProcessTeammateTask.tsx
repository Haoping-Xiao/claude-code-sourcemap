// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dMe
// matched 2.1.88 source: src/tasks/InProcessTeammateTask/InProcessTeammateTask.tsx
// class=modified  jaccard=0.2555  score=0.7715  fileCov=0.2764
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function ael(e, t) {
  t.update(e, (n) => {
    if (n.status !== "running" || n.shutdownRequested) return n;
    return {
      ...n,
      shutdownRequested: true,
    };
  });
}
function WTo(e, t, n) {
  if (n.get(e)?.status !== "running") return;
  n.updateTranscript(e, (r) => ({
    ...r,
    messages: JPe(r.messages, t),
  }));
}
function injectUserMessageToTeammate(e, t, n, r) {
  let o = n.get(e);
  if (!o || AC(o.status)) {
    T(`Dropping message for teammate task ${e}: task status is "${o?.status}"`);
    return;
  }
  (n.update(e, (s) => ({
    ...s,
    pendingUserMessages: [
      ...s.pendingUserMessages,
      {
        text: t,
        origin: r,
      },
    ],
  })),
    n.updateTranscript(e, (s) => ({
      ...s,
      messages: JPe(
        s.messages,
        Rn({
          content: t,
          origin: r,
        }),
      ),
    })));
}
function uAe(e, t) {
  let n;
  for (let r of Object.values(t))
    if (uE(r) && r.identity.agentId === e) {
      if (r.status === "running") return r;
      if (!n) n = r;
    }
  return n;
}
function qTo(e) {
  return Object.values(e).filter(uE);
}
var iel;
