// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OM
// matched 2.1.88 source: src/ink/clearTerminal.ts
// class=modified  jaccard=0.2092  score=0.2376  fileCov=0.6359
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OM] deps: one
((PYr = l8 + String.fromCharCode(gW.CSI)),
  (Eit = {
    PARAM_START: 48,
    PARAM_END: 63,
    INTERMEDIATE_START: 32,
    INTERMEDIATE_END: 47,
    FINAL_START: 64,
    FINAL_END: 126,
  }));
((hb = {
  CUU: 65,
  CUD: 66,
  CUF: 67,
  CUB: 68,
  CNL: 69,
  CPL: 70,
  CHA: 71,
  CUP: 72,
  CHT: 73,
  HPA: 96,
  HPR: 97,
  VPA: 100,
  VPR: 101,
  HVP: 102,
  ED: 74,
  EL: 75,
  ECH: 88,
  IL: 76,
  DL: 77,
  ICH: 64,
  DCH: 80,
  SU: 83,
  SD: 84,
  SM: 104,
  RM: 108,
  SGR: 109,
  DSR: 110,
  DECSCUSR: 113,
  DECSTBM: 114,
  SCOSC: 115,
  SCORC: 117,
  CBT: 90,
}),
  (SUi = ["toEnd", "toStart", "all", "scrollback"]),
  (EUi = ["toEnd", "toStart", "all"]),
  (MYr = [
    {
      style: "block",
      blinking: true,
    },
    {
      style: "block",
      blinking: true,
    },
    {
      style: "block",
      blinking: false,
    },
    {
      style: "underline",
      blinking: true,
    },
    {
      style: "underline",
      blinking: false,
    },
    {
      style: "bar",
      blinking: true,
    },
    {
      style: "bar",
      blinking: false,
    },
  ]));
LBd = mh("G");
dH = mh("H");
((D6h = mh("s")), (P6h = mh("u")));
((Oke = mh(2, "K")), (Jx = mh(2, "J")), (Ait = mh(3, "J")));
((c8 = mh("r")),
  (wUi = mh("200~")),
  (CUi = mh("201~")),
  (X3e = mh("I")),
  (Nke = mh("O")),
  (IUi = mh(">1u")),
  (Tce = mh("<u")),
  (xUi = mh(">4;2m")),
  (G_e = mh(">4m")));
class kUi {
  proc;
  constructor(e = process) {
    this.proc = e;
  }
  isJetBrainsIdeTerminal() {
    return this.proc.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
  }
  isMicrosoftWindowsTerminal() {
    return this.proc.platform === "win32" && !!this.proc.env.WT_SESSION;
  }
  isGhostty() {
    return this.proc.env.TERM === "xterm-ghostty" || this.proc.env.TERM_PROGRAM === "ghostty";
  }
  isMintty() {
    if (this.proc.env.TERM_PROGRAM === "mintty") return true;
    if (this.proc.platform === "win32" && this.proc.env.MSYSTEM) return true;
    return false;
  }
  windowsConsoleSupportsVirtualTerminalSequences() {
    if (this.isMicrosoftWindowsTerminal()) return true;
    if (
      this.proc.platform === "win32" &&
      this.proc.env.TERM_PROGRAM === "vscode" &&
      this.proc.env.TERM_PROGRAM_VERSION
    )
      return true;
    if (this.isMintty()) return true;
    return false;
  }
  hasGeometricShapesInkBleedBug() {
    return this.isGhostty();
  }
  hasOsc52ClipboardUtf8Bug() {
    if (this.proc.env.TERM_PROGRAM !== "vscode") return false;
    let e = DBd(this.proc.env.TERM_PROGRAM_VERSION);
    return e !== null && e >= 1123000 && e < 1125000;
  }
  macCmdClickArrivesWithoutSgrModifierBit() {
    return this.proc.platform === "darwin" && this.proc.env.TERM_PROGRAM === "ghostty";
  }
}
function DBd(e) {
  if (!e) return null;
  let t = /^(\d+)\.(\d+)\.(\d+)/.exec(e);
  if (!t) return null;
  return +t[1] * 1000000 /* 1e6 */ + +t[2] * 1000 + +t[3];
}
var E1;
