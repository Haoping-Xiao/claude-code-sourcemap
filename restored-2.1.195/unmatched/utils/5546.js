// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I7e
// matched 2.1.88 source: src/components/MessageRow.tsx
// class=new  jaccard=0.0438  score=0.1091  fileCov=0.0682
// note: nearest: src/components/MessageRow.tsx (0.0438); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var I7e = E(() => {
  ft();
  GF();
  Izt();
  RF();
  kt();
  ty();
  $S();
  Jen();
  dC();
  h6();
  Ld();
  BE();
  wpe();
  Lo();
  je();
  wr();
  Y4();
  gM();
  sa();
  sF();
  lpr();
  co();
  QO();
  OJt();
  k0();
  Ao();
  vM();
  Ls();
  DE();
  KI();
  _$();
  _a();
  bk();
  zgo();
  HO();
  aR();
  OEc = require("path");
  Vhm = {
    unknown_family: "not a model this version of Claude Code recognizes",
    not_allowed: "not allowed by this account's model settings",
    retired: "retired"
  };
});
function Jhm(e) {
  return e.type === "system" && e.subtype === "model_refusal_fallback";
}
function Qhm(e, t) {
  if (e == null) return false;
  let n = dp(e),
    r = dp(t);
  return n === r || mo(n) === mo(r);
}
function jEc(e) {
  let t = e.slicedMessages.filter(Jhm),
    n = t.at(-1);
  if (!n) return;
  let r = n.fallbackModel,
    o = (() => {
      if (!e.firstParty) return {
        action: "keep",
        reason: "not_first_party"
      };
      if (!Qhm(e.currentOverride, r)) return {
        action: "keep",
        reason: "writer_mismatch"
      };
      let s = BEc(e.keptMessages, e.initialModel);
      if (s != null) return {
        action: "restore",
        value: s,
        restoredFrom: "transcript"
      };
      if (e.initialModel != null) return {
        action: "restore",
        value: e.initialModel,
        restoredFrom: "initial_model"
      };
      return {
        action: "restore",
        value: null,
        restoredFrom: "settings_fallthrough"
      };
    })();
  return {
    bannersSliced: t.length,
    model: o,
    lastSlicedFallbackModel: r
  };
}