// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bno
// matched 2.1.88 source: node_modules/protobufjs/src/wrappers.js
// class=partial  jaccard=0.2093  score=0.3606  fileCov=0.3329
// note: low-confidence suggestion: node_modules/protobufjs/src/wrappers.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Bno = E(() => {
  bRe();
  Klt();
  M8();
  BZi = {
    writeUnknownFields: !0
  };
});
function GZi(e, t, n) {
  let r = !1;
  if (!n) n = F0(SRe), r = !0;
  return n.value = UZi(e, t), n.typeUrl = Sep(t.$typeName), r ? n : void 0;
}
function bep(e, t) {
  if (e.typeUrl === "") return !1;
  let n = typeof t == "string" ? t : t.typeName,
    r = WZi(e.typeUrl);
  return n === r;
}
function $be(e, t) {
  if (e.typeUrl === "") return;
  let n = t.kind == "message" ? t : t.getMessage(WZi(e.typeUrl));
  if (!n || !bep(e, n)) return;
  return v$n(n, e.value);
}
function Sep(e) {
  return `type.googleapis.com/${e}`;
}
function WZi(e) {
  let t = e.lastIndexOf("/"),
    n = t >= 0 ? e.substring(t + 1) : e;
  if (!n.length) throw Error(`invalid type url: ${e}`);
  return n;
}