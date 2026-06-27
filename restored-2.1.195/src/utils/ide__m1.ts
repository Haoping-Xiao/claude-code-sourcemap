// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zdo
// matched 2.1.88 source: src/utils/ide.ts
// class=modified (alt of src/utils/ide.ts)  jaccard=0.2117  score=0.6405  fileCov=0.2403
// note: deminified; 16 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zdo] deps: Q9, Ye, ps, dn, er, wr, aE, lJ, vi, gDe, Ko
((nxa = R(lt(), 1)), (FI = R(se(), 1)));
function pxa(e) {
  try {
    return (process.kill(e, 0), true);
  } catch {
    return false;
  }
}
function pwp() {
  let e = null;
  return () => {
    if (!e) e = V2r(process.ppid, 10).then((t) => new Set(t));
    return e;
  };
}
function lFn(e) {
  if (!e) return false;
  let t = zdt[e];
  return t && t.ideKind === "vscode";
}
function kre(e) {
  if (!e) return false;
  let t = zdt[e];
  return t && t.ideKind === "jetbrains";
}
function Kdo() {
  if (!uF()) return null;
  return Oe.terminal;
}
function Kdt(e = false) {
  if (Oe.CLAUDE_CODE_AUTO_CONNECT_IDE === false) return false;
  return Boolean(
    Dt().autoConnectIde ||
    e ||
    uF() ||
    Oe.CLAUDE_CODE_SSE_PORT !== void 0 ||
    Oe.CLAUDE_CODE_AUTO_CONNECT_IDE === true,
  );
}
async function uFn() {
  try {
    let e = await getIdeLockfilesPaths();
    return (
      await Promise.all(
        e.map(async (n) => {
          try {
            let o = (await qt().readdir(n)).filter((i) => i.name.endsWith(".lock"));
            return (
              await Promise.all(
                o.map(async (i) => {
                  let a = h$.join(n, i.name);
                  try {
                    let l = await qt().stat(a);
                    return {
                      path: a,
                      mtime: l.mtime,
                    };
                  } catch {
                    return null;
                  }
                }),
              )
            ).filter((i) => i !== null);
          } catch (r) {
            if (!Vo(r)) ke(r);
            return [];
          }
        }),
      )
    )
      .flat()
      .sort((n, r) => r.mtime.getTime() - n.mtime.getTime())
      .map((n) => n.path);
  } catch (e) {
    return (ke(e), []);
  }
}
async function fxa(e) {
  try {
    let t = await qt().readFile(e, {
        encoding: "utf-8",
      }),
      n = [],
      r,
      o,
      s = false,
      i = false,
      a;
    try {
      let u = Ft(t);
      if (u.workspaceFolders) n = u.workspaceFolders;
      ((r = u.pid),
        (o = u.ideName),
        (s = u.transport === "ws"),
        (i = u.runningInWindows === true),
        (a = u.authToken));
    } catch (u) {
      n = t
        .split(
          `
`,
        )
        .map((d) => d.trim());
    }
    let l = e.split(h$.sep).pop();
    if (!l) return null;
    let c = l.replace(".lock", "");
    return {
      workspaceFolders: n,
      port: parseInt(c),
      pid: r,
      ideName: o,
      useWebSocket: s,
      runningInWindows: i,
      authToken: a,
    };
  } catch (t) {
    return (
      T(`Failed to read IDE lockfile ${e}: ${be(t)}`, {
        level: "error",
      }),
      null
    );
  }
}
async function checkIdeConnection(host, port, n = 500) {
  try {
    return new Promise((r) => {
      let o = uxa.createConnection({
        host: host,
        port: port,
        timeout: n,
      });
      (o.on("connect", () => {
        (o.destroy(), r(true));
      }),
        o.on("error", () => {
          r(false);
        }),
        o.on("timeout", () => {
          (o.destroy(), r(false));
        }));
    });
  } catch (r) {
    return false;
  }
}
async function getIdeLockfilesPaths() {
  let e = [h$.join(tr(), "ide")];
  if (process.env.CLAUDE_CONFIG_DIR?.trim())
    e.push(h$.join(dxa.homedir(), ".claude", "ide").normalize("NFC"));
  if (Vt() === "wsl") {
    let r = await fwp();
    if (r) {
      let s = await new I0e(process.env.WSL_DISTRO_NAME).toLocalPath(r);
      e.push(h$.resolve(s, ".claude", "ide"));
    }
    try {
      let s = await qt().readdir("/mnt/c/Users");
      for (let i of s) {
        if (!i.isDirectory() && !i.isSymbolicLink()) continue;
        if (
          i.name === "Public" ||
          i.name === "Default" ||
          i.name === "Default User" ||
          i.name === "All Users"
        )
          continue;
        e.push(h$.join("/mnt/c/Users", i.name, ".claude", "ide"));
      }
    } catch (o) {
      if (Vo(o)) T(`WSL IDE lockfile path detection failed (${o.code}): ${be(o)}`);
      else
        T(`WSL IDE lockfile path detection failed unexpectedly: ${be(o)}`, {
          level: "error",
        });
    }
  }
  let t = new Set(),
    n = [];
  for (let r of e) {
    let o = await cxa.realpath(r).catch(() => h$.resolve(r));
    if (t.has(o)) continue;
    (t.add(o), n.push(r));
  }
  return n;
}
async function gwp() {
  try {
    let e = await uFn();
    for (let t of e) {
      let n = await fxa(t);
      if (!n) {
        try {
          await qt().unlink(t);
        } catch (s) {
          T(`Failed to delete unreadable IDE lockfile ${t}: ${s}`, {
            level: "error",
          });
        }
        continue;
      }
      let r = await Hxa(n.runningInWindows, n.port),
        o = false;
      if (n.pid) {
        if (!pxa(n.pid)) {
          if (Vt() !== "wsl") o = true;
          else if (!(await checkIdeConnection(r, n.port))) o = true;
        }
      } else if (!(await checkIdeConnection(r, n.port))) o = true;
      if (o)
        try {
          await qt().unlink(t);
        } catch (s) {
          T(`Failed to remove stale IDE lockfile ${t}: ${be(s)}`, {
            level: "error",
          });
        }
    }
  } catch (e) {
    ke(e);
  }
}
async function maybeInstallIDEExtension(ideType) {
  try {
    let t = await installIDEExtension(ideType);
    if (
      (G("tengu_ext_installed", {
        ide_type: $e(ideType),
        installed_version: t == null ? void 0 : tS(t),
      }),
      xe("ide_extension_install"),
      !Dt().diffTool)
    )
      gn((r) => ({
        ...r,
        diffTool: "auto",
      }));
    return {
      installed: true,
      error: null,
      installedVersion: t,
      ideType: ideType,
    };
  } catch (t) {
    (G("tengu_ext_install_error", {
      ide_type: $e(ideType),
      error_code: BJe(t),
    }),
      Le("ide_extension_install", "ide_extension_install_failed"));
    let n = t instanceof Error ? t.message : String(t);
    return (
      T(`IDE extension install failed: ${n}`, {
        level: "error",
      }),
      {
        installed: false,
        error: n,
        installedVersion: null,
        ideType: ideType,
      }
    );
  }
}
async function aFn() {
  if (hqe) hqe.abort();
  hqe = Sl();
  let e = hqe.signal;
  await gwp();
  let t = Date.now();
  while (Date.now() - t < 30000 && !e.aborted) {
    if (WBe()) {
      await Nn(1000, e);
      continue;
    }
    let n = await detectIDEs(false);
    if (e.aborted) return null;
    if (n.length === 1) return n[0];
    await Nn(1000, e);
  }
  return null;
}
function dFn() {
  if (hqe) (hqe.abort(), (hqe = null));
}
async function detectIDEs(includeInvalid) {
  let t = [];
  try {
    let n = process.env.CLAUDE_CODE_SSE_PORT,
      r = n ? parseInt(n) : null,
      o = yr().normalize("NFC"),
      s = await uFn(),
      i = await Promise.all(s.map(fxa)),
      a = pwp(),
      l = Vt() !== "wsl" && uF();
    for (let c of i) {
      if (!c) continue;
      let u = false;
      if (ut(process.env.CLAUDE_CODE_IDE_SKIP_VALID_CHECK)) u = true;
      else if (c.port === r) u = true;
      else
        for (let m of c.workspaceFolders) {
          if (!m) continue;
          let g = m;
          if (Vt() === "wsl" && c.runningInWindows && process.env.WSL_DISTRO_NAME) {
            if (!z9i(m, process.env.WSL_DISTRO_NAME)) continue;
            let y = h$.resolve(g).normalize("NFC");
            if (o === y || o.startsWith(y + h$.sep)) {
              u = true;
              break;
            }
            g = await new I0e(process.env.WSL_DISTRO_NAME).toLocalPath(m);
          }
          let h = h$.resolve(g).normalize("NFC");
          if (Vt() === "windows") {
            let y = o.replace(/^[a-zA-Z]:/, (_) => _.toUpperCase()),
              b = h.replace(/^[a-zA-Z]:/, (_) => _.toUpperCase());
            if (y === b || y.startsWith(b + h$.sep)) {
              u = true;
              break;
            }
            continue;
          }
          if (o === h || o.startsWith(h + h$.sep)) {
            u = true;
            break;
          }
        }
      if (!u && !includeInvalid) continue;
      if (l) {
        if (!(r !== null && c.port === r)) {
          if (!c.pid || !pxa(c.pid)) continue;
          if (process.ppid !== c.pid) {
            if (!(await a()).has(c.pid)) continue;
          }
        }
      }
      let d = c.ideName ? hxa(c.ideName) : uF() ? yk(h1.terminal) : "IDE",
        p = await Hxa(c.runningInWindows, c.port),
        f;
      if (c.useWebSocket) f = `ws://${p}:${c.port}`;
      else f = `http://${p}:${c.port}/sse`;
      t.push({
        url: f,
        name: d,
        workspaceFolders: c.workspaceFolders,
        port: c.port,
        isValid: u,
        authToken: c.authToken,
        ideRunningInWindows: c.runningInWindows,
      });
    }
    if (!includeInvalid && r) {
      let c = t.filter((u) => u.isValid && u.port === r);
      if (c.length === 1) return (xe("ide_detect"), c);
    }
    xe("ide_detect");
  } catch (n) {
    (ke(n), It("ide_detect", "ide_detect_failed"));
  }
  return t;
}
async function maybeNotifyIDEConnected(client) {
  await client.notification({
    method: "ide_connected",
    params: {
      pid: process.pid,
    },
  });
}
function yqe(e) {
  return e.some((t) => t.type === "connected" && t.name === "ide");
}
async function isIDEExtensionInstalled(ideType) {
  if (lFn(ideType)) {
    let t = await fFn(ideType);
    if (t)
      try {
        if (
          (
            await Gr(t, ["--list-extensions"], {
              env: Jdo(),
            })
          ).stdout?.includes(ywp)
        )
          return true;
      } catch {}
  } else if (kre(ideType)) return await QIa(ideType);
  return false;
}
async function installIDEExtension(ideType) {
  if (lFn(ideType)) {
    let t = await fFn(ideType);
    if (t) {
      let n = await getInstalledVSCodeExtensionVersion(t);
      if (!n || qte(n, axa())) {
        await Nn(500);
        let r = await Gr(t, ["--force", "--install-extension", "anthropic.claude-code"], {
          env: Jdo(),
        });
        if (r.code !== 0)
          throw Object.assign(Error(`${r.code}: ${r.error} ${r.stderr}`), {
            code: `EXIT_${r.code}`,
          });
        n = axa();
      }
      return n;
    }
  }
  return null;
}
function Jdo() {
  if (Vt() === "linux")
    return {
      ...process.env,
      DISPLAY: "",
    };
  return;
}
function axa() {
  return {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
  }.VERSION;
}
async function getInstalledVSCodeExtensionVersion(command) {
  let { stdout: t } = await $n(command, ["--list-extensions", "--show-versions"], {
      env: Jdo(),
    }),
    n =
      t?.split(`
`) || [];
  for (let r of n) {
    let [o, s] = r.split("@");
    if (o === "anthropic.claude-code" && s) return s;
  }
  return null;
}
function supportedIdeConfigs(e) {
  let t = e.toLowerCase();
  if (t.includes("windsurf") || t.includes("devin")) return "windsurf";
  if (t.includes("cursor")) return "cursor";
  if (
    !t.includes("insiders") &&
    (t.includes("vscode") ||
      t.includes("vs code") ||
      t.includes("visual studio code") ||
      t.includes("vscodium") ||
      t.includes("code - oss"))
  )
    return "vscode";
  return null;
}
function hxa(e) {
  return e.replace(/windsurf/gi, "Devin Desktop");
}
async function fFn(e, t) {
  let n = Ewp[e];
  if (!n) return null;
  if (e === "vscode" && t) n = t.toLowerCase().includes("vscodium") ? ["codium"] : ["code"];
  let r = await Swp();
  if (r && n.includes(h$.basename(r)))
    try {
      return (await qt().stat(r), r);
    } catch {}
  let o = Vt() === "windows" ? ".cmd" : "";
  return n[0] + o;
}
async function isCursorInstalled() {
  return (await $n("cursor", ["--version"])).code === 0;
}
async function isWindsurfInstalled() {
  if ((await $n("windsurf", ["--version"])).code === 0) return true;
  return (await $n("devin-desktop", ["--version"])).code === 0;
}
async function isVSCodeInstalled() {
  let e = await $n("code", ["--help"]);
  return e.code === 0 && Boolean(e.stdout?.includes("Visual Studio Code"));
}
async function detectRunningIDEsImpl() {
  let e = [];
  try {
    let t = Vt();
    if (t === "macos") {
      let r =
        (
          await S0(
            'ps aux | grep -E "Visual Studio Code|Code Helper|Cursor Helper|Windsurf Helper|Devin Helper|Devin.app|IntelliJ IDEA|PyCharm|WebStorm|PhpStorm|RubyMine|CLion|GoLand|Rider|DataGrip|AppCode|DataSpell|Aqua|Gateway|Fleet|Android Studio" | grep -v grep',
            {
              reject: false,
            },
          )
        ).stdout ?? "";
      for (let [o, s] of Object.entries(zdt))
        for (let i of s.processKeywordsMac)
          if (r.includes(i)) {
            e.push(o);
            break;
          }
    } else if (t === "windows") {
      let o = (
        (
          await S0(
            'tasklist | findstr /I "Code.exe Cursor.exe Windsurf.exe Devin.exe idea64.exe pycharm64.exe webstorm64.exe phpstorm64.exe rubymine64.exe clion64.exe goland64.exe rider64.exe datagrip64.exe appcode.exe dataspell64.exe aqua64.exe gateway64.exe fleet.exe studio64.exe"',
            {
              reject: false,
            },
          )
        ).stdout ?? ""
      ).toLowerCase();
      for (let [s, i] of Object.entries(zdt))
        for (let a of i.processKeywordsWindows)
          if (o.includes(a.toLowerCase())) {
            e.push(s);
            break;
          }
    } else if (t === "linux") {
      let o = (
        (
          await S0(
            'ps aux | grep -E "code|cursor|windsurf|devin-desktop|idea|pycharm|webstorm|phpstorm|rubymine|clion|goland|rider|datagrip|dataspell|aqua|gateway|fleet|android-studio" | grep -v grep',
            {
              reject: false,
            },
          )
        ).stdout ?? ""
      ).toLowerCase();
      for (let [s, i] of Object.entries(zdt))
        for (let a of i.processKeywordsLinux)
          if (o.includes(a)) {
            if (s !== "vscode") {
              e.push(s);
              break;
            } else if (!o.includes("cursor") && !o.includes("appcode")) {
              e.push(s);
              break;
            }
          }
    }
  } catch (t) {
    T(`IDE process detection failed: ${t}`, {
      level: "error",
    });
  }
  return e;
}
async function Qdo() {
  let e = await detectRunningIDEsImpl();
  return ((Xdo = e), e);
}
async function Sxa() {
  if (Xdo === null) return Qdo();
  return Xdo;
}
function R3t(e) {
  let t = e.find((n) => n.type === "connected" && n.name === "ide");
  return getIdeClientName(t);
}
function getIdeClientName(ideClient) {
  let t = ideClient?.config;
  return t?.type === "sse-ide" || t?.type === "ws-ide"
    ? hxa(t.ideName)
    : uF()
      ? yk(h1.terminal)
      : null;
}
function yk(e) {
  if (!e) return "IDE";
  let t = zdt[e];
  if (t) return t.displayName;
  let n = lxa[e.toLowerCase().trim()];
  if (n) return n;
  let r = bi(e, " "),
    o = r ? h$.basename(r).toLowerCase() : null;
  if (o) {
    let s = lxa[o];
    if (s) return s;
    return mqe(o);
  }
  return mqe(e);
}
function p5(e) {
  if (!e) return;
  let t = e.find((n) => n.type === "connected" && n.name === "ide");
  return t?.type === "connected" ? t : void 0;
}
async function closeOpenDiffs(ideClient) {
  try {
    await Rre("closeAllDiffTabs", {}, ideClient);
  } catch (t) {}
}
async function initializeIdeIntegration(
  onIdeDetected,
  ideToInstallExtension,
  onShowIdeOnboarding,
  onInstallationComplete,
  o,
) {
  aFn().then(onIdeDetected);
  let s = Dt().autoInstallIdeExtension ?? true;
  if (!ut(process.env.CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL) && s) {
    let i = ideToInstallExtension ?? Kdo();
    if (i) {
      if (lFn(i))
        isIDEExtensionInstalled(i).then(async (a) => {
          maybeInstallIDEExtension(i)
            .catch((l) => ({
              installed: false,
              error: l.message || "Installation failed",
              installedVersion: null,
              ideType: i,
            }))
            .then((l) => {
              if ((onInstallationComplete(l), l?.installed && !o?.aborted))
                aFn().then(onIdeDetected);
              if (!a && l?.installed === true && !sxa().hasIdeOnboardingDialogBeenShown())
                onShowIdeOnboarding();
            });
        });
      else if (kre(i))
        isIDEExtensionInstalled(i).then(async (a) => {
          if (a && !sxa().hasIdeOnboardingDialogBeenShown()) onShowIdeOnboarding();
        });
    }
  }
}
var cxa,
  uxa,
  dxa,
  h$,
  sxa = () => (zdo(), ro(oxa)),
  zdt,
  k3t,
  cFn,
  uF,
  fwp,
  hqe = null,
  ywp = "anthropic.claude-code",
  Swp,
  Ewp,
  Xdo = null,
  lxa,
  Hxa;
