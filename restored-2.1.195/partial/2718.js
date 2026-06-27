// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vea
// matched 2.1.88 source: node_modules/protobufjs/src/common.js
// class=partial  jaccard=0.1145  score=0.1493  fileCov=0.3294
// note: low-confidence suggestion: node_modules/protobufjs/src/common.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vea = E(() => {
  Klt();
  f$n();
  wno();
  Tea();
});
function Cep(e) {
  return e ? Object.assign(Object.assign({}, wea), e) : wea;
}
function Bbe(e, t, n) {
  return YFt(ok(e, t), Cep(n));
}
function YFt(e, t) {
  var n;
  let r = Iea(e, t);
  if (r !== void 0) return r;
  let o = {};
  for (let s of e.sortedFields) {
    if (!e.isSet(s)) {
      if (s.presence == vep) throw Error(`cannot encode ${s} to JSON: required field not set`);
      if (!t.alwaysEmitImplicit || s.presence !== wep) continue;
    }
    let i = Cea(s, e.get(s), t);
    if (i !== void 0) o[kep(s, t)] = i;
  }
  if (t.registry) {
    let s = new Set();
    for (let {
      no: i
    } of (n = e.getUnknown()) !== null && n !== void 0 ? n : []) if (!s.has(i)) {
      s.add(i);
      let a = t.registry.getExtensionFor(e.desc, i);
      if (!a) continue;
      let l = KFt(e.message, a),
        [c, u] = Nbe(a, l),
        d = Cea(u, c.get(u), t);
      if (d !== void 0) o[a.jsonName] = d;
    }
  }
  return o;
}
function Cea(e, t, n) {
  switch (e.fieldKind) {
    case "scalar":
      return M$n(e, t);
    case "message":
      return YFt(t, n);
    case "enum":
      return Fno(e.enum, t, n.enumAsInteger);
    case "list":
      return xep(t, n);
    case "map":
      return Iep(t, n);
  }
}
function Iep(e, t) {
  let n = e.field(),
    r = {};
  switch (n.mapKind) {
    case "scalar":
      for (let [o, s] of e) r[o] = M$n(n, s);
      break;
    case "message":
      for (let [o, s] of e) r[o] = YFt(s, t);
      break;
    case "enum":
      for (let [o, s] of e) r[o] = Fno(n.enum, s, t.enumAsInteger);
      break;
  }
  return t.alwaysEmitImplicit || e.size > 0 ? r : void 0;
}
function xep(e, t) {
  let n = e.field(),
    r = [];
  switch (n.listKind) {
    case "scalar":
      for (let o of e) r.push(M$n(n, o));
      break;
    case "enum":
      for (let o of e) r.push(Fno(n.enum, o, t.enumAsInteger));
      break;
    case "message":
      for (let o of e) r.push(YFt(o, t));
      break;
  }
  return t.alwaysEmitImplicit || r.length > 0 ? r : void 0;
}
function Fno(e, t, n) {
  var r;
  if (typeof t != "number") throw Error(`cannot encode ${e} to JSON: expected number, got ${gL(t)}`);
  if (e.typeName == "google.protobuf.NullValue") return null;
  if (n) return t;
  let o = e.value[t];
  return (r = o === null || o === void 0 ? void 0 : o.name) !== null && r !== void 0 ? r : t;
}
function M$n(e, t) {
  var n, r, o, s, i, a;
  switch (e.scalar) {
    case pr.INT32:
    case pr.SFIXED32:
    case pr.SINT32:
    case pr.FIXED32:
    case pr.UINT32:
      if (typeof t != "number") throw Error(`cannot encode ${e} to JSON: ${(n = Pbe(e, t)) === null || n === void 0 ? void 0 : n.message}`);
      return t;
    case pr.FLOAT:
    case pr.DOUBLE:
      if (typeof t != "number") throw Error(`cannot encode ${e} to JSON: ${(r = Pbe(e, t)) === null || r === void 0 ? void 0 : r.message}`);
      if (Number.isNaN(t)) return "NaN";
      if (t === Number.POSITIVE_INFINITY) return "Infinity";
      if (t === Number.NEGATIVE_INFINITY) return "-Infinity";
      return t;
    case pr.STRING:
      if (typeof t != "string") throw Error(`cannot encode ${e} to JSON: ${(o = Pbe(e, t)) === null || o === void 0 ? void 0 : o.message}`);
      return t;
    case pr.BOOL:
      if (typeof t != "boolean") throw Error(`cannot encode ${e} to JSON: ${(s = Pbe(e, t)) === null || s === void 0 ? void 0 : s.message}`);
      return t;
    case pr.UINT64:
    case pr.FIXED64:
    case pr.INT64:
    case pr.SFIXED64:
    case pr.SINT64:
      if (typeof t == "bigint" || typeof t == "string" || typeof t == "number" && Number.isInteger(t)) return t.toString();
      throw Error(`cannot encode ${e} to JSON: ${(i = Pbe(e, t)) === null || i === void 0 ? void 0 : i.message}`);
    case pr.BYTES:
      if (t instanceof Uint8Array) return KQi(t);
      throw Error(`cannot encode ${e} to JSON: ${(a = Pbe(e, t)) === null || a === void 0 ? void 0 : a.message}`);
  }
}
function kep(e, t) {
  return t.useProtoFieldName ? e.name : e.jsonName;
}
function Iea(e, t) {
  if (!e.desc.typeName.startsWith("google.protobuf.")) return;
  switch (e.desc.typeName) {
    case "google.protobuf.Any":
      return Rep(e.message, t);
    case "google.protobuf.Timestamp":
      return Pep(e.message);
    case "google.protobuf.Duration":
      return Lep(e.message);
    case "google.protobuf.FieldMask":
      return Dep(e.message);
    case "google.protobuf.Struct":
      return xea(e.message);
    case "google.protobuf.Value":
      return jno(e.message);
    case "google.protobuf.ListValue":
      return kea(e.message);
    default:
      if (Yne(e.desc)) {
        let n = e.desc.fields[0];
        return M$n(n, e.get(n));
      }
      return;
  }
}
function Rep(e, t) {
  if (e.typeUrl === "") return {};
  let {
      registry: n
    } = t,
    r,
    o;
  if (n) {
    if (r = $be(e, n), r) o = n.getMessage(r.$typeName);
  }
  if (!o || !r) throw Error(`cannot encode message ${e.$typeName} to JSON: "${e.typeUrl}" is not in the type registry`);
  let s = ok(o, r),
    i = y$n(o) ? {
      value: Iea(s, t)
    } : YFt(s, t);
  return i["@type"] = e.typeUrl, i;
}
function Lep(e) {
  let t = Number(e.seconds),
    n = e.nanos;
  if (t > 315576000000 || t < -315576000000) throw Error(`cannot encode message ${e.$typeName} to JSON: value out of range`);
  if (t > 0 && n < 0 || t < 0 && n > 0) throw Error(`cannot encode message ${e.$typeName} to JSON: nanos sign must match seconds sign`);
  let r = e.seconds.toString();
  if (n !== 0) {
    let o = Math.abs(n).toString();
    if (o = "0".repeat(9 - o.length) + o, o.substring(3) === "000000") o = o.substring(0, 3);else if (o.substring(6) === "000") o = o.substring(0, 6);
    if (r += "." + o, n < 0 && t == 0) r = "-" + r;
  }
  return r + "s";
}
function Dep(e) {
  return e.paths.map(t => {
    if (i$n(Lbe(t)) !== t) throw Error(`cannot encode message ${e.$typeName} to JSON: lowerCamelCase of path name "${t}" is irreversible`);
    return Lbe(t);
  }).join(",");
}
function xea(e) {
  let t = {};
  for (let [n, r] of Object.entries(e.fields)) t[n] = jno(r);
  return t;
}
function jno(e) {
  switch (e.kind.case) {
    case "nullValue":
      return null;
    case "numberValue":
      if (!Number.isFinite(e.kind.value)) throw Error(`${e.$typeName} cannot be NaN or Infinity`);
      return e.kind.value;
    case "boolValue":
      return e.kind.value;
    case "stringValue":
      return e.kind.value;
    case "structValue":
      return xea(e.kind.value);
    case "listValue":
      return kea(e.kind.value);
    default:
      throw Error(`${e.$typeName} must have a value`);
  }
}
function kea(e) {
  return e.values.map(jno);
}
function Pep(e) {
  let t = Number(e.seconds) * 1000;
  if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw Error(`cannot encode message ${e.$typeName} to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
  if (e.nanos < 0) throw Error(`cannot encode message ${e.$typeName} to JSON: nanos must not be negative`);
  if (e.nanos > 999999999) throw Error(`cannot encode message ${e.$typeName} to JSON: nanos must not be greater than 99999999`);
  let n = "Z";
  if (e.nanos > 0) {
    let r = (e.nanos + 1e9).toString().substring(1);
    if (r.substring(3) === "000000") n = "." + r.substring(0, 3) + "Z";else if (r.substring(6) === "000") n = "." + r.substring(0, 6) + "Z";else n = "." + r + "Z";
  }
  return new Date(t).toISOString().replace(".000Z", n);
}
var vep = 3,
  wep = 2,
  wea;