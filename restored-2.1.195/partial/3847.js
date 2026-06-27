// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kgt
// matched 2.1.88 source: src/utils/nativeInstaller/packageManagers.ts
// class=partial  jaccard=0.1477  score=0.5406  fileCov=0.169
// note: low-confidence suggestion: src/utils/nativeInstaller/packageManagers.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kgt = E(() => {
  zb();
  db();
  je();
  fn();
  At();
  Jt();
  Pza = require("path"), Gzp = ve(() => dt.object({
    timestamp: dt.string(),
    path: dt.enum(["npm-global", "npm-local", "native"]),
    outcome: dt.enum(["success", "failed"]),
    status: dt.string(),
    version_from: dt.string(),
    version_to: dt.string().nullable(),
    error_code: dt.string().nullable()
  }));
});
function CVn(e, t) {
  return t.includes(e.id) || e.idLike.some(n => t.includes(n));
}
function gAo() {
  let e = process.execPath || process.argv[0] || "";
  if (/[/\\]mise[/\\]installs[/\\]/i.test(e)) return T(`Detected mise installation: ${e}`), !0;
  return !1;
}
function hAo() {
  let e = process.execPath || process.argv[0] || "";
  if (/[/\\]\.?asdf[/\\]installs[/\\]/i.test(e)) return T(`Detected asdf installation: ${e}`), !0;
  return !1;
}
function Rgt() {
  let e = Vt();
  if (e !== "macos" && e !== "linux" && e !== "wsl") return !1;
  let t = process.execPath || process.argv[0] || "";
  if (t.includes("/Caskroom/")) return T(`Detected Homebrew cask installation: ${t}`), !0;
  return !1;
}
function Yqt() {
  return (process.execPath || process.argv[0] || "").match(/\/Caskroom\/([^/]+)\//)?.[1] ?? null;
}
function yAo() {
  if (Vt() !== "windows") return !1;
  let t = process.execPath || process.argv[0] || "",
    n = [/Microsoft[/\\]WinGet[/\\]Packages/i, /Microsoft[/\\]WinGet[/\\]Links/i];
  for (let r of n) if (r.test(t)) return T(`Detected winget installation: ${t}`), !0;
  return !1;
}
var $za, wVn, _Ao, bAo, SAo, EAo, C9e;