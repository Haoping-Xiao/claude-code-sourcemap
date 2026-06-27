// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y_
// matched 2.1.88 source: src/utils/stats.ts
// class=new  jaccard=0.0192  score=1  fileCov=0.0192
// note: nearest: src/utils/stats.ts (0.0192); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y_ = E(() => {
  Qi();
  ft();
  fn();
  jS();
  vca = require("fs/promises"), bLe = require("path");
  Jh = Cn(e => bLe.join(oF(), LE(e)));
  wao = new Map();
});
function Tut(e) {
  let t = [],
    n = [],
    r;
  for (let o of e) {
    if (o.type === "assistant" && o.message.id !== r && n.length > 0) t.push(n), n = [o];else n.push(o);
    if (o.type === "assistant") r = o.message.id;
  }
  if (n.length > 0) t.push(n);
  return t;
}
function zjt(e) {
  let t = Py(e).filter(n => n.type !== "progress");
  return Tut(t);
}
function xca(e) {
  return zjt(e).length < 2;
}