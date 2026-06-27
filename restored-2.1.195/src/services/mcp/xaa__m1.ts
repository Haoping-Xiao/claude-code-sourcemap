// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BCa
// matched 2.1.88 source: src/services/mcp/xaa.ts
// class=modified (alt of src/services/mcp/xaa.ts)  jaccard=0.0391  score=0.1158  fileCov=0.0558
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BCa] deps: utils/browser.ts, @modelcontextprotocol/sdk/dist/esm/types.js, utils/errors.ts, utils/sequential.ts, utils/proxy.ts, utils/fsOperations.ts
BUn = NCa();
USe = class USe extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    ((this.name = "XaaTokenExchangeError"), (this.shouldClearIdToken = t));
  }
};
$Tp =
  /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
((OTp = ve(() =>
  H.object({
    access_token: H.string().optional(),
    issued_token_type: H.string().optional(),
    expires_in: H.coerce.number().optional(),
    scope: H.string().optional(),
  }),
)),
  (NTp = ve(() =>
    H.object({
      access_token: H.string().min(1),
      token_type: H.string().default("Bearer"),
      expires_in: H.coerce.number().optional(),
      scope: H.string().optional(),
      refresh_token: H.string().optional(),
    }),
  )));
function VTp(e) {
  if (lh(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = tF(e);
  return t !== null && qTp.has(t.code);
}
function zTp(e, t) {
  if (
    e.includes("dynamic client registration") ||
    (t instanceof iT && t.errorCode === "invalid_client_metadata")
  )
    return "dcr_failed";
  if (
    (e.includes("trying to load") && e.includes("metadata")) ||
    e.includes("Incompatible auth server")
  )
    return "discovery_failed";
  if (t instanceof iT) return "dcr_rejected";
  let n = on(t) ?? on(t instanceof Error ? t.cause : void 0);
  if (n && Hdo.has(n)) return "network_failed";
  return "sdk_auth_failed";
}
function UCa(e) {
  try {
    let t = new URL(e);
    for (let n of KTp) if (t.searchParams.has(n)) t.searchParams.set(n, "[REDACTED]");
    return t.toString();
  } catch {
    return e;
  }
}
async function FCa(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    n;
  try {
    n = Ft(t);
  } catch {
    return new Response(t, e);
  }
  if (XCn.safeParse(n).success) return new Response(t, e);
  let r = JCn.safeParse(n);
  if (!r.success) return new Response(t, e);
  let o = YTp.has(r.data.error)
    ? {
        error: "invalid_grant",
        error_description:
          r.data.error_description ?? `Server returned non-standard error code: ${r.data.error}`,
      }
    : r.data;
  return new Response(De(o), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers,
  });
}
function WUn() {
  return async (e, t) => {
    try {
      return await jCa(e, t);
    } catch (n) {
      if (t?.signal?.aborted || !VTp(n)) throw n;
      return (await Nn(WTp, t?.signal ?? void 0), await jCa(e, t));
    }
  };
}
async function jCa(e, t) {
  let n = AbortSignal.timeout(GTp),
    r = t?.method?.toUpperCase() === "POST",
    o = kg({
      url: String(e),
    });
  if (!t?.signal) {
    let l = await fetch(e, {
      ...t,
      ...o,
      signal: n,
    });
    return r ? FCa(l) : l;
  }
  let s = new AbortController(),
    i = () => s.abort();
  (t.signal.addEventListener("abort", i), n.addEventListener("abort", i));
  let a = () => {
    (t.signal?.removeEventListener("abort", i), n.removeEventListener("abort", i));
  };
  if (t.signal.aborted) s.abort();
  try {
    let l = await fetch(e, {
      ...t,
      ...o,
      signal: s.signal,
    });
    return (a(), r ? FCa(l) : l);
  } catch (l) {
    throw (a(), l);
  }
}
async function qUn(e, t, n, r, o) {
  let s = r ?? WUn();
  if (n) {
    if (!n.startsWith("https://"))
      throw Error(`authServerMetadataUrl must use https:// (got: ${n})`);
    let a = await s(n, {
      headers: {
        Accept: "application/json",
      },
    });
    if (a.ok) {
      let l;
      try {
        l = await a.json();
      } catch {
        throw Error(`Configured auth server metadata at ${n} is not valid JSON`);
      }
      return A1t.parse(l);
    }
    throw Error(`HTTP ${a.status} fetching configured auth server metadata from ${n}`);
  }
  try {
    let { authorizationServerMetadata: a } = await A8r(t, {
      fetchFn: s,
      ...(o && {
        resourceMetadataUrl: o,
      }),
    });
    if (a) return a;
  } catch (a) {
    sn(e, `RFC 9728 discovery failed, falling back: ${be(a)}`);
  }
  let i = new URL(t);
  if (i.pathname === "/") return;
  try {
    return await J4e(i, {
      fetchFn: s,
    });
  } catch (a) {
    sn(e, `Path-aware auth server discovery failed: ${be(a)}`);
    return;
  }
}
function kdo(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function Bdt(e) {
  return FUn.get(e);
}
function Udt(e, t) {
  (jUn.set(e, t),
    t
      .finally(() => {
        if (jUn.get(e) === t) jUn.delete(e);
      })
      .catch(() => {}));
}
function Fdt(e) {
  return jUn.get(e);
}
async function Rdo(e, t) {
  let n = wv(e, t),
    r = (await wl().readAsync())?.mcpOAuth?.[n];
  if (!r || r.accessToken || r.refreshToken) return;
  try {
    await wl().mutate((o) => {
      let s = o.mcpOAuth?.[n];
      if (!s || s.accessToken || s.refreshToken) return o;
      let i = {
        ...o.mcpOAuth,
      };
      return (
        delete i[n],
        {
          ...o,
          mcpOAuth: i,
        }
      );
    });
  } catch (o) {
    sn(e, `clear tokenless stub failed: ${be(o)}`);
  }
}
async function exchangeJwtAuthGrant({
  serverName: e,
  endpoint: t,
  token: n,
  tokenTypeHint: r,
  clientId: o,
  clientSecret: s,
  accessToken: i,
  authMethod: a = "client_secret_basic",
}) {
  let l = new URLSearchParams();
  (l.set("token", n), l.set("token_type_hint", r));
  let c = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  if (o && s) {
    if (a === "client_secret_post") (l.set("client_id", o), l.set("client_secret", s));
    else {
      let u = Buffer.from(`${encodeURIComponent(o)}:${encodeURIComponent(s)}`).toString("base64");
      c.Authorization = `Basic ${u}`;
    }
  } else if (o) l.set("client_id", o);
  else sn(e, `No client_id available for ${r} revocation - server may reject`);
  try {
    (await po.post(t, l, {
      headers: c,
    }),
      sn(e, `Successfully revoked ${r}`));
  } catch (u) {
    if (po.isAxiosError(u) && u.response?.status === 401 && i)
      (sn(e, `Got 401, retrying ${r} revocation with Bearer auth`),
        l.delete("client_id"),
        l.delete("client_secret"),
        await po.post(t, l, {
          headers: {
            ...c,
            Authorization: `Bearer ${i}`,
          },
        }),
        sn(e, `Successfully revoked ${r} with Bearer auth`));
    else throw u;
  }
}
async function performCrossAppAccess(serverUrl, config, { preserveStepUpState: n = !1 } = {}) {
  let r = wl(),
    o = await r.readAsync();
  if (!o?.mcpOAuth) {
    xe("mcp_oauth_revoke");
    return;
  }
  let s = wv(serverUrl, config),
    i = o.mcpOAuth[s],
    a;
  if (i?.accessToken || i?.refreshToken)
    try {
      let l = i.discoveryState?.authorizationServerUrl ?? config.url,
        c = await qUn(serverUrl, l, config.oauth?.authServerMetadataUrl);
      if (!c) (sn(serverUrl, "No OAuth metadata found"), (a = "no_metadata"));
      else {
        let u = "revocation_endpoint" in c ? c.revocation_endpoint : null;
        if (!u)
          (sn(serverUrl, "Server does not support token revocation"),
            (a = "no_revocation_endpoint"));
        else {
          let d = String(u),
            p =
              ("revocation_endpoint_auth_methods_supported" in c
                ? c.revocation_endpoint_auth_methods_supported
                : void 0) ??
              ("token_endpoint_auth_methods_supported" in c
                ? c.token_endpoint_auth_methods_supported
                : void 0),
            f =
              p && !p.includes("client_secret_basic") && p.includes("client_secret_post")
                ? "client_secret_post"
                : "client_secret_basic";
          if ((sn(serverUrl, `Revoking tokens via ${d} (${f})`), i.refreshToken))
            try {
              await exchangeJwtAuthGrant({
                serverName: serverUrl,
                endpoint: d,
                token: i.refreshToken,
                tokenTypeHint: "refresh_token",
                clientId: i.clientId,
                clientSecret: i.clientSecret,
                accessToken: i.accessToken,
                authMethod: f,
              });
            } catch (m) {
              (sn(serverUrl, `Failed to revoke refresh token: ${be(m)}`),
                (a = "server_revoke_failed"));
            }
          if (i.accessToken)
            try {
              await exchangeJwtAuthGrant({
                serverName: serverUrl,
                endpoint: d,
                token: i.accessToken,
                tokenTypeHint: "access_token",
                clientId: i.clientId,
                clientSecret: i.clientSecret,
                accessToken: i.accessToken,
                authMethod: f,
              });
            } catch (m) {
              (sn(serverUrl, `Failed to revoke access token: ${be(m)}`),
                (a = "server_revoke_failed"));
            }
        }
      }
    } catch (l) {
      (sn(serverUrl, `Failed to revoke tokens: ${be(l)}`), (a = "server_revoke_failed"));
    }
  else sn(serverUrl, "No tokens to revoke");
  try {
    if (n && i && (i.stepUpScope || i.discoveryState || i.clientId))
      (await r.mutate((l) => {
        let c = l.mcpOAuth?.[s];
        if (c?.accessToken !== i.accessToken || c?.clientId !== i.clientId) return l;
        return {
          ...l,
          mcpOAuth: {
            ...l.mcpOAuth,
            [s]: {
              serverName: serverUrl,
              serverUrl: config.url,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: void 0,
              ...(i.clientId && {
                clientId: i.clientId,
                ...(i.redirectUri && {
                  redirectUri: i.redirectUri,
                }),
                ...(i.clientSecret !== void 0 && {
                  clientSecret: i.clientSecret,
                }),
              }),
              ...(i.stepUpScope && {
                stepUpScope: i.stepUpScope,
              }),
              ...(i.discoveryState && {
                discoveryState: {
                  authorizationServerUrl: i.discoveryState.authorizationServerUrl,
                  resourceMetadataUrl: i.discoveryState.resourceMetadataUrl,
                  oauthMetadataFound: i.discoveryState.oauthMetadataFound,
                },
              }),
            },
          },
        };
      }),
        sn(serverUrl, "Preserved step-up auth state across revocation"));
    else await zUn(serverUrl, config);
  } catch (l) {
    (sn(serverUrl, `clear local tokens failed: ${be(l)}`), (a ??= "local_clear_failed"));
  }
  if (a) It("mcp_oauth_revoke", a);
  else xe("mcp_oauth_revoke");
}
async function zUn(e, t, n) {
  let r = wv(e, t),
    o;
  if (
    (await wl().mutate((s) => {
      let i = s.mcpOAuth?.[r];
      if (!i) return s;
      let a = {
        ...s.mcpOAuth,
      };
      if (n?.preserveClientRegistration && i.clientId) {
        if (!i.accessToken && !i.refreshToken) return s;
        ((a[r] = {
          ...i,
          accessToken: "",
          refreshToken: void 0,
          expiresAt: 0,
          scope: void 0,
        }),
          (o = "tokens"));
      } else (delete a[r], (o = "all"));
      return {
        ...s,
        mcpOAuth: a,
      };
    }),
    o)
  )
    sn(
      e,
      o === "tokens"
        ? "Cleared stored tokens (preserved client registration)"
        : "Cleared stored tokens",
    );
}
function zCa(e, t, n, r) {
  if (n?.success) return;
  let o = r ? "mutate_rejected" : "storage_write_failed",
    s = r ? be(r) : (n?.warning ?? "storage write failed");
  sn(e, `Token persist failed: ${s}`);
  let i = c5(t);
  G("tengu_mcp_oauth_token_persist_failed", {
    transportType: $e(t.type),
    ...(i && {
      mcpServerBaseUrl: i,
    }),
    reason: $e(o),
  });
}
async function XTp(e, t, n, r, o) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let s = Kle();
  if (!s)
    throw Error(
      "XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.",
    );
  let i = t.oauth?.clientId;
  if (!i) throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
  let l = (await YUn(e, t))?.clientSecret;
  if (!l) {
    let p = wv(e, t),
      f = Object.keys((await wl().readAsync())?.mcpOAuthClientConfig ?? {}),
      m = xw(t.headers ?? {}, (g, h) => (h.toLowerCase() === "authorization" ? "[REDACTED]" : g));
    throw (
      sn(e, `XAA: secret lookup miss. wanted=${p} have=[${f.join(", ")}] configHeaders=${De(m)}`),
      Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`)
    );
  }
  sn(e, "XAA: starting cross-app access flow");
  let c = await rst(s.issuer),
    u = (await Q4e(s.issuer)) !== void 0,
    d = "idp_login";
  try {
    let p;
    try {
      p = await gIn({
        idpIssuer: s.issuer,
        idpClientId: s.clientId,
        idpClientSecret: c,
        callbackPort: s.callbackPort,
        onAuthorizationUrl: n,
        skipBrowserOpen: o,
        abortSignal: r,
      });
    } catch (b) {
      if (r?.aborted) throw new N4();
      throw b;
    }
    d = "discovery";
    let f = await mIn(s.issuer);
    d = "token_exchange";
    let m;
    try {
      m = await Ido(
        t.url,
        {
          clientId: i,
          clientSecret: l,
          idpClientId: s.clientId,
          idpClientSecret: c,
          idpIdToken: p,
          idpTokenEndpoint: f.token_endpoint,
        },
        e,
        r,
      );
    } catch (b) {
      if (r?.aborted) throw new N4();
      let _ = be(b);
      if (b instanceof USe) {
        if (b.shouldClearIdToken)
          (await ske(s.issuer), sn(e, "XAA: cleared cached id_token after token-exchange failure"));
      } else if (
        _.includes("PRM discovery failed") ||
        _.includes("AS metadata discovery failed") ||
        _.includes("no authorization server supports jwt-bearer")
      )
        d = "discovery";
      else if (_.includes("jwt-bearer")) d = "jwt_bearer";
      throw b;
    }
    let g = wv(e, t),
      h,
      y;
    try {
      h = await wl().mutate((b) => {
        let _ = b.mcpOAuth?.[g];
        return {
          ...b,
          mcpOAuth: {
            ...b.mcpOAuth,
            [g]: {
              ..._,
              serverName: e,
              serverUrl: t.url,
              accessToken: m.access_token,
              refreshToken: m.refresh_token ?? _?.refreshToken,
              expiresAt: m.expires_in != null ? Date.now() + m.expires_in * 1000 : void 0,
              scope: m.scope,
              clientId: i,
              clientSecret: l,
              discoveryState: {
                authorizationServerUrl: m.authorizationServerUrl,
              },
            },
          },
        };
      });
    } catch (b) {
      y = b;
    }
    if (h?.success) sn(e, "XAA: tokens saved");
    else zCa(e, t, h, y);
    (G("tengu_mcp_oauth_flow_success", {
      authMethod: We("xaa"),
      idTokenCacheHit: u,
    }),
      xe("mcp_oauth_flow"));
  } catch (p) {
    if (p instanceof N4) throw p;
    throw (
      Le("mcp_oauth_flow", "mcp_oauth_xaa_failed"),
      G("tengu_mcp_oauth_flow_failure", {
        authMethod: We("xaa"),
        xaaFailureStage: $e(d),
        idTokenCacheHit: u,
      }),
      p
    );
  }
}
async function sJ(e, t, n, r, o) {
  if (t.oauth?.xaa) {
    if (!y7())
      throw Error(
        `XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`,
      );
    (G("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: We("xaa"),
      transportType: $e(t.type),
      ...(c5(t) && {
        mcpServerBaseUrl: c5(t),
      }),
    }),
      await XTp(e, t, n, r, o?.skipBrowserOpen));
    return;
  }
  let s = wl(),
    i = wv(e, t),
    a = (await s.readAsync())?.mcpOAuth?.[i],
    l = a?.stepUpScope,
    c = a?.discoveryState?.resourceMetadataUrl,
    u =
      a?.clientId && a.redirectUri && kdo(a.redirectUri) === "http://localhost"
        ? Number(new URL(a.redirectUri).port) || void 0
        : void 0,
    d;
  if (c)
    try {
      d = new URL(c);
    } catch {
      sn(e, `Invalid cached resourceMetadataUrl: ${c}`);
    }
  let p = {
      scope: l,
      resourceMetadataUrl: d,
    },
    f = VUn.randomUUID();
  G("tengu_mcp_oauth_flow_start", {
    flowAttemptId: f,
    isOAuthFlow: !0,
    transportType: $e(t.type),
    ...(c5(t) && {
      mcpServerBaseUrl: c5(t),
    }),
  });
  let m = !1;
  try {
    let g = t.oauth?.callbackPort,
      h = !!o?.redirectUri,
      y = h ? 0 : (g ?? (await pIn(u))),
      b = o?.redirectUri ?? T1t(y);
    sn(
      e,
      h
        ? `Using custom redirectUri: ${b} (no localhost listener)`
        : `Using redirect port: ${y}${g ? " (from config)" : u && y === u ? " (reusing registered port)" : ""}`,
    );
    let _ = !a?.clientId || y === u || a.redirectUri === b;
    try {
      await zUn(e, t, {
        preserveClientRegistration: _,
      });
    } catch (M) {
      sn(e, `clear stored credentials failed: ${be(M)}`);
    }
    let S = new AbortController();
    if (!h) (UUn.get(y)?.abort(), UUn.set(y, S));
    let A = new lqe(e, t, b, !0, n, o?.skipBrowserOpen),
      v = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (p.scope && !v) A.markStepUpPending(p.scope);
    try {
      let M = await qUn(e, t.url, t.oauth?.authServerMetadataUrl, void 0, p.resourceMetadataUrl);
      if (M) (A.setMetadata(M), sn(e, `Fetched OAuth metadata with scope: ${GUn(M) || "NONE"}`));
    } catch (M) {
      sn(e, `Failed to fetch OAuth metadata: ${be(M)}`);
    }
    let C = await A.state(),
      x = null,
      I = null,
      k = null,
      D = null,
      P = () => {
        if (x) (x.removeAllListeners(), x.on("error", () => {}), x.close(), (x = null));
        if (I) (clearTimeout(I), (I = null));
        if (k)
          (r?.removeEventListener("abort", k),
            S.signal.removeEventListener("abort", k),
            (k = null));
        if (UUn.get(y) === S) UUn.delete(y);
        if (FUn.get(e) === D) FUn.delete(e);
        sn(e, "MCP OAuth server cleaned up");
      },
      O = await new Promise((M, N) => {
        let B = !1,
          $ = (V) => {
            if (B) return;
            ((B = !0), M(V));
          },
          q = (V) => {
            if (B) return;
            ((B = !0), N(V));
          };
        if (
          ((k = () => {
            (P(), q(new N4()));
          }),
          r?.aborted || S.signal.aborted)
        ) {
          k();
          return;
        }
        (r?.addEventListener("abort", k), S.signal.addEventListener("abort", k));
        {
          let V = (Y) => {
            try {
              let z = new URL(Y),
                K = z.searchParams.get("code"),
                Z = z.searchParams.get("state"),
                J = z.searchParams.get("error");
              if (!K && !J) return !1;
              if (Z !== C)
                return (P(), q(Error("OAuth state mismatch - possible CSRF attack")), !0);
              if (J) {
                let ne = z.searchParams.get("error_description") || "";
                return (P(), q(Error(`OAuth error: ${J} - ${ne}`)), !0);
              }
              if (!K) return !1;
              return (sn(e, "Received auth code via manual callback URL"), P(), $(K), !0);
            } catch {
              return !1;
            }
          };
          ((D = V), FUn.set(e, V), o?.onWaitingForCallback?.(V, y, C));
        }
        let W = async () => {
          try {
            (sn(e, "Starting SDK auth"), sn(e, `Server URL: ${t.url}`));
            let V = await h7(A, {
              serverUrl: t.url,
              scope: p.scope,
              resourceMetadataUrl: p.resourceMetadataUrl,
              fetchFn: WUn(),
            });
            if ((sn(e, `Initial auth result: ${V}`), V !== "REDIRECT"))
              sn(e, `Unexpected auth result, expected REDIRECT: ${V}`);
          } catch (V) {
            (sn(e, `SDK auth error: ${V}`),
              P(),
              q(
                Error(`SDK auth failed: ${be(V)}`, {
                  cause: V,
                }),
              ));
          }
        };
        if (h) W();
        else
          ((x = WCa.createServer((V, Y) => {
            let z = VCa.parse(V.url || "", !0);
            if (z.pathname === "/callback") {
              let K = z.query.code,
                Z = z.query.state,
                J = z.query.error,
                ne = z.query.error_description,
                oe = z.query.error_uri;
              if (Z !== C) {
                (Y.writeHead(400, {
                  "Content-Type": "text/html",
                }),
                  Y.end(
                    zle({
                      ok: !1,
                      heading: "Authentication failed",
                      message:
                        "Invalid state parameter. Close this tab and try again from Claude Code.",
                    }),
                  ));
                return;
              }
              if (J) {
                (Y.writeHead(200, {
                  "Content-Type": "text/html",
                }),
                  Y.end(
                    zle({
                      ok: !1,
                      heading: "Authentication failed",
                      message: "Close this tab and try again from Claude Code.",
                      detail: `${String(J)}: ${ne ?? ""}`,
                    }),
                  ),
                  P());
                let re = `OAuth error: ${J}`;
                if (ne) re += ` - ${ne}`;
                if (oe) re += ` (See: ${oe})`;
                q(Error(re));
                return;
              }
              if (K)
                (Y.writeHead(200, {
                  "Content-Type": "text/html",
                }),
                  Y.end(
                    zle({
                      ok: !0,
                      heading: "Authentication successful",
                      message: "You can close this tab and return to Claude Code.",
                    }),
                  ),
                  P(),
                  $(K));
            } else
              (Y.writeHead(404, {
                "Content-Type": "text/html",
              }),
                Y.end(
                  zle({
                    ok: !1,
                    heading: "Not found",
                    message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${b}.`,
                  }),
                ));
          })),
            x.on("error", (V) => {
              if ((P(), V.code === "EADDRINUSE")) {
                let Y =
                  Vt() === "windows"
                    ? `netstat -ano | findstr :${y}`
                    : `lsof -ti:${y} -sTCP:LISTEN`;
                q(
                  Error(
                    `OAuth callback port ${y} is already in use \u2014 another process may be holding it. ` +
                      `Run \`${Y}\` to find it.`,
                  ),
                );
              } else q(Error(`OAuth callback server failed: ${V.message}`));
            }),
            x.listen(y, "127.0.0.1", () => void W()),
            x.unref());
        ((I = setTimeout(
          (V, Y) => {
            (V(), Y(Error("Authentication timeout")));
          },
          300000,
          P,
          q,
        )),
          I.unref());
      });
    ((m = !0), sn(e, "Completing auth flow with authorization code"));
    let L = await h7(A, {
      serverUrl: t.url,
      authorizationCode: O,
      resourceMetadataUrl: p.resourceMetadataUrl,
      fetchFn: WUn(),
    });
    if ((sn(e, `Auth result: ${L}`), L === "AUTHORIZED")) {
      let M = await A.tokens();
      if ((sn(e, `Tokens after auth: ${M ? "Present" : "Missing"}`), M))
        (sn(e, `Token access_token length: ${M.access_token?.length}`),
          sn(e, `Token expires_in: ${M.expires_in}`));
      (G("tengu_mcp_oauth_flow_success", {
        flowAttemptId: f,
        transportType: $e(t.type),
        ...(c5(t) && {
          mcpServerBaseUrl: c5(t),
        }),
      }),
        xe("mcp_oauth_flow"));
    } else throw Error("Unexpected auth result: " + L);
  } catch (g) {
    sn(e, `Error during auth completion: ${g}`);
    let h = "unknown",
      y,
      b,
      _ = be(g),
      S = g instanceof Error ? g.cause : void 0;
    if (g instanceof N4) h = "cancelled";
    else if (/AADSTS\d/.test(_)) h = "entra_specific";
    else if (/redirect[_ ]uri/i.test(_)) h = "redirect_uri_mismatch";
    else if (m) h = "token_exchange_failed";
    else if (_.includes("Authentication timeout")) h = "timeout";
    else if (_.includes("OAuth state mismatch")) h = "state_mismatch";
    else if (_.includes("OAuth error:")) h = "provider_denied";
    else if (
      _.includes("already in use") ||
      _.includes("EADDRINUSE") ||
      _.includes("callback server failed") ||
      _.includes("No available port")
    )
      h = "port_unavailable";
    else if (_.includes("SDK auth failed")) h = zTp(_, S);
    let A = (S instanceof Error ? S : g instanceof Error ? g : null)?.message.match(
      /^HTTP (\d{3})\b/,
    );
    if (A) b = Number(A[1]);
    if (S instanceof iT) y = S.errorCode;
    if (g instanceof iT) {
      if (
        ((y = g.errorCode),
        g.errorCode === "invalid_client" || g.errorCode === "unauthorized_client")
      ) {
        let v = wv(e, t);
        try {
          await wl().mutate((C) => {
            let x = C.mcpOAuth?.[v];
            if (!x) return C;
            return {
              ...C,
              mcpOAuth: {
                ...C.mcpOAuth,
                [v]: {
                  ...x,
                  clientId: void 0,
                  clientSecret: void 0,
                },
              },
            };
          });
        } catch (C) {
          sn(e, `clear clientId failed: ${be(C)}`);
        }
      }
    }
    if (h === "timeout" || _.includes("OAuth error:")) {
      let v = wv(e, t);
      await wl()
        .mutate((C) => {
          let x = C.mcpOAuth?.[v];
          if (!x?.clientId || x.accessToken || x.refreshToken || x.clientId !== a?.clientId)
            return C;
          return {
            ...C,
            mcpOAuth: {
              ...C.mcpOAuth,
              [v]: {
                ...x,
                clientId: void 0,
                clientSecret: void 0,
              },
            },
          };
        })
        .catch((C) => sn(e, `drop clientId failed: ${be(C)}`));
    }
    if (h !== "cancelled") Le("mcp_oauth_flow", "mcp_oauth_flow_failed");
    throw (
      G("tengu_mcp_oauth_flow_error", {
        flowAttemptId: f,
        reason: $e(h),
        error_code: y,
        http_status: b?.toString(),
        transportType: $e(t.type),
        ...(c5(t) && {
          mcpServerBaseUrl: c5(t),
        }),
      }),
      g
    );
  }
}
function KUn(e, t) {
  return async (n, r) => {
    let o = await e(n, r);
    if (o.status === 401 || o.status === 403) t.sawAuthChallenge = !0;
    if (o.status === 403) {
      let s = o.headers.get("WWW-Authenticate");
      if (s?.includes("insufficient_scope")) {
        let i = s.match(/scope=(?:"([^"]+)"|([^\s,]+))/),
          a = i?.[1] ?? i?.[2];
        if (a) t.markStepUpPending(a);
      }
    }
    return o;
  };
}
class lqe {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
  _authorizationUrl;
  _state;
  _scopes;
  _metadata;
  _refreshInProgress;
  _pendingStepUpScope;
  _lastServedClientId;
  _lastServedAccessToken;
  _lastServedRefreshToken;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, n = T1t(), r = !1, o, s) {
    ((this.serverName = e),
      (this.serverConfig = t),
      (this.redirectUri = n),
      (this.handleRedirection = r),
      (this.onAuthorizationUrlCallback = o),
      (this.skipBrowserOpen = s ?? !1));
  }
  get redirectUrl() {
    return this.redirectUri;
  }
  get authorizationUrl() {
    return this._authorizationUrl;
  }
  get clientMetadata() {
    let e = {
        client_name: `Claude Code (${this.serverName})`,
        redirect_uris: [this.redirectUri],
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        token_endpoint_auth_method: "none",
      },
      t = GUn(this._metadata);
    if (t) ((e.scope = t), sn(this.serverName, `Using scope from metadata: ${e.scope}`));
    return e;
  }
  get clientMetadataUrl() {
    let e = process.env.MCP_OAUTH_CLIENT_METADATA_URL;
    if (e) return (sn(this.serverName, `Using CIMD URL from env: ${e}`), e);
    return jIr;
  }
  setMetadata(e) {
    this._metadata = e;
  }
  markStepUpPending(e) {
    ((this._pendingStepUpScope = e), sn(this.serverName, `Marked step-up pending: ${e}`));
  }
  sawAuthChallenge = !1;
  async state() {
    if (!this._state)
      ((this._state = VUn.randomBytes(32).toString("base64url")),
        sn(this.serverName, "Generated new OAuth state"));
    return this._state;
  }
  async clientInformation() {
    let t = await wl().readAsync(),
      n = wv(this.serverName, this.serverConfig),
      r = t?.mcpOAuthClientConfig?.[n]?.clientSecret,
      o = this.serverConfig.oauth?.clientId,
      s = t?.mcpOAuth?.[n];
    if (s?.clientId) {
      let i = s.redirectUri;
      if (
        this.handleRedirection &&
        (i ? kdo(i) !== kdo(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))
      ) {
        sn(
          this.serverName,
          `Cached client_id was registered for ${i ?? "localhost"}; current redirectUri is ${this.redirectUri} \u2014 forcing re-DCR`,
        );
        return;
      }
      return (
        sn(this.serverName, "Found client info"),
        (this._lastServedClientId = s.clientId),
        {
          client_id: s.clientId,
          client_secret: s.clientSecret ?? (s.clientId === o ? r : void 0),
        }
      );
    }
    if (o)
      return (
        sn(this.serverName, "Using pre-configured client ID"),
        (this._lastServedClientId = o),
        {
          client_id: o,
          client_secret: r,
        }
      );
    sn(this.serverName, "No client info found");
    return;
  }
  async saveClientInformation(e) {
    let t = wv(this.serverName, this.serverConfig);
    try {
      if (
        (
          await wl().mutate((r) => ({
            ...r,
            mcpOAuth: {
              ...r.mcpOAuth,
              [t]: {
                ...r.mcpOAuth?.[t],
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                clientId: e.client_id,
                clientSecret: e.client_secret,
                redirectUri: this.redirectUri,
                accessToken: r.mcpOAuth?.[t]?.accessToken || "",
                expiresAt: r.mcpOAuth?.[t]?.expiresAt,
              },
            },
          }))
        )?.success
      )
        this._lastServedClientId = e.client_id;
      else sn(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (n) {
      sn(this.serverName, `saveClientInformation persist failed: ${be(n)}`);
    }
  }
  async tokens() {
    let t = await wl().readAsync(),
      n = wv(this.serverName, this.serverConfig),
      r = t?.mcpOAuth?.[n];
    if (
      y7() &&
      this.serverConfig.oauth?.xaa &&
      !r?.refreshToken &&
      (!r?.accessToken || (r.expiresAt != null && (r.expiresAt - Date.now()) / 1000 <= 300))
    ) {
      if (!this._refreshInProgress)
        (sn(
          this.serverName,
          r
            ? "XAA: access_token expiring, attempting silent exchange"
            : "XAA: no access_token yet, attempting silent exchange",
        ),
          (this._refreshInProgress = this.xaaRefresh().finally(() => {
            this._refreshInProgress = void 0;
          })));
      try {
        let a = await this._refreshInProgress;
        if (a)
          return (
            (this._lastServedAccessToken = a.access_token),
            (this._lastServedRefreshToken = a.refresh_token ?? this._lastServedRefreshToken),
            a
          );
      } catch (a) {
        sn(this.serverName, `XAA silent exchange failed: ${be(a)}`);
      }
    }
    if (!r) {
      sn(this.serverName, "No token data found");
      return;
    }
    if (!r.accessToken) {
      sn(this.serverName, "No access token in storage");
      return;
    }
    ((this._lastServedAccessToken = r.accessToken),
      (this._lastServedRefreshToken = r.refreshToken));
    let o = r.expiresAt != null ? (r.expiresAt - Date.now()) / 1000 : void 0,
      s = this._pendingStepUpScope !== void 0;
    if (s)
      sn(this.serverName, `Step-up pending (${this._pendingStepUpScope}), omitting refresh_token`);
    if (o != null && o <= 0 && !r.refreshToken) {
      sn(this.serverName, "Token expired without refresh token");
      return;
    }
    if (o != null && o <= 300 && r.refreshToken && !s) {
      if (!this._refreshInProgress)
        (sn(this.serverName, `Token expires in ${Math.floor(o)}s, attempting proactive refresh`),
          (this._refreshInProgress = this.refreshAuthorization(r.refreshToken).finally(() => {
            this._refreshInProgress = void 0;
          })));
      else sn(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let a = await this._refreshInProgress;
        if (a)
          return (
            sn(this.serverName, "Token refreshed successfully"),
            (this._lastServedAccessToken = a.access_token),
            (this._lastServedRefreshToken = a.refresh_token ?? this._lastServedRefreshToken),
            a
          );
        sn(this.serverName, "Token refresh failed, returning current tokens");
      } catch (a) {
        sn(this.serverName, `Token refresh error: ${be(a)}`);
      }
    }
    let i = {
      access_token: r.accessToken,
      refresh_token: s ? void 0 : r.refreshToken,
      expires_in: o,
      scope: r.scope,
      token_type: "Bearer",
    };
    return (
      sn(this.serverName, "Returning tokens"),
      sn(this.serverName, `Token length: ${i.access_token?.length}`),
      sn(this.serverName, `Has refresh token: ${!!i.refresh_token}`),
      sn(this.serverName, o != null ? `Expires in: ${Math.floor(o)}s` : "No expiration specified"),
      i
    );
  }
  async saveTokens(e) {
    this._pendingStepUpScope = void 0;
    let t = wv(this.serverName, this.serverConfig);
    (sn(this.serverName, "Saving tokens"),
      sn(this.serverName, `Token expires in: ${e.expires_in}`),
      sn(this.serverName, `Has refresh token: ${!!e.refresh_token}`));
    let n, r;
    try {
      n = await wl().mutate((o) => ({
        ...o,
        mcpOAuth: {
          ...o.mcpOAuth,
          [t]: {
            ...o.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? o.mcpOAuth?.[t]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
          },
        },
      }));
    } catch (o) {
      r = o;
    }
    if (n?.success)
      ((this._lastServedAccessToken = e.access_token),
        (this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken));
    this.logTokenPersistFailed(n, r);
  }
  logTokenPersistFailed(e, t) {
    zCa(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = Kle();
    if (!e) return;
    let t = await Q4e(e.issuer);
    if (!t) {
      sn(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let n = this.serverConfig.oauth?.clientId,
      r = await YUn(this.serverName, this.serverConfig);
    if (!n || !r?.clientSecret) {
      sn(
        this.serverName,
        "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh",
      );
      return;
    }
    let o = await rst(e.issuer),
      s;
    try {
      s = await mIn(e.issuer);
    } catch (i) {
      sn(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${be(i)}`);
      return;
    }
    try {
      let i = await Ido(
          this.serverConfig.url,
          {
            clientId: n,
            clientSecret: r.clientSecret,
            idpClientId: e.clientId,
            idpClientSecret: o,
            idpIdToken: t,
            idpTokenEndpoint: s.token_endpoint,
          },
          this.serverName,
        ),
        a = wv(this.serverName, this.serverConfig),
        l,
        c;
      try {
        l = await wl().mutate((u) => {
          let d = u.mcpOAuth?.[a];
          return {
            ...u,
            mcpOAuth: {
              ...u.mcpOAuth,
              [a]: {
                ...d,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: i.access_token,
                refreshToken: i.refresh_token ?? d?.refreshToken,
                expiresAt: i.expires_in != null ? Date.now() + i.expires_in * 1000 : void 0,
                scope: i.scope,
                clientId: n,
                clientSecret: r.clientSecret,
                discoveryState: {
                  authorizationServerUrl: i.authorizationServerUrl,
                },
              },
            },
          };
        });
      } catch (u) {
        c = u;
      }
      return (
        this.logTokenPersistFailed(l, c),
        {
          access_token: i.access_token,
          token_type: "Bearer",
          expires_in: i.expires_in,
          scope: i.scope,
          refresh_token: i.refresh_token,
        }
      );
    } catch (i) {
      if (i instanceof USe && i.shouldClearIdToken)
        (await ske(e.issuer), sn(this.serverName, "XAA: cleared id_token after exchange failure"));
      throw i;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope
        ? void 0
        : this.serverConfig.oauth?.scopes ||
          (this.serverConfig.oauth?.authServerMetadataUrl ? GUn(this._metadata) : void 0),
      n = e.searchParams.get("scope"),
      r = t ?? n;
    if (r !== n)
      sn(this.serverName, `Overrode authorization scope from ${n || "NONE"} to configured: ${r}`);
    let o = JTp(r, this._metadata);
    if (o !== null && o !== n) {
      if ((e.searchParams.set("scope", o), o !== t))
        sn(this.serverName, "Appended offline_access to authorization scope");
    }
    let s = evp(e),
      i = e.searchParams.getAll("prompt"),
      a = s ? i.filter((f) => f !== "consent") : i;
    if (a.length !== i.length || a.length > 1) {
      if ((e.searchParams.delete("prompt"), a.length > 0))
        e.searchParams.set("prompt", a.includes("consent") ? "consent" : a.at(-1));
    }
    this._authorizationUrl = e.toString();
    let l = e.searchParams.get("scope");
    if (
      (sn(this.serverName, `Authorization URL: ${UCa(e.toString())}`),
      sn(this.serverName, `Scopes in URL: ${l || "NOT FOUND"}`),
      l)
    )
      ((this._scopes = l), sn(this.serverName, `Captured scopes from authorization URL: ${l}`));
    else {
      let f = GUn(this._metadata);
      if (f) ((this._scopes = f), sn(this.serverName, `Using scopes from metadata: ${f}`));
      else sn(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let f = wv(this.serverName, this.serverConfig),
        m = this._scopes,
        g = !1;
      try {
        await wl().mutate((h) => {
          let y = h.mcpOAuth?.[f];
          if (!y) return h;
          return (
            (g = !0),
            {
              ...h,
              mcpOAuth: {
                ...h.mcpOAuth,
                [f]: {
                  ...y,
                  stepUpScope: m,
                },
              },
            }
          );
        });
      } catch (h) {
        sn(this.serverName, `step-up scope persist failed: ${be(h)}`);
      }
      if (g) sn(this.serverName, `Persisted step-up scope: ${m}`);
    }
    if (!this.handleRedirection) {
      sn(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let c = e.toString();
    if (!c.startsWith("http://") && !c.startsWith("https://"))
      throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    sn(this.serverName, "Redirecting to authorization URL");
    let u = UCa(c);
    if ((sn(this.serverName, `Authorization URL: ${u}`), this.onAuthorizationUrlCallback))
      this.onAuthorizationUrlCallback(c);
    if (this.skipBrowserOpen) {
      sn(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${u}`);
      return;
    }
    let d = kwi();
    if (d) sn(this.serverName, `Skipping browser open (headless environment). URL: ${u}`);
    else sn(this.serverName, `Opening authorization URL: ${u}`);
    let p = d ? !1 : await ac(c);
    if (
      (G("tengu_mcp_oauth_browser_open", {
        success: p,
        headless: d,
        platform: $e(Vt()),
      }),
      !d && !p)
    )
      sn(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
  }
  async saveCodeVerifier(e) {
    (sn(this.serverName, "Saving code verifier"), (this._codeVerifier = e));
  }
  async codeVerifier() {
    if (!this._codeVerifier)
      throw (sn(this.serverName, "No code verifier saved"), Error("No code verifier saved"));
    return (sn(this.serverName, "Returning code verifier"), this._codeVerifier);
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      ((this._codeVerifier = void 0),
        sn(this.serverName, "Invalidated credentials (scope: verifier)"));
      return;
    }
    let t = e,
      n = wv(this.serverName, this.serverConfig),
      r = !1;
    try {
      let o = this._lastServedClientId,
        s = this._lastServedAccessToken,
        i = this._lastServedRefreshToken;
      await wl().mutate((a) => {
        let l = a.mcpOAuth?.[n];
        if (!l) return a;
        let c = {
          ...a.mcpOAuth,
        };
        switch (t) {
          case "all": {
            let u = s != null && !!l.accessToken && l.accessToken !== s,
              d = o != null && l.clientId != null && l.clientId !== o;
            if (u || d)
              return (
                sn(
                  this.serverName,
                  `invalidateCredentials('all') preserved: ${u ? "foreign token" : "concurrent re-registration"}`,
                ),
                a
              );
            if (!l.clientId && !l.refreshToken && l.accessToken === "") return a;
            c[n] = {
              serverName: l.serverName,
              serverUrl: l.serverUrl,
              accessToken: "",
              ...(l.discoveryState && {
                discoveryState: l.discoveryState,
              }),
              ...(l.stepUpScope && {
                stepUpScope: l.stepUpScope,
              }),
            };
            break;
          }
          case "client":
            c[n] = {
              ...l,
              clientId: void 0,
              clientSecret: void 0,
            };
            break;
          case "tokens": {
            if (
              (i != null && l.refreshToken && l.refreshToken !== i) ||
              (s != null && !!l.accessToken && l.accessToken !== s)
            )
              return (
                sn(
                  this.serverName,
                  "invalidateCredentials('tokens') preserved: concurrent rotation",
                ),
                a
              );
            c[n] = {
              ...l,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: 0,
            };
            break;
          }
          case "discovery":
            c[n] = {
              ...l,
              discoveryState: void 0,
              stepUpScope: void 0,
            };
            break;
        }
        return (
          (r = !0),
          {
            ...a,
            mcpOAuth: c,
          }
        );
      });
    } catch (o) {
      sn(this.serverName, `invalidateCredentials persist failed: ${be(o)}`);
    }
    if (r) sn(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    let t = wv(this.serverName, this.serverConfig);
    sn(this.serverName, `Saving discovery state (authServer: ${e.authorizationServerUrl})`);
    try {
      await wl().mutate((n) => ({
        ...n,
        mcpOAuth: {
          ...n.mcpOAuth,
          [t]: {
            ...n.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: n.mcpOAuth?.[t]?.accessToken || "",
            expiresAt: n.mcpOAuth?.[t]?.expiresAt,
            discoveryState: {
              authorizationServerUrl: e.authorizationServerUrl,
              resourceMetadataUrl: e.resourceMetadataUrl,
              oauthMetadataFound: !!e.authorizationServerMetadata,
            },
          },
        },
      }));
    } catch (n) {
      sn(this.serverName, `saveDiscoveryState persist failed: ${be(n)}`);
    }
  }
  async discoveryState() {
    let e = this.serverConfig.oauth?.authServerMetadataUrl;
    if (e) {
      sn(this.serverName, `Fetching metadata from configured URL: ${e}`);
      try {
        let s = await qUn(this.serverName, this.serverConfig.url, e);
        if (s)
          return {
            authorizationServerUrl: s.issuer,
            authorizationServerMetadata: s,
          };
      } catch (s) {
        sn(this.serverName, `Failed to fetch from configured metadata URL: ${be(s)}`);
      }
      return;
    }
    let n = await wl().readAsync(),
      r = wv(this.serverName, this.serverConfig),
      o = n?.mcpOAuth?.[r]?.discoveryState;
    if (o?.authorizationServerUrl)
      return (
        sn(
          this.serverName,
          `Returning cached discovery state (authServer: ${o.authorizationServerUrl})`,
        ),
        {
          authorizationServerUrl: o.authorizationServerUrl,
          resourceMetadataUrl: o.resourceMetadataUrl,
          resourceMetadata: o.resourceMetadata,
          authorizationServerMetadata: o.authorizationServerMetadata,
        }
      );
    return;
  }
  async refreshAuthorization(e) {
    let t = wv(this.serverName, this.serverConfig),
      n = BY();
    await qs().mkdir(n);
    let r = t.replace(/[^a-zA-Z0-9]/g, "_"),
      o = qCa.join(n, `mcp-refresh-${r}.lock`),
      s;
    for (let i = 0; i < xdo; i++)
      try {
        (sn(this.serverName, `Acquiring refresh lock (attempt ${i + 1})`),
          (s = await Ay(o, {
            realpath: !1,
            onCompromised: () => {
              sn(this.serverName, "Refresh lock was compromised");
            },
          })),
          sn(this.serverName, "Acquired refresh lock"));
        break;
      } catch (a) {
        let l = on(a);
        if (l === "ELOCKED") {
          (sn(
            this.serverName,
            `Refresh lock held by another process, waiting (attempt ${i + 1}/${xdo})`,
          ),
            await Nn(1000 + Math.random() * 1000));
          continue;
        }
        sn(this.serverName, `Failed to acquire refresh lock: ${l}; skipping refresh`);
        return;
      }
    if (!s) {
      sn(this.serverName, `Could not acquire refresh lock after ${xdo} retries; skipping refresh`);
      return;
    }
    try {
      dye();
      let l = (await wl().readAsync())?.mcpOAuth?.[t];
      if (l) {
        let c = l.expiresAt != null ? (l.expiresAt - Date.now()) / 1000 : void 0;
        if (l.accessToken && (c == null || c > 300))
          return (
            sn(
              this.serverName,
              c != null
                ? `Another process already refreshed tokens (expires in ${Math.floor(c)}s)`
                : "Another process already refreshed tokens (no expiration)",
            ),
            {
              access_token: l.accessToken,
              refresh_token: l.refreshToken,
              expires_in: c,
              scope: l.scope,
              token_type: "Bearer",
            }
          );
        if (l.refreshToken) ((e = l.refreshToken), (this._lastServedRefreshToken = l.refreshToken));
      }
      return await this._doRefresh(e);
    } finally {
      if (s)
        try {
          (await s(), sn(this.serverName, "Released refresh lock"));
        } catch {
          sn(this.serverName, "Failed to release refresh lock");
        }
    }
  }
  async readConcurrentRefreshWinner() {
    dye();
    let t = (await wl().readAsync())?.mcpOAuth?.[wv(this.serverName, this.serverConfig)],
      n = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1000 : void 0;
    if (t?.accessToken && (n == null || n > 300)) {
      sn(this.serverName, "Another process landed fresh tokens; using those");
      let r = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: n,
        scope: t.scope,
        token_type: "Bearer",
      };
      return {
        tokenData: t,
        freshTokens: r,
      };
    }
    return {
      tokenData: t,
      freshTokens: void 0,
    };
  }
  async _doRefresh(e) {
    let n = c5(this.serverConfig),
      r = (o, s) => {
        G(o === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: $e(this.serverConfig.type),
          ...(n && {
            mcpServerBaseUrl: n,
          }),
          ...(s && {
            reason: $e(s),
          }),
        });
      };
    for (let o = 1; o <= 3; o++) {
      let s;
      try {
        sn(this.serverName, "Starting token refresh");
        let i = WUn(),
          a = this._metadata;
        if (!a) {
          let c = await this.discoveryState();
          if (c?.authorizationServerMetadata) a = c.authorizationServerMetadata;
          else if (c?.authorizationServerUrl)
            (sn(
              this.serverName,
              `Re-discovering metadata from persisted auth server URL: ${c.authorizationServerUrl}`,
            ),
              (a = await J4e(c.authorizationServerUrl, {
                fetchFn: i,
              })));
        }
        if (!a)
          a = await qUn(
            this.serverName,
            this.serverConfig.url,
            this.serverConfig.oauth?.authServerMetadataUrl,
            i,
          );
        if (!a) {
          (sn(this.serverName, "Failed to discover OAuth metadata"),
            r("failure", "metadata_discovery_failed"),
            Le("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed"));
          return;
        }
        if (((this._metadata = a), (s = await this.clientInformation()), !s)) {
          (sn(this.serverName, "No client information available"),
            r("failure", "no_client_info"),
            Le("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info"));
          return;
        }
        let l = await v8r(new URL(this.serverConfig.url), {
          metadata: a,
          clientInformation: s,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: i,
        });
        if (l)
          return (
            sn(this.serverName, "Token refresh successful"),
            await this.saveTokens(l),
            r("success"),
            xe("mcp_oauth_refresh"),
            l
          );
        (sn(this.serverName, "Token refresh returned no tokens"),
          r("failure", "no_tokens_returned"),
          Le("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens"));
        return;
      } catch (i) {
        if (i instanceof rke) {
          sn(this.serverName, `Token refresh failed with invalid_grant: ${i.message}`);
          let { freshTokens: d } = await this.readConcurrentRefreshWinner();
          if (d) return (It("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), d);
          (sn(this.serverName, "No valid tokens in storage, clearing stored tokens"),
            r("failure", "invalid_grant"),
            Le("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"),
            await this.invalidateCredentials("tokens"),
            v4t.emit(this.serverName));
          return;
        }
        if (
          i instanceof iT &&
          (i.errorCode === "invalid_client" || i.errorCode === "unauthorized_client")
        ) {
          sn(
            this.serverName,
            "Token refresh failed: DCR client expired or invalid; clearing stored client registration",
          );
          let { tokenData: d, freshTokens: p } = await this.readConcurrentRefreshWinner();
          if (p) return (It("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), p);
          if (d?.clientId && s && d.clientId !== s.client_id) {
            (sn(this.serverName, "Another process re-registered client; preserving"),
              r("failure", "concurrent_reregister"),
              It("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister"));
            return;
          }
          (r(
            "failure",
            i.errorCode === "unauthorized_client" ? "unauthorized_client" : "invalid_client",
          ),
            Le(
              "mcp_oauth_refresh",
              i.errorCode === "unauthorized_client"
                ? "mcp_oauth_refresh_unauthorized_client"
                : "mcp_oauth_refresh_invalid_client",
            ),
            await this.invalidateCredentials("all"),
            v4t.emit(this.serverName));
          return;
        }
        let a = i instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(i.message),
          l = i instanceof Vle || i instanceof Zot || i instanceof est,
          c = a || l;
        if (!c || o >= 3) {
          (sn(this.serverName, `Token refresh failed: ${be(i)}`),
            r("failure", c ? "transient_retries_exhausted" : "request_failed"),
            Le("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed"));
          return;
        }
        let u = 1000 * Math.pow(2, o - 1);
        (sn(this.serverName, `Token refresh failed, retrying in ${u}ms (attempt ${o}/3)`),
          await Nn(u));
      }
    }
    return;
  }
}
async function _3t() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY)
    throw Error(
      "No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.",
    );
  return new Promise((t, n) => {
    (process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0));
    let r = "",
      o = (s) => {
        let i = s.toString();
        if (
          i ===
            `
` ||
          i === "\r"
        )
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", o),
            process.stderr.write(`
`),
            t(r));
        else if (i === "\x03")
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", o),
            n(Error("Cancelled")));
        else if (i === "\x7F" || i === "\b") r = r.slice(0, -1);
        else r += i;
      };
    process.stdin.on("data", o);
  });
}
async function b3t(e, t, n) {
  let r = wv(e, t);
  try {
    return await wl().mutate((o) => ({
      ...o,
      mcpOAuthClientConfig: {
        ...o.mcpOAuthClientConfig,
        [r]: {
          clientSecret: n,
        },
      },
    }));
  } catch (o) {
    return {
      success: !1,
      warning: be(o),
    };
  }
}
async function KCa(e, t) {
  let n = wv(e, t);
  await wl().mutate((r) => {
    if (!r.mcpOAuthClientConfig?.[n]) return r;
    let o = {
      ...r.mcpOAuthClientConfig,
    };
    return (
      delete o[n],
      {
        ...r,
        mcpOAuthClientConfig: o,
      }
    );
  });
}
async function YUn(e, t) {
  let r = await wl().readAsync(),
    o = wv(e, t);
  return r?.mcpOAuthClientConfig?.[o];
}
function GUn(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  if (e.scopes_supported && Array.isArray(e.scopes_supported)) return e.scopes_supported.join(" ");
  return;
}
function JTp(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
function evp(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return QTp.includes(t) || ZTp.some((n) => t.endsWith(n));
  } catch {
    return !1;
  }
}
var VUn,
  WCa,
  qCa,
  VCa,
  GTp = 30000,
  WTp = 500,
  qTp,
  xdo = 5,
  KTp,
  YTp,
  N4,
  UUn,
  FUn,
  jUn,
  QTp,
  ZTp;
