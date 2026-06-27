// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pgl
// matched 2.1.88 source: src/tasks/LocalShellTask/guards.ts
// class=new  jaccard=0.0307  score=0.0352  fileCov=0.1906
// note: nearest: src/tasks/LocalShellTask/guards.ts (0.0307); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var Pgl = E(() => {
  ql();
  Ye();
  es();
  q6t = R(se(), 1);
});
var g0o = {};
_t(g0o, {
  applyCcrTimeoutCap: () => applyCcrTimeoutCap,
  MonitorTool: () => MonitorTool
});
function Xpf() {
  return {
    description: H.string().describe("Short human-readable description of what you are monitoring (shown in notifications)."),
    timeout_ms: H.number().min(1000).optional().default($gl).describe(`Kill the monitor after this deadline. Default ${$gl}ms, max ${f0o}ms. Ignored when persistent is true.`),
    persistent: H.boolean().optional().default(!1).describe("Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.")
  };
}
function Qpf(e) {
  return e.persistent || e.timeout_ms <= f0o;
}
function applyCcrTimeoutCap(e) {
  if (!ut(process.env.CLAUDE_CODE_REMOTE)) return {
    timeout_ms: e.timeout_ms,
    persistent: e.persistent
  };
  return {
    timeout_ms: e.persistent ? Mgl : Math.min(e.timeout_ms, Mgl),
    persistent: !1
  };
}
function Zpf(...e) {
  return On(e, Boolean) === 1;
}
async function nff(e, t, n) {
  let {
      description: r
    } = t,
    {
      timeout_ms: o,
      persistent: s
    } = applyCcrTimeoutCap(t),
    {
      abortController: i,
      toolUseId: a,
      taskRegistry: l
    } = n,
    c = gyt(n),
    u = {},
    d = $6n({
      description: r,
      agentId: c,
      taskRef: u,
      killTask: () => {
        if (u.id) yAe(u.id, l);
      }
    }),
    p = await Ede(e, i.signal, "bash", {
      preventCwdChanges: !0,
      shouldUseSandbox: N$({
        command: e,
        dangerouslyDisableSandbox: t.dangerouslyDisableSandbox
      }),
      onStdout: d.onData,
      sessionEnvVars: n.sessionEnvVars
    }),
    f = await E$e({
      command: e,
      description: r,
      shellCommand: p,
      toolUseId: a,
      agentId: c,
      kind: "monitor"
    }, {
      abortController: i,
      taskRegistry: l
    });
  u.id = f.taskId, VAe(c, `monitor:${f.taskId}`, l);
  let m = s ? void 0 : setTimeout((g, h, y, b, _) => {
    if (g.isKilled()) return;
    sq(h, "[Monitor timed out \u2014 re-arm if needed.]", y, {
      isHousekeeping: !0,
      agentId: b
    }), yAe(y, _);
  }, o, d, r, f.taskId, c, l);
  return p.result.then(() => {
    if (m) clearTimeout(m);
    d.finish(), bAe(c, `monitor:${f.taskId}`, l);
  }), {
    data: {
      taskId: f.taskId,
      timeoutMs: s ? 0 : o,
      persistent: s
    }
  };
}
function rff(e) {
  if (!Us("allow_web_fetch")) return {
    behavior: "deny",
    message: "Monitor cannot open a WebSocket: arbitrary-URL egress is disabled by your organization's compliance policy.",
    decisionReason: {
      type: "other",
      reason: "compliance taint disables model-chosen URL egress"
    }
  };
  let t = new URL(e.url).hostname,
    n = t.startsWith("[") && t.endsWith("]") ? t.slice(1, -1) : t;
  if (Ogl.isIP(n) && Q_t(n)) return {
    behavior: "deny",
    message: `Monitor cannot open a WebSocket to ${t}: the address is in a private, link-local, or cloud-metadata range.`,
    decisionReason: {
      type: "other",
      reason: "SSRF-blocked address range"
    }
  };
  let r = wro(n);
  if (!r.allowed) return {
    behavior: "deny",
    message: `Monitor cannot open a WebSocket to ${t}: ${r.reason}.`,
    decisionReason: {
      type: "other",
      reason: r.reason
    }
  };
  return {
    behavior: "ask",
    message: `Monitor will open a WebSocket to ${e.url}`,
    suggestions: []
  };
}
var Ogl,
  f0o = 3600000,
  Mgl = 1800000,
  $gl = 300000,
  Vpf = "Shell command or script. Each stdout line is an event; exit ends the watch.",
  zpf = "command contains control characters that would be hidden in the approval dialog",
  Kpf = () => H.string().refine(sEe, zpf),
  Ypf = () => H.object({
    url: H.string().refine(sEe, "url contains control characters that would be hidden in the approval dialog").refine(e => {
      try {
        let t = new URL(e);
        return (t.protocol === "ws:" || t.protocol === "wss:") && !t.username && !t.password && !/[\t\n\r]/.test(e) && /^[\x00-\x7F]*$/.test(e);
      } catch {
        return !1;
      }
    }, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"),
    protocols: H.array(H.string().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token")).refine(e => new Set(e).size === e.length, "protocols must be unique").optional()
  }).describe("WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command."),
  Jpf,
  eff,
  tff,
  off,
  MonitorTool;