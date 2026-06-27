// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aE
// matched 2.1.88 source: src/utils/ide.ts
// class=modified  jaccard=0.3372  score=0.8277  fileCov=0.3627
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aE] deps: sFn, Qi, kt, Du, ft, dn, Rx, BI, er, wr, fn, Bi, ys, YS, ZIa, vn, Is, OB, sr, kv, fp, je, Q9, At, HDn, Jt
((cxa = require("fs/promises")),
  (uxa = require("net")),
  (dxa = R(require("os"))),
  (h$ = require("path")));
zdt = {
  cursor: {
    ideKind: "vscode",
    displayName: "Cursor",
    processKeywordsMac: ["Cursor Helper", "Cursor.app"],
    processKeywordsWindows: ["cursor.exe"],
    processKeywordsLinux: ["cursor"],
  },
  windsurf: {
    ideKind: "vscode",
    displayName: "Devin Desktop",
    processKeywordsMac: ["Windsurf Helper", "Windsurf.app", "Devin Helper", "Devin.app"],
    processKeywordsWindows: ["windsurf.exe", "Devin.exe"],
    processKeywordsLinux: ["windsurf", "devin-desktop"],
  },
  vscode: {
    ideKind: "vscode",
    displayName: "VS Code",
    processKeywordsMac: ["Visual Studio Code", "Code Helper"],
    processKeywordsWindows: ["code.exe"],
    processKeywordsLinux: ["code"],
  },
  intellij: {
    ideKind: "jetbrains",
    displayName: "IntelliJ IDEA",
    processKeywordsMac: ["IntelliJ IDEA"],
    processKeywordsWindows: ["idea64.exe"],
    processKeywordsLinux: ["idea", "intellij"],
  },
  pycharm: {
    ideKind: "jetbrains",
    displayName: "PyCharm",
    processKeywordsMac: ["PyCharm"],
    processKeywordsWindows: ["pycharm64.exe"],
    processKeywordsLinux: ["pycharm"],
  },
  webstorm: {
    ideKind: "jetbrains",
    displayName: "WebStorm",
    processKeywordsMac: ["WebStorm"],
    processKeywordsWindows: ["webstorm64.exe"],
    processKeywordsLinux: ["webstorm"],
  },
  phpstorm: {
    ideKind: "jetbrains",
    displayName: "PhpStorm",
    processKeywordsMac: ["PhpStorm"],
    processKeywordsWindows: ["phpstorm64.exe"],
    processKeywordsLinux: ["phpstorm"],
  },
  rubymine: {
    ideKind: "jetbrains",
    displayName: "RubyMine",
    processKeywordsMac: ["RubyMine"],
    processKeywordsWindows: ["rubymine64.exe"],
    processKeywordsLinux: ["rubymine"],
  },
  clion: {
    ideKind: "jetbrains",
    displayName: "CLion",
    processKeywordsMac: ["CLion"],
    processKeywordsWindows: ["clion64.exe"],
    processKeywordsLinux: ["clion"],
  },
  goland: {
    ideKind: "jetbrains",
    displayName: "GoLand",
    processKeywordsMac: ["GoLand"],
    processKeywordsWindows: ["goland64.exe"],
    processKeywordsLinux: ["goland"],
  },
  rider: {
    ideKind: "jetbrains",
    displayName: "Rider",
    processKeywordsMac: ["Rider"],
    processKeywordsWindows: ["rider64.exe"],
    processKeywordsLinux: ["rider"],
  },
  datagrip: {
    ideKind: "jetbrains",
    displayName: "DataGrip",
    processKeywordsMac: ["DataGrip"],
    processKeywordsWindows: ["datagrip64.exe"],
    processKeywordsLinux: ["datagrip"],
  },
  appcode: {
    ideKind: "jetbrains",
    displayName: "AppCode",
    processKeywordsMac: ["AppCode"],
    processKeywordsWindows: ["appcode.exe"],
    processKeywordsLinux: ["appcode"],
  },
  dataspell: {
    ideKind: "jetbrains",
    displayName: "DataSpell",
    processKeywordsMac: ["DataSpell"],
    processKeywordsWindows: ["dataspell64.exe"],
    processKeywordsLinux: ["dataspell"],
  },
  aqua: {
    ideKind: "jetbrains",
    displayName: "Aqua",
    processKeywordsMac: [],
    processKeywordsWindows: ["aqua64.exe"],
    processKeywordsLinux: [],
  },
  gateway: {
    ideKind: "jetbrains",
    displayName: "Gateway",
    processKeywordsMac: [],
    processKeywordsWindows: ["gateway64.exe"],
    processKeywordsLinux: [],
  },
  fleet: {
    ideKind: "jetbrains",
    displayName: "Fleet",
    processKeywordsMac: [],
    processKeywordsWindows: ["fleet.exe"],
    processKeywordsLinux: [],
  },
  androidstudio: {
    ideKind: "jetbrains",
    displayName: "Android Studio",
    processKeywordsMac: ["Android Studio"],
    processKeywordsWindows: ["studio64.exe"],
    processKeywordsLinux: ["android-studio"],
  },
};
((k3t = Cn(() => lFn(Oe.terminal))),
  (cFn = Cn(() => kre(h1.terminal))),
  (uF = Cn(() => k3t() || cFn() || Boolean(process.env.FORCE_CODE_TERMINAL))));
fwp = Cn(async () => {
  if (process.env.USERPROFILE) return process.env.USERPROFILE;
  let { stdout: e, code: t } = await $n("powershell.exe", [
    "-NoProfile",
    "-NonInteractive",
    "-Command",
    "$env:USERPROFILE",
  ]);
  if (t === 0 && e.trim()) return e.trim();
  T("Unable to get Windows USERPROFILE via PowerShell - IDE detection may be incomplete");
  return;
});
((Swp = Cn(async () => {
  try {
    if (Vt() !== "macos") return null;
    let t = process.ppid;
    for (let n = 0; n < 10; n++) {
      if (!t || t === 0 || t === 1) break;
      let r = (await $n("ps", ["-o", "command=", "-p", String(t)])).stdout.trim();
      if (r) {
        let s = {
            "Visual Studio Code.app": "code",
            "Cursor.app": "cursor",
            "Windsurf.app": "windsurf",
            "Devin.app": "devin",
            "Visual Studio Code - Insiders.app": "code",
            "VSCodium.app": "codium",
          },
          i = "/Contents/MacOS/";
        for (let [a, l] of Object.entries(s)) {
          let c = r.indexOf(a + "/Contents/MacOS/");
          if (c !== -1) {
            let u = c + a.length;
            return r.substring(0, u) + "/Contents/Resources/app/bin/" + l;
          }
        }
      }
      let o = (await $n("ps", ["-o", "ppid=", "-p", String(t)])).stdout.trim();
      if (!o) break;
      t = parseInt(o);
    }
    return null;
  } catch {
    return null;
  }
})),
  (Ewp = {
    vscode: ["code", "codium"],
    cursor: ["cursor"],
    windsurf: ["windsurf", "devin"],
  }));
lxa = {
  code: "VS Code",
  cursor: "Cursor",
  windsurf: "Devin Desktop",
  antigravity: "Antigravity",
  vi: "Vim",
  vim: "Vim",
  nano: "nano",
  notepad: "Notepad",
  "start /wait notepad": "Notepad",
  emacs: "Emacs",
  subl: "Sublime Text",
  atom: "Atom",
};
Hxa = Cn(
  async (e, t) => {
    if (process.env.CLAUDE_CODE_IDE_HOST_OVERRIDE) return process.env.CLAUDE_CODE_IDE_HOST_OVERRIDE;
    if (Vt() !== "wsl" || !e) return "127.0.0.1";
    try {
      let n = await S0("ip route show | grep -i default", {
        reject: false,
      });
      if (n.exitCode === 0 && n.stdout) {
        let r = n.stdout.match(/default via (\d+\.\d+\.\d+\.\d+)/);
        if (r) {
          let o = r[1];
          if (await Ydo(o, t)) return o;
        }
      }
    } catch (n) {}
    return "127.0.0.1";
  },
  (e, t) => `${e}:${t}`,
);
function L3t(e, t = "SIGKILL") {
  if (!Number.isInteger(e) || e <= 1) return Promise.resolve();
  return Twp(e, t).catch(() => {});
}
async function Twp(e, t) {
  let n = await vwp(e);
  try {
    process.kill(-e, t);
  } catch (r) {
    try {
      process.kill(e, t);
    } catch {}
    if (on(r) !== "ESRCH") vxa("group_kill", r);
  }
  for (let r of n)
    try {
      process.kill(r, t);
    } catch {}
}
async function vwp(e) {
  let t;
  try {
    t = await Promise.race([
      wwp(),
      new Promise((s) => {
        let i = setTimeout((a) => a(""), Hwp, s);
        if (typeof i === "object") i.unref();
      }),
    ]);
  } catch (s) {
    return (vxa("enum_spawn", s), new Set());
  }
  let n = new Map();
  for (let s of t.split(`
`)) {
    let i = s.match(/^\s*(\d+)\s+(\d+)\s*$/);
    if (!i) continue;
    let a = Number(i[1]),
      l = Number(i[2]),
      c = n.get(l);
    if (c) c.push(a);
    else n.set(l, [a]);
  }
  let r = new Set(),
    o = [e];
  while (o.length > 0) {
    let s = o.shift();
    for (let i of n.get(s) ?? []) if (i > 1 && i !== e && !r.has(i)) (r.add(i), o.push(i));
  }
  return r;
}
function wwp() {
  return new Promise((e, t) => {
    let n;
    try {
      n = Txa.spawn("ps", ["-A", "-o", "pid=", "-o", "ppid="], {
        cwd: "/",
        stdio: ["ignore", "pipe", "ignore"],
        windowsHide: true,
      });
    } catch (o) {
      t(o);
      return;
    }
    let r = "";
    (n.stdout?.on("data", (o) => (r += o)), n.once("error", t), n.once("close", () => e(r)));
  });
}
function vxa(e, t) {
  try {
    let n = on(t),
      r = xd(t);
    (T(`killProcessTree ${e} failed: ${n ?? t}`),
      G("tengu_bash_tool_kill_error", {
        stage: e,
        ...(r && {
          error_code: r,
        }),
      }));
  } catch {}
}
var Txa,
  Hwp = 500;
