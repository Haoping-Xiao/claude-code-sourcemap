// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t1t
// matched 2.1.88 source: src/utils/auth.ts
// class=modified  jaccard=0.3055  score=0.3817  fileCov=0.6049
// note: deminified; 112 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module t1t]
Bvi = new Map();
var pU = {};
_t(pU, {
  withOAuthRefreshLock: () => withOAuthRefreshLock,
  waitForRotatedEnvToken: () => waitForRotatedEnvToken,
  validateForceLoginOrg: () => validateForceLoginOrg,
  toAccountInfo: () => toAccountInfo,
  shouldUseWIFAuth: () => shouldUseWIFAuth,
  saveOAuthTokensIfNeeded: () => saveOAuthTokensIfNeeded,
  saveApiKey: () => saveApiKey,
  restoreGatewayAuth: () => restoreGatewayAuth,
  resetEnvDerivedAuthCaches: () => resetEnvDerivedAuthCaches,
  resetAwsAuthRefreshCooldown: () => resetAwsAuthRefreshCooldown,
  resetAuthFailureTracking: () => resetAuthFailureTracking,
  removeApiKey: () => removeApiKey,
  refreshGcpCredentialsIfNeeded: () => refreshGcpCredentialsIfNeeded,
  refreshGcpAuth: () => refreshGcpAuth,
  refreshAwsAuth: () => refreshAwsAuth,
  refreshAndGetAwsCredentials: () => refreshAndGetAwsCredentials,
  readFreshOAuthAccessToken: () => readFreshOAuthAccessToken,
  prefetchGcpCredentialsIfSafe: () => prefetchGcpCredentialsIfSafe,
  prefetchAwsCredentialsAndBedRockInfoIfSafe: () => prefetchAwsCredentialsAndBedRockInfoIfSafe,
  prefetchApiKeyFromApiKeyHelperIfSafe: () => prefetchApiKeyFromApiKeyHelperIfSafe,
  oauthRefreshLockOptions: () => oauthRefreshLockOptions,
  noteAuthRecoveryOutcome: () => noteAuthRecoveryOutcome,
  isWIFDispatchAuth: () => isWIFDispatchAuth,
  isUsing3PServices: () => isUsing3PServices,
  isTeamSubscriberAsync: () => isTeamSubscriberAsync,
  isTeamSubscriber: () => isTeamSubscriber,
  isTeamPremiumSubscriberAsync: () => isTeamPremiumSubscriberAsync,
  isTeamPremiumSubscriber: () => isTeamPremiumSubscriber,
  isProSubscriberAsync: () => isProSubscriberAsync,
  isProSubscriber: () => isProSubscriber,
  isOverageProvisioningAllowedAsync: () => isOverageProvisioningAllowedAsync,
  isOverageProvisioningAllowed: () => isOverageProvisioningAllowed,
  isOtelHeadersHelperFromProjectOrLocalSettings: () =>
    isOtelHeadersHelperFromProjectOrLocalSettings,
  isOAuthRefreshKnownDead: () => isOAuthRefreshKnownDead,
  isMaxSubscriberAsync: () => isMaxSubscriberAsync,
  isMaxSubscriber: () => isMaxSubscriber,
  isGcpAuthRefreshFromProjectSettings: () => isGcpAuthRefreshFromProjectSettings,
  isFirstPartyManagedOAuthContext: () => isFirstPartyManagedOAuthContext,
  isExpectedOAuthRefreshError: () => isExpectedOAuthRefreshError,
  isEnterpriseSubscriberAsync: () => isEnterpriseSubscriberAsync,
  isEnterpriseSubscriber: () => isEnterpriseSubscriber,
  isEnterprisePAYGSubscriberAsync: () => isEnterprisePAYGSubscriberAsync,
  isEnterprisePAYGSubscriber: () => isEnterprisePAYGSubscriber,
  isCustomApiKeyApproved: () => isCustomApiKeyApproved,
  isConsumerSubscriberAsync: () => isConsumerSubscriberAsync,
  isConsumerSubscriber: () => isConsumerSubscriber,
  isClaudeAISubscriberAsync: () => isClaudeAISubscriberAsync,
  isClaudeAISubscriber: () => isClaudeAISubscriber,
  isAwsCredentialExportFromProjectSettings: () => isAwsCredentialExportFromProjectSettings,
  isAwsAuthRefreshFromProjectSettings: () => isAwsAuthRefreshFromProjectSettings,
  isAnthropicAuthEnabledAsync: () => isAnthropicAuthEnabledAsync,
  isAnthropicAuthEnabled: () => isAnthropicAuthEnabled,
  is1PApiCustomerAsync: () => is1PApiCustomerAsync,
  is1PApiCustomer: () => is1PApiCustomer,
  hasStoredOAuthToken: () => hasStoredOAuthToken,
  hasStoredOAuthRefreshToken: () => hasStoredOAuthRefreshToken,
  hasProfileScopeAsync: () => hasProfileScopeAsync,
  hasProfileScope: () => hasProfileScope,
  hasOpusAccessAsync: () => hasOpusAccessAsync,
  hasOpusAccess: () => hasOpusAccess,
  hasOAuthScope: () => hasOAuthScope,
  hasAnthropicDirectApiKey: () => hasAnthropicDirectApiKey,
  hasAnthropicApiKeyAuthAsync: () => hasAnthropicApiKeyAuthAsync,
  hasAnthropicApiKeyAuth: () => hasAnthropicApiKeyAuth,
  hasAnthropicApiKey: () => hasAnthropicApiKey,
  handleOAuth401Error: () => handleOAuth401Error,
  getSubscriptionTypeAsync: () => getSubscriptionTypeAsync,
  getSubscriptionType: () => getSubscriptionType,
  getSubscriptionNameAsync: () => getSubscriptionNameAsync,
  getSubscriptionName: () => getSubscriptionName,
  getStoredOAuthTokenExpiresAt: () => getStoredOAuthTokenExpiresAt,
  getStoredOAuthSubscriptionType: () => getStoredOAuthSubscriptionType,
  getSeatTierAsync: () => getSeatTierAsync,
  getSeatTier: () => getSeatTier,
  getRateLimitTierAsync: () => getRateLimitTierAsync,
  getRateLimitTier: () => getRateLimitTier,
  getOtelHeadersHelperLastFailure: () => getOtelHeadersHelperLastFailure,
  getOtelHeadersFromHelper: () => getOtelHeadersFromHelper,
  getOauthAccountInfoAsync: () => getOauthAccountInfoAsync,
  getOauthAccountInfo: () => getOauthAccountInfo,
  getModelAccessCache: () => getModelAccessCache,
  getConfiguredAwsAuthRefresh: () => getConfiguredAwsAuthRefresh,
  getConfiguredApiKeyHelper: () => getConfiguredApiKeyHelper,
  getClaudeAIOAuthTokensAsync: () => getClaudeAIOAuthTokensAsync,
  getClaudeAIOAuthTokens: () => getClaudeAIOAuthTokens,
  getAuthTokenSourceAsync: () => getAuthTokenSourceAsync,
  getAuthTokenSource: () => getAuthTokenSource,
  getApiKeyHelperElapsedMs: () => getApiKeyHelperElapsedMs,
  getApiKeyFromConfigOrMacOSKeychainAsync: () => getApiKeyFromConfigOrMacOSKeychainAsync,
  getApiKeyFromConfigOrMacOSKeychain: () => getApiKeyFromConfigOrMacOSKeychain,
  getApiKeyFromApiKeyHelperCached: () => getApiKeyFromApiKeyHelperCached,
  getApiKeyFromApiKeyHelper: () => getApiKeyFromApiKeyHelper,
  getAnthropicApiKeyWithSourceAsync: () => getAnthropicApiKeyWithSourceAsync,
  getAnthropicApiKeyWithSource: () => getAnthropicApiKeyWithSource,
  getAnthropicApiKeyAsync: () => getAnthropicApiKeyAsync,
  getAnthropicApiKey: () => getAnthropicApiKey,
  getAdditionalModelOptionsCache: () => getAdditionalModelOptionsCache,
  getAccountInformationAsync: () => getAccountInformationAsync,
  getAccountInformation: () => getAccountInformation,
  describeHowToDisableAuthTokenSource: () => describeHowToDisableAuthTokenSource,
  clearWIFAuthDebugOnceCacheForTesting: () => clearWIFAuthDebugOnceCacheForTesting,
  clearOtelHeadersCache: () => clearOtelHeadersCache,
  clearOAuthTokenCache: () => clearOAuthTokenCache,
  clearGcpCredentialsCache: () => clearGcpCredentialsCache,
  clearAwsCredentialsCache: () => clearAwsCredentialsCache,
  clearApiKeyHelperCache: () => clearApiKeyHelperCache,
  checkGcpCredentialsValid: () => checkGcpCredentialsValid,
  checkAndRefreshOAuthTokenIfNeededWithOutcome: () => checkAndRefreshOAuthTokenIfNeededWithOutcome,
  checkAndRefreshOAuthTokenIfNeeded: () => checkAndRefreshOAuthTokenIfNeeded,
  calculateApiKeyHelperTTL: () => calculateApiKeyHelperTTL,
  acquireOAuthRefreshLock: () => acquireOAuthRefreshLock,
  __resetKnownDeadRefreshTokensForTest: () => E0d,
  SDK_OAUTH_REFRESH_ENTRYPOINTS: () => SDK_OAUTH_REFRESH_ENTRYPOINTS,
});
function Vot() {
  return ut(process.env.CLAUDE_CODE_REMOTE) || oY();
}
function isFirstPartyManagedOAuthContext() {
  return (
    Vot() &&
    !process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR &&
    process.env.CLAUDE_CODE_ENTRYPOINT !== "claude-desktop-3p"
  );
}
function clearWIFAuthDebugOnceCacheForTesting() {
  (Vvi.cache.clear?.(), zvi.cache.clear?.());
}
function shouldUseWIFAuth() {
  if (!qSn()) return false;
  if (
    md() ||
    process.env.ANTHROPIC_UNIX_SOCKET ||
    Vot() ||
    process.env.ANTHROPIC_AUTH_TOKEN ||
    process.env.CLAUDE_CODE_OAUTH_TOKEN ||
    b9() ||
    getConfiguredApiKeyHelper() ||
    ut(process.env.CLAUDE_CODE_USE_BEDROCK) ||
    ut(process.env.CLAUDE_CODE_USE_VERTEX) ||
    ut(process.env.CLAUDE_CODE_USE_FOUNDRY) ||
    ut(process.env.CLAUDE_CODE_USE_ANTHROPIC_AWS) ||
    ut(process.env.CLAUDE_CODE_USE_MANTLE)
  )
    return false;
  if (_9() === "profile-implicit") {
    let e = getClaudeAIOAuthTokens();
    if (hj(e?.scopes) && e?.accessToken && V2e() === "user_oauth") return (Vvi(), false);
  }
  return (zvi(), true);
}
function isWIFDispatchAuth() {
  return getAnthropicApiKey() === null && shouldUseWIFAuth();
}
async function restoreGatewayAuth() {
  if (ut(process.env.CLAUDE_CODE_USE_GATEWAY)) {
    let e = process.env.ANTHROPIC_BASE_URL,
      t = process.env.ANTHROPIC_AUTH_TOKEN;
    if (e && t) {
      let n;
      try {
        n = OCn(e);
      } catch (o) {
        throw Error(`CLAUDE_CODE_USE_GATEWAY is set but ANTHROPIC_BASE_URL is invalid: ${be(o)}`);
      }
      let r = tPt(t);
      xge({
        url: n,
        jwt: t,
        expiresAt: r !== null ? r * 1000 : Number.MAX_SAFE_INTEGER,
        unpinned: true,
      });
      return;
    }
    T(
      "CLAUDE_CODE_USE_GATEWAY is set but ANTHROPIC_BASE_URL or ANTHROPIC_AUTH_TOKEN is missing; ignoring",
      {
        level: "warn",
      },
    );
  }
  try {
    let e = await wl().readAsync(),
      t = e?.enterpriseGateway;
    if (!t) return;
    let n = new URL(t.url).hostname.replace(/^\[|\]$/g, ""),
      r = e?.gatewayTrust?.[n];
    if (!r) {
      if (!Ir())
        process.stderr
          .write(`Cloud gateway ${n} is not trusted on this machine \u2014 run /login to reconnect.
`);
      return;
    }
    if (t.expiresAt <= Date.now() && !t.idpRefreshToken) {
      if (!Ir())
        process.stderr.write(`Cloud gateway session expired \u2014 run /login to reconnect.
`);
      return;
    }
    try {
      let o = await ZOt(t.url, 3000);
      if (o.fingerprint !== r) {
        if (!Ir())
          process.stderr
            .write(`Cloud gateway ${n} TLS certificate changed since you connected \u2014 run /login to verify and reconnect.
`);
        T(
          `[gateway] TLS fingerprint mismatch on restore for ${n}: pinned ${r}, live ${o.fingerprint}`,
          {
            level: "warn",
          },
        );
        return;
      }
    } catch (o) {
      T(
        `[gateway] TLS fingerprint probe failed on restore for ${n} (${be(o)}); proceeding without re-verify`,
      );
    }
    xge(t);
  } catch (e) {
    ke(e);
  }
}
function isAnthropicAuthEnabled() {
  if (md()) return false;
  if (process.env.ANTHROPIC_UNIX_SOCKET) return !!process.env.CLAUDE_CODE_OAUTH_TOKEN;
  if (shouldUseWIFAuth()) return false;
  let e = !Jl(),
    n = (jo() || {}).apiKeyHelper,
    r = nv() ? void 0 : process.env.ANTHROPIC_AUTH_TOKEN,
    o;
  try {
    o = getAnthropicApiKeyWithSource({
      skipRetrievingKeyFromApiKeyHelper: true,
    }).source;
  } catch {
    return false;
  }
  let s = o === "ANTHROPIC_API_KEY" || o === "apiKeyHelper",
    i = process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR,
    a = ((r || s) && !isFirstPartyManagedOAuthContext()) || ((n || i) && !Vot());
  return !(e || a);
}
function describeHowToDisableAuthTokenSource(e) {
  switch (e) {
    case "claude.ai":
      return "claude /logout to sign out of claude.ai.";
    case "profile":
      return "Run `ant auth logout`, or remove the active profile under ~/.config/anthropic/configs/.";
    case "apiKeyHelper":
      return "Unset the apiKeyHelper setting.";
    case "CCR_OAUTH_TOKEN_FILE":
      return "This token is injected by the CCR host; check the host session.";
    case "none":
      return "";
    default:
      return `Unset the ${e} environment variable.`;
  }
}
function getAuthTokenSource() {
  if (md()) {
    if (getConfiguredApiKeyHelper())
      return {
        source: "apiKeyHelper",
        hasToken: true,
      };
    return {
      source: "none",
      hasToken: false,
    };
  }
  if (process.env.ANTHROPIC_AUTH_TOKEN && !isFirstPartyManagedOAuthContext() && !nv())
    return {
      source: "ANTHROPIC_AUTH_TOKEN",
      hasToken: true,
    };
  if (process.env.CLAUDE_CODE_OAUTH_TOKEN)
    return {
      source: "CLAUDE_CODE_OAUTH_TOKEN",
      hasToken: true,
    };
  if (b9()) {
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR)
      return {
        source: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
        hasToken: true,
      };
    return {
      source: "CCR_OAUTH_TOKEN_FILE",
      hasToken: true,
    };
  }
  if (getConfiguredApiKeyHelper() && !Vot())
    return {
      source: "apiKeyHelper",
      hasToken: true,
    };
  if (shouldUseWIFAuth())
    return {
      source: "profile",
      hasToken: true,
    };
  let n = getClaudeAIOAuthTokens();
  if (hj(n?.scopes) && n?.accessToken)
    return {
      source: "claude.ai",
      hasToken: true,
    };
  return {
    source: "none",
    hasToken: false,
  };
}
function getAnthropicApiKey() {
  let { key: e } = getAnthropicApiKeyWithSource();
  return e;
}
function getAdditionalModelOptionsCache() {
  let e = Dt().additionalModelOptionsCache;
  return (Array.isArray(e) ? e : []).filter(
    (t) =>
      t != null &&
      typeof t === "object" &&
      (typeof t.value === "string" || t.value === null) &&
      typeof t.label === "string" &&
      typeof t.description === "string",
  );
}
function getModelAccessCache() {
  let e = Dt().modelAccessCache;
  return (Array.isArray(e) ? e : []).filter(
    (t) =>
      t != null &&
      typeof t === "object" &&
      typeof t.apiName === "string" &&
      typeof t.entitled === "boolean",
  );
}
function hasAnthropicDirectApiKey() {
  if (process.env.ANTHROPIC_AUTH_TOKEN) return false;
  let { key: e, source: t } = getAnthropicApiKeyWithSource();
  if (!e || t === "/login managed key") return false;
  return e.startsWith("sk-ant-") && e.slice(7, 10) === "api";
}
function hasAnthropicApiKeyAuth() {
  let { key: e, source: t } = getAnthropicApiKeyWithSource({
    skipRetrievingKeyFromApiKeyHelper: true,
  });
  return e !== null && t !== "none";
}
function hasAnthropicApiKey() {
  return getAnthropicApiKey() != null;
}
function getAnthropicApiKeyWithSource(e = {}) {
  if (md()) {
    if (process.env.ANTHROPIC_API_KEY)
      return {
        key: process.env.ANTHROPIC_API_KEY,
        source: "ANTHROPIC_API_KEY",
      };
    if (getConfiguredApiKeyHelper())
      return {
        key: e.skipRetrievingKeyFromApiKeyHelper ? null : getApiKeyFromApiKeyHelperCached(),
        source: "apiKeyHelper",
      };
    return {
      key: null,
      source: "none",
    };
  }
  let t = nv() ? void 0 : process.env.ANTHROPIC_API_KEY;
  if (fJe() && t)
    return {
      key: t,
      source: "ANTHROPIC_API_KEY",
    };
  if (ut(false)) {
    let s = iPt();
    if (s)
      return {
        key: s,
        source: "ANTHROPIC_API_KEY",
      };
    if (
      !t &&
      !process.env.CLAUDE_CODE_OAUTH_TOKEN &&
      !process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR &&
      !process.env.ANTHROPIC_AUTH_TOKEN &&
      !shouldUseWIFAuth() &&
      Jl()
    )
      throw Error(
        "ANTHROPIC_API_KEY, ANTHROPIC_AUTH_TOKEN, CLAUDE_CODE_OAUTH_TOKEN, or WIF env vars (ANTHROPIC_FEDERATION_RULE_ID + ANTHROPIC_ORGANIZATION_ID) required",
      );
    if (t)
      return {
        key: t,
        source: "ANTHROPIC_API_KEY",
      };
    return {
      key: null,
      source: "none",
    };
  }
  if (t && Dt().customApiKeyResponses?.approved?.includes(KB(t)))
    return {
      key: t,
      source: "ANTHROPIC_API_KEY",
    };
  let n = iPt();
  if (n)
    return {
      key: n,
      source: "ANTHROPIC_API_KEY",
    };
  if (getConfiguredApiKeyHelper()) {
    if (e.skipRetrievingKeyFromApiKeyHelper)
      return {
        key: null,
        source: "apiKeyHelper",
      };
    return {
      key: getApiKeyFromApiKeyHelperCached(),
      source: "apiKeyHelper",
    };
  }
  let o = getApiKeyFromConfigOrMacOSKeychain();
  if (o) return o;
  return {
    key: null,
    source: "none",
  };
}
function getConfiguredApiKeyHelper() {
  if (md()) return yn("flagSettings")?.apiKeyHelper;
  return (jo() || {}).apiKeyHelper;
}
function Kvi() {
  let e = getConfiguredApiKeyHelper();
  if (!e) return false;
  let t = yn("projectSettings"),
    n = yn("localSettings");
  return t?.apiKeyHelper === e || n?.apiKeyHelper === e;
}
function getConfiguredAwsAuthRefresh() {
  return (jo() || {}).awsAuthRefresh;
}
function isAwsAuthRefreshFromProjectSettings() {
  let e = getConfiguredAwsAuthRefresh();
  if (!e) return false;
  let t = yn("projectSettings"),
    n = yn("localSettings");
  return t?.awsAuthRefresh === e || n?.awsAuthRefresh === e;
}
function X9r() {
  return (jo() || {}).awsCredentialExport;
}
function isAwsCredentialExportFromProjectSettings() {
  let e = X9r();
  if (!e) return false;
  let t = yn("projectSettings"),
    n = yn("localSettings");
  return t?.awsCredentialExport === e || n?.awsCredentialExport === e;
}
function calculateApiKeyHelperTTL() {
  let e = process.env.CLAUDE_CODE_API_KEY_HELPER_TTL_MS;
  if (e) {
    let t = parseInt(e, 10);
    if (!Number.isNaN(t) && t >= 0) return t;
    T(`Found CLAUDE_CODE_API_KEY_HELPER_TTL_MS env var, but it was not a valid number. Got ${e}`, {
      level: "error",
    });
  }
  return i0d;
}
function getApiKeyHelperElapsedMs() {
  let e = u_e?.startedAt;
  return e ? Date.now() - e : 0;
}
async function getApiKeyFromApiKeyHelper(e) {
  if (!getConfiguredApiKeyHelper()) return null;
  let t = calculateApiKeyHelperTTL();
  if (z9) {
    if (Date.now() - z9.timestamp < t) return z9.value;
    if (!u_e)
      u_e = {
        promise: Fvi(e, false, qot),
        startedAt: null,
      };
    return z9.value;
  }
  if (u_e) return u_e.promise;
  return (
    (u_e = {
      promise: Fvi(e, true, qot),
      startedAt: Date.now(),
    }),
    u_e.promise
  );
}
async function Fvi(e, t, n) {
  try {
    let r = await l0d(e);
    if (n !== qot) return r;
    if (r !== null)
      z9 = {
        value: r,
        timestamp: Date.now(),
      };
    return r;
  } catch (r) {
    if (n !== qot) return " ";
    let o = r instanceof Error ? r.message : String(r);
    if (
      (console.error(wt.red(`apiKeyHelper failed: ${o}`)),
      T(`Error getting API key from apiKeyHelper: ${o}`, {
        level: "error",
      }),
      !t && z9 && z9.value !== " ")
    )
      return (
        (z9 = {
          ...z9,
          timestamp: Date.now(),
        }),
        z9.value
      );
    return (
      (z9 = {
        value: " ",
        timestamp: Date.now(),
      }),
      " "
    );
  } finally {
    if (n === qot) u_e = null;
  }
}
async function l0d(e) {
  let t = getConfiguredApiKeyHelper();
  if (!t) return null;
  if (Kvi()) {
    if (!ad() && !e) {
      let s = Error(
        `Security: apiKeyHelper executed before workspace trust is confirmed. If you see this message, post in ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.FEEDBACK_CHANNEL
        }.`,
      );
      return (
        rG("apiKeyHelper invoked before trust check", s),
        G("tengu_apiKeyHelper_missing_trust11", {}),
        null
      );
    }
  }
  let n = await S0(t, {
    timeout: 600000,
    reject: false,
  });
  if (n.failed) {
    let o = n.timedOut ? "timed out" : `exited ${n.exitCode}`,
      s = n.stderr?.trim();
    throw Error(s ? `${o}: ${s}` : o);
  }
  let r = n.stdout?.trim();
  if (!r) throw Error("did not return a value");
  return r;
}
function getApiKeyFromApiKeyHelperCached() {
  return z9?.value ?? null;
}
function clearApiKeyHelperCache() {
  (qot++, (z9 = null), (u_e = null));
}
function prefetchApiKeyFromApiKeyHelperIfSafe(e) {
  if (Kvi() && !ad()) return;
  getApiKeyFromApiKeyHelper(e);
}
async function p0d() {
  let e = getConfiguredAwsAuthRefresh(),
    t = F9r;
  if (!e) return false;
  if (isAwsAuthRefreshFromProjectSettings()) {
    if (!ad() && !Ir()) {
      let r = Error(
        `Security: awsAuthRefresh executed before workspace trust is confirmed. If you see this message, post in ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.FEEDBACK_CHANNEL
        }.`,
      );
      return (
        rG("awsAuthRefresh invoked before trust check", r),
        G("tengu_awsAuthRefresh_missing_trust", {}),
        false
      );
    }
  }
  if (G4e) return G4e;
  try {
    return (
      T("Fetching AWS caller identity for AWS auth refresh command"),
      await loi(),
      T("Fetched AWS caller identity, skipping AWS auth refresh command"),
      false
    );
  } catch {
    if (G4e) return G4e;
    if (UCn !== null && Date.now() - UCn < d0d) return false;
    return (
      (G4e = (async () => {
        try {
          return await refreshAwsAuth(e);
        } finally {
          if (t === F9r) UCn = Date.now();
          G4e = null;
        }
      })()),
      G4e
    );
  }
}
function refreshAwsAuth(e, t) {
  T("Running AWS auth refresh command");
  let n = LD.getInstance();
  return (
    n.startAuthentication(),
    new Promise((r) => {
      let o = q9r.exec(e, {
        timeout: f0d,
        signal: t,
        windowsHide: true,
      });
      (o.stdout.on("data", (s) => {
        let i = s.toString().trim();
        if (i)
          (n.addOutput(i),
            T(i, {
              level: "debug",
            }));
      }),
        o.stderr.on("data", (s) => {
          let i = s.toString().trim();
          if (i)
            (n.setError(i),
              T(i, {
                level: "error",
              }));
        }),
        o.on("close", (s, i) => {
          if (s === 0)
            (T("AWS auth refresh completed successfully"), n.endAuthentication(true), r(true));
          else {
            let a = t?.aborted === true,
              c = a
                ? null
                : !a && i === "SIGTERM"
                  ? wt.red(
                      "AWS auth refresh timed out after 3 minutes. Run your auth command manually in a separate terminal.",
                    )
                  : wt.red("Error running awsAuthRefresh (in settings or ~/.claude.json):");
            if (c) console.error(c);
            (n.endAuthentication(false), r(false));
          }
        }));
    })
  );
}
async function m0d() {
  let e = X9r();
  if (!e) return null;
  if (isAwsCredentialExportFromProjectSettings()) {
    if (!ad() && !Ir()) {
      let n = Error(
        `Security: awsCredentialExport executed before workspace trust is confirmed. If you see this message, post in ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.FEEDBACK_CHANNEL
        }.`,
      );
      return (
        rG("awsCredentialExport invoked before trust check", n),
        G("tengu_awsCredentialExport_missing_trust", {}),
        null
      );
    }
  }
  try {
    T("Running AWS credential export command");
    let t = await S0(e, {
      reject: false,
    });
    if (t.exitCode !== 0 || !t.stdout)
      throw Error("awsCredentialExport did not return a valid value");
    let n = Ft(t.stdout.trim()),
      r = aoi(n);
    if (!r) throw Error("awsCredentialExport did not return valid AWS STS output structure");
    T("AWS credentials retrieved from awsCredentialExport");
    let o = r.Expiration,
      s = typeof o === "string" ? Date.parse(o) : NaN;
    return {
      accessKeyId: r.AccessKeyId,
      secretAccessKey: r.SecretAccessKey,
      sessionToken: r.SessionToken,
      expiration: Number.isFinite(s) ? s : void 0,
    };
  } catch (t) {
    let n = wt.red(
      "Error getting AWS credentials from awsCredentialExport (in settings or ~/.claude.json):",
    );
    if (t instanceof Error) console.error(n, t.message);
    else console.error(n, t);
    return null;
  }
}
function clearAwsCredentialsCache() {
  refreshAndGetAwsCredentials.cache.clear();
}
function resetAwsAuthRefreshCooldown() {
  ((UCn = null), F9r++);
}
function e8r() {
  return (jo() || {}).gcpAuthRefresh;
}
function isGcpAuthRefreshFromProjectSettings() {
  let e = e8r();
  if (!e) return false;
  let t = yn("projectSettings"),
    n = yn("localSettings");
  return t?.gcpAuthRefresh === e || n?.gcpAuthRefresh === e;
}
async function checkGcpCredentialsValid() {
  try {
    let { GoogleAuth: e } = await Promise.resolve().then(() => R(qOt(), 1)),
      t = new e({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"],
      }),
      n = (async () => {
        await (await t.getClient()).getAccessToken();
      })(),
      r = Nn(g0d).then(() => {
        throw new cwi("GCP credentials check timed out");
      });
    return (await Promise.race([n, r]), true);
  } catch {
    return false;
  }
}
async function y0d() {
  let e = e8r();
  if (!e) return false;
  if (isGcpAuthRefreshFromProjectSettings()) {
    if (!ad() && !Ir()) {
      let n = Error(
        `Security: gcpAuthRefresh executed before workspace trust is confirmed. If you see this message, post in ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.FEEDBACK_CHANNEL
        }.`,
      );
      return (
        rG("gcpAuthRefresh invoked before trust check", n),
        G("tengu_gcpAuthRefresh_missing_trust", {}),
        false
      );
    }
  }
  try {
    if ((T("Checking GCP credentials validity for auth refresh"), await checkGcpCredentialsValid()))
      return (T("GCP credentials are valid, skipping auth refresh command"), false);
  } catch {}
  return refreshGcpAuth(e);
}
function refreshGcpAuth(e) {
  T("Running GCP auth refresh command");
  let t = LD.getInstance();
  return (
    t.startAuthentication(),
    new Promise((n) => {
      let r = q9r.exec(e, {
        timeout: _0d,
        windowsHide: true,
      });
      (r.stdout.on("data", (o) => {
        let s = o.toString().trim();
        if (s)
          (t.addOutput(s),
            T(s, {
              level: "debug",
            }));
      }),
        r.stderr.on("data", (o) => {
          let s = o.toString().trim();
          if (s)
            (t.setError(s),
              T(s, {
                level: "error",
              }));
        }),
        r.on("close", (o, s) => {
          if (o === 0)
            (T("GCP auth refresh completed successfully"), t.endAuthentication(true), n(true));
          else {
            let a =
              s === "SIGTERM"
                ? wt.red(
                    "GCP auth refresh timed out after 3 minutes. Run your auth command manually in a separate terminal.",
                  )
                : wt.red("Error running gcpAuthRefresh (in settings or ~/.claude.json):");
            (console.error(a), t.endAuthentication(false), n(false));
          }
        }));
    })
  );
}
function clearGcpCredentialsCache() {
  refreshGcpCredentialsIfNeeded.cache.clear();
}
function prefetchGcpCredentialsIfSafe() {
  if (!e8r()) return;
  if (isGcpAuthRefreshFromProjectSettings()) {
    if (!ad() && !Ir()) return;
  }
  refreshGcpCredentialsIfNeeded();
}
function prefetchAwsCredentialsAndBedRockInfoIfSafe() {
  let e = getConfiguredAwsAuthRefresh(),
    t = X9r();
  if (!e && !t) return;
  if (isAwsAuthRefreshFromProjectSettings() || isAwsCredentialExportFromProjectSettings()) {
    if (!ad() && !Ir()) return;
  }
  (refreshAndGetAwsCredentials(), Vp());
}
function b0d(e) {
  return /^[a-zA-Z0-9-_]+$/.test(e);
}
async function saveApiKey(e) {
  if (!b0d(e))
    throw Error(
      "Invalid API key format. API key must contain only alphanumeric characters, dashes, and underscores.",
    );
  await Qvi();
  let t = false;
  if (t) {
    let r = uye(),
      o = ile(),
      s = Buffer.from(e, "utf-8").toString("hex"),
      i = `add-generic-password -U -a "${o}" -s "${r}" -X "${s}"
`,
      a = await pv("security", ["-i"], {
        input: i,
        reject: false,
        timeout: 5000,
      });
    if (a.exitCode !== 0) {
      let l = (a.stderr || a.stdout || "").trim().replace(/\s*\n\s*/g, "; ");
      throw (
        G("tengu_api_key_keychain_error", {
          error: l,
        }),
        Error(
          `Failed to save API key to macOS Keychain${l ? ` (${l})` : ""}. Run \`claude doctor\` to diagnose keychain access.`,
        )
      );
    }
    G("tengu_api_key_saved_to_keychain", {});
  } else G("tengu_api_key_saved_to_config", {});
  let n = KB(e);
  (gn((r) => {
    let o = r.customApiKeyResponses?.approved ?? [];
    return {
      ...r,
      primaryApiKey: t ? r.primaryApiKey : e,
      customApiKeyResponses: {
        ...r.customApiKeyResponses,
        approved: o.includes(n) ? o : [...o, n],
        rejected: r.customApiKeyResponses?.rejected ?? [],
      },
    };
  }),
    getApiKeyFromConfigOrMacOSKeychain.cache.clear?.(),
    tHn(),
    getApiKeyFromConfigOrMacOSKeychainAsync.cache?.clear?.());
}
function isCustomApiKeyApproved(e) {
  let t = Dt(),
    n = KB(e);
  return t.customApiKeyResponses?.approved?.includes(n) ?? false;
}
async function removeApiKey() {
  (await Qvi(),
    gn((e) => ({
      ...e,
      primaryApiKey: void 0,
    })),
    getApiKeyFromConfigOrMacOSKeychain.cache.clear?.(),
    tHn(),
    getApiKeyFromConfigOrMacOSKeychainAsync.cache?.clear?.());
}
async function Qvi() {
  try {
    await G7s();
  } catch (e) {
    T(`Failed to remove API key from macOS keychain: ${be(e)}`, {
      level: "error",
    });
  }
}
async function saveOAuthTokensIfNeeded(e) {
  if (!hj(e.scopes))
    return (
      G("tengu_oauth_tokens_not_claude_ai", {}),
      {
        success: true,
      }
    );
  if (!e.refreshToken || !e.expiresAt)
    return (
      G("tengu_oauth_tokens_inference_only", {}),
      {
        success: true,
      }
    );
  let { accessToken: t, refreshToken: n, expiresAt: r, scopes: o, clientId: s } = e,
    i = wl(),
    a = i.name;
  try {
    let l = await i.mutate((c) => {
      let u = c.claudeAiOauth;
      return {
        ...c,
        claudeAiOauth: {
          accessToken: t,
          refreshToken: n,
          expiresAt: r,
          scopes: o,
          subscriptionType: e.subscriptionType ?? u?.subscriptionType ?? null,
          rateLimitTier: e.rateLimitTier ?? u?.rateLimitTier ?? null,
          clientId: s,
        },
      };
    });
    if (l.success)
      G("tengu_oauth_tokens_saved", {
        storageBackend: a,
      });
    else
      G("tengu_oauth_tokens_save_failed", {
        storageBackend: a,
      });
    return (
      getClaudeAIOAuthTokens.cache?.clear?.(),
      getClaudeAIOAuthTokensAsync.cache?.clear?.(),
      $te(),
      c_e(),
      l
    );
  } catch (l) {
    return (
      T(`Failed to save OAuth tokens: ${be(l)}`, {
        level: "error",
      }),
      G("tengu_oauth_tokens_save_exception", {
        storageBackend: a,
        error: be(l),
      }),
      {
        success: false,
        warning: "Failed to save OAuth tokens",
      }
    );
  }
}
function E0d() {
  FCn.clear();
}
function isOAuthRefreshKnownDead() {
  let e = getClaudeAIOAuthTokens();
  if (e) {
    let t = e.refreshToken;
    return t === "" || (!!t && FCn.has(t));
  }
  try {
    return wl().read()?.claudeAiOauth?.refreshToken === "";
  } catch {
    return false;
  }
}
function Gvi() {
  let e = process.env.CLAUDE_CODE_OAUTH_SCOPES?.split(/\s+/).filter(Boolean);
  return e?.length ? e : ["user:inference"];
}
function clearOAuthTokenCache() {
  (getClaudeAIOAuthTokens.cache?.clear?.(),
    getClaudeAIOAuthTokensAsync.cache?.clear?.(),
    dye(),
    $te(),
    c_e());
}
function resetEnvDerivedAuthCaches() {
  (getClaudeAIOAuthTokens.cache?.clear?.(),
    getClaudeAIOAuthTokensAsync.cache?.clear?.(),
    getApiKeyFromConfigOrMacOSKeychain.cache?.clear?.(),
    getApiKeyFromConfigOrMacOSKeychainAsync.cache?.clear?.(),
    clearApiKeyHelperCache(),
    clearAwsCredentialsCache(),
    resetAwsAuthRefreshCooldown(),
    clearGcpCredentialsCache(),
    $te(),
    c_e());
}
async function A0d() {
  try {
    let { mtimeMs: e } = await l1t.stat(V9r.join(BY(), ".credentials.json"));
    if (e !== Wvi) ((Wvi = e), clearOAuthTokenCache());
  } catch {
    (getClaudeAIOAuthTokens.cache?.clear?.(), getClaudeAIOAuthTokensAsync.cache?.clear?.());
    let t = (await getClaudeAIOAuthTokensAsync())?.accessToken ?? null;
    if (t !== qvi) ((qvi = t), $te(), c_e());
  }
}
function handleOAuth401Error(e) {
  let t = U9r.get(e);
  if (t) return t;
  let n = T0d(e).finally(() => {
    U9r.delete(e);
  });
  return (U9r.set(e, n), n);
}
async function waitForRotatedEnvToken(e) {
  let t = e.pollMs ?? 2000,
    n = e.readToken ?? (() => Oe.CLAUDE_CODE_OAUTH_TOKEN ?? b9() ?? void 0),
    r = e.sleeper ?? ((i) => Nn(i)),
    o = Date.now() + e.timeoutMs;
  while (Date.now() < o) {
    let i = n();
    if (i && i !== e.failedAccessToken) return true;
    await r(Math.min(t, Math.max(1, o - Date.now())));
  }
  let s = n();
  return Boolean(s && s !== e.failedAccessToken);
}
function H0d() {
  let e = Oe.CLAUDE_CODE_OAUTH_401_WAIT_MS;
  if (e !== void 0) return e;
  return Oe.CLAUDE_CODE_REMOTE_SESSION_ID ? 60000 : 0;
}
function noteAuthRecoveryOutcome(e) {
  let t = e.nowMs ?? Date.now();
  if (e.recovered) return ((r1t = null), "continue");
  if (!(e.isRemoteChild ?? Boolean(Oe.CLAUDE_CODE_REMOTE_SESSION_ID))) return "continue";
  let r = e.thresholdMs ?? Oe.CLAUDE_CODE_AUTH_FAIL_EXIT_MS ?? 600000;
  if (r <= 0) return "continue";
  if (r1t === null) return ((r1t = t), "continue");
  if (t - r1t >= r) return "exit";
  return "continue";
}
function resetAuthFailureTracking() {
  r1t = null;
}
async function T0d(e) {
  clearOAuthTokenCache();
  let t = await getClaudeAIOAuthTokensAsync();
  if (!t?.refreshToken) {
    let n = cCt();
    if (n)
      try {
        let o = await n();
        if (o && o !== e)
          return (
            (process.env.CLAUDE_CODE_OAUTH_TOKEN = o),
            clearOAuthTokenCache(),
            G("tengu_oauth_401_sdk_callback_refreshed", {}),
            xe("oauth_401_recovery"),
            noteAuthRecoveryOutcome({
              recovered: true,
            }),
            true
          );
        T(
          o === null
            ? "SDK getOAuthToken callback returned null (no token available)"
            : "SDK getOAuthToken callback returned the same expired token; treating as no refresh",
          {
            level: o === null ? "debug" : "error",
          },
        );
      } catch (o) {
        (Le("oauth_401_recovery", "oauth_401_sdk_callback_failed"),
          T(`SDK getOAuthToken callback failed: ${o instanceof Error ? o.message : String(o)}`, {
            level: "error",
          }));
      }
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN || b9())
      try {
        let o = (await wl().readAsync())?.claudeAiOauth;
        if (o?.accessToken && o.accessToken !== e) {
          if (process.env.CLAUDE_CODE_OAUTH_TOKEN)
            process.env.CLAUDE_CODE_OAUTH_TOKEN = o.accessToken;
          if (b9()) (iee(o.accessToken), vCt(o.scopes));
          return (
            clearOAuthTokenCache(),
            G("tengu_oauth_401_recovered_from_disk", {}),
            xe("oauth_401_recovery"),
            noteAuthRecoveryOutcome({
              recovered: true,
            }),
            true
          );
        }
      } catch (o) {
        (Le("oauth_401_recovery", "oauth_401_disk_read_failed"), ke(o));
      }
    let r = Boolean(process.env.CLAUDE_CODE_OAUTH_TOKEN) || Boolean(b9());
    if (r) {
      let o = H0d();
      if (o > 0) {
        if (
          (T(`OAuth 401 recovery: waiting up to ${o}ms for a rotated env token`),
          await waitForRotatedEnvToken({
            failedAccessToken: e,
            timeoutMs: o,
          }))
        ) {
          if (b9()) {
            let s = Oe.CLAUDE_CODE_OAUTH_TOKEN;
            if (s) iee(s);
          }
          return (
            clearOAuthTokenCache(),
            G("tengu_oauth_401_recovered_from_rotation", {}),
            xe("oauth_401_recovery"),
            noteAuthRecoveryOutcome({
              recovered: true,
            }),
            true
          );
        }
      }
    }
    if (
      (Le(
        "oauth_401_recovery",
        r ? "oauth_401_no_refresh_token_bg_worker" : "oauth_401_no_refresh_token_interactive",
      ),
      noteAuthRecoveryOutcome({
        recovered: false,
      }) === "exit")
    )
      (G("tengu_oauth_401_zombie_exit", {}),
        T(
          "OAuth 401 unrecovered past CLAUDE_CODE_AUTH_FAIL_EXIT_MS \u2014 exiting so the runner recycles this session with fresh credentials",
          {
            level: "error",
          },
        ),
        setTimeout(() => process.exit(1), 2000));
    return false;
  }
  if (t.accessToken !== e)
    return (
      G("tengu_oauth_401_recovered_from_keychain", {}),
      xe("oauth_401_recovery"),
      noteAuthRecoveryOutcome({
        recovered: true,
      }),
      true
    );
  return checkAndRefreshOAuthTokenIfNeeded(0, true, e);
}
async function readFreshOAuthAccessToken() {
  return (clearOAuthTokenCache(), (await getClaudeAIOAuthTokensAsync())?.accessToken);
}
function oauthRefreshLockOptions(e) {
  return {
    lockfilePath: V9r.join(e, ".oauth_refresh.lock"),
    realpath: false,
    stale: 10000 /* 1e4 */,
    onCompromised: (t) =>
      T(`OAuth refresh lock compromised: ${t.message}`, {
        level: "error",
      }),
  };
}
async function acquireOAuthRefreshLock(e) {
  let t = await Ay(e, oauthRefreshLockOptions(e)),
    r = `${await l1t.realpath(e).catch(() => e)}.lock`,
    o = null;
  try {
    o = await Ay(r, {
      ...oauthRefreshLockOptions(e),
      lockfilePath: r,
    });
  } catch (s) {
    if (s.code === "ELOCKED")
      throw (
        G("tengu_oauth_refresh_legacy_lock_contended", {}),
        await t().catch((i) => (Vo(i) ? T(`OAuth refresh new-lock release failed: ${i}`) : ke(i))),
        s
      );
    if (Vo(s)) T(`OAuth refresh legacy-lock acquire failed: ${s}`);
    else ke(s);
  }
  return async () => {
    if (o)
      await o().catch((s) => (Vo(s) ? T(`OAuth refresh legacy-lock release failed: ${s}`) : ke(s)));
    await t();
  };
}
async function withOAuthRefreshLock(e) {
  let t = BY();
  await qs().mkdir(t);
  let n,
    r = 0;
  while (!n) {
    r++;
    try {
      n = await acquireOAuthRefreshLock(t);
    } catch (o) {
      if (o.code === "ELOCKED") {
        if (r < v0d) {
          await Nn(1000 + Math.random() * 1000);
          continue;
        }
        throw Error(`Lock acquisition failed after ${r} attempts: another process is refreshing`);
      }
      throw o;
    }
  }
  try {
    clearOAuthTokenCache();
    let o = await getClaudeAIOAuthTokensAsync();
    return await e({
      lockedTokens: o,
      lockAttempts: r,
    });
  } finally {
    try {
      await n();
    } catch (o) {
      if (Vo(o)) T(`OAuth refresh lock release failed: ${o}`);
      else ke(o);
    }
  }
}
function checkAndRefreshOAuthTokenIfNeeded(e = 0, t = false, n) {
  return checkAndRefreshOAuthTokenIfNeededWithOutcome(e, t, n).then((r) => r === "refreshed");
}
function checkAndRefreshOAuthTokenIfNeededWithOutcome(e = 0, t = false, n) {
  if (e === 0 && !t) {
    if (n1t) return n1t;
    return (
      (n1t = G9r(e, t).finally(() => {
        n1t = null;
      })),
      n1t
    );
  }
  return G9r(e, t, n);
}
function isExpectedOAuthRefreshError(e, { isDefaultFirstPartyClient: t }) {
  return NIe(e) || (!t && EUr(e)) || R_(e);
}
async function G9r(e, t, n) {
  await A0d();
  let o = await getClaudeAIOAuthTokensAsync();
  if (!t) {
    if (o && !ate(o.expiresAt)) return "not_needed";
    if (!o?.refreshToken) return "no_refresh_token";
  }
  if (!o?.refreshToken) return "no_refresh_token";
  if (FCn.has(o.refreshToken)) return "known_dead_refresh_token";
  if (!hj(o.scopes) && !o.subscriptionType) return "not_refreshable";
  let s = n ?? o.accessToken;
  clearOAuthTokenCache();
  let i = await getClaudeAIOAuthTokensAsync();
  if (!i?.refreshToken) return "no_refresh_token";
  if (i.accessToken !== s) return (G("tengu_oauth_token_refresh_race_resolved", {}), "refreshed");
  if (!t && !ate(i.expiresAt)) return "not_needed";
  let a = BY();
  await qs().mkdir(a);
  let l;
  try {
    (G("tengu_oauth_token_refresh_lock_acquiring", {}),
      (l = await acquireOAuthRefreshLock(a)),
      G("tengu_oauth_token_refresh_lock_acquired", {}));
  } catch (d) {
    if (d.code === "ELOCKED") {
      if (e < 5)
        return (
          G("tengu_oauth_token_refresh_lock_retry", {
            retryCount: e + 1,
          }),
          await Nn(1000 + Math.random() * 1000),
          G9r(e + 1, t, s)
        );
      return (
        G("tengu_oauth_token_refresh_lock_retry_limit_reached", {
          maxRetries: 5,
        }),
        It("oauth_token_refresh", "oauth_refresh_lock_timeout"),
        "lock_timeout"
      );
    }
    return (
      ke(d),
      G("tengu_oauth_token_refresh_lock_error", {
        error: be(d),
      }),
      Le("oauth_token_refresh", "oauth_refresh_lock_error"),
      "lock_error"
    );
  }
  let c = null,
    u = true;
  try {
    clearOAuthTokenCache();
    let d = await getClaudeAIOAuthTokensAsync();
    if (!d?.refreshToken) return "no_refresh_token";
    if (((c = d.refreshToken), d.accessToken !== s))
      return (G("tengu_oauth_token_refresh_race_resolved", {}), "refreshed");
    if (!t && !ate(d.expiresAt)) return "not_needed";
    (G("tengu_oauth_token_refresh_starting", {}),
      (u = Boolean((hj(d.scopes) || d.subscriptionType) && !d.clientId)));
    let p = u ? Uo([...Aae, ...cFe(d.scopes)]) : d.scopes,
      f = await ite(d.refreshToken, {
        scopes: p,
        clientId: d.clientId,
      });
    return (await saveOAuthTokensIfNeeded(f), clearOAuthTokenCache(), "refreshed");
  } catch (d) {
    if (
      isExpectedOAuthRefreshError(d, {
        isDefaultFirstPartyClient: u,
      })
    )
      T(`OAuth refresh failed (expected): ${be(d)}`, {
        level: "error",
      });
    else ke(d);
    clearOAuthTokenCache();
    let p = await getClaudeAIOAuthTokensAsync();
    if (p && p.accessToken !== s)
      return (G("tengu_oauth_token_refresh_race_recovered", {}), "refreshed");
    if (NIe(d) && c) {
      (FCn.add(c), G("tengu_oauth_refresh_token_marked_dead_invalid_grant", {}));
      try {
        let f = false,
          m = await wl().mutate((g) => {
            let h = g.claudeAiOauth;
            if (!h || h.refreshToken !== c) return g;
            return (
              (f = true),
              {
                ...g,
                claudeAiOauth: {
                  ...h,
                  refreshToken: "",
                  accessToken: "",
                  expiresAt: 0,
                },
              }
            );
          });
        if (f && m.success) G("tengu_oauth_refresh_token_cleared_on_disk", {});
        else if (f)
          T("OAuth dead-token disk clear: backend write failed", {
            level: "error",
          });
      } catch (f) {
        T(`OAuth dead-token disk clear failed: ${be(f)}`, {
          level: "error",
        });
      }
    }
    return NIe(d) ? "known_dead_refresh_token" : "refresh_failed";
  } finally {
    G("tengu_oauth_token_refresh_lock_releasing", {});
    try {
      (await l(), G("tengu_oauth_token_refresh_lock_released", {}));
    } catch (d) {
      (T(`OAuth refresh lock release failed: ${d}`, {
        level: "error",
      }),
        G("tengu_oauth_token_refresh_lock_release_error", {}));
    }
  }
}
function isClaudeAISubscriber() {
  if (!isAnthropicAuthEnabled()) return false;
  return hj(getClaudeAIOAuthTokens()?.scopes);
}
function hasProfileScope() {
  let e = getClaudeAIOAuthTokens()?.scopes;
  return Array.isArray(e) && e.includes(qwe);
}
function hasStoredOAuthToken() {
  return getClaudeAIOAuthTokens()?.accessToken != null;
}
function hasOAuthScope(e) {
  let t = getClaudeAIOAuthTokens()?.scopes;
  return Array.isArray(t) && t.includes(e);
}
function getStoredOAuthTokenExpiresAt() {
  return getClaudeAIOAuthTokens()?.expiresAt ?? null;
}
function getStoredOAuthSubscriptionType() {
  return getClaudeAIOAuthTokens()?.subscriptionType ?? null;
}
function hasStoredOAuthRefreshToken() {
  return getClaudeAIOAuthTokens()?.refreshToken != null;
}
function is1PApiCustomer() {
  if (!Jl()) return false;
  if (isClaudeAISubscriber()) return false;
  return true;
}
function getOauthAccountInfo() {
  return isAnthropicAuthEnabled() ? Dt().oauthAccount : void 0;
}
function isOverageProvisioningAllowed() {
  let t = getOauthAccountInfo()?.billingType;
  if (!isClaudeAISubscriber() || !t) return false;
  if (
    t !== "stripe_subscription" &&
    t !== "stripe_subscription_contracted" &&
    t !== "apple_subscription" &&
    t !== "google_play_subscription"
  )
    return false;
  return true;
}
function hasOpusAccess() {
  let e = getSubscriptionType();
  return e === "max" || e === "enterprise" || e === "team" || e === "pro" || e === null;
}
function getSubscriptionType() {
  if (mUr()) return fUr();
  if (!isAnthropicAuthEnabled()) return null;
  let e = getClaudeAIOAuthTokens();
  if (!e) return null;
  return e.subscriptionType ?? null;
}
function isMaxSubscriber() {
  return getSubscriptionType() === "max";
}
function isTeamSubscriber() {
  return getSubscriptionType() === "team";
}
function isTeamPremiumSubscriber() {
  return getSubscriptionType() === "team" && getRateLimitTier() === "default_claude_max_5x";
}
function isEnterpriseSubscriber() {
  return getSubscriptionType() === "enterprise";
}
function isEnterprisePAYGSubscriber() {
  return getSubscriptionType() === "enterprise" && getSeatTier() === "enterprise_usage_based";
}
function isProSubscriber() {
  return getSubscriptionType() === "pro";
}
function getRateLimitTier() {
  let e = pUr();
  if (e !== null) return e;
  if (!isAnthropicAuthEnabled()) return null;
  let t = getClaudeAIOAuthTokens();
  if (!t) return null;
  return t.rateLimitTier ?? null;
}
function getSeatTier() {
  return getOauthAccountInfo()?.seatTier ?? null;
}
function getSubscriptionName() {
  switch (getSubscriptionType()) {
    case "enterprise":
      return "Claude Enterprise";
    case "team":
      return "Claude Team";
    case "max":
      return "Claude Max";
    case "pro":
      return "Claude Pro";
    default:
      return "Claude API";
  }
}
function isUsing3PServices() {
  return !Jl();
}
function l8r() {
  if (Tl()) return yn("policySettings")?.otelHeadersHelper;
  return (jo() || {}).otelHeadersHelper;
}
function isOtelHeadersHelperFromProjectOrLocalSettings() {
  let e = l8r();
  if (!e) return false;
  let t = yn("projectSettings"),
    n = yn("localSettings");
  return t?.otelHeadersHelper === e || n?.otelHeadersHelper === e;
}
function getOtelHeadersHelperLastFailure() {
  if (!l8r()) return null;
  return s1t;
}
function clearOtelHeadersCache() {
  ((o1t = null), (W9r = 0), (Wot = null), (s1t = null));
}
async function getOtelHeadersFromHelper() {
  let e = l8r();
  if (!e) return {};
  let t = parseInt(process.env.CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS || x0d.toString());
  if (o1t && Date.now() - W9r < t) return o1t;
  if (Wot) return Wot;
  if (isOtelHeadersHelperFromProjectOrLocalSettings()) {
    if (!ad()) return {};
  }
  return (
    (Wot = (async () => {
      try {
        let n = e.trim(),
          r = false;
        try {
          r = (await l1t.stat(n)).isFile();
        } catch {}
        let o = null;
        if (r)
          try {
            let a = await pv(n, [], {
              timeout: 30000,
              reject: false,
            });
            if (!(a.failed && !a.timedOut && typeof a.exitCode !== "number" && !a.signal)) o = a;
          } catch {}
        if (!o)
          o = await S0(e, {
            timeout: 30000,
            reject: false,
          });
        if (o.failed) {
          let a;
          if (o.timedOut) a = "timed out";
          else if (typeof o.exitCode === "number") a = `exited ${o.exitCode}`;
          else if (o.signal) a = `was killed by ${o.signal}`;
          else a = "could not be started";
          let l = o.stderr?.trim();
          throw Error(l ? `${a}: ${l}` : a);
        }
        let s = o.stdout?.toString().trim();
        if (!s) throw Error("otelHeadersHelper did not return a valid value");
        let i = Ft(s);
        if (typeof i !== "object" || i === null || Array.isArray(i))
          throw Error("otelHeadersHelper must return a JSON object with string key-value pairs");
        for (let [a, l] of Object.entries(i))
          if (typeof l !== "string")
            throw Error(`otelHeadersHelper returned non-string value for key "${a}": ${typeof l}`);
        return ((o1t = i), (W9r = Date.now()), (s1t = null), o1t);
      } catch (n) {
        let r = be(n);
        if (s1t === null && Ir())
          process.stderr.write(
            wt.red(`otelHeadersHelper failed (OpenTelemetry export headers unavailable): ${r}`) +
              `
`,
          );
        throw (
          (s1t = r),
          T(`Error getting OpenTelemetry headers from otelHeadersHelper (in settings): ${r}`, {
            level: "error",
          }),
          n
        );
      } finally {
        Wot = null;
      }
    })()),
    Wot
  );
}
function rwi(e) {
  return e === "max" || e === "pro";
}
function isConsumerSubscriber() {
  let e = getSubscriptionType();
  return isClaudeAISubscriber() && e !== null && rwi(e);
}
function getAccountInformation() {
  if (fr() !== "firstParty") return;
  let { source: t } = getAuthTokenSource(),
    n = {};
  if (t === "CLAUDE_CODE_OAUTH_TOKEN" || t === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR")
    n.tokenSource = t;
  else if (isClaudeAISubscriber()) n.subscription = getSubscriptionName();
  else if (t !== "profile") n.tokenSource = t;
  let { key: r, source: o } = getAnthropicApiKeyWithSource();
  if (r) n.apiKeySource = o;
  if (t === "claude.ai" || o === "/login managed key") {
    let i = getOauthAccountInfo()?.organizationName;
    if (i) n.organization = i;
  }
  let s = getOauthAccountInfo()?.emailAddress;
  if ((t === "claude.ai" || o === "/login managed key") && s) n.email = s;
  return n;
}
function toAccountInfo() {
  let e = getAccountInformation();
  return {
    email: e?.email,
    organization: e?.organization,
    subscriptionType: e?.subscription,
    tokenSource: e?.tokenSource,
    apiKeySource: e?.apiKeySource,
    apiProvider: fr(),
  };
}
async function getAnthropicApiKeyWithSourceAsync(e = {}) {
  if (md()) {
    if (process.env.ANTHROPIC_API_KEY)
      return {
        key: process.env.ANTHROPIC_API_KEY,
        source: "ANTHROPIC_API_KEY",
      };
    if (getConfiguredApiKeyHelper())
      return {
        key: e.skipRetrievingKeyFromApiKeyHelper ? null : getApiKeyFromApiKeyHelperCached(),
        source: "apiKeyHelper",
      };
    return {
      key: null,
      source: "none",
    };
  }
  let t = nv() ? void 0 : process.env.ANTHROPIC_API_KEY;
  if (fJe() && t)
    return {
      key: t,
      source: "ANTHROPIC_API_KEY",
    };
  if (ut(false)) {
    let s = iPt();
    if (s)
      return {
        key: s,
        source: "ANTHROPIC_API_KEY",
      };
    if (
      !t &&
      !process.env.CLAUDE_CODE_OAUTH_TOKEN &&
      !process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR &&
      !process.env.ANTHROPIC_AUTH_TOKEN &&
      !shouldUseWIFAuth() &&
      Jl()
    )
      throw Error(
        "ANTHROPIC_API_KEY, ANTHROPIC_AUTH_TOKEN, CLAUDE_CODE_OAUTH_TOKEN, or WIF env vars (ANTHROPIC_FEDERATION_RULE_ID + ANTHROPIC_ORGANIZATION_ID) required",
      );
    if (t)
      return {
        key: t,
        source: "ANTHROPIC_API_KEY",
      };
    return {
      key: null,
      source: "none",
    };
  }
  if (t && Dt().customApiKeyResponses?.approved?.includes(KB(t)))
    return {
      key: t,
      source: "ANTHROPIC_API_KEY",
    };
  let n = iPt();
  if (n)
    return {
      key: n,
      source: "ANTHROPIC_API_KEY",
    };
  if (getConfiguredApiKeyHelper()) {
    if (e.skipRetrievingKeyFromApiKeyHelper)
      return {
        key: null,
        source: "apiKeyHelper",
      };
    return {
      key: getApiKeyFromApiKeyHelperCached(),
      source: "apiKeyHelper",
    };
  }
  let o = await getApiKeyFromConfigOrMacOSKeychainAsync();
  if (o) return o;
  return {
    key: null,
    source: "none",
  };
}
async function getAnthropicApiKeyAsync() {
  let { key: e } = await getAnthropicApiKeyWithSourceAsync();
  return e;
}
async function hasAnthropicApiKeyAuthAsync() {
  let { key: e, source: t } = await getAnthropicApiKeyWithSourceAsync({
    skipRetrievingKeyFromApiKeyHelper: true,
  });
  return e !== null && t !== "none";
}
async function isAnthropicAuthEnabledAsync() {
  if (md()) return false;
  if (process.env.ANTHROPIC_UNIX_SOCKET) return !!process.env.CLAUDE_CODE_OAUTH_TOKEN;
  if (shouldUseWIFAuth()) return false;
  let e = !Jl(),
    n = (jo() || {}).apiKeyHelper,
    r = nv() ? void 0 : process.env.ANTHROPIC_AUTH_TOKEN,
    o;
  try {
    o = (
      await getAnthropicApiKeyWithSourceAsync({
        skipRetrievingKeyFromApiKeyHelper: true,
      })
    ).source;
  } catch {
    return false;
  }
  let s = o === "ANTHROPIC_API_KEY" || o === "apiKeyHelper",
    i = process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR,
    a = ((r || s) && !isFirstPartyManagedOAuthContext()) || ((n || i) && !Vot());
  return !(e || a);
}
async function getAuthTokenSourceAsync() {
  if (md()) {
    if (getConfiguredApiKeyHelper())
      return {
        source: "apiKeyHelper",
        hasToken: true,
      };
    return {
      source: "none",
      hasToken: false,
    };
  }
  if (process.env.ANTHROPIC_AUTH_TOKEN && !isFirstPartyManagedOAuthContext() && !nv())
    return {
      source: "ANTHROPIC_AUTH_TOKEN",
      hasToken: true,
    };
  if (process.env.CLAUDE_CODE_OAUTH_TOKEN)
    return {
      source: "CLAUDE_CODE_OAUTH_TOKEN",
      hasToken: true,
    };
  if (b9()) {
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR)
      return {
        source: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
        hasToken: true,
      };
    return {
      source: "CCR_OAUTH_TOKEN_FILE",
      hasToken: true,
    };
  }
  if (getConfiguredApiKeyHelper() && !Vot())
    return {
      source: "apiKeyHelper",
      hasToken: true,
    };
  if (shouldUseWIFAuth())
    return {
      source: "profile",
      hasToken: true,
    };
  let n = await getClaudeAIOAuthTokensAsync();
  if (hj(n?.scopes) && n?.accessToken)
    return {
      source: "claude.ai",
      hasToken: true,
    };
  return {
    source: "none",
    hasToken: false,
  };
}
async function isClaudeAISubscriberAsync() {
  if (!(await isAnthropicAuthEnabledAsync())) return false;
  return hj((await getClaudeAIOAuthTokensAsync())?.scopes);
}
async function hasProfileScopeAsync() {
  let e = (await getClaudeAIOAuthTokensAsync())?.scopes;
  return Array.isArray(e) && e.includes(qwe);
}
async function is1PApiCustomerAsync() {
  if (!Jl()) return false;
  if (await isClaudeAISubscriberAsync()) return false;
  return true;
}
async function getOauthAccountInfoAsync() {
  return (await isAnthropicAuthEnabledAsync()) ? Dt().oauthAccount : void 0;
}
async function isOverageProvisioningAllowedAsync() {
  let t = (await getOauthAccountInfoAsync())?.billingType;
  if (!(await isClaudeAISubscriberAsync()) || !t) return false;
  if (
    t !== "stripe_subscription" &&
    t !== "stripe_subscription_contracted" &&
    t !== "apple_subscription" &&
    t !== "google_play_subscription"
  )
    return false;
  return true;
}
async function getSubscriptionTypeAsync() {
  if (mUr()) return fUr();
  if (!(await isAnthropicAuthEnabledAsync())) return null;
  let e = await getClaudeAIOAuthTokensAsync();
  if (!e) return null;
  return e.subscriptionType ?? null;
}
async function hasOpusAccessAsync() {
  let e = await getSubscriptionTypeAsync();
  return e === "max" || e === "enterprise" || e === "team" || e === "pro" || e === null;
}
async function getRateLimitTierAsync() {
  let e = pUr();
  if (e !== null) return e;
  if (!(await isAnthropicAuthEnabledAsync())) return null;
  let t = await getClaudeAIOAuthTokensAsync();
  if (!t) return null;
  return t.rateLimitTier ?? null;
}
async function getSeatTierAsync() {
  return (await getOauthAccountInfoAsync())?.seatTier ?? null;
}
async function isMaxSubscriberAsync() {
  return (await getSubscriptionTypeAsync()) === "max";
}
async function isTeamSubscriberAsync() {
  return (await getSubscriptionTypeAsync()) === "team";
}
async function isTeamPremiumSubscriberAsync() {
  return (
    (await getSubscriptionTypeAsync()) === "team" &&
    (await getRateLimitTierAsync()) === "default_claude_max_5x"
  );
}
async function isEnterpriseSubscriberAsync() {
  return (await getSubscriptionTypeAsync()) === "enterprise";
}
async function isEnterprisePAYGSubscriberAsync() {
  return (
    (await getSubscriptionTypeAsync()) === "enterprise" &&
    (await getSeatTierAsync()) === "enterprise_usage_based"
  );
}
async function isProSubscriberAsync() {
  return (await getSubscriptionTypeAsync()) === "pro";
}
async function getSubscriptionNameAsync() {
  switch (await getSubscriptionTypeAsync()) {
    case "enterprise":
      return "Claude Enterprise";
    case "team":
      return "Claude Team";
    case "max":
      return "Claude Max";
    case "pro":
      return "Claude Pro";
    default:
      return "Claude API";
  }
}
async function isConsumerSubscriberAsync() {
  let e = await getSubscriptionTypeAsync();
  return (await isClaudeAISubscriberAsync()) && e !== null && rwi(e);
}
async function getAccountInformationAsync() {
  if (fr() !== "firstParty") return;
  let { source: t } = await getAuthTokenSourceAsync(),
    n = {};
  if (t === "CLAUDE_CODE_OAUTH_TOKEN" || t === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR")
    n.tokenSource = t;
  else if (await isClaudeAISubscriberAsync()) n.subscription = await getSubscriptionNameAsync();
  else if (t !== "profile") n.tokenSource = t;
  let { key: r, source: o } = await getAnthropicApiKeyWithSourceAsync();
  if (r) n.apiKeySource = o;
  if (t === "claude.ai" || o === "/login managed key") {
    let i = (await getOauthAccountInfoAsync())?.organizationName;
    if (i) n.organization = i;
  }
  let s = (await getOauthAccountInfoAsync())?.emailAddress;
  if ((t === "claude.ai" || o === "/login managed key") && s) n.email = s;
  return n;
}
function q0d() {
  let e = false;
  try {
    e = hasAnthropicApiKeyAuth();
  } catch {}
  if (
    e ||
    !!Oe.ANTHROPIC_AUTH_TOKEN ||
    !!Oe.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR ||
    !!getConfiguredApiKeyHelper()
  )
    return true;
  return fr() === "firstParty" && !shouldUseWIFAuth() && !isAnthropicAuthEnabled();
}
async function validateForceLoginOrg() {
  let e = yn("policySettings"),
    t = e?.forceLoginOrgUUID,
    n = t !== void 0 || e?.forceLoginMethod !== void 0;
  if (Oe.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) {
    if (n) It("auth_force_login_org", "managed_by_host_under_pin");
    return {
      valid: true,
    };
  }
  if (process.env.ANTHROPIC_UNIX_SOCKET) {
    let u = {
      api_provider: $e(fr()),
      auth_token_source: $e(getAuthTokenSource().source),
    };
    if (!isAnthropicAuthEnabled() && n) It("auth_force_login_org", "unix_socket_3p_under_pin", u);
    else if (isAnthropicAuthEnabled() && t !== void 0)
      It("auth_force_login_org", "unix_socket_ssh_under_pin", u);
    else if (e === null && fLt().length > 0)
      It("auth_force_login_org", "unix_socket_unreadable_policy", u);
    else xe("auth_force_login_org");
    return {
      valid: true,
    };
  }
  if (!isAnthropicAuthEnabled()) {
    if (n && q0d())
      return {
        valid: false,
        message: `This machine's managed settings require a first-party login, but an
Anthropic-issued credential (ANTHROPIC_API_KEY, ANTHROPIC_AUTH_TOKEN,
or apiKeyHelper) is configured. A non-OAuth Anthropic credential
cannot satisfy the org pin.

Remove the credential and run: claude auth login

If this is a third-party desktop session: forceLoginOrgUUID targets first-party OAuth and should be removed from managed-settings.json.`,
      };
    return {
      valid: true,
    };
  }
  if (t === void 0) {
    if (e === null) {
      let d = fLt()[0];
      if (d) {
        let p = d.message.includes("could not be read"),
          f = d.message.match(V0d),
          m = lwi.find((y) => y === f?.[1]),
          g = p ? (Oo(m) ?? We("other")) : We("malformed");
        return (
          await Qu("auth_force_login_org", "policy_unreadable_fail_close", {
            errno: g,
          }),
          {
            valid: false,
            message: `Unable to read managed policy settings.
This machine may require organization login enforcement, but the policy file failed to load.
Contact your administrator.

Detail: ${d.file ? `${d.file}: ${d.message}` : d.message}`,
          }
        );
      }
    }
    return {
      valid: true,
    };
  }
  let r = typeof t === "string" ? [t] : t;
  if (r.length === 0)
    return {
      valid: false,
      message: `forceLoginOrgUUID in managed settings is set to an empty array.
No organizations are permitted. This is almost certainly a misconfiguration.
Contact your administrator.`,
    };
  let o = r.length === 1 ? `organization ${r[0]}` : `one of these organizations: ${r.join(", ")}`;
  await checkAndRefreshOAuthTokenIfNeeded();
  let s = getClaudeAIOAuthTokens();
  if (!s)
    return {
      valid: true,
    };
  let { source: i } = getAuthTokenSource(),
    a = i === "CLAUDE_CODE_OAUTH_TOKEN" || i === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    l = await FSn(s.accessToken);
  if (!l)
    return {
      valid: false,
      message: `Unable to verify organization for the current authentication token.
This machine requires ${o} but the token could not be validated.
This may be a network error, or the token may have been revoked.
Try again, or run: claude auth login`,
    };
  let c = l.organization_uuid;
  if (r.includes(c))
    return {
      valid: true,
    };
  if (a)
    return {
      valid: false,
      message: `The ${i === "CLAUDE_CODE_OAUTH_TOKEN" ? "CLAUDE_CODE_OAUTH_TOKEN" : "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"} environment variable provides a token for a
different organization than required by this machine's managed settings.

Required: ${o}
Token organization: ${c}

Remove the environment variable or obtain a token for a permitted organization.`,
    };
  return {
    valid: false,
    message: `Your authentication token belongs to organization ${c},
but this machine requires ${o}.

Please log in with a permitted organization: claude auth login`,
  };
}
var q9r,
  l1t,
  V9r,
  i0d = 300000,
  Vvi,
  zvi,
  SDK_OAUTH_REFRESH_ENTRYPOINTS,
  z9 = null,
  u_e = null,
  qot = 0,
  c0d = 3600000,
  jvi = 300000,
  u0d = 60000,
  d0d = 30000,
  UCn = null,
  G4e = null,
  F9r = 0,
  f0d = 180000,
  refreshAndGetAwsCredentials,
  g0d = 5000,
  h0d = 3600000,
  _0d = 180000,
  refreshGcpCredentialsIfNeeded,
  getApiKeyFromConfigOrMacOSKeychain,
  FCn,
  getClaudeAIOAuthTokens,
  Wvi = 0,
  qvi = null,
  U9r,
  r1t = null,
  getClaudeAIOAuthTokensAsync,
  n1t = null,
  v0d = 5,
  o1t = null,
  W9r = 0,
  Wot = null,
  s1t = null,
  x0d = 1740000,
  getApiKeyFromConfigOrMacOSKeychainAsync,
  lwi,
  V0d,
  cwi;
