// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nna
// matched 2.1.88 source: src/utils/sandbox/sandbox-adapter.ts
// class=modified  jaccard=0.1557  score=0.2708  fileCov=0.2681
// note: deminified; 14 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: shouldForceSandboxOn, shouldAllowManagedSandboxDomainsOnly, resolveSandboxFilesystemPath, resolvePathPatternForSandbox, isHostAllowedBySandboxNetworkPolicy, getTenguSandboxGbConfig, getEffectiveFilesystemPolicy, detectWorktreeGitCommonDir, convertToSandboxRuntimeConfig, addToExcludedCommands, addSandboxAllowWriteDirectory, SandboxViolationStore, SandboxManager, SandboxInitFailedError, SandboxBridgeUnavailableError, HOST_CEL_POLICIES
// [unwrapped __esm module Nna]
Ona = {};
function MWe(e) {
  let t = e.match(/^([^(]+)\(([^)]+)\)$/);
  if (!t)
    return {
      toolName: e,
    };
  let n = t[1],
    r = t[2];
  if (!n || !r)
    return {
      toolName: e,
    };
  return {
    toolName: n,
    ruleContent: r,
  };
}
function gnp(e) {
  return e.match(/^(.+):\*$/)?.[1] ?? null;
}
function resolvePathPatternForSandbox(e, t) {
  if (e.startsWith("//")) return e.slice(1);
  if (e.startsWith("/") && !e.startsWith("//")) {
    let n = a2e(t);
    return za.resolve(n, e.slice(1));
  }
  return e;
}
function resolveSandboxFilesystemPath(e, t) {
  if (e.startsWith("//")) return e.slice(1);
  return ds(e, a2e(t));
}
function getEffectiveFilesystemPolicy() {
  if (bI()) return "strict";
  let e = getTenguSandboxGbConfig().filesystemPolicy ?? "strict";
  if (e === "relaxedIfForced") return hnp() ? "strict" : "relaxed";
  return e;
}
function hnp() {
  return [
    ...zee(),
    yn("flagSettings"),
    Om("userSettings") ? yn("userSettings") : null,
    Om("projectSettings") ? yn("projectSettings") : null,
    Om("localSettings") ? yn("localSettings") : null,
  ].some((e) => e?.sandbox?.enabled === true);
}
function shouldAllowManagedSandboxDomainsOnly() {
  return zee().some((e) => e.sandbox?.network?.allowManagedDomainsOnly === true);
}
function Bna(e, t) {
  let n = t === "allow" ? "allowedDomains" : "deniedDomains",
    r = [];
  for (let o of e) {
    for (let s of o.sandbox?.network?.[n] ?? []) r.push(s);
    for (let s of o.permissions?.[t] ?? []) {
      let i = MWe(s);
      if (i.toolName === Sb && i.ruleContent?.startsWith("domain:"))
        r.push(i.ruleContent.substring(7));
    }
  }
  return r;
}
function isHostAllowedBySandboxNetworkPolicy(e) {
  let t = zee();
  if (Bna([jo(), ...t], "deny").some((o) => Sro(o, e)))
    return {
      allowed: false,
      reason: `${e} is in sandbox.network.deniedDomains`,
    };
  if (!shouldAllowManagedSandboxDomainsOnly())
    return {
      allowed: true,
    };
  if (Bna(t, "allow").some((o) => Sro(o, e)))
    return {
      allowed: true,
    };
  return {
    allowed: false,
    reason: `sandbox.network.allowManagedDomainsOnly is set and ${e} is not in the policy allowlist`,
  };
}
function ynp(e) {
  if (sOn.has(e)) return;
  (sOn.add(e), xro());
}
function tE(e) {
  let t;
  try {
    t = hT.readlinkSync(e);
  } catch {
    return e;
  }
  let n;
  try {
    return (
      (n = hT.realpathSync(e)),
      g2t.push({
        literal: e,
        resolved: n,
      }),
      n
    );
  } catch {
    let r = za.resolve(za.dirname(e), t);
    for (let o = 0; o < 8; o++) {
      let s;
      try {
        s = hT.readlinkSync(r);
      } catch {
        break;
      }
      r = za.resolve(za.dirname(r), s);
    }
    return (
      g2t.push({
        literal: e,
        resolved: r,
      }),
      r
    );
  }
}
function convertToSandboxRuntimeConfig(e) {
  let t = e.permissions || {},
    n = zee(),
    r = n.some(($) => $.sandbox?.network?.allowManagedDomainsOnly === true),
    o = n.some(($) => $.sandbox?.filesystem?.allowManagedReadPathsOnly === true),
    s = [],
    i = [];
  if (r)
    for (let $ of n) {
      for (let q of $.sandbox?.network?.allowedDomains || []) s.push(q);
      for (let q of $.permissions?.allow || []) {
        let W = MWe(q);
        if (W.toolName === Sb && W.ruleContent?.startsWith("domain:"))
          s.push(W.ruleContent.substring(7));
      }
    }
  else {
    for (let $ of e.sandbox?.network?.allowedDomains || []) s.push($);
    for (let $ of t.allow || []) {
      let q = MWe($);
      if (q.toolName === Sb && q.ruleContent?.startsWith("domain:"))
        s.push(q.ruleContent.substring(7));
    }
    for (let $ of sOn) s.push($);
  }
  for (let $ of e.sandbox?.network?.deniedDomains || []) i.push($);
  for (let $ of t.deny || []) {
    let q = MWe($);
    if (q.toolName === Sb && q.ruleContent?.startsWith("domain:"))
      i.push(q.ruleContent.substring(7));
  }
  let a = [".", YU()],
    l = y2t();
  if (l !== YU()) a.push(l);
  let c = [],
    u = [],
    d = [];
  g2t.length = 0;
  let p = fv.map(($) => xg($)).filter(($) => $ !== void 0);
  if ((c.push(...p.map(tE)), c.push(PRt()), Vt() === "wsl"))
    (c.push(za.join(NO, "managed-settings.json")), c.push(za.join(NO, "managed-settings.d")));
  let f = CK(),
    m = yr();
  if (f !== m)
    (c.push(tE(za.resolve(f, ".claude", "settings.json"))),
      c.push(tE(za.resolve(f, ".claude", "settings.local.json"))));
  if ((c.push(tE(za.resolve(m, ".claude", "skills"))), f !== m))
    c.push(tE(za.resolve(f, ".claude", "skills")));
  if ((c.push(tE(za.resolve(m, ".claude", "hooks"))), f !== m))
    c.push(tE(za.resolve(f, ".claude", "hooks")));
  (c.push(za.resolve(tr(), "local")), c.push(tE(za.resolve(tr(), "jobs"))));
  let g = ($) => {
    (c.push(tE(za.resolve($, ".claude", "launch.json"))),
      c.push(tE(za.resolve($, ".claude", "workflows"))),
      c.push(tE(za.resolve($, ".claude", "routines"))),
      c.push(tE(za.resolve($, ".claude", "scheduled_tasks.json"))));
  };
  if ((g(m), f !== m)) {
    let $ = m.endsWith(za.sep) ? m : m + za.sep,
      q = f;
    while (q !== m) {
      g(q);
      let W = za.dirname(q);
      if (W === q || !(W + za.sep).startsWith($)) break;
      q = W;
    }
  }
  if ((c.push(za.resolve(m, ".mcp.json")), f !== m)) {
    let $ = m.endsWith(za.sep) ? m : m + za.sep,
      q = f;
    while (q !== m) {
      c.push(za.resolve(q, ".mcp.json"));
      let W = za.dirname(q);
      if (W === q || !(W + za.sep).startsWith($)) break;
      q = W;
    }
  }
  cct.length = 0;
  let h = new Set([...(e.permissions?.additionalDirectories || []), ...c0()]),
    y = ["HEAD", "objects", "refs"],
    b = ["hooks", "config"],
    _ = Vt() === "macos",
    S = ($) => {
      let q = (V) => {
        try {
          (hT.statSync(V), c.push(tE(V)));
        } catch {
          if ((cct.push(V), _)) c.push(V);
        }
      };
      (c.push(tE(za.join($, "hooks"))),
        c.push(tE(za.join($, "config"))),
        c.push(tE(za.join($, "config.lock"))),
        c.push(tE(za.join($, "config.worktree"))),
        q(za.join($, "config.worktree.lock")),
        q(za.join($, "commondir")));
      let W = za.join($, "worktrees");
      try {
        for (let V of hT.readdirSync(W, {
          withFileTypes: true,
        })) {
          if (!V.isDirectory() && !V.isSymbolicLink()) continue;
          (c.push(tE(za.join(W, V.name, "config.worktree"))),
            q(za.join(W, V.name, "config.worktree.lock")),
            c.push(tE(za.join(W, V.name, "commondir"))));
        }
      } catch {}
    },
    A = new Set([m, f]);
  for (let $ of [m, ...h]) {
    let q;
    try {
      q = ds($, m);
    } catch {
      continue;
    }
    let W = q.endsWith(za.sep) ? q : q + za.sep;
    if ((f + za.sep).startsWith(W)) {
      let V = f;
      for (;;) {
        if ((A.add(V), V === q)) break;
        let Y = za.dirname(V);
        if (Y === V || !(Y + za.sep).startsWith(W)) break;
        V = Y;
      }
    }
  }
  for (let $ of A) {
    let q = true;
    for (let V of y) {
      let Y = za.resolve($, V);
      try {
        (hT.statSync(Y), c.push(Y));
      } catch {
        if (((q = false), cct.push(Y), _)) c.push(Y);
      }
    }
    if (q) S($);
    for (let V of b) {
      let Y = za.resolve($, V);
      try {
        let z = hT.statSync(Y);
        if ((c.push(Y), V === "config" && z.isFile())) c.push(za.resolve($, "config.lock"));
      } catch {}
    }
    let W = za.resolve($, ".git");
    try {
      let V = hT.lstatSync(W);
      if (V.isFile()) c.push(W);
      else if (V.isDirectory()) S(W);
      else
        try {
          if (hT.statSync(W).isDirectory()) S(W);
        } catch {}
    } catch {
      if ((cct.push(W), _)) c.push(W);
    }
  }
  let v = ($) => {
    let q = detectWorktreeGitCommonDir($);
    if (q && q !== f && !a.includes(q)) (a.push(q), S(q));
  };
  (v(f), a.push(...h));
  for (let $ of iOn.values()) {
    (a.push($),
      c.push(tE(za.resolve($, ".claude", "settings.json"))),
      c.push(tE(za.resolve($, ".claude", "settings.local.json"))),
      c.push(tE(za.resolve($, ".claude", "skills"))),
      c.push(tE(za.resolve($, ".claude", "agents"))),
      c.push(tE(za.resolve($, ".claude", "commands"))),
      c.push(tE(za.resolve($, ".claude", "hooks"))),
      c.push(tE(za.resolve($, ".claude", "launch.json"))),
      c.push(tE(za.resolve($, ".claude", "workflows"))),
      c.push(tE(za.resolve($, ".claude", "routines"))),
      c.push(tE(za.resolve($, ".claude", "scheduled_tasks.json"))));
    let q = za.resolve($, ".git");
    try {
      let W = hT.lstatSync(q);
      if (W.isFile()) c.push(q);
      else if (W.isDirectory()) S(q);
      else
        try {
          if (hT.statSync(q).isDirectory()) S(q);
        } catch {}
    } catch {}
    v($);
  }
  for (let $ of fv) {
    let q = yn($);
    if (q?.permissions) {
      for (let V of q.permissions.allow || []) {
        let Y = MWe(V);
        if (Y.toolName === ka && Y.ruleContent)
          a.push(resolvePathPatternForSandbox(Y.ruleContent, $));
      }
      for (let V of q.permissions.deny || []) {
        let Y = MWe(V);
        if (Y.toolName === ka && Y.ruleContent)
          c.push(resolvePathPatternForSandbox(Y.ruleContent, $));
        if (Y.toolName === Ds && Y.ruleContent)
          u.push(resolvePathPatternForSandbox(Y.ruleContent, $));
      }
    }
    let W = q?.sandbox?.filesystem;
    if (W) {
      for (let V of W.allowWrite || []) a.push(resolveSandboxFilesystemPath(V, $));
      for (let V of W.denyWrite || []) c.push(resolveSandboxFilesystemPath(V, $));
      for (let V of W.denyRead || []) u.push(resolveSandboxFilesystemPath(V, $));
      if (!o) for (let V of W.allowRead || []) d.push(resolveSandboxFilesystemPath(V, $));
    }
  }
  if (o)
    for (let $ of n)
      for (let q of $.sandbox?.filesystem?.allowRead || [])
        d.push(resolveSandboxFilesystemPath(q, "policySettings"));
  let C = [],
    x = [],
    I = false;
  for (let $ of fv) {
    let q = yn($)?.sandbox?.credentials;
    if (!q) continue;
    ((I = true),
      C.push(
        ...(q.files ?? []).map((W) => ({
          ...W,
          path: resolveSandboxFilesystemPath(W.path, $),
        })),
      ),
      x.push(...(q.envVars ?? [])));
  }
  let k = I
      ? {
          files: C,
          envVars: x,
        }
      : void 0,
    { rgPath: D, rgArgs: P, argv0: O } = DWe(),
    L = e.sandbox?.ripgrep ?? {
      command: D,
      args: P,
      argv0: O,
    },
    N =
      bI() && fce() && !$We()
        ? {
            allowedDomains: void 0,
            deniedDomains: [],
            allowAllUnixSockets: true,
          }
        : {
            allowedDomains: s,
            deniedDomains: i,
            allowUnixSockets: e.sandbox?.network?.allowUnixSockets,
            allowAllUnixSockets: e.sandbox?.network?.allowAllUnixSockets,
            allowLocalBinding: e.sandbox?.network?.allowLocalBinding,
            allowMachLookup: e.sandbox?.network?.allowMachLookup,
            httpProxyPort: e.sandbox?.network?.httpProxyPort,
            socksProxyPort: e.sandbox?.network?.socksProxyPort,
          },
    B = {
      denyRead: u,
      allowRead: d,
      allowWrite: a,
      denyWrite: c,
      ...(getEffectiveFilesystemPolicy() === "relaxed" && {
        disabled: true,
      }),
    };
  return {
    network: N,
    filesystem: B,
    ignoreViolations: e.sandbox?.ignoreViolations,
    credentials: k,
    enableWeakerNestedSandbox: bI() && fce() ? false : e.sandbox?.enableWeakerNestedSandbox,
    enableWeakerNetworkIsolation: e.sandbox?.enableWeakerNetworkIsolation,
    allowAppleEvents: [...n, yn("flagSettings"), Om("userSettings") ? yn("userSettings") : null]
      .map(($) => $?.sandbox?.allowAppleEvents)
      .find(($) => $ !== void 0),
    ripgrep: L,
    seccomp: $na(),
    bwrapPath: kNt(),
    socatPath: O1i(),
  };
}
function addSandboxAllowWriteDirectory(e, t) {
  if (iOn.get(t) === e) return;
  (iOn.set(t, e), xro());
}
function _np() {
  for (let e of cct) {
    let t = e.slice(e.lastIndexOf(za.sep) + 1);
    try {
      (hT.rmSync(e, {
        recursive: t !== "HEAD" && t !== ".git",
      }),
        T(`[Sandbox] scrubbed planted bare-repo file: ${e}`));
    } catch {}
  }
}
function bnp() {
  for (let { literal: e, resolved: t } of g2t) {
    let n;
    try {
      n = hT.lstatSync(e).isSymbolicLink();
    } catch (r) {
      if (on(r) === "ENOENT") continue;
      n = false;
    }
    if (n)
      try {
        if (hT.realpathSync(e) === t) continue;
      } catch {}
    try {
      (hT.rmSync(e, {
        recursive: true,
        force: true,
      }),
        T(`[Sandbox] scrubbed replaced symlinked-deny path: ${e}`));
    } catch {}
  }
}
function detectWorktreeGitCommonDir(e) {
  let t = za.join(e, ".git");
  try {
    let r = hT
      .readFileSync(t, {
        encoding: "utf8",
      })
      .match(/^gitdir:\s*(.+)$/m);
    if (!r?.[1]) return null;
    let o = za.resolve(e, r[1].trim()),
      s = za.dirname(o);
    if (za.basename(s) !== "worktrees") return null;
    let i = za.dirname(s);
    if (!za.basename(i).endsWith(".git")) return null;
    if (
      hT.realpathSync(
        za.resolve(
          o,
          hT
            .readFileSync(za.join(o, "gitdir"), {
              encoding: "utf8",
            })
            .trim(),
        ),
      ) !== za.join(hT.realpathSync(e), ".git")
    )
      return null;
    return i;
  } catch {
    return null;
  }
}
function shouldForceSandboxOn() {
  if (!getTenguSandboxGbConfig().disableNoSandbox) return false;
  return !bI() && !ut(process.env.IS_SANDBOX) && !h1.getIsBubblewrapSandbox();
}
function $We() {
  try {
    if (shouldForceSandboxOn()) return true;
    return jo()?.sandbox?.enabled ?? false;
  } catch (e) {
    return (T(`Failed to get settings for sandbox check: ${e}`), false);
  }
}
function Snp() {
  if (bI()) return false;
  return jo()?.sandbox?.autoAllowBashIfSandboxed ?? true;
}
function Enp() {
  if (getTenguSandboxGbConfig().forbidUnsandboxedCommands) return false;
  return jo()?.sandbox?.allowUnsandboxedCommands ?? true;
}
function Anp() {
  return getTenguSandboxGbConfig().forbidUnsandboxedCommands === true;
}
function Fna() {
  let e = jo();
  return $We() && cOn() && (e?.sandbox?.failIfUnavailable ?? false);
}
function cOn() {
  try {
    let e = yn("policySettings")?.sandbox?.enabledPlatforms;
    if (e === void 0) return true;
    if (e.length === 0) return false;
    let t = Vt();
    return e.includes(t);
  } catch (e) {
    return (T(`Failed to check enabledPlatforms: ${e}`), true);
  }
}
function uOn() {
  if (bI() && true && !$We()) return fce();
  if (Cro) return false;
  if (!lOn()) return false;
  if (h2t().errors.length > 0) return false;
  if (!cOn()) return false;
  return $We();
}
function Hnp() {
  if (!$We()) return;
  if (!cOn()) return;
  if (!lOn()) {
    let t = Vt();
    if (t === "wsl") return "sandbox is enabled but WSL1 is not supported (requires WSL2)";
    return `sandbox is enabled but ${t} is not supported (requires macOS, Linux, or WSL2)`;
  }
  let e = h2t();
  if (e.errors.length > 0) {
    let t = Vt(),
      n = Ir()
        ? "see https://code.claude.com/docs/en/sandboxing"
        : t === "macos"
          ? "run /sandbox or /doctor for details"
          : "run /sandbox for details",
      r = t === "macos" ? n : `install missing tools (e.g. apt install bubblewrap socat) or ${n}`;
    return `sandbox is enabled but dependencies are missing: ${e.errors.join(", ")} \xB7 ${r}`;
  }
  return;
}
function Tnp() {
  let e = Vt();
  if (e !== "linux" && e !== "wsl") return [];
  try {
    if (!$We()) return [];
    let n = jo()?.permissions || {},
      r = [],
      o = (s) => {
        let i = s.replace(/\/\*\*$/, "");
        return /[*?[\]]/.test(i);
      };
    for (let s of [...(n.allow || []), ...(n.deny || [])]) {
      let i = MWe(s);
      if ((i.toolName === ka || i.toolName === Ds) && i.ruleContent && o(i.ruleContent)) r.push(s);
    }
    return r;
  } catch (t) {
    return (T(`Failed to get Linux glob pattern warnings: ${t}`), []);
  }
}
function vnp() {
  let e = ["flagSettings", "policySettings"];
  for (let t of e) {
    let n = yn(t);
    if (
      n?.sandbox?.enabled !== void 0 ||
      n?.sandbox?.autoAllowBashIfSandboxed !== void 0 ||
      n?.sandbox?.allowUnsandboxedCommands !== void 0
    )
      return true;
  }
  return false;
}
async function wnp(e) {
  let t = yn("localSettings");
  (io("localSettings", {
    sandbox: {
      ...t?.sandbox,
      ...(e.enabled !== void 0 && {
        enabled: e.enabled,
      }),
      ...(e.autoAllowBashIfSandboxed !== void 0 && {
        autoAllowBashIfSandboxed: e.autoAllowBashIfSandboxed,
      }),
      ...(e.allowUnsandboxedCommands !== void 0 && {
        allowUnsandboxedCommands: e.allowUnsandboxedCommands,
      }),
    },
  }),
    xe("sandbox_set_settings"));
}
function Cnp() {
  return jo()?.sandbox?.excludedCommands ?? [];
}
async function Inp(e, t, n, r) {
  if (uOn()) {
    if (!Hue) (It("sandbox_exec", "sandbox_exec_lazy_init"), await jna());
    if (Hue) await Hue;
    if (!Hue) {
      Le("sandbox_exec", "sandbox_exec_not_initialized");
      let o = m2t ? `: ${m2t}` : "";
      if (Fna() || (bI() && fce()))
        throw new SandboxInitFailedError(
          `Sandbox is required but failed to initialize${o}. Restart to retry.`,
        );
      throw (
        (Cro = true),
        new SandboxInitFailedError(
          `Sandbox is enabled but failed to initialize${o}. Sandboxing is disabled for the rest of this session; restart to retry.`,
        )
      );
    }
  }
  try {
    let o = await cS.wrapWithSandbox(e, t, n, r);
    return (xe("sandbox_exec"), o);
  } catch (o) {
    if (o instanceof Error && /bridge socket does not exist/i.test(o.message)) {
      It("sandbox_exec", "sandbox_linux_bridge_dead");
      let s = /SOCKS/i.test(o.message) ? "SOCKS" : "HTTP";
      throw new SandboxBridgeUnavailableError(
        `Linux sandbox ${s} bridge socket is missing (socat may have died). Restart to retry.`,
      );
    }
    throw o;
  }
}
async function jna(e) {
  if (Hue) return Hue;
  if (!uOn()) return;
  let t = e
    ? async (n) => {
        if (shouldAllowManagedSandboxDomainsOnly())
          return (
            T(`[sandbox] Blocked network request to ${n.host} (allowManagedDomainsOnly)`),
            false
          );
        return e(n);
      }
    : void 0;
  return (
    (Hue = (async () => {
      try {
        let n = jo(),
          r = convertToSandboxRuntimeConfig(n);
        (await cS.initialize(r, t),
          h2t.cache.clear?.(),
          (Tro = n$.subscribe(() => {
            let o = jo(),
              s = convertToSandboxRuntimeConfig(o);
            (cS.updateConfig(s), T("Sandbox configuration updated from settings change"));
          })),
          xe("sandbox_init"));
      } catch (n) {
        ((Hue = void 0),
          (m2t = be(n)),
          It("sandbox_init", "sandbox_init_failed"),
          T(`Failed to initialize sandbox: ${m2t}`));
      }
    })()),
    Hue
  );
}
function xro() {
  if (!uOn()) return;
  let e = jo(),
    t = convertToSandboxRuntimeConfig(e);
  cS.updateConfig(t);
}
async function xnp() {
  return (
    Tro?.(),
    (Tro = void 0),
    (cct.length = 0),
    (g2t.length = 0),
    iOn.clear(),
    sOn.clear(),
    h2t.cache.clear?.(),
    lOn.cache.clear?.(),
    getTenguSandboxGbConfig.cache.clear?.(),
    (Hue = void 0),
    (Cro = false),
    (m2t = void 0),
    cS.reset()
  );
}
function addToExcludedCommands(e, t) {
  let n = yn("localSettings"),
    r = n?.sandbox?.excludedCommands || [],
    o = e;
  if (t) {
    let s = t.filter((i) => i.type === "addRules" && i.rules.some((a) => a.toolName === Co));
    if (s.length > 0 && s[0].type === "addRules") {
      let i = s[0].rules.find((a) => a.toolName === Co);
      if (i?.ruleContent) o = gnp(i.ruleContent) || i.ruleContent;
    }
  }
  if (!r.includes(o))
    io("localSettings", {
      sandbox: {
        ...n?.sandbox,
        excludedCommands: [...r, o],
      },
    });
  return (xe("sandbox_exclude_command"), o);
}
var hT,
  za,
  SandboxInitFailedError,
  SandboxBridgeUnavailableError,
  getTenguSandboxGbConfig,
  sOn,
  Hue,
  Tro,
  Cro = false,
  m2t,
  cct,
  g2t,
  iOn,
  h2t,
  lOn,
  SandboxManager;
