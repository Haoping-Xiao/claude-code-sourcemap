// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t5c
// matched 2.1.88 source: src/utils/telemetry/instrumentation.ts
// class=modified (alt of src/utils/telemetry/instrumentation.ts)  jaccard=0.01  score=0.0682  fileCov=0.0115
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module t5c] deps: BZ, awt
((HZo = {
  "/v1/metrics": "metrics",
  "/v1/logs": "logs",
  "/v1/traces": "traces",
}),
  (shr = new Map()));
var n5c = `# Claude Code gateway protocol

This is the wire contract the Claude Code CLI uses to talk to this gateway:
sign-in, inference, managed settings, and telemetry. It's served from the
gateway itself so it always matches the version you're running.

> **Stability:** this protocol exists to give you a more stable target than
> proxying raw CLI traffic. Auth is standard OAuth 2.0, inference is the
> Messages API, and headers are the lowest common denominator across
> backends. We keep it backwards compatible within reason to support older
> clients, but not forever \u2014 expect changes, managed settings in particular,
> with notice.

A developer points Claude Code at your gateway's base URL via \`/login\` and
the client does the rest. All paths below are relative to that base URL, and
the client does not follow cross-origin redirects.

## Flow

1. Client fetches \`GET {base}/.well-known/oauth-authorization-server\`.
2. On first contact, client fingerprints your TLS certificate and asks the
   user to trust it.
3. Client runs the RFC 8628 device flow: \`POST device_authorization_endpoint\`
   -> user approves in a browser at \`verification_uri\` -> client polls
   \`token_endpoint\` until it gets a bearer token.
4. Client sends \`Authorization: Bearer <token>\` on every subsequent request.
5. Client uses fixed paths under \`{base}\` for inference (\`/v1/messages\`),
   policy (\`/managed/settings\`), model discovery (\`/v1/models\`), and
   telemetry (\`/v1/{metrics,logs,traces}\`).
6. Before the token expires, client silently calls \`token_endpoint\` with
   \`grant_type=refresh_token\`. If you didn't issue a refresh token, the user
   is sent back through the browser flow instead.

## Discovery \u2014 required

\`GET /.well-known/oauth-authorization-server\` (unauthenticated)

RFC 8414 authorization server metadata. The client reads
\`device_authorization_endpoint\` and \`token_endpoint\` and ignores the rest;
both must be same-origin with \`{base}\`. \`authorization_endpoint\` is
intentionally absent.

    {
      "issuer": "https://gw.corp.example.com",
      "device_authorization_endpoint": "https://gw.corp.example.com/oauth/device_authorization",
      "token_endpoint": "https://gw.corp.example.com/oauth/token",
      "grant_types_supported": ["urn:ietf:params:oauth:grant-type:device_code", "refresh_token"]
    }

## Device authorization \u2014 required

\`POST {device_authorization_endpoint}\` (unauthenticated)

RFC 8628 \xA73.2. The client opens \`verification_uri_complete\` in the user's
browser and polls \`token_endpoint\` every \`interval\` seconds.

    {
      "device_code": "AbK9-s3n4C8H...",
      "user_code": "WDJB-MJHT",
      "verification_uri": "https://gw.corp.example.com/device",
      "verification_uri_complete": "https://gw.corp.example.com/device?user_code=WDJB-MJHT",
      "expires_in": 600,
      "interval": 5
    }

\`device_code\` should be >=256 bits, opaque, single-use. \`user_code\` should
use a base-20 charset (RFC 8628 \xA76.1).

## Verification page \u2014 required

\`GET/POST {verification_uri}\` (browser-facing; the client never calls this)

Accept the user code, authenticate the user against your IdP, and mark the
matching \`device_code\` approved so the next token poll succeeds. Apply a
per-IP rate limit (RFC 8628 \xA75.1) and don't auto-submit a pre-filled code
(\xA75.4).

## Token \u2014 required

\`POST {token_endpoint}\` (unauthenticated,
\`application/x-www-form-urlencoded\`)

**Device grant** (\`grant_type=urn:ietf:params:oauth:grant-type:device_code\`):

| Status | Body | Client reaction |
|---|---|---|
| 200 | \`{"access_token","token_type":"Bearer","expires_in","refresh_token"?}\` | Login complete. \`refresh_token\` is optional; omit it and the client re-runs the device flow on expiry. |
| 400 | \`{"error":"authorization_pending"}\` | Keep polling. |
| 400/429 | \`{"error":"slow_down"}\` | Add 5s to the poll interval. |
| 400 | \`{"error":"access_denied"}\` | Stop. |
| 400 | \`{"error":"expired_token"}\` | Stop. |

**Refresh grant** (\`grant_type=refresh_token\`): return a fresh
\`{"access_token","token_type","expires_in","refresh_token"}\` on 200. Return
\`401 {"error":"invalid_grant"}\` to force re-login \u2014 this is your
deprovisioning hook.

## Messages \u2014 required

\`POST /v1/messages\` and \`POST /v1/messages/count_tokens\` (bearer)

The Anthropic Messages API (https://docs.claude.com/en/api/messages),
unchanged. Proxy to your upstream and stream the response back. Enforce your
model allowlist here, returning \`400 invalid_request_error\` for a denied
model. Don't buffer SSE on the \`stream: true\` path. The client always sets
\`Content-Length\`, so you may reject chunked-without-CL (\`411\`) and cap body
size (\`413\`). The client doesn't assume server-side tools are available. The
client also sends \`x-app\` and \`x-stainless-*\` headers \u2014 pass them through or
drop them, but don't reject the request because of them.

## Managed settings \u2014 optional

\`GET /managed/settings\` (bearer)

The authenticated user's Claude Code \`managed-settings.json\`; see
https://code.claude.com/docs/en/settings for the key reference. The client
polls about once an hour; support \`ETag\`/\`If-None-Match\` -> \`304\` to keep
that cheap. Return \`404\` for "no managed policy"; \`200 {}\` means "this user
has an empty policy" \u2014 they're not the same. **This is the endpoint most
likely to change.**

## Models \u2014 optional

\`GET /v1/models\` (bearer)

Anthropic models-list shape: \`{"data":[{"id","display_name"},...]}\`. Use
Anthropic-style IDs (\`claude-{family}-{major}-{minor}\`) \u2014 the client's
model-family logic keys on that shape. The client only calls this when
\`CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY\` is set on the client, which you
can push via the \`env\` block in \`/managed/settings\`. Return \`404\` to fall
back to the client's built-in list.

## Telemetry \u2014 optional

\`POST /v1/metrics\`, \`/v1/logs\`, \`/v1/traces\` (bearer)

OTLP/HTTP (protobuf or JSON). When connected to a gateway the client sends
telemetry here and ignores \`OTEL_EXPORTER_OTLP_*\` env vars. Return \`200\`
whether you forward or discard \u2014 \`404\` makes the client's exporter log an
error on every flush.

## Errors

OAuth endpoints use \`{"error":"...","error_description":"..."}\`
(RFC 6749/8628). Bearer-authenticated endpoints use the Anthropic envelope so
the SDK surfaces the message to the user:

    {"type":"error","error":{"type":"authentication_error","message":"..."}}

| HTTP | error.type | Use for |
|---|---|---|
| 400 | \`invalid_request_error\` | Denied model, malformed body, policy violation |
| 401 | \`authentication_error\` | Missing/expired/invalid bearer; client prompts re-login |
| 403 | \`permission_error\` | Authenticated but not allowed |
| 413 | \`request_too_large\` | Body over your cap |
| 429 | \`rate_limit_error\` | Throttling; include \`Retry-After\` |
| 501 | \`not_supported\` | Endpoint not available on this backend |
| 529 | \`overloaded_error\` | Upstream at capacity; client backs off and retries |
| 5xx | \`api_error\` | Anything else |

## Bearer token

Your \`access_token\` is opaque to the client \u2014 it stores it, sends it, and
refreshes it before \`expires_in\`, but never inspects the payload. Encode the
user's identity and groups in the token (or in server-side state keyed by it)
so you can apply per-user RBAC at \`/v1/messages\` and per-group policy at
\`/managed/settings\`. The same token must work across every
bearer-authenticated endpoint.

## TLS

\`https://\` is required; \`http://\` is accepted only for loopback during
development. The client pins the SHA-256 fingerprint of your TLS leaf
certificate per-hostname after the user confirms it on first connect, and
re-prompts on mismatch \u2014 rotating your certificate costs every user one
confirmation prompt.

## Client guarantees

- OAuth endpoint paths come from your discovery document; the client never
  hard-codes \`/oauth/token\`.
- Fixed-path endpoints are resolved against \`{base}\`, never a redirect.
- Every request body carries \`Content-Length\`.
- The OTLP exporter is locked to \`{base}/v1/{signal}\` regardless of the
  user's environment.
- \`404\` from \`/v1/models\` or \`/managed/settings\` is a clean "not
  implemented", with no retry storm.

## Proxying to Bedrock, Vertex, or Foundry

Proxying to \`api.anthropic.com\` is pass-through. Proxying to a cloud
provider's Claude endpoint needs translation:

- **Model IDs.** The client sends Anthropic-style IDs like
  \`claude-sonnet-4-5\`; translate to the upstream's form (Bedrock model ID or
  inference-profile ARN; Vertex \`@\`-versioned ID), or advertise
  upstream-native IDs from \`/v1/models\`.
- **\`anthropic-beta\`.** Bedrock rejects some betas in the *header*; move them
  into the request body as \`"anthropic_beta": [...]\`. Vertex and Foundry
  accept the header.
- **Streaming.** Bedrock's native stream is AWS binary event-stream, not SSE;
  decode and re-emit Anthropic-shaped \`text/event-stream\`. The provider SDKs
  handle this.
- **\`count_tokens\`.** Bedrock has no count-tokens API. Return
  \`501 not_supported\`; the client falls back to a Haiku \`max_tokens:1\` probe.
- **Headers.** Forward \`content-type\`, \`accept\`, \`accept-encoding\`,
  \`anthropic-version\`, \`anthropic-beta\`, \`user-agent\`, and \`x-stainless-*\`;
  strip the client's \`Authorization\` and apply the upstream's own
  credentials. On the response, strip hop-by-hop headers
  (\`content-encoding\`, \`content-length\`, \`transfer-encoding\`, \`connection\`).
- **Errors.** Upstream error messages can carry your cloud account
  IDs/ARNs/project IDs \u2014 log them for the operator, return a generic
  message, but keep \`error.type\` so the client's retry logic still works.

## References

RFC 6749 (OAuth 2.0), RFC 8414 (AS metadata), RFC 8628 (device grant),
Anthropic Messages API, Claude Code settings reference, OTLP spec.
`;
async function r5c(e) {
  let t = await e.reserve();
  try {
    (gu(
      "info",
      "waiting for migration lock (another replica may be migrating; check pg_locks for key 6775156 if this persists)",
    ),
      await t`SELECT pg_advisory_lock(6775156)`);
    try {
      await t`CREATE TABLE IF NOT EXISTS _migrations (
        version    INTEGER PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`;
      let n = await t`SELECT coalesce(max(version), 0) AS v FROM _migrations`,
        r = Number(n[0].v);
      while (true) {
        r += 1;
        let o = false;
        if (
          (await t.begin(async (s) => {
            switch (r) {
              case 1:
                (await s`CREATE TABLE kv (
                key        TEXT PRIMARY KEY,
                value      TEXT NOT NULL,
                expires_at TIMESTAMPTZ
              )`,
                  await s`CREATE INDEX kv_expires_at ON kv (expires_at)
                       WHERE expires_at IS NOT NULL`);
                break;
              case 2:
                (await s`CREATE TABLE spend_limits (
                id          TEXT PRIMARY KEY,
                scope_type  TEXT NOT NULL
                            CHECK (scope_type IN ('user', 'rbac_group', 'organization')),
                scope_id    TEXT NOT NULL DEFAULT '',
                amount      BIGINT,
                period      TEXT NOT NULL DEFAULT 'monthly'
                            CHECK (period IN ('daily', 'weekly', 'monthly')),
                currency    TEXT NOT NULL DEFAULT 'USD'
                            CHECK (currency = 'USD'),
                created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
                updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
                created_by  TEXT
              )`,
                  await s`CREATE UNIQUE INDEX spend_limits_scope
                       ON spend_limits (scope_type, scope_id, period)`,
                  await s`
                CREATE OR REPLACE FUNCTION caps_by_period(p_principal text, p_groups text[], p_mode text)
                RETURNS TABLE(period text, amount bigint, scope_type text, scope_id text, id text)
                LANGUAGE sql STABLE AS $$
                  SELECT DISTINCT ON (period) period, amount, scope_type, scope_id, id
                  FROM spend_limits
                  WHERE (scope_type = 'user' AND scope_id = p_principal)
                     OR (scope_type = 'rbac_group' AND scope_id = ANY(p_groups))
                     OR scope_type = 'organization'
                  -- The sort order IS the precedence (DISTINCT ON keeps the
                  -- first row). User beats group beats org. Within that, the
                  -- boolean-equals on the next line isn't a typo: it sorts a
                  -- real cap ahead of "unlimited" when mode is 'min', and the
                  -- other way for 'max' (or anything else). Then the smallest
                  -- or largest group cap wins.
                  ORDER BY period,
                    CASE scope_type WHEN 'user' THEN 0 WHEN 'rbac_group' THEN 1 ELSE 2 END,
                    (amount IS NULL) = (p_mode = 'min'),
                    CASE WHEN scope_type = 'rbac_group'
                         THEN CASE WHEN p_mode = 'min' THEN amount ELSE -amount END END,
                    id
                $$`);
                break;
              case 3:
                (await s`CREATE TABLE admin_audit (
                id      BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                at      TIMESTAMPTZ NOT NULL DEFAULT now(),
                actor   TEXT NOT NULL,
                action  TEXT NOT NULL,
                target  TEXT NOT NULL,
                before  JSONB,
                after   JSONB,
                reason  TEXT
              )`,
                  await s`CREATE INDEX admin_audit_at ON admin_audit (at)`);
                break;
              case 4:
                (await s`CREATE TABLE spend (
                principal  TEXT NOT NULL,
                period     TEXT NOT NULL,  -- bucket key: YYYY-MM | YYYY-MM-DD | YYYY-Www
                cents      DOUBLE PRECISION NOT NULL DEFAULT 0,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
                PRIMARY KEY (principal, period)
              )`,
                  await s`CREATE INDEX spend_updated_at ON spend (updated_at)`);
                break;
              case 5:
                (await s`CREATE TABLE principal_emails (
                principal  TEXT PRIMARY KEY,
                email      TEXT,
                name       TEXT,
                groups     JSONB,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
              )`,
                  await s`CREATE INDEX principal_emails_updated_at ON principal_emails (updated_at)`);
                break;
              case 6:
                await s`CREATE INDEX spend_period_cents
                       ON spend (period, cents DESC, principal)`;
                break;
              default:
                return;
            }
            (await s`INSERT INTO _migrations (version) VALUES (${r})`, (o = true));
          }),
          !o)
        )
          break;
        gu("info", `migration ${r} applied`);
      }
    } finally {
      await t`SELECT pg_advisory_unlock(6775156)`;
    }
  } finally {
    t.release();
  }
}
