// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b1c
// matched 2.1.88 source: src/utils/deepLink/terminalLauncher.ts
// class=modified  jaccard=0.4487  score=0.6654  fileCov=0.5794
// note: deminified; 8 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function detectMacosTerminal() {
  let e = Dt().deepLinkTerminal;
  if (e) {
    let n = Smr.find((r) => r.app === e);
    if (n)
      return {
        name: n.name,
        command: n.app,
      };
  }
  let t = process.env.TERM_PROGRAM;
  if (t) {
    let n = t.replace(/\.app$/i, "").toLowerCase(),
      r = Smr.find(
        (o) =>
          o.app.toLowerCase() === n ||
          o.name.toLowerCase() === n ||
          o.termProgramAliases?.includes(n),
      );
    if (r)
      return {
        name: r.name,
        command: r.app,
      };
  }
  for (let n of Smr) {
    let { code: r, stdout: o } = await $n(
      "mdfind",
      [`kMDItemCFBundleIdentifier == "${n.bundleId}"`],
      {
        timeout: 5000,
        useCwd: false,
      },
    );
    if (r === 0 && o.trim().length > 0)
      return {
        name: n.name,
        command: n.app,
      };
  }
  for (let n of Smr) {
    let { code: r } = await $n("ls", [`/Applications/${n.app}.app`], {
      timeout: 1000,
      useCwd: false,
    });
    if (r === 0)
      return {
        name: n.name,
        command: n.app,
      };
  }
  return {
    name: "Terminal.app",
    command: "Terminal",
  };
}
async function detectLinuxTerminal() {
  let e = process.env.TERMINAL;
  if (e) {
    let n = await Gf(e);
    if (n)
      return {
        name: T1c.basename(e),
        command: n,
      };
  }
  let t = await Gf("x-terminal-emulator");
  if (t)
    return {
      name: "x-terminal-emulator",
      command: t,
    };
  for (let n of jxm) {
    let r = await Gf(n);
    if (r)
      return {
        name: n,
        command: r,
      };
  }
  return null;
}
async function detectWindowsTerminal() {
  let e = await Gf("wt.exe");
  if (e)
    return {
      name: "Windows Terminal",
      command: e,
    };
  let t = await Gf("pwsh.exe");
  if (t)
    return {
      name: "PowerShell",
      command: t,
    };
  let n = await Gf("powershell.exe");
  if (n)
    return {
      name: "PowerShell",
      command: n,
    };
  return {
    name: "Command Prompt",
    command: process.env.ComSpec || `${process.env.SystemRoot || "C:\\Windows"}\\System32\\cmd.exe`,
  };
}
async function Vxm() {
  switch ("linux") {
    case "darwin":
      return detectMacosTerminal();
    case "linux":
      return detectLinuxTerminal();
    case "win32":
      return detectWindowsTerminal();
    default:
      return null;
  }
}
async function launchInTerminal(claudePath, action) {
  let n = await Vxm();
  if (!n)
    return (
      T("No terminal emulator detected", {
        level: "error",
      }),
      false
    );
  T(`Launching in terminal: ${n.name} (${n.command})`);
  let r = ["--deep-link-origin"];
  if (action.repo) {
    if ((r.push(`--deep-link-repo=${action.repo}`), action.lastFetchMs !== void 0))
      r.push(`--deep-link-last-fetch=${action.lastFetchMs}`);
  }
  if (action.query) r.push(`--prefill=${action.query}`);
  switch ("linux") {
    case "darwin":
      return launchMacosTerminal(n, claudePath, r, action);
    case "linux":
      return launchLinuxTerminal(n, claudePath, r, action);
    case "win32":
      return launchWindowsTerminal(n, claudePath, action);
    default:
      return false;
  }
}
async function launchMacosTerminal(terminal, claudePath, claudeArgs, cwd) {
  let { cwd: o } = cwd;
  switch (terminal.command) {
    case "iTerm": {
      let s = S1c(claudePath, cwd),
        i = `tell application "iTerm"
  if running then
    create window with default profile
  else
    activate
  end if
  tell current session of current window
    write text ${E1c(s)}
  end tell
end tell`,
        { code: a } = await $n("osascript", ["-e", i], {
          useCwd: false,
        });
      if (a === 0) return true;
      break;
    }
    case "Terminal": {
      let s = S1c(claudePath, cwd),
        i = `tell application "Terminal"
  do script ${E1c(s)}
  activate
end tell`,
        { code: a } = await $n("osascript", ["-e", i], {
          useCwd: false,
        });
      return a === 0;
    }
    case "Ghostty": {
      let s = ["-na", terminal.command, "--args", "--window-save-state=never"];
      if (o) s.push(`--working-directory=${o}`);
      s.push("-e", claudePath, ...Hvt(cwd));
      let { code: i } = await $n("open", s, {
        useCwd: false,
      });
      if (i === 0) return true;
      break;
    }
    case "Alacritty": {
      let s = ["-na", terminal.command, "--args"];
      if (o) s.push("--working-directory", o);
      s.push("-e", claudePath, ...claudeArgs);
      let { code: i } = await $n("open", s, {
        useCwd: false,
      });
      if (i === 0) return true;
      break;
    }
    case "kitty": {
      let s = ["-na", terminal.command, "--args"];
      if (o) s.push("--directory", o);
      s.push(claudePath, ...claudeArgs);
      let { code: i } = await $n("open", s, {
        useCwd: false,
      });
      if (i === 0) return true;
      break;
    }
    case "WezTerm": {
      let s = ["-na", terminal.command, "--args", "start"];
      if (o) s.push("--cwd", o);
      s.push("--", claudePath, ...claudeArgs);
      let { code: i } = await $n("open", s, {
        useCwd: false,
      });
      if (i === 0) return true;
      break;
    }
  }
  return (
    T(`Failed to launch ${terminal.name}, falling back to Terminal.app`),
    launchMacosTerminal(
      {
        name: "Terminal.app",
        command: "Terminal",
      },
      claudePath,
      claudeArgs,
      cwd,
    )
  );
}
async function launchLinuxTerminal(terminal, claudePath, claudeArgs, cwd) {
  let { cwd: o } = cwd,
    s,
    i;
  switch (terminal.name) {
    case "gnome-terminal":
      ((s = o ? [`--working-directory=${o}`, "--"] : ["--"]), s.push(claudePath, ...claudeArgs));
      break;
    case "konsole":
      ((s = o ? ["--workdir", o, "-e"] : ["-e"]), s.push(claudePath, ...claudeArgs));
      break;
    case "kitty":
      ((s = o ? ["--directory", o] : []), s.push(claudePath, ...claudeArgs));
      break;
    case "wezterm":
      ((s = o ? ["start", "--cwd", o, "--"] : ["start", "--"]), s.push(claudePath, ...claudeArgs));
      break;
    case "alacritty":
      ((s = o ? ["--working-directory", o, "-e"] : ["-e"]), s.push(claudePath, ...claudeArgs));
      break;
    case "ghostty":
      ((s = o ? [`--working-directory=${o}`, "-e"] : ["-e"]), s.push(claudePath, ...Hvt(cwd)));
      break;
    case "xfce4-terminal":
    case "mate-terminal":
      ((s = o ? [`--working-directory=${o}`, "-x"] : ["-x"]), s.push(claudePath, ...claudeArgs));
      break;
    case "tilix":
      ((s = o ? [`--working-directory=${o}`, "-e"] : ["-e"]), s.push(claudePath, ...Hvt(cwd)));
      break;
    default:
      ((s = ["-e", claudePath, ...Hvt(cwd)]), (i = o));
      break;
  }
  return spawnDetached(terminal.command, s, {
    cwd: i,
  });
}
async function launchWindowsTerminal(terminal, claudePath, claudeArgs) {
  let r = [],
    o = Hvt(claudeArgs),
    s = claudeArgs.cwd;
  switch (terminal.name) {
    case "Windows Terminal": {
      let i = (a) => a.replaceAll(";", "\\;");
      if (s) r.push("-d", i(s));
      r.push("--", i(claudePath), ...o);
      break;
    }
    case "PowerShell": {
      r.push("-NoExit", "-Command", `& ${Xxm(claudePath)} ${o.join(" ")}`);
      break;
    }
    default: {
      let i = `${A1c(claudePath)} ${o.map(A1c).join(" ")}`;
      r.push("/d", "/v:off", "/s", "/k", `"${i}"`);
      break;
    }
  }
  return spawnDetached(terminal.command, r, {
    windowsVerbatimArguments: terminal.name === "Command Prompt",
    cwd: claudeArgs.cwd,
  });
}
async function spawnDetached(command, args, n = {}) {
  let r = (o) =>
    new Promise((s) => {
      let i = (l) => {
          (T(`Failed to spawn ${command}: ${l.message}`, {
            level: "error",
          }),
            s(false));
        },
        a;
      try {
        a = H1c.spawn(command, args, {
          detached: true,
          stdio: "ignore",
          windowsHide: false,
          cwd: o,
          windowsVerbatimArguments: n.windowsVerbatimArguments,
        });
      } catch (l) {
        return i(l);
      }
      (a.once("error", i),
        a.once("spawn", () => {
          (a.unref(), s(true));
        }));
    });
  if (await r(n.cwd)) return true;
  if (n.cwd) return r(void 0);
  return false;
}
function Hvt(e) {
  let t = (r) => Buffer.from(r, "utf8").toString("base64url"),
    n = ["--deep-link-origin"];
  if (e.repo) n.push(`--deep-link-repo=${e.repo}`);
  if (e.lastFetchMs !== void 0) n.push(`--deep-link-last-fetch=${e.lastFetchMs}`);
  if (e.cwd) n.push(`--deep-link-cwd-b64=${t(e.cwd)}`);
  if (e.query) n.push(`--prefill-b64=${t(e.query)}`);
  return n;
}
function S1c(e, t) {
  let n = Hvt(t).join(" ");
  if (!Yxm.test(n)) throw Error(`Internal error: shell-safe args contain metacharacters: ${n}`);
  if (/^[A-Za-z0-9/._-]+$/.test(e)) return `${e} ${n}`;
  if (/['\\!$\n]/.test(e))
    throw Error(
      `Deep-link launch unsupported: the claude binary path "${e}" contains a single quote, backslash, exclamation mark, dollar sign, or newline, which cannot be portably quoted for every login shell. Reinstall claude to a path without these characters to use deep links with iTerm2 or Terminal.app.`,
    );
  return `'${e}' ${n}`;
}
function E1c(e) {
  return `"${e
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll(
      `
`,
      "\\n",
    )
    .replaceAll("\t", "\\t")}"`;
}
function Xxm(e) {
  if (/[\u2018\u2019\u201A\u201B]/.test(e))
    throw Error(
      "Cannot safely quote a Unicode single-quote variant (U+2018-U+201B) in a PowerShell path; install Windows Terminal (wt.exe).",
    );
  return `'${e.replaceAll('"', "").replaceAll("'", "''")}'`;
}
function A1c(e) {
  return `"${e
    .replace(/[\n\t]/g, " ")
    .replace(/["%]/g, "")
    .replace(/(\\+)$/, "$1$1")}"`;
}
var H1c, T1c, Smr, jxm, Yxm;
