// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NUa
// matched 2.1.88 source: src/services/api/metricsOptOut.ts
// class=partial  jaccard=0.1773  score=0.3537  fileCov=0.2624
// note: low-confidence suggestion: src/services/api/metricsOptOut.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NUa = E(() => {
  $Ua();
  Ryo();
  OUa();
});
async function xOp() {
  let e = await Os.get("/api/claude_code/organizations/metrics_enabled", {
    auth: "async",
    timeout: 5000,
    bypassEssentialTrafficOnly: !0
  });
  if (!e.ok) throw Error(e.reason === "no-auth" ? `Auth error: ${e.detail}` : `metrics_enabled unavailable: ${e.reason}`);
  return e.data;
}
async function kOp() {
  try {
    let e = await oL(xOp, {
      also403Revoked: !0
    });
    return T(`Metrics opt-out API response: enabled=${e.metrics_logging_enabled}`), xe("api_metrics_opt_out_check"), {
      enabled: e.metrics_logging_enabled,
      hasError: !1
    };
  } catch (e) {
    return T(`Failed to check metrics opt-out status: ${be(e)}`, {
      level: "error"
    }), Le("api_metrics_opt_out_check", "request_failed"), {
      enabled: !1,
      hasError: !0
    };
  }
}
async function BUa() {
  let e = await ROp();
  if (e.hasError) return e;
  let t = Dt().metricsStatusCache;
  if (t !== void 0 && t.enabled === e.enabled && Date.now() - t.timestamp < UUa) return e;
  return gn(r => ({
    ...r,
    metricsStatusCache: {
      enabled: e.enabled,
      timestamp: Date.now()
    }
  })), e;
}
async function FUa() {
  if (bo() && !cI()) return {
    enabled: !1,
    hasError: !1
  };
  let e = Dt().metricsStatusCache;
  if (e) {
    if (Date.now() - e.timestamp > UUa) BUa().catch(ke);
    return {
      enabled: e.enabled,
      hasError: !1
    };
  }
  return BUa();
}
var IOp = 3600000,
  UUa = 86400000,
  ROp;