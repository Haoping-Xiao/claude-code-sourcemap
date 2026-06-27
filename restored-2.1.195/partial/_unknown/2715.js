// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SX
// matched 2.1.88 source: node_modules/mime-types/index.js
// class=partial  jaccard=0.0751  score=0.3158  fileCov=0.0897
// note: low-confidence suggestion: node_modules/mime-types/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SX = E(() => {
  $Zi();
  NZi();
  qZi();
  Ono();
  JZi();
  ZZi();
  Dno();
  OZi();
  eea();
  tea();
  sea();
  lea();
  VZi();
  cea();
  $no();
  XZi();
  hea();
  _ea();
});
function KFt(e, t) {
  Sea(t, e);
  let n = Eep(e.$unknown, t),
    [r, o, s] = Nbe(t);
  for (let i of n) Pno(r, new zlt(i.data), o, i.wireType, {
    readUnknownFields: !0
  });
  return s();
}
function bea(e, t, n) {
  var r;
  Sea(t, e);
  let o = ((r = e.$unknown) !== null && r !== void 0 ? r : []).filter(c => c.no !== t.number),
    [s, i] = Nbe(t, n),
    a = new jFt();
  Nno(a, {
    writeUnknownFields: !0
  }, s, i);
  let l = new zlt(a.finish());
  while (l.pos < l.len) {
    let [c, u] = l.tag(),
      d = l.skip(u, c);
    o.push({
      no: c,
      wireType: u,
      data: d
    });
  }
  e.$unknown = o;
}
function Eep(e, t) {
  if (e === void 0) return [];
  if (t.fieldKind === "enum" || t.fieldKind === "scalar") {
    for (let n = e.length - 1; n >= 0; --n) if (e[n].no == t.number) return [e[n]];
    return [];
  }
  return e.filter(n => n.no === t.number);
}
function Nbe(e, t) {
  let n = e.typeName,
    r = Object.assign(Object.assign({}, e), {
      kind: "field",
      parent: e.extendee,
      localName: n
    }),
    o = Object.assign(Object.assign({}, e.extendee), {
      fields: [r],
      members: [r],
      oneofs: []
    }),
    s = F0(o, t !== void 0 ? {
      [n]: t
    } : void 0);
  return [ok(o, s), r, () => {
    let i = s[n];
    if (i === void 0) {
      let a = e.message;
      if (Yne(a)) return zne(a.fields[0].scalar, a.fields[0].longAsString);
      return F0(a);
    }
    return i;
  }];
}
function Sea(e, t) {
  if (e.extendee.typeName != t.$typeName) throw Error(`extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}