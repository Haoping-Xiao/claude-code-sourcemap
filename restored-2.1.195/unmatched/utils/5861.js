// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NUc
// matched 2.1.88 source: src/tasks/LocalAgentTask/LocalAgentTask.tsx
// class=new  jaccard=0.0237  score=0.2603  fileCov=0.0254
// note: nearest: src/tasks/LocalAgentTask/LocalAgentTask.tsx (0.0237); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NUc = E(() => {
  kt();
  je();
  Mm();
  At();
  ys();
  lE();
  B9o();
  Xh();
  $Yo();
  dOe();
  OUc();
});
function wLm(e) {
  if (!zJ(e)) return false;
  if ("isBackgrounded" in e && e.isBackgrounded === false) return false;
  if (!AC(e.status)) return false;
  return !e.notified;
}
function gXo({
  tasks: e,
  waits: t,
  now: n
}) {
  let r = false,
    o = new Set();
  for (let s of e) {
    if (!wLm(s)) continue;
    o.add(s.id);
    let i = t.get(s.id);
    if (!i) i = {
      firstSeen: n,
      expired: false
    }, t.set(s.id, i);
    if (i.expired) continue;
    if (n - i.firstSeen >= Fwo) {
      i.expired = true, T(`[print] task ${s.id} is terminal but its completion notification did not enqueue within ${Fwo}ms \u2014 exiting without it (enqueue dropped, or post-completion work still in flight)`, {
        level: "warn"
      });
      continue;
    }
    r = true;
  }
  for (let s of t.keys()) if (!o.has(s)) t.delete(s);
  return r;
}