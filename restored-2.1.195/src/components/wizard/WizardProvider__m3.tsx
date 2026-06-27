// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gHo
// matched 2.1.88 source: src/components/wizard/WizardProvider.tsx
// class=modified (alt of src/components/wizard/WizardProvider.tsx)  jaccard=0.074  score=0.1266  fileCov=0.1511
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gHo] deps: mHo
tXa = R(rt(), 1);
function Pc(e) {
  let t = nXa.c(14),
    { title: n, color: r, children: o, subtitle: s, footerText: i } = e,
    a = r === void 0 ? "suggestion" : r,
    { currentStepIndex: l, totalSteps: c, title: u, showStepCounter: d, goBack: p } = Eu(),
    f = n || u || "Wizard",
    m = d !== false ? ` (${l + 1}/${c})` : "",
    g = `${f}${m}`,
    h;
  if (t[0] !== o || t[1] !== a || t[2] !== p || t[3] !== s || t[4] !== g)
    ((h = WJ.jsx(zn, {
      title: g,
      subtitle: s,
      onCancel: p,
      color: a,
      hideInputGuide: true,
      isCancelActive: false,
      children: o,
    })),
      (t[0] = o),
      (t[1] = a),
      (t[2] = p),
      (t[3] = s),
      (t[4] = g),
      (t[5] = h));
  else h = t[5];
  let y;
  if (t[6] !== l || t[7] !== i)
    ((y =
      i ??
      WJ.jsxs(Tn, {
        children: [
          WJ.jsx(ht, {
            chord: ["up", "down"],
            action: "navigate",
          }),
          WJ.jsx(ht, {
            chord: "enter",
            action: "select",
          }),
          WJ.jsx(mr, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: l > 0 ? "go back" : "cancel",
          }),
        ],
      })),
      (t[6] = l),
      (t[7] = i),
      (t[8] = y));
  else y = t[8];
  let b;
  if (t[9] !== y)
    ((b = WJ.jsx(U, {
      marginLeft: 2,
      marginTop: 1,
      children: WJ.jsx(vb, {
        children: y,
      }),
    })),
      (t[9] = y),
      (t[10] = b));
  else b = t[10];
  let _;
  if (t[11] !== h || t[12] !== b)
    ((_ = WJ.jsxs(WJ.Fragment, {
      children: [h, b],
    })),
      (t[11] = h),
      (t[12] = b),
      (t[13] = _));
  else _ = t[13];
  return _;
}
var nXa, WJ;
