// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dwr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dwr = E(() => {
  OR();
});
var nus = (e, t) => {
  if (t.currentPath.toString() === t.propertyPath?.toString()) return Wd(e.innerType._def, t);
  let n = Wd(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return n ? {
    anyOf: [{
      not: Cw(t)
    }, n]
  } : Cw(t);
};