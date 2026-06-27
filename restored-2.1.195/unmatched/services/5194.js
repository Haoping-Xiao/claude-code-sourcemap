// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sec
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0019  score=0.6431  fileCov=0.0019
// note: nearest: src/main.tsx (0.0019); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Sec = E(() => {
  yec();
  Xr();
});
function Hec(e) {
  if (e.startsWith("cc://")) {
    let r = e.slice(5),
      o = new URL(`http://${r}`),
      s = o.pathname.slice(1) || void 0;
    return {
      serverUrl: `http://${o.host}`,
      authToken: s
    };
  }
  if (e.startsWith("cc+unix://")) throw new dZ("Unix socket connect (cc+unix://) is not supported by the SDK transport");
  let t = /^https?:\/\//i.test(e) ? e : `http://${e}`,
    n = new URL(t);
  return {
    serverUrl: `${n.protocol}//${n.host}`,
    authToken: void 0
  };
}
async function KKf(e) {
  let t = {
    "content-type": "application/json"
  };
  if (e.authToken) t.authorization = `Bearer ${e.authToken}`;
  let n = {};
  if (e.cwd) n.cwd = e.cwd;
  if (e.sessionKey) n.session_key = e.sessionKey;
  if (e.permissionMode) n.permission_mode = e.permissionMode;
  let r;
  try {
    r = await fetch(`${e.serverUrl}/sessions`, {
      method: "POST",
      headers: t,
      body: De(n)
    });
  } catch (s) {
    throw new dZ(`Failed to connect to server at ${e.serverUrl}: ${s instanceof Error ? s.message : String(s)}`, "session_create_failed");
  }
  if (!r.ok) {
    let s = await r.text().catch(() => "");
    throw new dZ(`Failed to create session: ${r.status} ${r.statusText}${s ? ` \u2014 ${s}` : ""}`, "session_create_failed");
  }
  let o = zKf().safeParse(await r.json());
  if (!o.success) throw new dZ(`Invalid session response: ${o.error.message}`, "session_create_invalid_response");
  return {
    sessionId: o.data.session_id,
    wsUrl: o.data.ws_url,
    workDir: o.data.work_dir
  };
}
async function Aec(e, t, n) {
  let r = {};
  if (n) r.authorization = `Bearer ${n}`;
  try {
    await fetch(`${e}/sessions/${t}`, {
      method: "DELETE",
      headers: r
    });
  } catch {}
}
var Eec = 15000,
  zKf,
  dZ,
  q3o;