// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rx
// matched 2.1.88 source: src/utils/env.ts
// class=modified (alt of src/utils/env.ts)  jaccard=0.1974  score=0.4109  fileCov=0.2754
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Rx] deps: axios/lib/axios.js, utils/nativeInstaller/download.ts, axios/lib/axios.js
lb = {
  get(e, t) {
    return (IZe(e, t), po.get(e, t));
  },
  head(e, t) {
    return (IZe(e, t), po.head(e, t));
  },
  post(e, t, n) {
    return (IZe(e, n), po.post(e, t, n));
  },
  put(e, t, n) {
    return (IZe(e, n), po.put(e, t, n));
  },
  patch(e, t, n) {
    return (IZe(e, n), po.patch(e, t, n));
  },
  delete(e, t) {
    return (IZe(e, t), po.delete(e, t));
  },
};
async function pEu() {
  return null;
}
async function xZe(e) {
  try {
    return !!(await Gf(e));
  } catch {
    return false;
  }
}
function isConductor() {
  return process.env.__CFBundleIdentifier === "com.conductor.app";
}
function ikr(e) {
  let t = e.toLowerCase();
  return (
    t.includes("windsurf") ||
    t.includes("devin.app") ||
    t.includes("devin desktop") ||
    t.includes("devin-desktop") ||
    /appdata[\\/]local[\\/](programs[\\/])?devin[\\/]/.test(t)
  );
}
function detectTerminal() {
  if (process.env.CURSOR_TRACE_ID) return "cursor";
  let e = process.env.VSCODE_GIT_ASKPASS_MAIN?.toLowerCase() ?? "";
  if (e.includes("cursor")) return "cursor";
  if (ikr(e)) return "windsurf";
  if (e.includes("antigravity")) return "antigravity";
  let t = process.env.__CFBundleIdentifier?.toLowerCase();
  if (t?.includes("vscodium")) return "codium";
  if (t?.includes("windsurf") || t?.includes("devin")) return "windsurf";
  if (t?.includes("com.google.android.studio")) return "androidstudio";
  if (t) {
    for (let n of JV) if (t.includes(n)) return n;
  }
  if (process.env.VisualStudioVersion) return "visualstudio";
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") return "pycharm";
  if (process.env.TERM === "xterm-ghostty") return "ghostty";
  if (process.env.TERM?.includes("kitty")) return "kitty";
  if (process.env.TERM_PROGRAM) {
    if (/^devin([ -]desktop)?$/i.test(process.env.TERM_PROGRAM)) return "windsurf";
    return process.env.TERM_PROGRAM;
  }
  if (process.env.TMUX) return "tmux";
  if (process.env.STY) return "screen";
  if (process.env.KONSOLE_VERSION) return "konsole";
  if (process.env.GNOME_TERMINAL_SERVICE) return "gnome-terminal";
  if (process.env.XTERM_VERSION) return "xterm";
  if (process.env.VTE_VERSION) return "vte-based";
  if (process.env.TERMINATOR_UUID) return "terminator";
  if (process.env.KITTY_WINDOW_ID) return "kitty";
  if (process.env.ALACRITTY_LOG) return "alacritty";
  if (process.env.TILIX_ID) return "tilix";
  if (process.env.WT_SESSION) return "windows-terminal";
  if (process.env.SESSIONNAME && process.env.TERM === "cygwin") return "cygwin";
  if (process.env.MSYSTEM) return process.env.MSYSTEM.toLowerCase();
  if (process.env.ConEmuANSI || process.env.ConEmuPID || process.env.ConEmuTask) return "conemu";
  if (process.env.WSL_DISTRO_NAME) return `wsl-${process.env.WSL_DISTRO_NAME}`;
  if (ebs()) return "ssh-session";
  if (process.env.TERM) {
    let n = process.env.TERM;
    if (n.includes("alacritty")) return "alacritty";
    if (n.includes("rxvt")) return "rxvt";
    if (n.includes("termite")) return "termite";
    return process.env.TERM;
  }
  if (!process.stdout.isTTY) return "non-interactive";
  return null;
}
function ebs() {
  return !!(process.env.SSH_CONNECTION || process.env.SSH_CLIENT || process.env.SSH_TTY);
}
function W0t() {
  let e = process.env.CLAUDE_CODE_HOST_PLATFORM;
  if (e === "win32" || e === "darwin" || e === "linux") return e;
  return kZe.platform;
}
function npn(e) {
  if (!e) return "none";
  let t = e
    .split(/[/\\]/)
    .pop()
    .toLowerCase()
    .replace(/\.exe$/, "");
  return _Eu.has(t) ? t : "other";
}
function akr() {
  return npn(process.env.SHELL || process.env.COMSPEC || "");
}
var J_s, tpn, b0, dEu, fEu, mEu, Q_s, gEu, JV, Z_s, kZe, _Eu;
