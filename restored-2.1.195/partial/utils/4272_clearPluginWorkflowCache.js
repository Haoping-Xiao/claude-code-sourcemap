// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lml
// matched 2.1.88 source: src/utils/plugins/loadPluginAgents.ts
// class=partial  jaccard=0.0705  score=0.1819  fileCov=0.1033
// note: low-confidence suggestion: src/utils/plugins/loadPluginAgents.ts; dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: loadPluginWorkflows, clearPluginWorkflowCache
// [unwrapped __esm module Lml] deps: RF, Un, kt, g$e, ii, LL, fp, og, Il, c9t, Lo, je, Cp, wr, fn, At, sa, co, kpe, Ao, Gy, uft, Jt, sr, Mp, gP, u$, HO, WAe, aR, tQ, vAe, fh, ty, SAe, f4, i$, k6e, jko, Gko
wml = require("os"), Cml = require("util");
Xdf = Ydf(wml.cpus().length), Qdf = `Workflow agent() call cap reached (${Iml}). This usually means a loop using budget.remaining() never terminates because ` + "no token budget was set \u2014 remaining() returns Infinity when budget.total is null. " + "Add a hard iteration cap to the loop, or pass a token budget.";
xml = class xml extends Error {
  constructor() {
    super(Qdf);
    this.name = "WorkflowAgentCapError";
  }
};
kml = class kml extends Error {
  constructor(e, t) {
    super(`Workflow token budget exceeded (${e.toLocaleString()} / ${t.toLocaleString()} output tokens). Stopping further agent() calls. In-flight agents will complete; their results are preserved.`);
    this.name = "WorkflowBudgetExceededError";
  }
};
tpf = `

---

NOTE: You are running inside a workflow script. You MUST return your final answer by calling the ${Ip} tool exactly once \u2014 the tool's input schema defines the required shape. Do your work, then call ${Ip}; do NOT put your answer in a text response (the script reads ONLY the tool call). If validation fails, read the error and call ${Ip} again with a corrected shape.`, npf = `You are a subagent spawned by a workflow orchestration script. Use the tools available to complete the task.

CRITICAL: You MUST call the ${Ip} tool exactly once to return your final answer. The tool's input schema defines the required shape.
- Do your work (Read files, run commands, etc.), then call ${Ip} with your answer.
- Do NOT put your answer in a text response. The script reads ONLY the ${Ip} tool call.
- If the schema validation fails, read the error and call ${Ip} again with a corrected shape.
- After calling ${Ip} successfully, end your turn. No acknowledgment needed.`, Wko = {
  agentType: "workflow-subagent",
  whenToUse: "Internal subagent for workflow script orchestration.",
  tools: ["*"],
  disallowedTools: [j1, ss, uC],
  source: "built-in",
  baseDir: "built-in",
  getSystemPrompt: () => Zdf
}, rpf = {
  ...Wko,
  getSystemPrompt: () => npf
};
var $ml = {};
async function Dml(e, t, n, r, o) {
  let s = qt(),
    i;
  try {
    i = await s.readdir(e);
  } catch {
    return [];
  }
  return (await Promise.all(i.map(async l => {
    if (!(l.isFile() || l.isSymbolicLink())) return null;
    if (!l.name.endsWith(".js")) return null;
    return Mml(Pml.join(e, l.name), t, n, r, o);
  }))).filter(l => l !== null);
}
async function Mml(e, t, n, r, o) {
  let s = qt();
  if (fee(s, e, o)) return null;
  try {
    let i = await s.readFile(e, {
      encoding: "utf-8"
    });
    if (i.length > Oj) return T(`Plugin workflow ${e} exceeds ${Oj} bytes \u2014 skipping`, {
      level: "warn"
    }), null;
    let a = ZI(i);
    if ("error" in a) return T(`Plugin workflow ${e} has invalid meta: ${a.error} \u2014 skipping`, {
      level: "warn"
    }), null;
    let l = `${t}:${a.meta.name}`;
    return {
      source: "plugin",
      plugin: n,
      pluginManifest: r,
      name: l,
      description: a.meta.description,
      whenToUse: a.meta.whenToUse,
      phases: a.meta.phases,
      script: i,
      filePath: e
    };
  } catch (i) {
    return T(`Failed to load workflow from ${e}: ${i}`, {
      level: "error"
    }), null;
  }
}
function clearPluginWorkflowCache() {
  loadPluginWorkflows.cache?.clear?.();
}
var Pml, loadPluginWorkflows;