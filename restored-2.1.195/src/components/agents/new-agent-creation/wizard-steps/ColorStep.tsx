// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/ColorStep.tsx
// class=modified  jaccard=0.426  score=0.6187  fileCov=0.5776
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module wYl] deps: si, Xa, _i, Ye, r4o, vKe, LW, kP
((XAt = R(lt(), 1)), (YAt = R(rt(), 1)), (kl = R(se(), 1)));
function IYl() {
  let e = CYl.c(14),
    { goNext: t, goBack: n, updateWizardData: r, wizardData: o } = Eu(),
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((s = {
      context: "Confirmation",
    }),
      (e[0] = s));
  else s = e[0];
  $r("confirm:no", n, s);
  let i;
  if (
    e[1] !== t ||
    e[2] !== r ||
    e[3] !== o.agentType ||
    e[4] !== o.location ||
    e[5] !== o.selectedModel ||
    e[6] !== o.selectedTools ||
    e[7] !== o.systemPrompt ||
    e[8] !== o.whenToUse
  )
    ((i = (d) => {
      (r({
        selectedColor: d,
        finalAgent: {
          agentType: o.agentType,
          whenToUse: o.whenToUse,
          getSystemPrompt: () => o.systemPrompt,
          tools: o.selectedTools,
          ...(o.selectedModel && {
            model: o.selectedModel,
          }),
          ...(d && {
            color: d,
          }),
          source: o.location,
        },
      }),
        t());
    }),
      (e[1] = t),
      (e[2] = r),
      (e[3] = o.agentType),
      (e[4] = o.location),
      (e[5] = o.selectedModel),
      (e[6] = o.selectedTools),
      (e[7] = o.systemPrompt),
      (e[8] = o.whenToUse),
      (e[9] = i));
  else i = e[9];
  let a = i,
    l;
  if (e[10] === Symbol.for("react.memo_cache_sentinel"))
    ((l = nTe.jsxs(Tn, {
      children: [
        nTe.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        nTe.jsx(ht, {
          chord: "enter",
          action: "select",
        }),
        nTe.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (e[10] = l));
  else l = e[10];
  let c = o.agentType || "agent",
    u;
  if (e[11] !== a || e[12] !== c)
    ((u = nTe.jsx(Pc, {
      subtitle: "Choose background color",
      footerText: l,
      children: nTe.jsx(U, {
        children: nTe.jsx(Nsr, {
          agentName: c,
          currentColor: "automatic",
          onConfirm: a,
        }),
      }),
    })),
      (e[11] = a),
      (e[12] = c),
      (e[13] = u));
  else u = e[13];
  return u;
}
var CYl, nTe;
