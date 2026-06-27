// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TQa
// matched 2.1.88 source: src/components/wizard/WizardProvider.tsx
// class=modified (alt of src/components/wizard/WizardProvider.tsx)  jaccard=0.1761  score=0.5269  fileCov=0.2092
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TQa] deps: Ye, Vl, Fy, CH, gm, wb, vH, XHo
((n8n = R(rt(), 1)), (x$ = R(se(), 1)));
function o8n({ onComplete: e, onCancel: t }) {
  let n = r8n.useRef(e);
  n.current = e;
  let [r] = r8n.useState(() => [
    JJa,
    EQa,
    fQa,
    hQa,
    HQa,
    aQa,
    () =>
      eTo.jsx(tQa, {
        onComplete: (o) => n.current(o),
      }),
  ]);
  return eTo.jsx(U9e, {
    steps: r,
    initialData: {},
    onComplete: () => {},
    onCancel: t,
    title: "Set up Google Vertex AI",
    showStepCounter: false,
  });
}
var r8n, eTo;
