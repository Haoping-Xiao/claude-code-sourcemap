// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rcr
// matched 2.1.88 source: src/utils/git/gitignore.ts
// class=new  jaccard=0.0436  score=0.3055  fileCov=0.0484
// note: nearest: src/utils/git/gitignore.ts (0.0436); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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