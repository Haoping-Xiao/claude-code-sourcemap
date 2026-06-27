// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/MethodStep.tsx
// class=modified  jaccard=0.4653  score=0.6579  fileCov=0.6137
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var XYl = E(() => {
  Ye();
  ps();
  Uh();
  M7();
  Cc();
  Vl();
  Bs();
  Ko();
  wb();
  vH();
  ((KYl = R(lt(), 1)), (oTe = R(se(), 1)));
});
function QYl() {
  let e = JYl.c(11),
    { goNext: t, goBack: n, updateWizardData: r, goToStep: o } = Eu(),
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((s = [
      {
        label: "Generate with Claude (recommended)",
        value: "generate",
      },
      {
        label: "Manual configuration",
        value: "manual",
      },
    ]),
      (e[0] = s));
  else s = e[0];
  let i = s,
    a;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((a = sTe.jsxs(Tn, {
      children: [
        sTe.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        sTe.jsx(ht, {
          chord: "enter",
          action: "select",
        }),
        sTe.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (e[1] = a));
  else a = e[1];
  let l;
  if (e[2] !== t || e[3] !== o || e[4] !== r)
    ((l = (d) => {
      let p = d;
      if (
        (r({
          method: p,
          wasGenerated: p === "generate",
        }),
        p === "generate")
      )
        t();
      else o(3);
    }),
      (e[2] = t),
      (e[3] = o),
      (e[4] = r),
      (e[5] = l));
  else l = e[5];
  let c;
  if (e[6] !== n) ((c = () => n()), (e[6] = n), (e[7] = c));
  else c = e[7];
  let u;
  if (e[8] !== l || e[9] !== c)
    ((u = sTe.jsx(Pc, {
      subtitle: "Creation method",
      footerText: a,
      children: sTe.jsx(U, {
        children: sTe.jsx(
          Sr,
          {
            options: i,
            onChange: l,
            onCancel: c,
          },
          "method-select",
        ),
      }),
    })),
      (e[8] = l),
      (e[9] = c),
      (e[10] = u));
  else u = e[10];
  return u;
}
var JYl, sTe;
