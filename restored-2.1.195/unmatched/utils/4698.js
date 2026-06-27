// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hnr
// matched 2.1.88 source: src/commands/plugin/ManagePlugins.tsx
// class=new  jaccard=0.0159  score=0.092  fileCov=0.0188
// note: nearest: src/commands/plugin/ManagePlugins.tsx (0.0159); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hnr = E(() => {
  Rd();
  Is();
  sr();
  VQ();
  zOe();
  YOe();
  Gfe();
  WL();
  q$();
  IKe();
  IEt = require("fs/promises");
});
function L$f(e) {
  let t = ynr.c(19),
    {
      promise: n
    } = e,
    r = xEt.use(n),
    o = r.supervisor,
    s = r.workersLive ?? r.workersRoster,
    i;
  if (t[0] !== s || t[1] !== r.controlReachable || t[2] !== o) i = o !== null ? jk.jsxs(hs.Node, {
    children: ["pid ", o.pid, " \xB7 v", o.version, " \xB7 ", s, " bg", " ", bn(s, "worker"), r.controlReachable ? "" : " \xB7 control.sock unreachable"]
  }) : null, t[0] = s, t[1] = r.controlReachable, t[2] = o, t[3] = i;else i = t[3];
  let a = r.serviceInstalled ? "service-managed" : "ephemeral",
    l;
  if (t[4] !== a) l = jk.jsxs(hs.Node, {
    children: ["Mode: ", a]
  }), t[4] = a, t[5] = l;else l = t[5];
  let c;
  if (t[6] !== o) c = o !== null && o.version !== {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION ? jk.jsxs(hs.Node, {
    color: "warning",
    children: ["Server version v", o.version, " differs from this CLI (v", {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION, "). It will restart on next use."]
  }) : null, t[6] = o, t[7] = c;else c = t[7];
  let u;
  if (t[8] !== r.serviceInstalled) u = r.serviceInstalled ? jk.jsxs(hs.Node, {
    color: "warning",
    children: ["A persistent launchd/systemd unit is installed. The next server start will remove it; run", " ", jk.jsx(w, {
      color: "suggestion",
      children: "claude daemon uninstall"
    }), " to remove it now."]
  }) : null, t[8] = r.serviceInstalled, t[9] = u;else u = t[9];
  let d;
  if (t[10] !== r.configuredWorkers) d = r.configuredWorkers > 0 ? jk.jsxs(hs.Node, {
    color: "warning",
    children: [r.configuredWorkers, " configured background", " ", bn(r.configuredWorkers, "worker"), " (daemon.json) only run while a foreground client or background job keeps the server alive. They will not start after reboot."]
  }) : null, t[10] = r.configuredWorkers, t[11] = d;else d = t[11];
  let p;
  if (t[12] === Symbol.for("react.memo_cache_sentinel")) p = jk.jsxs(hs.Node, {
    dimColor: !0,
    children: ["See ", jk.jsx(w, {
      color: "suggestion",
      children: "claude daemon status"
    }), " for details"]
  }), t[12] = p;else p = t[12];
  let f;
  if (t[13] !== i || t[14] !== l || t[15] !== c || t[16] !== u || t[17] !== d) f = jk.jsxs(hs.Group, {
    children: [i, l, c, u, d, p]
  }), t[13] = i, t[14] = l, t[15] = c, t[16] = u, t[17] = d, t[18] = f;else f = t[18];
  return f;
}
function kNl() {
  let e = ynr.c(4),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = $No(), e[0] = t;else t = e[0];
  let n = t,
    r;
  if (e[1] === Symbol.for("react.memo_cache_sentinel")) r = jk.jsx(w, {
    bold: !0,
    children: "Background server"
  }), e[1] = r;else r = e[1];
  let o;
  if (e[2] === Symbol.for("react.memo_cache_sentinel")) o = jk.jsxs(U, {
    children: [r, jk.jsx(xEt.Suspense, {
      fallback: null,
      children: jk.jsx(D$f, {
        promise: n
      })
    })]
  }), e[2] = o;else o = e[2];
  let s;
  if (e[3] === Symbol.for("react.memo_cache_sentinel")) s = jk.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [o, jk.jsx(hs, {
      variant: "tree",
      children: jk.jsx(xEt.Suspense, {
        fallback: jk.jsx(hs.Node, {
          dimColor: !0,
          children: "Probing background server\u2026"
        }),
        children: jk.jsx(L$f, {
          promise: n
        })
      })
    })]
  }), e[3] = s;else s = e[3];
  return s;
}
function D$f(e) {
  let t = ynr.c(2),
    {
      promise: n
    } = e,
    r = xEt.use(n),
    s = r.supervisor !== null && r.supervisor.version !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION || r.supervisor !== null && !r.controlReachable || r.serviceInstalled || r.configuredWorkers > 0 ? "warning" : r.supervisor === null ? "pending" : "success",
    i;
  if (t[0] !== s) i = jk.jsxs(w, {
    children: [" ", jk.jsx(Hs, {
      status: s
    })]
  }), t[0] = s, t[1] = i;else i = t[1];
  return i;
}
var ynr, xEt, jk;