// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ihc
// matched 2.1.88 source: src/components/NativeAutoUpdater.tsx
// class=modified  jaccard=0.2536  score=0.4185  fileCov=0.3915
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ihc] deps: kt, Du, J8o, Ye, uo, FEe, er, je, MPe, fn, kgt, A9e, BJ, LOe, gm
((Q8o = require("path")), (Gz = R(rt(), 1)), (WT = R(se(), 1)));
function getErrorType(e) {
  if (e.includes("timeout")) return "timeout";
  if (e.includes("Checksum mismatch")) return "checksum_mismatch";
  if (e.includes("ENOENT") || e.includes("not found")) return "not_found";
  if (e.includes("EACCES") || e.includes("permission")) return "permission_denied";
  if (e.includes("ENOSPC")) return "disk_full";
  if (e.includes("npm")) return "npm_error";
  if (e.includes("network") || e.includes("ECONNREFUSED") || e.includes("ENOTFOUND"))
    return "network_error";
  let t = e.toLowerCase();
  if (
    e.includes("ENOEXEC") ||
    t.includes("exec format error") ||
    t.includes("bad cpu type") ||
    t.includes("cannot execute binary") ||
    t.includes("code signature") ||
    t.includes("gatekeeper") ||
    t.includes("killed: 9")
  )
    return "exec_format";
  if (
    t.includes("virus") ||
    t.includes("quarantine") ||
    t.includes("defender") ||
    t.includes("operation did not complete successfully because the file contains")
  )
    return "av_quarantine";
  if (
    e.includes("EXDEV") ||
    e.includes("EEXIST") ||
    e.includes("EBUSY") ||
    t.includes("rename") ||
    t.includes("move failed") ||
    t.includes("cross-device")
  )
    return "swap_failure";
  return "unknown";
}
function NativeAutoUpdater({
  isUpdating: e,
  onChangeIsUpdating: t,
  showSuccessMessage: n,
  verbose: r,
}) {
  let o = Ht((b) => b.autoUpdaterResult),
    s = Ho(),
    [i, a] = CZ.useState({
      current: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
    }),
    [l, c] = CZ.useState(null),
    u = qur(o?.version),
    d = jQ(),
    p = CZ.useRef(e);
  CZ.useEffect(() => {
    p.current = e;
  });
  let f = CZ.useRef(o);
  CZ.useEffect(() => {
    f.current = o;
  });
  let m = CZ.useCallback(async () => {
    if (p.current) return;
    if (f.current?.status === "success") return;
    if (xme()) return;
    let b = await AVn();
    if (
      b &&
      cH(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
        b,
      )
    ) {
      let S = await Cza();
      c(S ?? "affects your version");
    }
    if (vgt()) return;
    t(true);
    let _ = Date.now();
    G("tengu_native_auto_updater_start", {});
    try {
      let S = await L9e(d),
        A = {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
        v = Date.now() - _;
      if (S.lockFailed) {
        G("tengu_native_auto_updater_lock_contention", {
          latency_ms: v,
        });
        return;
      }
      if (
        (a({
          current: A,
          latest: S.latestVersion,
        }),
        S.wasUpdated)
      )
        (w9e({
          timestamp: new Date().toISOString(),
          path: "native",
          outcome: "success",
          status: "success",
          version_from: A,
          version_to: S.latestVersion ?? null,
          error_code: null,
        }),
          G("tengu_native_auto_updater_success", {
            latency_ms: v,
          }),
          s((C) => {
            let x = C.autoUpdaterResult;
            if (x?.version === S.latestVersion && x?.status === "success") return C;
            return {
              ...C,
              autoUpdaterResult: {
                version: S.latestVersion,
                status: "success",
              },
            };
          }));
      else
        G("tengu_native_auto_updater_up_to_date", {
          latency_ms: v,
        });
    } catch (S) {
      let A = Date.now() - _,
        v = S instanceof Error ? S.message : String(S);
      (T(`Native auto-updater failed: ${v}`, {
        level: "error",
      }),
        w9e({
          timestamp: new Date().toISOString(),
          path: "native",
          outcome: "failed",
          status: "install_failed",
          version_from: {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION,
          version_to: null,
          error_code: null,
        }));
      let C = getErrorType(v),
        x = xd(S) ?? "none";
      (G("tengu_native_auto_updater_fail", {
        latency_ms: A,
        error_code: x,
        error_timeout: C === "timeout",
        error_checksum: C === "checksum_mismatch",
        error_not_found: C === "not_found",
        error_permission: C === "permission_denied",
        error_disk_full: C === "disk_full",
        error_npm: C === "npm_error",
        error_network: C === "network_error",
        error_swap_failure: C === "swap_failure",
        error_exec_format: C === "exec_format",
        error_av_quarantine: C === "av_quarantine",
      }),
        s((I) => {
          let k = I.autoUpdaterResult;
          if (k?.version === null && k?.status === "install_failed") return I;
          return {
            ...I,
            autoUpdaterResult: {
              version: null,
              status: "install_failed",
            },
          };
        }));
    } finally {
      t(false);
    }
  }, [s, d]);
  (CZ.useEffect(() => {
    m();
  }, [m]),
    Gc(m, 1800000));
  let g = !!o?.status,
    h = !!i.current && !!i.latest;
  if (!(!!l || g || (e && h))) return null;
  return Kse.jsxs(U, {
    flexDirection: "row",
    gap: 1,
    children: [
      r &&
        Kse.jsxs(w, {
          dimColor: true,
          wrap: "truncate",
          children: ["current: ", i.current, " \xB7 ", d, ": ", i.latest],
        }),
      e
        ? Kse.jsx(U, {
            children: Kse.jsx(w, {
              dimColor: true,
              wrap: "truncate",
              children: "Checking for updates",
            }),
          })
        : o?.status === "success" &&
          n &&
          u &&
          Kse.jsxs(w, {
            color: "success",
            wrap: "truncate",
            children: [
              Kse.jsx(Hs, {
                status: "success",
                withSpace: true,
              }),
              "Update installed \xB7 Restart to update",
            ],
          }),
      o?.status === "install_failed" &&
        Kse.jsxs(w, {
          color: "error",
          wrap: "truncate",
          children: [
            Kse.jsx(Hs, {
              status: "error",
              withSpace: true,
            }),
            "Auto-update failed \xB7 Run ",
            Kse.jsx(w, {
              bold: true,
              children: "/doctor",
            }),
          ],
        }),
      l && false,
    ],
  });
}
var CZ, Kse;
