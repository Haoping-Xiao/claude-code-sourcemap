// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cJl
// matched 2.1.88 source: src/components/ExitFlow.tsx
// class=modified (alt of src/components/ExitFlow.tsx)  jaccard=0.2748  score=0.7408  fileCov=0.304
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module cJl] deps: constants/spinnerVerbs.ts, components/ExitFlow.tsx, utils/desktopDeepLink.ts, utils/concurrentSessions.ts, Task.ts, utils/gracefulShutdown.ts, constants/prompts.ts
((lJl = R(se(), 1)), (e6f = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"]));
async function ExitFlow() {
  if (Js())
    return {
      type: "text",
      value: "Session keeps running. Use /stop to end it.",
    };
  return (
    await ki(0, "prompt_input_exit"),
    {
      type: "skip",
    }
  );
}
