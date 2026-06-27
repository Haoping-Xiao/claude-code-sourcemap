// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U7n
// matched 2.1.88 source: src/tasks/DreamTask/DreamTask.ts
// class=modified  jaccard=0.3719  score=0.731  fileCov=0.4308
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module U7n] deps: ft, Uh, je, At, YS, O7n, y_
((a3 = require("fs/promises")), (tyl = require("path")));
function G0o(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "dream";
}
function oyl(e, t) {
  let n = iN("dream"),
    r = {
      ...LT(n, "dream", "dreaming"),
      type: "dream",
      status: "running",
      skipTranscript: true,
      phase: "starting",
      sessionsReviewing: t.sessionsReviewing,
      filesTouched: [],
      turns: [],
      abortController: t.abortController,
      priorMtime: t.priorMtime,
    };
  return (e.register(r), n);
}
function syl(e, t, n, r) {
  r.update(e, (o) => {
    let s = new Set(o.filesTouched),
      i = n.filter((a) => !s.has(a) && s.add(a));
    if (t.text === "" && t.toolUseCount === 0 && i.length === 0) return o;
    return {
      ...o,
      phase: i.length > 0 ? "updating" : o.phase,
      filesTouched: i.length > 0 ? [...o.filesTouched, ...i] : o.filesTouched,
      turns: o.turns.slice(-(Qff - 1)).concat(t),
    };
  });
}
function iyl(e, t) {
  (t.update(e, (n) => ({
    ...n,
    status: "completed",
    endTime: Date.now(),
    notified: true,
    abortController: void 0,
  })),
    xe("task_dream"),
    xf(e, "completed", {
      skipTranscript: true,
    }));
}
function ayl(e, t) {
  (t.update(e, (n) => ({
    ...n,
    status: "failed",
    endTime: Date.now(),
    notified: true,
    abortController: void 0,
  })),
    Le("task_dream", "task_dream_failed"),
    xf(e, "failed", {
      skipTranscript: true,
    }));
}
var Qff = 30,
  F7n;
