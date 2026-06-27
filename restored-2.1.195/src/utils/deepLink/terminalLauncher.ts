// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b1c
// matched 2.1.88 source: src/utils/deepLink/terminalLauncher.ts
// class=modified  jaccard=0.5446  score=0.6847  fileCov=0.7269
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var b1c = E(() => {
  HI();
  kt();
  je();
});
async function Gxm() {
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
        useCwd: !1,
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
      useCwd: !1,
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
async function Wxm() {
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
async function qxm() {
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
      return Gxm();
    case "linux":
      return Wxm();
    case "win32":
      return qxm();
    default:
      return null;
  }
}
async function v1c(e, t) {
  let n = await Vxm();
  if (!n)
    return (
      T("No terminal emulator detected", {
        level: "error",
      }),
      !1
    );
  T(`Launching in terminal: ${n.name} (${n.command})`);
  let r = ["--deep-link-origin"];
  if (t.repo) {
    if ((r.push(`--deep-link-repo=${t.repo}`), t.lastFetchMs !== void 0))
      r.push(`--deep-link-last-fetch=${t.lastFetchMs}`);
  }
  if (t.query) r.push(`--prefill=${t.query}`);
  switch ("linux") {
    case "darwin":
      return w1c(n, e, r, t);
    case "linux":
      return zxm(n, e, r, t);
    case "win32":
      return Kxm(n, e, t);
    default:
      return !1;
  }
}
async function w1c(e, t, n, r) {
  let { cwd: o } = r;
  switch (e.command) {
    case "iTerm": {
      let s = S1c(t, r),
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
          useCwd: !1,
        });
      if (a === 0) return !0;
      break;
    }
    case "Terminal": {
      let s = S1c(t, r),
        i = `tell application "Terminal"
  do script ${E1c(s)}
  activate
end tell`,
        { code: a } = await $n("osascript", ["-e", i], {
          useCwd: !1,
        });
      return a === 0;
    }
    case "Ghostty": {
      let s = ["-na", e.command, "--args", "--window-save-state=never"];
      if (o) s.push(`--working-directory=${o}`);
      s.push("-e", t, ...Hvt(r));
      let { code: i } = await $n("open", s, {
        useCwd: !1,
      });
      if (i === 0) return !0;
      break;
    }
    case "Alacritty": {
      let s = ["-na", e.command, "--args"];
      if (o) s.push("--working-directory", o);
      s.push("-e", t, ...n);
      let { code: i } = await $n("open", s, {
        useCwd: !1,
      });
      if (i === 0) return !0;
      break;
    }
    case "kitty": {
      let s = ["-na", e.command, "--args"];
      if (o) s.push("--directory", o);
      s.push(t, ...n);
      let { code: i } = await $n("open", s, {
        useCwd: !1,
      });
      if (i === 0) return !0;
      break;
    }
    case "WezTerm": {
      let s = ["-na", e.command, "--args", "start"];
      if (o) s.push("--cwd", o);
      s.push("--", t, ...n);
      let { code: i } = await $n("open", s, {
        useCwd: !1,
      });
      if (i === 0) return !0;
      break;
    }
  }
  return (
    T(`Failed to launch ${e.name}, falling back to Terminal.app`),
    w1c(
      {
        name: "Terminal.app",
        command: "Terminal",
      },
      t,
      n,
      r,
    )
  );
}
async function zxm(e, t, n, r) {
  let { cwd: o } = r,
    s,
    i;
  switch (e.name) {
    case "gnome-terminal":
      ((s = o ? [`--working-directory=${o}`, "--"] : ["--"]), s.push(t, ...n));
      break;
    case "konsole":
      ((s = o ? ["--workdir", o, "-e"] : ["-e"]), s.push(t, ...n));
      break;
    case "kitty":
      ((s = o ? ["--directory", o] : []), s.push(t, ...n));
      break;
    case "wezterm":
      ((s = o ? ["start", "--cwd", o, "--"] : ["start", "--"]), s.push(t, ...n));
      break;
    case "alacritty":
      ((s = o ? ["--working-directory", o, "-e"] : ["-e"]), s.push(t, ...n));
      break;
    case "ghostty":
      ((s = o ? [`--working-directory=${o}`, "-e"] : ["-e"]), s.push(t, ...Hvt(r)));
      break;
    case "xfce4-terminal":
    case "mate-terminal":
      ((s = o ? [`--working-directory=${o}`, "-x"] : ["-x"]), s.push(t, ...n));
      break;
    case "tilix":
      ((s = o ? [`--working-directory=${o}`, "-e"] : ["-e"]), s.push(t, ...Hvt(r)));
      break;
    default:
      ((s = ["-e", t, ...Hvt(r)]), (i = o));
      break;
  }
  return C1c(e.command, s, {
    cwd: i,
  });
}
async function Kxm(e, t, n) {
  let r = [],
    o = Hvt(n),
    s = n.cwd;
  switch (e.name) {
    case "Windows Terminal": {
      let i = (a) => a.replaceAll(";", "\\;");
      if (s) r.push("-d", i(s));
      r.push("--", i(t), ...o);
      break;
    }
    case "PowerShell": {
      r.push("-NoExit", "-Command", `& ${Xxm(t)} ${o.join(" ")}`);
      break;
    }
    default: {
      let i = `${A1c(t)} ${o.map(A1c).join(" ")}`;
      r.push("/d", "/v:off", "/s", "/k", `"${i}"`);
      break;
    }
  }
  return C1c(e.command, r, {
    windowsVerbatimArguments: e.name === "Command Prompt",
    cwd: n.cwd,
  });
}
async function C1c(e, t, n = {}) {
  let r = (o) =>
    new Promise((s) => {
      let i = (l) => {
          (T(`Failed to spawn ${e}: ${l.message}`, {
            level: "error",
          }),
            s(!1));
        },
        a;
      try {
        a = H1c.spawn(e, t, {
          detached: !0,
          stdio: "ignore",
          windowsHide: !1,
          cwd: o,
          windowsVerbatimArguments: n.windowsVerbatimArguments,
        });
      } catch (l) {
        return i(l);
      }
      (a.once("error", i),
        a.once("spawn", () => {
          (a.unref(), s(!0));
        }));
    });
  if (await r(n.cwd)) return !0;
  if (n.cwd) return r(void 0);
  return !1;
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
