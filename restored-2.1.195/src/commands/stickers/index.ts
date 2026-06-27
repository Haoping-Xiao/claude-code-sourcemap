// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Xl
// matched 2.1.88 source: src/commands/stickers/index.ts
// class=modified  jaccard=0.2999  score=0.3811  fileCov=0.5846
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var $Xl = E(() => {
  ((I8f = {
    type: "local",
    name: "stickers",
    description: "Order Claude Code stickers",
    supportsNonInteractive: !1,
    requires: {},
    load: () => Promise.resolve().then(() => (MXl(), PXl)),
  }),
    (C4o = I8f));
});
var OXl = {};
_t(OXl, {
  call: () => call,
});
async function call() {
  if (await ac("https://clau.de/radio"))
    return {
      type: "text",
      value: "Opening Claude FM in your browser\u2026",
    };
  return {
    type: "text",
    value: "Couldn't open the browser. Listen at: https://clau.de/radio",
  };
}
