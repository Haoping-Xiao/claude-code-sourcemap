// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W2e
// matched 2.1.88 source: src/services/oauth/client.ts
// class=modified  jaccard=0.3445  score=0.6126  fileCov=0.4404
// note: deminified; 16 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: storeOAuthAccountInfo, shouldUseClaudeAIAuth, revokeOAuthToken, refreshOAuthToken, populateOAuthAccountInfoIfNeeded, parseScopes, isOAuthTokenExpired, isInvalidGrantError, isExpectedOAuthTokenError, getOrganizationUUID, fetchProfileInfo, fetchAndStoreUserRoles, extractOAuthErrorFields, exchangeCodeForTokens, createAndStoreApiKey, buildAuthUrl
function shouldUseClaudeAIAuth(e) {
  return Array.isArray(e) && e.includes(xB);
}
function parseScopes(e) {
  if (typeof e !== "string") return [];
  return e.split(" ").filter(Boolean);
}
function buildAuthUrl({
  codeChallenge: e,
  state: t,
  port: n,
  isManual: r,
  loginWithClaudeAi: o,
  inferenceOnly: s,
  orgUUID: i,
  loginHint: a,
  loginMethod: l,
  oauthClient: c,
}) {
  let u = o ? $s().CLAUDE_AI_AUTHORIZE_URL : $s().CONSOLE_AUTHORIZE_URL,
    authUrl = new URL(u);
  (authUrl.searchParams.append("code", "true"),
    authUrl.searchParams.append("client_id", c?.clientId ?? $s().CLIENT_ID),
    authUrl.searchParams.append("response_type", "code"),
    authUrl.searchParams.append(
      "redirect_uri",
      r ? $s().MANUAL_REDIRECT_URL : `http://localhost:${n}/callback`,
    ));
  let p = c ? c.scopes : s ? [xB] : FIr;
  if (
    (authUrl.searchParams.append("scope", p.join(" ")),
    authUrl.searchParams.append("code_challenge", e),
    authUrl.searchParams.append("code_challenge_method", "S256"),
    authUrl.searchParams.append("state", t),
    i)
  )
    authUrl.searchParams.append("orgUUID", i);
  if (a) authUrl.searchParams.append("login_hint", a);
  if (l) authUrl.searchParams.append("login_method", l);
  return authUrl.toString();
}
async function exchangeCodeForTokens(
  authorizationCode,
  state,
  codeVerifier,
  port,
  o = false,
  expiresIn,
  i,
) {
  let a = {
    grant_type: "authorization_code",
    code: authorizationCode,
    redirect_uri: o ? $s().MANUAL_REDIRECT_URL : `http://localhost:${port}/callback`,
    client_id: i ?? $s().CLIENT_ID,
    code_verifier: codeVerifier,
    state: state,
  };
  if (expiresIn !== void 0) a.expires_in = expiresIn;
  let response = await po.post($s().TOKEN_URL, a, {
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 30000,
  });
  if (response.status !== 200)
    throw (
      Le(
        "oauth_token_exchange",
        response.status === 401 ? "oauth_exchange_invalid_code" : "oauth_exchange_http_error",
      ),
      Error(
        response.status === 401
          ? "Authentication failed: Invalid authorization code"
          : `Token exchange failed (${response.status}): ${response.statusText}`,
      )
    );
  return (G("tengu_oauth_token_exchange_success", {}), xe("oauth_token_exchange"), response.data);
}
async function refreshOAuthToken(
  refreshToken,
  { scopes: t, expiresIn: n, clientId: r, skipProfileFetch: o } = {},
) {
  let s = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: r ?? $s().CLIENT_ID,
    scope: (Array.isArray(t) && t.length ? t : Aae).join(" "),
  };
  if (n !== void 0) s.expires_in = n;
  try {
    let i = await po.post($s().TOKEN_URL, s, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 30000,
    });
    if (i.status !== 200) throw Error(`Token refresh failed: ${i.statusText}`);
    let a = i.data,
      { access_token: l, refresh_token: c = refreshToken, expires_in: u } = a,
      d = Date.now() + u * 1000,
      p = parseScopes(a.scope);
    (G("tengu_oauth_token_refresh_success", {}), xe("oauth_token_refresh"));
    let f = Dt(),
      m = o ? null : Ws(),
      g =
        f.oauthAccount?.billingType !== void 0 &&
        f.oauthAccount?.accountCreatedAt !== void 0 &&
        f.oauthAccount?.subscriptionCreatedAt !== void 0 &&
        f.oauthAccount?.ccOnboardingFlags !== void 0 &&
        m?.subscriptionType != null &&
        m?.rateLimitTier != null,
      h = o || g ? null : await fetchProfileInfo(l);
    if (h && f.oauthAccount) {
      let y = {};
      if (h.displayName !== void 0) y.displayName = h.displayName;
      if (typeof h.hasExtraUsageEnabled === "boolean")
        y.hasExtraUsageEnabled = h.hasExtraUsageEnabled;
      if (h.billingType !== null) y.billingType = h.billingType;
      if (h.accountCreatedAt !== void 0) y.accountCreatedAt = h.accountCreatedAt;
      if (h.subscriptionCreatedAt !== void 0) y.subscriptionCreatedAt = h.subscriptionCreatedAt;
      if (h.rawProfile)
        ((y.ccOnboardingFlags = h.ccOnboardingFlags),
          (y.claudeCodeTrialEndsAt = h.claudeCodeTrialEndsAt),
          (y.claudeCodeTrialDurationDays = h.claudeCodeTrialDurationDays),
          (y.seatTier = h.seatTier),
          (y.profileFetchedAt = Date.now()));
      if (Object.keys(y).length > 0)
        gn((b) => ({
          ...b,
          oauthAccount: b.oauthAccount
            ? {
                ...b.oauthAccount,
                ...y,
              }
            : b.oauthAccount,
        }));
    }
    return {
      accessToken: l,
      refreshToken: c,
      expiresAt: d,
      scopes: p,
      clientId: r,
      subscriptionType: h?.subscriptionType ?? m?.subscriptionType ?? null,
      rateLimitTier: h?.rateLimitTier ?? m?.rateLimitTier ?? null,
      profile: h?.rawProfile,
      tokenAccount: a.account
        ? {
            uuid: a.account.uuid,
            emailAddress: a.account.email_address,
            organizationUuid: a.organization?.uuid,
          }
        : void 0,
    };
  } catch (i) {
    if (
      (G("tengu_oauth_token_refresh_failure", {
        error: be(i),
        ...extractOAuthErrorFields(i),
      }),
      isInvalidGrantError(i))
    )
      Le("oauth_token_refresh", "oauth_refresh_invalid_grant");
    else It("oauth_token_refresh", "oauth_refresh_request_failed");
    throw i;
  }
}
async function revokeOAuthToken(e, t) {
  try {
    (await po.post(
      `${$s().TOKEN_URL}/revoke`,
      {
        token: e,
        token_type_hint: "refresh_token",
        client_id: t ?? $s().CLIENT_ID,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 5000,
      },
    ),
      xe("oauth_token_revoke"));
  } catch (n) {
    let r = po.isAxiosError(n) ? n.response?.status : void 0;
    (T(`OAuth token revoke failed (status=${r ?? "network"}); continuing with local logout.`),
      It("oauth_token_revoke", `http_${r ?? "network"}`));
  }
}
async function fetchAndStoreUserRoles(accessToken) {
  let response = await po.get($s().ROLES_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (response.status !== 200)
    throw (
      Le("oauth_fetch_roles", "oauth_roles_http_error"),
      Error(`Failed to fetch user roles: ${response.statusText}`)
    );
  let data = response.data;
  if (!Dt().oauthAccount)
    throw (
      Le("oauth_fetch_roles", "oauth_roles_no_account"),
      Error("OAuth account information not found in config")
    );
  (gn((o) => ({
    ...o,
    oauthAccount: o.oauthAccount
      ? {
          ...o.oauthAccount,
          organizationRole: data.organization_role,
          workspaceRole: data.workspace_role,
          organizationName: data.organization_name,
        }
      : o.oauthAccount,
  })),
    G("tengu_oauth_roles_stored", {
      org_role: data.organization_role,
    }),
    xe("oauth_fetch_roles"));
}
async function createAndStoreApiKey(accessToken) {
  try {
    let t = await po.post($s().API_KEY_URL, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      n = t.data?.raw_key;
    if (n)
      return (
        await AUr(n),
        G("tengu_oauth_api_key", {
          status: We("success"),
          statusCode: t.status,
        }),
        xe("oauth_create_api_key"),
        n
      );
    return (Le("oauth_create_api_key", "oauth_api_key_empty_response"), null);
  } catch (t) {
    throw (
      G("tengu_oauth_api_key", {
        status: We("failure"),
        error: t instanceof Error ? t.message : String(t),
      }),
      Le("oauth_create_api_key", "oauth_api_key_request_failed"),
      t
    );
  }
}
function isOAuthTokenExpired(e) {
  if (e === null) return false;
  let t = 300000;
  return Date.now() + t >= e;
}
async function fetchProfileInfo(accessToken) {
  let profile = await OIe(accessToken),
    n = profile?.organization?.organization_type,
    r = null;
  switch (n) {
    case "claude_max":
      r = "max";
      break;
    case "claude_pro":
      r = "pro";
      break;
    case "claude_enterprise":
      r = "enterprise";
      break;
    case "claude_team":
      r = "team";
      break;
    default:
      r = null;
      break;
  }
  let result = {
    subscriptionType: r,
    rateLimitTier: profile?.organization?.rate_limit_tier ?? null,
    seatTier: profile?.organization?.seat_tier ?? null,
    hasExtraUsageEnabled: profile?.organization?.has_extra_usage_enabled ?? null,
    billingType: profile?.organization?.billing_type ?? null,
    ccOnboardingFlags: profile?.organization?.cc_onboarding_flags ?? {},
    claudeCodeTrialEndsAt: profile?.organization?.claude_code_trial_ends_at ?? null,
    claudeCodeTrialDurationDays: profile?.organization?.claude_code_trial_duration_days ?? null,
  };
  if (profile?.account?.display_name) result.displayName = profile.account.display_name;
  if (profile?.account?.created_at) result.accountCreatedAt = profile.account.created_at;
  if (profile?.organization?.subscription_created_at)
    result.subscriptionCreatedAt = profile.organization.subscription_created_at;
  return (
    G("tengu_oauth_profile_fetch_success", {}),
    {
      ...result,
      rawProfile: profile,
    }
  );
}
async function getOrganizationUUID() {
  let e = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
  if (e) return e;
  let n = Dt().oauthAccount?.organizationUuid;
  if (n) return n;
  let r = Ws()?.accessToken;
  if (r === void 0 || !cI()) return null;
  let s = (await OIe(r))?.organization?.uuid;
  if (!s) return null;
  return s;
}
async function populateOAuthAccountInfoIfNeeded() {
  let e = process.env.CLAUDE_CODE_ACCOUNT_UUID,
    t = process.env.CLAUDE_CODE_USER_EMAIL,
    n = process.env.CLAUDE_CODE_ORGANIZATION_UUID,
    r = Boolean(e && t && n);
  if (e && t && n) {
    if (!Dt().oauthAccount)
      storeOAuthAccountInfo({
        accountUuid: e,
        emailAddress: t,
        organizationUuid: n,
      });
  }
  await ch();
  let o = Dt(),
    s = o.oauthAccount?.profileFetchedAt,
    i = s !== void 0 && Date.now() - s < vld;
  if (
    (o.oauthAccount &&
      o.oauthAccount.billingType !== void 0 &&
      o.oauthAccount.accountCreatedAt !== void 0 &&
      o.oauthAccount.subscriptionCreatedAt !== void 0 &&
      o.oauthAccount.ccOnboardingFlags !== void 0 &&
      i) ||
    !bo() ||
    !cI()
  )
    return false;
  let a = Ws();
  if (a?.accessToken) {
    let l = await OIe(a.accessToken);
    if (l?.account && l.organization) {
      if (r)
        T("OAuth profile fetch succeeded, overriding env var account info", {
          level: "info",
        });
      return (
        storeOAuthAccountInfo({
          accountUuid: l.account.uuid,
          emailAddress: l.account.email,
          organizationUuid: l.organization.uuid,
          displayName: l.account.display_name || void 0,
          hasExtraUsageEnabled: l.organization.has_extra_usage_enabled ?? false,
          billingType: l.organization.billing_type ?? void 0,
          accountCreatedAt: l.account.created_at,
          subscriptionCreatedAt: l.organization.subscription_created_at ?? void 0,
          ccOnboardingFlags: l.organization.cc_onboarding_flags ?? {},
          claudeCodeTrialEndsAt: l.organization.claude_code_trial_ends_at ?? null,
          claudeCodeTrialDurationDays: l.organization.claude_code_trial_duration_days ?? null,
          seatTier: l.organization.seat_tier ?? null,
          profileFetchedAt: Date.now(),
        }),
        true
      );
    }
  }
  return false;
}
function storeOAuthAccountInfo({
  accountUuid: e,
  emailAddress: t,
  organizationUuid: n,
  displayName: r,
  hasExtraUsageEnabled: o,
  billingType: s,
  accountCreatedAt: i,
  subscriptionCreatedAt: a,
  ccOnboardingFlags: l,
  claudeCodeTrialEndsAt: c,
  claudeCodeTrialDurationDays: u,
  seatTier: d,
  profileFetchedAt: p,
}) {
  let f = {
    accountUuid: e,
    emailAddress: t,
    organizationUuid: n,
    hasExtraUsageEnabled: o,
    billingType: s,
    accountCreatedAt: i,
    subscriptionCreatedAt: a,
    ccOnboardingFlags: l,
    claudeCodeTrialEndsAt: c,
    claudeCodeTrialDurationDays: u,
    seatTier: d,
  };
  if (r) f.displayName = r;
  if (p !== void 0) f.profileFetchedAt = p;
  gn((m) => {
    if (
      p === void 0 &&
      m.oauthAccount?.accountUuid === f.accountUuid &&
      m.oauthAccount?.emailAddress === f.emailAddress &&
      m.oauthAccount?.organizationUuid === f.organizationUuid &&
      m.oauthAccount?.displayName === f.displayName &&
      m.oauthAccount?.hasExtraUsageEnabled === f.hasExtraUsageEnabled &&
      m.oauthAccount?.billingType === f.billingType &&
      m.oauthAccount?.accountCreatedAt === f.accountCreatedAt &&
      m.oauthAccount?.subscriptionCreatedAt === f.subscriptionCreatedAt &&
      m.oauthAccount?.claudeCodeTrialEndsAt === f.claudeCodeTrialEndsAt &&
      m.oauthAccount?.claudeCodeTrialDurationDays === f.claudeCodeTrialDurationDays &&
      m.oauthAccount?.seatTier === f.seatTier &&
      JSON.stringify(m.oauthAccount?.ccOnboardingFlags) === JSON.stringify(f.ccOnboardingFlags)
    )
      return m;
    return {
      ...m,
      oauthAccount: {
        ...m.oauthAccount,
        ...f,
      },
    };
  });
}
function SUr(e) {
  if (!e || typeof e !== "object")
    return {
      code: void 0,
      description: void 0,
    };
  let t = e,
    n = t.error;
  return {
    code: typeof n === "string" ? n : n && typeof n === "object" ? n.type : void 0,
    description: t.error_description,
  };
}
function isInvalidGrantError(e) {
  if (!po.isAxiosError(e) || !e.response) return false;
  let t = e.response.status;
  if (t !== 400 && t !== 401) return false;
  return SUr(e.response.data).code === "invalid_grant";
}
function isExpectedOAuthTokenError(e) {
  if (!po.isAxiosError(e) || e.response?.status !== 400) return false;
  let { code: t } = SUr(e.response.data);
  return typeof t === "string" && wld.has(t);
}
function extractOAuthErrorFields(e) {
  if (!po.isAxiosError(e) || !e.response) return {};
  let { code: t, description: n } = SUr(e.response.data);
  return {
    oauth_error_status: yB(e.response.status),
    oauth_error_type: tss(t),
    oauth_error_description: Oo(Cld.find((r) => r === n)),
  };
}
var vld = 86400000,
  wld,
  Cld;
