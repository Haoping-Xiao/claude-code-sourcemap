// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w$n
// matched 2.1.88 source: node_modules/protobufjs/ext/descriptor/index.js
// class=new  jaccard=0.0076  score=0.1911  fileCov=0.0079
// note: nearest: node_modules/protobufjs/ext/descriptor/index.js (0.0076); 0 renamed
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