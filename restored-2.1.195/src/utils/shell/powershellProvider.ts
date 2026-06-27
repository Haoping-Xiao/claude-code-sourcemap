// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oMa
// matched 2.1.88 source: src/utils/shell/powershellProvider.ts
// class=modified  jaccard=0.4682  score=0.6717  fileCov=0.6071
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oMa] deps: ft, dn, XPa, qmo, eMa, Xjt, je, fn, Is, E5e, kv, sj
((tMa = require("fs/promises")), (nMa = require("path")), (GGt = require("path/posix")));
function lMa() {
  let e = ["-NoProfile", "-NonInteractive"];
  if (!ut(process.env.CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY))
    e.push("-ExecutionPolicy", "Bypass");
  return e;
}
function WGt(e) {
  return [...lMa(), "-Command", e];
}
function rRp(e) {
  return Buffer.from(e, "utf16le").toString("base64");
}
function cMa(e) {
  let t;
  return {
    type: "powershell",
    shellPath: e,
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
          ? [`'${e.replace(/'/g, "'\\''")}'`, ...lMa(), "-EncodedCommand", rRp(a)].join(" ")
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
