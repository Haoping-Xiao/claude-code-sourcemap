// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tMo
// matched 2.1.88 source: src/utils/queryHelpers.ts
// class=new  jaccard=0.0149  score=0.0215  fileCov=0.0463
// note: nearest: src/utils/queryHelpers.ts (0.0149); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tMo = E(() => {
  qvf = new Set(["ping", "u there", "you there", "are you there", "r u there", "u here", "you here", "are you here", "you back", "are you back", "u back", "anyone there", "anybody there", "still there", "you still there", "are you still there", "still working", "you still working", "are you still working", "you stuck", "are you stuck", "u stuck", "\u5582", "\u5728\u5417", "\u5728\u55CE", "\u8FD8\u5728\u5417", "\u9084\u5728\u55CE", "\u5728\u4E0D\u5728", "\u3082\u3057\u3082\u3057", "\u304A\u3044", "\u304A\u30FC\u3044", "\u3044\u307E\u3059\u304B", "\uC5EC\uBCF4\uC138\uC694", "\uC57C", "\uC788\uC5B4\uC694", "hola", "oye", "est\xE1s ah\xED", "estas ahi", "sigues ah\xED", "sigues ahi", "oi", "ol\xE1", "ola", "al\xF4", "alo", "t\xE1 a\xED", "ta ai", "est\xE1 a\xED", "esta ai", "allo", "all\xF4", "salut", "coucou", "t'es l\xE0", "t'es la", "tu es l\xE0", "tu es la", "hallo", "bist du da", "noch da", "\u043F\u0440\u0438\u0432\u0435\u0442", "\u044D\u0439", "\u0430\u043B\u043B\u043E", "\u0442\u044B \u0442\u0443\u0442", "ciao", "ehi", "ci sei"]);
});
function Gxl() {
  return at("tengu_malformed_tool_use_clean_retry", !1);
}
function Wxl(e) {
  let t = e.flatMap(n => n.message.content).findLast(n => n.type === "text")?.text ?? "";
  return Vvf.test(t);
}
function qxl(e, t, n) {
  if (e > 0) return "succeeded";
  if (t === "tool_use" && !n) return "gave_up";
  if (t === "end_turn") return "end_turn";
  return "other";
}
var Vvf;