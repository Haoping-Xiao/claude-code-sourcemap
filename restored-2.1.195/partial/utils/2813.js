// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NX
// matched 2.1.88 source: src/services/mcp/types.ts
// class=partial  jaccard=0.0609  score=0.3128  fileCov=0.0703
// note: low-confidence suggestion: src/services/mcp/types.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NX = E(() => {
  zb();
  ft();
  Un();
  oo();
  er();
  je();
  NE();
  Ls();
  yap = ve(() => dt.object({
    enabled: dt.boolean().optional(),
    planLimitsEndDate: dt.string().optional(),
    hideRateLimitsDescription: dt.boolean().optional(),
    overageConsentRequired: dt.boolean().optional()
  }));
  Cia = {};
  Eap = ve(() => dt.array(dt.string())), Iia = ["enterprise"];
});
function wap(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) ? e : fio;
}
function Mia(e, t) {
  if (typeof t !== "string" || t === "") return;
  let n = wap(e)[t];
  return typeof n === "object" && n !== null ? n : void 0;
}
async function $ia(e) {
  let t = await v7(Pia, fio);
  return Oia(Mia(t, e));
}
function Oia(e) {
  return Bia(e?.block);
}
function Nia(e) {
  let t = Mia(zx(Pia, fio), e),
    n = Oia(t);
  if (n === null) return null;
  return Bia(t?.pickerHint) ?? n;
}
function Bia(e) {
  if (typeof e !== "string") return null;
  let t = e.trim();
  return t === "" ? null : t;
}
var Pia = "tengu-model-error-overrides",
  fio;