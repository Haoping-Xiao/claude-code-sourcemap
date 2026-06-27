// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q7
// matched 2.1.88 source: src/ink/terminal.ts
// class=modified  jaccard=0.3441  score=0.4787  fileCov=0.5503
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module q7] deps: OM
p_ = {
  CURSOR_VISIBLE: 25,
  ALT_SCREEN: 47,
  ALT_SCREEN_CLEAR: 1049,
  MOUSE_NORMAL: 1000,
  MOUSE_BUTTON: 1002,
  MOUSE_ANY: 1003,
  MOUSE_SGR: 1006,
  FOCUS_EVENTS: 1004,
  BRACKETED_PASTE: 2004,
  THEME_NOTIFY: 2031,
  SYNCHRONIZED_UPDATE: 2026,
};
((hBt = RU(p_.SYNCHRONIZED_UPDATE)),
  (Oit = W7(p_.SYNCHRONIZED_UPDATE)),
  (RRn = RU(p_.BRACKETED_PASTE)),
  (LRn = W7(p_.BRACKETED_PASTE)),
  (M7r = RU(p_.FOCUS_EVENTS)),
  (yBt = W7(p_.FOCUS_EVENTS)),
  (r4i = RU(p_.THEME_NOTIFY)),
  (DRn = W7(p_.THEME_NOTIFY)),
  (A1 = RU(p_.CURSOR_VISIBLE)),
  (_W = W7(p_.CURSOR_VISIBLE)),
  (PRn = RU(p_.ALT_SCREEN_CLEAR)),
  (o4i = W7(p_.ALT_SCREEN_CLEAR)),
  (n4d = RU(p_.MOUSE_NORMAL) + RU(p_.MOUSE_BUTTON) + RU(p_.MOUSE_ANY) + RU(p_.MOUSE_SGR)),
  (r4d = RU(p_.MOUSE_NORMAL) + RU(p_.MOUSE_SGR)),
  (kce = W7(p_.MOUSE_SGR) + W7(p_.MOUSE_ANY) + W7(p_.MOUSE_BUTTON) + W7(p_.MOUSE_NORMAL)));
function isProgressReportingAvailable() {
  let e = fy()?.progressReporting;
  if (e !== void 0) return e;
  if (!process.stdout.isTTY) return false;
  if (process.env.WT_SESSION) return false;
  if (process.env.ConEmuANSI || process.env.ConEmuPID || process.env.ConEmuTask) return true;
  let t = a4i.coerce(process.env.TERM_PROGRAM_VERSION);
  if (!t) return false;
  if (process.env.TERM_PROGRAM === "ghostty") return aL(t.version, "1.2.0");
  if (process.env.TERM_PROGRAM === "iTerm.app") return aL(t.version, "3.6.6");
  return false;
}
function c4i(e) {
  l4i = e;
}
function isSynchronizedOutputSupported() {
  if (process.env.CLAUDE_BG_BACKEND === "daemon") return fy()?.syncOutput !== false;
  if (process.env.TMUX) return false;
  if (ut(process.env.CLAUDE_CODE_FORCE_SYNC_OUTPUT)) return true;
  let e = process.env.TERM_PROGRAM,
    t = process.env.TERM;
  if (
    e === "iTerm.app" ||
    e === "WezTerm" ||
    e === "WarpTerminal" ||
    e === "ghostty" ||
    e === "contour" ||
    e === "vscode" ||
    e === "alacritty" ||
    e === "mintty" ||
    e === "rio" ||
    e === "Tabby"
  )
    return true;
  if (E1.isJetBrainsIdeTerminal()) return true;
  if (parseInt(process.env.KONSOLE_VERSION ?? "", 10) >= 211200) return true;
  if (t?.includes("kitty") || process.env.KITTY_WINDOW_ID) return true;
  if (t === "xterm-ghostty") return true;
  if (t?.startsWith("foot")) return true;
  if (t?.includes("alacritty")) return true;
  if (process.env.ZED_TERM) return true;
  if (process.env.WT_SESSION) return true;
  let n = process.env.VTE_VERSION;
  if (n) {
    if (parseInt(n, 10) >= 6800) return true;
  }
  if (l4i) return true;
  return false;
}
function u4i() {
  if (Oe.CLAUDE_CODE_FORCE_STRIKETHROUGH) return true;
  let e = Oe.TERM;
  if (Oe.TERM_PROGRAM === "Apple_Terminal" || e === "linux") return false;
  return (
    o4d.has(Oe.TERM_PROGRAM ?? "") ||
    E1.isGhostty() ||
    E1.isMintty() ||
    E1.isJetBrainsIdeTerminal() ||
    Oe.LC_TERMINAL === "iTerm2" ||
    !!e?.includes("kitty") ||
    !!e?.includes("alacritty") ||
    !!e?.startsWith("foot") ||
    !!Oe.KITTY_WINDOW_ID ||
    !!Oe.ALACRITTY_LOG ||
    !!Oe.KONSOLE_VERSION ||
    !!Oe.WT_SESSION ||
    !!Oe.ZED_TERM ||
    parseInt(Oe.VTE_VERSION ?? "", 10) >= 4400
  );
}
function d4i(e) {
  MRn = e;
}
function _Bt() {
  return MRn;
}
function isXtermJs() {
  if (fy()?.isVscodeTerm) return true;
  if (process.env.TERM_PROGRAM === "vscode") return true;
  return MRn?.startsWith("xterm.js") ?? false;
}
function p4i() {
  return MRn?.toLowerCase().startsWith("ghostty") ?? false;
}
function i4d(e) {
  return s4d.includes(e ?? Oe.terminal ?? "");
}
function gne() {
  return i4d() ? Tce + IUi + xUi : "";
}
function Xke() {
  return PRn + Jx + dH + gne();
}
function H1() {
  return Tce + o4i + G_e;
}
function f4i() {
  return !!process.env.WT_SESSION;
}
function $7r() {
  if (process.env.CLAUDE_BG_BACKEND === "daemon") return false;
  return (
    isSynchronizedOutputSupported() &&
    process.env.ZELLIJ == null &&
    !E1.isJetBrainsIdeTerminal() &&
    !isXtermJs() &&
    Oe.WT_SESSION == null
  );
}
function writeDiffToTerminal(e, t, n = false, r) {
  let o = r !== void 0 && r > 1 ? r - 1 : void 0;
  if (t.length === 0) return;
  let s = !n,
    i = s ? hBt : "";
  for (let a of t)
    switch (a.type) {
      case "stdout":
        i += a.content;
        break;
      case "clear":
        if (a.count > 0) i += q0n(a.count);
        break;
      case "clearTerminal":
        i += a.altScreen ? L7r() : D7r(a.viewportRows);
        break;
      case "cursorHide":
        i += _W;
        break;
      case "cursorShow":
        i += A1;
        break;
      case "cursorMove":
        i += Hce(a.x, o !== void 0 ? Math.max(-o, Math.min(o, a.y)) : a.y);
        break;
      case "cursorTo":
        i += W0n(a.col);
        break;
      case "carriageReturn":
        i += "\r";
        break;
      case "hyperlink":
        i += Hit(a.uri);
        break;
      case "styleStr":
        i += a.str;
        break;
    }
  if (s) i += Oit;
  if (s4i) return;
  try {
    e.stdout.write(i);
  } catch (a) {
    if (l4d() && (i4i(a) === "EIO" || i4i(a) === "EPIPE")) {
      s4i = true;
      return;
    }
    throw a;
  }
}
function l4d() {
  return (a4d ??= process.env.CLAUDE_BG_BACKEND === "daemon");
}
function i4i(e) {
  return e && typeof e === "object" && "code" in e ? String(e.code) : void 0;
}
var a4i,
  l4i,
  o4d,
  MRn,
  s4d,
  yYh,
  $Rn,
  s4i = false,
  a4d;
