// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/MemoryStep.tsx
// class=modified  jaccard=0.478  score=0.7155  fileCov=0.5901
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zYl] deps: Ye, Cc, Vl, Bs, Ko, wb, vH
((qYl = R(lt(), 1)), (rTe = R(se(), 1)));
function MemoryStep() {
  let e = KYl.c(13),
    { goNext: t, goBack: n, updateWizardData: r, wizardData: o } = Eu(),
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((s = {
      context: "Confirmation",
    }),
      (e[0] = s));
  else s = e[0];
  $r("confirm:no", n, s);
  let i = o.location === "userSettings",
    a;
  if (e[1] !== i)
    ((a = i
      ? [
          {
            label: "User scope (~/.claude/agent-memory/) (Recommended)",
            value: "user",
          },
          {
            label: "None (no persistent memory)",
            value: "none",
          },
          {
            label: "Project scope (.claude/agent-memory/)",
            value: "project",
          },
          {
            label: "Local scope (.claude/agent-memory-local/)",
            value: "local",
          },
        ]
      : [
          {
            label: "Project scope (.claude/agent-memory/) (Recommended)",
            value: "project",
          },
          {
            label: "None (no persistent memory)",
            value: "none",
          },
          {
            label: "User scope (~/.claude/agent-memory/)",
            value: "user",
          },
          {
            label: "Local scope (.claude/agent-memory-local/)",
            value: "local",
          },
        ]),
      (e[1] = i),
      (e[2] = a));
  else a = e[2];
  let l = a,
    c;
  if (e[3] !== t || e[4] !== r || e[5] !== o.finalAgent || e[6] !== o.systemPrompt)
    ((c = (f) => {
      let m = f === "none" ? void 0 : f,
        g = o.finalAgent?.agentType;
      (r({
        selectedMemory: m,
        finalAgent: o.finalAgent
          ? {
              ...o.finalAgent,
              memory: m,
              getSystemPrompt:
                lu() && m && g
                  ? () =>
                      o.systemPrompt +
                      `

` +
                      B3e(g, m)
                  : () => o.systemPrompt,
            }
          : void 0,
      }),
        t());
    }),
      (e[3] = t),
      (e[4] = r),
      (e[5] = o.finalAgent),
      (e[6] = o.systemPrompt),
      (e[7] = c));
  else c = e[7];
  let u = c,
    d;
  if (e[8] === Symbol.for("react.memo_cache_sentinel"))
    ((d = oTe.jsxs(Tn, {
      children: [
        oTe.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        oTe.jsx(ht, {
          chord: "enter",
          action: "select",
        }),
        oTe.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (e[8] = d));
  else d = e[8];
  let p;
  if (e[9] !== n || e[10] !== u || e[11] !== l)
    ((p = oTe.jsx(Pc, {
      subtitle: "Configure agent memory",
      footerText: d,
      children: oTe.jsx(U, {
        children: oTe.jsx(
          Sr,
          {
            options: l,
            onChange: u,
            onCancel: n,
          },
          "memory-select",
        ),
      }),
    })),
      (e[9] = n),
      (e[10] = u),
      (e[11] = l),
      (e[12] = p));
  else p = e[12];
  return p;
}
var KYl, oTe;
