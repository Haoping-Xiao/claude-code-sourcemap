// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XEc
// matched 2.1.88 source: src/components/PromptInput/PromptInputQueuedCommands.tsx
// class=new  jaccard=0.0584  score=1  fileCov=0.0584
// note: nearest: src/components/PromptInput/PromptInputQueuedCommands.tsx (0.0584); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XEc = E(() => {
  bm();
  KEc();
  ntn = R(rt(), 1);
});
function JEc(e, t) {
  if (!t || e.length === 0) return [];
  let n = new Map(),
    r = new Map();
  for (let o of e) {
    if (!o.agentId || o.mode !== "task-notification") continue;
    let s = n.get(o.agentId);
    if (!s) {
      let a = t[o.agentId];
      if (!MF(a) || !sw(a)) continue;
      s = a, n.set(o.agentId, s);
    }
    let i = r.get(o.agentId) ?? [];
    i.push(o), r.set(o.agentId, i);
  }
  return Array.from(r, ([o, s]) => ({
    agentId: o,
    prompt: s.map(i => typeof i.value === "string" ? i.value : "").filter(Boolean).join(`

`),
    consumedCommands: s
  }));
}