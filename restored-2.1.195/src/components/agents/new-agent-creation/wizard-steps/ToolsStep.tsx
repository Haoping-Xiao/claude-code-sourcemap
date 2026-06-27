// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s7l
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/ToolsStep.tsx
// class=modified  jaccard=0.2924  score=0.4492  fileCov=0.4557
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module s7l] deps: Ye, ps, y3, Cc, Bs, f_, Ko, Mg, wb, vH
((r7l = R(lt(), 1)), (Wsr = R(rt(), 1)), (H3 = R(se(), 1)));
function a7l(e) {
  let t = i7l.c(10),
    { tools: n } = e,
    { goNext: r, goBack: o, updateWizardData: s, wizardData: i } = Eu(),
    a;
  if (t[0] !== r || t[1] !== s)
    ((a = (f) => {
      (s({
        selectedTools: f,
      }),
        r());
    }),
      (t[0] = r),
      (t[1] = s),
      (t[2] = a));
  else a = t[2];
  let l = a,
    c = i.selectedTools,
    u;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((u = L1e.jsx(ht, {
      chord: "enter",
      action: "toggle selection",
    })),
      (t[3] = u));
  else u = t[3];
  let d;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((d = L1e.jsxs(Tn, {
      children: [
        u,
        L1e.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        L1e.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (t[4] = d));
  else d = t[4];
  let p;
  if (t[5] !== o || t[6] !== l || t[7] !== c || t[8] !== n)
    ((p = L1e.jsx(Pc, {
      subtitle: "Select tools",
      footerText: d,
      children: L1e.jsx(Fsr, {
        tools: n,
        initialTools: c,
        onComplete: l,
        onCancel: o,
      }),
    })),
      (t[5] = o),
      (t[6] = l),
      (t[7] = c),
      (t[8] = n),
      (t[9] = p));
  else p = t[9];
  return p;
}
var i7l, L1e;
