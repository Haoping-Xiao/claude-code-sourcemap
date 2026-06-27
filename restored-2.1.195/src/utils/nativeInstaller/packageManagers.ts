// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kgt
// matched 2.1.88 source: src/utils/nativeInstaller/packageManagers.ts
// class=modified  jaccard=0.1269  score=0.4107  fileCov=0.1552
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kgt] deps: zb, db, je, fn, At, Jt
((Pza = require("path")),
  (Gzp = ve(() =>
    dt.object({
      timestamp: dt.string(),
      path: dt.enum(["npm-global", "npm-local", "native"]),
      outcome: dt.enum(["success", "failed"]),
      status: dt.string(),
      version_from: dt.string(),
      version_to: dt.string().nullable(),
      error_code: dt.string().nullable(),
    }),
  )));
function CVn(e, t) {
  return t.includes(e.id) || e.idLike.some((n) => t.includes(n));
}
function gAo() {
  let e = process.execPath || process.argv[0] || "";
  if (/[/\\]mise[/\\]installs[/\\]/i.test(e)) return (T(`Detected mise installation: ${e}`), true);
  return false;
}
function hAo() {
  let e = process.execPath || process.argv[0] || "";
  if (/[/\\]\.?asdf[/\\]installs[/\\]/i.test(e))
    return (T(`Detected asdf installation: ${e}`), true);
  return false;
}
function Rgt() {
  let e = Vt();
  if (e !== "macos" && e !== "linux" && e !== "wsl") return false;
  let t = process.execPath || process.argv[0] || "";
  if (t.includes("/Caskroom/")) return (T(`Detected Homebrew cask installation: ${t}`), true);
  return false;
}
function Yqt() {
  return (process.execPath || process.argv[0] || "").match(/\/Caskroom\/([^/]+)\//)?.[1] ?? null;
}
function yAo() {
  if (Vt() !== "windows") return false;
  let t = process.execPath || process.argv[0] || "",
    n = [/Microsoft[/\\]WinGet[/\\]Packages/i, /Microsoft[/\\]WinGet[/\\]Links/i];
  for (let r of n) if (r.test(t)) return (T(`Detected winget installation: ${t}`), true);
  return false;
}
var $za, wVn, _Ao, bAo, SAo, EAo, C9e;
