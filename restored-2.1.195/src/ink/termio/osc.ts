// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bke
// matched 2.1.88 source: src/ink/termio/osc.ts
// class=modified  jaccard=0.2961  score=0.4815  fileCov=0.4348
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Bke]
E1 = new kUi();
function DUi() {
  return fy()?.terminal ?? Oe.terminal;
}
function BYr() {
  let e = fy();
  if (e) return e.mux;
  if (process.env.TMUX) return "tmux";
  if (process.env.STY) return "screen";
  return null;
}
function XNt() {
  return fy()?.ssh ?? !!process.env.SSH_CONNECTION;
}
function V0n() {
  let e = DUi();
  if (e === "Apple_Terminal") return "Fn";
  if (e === "iTerm.app") return "Option";
  if (fy()?.isVscodeTerm || (e && $Bd.has(e))) return Vt() === "macos" ? "Option" : "Shift";
  if (e && MBd.has(e)) return "Shift";
  if (process.env.LC_TERMINAL === "iTerm2") return "Option";
  return XNt() || BYr() !== null || Vt() === "macos"
    ? "Shift (Option in iTerm2, Fn in Terminal.app)"
    : "Shift";
}
function QS(...e) {
  let t = DUi() === "kitty" ? PBd : $M;
  return `${NYr}${e.join($ke)}${t}`;
}
function Qx(e) {
  let t = BYr();
  if (t === "tmux") return `\x1BPtmux;${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  if (t === "screen") return `\x1BP${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  return e;
}
function JNt() {
  if (!XNt())
    switch (Vt()) {
      case "macos":
      case "windows":
      case "wsl":
        return "native";
      case "linux":
        if (typeof sne === "string") return "native";
        break;
    }
  if (process.env.TMUX) return "tmux-buffer";
  return "osc52";
}
async function UYr() {
  if (Vt() !== "linux" || typeof sne === "string") return;
  if (process.env.WAYLAND_DISPLAY && (await Gf("wl-copy"))) {
    sne = "wl-copy";
    return;
  }
  if (process.env.DISPLAY) {
    if (await Gf("xclip")) {
      sne = "xclip";
      return;
    }
    if (await Gf("xsel")) {
      sne = "xsel";
      return;
    }
  }
  sne = null;
}
function OBd(e) {
  return /[^\x00-\x7f]/.test(e);
}
function z0n(e) {
  if (!E1.hasOsc52ClipboardUtf8Bug() || !OBd(e)) return null;
  return "VS Code 1.123/1.124 will mojibake this paste \u2014 update to \u22651.125";
}
async function NBd(e) {
  if (!process.env.TMUX) return false;
  let t = {
      input: e,
      useCwd: false,
      timeout: 2000,
    },
    n = process.env.LC_TERMINAL ?? "unset",
    { code: r } = await $n("tmux", ["load-buffer", "-w", "-"], t);
  if ((T(`clipboard: tmux load-buffer -w - \u2192 exit ${r} (LC_TERMINAL=${n})`), r === 0))
    return true;
  let o = await $n("tmux", ["load-buffer", "-"], t);
  return (
    T(`clipboard: retry tmux load-buffer - \u2192 exit ${o.code} (LC_TERMINAL=${n})`),
    o.code === 0
  );
}
async function AI(e) {
  let t = OYr.Buffer.from(e, "utf8").toString("base64");
  if (!XNt()) PUi(e);
  await NBd(e);
  let n = BYr(),
    r = XNt(),
    o = `${l8}]52;c;${t}${$M}`,
    s = n === "tmux" ? "raw+dcs" : n === "screen" ? "dcs" : "raw";
  if (
    (T(
      `clipboard: setClipboard mux=${n ?? "none"} ssh=${r} native=${!r} predicted=${JNt()} emit=${s} bytes=${e.length}`,
    ),
    n === "tmux")
  )
    return o + Qx(o);
  if (n === "screen") return Qx(o);
  return QS(wy.CLIPBOARD, "c", t);
}
function PUi(e) {
  let t = {
    input: e,
    useCwd: false,
    timeout: 2000,
  };
  switch (Vt()) {
    case "macos":
      $n("pbcopy", [], t);
      return;
    case "linux":
      if (typeof sne !== "string")
        UYr().then(() => {
          if (typeof sne === "string") PUi(e);
        });
      else if (sne === "wl-copy") ($n("wl-copy", [], t), $n("wl-copy", ["--primary"], t));
      else if (sne === "xclip")
        ($n("xclip", ["-selection", "clipboard"], t), $n("xclip", ["-selection", "primary"], t));
      else if (sne === "xsel")
        ($n("xsel", ["--clipboard", "--input"], t), $n("xsel", ["--primary", "--input"], t));
      return;
    case "wsl": {
      $n("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", RUi], t);
      return;
    }
    case "windows": {
      $n("powershell", ["-NoProfile", "-NonInteractive", "-Command", RUi], t);
      return;
    }
  }
}
async function QNt(e = "clipboard") {
  if (XNt()) return "";
  let t = {
    useCwd: false,
    timeout: 2000,
  };
  switch (Vt()) {
    case "macos": {
      let n = await $n("pbpaste", [], t);
      return n.code === 0 ? n.stdout : "";
    }
    case "windows":
    case "wsl": {
      let n = await $n(
        Vt() === "wsl" ? "powershell.exe" : "powershell",
        ["-NoProfile", "-NonInteractive", "-Command", BBd],
        t,
      );
      return n.code === 0
        ? n.stdout
            .replace(
              /\r\n/g,
              `
`,
            )
            .replace(/\n$/, "")
        : "";
    }
    case "linux": {
      let n = e === "primary",
        r = [
          ["wl-paste", n ? ["--primary", "--no-newline"] : ["--no-newline"]],
          ["xclip", ["-selection", n ? "primary" : "clipboard", "-o"]],
          ["xsel", [n ? "--primary" : "--clipboard", "--output"]],
        ];
      for (let [o, s] of r) {
        let i = await $n(o, [...s], t);
        if (i.code === 0) return i.stdout;
      }
      return "";
    }
    default:
      return "";
  }
}
function MUi(e) {
  let t = e.indexOf(";"),
    n = t >= 0 ? e.slice(0, t) : e,
    r = t >= 0 ? e.slice(t + 1) : "",
    o = parseInt(n, 10);
  if (o === wy.SET_TITLE_AND_ICON)
    return {
      type: "title",
      action: {
        type: "both",
        title: r,
      },
    };
  if (o === wy.SET_ICON)
    return {
      type: "title",
      action: {
        type: "iconName",
        name: r,
      },
    };
  if (o === wy.SET_TITLE)
    return {
      type: "title",
      action: {
        type: "windowTitle",
        title: r,
      },
    };
  if (o === wy.HYPERLINK) {
    let s = r.split(";"),
      i = s[0] ?? "",
      a = s.slice(1).join(";");
    if (a === "")
      return {
        type: "link",
        action: {
          type: "end",
        },
      };
    let l = {};
    if (i)
      for (let c of i.split(":")) {
        let u = c.indexOf("=");
        if (u >= 0) l[c.slice(0, u)] = c.slice(u + 1);
      }
    return {
      type: "link",
      action: {
        type: "start",
        url: a,
        params: Object.keys(l).length > 0 ? l : void 0,
      },
    };
  }
  if (o === wy.TAB_STATUS)
    return {
      type: "tabStatus",
      action: UBd(r),
    };
  return {
    type: "unknown",
    sequence: `\x1B]${e}`,
  };
}
function LUi(e) {
  let t = e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (t)
    return {
      type: "rgb",
      r: parseInt(t[1], 16),
      g: parseInt(t[2], 16),
      b: parseInt(t[3], 16),
    };
  let n = e.match(/^rgb:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})$/i);
  if (n) {
    let r = (o) => Math.round((parseInt(o, 16) / (16 ** o.length - 1)) * 255);
    return {
      type: "rgb",
      r: r(n[1]),
      g: r(n[2]),
      b: r(n[3]),
    };
  }
  return null;
}
function UBd(e) {
  let t = {};
  for (let [n, r] of FBd(e))
    switch (n) {
      case "indicator":
        t.indicator = r === "" ? null : LUi(r);
        break;
      case "status":
        t.status = r === "" ? null : r;
        break;
      case "status-color":
        t.statusColor = r === "" ? null : LUi(r);
        break;
    }
  return t;
}
function* FBd(e) {
  let t = "",
    n = "",
    r = false,
    o = false;
  for (let s of e)
    if (o) {
      if (r) n += s;
      else t += s;
      o = false;
    } else if (s === "\\") o = true;
    else if (s === ";") (yield [t, n], (t = ""), (n = ""), (r = false));
    else if (s === "=" && !r) r = true;
    else if (r) n += s;
    else t += s;
  if (t || r) yield [t, n];
}
function Hit(e, t) {
  if (!e) return J3e;
  let n = {
      id: jBd(e),
      ...t,
    },
    r = Object.entries(n)
      .map(([o, s]) => `${o}=${s}`)
      .join(":");
  return QS(wy.HYPERLINK, r, e);
}
function jBd(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = ((t << 5) - t + e.charCodeAt(n)) | 0;
  return (t >>> 0).toString(36);
}
function eGe() {
  return false;
}
function OUi(e) {
  let t = [],
    n = (r) =>
      r.type === "rgb"
        ? `#${[r.r, r.g, r.b].map((o) => o.toString(16).padStart(2, "0")).join("")}`
        : "";
  if ("indicator" in e) t.push(`indicator=${e.indicator ? n(e.indicator) : ""}`);
  if ("status" in e)
    t.push(`status=${e.status?.replaceAll("\\", "\\\\").replaceAll(";", "\\;") ?? ""}`);
  if ("statusColor" in e) t.push(`status-color=${e.statusColor ? n(e.statusColor) : ""}`);
  return QS(wy.TAB_STATUS, t.join(";"));
}
function NUi(e) {
  let t = OYr.Buffer.from(JSON.stringify(e)).toString("base64");
  return QS(wy.ITERM2_PROPRIETARY, `SetProfileProperty=Initial Text=${t}`);
}
var OYr,
  NYr,
  PBd,
  MBd,
  $Bd,
  sne,
  RUi =
    "[Console]::InputEncoding = [Text.Encoding]::UTF8; Set-Clipboard -Value ([Console]::In.ReadToEnd())",
  BBd = "[Console]::OutputEncoding = [Text.Encoding]::UTF8; Get-Clipboard -Raw",
  wy,
  J3e,
  Q3e,
  Z3e,
  K0n,
  $Ui,
  Y0n,
  GBd;
