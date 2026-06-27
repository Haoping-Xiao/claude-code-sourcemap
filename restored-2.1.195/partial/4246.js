// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bko
// matched 2.1.88 source: src/components/permissions/WebFetchPermissionRequest/WebFetchPermissionRequest.tsx
// class=partial  jaccard=0.1525  score=0.396  fileCov=0.1987
// note: low-confidence suggestion: src/components/permissions/WebFetchPermissionRequest/WebFetchPermissionRequest.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bko = E(() => {
  Rc();
  dn();
  Rx();
  c_();
  l$e();
});
function EYn(e) {
  return bfl.STATUS_CODES[e] ?? "Unknown Status";
}
function Yuf(e) {
  let t = EYn(e.statusCode),
    n = e.retryAfter ? `
Retry-After: ${e.retryAfter}` : "";
  return `The server returned HTTP ${e.statusCode} ${t}.${n}

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. \`gh\` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.`;
}
function _fl(e) {
  try {
    let t = FF.inputSchema.safeParse(e);
    if (!t.success) return `input:${e.toString()}`;
    let {
      url: n
    } = t.data;
    return `domain:${new URL(n).hostname}`;
  } catch {
    return `input:${e.toString()}`;
  }
}
function Sko(e) {
  return [{
    type: "addRules",
    destination: "localSettings",
    rules: [{
      toolName: Sb,
      ruleContent: e
    }],
    behavior: "allow"
  }];
}
async function Quf(e, t) {
  {
    let [{
      ARTIFACT_TOOL_NAME: n,
      parseArtifactUrl: r
    }, {
      isArtifactToolEnabled: o
    }] = await Promise.all([Promise.resolve().then(() => (RX(), Q2t)), Promise.resolve().then(() => (Nue(), KOn))]);
    if (_l(t.options.tools ?? [], n) && o()) return r(e);
  }
  return null;
}
var bfl, Kuf, Xuf, Juf, FF;