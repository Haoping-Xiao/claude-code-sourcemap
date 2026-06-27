// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/LocationStep.tsx
// class=modified  jaccard=0.4113  score=0.6306  fileCov=0.5419
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WYl] deps: utils/errors.ts, utils/plugins/pluginPolicy.ts, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, screens/REPL.tsx, commands/memory/memory.tsx, context/modalContext.tsx, components/CustomSelect/select.tsx, components/CustomSelect/select.tsx, @anthropic-ai/bedrock-sdk/client.mjs, components/ScrollKeybindingHandler.tsx, @ant/computer-use-mcp/src/toolCalls.ts, vH, components/agents/new-agent-creation/wizard-steps/GenerateStep.tsx
((Mse = R(rt(), 1)), (s2 = R(se(), 1)));
function LocationStep() {
  let e = qYl.c(11),
    { goNext: t, updateWizardData: n, cancel: r } = Eu(),
    o;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = {
      label: "Project (.claude/agents/)",
      value: "projectSettings",
    }),
      (e[0] = o));
  else o = e[0];
  let s;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((s = [
      o,
      {
        label: "Personal (~/.claude/agents/)",
        value: "userSettings",
      },
    ]),
      (e[1] = s));
  else s = e[1];
  let i = s,
    a;
  if (e[2] === Symbol.for("react.memo_cache_sentinel"))
    ((a = rTe.jsxs(Tn, {
      children: [
        rTe.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        rTe.jsx(ht, {
          chord: "enter",
          action: "select",
        }),
        rTe.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel",
        }),
      ],
    })),
      (e[2] = a));
  else a = e[2];
  let l;
  if (e[3] !== t || e[4] !== n)
    ((l = (d) => {
      (n({
        location: d,
      }),
        t());
    }),
      (e[3] = t),
      (e[4] = n),
      (e[5] = l));
  else l = e[5];
  let c;
  if (e[6] !== r) ((c = () => r()), (e[6] = r), (e[7] = c));
  else c = e[7];
  let u;
  if (e[8] !== l || e[9] !== c)
    ((u = rTe.jsx(Pc, {
      subtitle: "Choose location",
      footerText: a,
      children: rTe.jsx(U, {
        children: rTe.jsx(
          Sr,
          {
            options: i,
            onChange: l,
            onCancel: c,
          },
          "location-select",
        ),
      }),
    })),
      (e[8] = l),
      (e[9] = c),
      (e[10] = u));
  else u = e[10];
  return u;
}
var qYl, rTe;
