// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HWe
// matched 2.1.88 source: node_modules/protobufjs/src/common.js
// class=partial  jaccard=0.2145  score=0.3807  fileCov=0.3294
// note: low-confidence suggestion: node_modules/protobufjs/src/common.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HWe = E(() => {
  M8();
  _Re();
  UFt();
  Vlt();
  TZd = Symbol(), LQi = new WeakMap();
});
function ok(e, t, n = !0) {
  return new Sno(e, t, n);
}
class Sno {
  get sortedFields() {
    let e = PQi.get(this.desc);
    if (e) return e;
    let t = this.desc.fields.concat().sort((n, r) => n.number - r.number);
    return PQi.set(this.desc, t), t;
  }
  constructor(e, t, n = !0) {
    this.lists = new Map(), this.maps = new Map(), this.check = n, this.desc = e, this.message = this[Kne] = t !== null && t !== void 0 ? t : F0(e), this.fields = e.fields, this.oneofs = e.oneofs, this.members = e.members;
  }
  findNumber(e) {
    if (!this._fieldsByNumber) this._fieldsByNumber = new Map(this.desc.fields.map(t => [t.number, t]));
    return this._fieldsByNumber.get(e);
  }
  oneofCase(e) {
    return GFt(this.message, e), u$n(this.message, e);
  }
  isSet(e) {
    return GFt(this.message, e), AQi(this.message, e);
  }
  clear(e) {
    GFt(this.message, e), HQi(this.message, e);
  }
  get(e) {
    GFt(this.message, e);
    let t = d$n(this.message, e);
    switch (e.fieldKind) {
      case "list":
        let n = this.lists.get(e);
        if (!n || n[Kne] !== t) this.lists.set(e, n = new OQi(e, t, this.check));
        return n;
      case "map":
        let r = this.maps.get(e);
        if (!r || r[Kne] !== t) this.maps.set(e, r = new NQi(e, t, this.check));
        return r;
      case "message":
        return Ano(e, t, this.check);
      case "scalar":
        return t === void 0 ? zne(e.scalar, !1) : Hno(e, t);
      case "enum":
        return t !== null && t !== void 0 ? t : e.enum.values[0].number;
    }
  }
  set(e, t) {
    if (GFt(this.message, e), this.check) {
      let r = Pbe(e, t);
      if (r) throw r;
    }
    let n;
    if (e.fieldKind == "message") n = Eno(e, t);else if (hue(t) || gue(t)) n = t[Kne];else n = Tno(e, t);
    p$n(this.message, e, n);
  }
  getUnknown() {
    return this.message.$unknown;
  }
  setUnknown(e) {
    this.message.$unknown = e;
  }
}
function GFt(e, t) {
  if (t.parent.typeName !== e.$typeName) throw new D1(t, `cannot use ${t.toString()} with message ${e.$typeName}`, "ForeignFieldError");
}
function Eno(e, t) {
  if (!P1(t)) return t;
  if (h$n(t.message) && !e.oneof && e.fieldKind == "message") return t.message.value;
  if (t.desc.typeName == "google.protobuf.Struct" && e.parent.typeName != "google.protobuf.Value") return UQi(t.message);
  return t.message;
}
function Ano(e, t, n) {
  if (t !== void 0) {
    if (Yne(e.message) && !e.oneof && e.fieldKind == "message") t = {
      $typeName: e.message.typeName,
      value: Hno(e.message.fields[0], t)
    };else if (e.message.typeName == "google.protobuf.Struct" && e.parent.typeName != "google.protobuf.Value" && mue(t)) t = BQi(t);
  }
  return new Sno(e.message, t, n);
}
function MQi(e, t) {
  if (e.listKind == "message") return Eno(e, t);
  return Tno(e, t);
}
function _no(e, t, n) {
  if (e.listKind == "message") return Ano(e, t, n);
  return Hno(e, t);
}
function CZd(e, t) {
  if (e.mapKind == "message") return Eno(e, t);
  return Tno(e, t);
}
function bno(e, t, n) {
  if (e.mapKind == "message") return Ano(e, t, n);
  return t;
}
function b$n(e) {
  return typeof e == "string" || typeof e == "number" ? e : String(e);
}
function $Qi(e, t) {
  switch (t) {
    case pr.STRING:
      return e;
    case pr.INT32:
    case pr.FIXED32:
    case pr.UINT32:
    case pr.SFIXED32:
    case pr.SINT32:
      {
        let n = Number.parseInt(e);
        if (Number.isFinite(n)) return n;
        break;
      }
    case pr.BOOL:
      switch (e) {
        case "true":
          return !0;
        case "false":
          return !1;
      }
      break;
    case pr.UINT64:
    case pr.FIXED64:
      try {
        return U_.uParse(e);
      } catch (n) {}
      break;
    default:
      try {
        return U_.parse(e);
      } catch (n) {}
      break;
  }
  return e;
}
function Hno(e, t) {
  switch (e.scalar) {
    case pr.INT64:
    case pr.SFIXED64:
    case pr.SINT64:
      if ("longAsString" in e && e.longAsString && typeof t == "string") t = U_.parse(t);
      break;
    case pr.FIXED64:
    case pr.UINT64:
      if ("longAsString" in e && e.longAsString && typeof t == "string") t = U_.uParse(t);
      break;
  }
  return t;
}
function Tno(e, t) {
  switch (e.scalar) {
    case pr.INT64:
    case pr.SFIXED64:
    case pr.SINT64:
      if ("longAsString" in e && e.longAsString) t = String(t);else if (typeof t == "string" || typeof t == "number") t = U_.parse(t);
      break;
    case pr.FIXED64:
    case pr.UINT64:
      if ("longAsString" in e && e.longAsString) t = String(t);else if (typeof t == "string" || typeof t == "number") t = U_.uParse(t);
      break;
  }
  return t;
}
function BQi(e) {
  let t = {
    $typeName: "google.protobuf.Struct",
    fields: {}
  };
  if (mue(e)) for (let [n, r] of Object.entries(e)) t.fields[n] = jQi(r);
  return t;
}
function UQi(e) {
  let t = {};
  for (let [n, r] of Object.entries(e.fields)) t[n] = FQi(r);
  return t;
}
function FQi(e) {
  switch (e.kind.case) {
    case "structValue":
      return UQi(e.kind.value);
    case "listValue":
      return e.kind.value.values.map(FQi);
    case "nullValue":
    case void 0:
      return null;
    default:
      return e.kind.value;
  }
}
function jQi(e) {
  let t = {
    $typeName: "google.protobuf.Value",
    kind: {
      case: void 0
    }
  };
  switch (typeof e) {
    case "number":
      t.kind = {
        case: "numberValue",
        value: e
      };
      break;
    case "string":
      t.kind = {
        case: "stringValue",
        value: e
      };
      break;
    case "boolean":
      t.kind = {
        case: "boolValue",
        value: e
      };
      break;
    case "object":
      if (e === null) t.kind = {
        case: "nullValue",
        value: 0
      };else if (Array.isArray(e)) {
        let n = {
          $typeName: "google.protobuf.ListValue",
          values: []
        };
        if (Array.isArray(e)) for (let r of e) n.values.push(jQi(r));
        t.kind = {
          case: "listValue",
          value: n
        };
      } else t.kind = {
        case: "structValue",
        value: BQi(e)
      };
      break;
  }
  return t;
}
var PQi, OQi, NQi;