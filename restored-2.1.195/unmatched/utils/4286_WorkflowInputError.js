// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fgl
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0026  score=0.2324  fileCov=0.0026
// note: nearest: src/main.tsx (0.0026); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var fgl = E(() => {
  zX();
  gm();
  ql();
  Ye();
  uo();
  es();
  sr();
  e0o();
  Uoe();
  n0o();
  c7n();
  o0o = R(lt(), 1), A_ = R(se(), 1);
});
var s0o = {};
_t(s0o, {
  WorkflowTool: () => WorkflowTool,
  WorkflowInputError: () => WorkflowInputError
});
async function mgl(e) {
  if (e.scriptPath) {
    if (e.script) return {
      script: e.script,
      resolvedScriptPath: ygl.resolve($t(), e.scriptPath)
    };
    let t = await U3e(e.scriptPath);
    if ("error" in t) return t;
    return {
      script: t.script,
      resolvedScriptPath: t.path
    };
  }
  if (e.name) {
    let t = await B6t(e.name, $t());
    if (!t) {
      let n = (await b$e($t())).map(r => r.name).join(", ");
      return {
        error: `Workflow "${e.name}" not found. Available: ${n || "(none)"}`
      };
    }
    return {
      script: e.script ?? t.script,
      source: t.source
    };
  }
  if (e.script) return {
    script: e.script
  };
  return {
    error: "Must provide script, name, or scriptPath"
  };
}
function Lpf(e, t) {
  if (t === "built-in" && e) return e;
  return "custom";
}
function Ppf(e, t) {
  if (t === "built-in") return (e ?? "").slice(0, Dpf);
  return "";
}
var hgl,
  ygl,
  xpf = "script contains control characters that would be hidden in the approval dialog",
  kpf,
  Rpf,
  WorkflowInputError,
  Dpf = 200,
  ggl,
  WorkflowTool;