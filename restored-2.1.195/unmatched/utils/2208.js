// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Uh
// matched 2.1.88 source: src/utils/api.ts
// class=new  jaccard=0.0188  score=0.5932  fileCov=0.0191
// note: nearest: src/utils/api.ts (0.0188); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Uh = E(() => {
  Qi();
  ft();
  id();
  Un();
  er();
  wr();
  fn();
  sa();
  Hu();
  Tkn();
  dr();
  Ost();
  WOi = require("os"), bU = require("path");
  mm = Cn(() => {
    let e = VOi() ?? EOd();
    if (e) return e;
    let t = bU.join(ace(), "projects");
    return (bU.join(t, LE(AOd()), bOd) + bU.sep).normalize("NFC");
  }, () => `${rc()}|${yke()}`);
});
function xkn(e) {
  let t = JSON.stringify([e.entrypoint ?? null, e.model, e.ccVersion, e.organizationUuid]),
    n = zOi.createHash("sha256").update(t).digest("hex");
  return KOi + n.slice(0, 16);
}
function XOi(e) {
  return typeof e === "object" && e !== null && "data" in e && "at" in e && typeof e.at === "number";
}
function JOi(e, t, n) {
  let r = typeof e === "object" && e !== null ? Object.entries(e).filter(o => o[0] !== t && o[0].startsWith(KOi) && XOi(o[1])).sort(([, o], [, s]) => s.at - o.at).slice(0, HOd - 1) : [];
  return Object.fromEntries([[t, n], ...r]);
}
function QOi(e, t) {
  if (typeof e !== "object" || e === null) return null;
  let n = e[t];
  return XOi(n) ? n.data ?? null : null;
}
var zOi,
  KOi = "bi1-",
  HOd = 12,
  YOi = 86400000;