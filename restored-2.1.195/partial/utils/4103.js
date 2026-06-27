// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L8t
// matched 2.1.88 source: src/commands/extra-usage/extra-usage-noninteractive.ts
// class=partial  jaccard=0.1438  score=0.2595  fileCov=0.2439
// note: low-confidence suggestion: src/commands/extra-usage/extra-usage-noninteractive.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module L8t] deps: utils/http.ts, undici/lib/web/fetch/response.js, components/LogoV2/Clawd.tsx
ACo = R(se(), 1), Psl = (ECo(), ro(Dsl)).ExtraUsageDialog;
async function call() {
  let result = await Fyt({
    openInBrowser: Ir()
  });
  if (result.type === "message") return {
    type: "text",
    value: result.value
  };
  return {
    type: "text",
    value: result.opened ? `Browser opened to manage usage credits. If it didn't open, visit: ${result.url}` : `Visit ${result.url} to manage usage credits.`
  };
}