// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rhl
// matched 2.1.88 source: src/utils/swarm/backends/it2Setup.ts
// class=modified  jaccard=0.5708  score=0.7922  fileCov=0.6714
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function detectPythonPackageManager() {
  if ((await $n("which", ["uv"])).code === 0)
    return (T("[it2Setup] Found uv (will use uv tool install)"), "uvx");
  if ((await $n("which", ["pipx"])).code === 0)
    return (T("[it2Setup] Found pipx package manager"), "pipx");
  if ((await $n("which", ["pip"])).code === 0)
    return (T("[it2Setup] Found pip package manager"), "pip");
  if ((await $n("which", ["pip3"])).code === 0)
    return (T("[it2Setup] Found pip3 package manager"), "pip");
  return (T("[it2Setup] No Python package manager found"), null);
}
async function hff() {
  return (await $n("which", ["it2"])).code === 0;
}
async function installIt2(packageManager) {
  T(`[it2Setup] Installing it2 using ${packageManager}`);
  let result;
  switch (packageManager) {
    case "uvx":
      result = await Gr("uv", ["tool", "install", "it2"], {
        cwd: K6t.homedir(),
      });
      break;
    case "pipx":
      result = await Gr("pipx", ["install", "it2"], {
        cwd: K6t.homedir(),
      });
      break;
    case "pip":
      if (
        ((result = await Gr("pip", ["install", "--user", "it2"], {
          cwd: K6t.homedir(),
        })),
        result.code !== 0)
      )
        result = await Gr("pip3", ["install", "--user", "it2"], {
          cwd: K6t.homedir(),
        });
      break;
  }
  if (result.code !== 0) {
    let n = result.stderr || "Unknown installation error";
    return (
      T(`[it2Setup] Failed to install it2: ${n}`, {
        level: "error",
      }),
      Le("swarm_iterm2_it2_install", `${packageManager}_install_failed`),
      {
        success: !1,
        error: n,
        packageManager: packageManager,
      }
    );
  }
  return (
    T("[it2Setup] it2 installed successfully"),
    xe("swarm_iterm2_it2_install"),
    {
      success: !0,
      packageManager: packageManager,
    }
  );
}
async function verifyIt2Setup() {
  if ((T("[it2Setup] Verifying it2 setup..."), !(await hff())))
    return (
      Le("swarm_iterm2_it2_verify", "not_installed"),
      {
        success: !1,
        error: "it2 CLI is not installed or not in PATH",
      }
    );
  let result = await $n("it2", ["session", "list"]);
  if (result.code !== 0) {
    let n = result.stderr.toLowerCase();
    if (
      n.includes("api") ||
      n.includes("python") ||
      n.includes("connection refused") ||
      n.includes("not enabled")
    )
      return (
        T("[it2Setup] Python API not enabled in iTerm2"),
        It("swarm_iterm2_it2_verify", "python_api_not_enabled"),
        {
          success: !1,
          error: "Python API not enabled in iTerm2 preferences",
          needsPythonApiEnabled: !0,
        }
      );
    return (
      Le("swarm_iterm2_it2_verify", "communication_failed"),
      {
        success: !1,
        error: result.stderr || "Failed to communicate with iTerm2",
      }
    );
  }
  return (
    T("[it2Setup] it2 setup verified successfully"),
    xe("swarm_iterm2_it2_verify"),
    {
      success: !0,
    }
  );
}
function getPythonApiInstructions() {
  return [
    "Almost done! Enable the Python API in iTerm2:",
    "",
    "  iTerm2 \u2192 Settings \u2192 General \u2192 Magic \u2192 Enable Python API",
    "",
    "After enabling, you may need to restart iTerm2.",
  ];
}
function markIt2SetupComplete() {
  if (Dt().iterm2It2SetupComplete !== !0)
    (gn((t) => ({
      ...t,
      iterm2It2SetupComplete: !0,
    })),
      T("[it2Setup] Marked it2 setup as complete"));
}
function setPreferTmuxOverIterm2(prefer) {
  if (Dt().preferTmuxOverIterm2 !== prefer)
    (gn((n) => ({
      ...n,
      preferTmuxOverIterm2: prefer,
    })),
      T(`[it2Setup] Set preferTmuxOverIterm2 = ${prefer}`));
}
function uhl() {
  return Dt().preferTmuxOverIterm2 === !0;
}
var K6t;
