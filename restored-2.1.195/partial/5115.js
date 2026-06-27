// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DXl
// matched 2.1.88 source: src/commands/chrome/index.ts
// class=partial  jaccard=0.2189  score=0.3187  fileCov=0.4114
// note: low-confidence suggestion: src/commands/chrome/index.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var DXl = E(() => {
  ft();
  w8f = {
    name: "chrome",
    description: "Open Claude in Chrome (beta) settings",
    availability: ["claude-ai"],
    isEnabled: () => !Ir(),
    type: "local-jsx",
    load: () => Promise.resolve().then(() => (RXl(), kXl))
  }, LXl = w8f;
});
var PXl = {};
_t(PXl, {
  call: () => call
});
async function call() {
  if (await ac("https://www.stickermule.com/claudecode")) return {
    type: "text",
    value: "Opening sticker page in browser\u2026"
  };else return {
    type: "text",
    value: "Failed to open browser. Visit: https://www.stickermule.com/claudecode"
  };
}