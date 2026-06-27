// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ygc
// matched 2.1.88 source: src/utils/mcp/elicitationValidation.ts
// class=modified  jaccard=0.3327  score=0.6868  fileCov=0.3922
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function c7e(schema) {
  return (
    schema.type === "array" &&
    "items" in schema &&
    typeof schema.items === "object" &&
    schema.items !== null &&
    ("enum" in schema.items || "anyOf" in schema.items)
  );
}
function Een(e) {
  if ("anyOf" in e.items) return e.items.anyOf.map((t) => t.const);
  if ("enum" in e.items) return e.items.enum;
  return [];
}
function Yum(e) {
  if ("anyOf" in e.items) return e.items.anyOf.map((t) => t.title);
  if ("enum" in e.items) return e.items.enum;
  return [];
}
function Aen(e, t) {
  let n = Een(e).indexOf(t);
  return n >= 0 ? (Yum(e)[n] ?? t) : t;
}
function wTt(e) {
  if ("oneOf" in e) return e.oneOf.map((t) => t.const);
  if ("enum" in e) return e.enum;
  return [];
}
function getEnumLabels(schema) {
  if ("oneOf" in schema) return schema.oneOf.map((t) => t.title);
  if ("enum" in schema) return ("enumNames" in schema ? schema.enumNames : void 0) ?? schema.enum;
  return [];
}
function Hen(e, t) {
  let n = wTt(e).indexOf(t);
  return n >= 0 ? (getEnumLabels(e)[n] ?? t) : t;
}
function getZodSchema(schema) {
  if (Pme(schema)) {
    let [t, ...n] = wTt(schema);
    if (!t) return H.never();
    return H.enum([t, ...n]);
  }
  if (schema.type === "string") {
    let t = H.string();
    if (schema.minLength !== void 0)
      t = t.min(schema.minLength, {
        message: `Must be at least ${schema.minLength} ${bn(schema.minLength, "character")}`,
      });
    if (schema.maxLength !== void 0)
      t = t.max(schema.maxLength, {
        message: `Must be at most ${schema.maxLength} ${bn(schema.maxLength, "character")}`,
      });
    switch (schema.format) {
      case "email":
        t = t.email({
          message: "Must be a valid email address, e.g. user@example.com",
        });
        break;
      case "uri":
        t = t.url({
          message: "Must be a valid URI, e.g. https://example.com",
        });
        break;
      case "date":
        t = t.date("Must be a valid date, e.g. 2024-03-15, today, next Monday");
        break;
      case "date-time":
        t = t.datetime({
          offset: true,
          message: "Must be a valid date-time, e.g. 2024-03-15T14:30:00Z, tomorrow at 3pm",
        });
        break;
      default:
        break;
    }
    return t;
  }
  if (schema.type === "number" || schema.type === "integer") {
    let t = schema.type === "integer" ? "an integer" : "a number",
      n = schema.type === "integer",
      r = (i) => (Number.isInteger(i) && !n ? `${i}.0` : String(i)),
      o =
        schema.minimum !== void 0 && schema.maximum !== void 0
          ? `Must be ${t} between ${r(schema.minimum)} and ${r(schema.maximum)}`
          : schema.minimum !== void 0
            ? `Must be ${t} >= ${r(schema.minimum)}`
            : schema.maximum !== void 0
              ? `Must be ${t} <= ${r(schema.maximum)}`
              : `Must be ${t}`,
      s = H.coerce.number({
        error: o,
      });
    if (schema.type === "integer")
      s = s.int({
        message: o,
      });
    if (schema.minimum !== void 0)
      s = s.min(schema.minimum, {
        message: o,
      });
    if (schema.maximum !== void 0)
      s = s.max(schema.maximum, {
        message: o,
      });
    return s;
  }
  if (schema.type === "boolean") return H.coerce.boolean();
  throw Error(`Unsupported schema: ${De(schema)}`);
}
function Sen(e, t) {
  let r = getZodSchema(t).safeParse(e);
  if (r.success)
    return {
      value: r.data,
      isValid: true,
    };
  return {
    isValid: false,
    error: r.error.issues.map((o) => o.message).join("; "),
  };
}
function isDateTimeSchema(schema) {
  return (
    schema.type === "string" &&
    "format" in schema &&
    (schema.format === "date" || schema.format === "date-time")
  );
}
async function Xgc(e, t, n) {
  let r = Sen(e, t);
  if (r.isValid) return r;
  if (isDateTimeSchema(t) && !Kgc(e)) {
    let o = await zgc(e, t.format, n);
    if (o.success) {
      let s = Sen(o.value, t);
      if (s.isValid) return s;
    }
  }
  return r;
}
var Pme = (e) => e.type === "string" && ("enum" in e || "oneOf" in e);
