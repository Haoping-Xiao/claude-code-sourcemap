// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jvr
// matched 2.1.88 source: node_modules/ajv/dist/compile/resolve.js
// class=partial  jaccard=0.1274  score=0.466  fileCov=0.1491
// note: low-confidence suggestion: node_modules/ajv/dist/compile/resolve.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Jvr = E(() => {
  mxt();
  OR();
});
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
        if (!r.inclusive) n.exclusiveMinimum = !0;
        Dh(n, "minimum", r.value, r.message, t);
      }
      break;
    case "max":
      if (t.target === "jsonSchema7") {
        if (r.inclusive) Dh(n, "maximum", r.value, r.message, t);else Dh(n, "exclusiveMaximum", r.value, r.message, t);
      } else {
        if (!r.inclusive) n.exclusiveMaximum = !0;
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