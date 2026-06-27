// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U2n
// matched 2.1.88 source: src/utils/shell/powershellDetection.ts
// class=modified  jaccard=0.2535  score=0.357  fileCov=0.4666
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module U2n] deps: types/generated/google/protobuf/timestamp.ts, utils/debug.ts, utils/plugins/hintRecommendation.ts, utils/config.ts, utils/debug.ts, utils/generatedFiles.ts, utils/plugins/installedPluginsManager.ts, utils/plugins/pluginIdentifier.ts, commands/plugin/ManagePlugins.tsx
hPa = new Set();
async function PGt(e) {
  try {
    return (await Fqe.stat(e)).isFile() ? e : null;
  } catch {
    return null;
  }
}
async function Jkp(e) {
  let t;
  try {
    t = await Fqe.readlink(e);
  } catch {
    return null;
  }
  return PGt(t);
}
async function findPowerShell() {
  let e = await Gf("pwsh");
  if (e) {
    if (Vt() === "linux") {
      let n = await Fqe.realpath(e).catch(() => e);
      if (e.startsWith("/snap/") || n.startsWith("/snap/")) {
        let r = (await PGt("/opt/microsoft/powershell/7/pwsh")) ?? (await PGt("/usr/bin/pwsh"));
        if (r) {
          let o = await Fqe.realpath(r).catch(() => r);
          if (!r.startsWith("/snap/") && !o.startsWith("/snap/"))
            return (It("shell_powershell_detect", "snap_workaround"), r);
        }
      }
    }
    return (xe("shell_powershell_detect"), e);
  }
  if (Vt() === "windows") {
    let n = process.env.ProgramFiles,
      r = process.env.LOCALAPPDATA,
      o = process.env.USERPROFILE,
      s =
        (n ? await PGt(F2n.join(n, "PowerShell", "7", "pwsh.exe")) : null) ??
        (r ? await Jkp(F2n.join(r, "Microsoft", "WindowsApps", "pwsh.exe")) : null) ??
        (o ? await PGt(F2n.join(o, ".dotnet", "tools", "pwsh.exe")) : null);
    if (s) return (It("shell_powershell_detect", "windows_fallback_path"), s);
  }
  let t = await Gf("powershell");
  if (t) return (It("shell_powershell_detect", "fell_back_to_powershell_5"), t);
  return null;
}
function d6() {
  if (!vmo) vmo = findPowerShell();
  return vmo;
}
async function MGt() {
  let e = await d6();
  if (!e) return null;
  return e
    .split(/[/\\]/)
    .pop()
    .toLowerCase()
    .replace(/\.exe$/, "") === "pwsh"
    ? "core"
    : "desktop";
}
var Fqe,
  F2n,
  vmo = null;
