// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lcl
// matched 2.1.88 source: src/bridge/codeSessionApi.ts
// class=partial  jaccard=0.069  score=0.1774  fileCov=0.1014
// note: low-confidence suggestion: src/bridge/codeSessionApi.ts; dir inferred from dep-graph -> commands; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Lcl] deps: ql, Ye, es
J6 = R(se(), 1);
function Z8t() {
  let e = Oe.CLAUDE_CODE_SESSION_ID;
  if (e && (e.startsWith("cse_") || e.startsWith("session_"))) return e;
  return;
}
function Dcl() {
  if (fr() !== "firstParty") return false;
  if (!Oe.CLAUDE_CODE_WEBFETCH_USE_CCR_PROXY) return false;
  return !!Z8t();
}
function haf() {
  return `${(Oe.ANTHROPIC_BASE_URL || "https://api.anthropic.com").replace(/\/+$/, "")}/v1/code/sessions/${encodeURIComponent(Z8t())}/worker/web-fetch`;
}
async function Pcl(e, t) {
  let n = cke(),
    r;
  try {
    r = await po.post(haf(), {
      url: e
    }, {
      signal: t,
      timeout: 40000,
      maxContentLength: 12582912,
      headers: {
        ...n,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01"
      },
      validateStatus: () => true
    });
  } catch (s) {
    if (dM(s)) throw new ru();
    let i = s instanceof Error && "code" in s ? String(s.code) : void 0;
    return T(`ccr webfetch-proxy transport error: ${i}`, {
      level: "warn"
    }), {
      ok: false,
      source: "proxy",
      statusCode: 502,
      errorType: "PROXY_TRANSPORT",
      errorMessage: `Request to the WebFetch proxy failed (${i ?? "transport error"}).`
    };
  }
  if (r.status !== 200) {
    let s = typeof r.data?.message === "string" ? r.data.message.slice(0, 200) : void 0;
    return T(`ccr webfetch-proxy returned HTTP ${r.status}${s ? `: ${s}` : ""}`, {
      level: "warn"
    }), {
      ok: false,
      source: "proxy",
      statusCode: r.status,
      errorType: "PROXY_REJECTED",
      errorMessage: `The WebFetch proxy rejected the request (HTTP ${r.status}${s ? `: ${s}` : ""}).`
    };
  }
  let o = gaf().safeParse(r.data);
  if (!o.success) return T(`ccr webfetch-proxy returned unparseable body: ${o.error.message}`, {
    level: "warn"
  }), {
    ok: false,
    source: "proxy",
    statusCode: 502,
    errorType: "PROXY_BAD_RESPONSE",
    errorMessage: "The WebFetch proxy returned a malformed response."
  };
  if (o.data.error) return T(`ccr webfetch-proxy fetch error: ${o.data.error.error_type}`, {
    level: "warn"
  }), {
    ok: false,
    source: "target",
    statusCode: 502,
    errorType: o.data.error.error_type,
    errorMessage: o.data.error.error_message
  };
  return {
    ok: true,
    content: o.data.text,
    contentType: o.data.content_type || "text/plain",
    destinationUrl: o.data.destination_url || void 0
  };
}
var gaf;