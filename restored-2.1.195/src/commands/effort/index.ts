// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UQl
// matched 2.1.88 source: src/commands/effort/index.ts
// class=modified  jaccard=0.2935  score=0.5075  fileCov=0.4103
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var UQl = E(() => {
  Cp();
  Isr();
  Ao();
  ((Rzf = {
    type: "local-jsx",
    name: "effort",
    description: "Set effort level for model usage",
    get argumentHint() {
      return NQl("[", "]");
    },
    get immediate() {
      return GAt();
    },
    requires: {
      ink: !0,
    },
    thinClientDispatch: "control-request",
    load: () => Promise.resolve().then(() => (p3o(), MQl)),
  }),
    (BQl = {
      type: "local",
      name: "effort",
      supportsNonInteractive: !0,
      description: "Set effort level for model usage",
      get argumentHint() {
        return NQl("<", ">");
      },
      load: () => Promise.resolve().then(() => (OQl(), $Ql)),
    }),
    (f3o = Rzf));
});
var m3o = () => {};
var GQl = {};
_t(GQl, {
  initialQuietIndexFor: () => initialQuietIndexFor,
  initialIndexFor: () => initialIndexFor,
  call: () => call,
});
function initialIndexFor(e, t) {
  if (!e) return 0;
  let n = t ?? 120,
    r = 1,
    o = 1 / 0;
  for (let s = 1; s < FQl.length; s++) {
    let i = Math.abs(FQl[s].intervalMinutes - n);
    if (i < o) ((o = i), (r = s));
  }
  return r;
}
function initialQuietIndexFor(e) {
  if (!e.enabled || !e.start || !e.end) return 0;
  for (let t = 1; t < jQl.length; t++) {
    let n = jQl[t].range;
    if (n.start === e.start && n.end === e.end) return t;
  }
  return 0;
}
var Lzf,
  Dzf,
  WQl,
  FQl,
  jQl,
  call = async (e) => (e("Wellbeing settings are not available in this build"), null);
