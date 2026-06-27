// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T$n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var T$n = E(() => {
  M8();
  wno();
  Vlt();
  Wlt();
  oZi = {
    998: {
      fieldPresence: 1,
      enumType: 2,
      repeatedFieldEncoding: 2,
      utf8Validation: 3,
      messageEncoding: 1,
      jsonFormat: 2,
      enforceNamingStyle: 2,
      defaultSymbolVisibility: 1
    },
    999: {
      fieldPresence: 2,
      enumType: 1,
      repeatedFieldEncoding: 1,
      utf8Validation: 2,
      messageEncoding: 1,
      jsonFormat: 1,
      enforceNamingStyle: 2,
      defaultSymbolVisibility: 1
    },
    1000: {
      fieldPresence: 1,
      enumType: 1,
      repeatedFieldEncoding: 1,
      utf8Validation: 2,
      messageEncoding: 1,
      jsonFormat: 1,
      enforceNamingStyle: 2,
      defaultSymbolVisibility: 1
    },
    1001: {
      fieldPresence: 1,
      enumType: 1,
      repeatedFieldEncoding: 1,
      utf8Validation: 2,
      messageEncoding: 1,
      jsonFormat: 1,
      enforceNamingStyle: 1,
      defaultSymbolVisibility: 2
    }
  };
});
function aZi(e) {
  let t = rep(e);
  return t.messageType.forEach(WFt), A$n(t, () => {
    return;
  }).getFile(t.name);
}
function rep(e) {
  let t = Object.create({
    syntax: "",
    edition: 0
  });
  return Object.assign(t, Object.assign(Object.assign({
    $typeName: "google.protobuf.FileDescriptorProto",
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    optionDependency: [],
    service: [],
    extension: []
  }, e), {
    messageType: e.messageType.map(lZi),
    enumType: e.enumType.map(cZi)
  }));
}
function lZi(e) {
  var t, n, r, o, s, i, a, l;
  let c = Object.create({
    visibility: 0
  });
  return Object.assign(c, {
    $typeName: "google.protobuf.DescriptorProto",
    name: e.name,
    field: (n = (t = e.field) === null || t === void 0 ? void 0 : t.map(oep)) !== null && n !== void 0 ? n : [],
    extension: [],
    nestedType: (o = (r = e.nestedType) === null || r === void 0 ? void 0 : r.map(lZi)) !== null && o !== void 0 ? o : [],
    enumType: (i = (s = e.enumType) === null || s === void 0 ? void 0 : s.map(cZi)) !== null && i !== void 0 ? i : [],
    extensionRange: (l = (a = e.extensionRange) === null || a === void 0 ? void 0 : a.map(u => Object.assign({
      $typeName: "google.protobuf.DescriptorProto.ExtensionRange"
    }, u))) !== null && l !== void 0 ? l : [],
    oneofDecl: [],
    reservedRange: [],
    reservedName: []
  });
}
function oep(e) {
  let t = Object.create({
    label: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    proto3Optional: false
  });
  return Object.assign(t, Object.assign(Object.assign({
    $typeName: "google.protobuf.FieldDescriptorProto"
  }, e), {
    options: e.options ? sep(e.options) : void 0
  }));
}
function sep(e) {
  var t, n, r;
  let o = Object.create({
    ctype: 0,
    packed: false,
    jstype: 0,
    lazy: false,
    unverifiedLazy: false,
    deprecated: false,
    weak: false,
    debugRedact: false,
    retention: 0
  });
  return Object.assign(o, Object.assign(Object.assign({
    $typeName: "google.protobuf.FieldOptions"
  }, e), {
    targets: (t = e.targets) !== null && t !== void 0 ? t : [],
    editionDefaults: (r = (n = e.editionDefaults) === null || n === void 0 ? void 0 : n.map(s => Object.assign({
      $typeName: "google.protobuf.FieldOptions.EditionDefault"
    }, s))) !== null && r !== void 0 ? r : [],
    uninterpretedOption: []
  }));
}
function cZi(e) {
  let t = Object.create({
    visibility: 0
  });
  return Object.assign(t, {
    $typeName: "google.protobuf.EnumDescriptorProto",
    name: e.name,
    reservedName: [],
    reservedRange: [],
    value: e.value.map(n => Object.assign({
      $typeName: "google.protobuf.EnumValueDescriptorProto"
    }, n))
  });
}