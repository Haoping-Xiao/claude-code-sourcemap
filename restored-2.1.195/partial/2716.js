// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D$n
// matched 2.1.88 source: node_modules/yaml/dist/compose/util-contains-newline.js
// class=partial  jaccard=0.1316  score=0.3165  fileCov=0.1838
// note: low-confidence suggestion: node_modules/yaml/dist/compose/util-contains-newline.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var D$n = E(() => {
  HWe();
  w$n();
  bRe();
  _Re();
  Bno();
  Klt();
});
function Uno(e, t, n, r) {
  if (t.$typeName != e.typeName || n.$typeName != e.typeName) return !1;
  if (t === n) return !0;
  return P$n(ok(e, t), ok(e, n), r);
}
function P$n(e, t, n) {
  if (e.desc.typeName === "google.protobuf.Any" && (n === null || n === void 0 ? void 0 : n.unpackAny) == !0) return Aep(e.message, t.message, n);
  for (let r of e.fields) if (!Eea(r, e, t, n)) return !1;
  if ((n === null || n === void 0 ? void 0 : n.unknown) == !0 && !Hep(e, t, n.registry)) return !1;
  if ((n === null || n === void 0 ? void 0 : n.extensions) == !0 && !Tep(e, t, n)) return !1;
  return !0;
}
function Eea(e, t, n, r) {
  if (!t.isSet(e) && !n.isSet(e)) return !0;
  if (!t.isSet(e) || !n.isSet(e)) return !1;
  switch (e.fieldKind) {
    case "scalar":
      return qlt(e.scalar, t.get(e), n.get(e));
    case "enum":
      return t.get(e) === n.get(e);
    case "message":
      return P$n(t.get(e), n.get(e), r);
    case "map":
      {
        let o = t.get(e),
          s = n.get(e),
          i = [];
        for (let a of o.keys()) {
          if (!s.has(a)) return !1;
          i.push(a);
        }
        for (let a of s.keys()) if (!o.has(a)) return !1;
        for (let a of i) {
          let l = o.get(a),
            c = s.get(a);
          if (l === c) continue;
          switch (e.mapKind) {
            case "enum":
              return !1;
            case "message":
              if (!P$n(l, c, r)) return !1;
              break;
            case "scalar":
              if (!qlt(e.scalar, l, c)) return !1;
              break;
          }
        }
        break;
      }
    case "list":
      {
        let o = t.get(e),
          s = n.get(e);
        if (o.size != s.size) return !1;
        for (let i = 0; i < o.size; i++) {
          let a = o.get(i),
            l = s.get(i);
          if (a === l) continue;
          switch (e.listKind) {
            case "enum":
              return !1;
            case "message":
              if (!P$n(a, l, r)) return !1;
              break;
            case "scalar":
              if (!qlt(e.scalar, a, l)) return !1;
              break;
          }
        }
        break;
      }
  }
  return !0;
}
function Aep(e, t, n) {
  if (e.typeUrl !== t.typeUrl) return !1;
  let r = $be(e, n.registry),
    o = $be(t, n.registry);
  if (r && o) {
    let s = n.registry.getMessage(r.$typeName);
    if (s) return Uno(s, r, o, n);
  }
  return qlt(pr.BYTES, e.value, t.value);
}
function Hep(e, t, n) {
  function r(i, a) {
    var l;
    let c = (l = i.getUnknown()) !== null && l !== void 0 ? l : [];
    return a ? c.filter(u => !a.getExtensionFor(i.desc, u.no)) : c;
  }
  let o = r(e, n),
    s = r(t, n);
  if (o.length != s.length) return !1;
  for (let i = 0; i < o.length; i++) {
    let a = o[i],
      l = s[i];
    if (a.no != l.no) return !1;
    if (a.wireType != l.wireType) return !1;
    if (!qlt(pr.BYTES, a.data, l.data)) return !1;
  }
  return !0;
}
function Tep(e, t, n) {
  function r(i, a) {
    var l;
    return ((l = i.getUnknown()) !== null && l !== void 0 ? l : []).map(c => a.getExtensionFor(i.desc, c.no)).filter(c => c != null).filter((c, u, d) => d.indexOf(c) === u);
  }
  let o = r(e, n.registry),
    s = r(t, n.registry);
  if (o.length != s.length || o.some(i => !s.includes(i))) return !1;
  for (let i of o) {
    let [a, l] = Nbe(i, KFt(e.message, i)),
      [c] = Nbe(i, KFt(t.message, i));
    if (!Eea(l, a, c, n)) return !1;
  }
  return !0;
}