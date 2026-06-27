// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Uh
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jest-config; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Uh] deps: lodash-es/memoize.js, services/analytics/index.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, services/analytics/growthbook.ts, utils/config.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/git.ts, utils/file.ts, utils/worktree.ts, utils/settings/settings.ts, utils/words.ts
WOi = require("os"), bU = require("path");
mm = Cn(() => {
  let e = VOi() ?? EOd();
  if (e) return e;
  let t = bU.join(ace(), "projects");
  return (bU.join(t, LE(AOd()), bOd) + bU.sep).normalize("NFC");
}, () => `${rc()}|${yke()}`);
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