// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cJl
// matched 2.1.88 source: src/components/ExitFlow.tsx
// class=modified (alt of src/components/ExitFlow.tsx)  jaccard=0.4807  score=0.7667  fileCov=0.5631
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var cJl = E(() => {
  cEe();
  D4o();
  m7t();
  Ld();
  iKe();
  Yp();
  aR();
  ((lJl = R(se(), 1)), (e6f = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"]));
});
var uJl = {};
_t(uJl, {
  call: () => call,
});
async function call() {
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
