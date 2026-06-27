// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zQr
// matched 2.1.88 source: src/utils/completionCache.ts
// class=modified  jaccard=0.6078  score=1  fileCov=0.6078
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zQr] deps: utils/config.ts, utils/debug.ts, utils/errors.ts, constants/files.ts, utils/sequential.ts
((VQr = require("fs/promises")), (v8i = require("os")), (w8i = require("path")));
function detectShell() {
  let e = process.env.SHELL || "",
    t = I8i.homedir(),
    n = qce.join(t, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let r = qce.join(n, "completion.zsh");
    return {
      name: "zsh",
      rcFile: qce.join(t, ".zshrc"),
      cacheFile: r,
      completionLine: `[[ -f "${r}" ]] && source "${r}"`,
      shellFlag: "zsh",
    };
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let r = qce.join(n, "completion.bash");
    return {
      name: "bash",
      rcFile: qce.join(t, ".bashrc"),
      cacheFile: r,
      completionLine: `[ -f "${r}" ] && source "${r}"`,
      shellFlag: "bash",
    };
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let r = process.env.XDG_CONFIG_HOME || qce.join(t, ".config"),
      o = qce.join(n, "completion.fish");
    return {
      name: "fish",
      rcFile: qce.join(r, "fish", "config.fish"),
      cacheFile: o,
      completionLine: `[ -f "${o}" ] && source "${o}"`,
      shellFlag: "fish",
    };
  }
  return null;
}
async function regenerateCompletionCache() {
  let shell = detectShell();
  if (!shell) return;
  T(`update: Regenerating ${shell.name} completion cache`);
  let t = process.argv[1] || "claude";
  if ((await $n(t, ["completion", shell.shellFlag, "--output", shell.cacheFile])).code !== 0) {
    T(`update: Failed to regenerate ${shell.name} completion cache`);
    return;
  }
  T(`update: Regenerated ${shell.name} completion cache at ${shell.cacheFile}`);
}
var I8i, qce;
