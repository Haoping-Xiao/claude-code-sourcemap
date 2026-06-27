// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _ue
// matched 2.1.88 source: node_modules/protobufjs/src/common.js
// class=partial  jaccard=0.2474  score=0.4328  fileCov=0.3661
// note: low-confidence suggestion: node_modules/protobufjs/src/common.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _ue = E(() => {
  nct();
  ZFt();
  ERe();
  TWe();
  SX();
  o2t = Symbol.for("@bufbuild/cel/type"), Pu = {
    INT: jbe("int"),
    UINT: jbe("uint"),
    BOOL: jbe("bool"),
    STRING: jbe("string"),
    BYTES: jbe("bytes"),
    DOUBLE: jbe("double"),
    NULL: jbe("null_type"),
    DYN: jbe("dyn"),
    TYPE: jbe("type")
  }, QE = wWe(M1), F_ = wWe(bX);
});
function Zne(e) {
  switch (typeof e) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
      return e;
    case "object":
      break;
    default:
      throw Error(`unsupported input ${typeof e}`);
  }
  switch (!0) {
    case e === null:
    case e instanceof Uint8Array:
    case Gbe(e):
    case Fbe(e):
    case $1(e):
    case ARe(e):
      return e;
  }
  if (Zep(e) || gue(e)) return CWe(e);
  if (etp(e) || hue(e)) return QFt(e);
  if (_X(e)) {
    let t = Xno(e);
    if (t !== void 0) return t;
    return ok(r2t(e.$typeName), e);
  }
  if (P1(e)) return e2t(e);
  if (e.constructor.name === "Object") return QFt(new Map(Object.entries(e)));
  throw Error(`Unsupported input ${e}`);
}
function Xea(e) {
  if (!Qep(e)) return e;
  let t = $be(e.message, n2t().registry);
  if (t === void 0) throw Error(`invalid Any or ${e.message.typeUrl} not found in registry`);
  let n = Xno(t);
  if (n !== void 0) return n;
  return ok(r2t(t.$typeName), t);
}
function e2t(e) {
  let t = Xno(e.message);
  if (t !== void 0) return t;
  return e;
}
function Qep(e) {
  return P1(e, SRe);
}
function Zep(e) {
  return Array.isArray(e);
}
function etp(e) {
  return e instanceof Map;
}
function Xno(e) {
  if (h$n(e)) return ttp(e);
  return ntp(e);
}
function ttp(e) {
  switch (e.$typeName) {
    case R$n.typeName:
      return BigInt(e.value);
    case L$n.typeName:
      return Ube(BigInt(e.value));
    case k$n.typeName:
      return Ube(e.value);
  }
  return e.value;
}
function ntp(e) {
  switch (!0) {
    case _X(e, Qlt):
      return Jea(e);
    case _X(e, Obe):
      return Qea(e);
    case _X(e, Zlt):
      return Zea(e);
  }
  return;
}
function Jea(e) {
  let t = new Map();
  for (let [n, r] of Object.entries(e.fields)) t.set(n, Qea(r));
  return QFt(t);
}
function Qea(e) {
  switch (e.kind.case) {
    case "boolValue":
    case "numberValue":
    case "stringValue":
      return e.kind.value;
    case "nullValue":
    case void 0:
      return null;
    case "structValue":
      return Jea(e.kind.value);
    case "listValue":
      return Zea(e.kind.value);
  }
}
function Zea(e) {
  return CWe(e.values);
}