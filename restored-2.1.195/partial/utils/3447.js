// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qho
// matched 2.1.88 source: src/services/remoteManagedSettings/syncCache.ts
// class=partial  jaccard=0.2099  score=0.6316  fileCov=0.2391
// note: low-confidence suggestion: src/services/remoteManagedSettings/syncCache.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Qho] deps: ft, Nho, Oho, HI, Ye, S6, C5, Yp, Gre, dn, kt
k4n = R(se(), 1), xft = [];
function _Ve() {
  AJ = void 0, Lvs();
}
function isRemoteManagedSettingsEligible() {
  if (AJ !== void 0) return AJ;
  if (Ihe()) return AJ = Mae(true);
  if (fr() === "gateway") return AJ = Mae(ZBe(km()));
  if (fr() !== "firstParty") return AJ = Mae(false);
  if (!_u()) return AJ = Mae(false);
  if (Oe.CLAUDE_CODE_ENTRYPOINT === "local-agent" || Oe.CLAUDE_CODE_ENTRYPOINT === "remote_cowork") return AJ = Mae(false);
  if (WE() && f1t() === null) return AJ = Mae(true);
  if (WE() && (f1t() === "enterprise" || f1t() === "team")) return AJ = Mae(true);
  try {
    let {
      key: e
    } = Ty({
      skipRetrievingKeyFromApiKeyHelper: true
    });
    if (e) return AJ = Mae(true);
  } catch {}
  return AJ = Mae(false);
}
var AJ;