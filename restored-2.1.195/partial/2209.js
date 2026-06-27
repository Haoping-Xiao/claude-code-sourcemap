// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xzr
// matched 2.1.88 source: src/utils/cronTasks.ts
// class=partial  jaccard=0.0681  score=0.2291  fileCov=0.0883
// note: low-confidence suggestion: src/utils/cronTasks.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xzr = E(() => {
  zOi = require("crypto");
});
function r1i(e) {
  n1i = e;
}
function mNt() {
  let e;
  try {
    e = n1i?.()?.juniper_shoal;
  } catch {
    return t1i;
  }
  if (typeof e !== "object" || e === null || Array.isArray(e)) return t1i;
  let t = e,
    n = null,
    r = t.marsh_lantern;
  if (r === !0) n = Object.freeze({
    everyNTurns: ZOi,
    maxNames: e1i
  });else if (typeof r === "object" && r !== null && !Array.isArray(r)) {
    let o = r,
      s = typeof o.stride === "number" && Number.isInteger(o.stride) && o.stride >= 1 ? o.stride : ZOi,
      i = typeof o.span === "number" && Number.isInteger(o.span) && o.span >= 1 ? o.span : e1i;
    n = Object.freeze({
      everyNTurns: s,
      maxNames: i
    });
  }
  return Object.freeze({
    toolSearchReminder: n,
    toolParamStrictness: t.bracken_spool === !0,
    emptyInputRepair: t.teasel_cove === !0,
    toolSearchFetchRule: t.gorse_hollow === !0,
    schemaDescFixes: t.thistle_skein === !0
  });
}
function Jzr() {
  return mNt().toolSearchReminder;
}
function o1i() {
  return mNt().toolParamStrictness;
}
function s1i() {
  return mNt().emptyInputRepair;
}
function i1i() {
  return mNt().toolSearchFetchRule;
}
function Qzr() {
  return mNt().schemaDescFixes;
}
function Zzr(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function a1i(e, t) {
  try {
    if (!(t instanceof H.ZodObject)) return null;
    let n = t.shape,
      r = Object.entries(n).filter(([, i]) => !i.safeParse(void 0).success);
    if (r.length === 0) return null;
    let o = {};
    for (let [i, a] of r) o[i] = TOd(i, a);
    if (!t.safeParse(o).success) return null;
    let s = r.map(([i]) => `\`${i}\``).join(", ");
    return `The ${e} tool was called with an empty input object ({}), but it has required parameters: ${s}. Minimal valid call shape: ${De(o)}. Re-issue the call with real values for each required parameter.`;
  } catch {
    return null;
  }
}
function TOd(e, t) {
  if (t instanceof H.ZodString) return `<${e}>`;
  if (t instanceof H.ZodNumber) return 0;
  if (t instanceof H.ZodBoolean) return !1;
  if (t instanceof H.ZodArray) return [];
  if (t instanceof H.ZodEnum) {
    let n = t.options;
    if (Array.isArray(n) && n.length > 0) return n[0];
  }
  if (t instanceof H.ZodLiteral) {
    let n = [...t.values];
    if (n.length > 0) return n[0];
  }
  return `<${e}>`;
}
var n1i = null,
  ZOi = 15,
  e1i = 10,
  t1i;