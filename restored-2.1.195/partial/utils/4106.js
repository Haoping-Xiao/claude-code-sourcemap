// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qyt
// matched 2.1.88 source: src/commands/extra-usage/index.ts
// class=partial  jaccard=0.1686  score=0.3025  fileCov=0.2759
// note: low-confidence suggestion: src/commands/extra-usage/index.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qyt] deps: ft, ole, oo, wr
Loe = {
  type: "local-jsx",
  name: "usage-credits",
  description: "Configure usage credits to keep working when you hit a limit",
  isEnabled: () => Wyt() && !Ir(),
  requires: {
    ink: true
  },
  load: () => Promise.resolve().then(() => (L8t(), HCo))
}, ICo = {
  type: "local",
  name: "usage-credits",
  supportsNonInteractive: true,
  description: "Configure usage credits to keep working when you hit a limit",
  isEnabled: () => Wyt() && Ir(),
  get isHidden() {
    return !Ir();
  },
  load: () => Promise.resolve().then(() => (vCo(), TCo))
}, xCo = {
  type: "local-jsx",
  name: "extra-usage",
  description: "Renamed to /usage-credits",
  isHidden: true,
  isEnabled: () => Wyt() && !Ir(),
  requires: {
    ink: true
  },
  load: () => Promise.resolve().then(() => (CCo(), wCo))
}, kCo = {
  type: "local",
  name: "extra-usage",
  supportsNonInteractive: true,
  description: "Renamed to /usage-credits",
  isHidden: true,
  isEnabled: () => Wyt() && Ir(),
  load: () => Promise.resolve().then(() => (CCo(), wCo)).then(e => ({
    call: e.callNonInteractive
  }))
};
var wzn = "tengu_pewter_summit";
function Wpe() {
  let [e, t] = Czn.useState({
    ...ck
  });
  return Czn.useEffect(() => {
    let n = r => {
      t({
        ...r
      });
    };
    return cLe.add(n), () => {
      cLe.delete(n);
    };
  }, []), e;
}
var Czn;