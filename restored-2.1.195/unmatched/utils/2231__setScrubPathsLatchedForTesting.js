// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j1i
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 11 renamed
// ─────────────────────────────────────────────────────────────────────────
var j1i = E(() => {
  t1d = /[ \t\n\v\f\r'"]/;
});
var K1i = {};
_t(K1i, {
  subprocessEnv: () => subprocessEnv,
  shouldUseMcpAllowlistEnv: () => shouldUseMcpAllowlistEnv,
  setSettingsColorEnv: () => setSettingsColorEnv,
  scrubSandboxConfig: () => scrubSandboxConfig,
  registerAgentProxyEnvFn: () => registerAgentProxyEnvFn,
  isScrubSandboxAvailable: () => isScrubSandboxAvailable,
  isScrubEnabled: () => isScrubEnabled,
  enforceScriptCaps: () => enforceScriptCaps,
  assertScrubSandboxAvailable: () => assertScrubSandboxAvailable,
  agentProxyEnv: () => agentProxyEnv,
  _setScrubPathsLatchedForTesting: () => l1d,
  _resetScrubLatchForTesting: () => a1d,
  _resetScriptCapsForTesting: () => V1i,
  BG_WORKER_IDENTITY_ENV_VARS: () => BG_WORKER_IDENTITY_ENV_VARS
});
function isScrubEnabled() {
  if (Kkn === void 0) Kkn = ut(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
  return Kkn;
}
function i1d() {
  if (isScrubEnabled()) return !0;
  if (ml(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function isScrubSandboxAvailable() {
  if (Ykn !== void 0) return Ykn;
  return qkn() !== null;
}
async function assertScrubSandboxAvailable() {
  if (!isScrubEnabled()) return;
  let e = xKr.homedir(),
    t = yr(),
    n = process.env.GITHUB_ENV ? pce.dirname(process.env.GITHUB_ENV) : void 0,
    r = process.env.GITHUB_WORKSPACE;
  if (Ykn = qkn() !== null, n8 = {
    home: e,
    originalCwd: t,
    claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
    runnerFileCommandsDir: n,
    workspace: r,
    GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
    GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH
  }, n8.pathDirs = (process.env.PATH ?? "").split(":").map(l => l ? pce.posix.normalize(l).replace(/\/+$/, "") : l).filter(l => l && W1i.some(c => l.startsWith(`${c}/`))), q1i(), qkn() === null) {
    let l = kNt();
    throw Error(l ? `sandbox.bwrapPath is set to ${l} but it is not an executable file. Fix the path in managed settings, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to disable (loses subprocess isolation).` : "bubblewrap is required for subprocess env scrubbing and isolation. Install with: sudo apt-get install -y bubblewrap, set sandbox.bwrapPath in managed settings, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to disable (loses subprocess isolation).");
  }
  let {
    appendFile: o,
    mkdir: s,
    open: i
  } = await import("fs/promises");
  try {
    Xst();
  } catch {}
  for (let l of [`${e}/.gitconfig`, `${e}/.bash_profile`, `${e}/.bashrc`, `${e}/.bash_aliases`, `${e}/.profile`, `${e}/.zshrc`, `${e}/.bunfig.toml`, `${e}/.netrc`, `${e}/.npmrc`, `${e}/.yarnrc`, `${e}/.yarnrc.yml`, `${t}/.npmrc`, `${t}/.yarnrc`, `${t}/.yarnrc.yml`, `${t}/bunfig.toml`, `${t}/package.json`, `${t}/.gitmodules`, `${t}/package-lock.json`, `${t}/yarn.lock`, `${t}/pnpm-lock.yaml`, "/tmp/inline-comments-buffer.jsonl", ...wKr.map(c => `${t}/${c}`)]) try {
    await s(pce.dirname(l), {
      recursive: !0
    }), await (await i(l, "a")).close();
  } catch {}
  for (let l of [`${e}/.config/gh`, `${e}/.config/git`, `${e}/.config/pip`, `${e}/.pip`, `${t}/.claude/commands`, `${t}/.claude/agents`, `${t}/node_modules/.bin`, ...(n ? [n] : []), ...n8.pathDirs]) try {
    await s(l, {
      recursive: !0
    });
  } catch {}
  if (r && pce.posix.resolve(r) !== pce.posix.resolve(t)) {
    await s(`${r}/.git/hooks`).catch(() => {}), await s(`${r}/.git/modules`).catch(() => {}), await s(`${r}/.git/worktrees`).catch(() => {}), await s(`${r}/.git/info`).catch(() => {}), await s(`${r}/.github`, {
      recursive: !0
    }).catch(() => {});
    for (let l of [`${r}/.git/config`, `${r}/.git/config.worktree`, `${r}/.git/info/exclude`, `${r}/.gitmodules`]) try {
      await (await i(l, "a")).close();
    } catch {}
    try {
      let l = await i(`${r}/.git/commondir`, "wx");
      await l.writeFile(G1i), await l.close();
    } catch {}
  }
  let a = ["bunfig.toml", "package.json", ".npmrc", ".yarnrc", ".yarnrc.yml", ".gitmodules", "package-lock.json", "yarn.lock", "pnpm-lock.yaml", ...wKr];
  await s(`${t}/.git/info`).catch(() => {}), await s(`${t}/.git/modules`).catch(() => {}), await s(`${t}/.git/worktrees`).catch(() => {});
  try {
    await (await i(`${t}/.git/config.worktree`, "a")).close();
  } catch {}
  try {
    let l = await i(`${t}/.git/commondir`, "wx");
    await l.writeFile(G1i), await l.close();
  } catch {}
  try {
    await o(`${t}/.git/info/exclude`, `
# claude-code scrub-mode stubs
${a.map(l => `/${l}`).join(`
`)}
`);
  } catch {}
}
function q1i() {
  if (Ike !== void 0) return;
  let e = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!e) {
    Ike = null;
    return;
  }
  try {
    let t = Ft(e);
    if (t && typeof t === "object" && !Array.isArray(t)) {
      let n = cv(t, (r, o) => typeof r === "number" && Number.isFinite(r) && o.trim().length > 0);
      Ike = Object.keys(n).length > 0 ? n : null;
    } else Ike = null;
  } catch {
    Ike = null;
  }
}
function V1i() {
  CKr.clear(), Ike = void 0;
}
function a1d() {
  Kkn = void 0, Ykn = void 0, n8 = void 0, V1i();
}
function l1d(e) {
  n8 = e;
}
function enforceScriptCaps(e) {
  if (!isScrubEnabled()) return;
  if (q1i(), !Ike) return;
  let t = Ike;
  for (let [n, r] of Object.entries(t)) {
    let o = e.split(n).length - 1;
    if (o > 0) {
      let s = (CKr.get(n) ?? 0) + o;
      if (CKr.set(n, s), s > r) throw Error(`Script call limit exceeded: ${n} has been called ${s} times (cap: ${r}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`);
    }
  }
}
function registerAgentProxyEnvFn(e) {
  z1i = e;
}
function agentProxyEnv() {
  return z1i?.() ?? {};
}
function setSettingsColorEnv(e) {
  IKr = e;
}
function subprocessEnv() {
  let e = agentProxyEnv(),
    t = Object.keys(e).length > 0,
    n = Object.keys(IKr).length > 0,
    r = ut(process.env.CLAUDE_CODE_REMOTE) ? F1i(t ? {
      ...process.env,
      ...e
    } : process.env) : {},
    o = Object.keys(r).length > 0,
    s = i1d(),
    i = process.env.CLAUDE_CODE_OAUTH_TOKEN !== void 0 || process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 || process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0 || process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== void 0 || Oe.CLAUDE_BG_SOCKET_TOKENS_PATH !== void 0 || Oe.CLAUDE_BG_RV_AUTH !== void 0 || Oe.CLAUDE_BG_PTY_AUTH !== void 0,
    a = !1;
  a = BG_WORKER_IDENTITY_ENV_VARS.some(u => process.env[u] !== void 0);
  let l = Object.keys(process.env).some(u => u.startsWith("OTEL_") || u === "CLAUDE_CODE_OTEL_DIAG_STDERR");
  if (!t && !o && !s && !a && !i && !l && !n) return process.env;
  let c = {
    ...process.env,
    ...IKr,
    ...e,
    ...r
  };
  delete c.CLAUDE_CODE_OAUTH_TOKEN, delete c.CLAUDE_CODE_SUBSCRIPTION_TYPE, delete c.CLAUDE_CODE_RATE_LIMIT_TIER, delete c.CLAUDE_BG_AUTH_SNAPSHOT_PATH, delete c.CLAUDE_BG_SOCKET_TOKENS_PATH, delete c.CLAUDE_BG_RV_AUTH, delete c.CLAUDE_BG_PTY_AUTH;
  for (let u of BG_WORKER_IDENTITY_ENV_VARS) delete c[u];
  for (let u of Object.keys(c)) if (u.startsWith("OTEL_")) delete c[u];
  if (delete c.CLAUDE_CODE_OTEL_DIAG_STDERR, !s) return c;
  for (let u of c1d) delete c[u], delete c[`INPUT_${u}`];
  return c;
}
function shouldUseMcpAllowlistEnv() {
  let e = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (ut(e)) return !0;
  if (ml(e)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function scrubSandboxConfig() {
  let e = n8?.home ?? xKr.homedir(),
    t = n8?.originalCwd ?? yr(),
    n = n8?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH,
    r = n8?.runnerFileCommandsDir ?? (process.env.GITHUB_ENV ? pce.dirname(process.env.GITHUB_ENV) : void 0),
    o = n8?.workspace ?? process.env.GITHUB_WORKSPACE,
    s = o && pce.posix.resolve(o) !== pce.posix.resolve(t) ? [`${o}/.git/hooks`, `${o}/.git/config`, `${o}/.git/config.lock`, `${o}/.git/config.worktree`, `${o}/.git/config.worktree.lock`, `${o}/.git/commondir`, `${o}/.git/worktrees`, `${o}/.git/modules`, `${o}/.git/info/exclude`, `${o}/.gitmodules`, `${o}/.github`] : [];
  return {
    filesystem: {
      allowWrite: W1i,
      denyRead: ["/run/docker.sock", "/run/containerd/containerd.sock", "/run/podman/podman.sock", "/run/buildkit/buildkitd.sock", "/run/dbus", "/run/user"],
      denyWrite: [`${e}/.bash_profile`, `${e}/.bashrc`, `${e}/.bash_aliases`, `${e}/.bash_login`, `${e}/.bash_logout`, `${e}/.profile`, `${e}/.zshrc`, `${e}/.zprofile`, `${e}/.zshenv`, `${e}/.zlogin`, `${e}/.zlogout`, `${e}/.claude`, `${e}/.claude.json`, n8?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR, `${e}/.gitconfig`, `${e}/.config/git`, `${e}/.bunfig.toml`, `${t}/bunfig.toml`, `${t}/package.json`, ...wKr.map(i => `${t}/${i}`), `${e}/.npmrc`, `${t}/.npmrc`, `${e}/.yarnrc`, `${e}/.yarnrc.yml`, `${t}/.yarnrc`, `${t}/.yarnrc.yml`, `${e}/.config/pip`, `${e}/.pip`, `${t}/package-lock.json`, `${t}/yarn.lock`, `${t}/pnpm-lock.yaml`, `${t}/node_modules/.bin`, `${t}/.git/modules`, `${t}/scripts`, `${t}/.claude`, `${t}/.github`, `${e}/.local/bin`, `${e}/runners`, `${e}/actions-runner`, "/tmp/inline-comments-buffer.jsonl", ...(n8?.pathDirs ?? []), r, n, n && n.includes("/_actions/") ? n.slice(0, n.indexOf("/_actions/") + 9) : void 0, n8?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH, `${e}/.config/gh`, `${e}/.netrc`, `${e}/.ssh`, `${t}/.git/hooks`, `${t}/.git/config`, `${t}/.git/config.lock`, `${t}/.git/config.worktree`, `${t}/.git/config.worktree.lock`, `${t}/.git/commondir`, `${t}/.git/worktrees`, `${t}/.gitmodules`, `${t}/.git/info/exclude`, ...s].filter(i => !!i)
    }
  };
}
var xKr,
  pce,
  BG_WORKER_IDENTITY_ENV_VARS,
  Kkn,
  wKr,
  W1i,
  G1i = ".",
  Ykn,
  n8,
  CKr,
  Ike,
  c1d,
  z1i,
  IKr;