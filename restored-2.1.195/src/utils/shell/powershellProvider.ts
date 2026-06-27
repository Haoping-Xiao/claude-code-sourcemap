// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oMa
// matched 2.1.88 source: src/utils/shell/powershellProvider.ts
// class=modified  jaccard=0.4682  score=0.6717  fileCov=0.6071
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oMa] deps: services/analytics/index.ts, dn, screens/REPL.tsx, qmo, utils/shell/bashProvider.ts, utils/settings/validationTips.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/platform.ts, utils/hooks/fileChangedWatcher.ts, proxy-from-env/index.js, utils/windowsPaths.ts
((tMa = require("fs/promises")), (nMa = require("path")), (GGt = require("path/posix")));
function buildPowerShellArgs() {
  let e = ["-NoProfile", "-NonInteractive"];
  if (!ut(process.env.CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY))
    e.push("-ExecutionPolicy", "Bypass");
  return e;
}
function WGt(e) {
  return [...buildPowerShellArgs(), "-Command", e];
}
function encodePowerShellCommand(psCommand) {
  return Buffer.from(psCommand, "utf16le").toString("base64");
}
function createPowerShellProvider(shellPath) {
  let t;
  return {
    type: "powershell",
    shellPath: shellPath,
    detached: false,
    async buildExecCommand(n, r) {
      t = r.useSandbox ? r.sandboxTmpDir : void 0;
      let o;
      if (r.useSandbox && r.sandboxTmpDir) o = aMa.join(r.sandboxTmpDir, `claude-pwd-ps-${r.id}`);
      else {
        let c = qE();
        (await sMa
          .mkdir(c, {
            recursive: true,
            mode: 448,
          })
          .catch(() => {}),
          (o = iMa.join(c, `claude-pwd-ps-${r.id}`)));
      }
      let i = `
; $_ec = if ($null -ne $LASTEXITCODE) { $LASTEXITCODE } elseif ($?) { 0 } else { 1 }
; (Get-Location).Path | Out-File -FilePath ${Fat(o, "the temp-directory path (override with CLAUDE_CODE_TMPDIR)")} -Encoding utf8 -NoNewline
; if ($ExecutionContext.SessionState.LanguageMode -eq 'FullLanguage') { $host.SetShouldExit($_ec) } else { exit $_ec }`,
        a = n + i;
      return {
        commandString: r.useSandbox
          ? [
              `'${shellPath.replace(/'/g, "'\\''")}'`,
              ...buildPowerShellArgs(),
              "-EncodedCommand",
              encodePowerShellCommand(a),
            ].join(" ")
          : a,
        cwdFilePath: o,
      };
    },
    getSpawnArgs(n) {
      return WGt(n);
    },
    async getEnvironmentOverrides(n, r) {
      let o = {};
      if (r) for (let [s, i] of r) o[s] = i;
      if (t) ((o.TMPDIR = t), (o.CLAUDE_CODE_TMPDIR = qE()));
      return o;
    },
  };
}
var sMa, iMa, aMa;
