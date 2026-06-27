// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dMe
// matched 2.1.88 source: src/tasks/InProcessTeammateTask/InProcessTeammateTask.tsx
// class=modified  jaccard=0.2968  score=1  fileCov=0.2968
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var dMe = E(() => {
  ft();
  dn();
  yC();
  S_();
  fp();
  Il();
  je();
  tA();
  bH();
  xF();
  Sj();
  Xdt();
  HO();
  hP();
});
function ael(e, t) {
  t.update(e, (n) => {
    if (n.status !== "running" || n.shutdownRequested) return n;
    return {
      ...n,
      shutdownRequested: !0,
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
function h9t(e, t, n, r) {
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
