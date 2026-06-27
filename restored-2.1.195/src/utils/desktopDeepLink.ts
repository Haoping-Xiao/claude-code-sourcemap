// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m7t
// matched 2.1.88 source: src/utils/desktopDeepLink.ts
// class=modified  jaccard=0.4437  score=0.8111  fileCov=0.4948
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function isDevMode() {
  let e = [process.argv[1] || "", process.execPath || ""],
    t = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return e.some((n) => t.some((r) => n.includes(r)));
}
function buildDesktopDeepLink(e) {
  let t = isDevMode() ? "claude-dev" : "claude",
    n = new URL(`${t}://resume`);
  return (n.searchParams.set("session", e), n.toString());
}
async function isDesktopInstalled() {
  if (isDevMode()) return true;
  let e = "linux";
  if (e === "darwin") return ed("/Applications/Claude.app");
  else if (e === "linux") {
    let { code: t, stdout: n } = await $n("xdg-mime", [
      "query",
      "default",
      "x-scheme-handler/claude",
    ]);
    return t === 0 && n.trim().length > 0;
  } else if (e === "win32") {
    let { code: t } = await $n("reg", ["query", "HKEY_CLASSES_ROOT\\claude", "/ve"]);
    return t === 0;
  }
  return false;
}
async function L0f() {
  return null;
}
async function getDesktopInstallStatus() {
  if (!(await isDesktopInstalled()))
    return {
      status: "not-installed",
    };
  let t;
  try {
    t = await L0f();
  } catch {
    return {
      status: "ready",
      version: "unknown",
    };
  }
  if (!t)
    return {
      status: "ready",
      version: "unknown",
    };
  let n = DPl.coerce(t);
  if (!n || !aL(n.version, Jer))
    return {
      status: "version-too-old",
      version: t,
    };
  return {
    status: "ready",
    version: t,
  };
}
async function openDeepLink(e) {
  T(`Opening deep link: ${e}`);
  {
    let { code: n } = await $n("xdg-open", [e]);
    return n === 0;
  }
  return false;
}
async function MPl() {
  let e = Rt(),
    t = await getDesktopInstallStatus();
  if (t.status === "not-installed")
    return {
      success: false,
      error: "Claude Desktop is not installed. Install it from https://claude.ai/download",
    };
  if (t.status === "version-too-old")
    return {
      success: false,
      error: `Claude Desktop ${t.version} is too old to resume this session. Please update to ${Jer} or later.`,
    };
  let n = buildDesktopDeepLink(e);
  if (!(await openDeepLink(n)))
    return {
      success: false,
      error: "Failed to open Claude Desktop. Please try opening it manually.",
      deepLinkUrl: n,
    };
  return {
    success: true,
    deepLinkUrl: n,
  };
}
var DPl,
  Jer = "1.1.9669";
