// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mAc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0029  score=0.5101  fileCov=0.0029
// note: nearest: src/screens/REPL.tsx (0.0029); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mAc] deps: services/analytics/index.ts, dn, utils/bash/ast.ts, tasks/LocalAgentTask/LocalAgentTask.tsx, wX, utils/plugins/schemas.ts, utils/debug.ts, utils/plugins/loadPluginHooks.ts, utils/worktree.ts, utils/Shell.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, utils/plugins/mcpPluginIntegration.ts
pym = new Set();
function hAc({
  enabled: e
}) {
  let t = Dc(),
    n = Ho(),
    r = $T(),
    o = Ht(s => s.plugins.enabled);
  gAc.useEffect(() => {
    if (!e) return;
    let s = () => ({
      abortController: new AbortController(),
      taskRegistry: r
    });
    return Wzo(o, i => i.when === "always", s()), pwo.subscribe(i => {
      Wzo(t.getState().plugins.enabled, a => a.when === `on-skill-invoke:${i}`, s());
    });
  }, [e, o, t, n, r]);
}
var gAc;