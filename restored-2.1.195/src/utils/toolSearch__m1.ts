// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rSe
// matched 2.1.88 source: src/utils/toolSearch.ts
// class=modified (alt of src/utils/toolSearch.ts)  jaccard=0.1194  score=0.7819  fileCov=0.1235
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var rSe = E(() => {
  ft();
  dn();
  Un();
  kt();
  F2t();
  N8();
  je();
  fn();
  xop = (KWe(), ro(zWe));
});
function Foo(e) {
  if (!e.startsWith("auto:")) return null;
  let t = e.slice(5),
    n = parseInt(t, 10);
  if (isNaN(n))
    return (
      T(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`),
      null
    );
  return Math.max(0, Math.min(100, n));
}
function $op(e) {
  if (!e) return false;
  return e === "auto" || e.startsWith("auto:");
}
function V2t() {
  if (F4e()) return "standard";
  let e = process.env.ENABLE_TOOL_SEARCH,
    t = e ? Foo(e) : null;
  if (t === 0) return "tst";
  if (t === 100) return "standard";
  if ($op(e)) return "tst-auto";
  if (ut(e)) return "tst";
  if (ml(process.env.ENABLE_TOOL_SEARCH)) return "standard";
  return "tst";
}
function Nop() {
  try {
    let e = at("tengu_tool_search_unsupported_models", null);
    if (Array.isArray(e)) return e;
  } catch {}
  return Oop;
}
function Uop(e) {
  if (e === null || Array.isArray(e) || typeof e !== "object") return e;
  let t = e,
    n = r_(),
    r = n !== void 0 ? n : $2();
  if (typeof r === "string") {
    let o = r.toLowerCase();
    for (let s of Object.keys(t))
      if (s !== "*" && s.length > 0 && o.includes(s.toLowerCase())) return t[s];
  }
  return t["*"];
}
function goa() {
  let e = new Set();
  try {
    let t = Uop(at("tengu_non_deferrable_builtins", null));
    if (Array.isArray(t)) {
      for (let n of t) if (typeof n === "string") e.add(n);
    }
  } catch {}
  try {
    let t = x0()?.non_deferrable_builtins;
    if (Array.isArray(t)) {
      for (let n of t) if (typeof n === "string") e.add(n);
    }
  } catch {}
  if (e.size === 0) return Bop;
  return [...e];
}
function CX(e) {
  let t = e.toLowerCase(),
    n = Nop();
  for (let r of n) if (t.includes(r.toLowerCase())) return false;
  return true;
}
function o$() {
  let e = V2t();
  if (e === "standard") {
    if (!BRe)
      ((BRe = true),
        T(
          `[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${process.env.ENABLE_TOOL_SEARCH}, result=false`,
        ));
    return false;
  }
  if (!process.env.ENABLE_TOOL_SEARCH && fr() === "firstParty" && !_u()) {
    if (!BRe)
      ((BRe = true),
        T(
          `[ToolSearch:optimistic] disabled: ANTHROPIC_BASE_URL=${process.env.ANTHROPIC_BASE_URL} is not a first-party Anthropic host. Set ENABLE_TOOL_SEARCH=true (or auto / auto:N) if your proxy forwards tool_reference blocks.`,
        ));
    return false;
  }
  if (!process.env.ENABLE_TOOL_SEARCH && fr() === "vertex") {
    if (!BRe)
      ((BRe = true),
        T(
          "[ToolSearch:optimistic] disabled: Vertex AI does not accept the tool-search beta header. Set ENABLE_TOOL_SEARCH=true to override.",
        ));
    return false;
  }
  if (!BRe)
    ((BRe = true),
      T(
        `[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${process.env.ENABLE_TOOL_SEARCH}, result=true`,
      ));
  return true;
}
var Oop,
  Bop,
  BRe = false;
