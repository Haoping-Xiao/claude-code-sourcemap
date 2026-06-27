// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EAi
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EAi = E(() => {
  ROt();
});
var bot = e => {
  if (typeof globalThis.process !== "undefined") return globalThis.process.env?.[e]?.trim() ?? void 0;
  if (typeof globalThis.Deno !== "undefined") return globalThis.Deno.env?.get?.(e)?.trim();
  return;
};