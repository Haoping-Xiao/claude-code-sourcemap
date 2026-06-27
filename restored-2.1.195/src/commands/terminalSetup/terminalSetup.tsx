// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YQr
// matched 2.1.88 source: src/commands/terminalSetup/terminalSetup.tsx
// class=modified  jaccard=0.4376  score=0.6226  fileCov=0.5956
// note: deminified; 10 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YQr] deps: f0e, AW, db, je, At, Bi
((I8i = require("os")), (qce = require("path")));
var P8i = {};
_t(P8i, {
  shouldOfferTerminalSetup: () => shouldOfferTerminalSetup,
  setupTerminal: () => setupTerminal,
  readVSCodeScrollSensitivity: () => readVSCodeScrollSensitivity,
  markBackslashReturnUsed: () => markBackslashReturnUsed,
  isShiftEnterKeyBindingInstalled: () => isShiftEnterKeyBindingInstalled,
  installVSCodeGpuAccelerationOff: () => installVSCodeGpuAccelerationOff,
  hasUsedBackslashReturn: () => hasUsedBackslashReturn,
  getNativeCSIuTerminalDisplayName: () => getNativeCSIuTerminalDisplayName,
  enableITerm2ClipboardAccess: () => enableITerm2ClipboardAccess,
  call: () => call,
});
function MDn() {
  let e = process.env.VSCODE_GIT_ASKPASS_MAIN ?? "",
    t = process.env.PATH ?? "";
  return (
    e.includes(".vscode-server") ||
    e.includes(".cursor-server") ||
    e.includes(".windsurf-server") ||
    e.includes(".devin-server") ||
    t.includes(".vscode-server") ||
    t.includes(".cursor-server") ||
    t.includes(".windsurf-server") ||
    t.includes(".devin-server")
  );
}
function getNativeCSIuTerminalDisplayName() {
  if (!Oe.terminal || !(Oe.terminal in PDn)) return null;
  return PDn[Oe.terminal] ?? null;
}
function FU(e) {
  if (!vI()) return e;
  return `\x1B]8;;${R8i.pathToFileURL(e).href}\x07${e}\x1B]8;;\x07`;
}
function RDn() {
  return "";
}
function shouldOfferTerminalSetup() {
  return (
    (Dne.platform() === "darwin" && Oe.terminal === "Apple_Terminal") ||
    Oe.terminal === "vscode" ||
    Oe.terminal === "cursor" ||
    Oe.terminal === "windsurf" ||
    Oe.terminal === "alacritty" ||
    Oe.terminal === "zed"
  );
}
async function setupTerminal(e) {
  let t = "";
  switch (Oe.terminal) {
    case "Apple_Terminal":
      t = await l6d(e);
      break;
    case "vscode":
      ((t = await QQr("VSCode", e)),
        (t += await JQr("VSCode", e)),
        (t += await installVSCodeGpuAccelerationOff("VSCode", e)));
      break;
    case "cursor":
      ((t = await QQr("Cursor", e)),
        (t += await JQr("Cursor", e)),
        (t += await installVSCodeGpuAccelerationOff("Cursor", e)));
      break;
    case "windsurf":
      ((t = await QQr("Devin Desktop", e)),
        (t += await JQr("Devin Desktop", e)),
        (t += await installVSCodeGpuAccelerationOff("Devin Desktop", e)));
      break;
    case "alacritty":
      t = await c6d(e);
      break;
    case "zed":
      t = await u6d(e);
      break;
    case null:
      break;
  }
  return (
    gn((n) => {
      if (["vscode", "cursor", "windsurf", "alacritty", "zed"].includes(Oe.terminal ?? "")) {
        if (n.shiftEnterKeyBindingInstalled === true) return n;
        return {
          ...n,
          shiftEnterKeyBindingInstalled: true,
        };
      } else if (Oe.terminal === "Apple_Terminal") {
        if (n.optionAsMetaKeyInstalled === true) return n;
        return {
          ...n,
          optionAsMetaKeyInstalled: true,
        };
      }
      return n;
    }),
    Gat(),
    t
  );
}
async function enableITerm2ClipboardAccess(e) {
  let t = wt.dim(L8i);
  try {
    let { stdout: n, code: r } = await $n("defaults", [
      "read",
      "com.googlecode.iterm2",
      "AllowClipboardAccess",
    ]);
    if (r === 0 && n.trim() === "1")
      return `${Io("success", e)("iTerm2 clipboard access already enabled")}${Ha}${Ha}`;
    let { code: o } = await $n("defaults", [
      "write",
      "com.googlecode.iterm2",
      "AllowClipboardAccess",
      "-bool",
      "true",
    ]);
    if (o !== 0)
      return `${Io("warning", e)("Couldn't update iTerm2 clipboard setting.")}${Ha}${t}${Ha}${Ha}`;
    return `${Io("success", e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${Ha}${wt.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${Ha}${Ha}`;
  } catch (n) {
    return (
      ke(n),
      `${Io("warning", e)("Couldn't update iTerm2 clipboard setting.")}${Ha}${t}${Ha}${Ha}`
    );
  }
}
function isShiftEnterKeyBindingInstalled() {
  return Dt().shiftEnterKeyBindingInstalled === true;
}
function hasUsedBackslashReturn() {
  return Dt().hasUsedBackslashReturn === true;
}
function markBackslashReturnUsed() {
  if (!Dt().hasUsedBackslashReturn)
    gn((t) => ({
      ...t,
      hasUsedBackslashReturn: true,
    }));
}
async function call(e, t, n) {
  if (
    Dne.platform() === "darwin" &&
    process.env.__CFBundleIdentifier === "com.googlecode.iterm2" &&
    (Oe.terminal === "iTerm.app" ||
      Oe.terminal === "tmux" ||
      Oe.terminal === "screen" ||
      Oe.terminal === null)
  ) {
    let s = `${await enableITerm2ClipboardAccess(t.options.theme)}Shift+Enter is natively supported in iTerm2.

No configuration needed. Just use Shift+Enter to add newlines.${RDn()}`;
    return (e(s), null);
  }
  if (Oe.terminal && Oe.terminal in PDn) {
    let o = `Shift+Enter is natively supported in ${PDn[Oe.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.${RDn()}`;
    return (e(o), null);
  }
  if (!shouldOfferTerminalSetup()) {
    let o = Oe.terminal || "your current terminal",
      s = Vt(),
      i = "";
    if (s === "macos")
      i = `   \u2022 macOS: Apple Terminal
`;
    let a =
        process.env.LC_TERMINAL === "iTerm2"
          ? `${Ha}${Ha}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${Ha}${wt.dim(L8i)}`
          : "",
      l = `Terminal setup cannot be run from ${o}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${wt.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${i}   \u2022 IDE: VSCode, Cursor, Devin Desktop, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${wt.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${a}${RDn()}`;
    return (e(l), null);
  }
  let r = await setupTerminal(t.options.theme);
  return (e(r + RDn()), null);
}
function rZr(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
async function readVSCodeScrollSensitivity() {
  let e = a6d();
  if (!e || MDn()) return null;
  try {
    let t = await CI.readFile(UU.join(await ODn(e), "settings.json"), {
        encoding: "utf-8",
      }),
      n = LRt(t),
      r = rZr(n) ? n[TUt] : void 0;
    return {
      editor: e,
      sensitivity: typeof r === "number" ? r : null,
      recommended: vUt,
    };
  } catch (t) {
    if (!Vo(t)) ke(t);
    return {
      editor: e,
      sensitivity: null,
      recommended: vUt,
    };
  }
}
function a6d() {
  switch (Oe.terminal) {
    case "vscode":
      return "VSCode";
    case "cursor":
      return "Cursor";
    case "windsurf":
      return "Devin Desktop";
    default:
      return null;
  }
}
async function JQr(e, t) {
  let n = wt.dim(`For smoother scrolling, set "${TUt}": ${vUt} in ${e} settings.`);
  if (MDn()) return `${n}${Ha}`;
  let r = UU.join(await ODn(e), "settings.json");
  try {
    let o = "{}",
      s = false;
    try {
      ((o = await CI.readFile(r, {
        encoding: "utf-8",
      })),
        (s = true));
    } catch (l) {
      if (!Vo(l)) throw l;
    }
    let i = LRt(o);
    if (!rZr(i))
      return `${Io("warning", t)(`${e} settings.json isn't a JSON object; not modifying it.`)}${Ha}${n}${Ha}`;
    if (TUt in i)
      return `${Io("success", t)(`${e} ${TUt} already set; leaving as-is`)}${Ha}${wt.dim(`See ${FU(r)}`)}${Ha}`;
    let a = TRr(o, TUt, vUt);
    if (a === o) return `${Io("warning", t)(`Couldn't update ${e} settings.json.`)}${Ha}${n}${Ha}`;
    if (s) {
      let l = `${r}.${Vat.randomBytes(4).toString("hex")}.bak`;
      try {
        await CI.copyFile(r, l);
      } catch {
        return `${Io("warning", t)(`Couldn't back up ${e} settings.json; not modifying it.`)}${Ha}${n}${Ha}`;
      }
    }
    return (
      await CI.writeFile(r, a, {
        encoding: "utf-8",
      }),
      `${Io("success", t)(`Set ${e} terminal scroll sensitivity to ${vUt}`)}${Ha}${wt.dim(`See ${FU(r)}`)}${Ha}`
    );
  } catch (o) {
    return (
      T(
        `Couldn't update ${e} settings.json at ${r}: ${o instanceof Error ? o.message : String(o)}`,
        {
          level: "error",
        },
      ),
      `${Io("warning", t)(`Couldn't update ${e} settings.json.`)}${Ha}${n}${Ha}`
    );
  }
}
async function installVSCodeGpuAccelerationOff(e, t) {
  let n = wt.dim(
    `To fix garbled text, set "${LDn}": "${XQr}" in ${e} settings (undo: set it back to "auto").`,
  );
  if (MDn()) return (It("terminal_setup_gpu_accel", "remote_ssh"), `${n}${Ha}`);
  let r = UU.join(await ODn(e), "settings.json");
  try {
    let o = "{}",
      s = false;
    try {
      ((o = await CI.readFile(r, {
        encoding: "utf-8",
      })),
        (s = true));
    } catch (l) {
      if (!Vo(l)) throw l;
    }
    let i = LRt(o);
    if (!rZr(i))
      return (
        It("terminal_setup_gpu_accel", "not_json_object"),
        `${Io("warning", t)(`${e} settings.json isn't a JSON object; not modifying it.`)}${Ha}${n}${Ha}`
      );
    if (i[LDn] === XQr)
      return (
        xe("terminal_setup_gpu_accel"),
        `${Io("success", t)(`${e} GPU acceleration already off; leaving as-is`)}${Ha}${wt.dim(`See ${FU(r)}`)}${Ha}`
      );
    let a = TRr(o, LDn, XQr);
    if (a === o)
      return (
        It("terminal_setup_gpu_accel", "write_failed"),
        `${Io("warning", t)(`Couldn't update ${e} settings.json.`)}${Ha}${n}${Ha}`
      );
    if (s) {
      let l = `${r}.${Vat.randomBytes(4).toString("hex")}.bak`;
      try {
        await CI.copyFile(r, l);
      } catch {
        return (
          It("terminal_setup_gpu_accel", "backup_failed"),
          `${Io("warning", t)(`Couldn't back up ${e} settings.json; not modifying it.`)}${Ha}${n}${Ha}`
        );
      }
    }
    return (
      await CI.writeFile(r, a, {
        encoding: "utf-8",
      }),
      xe("terminal_setup_gpu_accel"),
      `${Io("success", t)(`Turned off ${e} GPU acceleration to fix garbled text`)}${Ha}${wt.dim(`Reload the ${e} window to apply. Undo: set "${LDn}" back to "auto".`)}${Ha}${wt.dim(`See ${FU(r)}`)}${Ha}`
    );
  } catch (o) {
    return (
      It("terminal_setup_gpu_accel", "write_failed"),
      T(
        `Couldn't update ${e} settings.json at ${r}: ${o instanceof Error ? o.message : String(o)}`,
        {
          level: "error",
        },
      ),
      `${Io("warning", t)(`Couldn't update ${e} settings.json.`)}${Ha}${n}${Ha}`
    );
  }
}
async function QQr(e = "VSCode", t) {
  if (MDn())
    return `${Io("warning", t)(`Cannot install keybindings from a remote ${e} session.`)}${Ha}${Ha}${e} keybindings must be installed on your local machine, not the remote server.${Ha}${Ha}To install the Shift+Enter keybinding:${Ha}1. Open ${e} on your local machine (not connected to remote)${Ha}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${Ha}3. Add this keybinding (the file must be a JSON array):${Ha}${Ha}${wt.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${Ha}`;
  let n = await ODn(e),
    r = UU.join(n, "keybindings.json");
  try {
    await CI.mkdir(n, {
      recursive: true,
    });
    let o = "[]",
      s = [],
      i = false;
    try {
      ((o = await CI.readFile(r, {
        encoding: "utf-8",
      })),
        (i = true),
        (s = LRt(o) ?? []));
    } catch (u) {
      if (!Vo(u)) throw u;
    }
    if (i) {
      let u = Vat.randomBytes(4).toString("hex"),
        d = `${r}.${u}.bak`;
      try {
        await CI.copyFile(r, d);
      } catch {
        return `${Io("warning", t)(`Error backing up existing ${e} terminal keybindings. Bailing out.`)}${Ha}${wt.dim(`See ${FU(r)}`)}${Ha}${wt.dim(`Backup path: ${FU(d)}`)}${Ha}`;
      }
    }
    let a = {
        key: "shift+enter",
        command: "workbench.action.terminal.sendSequence",
        args: {
          text: "\x1B\r",
        },
        when: "terminalFocus",
      },
      l = s.find((u) => u.key === a.key && u.command === a.command && u.when === a.when);
    if (l) {
      let u = wt.dim(`See ${FU(r)}`);
      if (l.args?.text === a.args.text)
        return `${Io("success", t)(`${e} terminal Shift+Enter key binding already configured`)}${Ha}${u}${Ha}`;
      return `${Io("warning", t)(`${e} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${Ha}${u}${Ha}`;
    }
    let c = pvs(o, a);
    return (
      await CI.writeFile(r, c, {
        encoding: "utf-8",
      }),
      `${Io("success", t)(`Installed ${e} terminal Shift+Enter key binding`)}${Ha}${wt.dim(`See ${FU(r)}`)}${Ha}`
    );
  } catch (o) {
    throw (
      T(
        `Failed to install ${e} terminal Shift+Enter keybinding: ${o instanceof Error ? o.message : String(o)}`,
        {
          level: "error",
        },
      ),
      Error(`Failed to install ${e} terminal Shift+Enter key binding`)
    );
  }
}
async function x8i(e) {
  let { code: t } = await $n("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`,
    qat(),
  ]);
  if (t !== 0) {
    let { code: n } = await $n("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${e}':useOptionAsMetaKey true`,
      qat(),
    ]);
    if (n !== 0)
      return (
        T(`Failed to enable Option as Meta key for Terminal.app profile: ${e}`, {
          level: "error",
        }),
        false
      );
  }
  return true;
}
async function k8i(e) {
  let { code: t } = await $n("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${e}':Bell bool false`,
    qat(),
  ]);
  if (t !== 0) {
    let { code: n } = await $n("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${e}':Bell false`,
      qat(),
    ]);
    if (n !== 0)
      return (
        T(`Failed to disable audio bell for Terminal.app profile: ${e}`, {
          level: "error",
        }),
        false
      );
  }
  return true;
}
async function l6d(e) {
  let t = (PEs() ?? 0) >= 27;
  try {
    if (!(await C8i()))
      throw Error("Failed to create backup of Terminal.app preferences, bailing out");
    let { stdout: r, code: o } = await $n("defaults", [
      "read",
      "com.apple.Terminal",
      "Default Window Settings",
    ]);
    if (o !== 0 || !r.trim()) throw Error("Failed to read default Terminal.app profile");
    let { stdout: s, code: i } = await $n("defaults", [
      "read",
      "com.apple.Terminal",
      "Startup Window Settings",
    ]);
    if (i !== 0 || !s.trim()) throw Error("Failed to read startup Terminal.app profile");
    let a = false,
      l = r.trim(),
      c = t ? false : await x8i(l),
      u = await k8i(l);
    if (c || u) a = true;
    let d = s.trim();
    if (d !== l) {
      let m = t ? false : await x8i(d),
        g = await k8i(d);
      if (m || g) a = true;
    }
    if (!a)
      throw Error(
        "Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile",
      );
    (await $n("killall", ["cfprefsd"]), Wat());
    let p = [Io("success", e)("Configured Terminal.app settings:")];
    if (!t) p.push(Io("success", e)('- Enabled "Use Option as Meta key"'));
    p.push(Io("success", e)("- Switched to visual bell"));
    let f = t
      ? wt.dim("Shift+Return will now enter a newline.")
      : wt.dim("Option+Enter will now enter a newline.");
    return `${p.join(Ha)}${Ha}${f}${Ha}${wt.dim("You must restart Terminal.app for changes to take effect.")}${Ha}`;
  } catch (n) {
    T(`Terminal.app setup failed: ${n instanceof Error ? n.message : String(n)}`, {
      level: "error",
    });
    let r = await kDn(),
      o = "Failed to enable Option as Meta key for Terminal.app.";
    if (r.status === "restored") throw Error(`${o} Your settings have been restored from backup.`);
    else if (r.status === "failed")
      throw Error(
        `${o} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${r.backupPath}`,
      );
    else throw Error(`${o} No backup was available to restore from.`);
  }
}
async function c6d(e) {
  let n = [],
    r = process.env.XDG_CONFIG_HOME;
  if (r) n.push(UU.join(r, "alacritty", "alacritty.toml"));
  else n.push(UU.join(Dne.homedir(), ".config", "alacritty", "alacritty.toml"));
  if (Dne.platform() === "win32") {
    let a = process.env.APPDATA;
    if (a) n.push(UU.join(a, "alacritty", "alacritty.toml"));
  }
  let o = null,
    s = "",
    i = false;
  for (let a of n)
    try {
      ((s = await CI.readFile(a, {
        encoding: "utf-8",
      })),
        (o = a),
        (i = true));
      break;
    } catch (l) {
      if (!Vo(l)) throw l;
    }
  if (!o) o = n[0] ?? null;
  if (!o) throw Error("No valid config path found for Alacritty");
  try {
    if (i) {
      if (s.includes('mods = "Shift"') && s.includes('key = "Return"'))
        return `${Io("success", e)("Alacritty Shift+Enter key binding already configured")}${Ha}${wt.dim(`See ${FU(o)}`)}${Ha}`;
      let l = Vat.randomBytes(4).toString("hex"),
        c = `${o}.${l}.bak`;
      try {
        await CI.copyFile(o, c);
      } catch {
        return `${Io("warning", e)("Error backing up existing Alacritty config. Bailing out.")}${Ha}${wt.dim(`See ${FU(o)}`)}${Ha}${wt.dim(`Backup path: ${FU(c)}`)}${Ha}`;
      }
    } else
      await CI.mkdir(UU.dirname(o), {
        recursive: true,
      });
    let a = s;
    if (
      s &&
      !s.endsWith(`
`)
    )
      a += `
`;
    return (
      (a += `
[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"
`),
      await CI.writeFile(o, a, {
        encoding: "utf-8",
      }),
      `${Io("success", e)("Installed Alacritty Shift+Enter key binding")}${Ha}${Io("success", e)("You may need to restart Alacritty for changes to take effect")}${Ha}${wt.dim(`See ${FU(o)}`)}${Ha}`
    );
  } catch (a) {
    throw (
      T(`Failed to install Alacritty keybinding: ${a instanceof Error ? a.message : String(a)}`, {
        level: "error",
      }),
      Error("Failed to install Alacritty Shift+Enter key binding")
    );
  }
}
async function u6d(e) {
  let t = UU.join(Dne.homedir(), ".config", "zed"),
    n = UU.join(t, "keymap.json");
  try {
    await CI.mkdir(t, {
      recursive: true,
    });
    let r = "[]",
      o = false;
    try {
      ((r = await CI.readFile(n, {
        encoding: "utf-8",
      })),
        (o = true));
    } catch (i) {
      if (!Vo(i)) throw i;
    }
    if (o) {
      if (r.includes("shift-enter"))
        return `${Io("success", e)("Zed Shift+Enter key binding already configured")}${Ha}${wt.dim(`See ${FU(n)}`)}${Ha}`;
      let i = Vat.randomBytes(4).toString("hex"),
        a = `${n}.${i}.bak`;
      try {
        await CI.copyFile(n, a);
      } catch {
        return `${Io("warning", e)("Error backing up existing Zed keymap. Bailing out.")}${Ha}${wt.dim(`See ${FU(n)}`)}${Ha}${wt.dim(`Backup path: ${FU(a)}`)}${Ha}`;
      }
    }
    let s;
    try {
      if (((s = Ft(r)), !Array.isArray(s))) s = [];
    } catch {
      s = [];
    }
    return (
      s.push({
        context: "Terminal",
        bindings: {
          "shift-enter": ["terminal::SendText", "\x1B\r"],
        },
      }),
      await CI.writeFile(
        n,
        De(s, null, 2) +
          `
`,
        {
          encoding: "utf-8",
        },
      ),
      `${Io("success", e)("Installed Zed Shift+Enter key binding")}${Ha}${wt.dim(`See ${FU(n)}`)}${Ha}`
    );
  } catch (r) {
    throw (
      T(
        `Failed to install Zed Shift+Enter key binding: ${r instanceof Error ? r.message : String(r)}`,
        {
          level: "error",
        },
      ),
      Error("Failed to install Zed Shift+Enter key binding")
    );
  }
}
var Vat,
  CI,
  Dne,
  UU,
  R8i,
  Ha = `
`,
  PDn,
  L8i =
    'iTerm2 \u2192 Settings \u2192 General \u2192 Selection \u2192 check "Applications in terminal may access clipboard"',
  TUt = "terminal.integrated.mouseWheelScrollSensitivity",
  vUt = 3,
  LDn = "terminal.integrated.gpuAcceleration",
  XQr = "off",
  ODn;
