// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gtc
// matched 2.1.88 source: src/bridge/workSecret.ts
// class=modified  jaccard=0.2355  score=0.3396  fileCov=0.4345
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gtc] deps: Jt, kv, Cde
((ftc = require("child_process")),
  (mtc = require("fs")),
  (eQt = require("path")),
  (oGo = require("readline")));
jYf = {
  Read: "Reading",
  Write: "Writing",
  Edit: "Editing",
  MultiEdit: "Editing",
  Bash: "Running",
  Glob: "Searching",
  Grep: "Searching",
  WebFetch: "Fetching",
  WebSearch: "Searching",
  Task: "Running task",
  FileReadTool: "Reading",
  FileWriteTool: "Writing",
  FileEditTool: "Editing",
  GlobTool: "Searching",
  GrepTool: "Searching",
  BashTool: "Running",
  NotebookEditTool: "Editing notebook",
  LSP: "LSP",
};
function htc(e) {
  let t = Buffer.from(e, "base64url").toString("utf-8"),
    n = Ft(t);
  if (!n || typeof n !== "object" || !("version" in n) || n.version !== 1)
    throw Error(
      `Unsupported work secret version: ${n && typeof n === "object" && "version" in n ? n.version : "unknown"}`,
    );
  let r = n;
  if (typeof r.session_ingress_token !== "string" || r.session_ingress_token.length === 0)
    throw Error("Invalid work secret: missing or empty session_ingress_token");
  if (typeof r.api_base_url !== "string") throw Error("Invalid work secret: missing api_base_url");
  return n;
}
function ytc(e, t) {
  let n = e.includes("localhost") || e.includes("127.0.0.1"),
    r = n ? "ws" : "wss",
    o = n ? "v2" : "v1",
    s = e.replace(/^https?:\/\//, "").replace(/\/+$/, "");
  return `${r}://${s}/${o}/session_ingress/ws/${t}`;
}
function iGo(e, t) {
  if (e === t) return true;
  let n = e.slice(e.lastIndexOf("_") + 1),
    r = t.slice(t.lastIndexOf("_") + 1);
  return n.length >= 4 && n === r;
}
function tQt(e, t) {
  return `${e.replace(/\/+$/, "")}/v1/code/sessions/${t}`;
}
async function Wir(e, t) {
  let n = await po.post(
      `${e}/worker/register`,
      {},
      {
        headers: {
          Authorization: `Bearer ${t}`,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
        },
        timeout: 10000 /* 1e4 */,
      },
    ),
    r = n.data?.worker_epoch,
    o = typeof r === "string" ? Number(r) : r;
  if (typeof o !== "number" || !Number.isFinite(o) || !Number.isSafeInteger(o))
    throw Error(`registerWorker: invalid worker_epoch in response: ${De(n.data)}`);
  return o;
}
