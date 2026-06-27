// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H7l
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0028  score=0.4728  fileCov=0.0028
// note: nearest: src/screens/REPL.tsx (0.0028); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module H7l]
I9f = {
  type: "local-jsx",
  name: "agents",
  description: "Manage agent configurations",
  load: () => Promise.resolve().then(() => (E7l(), b7l))
}, A7l = I9f;
var T7l = {};
_t(T7l, {
  call: () => call
});
async function call(e, t, n) {
  return v7l.jsx(o4l, {
    onComplete: e,
    args: n,
    commands: t.options.commands,
    getSessionContext: () => p2l(t.messages, t.readFileState)
  });
}
var v7l;