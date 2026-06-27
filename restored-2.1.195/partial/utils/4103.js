// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L8t
// matched 2.1.88 source: src/commands/extra-usage/extra-usage-noninteractive.ts
// class=partial  jaccard=0.1438  score=0.2595  fileCov=0.2439
// note: low-confidence suggestion: src/commands/extra-usage/extra-usage-noninteractive.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module L8t] deps: oo, w8t, Ezn
ACo = R(se(), 1), Psl = (ECo(), ro(Dsl)).ExtraUsageDialog;
var TCo = {};
_t(TCo, {
  call: () => call
});
async function call() {
  let e = await Fyt({
    openInBrowser: Ir()
  });
  if (e.type === "message") return {
    type: "text",
    value: e.value
  };
  return {
    type: "text",
    value: e.opened ? `Browser opened to manage usage credits. If it didn't open, visit: ${e.url}` : `Visit ${e.url} to manage usage credits.`
  };
}