// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jS
// matched 2.1.88 source: src/utils/path.ts
// class=modified  jaccard=0.2716  score=0.3638  fileCov=0.5174
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jS = E(() => {
  Rm();
  fn();
  Jkr();
  BFe();
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
});
function ds(e, t) {
  let n = t ?? $t() ?? qt().cwd();
  if (typeof e !== "string") throw TypeError(`Path must be a string, received ${typeof e}`);
  if (typeof n !== "string")
    throw TypeError(`Base directory must be a string, received ${typeof n}`);
  if (e.includes("\x00") || n.includes("\x00")) throw Error("Path contains null bytes");
  let r = e.trim();
  if (!r) return o_(MO.normalize(n));
  if (r === "~") return o_(Vpn.homedir());
  if (r.startsWith("~/")) return o_(MO.join(Vpn.homedir(), r.slice(2)));
  let o = r;
  if (Vt() === "windows" && r.match(/^\/[a-z]\//i))
    try {
      o = NFe(r);
    } catch {
      o = r;
    }
  if (MO.isAbsolute(o)) return o_(MO.normalize(o));
  return o_(MO.resolve(n, o));
}
function eet(e) {
  let t = MO.relative($t(), e);
  return t.startsWith("..") ? e : t;
}
function MB(e) {
  let t = ds(e);
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
