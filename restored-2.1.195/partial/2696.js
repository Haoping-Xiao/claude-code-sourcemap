// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wno
// matched 2.1.88 source: node_modules/protobufjs/ext/descriptor/index.js
// class=partial  jaccard=0.0762  score=0.1231  fileCov=0.1665
// note: low-confidence suggestion: node_modules/protobufjs/ext/descriptor/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wno = E(() => {
  M8();
  Dbe();
});
function Rno(...e) {
  return kZd(e);
}
function A$n(...e) {
  let t = rZi();
  if (!e.length) return t;
  if ("$typeName" in e[0] && e[0].$typeName == "google.protobuf.FileDescriptorSet") {
    for (let n of e[0].file) tZi(n, t);
    return t;
  }
  if ("$typeName" in e[0]) {
    let s = function (i) {
        let a = [];
        for (let l of i.dependency) {
          if (t.getFile(l) != null) continue;
          if (o.has(l)) continue;
          let c = r(l);
          if (!c) throw Error(`Unable to resolve ${l}, imported by ${i.name}`);
          if ("kind" in c) t.addFile(c, !1, !0);else o.add(c.name), a.push(c);
        }
        return a.concat(...a.map(s));
      },
      n = e[0],
      r = e[1],
      o = new Set();
    for (let i of [n, ...s(n)].reverse()) tZi(i, t);
  } else for (let n of e) for (let r of n.files) t.addFile(r);
  return t;
}
function rZi() {
  let e = new Map(),
    t = new Map(),
    n = new Map();
  return {
    kind: "registry",
    types: e,
    extendees: t,
    [Symbol.iterator]() {
      return e.values();
    },
    get files() {
      return n.values();
    },
    addFile(r, o, s) {
      if (n.set(r.proto.name, r), !o) for (let i of a$n(r)) this.add(i);
      if (s) for (let i of r.dependencies) this.addFile(i, o, s);
    },
    add(r) {
      if (r.kind == "extension") {
        let o = t.get(r.extendee.typeName);
        if (!o) t.set(r.extendee.typeName, o = new Map());
        o.set(r.number, r);
      }
      e.set(r.typeName, r);
    },
    get(r) {
      return e.get(r);
    },
    getFile(r) {
      return n.get(r);
    },
    getMessage(r) {
      let o = e.get(r);
      return (o === null || o === void 0 ? void 0 : o.kind) == "message" ? o : void 0;
    },
    getEnum(r) {
      let o = e.get(r);
      return (o === null || o === void 0 ? void 0 : o.kind) == "enum" ? o : void 0;
    },
    getExtension(r) {
      let o = e.get(r);
      return (o === null || o === void 0 ? void 0 : o.kind) == "extension" ? o : void 0;
    },
    getExtensionFor(r, o) {
      var s;
      return (s = t.get(r.typeName)) === null || s === void 0 ? void 0 : s.get(o);
    },
    getService(r) {
      let o = e.get(r);
      return (o === null || o === void 0 ? void 0 : o.kind) == "service" ? o : void 0;
    }
  };
}
function kZd(e) {
  let t = rZi();
  for (let n of e) switch (n.kind) {
    case "registry":
      for (let r of n) t.add(r);
      break;
    case "file":
      t.addFile(n);
      break;
    default:
      t.add(n);
      break;
  }
  return t;
}
function tZi(e, t) {
  var n, r;
  let o = {
      kind: "file",
      proto: e,
      deprecated: (r = (n = e.options) === null || n === void 0 ? void 0 : n.deprecated) !== null && r !== void 0 ? r : !1,
      edition: zZd(e),
      name: e.name.replace(/\.proto$/, ""),
      dependencies: KZd(e, t),
      enums: [],
      messages: [],
      extensions: [],
      services: [],
      toString() {
        return `file ${e.name}`;
      }
    },
    s = new Map(),
    i = {
      get(a) {
        return s.get(a);
      },
      add(a) {
        var l;
        Xne(((l = a.proto.options) === null || l === void 0 ? void 0 : l.mapEntry) === !0), s.set(a.typeName, a);
      }
    };
  for (let a of e.enumType) sZi(a, o, void 0, t);
  for (let a of e.messageType) iZi(a, o, void 0, t, i);
  for (let a of e.service) WZd(a, o, t);
  Ino(o, t);
  for (let a of s.values()) xno(a, t, i);
  for (let a of o.messages) xno(a, t, i), Ino(a, t);
  t.addFile(o, !0);
}
function Ino(e, t) {
  switch (e.kind) {
    case "file":
      for (let n of e.proto.extension) {
        let r = kno(n, e, t);
        e.extensions.push(r), t.add(r);
      }
      break;
    case "message":
      for (let n of e.proto.extension) {
        let r = kno(n, e, t);
        e.nestedExtensions.push(r), t.add(r);
      }
      for (let n of e.nestedMessages) Ino(n, t);
      break;
  }
}
function xno(e, t, n) {
  let r = e.proto.oneofDecl.map(s => VZd(s, e)),
    o = new Set();
  for (let s of e.proto.field) {
    let i = JZd(s, r),
      a = kno(s, e, t, i, n);
    if (e.fields.push(a), e.field[a.localName] = a, i === void 0) e.members.push(a);else if (i.fields.push(a), !o.has(i)) o.add(i), e.members.push(i);
  }
  for (let s of r.filter(i => o.has(i))) e.oneofs.push(s);
  for (let s of e.nestedMessages) xno(s, t, n);
}
function sZi(e, t, n, r) {
  var o, s, i, a, l;
  let c = YZd(e.name, e.value),
    u = {
      kind: "enum",
      proto: e,
      deprecated: (s = (o = e.options) === null || o === void 0 ? void 0 : o.deprecated) !== null && s !== void 0 ? s : !1,
      file: t,
      parent: n,
      open: !0,
      name: e.name,
      typeName: H$n(e, n, t),
      value: {},
      values: [],
      sharedPrefix: c,
      toString() {
        return `enum ${this.typeName}`;
      }
    };
  u.open = tep(u), r.add(u);
  for (let d of e.value) {
    let p = d.name;
    u.values.push(u.value[d.number] = {
      kind: "enum_value",
      proto: d,
      deprecated: (a = (i = d.options) === null || i === void 0 ? void 0 : i.deprecated) !== null && a !== void 0 ? a : !1,
      parent: u,
      name: p,
      localName: Glt(c == null ? p : p.substring(c.length)),
      number: d.number,
      toString() {
        return `enum value ${u.typeName}.${p}`;
      }
    });
  }
  ((l = n === null || n === void 0 ? void 0 : n.nestedEnums) !== null && l !== void 0 ? l : t.enums).push(u);
}
function iZi(e, t, n, r, o) {
  var s, i, a, l;
  let c = {
    kind: "message",
    proto: e,
    deprecated: (i = (s = e.options) === null || s === void 0 ? void 0 : s.deprecated) !== null && i !== void 0 ? i : !1,
    file: t,
    parent: n,
    name: e.name,
    typeName: H$n(e, n, t),
    fields: [],
    field: {},
    oneofs: [],
    members: [],
    nestedEnums: [],
    nestedMessages: [],
    nestedExtensions: [],
    toString() {
      return `message ${this.typeName}`;
    }
  };
  if (((a = e.options) === null || a === void 0 ? void 0 : a.mapEntry) === !0) o.add(c);else ((l = n === null || n === void 0 ? void 0 : n.nestedMessages) !== null && l !== void 0 ? l : t.messages).push(c), r.add(c);
  for (let u of e.enumType) sZi(u, t, c, r);
  for (let u of e.nestedType) iZi(u, t, c, r, o);
}
function WZd(e, t, n) {
  var r, o;
  let s = {
    kind: "service",
    proto: e,
    deprecated: (o = (r = e.options) === null || r === void 0 ? void 0 : r.deprecated) !== null && o !== void 0 ? o : !1,
    file: t,
    name: e.name,
    typeName: H$n(e, void 0, t),
    methods: [],
    method: {},
    toString() {
      return `service ${this.typeName}`;
    }
  };
  t.services.push(s), n.add(s);
  for (let i of e.method) {
    let a = qZd(i, s, n);
    s.methods.push(a), s.method[a.localName] = a;
  }
}
function qZd(e, t, n) {
  var r, o, s, i;
  let a;
  if (e.clientStreaming && e.serverStreaming) a = "bidi_streaming";else if (e.clientStreaming) a = "client_streaming";else if (e.serverStreaming) a = "server_streaming";else a = "unary";
  let l = n.getMessage(Mbe(e.inputType)),
    c = n.getMessage(Mbe(e.outputType));
  Xne(l, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`), Xne(c, `invalid MethodDescriptorProto: output_type ${e.inputType} not found`);
  let u = e.name;
  return {
    kind: "rpc",
    proto: e,
    deprecated: (o = (r = e.options) === null || r === void 0 ? void 0 : r.deprecated) !== null && o !== void 0 ? o : !1,
    parent: t,
    name: u,
    localName: Glt(u.length ? Glt(u[0].toLowerCase() + u.substring(1)) : u),
    methodKind: a,
    input: l,
    output: c,
    idempotency: (i = (s = e.options) === null || s === void 0 ? void 0 : s.idempotencyLevel) !== null && i !== void 0 ? i : OZd,
    toString() {
      return `rpc ${t.typeName}.${u}`;
    }
  };
}
function VZd(e, t) {
  return {
    kind: "oneof",
    proto: e,
    deprecated: !1,
    parent: t,
    fields: [],
    name: e.name,
    localName: Glt(Lbe(e.name)),
    toString() {
      return `oneof ${t.typeName}.${this.name}`;
    }
  };
}
function kno(e, t, n, r, o) {
  var s, i, a;
  let l = o === void 0,
    c = {
      kind: "field",
      proto: e,
      deprecated: (i = (s = e.options) === null || s === void 0 ? void 0 : s.deprecated) !== null && i !== void 0 ? i : !1,
      name: e.name,
      number: e.number,
      scalar: void 0,
      message: void 0,
      enum: void 0,
      presence: QZd(e, r, l, t),
      utf8Validation: nep(e, t),
      listKind: void 0,
      mapKind: void 0,
      mapKey: void 0,
      delimitedEncoding: void 0,
      packed: void 0,
      longAsString: !1,
      getDefaultValue: void 0
    };
  if (l) {
    let f = t.kind == "file" ? t : t.file,
      m = t.kind == "file" ? void 0 : t,
      g = H$n(e, m, f);
    c.kind = "extension", c.file = f, c.parent = m, c.oneof = void 0, c.typeName = g, c.jsonName = `[${g}]`, c.toString = () => `extension ${g}`;
    let h = n.getMessage(Mbe(e.extendee));
    Xne(h, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`), c.extendee = h;
  } else {
    let f = t;
    Xne(f.kind == "message"), c.parent = f, c.oneof = r, c.localName = r ? Lbe(e.name) : Glt(Lbe(e.name)), c.jsonName = e.jsonName, c.toString = () => `field ${f.typeName}.${e.name}`;
  }
  let {
      label: u,
      type: d
    } = e,
    p = (a = e.options) === null || a === void 0 ? void 0 : a.jstype;
  if (u === Lno) {
    let f = d == qFt ? o === null || o === void 0 ? void 0 : o.get(Mbe(e.typeName)) : void 0;
    if (f) {
      c.fieldKind = "map";
      let {
        key: m,
        value: g
      } = eep(f);
      return c.mapKey = m.scalar, c.mapKind = g.fieldKind, c.message = g.message, c.delimitedEncoding = !1, c.enum = g.enum, c.scalar = g.scalar, c;
    }
    switch (c.fieldKind = "list", d) {
      case qFt:
      case VFt:
        c.listKind = "message", c.message = n.getMessage(Mbe(e.typeName)), Xne(c.message), c.delimitedEncoding = nZi(e, t);
        break;
      case QQi:
        c.listKind = "enum", c.enum = n.getEnum(Mbe(e.typeName)), Xne(c.enum);
        break;
      default:
        c.listKind = "scalar", c.scalar = d, c.longAsString = p == ZQi;
        break;
    }
    return c.packed = ZZd(e, t), c;
  }
  switch (d) {
    case qFt:
    case VFt:
      c.fieldKind = "message", c.message = n.getMessage(Mbe(e.typeName)), Xne(c.message, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), c.delimitedEncoding = nZi(e, t), c.getDefaultValue = () => {
        return;
      };
      break;
    case QQi:
      {
        let f = n.getEnum(Mbe(e.typeName));
        Xne(f !== void 0, `invalid FieldDescriptorProto: type_name ${e.typeName} not found`), c.fieldKind = "enum", c.enum = n.getEnum(Mbe(e.typeName)), c.getDefaultValue = () => AWe(e, "defaultValue") ? XQi(f, e.defaultValue) : void 0;
        break;
      }
    default:
      {
        c.fieldKind = "scalar", c.scalar = d, c.longAsString = p == ZQi, c.getDefaultValue = () => AWe(e, "defaultValue") ? JQi(d, e.defaultValue) : void 0;
        break;
      }
  }
  return c;
}
function zZd(e) {
  switch (e.syntax) {
    case "":
    case "proto2":
      return RZd;
    case "proto3":
      return LZd;
    case "editions":
      if (e.edition === DZd) return GZd;
      if (e.edition in oZi) return e.edition;
      throw Error(`${e.name}: unsupported edition`);
    default:
      throw Error(`${e.name}: unsupported syntax "${e.syntax}"`);
  }
}
function KZd(e, t) {
  return e.dependency.map(n => {
    let r = t.getFile(n);
    if (!r) throw Error(`Cannot find ${n}, imported by ${e.name}`);
    return r;
  });
}
function YZd(e, t) {
  let n = XZd(e) + "_";
  for (let r of t) {
    if (!r.name.toLowerCase().startsWith(n)) return;
    let o = r.name.substring(n.length);
    if (o.length == 0) return;
    if (/^\d/.test(o)) return;
  }
  return n;
}
function XZd(e) {
  return (e.substring(0, 1) + e.substring(1).replace(/[A-Z]/g, t => "_" + t)).toLowerCase();
}
function H$n(e, t, n) {
  let r;
  if (t) r = `${t.typeName}.${e.name}`;else if (n.proto.package.length > 0) r = `${n.proto.package}.${e.name}`;else r = `${e.name}`;
  return r;
}
function Mbe(e) {
  return e.startsWith(".") ? e.substring(1) : e;
}
function JZd(e, t) {
  if (!AWe(e, "oneofIndex")) return;
  if (e.proto3Optional) return;
  let n = t[e.oneofIndex];
  return Xne(n, `invalid FieldDescriptorProto: oneof #${e.oneofIndex} for field #${e.number} not found`), n;
}
function QZd(e, t, n, r) {
  if (e.label == $Zd) return NZd;
  if (e.label == Lno) return eZi;
  if (!!t || e.proto3Optional) return Cno;
  if (n) return Cno;
  let o = vWe("fieldPresence", {
    proto: e,
    parent: r
  });
  if (o == eZi && (e.type == qFt || e.type == VFt)) return Cno;
  return o;
}
function ZZd(e, t) {
  if (e.label != Lno) return !1;
  switch (e.type) {
    case PZd:
    case MZd:
    case VFt:
    case qFt:
      return !1;
  }
  let n = e.options;
  if (n && AWe(n, "packed")) return n.packed;
  return BZd == vWe("repeatedFieldEncoding", {
    proto: e,
    parent: t
  });
}
function eep(e) {
  let t = e.fields.find(r => r.number === 1),
    n = e.fields.find(r => r.number === 2);
  return Xne(t && t.fieldKind == "scalar" && t.scalar != pr.BYTES && t.scalar != pr.FLOAT && t.scalar != pr.DOUBLE && n && n.fieldKind != "list" && n.fieldKind != "map"), {
    key: t,
    value: n
  };
}
function tep(e) {
  var t;
  return FZd == vWe("enumType", {
    proto: e.proto,
    parent: (t = e.parent) !== null && t !== void 0 ? t : e.file
  });
}
function nZi(e, t) {
  if (e.type == VFt) return !0;
  return UZd == vWe("messageEncoding", {
    proto: e,
    parent: t
  });
}
function nep(e, t) {
  return jZd == vWe("utf8Validation", {
    proto: e,
    parent: t
  });
}
function vWe(e, t) {
  var n, r;
  let o = (n = t.proto.options) === null || n === void 0 ? void 0 : n.features;
  if (o) {
    let s = o[e];
    if (s != 0) return s;
  }
  if ("kind" in t) {
    if (t.kind == "message") return vWe(e, (r = t.parent) !== null && r !== void 0 ? r : t.file);
    let s = oZi[t.edition];
    if (!s) throw Error(`feature default for edition ${t.edition} not found`);
    return s[e];
  }
  return vWe(e, t.parent);
}
function Xne(e, t) {
  if (!e) throw Error(t);
}
var RZd = 998,
  LZd = 999,
  DZd = 9999,
  PZd = 9,
  VFt = 10,
  qFt = 11,
  MZd = 12,
  QQi = 14,
  Lno = 3,
  $Zd = 2,
  ZQi = 1,
  OZd = 0,
  Cno = 1,
  eZi = 2,
  NZd = 3,
  BZd = 1,
  UZd = 2,
  FZd = 1,
  jZd = 2,
  GZd = 1001,
  oZi;