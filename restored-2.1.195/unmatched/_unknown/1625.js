// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zdi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zdi = E(() => {
  qHn();
});
var zHn = e => {
  if (typeof globalThis.process !== "undefined") return globalThis.process.env?.[e]?.trim() ?? void 0;
  if (typeof globalThis.Deno !== "undefined") return globalThis.Deno.env?.get?.(e)?.trim();
  return;
};