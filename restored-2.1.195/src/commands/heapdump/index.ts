// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J7l
// matched 2.1.88 source: src/commands/heapdump/index.ts
// class=modified  jaccard=0.2999  score=0.3811  fileCov=0.5846
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var J7l = E(() => {
  ((X9f = {
    type: "local",
    name: "heapdump",
    description: "Dump the JS heap to ~/Desktop",
    isHidden: !0,
    supportsNonInteractive: !0,
    fleetHostCall: async ({ setInfo: e, setError: t }) => {
      e("Writing heap dump\u2026");
      let { performHeapDump: n } = await Promise.resolve().then(() => (y4o(), z7l)),
        r = await n();
      if (r.success) e(`Heap dump written to ${r.heapPath}`);
      else t(`Couldn't write heap dump \u2014 ${r.error}`);
    },
    load: () => Promise.resolve().then(() => (Y7l(), K7l)),
  }),
    (X7l = X9f));
});
var Q7l;
