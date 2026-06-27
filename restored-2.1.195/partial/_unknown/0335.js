// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kcn
// matched 2.1.88 source: node_modules/zod/v3/types.js
// class=partial  jaccard=0.0675  score=0.8107  fileCov=0.0686
// note: low-confidence suggestion: node_modules/zod/v3/types.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Kcn = E(() => {
  OR();
  Pkt = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
  };
});
function Zcs(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length)) {
    if (t.target === "openApi3") return {
      type: Pkt[e.innerType._def.typeName],
      nullable: true
    };
    return {
      type: [Pkt[e.innerType._def.typeName], "null"]
    };
  }
  if (t.target === "openApi3") {
    let r = Wd(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    if (r && "$ref" in r) return {
      allOf: [r],
      nullable: true
    };
    return r && {
      ...r,
      nullable: true
    };
  }
  let n = Wd(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return n && {
    anyOf: [n, {
      type: "null"
    }]
  };
}