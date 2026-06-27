// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rea
// matched 2.1.88 source: node_modules/protobufjs/src/common.js
// class=partial  jaccard=0.1103  score=0.1422  fileCov=0.3294
// note: low-confidence suggestion: node_modules/protobufjs/src/common.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rea = E(() => {
  M8();
  Wlt();
  bRe();
  SX();
  vea();
  D$n();
  g$n();
  wea = {
    alwaysEmitImplicit: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1
  };
});
function Mep(e) {
  return e ? Object.assign(Object.assign({}, Lea), e) : Lea;
}
function Pea(e, t, n) {
  let r = ok(e);
  try {
    XFt(r, t, Mep(n));
  } catch (o) {
    if (pQi(o)) throw Error(`cannot decode ${o.field()} from JSON: ${o.message}`, {
      cause: o
    });
    throw o;
  }
  return r.message;
}
function $ep(e, t) {
  var n;
  if (!Gno.has(e)) {
    let r = new Map();
    for (let o of e.fields) r.set(o.name, o).set(o.jsonName, o);
    Gno.set(e, r);
  }
  return (n = Gno.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
function XFt(e, t, n) {
  var r;
  if (Gep(e, t, n)) return;
  if (t == null || Array.isArray(t) || typeof t != "object") throw Error(`cannot decode ${e.desc} from JSON: ${gL(t)}`);
  let o = new Map();
  for (let [s, i] of Object.entries(t)) {
    let a = $ep(e.desc, s);
    if (a) {
      if (a.oneof) {
        if (i === null && a.fieldKind == "scalar") continue;
        let l = o.get(a.oneof);
        if (l !== void 0) throw new D1(a.oneof, `oneof set multiple times by ${l.name} and ${a.name}`);
        o.set(a.oneof, a);
      }
      Dea(e, a, i, n);
    } else {
      let l = void 0;
      if (s.startsWith("[") && s.endsWith("]") && (l = (r = n.registry) === null || r === void 0 ? void 0 : r.getExtension(s.substring(1, s.length - 1))) && l.extendee.typeName === e.desc.typeName) {
        let [c, u, d] = Nbe(l);
        Dea(c, u, i, n), bea(e.message, l, d());
      }
      if (!l && !n.ignoreUnknownFields) throw Error(`cannot decode ${e.desc} from JSON: key "${s}" is unknown`);
    }
  }
}
function Dea(e, t, n, r) {
  switch (t.fieldKind) {
    case "scalar":
      Fep(e, t, n);
      break;
    case "enum":
      Uep(e, t, n, r);
      break;
    case "message":
      Bep(e, t, n, r);
      break;
    case "list":
      Nep(e.get(t), n, r);
      break;
    case "map":
      Oep(e.get(t), n, r);
      break;
  }
}
function Mea(e, t, n) {
  if (e.scalar && t !== null) return Wno(e, t);
  if (e.message && !$$n(e, t)) {
    let r = ok(e.message);
    return XFt(r, t, n), r;
  }
  if (e.enum && !$$n(e, t)) return $ea(e.enum, t, n.ignoreUnknownFields);
  throw new D1(e, `${e.fieldKind === "list" ? "list item" : "map value"} must not be null`);
}
function Oep(e, t, n) {
  if (t === null) return;
  let r = e.field();
  if (typeof t != "object" || Array.isArray(t)) throw new D1(r, "expected object, got " + gL(t));
  for (let [o, s] of Object.entries(t)) {
    let i = jep(r.mapKey, o),
      a = Mea(r, s, n);
    if (a !== O$n) e.set(i, a);
  }
}
function Nep(e, t, n) {
  if (t === null) return;
  let r = e.field();
  if (!Array.isArray(t)) throw new D1(r, "expected Array, got " + gL(t));
  for (let o of t) {
    let s = Mea(r, o, n);
    if (s !== O$n) e.add(s);
  }
}
function Bep(e, t, n, r) {
  if ($$n(t, n)) {
    e.clear(t);
    return;
  }
  let o = e.isSet(t) ? e.get(t) : ok(t.message);
  XFt(o, n, r), e.set(t, o);
}
function Uep(e, t, n, r) {
  if ($$n(t, n)) {
    e.clear(t);
    return;
  }
  let o = $ea(t.enum, n, r.ignoreUnknownFields);
  if (o !== O$n) e.set(t, o);
}
function Fep(e, t, n) {
  if (n === null) e.clear(t);else e.set(t, Wno(t, n));
}
function $$n(e, t) {
  var n, r;
  return t === null && ((n = e.message) === null || n === void 0 ? void 0 : n.typeName) != "google.protobuf.Value" && ((r = e.enum) === null || r === void 0 ? void 0 : r.typeName) != "google.protobuf.NullValue";
}
function $ea(e, t, n) {
  if (t === null) return e.values[0].number;
  switch (typeof t) {
    case "number":
      if (Number.isInteger(t)) return t;
      break;
    case "string":
      let r = e.values.find(o => o.name === t);
      if (r !== void 0) return r.number;
      if (n) return O$n;
      break;
  }
  throw Error(`cannot decode ${e} from JSON: ${gL(t)}`);
}
function Wno(e, t) {
  switch (e.scalar) {
    case pr.DOUBLE:
    case pr.FLOAT:
      if (t === "NaN") return NaN;
      if (t === "Infinity") return Number.POSITIVE_INFINITY;
      if (t === "-Infinity") return Number.NEGATIVE_INFINITY;
      if (typeof t == "number") {
        if (Number.isNaN(t)) throw new D1(e, "unexpected NaN number");
        if (!Number.isFinite(t)) throw new D1(e, "unexpected infinite number");
        break;
      }
      if (typeof t == "string") {
        if (t === "") break;
        if (t.trim().length !== t.length) break;
        let n = Number(t);
        if (!Number.isFinite(n)) break;
        return n;
      }
      break;
    case pr.INT32:
    case pr.FIXED32:
    case pr.SFIXED32:
    case pr.SINT32:
    case pr.UINT32:
      return Oea(t);
    case pr.BYTES:
      if (typeof t == "string") {
        if (t === "") return new Uint8Array(0);
        try {
          return E$n(t);
        } catch (n) {
          let r = n instanceof Error ? n.message : String(n);
          throw new D1(e, r);
        }
      }
      break;
  }
  return t;
}
function jep(e, t) {
  switch (e) {
    case pr.BOOL:
      switch (t) {
        case "true":
          return !0;
        case "false":
          return !1;
      }
      return t;
    case pr.INT32:
    case pr.FIXED32:
    case pr.UINT32:
    case pr.SFIXED32:
    case pr.SINT32:
      return Oea(t);
    default:
      return t;
  }
}
function Oea(e) {
  if (typeof e == "string") {
    if (e === "") return e;
    if (e.trim().length !== e.length) return e;
    let t = Number(e);
    if (Number.isNaN(t)) return e;
    return t;
  }
  return e;
}
function Gep(e, t, n) {
  if (!e.desc.typeName.startsWith("google.protobuf.")) return !1;
  switch (e.desc.typeName) {
    case "google.protobuf.Any":
      return Wep(e.message, t, n), !0;
    case "google.protobuf.Timestamp":
      return qep(e.message, t), !0;
    case "google.protobuf.Duration":
      return Vep(e.message, t), !0;
    case "google.protobuf.FieldMask":
      return zep(e.message, t), !0;
    case "google.protobuf.Struct":
      return Nea(e.message, t), !0;
    case "google.protobuf.Value":
      return qno(e.message, t), !0;
    case "google.protobuf.ListValue":
      return Bea(e.message, t), !0;
    default:
      if (Yne(e.desc)) {
        let r = e.desc.fields[0];
        if (t === null) e.clear(r);else e.set(r, Wno(r, t));
        return !0;
      }
      return !1;
  }
}
function Wep(e, t, n) {
  var r;
  if (t === null || Array.isArray(t) || typeof t != "object") throw Error(`cannot decode message ${e.$typeName} from JSON: expected object but got ${gL(t)}`);
  if (Object.keys(t).length == 0) return;
  let o = t["@type"];
  if (typeof o != "string" || o == "") throw Error(`cannot decode message ${e.$typeName} from JSON: "@type" is empty`);
  let s = o.includes("/") ? o.substring(o.lastIndexOf("/") + 1) : o;
  if (!s.length) throw Error(`cannot decode message ${e.$typeName} from JSON: "@type" is invalid`);
  let i = (r = n.registry) === null || r === void 0 ? void 0 : r.getMessage(s);
  if (!i) throw Error(`cannot decode message ${e.$typeName} from JSON: ${o} is not in the type registry`);
  let a = ok(i);
  if (y$n(i) && Object.prototype.hasOwnProperty.call(t, "value")) {
    let l = t.value;
    XFt(a, l, n);
  } else {
    let l = Object.assign({}, t);
    delete l["@type"], XFt(a, l, n);
  }
  GZi(a.desc, a.message, e);
}
function qep(e, t) {
  if (typeof t !== "string") throw Error(`cannot decode message ${e.$typeName} from JSON: ${gL(t)}`);
  let n = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.([0-9]{1,9}))?(?:Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
  if (!n) throw Error(`cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`);
  let r = Date.parse(n[1] + "-" + n[2] + "-" + n[3] + "T" + n[4] + ":" + n[5] + ":" + n[6] + (n[8] ? n[8] : "Z"));
  if (Number.isNaN(r)) throw Error(`cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`);
  if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z")) throw Error(`cannot decode message ${e.$typeName} from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
  if (e.seconds = U_.parse(r / 1000), e.nanos = 0, n[7]) e.nanos = parseInt("1" + n[7] + "0".repeat(9 - n[7].length)) - 1e9;
}
function Vep(e, t) {
  if (typeof t !== "string") throw Error(`cannot decode message ${e.$typeName} from JSON: ${gL(t)}`);
  let n = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
  if (n === null) throw Error(`cannot decode message ${e.$typeName} from JSON: ${gL(t)}`);
  let r = Number(n[1]);
  if (r > 315576000000 || r < -315576000000) throw Error(`cannot decode message ${e.$typeName} from JSON: ${gL(t)}`);
  if (e.seconds = U_.parse(r), typeof n[2] !== "string") return;
  let o = n[2] + "0".repeat(9 - n[2].length);
  if (e.nanos = parseInt(o), r < 0 || Object.is(r, -0)) e.nanos = -e.nanos;
}
function zep(e, t) {
  if (typeof t !== "string") throw Error(`cannot decode message ${e.$typeName} from JSON: ${gL(t)}`);
  if (t === "") return;
  e.paths = t.split(",").map(n => {
    if (n.includes("_")) throw Error(`cannot decode message ${e.$typeName} from JSON: path names must be lowerCamelCase`);
    return i$n(n);
  });
}
function Nea(e, t) {
  if (typeof t != "object" || t == null || Array.isArray(t)) throw Error(`cannot decode message ${e.$typeName} from JSON ${gL(t)}`);
  for (let [n, r] of Object.entries(t)) {
    let o = F0(Obe);
    qno(o, r), e.fields[n] = o;
  }
}
function qno(e, t) {
  switch (typeof t) {
    case "number":
      e.kind = {
        case: "numberValue",
        value: t
      };
      break;
    case "string":
      e.kind = {
        case: "stringValue",
        value: t
      };
      break;
    case "boolean":
      e.kind = {
        case: "boolValue",
        value: t
      };
      break;
    case "object":
      if (t === null) e.kind = {
        case: "nullValue",
        value: x$n.NULL_VALUE
      };else if (Array.isArray(t)) {
        let n = F0(Zlt);
        Bea(n, t), e.kind = {
          case: "listValue",
          value: n
        };
      } else {
        let n = F0(Qlt);
        Nea(n, t), e.kind = {
          case: "structValue",
          value: n
        };
      }
      break;
    default:
      throw Error(`cannot decode message ${e.$typeName} from JSON ${gL(t)}`);
  }
  return e;
}
function Bea(e, t) {
  if (!Array.isArray(t)) throw Error(`cannot decode message ${e.$typeName} from JSON ${gL(t)}`);
  for (let n of t) {
    let r = F0(Obe);
    qno(r, n), e.values.push(r);
  }
}
var Lea, Gno, O$n;