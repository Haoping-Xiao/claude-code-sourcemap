// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VGc
// matched 2.1.88 source: src/utils/telemetry/perfettoTracing.ts
// class=new  jaccard=0.0146  score=0.0575  fileCov=0.0191
// note: nearest: src/utils/telemetry/perfettoTracing.ts (0.0146); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VGc = E(() => {
  kgr();
  qQo();
  Ggr = require("crypto");
});
function m$m() {
  let e = Oe.CLAUDE_GATEWAY_LOG_LEVEL?.toLowerCase();
  return e && e in Vgr ? Vgr[e] : Vgr.info;
}
function gu(e, t) {
  if (Vgr[e] < m$m()) return;
  process.stderr.write(`[gateway] ${new Date().toISOString()} ${e} ${t}
`);
}
function oge(e, t) {
  process.stderr.write(`${JSON.stringify({
    ts: new Date().toISOString(),
    evt: e,
    ...t
  })}
`);
}
function zGc(e, t) {
  process.stderr.write(`
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
` + `\u2502  Claude Code Gateway                \u2502
` + `\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`);
  let n = t.tls ? "https" : "http",
    r = ["metrics", "logs", "traces"].filter(i => e.telemetry.forward_to.some(a => a[i]));
  if (gu("info", `claude gateway listening on ${n}://${t.hostname}:${t.port}`), e.listen.public_url) gu("info", `public_url ${e.listen.public_url}`);
  gu("info", `oidc issuer ${e.oidc.issuer}`);
  let o = e.oidc.allowed_email_domains ?? [];
  gu("info", `email domains ${o.length > 0 ? o.join(",") : "(unrestricted)"}`);
  let s = e.oidc.allowed_groups ?? [];
  gu("info", `allowed groups ${s.length > 0 ? s.join(",") : "(unrestricted)"}`), gu("info", `upstreams ${e.upstreams.length}: ${e.upstreams.map(i => `${i.name}(${i.provider})`).join(", ")}`), gu("info", e.telemetry.forward_to.length === 0 ? "telemetry relay: not configured" : `telemetry relay: ${e.telemetry.forward_to.length} destination(s), signals enabled: ${r.join(",") || "none"}`), gu("info", `managed settings: ${t.managed ? "configured" : "not configured"}`);
}
var Vgr;