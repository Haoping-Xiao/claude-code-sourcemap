// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Re
// matched 2.1.88 source: node_modules/yaml/dist/compose/util-contains-newline.js
// class=partial  jaccard=0.1442  score=0.401  fileCov=0.1838
// note: low-confidence suggestion: node_modules/yaml/dist/compose/util-contains-newline.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Re = E(() => {
  Dbe();
  M8();
});
function u$n(e, t) {
  let n = e[t.localName].case;
  if (n === void 0) return n;
  return t.fields.find(r => r.localName === n);
}
function AQi(e, t) {
  let n = t.localName;
  if (t.oneof) return e[t.oneof.localName].case === n;
  if (t.presence != EQi) return e[n] !== void 0 && Object.prototype.hasOwnProperty.call(e, n);
  switch (t.fieldKind) {
    case "list":
      return e[n].length > 0;
    case "map":
      return Object.keys(e[n]).length > 0;
    case "scalar":
      return !SQi(t.scalar, e[n]);
    case "enum":
      return e[n] !== t.enum.values[0].number;
  }
  throw Error("message field with implicit presence");
}
function AWe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t) && e[t] !== void 0;
}
function d$n(e, t) {
  if (t.oneof) {
    let n = e[t.oneof.localName];
    if (n.case === t.localName) return n.value;
    return;
  }
  return e[t.localName];
}
function p$n(e, t, n) {
  if (t.oneof) e[t.oneof.localName] = {
    case: t.localName,
    value: n
  };else e[t.localName] = n;
}
function HQi(e, t) {
  let n = t.localName;
  if (t.oneof) {
    let r = t.oneof.localName;
    if (e[r].case === n) e[r] = {
      case: void 0
    };
  } else if (t.presence != EQi) delete e[n];else switch (t.fieldKind) {
    case "map":
      e[n] = {};
      break;
    case "list":
      e[n] = [];
      break;
    case "enum":
      e[n] = t.enum.values[0].number;
      break;
    case "scalar":
      e[n] = zne(t.scalar, t.longAsString);
      break;
  }
}
var EQi = 2,
  Kne;