// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vlt
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-compat.js
// class=partial  jaccard=0.1389  score=0.489  fileCov=0.1625
// note: low-confidence suggestion: node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-compat.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Vlt = E(() => {
  _Re();
  Kne = Symbol.for("reflect unsafe local");
});
function mue(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function gue(e, t) {
  var n, r, o, s;
  if (mue(e) && Kne in e && "add" in e && "field" in e && typeof e.field == "function") {
    if (t !== void 0) {
      let i = t,
        a = e.field();
      return i.listKind == a.listKind && i.scalar === a.scalar && ((n = i.message) === null || n === void 0 ? void 0 : n.typeName) === ((r = a.message) === null || r === void 0 ? void 0 : r.typeName) && ((o = i.enum) === null || o === void 0 ? void 0 : o.typeName) === ((s = a.enum) === null || s === void 0 ? void 0 : s.typeName);
    }
    return !0;
  }
  return !1;
}
function hue(e, t) {
  var n, r, o, s;
  if (mue(e) && Kne in e && "has" in e && "field" in e && typeof e.field == "function") {
    if (t !== void 0) {
      let i = t,
        a = e.field();
      return i.mapKey === a.mapKey && i.mapKind == a.mapKind && i.scalar === a.scalar && ((n = i.message) === null || n === void 0 ? void 0 : n.typeName) === ((r = a.message) === null || r === void 0 ? void 0 : r.typeName) && ((o = i.enum) === null || o === void 0 ? void 0 : o.typeName) === ((s = a.enum) === null || s === void 0 ? void 0 : s.typeName);
    }
    return !0;
  }
  return !1;
}
function P1(e, t) {
  return mue(e) && Kne in e && "desc" in e && mue(e.desc) && e.desc.kind === "message" && (t === void 0 || e.desc.typeName == t.typeName);
}