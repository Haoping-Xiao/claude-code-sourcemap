// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ufn
// matched 2.1.88 source: src/constants/files.ts
// class=modified  jaccard=0.4077  score=0.4882  fileCov=0.712
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ufn]
g$u = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".bmp",
  ".ico",
  ".webp",
  ".tiff",
  ".tif",
  ".mp4",
  ".mov",
  ".avi",
  ".mkv",
  ".webm",
  ".wmv",
  ".flv",
  ".m4v",
  ".mpeg",
  ".mpg",
  ".mp3",
  ".wav",
  ".ogg",
  ".flac",
  ".aac",
  ".m4a",
  ".wma",
  ".aiff",
  ".opus",
  ".zip",
  ".tar",
  ".gz",
  ".bz2",
  ".7z",
  ".rar",
  ".xz",
  ".z",
  ".tgz",
  ".iso",
  ".exe",
  ".dll",
  ".so",
  ".dylib",
  ".bin",
  ".o",
  ".a",
  ".obj",
  ".lib",
  ".app",
  ".msi",
  ".deb",
  ".rpm",
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
  ".odt",
  ".ods",
  ".odp",
  ".ttf",
  ".otf",
  ".woff",
  ".woff2",
  ".eot",
  ".pyc",
  ".pyo",
  ".class",
  ".jar",
  ".war",
  ".ear",
  ".node",
  ".wasm",
  ".rlib",
  ".sqlite",
  ".sqlite3",
  ".db",
  ".mdb",
  ".idx",
  ".psd",
  ".ai",
  ".eps",
  ".sketch",
  ".fig",
  ".xd",
  ".blend",
  ".3ds",
  ".max",
  ".swf",
  ".fla",
  ".lockb",
  ".dat",
  ".data",
]);
function In(e, t, n) {
  let r = y$u();
  if (!r) return;
  let o = {
      timestamp: new Date().toISOString(),
      level: e,
      event: t,
      data: n ?? {},
    },
    s = qt(),
    i =
      De(o) +
      `
`;
  try {
    s.appendFileSync(r, i);
  } catch {
    try {
      (s.mkdirSync(ATs.dirname(r)), s.appendFileSync(r, i));
    } catch {}
  }
}
function y$u() {
  return process.env.CLAUDE_CODE_DIAGNOSTICS_FILE;
}
async function pet(e, t, n) {
  let r = Date.now();
  In("info", `${e}_started`);
  try {
    let o = await t(),
      s = n ? n(o) : {};
    return (
      In("info", `${e}_completed`, {
        duration_ms: Date.now() - r,
        ...s,
      }),
      o
    );
  } catch (o) {
    throw (
      In("error", `${e}_failed`, {
        duration_ms: Date.now() - r,
      }),
      o
    );
  }
}
var ATs;
