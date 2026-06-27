// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F7l
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0015  score=0.2126  fileCov=0.0015
// note: nearest: src/screens/REPL.tsx (0.0015); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var F7l = E(() => {
  W9f = {
    type: "local",
    name: "reload-skills",
    description: "Pick up skills added or changed on disk during this session",
    supportsNonInteractive: true,
    thinClientDispatch: "post-text",
    load: () => Promise.resolve().then(() => (U7l(), B7l))
  }, Ysr = W9f;
});
var j7l = {};
_t(j7l, {
  call: () => call
});
async function call(e, t) {
  return t.onQueryEvent?.({
    type: "open_message_selector"
  }), {
    type: "skip"
  };
}
var V9f, G7l;