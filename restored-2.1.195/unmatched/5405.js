// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Umc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Umc = E(() => {
  hNe();
  Ld();
  U_t();
  nen = R(rt(), 1), Ncm = {
    refusal_fallback_prompt: "choose: retry on fallback model or edit prompt",
    fable_overage_consent_prompt: "choose: continue Fable 5 on usage credits or switch models"
  };
});
function jmc() {
  let e = ATt(),
    t = e?.kind === y8e.kind;
  Fmc.useEffect(() => {
    if (!Js()) {
      ASt(null);
      return;
    }
    if (t && e) {
      let n = e.payload;
      return ASt(r => {
        let o = r.trim();
        if (!o || o.startsWith("!") || o.startsWith("/")) return !1;
        let s = n.questions[0];
        if (!s) return !1;
        ASt(null);
        let a = s.options?.find(l => l.label.toLowerCase() === o.toLowerCase())?.label ?? o;
        return w3.answer(e.id, {
          behavior: "allow",
          updatedInput: {
            ...n.input,
            answers: {
              [s.question]: a
            }
          }
        }), !0;
      }), () => ASt(null);
    }
    ASt(null);
  }, [e, t]);
}
var Fmc;