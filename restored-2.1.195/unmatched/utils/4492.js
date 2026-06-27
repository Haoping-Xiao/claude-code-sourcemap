// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KKt
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KKt = E(() => {
  ft();
  wQ();
  GF();
  id();
  Ld();
  y_();
  _a();
});
function XKt(e) {
  if (!e || e.target <= 0) return -1;
  return Math.floor(20 * e.spent / e.target);
}
function JKt(e) {
  if (!e || e.length === 0) return "";
  return e.map(t => {
    let n = `${t.id ?? t.label}:${t.doneAt ?? "-"}:${t.failed ? "x" : ""}`;
    return t.kind === "todo" ? `${n}:${t.startedAt ?? "-"}` : n;
  }).join("|");
}
function ySt() {
  return {
    tasks: YKt.tasks,
    queued: YKt.queued,
    kinds: YKt.kinds
  };
}
function JIl(e) {
  YKt = e;
}
function UQn() {
  return {
    ...YKt
  };
}
var YKt;