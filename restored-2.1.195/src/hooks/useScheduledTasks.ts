// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qYo
// matched 2.1.88 source: src/hooks/useScheduledTasks.ts
// class=modified  jaccard=0.4281  score=0.7351  fileCov=0.5062
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: useScheduledTasks
// [unwrapped __esm module qYo] deps: ft, kt, vX, N8, CPc, je, YS
eIm = (KWe(), ro(zWe));
var PPc = {};
function useScheduledTasks({ isLoading: e, assistantMode: t, setMessages: n }) {
  let r = yvt.useRef(e);
  r.current = e;
  let o = yvt.useRef(null),
    s = Dc(),
    i = Ho(),
    a = $T();
  (yvt.useEffect(() => {
    if (!a$() || Ju() !== null) return;
    let l = (d) =>
        Ad({
          value: rIm.resolveLoopDefaultFire(d),
          mode: "prompt",
          agentId: ls(),
          priority: "later",
          isMeta: true,
          workload: rrt,
        }),
      c = void 0,
      u = WYo({
        onFire: l,
        onFireTask: (d) => {
          if (d.agentId) {
            let f = uAe(d.agentId, s.getState().tasks);
            if (f && !AC(f.status)) {
              h9t(f.id, d.prompt, a, {
                kind: "task-notification",
              });
              return;
            }
            (T(`[ScheduledTasks] teammate ${d.agentId} gone, removing orphaned cron ${d.id}`),
              Pue([d.id]));
            return;
          }
          let p = gcc(
            d.kind === "loop"
              ? `Claude resuming /loop wakeup (${DPc(new Date())})`
              : `Running scheduled task (${DPc(new Date())})`,
          );
          if ((n((f) => [...f, p]), d.kind === "loop")) gJe(d.prompt);
          l(d.prompt);
        },
        isLoading: () => r.current,
        assistantMode: t,
        getJitterConfig: MRe,
        isKilled: () => !a$(),
        getExtraTasks: LPc && c ? () => LPc.getRoutineCronTasks(rc(), c) : void 0,
      });
    return (
      u.start(),
      (o.current = u),
      () => {
        ((o.current = null), u.stop());
      }
    );
  }, [t, n, s.getState, a]),
    yvt.useEffect(() => {
      if (e) return;
      let l = kCt();
      if (l !== null) {
        if ((gJe(null), doa() && !NRe())) foa(l);
      }
      o.current?.checkNow();
    }, [e]));
}
function DPc(e) {
  return e
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
    .replace(/,? at |, /, " ")
    .replace(/ ([AP]M)/, (t, n) => n.toLowerCase());
}
var yvt,
  rIm,
  LPc = null;
