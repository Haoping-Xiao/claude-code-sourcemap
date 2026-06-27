// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j7n
// matched 2.1.88 source: src/tasks/DreamTask/DreamTask.ts
// class=partial  jaccard=0.2378  score=0.7616  fileCov=0.257
// note: low-confidence suggestion: src/tasks/DreamTask/DreamTask.ts; 0 renamed
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
      if (t.update(e, r => {
        if (r.status !== "running") return r;
        return r.abortController?.abort(), n = r.priorMtime, {
          ...r,
          status: "killed",
          endTime: Date.now(),
          notified: !0,
          abortController: void 0
        };
      }), n !== void 0) xf(e, "stopped", {
        skipTranscript: !0
      }), await B7n(n);
    }
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
  return Zff().find(t => t.type === e);
}
var lyl,
  cyl = null,
  uyl = null;