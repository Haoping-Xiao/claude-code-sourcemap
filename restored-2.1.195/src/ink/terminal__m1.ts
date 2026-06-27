// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZS
// matched 2.1.88 source: src/ink/terminal.ts
// class=modified (alt of src/ink/terminal.ts)  jaccard=0.2882  score=0.8146  fileCov=0.3084
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ZS = E(() => {
  ft();
  wr();
  fn();
  P7r();
  Bke();
  OM();
  q7();
  jh();
  a4i = R(Uj(), 1);
  o4d = new Set([
    "iTerm.app",
    "vscode",
    "WezTerm",
    "WarpTerminal",
    "Hyper",
    "Tabby",
    "rio",
    "contour",
    "alacritty",
  ]);
  s4d = ["iTerm.app", "kitty", "WezTerm", "ghostty", "tmux", "windows-terminal", "WarpTerminal"];
  yYh = LU();
  $Rn = $7r();
});
function T1() {
  let e = _Bt(),
    t = fy(),
    n = t?.wheelFlood ?? N7r(),
    r = t ? JV.includes(t.terminal ?? "") : E1.isJetBrainsIdeTerminal(),
    o = t?.wtSession ?? !!process.env.WT_SESSION,
    s = yb();
  if (
    Rce &&
    Rce.xtversion === (e ?? "(no reply)") &&
    Rce.wheelFlood === n &&
    Rce.jediTerm === r &&
    Rce.wtSession === o &&
    Rce.xtermJs === s
  )
    return Rce;
  let i = "linux";
  return (
    (Rce = {
      useDecayCurve: !n && (s || i === "win32" || o),
      useAdaptiveDrain: s,
      base: r ? 2 : u4d(s, n, o),
      xtermJs: s,
      wheelFlood: n,
      jediTerm: r,
      termProgram: process.env.TERM_PROGRAM ?? "unset",
      termProgramVersion: process.env.TERM_PROGRAM_VERSION ?? "unset",
      xtversion: e ?? "(no reply)",
      wtSession: o,
      scrollSpeedEnv: process.env.CLAUDE_CODE_SCROLL_SPEED ?? "unset",
      platform: i,
    }),
    Rce
  );
}
function N7r() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return !0;
  if (process.env.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return !0;
  if (process.env.TERM_PROGRAM === "vscode") {
    let e = c4d(process.env.TERM_PROGRAM_VERSION);
    if (e !== null) return e >= 1092000 && e < 1105000;
  }
  return _Bt()?.startsWith("xterm.js") ?? !1;
}
function c4d(e) {
  if (!e) return null;
  let t = /^(\d+)\.(\d+)\.(\d+)/.exec(e);
  if (!t) return null;
  return +t[1] * 1e6 + +t[2] * 1000 + +t[3];
}
function B7r(e, t, n) {
  return !t && (e || !1 || n) ? 3 : 1;
}
function u4d(e, t, n) {
  let r = B7r(e, t, n),
    o = process.env.CLAUDE_CODE_SCROLL_SPEED;
  if (!o) return r;
  let s = parseFloat(o);
  return Number.isNaN(s) || s <= 0 ? r : Math.min(s, 20);
}
function ORn() {
  Rce = void 0;
}
var Rce;
