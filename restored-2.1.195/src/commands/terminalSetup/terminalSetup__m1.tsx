// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R0e
// matched 2.1.88 source: src/commands/terminalSetup/terminalSetup.tsx
// class=modified (alt of src/commands/terminalSetup/terminalSetup.tsx)  jaccard=0.0947  score=0.4987  fileCov=0.1047
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module R0e] deps: @mixmark-io/domino/lib/Document.js, lodash-es/memoize.js, ink/supports-hyperlinks.ts, hooks/useTerminalSize.ts, utils/appleTerminalBackup.ts, dn, utils/completionCache.ts, commands/terminalSetup/terminalSetup.tsx, utils/config.ts, utils/debug.ts, main.tsx, utils/errors.ts, constants/files.ts, utils/nativeInstaller/download.ts, main.tsx, utils/settings/constants.ts, utils/sequential.ts, utils/platform.ts, utils/fsOperations.ts
((Vat = require("crypto")),
  (CI = require("fs/promises")),
  (Dne = require("os")),
  (UU = require("path")),
  (R8i = require("url")),
  (PDn = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm",
    WarpTerminal: "Warp",
    "windows-terminal": "Windows Terminal",
  }));
ODn = Cn(
  async (e) => {
    let t = (n) =>
      UU.join(
        Dne.homedir(),
        Dne.platform() === "win32"
          ? UU.join("AppData", "Roaming", n, "User")
          : Dne.platform() === "darwin"
            ? UU.join("Library", "Application Support", n, "User")
            : UU.join(".config", n, "User"),
      );
    if (e === "VSCode") return t("Code");
    if (e === "Devin Desktop") {
      let n = t("Devin");
      return (await ed(n)) ? n : t("Windsurf");
    }
    return t(e);
  },
  (e) => `${e}:${Dne.homedir()}`,
);
function f6d(e, t) {
  switch (t.type) {
    case "kill": {
      if (t.text.length === 0) return e;
      return {
        ring:
          e.mode.type === "killing" && e.ring.length > 0
            ? [
                t.direction === "prepend" ? t.text + e.ring[0] : e.ring[0] + t.text,
                ...e.ring.slice(1),
              ]
            : [t.text, ...e.ring].slice(0, d6d),
        mode: {
          type: "killing",
        },
      };
    }
    case "yank":
      return {
        ...e,
        mode: {
          type: "yanked",
          start: t.start,
          length: t.length,
          index: 0,
        },
      };
    case "yankPop": {
      if (e.mode.type !== "yanked" || e.ring.length <= 1) return e;
      let n = (e.mode.index + 1) % e.ring.length;
      return {
        ...e,
        mode: {
          ...e.mode,
          index: n,
        },
      };
    }
    case "updateYankLength":
      if (e.mode.type !== "yanked") return e;
      return {
        ...e,
        mode: {
          ...e.mode,
          length: t.length,
        },
      };
    case "interrupt":
      if (e.mode.type === "idle") return e;
      return {
        ...e,
        mode: {
          type: "idle",
        },
      };
  }
}
function NDn(e) {
  return e.ring[0] ?? "";
}
function BDn(e) {
  if (e.mode.type !== "yanked" || e.ring.length <= 1) return null;
  let t = (e.mode.index + 1) % e.ring.length,
    { start: n, length: r } = e.mode;
  return {
    text: e.ring[t] ?? "",
    start: n,
    length: r,
  };
}
function M8i() {
  let e = p6d;
  return {
    get state() {
      return e;
    },
    dispatch(t) {
      e = f6d(e, t);
    },
  };
}
function O8i({ children: e }) {
  let t = zat.useRef(null);
  if (t.current === null) t.current = M8i();
  return N8i.jsx($8i.Provider, {
    value: t.current,
    children: e,
  });
}
function UDn() {
  return zat.useContext($8i);
}
var zat,
  N8i,
  d6d = 10,
  p6d,
  $8i;
