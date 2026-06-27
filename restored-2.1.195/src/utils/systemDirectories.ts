// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eqe
// matched 2.1.88 source: src/utils/systemDirectories.ts
// class=modified  jaccard=0.6218  score=0.7649  fileCov=0.7687
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eqe] deps: utils/debug.ts, utils/errors.ts, utils/fsOperations.ts, utils/file.ts
((yUn = require("path")),
  (oCa = {
    MAX_FILE_SIZE: 536870912,
    MAX_TOTAL_SIZE: 1073741824,
    MAX_FILE_COUNT: 1e5,
    MAX_COMPRESSION_RATIO: 50,
  }));
function getSystemDirectories(options) {
  let t = options?.platform ?? Vt(),
    n = options?.homedir ?? sCa.homedir(),
    env = options?.env ?? process.env,
    defaults = {
      HOME: n,
      DESKTOP: tqe.join(n, "Desktop"),
      DOCUMENTS: tqe.join(n, "Documents"),
      DOWNLOADS: tqe.join(n, "Downloads"),
    };
  switch (t) {
    case "windows": {
      let s = env.USERPROFILE || n;
      return {
        HOME: n,
        DESKTOP: tqe.join(s, "Desktop"),
        DOCUMENTS: tqe.join(s, "Documents"),
        DOWNLOADS: tqe.join(s, "Downloads"),
      };
    }
    case "linux":
    case "wsl":
      return {
        HOME: n,
        DESKTOP: env.XDG_DESKTOP_DIR || defaults.DESKTOP,
        DOCUMENTS: env.XDG_DOCUMENTS_DIR || defaults.DOCUMENTS,
        DOWNLOADS: env.XDG_DOWNLOAD_DIR || defaults.DOWNLOADS,
      };
    case "macos":
    default: {
      if (t === "unknown") T("Unknown platform detected, using default paths");
      return defaults;
    }
  }
}
var sCa, tqe;
