// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tXl
// matched 2.1.88 source: src/commands/version.ts
// class=modified  jaccard=0.3016  score=0.4714  fileCov=0.4558
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var tXl = E(() => {
  ft();
  pz();
  v5();
  Ko();
  eE();
  Ye();
  id();
  At();
  ((eXl = R(lt(), 1)), (Jsr = R(rt(), 1)), (yR = R(se(), 1)));
  ((e8f = {
    type: "local-jsx",
    name: "version",
    description: "Show this session's version (autoupdate may have a newer one)",
    isEnabled: () => false,
    immediate: true,
    requires: {
      ink: true,
    },
    load: () =>
      Promise.resolve({
        call: Z9f,
      }),
  }),
    (_4o = {
      type: "local",
      name: "version",
      description: "Print the version this session is running (not what autoupdate downloaded)",
      isEnabled: () => false,
      get isHidden() {
        return !Ir();
      },
      supportsNonInteractive: true,
      load: () =>
        Promise.resolve({
          call: t8f,
        }),
    }),
    (b4o = e8f));
});
var nXl, S4o, Qsr;
