// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module itc
// matched 2.1.88 source: src/bridge/bridgeUI.ts
// class=modified  jaccard=0.2676  score=0.7007  fileCov=0.3021
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module itc] deps: axios/lib/axios.js, constants/betas.ts, dn, utils/git.ts, cli/transports/SSETransport.ts, bridge/debugUtils.ts
MYf = /^[a-zA-Z0-9_-]+$/;
Qq = class Qq extends Error {
  status;
  errorType;
  constructor(e, t, n) {
    super(e);
    ((this.name = "BridgeFatalError"), (this.status = t), (this.errorType = n));
  }
};
async function NYf(e) {
  return (await atc.toString(e, OYf))
    .split(
      `
`,
    )
    .filter((n) => n.length > 0);
}
function createBridgeLogger(options) {
  let t = options.write ?? ((B) => process.stdout.write(B)),
    n = options.verbose,
    r = 0,
    o = "idle",
    s = "Ready",
    i = "",
    a = "",
    l = "",
    c = "",
    u = "",
    d = null,
    p = [],
    f = false,
    m = "",
    g = null,
    h = 0,
    y = 0,
    b = 1,
    _ = null,
    S = "single-session",
    sessionDisplayInfo = new Map(),
    v = null,
    C = 0;
  function x(B) {
    let $ = process.stdout.columns || 80,
      q = 0;
    for (let W of B.split(`
`)) {
      if (W.length === 0) {
        q++;
        continue;
      }
      let V = rn(W);
      q += Math.max(1, Math.ceil(V / $));
    }
    if (
      B.endsWith(`
`)
    )
      q--;
    return q;
  }
  function I(B) {
    (t(B), (r += x(B)));
  }
  function k() {
    if (r <= 0) return;
    (t(`\x1B[${r}A`), t("\x1B[J"), (r = 0));
  }
  function D(B) {
    (k(), t(B), N());
  }
  function P(B) {
    if (B === m) return;
    ((m = B),
      NYf(B)
        .then(($) => {
          ((p = $), N());
        })
        .catch(($) => {
          T(`QR code generation failed: ${$}`, {
            level: "error",
          });
        }));
  }
  function O() {
    k();
    let B = FRt[C % FRt.length],
      $ = "";
    if (i) $ += wt.dim(" \xB7 ") + wt.dim(i);
    if (a) $ += wt.dim(" \xB7 ") + wt.dim(a);
    I(`${wt.yellow(B)} ${wt.yellow("Connecting")}${$}
`);
  }
  function L() {
    (M(),
      O(),
      (v = setInterval(() => {
        (C++, O());
      }, 150)));
  }
  function M() {
    if (v) (clearInterval(v), (v = null));
  }
  function N() {
    if (o === "reconnecting" || o === "failed") return;
    k();
    let B = o === "idle";
    if (f)
      for (let K of p)
        I(`${wt.dim(K)}
`);
    let $ = Ufn,
      q = B ? wt.green : wt.cyan,
      V = (B ? wt.green : wt.cyan)(s),
      Y = "";
    if (i) Y += wt.dim(" \xB7 ") + wt.dim(i);
    if (a && S !== "worktree") Y += wt.dim(" \xB7 ") + wt.dim(a);
    if (
      (I(`${q($)} ${V}${Y}
`),
      b > 1)
    ) {
      let K =
        S === "worktree"
          ? "New sessions will be created in an isolated worktree"
          : "New sessions will be created in the current directory";
      I(`    ${wt.dim(`Capacity: ${y}/${b} \xB7 ${K}`)}
`);
      for (let [, Z] of sessionDisplayInfo) {
        let J = Z.title ? Rs(Z.title, 35) : wt.dim("Attached"),
          ne = HXa(J, Z.url),
          oe = Z.activity,
          ee =
            oe && oe.type !== "result" && oe.type !== "error"
              ? wt.dim(` ${Rs(oe.summary, 40)}`)
              : "";
        I(`    ${ne}${ee}
`);
      }
    }
    if (b === 1) {
      let K =
        S === "single-session"
          ? "Single session \xB7 exits when complete"
          : S === "worktree"
            ? `Capacity: ${y}/1 \xB7 New sessions will be created in an isolated worktree`
            : `Capacity: ${y}/1 \xB7 New sessions will be created in the current directory`;
      I(`    ${wt.dim(K)}
`);
    }
    if (b === 1 && !B && g && Date.now() - h < _Xa)
      I(`  ${wt.dim(Rs(g, 60))}
`);
    let z = d ?? c;
    if (z) {
      I(`
`);
      let K = B ? C9n(z) : I9n(z),
        Z = f ? wt.dim.italic("space to hide QR code") : wt.dim.italic("space to show QR code"),
        J = _ ? wt.dim.italic(" \xB7 w to toggle spawn mode") : "";
      (I(`${wt.dim(K)}
`),
        I(`${Z}${J}
`));
    }
  }
  return {
    printBanner(B, $) {
      if (((u = B.sessionIngressUrl), (c = vVt($, u)), P(c), n))
        t(
          wt.dim("Remote Control") +
            ` v${
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
            }
`,
        );
      if (n) {
        if (B.spawnMode !== "single-session")
          (t(
            wt.dim("Spawn mode: ") +
              `${B.spawnMode}
`,
          ),
            t(
              wt.dim("Max concurrent sessions: ") +
                `${B.maxSessions}
`,
            ));
        t(
          wt.dim("Environment ID: ") +
            `${$}
`,
        );
      }
      if (B.sandbox)
        t(
          wt.dim("Sandbox: ") +
            `${wt.green("Enabled")}
`,
        );
      if (B.livePreviewPorts && B.livePreviewPorts.size > 0) {
        let q = [...B.livePreviewPorts].sort((W, V) => W - V).join(", ");
        t(
          wt.yellow(`\u26A0  Live preview enabled: 127.0.0.1 port${B.livePreviewPorts.size > 1 ? "s" : ""} ${q} ${B.livePreviewPorts.size > 1 ? "are" : "is"} reachable from this session's livepreview URL while Remote Control is running.
`),
        );
      }
      (t(`
`),
        L());
    },
    logSessionStart(B, $) {
      if (n) {
        let q = Rs($, 80);
        D(
          wt.dim(`[${VPe()}]`) +
            ` Session started: ${wt.white(`"${q}"`)} (${wt.dim(B)})
`,
        );
      }
    },
    logSessionComplete(B, $) {
      D(
        wt.dim(`[${VPe()}]`) +
          ` Session ${wt.green("completed")} (${Yi($)}) ${wt.dim(B)}
`,
      );
    },
    logSessionFailed(B, $) {
      D(
        wt.dim(`[${VPe()}]`) +
          ` Session ${wt.red("failed")}: ${$} ${wt.dim(B)}
`,
      );
    },
    logStatus(B) {
      D(
        wt.dim(`[${VPe()}]`) +
          ` ${B}
`,
      );
    },
    logVerbose(B) {
      if (n)
        D(
          wt.dim(`[${VPe()}] ${B}`) +
            `
`,
        );
    },
    logError(B) {
      D(
        wt.red(`[${VPe()}] Error: ${B}`) +
          `
`,
      );
    },
    logReconnected(B) {
      D(
        wt.dim(`[${VPe()}]`) +
          ` ${wt.green("Reconnected")} after ${Yi(B)}
`,
      );
    },
    setRepoInfo(B, $) {
      ((i = B), (a = $));
    },
    setDebugLogPath(B) {
      l = B;
    },
    updateIdleStatus() {
      (M(), (o = "idle"), (s = "Ready"), (g = null), (h = 0), (d = null), P(c), N());
    },
    setAttached(B) {
      if ((M(), (o = "attached"), (s = "Connected"), (g = null), (h = 0), b <= 1))
        ((d = dS(B, u)), P(d));
      N();
    },
    updateReconnectingStatus(B, $) {
      if ((M(), k(), (o = "reconnecting"), f))
        for (let W of p)
          I(`${wt.dim(W)}
`);
      let q = FRt[C % FRt.length];
      (C++,
        I(`${wt.yellow(q)} ${wt.yellow("Reconnecting")} ${wt.dim("\xB7")} ${wt.dim(`retrying in ${B}`)} ${wt.dim("\xB7")} ${wt.dim(`disconnected ${$}`)}
`));
    },
    updateFailedStatus(B) {
      (M(), k(), (o = "failed"));
      let $ = "";
      if (i) $ += wt.dim(" \xB7 ") + wt.dim(i);
      if (a) $ += wt.dim(" \xB7 ") + wt.dim(a);
      if (
        (I(`${wt.red(Ffn)} ${wt.red("Remote Control Failed")}${$}
`),
        I(`${wt.dim(AXa)}
`),
        B)
      )
        I(`${wt.red(B)}
`);
    },
    updateSessionStatus(B, $, q, W) {
      if (q.type === "tool_start") ((g = q.summary), (h = Date.now()));
      N();
    },
    clearStatus() {
      (M(), k());
    },
    toggleQr() {
      ((f = !f), N());
    },
    updateSessionCount(B, $, q) {
      if (y === B && b === $ && S === q) return;
      ((y = B), (b = $), (S = q));
    },
    setSpawnModeDisplay(B) {
      if (_ === B) return;
      if (((_ = B), B)) S = B;
    },
    addSession(B, $) {
      sessionDisplayInfo.set(B, {
        url: $,
      });
    },
    updateSessionActivity(B, $) {
      let q = sessionDisplayInfo.get(B);
      if (!q) return;
      q.activity = $;
    },
    setSessionTitle(B, $) {
      let q = sessionDisplayInfo.get(B);
      if (!q) return;
      if (((q.title = $), o === "reconnecting" || o === "failed")) return;
      if (b === 1) ((o = "titled"), (s = Rs($, 40)));
      N();
    },
    removeSession(B) {
      sessionDisplayInfo.delete(B);
    },
    refreshDisplay() {
      if (o === "reconnecting" || o === "failed") return;
      N();
    },
  };
}
var atc, OYf;
