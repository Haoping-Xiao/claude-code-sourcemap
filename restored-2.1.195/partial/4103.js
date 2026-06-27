// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L8t
// matched 2.1.88 source: node_modules/undici/lib/web/eventsource/eventsource-stream.js
// class=partial  jaccard=0.1231  score=0.1822  fileCov=0.275
// note: low-confidence suggestion: node_modules/undici/lib/web/eventsource/eventsource-stream.js; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var L8t = E(() => {
  oo();
  w8t();
  Ezn();
  ACo = R(se(), 1), Psl = (ECo(), ro(Dsl)).ExtraUsageDialog;
});
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