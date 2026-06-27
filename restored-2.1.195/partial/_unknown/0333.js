// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module awr
// matched 2.1.88 source: node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
// class=partial  jaccard=0.099  score=0.7658  fileCov=0.1021
// note: low-confidence suggestion: node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
function zodToJsonSchema(e) {
  let t = e.values,
    r = Object.keys(e.values).filter(s => typeof t[t[s]] !== "number").map(s => t[s]),
    o = Array.from(new Set(r.map(s => typeof s)));
  return {
    type: o.length === 1 ? o[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: r
  };
}
function Ycs(e) {
  return e.target === "openAi" ? void 0 : {
    not: Cw({
      ...e,
      currentPath: [...e.currentPath, "not"]
    })
  };
}