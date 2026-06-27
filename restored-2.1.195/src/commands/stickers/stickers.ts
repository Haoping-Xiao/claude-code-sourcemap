// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DXl
// matched 2.1.88 source: src/commands/stickers/stickers.ts
// class=modified  jaccard=0.0878  score=0.1239  fileCov=0.2313
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module DXl] deps: ft
((w8f = {
  name: "chrome",
  description: "Open Claude in Chrome (beta) settings",
  availability: ["claude-ai"],
  isEnabled: () => !Ir(),
  type: "local-jsx",
  load: () => Promise.resolve().then(() => (RXl(), kXl)),
}),
  (LXl = w8f));
async function call() {
  if (await ac("https://www.stickermule.com/claudecode"))
    return {
      type: "text",
      value: "Opening sticker page in browser\u2026",
    };
  else
    return {
      type: "text",
      value: "Failed to open browser. Visit: https://www.stickermule.com/claudecode",
    };
}
