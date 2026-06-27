// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X6e
// matched 2.1.88 source: src/utils/timeouts.ts
// class=modified  jaccard=0.1169  score=0.1335  fileCov=0.4843
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var X6e = E(() => {
  dqe();
  TX();
  Rct();
  Un();
  Ox();
  jc();
  nRo = [
    "cowork",
    "workspace",
    "session-info",
    "mcp-registry",
    "plugins",
    "scheduled-tasks",
    "dispatch",
    "ide",
  ];
  ((Lmf = new Set(["web_fetch", "web_search"])), (Dmf = /^claude[-_](?:for|in)[-_]chrome$/i));
  Gyl = {
    denyMessage: null,
    classifiedAs: null,
    activeLatch: null,
  };
});
function I$e(e = process.env) {
  let t = e.BASH_DEFAULT_TIMEOUT_MS;
  if (t) {
    let n = parseInt(t, 10);
    if (!isNaN(n) && n > 0) return n;
  }
  return 120000;
}
function tXn(e = process.env) {
  let t = e.BASH_MAX_TIMEOUT_MS;
  if (t) {
    let n = parseInt(t, 10);
    if (!isNaN(n) && n > 0) return Math.max(n, I$e(e));
  }
  return Math.max(600000, I$e(e));
}
function Kyl(e, t) {
  let n = e.timeout;
  return typeof n === "number" && n > 0 ? n : t;
}
function Yyl(e, t) {
  if (e.name === Co || e.name === Ss) return Kyl(t, I$e());
  if (e.name === U8) return Kyl(t, 30000);
  if (Mmf.has(e.name)) return 10000 /* 1e4 */;
  return;
}
var Mmf;
