// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wjr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/client.mjs
// class=new  jaccard=0.0207  score=0.0674  fileCov=0.029
// note: nearest: node_modules/@anthropic-ai/sdk/client.mjs (0.0207); dir inferred from dep-graph -> utils; 5 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: withCredentialsLock, resolveCredentialsFromConfig, resetWIFSingletonsForTesting, loadCredentials, loadConfig, isWIFActive, invalidateWIFToken, getWIFTokenCache, getWIFStatusLine, getWIFPrecedenceSource, getWIFCredentials, getWIFAuthType, getResolvedWIFBaseUrlSnapshot, getCredentialsPath, defaultCredentials, WorkloadIdentityError, TokenCache, OAUTH_API_BETA_HEADER, FEDERATION_BETA_HEADER
// [unwrapped __esm module wjr] deps: uee, je, At, vn, kt
Zsi = require("path");
var kjr = {};
function getResolvedWIFBaseUrlSnapshot() {
  return oHn;
}
function getWIFCredentials() {
  if (rHn === void 0) rHn = yl("wif_credentials_resolve", async () => {
    let e = await Tfd();
    if (e === null) return oHn = null, null;
    let t = _9() === "env-quad" ? null : await lUe(e),
      n = process.env.ANTHROPIC_BASE_URL || e.base_url,
      r = {
        ...e,
        base_url: n,
        ...(e.authentication.credentials_path || t === null ? {} : {
          authentication: {
            ...e.authentication,
            credentials_path: t
          }
        })
      },
      [{
        getUserAgent: o
      }, {
        getProxyFetchOptions: s
      }] = await Promise.all([Promise.resolve().then(() => (Gx(), eii)), Promise.resolve().then(() => (Mh(), k2e))]),
      i = cUe(r, {
        baseURL: n || "https://api.anthropic.com",
        fetch: (a, l) => fetch(a, {
          ...l,
          ...s({
            forAnthropicAPI: true,
            url: String(a)
          }),
          signal: AbortSignal.timeout(10000 /* 1e4 */)
        }),
        userAgent: o(),
        onSafetyWarning: a => T(a, {
          level: "warn"
        }),
        onCacheWriteError: a => T(String(a), {
          level: "warn"
        })
      });
    if (e.authentication.type === "user_oauth" && t) i.provider = nHn(Sfd(Efd(i.provider, t), t), t);
    return oHn = i.baseURL ?? null, i;
  }).catch(e => {
    throw T(`WIF credential resolution failed: ${be(e)}`, {
      level: "error"
    }), e instanceof nf ? e : new nf(be(e));
  });
  return rHn;
}
async function invalidateWIFToken(e) {
  let t = await getWIFTokenCache().catch(() => null);
  if (t === null) return;
  if (e) {
    if (hje.add(e), hje.size > bfd) for (let n of hje) {
      hje.delete(n);
      break;
    }
  }
  t.invalidate();
}
function getWIFTokenCache() {
  return Cjr ??= getWIFCredentials().then(e => {
    if (e === null) return null;
    return new aUe(async n => {
      try {
        let r = await e.provider(n);
        return xe("wif_token_exchange"), r;
      } catch (r) {
        let o = r instanceof nf ? r : new nf(r instanceof Error ? r.message : String(r), null);
        throw Le("wif_token_exchange", Afd(o)), o;
      }
    }, n => T(String(n), {
      level: "warn"
    }));
  }), Cjr;
}
function Sfd(e, t) {
  return async n => {
    if (!n?.forceRefresh) return e(n);
    if (hje.size > 0) try {
      let r = await import("fs"),
        o = JSON.parse(await r.promises.readFile(t, "utf-8")),
        s = o.access_token,
        i = o.expires_at;
      if (typeof s === "string" && s && !hje.has(s) && (typeof i !== "number" || Date.now() / 1000 < i - owe)) {
        let {
          logEvent: a
        } = await Promise.resolve().then(() => (kt(), jCt));
        return a("tengu_wif_user_oauth_refresh_race_resolved", {}), T("wif: adopting sibling-rotated access token from credentials file; skipping refresh grant"), {
          token: s,
          expiresAt: typeof i === "number" ? i : null
        };
      }
    } catch (r) {
      T(`wif: rotated-token adoption check failed: ${be(r)}`);
    }
    return e(n);
  };
}
function Efd(e, t) {
  let n = async () => {
    try {
      let r = await import("fs");
      return JSON.parse(await r.promises.readFile(t, "utf-8"));
    } catch {
      return null;
    }
  };
  return async r => {
    let s = (await n())?.refresh_token;
    try {
      return await e(r);
    } catch (i) {
      if (i instanceof nf && (i.statusCode === 400 || i.statusCode === 401) && typeof i.body === "string" && i.body.includes('"invalid_grant"') && typeof s === "string" && s) try {
        let a = await n();
        if (a && a.refresh_token === s) {
          let {
            logEvent: l
          } = await Promise.resolve().then(() => (kt(), jCt));
          await TJe(t, {
            ...a,
            refresh_token: void 0
          }), l("tengu_wif_user_oauth_refresh_token_cleared", {});
        }
      } catch (a) {
        if (Vo(a)) T(`wif: refresh-token cleanup write failed: ${a}`);else ke(Rh(Zr(a), "WIF: failed to clear stale user_oauth refresh_token"));
      }
      throw i;
    }
  };
}
function Afd(e) {
  if (typeof e.body === "string" && e.body.includes('"invalid_grant"')) return "invalid_grant";
  if (typeof e.statusCode === "number") {
    if (e.statusCode >= 500) return "http_5xx";
    if (e.statusCode >= 400) return "http_4xx";
  }
  let t = e.message.toLowerCase();
  if (t.includes("parse") || t.includes("json")) return "parse_failed";
  return "network_error";
}
function resetWIFSingletonsForTesting() {
  rHn = void 0, Cjr = void 0, oHn = void 0, hje.clear(), WSn();
}
async function Tfd() {
  if (_9() === "env-quad") {
    let e = gje("ANTHROPIC_FEDERATION_RULE_ID"),
      t = gje("ANTHROPIC_ORGANIZATION_ID");
    if (e && t) {
      let n = gje("ANTHROPIC_IDENTITY_TOKEN_FILE");
      return {
        organization_id: t,
        workspace_id: gje("ANTHROPIC_WORKSPACE_ID"),
        base_url: gje("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: e,
          service_account_id: gje("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: n ? {
            source: "file",
            path: n
          } : void 0,
          scope: gje("ANTHROPIC_SCOPE")
        }
      };
    }
  }
  return eIt();
}
var rHn,
  Cjr,
  oHn,
  hje,
  bfd = 20,
  gje = e => process.env[e]?.trim() || void 0;