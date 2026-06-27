// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IVn
// matched 2.1.88 source: src/utils/nativeInstaller/packageManagers.ts
// class=modified (alt of src/utils/nativeInstaller/packageManagers.ts)  jaccard=0.0707  score=0.1095  fileCov=0.1666
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module IVn] deps: Qi, je, Bi, Is
(($za = require("fs/promises")),
  (wVn = Cn(async () => {
    try {
      let e = await $za.readFile("/etc/os-release", "utf8"),
        t = e.match(/^ID=["']?(\S+?)["']?\s*$/m),
        n = e.match(/^ID_LIKE=["']?(.+?)["']?\s*$/m);
      return {
        id: t?.[1] ?? "",
        idLike: n?.[1]?.split(" ") ?? [],
      };
    } catch {
      return null;
    }
  })));
((_Ao = Cn(async () => {
  if (Vt() !== "linux") return !1;
  let t = await wVn();
  if (t && !CVn(t, ["arch"])) return !1;
  let n = process.execPath || process.argv[0] || "",
    r = await $n("pacman", ["-Qo", n], {
      timeout: 5000,
      useCwd: !1,
    });
  if (r.code === 0 && r.stdout) return (T(`Detected pacman installation: ${r.stdout.trim()}`), !0);
  return !1;
})),
  (bAo = Cn(async () => {
    if (Vt() !== "linux") return !1;
    let t = await wVn();
    if (t && !CVn(t, ["debian"])) return !1;
    let n = process.execPath || process.argv[0] || "",
      r = await $n("dpkg", ["-S", n], {
        timeout: 5000,
        useCwd: !1,
      });
    if (r.code === 0 && r.stdout) return (T(`Detected deb installation: ${r.stdout.trim()}`), !0);
    return !1;
  })),
  (SAo = Cn(async () => {
    if (Vt() !== "linux") return !1;
    let t = await wVn();
    if (t && !CVn(t, ["fedora", "rhel", "suse"])) return !1;
    let n = process.execPath || process.argv[0] || "",
      r = await $n("rpm", ["-qf", n], {
        timeout: 5000,
        useCwd: !1,
      });
    if (r.code === 0 && r.stdout) return (T(`Detected rpm installation: ${r.stdout.trim()}`), !0);
    return !1;
  })),
  (EAo = Cn(async () => {
    if (Vt() !== "linux") return !1;
    let t = await wVn();
    if (t && !CVn(t, ["alpine"])) return !1;
    let n = process.execPath || process.argv[0] || "",
      r = await $n("apk", ["info", "--who-owns", n], {
        timeout: 5000,
        useCwd: !1,
      });
    if (r.code === 0 && r.stdout) return (T(`Detected apk installation: ${r.stdout.trim()}`), !0);
    return !1;
  })),
  (C9e = Cn(async () => {
    if (Rgt()) return "homebrew";
    if (yAo()) return "winget";
    if (gAo()) return "mise";
    if (hAo()) return "asdf";
    if (await _Ao()) return "pacman";
    if (await EAo()) return "apk";
    if (await bAo()) return "deb";
    if (await SAo()) return "rpm";
    return "unknown";
  })));
function Wzp() {
  let e = process.argv[1] || "",
    t = process.execPath || process.argv[0] || "";
  if (Vt() === "windows")
    ((e = e.split(lA.win32.sep).join(lA.posix.sep)),
      (t = t.split(lA.win32.sep).join(lA.posix.sep)));
  return [e, t];
}
async function GEe() {
  let [e, t] = Wzp();
  if (dm()) {
    let s = tr().replace(/\\/g, "/").replace(/\/+$/, "") + "/local/node_modules/";
    if (t.startsWith(s)) return "npm-local";
    if (t.includes("/node_modules/@anthropic-ai/")) return "npm-global";
    if (
      Rgt() ||
      yAo() ||
      gAo() ||
      hAo() ||
      (await _Ao()) ||
      (await bAo()) ||
      (await SAo()) ||
      (await EAo())
    )
      return "package-manager";
    return "native";
  }
  if (yza()) return "npm-local";
  if (
    [
      "/usr/local/lib/node_modules",
      "/usr/lib/node_modules",
      "/opt/homebrew/lib/node_modules",
      "/opt/homebrew/bin",
      "/usr/local/bin",
      "/.nvm/versions/node/",
    ].some((s) => e.includes(s))
  )
    return "npm-global";
  if (e.includes("/npm/") || e.includes("/nvm/")) return "npm-global";
  let r = await S0("npm config get prefix", {
      reject: !1,
    }),
    o = r.exitCode === 0 ? r.stdout.trim() : null;
  if (o && e.startsWith(o)) return "npm-global";
  return "unknown";
}
async function qzp() {
  if (dm()) {
    try {
      return await Xqt.realpath(process.execPath);
    } catch {}
    try {
      let e = await Gf("claude");
      if (e) return e;
    } catch {}
    try {
      return (
        await qt().stat(lA.join(PPe.homedir(), ".local/bin/claude")),
        lA.join(PPe.homedir(), ".local/bin/claude")
      );
    } catch {}
    return "native";
  }
  try {
    return process.argv[0] || "unknown";
  } catch {
    return "unknown";
  }
}
function Vzp() {
  try {
    if (dm()) return process.execPath || "unknown";
    return process.argv[1] || "unknown";
  } catch {
    return "unknown";
  }
}
async function zzp() {
  let e = qt(),
    t = [],
    n = lA.join(PPe.homedir(), ".claude", "local");
  if (await E9e())
    t.push({
      type: "npm-local",
      path: n,
    });
  let r = ["@anthropic-ai/claude-code"];
  if (
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.PACKAGE_URL &&
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.PACKAGE_URL !== "@anthropic-ai/claude-code"
  )
    r.push(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.PACKAGE_URL,
    );
  let o = await $n("npm", ["-g", "config", "get", "prefix"]);
  if (o.code === 0 && o.stdout) {
    let a = o.stdout.trim(),
      l = Vt() === "windows",
      c = l ? lA.join(a, "claude") : lA.join(a, "bin", "claude"),
      u = !1;
    try {
      (await e.stat(c), (u = !0));
    } catch {}
    if (u) {
      let d = !1;
      try {
        if ((await Xqt.realpath(c)).includes("/Caskroom/")) d = Rgt();
      } catch {}
      if (!d) {
        let p = !1;
        for (let f of r) {
          let m = l ? lA.join(a, "node_modules", f) : lA.join(a, "lib", "node_modules", f);
          try {
            (await e.stat(m), (p = !0));
            break;
          } catch {}
        }
        if (p)
          t.push({
            type: "npm-global",
            path: c,
          });
      }
    } else
      for (let d of r) {
        let p = l ? lA.join(a, "node_modules", d) : lA.join(a, "lib", "node_modules", d);
        try {
          (await e.stat(p),
            t.push({
              type: "npm-global-orphan",
              path: p,
            }));
        } catch {}
      }
  }
  let s = lA.join(PPe.homedir(), ".local", "bin", "claude");
  try {
    (await e.stat(s),
      t.push({
        type: "native",
        path: s,
      }));
  } catch {}
  if (Dt().installMethod === "native") {
    let a = lA.join(PPe.homedir(), ".local", "share", "claude");
    try {
      if ((await e.stat(a), !t.some((l) => l.type === "native")))
        t.push({
          type: "native",
          path: a,
        });
    } catch {}
  }
  return t;
}
function Kzp(e, t) {
  let n = Vt() === "windows",
    r = t;
  if (n) r = t.split(lA.win32.sep).join(lA.posix.sep).toLowerCase();
  return e.some((o) => {
    let s = o;
    if (n) s = o.split(lA.win32.sep).join(lA.posix.sep).toLowerCase();
    let i = s.replace(/\/+$/, ""),
      a = o.replace(/[/\\]+$/, "");
    return i === r || a === "~/.local/bin" || a === "$HOME/.local/bin";
  });
}
async function Yzp(e) {
  let t = [],
    n = [QC()];
  if (Vt() === "wsl" && Vee()) n.unshift(NO);
  for (let a of n)
    try {
      let l = await Xqt.readFile(lA.join(a, "managed-settings.json"), "utf-8"),
        c = Ft(l),
        u = c && typeof c === "object" ? c.strictPluginOnlyCustomization : void 0;
      if (u !== void 0 && typeof u !== "boolean")
        if (!Array.isArray(u))
          t.push({
            issue: `managed-settings.json: strictPluginOnlyCustomization has an invalid value (expected true or an array, got ${typeof u})`,
            fix: `The field is silently ignored (schema .catch rescues it). Set it to true, or an array of: ${TCe.join(", ")}.`,
          });
        else {
          let f = u.filter((m) => typeof m === "string" && !TCe.includes(m));
          if (f.length > 0)
            t.push({
              issue: `managed-settings.json: strictPluginOnlyCustomization has ${f.length} value(s) this client doesn't recognize: ${f.map(String).join(", ")}`,
              fix: `These are silently ignored (forwards-compat). Known surfaces for this version: ${TCe.join(", ")}. Either remove them, or this client is older than the managed-settings intended.`,
            });
        }
      let { wslInheritsWindowsSettings: d, ...p } = c && typeof c === "object" ? c : {};
      if (Object.keys(p).length > 0) break;
    } catch {}
  let r = c8r();
  if (r)
    t.push({
      issue: `otelHeadersHelper is configured but its last invocation failed: ${r}`,
      fix: "Run the configured helper manually and confirm it prints a JSON object of string header values. If the value is a file path, confirm the file exists and is executable.",
    });
  let o = Dt();
  if (e === "development") return t;
  if (e === "native") {
    let a = (process.env.PATH || "").split(lA.delimiter),
      l = PPe.homedir(),
      c = lA.join(l, ".local", "bin");
    if (!Kzp(a, c))
      if (Vt() === "windows") {
        let d = c.split(lA.posix.sep).join(lA.win32.sep);
        t.push({
          issue: `Native installation exists but ${d} is not in your PATH`,
          fix: "Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.",
        });
      } else {
        let d = Egt(),
          f = DPe()[d],
          m = f ? f.replace(PPe.homedir(), "~") : "your shell config file";
        t.push({
          issue: "Native installation exists but ~/.local/bin is not in your PATH",
          fix: `Run: echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${m} then open a new terminal or run: source ${m}`,
        });
      }
  }
  if (!Oe.DISABLE_INSTALLATION_CHECKS) {
    if (e === "npm-local" && o.installMethod !== "local")
      t.push({
        issue: `Running from local installation but config install method is '${o.installMethod ?? "not set"}'`,
        fix: "Consider using native installation: `claude install`",
      });
    if (e === "native" && o.installMethod !== "native")
      t.push({
        issue: `Running native installation but config install method is '${o.installMethod ?? "not set"}'`,
        fix: "Run `claude install` to update configuration",
      });
  }
  if (e === "npm-global" && (await E9e()))
    t.push({
      issue: "Local installation exists but not being used",
      fix: "Consider using native installation: `claude install`",
    });
  let s = await pAo(),
    i = await Sza();
  if (e === "npm-local") {
    if (!(await Gf("claude")) && !i)
      if (s)
        t.push({
          issue: "Local installation not accessible",
          fix: `Alias exists but points to invalid target: ${s}. Update alias: alias claude="~/.claude/local/claude"`,
        });
      else
        t.push({
          issue: "Local installation not accessible",
          fix: 'Create alias: alias claude="~/.claude/local/claude"',
        });
  }
  return t;
}
async function Xzp() {
  return null;
}
function Jzp() {
  if (Vt() !== "linux") return [];
  let e = [],
    t = xo.getLinuxGlobPatternWarnings();
  if (t.length > 0) {
    let n = t.slice(0, 3).join(", "),
      r = t.length - 3,
      o = r > 0 ? `${n} (${r} more)` : n;
    e.push({
      issue: "Glob patterns in sandbox permission rules are not fully supported on Linux",
      fix: `Found ${t.length} pattern(s): ${o}. On Linux, glob patterns in Edit/Read rules will be ignored.`,
    });
  }
  return e;
}
async function I9e({ probeKeychain: e = !1 } = {}) {
  let t = await GEe(),
    n = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION
      ? `${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION
        }${L2()}`
      : "unknown",
    r = await qzp(),
    o = Vzp(),
    s = await zzp(),
    i = await Yzp(t);
  if ((i.push(...Jzp()), e)) {
    let g = await Xzp();
    if (g) i.push(g);
  }
  if (t === "native") {
    let g = s.filter(
        (y) => y.type === "npm-global" || y.type === "npm-global-orphan" || y.type === "npm-local",
      ),
      h = Vt() === "windows";
    for (let y of g)
      if (y.type === "npm-global") {
        let b = "npm -g uninstall @anthropic-ai/claude-code";
        if (
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.PACKAGE_URL &&
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.PACKAGE_URL !== "@anthropic-ai/claude-code"
        )
          b += ` && npm -g uninstall ${
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.PACKAGE_URL
          }`;
        i.push({
          issue: `Leftover npm global installation at ${y.path}`,
          fix: `Run: ${b}`,
        });
      } else if (y.type === "npm-global-orphan")
        i.push({
          issue: `Orphaned npm global package at ${y.path}`,
          fix: h ? `Run: rmdir /s /q "${y.path}"` : `Run: rm -rf ${y.path}`,
        });
      else if (y.type === "npm-local")
        i.push({
          issue: `Leftover npm local installation at ${y.path}`,
          fix: h ? `Run: rmdir /s /q "${y.path}"` : `Run: rm -rf ${y.path}`,
        });
  }
  let l = Dt().installMethod || "not set",
    c = null;
  if (t === "npm-global") {
    if (((c = (await Rza()).hasPermissions), !c && !jEe()))
      i.push({
        issue: "Can't auto-update: npm global folder isn't writable",
        fix: "Run `claude install` to switch to the native installer (no sudo)\nOr reinstall with a sudo-free npm (e.g. via nvm)\nOr `npm config set prefix ~/.npm-global`, add ~/.npm-global/bin to PATH, then reinstall",
      });
  }
  let u = kna(),
    d = {
      working: u.working ?? !0,
      mode: u.mode,
      systemPath: u.mode === "system" ? u.path : null,
    },
    p = t === "package-manager" ? await C9e() : void 0,
    f = await vVn();
  return {
    installationType: t,
    version: n,
    installationPath: r,
    invokedBinary: o,
    configInstallMethod: l,
    autoUpdates: (() => {
      let g = jEe();
      return g ? `disabled (${Lgt(g)})` : "enabled";
    })(),
    hasUpdatePermissions: c,
    lastUpdateResult: f,
    multipleInstallations: s,
    warnings: i,
    packageManager: p,
    ripgrepStatus: d,
  };
}
var Xqt, PPe, lA;
