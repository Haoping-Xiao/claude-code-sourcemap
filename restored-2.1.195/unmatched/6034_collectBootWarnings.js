// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l5c
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/utils/Constants.mjs
// class=new  jaccard=0.0326  score=0.0447  fileCov=0.1081
// note: nearest: node_modules/@azure/msal-common/dist/utils/Constants.mjs (0.0326); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var l5c = E(() => {
  At();
  BZ();
  o5c();
  i5c = new Set();
});
var d5c = {};
_t(d5c, {
  startGateway: () => startGateway,
  collectBootWarnings: () => collectBootWarnings
});
function cie(e, t = 400) {
  return Response.json({
    error: e
  }, {
    status: t,
    headers: urn
  });
}
function BOm() {
  if (typeof Bun > "u") throw Error("claude gateway requires the native binary. Install via https://claude.ai/install.sh instead of npm.");
}
function c5c(e, t) {
  for (let [n, r] of Object.entries(UOm)) if (!e.headers.has(n)) e.headers.set(n, r);
  if (t && !e.headers.has("Strict-Transport-Security")) e.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  return e;
}
function WOm(e) {
  let t = e.headers.get(FOm);
  return t && GOm.test(t) ? t : sge.randomUUID();
}
async function startGateway(e) {
  BOm();
  let t = await mWc(e);
  oge("config.load", {
    path: e,
    sha256: sge.createHash("sha256").update(JSON.stringify(t)).digest("hex")
  });
  let n = Zgr(t.listen.trusted_proxies),
    r = Zgr(t.access_control.allow_cidrs),
    o = Zgr(t.access_control.deny_cidrs),
    s = await a5c(t.store.postgres_url, {
      auditRetentionDays: t.admin?.audit_retention_days,
      maxConnections: t.store.max_connections,
      username: t.store.username,
      password: t.store.password,
      spendRetentionMonths: t.admin?.spend_retention_months,
      identityRetentionDays: t.admin?.identity_retention_days
    }).catch(O => {
      let L = be(O);
      if (/connect|ECONNREFUSED|ENOTFOUND|ETIMEDOUT/i.test(L)) throw Error(`could not connect to Postgres: ${L}. Check store.postgres_url in ${e}`);
      throw O;
    }),
    i = {
      readKeys: t.admin?.read_keys ?? [],
      writeKeys: t.admin?.write_keys ?? []
    },
    a = YWc(s.sql, t),
    l = OGc(t.session.jwt_secret),
    c = t.listen.public_url,
    u = t.oidc.groups_claim,
    d = t.oidc.email_claim,
    p;
  function f(O) {
    return typeof O === "string" && O.length > 0 ? O : void 0;
  }
  function m(O) {
    let L = Xgr(O, u);
    if (typeof L === "string") return [L];
    if (!Array.isArray(L)) return;
    let M = L.filter(N => typeof N === "string");
    return M.length > 0 ? M : void 0;
  }
  async function g(O, L, M, N, B) {
    gu("debug", `oidc id_token claim names request_id=${N}: ${Object.keys(O).sort().join(",")}` + (B ? `; userinfo claim names: ${Object.keys(B).sort().join(",")}` : ""));
    let $ = Jgr(O, d) ?? (B ? Jgr(B, d) : void 0);
    rWc({
      email: $,
      email_verified: O.email_verified ?? B?.email_verified
    }, t.oidc.allowed_email_domains);
    let q = f(O.sub);
    if (q === void 0) throw Error("IdP claims missing required `sub`");
    let W = typeof $ === "string" ? $ : void 0,
      V;
    if (p) {
      if (W === void 0) throw Object.assign(Error("oidc.google_groups is configured but the id_token has no email \u2014 check oidc.email_claim and that the email scope is requested"), {
        code: "GOOGLE_GROUPS_UNAVAILABLE"
      });
      V = await p(W);
    } else V = m(O) ?? (B ? m(B) : void 0);
    oWc(V, t.oidc.allowed_groups);
    let Y = f(O.name) ?? f(B?.name),
      z = await jGc({
        sub: q,
        email: W,
        name: Y,
        groups: V
      }, l, t.session.ttl_hours, c);
    return oge(L, {
      request_id: N,
      result: "success",
      sub: q,
      email: W,
      client_ip: M,
      ttl_hours: t.session.ttl_hours
    }), z;
  }
  if (t.oidc.google_groups) p = await XGc(t.oidc.google_groups);
  let h = t.listen.tls,
    [y, b, _, S] = await Promise.all([nWc(t.oidc), vWc(t.upstreams), gWc(t), h ? Promise.all([vZo.readFile(h.cert, "utf8"), vZo.readFile(h.key, "utf8")]).then(([O, L]) => ({
      cert: O,
      key: L
    })) : Promise.resolve(void 0)]);
  async function A(O, L) {
    if (!t.oidc.userinfo_fallback || !L) return;
    let M = Jgr(O, d) != null,
      N = Xgr(O, u) != null;
    if (M && N) return;
    let B = await y.userinfo(L);
    if (typeof B.sub !== "string" || B.sub !== O.sub) throw Error("userinfo sub missing or does not match id_token sub");
    return B;
  }
  if (t.oidc.scopes && !t.oidc.scopes.includes("offline_access") && Array.isArray(y.issuer.metadata.scopes_supported) && y.issuer.metadata.scopes_supported.includes("offline_access")) gu("warn", "oidc.scopes omits offline_access but the IdP advertises it \u2014 refresh tokens " + `will not be issued; developers re-run the browser login every ${t.session.ttl_hours}h (session.ttl_hours)`);
  if ((y.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com") && (t.oidc.extra_auth_params.access_type !== "offline" || !(t.oidc.extra_auth_params.prompt ?? "").split(" ").includes("consent"))) gu("warn", "oidc.issuer is accounts.google.com \u2014 Google ignores offline_access and needs " + `extra_auth_params: { access_type: offline, prompt: consent } and scopes: [openid, profile, email] for refresh tokens. Without both params developers re-run the browser login every ${t.session.ttl_hours}h (session.ttl_hours); without prompt: consent specifically, refresh tokens ` + "are issued only on each user\u2019s first login.");
  if ((y.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com") && (t.oidc.allowed_groups?.length ?? 0) > 0 && !t.oidc.google_groups) gu("warn", "oidc.allowed_groups is set but Google ID tokens do not carry a groups claim \u2014 " + "every login will be denied. Set oidc.google_groups to fetch Workspace groups via the Admin SDK, or use allowed_email_domains instead.");
  if (t.oidc.google_groups && !(y.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com")) gu("warn", "oidc.google_groups is set but oidc.issuer is not accounts.google.com \u2014 " + "the Directory API only returns groups for Google Workspace users, so every login will be refused");
  let v = Uo([new URL(y.issuer.metadata.authorization_endpoint ?? t.oidc.issuer).origin, ...t.oidc.form_action_origins]).join(" "),
    C = Boolean(S) || t.listen.public_url !== void 0 && new URL(t.listen.public_url).protocol === "https:",
    x = C ? "__Host-gw_dev" : "gw_dev",
    I = `HttpOnly; SameSite=Lax; Path=/${C ? "; Secure" : ""}`;
  function k(O) {
    let L = O.headers.get("cookie") ?? "";
    for (let M of L.split(";")) {
      let N = M.indexOf("=");
      if (N > 0 && M.slice(0, N).trim() === x) return M.slice(N + 1).trim();
    }
    return null;
  }
  async function D(O, L, M) {
    let N = (J, ne) => oge(J, {
        request_id: M,
        ...ne
      }),
      {
        pathname: B
      } = new URL(O.url);
    if (oZo(L, o)) return N("access.denied", {
      reason: "ip_denylist",
      client_ip: L
    }), new Response("forbidden", {
      status: 403
    });
    if (O.method === "GET" && B === "/healthz") return new Response("ok", {
      status: 200
    });
    if (O.method === "GET" && B === "/readyz") try {
      return await s.get("__readyz_probe__"), new Response("ready", {
        status: 200
      });
    } catch {
      return new Response("store unavailable", {
        status: 503
      });
    }
    if (r.length > 0 && !oZo(L, r)) return N("access.denied", {
      reason: "ip_not_allowlisted",
      client_ip: L
    }), new Response("forbidden", {
      status: 403
    });
    let $ = t.limits;
    if ($.max_url_length !== void 0 && O.url.length > $.max_url_length) return new Response("uri too long", {
      status: 414
    });
    if ($.max_request_header_bytes !== void 0) {
      let J = 0;
      for (let [ne, oe] of O.headers) J += ne.length + oe.length + 4;
      if (J > $.max_request_header_bytes) return new Response("request header fields too large", {
        status: 431
      });
    }
    let q = new URL(O.url),
      W = q.pathname,
      V = t.listen.public_url ?? q.origin;
    if (W === "/" && O.method === "GET") return aWc(V, t.oidc.issuer, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION);
    if (W === "/.well-known/oauth-authorization-server") return Response.json({
      issuer: V,
      device_authorization_endpoint: `${V}/oauth/device_authorization`,
      token_endpoint: `${V}/oauth/token`,
      grant_types_supported: [zQo, "refresh_token"],
      response_types_supported: [],
      token_endpoint_auth_methods_supported: ["none"],
      scopes_supported: ["openid", "profile", "email"],
      gateway_protocol_version: T3c
    });
    if (W === "/protocol" && O.method === "GET") return new Response(n5c, {
      headers: {
        "content-type": "text/markdown; charset=utf-8"
      }
    });
    let Y = O.headers.get("content-length");
    if (Y === null && O.headers.get("transfer-encoding")) return new Response("length required", {
      status: 411
    });
    if (Y !== null) {
      let J = Number(Y);
      if (!Number.isFinite(J) || J < 0 || J > t.limits.max_request_bytes) return new Response("payload too large", {
        status: 413
      });
    }
    if (t.admin && hZo(W)) {
      let J = t.admin,
        ne = O.headers.get("authorization"),
        oe = null;
      if (J.admin_groups.length > 0 && !O.headers.get("x-api-key") && ne?.startsWith("Bearer ")) {
        let ee = await WQo(ne.slice(7), l, c);
        if (ee && EZo(ee.groups, J)) oe = {
          sub: ee.sub
        };
      }
      let re = await BWc(O, q, s.sql, i, oe, L, J.group_limit_mode);
      if (re) return re;
    }
    if (W === "/oauth/device_authorization" && O.method === "POST") {
      if ((await s.incr(qgr("devauth", L ?? "unknown"), t.rate_limits.device_authorization.window_seconds)) > t.rate_limits.device_authorization.max) return N("device.authorize", {
        result: "rate_limited",
        client_ip: L
      }), cie("slow_down", 429);
      let ne = qGc(),
        oe = WGc(),
        re = {
          status: "pending",
          user_code: oe,
          created_at: Date.now(),
          client_ip: L
        },
        ee = JQo(ne);
      return await Promise.all([s.set(ee, await YQo(re, l), swt), s.set(Wgr(oe), ee, swt)]), N("device.authorize", {
        result: "success",
        client_ip: L
      }), Response.json({
        device_code: ne,
        user_code: oe,
        verification_uri: `${V}/device`,
        verification_uri_complete: `${V}/device?user_code=${encodeURIComponent(oe)}`,
        expires_in: swt,
        interval: KQo
      }, {
        headers: urn
      });
    }
    if (W === "/device" && O.method === "GET") {
      let J = q.searchParams.get("user_code") ?? void 0;
      return orn({
        prefill: J,
        idpOrigin: v
      });
    }
    if (W === "/device" && O.method === "POST") {
      let J = O.headers.get("origin"),
        ne = O.headers.get("sec-fetch-site");
      if (!(ne !== null ? ne === "same-origin" || ne === "none" : J !== null && J === V)) return N("device.verify", {
        result: "csrf_rejected",
        client_ip: L
      }), orn({
        idpOrigin: v,
        error: "This request came from another site and was blocked. Open the verification link directly."
      });
      if ((await s.incr(qgr("device", L ?? "unknown"), t.rate_limits.device_verify.window_seconds)) > t.rate_limits.device_verify.max) return N("device.verify", {
        result: "rate_limited",
        client_ip: L
      }), orn({
        idpOrigin: v,
        error: "Too many attempts. Wait a few minutes and try again."
      });
      let ee;
      try {
        ee = (await O.formData()).get("user_code")?.toString() ?? null;
      } catch {
        ee = null;
      }
      let ce = ee ? await s.get(Wgr(ee)) : null;
      if (!ce) return N("device.verify", {
        result: "unknown_code",
        client_ip: L
      }), orn({
        idpOrigin: v,
        error: "That code was not recognized \u2014 it may have expired. Check your device and try again."
      });
      let ae = Yvt.codeVerifier(),
        de = Yvt.nonce(),
        Ee = sge.randomBytes(32).toString("base64url"),
        me = sge.createHash("sha256").update(Ee).digest("hex"),
        pe = await BGc({
          deviceCodeKey: ce,
          idpCodeVerifier: ae,
          nonce: de,
          browserHash: me
        }, l),
        ge = Uo(t.oidc.scopes ?? ["openid", "profile", "email", "offline_access"]).join(" ");
      return N("device.verify", {
        result: "redirect",
        client_ip: L
      }), new Response(null, {
        status: 302,
        headers: {
          "Set-Cookie": `${x}=${Ee}; Max-Age=600; ${I}`,
          Location: y.authorizationUrl({
            ...t.oidc.extra_auth_params,
            redirect_uri: `${V}/oauth/callback`,
            state: pe,
            nonce: de,
            ...(t.oidc.use_pkce && {
              code_challenge: Yvt.codeChallenge(ae),
              code_challenge_method: "S256"
            }),
            scope: ge,
            response_mode: "query"
          })
        }
      });
    }
    if (W === "/oauth/callback") {
      let J = q.searchParams.get("error");
      if (J) {
        let he = q.searchParams.get("error_description");
        return aXe(he ? `${J}: ${he}` : `Identity provider returned: ${J}`);
      }
      let ne = q.searchParams.get("code"),
        oe = q.searchParams.get("state"),
        re = oe ? await UGc(oe, l) : null;
      if (!ne || !re) return aXe("This sign-in link has expired. Try again from your device.");
      let ee = `${x}=; Max-Age=0; ${I}`,
        ce = k(O),
        ae = Buffer.from(re.browserHash ?? "", "hex"),
        de = ce ? sge.createHash("sha256").update(ce).digest() : Buffer.alloc(0);
      if (ae.length !== 32 || de.length !== ae.length || !sge.timingSafeEqual(de, ae)) {
        N("device.callback", {
          result: "browser_mismatch",
          client_ip: L
        });
        let he = aXe("This sign-in link was started in a different browser. Open the verification link on the same device that showed the code.");
        return he.headers.set("Set-Cookie", ee), he;
      }
      let Ee = re.deviceCodeKey,
        me = await s.get(Ee),
        pe = me ? await XQo(me, l) : null;
      if (!pe || pe.status !== "pending") return aXe("This device code has already been used or has expired.");
      async function ge(he) {
        await Promise.all([s.set(Ee, await YQo(he, l), swt), s.del(Wgr(he.user_code))]);
      }
      try {
        let he = q.searchParams.get("iss"),
          ie = await y.callback(`${V}/oauth/callback`, {
            code: ne,
            ...(he && {
              iss: he
            })
          }, {
            ...(t.oidc.use_pkce && {
              code_verifier: re.idpCodeVerifier
            }),
            nonce: re.nonce
          }),
          le = ie.claims(),
          He = await g(le, "session.mint", L, M, await A(le, ie.access_token));
        await ge({
          status: "complete",
          user_code: pe.user_code,
          created_at: pe.created_at,
          access_token: He,
          ...(ie.refresh_token && {
            refresh_token: ie.refresh_token
          }),
          expires_in: t.session.ttl_hours * 3600
        });
        let ye = aXe(null);
        return ye.headers.set("Set-Cookie", ee), ye;
      } catch (he) {
        let ie = be(he);
        return gu("warn", `token exchange failed request_id=${M}: ${ie}`), N("session.mint", {
          result: "fail",
          client_ip: L,
          err: ie
        }), await ge({
          status: "denied",
          user_code: pe.user_code,
          created_at: pe.created_at
        }), aXe("Sign-in could not be completed.");
      }
    }
    if (W === "/oauth/token" && O.method === "POST") {
      let J;
      try {
        J = await O.formData();
      } catch {
        return cie("invalid_request");
      }
      let ne = J.get("grant_type")?.toString();
      if (ne === zQo) {
        let oe = J.get("device_code")?.toString();
        if (!oe) return cie("invalid_request");
        let re = JQo(oe),
          ee = await s.get(re),
          ce = ee ? await XQo(ee, l) : null;
        if (!ce) return cie("expired_token");
        if (ce.status === "pending") {
          if ((await s.incr(qgr("poll", re), KQo - 1)) > 1) return cie("slow_down", 429);
          return cie("authorization_pending");
        }
        if (ce.status === "denied") return await s.del(re), cie("access_denied");
        return await s.del(re), Response.json({
          access_token: ce.access_token,
          refresh_token: ce.refresh_token,
          token_type: "Bearer",
          expires_in: ce.expires_in
        }, {
          headers: urn
        });
      }
      if (ne === "refresh_token") {
        let oe = J.get("refresh_token")?.toString();
        if (!oe) return cie("invalid_request");
        try {
          let re = await y.refresh(oe),
            ee;
          try {
            ee = re.claims();
          } catch {
            ee = void 0;
          }
          let ce, ae;
          if (ee === void 0) {
            if (!re.access_token) throw Error("IdP refresh response had neither id_token nor access_token");
            ce = await y.userinfo(re.access_token);
          } else ce = ee, ae = await A(ee, re.access_token);
          let de = await g(ce, "session.refresh", L, M, ae);
          return Response.json({
            access_token: de,
            refresh_token: re.refresh_token ?? oe,
            token_type: "Bearer",
            expires_in: t.session.ttl_hours * 3600
          }, {
            headers: urn
          });
        } catch (re) {
          let ee = be(re);
          gu("warn", `refresh failed request_id=${M}: ${ee}`), N("session.refresh", {
            result: "fail",
            client_ip: L,
            err: ee
          });
          let ce = re.response !== void 0 || typeof re.code === "string" || re.name === "RPError",
            ae = re.error === "invalid_grant";
          if (ce && !ae) return cie("temporarily_unavailable", 503);
          return cie("invalid_grant", 401);
        }
      }
      return cie("unsupported_grant_type");
    }
    let z = O.headers.get("authorization"),
      K = z?.startsWith("Bearer ") ? await WQo(z.slice(7), l, c) : null;
    if (!K) return N("auth.denied", {
      reason: z ? "invalid_token" : "missing_token",
      path: W,
      client_ip: L
    }), Response.json({
      type: "error",
      request_id: M,
      error: {
        type: "authentication_error",
        message: "invalid token"
      }
    }, {
      status: 401
    });
    if (W === "/managed/settings") {
      if (!_) return new Response("not configured", {
        status: 404
      });
      let J = thr(_, K);
      if (!J) return gu("warn", `no managed policy matched for sub=${K.sub} (groups: ${(K.groups ?? []).join(",") || "none"}) request_id=${M}`), new Response("no policy matched", {
        status: 404
      });
      let {
          payload: ne
        } = J.policy,
        oe = `"${ne.checksum}"`,
        re = {
          "x-cc-gateway-version": {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
          }.VERSION
        };
      if (O.headers.get("if-none-match") === oe) return new Response(null, {
        status: 304,
        headers: re
      });
      return N("managed.serve", {
        sub: K.sub,
        email: K.email,
        policy_index: J.index,
        checksum: ne.checksum
      }), Response.json(ne, {
        headers: {
          ETag: oe,
          ...re
        }
      });
    }
    if (W === "/user/bootstrap" && O.method === "GET") {
      let J = _ ? thr(_, K) : null,
        ne = JWc(t, J?.policy ?? null, K, V),
        oe = EZo(K.groups, t.admin);
      return N("desktop_bootstrap.serve", {
        sub: K.sub,
        email: K.email,
        policy_index: J?.index ?? null
      }), Response.json(ne, {
        headers: {
          ...urn,
          "x-gateway-spend-admin": String(oe)
        }
      });
    }
    if (W in HZo && O.method === "POST") {
      let J = HZo[W],
        ne = t.telemetry.forward_to.filter(ce => ce[J]);
      if (ne.length === 0) return new Response(null, {
        status: 200
      });
      let oe = await O.arrayBuffer(),
        re = O.headers.get("content-type") ?? "application/x-protobuf",
        ee = O.headers.get("content-encoding");
      return e5c(W, oe, re, ee, ne), new Response(null, {
        status: 200
      });
    }
    let Z = _ ? thr(_, K)?.policy.availableModels : void 0;
    if (W === "/v1/models" && O.method === "GET") return xWc(t.models, b, t.auto_include_builtin_models, Z);
    if (TWc(W) && O.method === "POST") {
      if (a && W === "/v1/messages") {
        let ae = await a.precheck(K, M);
        if (ae) return ae;
      }
      let J = performance.now(),
        ne = null,
        oe,
        re = await wWc(O, W, b, t.models, t.auto_include_builtin_models, Z, t.timeouts.upstream_ttfb_ms, M, a && W === "/v1/messages" ? ae => {
          if (ae.stream !== !0) ne = ae, oe = ae.speed === "fast" ? "fast" : void 0;
        } : void 0),
        ee = re.headers.get("x-gateway-model"),
        ce = re.headers.get("x-gateway-upstream-model");
      if (N("inference", {
        sub: K.sub,
        email: K.email,
        path: W,
        model: ee,
        upstream: re.headers.get("x-gateway-upstream"),
        status: re.status,
        ms: Math.round(performance.now() - J)
      }), re.headers.delete("x-gateway-upstream"), re.headers.delete("x-gateway-model"), re.headers.delete("x-gateway-upstream-model"), re.status >= 500) gu("warn", `upstream ${re.status} on ${W} request_id=${M}`);
      if (a && W === "/v1/messages") {
        let ae = ne;
        return a.meter(re, K, ce, ae ? () => HWc(ae, b, t.models, t.auto_include_builtin_models) : null, oe);
      }
      return re;
    }
    return new Response("not found", {
      status: 404
    });
  }
  let P = Bun.serve({
    hostname: t.listen.host,
    port: t.listen.port,
    idleTimeout: 0,
    development: !1,
    ...(S && {
      tls: S
    }),
    fetch: async (O, L) => {
      let M = cWc(L.requestIP(O)?.address, O.headers.get("x-forwarded-for"), n),
        N = WOm(O),
        B;
      try {
        B = await D(O, M, N);
      } catch ($) {
        gu("error", `unhandled request_id=${N}: ${be($)}`), B = Response.json({
          type: "error",
          request_id: N,
          error: {
            type: "api_error",
            message: "internal server error"
          }
        }, {
          status: 500
        });
      }
      return B.headers.set(jOm, N), c5c(B, !!S);
    },
    error: O => (gu("error", `unhandled: ${be(O)}`), c5c(Response.json({
      type: "error",
      error: {
        type: "api_error",
        message: "internal server error"
      }
    }, {
      status: 500
    }), !!S))
  });
  return zGc(t, {
    tls: !!S,
    hostname: P.hostname ?? t.listen.host,
    port: P.port ?? t.listen.port,
    managed: !!_
  }), VOm(t, _), tWc(), {
    port: P.port ?? t.listen.port,
    stop: () => {
      P.stop(!0), s.close();
    }
  };
}
function VOm(e, t) {
  for (let n of collectBootWarnings(e, t)) gu("warn", n);
}
function collectBootWarnings(e, t = null) {
  let n = [],
    r = new Set(e.upstreams.filter(o => o.provider === "vertex").map(o => o.name));
  if (r.size > 0) {
    let o = [yc.sonnet45, yc.sonnet40],
      s = [];
    for (let i of e.models) for (let [a, l] of Object.entries(i.upstream_model)) {
      let c = y9(l);
      if (r.has(a) && c && o.includes(c)) s.push(i.id);
    }
    if (e.auto_include_builtin_models) s.push("claude-sonnet-4-5 (via auto_include_builtin_models)");
    if (s.length > 0) n.push(`vertex upstream serves ${Uo(s).join(", ")}: Sonnet 4.5/Sonnet 4 do not support 1M context on Vertex \u2014 requests with the context-1m beta (the [1m] model suffix) for these models will be rejected with a 400. Vertex 1M lineup: Opus 4.6+/Sonnet 4.6.`);
  }
  for (let [o, s] of (t ?? []).entries()) {
    let i = s.availableModels;
    if (!i) continue;
    let a = i.filter(l => v0(l.trim().toLowerCase()) && !tU(l.trim().toLowerCase()));
    if (a.length > 0) {
      let l = a.length === i.length ? "so every inference request for this role will be rejected" : "so these entries never match (other entries in the list still do)";
      n.push(`managed policy ${o} availableModels contains ${a.map(c => `'${c}'`).join(", ")} \u2014 the CLI resolves these aliases when picking a model, but the gateway matches the raw request string, ${l}. List concrete model ids or family aliases (fable/opus/sonnet/haiku) instead.`);
    }
  }
  if (e.admin) {
    let o = [];
    for (let s of e.models) for (let i of Object.values(s.upstream_model)) if (!crn(i)) o.push(`${s.id} (${i})`);
    if (o.length > 0) n.push(`spend meter has no exact rates for ${Uo(o).join(", ")} \u2014 these will be metered at the unknown-model default tier`);
  }
  return n;
}
var sge,
  vZo,
  urn,
  UOm,
  FOm = "x-client-request-id",
  jOm = "x-request-id",
  GOm;