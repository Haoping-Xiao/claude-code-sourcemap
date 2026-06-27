// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GYr
// matched 2.1.88 source: src/utils/fullscreen.ts
// class=modified  jaccard=0.1121  score=0.1319  fileCov=0.4278
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var GYr = E(() => {
  jYr = new Set();
});
function qBd() {
  return {
    loggedTmuxCcDisable: !1,
    loggedWinSshDisable: !1,
    checkedTmuxMouseHint: !1,
    checkedTmuxFocusHint: !1,
    tmuxControlModeProbed: void 0,
    gbGateCached: void 0,
    downsellGateCached: void 0,
  };
}
function VBd() {
  if (!process.env.TMUX) return !1;
  if (process.env.TERM_PROGRAM !== "iTerm.app") return !1;
  let e = process.env.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}
function zBd(e) {
  if (((e.tmuxControlModeProbed = VBd()), e.tmuxControlModeProbed)) return;
  if (!process.env.TMUX) return;
  if (process.env.TERM_PROGRAM) return;
  let t = JZe("tmux");
  if (t === null) return;
  let n;
  try {
    n = VUi.spawnSync(t, ["display-message", "-p", "#{client_control_mode}"], {
      encoding: "utf8",
      timeout: 2000,
      cwd: void 0,
      env: process.env,
      windowsHide: !0,
    });
  } catch {
    return;
  }
  if (n.status !== 0) return;
  e.tmuxControlModeProbed = n.stdout.trim() === "1";
}
function ane(e = ine) {
  if (e.tmuxControlModeProbed === void 0) zBd(e);
  return e.tmuxControlModeProbed ?? !1;
}
function WYr() {
  if (Vt() !== "windows") return !1;
  return Boolean(process.env.SSH_CONNECTION || process.env.SSH_CLIENT || process.env.SSH_TTY);
}
function qYr() {
  return Oe.CLAUDE_CODE_NO_FLICKER === !1 || ut(process.env.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN);
}
function Ns(e = ine) {
  if (Q2() === "local-agent") return !1;
  if (process.env.CLAUDE_CODE_SESSION_KIND === "bg") return !0;
  if (UD()) return !1;
  if (qYr()) return !1;
  if (Oe.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (ane(e)) {
    if (!e.loggedTmuxCcDisable)
      ((e.loggedTmuxCcDisable = !0),
        T(
          "fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override",
        ));
    return !1;
  }
  if (WYr()) {
    if (!e.loggedWinSshDisable)
      ((e.loggedWinSshDisable = !0),
        T(
          "fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override",
        ));
    return !1;
  }
  switch (Dr().tui) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  if (KBd(e)) return !0;
  return ((e.gbGateCached ??= at("tengu_pewter_brook", !1)), e.gbGateCached);
}
function KBd(e = ine) {
  return ((e.downsellGateCached ??= at("tengu_amber_creek", !1)), e.downsellGateCached);
}
function ZNt(e = ine) {
  if (UD()) return !1;
  if (qYr()) return !1;
  if (Oe.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (WYr()) return !1;
  if (ane(e)) return !1;
  switch (Dr().tui) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  return !0;
}
function Uke(e = ine) {
  if (process.env.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (UD()) return "sr_auto_off";
  if (qYr()) return "env_off";
  if (Oe.CLAUDE_CODE_NO_FLICKER === !0) return "env_on";
  if (ane(e)) return "tmux_cc_auto_off";
  if (WYr()) return "win_ssh_auto_off";
  switch (Dr().tui) {
    case "fullscreen":
      return "settings_on";
    case "default":
      return "settings_off";
  }
  if (e.downsellGateCached ?? at("tengu_amber_creek", !1)) return "downsell_on";
  return (e.gbGateCached ?? at("tengu_pewter_brook", !1)) ? "gb_on" : "gb_off";
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
  if (Oe.CLAUDE_CODE_NO_FLICKER === !0) return "on";
  if (Oe.CLAUDE_CODE_NO_FLICKER === !1) return "off";
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
  return Ax() && Ns(e);
}
async function YUi(e = ine) {
  if (!process.env.TMUX) return null;
  if (!lne(e) || ane(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = !0;
  let { stdout: t, code: n } = await $n("tmux", ["show", "-Av", "mouse"], {
    useCwd: !1,
    timeout: 2000,
  });
  if (n !== 0 || t.trim() === "on") return null;
  return "tmux detected \xB7 scroll with PgUp/PgDn \xB7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}
async function XUi(e = ine) {
  if (!process.env.TMUX) return null;
  if (ane(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = !0;
  let { stdout: t, code: n } = await $n("tmux", ["show", "-gv", "focus-events"], {
    useCwd: !1,
    timeout: 2000,
  });
  if (n !== 0 || t.trim() === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
var VUi, ine;
