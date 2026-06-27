// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g$
// matched 2.1.88 source: src/services/mcp/xaa.ts
// class=modified  jaccard=0.4887  score=0.5974  fileCov=0.7287
// note: deminified; 10 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module g$] deps: services/analytics/index.ts, utils/fsOperations.ts, main.tsx, utils/permissions/permissionSetup.ts, utils/sequential.ts, utils/settings/changeDetector.ts, utils/settings/settings.ts, utils/fsOperations.ts, services/mcp/utils.ts, Ox, utils/plugins/schemas.ts, services/analytics/metadata.ts
((RCa = require("crypto")),
  (LCa = require("path")),
  (CTp = new Set(["http", "sse", "claudeai-proxy"])),
  (Hdo = new Set([
    "ECONNREFUSED",
    "ETIMEDOUT",
    "ECONNRESET",
    "ENOTFOUND",
    "EAI_AGAIN",
    "ConnectionRefused",
    "ConnectionClosed",
    "FailedToOpenSocket",
  ])),
  (Tdo = new Set(["500", "502", "503", "504", ...Hdo, "23"])));
function NCa(e) {
  return (t, n) => {
    let r = AbortSignal.timeout(DTp),
      o = e ? AbortSignal.any([r, e]) : r;
    return fetch(t, {
      ...n,
      ...kg({
        url: String(t),
      }),
      signal: o,
    });
  };
}
function NUn(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}
function redactTokens(raw) {
  return (typeof raw === "string" ? raw : De(raw)).replace($Tp, (n, r) => `"${r}":"[REDACTED]"`);
}
async function discoverProtectedResource(serverUrl, opts) {
  let n;
  try {
    n = await lIn(serverUrl, void 0, opts?.fetchFn ?? BUn);
  } catch (r) {
    throw Error(`XAA: PRM discovery failed: ${r instanceof Error ? r.message : String(r)}`);
  }
  if (!n.resource || !n.authorization_servers?.[0])
    throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (NUn(n.resource) !== NUn(serverUrl))
    throw Error(
      `XAA: PRM discovery failed: PRM resource mismatch: expected ${serverUrl}, got ${n.resource}`,
    );
  return {
    resource: n.resource,
    authorization_servers: n.authorization_servers,
  };
}
async function discoverAuthorizationServer(asUrl, opts) {
  let n = await J4e(asUrl, {
    fetchFn: opts?.fetchFn ?? BUn,
  });
  if (!n?.issuer || !n.token_endpoint)
    throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${asUrl}`);
  if (NUn(n.issuer) !== NUn(asUrl))
    throw Error(
      `XAA: AS metadata discovery failed: issuer mismatch: expected ${asUrl}, got ${n.issuer}`,
    );
  if (new URL(n.token_endpoint).protocol !== "https:")
    throw Error(`XAA: refusing non-HTTPS token endpoint: ${n.token_endpoint}`);
  return {
    issuer: n.issuer,
    token_endpoint: n.token_endpoint,
    grant_types_supported: n.grant_types_supported,
    token_endpoint_auth_methods_supported: n.token_endpoint_auth_methods_supported,
  };
}
async function requestJwtAuthorizationGrant(opts) {
  let t = opts.fetchFn ?? BUn,
    n = new URLSearchParams({
      grant_type: TOKEN_EXCHANGE_GRANT,
      requested_token_type: ID_JAG_TOKEN_TYPE,
      audience: opts.audience,
      resource: opts.resource,
      subject_token: opts.idToken,
      subject_token_type: ID_TOKEN_TYPE,
      client_id: opts.clientId,
    });
  if (opts.clientSecret) n.set("client_secret", opts.clientSecret);
  if (opts.scope) n.set("scope", opts.scope);
  let r = await t(opts.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: n,
  });
  if (!r.ok) {
    let a = redactTokens(await r.text()).slice(0, 200),
      l = r.status < 500;
    throw new USe(`XAA: token exchange failed: HTTP ${r.status}: ${a}`, l);
  }
  let o;
  try {
    o = await r.json();
  } catch {
    throw new USe(
      `XAA: token exchange returned non-JSON (captive portal?) at ${opts.tokenEndpoint}`,
      false,
    );
  }
  let s = OTp().safeParse(o);
  if (!s.success)
    throw new USe(
      `XAA: token exchange response did not match expected shape: ${redactTokens(o)}`,
      true,
    );
  let i = s.data;
  if (!i.access_token)
    throw new USe(`XAA: token exchange response missing access_token: ${redactTokens(i)}`, true);
  if (i.issued_token_type !== ID_JAG_TOKEN_TYPE)
    throw new USe(
      `XAA: token exchange returned unexpected issued_token_type: ${i.issued_token_type}`,
      true,
    );
  return {
    jwtAuthGrant: i.access_token,
    expiresIn: i.expires_in,
    scope: i.scope,
  };
}
async function exchangeJwtAuthGrant(opts) {
  let t = opts.fetchFn ?? BUn,
    n = opts.authMethod ?? "client_secret_basic",
    r = new URLSearchParams({
      grant_type: JWT_BEARER_GRANT,
      assertion: opts.assertion,
    });
  if (opts.scope) r.set("scope", opts.scope);
  let o = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  if (n === "client_secret_basic") {
    let l = Buffer.from(
      `${encodeURIComponent(opts.clientId)}:${encodeURIComponent(opts.clientSecret)}`,
    ).toString("base64");
    o.Authorization = `Basic ${l}`;
  } else (r.set("client_id", opts.clientId), r.set("client_secret", opts.clientSecret));
  let s = await t(opts.tokenEndpoint, {
    method: "POST",
    headers: o,
    body: r,
  });
  if (!s.ok) {
    let l = redactTokens(await s.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${s.status}: ${l}`);
  }
  let i;
  try {
    i = await s.json();
  } catch {
    throw Error(
      `XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${opts.tokenEndpoint}`,
    );
  }
  let a = NTp().safeParse(i);
  if (!a.success)
    throw Error(`XAA: jwt-bearer response did not match expected shape: ${redactTokens(i)}`);
  return a.data;
}
async function performCrossAppAccess(serverUrl, config, n = "xaa", abortSignal) {
  let o = NCa(abortSignal);
  sn(n, `XAA: discovering PRM for ${serverUrl}`);
  let s = await discoverProtectedResource(serverUrl, {
    fetchFn: o,
  });
  sn(n, `XAA: discovered resource=${s.resource} ASes=[${s.authorization_servers.join(", ")}]`);
  let i,
    a = [];
  for (let p of s.authorization_servers) {
    let f;
    try {
      f = await discoverAuthorizationServer(p, {
        fetchFn: o,
      });
    } catch (m) {
      if (abortSignal?.aborted) throw m;
      a.push(`${p}: ${m instanceof Error ? m.message : String(m)}`);
      continue;
    }
    if (f.grant_types_supported && !f.grant_types_supported.includes(JWT_BEARER_GRANT)) {
      a.push(
        `${p}: does not advertise jwt-bearer grant (supported: ${f.grant_types_supported.join(", ")})`,
      );
      continue;
    }
    i = f;
    break;
  }
  if (!i)
    throw new mi(
      `XAA: no authorization server supports jwt-bearer. Tried: ${a.join("; ")}`,
      `XAA: no authorization server supports jwt-bearer (tried ${s.authorization_servers.length})`,
    );
  let l = i.token_endpoint_auth_methods_supported,
    c =
      l && !l.includes("client_secret_basic") && l.includes("client_secret_post")
        ? "client_secret_post"
        : "client_secret_basic";
  (sn(n, `XAA: AS issuer=${i.issuer} token_endpoint=${i.token_endpoint} auth_method=${c}`),
    sn(n, "XAA: exchanging id_token for ID-JAG at IdP"));
  let u = await requestJwtAuthorizationGrant({
    tokenEndpoint: config.idpTokenEndpoint,
    audience: i.issuer,
    resource: s.resource,
    idToken: config.idpIdToken,
    clientId: config.idpClientId,
    clientSecret: config.idpClientSecret,
    fetchFn: o,
  });
  (sn(n, "XAA: ID-JAG obtained"), sn(n, "XAA: exchanging ID-JAG for access_token at AS"));
  let d = await exchangeJwtAuthGrant({
    tokenEndpoint: i.token_endpoint,
    assertion: u.jwtAuthGrant,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    authMethod: c,
    fetchFn: o,
  });
  return (
    sn(n, "XAA: access_token obtained"),
    {
      ...d,
      authorizationServerUrl: i.issuer,
    }
  );
}
var DTp = 30000,
  TOKEN_EXCHANGE_GRANT = "urn:ietf:params:oauth:grant-type:token-exchange",
  JWT_BEARER_GRANT = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  ID_JAG_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:id-jag",
  ID_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:id_token",
  BUn,
  USe,
  $Tp,
  OTp,
  NTp;
