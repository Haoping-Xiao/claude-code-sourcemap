// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hp
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/global.js
// class=partial  jaccard=0.2084  score=1  fileCov=0.2084
// note: low-confidence suggestion: node_modules/undici/lib/web/fetch/global.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hp = E(() => {
  K_s();
  ({
    Axios: YSu,
    AxiosError: XSu,
    CanceledError: JSu,
    isCancel: dM,
    CancelToken: QSu,
    VERSION: ZSu,
    all: eEu,
    Cancel: tEu,
    isAxiosError: ab,
    spread: nEu,
    toFormData: rEu,
    AxiosHeaders: oEu,
    HttpStatusCode: sEu,
    formToJSON: iEu,
    getAdapter: aEu,
    mergeConfig: lEu
  } = po);
});
function Y_s(e) {
  let t,
    n = e.startsWith("//") ? `https:${e}` : e;
  try {
    t = new URL(n).hostname;
  } catch {
    t = e.match(/^[^/:]+/)?.[0] ?? e;
  }
  return t.endsWith(".") ? t.slice(0, -1) : t;
}
function epn(e) {
  return cEu.test(Y_s(e));
}
function SFe(e) {
  return uEu.test(Y_s(e));
}
var cEu, uEu;