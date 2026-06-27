// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dZo
// matched 2.1.88 source: src/commands/bridge-kick.ts
// class=modified (alt of src/commands/bridge-kick.ts)  jaccard=0.0402  score=0.0789  fileCov=0.0757
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dZo] deps: PR, TM, Rc, At, QO, Ao, Mh, Jt, BZ, awt, EWc
$$m = new Set([
  "content-type",
  "accept",
  "accept-encoding",
  "anthropic-beta",
  "anthropic-version",
  "user-agent",
]);
((N$m = [
  "content-encoding",
  "content-length",
  "transfer-encoding",
  "connection",
  "cf-ray",
  "via",
  "request-id",
]),
  (B$m = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  }),
  (U$m = ["/v1/messages", "/v1/messages/count_tokens"]));
((z$m = {
  400: "invalid_request_error",
  401: "authentication_error",
  403: "permission_error",
  404: "not_found_error",
  429: "rate_limit_error",
  529: "overloaded_error",
}),
  (CWc = {
    400: "upstream rejected the request",
    401: "upstream authentication failed \u2014 check the gateway operator",
    403: "upstream denied the request \u2014 check the gateway operator",
    404: "upstream resource not found",
    429: "upstream rate limit exceeded",
    500: "upstream error",
    529: "upstream overloaded",
  }));
K$m = ["haiku45", "sonnet45", "sonnet46", "opus41", "opus46", "opus47", "opus48", "fable5"];
function bw(e, t, n) {
  return Response.json(
    {
      type: "error",
      error: {
        type: Y$m[e],
        message: t,
      },
      request_id: n,
    },
    {
      status: e,
    },
  );
}
function irn(e, t) {
  let n = Number(e.get("limit") ?? t);
  if (!Number.isInteger(n) || n < 1 || n > 1000) return null;
  return n;
}
var lXe, Y$m;
