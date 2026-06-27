// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NUc
// matched 2.1.88 source: src/tasks/types.ts
// class=partial  jaccard=0.0765  score=0.2202  fileCov=0.1049
// note: low-confidence suggestion: src/tasks/types.ts; dir inferred from dep-graph -> utils; 0 renamed
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
  if (!zJ(e)) return !1;
  if ("isBackgrounded" in e && e.isBackgrounded === !1) return !1;
  if (!AC(e.status)) return !1;
  return !e.notified;
}
function gXo({
  tasks: e,
  waits: t,
  now: n
}) {
  let r = !1,
    o = new Set();
  for (let s of e) {
    if (!wLm(s)) continue;
    o.add(s.id);
    let i = t.get(s.id);
    if (!i) i = {
      firstSeen: n,
      expired: !1
    }, t.set(s.id, i);
    if (i.expired) continue;
    if (n - i.firstSeen >= Fwo) {
      i.expired = !0, T(`[print] task ${s.id} is terminal but its completion notification did not enqueue within ${Fwo}ms \u2014 exiting without it (enqueue dropped, or post-completion work still in flight)`, {
        level: "warn"
      });
      continue;
    }
    r = !0;
  }
  for (let s of t.keys()) if (!o.has(s)) t.delete(s);
  return r;
}