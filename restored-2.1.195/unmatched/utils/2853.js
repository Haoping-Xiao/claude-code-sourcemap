// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gNn
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.018  score=0.9365  fileCov=0.018
// note: nearest: src/utils/sessionStorage.ts (0.018); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gNn] deps: Qi, Jt, kt
vao = require("fs/promises"), Xcp = Cn(async () => null), Jcp = Cn(async () => null);
function oF() {
  return bLe.join(tr(), "projects");
}
function em() {
  let e = M2() ?? Jh(yr());
  return bLe.join(e, `${Rt()}.jsonl`);
}
function wca(e, t) {
  wao.set(e, t);
}
function Cca(e) {
  wao.delete(e);
}
function uk(e) {
  let t = M2() ?? Jh(yr()),
    n = Rt(),
    r = wao.get(e),
    o = r ? bLe.join(t, n, "subagents", r) : bLe.join(t, n, "subagents");
  return bLe.join(o, `agent-${e}.jsonl`);
}
async function hNn() {
  let e = bLe.join(M2() ?? Jh(yr()), Rt(), "subagents"),
    t;
  try {
    t = await vca.readdir(e, {
      withFileTypes: true
    });
  } catch {
    return [];
  }
  return t.filter(n => n.isFile() && n.name.startsWith("agent-") && n.name.endsWith(".jsonl")).map(n => n.name.slice(6, -6));
}
function Ica(e, t) {
  let n = {};
  for (let r of Object.values(e)) {
    let o = t[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0) n[r.identity.agentId] = o;
  }
  return n;
}
var vca, bLe, Jh, wao;