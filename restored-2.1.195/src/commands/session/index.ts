// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k9l
// matched 2.1.88 source: src/commands/session/index.ts
// class=modified  jaccard=0.2566  score=0.4439  fileCov=0.3781
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var k9l = E(() => {
  ft();
  id();
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
      ink: !0,
    },
    load: () => Promise.resolve().then(() => (x9l(), I9l)),
  }),
    (J2o = jWf));
});
var R9l;
