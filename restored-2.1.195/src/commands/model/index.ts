// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KJl
// matched 2.1.88 source: src/commands/model/index.ts
// class=modified  jaccard=0.164  score=0.1945  fileCov=0.511
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var KJl = E(() => {
  Isr();
  Ao();
  ((zJl = {
    type: "local",
    name: "model",
    supportsNonInteractive: true,
    description: "Set the AI model for Claude Code",
    argumentHint: "<model>",
    load: () => Promise.resolve().then(() => (LJl(), RJl)),
  }),
    (t3o = {
      type: "local-jsx",
      name: "model",
      get description() {
        return `Set the AI model for Claude Code (currently ${wp(As())})`;
      },
      argumentHint: "[model]",
      get immediate() {
        return GAt();
      },
      requires: {
        ink: true,
      },
      thinClientDispatch: "control-request",
      load: () => Promise.resolve().then(() => (VJl(), qJl)),
    }));
});
async function YJl() {
  let [e, t] = await Promise.allSettled([Ure(), xOa()]),
    n = e.status === "rejected" ? be(e.reason) : null,
    r = e.status === "fulfilled" ? e.value : [],
    o = t.status === "fulfilled" ? t.value : [],
    s = [...r, ...o],
    a = jo()?.remote?.defaultEnvironmentId;
  if (s.length === 0)
    return {
      availableTargets: [],
      selectedTarget: null,
      selectedTargetSource: null,
      environmentsError: n,
    };
  let l = r.find((u) => u.kind !== "bridge") ?? o[0] ?? s[0],
    c = null;
  if (a) {
    let u = s.find((d) => yEe(d) === a);
    if (u) {
      l = u;
      for (let d = fv.length - 1; d >= 0; d--) {
        let p = fv[d];
        if (!p || p === "flagSettings") continue;
        if (yn(p)?.remote?.defaultEnvironmentId === a) {
          c = p;
          break;
        }
      }
    }
  }
  return {
    availableTargets: s,
    selectedTarget: l,
    selectedTargetSource: c,
    environmentsError: n,
  };
}
