// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rit
// matched 2.1.88 source: src/ink/colorize.ts
// class=modified  jaccard=0.7699  score=0.8658  fileCov=0.8742
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Rit]
mRn = new Set();
function o2i(e) {
  let t = process.argv.indexOf("--");
  return (t === -1 ? process.argv : process.argv.slice(0, t)).some((r) => e.has(r));
}
function JUd() {
  if (process.env.NO_COLOR && process.env.FORCE_COLOR === void 0 && !XUd() && wt.level > 0)
    return ((wt.level = 0), true);
  return false;
}
function QUd() {
  if (process.env.TERM_PROGRAM === "vscode" && wt.level === 2) return ((wt.level = 3), true);
  return false;
}
function eFd() {
  if (!process.stdout.isTTY || process.env.NO_COLOR || process.env.FORCE_COLOR !== void 0 || YUd())
    return false;
  let e = process.env.TERM;
  if (e && ZUd.has(e) && wt.level < 3) return ((wt.level = 3), true);
  return false;
}
function tFd() {
  if (process.env.CLAUDE_CODE_TMUX_TRUECOLOR) return false;
  if (process.env.TMUX && wt.level > 2) return ((wt.level = 2), true);
  return false;
}
function s2i(e) {
  if (e && wt.level > 2) return ((wt.level = 2), true);
  return false;
}
function oGe(e) {
  return "\x1B[7m" + e + "\x1B[27m";
}
function hRn() {
  return i2i;
}
function a2i(e) {
  let t = e !== void 0 && e < r2i ? e : r2i;
  if (t !== wt.level) ((wt.level = t), i2i++);
}
function l2i(e) {
  if (wt.level >= 3 || e.length === 0) return e;
  let t;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      o = nFd.exec(r.code);
    if (o)
      ((t ??= e.slice(0, n)),
        t.push({
          type: "ansi",
          code: `\x1B[${o[1]};5;${rFd(+o[2], +o[3], +o[4])}m`,
          endCode: r.endCode,
        }));
    else if (t) t.push(r);
  }
  return t ?? e;
}
function rFd(e, t, n) {
  let r = (y) => (y < 48 ? 0 : y < 115 ? 1 : y < 155 ? 2 : y < 195 ? 3 : y < 235 ? 4 : 5),
    o = r(e),
    s = r(t),
    i = r(n),
    a = 16 + 36 * o + 6 * s + i,
    l = Math.round((e + t + n) / 3);
  if (l < 5) return 16;
  if (l > 244 && o === s && s === i) return a;
  let c = Math.max(0, Math.min(23, Math.round((l - 8) / 10))),
    u = 232 + c,
    d = 8 + c * 10,
    p = p7r[o],
    f = p7r[s],
    m = p7r[i],
    g = (e - p) ** 2 + (t - f) ** 2 + (n - m) ** 2;
  return (e - d) ** 2 + (t - d) ** 2 + (n - d) ** 2 < g ? u : a;
}
function applyTextStyles(text, styles) {
  let n = text;
  if (styles.inverse) n = oGe(n);
  if (styles.strikethrough) n = wt.strikethrough(n);
  if (styles.underline) n = wt.underline(n);
  if (styles.italic) n = wt.italic(n);
  if (styles.bold) n = wt.bold(n);
  if (styles.dim) n = wt.dim(n);
  if (styles.color) n = colorize(n, styles.color, "foreground");
  if (styles.backgroundColor) n = colorize(n, styles.backgroundColor, "background");
  return n;
}
function V_e(e, t) {
  if (!t) return e;
  return colorize(e, t, "foreground");
}
var zUd,
  KUd,
  YUd = () => o2i(zUd),
  XUd = () => o2i(KUd),
  ZUd,
  nKh,
  rKh,
  oKh,
  sKh,
  r2i,
  i2i = 0,
  nFd,
  p7r,
  oFd,
  sFd,
  colorize = (str, color, type) => {
    if (!color) return str;
    if (color.startsWith("ansi:"))
      switch (color.substring(5)) {
        case "black":
          return type === "foreground" ? wt.black(str) : wt.bgBlack(str);
        case "red":
          return type === "foreground" ? wt.red(str) : wt.bgRed(str);
        case "green":
          return type === "foreground" ? wt.green(str) : wt.bgGreen(str);
        case "yellow":
          return type === "foreground" ? wt.yellow(str) : wt.bgYellow(str);
        case "blue":
          return type === "foreground" ? wt.blue(str) : wt.bgBlue(str);
        case "magenta":
          return type === "foreground" ? wt.magenta(str) : wt.bgMagenta(str);
        case "cyan":
          return type === "foreground" ? wt.cyan(str) : wt.bgCyan(str);
        case "white":
          return type === "foreground" ? wt.white(str) : wt.bgWhite(str);
        case "blackBright":
          return type === "foreground" ? wt.blackBright(str) : wt.bgBlackBright(str);
        case "redBright":
          return type === "foreground" ? wt.redBright(str) : wt.bgRedBright(str);
        case "greenBright":
          return type === "foreground" ? wt.greenBright(str) : wt.bgGreenBright(str);
        case "yellowBright":
          return type === "foreground" ? wt.yellowBright(str) : wt.bgYellowBright(str);
        case "blueBright":
          return type === "foreground" ? wt.blueBright(str) : wt.bgBlueBright(str);
        case "magentaBright":
          return type === "foreground" ? wt.magentaBright(str) : wt.bgMagentaBright(str);
        case "cyanBright":
          return type === "foreground" ? wt.cyanBright(str) : wt.bgCyanBright(str);
        case "whiteBright":
          return type === "foreground" ? wt.whiteBright(str) : wt.bgWhiteBright(str);
      }
    if (color.startsWith("#"))
      return type === "foreground" ? wt.hex(color)(str) : wt.bgHex(color)(str);
    if (color.startsWith("ansi256")) {
      let r = sFd.exec(color);
      if (!r) return str;
      let o = Number(r[1]);
      return type === "foreground" ? wt.ansi256(o)(str) : wt.bgAnsi256(o)(str);
    }
    if (color.startsWith("rgb")) {
      let r = oFd.exec(color);
      if (!r) return str;
      let o = Number(r[1]),
        s = Number(r[2]),
        i = Number(r[3]);
      return type === "foreground" ? wt.rgb(o, s, i)(str) : wt.bgRgb(o, s, i)(str);
    }
    return str;
  };
