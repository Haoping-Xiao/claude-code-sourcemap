// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ag
// matched 2.1.88 source: src/utils/claudeInChrome/common.ts
// class=modified (alt of src/utils/claudeInChrome/common.ts)  jaccard=0.158  score=0.3231  fileCov=0.2361
// note: deminified; 17 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ag = E(() => {
  IB();
  Xr();
  ft();
  kt();
  Pw();
  Rm();
  je();
  wr();
  fn();
  At();
  vn();
  zH();
  Jt();
  HO();
  VGe();
  ((fT = require("fs/promises")),
    (oS = require("path")),
    (Yzi = /^[a-f0-9]{8}$/),
    (mKd = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/));
  zzi = ve(() =>
    H.object({
      state: H.string(),
      detail: H.string(),
      tempo: H.enum(["active", "idle", "blocked"])
        .optional()
        .catch(void 0),
      inFlight: H.object({
        tasks: H.number(),
        queued: H.number(),
        kinds: H.array(H.string()),
      }).optional(),
      fan: H.array(
        H.object({
          id: H.string().optional(),
          kind: H.enum(["agent", "workflow", "shell", "monitor", "mcp", "todo"])
            .optional()
            .catch(void 0),
          label: H.string(),
          startedAt: H.number().optional(),
          doneAt: H.number().optional(),
          failed: H.boolean().optional(),
          group: H.string().optional(),
        }),
      ).optional(),
      budget: H.object({
        spent: H.number(),
        target: H.number(),
      }).optional(),
      tokens: H.number().optional(),
      needs_you: H.boolean().optional(),
      needs: H.string().optional(),
      block: H.object({
        questions: H.array(
          H.object({
            question: H.string(),
            options: H.array(
              H.object({
                label: H.string(),
                description: H.string(),
              }),
            ),
          }),
        ),
      }).optional(),
      suggestedReply: H.string().optional(),
      output: H.record(H.string(), H.string()).nullable().default(null),
      structuredResult: H.record(H.string(), H.unknown()).optional(),
      children: H.array(
        H.object({
          id: H.string(),
          href: H.string(),
          kind: H.enum(["pr", "frame"])
            .optional()
            .catch(void 0),
        }),
      )
        .nullable()
        .default(null),
      linkScanOffset: H.number().default(0),
      linkScanPath: qUt()
        .transform(
          VUt(
            "linkScanPath",
            (e) =>
              oS.isAbsolute(e) && e.endsWith(".jsonl") && yD(oS.basename(e, ".jsonl")) !== null,
          ),
        )
        .optional(),
      template: H.string(),
      routine: H.string().optional(),
      respawnFlags: H.array(H.string())
        .default([])
        .transform((e) => T8(j0e(e))),
      bgIsolation: H.enum(["none", "worktree"])
        .optional()
        .catch(void 0),
      providerEnv: H.record(H.string(), H.string())
        .transform((e) => {
          let t = Vzi(e);
          return t && xw(t, tv);
        })
        .optional(),
      sessionPermissionRules: H.object({
        allow: H.array(H.string()),
        deny: H.array(H.string()),
      }).optional(),
      memoryToggledOff: H.boolean().optional(),
      intent: H.string(),
      displayIntent: H.string().optional(),
      initialPrompt: H.string().optional(),
      queuedPrompt: H.string().optional(),
      name: H.string().optional(),
      nameSource: H.enum(["user", "auto"])
        .optional()
        .catch(void 0),
      color: H.string().optional(),
      sessionId: qUt(),
      resumeSessionId: H.string()
        .transform(VUt("resumeSessionId", (e) => yD(e) !== null))
        .optional(),
      daemonShort: H.string()
        .transform(VUt("daemonShort", (e) => Yzi.test(e)))
        .optional(),
      cliVersion: H.string().optional(),
      cwd: qUt(),
      createdAt: H.string(),
      updatedAt: H.string(),
      firstTerminalAt: H.string().nullable().default(null),
      worktreePath: qUt().optional(),
      worktreeBranch: H.string().optional(),
      worktreeHookBased: H.boolean().optional(),
      originCwd: qUt().optional(),
      bridgeSessionId: H.string()
        .transform(VUt("bridgeSessionId", (e) => mKd.test(e)))
        .optional(),
      bridgeOutboundOnly: H.boolean().optional(),
      bridgeSessionSeq: H.number()
        .transform(VUt("bridgeSessionSeq", (e) => Number.isInteger(e) && e >= 0))
        .optional(),
      backend: H.enum(["daemon", "peer", "remote"])
        .catch("daemon")
        .default("daemon")
        .transform((e) => {
          if (e === "daemon") return e;
          return (
            T(
              `[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`,
              {
                level: "warn",
              },
            ),
            "daemon"
          );
        }),
      sock: H.string().optional(),
      pid: H.number().optional(),
      sortOrder: H.number().optional(),
      stateSortOrder: H.number().optional(),
      pinned: H.boolean().optional(),
    }).transform(({ needs_you: e, ...t }) => ({
      ...t,
      tempo: t.tempo ?? (e ? "blocked" : "idle"),
    })),
  );
  ((Nne = new Map()), (G0e = new Set()));
  Kzi = Promise.resolve();
  ((ult = `(idle \u2014 ${PW})`), (llt = ["starting", "resuming", "adopted", "crashed"]));
});
var dKi = {};
_t(dKi, {
  trackClaudeInChromeTabId: () => trackClaudeInChromeTabId,
  openInChrome: () => openInChrome,
  isTrackedClaudeInChromeTabId: () => isTrackedClaudeInChromeTabId,
  isInProductPermissionsEnabled: () => isInProductPermissionsEnabled,
  isClaudeInChromeMCPServer: () => isClaudeInChromeMCPServer,
  getSocketDir: () => getSocketDir,
  getSecureSocketPath: () => getSecureSocketPath,
  getAllWindowsRegistryKeys: () => getAllWindowsRegistryKeys,
  getAllSocketPaths: () => getAllSocketPaths,
  getAllNativeMessagingHostsDirs: () => getAllNativeMessagingHostsDirs,
  getAllBrowserDataPaths: () => getAllBrowserDataPaths,
  detectAvailableBrowser: () => detectAvailableBrowser,
  _resetTrackedTabIdsForTesting: () => SKd,
  CLAUDE_IN_CHROME_MCP_SERVER_NAME: () => CLAUDE_IN_CHROME_MCP_SERVER_NAME,
  CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL: () => CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL,
  CHROMIUM_BROWSERS: () => CHROMIUM_BROWSERS,
  CFC_TOOL_PREFIX: () => CFC_TOOL_PREFIX,
  BROWSER_DETECTION_ORDER: () => BROWSER_DETECTION_ORDER,
});
function isInProductPermissionsEnabled() {
  return at("tengu_cfc_in_product_permissions", false);
}
function getAllBrowserDataPaths() {
  let e = Vt(),
    t = _be.homedir(),
    n = [];
  for (let r of BROWSER_DETECTION_ORDER) {
    let o = CHROMIUM_BROWSERS[r],
      s;
    switch (e) {
      case "macos":
        s = o.macos.dataPath;
        break;
      case "linux":
      case "wsl":
        s = o.linux.dataPath;
        break;
      case "windows": {
        if (o.windows.dataPath.length > 0) {
          let i = o.windows.useRoaming
            ? v8.join(t, "AppData", "Roaming")
            : v8.join(t, "AppData", "Local");
          n.push({
            browser: r,
            path: v8.join(i, ...o.windows.dataPath),
          });
        }
        continue;
      }
    }
    if (s && s.length > 0)
      n.push({
        browser: r,
        path: v8.join(t, ...s),
      });
  }
  return n;
}
function getAllNativeMessagingHostsDirs() {
  let e = Vt(),
    t = _be.homedir(),
    n = [];
  for (let r of BROWSER_DETECTION_ORDER) {
    let o = CHROMIUM_BROWSERS[r];
    switch (e) {
      case "macos":
        if (o.macos.nativeMessagingPath.length > 0)
          n.push({
            browser: r,
            path: v8.join(t, ...o.macos.nativeMessagingPath),
          });
        break;
      case "linux":
      case "wsl":
        if (o.linux.nativeMessagingPath.length > 0)
          n.push({
            browser: r,
            path: v8.join(t, ...o.linux.nativeMessagingPath),
          });
        break;
      case "windows":
        break;
    }
  }
  return n;
}
function getAllWindowsRegistryKeys() {
  let e = [];
  for (let t of BROWSER_DETECTION_ORDER) {
    let n = CHROMIUM_BROWSERS[t];
    if (n.windows.registryKey)
      e.push({
        browser: t,
        key: n.windows.registryKey,
      });
  }
  return e;
}
async function detectAvailableBrowser() {
  let e = Vt();
  for (let t of BROWSER_DETECTION_ORDER) {
    let n = CHROMIUM_BROWSERS[t];
    switch (e) {
      case "macos": {
        let r = `/Applications/${n.macos.appName}.app`;
        try {
          if ((await KZr.stat(r)).isDirectory())
            return (T(`[Claude in Chrome] Detected browser: ${n.name}`), t);
        } catch (o) {
          if (!Vo(o)) throw o;
        }
        break;
      }
      case "wsl":
      case "linux": {
        for (let r of n.linux.binaries)
          if (await Gf(r).catch(() => null))
            return (T(`[Claude in Chrome] Detected browser: ${n.name}`), t);
        break;
      }
      case "windows": {
        let r = _be.homedir();
        if (n.windows.dataPath.length > 0) {
          let o = n.windows.useRoaming
              ? v8.join(r, "AppData", "Roaming")
              : v8.join(r, "AppData", "Local"),
            s = v8.join(o, ...n.windows.dataPath);
          try {
            if ((await KZr.stat(s)).isDirectory())
              return (T(`[Claude in Chrome] Detected browser: ${n.name}`), t);
          } catch (i) {
            if (!Vo(i)) throw i;
          }
        }
        break;
      }
    }
  }
  return null;
}
function isClaudeInChromeMCPServer(e) {
  return hc(e) === CLAUDE_IN_CHROME_MCP_SERVER_NAME;
}
function trackClaudeInChromeTabId(e) {
  if (dlt.size >= _Kd && !dlt.has(e)) dlt.clear();
  dlt.add(e);
}
function isTrackedClaudeInChromeTabId(e) {
  return dlt.has(e);
}
function SKd() {
  dlt.clear();
}
async function openInChrome(e) {
  let t = Vt(),
    n = await detectAvailableBrowser();
  if (!n)
    return (
      T("[Claude in Chrome] No compatible browser found"),
      Le("chrome_open_url", "no_browser"),
      false
    );
  let r = CHROMIUM_BROWSERS[n];
  switch (t) {
    case "macos": {
      let { code: o } = await $n("open", ["-a", r.macos.appName, e]);
      if (o === 0) return (xe("chrome_open_url"), true);
      return (Le("chrome_open_url", "exec_failed"), false);
    }
    case "windows": {
      let { code: o } = await $n("rundll32", ["url,OpenURL", e]);
      if (o === 0) return (xe("chrome_open_url"), true);
      return (Le("chrome_open_url", "exec_failed"), false);
    }
    case "wsl":
    case "linux": {
      for (let o of r.linux.binaries) {
        let { code: s } = await $n(o, [e]);
        if (s === 0) return (xe("chrome_open_url"), true);
      }
      return (Le("chrome_open_url", "exec_failed"), false);
    }
    default:
      return (Le("chrome_open_url", "exec_failed"), false);
  }
}
function getSocketDir() {
  return `/tmp/claude-mcp-browser-bridge-${eeo()}`;
}
function getSecureSocketPath() {
  if (_be.platform() === "win32") return `\\\\.\\pipe\\${uKi()}`;
  return v8.join(getSocketDir(), `${process.pid}.sock`);
}
function getAllSocketPaths() {
  if (_be.platform() === "win32") return [`\\\\.\\pipe\\${uKi()}`];
  let e = [],
    t = getSocketDir();
  try {
    let s = lKi.readdirSync(t);
    for (let i of s) if (i.endsWith(".sock")) e.push(v8.join(t, i));
  } catch {}
  let n = `claude-mcp-browser-bridge-${eeo()}`,
    r = v8.join(vU(), n),
    o = `/tmp/${n}`;
  if (!e.includes(r)) e.push(r);
  if (r !== o && !e.includes(o)) e.push(o);
  return e;
}
function uKi() {
  return `claude-mcp-browser-bridge-${eeo()}`;
}
function eeo() {
  try {
    return _be.userInfo().username || "default";
  } catch {
    return process.env.USER || process.env.USERNAME || "default";
  }
}
var lKi,
  KZr,
  _be,
  v8,
  CLAUDE_IN_CHROME_MCP_SERVER_NAME = "claude-in-chrome",
  CFC_TOOL_PREFIX,
  CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL = "ClaudeInChromeDomain",
  CHROMIUM_BROWSERS,
  BROWSER_DETECTION_ORDER,
  _Kd = 200,
  dlt;
