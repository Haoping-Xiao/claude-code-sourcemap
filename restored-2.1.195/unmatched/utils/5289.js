// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lic
// matched 2.1.88 source: src/utils/hooks.ts
// class=new  jaccard=0.0062  score=0.5816  fileCov=0.0063
// note: nearest: src/utils/hooks.ts (0.0062); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lic = E(() => {
  ft();
  je();
  sp();
});
async function $lr(e) {
  if (wf()) return;
  let t = VHt(e);
  if (!t) return;
  let n = Rt(),
    r = Gg(n);
  if (t === (r && VHt(r))) return;
  T(`Hook sessionTitle applied (${[...t].length} chars)`), await lHe(t, "hook"), await Zce(XE(), t, "user");
}
async function* aZt(e, t, n) {
  let r = n.getAppState(),
    o = n.agentId ?? Rt();
  if (!M$("UserPromptSubmit", r, o)) return;
  let s = {
    ...Td(t),
    hook_event_name: "UserPromptSubmit",
    prompt: e,
    session_title: Gg(Rt())
  };
  yield* TC({
    hookInput: s,
    toolUseID: Dic.randomUUID(),
    signal: n.abortController.signal,
    timeoutMs: Mll,
    toolUseContext: n
  });
}
var Dic;