// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fnc
// matched 2.1.88 source: src/commands/voice/index.ts
// class=modified  jaccard=0.2448  score=0.3028  fileCov=0.5613
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: default
// [unwrapped __esm module fnc] deps: dQt
((oXf = {
  type: "local",
  name: "voice",
  description: "Toggle voice mode",
  argumentHint: "[hold|tap|off]",
  availability: ["claude-ai"],
  isEnabled: () => cQt(),
  get isHidden() {
    return !AHt();
  },
  supportsNonInteractive: false,
  load: () => Promise.resolve().then(() => (dnc(), unc)),
}),
  (sXf = oXf));
var mnc = {};
var iXf = async (e, t) => {
    let n = await KGt(t.abortController.signal);
    switch (n.kind) {
      case "ok":
      case "api-error":
        return {
          type: "text",
          value: n.text,
        };
      case "no-turn":
        return {
          type: "text",
          value: "Nothing to recap yet \u2014 send a message first.",
        };
      case "aborted":
        return {
          type: "text",
          value: "Recap cancelled.",
        };
      case "failed":
        return {
          type: "text",
          value: "Couldn't generate a recap. Run with --debug for details.",
        };
    }
  },
  aXf,
  lXf;
