// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bjr
// matched 2.1.88 source: src/utils/secureStorage/plainTextStorage.ts
// class=modified (alt of src/utils/secureStorage/plainTextStorage.ts)  jaccard=0.1465  score=1  fileCov=0.1465
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function getStoragePath() {
  let e = BY(),
    t = ".credentials.json";
  return {
    storageDir: e,
    storagePath: Bsi.join(e, ".credentials.json"),
  };
}
var Nsi, Bsi, Sjr;
