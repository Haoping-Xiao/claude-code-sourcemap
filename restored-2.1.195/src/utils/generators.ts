// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p6e
// matched 2.1.88 source: src/utils/generators.ts
// class=modified  jaccard=0.3244  score=0.4801  fileCov=0.5
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var p6e = E(() => {
  jib = Symbol("NO_VALUE");
});
var lp = 600000,
  Mll = 30000;
async function* G8t(e, t, n, r, o, s, i) {
  let a = i.getAppState(),
    l = i.agentId ?? Rt();
  if (!M$("UserPromptExpansion", a, l)) return;
  let c = {
    ...Td(s),
    hook_event_name: "UserPromptExpansion",
    expansion_type: e,
    command_name: t,
    command_args: n,
    command_source: r,
    prompt: o,
  };
  yield* TC({
    hookInput: c,
    toolUseID: $ll.randomUUID(),
    signal: i.abortController.signal,
    timeoutMs: lp,
    toolUseContext: i,
  });
}
var $ll;
