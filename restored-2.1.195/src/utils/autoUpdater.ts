// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EVn
// matched 2.1.88 source: src/utils/autoUpdater.ts
// class=modified  jaccard=0.2322  score=0.2691  fileCov=0.6286
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module EVn] deps: At, A9e
((_za = require("fs")),
  (Hgt = require("fs/promises")),
  (dAo = require("os")),
  (Agt = require("path")),
  (bza = /^\s*alias\s+claude\s*=/));
async function wza() {
  try {
    let e = await v7("tengu_version_config", {
      minVersion: "0.0.0",
    });
    if (
      e.minVersion &&
      qte(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
        e.minVersion,
      )
    )
      (console.error(`
It looks like your version of Claude Code (${
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION
      }) needs an update.
A newer version (${e.minVersion} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.
`),
        Bc(1));
  } catch (e) {
    ke(e);
  }
}
function vgt() {
  let e = Date.now();
  if (e - fAo < Mzp)
    return (T(`auto-update check throttled (last check ${Math.round((e - fAo) / 1000)}s ago)`), !0);
  return ((fAo = e), !1);
}
async function AVn() {
  return (await v9e()).maxVersion;
}
async function v9e() {
  let e = await Iza(),
    t = !1,
    n = e.external || void 0,
    r = n ? (T9e.parse(n)?.version ?? void 0) : void 0;
  if (n && !r)
    (T(`tengu_max_version_config has invalid version '${n}' \u2014 ignoring`, {
      level: "error",
    }),
      G("tengu_max_version_config_invalid", {
        raw_value: tS(n),
      }));
  return {
    maxVersion: r,
    forceDowngradeEnabled: e.external_force_downgrade === !0,
  };
}
function wgt(e, t, n) {
  let r = n === "native_update" ? "Native installer" : "AutoUpdater",
    o = T9e.parse(e);
  if (o && o.compare(t) > 0)
    return (T(`${r}: force-downgrade active \u2014 moving from ${e} to ${t}`), !0);
  return (
    T(
      `${r}: force-downgrade flag set but current ${e} is not above ${t} \u2014 taking normal upgrade path`,
    ),
    !1
  );
}
async function Cza() {
  return (await Iza()).external_message || void 0;
}
async function Iza() {
  try {
    return await v7("tengu_max_version_config", {});
  } catch (e) {
    return (ke(e), {});
  }
}
function HVn(e) {
  let t = Dr()?.minimumVersion;
  if (t && !aL(e, t)) return `below your minimumVersion setting (${t})`;
  let n = yn("policySettings")?.requiredMaximumVersion;
  if (n) {
    let r = T9e.parse(n)?.version;
    if (!r)
      T(`requiredMaximumVersion '${n}' is not a valid semver version \u2014 ignoring`, {
        level: "error",
      });
    else if (!jst(e, r)) return `above your organization's requiredMaximumVersion (${n})`;
  }
  return null;
}
function Cgt(e) {
  let t = HVn(e);
  if (t) T(`Skipping update to ${e}: ${t}`);
  return t !== null;
}
function xza() {
  return x6.join(tr(), ".update.lock");
}
async function $zp() {
  let e = qt(),
    t = xza();
  try {
    let n = await e.stat(t);
    if (Date.now() - n.mtimeMs < Eza) return !1;
    try {
      let o = await e.stat(t);
      if (Date.now() - o.mtimeMs < Eza) return !1;
      await e.unlink(t);
    } catch (o) {
      if (!wn(o)) return (ke(o), !1);
    }
  } catch (n) {
    if (!wn(n)) return (ke(n), !1);
  }
  try {
    return (
      await Hk.writeFile(t, `${process.pid}`, {
        encoding: "utf8",
        flag: "wx",
      }),
      !0
    );
  } catch (n) {
    let r = on(n);
    if (r === "EEXIST") return !1;
    if (r === "ENOENT")
      try {
        return (
          await e.mkdir(tr()),
          await Hk.writeFile(t, `${process.pid}`, {
            encoding: "utf8",
            flag: "wx",
          }),
          !0
        );
      } catch (o) {
        if (on(o) === "EEXIST") return !1;
        return (
          T(`Failed to create config dir or update lock file: ${o}`, {
            level: "error",
          }),
          !1
        );
      }
    return (
      T(`AutoUpdater: failed to create update lock file ${t}: ${n}`, {
        level: "error",
      }),
      !1
    );
  }
}
async function Ozp() {
  let e = qt(),
    t = xza();
  try {
    if (
      (await e.readFile(t, {
        encoding: "utf8",
      })) === `${process.pid}`
    )
      await e.unlink(t);
  } catch (n) {
    if (wn(n)) return;
    T(`AutoUpdater: failed to release update lock file ${t}: ${n}`, {
      level: "error",
    });
  }
}
function mAo() {
  let e = process.execPath.replace(/\\/g, "/"),
    t = (process.env.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (e.includes("/.bun/install/global/") || (t && e.startsWith(t + "/install/global/")))
    return "bun";
  return Oe.isRunningWithBun() && !dm() ? "bun" : "npm";
}
async function kza() {
  let e = mAo() === "bun",
    t = null;
  if (e)
    t = await Gr("bun", ["pm", "bin", "-g"], {
      cwd: H9e.homedir(),
    });
  else
    t = await Gr("npm", ["-g", "config", "get", "prefix"], {
      cwd: H9e.homedir(),
    });
  if (t.code !== 0)
    return (
      T(`Failed to check ${e ? "bun" : "npm"} permissions (exit ${t.code}): ${t.stderr.trim()}`, {
        level: "error",
      }),
      null
    );
  return t.stdout.trim() || null;
}
async function Nzp() {
  let e = await kza();
  if (!e) return [];
  if (mAo() === "bun") return [x6.join(e, "claude")];
  if (Vt() === "windows") return [x6.join(e, "claude.cmd"), x6.join(e, "claude.exe")];
  return [x6.join(e, "bin", "claude")];
}
async function Rza() {
  try {
    let e = await kza();
    if (!e)
      return {
        hasPermissions: !1,
        npmPrefix: null,
      };
    try {
      return (
        await Hk.access(e, Tza.constants.W_OK),
        {
          hasPermissions: !0,
          npmPrefix: e,
        }
      );
    } catch {
      return (
        T("Insufficient permissions for global npm install.", {
          level: "error",
        }),
        {
          hasPermissions: !1,
          npmPrefix: e,
        }
      );
    }
  } catch (e) {
    return (
      ke(e),
      {
        hasPermissions: !1,
        npmPrefix: null,
      }
    );
  }
}
async function Igt(e) {
  let t = e === "stable" ? "stable" : "latest",
    n = await Gr(
      "npm",
      [
        "view",
        `${
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
        }@${t}`,
        "version",
        "--prefer-online",
      ],
      {
        abortSignal: AbortSignal.timeout(5000),
        cwd: H9e.homedir(),
      },
    );
  if (n.code !== 0) {
    let r = n.stdout.trim();
    if (r && T9e.parse(r)) {
      if (
        (It("update_check", "update_check_npm_view_stderr_warning"),
        T(
          `npm view exited ${n.code} but printed a valid version (${r}) \u2014 treating stderr as a warning`,
        ),
        n.stderr)
      )
        T(`npm stderr: ${n.stderr.trim()}`);
      return r;
    }
    if (
      (Le("update_check", "update_check_npm_view_failed"),
      T(`npm view failed with code ${n.code}`),
      n.stderr)
    )
      T(`npm stderr: ${n.stderr.trim()}`);
    else T("npm stderr: (empty)");
    if (n.stdout) T(`npm stdout: ${n.stdout.trim()}`);
    return null;
  }
  return (xe("update_check"), n.stdout.trim() || null);
}
async function Lza() {
  let e = await Gr(
    "npm",
    [
      "view",
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.PACKAGE_URL,
      "dist-tags",
      "--json",
      "--prefer-online",
    ],
    {
      abortSignal: AbortSignal.timeout(5000),
      cwd: H9e.homedir(),
    },
  );
  if (e.code !== 0)
    return (
      T(`npm view dist-tags failed with code ${e.code}`),
      {
        latest: null,
        stable: null,
      }
    );
  try {
    let t = Ft(e.stdout.trim());
    return {
      latest: typeof t.latest === "string" ? t.latest : null,
      stable: typeof t.stable === "string" ? t.stable : null,
    };
  } catch (t) {
    return (
      T(`Failed to parse dist-tags: ${t}`),
      {
        latest: null,
        stable: null,
      }
    );
  }
}
async function zqt(e) {
  if (Vi()) return null;
  let t = 0;
  try {
    let n = await yVn(
      (r) => (
        t++,
        kSe.get(`${Pzp}/${e}`, {
          timeout: Aza,
          responseType: "text",
          signal: r,
        })
      ),
      {
        attempts: Hza,
        timeoutMs: Aza,
        onRetry: (r, o) => {
          T(`Failed to fetch ${e} from GCS on attempt ${r}/${Hza}, retrying: ${o}`);
        },
      },
    );
    if (t > 1) It("update_check", "update_check_gcs_retry");
    else xe("update_check");
    return n.data.trim();
  } catch (n) {
    return (
      Le("update_check", "update_check_gcs_failed"),
      T(`Failed to fetch ${e} from GCS after ${t} attempt(s): ${n}`),
      null
    );
  }
}
async function Bzp(e) {
  if (Vi()) return null;
  try {
    let n = (
      await lb.get(`https://formulae.brew.sh/api/cask/${e}.json`, {
        timeout: 5000,
        responseType: "json",
      })
    ).data?.version;
    return (xe("update_check"), typeof n === "string" ? n : null);
  } catch (t) {
    return (
      Le("update_check", "update_check_homebrew_failed"),
      T(`Failed to fetch ${e} from formulae.brew.sh: ${t}`),
      null
    );
  }
}
async function TVn(e, t) {
  let [n, r] = await Promise.all([Bzp(e), zqt(t)]);
  return n ?? r;
}
async function Dza() {
  let [e, t] = await Promise.all([zqt("latest"), zqt("stable")]);
  return {
    latest: e,
    stable: t,
  };
}
function xgt() {
  return Tgt;
}
async function Kqt(e) {
  if (!(await $zp()))
    return (
      It("update_apply", "update_apply_lock_contention"),
      T("Another process is currently installing an update", {
        level: "error",
      }),
      G("tengu_auto_updater_lock_contention", {
        pid: process.pid,
        currentVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
      }),
      {
        status: "in_progress",
      }
    );
  try {
    await Uzp();
    let t = mAo();
    if (t === "npm" && Oe.isNpmFromWindowsPath())
      return (
        Le("update_apply", "update_apply_wsl_windows_npm"),
        T("Windows NPM detected in WSL environment", {
          level: "error",
        }),
        G("tengu_auto_updater_windows_npm_in_wsl", {
          currentVersion: {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION,
        }),
        console.error(`
Error: Windows NPM detected in WSL

You're running Claude Code in WSL but using the Windows NPM installation from /mnt/c/.
This configuration is not supported for updates.

To fix this issue:
  1. Install Node.js within your Linux distribution: e.g. sudo apt install nodejs npm
  2. Make sure Linux NPM is in your PATH before the Windows version
  3. Try updating again with 'claude update'
`),
        {
          status: "install_failed",
        }
      );
    let n = e
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
            }.PACKAGE_URL
          }@${e}`
        : {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.PACKAGE_URL,
      r =
        Vt() === "windows" &&
        dm() &&
        process.execPath.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/"),
      o = [];
    if (r) {
      let a = x6.join(x6.dirname(process.execPath), "..", ".."),
        l = x6.join(a, "..");
      for (let p of [l, a])
        for (let f of await Hk.readdir(p, {
          withFileTypes: !0,
        }).catch(() => [])) {
          if (!f.isDirectory() || !f.name.startsWith(".")) continue;
          let m = x6.join(p, f.name);
          if (
            await Promise.all([
              Hk.readdir(m).catch(() => []),
              Hk.readdir(x6.join(m, "bin")).catch(() => []),
            ]).then(([h, y]) => [...h, ...y].some((b) => /\.exe\.old\.\d+$/.test(b)))
          )
            await Hk.rm(m, {
              recursive: !0,
              force: !0,
            }).catch((h) => T(`retired-dir cleanup failed: ${h}`));
        }
      let c = Date.now(),
        u = await Hk.stat(process.execPath, {
          bigint: !0,
        })
          .then((p) => p.ino)
          .catch(() => 0n),
        d = [process.execPath];
      for (let p of await Hk.readdir(a).catch(() => []))
        for (let f of ["claude.exe", "cli.exe"]) {
          let m = x6.join(a, p, f);
          if (m === process.execPath) continue;
          let g = await Hk.stat(m, {
            bigint: !0,
          })
            .then((h) => h.ino)
            .catch(() => -1n);
          if (u && g === u) d.push(m);
        }
      for (let p of d) {
        let f = `${p}.old.${c}`;
        await Hk.rename(p, f).then(
          () => o.push([p, f]),
          () => {},
        );
      }
    }
    let s = await Gr(t, ["install", "-g", n], {
        cwd: H9e.homedir(),
      }),
      i = 0;
    if (o.length && s.code !== 0) {
      Tgt = null;
      for (let [a, l] of o)
        try {
          await Hk.rename(l, a);
        } catch (c) {
          try {
            (await Hk.copyFile(l, a),
              T(`Restored ${a} by copy after rename failed: ${c}`),
              await Hk.unlink(l).catch((u) => T(`Failed to remove ${l} after copy-restore: ${u}`)));
          } catch (u) {
            if ((i++, !Tgt))
              ((Tgt = {
                originalPath: a,
                preservedPath: l,
              }),
                Le("update_apply", "update_apply_restore_failed"));
            ke(new vza(`Failed to restore ${a} after install failure: rename: ${c}; copy: ${u}`));
          }
        }
    }
    if (s.code !== 0) {
      let a = `${s.stdout} ${s.stderr}`,
        l = Fzp(a),
        c = o.length === 0 ? "not_attempted" : i === 0 ? "restored" : "partial";
      if (l === "warning_only") {
        let d = await Nzp(),
          p = e ? T9e.parse(e)?.version : void 0,
          f,
          m = !1;
        for (let g of d) {
          let h = await Gr(g, ["--version"], {
            abortSignal: AbortSignal.timeout(45000),
            cwd: H9e.homedir(),
          });
          if (
            ((f = T9e.parse(h.stdout.trim().split(/\s+/)[0])?.version),
            (m =
              h.code === 0 &&
              f != null &&
              (p != null
                ? f === p
                : cH(
                    f,
                    {
                      ISSUES_EXPLAINER:
                        "report the issue at https://github.com/anthropics/claude-code/issues",
                      PACKAGE_URL: "@anthropic-ai/claude-code",
                      README_URL: "https://code.claude.com/docs/en/overview",
                      VERSION: "2.1.195",
                      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                      BUILD_TIME: "2026-06-26T01:00:56Z",
                      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                    }.VERSION,
                  ))),
            m)
          )
            break;
        }
        if (m)
          return (
            gn((g) => ({
              ...g,
              installMethod: "global",
            })),
            (Tgt = null),
            It("update_apply", "update_apply_npm_install_stderr_warning"),
            T(
              `npm/bun exited ${s.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${f}): ${a}`,
            ),
            {
              status: "success",
            }
          );
      }
      if (
        (G("tengu_auto_updater_npm_failure", {
          npm_exit_code: s.code,
          package_manager: $e(t),
          is_bundled_mode: dm(),
          platform: Z9(Vt()),
          windows_self_rename: $e(c),
          stderr_signature: $e(l),
          npm_error_code: jzp(a) ?? We("none"),
        }),
        Vt() === "windows" &&
          /\b(?:claude|cli)\.exe\b/i.test(a) &&
          (/\bEBUSY\b|resource busy or locked/i.test(a) ||
            (/\bEPERM\b|operation not permitted/i.test(a) &&
              (o.length > 0 ||
                /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(a)))))
      )
        return (
          Le("update_apply", "update_apply_exe_locked"),
          T(`Failed to install new version of claude (running executable is locked): ${a}`, {
            level: "error",
          }),
          {
            status: "install_failed",
            failureHint: "windows_running_exe_lock",
          }
        );
      if (/\b(EACCES|EPERM|permission denied)\b/i.test(a))
        return (
          Le("update_apply", "update_apply_no_permissions"),
          T("Insufficient permissions for global npm install.", {
            level: "error",
          }),
          {
            status: "no_permissions",
          }
        );
      if (l === "warning_only")
        return (
          Le("update_apply", "update_apply_npm_install_stderr_warning"),
          T(
            `npm/bun exited ${s.code} with only warnings on stderr but the re-probe did not confirm an advance: ${a}`,
            {
              level: "error",
            },
          ),
          {
            status: "install_failed",
          }
        );
      return (
        Le("update_apply", "update_apply_npm_install_failed"),
        T(`Failed to install new version of claude: ${a}`, {
          level: "error",
        }),
        {
          status: "install_failed",
        }
      );
    }
    return (
      gn((a) => ({
        ...a,
        installMethod: "global",
      })),
      (Tgt = null),
      xe("update_apply"),
      {
        status: "success",
      }
    );
  } finally {
    await Ozp();
  }
}
async function Uzp() {
  let e = DPe();
  for (let [, t] of Object.entries(e))
    try {
      let n = await Vqt(t);
      if (!n) continue;
      let { filtered: r, hadAlias: o } = bVn(n);
      if (o) (await SVn(t, r), T(`Removed claude alias from ${t}`));
    } catch (n) {
      T(`Failed to remove alias from ${t}: ${n}`, {
        level: "error",
      });
    }
}
function Fzp(e) {
  if (/\b(EACCES|EPERM|permission denied)\b/i.test(e)) return "eacces_eperm";
  if (/\bENOTEMPTY\b/i.test(e)) return "enotempty";
  if (/\bETARGET\b/i.test(e)) return "etarget";
  if (/\bE403\b/i.test(e) || /\b403 forbidden\b/i.test(e)) return "e403_forbidden";
  if (/\bENOENT\b/i.test(e)) return "enoent";
  if (
    /\bE5\d\d\b/i.test(e) ||
    /\b5\d\d\s+(internal server error|bad gateway|service unavailable|gateway time-?out)\b/i.test(e)
  )
    return "registry_5xx";
  if (
    /\b(ETIMEDOUT|ESOCKETTIMEDOUT)\b/i.test(e) ||
    /\btimed[\s-]?out\b/i.test(e) ||
    /\btimeout\b/i.test(e)
  )
    return "network_timeout";
  if (/\bENOSPC\b/i.test(e)) return "disk_full";
  if (/\bEBUSY\b/i.test(e) || /\bresource busy or locked\b/i.test(e)) return "ebusy";
  let t = /npm warn/i.test(e) || /unknown user config/i.test(e) || /npm notice/i.test(e),
    n = /npm err/i.test(e) || /\b(EACCES|EPERM|ETARGET)\b/i.test(e) || /code E/i.test(e);
  if (t && !n) return "warning_only";
  return "unknown";
}
function jzp(e) {
  let t = /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(e)?.[1];
  return t === void 0 ? void 0 : kh(t);
}
var Tza,
  Hk,
  H9e,
  x6,
  T9e,
  Pzp = "https://downloads.claude.ai/claude-code-releases",
  vza,
  fAo = 0,
  Mzp = 300000,
  Eza = 300000,
  Aza = 5000,
  Hza = 3,
  Tgt = null;
