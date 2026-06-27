// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pw
// matched 2.1.88 source: src/utils/fileRead.ts
// class=modified  jaccard=0.3671  score=0.5204  fileCov=0.5547
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pw] deps: At
((Vkr = require("crypto")),
  (lY = require("fs")),
  (cY = require("fs/promises")),
  ($Fe = new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"])),
  (REs = new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"])));
function Lpn(e) {
  let { buffer: t, bytesRead: n } = qt().readSync(e, {
    length: 4096,
  });
  if (n === 0) return "utf8";
  if (n >= 2) {
    if (t[0] === 255 && t[1] === 254) return "utf16le";
  }
  if (n >= 3 && t[0] === 239 && t[1] === 187 && t[2] === 191) return "utf8";
  return "utf8";
}
function Dpn(e) {
  let t = 0,
    n = 0;
  for (let r = 0; r < e.length; r++)
    if (
      e[r] ===
      `
`
    )
      if (r > 0 && e[r - 1] === "\r") t++;
      else n++;
  return t > n ? "CRLF" : "LF";
}
function readFileSyncWithMetadata(e) {
  let t = qt(),
    { resolvedPath: n, isSymlink: r } = jd(t, e);
  if (r) T(`Reading through symlink: ${e} -> ${n}`);
  let o = Lpn(n),
    s = t.readFileSync(n, {
      encoding: o,
    }),
    i = Dpn(s.slice(0, 4096));
  return {
    content: s.replaceAll(
      `\r
`,
      `
`,
    ),
    encoding: o,
    lineEndings: i,
  };
}
function XC(e) {
  return readFileSyncWithMetadata(e).content;
}
async function LEs(e) {
  let t = qt(),
    { resolvedPath: n, isSymlink: r } = jd(t, e);
  if (r) T(`Reading through symlink: ${e} -> ${n}`);
  let o = Lpn(n),
    s = await t.readFile(n, {
      encoding: o,
    }),
    i = Dpn(s.slice(0, 4096));
  return {
    content: s.replaceAll(
      `\r
`,
      `
`,
    ),
    encoding: o,
    lineEndings: i,
  };
}
