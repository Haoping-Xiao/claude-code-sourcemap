// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w$n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var w$n = E(() => {
  M8();
  _Re();
  bRe();
  Klt();
  LZi = {
    readUnknownFields: true
  };
});
function yue(e, t) {
  var n;
  let r = v$n(RZi, E$n(e));
  return r.messageType.forEach(WFt), r.dependency = (n = t === null || t === void 0 ? void 0 : t.map(s => s.proto.name)) !== null && n !== void 0 ? n : [], A$n(r, s => t === null || t === void 0 ? void 0 : t.find(i => i.proto.name === s)).getFile(r.name);
}