// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lAc
// matched 2.1.88 source: src/components/permissions/PowerShellPermissionRequest/PowerShellPermissionRequest.tsx
// class=new  jaccard=0.0167  score=0.6932  fileCov=0.0168
// note: nearest: src/components/permissions/PowerShellPermissionRequest/PowerShellPermissionRequest.tsx (0.0167); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lAc] deps: dre
iAc = R(rt(), 1);
function tym(e, t) {
  if (t.length === 0) return e;
  let n = new Set(e.map(xu)),
    r = t.map(o => o.isMcp && n.has(xu(o)) ? {
      ...o,
      isHidden: true
    } : o);
  return oE([...e, ...r], "name");
}
function jzo(e, t) {
  return cAc.useMemo(() => tym(e, t), [e, t]);
}
var cAc;