// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zcn
// matched 2.1.88 source: node_modules/zod-to-json-schema/dist/esm/parsers/map.js
// class=partial  jaccard=0.2363  score=1  fileCov=0.2363
// note: low-confidence suggestion: node_modules/zod-to-json-schema/dist/esm/parsers/map.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zcn = E(() => {
  mxt();
  OR();
  qcn();
  Gcn();
  JK();
});
function zcs(e, t) {
  if (t.mapStrategy === "record") return Vcn(e, t);
  let n = Wd(e.keyType._def, {
      ...t,
      currentPath: [...t.currentPath, "items", "items", "0"]
    }) || Cw(t),
    r = Wd(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items", "items", "1"]
    }) || Cw(t);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [n, r],
      minItems: 2,
      maxItems: 2
    }
  };
}