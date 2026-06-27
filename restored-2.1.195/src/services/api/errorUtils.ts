// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z1
// matched 2.1.88 source: src/services/api/errorUtils.ts
// class=modified  jaccard=0.3625  score=0.467  fileCov=0.6185
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module z1] deps: PR, Ree, ft, TM, og, oo, Vw, e1, er, vn, NX, Ao, qd, kt, ZE, Yxe, Ijt, xjt
((rlp = [
  {
    rateLimitType: "five_hour",
    claimAbbrev: "5h",
    windowSeconds: 18000,
    thresholds: [
      {
        utilization: 0.9,
        timePct: 0.72,
      },
    ],
  },
  {
    rateLimitType: "seven_day",
    claimAbbrev: "7d",
    windowSeconds: 604800,
    thresholds: [
      {
        utilization: 0.75,
        timePct: 0.6,
      },
      {
        utilization: 0.5,
        timePct: 0.35,
      },
      {
        utilization: 0.25,
        timePct: 0.15,
      },
    ],
  },
]),
  (olp = {
    "5h": "five_hour",
    "7d": "seven_day",
    "7d_oi": "seven_day_overage_included",
    overage: "overage",
  }),
  (slp = {
    five_hour: "session limit",
    seven_day: "weekly limit",
    seven_day_opus: "Opus limit",
    seven_day_sonnet: "Sonnet limit",
    seven_day_overage_included: "Fable 5 limit",
    overage: "usage credit limit",
  }));
((ck = {
  status: "allowed",
  unifiedRateLimitFallbackAvailable: false,
  isUsingOverage: false,
}),
  (p5e = {}));
((cLe = new Set()), (k1n = new Set()));
function Dio(e) {
  return que.has(e) ? kh(e) : We("other");
}
function extractConnectionErrorDetails(e) {
  if (!e || typeof e !== "object") return null;
  let t = e,
    n = 5,
    r = 0;
  while (t && r < n) {
    if (t instanceof Error) {
      if ("code" in t && typeof t.code === "string") {
        let o = t.code,
          s = dlp.has(o);
        return {
          code: o,
          message: t.message,
          isSSLError: s,
        };
      }
      if (t.message.startsWith(plp))
        return {
          code: "ConnectionClosed",
          message: t.message,
          isSSLError: false,
        };
    }
    if (t instanceof Error && "cause" in t && t.cause !== t) ((t = t.cause), r++);
    else break;
  }
  return null;
}
function flp(e) {
  let t = extractConnectionErrorDetails(e);
  return t !== null && out.has(t.code);
}
function getSSLErrorHint(e) {
  let t = extractConnectionErrorDetails(e);
  if (!t?.isSSLError) return null;
  return `SSL certificate error (${t.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run /doctor for details.`;
}
function sanitizeMessageHTML(e) {
  if (e.includes("<!DOCTYPE html") || e.includes("<html")) {
    let t = e.match(/<title>([^<]+)<\/title>/);
    if (t && t[1]) return t[1].trim();
    return "";
  }
  return e;
}
function mlp(e) {
  let t = e.message;
  if (!t) return "";
  return sanitizeMessageHTML(t);
}
function glp(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "error" in e &&
    typeof e.error === "object" &&
    e.error !== null
  );
}
function Maa(e) {
  if (!glp(e)) return null;
  let n = e.error,
    r = n?.error?.message;
  if (typeof r === "string" && r.length > 0) {
    let s = sanitizeMessageHTML(r);
    if (s.length > 0) return s;
  }
  let o = n?.message;
  if (typeof o === "string" && o.length > 0) {
    let s = sanitizeMessageHTML(o);
    if (s.length > 0) return s;
  }
  return null;
}
function formatAPIError(e) {
  let t = extractConnectionErrorDetails(e);
  if (t) {
    let { code: r, isSSLError: o } = t;
    if (r === "ETIMEDOUT")
      return "Request timed out. Check your internet connection and proxy settings";
    if (o)
      switch (r) {
        case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
        case "UNABLE_TO_GET_ISSUER_CERT":
        case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
          return "Unable to connect to API: SSL certificate verification failed. Check your proxy or corporate SSL certificates";
        case "CERT_HAS_EXPIRED":
          return "Unable to connect to API: SSL certificate has expired";
        case "CERT_REVOKED":
          return "Unable to connect to API: SSL certificate has been revoked";
        case "DEPTH_ZERO_SELF_SIGNED_CERT":
        case "SELF_SIGNED_CERT_IN_CHAIN":
          return "Unable to connect to API: Self-signed certificate detected. Check your proxy or corporate SSL certificates";
        case "ERR_TLS_CERT_ALTNAME_INVALID":
        case "HOSTNAME_MISMATCH":
          return "Unable to connect to API: SSL certificate hostname mismatch";
        case "CERT_NOT_YET_VALID":
          return "Unable to connect to API: SSL certificate is not yet valid";
        default:
          return `Unable to connect to API: SSL error (${r})`;
      }
  }
  if (e.message === "Connection error.") {
    if (t?.code) return `Unable to connect to API (${t.code})`;
    return "Unable to connect to API. Check your internet connection";
  }
  if (!e.message) return Maa(e) ?? `API error (status ${e.status ?? "unknown"})`;
  if (e.message.includes('{"')) {
    let r = Maa(e);
    if (r) return e.status ? `${e.status} ${r}` : r;
  }
  let n = mlp(e);
  return n !== e.message && n.length > 0 ? n : e.message;
}
function Pio(e) {
  let t = (s) => e.headers?.get?.(s) ?? void 0,
    n = t("anthropic-ratelimit-unified-representative-claim"),
    r = t("anthropic-ratelimit-unified-reset"),
    o = t("anthropic-ratelimit-unified-overage-status");
  return {
    message: e.message,
    status: e.status,
    requestId: e.requestID ?? void 0,
    formatted: formatAPIError(e),
    connection: extractConnectionErrorDetails(e),
    isNetworkDown: flp(e),
    rateLimits:
      n || o
        ? {
            ...(n && {
              rateLimitType: n,
            }),
            ...(r && {
              resetsAt: Number(r),
            }),
          }
        : null,
  };
}
function $aa({ connDetails: e, isStaleConnection: t, isContextHintSse: n, streamIdleAborted: r }) {
  if (e?.code === "StreamSuspended") return "stream_suspended";
  if (t) return "stale_connection";
  if (n) return "context_hint_sse";
  if (r) return "watchdog";
  return "other";
}
var dlp,
  out,
  que,
  plp = "The socket connection was closed unexpectedly";
