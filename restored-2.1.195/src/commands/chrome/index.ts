// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DXl
// matched 2.1.88 source: src/commands/chrome/index.ts
// class=modified  jaccard=0.3002  score=0.4343  fileCov=0.4929
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
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
var PXl = {};
_t(PXl, {
  call: () => call,
});
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
