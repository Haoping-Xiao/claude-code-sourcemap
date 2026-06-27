// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J8o
// matched 2.1.88 source: src/components/AutoUpdater.tsx
// class=modified  jaccard=0.282  score=0.4608  fileCov=0.4209
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module J8o]
((ohc = R(rt(), 1)), (ITt = R(Uj(), 1)));
function AutoUpdater({ isUpdating: e, onChangeIsUpdating: t, showSuccessMessage: n, verbose: r }) {
  let o = Ht((h) => h.autoUpdaterResult),
    s = Ho(),
    [versions, a] = Gz.useState({}),
    [l, c] = Gz.useState(false),
    u = qur(o?.version);
  Gz.useEffect(() => {
    E9e().then(c);
  }, []);
  let d = Gz.useRef(e),
    p = Gz.useRef(o?.status),
    f = Gz.useRef(o?.consecutiveExeLockFailures ?? 0);
  Gz.useEffect(() => {
    ((d.current = e), (p.current = o?.status), (f.current = o?.consecutiveExeLockFailures ?? 0));
  });
  let m = Gz.useCallback(async () => {
    if (d.current) return;
    if (p.current === "no_permissions") {
      T("AutoUpdater: Skipping update check (no_permissions persists this session)");
      return;
    }
    if (f.current >= idm) {
      T(
        "AutoUpdater: Skipping update check (claude.exe locked by another process; damped for this session)",
      );
      return;
    }
    if (xme()) return;
    if (vgt()) return;
    let h = {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      y = jQ(),
      b = await Igt(y),
      { maxVersion: _, forceDowngradeEnabled: S } = await v9e(),
      A = null,
      v = false;
    if (S && _) {
      if (((v = wgt(h, _, "auto_updater")), v)) A = _;
    }
    if (!A && b) {
      if (_ && cH(b, _)) {
        if ((T(`AutoUpdater: maxVersion ${_} is set, capping update from ${b} to ${_}`), cH(_, h)))
          A = _;
        else
          T(
            `AutoUpdater: current version ${h} is already at or above maxVersion ${_}, skipping update`,
          );
      } else if (cH(b, h)) A = b;
    }
    if (
      (a({
        global: h,
        latest: A ?? b,
      }),
      !A || Cgt(A))
    )
      return;
    if (v)
      G("tengu_auto_updater_forced_downgrade", {
        from_version: tS(h),
        to_version: tS(A),
      });
    let C = Date.now();
    t(true);
    let x = Dt();
    if (x.installMethod !== "native" && !ut(process.env.DISABLE_INSTALLATION_CHECKS)) await nVt();
    let I = await GEe();
    if ((T(`AutoUpdater: Detected installation type: ${I}`), I === "development")) {
      (T("AutoUpdater: Cannot auto-update development build"), t(false));
      return;
    }
    let k, D, P;
    if (I === "npm-local")
      (T("AutoUpdater: Using local update method"), (D = "local"), (k = await qqt(y, A)));
    else if (I === "npm-global")
      (T("AutoUpdater: Using global update method"),
        (D = "global"),
        (P = await Kqt(A)),
        (k = P.status));
    else if (I === "native") {
      (T("AutoUpdater: Unexpected native installation in non-native updater"), t(false));
      return;
    } else {
      T("AutoUpdater: Unknown installation type, falling back to config");
      let L = x.installMethod === "local";
      if (((D = L ? "local" : "global"), L)) k = await qqt(y, A);
      else ((P = await Kqt(A)), (k = P.status));
    }
    t(false);
    let O = P?.failureHint;
    if (k !== "in_progress")
      w9e({
        timestamp: new Date().toISOString(),
        path: D === "local" ? "npm-local" : "npm-global",
        outcome: k === "success" ? "success" : "failed",
        status: k,
        version_from: h,
        version_to: A,
        error_code:
          k === "install_failed" && xgt()
            ? "update_apply_restore_failed"
            : O === "windows_running_exe_lock"
              ? "update_apply_exe_locked"
              : null,
      });
    if (k === "success")
      G("tengu_auto_updater_success", {
        fromVersion: tS(h),
        toVersion: tS(A),
        durationMs: Date.now() - C,
        wasMigrated: D === "local",
        installationType: $e(I),
      });
    else if (k !== "in_progress")
      G("tengu_auto_updater_fail", {
        fromVersion: tS(h),
        attemptedVersion: tS(A),
        status: k,
        durationMs: Date.now() - C,
        wasMigrated: D === "local",
        installationType: $e(I),
      });
    s((L) => {
      let M = L.autoUpdaterResult,
        N = M?.consecutiveExeLockFailures ?? 0,
        B = k === "in_progress" ? N : O === "windows_running_exe_lock" ? N + 1 : 0;
      if (
        M?.version === A &&
        M?.status === k &&
        M?.failureHint === O &&
        (M?.consecutiveExeLockFailures ?? 0) === B
      )
        return L;
      return {
        ...L,
        autoUpdaterResult: {
          version: A,
          status: k,
          failureHint: O,
          consecutiveExeLockFailures: B,
        },
      };
    });
  }, [s]);
  if (
    (Gz.useEffect(() => {
      m();
    }, [m]),
    Gc(m, 1800000),
    !o?.version && (!versions.global || !versions.latest))
  )
    return null;
  if (!o?.version && !e) return null;
  let g = o?.status === "install_failed" ? xgt() : null;
  return WT.jsxs(U, {
    flexDirection: "row",
    gap: 1,
    children: [
      r &&
        WT.jsxs(w, {
          dimColor: true,
          wrap: "truncate",
          children: [
            "globalVersion: ",
            versions.global,
            " \xB7 latestVersion:",
            " ",
            versions.latest,
          ],
        }),
      e
        ? WT.jsx(WT.Fragment, {
            children: WT.jsx(U, {
              children: WT.jsx(w, {
                color: "text",
                dimColor: true,
                wrap: "truncate",
                children: "Auto-updating\u2026",
              }),
            }),
          })
        : o?.status === "success" &&
          n &&
          u &&
          WT.jsxs(w, {
            color: "success",
            wrap: "truncate",
            children: [
              WT.jsx(Hs, {
                status: "success",
                withSpace: true,
              }),
              "Update installed \xB7 Restart to apply",
            ],
          }),
      o?.status === "no_permissions" &&
        WT.jsxs(w, {
          color: "error",
          wrap: "truncate",
          children: [
            WT.jsx(Hs, {
              status: "error",
              withSpace: true,
            }),
            "Auto-update failed: no write permission to npm prefix \xB7 Run",
            " ",
            WT.jsx(w, {
              bold: true,
              children: "/doctor",
            }),
          ],
        }),
      o?.status === "install_failed" &&
        (g
          ? WT.jsxs(U, {
              flexDirection: "column",
              children: [
                WT.jsxs(w, {
                  color: "error",
                  wrap: "truncate",
                  children: [
                    WT.jsx(Hs, {
                      status: "error",
                      withSpace: true,
                    }),
                    "Update failed and ",
                    Q8o.basename(g.originalPath),
                    " could not be restored \u2014 it was preserved at:",
                  ],
                }),
                WT.jsxs(w, {
                  color: "error",
                  wrap: "truncate",
                  children: [
                    g.preservedPath,
                    " \xB7 rename it back to",
                    " ",
                    Q8o.basename(g.originalPath),
                    " or run",
                    " ",
                    WT.jsxs(w, {
                      bold: true,
                      children: [
                        "npm i -g ",
                        {
                          ISSUES_EXPLAINER:
                            "report the issue at https://github.com/anthropics/claude-code/issues",
                          PACKAGE_URL: "@anthropic-ai/claude-code",
                          README_URL: "https://code.claude.com/docs/en/overview",
                          VERSION: "2.1.195",
                          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                          BUILD_TIME: "2026-06-26T01:00:56Z",
                          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                        }.PACKAGE_URL,
                      ],
                    }),
                  ],
                }),
              ],
            })
          : o.failureHint === "windows_running_exe_lock"
            ? WT.jsxs(w, {
                color: "error",
                wrap: "truncate",
                children: [
                  WT.jsx(Hs, {
                    status: "error",
                    withSpace: true,
                  }),
                  "Auto-update failed: claude.exe in use (close other Claude Code sessions, including VS Code) \xB7 Run ",
                  WT.jsx(w, {
                    bold: true,
                    children: "/doctor",
                  }),
                ],
              })
            : WT.jsxs(w, {
                color: "error",
                wrap: "truncate",
                children: [
                  WT.jsx(Hs, {
                    status: "error",
                    withSpace: true,
                  }),
                  "Auto-update failed \xB7 Try ",
                  WT.jsx(w, {
                    bold: true,
                    children: "/doctor",
                  }),
                  " or",
                  " ",
                  WT.jsx(w, {
                    bold: true,
                    children: l
                      ? `cd ~/.claude/local && npm update ${
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
                        }`
                      : `npm i -g ${
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
                        }`,
                  }),
                ],
              })),
    ],
  });
}
var Q8o,
  Gz,
  WT,
  idm = 2;
