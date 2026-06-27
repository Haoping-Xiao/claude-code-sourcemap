// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jvr
// matched 2.1.88 source: node_modules/zod/v4/core/to-json-schema.js
// class=new  jaccard=0.0294  score=0.3229  fileCov=0.0314
// note: nearest: node_modules/zod/v4/core/to-json-schema.js (0.0294); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Ncs(e, t) {
  let n = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks) return n;
  for (let r of e.checks) switch (r.kind) {
    case "min":
      if (t.target === "jsonSchema7") {
        if (r.inclusive) Dh(n, "minimum", r.value, r.message, t);else Dh(n, "exclusiveMinimum", r.value, r.message, t);
      } else {
        if (!r.inclusive) n.exclusiveMinimum = true;
        Dh(n, "minimum", r.value, r.message, t);
      }
      break;
    case "max":
      if (t.target === "jsonSchema7") {
        if (r.inclusive) Dh(n, "maximum", r.value, r.message, t);else Dh(n, "exclusiveMaximum", r.value, r.message, t);
      } else {
        if (!r.inclusive) n.exclusiveMaximum = true;
        Dh(n, "maximum", r.value, r.message, t);
      }
      break;
    case "multipleOf":
      Dh(n, "multipleOf", r.value, r.message, t);
      break;
  }
  return n;
}
var Qvr = () => {};
function Bcs() {
  return {
    type: "boolean"
  };
}
function jcn(e, t) {
  return Wd(e.type._def, t);
}