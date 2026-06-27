// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bUt
// matched 2.1.88 source: src/utils/imagePaste.ts
// class=modified  jaccard=0.0628  score=0.1694  fileCov=0.0907
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bUt] deps: utils/errors.ts
X8d = /[\u2018-\u201F]/;
function getClipboardCommands() {
  let t = qE(),
    n = "claude_cli_latest_screenshot.png",
    r = {
      darwin: Wce.join(t, "claude_cli_latest_screenshot.png"),
      linux: Wce.join(t, "claude_cli_latest_screenshot.png"),
      win32: Wce.join(t, "claude_cli_latest_screenshot.png"),
    },
    o = r.linux || r.linux,
    s = ja([o]),
    a = `set fp to open for access POSIX file ${`"${o.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`} with write permission`,
    l = "",
    c = Vt() === "wsl",
    u =
      '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"',
    d = c
      ? ` || "$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }' 2>/dev/null`
      : "",
    p = c
      ? ` 2>/dev/null || "$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; $i = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $i) { exit 1 }; $ms = New-Object System.IO.MemoryStream; $i.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png); [Convert]::ToBase64String($ms.ToArray())' 2>/dev/null | tr -d '\\r' | base64 -d > ${s}`
      : "",
    f = {
      darwin: {
        checkImage: "osascript -e 'the clipboard as \xABclass PNGf\xBB'",
        saveImage: `osascript -e 'set png_data to (the clipboard as \xABclass PNGf\xBB)' -e ${ja([a])} -e 'write png_data to fp' -e 'close access fp'`,
        getPath: SUt.darwin,
        deleteFile: `rm -f -- ${s}`,
      },
      linux: {
        checkImage: `xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"${d}`,
        saveImage: `xclip -selection clipboard -t image/png -o > ${s} 2>/dev/null || wl-paste --type image/png > ${s} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${s} 2>/dev/null || wl-paste --type image/bmp > ${s}${p}`,
        getPath: SUt.linux,
        deleteFile: `rm -f -- ${s}`,
      },
      win32: {
        checkImage: [
          "powershell",
          "-NoProfile",
          "-NonInteractive",
          "-Sta",
          "-Command",
          "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }",
        ],
        saveImage: [
          "powershell",
          "-NoProfile",
          "-NonInteractive",
          "-Sta",
          "-Command",
          "Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(, [System.Drawing.Imaging.ImageFormat]::Png)",
        ],
        getPath: SUt.win32,
        deleteFile: ["powershell", "-NoProfile", "-Command", "Remove-Item -Force -LiteralPath "],
      },
    };
  return {
    commands: f.linux || f.linux,
    screenshotPath: o,
  };
}
async function CDn(e) {
  if (typeof e === "string")
    return S0(e, {
      reject: false,
    });
  let [t, ...n] = e;
  return pv(t, n, {
    reject: false,
  });
}
async function g8i() {
  return false;
}
async function k0e(e) {
  let t;
  try {
    t = getClipboardCommands();
  } catch (o) {
    return (ke(o), Le("clipboard_read", "construct_failed"), null);
  }
  let { commands: n, screenshotPath: r } = t;
  try {
    if ((await CDn(n.checkImage)).exitCode !== 0) return null;
    if (
      (await qt().mkdir(Wce.dirname(r), {
        mode: 448,
      }),
      (await CDn(n.saveImage)).exitCode !== 0)
    )
      return (Le("clipboard_read", "save_failed"), null);
    let i = qt().readFileBytesSync(r);
    if (i.length >= 2 && i[0] === 66 && i[1] === 77) i = await (await lbe())(i).png().toBuffer();
    let a = await x0e(i, i.length, "png", e),
      l = a.buffer.toString("base64"),
      c = TDn(l);
    return (
      CDn(n.deleteFile),
      xe("clipboard_read"),
      {
        base64: l,
        mediaType: c,
        dimensions: a.dimensions,
      }
    );
  } catch {
    return (Le("clipboard_read", "read_failed"), null);
  }
}
async function Q8d() {
  try {
    let t = SUt.linux || SUt.linux,
      n = await CDn(t);
    if (n.exitCode !== 0 || !n.stdout) return null;
    return n.stdout.trim();
  } catch (e) {
    return (
      T(`Failed to read image path from clipboard: ${e instanceof Error ? e.message : String(e)}`, {
        level: "error",
      }),
      null
    );
  }
}
function h8i(e) {
  if ((e.startsWith('"') && e.endsWith('"')) || (e.startsWith("'") && e.endsWith("'")))
    return e.slice(1, -1);
  return e;
}
function stripBackslashEscapes(path) {
  if (Vt() === "wsl" && y8i.test(path)) return path;
  let r = `__DOUBLE_BACKSLASH_${m8i.randomBytes(8).toString("hex")}__`;
  return path.replaceAll("\\\\", r).replace(/\\(.)/g, "$1").replace(new RegExp(r, "g"), "\\");
}
function GQr(e) {
  let t = h8i(e.trim()),
    n = stripBackslashEscapes(t);
  return IDn.test(n);
}
function Z8d(e) {
  let t = h8i(e.trim()),
    n = stripBackslashEscapes(t);
  if (IDn.test(n)) return n;
  return null;
}
async function tryReadImageFromPath(text, t) {
  let n = Z8d(text);
  if (!n) return null;
  let r = n;
  if (Vt() === "wsl" && y8i.test(r)) r = await new I0e(process.env.WSL_DISTRO_NAME).toLocalPath(r);
  let o;
  try {
    if (Wce.isAbsolute(r)) o = qt().readFileBytesSync(r);
    else {
      let c = await Q8d();
      if (c && r === Wce.basename(c)) o = qt().readFileBytesSync(c);
    }
  } catch (c) {
    return (
      T(`Failed to read pasted image file ${r}: ${c instanceof Error ? c.message : String(c)}`, {
        level: "error",
      }),
      null
    );
  }
  if (!o) return null;
  if (o.length === 0)
    return (
      T(`Image file is empty: ${r}`, {
        level: "warn",
      }),
      null
    );
  if (o.length >= 2 && o[0] === 66 && o[1] === 77) o = await (await lbe())(o).png().toBuffer();
  let s = oX(o);
  if (s === null)
    return (
      T(`Pasted path has image extension but content is not a supported image: ${r}`, {
        level: "warn",
      }),
      null
    );
  let i = s.split("/")[1] || "png",
    resized = await x0e(o, o.length, i, t),
    l = resized.buffer.toString("base64");
  return {
    path: r,
    base64: l,
    mediaType: s,
    dimensions: resized.dimensions,
  };
}
function S8i(e) {
  if (e.includes("\x00")) return true;
  let t = e.slice(0, 4096);
  if (t.length < 32) return false;
  let n = 0;
  for (let r of t) if (r === "\uFFFD") n++;
  return n / t.length > 0.05;
}
var m8i,
  Wce,
  LGe = 800,
  SUt,
  IDn,
  y8i;
