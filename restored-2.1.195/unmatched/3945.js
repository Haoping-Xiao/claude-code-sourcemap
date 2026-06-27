// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VJa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VJa = E(() => {
  Ye();
  sr();
  Vl();
  Fy();
  CH();
  gm();
  wb();
  vH();
  jHo();
  Y9n = R(rt(), 1), I$ = R(se(), 1);
});
function J9n({
  onComplete: e,
  onCancel: t
}) {
  let n = X9n.useRef(e);
  n.current = e;
  let [r] = X9n.useState(() => [cXa, UJa, pXa, sXa, GJa, qJa, LJa, () => VHo.jsx(hXa, {
    onComplete: o => n.current(o)
  })]);
  return VHo.jsx(U9e, {
    steps: r,
    initialData: {},
    onComplete: () => {},
    onCancel: t,
    title: "Set up Amazon Bedrock",
    showStepCounter: !1
  });
}
var X9n, VHo;