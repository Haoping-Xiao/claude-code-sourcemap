// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T1l
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0066  score=0.7367  fileCov=0.0066
// note: nearest: src/cli/print.ts (0.0066); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: collectContextData, call
// [unwrapped __esm module T1l] deps: A1l, id, mZn, At, uf, co, LPe, lNo
cNo = R(se(), 1);
var uNo = {};
async function collectContextData(e) {
  let {
      messages: t,
      getAppState: n,
      options: {
        mainLoopModel: r,
        tools: o,
        agentDefinitions: s,
        customSystemPrompt: i,
        appendSystemPrompt: a,
        excludeDynamicSections: l
      }
    } = e,
    c = Py(t),
    u = n();
  return fZn(c, r, async () => u.toolPermissionContext, o, s, void 0, {
    options: {
      customSystemPrompt: i,
      appendSystemPrompt: a
    }
  }, void 0, c, u.autoCompactWindow, l);
}
async function call(e, t) {
  let n = await collectContextData(t);
  return {
    type: "text",
    value: N7t(n)
  };
}