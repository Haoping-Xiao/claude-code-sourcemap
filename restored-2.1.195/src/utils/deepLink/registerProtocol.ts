// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zdr
// matched 2.1.88 source: src/utils/deepLink/registerProtocol.ts
// class=modified  jaccard=0.4895  score=0.9024  fileCov=0.5168
// note: deminified; 11 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Zdr] deps: cDe
qgm = /^[\w.-]+\/[\w.-]+$/;
function linuxDesktopPath() {
  return Qse.join(Ore(), "applications", DESKTOP_FILE_NAME);
}
function linuxExecLine(claudePath) {
  return `Exec="${claudePath}" --handle-uri %u`;
}
function windowsCommandValue(claudePath) {
  return `"${claudePath}" --handle-uri "%1"`;
}
async function registerMacos(claudePath) {
  let t = Qse.join(zen, "Contents");
  try {
    await lV.promises.rm(zen, {
      recursive: true,
    });
  } catch (o) {
    if (on(o) !== "ENOENT") throw o;
  }
  await lV.promises.mkdir(Qse.dirname(_zo), {
    recursive: true,
  });
  let n = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${MACOS_BUNDLE_ID}</string>
  <key>CFBundleName</key>
  <string>${APP_NAME}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${aV}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  (await lV.promises.writeFile(Qse.join(t, "Info.plist"), n),
    await lV.promises.symlink(claudePath, _zo),
    await $n(
      "/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",
      ["-R", zen],
      {
        useCwd: false,
      },
    ),
    T(`Registered ${aV}:// protocol handler at ${zen}`));
}
async function registerLinux(claudePath) {
  await lV.promises.mkdir(Qse.dirname(linuxDesktopPath()), {
    recursive: true,
  });
  let t = `[Desktop Entry]
Name=${APP_NAME}
Comment=Handle ${aV}:// deep links for Claude Code
${linuxExecLine(claudePath)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${aV};
`;
  await lV.promises.writeFile(linuxDesktopPath(), t);
  let n = await Gf("xdg-mime");
  if (n) {
    let { code: r } = await $n(n, ["default", DESKTOP_FILE_NAME, `x-scheme-handler/${aV}`], {
      useCwd: false,
    });
    if (r !== 0)
      throw Object.assign(Error(`xdg-mime exited with code ${r}`), {
        code: "XDG_MIME_FAILED",
      });
  }
  T(`Registered ${aV}:// protocol handler at ${linuxDesktopPath()}`);
}
async function registerWindows(claudePath) {
  for (let t of [
    ["add", bzo, "/ve", "/d", `URL:${APP_NAME}`, "/f"],
    ["add", bzo, "/v", "URL Protocol", "/d", "", "/f"],
    ["add", kSc, "/ve", "/d", windowsCommandValue(claudePath), "/f"],
  ]) {
    let { code: n } = await $n("reg", t, {
      useCwd: false,
    });
    if (n !== 0)
      throw Object.assign(Error(`reg add exited with code ${n}`), {
        code: "REG_FAILED",
      });
  }
  T(`Registered ${aV}:// protocol handler in Windows registry`);
}
async function Jgm(e) {
  let t = e ?? (await DSc());
  switch ("linux") {
    case "darwin":
      await registerMacos(t);
      break;
    case "linux":
      await registerLinux(t);
      break;
    case "win32":
      await registerWindows(t);
      break;
    default:
      throw Error("Unsupported platform: linux");
  }
}
async function DSc() {
  let t = Qse.join(Sde(), "claude");
  try {
    return (await lV.promises.realpath(t), t);
  } catch {
    return process.execPath;
  }
}
async function Qgm(e) {
  try {
    switch ("linux") {
      case "darwin":
        return (await lV.promises.readlink(_zo)) === e;
      case "linux":
        return (await lV.promises.readFile(linuxDesktopPath(), "utf8")).includes(linuxExecLine(e));
      case "win32": {
        let { stdout: t, code: n } = await $n("reg", ["query", kSc, "/ve"], {
          useCwd: false,
        });
        return n === 0 && t.includes(windowsCommandValue(e));
      }
      default:
        return false;
    }
  } catch {
    return false;
  }
}
async function ensureDeepLinkProtocolRegistered() {
  if (Dr().disableDeepLinkRegistration === "disable") return;
  if (!["darwin", "linux", "win32"].includes("linux")) return;
  let e = await DSc();
  if (await Qgm(e)) return;
  let t = Qse.join(tr(), ".deep-link-register-failed");
  try {
    let n = await lV.promises.stat(t);
    if (Date.now() - n.mtimeMs < zgm) return;
  } catch {}
  try {
    (await Jgm(e),
      xe("deep_link_register"),
      T("Auto-registered claude-cli:// deep link protocol handler"),
      await lV.promises
        .rm(t, {
          force: true,
        })
        .catch(() => {}));
  } catch (n) {
    let r = xd(n);
    if (
      (Le("deep_link_register", r ?? "register_failed"),
      T(
        `Failed to auto-register deep link protocol handler: ${n instanceof Error ? n.message : String(n)}`,
        {
          level: "warn",
        },
      ),
      r === "EACCES" || r === "ENOSPC")
    )
      await lV.promises.writeFile(t, "").catch(() => {});
  }
}
var lV,
  ISc,
  Qse,
  MACOS_BUNDLE_ID = "com.anthropic.claude-code-url-handler",
  APP_NAME = "Claude Code URL Handler",
  DESKTOP_FILE_NAME = "claude-code-url-handler.desktop",
  MACOS_APP_NAME = "Claude Code URL Handler.app",
  zen,
  _zo,
  bzo,
  kSc,
  zgm = 86400000;
