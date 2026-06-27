// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jtl
// matched 2.1.88 source: src/tools/GrepTool/GrepTool.ts
// class=modified (alt of src/tools/GrepTool/GrepTool.ts)  jaccard=0.0489  score=1  fileCov=0.0489
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jtl] deps: Q8, E5, ql, Ye, oc, es, co
((Ntl = R(lt(), 1)), (XI = R(se(), 1)));
function qvo(e, t, n = 0) {
  if (t === 0)
    return {
      items: e.slice(n),
      appliedLimit: void 0,
    };
  let r = t ?? Oef,
    o = e.slice(n, n + r),
    s = e.length - n > r;
  return {
    items: o,
    appliedLimit: s ? r : void 0,
  };
}
function Vvo(e, t) {
  let n = [];
  if (e !== void 0) n.push(`limit: ${e}`);
  if (t) n.push(`offset: ${t}`);
  return n.join(", ");
}
var Mef,
  $ef,
  Oef = 250,
  Nef,
  L$;
