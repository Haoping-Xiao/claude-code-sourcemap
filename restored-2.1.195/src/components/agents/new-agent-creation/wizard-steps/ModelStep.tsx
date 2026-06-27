// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/ModelStep.tsx
// class=modified  jaccard=0.3994  score=1  fileCov=0.3994
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ZYl = E(() => {
  Ye();
  Cc();
  Vl();
  Bs();
  Ko();
  wb();
  vH();
  ((JYl = R(lt(), 1)), (sTe = R(se(), 1)));
});
function t7l() {
  let e = e7l.c(8),
    { goNext: t, goBack: n, updateWizardData: r, wizardData: o } = Eu(),
    s;
  if (e[0] !== t || e[1] !== r)
    ((s = (c) => {
      (r({
        selectedModel: c,
      }),
        t());
    }),
      (e[0] = t),
      (e[1] = r),
      (e[2] = s));
  else s = e[2];
  let i = s,
    a;
  if (e[3] === Symbol.for("react.memo_cache_sentinel"))
    ((a = R1e.jsxs(Tn, {
      children: [
        R1e.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        R1e.jsx(ht, {
          chord: "enter",
          action: "select",
        }),
        R1e.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (e[3] = a));
  else a = e[3];
  let l;
  if (e[4] !== n || e[5] !== i || e[6] !== o.selectedModel)
    ((l = R1e.jsx(Pc, {
      subtitle: "Select model",
      footerText: a,
      children: R1e.jsx(Bsr, {
        initialModel: o.selectedModel,
        onComplete: i,
        onCancel: n,
      }),
    })),
      (e[4] = n),
      (e[5] = i),
      (e[6] = o.selectedModel),
      (e[7] = l));
  else l = e[7];
  return l;
}
var e7l, R1e;
