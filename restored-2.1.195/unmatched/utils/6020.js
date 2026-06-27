// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Wc
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js
// class=new  jaccard=0.0397  score=0.1174  fileCov=0.0566
// note: nearest: node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js (0.0397); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Wc = E(() => {
  zb();
  At();
  lj();
  Pho();
  Jt();
  sZo();
  BZ();
  awt();
  ehr = require("fs/promises"), pWc = require("path"), fWc = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);
  H$m = ve(() => dt.object({
    modelDiscoveryEnabled: dt.boolean(),
    coworkTabEnabled: dt.boolean(),
    isClaudeCodeForDesktopEnabled: dt.boolean(),
    isDesktopExtensionEnabled: dt.boolean(),
    isDesktopExtensionSignatureRequired: dt.boolean(),
    isLocalDevMcpEnabled: dt.boolean(),
    disableAutoUpdates: dt.boolean(),
    autoUpdaterEnforcementHours: dt.coerce.number().int().gt(0).lte(72),
    banner: dt.object({
      enabled: dt.boolean().optional(),
      text: dt.string().optional(),
      backgroundColor: dt.string().optional(),
      textColor: dt.string().optional(),
      linkUrl: dt.string().optional()
    }).strict()
  }).partial().strict());
  v$m = ve(() => {
    let e = dt.string().optional(),
      t = dt.discriminatedUnion("provider", [dt.strictObject({
        name: e,
        provider: dt.literal("anthropic"),
        base_url: dt.string().default("https://api.anthropic.com").refine(UZ, {
          message: "base_url targets a metadata endpoint"
        }),
        auth: dt.union([dt.object({
          api_key: dt.string().min(1)
        }).strict(), dt.object({
          oauth_token: dt.string().min(1)
        }).strict(), dt.object({
          federation_rule_id: dt.string().min(1),
          organization_id: dt.string().min(1),
          identity_token_file: dt.string().min(1),
          service_account_id: dt.string().optional(),
          workspace_id: dt.string().optional()
        }).strict()])
      }), dt.strictObject({
        name: e,
        provider: dt.literal("bedrock"),
        region: dt.string().min(1),
        base_url: dt.string().optional().refine(r => r === void 0 || UZ(r), {
          message: "base_url targets a metadata endpoint"
        }),
        auth: dt.strictObject({
          aws_access_key_id: dt.string().optional(),
          aws_secret_access_key: dt.string().optional(),
          aws_session_token: dt.string().optional(),
          aws_bearer_token: dt.string().optional()
        }).default({})
      }), dt.strictObject({
        name: e,
        provider: dt.literal("vertex"),
        region: dt.string().min(1),
        project_id: dt.string().min(1),
        base_url: dt.string().optional().refine(r => r === void 0 || UZ(r), {
          message: "base_url targets a metadata endpoint"
        }),
        auth: dt.strictObject({
          service_account_json: dt.string().optional(),
          access_token: dt.string().optional()
        }).default({})
      }), dt.strictObject({
        name: e,
        provider: dt.literal("foundry"),
        resource: dt.string().regex(/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i, "must be a valid DNS label"),
        base_url: dt.string().optional().refine(r => r === void 0 || UZ(r), {
          message: "base_url targets a metadata endpoint"
        }),
        auth: dt.union([dt.strictObject({
          api_key: dt.string().min(1)
        }), dt.strictObject({
          use_azure_ad: dt.literal(true)
        })])
      })]),
      n = dt.string().refine(r => {
        try {
          return rZo(r), true;
        } catch {
          return false;
        }
      }, {
        message: "must be a valid IP or CIDR"
      });
    return dt.strictObject({
      $schema: dt.string().optional(),
      listen: dt.strictObject({
        host: dt.string().default("0.0.0.0"),
        port: dt.coerce.number().default(8080),
        tls: dt.strictObject({
          cert: dt.string(),
          key: dt.string()
        }).optional(),
        public_url: dt.string().url().transform(r => r.replace(/\/$/, "")).optional(),
        trusted_proxies: dt.array(n).default([])
      }).refine(r => r.public_url !== void 0 || A$m(r.host), {
        path: ["public_url"],
        message: "listen.public_url is required when listen.host is not a " + "loopback address \u2014 set it to the externally-visible origin " + "(e.g. https://claude-gateway.corp.example.com). Without it the IdP redirect_uri and token issuer would be derived from the client-controlled Host header."
      }),
      access_control: dt.strictObject({
        allow_cidrs: dt.array(n).default([]),
        deny_cidrs: dt.array(n).default([])
      }).default({}),
      limits: dt.strictObject({
        max_request_bytes: dt.coerce.number().int().positive().default(33554432),
        max_request_header_bytes: dt.coerce.number().int().positive().optional(),
        max_url_length: dt.coerce.number().int().positive().optional()
      }).default({}),
      rate_limits: dt.strictObject({
        device_authorization: dt.strictObject({
          max: dt.coerce.number().int().positive().default(30),
          window_seconds: dt.coerce.number().int().positive().default(600)
        }).default({}),
        device_verify: dt.strictObject({
          max: dt.coerce.number().int().positive().default(10),
          window_seconds: dt.coerce.number().int().positive().default(600)
        }).default({})
      }).default({}),
      timeouts: dt.strictObject({
        upstream_ttfb_ms: dt.coerce.number().int().positive().default(120000)
      }).default({}),
      upstreams: dt.array(t).min(1).transform(r => r.map(o => ({
        ...o,
        name: o.name ?? o.provider
      }))).superRefine((r, o) => {
        let s = new Set();
        for (let i of r) {
          if (s.has(i.name)) o.addIssue({
            code: dt.ZodIssueCode.custom,
            message: `duplicate upstream name '${i.name}' \u2014 set distinct 'name:' on each`
          });
          s.add(i.name);
        }
      }),
      auto_include_builtin_models: dt.boolean().default(true),
      models: dt.array(dt.strictObject({
        id: dt.string().min(1),
        label: dt.string().optional(),
        description: dt.string().optional(),
        upstream_model: dt.record(dt.string()).refine(r => Object.keys(r).length > 0, {
          message: "upstream_model must set at least one upstream"
        })
      })).default([]),
      oidc: dt.strictObject({
        issuer: dt.string().refine(UZ, {
          message: "oidc.issuer must be an http(s) URL and not target a cloud metadata endpoint"
        }),
        client_id: dt.string().min(1),
        client_secret: dt.string().min(1),
        ca_cert_pem: dt.string().optional(),
        groups_claim: dt.string().min(1).default("groups"),
        email_claim: dt.union([dt.string().min(1), dt.array(dt.string().min(1)).min(1)]).default("email"),
        userinfo_fallback: dt.boolean().default(false),
        use_pkce: dt.boolean().default(true),
        clock_skew_seconds: dt.coerce.number().int().nonnegative().optional(),
        token_endpoint_auth_method: dt.enum(["client_secret_basic", "client_secret_post"]).optional(),
        id_token_signed_response_alg: dt.enum(["RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512", "EdDSA"]).optional(),
        additional_authorized_parties: dt.array(dt.string()).optional(),
        discovery_url: dt.string().url().refine(UZ, {
          message: "oidc.discovery_url must be an http(s) URL and not target a cloud metadata endpoint"
        }).refine(r => {
          try {
            return new URL(r).pathname.includes("/.well-known/");
          } catch {
            return false;
          }
        }, {
          message: "oidc.discovery_url must point at the discovery document itself (path containing /.well-known/) \u2014 openid-client appends /.well-known/openid-configuration to any other path"
        }).optional(),
        scopes: dt.array(dt.string().trim().min(1).refine(r => !/\s/.test(r), {
          message: "must be a single OAuth scope token (no whitespace)"
        })).optional().refine(r => r === void 0 || r.includes("openid"), {
          message: "oidc.scopes must include 'openid' \u2014 without it the IdP will not return an id_token"
        }),
        extra_auth_params: dt.record(dt.string().min(1), dt.string()).default({}).refine(r => !Object.keys(r).some(o => ["redirect_uri", "state", "nonce", "code_challenge", "code_challenge_method", "scope", "response_type", "response_mode", "client_id"].includes(o)), {
          message: "oidc.extra_auth_params must not override protocol parameters the gateway manages (redirect_uri, state, nonce, code_challenge*, scope, response_type, response_mode, client_id) \u2014 use oidc.scopes for scope; the gateway callback only reads query-mode responses"
        }),
        allowed_email_domains: dt.array(dt.string()).transform((r, o) => {
          let s = r.map(i => i.trim().replace(/^@/, "").toLowerCase()).filter(Boolean);
          if (r.length > 0 && s.length === 0) o.addIssue({
            code: dt.ZodIssueCode.custom,
            message: "allowed_email_domains contains only empty entries after normalization"
          });
          return s;
        }).optional(),
        form_action_origins: dt.array(dt.string().refine(UZ, {
          message: "each form_action_origin must be an http(s) URL and not target a cloud metadata endpoint"
        })).transform(r => r.map(o => new URL(o).origin)).refine(r => r.every(o => !/[;,'"\s]/.test(o)), {
          message: "oidc.form_action_origins entries must not contain CSP delimiters (; , quotes or whitespace)"
        }).default([]),
        allowed_groups: dt.array(dt.string()).refine(r => !r.length || r.some(o => o.trim()), {
          message: "oidc.allowed_groups contains only empty entries"
        }).transform(r => r.map(o => o.trim()).filter(Boolean)).optional(),
        google_groups: dt.strictObject({
          service_account_json_path: dt.string().min(1),
          admin_email: dt.string().email()
        }).optional()
      }),
      session: dt.strictObject({
        jwt_secret: dt.union([dt.string().min(32), dt.array(dt.string().min(32)).min(1)]).transform(r => Array.isArray(r) ? r : [r]),
        ttl_hours: dt.coerce.number().default(1)
      }),
      store: dt.strictObject({
        postgres_url: dt.string().regex(/^postgres(ql)?:\/\//, "must be postgres:// or postgresql://"),
        username: dt.string().optional(),
        password: dt.string().optional(),
        max_connections: dt.coerce.number().int().positive().default(5)
      }),
      telemetry: dt.strictObject({
        forward_to: dt.array(dt.strictObject({
          url: dt.string().refine(T$m, {
            message: "forward_to.url must be https:// (http:// allowed for loopback only)"
          }).refine(UZ, {
            message: "forward_to.url must not target a cloud metadata endpoint"
          }),
          headers: dt.record(dt.string()).default({}),
          metrics: dt.boolean().default(true),
          logs: dt.boolean().default(false),
          traces: dt.boolean().default(false)
        })).default([])
      }).default({
        forward_to: []
      }),
      managed: dt.strictObject({
        settings: dt.string().optional(),
        policies: dt.array(dt.object({
          match: dt.strictObject({
            groups: dt.array(dt.string()).optional(),
            email_domain: dt.string().toLowerCase().optional()
          }).default({}),
          cli: dt.record(dt.unknown()).optional(),
          settings: dt.record(dt.unknown()).optional(),
          desktop: H$m().optional()
        }).strict().transform(({
          match: r,
          cli: o,
          settings: s,
          desktop: i
        }) => ({
          match: r,
          cli: o ?? s ?? {},
          desktop: i
        }))).optional()
      }).optional(),
      admin: dt.strictObject({
        read_keys: dt.array(dt.strictObject({
          id: dt.string(),
          key: dt.string().min(32)
        })).default([]),
        write_keys: dt.array(dt.strictObject({
          id: dt.string(),
          key: dt.string().min(32)
        })).default([]),
        admin_groups: dt.array(dt.string()).default([]),
        blocked_message: dt.string().optional(),
        audit_retention_days: dt.coerce.number().int().positive().default(365),
        spend_retention_months: dt.coerce.number().int().positive().default(13),
        identity_retention_days: dt.coerce.number().int().positive().default(90),
        group_limit_mode: dt.enum(["min", "max"]).default("min")
      }).superRefine((r, o) => {
        let s = [...r.read_keys, ...r.write_keys].map(a => a.id),
          i = s.find((a, l) => s.indexOf(a) !== l);
        if (i) o.addIssue({
          code: dt.ZodIssueCode.custom,
          message: `admin key id '${i}' is repeated; key ids must be unique for audit attribution`
        });
      }).optional(),
      enforcement: dt.strictObject({
        fail_closed_on_error: dt.boolean().default(false)
      }).default({
        fail_closed_on_error: false
      })
    }).superRefine((r, o) => {
      if (r.enforcement.fail_closed_on_error && r.admin === void 0) o.addIssue({
        code: dt.ZodIssueCode.custom,
        path: ["enforcement", "fail_closed_on_error"],
        message: "has no effect without an `admin:` block \u2014 spend enforcement only runs when admin is configured"
      });
      let s = new Set(r.upstreams.map(i => i.name));
      for (let [i, a] of r.models.entries()) for (let l of Object.keys(a.upstream_model)) if (!s.has(l)) o.addIssue({
        code: dt.ZodIssueCode.custom,
        path: ["models", i, "upstream_model", l],
        message: `references unknown upstream '${l}'`
      });
    });
  });
  k$m = ["env", "modelOverrides", "skillOverrides"], R$m = ["disabledMcpjsonServers", "deniedMcpServers", "blockedMarketplaces"], L$m = ["deny", "ask"];
});
function M$m(e, t) {
  for (let n = e.indexOf(t); n !== -1; n = e.indexOf(t, n + 1)) {
    let r = n === 0 || !/[a-z0-9]/i.test(e[n - 1]),
      o = n + t.length,
      s = o === e.length || !/[a-z0-9]/i.test(e[o]);
    if (r && s) return true;
  }
  return false;
}
function bWc(e, t) {
  if (!e.startsWith(t)) return false;
  return e.length === t.length || e[t.length] === "-";
}
function SWc(e, t) {
  for (let n of t) {
    if (tU(n)) continue;
    let r = n.indexOf(e);
    if (r === -1) continue;
    let o = r + e.length;
    if (o === n.length || n[o] === "-") return true;
  }
  return false;
}
function aZo(e, t) {
  if (t.length === 0) return false;
  let n = t.map(o => ya(o.trim().toLowerCase())),
    r = ya(e.trim().toLowerCase());
  if (n.includes(r)) {
    if (!tU(r) || !SWc(r, n)) return true;
  }
  for (let o of n) if (tU(o) && !SWc(o, n) && M$m(r, o)) return true;
  for (let o of n) {
    if (tU(o)) continue;
    if (bWc(r, o)) return true;
    if (!o.startsWith("claude-") && bWc(r, `claude-${o}`)) return true;
  }
  return false;
}