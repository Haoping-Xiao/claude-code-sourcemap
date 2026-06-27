// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j7n
// matched 2.1.88 source: src/tasks/DreamTask/DreamTask.ts
// class=modified (alt of src/tasks/DreamTask/DreamTask.ts)  jaccard=0.1853  score=0.7447  fileCov=0.1978
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var j7n = E(() => {
  dn();
  U7n();
  yC();
  tA();
  F7n = {
    name: "DreamTask",
    type: "dream",
    async kill(e, t) {
      let n;
      if (
        (t.update(e, (r) => {
          if (r.status !== "running") return r;
          return (
            r.abortController?.abort(),
            (n = r.priorMtime),
            {
              ...r,
              status: "killed",
              endTime: Date.now(),
              notified: true,
              abortController: void 0,
            }
          );
        }),
        n !== void 0)
      )
        (xf(e, "stopped", {
          skipTranscript: true,
        }),
          await B7n(n));
    },
  };
});
function Zff() {
  let e = [W7n, G7n, a8e, F7n, Lrl];
  if (lyl) e.push(lyl);
  if (cyl) e.push(cyl);
  if (uyl) e.push(uyl);
  return e;
}
function W0o(e) {
  return Zff().find((t) => t.type === e);
}
var lyl,
  cyl = null,
  uyl = null;
