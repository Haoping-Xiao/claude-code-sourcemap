// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zdr
// matched 2.1.88 source: src/utils/deepLink/registerProtocol.ts
// class=modified  jaccard=0.4895  score=0.9024  fileCov=0.5168
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Zdr] deps: cDe
qgm = /^[\w.-]+\/[\w.-]+$/;
function epr() {
  return Qse.join(Ore(), "applications", xSc);
}
function RSc(e) {
  return `Exec="${e}" --handle-uri %u`;
}
function LSc(e) {
  return `"${e}" --handle-uri "%1"`;
}
async function Kgm(e) {
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
  <string>${Szo}</string>
  <key>CFBundleName</key>
  <string>${Ezo}</string>
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
    await lV.promises.symlink(e, _zo),
    await $n(
      "/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",
      ["-R", zen],
      {
        useCwd: false,
      },
    ),
    T(`Registered ${aV}:// protocol handler at ${zen}`));
}
async function Ygm(e) {
  await lV.promises.mkdir(Qse.dirname(epr()), {
    recursive: true,
  });
  let t = `[Desktop Entry]
Name=${Ezo}
Comment=Handle ${aV}:// deep links for Claude Code
${RSc(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${aV};
`;
  await lV.promises.writeFile(epr(), t);
  let n = await Gf("xdg-mime");
  if (n) {
    let { code: r } = await $n(n, ["default", xSc, `x-scheme-handler/${aV}`], {
      useCwd: false,
    });
    if (r !== 0)
      throw Object.assign(Error(`xdg-mime exited with code ${r}`), {
        code: "XDG_MIME_FAILED",
      });
  }
  T(`Registered ${aV}:// protocol handler at ${epr()}`);
}
async function Xgm(e) {
  for (let t of [
    ["add", bzo, "/ve", "/d", `URL:${Ezo}`, "/f"],
    ["add", bzo, "/v", "URL Protocol", "/d", "", "/f"],
    ["add", kSc, "/ve", "/d", LSc(e), "/f"],
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
      await Kgm(t);
      break;
    case "linux":
      await Ygm(t);
      break;
    case "win32":
      await Xgm(t);
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
        return (await lV.promises.readFile(epr(), "utf8")).includes(RSc(e));
      case "win32": {
        let { stdout: t, code: n } = await $n("reg", ["query", kSc, "/ve"], {
          useCwd: false,
        });
        return n === 0 && t.includes(LSc(e));
      }
      default:
        return false;
    }
  } catch {
    return false;
  }
}
async function PSc() {
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
  Szo = "com.anthropic.claude-code-url-handler",
  Ezo = "Claude Code URL Handler",
  xSc = "claude-code-url-handler.desktop",
  Vgm = "Claude Code URL Handler.app",
  zen,
  _zo,
  bzo,
  kSc,
  zgm = 86400000;
