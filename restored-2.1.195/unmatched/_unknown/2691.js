// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g$n
// matched 2.1.88 source: node_modules/protobufjs/ext/descriptor/index.js
// class=new  jaccard=0.0346  score=0.1421  fileCov=0.0438
// note: nearest: node_modules/protobufjs/ext/descriptor/index.js (0.0346); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var g$n = E(() => {
  M8();
  NFt();
  UFt();
  Klt();
  f$n();
  Dbe();
});
function h$n(e) {
  return kQi(e.$typeName);
}
function Yne(e) {
  let t = e.fields[0];
  return kQi(e.typeName) && t !== void 0 && t.fieldKind == "scalar" && t.name == "value" && t.number == 1;
}
function y$n(e) {
  switch (e.typeName) {
    case "google.protobuf.Any":
    case "google.protobuf.Timestamp":
    case "google.protobuf.Duration":
    case "google.protobuf.FieldMask":
    case "google.protobuf.Struct":
    case "google.protobuf.Value":
    case "google.protobuf.ListValue":
      return true;
    default:
      return Yne(e);
  }
}
function kQi(e) {
  return e.startsWith("google.protobuf.") && ["DoubleValue", "FloatValue", "Int64Value", "UInt64Value", "Int32Value", "UInt32Value", "BoolValue", "StringValue", "BytesValue"].includes(e.substring(16));
}
function F0(e, t) {
  if (_X(t, e)) return t;
  let n = vZd(e);
  if (t !== void 0) EZd(e, n, t);
  return n;
}
function EZd(e, t, n) {
  for (let r of e.members) {
    let o = n[r.localName];
    if (o == null) continue;
    let s;
    if (r.kind == "oneof") {
      let i = u$n(n, r);
      if (!i) continue;
      s = i, o = d$n(n, i);
    } else s = r;
    switch (s.fieldKind) {
      case "message":
        o = hno(s, o);
        break;
      case "scalar":
        o = DQi(s, o);
        break;
      case "list":
        o = HZd(s, o);
        break;
      case "map":
        o = AZd(s, o);
        break;
    }
    p$n(t, s, o);
  }
  return t;
}
function DQi(e, t) {
  if (e.scalar == pr.BYTES) return yno(t);
  return t;
}
function AZd(e, t) {
  if (mue(t)) {
    if (e.scalar == pr.BYTES) return RQi(t, yno);
    if (e.mapKind == "message") return RQi(t, n => hno(e, n));
  }
  return t;
}
function HZd(e, t) {
  if (Array.isArray(t)) {
    if (e.scalar == pr.BYTES) return t.map(yno);
    if (e.listKind == "message") return t.map(n => hno(e, n));
  }
  return t;
}
function hno(e, t) {
  if (e.fieldKind == "message" && !e.oneof && Yne(e.message)) return DQi(e.message.fields[0], t);
  if (mue(t)) {
    if (e.message.typeName == "google.protobuf.Struct" && e.parent.typeName !== "google.protobuf.Value") return t;
    if (!_X(t, e.message)) return F0(e.message, t);
  }
  return t;
}
function yno(e) {
  return Array.isArray(e) ? new Uint8Array(e) : e;
}
function RQi(e, t) {
  let n = {};
  for (let r of Object.entries(e)) n[r[0]] = t(r[1]);
  return n;
}
function vZd(e) {
  let t;
  if (!wZd(e)) {
    t = {
      $typeName: e.typeName
    };
    for (let n of e.members) if (n.kind == "oneof" || n.presence == _$n) t[n.localName] = gno(n);
  } else {
    let n = LQi.get(e),
      r,
      o;
    if (n) ({
      prototype: r,
      members: o
    } = n);else {
      r = {}, o = new Set();
      for (let s of e.members) {
        if (s.kind == "oneof") continue;
        if (s.fieldKind != "scalar" && s.fieldKind != "enum") continue;
        if (s.presence == _$n) continue;
        o.add(s), r[s.localName] = gno(s);
      }
      LQi.set(e, {
        prototype: r,
        members: o
      });
    }
    t = Object.create(r), t.$typeName = e.typeName;
    for (let s of e.members) {
      if (o.has(s)) continue;
      if (s.kind == "field") {
        if (s.fieldKind == "message") continue;
        if (s.fieldKind == "scalar" || s.fieldKind == "enum") {
          if (s.presence != _$n) continue;
        }
      }
      t[s.localName] = gno(s);
    }
  }
  return t;
}
function wZd(e) {
  switch (e.file.edition) {
    case bZd:
      return false;
    case SZd:
      return true;
    default:
      return e.fields.some(t => t.presence != _$n && t.fieldKind != "message" && !t.oneof);
  }
}
function gno(e) {
  if (e.kind == "oneof") return {
    case: void 0
  };
  if (e.fieldKind == "list") return [];
  if (e.fieldKind == "map") return {};
  if (e.fieldKind == "message") return TZd;
  let t = e.getDefaultValue();
  if (t !== void 0) return e.fieldKind == "scalar" && e.longAsString ? t.toString() : t;
  return e.fieldKind == "scalar" ? zne(e.scalar, e.longAsString) : e.enum.values[0].number;
}
var bZd = 999,
  SZd = 998,
  _$n = 2,
  TZd,
  LQi;