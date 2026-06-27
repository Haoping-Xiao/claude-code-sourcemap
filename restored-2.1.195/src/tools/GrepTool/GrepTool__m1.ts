// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jtl
// matched 2.1.88 source: src/tools/GrepTool/GrepTool.ts
// class=modified (alt of src/tools/GrepTool/GrepTool.ts)  jaccard=0.0489  score=1  fileCov=0.0489
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
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
function formatLimitInfo(appliedLimit, appliedOffset) {
  let n = [];
  if (appliedLimit !== void 0) n.push(`limit: ${appliedLimit}`);
  if (appliedOffset) n.push(`offset: ${appliedOffset}`);
  return n.join(", ");
}
var Mef,
  $ef,
  Oef = 250,
  Nef,
  L$;
