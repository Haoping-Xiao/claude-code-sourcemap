// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H7l
// matched 2.1.88 source: src/commands/agents/index.ts
// class=modified  jaccard=0.3068  score=0.3928  fileCov=0.5833
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module H7l]
((I9f = {
  type: "local-jsx",
  name: "agents",
  description: "Manage agent configurations",
  load: () => Promise.resolve().then(() => (E7l(), b7l)),
}),
  (A7l = I9f));
var T7l = {};
async function call(e, t, n) {
  return v7l.jsx(o4l, {
    onComplete: e,
    args: n,
    commands: t.options.commands,
    getSessionContext: () => p2l(t.messages, t.readFileState),
  });
}
var v7l;
