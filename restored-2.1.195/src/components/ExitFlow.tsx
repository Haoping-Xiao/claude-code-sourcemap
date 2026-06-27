// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D4o
// matched 2.1.88 source: src/components/ExitFlow.tsx
// class=modified  jaccard=0.3728  score=0.7413  fileCov=0.4286
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module D4o] deps: constants/spinnerVerbs.ts, utils/gracefulShutdown.ts, components/WorktreeExitDialog.tsx, components/ExitFlow.tsx
((iJl = R(lt(), 1)),
  (L4o = R(se(), 1)),
  (J8f = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"]));
function t6f() {
  return HL(e6f) ?? "Goodbye!";
}
async function ExitFlow(t0) {
  if (Js()) return (t0(), SHe(), null);
  let t = Gm() !== null,
    n = Ker();
  if (t || n.length > 0)
    return lJl.jsx(tir, {
      showWorktree: t,
      backgroundItems: n,
      onDone: t0,
      onCancel: () => t0(),
    });
  return (t0(t6f()), await ki(0, "prompt_input_exit"), null);
}
var lJl, e6f;
