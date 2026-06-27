// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jS
// matched 2.1.88 source: src/utils/path.ts
// class=modified  jaccard=0.294  score=0.5072  fileCov=0.4115
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jS] deps: @grpc/grpc-js/build/src/server.js, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/getWorktreePathsPortable.ts, utils/sessionStoragePortable.ts
((Qkr = require("events")),
  (VEs = require("fs")),
  (ij = require("fs/promises")),
  (uY = require("path")),
  (zEs = require("readline")),
  (jpn = new Set(["sdk-cli", "sdk-ts", "sdk-py"])));
_Pu = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
((Fpn = Buffer.from('{"type":"attribution-snapshot"')),
  (TPu = Buffer.from('{"type":"system"')),
  (vPu = Buffer.from([iRt])));
function expandPath(path, baseDir) {
  let n = baseDir ?? $t() ?? qt().cwd();
  if (typeof path !== "string") throw TypeError(`Path must be a string, received ${typeof path}`);
  if (typeof n !== "string")
    throw TypeError(`Base directory must be a string, received ${typeof n}`);
  if (path.includes("\x00") || n.includes("\x00")) throw Error("Path contains null bytes");
  let trimmedPath = path.trim();
  if (!trimmedPath) return o_(MO.normalize(n));
  if (trimmedPath === "~") return o_(Vpn.homedir());
  if (trimmedPath.startsWith("~/")) return o_(MO.join(Vpn.homedir(), trimmedPath.slice(2)));
  let o = trimmedPath;
  if (Vt() === "windows" && trimmedPath.match(/^\/[a-z]\//i))
    try {
      o = NFe(trimmedPath);
    } catch {
      o = trimmedPath;
    }
  if (MO.isAbsolute(o)) return o_(MO.normalize(o));
  return o_(MO.resolve(n, o));
}
function eet(e) {
  let t = MO.relative($t(), e);
  return t.startsWith("..") ? e : t;
}
function MB(e) {
  let t = expandPath(e);
  if (t.startsWith("\\\\") || t.startsWith("//")) return MO.dirname(t);
  try {
    if (qt().statSync(t).isDirectory()) return t;
  } catch {}
  return MO.dirname(t);
}
function kae(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}
function fM(e) {
  let t = Vpn.homedir();
  if (e === t) return "~";
  if (e.startsWith(t + MO.sep)) return "~" + e.slice(t.length);
  return e;
}
function t9(e) {
  let t = MO.normalize(e);
  if (Vt() === "windows") return t.replaceAll("\\", "/");
  return t;
}
var Vpn, MO;
