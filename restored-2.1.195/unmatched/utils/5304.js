// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rcr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rcr = E(() => {
  QH();
});
function qnm() {
  if (Cqo === void 0) Cqo = process.env.AUTOMODE_DECISION_LOG === "1" ? llc.join($t(), ".automode_decisions.jsonl") : null;
  return Cqo;
}
function Iqo(e) {
  let t = qnm();
  if (!t) return;
  alc.appendFile(t, `${De({
    ts: Date.now(),
    ...e
  })}
`).catch(() => {});
}
var alc, llc, Cqo;