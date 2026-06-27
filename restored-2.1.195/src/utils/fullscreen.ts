// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GYr
// matched 2.1.88 source: src/utils/fullscreen.ts
// class=modified  jaccard=0.1792  score=0.2418  fileCov=0.409
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GYr]
jYr = new Set();
function qBd() {
  return {
    loggedTmuxCcDisable: false,
    loggedWinSshDisable: false,
    checkedTmuxMouseHint: false,
    checkedTmuxFocusHint: false,
    tmuxControlModeProbed: void 0,
    gbGateCached: void 0,
    downsellGateCached: void 0,
  };
}
function isTmuxControlModeEnvHeuristic() {
  if (!process.env.TMUX) return false;
  if (process.env.TERM_PROGRAM !== "iTerm.app") return false;
  let e = process.env.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}
function probeTmuxControlModeSync(e) {
  if (((e.tmuxControlModeProbed = isTmuxControlModeEnvHeuristic()), e.tmuxControlModeProbed))
    return;
  if (!process.env.TMUX) return;
  if (process.env.TERM_PROGRAM) return;
  let t = JZe("tmux");
  if (t === null) return;
  let result;
  try {
    result = VUi.spawnSync(t, ["display-message", "-p", "#{client_control_mode}"], {
      encoding: "utf8",
      timeout: 2000,
      cwd: void 0,
      env: process.env,
      windowsHide: true,
    });
  } catch {
    return;
  }
  if (result.status !== 0) return;
  e.tmuxControlModeProbed = result.stdout.trim() === "1";
}
function ane(e = ine) {
  if (e.tmuxControlModeProbed === void 0) probeTmuxControlModeSync(e);
  return e.tmuxControlModeProbed ?? false;
}
function WYr() {
  if (Vt() !== "windows") return false;
  return Boolean(process.env.SSH_CONNECTION || process.env.SSH_CLIENT || process.env.SSH_TTY);
}
function qYr() {
  return (
    Oe.CLAUDE_CODE_NO_FLICKER === false || ut(process.env.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN)
  );
}
function isFullscreenEnvEnabled(e = ine) {
  if (Q2() === "local-agent") return false;
  if (process.env.CLAUDE_CODE_SESSION_KIND === "bg") return true;
  if (UD()) return false;
  if (qYr()) return false;
  if (Oe.CLAUDE_CODE_NO_FLICKER === true) return true;
  if (ane(e)) {
    if (!e.loggedTmuxCcDisable)
      ((e.loggedTmuxCcDisable = true),
        T(
          "fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override",
        ));
    return false;
  }
  if (WYr()) {
    if (!e.loggedWinSshDisable)
      ((e.loggedWinSshDisable = true),
        T(
          "fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override",
        ));
    return false;
  }
  switch (Dr().tui) {
    case "fullscreen":
      return true;
    case "default":
      return false;
  }
  if (KBd(e)) return true;
  return ((e.gbGateCached ??= at("tengu_pewter_brook", false)), e.gbGateCached);
}
function KBd(e = ine) {
  return ((e.downsellGateCached ??= at("tengu_amber_creek", false)), e.downsellGateCached);
}
function ZNt(e = ine) {
  if (UD()) return false;
  if (qYr()) return false;
  if (Oe.CLAUDE_CODE_NO_FLICKER === true) return true;
  if (WYr()) return false;
  if (ane(e)) return false;
  switch (Dr().tui) {
    case "fullscreen":
      return true;
    case "default":
      return false;
  }
  return true;
}
function Uke(e = ine) {
  if (process.env.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (UD()) return "sr_auto_off";
  if (qYr()) return "env_off";
  if (Oe.CLAUDE_CODE_NO_FLICKER === true) return "env_on";
  if (ane(e)) return "tmux_cc_auto_off";
  if (WYr()) return "win_ssh_auto_off";
  switch (Dr().tui) {
    case "fullscreen":
      return "settings_on";
    case "default":
      return "settings_off";
  }
  if (e.downsellGateCached ?? at("tengu_amber_creek", false)) return "downsell_on";
  return (e.gbGateCached ?? at("tengu_pewter_brook", false)) ? "gb_on" : "gb_off";
}
function zUi(e) {
  switch (e) {
    case "env_on":
    case "bg_forced_on":
    case "settings_on":
    case "ant_default":
    case "downsell_on":
    case "gb_on":
      return "fullscreen";
    case "env_off":
    case "sr_auto_off":
    case "tmux_cc_auto_off":
    case "win_ssh_auto_off":
    case "settings_off":
    case "gb_off":
      return "default";
  }
}
function KUi() {
  if (Oe.CLAUDE_CODE_NO_FLICKER === true) return "on";
  if (Oe.CLAUDE_CODE_NO_FLICKER === false) return "off";
  return;
}
function Tit() {
  if (Oe.CLAUDE_CODE_SESSION_KIND === "bg") return "full";
  if (Oe.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return Oe.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (Oe.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0)
    return Oe.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full";
}
function lne(e = ine) {
  return Ax() && isFullscreenEnvEnabled(e);
}
async function maybeGetTmuxMouseHint(e = ine) {
  if (!process.env.TMUX) return null;
  if (!lne(e) || ane(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = true;
  let { stdout: t, code: n } = await $n("tmux", ["show", "-Av", "mouse"], {
    useCwd: false,
    timeout: 2000,
  });
  if (n !== 0 || t.trim() === "on") return null;
  return "tmux detected \xB7 scroll with PgUp/PgDn \xB7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}
async function XUi(e = ine) {
  if (!process.env.TMUX) return null;
  if (ane(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = true;
  let { stdout: t, code: n } = await $n("tmux", ["show", "-gv", "focus-events"], {
    useCwd: false,
    timeout: 2000,
  });
  if (n !== 0 || t.trim() === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
var VUi, ine;
