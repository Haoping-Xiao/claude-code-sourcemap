// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MOl
// matched 2.1.88 source: src/utils/screenshotClipboard.ts
// class=modified  jaccard=0.3733  score=0.6058  fileCov=0.493
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MOl] deps: marked/lib/marked.esm.js, upstreamproxy/relay.ts
((Wtr = require("zlib")), (tNo = Mfe * jOe));
kOl = WDf();
ROl = qDf();
YDf = {
  9617: 0.25,
  9618: 0.5,
  9619: 0.75,
  9608: 1,
};
((QDf = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), (ZDf = ePf()));
async function copyAnsiToClipboard(ansiText, options) {
  try {
    let n = nNo.join(qE(), "screenshots");
    await fEt.mkdir(n, {
      recursive: true,
      mode: 448,
    });
    let r = nNo.join(n, `screenshot-${Date.now()}.png`),
      { ansiToPng: o } = await Promise.resolve().then(() => (MOl(), POl)),
      s = o(ansiText, options);
    await fEt.writeFile(r, s);
    let i;
    try {
      i = await copyPngToClipboard(r);
    } catch (a) {
      return (
        ke(a),
        Le("clipboard_write", "copy_failed"),
        {
          success: false,
          message: `Failed to copy screenshot: ${a instanceof Error ? a.message : "Unknown error"}`,
        }
      );
    } finally {
      await fEt.unlink(r).catch(() => {});
    }
    if (i.success) xe("clipboard_write");
    else Le("clipboard_write", "copy_failed");
    return i;
  } catch (n) {
    return (
      ke(n),
      Le("clipboard_write", "render_failed"),
      {
        success: false,
        message: `Failed to copy screenshot: ${n instanceof Error ? n.message : "Unknown error"}`,
      }
    );
  }
}
async function copyPngToClipboard(pngPath) {
  let t = Vt();
  if (t === "macos") {
    let r = `set the clipboard to (read (POSIX file "${pngPath.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}") as \xABclass PNGf\xBB)`,
      o = await Gr("osascript", ["-e", r], {
        timeout: 5000,
      });
    if (o.code === 0)
      return {
        success: true,
        message: "Screenshot copied to clipboard",
      };
    return {
      success: false,
      message: `Failed to copy to clipboard: ${o.stderr}`,
    };
  }
  if (t === "linux") {
    if ((await rPf("xclip", ["-selection", "clipboard", "-t", "image/png", "-i", pngPath])) === 0)
      return {
        success: true,
        message: "Screenshot copied to clipboard",
      };
    return {
      success: false,
      message: "Failed to copy to clipboard. Please install xclip: sudo apt install xclip",
    };
  }
  if (t === "windows") {
    let n = `Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Clipboard]::SetImage([System.Drawing.Image]::FromFile(${Fat(pngPath, "the screenshot temp path (override with CLAUDE_CODE_TMPDIR)")}))`,
      r = await Gr("powershell", ["-NoProfile", "-Command", n], {
        timeout: 5000,
      });
    if (r.code === 0)
      return {
        success: true,
        message: "Screenshot copied to clipboard",
      };
    return {
      success: false,
      message: `Failed to copy to clipboard: ${r.stderr}`,
    };
  }
  return {
    success: false,
    message: `Screenshot to clipboard is not supported on ${t}`,
  };
}
function rPf(e, t, n = 5000) {
  return new Promise((r) => {
    let o;
    try {
      o = $Ol.spawn(e, t, {
        cwd: void 0,
        detached: true,
        stdio: "ignore",
        windowsHide: true,
      });
    } catch {
      r(null);
      return;
    }
    let s = false;
    function i(l) {
      if (s) return;
      ((s = true), clearTimeout(a), r(l));
    }
    let a = setTimeout(() => {
      (o.kill("SIGKILL"), i(null));
    }, n);
    (o.once("exit", (l) => i(l)), o.once("error", () => i(null)), o.unref());
  });
}
var $Ol, fEt, nNo;
