// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yYo
// matched 2.1.88 source: src/components/FeedbackSurvey/FeedbackSurveyView.tsx
// class=partial  jaccard=0.1194  score=0.1985  fileCov=0.2307
// note: low-confidence suggestion: src/components/FeedbackSurvey/FeedbackSurveyView.tsx; dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yYo = E(() => {
  Ye();
  uRc();
  pfr();
  hRc = R(lt(), 1), FNe = R(se(), 1), fRc = {
    "0": "dismissed",
    "1": "bad",
    "2": "fine",
    "3": "good",
    "4": "not_sure"
  }, mRc = [{
    key: "1",
    label: "Bad"
  }, {
    key: "2",
    label: "Fine"
  }, {
    key: "3",
    label: "Good"
  }], uwm = {
    key: "4",
    label: "Unsure"
  }, gRc = {
    key: "0",
    label: "Dismiss"
  };
});
function bRc(e) {
  let t = _Rc.c(11),
    {
      evaluation: n,
      onSelect: r,
      inputValue: o,
      setInputValue: s,
      mountDelayMs: i
    } = e,
    a = Ht(mwm),
    l;
  if (t[0] !== n.memory_impact_summary || t[1] !== a) {
    let p = n.memory_impact_summary?.trim();
    l = p && !a ? jin(p, fwm) : p, t[0] = n.memory_impact_summary, t[1] = a, t[2] = l;
  } else l = t[2];
  let c = l,
    u;
  if (t[3] !== c) u = c ? M7e.jsxs(M7e.Fragment, {
    children: [c, " ", M7e.jsx(w, {
      dimColor: true,
      children: yRc
    })]
  }) : yRc, t[3] = c, t[4] = u;else u = t[4];
  let d;
  if (t[5] !== o || t[6] !== i || t[7] !== r || t[8] !== s || t[9] !== u) d = M7e.jsx(ffr, {
    onSelect: r,
    inputValue: o,
    setInputValue: s,
    message: u,
    messageBold: false,
    mountDelayMs: i,
    showNotSure: true
  }), t[5] = o, t[6] = i, t[7] = r, t[8] = s, t[9] = u, t[10] = d;else d = t[10];
  return d;
}
function mwm(e) {
  return e.verbose;
}
var _Rc,
  M7e,
  yRc = "Did this memory help? (optional)",
  fwm = 4;