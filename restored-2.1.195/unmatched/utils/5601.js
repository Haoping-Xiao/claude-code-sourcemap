// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uKo
// matched 2.1.88 source: src/utils/processUserInput/processUserInput.ts
// class=new  jaccard=0.0339  score=0.7343  fileCov=0.0343
// note: nearest: src/utils/processUserInput/processUserInput.ts (0.0339); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uKo] deps: services/analytics/index.ts, constants/files.ts, tools/BashTool/BashTool.tsx, utils/markdownConfigLoader.ts, tools/FileEditTool/types.ts, tools/FileEditTool/utils.ts, tools/FileWriteTool/FileWriteTool.ts, types/plugin.ts, tools/NotebookEditTool/NotebookEditTool.ts, utils/debugFilter.ts, state/AppStateStore.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, constants/files.ts, utils/git.ts, utils/agentContext.ts, pTc, utils/plans.ts, services/mcp/auth.ts
kYA = hbm();
function dKo(e, t, n) {
  return (r, o, s, i, a) => {
    let l = t.current++;
    e.current[l] = {
      id: l,
      type: "image",
      content: r,
      mediaType: o ?? "image/png",
      filename: s,
      dimensions: i,
      sourcePath: a
    }, n(new J_e(`${KDn(l)} `));
  };
}