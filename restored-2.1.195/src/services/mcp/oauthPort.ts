// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I8r
// matched 2.1.88 source: src/services/mcp/oauthPort.ts
// class=modified  jaccard=0.3982  score=0.6528  fileCov=0.5052
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I8r]
ERd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
function buildRedirectUri(e = k8r) {
  return `http://localhost:${e}/callback`;
}
function TRd() {
  let e = parseInt(process.env.MCP_OAUTH_CALLBACK_PORT || "", 10);
  return e > 0 ? e : void 0;
}
async function findAvailablePort(e) {
  let t = TRd();
  if (t) return t;
  if (e && (await x8r(e))) return e;
  let { min: n, max: r } = HRd,
    o = r - n + 1,
    s = Math.min(o, 100);
  for (let i = 0; i < s; i++) {
    let a = n + Math.floor(Math.random() * o);
    if (await x8r(a)) return a;
  }
  if (await x8r(k8r)) return k8r;
  throw Error("No available ports for OAuth redirect");
}
async function x8r(e) {
  try {
    return (
      await new Promise((t, n) => {
        let r = Lwi.createServer();
        (r.once("error", n),
          r.listen(e, "127.0.0.1", () => {
            r.close(() => t());
          }));
      }),
      true
    );
  } catch {
    return false;
  }
}
var Lwi,
  HRd,
  k8r = 3118;
