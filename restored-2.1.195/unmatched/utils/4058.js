// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yyt
// matched 2.1.88 source: src/tasks/LocalMainSessionTask.ts
// class=new  jaccard=0.0507  score=0.371  fileCov=0.0555
// note: nearest: src/tasks/LocalMainSessionTask.ts (0.0507); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yyt = E(() => {
  ft();
  np();
  $S();
  hyt();
  bm();
  OI();
  sre();
});
function Ktf(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "monitor_ws";
}
function Rrl(e, t) {
  Swo.set(e, t);
}
function _Ae(e, t, n) {
  let r, o, s;
  t.update(e, a => {
    if (a.status !== "running") return a;
    if (r = a.description, o = a.toolUseId, s = a.agentId, a.timeoutId !== void 0) clearTimeout(a.timeoutId);
    return {
      ...a,
      status: "completed",
      endTime: Date.now(),
      timeoutId: void 0,
      notified: true
    };
  });
  let i = Swo.get(e);
  if (i) Swo.delete(e), i.close();
  if (bAe(s, `monitor:${e}`, t), r !== void 0) {
    if (!n?.quiet) sq(r, "[Monitor stopped]", e, {
      isHousekeeping: true,
      agentId: s
    });
    xf(e, "stopped", {
      toolUseId: o,
      summary: r
    });
  }
}
function Drl(e, t) {
  for (let [n, r] of Object.entries(t.all())) if (Ktf(r) && r.agentId === e && r.status === "running") _Ae(n, t);
}
var Swo, Lrl;