// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bm
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0068  score=1  fileCov=0.0068
// note: nearest: src/cli/print.ts (0.0068); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bm = E(() => {
  ft();
  ft();
  je();
  sF();
  co();
  kut();
  _a();
  ih();
  LNn = {
    now: 0,
    next: 1,
    later: 2
  }, fup = new Set(["task-notification"]);
  Ug = gup(), sua = Ug.markCancelPending, iua = Ug.consumeCancelPending, HSe = Ug.subscribe, Rut = Ug.getCommandQueueSnapshot, qX = Ug.getCommandQueue, Bao = Ug.getCommandQueueLength, Uao = Ug.getMainThreadQueueLength, TSe = Ug.hasCommandsInQueue;
  A1y = Ug.recheckCommandQueue, j_ = Ug.enqueue, Ad = Ug.enqueuePendingNotification, I5e = Ug.dequeue, H1y = Ug.dequeueAll, J8 = Ug.peek, ALe = Ug.dequeueAllMatching, lua = Ug.remove, cua = Ug.removeByFilter, uua = Ug.clearCommandQueue, T1y = Ug.resetCommandQueue, n4t = Ug.popAllEditable, dua = Ug.popEditableAt, pua = Ug.getCommandsByMaxPriority, Fao = Ug.setInFlightDrainBatch, jao = Ug.clearInFlightDrainBatch, Gao = Ug.someInFlightDrainCommand;
  Zca(e => j_({
    agentId: ls(),
    mode: "prompt",
    value: `/${e}`
  }));
});
function yup() {
  return zao();
}
function _up() {
  let e = zao(),
    t = DNn.get(e);
  if (!t) t = [], DNn.set(e, t);
  return t;
}
function bup() {
  return DNn.get(zao()) ?? null;
}
function x5e(e) {
  mua = e;
}
function zv(e) {
  if (!Ir() && !d0()) return;
  let t = _up();
  if (t.length >= hup) t.shift();
  t.push(e), mua?.();
}
function VX() {
  let e = bup();
  if (!e || e.length === 0) return [];
  return e.splice(0).map(n => ({
    ...n,
    uuid: qao.randomUUID(),
    session_id: Rt()
  }));
}
function Kao(e) {
  let t = DNn.get(e);
  if (!t || t.length === 0) return [];
  return t.splice(0).map(n => ({
    ...n,
    uuid: qao.randomUUID(),
    session_id: e
  }));
}
function xf(e, t, n) {
  zv({
    type: "system",
    subtype: "task_notification",
    task_id: e,
    tool_use_id: n?.toolUseId,
    status: t,
    output_file: n?.outputFile ?? "",
    summary: n?.summary ?? "",
    usage: n?.usage,
    skip_transcript: n?.skipTranscript
  });
}
var qao,
  hup = 1000,
  Vao = "cli",
  zao = () => Vao,
  fua,
  DNn,
  mua = null;