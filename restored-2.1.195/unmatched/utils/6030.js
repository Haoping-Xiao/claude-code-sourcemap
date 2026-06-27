// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XWc
// matched 2.1.88 source: src/utils/settings/settings.ts
// class=new  jaccard=0.0246  score=0.1384  fileCov=0.029
// note: nearest: src/utils/settings/settings.ts (0.0246); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XWc = E(() => {
  At();
  BZ();
  _Zo();
  rhr();
  KWc();
});
function JWc(e, t, n, r) {
  let o = t?.payload.settings ?? {},
    s = e.telemetry.forward_to.length > 0 && e.listen.public_url;
  return {
    inferenceProvider: "gateway",
    inferenceGatewayBaseUrl: r,
    inferenceGatewayAuthScheme: "sso",
    ...(s && {
      otlpEndpoint: r,
      otlpProtocol: "http/json",
      otlpResourceAttributes: {
        "enduser.id": n.email ?? n.sub
      }
    }),
    ...vOm(e, t?.availableModels),
    ...wOm(o),
    ...COm(o),
    ...t?.desktop,
    expiresAt: Math.floor(Date.now() / 1000) + e.session.ttl_hours * 3600
  };
}
function vOm(e, t) {
  let n = uZo(e.models, new Set(e.upstreams.map(r => r.provider)), e.auto_include_builtin_models, t).map(r => ({
    name: r.id,
    ...(r.display_name !== r.id && {
      labelOverride: r.display_name
    })
  }));
  return n.length > 0 ? {
    inferenceModels: n
  } : {};
}
function wOm(e) {
  let t = QWc(e, ["permissions", "deny"]);
  if (!t) return {};
  let n = t.filter(r => !r.includes("(") && !r.startsWith("mcp__"));
  return n.length > 0 ? {
    disabledBuiltinTools: n
  } : {};
}
function COm(e) {
  let t = QWc(e, ["sandbox", "network", "allowedDomains"]);
  return t ? {
    coworkEgressAllowedHosts: t
  } : {};
}
function QWc(e, t) {
  let n = e;
  for (let r of t) {
    if (n === null || typeof n !== "object") return;
    n = n[r];
  }
  return Array.isArray(n) && n.every(r => typeof r === "string") ? n : void 0;
}