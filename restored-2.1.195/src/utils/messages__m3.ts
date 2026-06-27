// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MEl
// matched 2.1.88 source: src/utils/messages.ts
// class=modified (alt of src/utils/messages.ts)  jaccard=0.009  score=1  fileCov=0.009
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MEl = E(() => {
  dn();
  ty();
  NB();
  Lo();
  je();
  co();
  _a();
  Mp();
  YI();
  K0();
  v7n();
  dMe();
  hP();
});
function jzt(e) {
  if (e.type !== "user") return !1;
  let t = e.message?.content;
  if (typeof t === "string") return $El.some((n) => t.startsWith(n));
  if (!Array.isArray(t)) return !1;
  return (
    t.length > 0 &&
    t.every((n) => {
      let r =
        n.type === "text"
          ? n.text
          : n.type === "tool_result" && n.is_error === !0
            ? n.content
            : void 0;
      return typeof r === "string" && $El.some((o) => r.startsWith(o));
    })
  );
}
var _N = "[Request interrupted by user]",
  Jv = "[Request interrupted by user for tool use]",
  uQ =
    "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.",
  $El;
