// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dFt
// matched 2.1.88 source: src/utils/plugins/fetchTelemetry.ts
// class=modified  jaccard=0.3703  score=1  fileCov=0.3703
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var dFt = E(() => {
  kt();
  Mx();
  oWe();
  zKd = new Set([
    JH,
    "raw.githubusercontent.com",
    "objects.githubusercontent.com",
    "gist.githubusercontent.com",
    "gitlab.com",
    "bitbucket.org",
    "codeberg.org",
    "dev.azure.com",
    "ssh.dev.azure.com",
    "storage.googleapis.com",
  ]);
});
async function XKd(e) {
  try {
    return !!(await Gf(e));
  } catch {
    return false;
  }
}
function JKi() {
  sWe.cache?.set?.(void 0, Promise.resolve(false));
}
var sWe;
