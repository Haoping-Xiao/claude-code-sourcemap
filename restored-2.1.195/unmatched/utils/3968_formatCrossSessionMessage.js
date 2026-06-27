// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hpe
// matched 2.1.88 source: src/tools/SendMessageTool/SendMessageTool.ts
// class=new  jaccard=0.0241  score=0.1416  fileCov=0.0282
// note: nearest: src/tools/SendMessageTool/SendMessageTool.ts (0.0241); dir inferred from dep-graph -> utils; 6 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hpe = E(() => {
  g8n = require("fs/promises");
});
function gZa(e) {
  if (e.startsWith("uds:")) return {
    scheme: "uds",
    target: e.slice(4)
  };
  if (e.startsWith("bridge:")) return {
    scheme: "bridge",
    target: e.slice(7)
  };
  if (e.startsWith("/")) return {
    scheme: "uds",
    target: e
  };
  if (e.startsWith("\\\\.\\pipe\\")) return {
    scheme: "uds",
    target: e
  };
  return {
    scheme: "other",
    target: e
  };
}
function nAe(e) {
  if (!/^[\\/]{2}/.test(e)) return true;
  let t = /^[\\/]{2}[.?][\\/]pipe[\\/]([^\\/]+)$/i.exec(e);
  return t !== null && t[1] !== "." && t[1] !== "..";
}
var yTo = {};
_t(yTo, {
  sendToUdsSocket: () => sendToUdsSocket,
  sendControlToUdsSocket: () => sendControlToUdsSocket,
  listLivePeerSessions: () => listLivePeerSessions,
  listAllLiveSessions: () => listAllLiveSessions,
  formatCrossSessionMessage: () => formatCrossSessionMessage,
  buildCrossSessionAttrs: () => buildCrossSessionAttrs
});
function pQp(e) {
  return dQp.includes(e) ? e : void 0;
}
function mQp(e) {
  return fQp.includes(e) ? e : void 0;
}
function sendToUdsSocket(e, t, n) {
  let o = formatCrossSessionMessage(void 0, n, t);
  return T(`[uds-client] Sending ${t.length} chars to ${e}`), _Za(e, {
    type: "user",
    message: {
      role: "user",
      content: o
    },
    priority: "next",
    from: void 0
  });
}
function sendControlToUdsSocket(e, t) {
  return T(`[uds-client] Sending control:${t.action} to ${e}`), _Za(e, {
    type: "control",
    ...t
  });
}
function buildCrossSessionAttrs(e, t) {
  let n = [];
  if (e) n.push(`from="${e}"`);
  let r = t?.replace(/["\n\r<>]/g, "").trim();
  if (r) n.push(`from-name="${r}"`);
  return n.length > 0 ? ` ${n.join(" ")}` : "";
}
function formatCrossSessionMessage(e, t, n) {
  let r = buildCrossSessionAttrs(e, t);
  return `<${BZe}${r}>
${HLe(BZe, n)}
</${BZe}>`;
}
function _Za(e, t) {
  return new Promise((n, r) => {
    if (!nAe(e)) {
      r(Error(`Refusing to connect to non-local IPC path: ${e}`));
      return;
    }
    let o = mTo.connect({
        path: e
      }),
      s = false;
    o.setTimeout(5000, () => {
      s = true, o.destroy(), r(Error(`Timed out sending to ${e}`));
    }), o.on("error", i => {
      s = true, r(i);
    }), o.on("connect", () => {
      o.end(De(t) + `
`);
    }), o.on("close", () => {
      if (!s) T(`[uds-client] Sent to ${e}`);
      n();
    });
  });
}
function gQp(e) {
  return new Promise(t => {
    if (!nAe(e)) {
      t(false);
      return;
    }
    let n = mTo.connect({
        path: e
      }),
      r = o => {
        n.destroy(), t(o);
      };
    n.on("connect", () => r(true)), n.on("error", o => r(on(o) === "EBUSY")), n.setTimeout(250, () => r(false));
  });
}
async function bZa() {
  let e = fTo.join(tr(), "sessions"),
    t;
  try {
    t = await e9t.readdir(e);
  } catch {
    return [];
  }
  return (await Promise.all(t.filter(r => /^\d+\.json$/.test(r)).map(async r => {
    try {
      let o = parseInt(r.replace(/\.json$/, ""), 10);
      if (isNaN(o)) return null;
      let s = fTo.join(e, r),
        i = await nR(s, 262144);
      if (i === null) return null;
      let a = Ft(i);
      return {
        sock: a.messagingSocketPath ?? "",
        cwd: a.cwd ?? "?",
        startedAt: a.startedAt ?? 0,
        procStart: typeof a.procStart === "string" ? a.procStart : void 0,
        name: a.name,
        kind: pQp(a.kind),
        sessionId: a.sessionId,
        jobId: typeof a.jobId === "string" ? a.jobId : void 0,
        bridgeSessionId: typeof a.bridgeSessionId === "string" ? a.bridgeSessionId : void 0,
        logPath: a.logPath,
        status: mQp(a.status),
        waitingFor: typeof a.waitingFor === "string" ? a.waitingFor : void 0,
        updatedAt: typeof a.updatedAt === "number" ? a.updatedAt : void 0,
        statusUpdatedAt: typeof a.statusUpdatedAt === "number" ? a.statusUpdatedAt : void 0,
        entrypoint: typeof a.entrypoint === "string" ? a.entrypoint : void 0,
        agent: typeof a.agent === "string" ? a.agent : void 0,
        state: typeof a.state === "string" ? a.state : void 0,
        detail: typeof a.detail === "string" ? a.detail : void 0,
        tempo: a.tempo === "active" || a.tempo === "idle" || a.tempo === "blocked" ? a.tempo : void 0,
        needs: typeof a.needs === "string" ? a.needs : void 0,
        peerProtocol: typeof a.peerProtocol === "number" ? a.peerProtocol : void 0,
        tmux: typeof a.tmux === "string" ? a.tmux : void 0,
        pid: o,
        file: s
      };
    } catch {
      return null;
    }
  }))).filter(r => r !== null);
}
async function listAllLiveSessions() {
  let e = await bZa(),
    t = e.map(s => zR(s.pid)),
    n = await Promise.all(e.map((s, i) => t[i] && bv(s.pid, s.procStart))),
    r = Vt() !== "wsl",
    o = [];
  for (let s = 0; s < e.length; s++) {
    let {
      file: i,
      ...a
    } = e[s];
    if (n[s]) o.push(a);else if (r && !t[s]) e9t.unlink(i).catch(() => {});
  }
  return o;
}
async function listLivePeerSessions() {
  let t = (await bZa()).filter(s => s.sock && s.sock !== void 0),
    n = await Promise.all(t.map(s => gQp(s.sock))),
    r = Vt() !== "wsl",
    o = [];
  for (let s = 0; s < t.length; s++) {
    let {
      file: i,
      ...a
    } = t[s];
    if (n[s]) o.push(a);else if (r && !zR(a.pid)) e9t.unlink(i).catch(() => {});
  }
  return o;
}
var e9t, mTo, fTo, dQp, fQp;