// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qho
// matched 2.1.88 source: src/services/remoteManagedSettings/syncCache.ts
// class=modified  jaccard=0.2907  score=0.4985  fileCov=0.4109
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Qho = E(() => {
  ft();
  Nho();
  Oho();
  HI();
  Ye();
  S6();
  C5();
  Yp();
  Gre();
  dn();
  kt();
  ((k4n = R(se(), 1)), (xft = []));
});
function _Ve() {
  ((AJ = void 0), Lvs());
}
function HJ() {
  if (AJ !== void 0) return AJ;
  if (Ihe()) return (AJ = Mae(!0));
  if (fr() === "gateway") return (AJ = Mae(ZBe(km())));
  if (fr() !== "firstParty") return (AJ = Mae(!1));
  if (!_u()) return (AJ = Mae(!1));
  if (Oe.CLAUDE_CODE_ENTRYPOINT === "local-agent" || Oe.CLAUDE_CODE_ENTRYPOINT === "remote_cowork")
    return (AJ = Mae(!1));
  if (WE() && f1t() === null) return (AJ = Mae(!0));
  if (WE() && (f1t() === "enterprise" || f1t() === "team")) return (AJ = Mae(!0));
  try {
    let { key: e } = Ty({
      skipRetrievingKeyFromApiKeyHelper: !0,
    });
    if (e) return (AJ = Mae(!0));
  } catch {}
  return (AJ = Mae(!1));
}
var AJ;
