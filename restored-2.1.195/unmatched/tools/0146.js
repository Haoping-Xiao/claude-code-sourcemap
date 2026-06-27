// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _os
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-login/dist-cjs/index.js
// class=new  jaccard=0.0342  score=0.0925  fileCov=0.0514
// note: nearest: node_modules/@aws-sdk/credential-provider-login/dist-cjs/index.js (0.0342); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _os = E(() => {
  tIt();
  uee();
});
function cUe(e, t) {
  let n = e.authentication.credentials_path ?? null,
    r = (e.base_url || t.baseURL).replace(/\/+$/, ""),
    o = qzc(e, n, r, t),
    s = {};
  if (e.workspace_id && e.authentication.type === "user_oauth") s["anthropic-workspace-id"] = e.workspace_id;
  return {
    provider: o,
    extraHeaders: s,
    baseURL: e.base_url || void 0
  };
}
async function Qsn(e, t) {
  let n = await CSr(t);
  if (!n) return null;
  let {
      config: r,
      fromFile: o
    } = n,
    s = r.authentication.credentials_path || !o ? r : {
      ...r,
      authentication: {
        ...r.authentication,
        credentials_path: (await lUe(r, t)) ?? void 0
      }
    };
  return cUe(s, e);
}
function qzc(e, t, n, r) {
  switch (e.authentication.type) {
    case "oidc_federation":
      {
        let o = e.authentication,
          s = Vzc(o);
        if (!s) throw new nf("oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)");
        if (!o.federation_rule_id) throw new nf("oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).");
        if (!e.organization_id) throw new nf("oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)");
        let i = gos({
          identityTokenProvider: s,
          federationRuleId: o.federation_rule_id,
          organizationId: e.organization_id,
          serviceAccountId: o.service_account_id,
          workspaceId: e.workspace_id,
          baseURL: n,
          fetch: r.fetch,
          userAgent: r.userAgent
        });
        if (t) return zzc(i, t, r.onCacheWriteError, r.onSafetyWarning);
        return i;
      }
    case "user_oauth":
      {
        if (!t) throw new nf("user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)");
        return yos({
          credentialsPath: t,
          clientId: e.authentication.client_id,
          baseURL: n,
          fetch: r.fetch,
          userAgent: r.userAgent,
          onSafetyWarning: r.onSafetyWarning
        });
      }
    default:
      {
        let o = e.authentication.type;
        throw new nf(`authentication.type "${o}" is not a known authentication type`);
      }
  }
}
function Vzc(e) {
  if (e.identity_token) {
    let r = e.identity_token.source;
    if (r !== "file") throw new nf(`identity_token.source "${r}" is not supported by this SDK version (only "file")`);
    if (!e.identity_token.path) throw new nf('identity_token.source "file" requires a non-empty path');
    return xSr(e.identity_token.path);
  }
  let t = Wb("ANTHROPIC_IDENTITY_TOKEN_FILE");
  if (t) return xSr(t);
  let n = Wb("ANTHROPIC_IDENTITY_TOKEN");
  if (n) return fos(n);
  return null;
}
function zzc(e, t, n, r) {
  return async o => {
    let s = await import("fs");
    await zsn(t, r);
    let i;
    try {
      let l = await s.promises.readFile(t, "utf-8");
      i = JSON.parse(l);
      let c = i?.access_token;
      if (c && !o?.forceRefresh) {
        let u = i?.expires_at;
        if (u == null || dee() < u - owe) return {
          token: c,
          expiresAt: u ?? null
        };
      }
    } catch (l) {
      if (l?.code !== "ENOENT" && !(l instanceof SyntaxError)) n?.(l);
    }
    let a = await e(o);
    try {
      await TJe(t, {
        ...(i ?? {}),
        version: Jsn,
        type: "oauth_token",
        access_token: a.token,
        expires_at: a.expiresAt
      });
    } catch (l) {
      n?.(l);
    }
    return a;
  };
}