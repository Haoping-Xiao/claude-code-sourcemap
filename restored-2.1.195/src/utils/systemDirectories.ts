// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eqe
// matched 2.1.88 source: src/utils/systemDirectories.ts
// class=modified  jaccard=0.6218  score=0.7649  fileCov=0.7687
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eqe] deps: je, At, ys, Hu
((yUn = require("path")),
  (oCa = {
    MAX_FILE_SIZE: 536870912,
    MAX_TOTAL_SIZE: 1073741824,
    MAX_FILE_COUNT: 1e5,
    MAX_COMPRESSION_RATIO: 50,
  }));
function getSystemDirectories(e) {
  let t = e?.platform ?? Vt(),
    n = e?.homedir ?? sCa.homedir(),
    r = e?.env ?? process.env,
    o = {
      HOME: n,
      DESKTOP: tqe.join(n, "Desktop"),
      DOCUMENTS: tqe.join(n, "Documents"),
      DOWNLOADS: tqe.join(n, "Downloads"),
    };
  switch (t) {
    case "windows": {
      let s = r.USERPROFILE || n;
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
        DESKTOP: r.XDG_DESKTOP_DIR || o.DESKTOP,
        DOCUMENTS: r.XDG_DOCUMENTS_DIR || o.DOCUMENTS,
        DOWNLOADS: r.XDG_DOWNLOAD_DIR || o.DOWNLOADS,
      };
    case "macos":
    default: {
      if (t === "unknown") T("Unknown platform detected, using default paths");
      return o;
    }
  }
}
var sCa, tqe;
