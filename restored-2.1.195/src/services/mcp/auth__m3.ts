// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n9l
// matched 2.1.88 source: src/services/mcp/auth.ts
// class=modified (alt of src/services/mcp/auth.ts)  jaccard=0.0093  score=0.1071  fileCov=0.0101
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module n9l] deps: fn
t9l = {
  type: "local-jsx",
  name: "setup-vertex",
  description: "Reconfigure Google Vertex AI authentication, project, region, or model pins",
  get isHidden() {
    return !ut(process.env.CLAUDE_CODE_USE_VERTEX);
  },
  load: () => Promise.resolve().then(() => (e9l(), ZVl)),
};
function U2o(e, t) {
  return {
    action: "blocked",
    blocked: {
      message: e,
      action_url: null,
      reason: t,
    },
  };
}
async function o9l() {
  let e = process.env.CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE;
  if (e) {
    let t = r9l().safeParse(Ft(e));
    return t.success ? t.data : null;
  }
  try {
    let t = await Os.get("/v1/ultrareview/preflight", {
      auth: "teleport-org",
      timeout: 5000,
    });
    if (!t.ok)
      switch (t.reason) {
        case "essential-traffic-only":
          return U2o(
            "Ultrareview runs in Claude Code on the web and is unavailable when essential-traffic-only mode is active.",
            "zdr",
          );
        case "data-residency":
          return U2o(
            "Ultrareview runs in Claude Code on the web and is unavailable on third-party providers.",
            "data_residency",
          );
        case "no-auth":
          return U2o(
            "Ultrareview requires a Claude.ai account. Run /login to authenticate.",
            "no_oauth_token",
          );
      }
    let n = r9l().safeParse(t.data);
    if (!n.success)
      return (
        T(`fetchUltrareviewPreflight schema mismatch: ${n.error.message}`),
        It("api_ultrareview_preflight", "schema_mismatch"),
        null
      );
    return (xe("api_ultrareview_preflight"), n.data);
  } catch (t) {
    return (
      T(`fetchUltrareviewPreflight failed: ${t}`),
      It("api_ultrareview_preflight", "request_failed"),
      null
    );
  }
}
var r9l;
