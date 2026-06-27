// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gic
// matched 2.1.88 source: src/services/tools/toolExecution.ts
// class=new  jaccard=0.0097  score=0.2075  fileCov=0.0101
// note: nearest: src/services/tools/toolExecution.ts (0.0097); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gic = E(() => {
  Vb();
  ft();
  EAe();
  je();
  At();
  Jt();
});
function hic(e, t) {
  if (!e || typeof e !== "object" || Array.isArray(e) || !t || typeof t !== "object") return;
  let n = [],
    r = new Set(Object.keys(t));
  for (let a of Object.keys(e)) if (!r.has(a)) n.push(a);
  let o = e.hookSpecificOutput,
    s = "hookSpecificOutput" in t ? t.hookSpecificOutput : void 0;
  if (o && typeof o === "object" && !Array.isArray(o) && s && typeof s === "object") {
    let a = new Set(Object.keys(s));
    for (let l of Object.keys(o)) if (!a.has(l)) n.push(`hookSpecificOutput.${l}`);
  }
  if (n.length === 0) return;
  let i = n.includes("additionalContext") ? " Did you mean hookSpecificOutput.additionalContext (with a hookEventName)?" : "";
  T(`Hook JSON output had unrecognized keys (ignored): ${n.join(", ")}.${i}`);
}