// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TQa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var TQa = E(() => {
  Ye();
  Vl();
  Fy();
  CH();
  gm();
  wb();
  vH();
  XHo();
  n8n = R(rt(), 1), x$ = R(se(), 1);
});
function o8n({
  onComplete: e,
  onCancel: t
}) {
  let n = r8n.useRef(e);
  n.current = e;
  let [r] = r8n.useState(() => [JJa, EQa, fQa, hQa, HQa, aQa, () => eTo.jsx(tQa, {
    onComplete: o => n.current(o)
  })]);
  return eTo.jsx(U9e, {
    steps: r,
    initialData: {},
    onComplete: () => {},
    onCancel: t,
    title: "Set up Google Vertex AI",
    showStepCounter: !1
  });
}
var r8n, eTo;