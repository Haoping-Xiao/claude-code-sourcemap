// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e8l
// matched 2.1.88 source: src/commands/skills/index.ts
// class=modified  jaccard=0.4769  score=0.6992  fileCov=0.6
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var e8l = E(() => {
  ((n5f = {
    type: "local-jsx",
    name: "skills",
    description: "List available skills",
    immediate: true,
    load: () => Promise.resolve().then(() => (Q9l(), X9l)),
  }),
    (Z9l = n5f));
});
var t8l = {};
_t(t8l, {
  call: () => call,
});
async function call(e, t) {
  return n8l.jsx(WOe, {
    onClose: e,
    context: t,
    defaultTab: "Status",
  });
}
var n8l;
