// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k9l
// matched 2.1.88 source: src/commands/session/index.ts
// class=modified  jaccard=0.3173  score=0.5009  fileCov=0.464
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module k9l] deps: ft, id
((jWf = {
  type: "local-jsx",
  name: "session",
  aliases: ["remote"],
  description: "Show cloud session URL and QR code",
  isEnabled: () => da(),
  get isHidden() {
    return !LO("fanout");
  },
  requires: {
    ink: true,
  },
  load: () => Promise.resolve().then(() => (x9l(), I9l)),
}),
  (J2o = jWf));
var R9l;
