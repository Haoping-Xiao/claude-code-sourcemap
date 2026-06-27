// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BZr
// matched 2.1.88 source: src/components/permissions/rules/AddWorkspaceDirectory.tsx
// class=modified (alt of src/components/permissions/rules/AddWorkspaceDirectory.tsx)  jaccard=0.0915  score=0.8464  fileCov=0.0931
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BZr] deps: si, qLn, Mg, Ye, ps, TZr, Cc, Vl, Bs, vi, f_, Ko, OUt
((NUt = R(lt(), 1)),
  (GGe = R(rt(), 1)),
  ($v = R(se(), 1)),
  (sKd = [
    {
      value: "yes-session",
      label: "Yes, for this session",
    },
    {
      value: "yes-remember",
      label: "Yes, and remember this directory",
    },
    {
      value: "no",
      label: "No",
    },
  ]));
function Gzi(e) {
  let t = e.toUpperCase();
  return cKd.has(t) || jUt.some((n) => t.startsWith(n));
}
function Wzi(e) {
  return uKd.has(e.toUpperCase());
}
var UUt, UZr, FUt, FZr, jZr, jzi, cKd, jUt, uKd, qzi, ilt;
