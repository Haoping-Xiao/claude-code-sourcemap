// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g$
// matched 2.1.88 source: src/services/mcp/xaa.ts
// class=modified  jaccard=0.4887  score=0.5974  fileCov=0.7287
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module g$] deps: ft, Lo, wr, lT, vn, vf, dr, Jt, Kv, Ox, bCe, kst
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
function y3t(e) {
  return (typeof e === "string" ? e : De(e)).replace($Tp, (n, r) => `"${r}":"[REDACTED]"`);
}
async function BTp(e, t) {
  let n;
  try {
    n = await lIn(e, void 0, t?.fetchFn ?? BUn);
  } catch (r) {
    throw Error(`XAA: PRM discovery failed: ${r instanceof Error ? r.message : String(r)}`);
  }
  if (!n.resource || !n.authorization_servers?.[0])
    throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (NUn(n.resource) !== NUn(e))
    throw Error(
      `XAA: PRM discovery failed: PRM resource mismatch: expected ${e}, got ${n.resource}`,
    );
  return {
    resource: n.resource,
    authorization_servers: n.authorization_servers,
  };
}
async function UTp(e, t) {
  let n = await J4e(e, {
    fetchFn: t?.fetchFn ?? BUn,
  });
  if (!n?.issuer || !n.token_endpoint)
    throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${e}`);
  if (NUn(n.issuer) !== NUn(e))
    throw Error(
      `XAA: AS metadata discovery failed: issuer mismatch: expected ${e}, got ${n.issuer}`,
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
async function FTp(e) {
  let t = e.fetchFn ?? BUn,
    n = new URLSearchParams({
      grant_type: PTp,
      requested_token_type: $Ca,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: MTp,
      client_id: e.clientId,
    });
  if (e.clientSecret) n.set("client_secret", e.clientSecret);
  if (e.scope) n.set("scope", e.scope);
  let r = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: n,
  });
  if (!r.ok) {
    let a = y3t(await r.text()).slice(0, 200),
      l = r.status < 500;
    throw new USe(`XAA: token exchange failed: HTTP ${r.status}: ${a}`, l);
  }
  let o;
  try {
    o = await r.json();
  } catch {
    throw new USe(
      `XAA: token exchange returned non-JSON (captive portal?) at ${e.tokenEndpoint}`,
      false,
    );
  }
  let s = OTp().safeParse(o);
  if (!s.success)
    throw new USe(`XAA: token exchange response did not match expected shape: ${y3t(o)}`, true);
  let i = s.data;
  if (!i.access_token)
    throw new USe(`XAA: token exchange response missing access_token: ${y3t(i)}`, true);
  if (i.issued_token_type !== $Ca)
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
async function jTp(e) {
  let t = e.fetchFn ?? BUn,
    n = e.authMethod ?? "client_secret_basic",
    r = new URLSearchParams({
      grant_type: OCa,
      assertion: e.assertion,
    });
  if (e.scope) r.set("scope", e.scope);
  let o = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  if (n === "client_secret_basic") {
    let l = Buffer.from(
      `${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`,
    ).toString("base64");
    o.Authorization = `Basic ${l}`;
  } else (r.set("client_id", e.clientId), r.set("client_secret", e.clientSecret));
  let s = await t(e.tokenEndpoint, {
    method: "POST",
    headers: o,
    body: r,
  });
  if (!s.ok) {
    let l = y3t(await s.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${s.status}: ${l}`);
  }
  let i;
  try {
    i = await s.json();
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${e.tokenEndpoint}`);
  }
  let a = NTp().safeParse(i);
  if (!a.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${y3t(i)}`);
  return a.data;
}
async function Ido(e, t, n = "xaa", r) {
  let o = NCa(r);
  sn(n, `XAA: discovering PRM for ${e}`);
  let s = await BTp(e, {
    fetchFn: o,
  });
  sn(n, `XAA: discovered resource=${s.resource} ASes=[${s.authorization_servers.join(", ")}]`);
  let i,
    a = [];
  for (let p of s.authorization_servers) {
    let f;
    try {
      f = await UTp(p, {
        fetchFn: o,
      });
    } catch (m) {
      if (r?.aborted) throw m;
      a.push(`${p}: ${m instanceof Error ? m.message : String(m)}`);
      continue;
    }
    if (f.grant_types_supported && !f.grant_types_supported.includes(OCa)) {
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
  let u = await FTp({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: i.issuer,
    resource: s.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: o,
  });
  (sn(n, "XAA: ID-JAG obtained"), sn(n, "XAA: exchanging ID-JAG for access_token at AS"));
  let d = await jTp({
    tokenEndpoint: i.token_endpoint,
    assertion: u.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
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
  PTp = "urn:ietf:params:oauth:grant-type:token-exchange",
  OCa = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  $Ca = "urn:ietf:params:oauth:token-type:id-jag",
  MTp = "urn:ietf:params:oauth:token-type:id_token",
  BUn,
  USe,
  $Tp,
  OTp,
  NTp;
