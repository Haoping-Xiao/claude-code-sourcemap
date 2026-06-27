// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uXl
// matched 2.1.88 source: src/components/sandbox/SandboxConfigTab.tsx
// class=modified  jaccard=0.1874  score=0.2024  fileCov=0.717
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var uXl = E(() => {
  cXl = {
    isEnabled: () => !1,
    isHidden: !0,
    name: "stub",
  };
});
function pXl() {
  let e = dXl.c(3),
    t = xo.isSandboxingEnabled(),
    n;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
    let s = xo.checkDependencies();
    ((n =
      s.warnings.length > 0
        ? SA.jsx(U, {
            marginTop: 1,
            flexDirection: "column",
            children: s.warnings.map(r8f),
          })
        : null),
      (e[0] = n));
  } else n = e[0];
  let r = n;
  if (!t) {
    let s;
    if (e[1] === Symbol.for("react.memo_cache_sentinel"))
      ((s = SA.jsxs(U, {
        flexDirection: "column",
        children: [
          SA.jsx(w, {
            color: "subtle",
            children: "Sandbox is not enabled",
          }),
          r,
        ],
      })),
        (e[1] = s));
    else s = e[1];
    return s;
  }
  let o;
  if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
    let s = xo.getFsReadConfig(),
      i = xo.getFsWriteConfig(),
      a = xo.getNetworkRestrictionConfig(),
      l = xo.getAllowUnixSockets(),
      c = xo.getExcludedCommands(),
      u = xo.getLinuxGlobPatternWarnings();
    ((o = SA.jsxs(U, {
      flexDirection: "column",
      children: [
        SA.jsxs(U, {
          flexDirection: "column",
          children: [
            SA.jsx(w, {
              bold: !0,
              color: "permission",
              children: "Excluded Commands:",
            }),
            SA.jsx(w, {
              dimColor: !0,
              children: c.length > 0 ? c.join(", ") : "None",
            }),
          ],
        }),
        s.denyOnly.length > 0 &&
          SA.jsxs(U, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              SA.jsx(w, {
                bold: !0,
                color: "permission",
                children: "Filesystem Read Restrictions:",
              }),
              SA.jsxs(w, {
                dimColor: !0,
                children: ["Denied: ", s.denyOnly.join(", ")],
              }),
              s.allowWithinDeny &&
                s.allowWithinDeny.length > 0 &&
                SA.jsxs(w, {
                  dimColor: !0,
                  children: ["Allowed within denied: ", s.allowWithinDeny.join(", ")],
                }),
            ],
          }),
        i.allowOnly.length > 0 &&
          SA.jsxs(U, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              SA.jsx(w, {
                bold: !0,
                color: "permission",
                children: "Filesystem Write Restrictions:",
              }),
              SA.jsxs(w, {
                dimColor: !0,
                children: ["Allowed: ", i.allowOnly.join(", ")],
              }),
              i.denyWithinAllow.length > 0 &&
                SA.jsxs(w, {
                  dimColor: !0,
                  children: ["Denied within allowed: ", i.denyWithinAllow.join(", ")],
                }),
            ],
          }),
        ((a.allowedHosts && a.allowedHosts.length > 0) ||
          (a.deniedHosts && a.deniedHosts.length > 0)) &&
          SA.jsxs(U, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              SA.jsxs(w, {
                bold: !0,
                color: "permission",
                children: ["Network Restrictions", NWe() ? " (Managed)" : "", ":"],
              }),
              a.allowedHosts &&
                a.allowedHosts.length > 0 &&
                SA.jsxs(w, {
                  dimColor: !0,
                  children: ["Allowed: ", a.allowedHosts.join(", ")],
                }),
              a.deniedHosts &&
                a.deniedHosts.length > 0 &&
                SA.jsxs(w, {
                  dimColor: !0,
                  children: ["Denied: ", a.deniedHosts.join(", ")],
                }),
            ],
          }),
        l &&
          l.length > 0 &&
          SA.jsxs(U, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              SA.jsx(w, {
                bold: !0,
                color: "permission",
                children: "Allowed Unix Sockets:",
              }),
              SA.jsx(w, {
                dimColor: !0,
                children: l.join(", "),
              }),
            ],
          }),
        u.length > 0 &&
          SA.jsxs(U, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              SA.jsx(w, {
                bold: !0,
                color: "warning",
                children: "\u26A0 Warning: Glob patterns not fully supported on Linux",
              }),
              SA.jsxs(w, {
                dimColor: !0,
                children: [
                  "The following patterns will be ignored:",
                  " ",
                  u.slice(0, 3).join(", "),
                  u.length > 3 && ` (${u.length - 3} more)`,
                ],
              }),
            ],
          }),
        r,
      ],
    })),
      (e[2] = o));
  } else o = e[2];
  return o;
}
function r8f(e, t) {
  return SA.jsx(
    w,
    {
      dimColor: !0,
      children: e,
    },
    t,
  );
}
var dXl, SA;
