// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Oot
// matched 2.1.88 source: src/utils/words.ts
// class=modified (alt of src/utils/words.ts)  jaccard=0.0032  score=0.0942  fileCov=0.0033
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function XOt(e) {
  if (Mte(e)) return "falcon";
  if (e === "claude-sonnet-4-5") return "sonnet_4_5";
  if (e === "claude-haiku-4-5") return "haiku_4_5";
  if (e.includes("opus")) return "opus";
  if (e.includes("sonnet")) return "sonnet";
  if (e.includes("haiku")) return "haiku";
  return "base";
}
function Not(e, t) {
  let n = XOt(t);
  return n === "base" ? e : `${e}_${n}`;
}
function i_e(e) {
  return /-eap($|\[)/i.test(e);
}
function zkd(e) {
  let t = mo(e),
    n = x0()?.simple_system_prompt;
  if (
    typeof n === "object" &&
    n !== null &&
    Object.entries(n).some(([o, s]) => s === true && t.includes(o))
  )
    return true;
  let r = at("tengu_velvet_cascade", null);
  if (typeof r !== "object" || r === null || !("models" in r) || !Array.isArray(r.models))
    return false;
  return r.models.some((o) => typeof o === "string" && t.includes(o));
}
function Kkd(e) {
  if (i_e(e)) return false;
  let t = mo(e);
  if (JB(t, "lean_prompt") || t === "claude-mythos-5") return false;
  if (
    t.includes("claude-3-") ||
    t.includes("haiku") ||
    t.includes("sonnet") ||
    t === "claude-opus-4-0" ||
    t === "claude-opus-4-1" ||
    t === "claude-opus-4-5" ||
    t === "claude-opus-4-6" ||
    t === "claude-opus-4-7"
  )
    return true;
  return !td();
}
var ph;
