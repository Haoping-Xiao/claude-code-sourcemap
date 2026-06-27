// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PFl
// matched 2.1.88 source: src/utils/claudeInChrome/setup.ts
// class=modified  jaccard=0.3773  score=0.5025  fileCov=0.6024
// note: deminified; 10 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: shouldSuppressChromeOffer, shouldEnableClaudeInChrome, shouldAutoEnableClaudeInChrome, setupClaudeInChrome, markClaudeInChromeUnwiredIfChrome, markClaudeInChromeUnwired, isClaudeInChromeWiredThisSession, isChromeExtensionInstalled, installChromeNativeHostManifest, getClaudeInChromeMcpServerConfig, _resetShouldAutoEnableForTesting, _resetClaudeInChromeWiredForTesting
// [unwrapped __esm module PFl] deps: At
((uBo = require("fs/promises")), (LFl = require("path")));
function shouldEnableClaudeInChrome(e) {
  if (e === true) return true;
  if (e === false) return false;
  if (Oe.CLAUDE_CODE_ENABLE_CFC === true) return true;
  if (Oe.CLAUDE_CODE_ENABLE_CFC === false) return false;
  if (Ir()) return false;
  let t = Dt();
  if (t.claudeInChromeDefaultEnabled !== void 0) return t.claudeInChromeDefaultEnabled;
  return false;
}
function shouldAutoEnableClaudeInChrome() {
  if (Q7t !== void 0) return Q7t;
  return (
    (Q7t =
      kge() !== false &&
      Oe.CLAUDE_CODE_ENABLE_CFC !== false &&
      Dt().claudeInChromeDefaultEnabled === void 0 &&
      Ax() &&
      bo() &&
      ($1f() || Boolean(Dt().chromeExtension?.pairedDeviceId)) &&
      at("tengu_chrome_auto_enable", false)),
    Q7t
  );
}
function L1f() {
  Q7t = void 0;
}
function isClaudeInChromeWiredThisSession() {
  return Z7t;
}
function D1f() {
  Z7t = false;
}
function markClaudeInChromeUnwired() {
  Z7t = false;
}
function markClaudeInChromeUnwiredIfChrome(e) {
  if (e === VD) markClaudeInChromeUnwired();
}
function shouldSuppressChromeOffer({
  isSSHPending: e,
  isRemoteMode: t,
  hasTeleport: n,
  isSafeMode: r,
  permissionMode: o,
  isBypassPermissionsModeAvailable: s,
  teammateAgentId: i,
}) {
  return e || t || n || r || o === "bypassPermissions" || (o === "plan" && s) || i !== void 0;
}
function getClaudeInChromeMcpServerConfig() {
  if (dm())
    return {
      type: "stdio",
      command: process.execPath,
      args: ["--claude-in-chrome-mcp"],
      scope: "dynamic",
    };
  let e = pBo.fileURLToPath(
      "file:///home/runner/work/claude-cli-internal/claude-cli-internal/src/utils/claudeInChrome/setup.ts",
    ),
    t = tZ.join(e, ".."),
    n = tZ.join(t, "cli.js");
  return {
    type: "stdio",
    command: process.execPath,
    args: [`${n}`, "--claude-in-chrome-mcp"],
    scope: "dynamic",
  };
}
function setupClaudeInChrome() {
  let e = dm(),
    t = [],
    n = {};
  if (xCt()) n.CLAUDE_CHROME_PERMISSION_MODE = "skip_all_permission_checks";
  let r = Object.keys(n).length > 0;
  if (e) {
    let o = `"${process.execPath}" --chrome-native-host`;
    return (
      $Fl(o)
        .then((s) => installChromeNativeHostManifest(s))
        .catch((s) =>
          T(`[Claude in Chrome] Failed to install native host: ${s}`, {
            level: "error",
          }),
        ),
      (Z7t = true),
      {
        mcpConfig: {
          [VD]: {
            ...getClaudeInChromeMcpServerConfig(),
            ...(r && {
              env: n,
            }),
          },
        },
        allowedTools: t,
        systemPrompt: VMo(),
      }
    );
  } else {
    let o = pBo.fileURLToPath(
        "file:///home/runner/work/claude-cli-internal/claude-cli-internal/src/utils/claudeInChrome/setup.ts",
      ),
      s = tZ.join(o, ".."),
      i = tZ.join(s, "cli.js");
    $Fl(`"${process.execPath}" "${i}" --chrome-native-host`)
      .then((l) => installChromeNativeHostManifest(l))
      .catch((l) =>
        T(`[Claude in Chrome] Failed to install native host: ${l}`, {
          level: "error",
        }),
      );
    let a = {
      [VD]: {
        ...getClaudeInChromeMcpServerConfig(),
        ...(r && {
          env: n,
        }),
      },
    };
    return (
      (Z7t = true),
      {
        mcpConfig: a,
        allowedTools: t,
        systemPrompt: VMo(),
      }
    );
  }
}
function P1f() {
  if (Vt() === "windows") {
    let t = OFl.homedir(),
      n = process.env.APPDATA || tZ.join(t, "AppData", "Local");
    return [tZ.join(n, "Claude Code", "ChromeNativeHost")];
  }
  return XZr().map(({ path: t }) => t);
}
async function installChromeNativeHostManifest(e) {
  return yl("chrome_native_host_install", async () => {
    let t = P1f();
    if (t.length === 0) throw Error("Claude in Chrome Native Host not supported on this platform");
    let n = {
        name: fBo,
        description: "Claude Code Browser Extension Native Host",
        path: e,
        type: "stdio",
        allowed_origins: ["chrome-extension://fcoeoabgfenejglbffodgkkbkcdhcgfn/", ...[]],
      },
      r = De(n, null, 2),
      o = false;
    for (let s of t) {
      let i = tZ.join(s, MFl);
      if ((await _se.readFile(i, "utf-8").catch(() => null)) === r) continue;
      try {
        (await _se.mkdir(s, {
          recursive: true,
        }),
          await _se.writeFile(i, r),
          T(`[Claude in Chrome] Installed native host manifest at: ${i}`),
          (o = true));
      } catch (l) {
        T(`[Claude in Chrome] Failed to install manifest at ${i}: ${l}`);
      }
    }
    if (Vt() === "windows") {
      let s = tZ.join(t[0], MFl);
      M1f(s);
    }
    if (o)
      isChromeExtensionInstalled()
        .then((s) => {
          if (s)
            (T("[Claude in Chrome] First-time install detected, opening reconnect page in browser"),
              JUt(R1f).catch(ke));
          else
            T(
              "[Claude in Chrome] First-time install detected, but extension not installed, skipping reconnect",
            );
        })
        .catch((s) =>
          T(
            `[Claude in Chrome] Failed to check extension installation during manifest install: ${s}`,
            {
              level: "error",
            },
          ),
        );
  });
}
function M1f(e) {
  let t = JZr();
  for (let { browser: n, key: r } of t) {
    let o = `${r}\\${fBo}`;
    Gr("reg", ["add", o, "/ve", "/t", "REG_SZ", "/d", e, "/f"]).then((s) => {
      if (s.code === 0)
        T(`[Claude in Chrome] Registered native host for ${n} in Windows registry: ${o}`);
      else
        T(
          `[Claude in Chrome] Failed to register native host for ${n} in Windows registry: ${s.stderr}`,
        );
    });
  }
}
async function $Fl(e) {
  let t = Vt(),
    n = tZ.join(tr(), "chrome"),
    r = t === "windows" ? tZ.join(n, "chrome-native-host.bat") : tZ.join(n, "chrome-native-host"),
    o =
      t === "windows"
        ? `@echo off
REM Chrome native host wrapper script
REM Generated by Claude Code - do not edit manually
${e}
`
        : `#!/bin/sh
# Chrome native host wrapper script
# Generated by Claude Code - do not edit manually
exec ${e}
`;
  if ((await _se.readFile(r, "utf-8").catch(() => null)) === o) return r;
  if (
    (await _se.mkdir(n, {
      recursive: true,
    }),
    await _se.writeFile(r, o),
    t !== "windows")
  )
    await _se.chmod(r, 493);
  return (T(`[Claude in Chrome] Created Chrome native host wrapper script: ${r}`), r);
}
function $1f() {
  return (
    isChromeExtensionInstalled()
      .then((t) => {
        if (!t) return;
        if (Dt().cachedChromeExtensionInstalled !== t)
          gn((r) => ({
            ...r,
            cachedChromeExtensionInstalled: t,
          }));
      })
      .catch((t) =>
        T(`[Claude in Chrome] Failed to check extension installation during cache refresh: ${t}`, {
          level: "error",
        }),
      ),
    Dt().cachedChromeExtensionInstalled ?? false
  );
}
async function isChromeExtensionInstalled() {
  let e = YZr();
  if (e.length === 0)
    return (T(`[Claude in Chrome] Unsupported platform for extension detection: ${Vt()}`), false);
  return DFl(e, T);
}
var _se,
  OFl,
  tZ,
  pBo,
  R1f = "https://clau.de/chrome/reconnect",
  fBo = "com.anthropic.claude_code_browser_extension",
  MFl,
  Q7t = void 0,
  Z7t = false;
