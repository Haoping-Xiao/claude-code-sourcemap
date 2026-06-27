// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oke
// matched 2.1.88 source: src/utils/browser.ts
// class=modified  jaccard=0.1779  score=0.2243  fileCov=0.4623
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var oke = E(() => {
  bwi();
  Vb();
  H1t();
  H1t();
  h8r();
  sL = class sL extends Error {
    constructor(e) {
      super(e ?? "Unauthorized");
    }
  };
});
function bRd(e) {
  let t;
  try {
    t = new URL(e);
  } catch (n) {
    throw Error(`Invalid URL format: ${e}`);
  }
  if (t.protocol !== "http:" && t.protocol !== "https:")
    throw Error(`Invalid URL protocol: must use http:// or https://, got ${t.protocol}`);
}
async function uIn(e) {
  try {
    let n = "xdg-open",
      { code: r } = await $n(n, [e]);
    return r === 0;
  } catch (t) {
    return false;
  }
}
async function SRd(e) {
  try {
    let { code: n } = await $n("dbus-send", [
      "--session",
      "--print-reply",
      "--dest=org.freedesktop.FileManager1",
      "--type=method_call",
      "/org/freedesktop/FileManager1",
      "org.freedesktop.FileManager1.ShowItems",
      `array:string:${cIn.pathToFileURL(e).href.replaceAll(",", "%2C")}`,
      "string:",
    ]);
    return n === 0;
  } catch (t) {
    return false;
  }
}
async function dIn(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return false;
  }
  let n = t.protocol;
  if (n === "file:") {
    if (t.host !== "") return false;
    try {
      return await SRd(cIn.fileURLToPath(e));
    } catch {
      return false;
    }
  }
  if (!w8r.has(n))
    return (
      T(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${n}`, {
        level: "warn",
      }),
      false
    );
  return Rwi(e);
}
function kwi() {
  if (!process.stdout.isTTY) return true;
  if (Oe.BROWSER && Oe.BROWSER !== "true") return false;
  if (Oe.SSH_CONNECTION) return true;
  return Vt() === "linux" && !Oe.DISPLAY && !Oe.WAYLAND_DISPLAY;
}
async function ac(e) {
  try {
    return (bRd(e), await Rwi(e));
  } catch (t) {
    return false;
  }
}
async function Rwi(e) {
  try {
    let t = fy()?.browser,
      n = t !== void 0 ? (t ?? void 0) : process.env.BROWSER,
      r = "linux";
    {
      let o = n || "xdg-open",
        { code: s } = await $n(o, [e]);
      return s === 0;
    }
  } catch (t) {
    return false;
  }
}
var cIn, w8r;
