// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Xl
// matched 2.1.88 source: src/commands/stickers/index.ts
// class=modified  jaccard=0.3182  score=0.3934  fileCov=0.6248
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module $Xl]
((I8f = {
  type: "local",
  name: "stickers",
  description: "Order Claude Code stickers",
  supportsNonInteractive: false,
  requires: {},
  load: () => Promise.resolve().then(() => (MXl(), PXl)),
}),
  (C4o = I8f));
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
