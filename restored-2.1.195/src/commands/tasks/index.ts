// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s6l
// matched 2.1.88 source: src/commands/tasks/index.ts
// class=modified  jaccard=0.2107  score=0.3061  fileCov=0.4034
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var s6l = E(() => {
  ((q5f = {
    type: "local-jsx",
    name: "tasks",
    aliases: ["bashes"],
    description: "View and manage everything running in the background",
    immediate: !0,
    load: () => Promise.resolve().then(() => (r6l(), t6l)),
  }),
    (o6l = q5f));
});
function a6l(e) {
  let t = i6l.c(8),
    [n, r] = Esr.useState(!1),
    [o, s] = Esr.useState(null),
    [i, a] = Esr.useState(null),
    l;
  if (t[0] !== e)
    ((l = async (f) => {
      (r(!0),
        s(null),
        a(f),
        G("tengu_teleport_resume_session", {
          source: $e(e),
          session_id: f.id,
        }));
      try {
        let m = await yl("teleport_resume", () => i8e(f.id));
        return (
          DCt({
            sessionId: f.id,
          }),
          r(!1),
          m
        );
      } catch (m) {
        let g = m,
          h = {
            message: g instanceof qb ? g.message : be(g),
            formattedMessage: g instanceof qb ? g.formattedMessage : void 0,
            isOperationError: g instanceof qb,
          };
        return (s(h), r(!1), null);
      }
    }),
      (t[0] = e),
      (t[1] = l));
  else l = t[1];
  let c = l,
    u;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((u = () => {
      s(null);
    }),
      (t[2] = u));
  else u = t[2];
  let d = u,
    p;
  if (t[3] !== o || t[4] !== n || t[5] !== c || t[6] !== i)
    ((p = {
      resumeSession: c,
      isResuming: n,
      error: o,
      selectedSession: i,
      clearError: d,
    }),
      (t[3] = o),
      (t[4] = n),
      (t[5] = c),
      (t[6] = i),
      (t[7] = p));
  else p = t[7];
  return p;
}
var i6l, Esr;
