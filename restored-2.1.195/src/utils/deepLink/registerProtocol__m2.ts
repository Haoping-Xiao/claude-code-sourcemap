// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kme
// matched 2.1.88 source: src/utils/deepLink/registerProtocol.ts
// class=modified (alt of src/utils/deepLink/registerProtocol.ts)  jaccard=0.0587  score=0.3802  fileCov=0.0649
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function zsm() {
  let e = iNe.join(Ore(), "claude");
  if (!process.execPath.startsWith(iNe.join(e, "versions") + iNe.sep)) return null;
  let t = iNe.join(e, "ClaudeCode.app", "Contents", "MacOS"),
    n = iNe.join(t, "claude");
  try {
    let r = (await qse.stat(process.execPath)).ino;
    (await qse.mkdir(t, {
      recursive: true,
    }),
      await qse.writeFile(
        iNe.join(t, "..", "Info.plist"),
        `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>CFBundleIdentifier</key><string>com.anthropic.claude-code</string><key>CFBundleName</key><string>Claude Code</string><key>CFBundleDisplayName</key><string>Claude Code</string><key>CFBundleExecutable</key><string>claude</string><key>CFBundlePackageType</key><string>APPL</string><key>LSUIElement</key><true/><key>NSMicrophoneUsageDescription</key><string>Claude Code uses the microphone for voice dictation.</string><key>NSAppleEventsUsageDescription</key><string>Claude Code needs to send Apple Events to open URLs and control applications you authorize.</string></dict></plist>
`,
      ));
    try {
      if ((await qse.stat(n)).ino === r) return n;
      await qse.unlink(n);
    } catch {}
    return (await qse.link(process.execPath, n), n);
  } catch {
    return null;
  }
}
async function luc() {
  if (Vt() !== "macos") return;
  if (process.env.CLAUDE_BG_TCC_DISCLAIMED) {
    delete process.env.CLAUDE_BG_TCC_DISCLAIMED;
    return;
  }
  let e = (await zsm()) ?? process.execPath;
  try {
    let t = require("bun:ffi"),
      { symbols: n } = t.dlopen("/usr/lib/libSystem.B.dylib", {
        posix_spawnattr_init: {
          args: ["ptr"],
          returns: "int",
        },
        posix_spawnattr_setflags: {
          args: ["ptr", "i16"],
          returns: "int",
        },
        posix_spawnattr_destroy: {
          args: ["ptr"],
          returns: "int",
        },
        responsibility_spawnattrs_setdisclaim: {
          args: ["ptr", "int"],
          returns: "int",
        },
        posix_spawn: {
          args: ["ptr", "ptr", "ptr", "ptr", "ptr", "ptr"],
          returns: "int",
        },
      }),
      r = new BigUint64Array(1);
    if (n.posix_spawnattr_init(r) !== 0) return;
    try {
      if (
        n.posix_spawnattr_setflags(r, 64) !== 0 ||
        n.responsibility_spawnattrs_setdisclaim(r, 1) !== 0
      )
        return;
      let s = [],
        i = (p) => {
          let f = Buffer.from(p + "\x00", "utf8");
          return (s.push(f), BigInt(t.ptr(f)));
        },
        a = (p) => {
          let f = new BigUint64Array(p.length + 1);
          return (p.forEach((m, g) => (f[g] = i(m))), f);
        },
        l = dm() ? [e] : [e, process.argv[1]],
        c = Buffer.from(e + "\x00", "utf8"),
        u = a([...l, ...process.argv.slice(2)]),
        d = a(
          Object.entries({
            ...process.env,
            CLAUDE_BG_TCC_DISCLAIMED: "1",
          }).flatMap(([p, f]) => (f === void 0 ? [] : [`${p}=${f}`])),
        );
      n.posix_spawn(null, c, null, r, u, d);
    } finally {
      n.posix_spawnattr_destroy(r);
    }
  } catch {}
}
var qse, iNe;
