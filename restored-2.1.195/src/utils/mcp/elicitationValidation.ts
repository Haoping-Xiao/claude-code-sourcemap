// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ygc
// matched 2.1.88 source: src/utils/mcp/elicitationValidation.ts
// class=modified  jaccard=0.6243  score=1  fileCov=0.6243
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ygc = E(() => {
  dn();
  ZE();
  og();
  vn();
  co();
});
function c7e(e) {
  return (
    e.type === "array" &&
    "items" in e &&
    typeof e.items === "object" &&
    e.items !== null &&
    ("enum" in e.items || "anyOf" in e.items)
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
function Xum(e) {
  if ("oneOf" in e) return e.oneOf.map((t) => t.title);
  if ("enum" in e) return ("enumNames" in e ? e.enumNames : void 0) ?? e.enum;
  return [];
}
function Hen(e, t) {
  let n = wTt(e).indexOf(t);
  return n >= 0 ? (Xum(e)[n] ?? t) : t;
}
function Jum(e) {
  if (Pme(e)) {
    let [t, ...n] = wTt(e);
    if (!t) return H.never();
    return H.enum([t, ...n]);
  }
  if (e.type === "string") {
    let t = H.string();
    if (e.minLength !== void 0)
      t = t.min(e.minLength, {
        message: `Must be at least ${e.minLength} ${bn(e.minLength, "character")}`,
      });
    if (e.maxLength !== void 0)
      t = t.max(e.maxLength, {
        message: `Must be at most ${e.maxLength} ${bn(e.maxLength, "character")}`,
      });
    switch (e.format) {
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
  if (e.type === "number" || e.type === "integer") {
    let t = e.type === "integer" ? "an integer" : "a number",
      n = e.type === "integer",
      r = (i) => (Number.isInteger(i) && !n ? `${i}.0` : String(i)),
      o =
        e.minimum !== void 0 && e.maximum !== void 0
          ? `Must be ${t} between ${r(e.minimum)} and ${r(e.maximum)}`
          : e.minimum !== void 0
            ? `Must be ${t} >= ${r(e.minimum)}`
            : e.maximum !== void 0
              ? `Must be ${t} <= ${r(e.maximum)}`
              : `Must be ${t}`,
      s = H.coerce.number({
        error: o,
      });
    if (e.type === "integer")
      s = s.int({
        message: o,
      });
    if (e.minimum !== void 0)
      s = s.min(e.minimum, {
        message: o,
      });
    if (e.maximum !== void 0)
      s = s.max(e.maximum, {
        message: o,
      });
    return s;
  }
  if (e.type === "boolean") return H.coerce.boolean();
  throw Error(`Unsupported schema: ${De(e)}`);
}
function Sen(e, t) {
  let r = Jum(t).safeParse(e);
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
function Ten(e) {
  return e.type === "string" && "format" in e && (e.format === "date" || e.format === "date-time");
}
async function Xgc(e, t, n) {
  let r = Sen(e, t);
  if (r.isValid) return r;
  if (Ten(t) && !Kgc(e)) {
    let o = await zgc(e, t.format, n);
    if (o.success) {
      let s = Sen(o.value, t);
      if (s.isValid) return s;
    }
  }
  return r;
}
var Pme = (e) => e.type === "string" && ("enum" in e || "oneOf" in e);
