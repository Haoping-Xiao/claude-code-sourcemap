// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VJa
// matched 2.1.88 source: src/components/wizard/WizardProvider.tsx
// class=modified (alt of src/components/wizard/WizardProvider.tsx)  jaccard=0.1761  score=0.5269  fileCov=0.2092
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VJa] deps: Ye, sr, Vl, Fy, CH, gm, wb, vH, jHo
((Y9n = R(rt(), 1)), (I$ = R(se(), 1)));
function J9n({ onComplete: e, onCancel: t }) {
  let n = X9n.useRef(e);
  n.current = e;
  let [r] = X9n.useState(() => [
    cXa,
    UJa,
    pXa,
    sXa,
    GJa,
    qJa,
    LJa,
    () =>
      VHo.jsx(hXa, {
        onComplete: (o) => n.current(o),
      }),
  ]);
  return VHo.jsx(U9e, {
    steps: r,
    initialData: {},
    onComplete: () => {},
    onCancel: t,
    title: "Set up Amazon Bedrock",
    showStepCounter: false,
  });
}
var X9n, VHo;
