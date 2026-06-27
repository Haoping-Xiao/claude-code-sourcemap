// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cde
// matched 2.1.88 source: src/bridge/debugUtils.ts
// class=modified (alt of src/bridge/debugUtils.ts)  jaccard=0.1228  score=0.2007  fileCov=0.2405
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Cde] deps: kt, je, At, Jt
((IDp = ["session_ingress_token", "environment_secret", "access_token", "secret", "token"]),
  (xDp = new RegExp(`"(${IDp.join("|")})"\\s*:\\s*"([^"]*)"`, "g")));
function describeAxiosError(e) {
  if (!e || typeof e !== "object") return;
  let t = "error" in e ? e.error : e;
  if (t && typeof t === "object" && "reason" in t && typeof t.reason === "string") return t.reason;
  return;
}
async function lWt(e, t, n, r, o, s, i) {
  let a = e === "subscribe" ? "bridge_pr_subscribe" : "bridge_pr_unsubscribe",
    l = s();
  if (!l)
    return (
      T(`[bridge] No access token for ${e}-pr`),
      Le(a, "no_token"),
      {
        ok: false,
        reason: "no_token",
      }
    );
  let c = `${o}/v1/code/github/${e}-pr`,
    u = {
      session_id: oP(t),
      repo: n,
      pr_number: r,
    },
    d;
  try {
    d = await po.post(c, u, {
      headers: MDp(l, {
        trustedDeviceToken: await i?.(),
      }),
      timeout: 10000 /* 1e4 */,
      validateStatus: (f) => f < 500,
    });
  } catch (f) {
    return (
      T(`[bridge] ${e}-pr request failed: ${be(f)}`),
      Le(a, "request_failed"),
      {
        ok: false,
        reason: "request_failed",
      }
    );
  }
  if (!((d.status >= 200 && d.status < 300) || d.status === 409)) {
    let f = describeAxiosError(d.data),
      m = _J(d.data);
    return (
      T(`[bridge] ${e}-pr failed ${d.status}${f ? ` [${f}]` : ""}${m ? `: ${m}` : ""}`),
      Le(a, f === "github_app_not_installed" ? f : "http_error"),
      {
        ok: false,
        reason: f,
        detail: m,
      }
    );
  }
  return (
    T(`[bridge] ${e}-pr ${n}#${r} ok`),
    xe(a),
    {
      ok: true,
    }
  );
}
function MDp(e, { orgUUID: t, trustedDeviceToken: n } = {}) {
  let r = {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": LDp,
    "anthropic-beta": PDp,
    "anthropic-client-platform": _x(),
    "User-Agent": dy(),
  };
  if (t !== void 0) r["x-organization-uuid"] = t;
  if (n !== void 0) r["X-Trusted-Device-Token"] = n;
  return r;
}
var LDp = "2023-06-01",
  aWt = "https://github.com/apps/claude/installations/new",
  PDp = "ccr-byoc-2025-07-29";
