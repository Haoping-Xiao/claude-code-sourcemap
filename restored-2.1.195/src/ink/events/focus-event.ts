// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Ln
// matched 2.1.88 source: src/ink/events/focus-event.ts
// class=modified  jaccard=0.5382  score=1  fileCov=0.5382
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _Ln] deps: ink/events/terminal-event.ts
J_e = class J_e extends yne {
  text;
  constructor(e) {
    super("paste", {
      bubbles: true,
      cancelable: true,
    });
    this.text = e;
  }
};
var aJr;
