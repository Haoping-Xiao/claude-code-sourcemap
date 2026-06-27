// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IAo
// matched 2.1.88 source: src/utils/nativeInstaller/installer.ts
// class=modified  jaccard=0.5658  score=0.6603  fileCov=0.7981
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var IAo = E(() => {
  Pw();
  je();
  fn();
  At();
  ys();
  YS();
  vn();
  Jt();
  Qqt = require("path");
});
function aoe() {
  let e = Oe.platform,
    t = "x64";
  if (!t) {
    let n = Error("Unsupported architecture: x64");
    throw (
      T("Native installer does not support architecture: x64", {
        level: "error",
      }),
      n
    );
  }
  if (uKp) t = "arm64";
  if (e === "linux") {
    if (h1.isAndroidEnvironment()) return `linux-${t}-android`;
    if (h1.isMuslEnvironment()) return `linux-${t}-musl`;
  }
  return `${e}-${t}`;
}
function RVn(e) {
  return e.startsWith("win32") ? "claude.exe" : "claude";
}
function mpe() {
  let e = aoe(),
    t = RVn(e);
  return {
    versions: Df.join(Ore(), "claude", "versions"),
    staging: Df.join(VPa(), "claude", "staging"),
    locks: Df.join(Y2n(), "claude", "locks"),
    executable: Df.join(Sde(), t),
  };
}
async function k9e(e) {
  try {
    let t = await Ic.stat(e);
    if (!t.isFile() || t.size === 0) return !1;
    return (t.mode & Jza.constants.S_IXUSR) !== 0;
  } catch {
    return !1;
  }
}
async function LAo(e) {
  let t = mpe(),
    n = [t.versions, t.staging, t.locks];
  await Promise.all(
    n.map((s) =>
      Ic.mkdir(s, {
        recursive: !0,
      }),
    ),
  );
  let r = Df.dirname(t.executable);
  if (
    (await Ic.mkdir(r, {
      recursive: !0,
    }),
    !/^[a-zA-Z0-9._+-]+$/.test(e) || e.includes("..") || e === ".")
  )
    throw Error(`Invalid version string "${e}": contains path-unsafe characters`);
  let o = Df.join(t.versions, e);
  try {
    await Ic.writeFile(o, "", {
      encoding: "utf8",
      flag: "wx",
    });
  } catch (s) {
    if (on(s) !== "EEXIST") throw s;
  }
  return {
    stagingPath: Df.join(t.staging, e),
    installPath: o,
  };
}
async function Zza(e, t, n = 0) {
  let r = mpe(),
    o = eVt(r, e);
  if (
    (await Ic.mkdir(r.locks, {
      recursive: !0,
    }),
    $Pe())
  ) {
    let i = 0,
      a = n + 1,
      l = n > 0 ? 1000 : 100,
      c = n > 0 ? 5000 : 500;
    while (i < a) {
      if (
        await Vza(e, o, async () => {
          try {
            await t();
          } catch (d) {
            throw (
              T(`Native installer version-lock callback failed: ${d}`, {
                level: "error",
              }),
              d
            );
          }
        })
      )
        return (
          G("tengu_version_lock_acquired", {
            is_pid_based: !0,
            is_lifetime_lock: !1,
            attempts: i + 1,
          }),
          !0
        );
      if ((i++, i < a)) {
        let d = Math.min(l * Math.pow(2, i - 1), c);
        await Nn(d);
      }
    }
    return (
      G("tengu_version_lock_failed", {
        is_pid_based: !0,
        is_lifetime_lock: !1,
        attempts: a,
      }),
      MVn(e, Error("Lock held by another process")),
      !1
    );
  }
  let s = null;
  try {
    try {
      s = await Ay(e, {
        stale: RAo,
        retries: {
          retries: n,
          minTimeout: n > 0 ? 1000 : 100,
          maxTimeout: n > 0 ? 5000 : 500,
        },
        lockfilePath: o,
        onCompromised: (i) => {
          T(`NON-FATAL: Version lock was compromised during operation: ${i.message}`, {
            level: "info",
          });
        },
      });
    } catch (i) {
      return (
        G("tengu_version_lock_failed", {
          is_pid_based: !1,
          is_lifetime_lock: !1,
        }),
        MVn(e, i),
        !1
      );
    }
    try {
      return (
        await t(),
        G("tengu_version_lock_acquired", {
          is_pid_based: !1,
          is_lifetime_lock: !1,
        }),
        !0
      );
    } catch (i) {
      throw (
        T(`tryWithVersionLock: callback failed under version lock: ${be(i)}`, {
          level: "error",
        }),
        i
      );
    }
  } finally {
    if (s) await s();
  }
}
async function eKa(e, t) {
  await Ic.mkdir(Df.dirname(t), {
    recursive: !0,
  });
  let n = `${t}.tmp.${process.pid}.${Date.now()}`;
  try {
    (await Ic.copyFile(e, n),
      await Ic.chmod(n, 493),
      await Ic.rename(n, t),
      T(`Atomically installed binary to ${t}`));
  } catch (r) {
    try {
      await Ic.unlink(n);
    } catch {}
    throw r;
  }
}
async function dKp(e, t) {
  try {
    let n = Df.join(e, "node_modules", "@anthropic-ai"),
      o = (await Ic.readdir(n)).find((i) => i.startsWith("claude-cli-native-"));
    if (!o)
      throw (
        G("tengu_native_install_package_failure", {
          stage_find_package: !0,
          error_package_not_found: !0,
        }),
        Error("Could not find platform-specific native package")
      );
    let s = Df.join(n, o, "cli");
    try {
      await Ic.stat(s);
    } catch {
      throw (
        G("tengu_native_install_package_failure", {
          stage_binary_exists: !0,
          error_binary_not_found: !0,
        }),
        Error("Native binary not found in staged package")
      );
    }
    (await eKa(s, t),
      await Ic.rm(e, {
        recursive: !0,
        force: !0,
      }),
      G("tengu_native_install_package_success", {}));
  } catch (n) {
    let r = be(n);
    if (
      !(r.includes("Could not find platform-specific") || r.includes("Native binary not found"))
    ) {
      if (
        (G("tengu_native_install_package_failure", {
          stage_atomic_move: !0,
          error_move_failed: !0,
        }),
        gd(n))
      )
        T(`installVersionFromPackage: atomic move failed: ${r}`, {
          level: "error",
        });
      else ke(Zr(n));
    } else
      T(`installVersionFromPackage: ${r}`, {
        level: "error",
      });
    throw n;
  }
}
async function pKp(e, t) {
  try {
    let n = aoe(),
      r = RVn(n),
      o = Df.join(e, r);
    try {
      await Ic.stat(o);
    } catch {
      throw (
        G("tengu_native_install_binary_failure", {
          stage_binary_exists: !0,
          error_binary_not_found: !0,
        }),
        Error("Staged binary not found")
      );
    }
    (await eKa(o, t),
      await Ic.rm(e, {
        recursive: !0,
        force: !0,
      }),
      G("tengu_native_install_binary_success", {}));
  } catch (n) {
    if (!be(n).includes("Staged binary not found"))
      G("tengu_native_install_binary_failure", {
        stage_atomic_move: !0,
        error_move_failed: !0,
      });
    if (gd(n))
      T(`installVersionFromBinary: atomic move failed: ${be(n)}`, {
        level: "error",
      });
    else ke(Zr(n));
    throw n;
  }
}
async function fKp(e, t, n) {
  if (n === "npm") await dKp(e, t);
  else await pKp(e, t);
}
async function Kza(e, t) {
  let { stagingPath: n, installPath: r } = await LAo(e),
    { executable: o } = mpe(),
    s = ut("true") ? `${n}.${process.pid}.${Date.now()}` : n,
    i = !(await tKa(e)) || t;
  if (i) {
    T(
      t
        ? `Force reinstalling native installer version ${e}`
        : `Downloading native installer version ${e}`,
    );
    let l = await Gza(e, s);
    await fKp(s, r, l);
  } else T(`Version ${e} already installed, updating symlink`);
  if ((await hKp(o), !(await yKp(o, r)) && !(await k9e(o)))) {
    let l = !1;
    try {
      (await Ic.stat(r), (l = !0));
    } catch {}
    throw Error(
      `Failed to create executable at ${o}. Source file exists: ${l}. Check write permissions to ${o}.`,
    );
  }
  return i;
}
async function tKa(e) {
  let { installPath: t } = await LAo(e);
  return k9e(t);
}
function mKp() {
  try {
    let e = at("tengu_canary", {});
    return (typeof e.external === "string" && Qza.valid(e.external)) || null;
  } catch (e) {
    return (T(`getCanaryVersion: GB read failed, falling through: ${be(e)}`), null);
  }
}
async function gKp(e, t = !1) {
  let n = Date.now(),
    { executable: r } = mpe(),
    o = !/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e),
    { maxVersion: s, forceDowngradeEnabled: i } = await v9e(),
    a =
      i &&
      !t &&
      o &&
      !!s &&
      wgt(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
        s,
        "native_update",
      ),
    l = a ? s : await Jqt(e);
  if ((T(`Checking for native installer update to version ${l}`), e === "latest" && !a)) {
    let d = mKp(),
      p = d && s && cH(d, s);
    if (d && cH(d, l) && !p) (T(`Native installer: canary ${d} active, overriding ${l}`), (l = d));
    else if (p) T(`Native installer: canary ${d} exceeds maxVersion ${s}, not applying`);
  }
  if (!a && !t && s && cH(l, s)) {
    if (
      (T(`Native installer: maxVersion ${s} is set, capping update from ${l} to ${s}`),
      aL(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
        s,
      ))
    )
      return (
        T(
          `Native installer: current version ${
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
          } is already at or above maxVersion ${s}, skipping update`,
        ),
        G("tengu_native_update_skipped_max_version", {
          latency_ms: Date.now() - n,
          max_version: tS(s),
          available_version: tS(l),
        }),
        {
          success: !0,
          wasSkipped: !0,
          latestVersion: l,
        }
      );
    l = s;
  }
  if (
    !t &&
    l ===
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION &&
    (await tKa(l)) &&
    (await k9e(r))
  )
    return (
      T(`Found ${l} at ${r}, skipping install`),
      G("tengu_native_update_complete", {
        latency_ms: Date.now() - n,
        was_new_install: !1,
        was_force_reinstall: !1,
        was_already_running: !0,
      }),
      {
        success: !0,
        wasSkipped: !0,
        latestVersion: l,
      }
    );
  if (!t && Cgt(l))
    return (
      G("tengu_native_update_skipped_minimum_version", {
        latency_ms: Date.now() - n,
        target_version: tS(l),
      }),
      {
        success: !0,
        wasSkipped: !0,
        latestVersion: l,
      }
    );
  if (a)
    G("tengu_native_update_forced_downgrade", {
      from_version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      to_version: tS(l),
    });
  let c = !1,
    u;
  if (ut("true")) ((c = await Kza(l, t)), (u = Date.now() - n));
  else {
    let { installPath: d } = await LAo(l);
    if (t) await bKp(d);
    let p = await Zza(
      d,
      async () => {
        c = await Kza(l, t);
      },
      3,
    );
    if (((u = Date.now() - n), !p)) {
      let f = mpe(),
        m;
      if ($Pe()) {
        let g = eVt(f, d);
        if (Zqt(g)) m = x9e(g)?.pid;
      }
      return (
        It("update_apply", "update_apply_native_lock_failed"),
        G("tengu_native_update_lock_failed", {
          latency_ms: u,
          lock_holder_pid: m,
        }),
        {
          success: !1,
          latestVersion: l,
          lockFailed: !0,
          lockHolderPid: m,
        }
      );
    }
  }
  return (
    xe("update_apply"),
    G("tengu_native_update_complete", {
      latency_ms: u,
      was_new_install: c,
      was_force_reinstall: t,
    }),
    T(`Successfully updated to version ${l}`),
    {
      success: !0,
      latestVersion: l,
    }
  );
}
async function hKp(e) {
  try {
    (await Ic.rmdir(e), T(`Removed empty directory at ${e}`));
  } catch (t) {
    let n = on(t);
    if (n !== "ENOTDIR" && n !== "ENOENT" && n !== "ENOTEMPTY")
      T(`Could not remove directory at ${e}: ${t}`);
  }
}
async function yKp(e, t) {
  if (aoe().startsWith("win32"))
    try {
      let i = Df.dirname(e);
      await Ic.mkdir(i, {
        recursive: !0,
      });
      let a;
      try {
        a = await Ic.stat(e);
      } catch {}
      if (a) {
        try {
          let c = await Ic.stat(t);
          if (a.size === c.size) return !1;
        } catch {}
        let l = `${e}.old.${Date.now()}`;
        await Ic.rename(e, l);
        try {
          await Ic.copyFile(t, e);
          try {
            await Ic.unlink(l);
          } catch {}
        } catch (c) {
          try {
            await Ic.rename(l, e);
          } catch (u) {
            let d = Error(`Failed to restore old executable: ${u}`, {
              cause: c,
            });
            throw (ke(d), d);
          }
          throw c;
        }
      } else
        try {
          await Ic.copyFile(t, e);
        } catch (l) {
          if (wn(l)) throw Error(`Source file does not exist: ${t}`);
          throw l;
        }
      return !0;
    } catch (i) {
      return (
        T(`Failed to copy executable from ${t} to ${e}: ${i}`, {
          level: "error",
        }),
        !1
      );
    }
  let o = Df.dirname(e);
  try {
    (await Ic.mkdir(o, {
      recursive: !0,
    }),
      T(`Created directory ${o} for symlink`));
  } catch (i) {
    return (
      T(`Failed to create directory ${o}: ${i}`, {
        level: "error",
      }),
      !1
    );
  }
  let s = `${e}.tmp.${process.pid}.${Date.now()}`;
  try {
    return (
      await Ic.symlink(t, s),
      await Ic.rename(s, e),
      T(`Atomically updated symlink ${e} -> ${t}`),
      !0
    );
  } catch (i) {
    try {
      await Ic.unlink(s);
    } catch {}
    return (
      T(`Failed to create symlink from ${e} to ${t}: ${i}`, {
        level: "error",
      }),
      !1
    );
  }
}
async function R9e(e = !1) {
  if (ut(process.env.DISABLE_INSTALLATION_CHECKS)) return [];
  let t = await GEe();
  if (t === "development") return [];
  let n = Dt();
  if (!(e || t === "native" || n.installMethod === "native")) return [];
  let o = mpe(),
    s = [],
    i = [],
    a = Df.dirname(o.executable),
    l = Df.resolve(a),
    u = aoe().startsWith("win32");
  try {
    await Ic.access(a);
  } catch {
    (s.push({
      message: `claude command at ${o.executable} missing or broken (${a} does not exist)`,
      userActionRequired: !0,
      type: "error",
    }),
      i.push("bin_dir_missing"));
  }
  if (u) {
    if (!(await k9e(o.executable)))
      (s.push({
        message: `claude command at ${o.executable} missing or broken`,
        userActionRequired: !0,
        type: "error",
      }),
        i.push("executable_missing"));
  } else
    try {
      let p = await Ic.readlink(o.executable),
        f = Df.resolve(Df.dirname(o.executable), p);
      if (!(await k9e(f)))
        (s.push({
          message: `claude command at ${o.executable} missing or broken (symlink points to ${p})`,
          userActionRequired: !0,
          type: "error",
        }),
          i.push("executable_invalid"));
    } catch (p) {
      if (wn(p))
        (s.push({
          message: `claude command at ${o.executable} missing or broken`,
          userActionRequired: !0,
          type: "error",
        }),
          i.push("executable_missing"));
      else if (!(await k9e(o.executable)))
        (s.push({
          message: `claude command at ${o.executable} missing or broken (not a valid Claude binary)`,
          userActionRequired: !0,
          type: "error",
        }),
          i.push("executable_invalid"));
    }
  if (
    !(process.env.PATH || "").split(Df.delimiter).some((p) => {
      try {
        let f = Df.resolve(p);
        if (u) return f.toLowerCase() === l.toLowerCase();
        return f === l;
      } catch {
        return !1;
      }
    })
  )
    if ((i.push("not_in_path"), u)) {
      let p = a.replaceAll("/", "\\");
      s.push({
        message: `Native installation exists but ${p} is not in your PATH. Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.`,
        userActionRequired: !0,
        type: "path",
      });
    } else {
      let p = Egt(),
        m = DPe()[p],
        g = m ? m.replace(kAo.homedir(), "~") : "your shell config file";
      s.push({
        message: `Native installation exists but ~/.local/bin is not in your PATH. Run:

echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${g} && source ${g}`,
        userActionRequired: !0,
        type: "path",
      });
    }
  if (i.length === 0) xe("native_check_install");
  else It("native_check_install", i[0]);
  return s;
}
function L9e(e, t = !1) {
  if (t) return Yza(e, t);
  if (PVn) return (T("installLatest: joining in-flight call"), PVn);
  let n = Yza(e, t);
  PVn = n;
  let r = () => {
    PVn = null;
  };
  return (n.then(r, r), n);
}
async function Yza(e, t = !1) {
  let n = await gKp(e, t);
  if (!n.success)
    return {
      latestVersion: null,
      wasUpdated: !1,
      lockFailed: n.lockFailed,
      lockHolderPid: n.lockHolderPid,
    };
  if (Dt().installMethod !== "native")
    (gn((o) => ({
      ...o,
      installMethod: "native",
      autoUpdates: !1,
      autoUpdatesProtectedForNative: !0,
    })),
      T(
        'Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection',
      ));
  return (
    tVt(),
    {
      latestVersion: n.latestVersion,
      wasUpdated: n.success && !n.wasSkipped,
      wasSkipped: n.wasSkipped,
      lockFailed: !1,
    }
  );
}
async function _Kp(e) {
  try {
    let t = await Ic.readlink(e),
      n = Df.resolve(Df.dirname(e), t);
    if (await k9e(n)) return n;
  } catch {}
  return null;
}
function eVt(e, t) {
  let n = Df.basename(t);
  return Df.join(e.locks, `${n}.lock`);
}
async function D9e() {
  let e = mpe();
  if (!process.execPath.includes(e.versions)) return;
  let t = Df.resolve(process.execPath);
  try {
    let n = eVt(e, t);
    if (
      (await Ic.mkdir(e.locks, {
        recursive: !0,
      }),
      $Pe())
    ) {
      if (!(await qza(t, n))) {
        (G("tengu_version_lock_failed", {
          is_pid_based: !0,
          is_lifetime_lock: !0,
        }),
          MVn(t, Error("Lock already held by another process")));
        return;
      }
      (G("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !0,
      }),
        T(`Acquired PID lock on running version: ${t}`));
    } else {
      let r;
      try {
        ((r = await Ay(t, {
          stale: RAo,
          retries: 0,
          lockfilePath: n,
          onCompromised: (o) => {
            T(`NON-FATAL: Lock on running version was compromised: ${o.message}`, {
              level: "info",
            });
          },
        })),
          G("tengu_version_lock_acquired", {
            is_pid_based: !1,
            is_lifetime_lock: !0,
          }),
          T(`Acquired mtime-based lock on running version: ${t}`),
          Ci(async () => {
            try {
              await r?.();
            } catch {}
          }));
      } catch (o) {
        if (wn(o)) {
          T(`Cannot lock current version - file does not exist: ${t}`, {
            level: "info",
          });
          return;
        }
        (G("tengu_version_lock_failed", {
          is_pid_based: !1,
          is_lifetime_lock: !0,
        }),
          MVn(t, o));
        return;
      }
    }
  } catch (n) {
    if (wn(n)) {
      T(`Cannot lock current version - file does not exist: ${t}`, {
        level: "info",
      });
      return;
    }
    T(`NON-FATAL: Failed to lock current version during execution ${be(n)}`, {
      level: "info",
    });
  }
}
function MVn(e, t) {
  T(`NON-FATAL: Lock acquisition failed for ${e} (expected in multi-process scenarios): ${be(t)}`, {
    level: "error",
  });
}
async function bKp(e) {
  let t = mpe(),
    n = eVt(t, e);
  try {
    (await Ic.unlink(n), T(`Force-removed lock file at ${n}`));
  } catch (r) {
    T(`Failed to force-remove lock file: ${be(r)}`);
  }
}
async function tVt() {
  await Promise.resolve();
  let e = mpe(),
    t = Date.now() - 3600000;
  if (aoe().startsWith("win32")) {
    let s = Df.dirname(e.executable);
    try {
      let i = await Ic.readdir(s),
        a = 0;
      for (let l of i) {
        if (!/^claude\.exe\.old\.\d+$/.test(l)) continue;
        try {
          (await Ic.unlink(Df.join(s, l)), a++);
        } catch {}
      }
      if (a > 0) T(`Cleaned up ${a} old Windows executables on startup`);
    } catch (i) {
      if (!wn(i)) T(`Failed to clean up old Windows executables: ${i}`);
    }
  }
  try {
    let s = await Ic.readdir(e.staging),
      i = 0;
    for (let a of s) {
      let l = Df.join(e.staging, a);
      try {
        if ((await Ic.stat(l)).mtime.getTime() < t)
          (await Ic.rm(l, {
            recursive: !0,
            force: !0,
          }),
            i++,
            T(`Cleaned up old staging directory: ${a}`));
      } catch {}
    }
    if (i > 0)
      (T(`Cleaned up ${i} orphaned staging directories`),
        G("tengu_native_staging_cleanup", {
          cleaned_count: i,
        }));
  } catch (s) {
    if (!wn(s)) T(`Failed to clean up staging directories: ${s}`);
  }
  if ($Pe()) {
    let s = DVn(e.locks);
    if (s > 0)
      (T(`Cleaned up ${s} stale version locks`),
        G("tengu_native_stale_locks_cleanup", {
          cleaned_count: s,
        }));
  }
  let n;
  try {
    n = await Ic.readdir(e.versions);
  } catch (s) {
    if (!wn(s))
      (T(`Failed to readdir versions directory: ${s}`),
        It("native_cleanup_versions", "readdir_failed"));
    else xe("native_cleanup_versions");
    return;
  }
  let r = [],
    o = 0;
  for (let s of n) {
    let i = Df.join(e.versions, s);
    if (/\.tmp\.\d+\.\d+$/.test(s)) {
      try {
        if ((await Ic.stat(i)).mtime.getTime() < t)
          (await Ic.unlink(i), o++, T(`Cleaned up orphaned temp install file: ${s}`));
      } catch {}
      continue;
    }
    try {
      let a = await Ic.stat(i);
      if (!a.isFile()) continue;
      if (a.size > 0 && (a.mode & 73) === 0) continue;
      r.push({
        name: s,
        path: i,
        resolvedPath: Df.resolve(i),
        mtime: a.mtime,
        size: a.size,
      });
    } catch {}
  }
  if (o > 0)
    (T(`Cleaned up ${o} orphaned temp install files`),
      G("tengu_native_temp_files_cleanup", {
        cleaned_count: o,
      }));
  if (r.length === 0) {
    xe("native_cleanup_versions");
    return;
  }
  try {
    let s = process.execPath,
      i = new Set();
    if (s && s.includes(e.versions)) i.add(Df.resolve(s));
    let a = await _Kp(e.executable);
    if (a) i.add(a);
    else if (aoe().startsWith("win32"))
      try {
        let f = await Ic.stat(e.executable);
        for (let m of r) if (m.size === f.size) i.add(m.resolvedPath);
      } catch {}
    for (let f of r) {
      if (i.has(f.resolvedPath)) continue;
      let m = eVt(e, f.resolvedPath),
        g = !1;
      if ($Pe()) g = Zqt(m);
      else
        try {
          g = await Rsi(f.resolvedPath, {
            stale: RAo,
            lockfilePath: m,
          });
        } catch {
          g = !1;
        }
      if (g) (i.add(f.resolvedPath), T(`Protecting locked version from cleanup: ${f.name}`));
    }
    let c = r
      .filter((f) => !i.has(f.resolvedPath))
      .sort((f, m) => m.mtime.getTime() - f.mtime.getTime())
      .slice(xAo);
    if (c.length === 0) {
      (G("tengu_native_version_cleanup", {
        total_count: r.length,
        deleted_count: 0,
        protected_count: i.size,
        retained_count: xAo,
        lock_failed_count: 0,
        error_count: 0,
      }),
        xe("native_cleanup_versions"));
      return;
    }
    let u = 0,
      d = 0,
      p = 0;
    if (
      (await Promise.all(
        c.map(async (f) => {
          try {
            if (
              await Zza(f.path, async () => {
                await Ic.unlink(f.path);
              })
            )
              u++;
            else (d++, T(`Skipping deletion of ${f.name} - locked by another process`));
          } catch (m) {
            (p++,
              T(`Failed to delete version ${f.name}: ${m}`, {
                level: "error",
              }));
          }
        }),
      ),
      G("tengu_native_version_cleanup", {
        total_count: r.length,
        deleted_count: u,
        protected_count: i.size,
        retained_count: xAo,
        lock_failed_count: d,
        error_count: p,
      }),
      p > 0)
    )
      It("native_cleanup_versions", "delete_errors");
    else if (d > 0) It("native_cleanup_versions", "lock_failed");
    else xe("native_cleanup_versions");
  } catch (s) {
    if (!wn(s))
      (ke(Error(`Version cleanup failed: ${s}`)),
        It("native_cleanup_versions", "unexpected_error"));
    else xe("native_cleanup_versions");
  }
}
async function SKp(e) {
  let t = await Ic.realpath(e);
  return t.endsWith(".js") || t.includes("node_modules");
}
async function nVt() {
  let e = mpe();
  try {
    if (await SKp(e.executable)) {
      (T(`Skipping removal of ${e.executable} - appears to be npm-managed`),
        xe("native_remove_symlink"));
      return;
    }
    (await Ic.unlink(e.executable),
      T(`Removed claude symlink at ${e.executable}`),
      xe("native_remove_symlink"));
  } catch (t) {
    if (wn(t)) {
      xe("native_remove_symlink");
      return;
    }
    (T(`Failed to remove claude symlink: ${t}`, {
      level: "error",
    }),
      Le("native_remove_symlink", "unlink_failed"));
  }
}
async function DAo() {
  let e = [],
    t = DPe(),
    n = !1;
  for (let [r, o] of Object.entries(t))
    try {
      let s = await Vqt(o);
      if (!s) continue;
      let { filtered: i, hadAlias: a } = bVn(s);
      if (a)
        (await SVn(o, i),
          e.push({
            message: `Removed claude alias from ${o}. Run: unalias claude`,
            userActionRequired: !0,
            type: "alias",
          }),
          T(`Cleaned up claude alias from ${r} config`));
    } catch (s) {
      ((n = !0),
        T(`Failed to clean up claude alias from ${o}: ${s}`, {
          level: "error",
        }),
        e.push({
          message: `Failed to clean up ${o}: ${s}`,
          userActionRequired: !1,
          type: "error",
        }));
    }
  if (n) It("native_cleanup_aliases", "config_write_failed");
  else xe("native_cleanup_aliases");
  return e;
}
async function EKp(e) {
  try {
    let t = await Gr("npm", ["config", "get", "prefix"]);
    if (t.code !== 0 || !t.stdout)
      return {
        success: !1,
        error: "Failed to get npm global prefix",
      };
    let n = t.stdout.trim(),
      r = !1;
    async function o(s, i) {
      try {
        return (await Ic.unlink(s), T(`Manually removed ${i}: ${s}`), !0);
      } catch {
        return !1;
      }
    }
    if (aoe().startsWith("win32")) {
      let s = Df.join(n, "claude.cmd"),
        i = Df.join(n, "claude.ps1"),
        a = Df.join(n, "claude");
      if (await o(s, "bin script")) r = !0;
      if (await o(i, "PowerShell script")) r = !0;
      if (await o(a, "bin executable")) r = !0;
    } else {
      let s = Df.join(n, "bin", "claude");
      if (await o(s, "bin symlink")) r = !0;
    }
    if (r) {
      T(`Successfully removed ${e} manually`);
      let s = aoe().startsWith("win32")
        ? Df.join(n, "node_modules", e)
        : Df.join(n, "lib", "node_modules", e);
      return {
        success: !0,
        warning: `${e} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: ${s}`,
      };
    } else
      return {
        success: !1,
      };
  } catch (t) {
    return (
      T(`Manual removal failed: ${t}`, {
        level: "error",
      }),
      {
        success: !1,
        error: `Manual removal failed: ${t}`,
      }
    );
  }
}
async function Xza(e) {
  let { code: t, stderr: n } = await Gr("npm", ["uninstall", "-g", e], {
    cwd: process.cwd(),
  });
  if (t === 0)
    return (
      T(`Removed global npm installation of ${e}`),
      {
        success: !0,
      }
    );
  else if (n && !n.includes("npm ERR! code E404")) {
    if (n.includes("npm error code ENOTEMPTY")) {
      (T(`Failed to uninstall global npm package ${e}: ${n}`, {
        level: "error",
      }),
        T("Attempting manual removal due to ENOTEMPTY error"));
      let r = await EKp(e);
      if (r.success)
        return {
          success: !0,
          warning: r.warning,
        };
      else if (r.error)
        return {
          success: !1,
          error: `Failed to remove global npm installation of ${e}: ${n}. Manual removal also failed: ${r.error}`,
        };
    }
    return (
      T(`Failed to uninstall global npm package ${e}: ${n}`, {
        level: "error",
      }),
      {
        success: !1,
        error: `Failed to remove global npm installation of ${e}: ${n}`,
      }
    );
  }
  return {
    success: !1,
  };
}
async function PAo() {
  let e = [],
    t = [],
    n = 0,
    r = !1,
    o = !1,
    s = await Xza("@anthropic-ai/claude-code");
  if (s.success) {
    if ((n++, s.warning)) t.push(s.warning);
  } else if (s.error) (e.push(s.error), (r = !0));
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
  ) {
    let a = await Xza(
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
    if (a.success) {
      if ((n++, a.warning)) t.push(a.warning);
    } else if (a.error) (e.push(a.error), (r = !0));
  }
  let i = Df.join(kAo.homedir(), ".claude", "local");
  try {
    (await Ic.rm(i, {
      recursive: !0,
    }),
      n++,
      T(`Removed local installation at ${i}`));
  } catch (a) {
    if (!wn(a))
      (e.push(`Failed to remove ${i}: ${a}`),
        T(`Failed to remove local installation: ${a}`, {
          level: "error",
        }),
        (o = !0));
  }
  if (e.length === 0) xe("native_cleanup_npm");
  else if (n > 0) It("native_cleanup_npm", "partial_errors");
  else if (r && !o) Le("native_cleanup_npm", "npm_uninstall_failed");
  else if (o && !r) Le("native_cleanup_npm", "local_install_remove_failed");
  else Le("native_cleanup_npm", "npm_uninstall_failed");
  return {
    removed: n,
    errors: e,
    warnings: t,
  };
}
var Jza,
  Ic,
  kAo,
  Df,
  Qza,
  xAo = 2,
  RAo = 604800000,
  uKp = !1,
  PVn = null;
