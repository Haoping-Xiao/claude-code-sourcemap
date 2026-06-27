// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/ColorStep.tsx
// class=modified  jaccard=0.426  score=0.6187  fileCov=0.5776
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module wYl] deps: @xmldom/xmldom/lib/entities.js, @xmldom/xmldom/lib/entities.js, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, tools/AgentTool/agentDisplay.ts, components/diff/DiffDialog.tsx, ink/components/Box.tsx, components/design-system/Tabs.tsx
((XAt = R(lt(), 1)), (YAt = R(rt(), 1)), (kl = R(se(), 1)));
function ColorStep() {
  let e = CYl.c(14),
    { goNext: t, goBack: n, updateWizardData: r, wizardData: wizardData } = Eu(),
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
    e[3] !== wizardData.agentType ||
    e[4] !== wizardData.location ||
    e[5] !== wizardData.selectedModel ||
    e[6] !== wizardData.selectedTools ||
    e[7] !== wizardData.systemPrompt ||
    e[8] !== wizardData.whenToUse
  )
    ((i = (d) => {
      (r({
        selectedColor: d,
        finalAgent: {
          agentType: wizardData.agentType,
          whenToUse: wizardData.whenToUse,
          getSystemPrompt: () => wizardData.systemPrompt,
          tools: wizardData.selectedTools,
          ...(wizardData.selectedModel && {
            model: wizardData.selectedModel,
          }),
          ...(d && {
            color: d,
          }),
          source: wizardData.location,
        },
      }),
        t());
    }),
      (e[1] = t),
      (e[2] = r),
      (e[3] = wizardData.agentType),
      (e[4] = wizardData.location),
      (e[5] = wizardData.selectedModel),
      (e[6] = wizardData.selectedTools),
      (e[7] = wizardData.systemPrompt),
      (e[8] = wizardData.whenToUse),
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
  let c = wizardData.agentType || "agent",
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
