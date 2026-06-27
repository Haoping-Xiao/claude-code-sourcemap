// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vtn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vtn = E(() => {
  lH();
  tYo();
});
function nYo() {
  return Promise.all([Promise.resolve().then(() => (Ye(), wW)), Promise.resolve().then(() => (tYo(), i0c)), Promise.resolve().then(() => (tvt(), _tn)), Promise.resolve().then(() => (vtn(), Ttn))]);
}
async function a0c(e, t, n) {
  let r = aX().catch(() => []);
  await vc(IC(), 2000, "flush timeout").catch(() => {});
  let o = setInterval(() => {}, 1073741824);
  xWt(), Cu.get(process.stdout)?.unmount(), await new Promise(d => setImmediate(d)), Cho(), process.env.CLAUDE_AGENTS_SELECT = e;
  let [{
    createRoot: s
  }, {
    seedLastJobs: i
  }, {
    applyFleetViewHostWindowsEnv: a
  }, {
    mountFleetViewWithComposerBack: l
  }] = await (t ?? nYo());
  a();
  let c = await s(lN(false));
  clearInterval(o);
  let u = await vc(r, 50, "listJobs seed").catch(() => null);
  if (u !== null) i(u);
  T("[PERF:bg-leftarrow-mounted]"), await l(c, n), await ki(0, "other", {
    suppressResumeHint: true
  }), process.exit(0);
}