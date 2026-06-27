// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hY
// matched 2.1.88 source: src/utils/settings/managedPath.ts
// class=modified  jaccard=0.298  score=0.3649  fileCov=0.6193
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hY] deps: Qi, Is
((_vs = require("path")),
  (QC = Cn(function () {
    switch (Vt()) {
      case "macos":
        return "/Library/Application Support/ClaudeCode";
      case "windows":
        return "C:\\Program Files\\ClaudeCode";
      default:
        return "/etc/claude-code";
    }
  })),
  (PRt = Cn(function () {
    return _vs.join(QC(), "managed-settings.d");
  })));
function MRt() {
  if (process.env.WSL_DISTRO_NAME) return true;
  try {
    let e = require("fs").readFileSync("/proc/version", "utf8").toLowerCase();
    return e.includes("microsoft") || e.includes("wsl");
  } catch {
    return false;
  }
}
var Ifn = "HKLM\\SOFTWARE\\Policies\\ClaudeCode",
  xfn = "HKCU\\SOFTWARE\\Policies\\ClaudeCode",
  vet = "Settings",
  bvs = 5000,
  CRr = "/mnt/c/Windows/System32/reg.exe",
  NO = "/mnt/c/Program Files/ClaudeCode";
var mCe = () => {};
function iOu(e, t) {
  return Gun(e, t, function (n, r) {
    return jon(e, r);
  });
}
var Svs;
