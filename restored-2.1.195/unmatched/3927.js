// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B9n
// matched 2.1.88 source: src/tasks/LocalAgentTask/LocalAgentTask.tsx
// class=new  jaccard=0.0352  score=0.6292  fileCov=0.0359
// note: nearest: src/tasks/LocalAgentTask/LocalAgentTask.tsx (0.0352); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var B9n = E(() => {
  ft();
  PVt();
  VJ = Ape.getInstance();
});
function uE(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "in_process_teammate";
}
function JPe(e, t) {
  if (e === void 0 || e.length === 0) return [t];
  if (e.length >= U9n) {
    let n = e.slice(-(U9n - 1));
    return n.push(t), n;
  }
  return [...e, t];
}
function ZXa(e, t) {
  let n = e === void 0 || e.every(r => r.uuid !== t.uuid) ? e : e.filter(r => r.uuid !== t.uuid);
  return JPe(n, t);
}
var U9n = 50;
function eJa(e) {
  return e !== void 0 && Ky.includes(e);
}
function mht(e) {
  return e.userOverride ?? e.agentDefinitionColor;
}
function JEe(e) {
  if (e === "general-purpose") return;
  let n = gsn().get(e);
  if (n && Ky.includes(n)) return C$[n];
  return;
}
function QPe(e, t) {
  let n = gsn();
  if (!t) {
    n.delete(e);
    return;
  }
  if (Ky.includes(t)) n.set(e, t);
}
var Ky, C$;