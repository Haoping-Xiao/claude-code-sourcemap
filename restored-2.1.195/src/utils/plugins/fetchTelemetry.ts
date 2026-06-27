// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oWe
// matched 2.1.88 source: src/utils/plugins/fetchTelemetry.ts
// class=modified  jaccard=0.3026  score=0.8175  fileCov=0.3245
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oWe]
Alt = {
  source: "github",
  repo: "anthropics/claude-plugins-official",
};
function KKd(e) {
  let t,
    n = /^[^@/]+@([^:/]+):/.exec(e);
  if (n) t = n[1];
  else
    try {
      t = new URL(e).hostname;
    } catch {
      return "unknown";
    }
  let r = t.toLowerCase();
  return zKd.has(r) ? r : "other";
}
function YKd(e) {
  return e.includes(`anthropics/${xI}`);
}
function YD(e, t, n, r, o) {
  G("tengu_plugin_remote_fetch", {
    source: $e(e),
    host: t ? KKd(t) : "unknown",
    is_official: e === "plugin_catalog" || (t ? YKd(t) : false),
    outcome: $e(n),
    duration_ms: Math.round(r),
    ...(o && {
      error_kind: o,
    }),
  });
}
function k8(e) {
  let t = String(e?.message ?? e);
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(t))
    return "dns_or_refused";
  if (/ETIMEDOUT|timed out|timeout/i.test(t)) return "timeout";
  if (/ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(t))
    return "conn_reset";
  if (/403|401|authentication|permission denied/i.test(t)) return "auth";
  if (/404|not found|repository not found/i.test(t)) return "not_found";
  if (/certificate|SSL|TLS|unable to get local issuer/i.test(t)) return "tls";
  if (/Invalid response format|Invalid marketplace schema/i.test(t)) return "invalid_schema";
  return "other";
}
var zKd;
