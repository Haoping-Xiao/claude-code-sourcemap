// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iWe
// matched 2.1.88 source: node_modules/@anthropic-ai/sandbox-runtime/dist/sandbox/http-proxy.js
// class=new  jaccard=0.0518  score=0.206  fileCov=0.0647
// note: nearest: node_modules/@anthropic-ai/sandbox-runtime/dist/sandbox/http-proxy.js (0.0518); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iWe = E(() => {
  fn();
  pFt = {
    GIT_TERMINAL_PROMPT: "0",
    GIT_ASKPASS: "",
    GCM_INTERACTIVE: "never"
  };
  Fne = ["-c", "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes"];
});
function Bo(e, t) {
  if (!process.env.SRT_DEBUG) return;
  let n = t?.level || "info",
    r = "[SandboxDebug]";
  switch (n) {
    case "error":
      console.error(`${r} ${e}`);
      break;
    case "warn":
      console.warn(`${r} ${e}`);
      break;
    default:
      console.error(`${r} ${e}`);
  }
}
async function tMn(e, t, n, r, o) {
  let s,
    i = t;
  if (!JKd.has(t.method ?? "GET")) {
    let c = Heo.Readable.toWeb(t),
      [u, d] = c.tee();
    s = u, i = Heo.Readable.fromWeb(d);
  }
  let a;
  try {
    a = new Request(r, {
      method: t.method,
      headers: QKd(t),
      signal: o,
      ...(s ? {
        body: s,
        duplex: "half"
      } : {})
    });
  } catch (c) {
    return QKi(n, {
      action: "deny",
      reason: `malformed request: ${c.message}`
    }), s?.cancel(), i.destroy(), null;
  }
  let l;
  try {
    l = await e(a);
  } catch (c) {
    l = {
      action: "deny",
      reason: `filterRequest threw: ${c.message}`
    };
  }
  if (s && !a.bodyUsed) s.cancel();
  if (l.action === "allow") return Bo(`[request-filter] allow ${t.method} ${r}`), i;
  return QKi(n, l), i.destroy(), null;
}
function QKi(e, t) {
  let n = t.reason ?? "denied by filterRequest";
  if (Bo(`[request-filter] deny: ${n}`), e.headersSent) {
    e.destroy();
    return;
  }
  e.writeHead(403, {
    "Content-Type": "text/plain",
    "X-Proxy-Error": "blocked-by-sandbox-runtime"
  }), e.end(n + `
`);
}
function QKd(e) {
  let t = new Headers();
  for (let [n, r] of Object.entries(e.headers)) {
    if (r === void 0) continue;
    if (Array.isArray(r)) for (let o of r) t.append(n, o);else t.append(n, r);
  }
  return t;
}
var Heo, JKd;