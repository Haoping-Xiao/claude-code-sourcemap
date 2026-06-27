// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jh
// matched 2.1.88 source: src/ink/termio/osc.ts
// class=modified (alt of src/ink/termio/osc.ts)  jaccard=0.2619  score=0.5746  fileCov=0.3248
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jh = E(() => {
  ft();
  je();
  wr();
  Bi();
  Is();
  _0();
  Bke();
  one();
  ((OYr = require("buffer")), (NYr = l8 + String.fromCharCode(gW.OSC)), (PBd = l8 + "\\"));
  ((MBd = new Set([
    "ghostty",
    "kitty",
    "WezTerm",
    "alacritty",
    "xterm",
    "gnome-terminal",
    "vte-based",
    "konsole",
    "windows-terminal",
    "mintty",
    ...JV,
  ])),
    ($Bd = new Set(["vscode", "cursor", "windsurf", "antigravity", "codium"])));
  wy = {
    SET_TITLE_AND_ICON: 0,
    SET_ICON: 1,
    SET_TITLE: 2,
    SET_COLOR: 4,
    SET_CWD: 7,
    HYPERLINK: 8,
    ITERM2: 9,
    SET_FG_COLOR: 10,
    SET_BG_COLOR: 11,
    SET_CURSOR_COLOR: 12,
    CLIPBOARD: 52,
    KITTY: 99,
    RESET_COLOR: 104,
    RESET_FG_COLOR: 110,
    RESET_BG_COLOR: 111,
    RESET_CURSOR_COLOR: 112,
    SEMANTIC_PROMPT: 133,
    GHOSTTY: 777,
    ITERM2_PROPRIETARY: 1337,
    TAB_STATUS: 21337,
  };
  ((J3e = QS(wy.HYPERLINK, "", "")),
    (Q3e = {
      NOTIFY: 0,
      BADGE: 2,
      PROGRESS: 4,
    }),
    (Z3e = {
      CLEAR: 0,
      SET: 1,
      ERROR: 2,
      INDETERMINATE: 3,
    }),
    (K0n = `${NYr}${wy.ITERM2};${Q3e.PROGRESS};${Z3e.CLEAR};${$M}`),
    ($Ui = `${NYr}${wy.SET_TITLE_AND_ICON};${$M}`),
    (Y0n = QS(wy.TAB_STATUS, "indicator=;status=;status-color=")));
  GBd = NUi("");
});
function BUi(e) {
  return {
    request: mh(`?${e}$p`),
    match: (t) => t.type === "decrpm" && t.mode === e,
  };
}
function UUi() {
  return {
    request: mh("?6n"),
    match: (e) => e.type === "cursorPosition",
  };
}
function FUi(e) {
  return {
    request: QS(e, "?"),
    match: (t) => t.type === "osc" && t.code === e,
  };
}
function jUi() {
  return {
    request: mh(">0q"),
    match: (e) => e.type === "xtversion",
  };
}
class FYr {
  stdout;
  queue = [];
  constructor(e) {
    this.stdout = e;
  }
  send(e) {
    return new Promise((t) => {
      (this.queue.push({
        kind: "query",
        match: e.match,
        resolve: (n) => t(n),
      }),
        this.stdout.write(e.request));
    });
  }
  flush() {
    return new Promise((e) => {
      (this.queue.push({
        kind: "sentinel",
        resolve: e,
      }),
        this.stdout.write(WBd));
    });
  }
  cancel(e) {
    let t = this.queue.findIndex((r) => r.kind === "query" && r.match === e.match);
    if (t === -1) return;
    let [n] = this.queue.splice(t, 1);
    if (n?.kind === "query") n.resolve(void 0);
  }
  onResponse(e) {
    let t = this.queue.findIndex((n) => n.kind === "query" && n.match(e));
    if (t !== -1) {
      let [n] = this.queue.splice(t, 1);
      if (n?.kind === "query") n.resolve(e);
      return;
    }
    if (e.type === "da1") {
      let n = this.queue.findIndex((r) => r.kind === "sentinel");
      if (n === -1) return;
      for (let r of this.queue.splice(0, n + 1))
        if (r.kind === "query") r.resolve(void 0);
        else r.resolve();
    }
  }
}
var WBd;
