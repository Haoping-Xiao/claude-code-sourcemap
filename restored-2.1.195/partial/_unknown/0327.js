// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zvr
// matched 2.1.88 source: node_modules/ajv/dist/compile/resolve.js
// class=partial  jaccard=0.0792  score=0.2814  fileCov=0.0992
// note: low-confidence suggestion: node_modules/ajv/dist/compile/resolve.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zvr = E(() => {
  OR();
});
function ewr(e, t, n) {
  let r = n ?? t.dateStrategy;
  if (Array.isArray(r)) return {
    anyOf: r.map((o, s) => ewr(e, t, o))
  };
  switch (r) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return Zeu(e, t);
  }
}
var Zeu = (e, t) => {
  let n = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3") return n;
  for (let r of e.checks) switch (r.kind) {
    case "min":
      Dh(n, "minimum", r.value, r.message, t);
      break;
    case "max":
      Dh(n, "maximum", r.value, r.message, t);
      break;
  }
  return n;
};
var twr = () => {};
function Fcs(e, t) {
  return {
    ...Wd(e.innerType._def, t),
    default: e.defaultValue()
  };
}