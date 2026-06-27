// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D$n
// matched 2.1.88 source: node_modules/protobufjs/ext/descriptor/index.js
// class=new  jaccard=0.0203  score=0.1382  fileCov=0.0233
// note: nearest: node_modules/protobufjs/ext/descriptor/index.js (0.0203); 0 renamed
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
  if (t.$typeName != e.typeName || n.$typeName != e.typeName) return false;
  if (t === n) return true;
  return P$n(ok(e, t), ok(e, n), r);
}
function P$n(e, t, n) {
  if (e.desc.typeName === "google.protobuf.Any" && (n === null || n === void 0 ? void 0 : n.unpackAny) == true) return Aep(e.message, t.message, n);
  for (let r of e.fields) if (!Eea(r, e, t, n)) return false;
  if ((n === null || n === void 0 ? void 0 : n.unknown) == true && !Hep(e, t, n.registry)) return false;
  if ((n === null || n === void 0 ? void 0 : n.extensions) == true && !Tep(e, t, n)) return false;
  return true;
}
function Eea(e, t, n, r) {
  if (!t.isSet(e) && !n.isSet(e)) return true;
  if (!t.isSet(e) || !n.isSet(e)) return false;
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
          if (!s.has(a)) return false;
          i.push(a);
        }
        for (let a of s.keys()) if (!o.has(a)) return false;
        for (let a of i) {
          let l = o.get(a),
            c = s.get(a);
          if (l === c) continue;
          switch (e.mapKind) {
            case "enum":
              return false;
            case "message":
              if (!P$n(l, c, r)) return false;
              break;
            case "scalar":
              if (!qlt(e.scalar, l, c)) return false;
              break;
          }
        }
        break;
      }
    case "list":
      {
        let o = t.get(e),
          s = n.get(e);
        if (o.size != s.size) return false;
        for (let i = 0; i < o.size; i++) {
          let a = o.get(i),
            l = s.get(i);
          if (a === l) continue;
          switch (e.listKind) {
            case "enum":
              return false;
            case "message":
              if (!P$n(a, l, r)) return false;
              break;
            case "scalar":
              if (!qlt(e.scalar, a, l)) return false;
              break;
          }
        }
        break;
      }
  }
  return true;
}
function Aep(e, t, n) {
  if (e.typeUrl !== t.typeUrl) return false;
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
  if (o.length != s.length) return false;
  for (let i = 0; i < o.length; i++) {
    let a = o[i],
      l = s[i];
    if (a.no != l.no) return false;
    if (a.wireType != l.wireType) return false;
    if (!qlt(pr.BYTES, a.data, l.data)) return false;
  }
  return true;
}
function Tep(e, t, n) {
  function r(i, a) {
    var l;
    return ((l = i.getUnknown()) !== null && l !== void 0 ? l : []).map(c => a.getExtensionFor(i.desc, c.no)).filter(c => c != null).filter((c, u, d) => d.indexOf(c) === u);
  }
  let o = r(e, n.registry),
    s = r(t, n.registry);
  if (o.length != s.length || o.some(i => !s.includes(i))) return false;
  for (let i of o) {
    let [a, l] = Nbe(i, KFt(e.message, i)),
      [c] = Nbe(i, KFt(t.message, i));
    if (!Eea(l, a, c, n)) return false;
  }
  return true;
}