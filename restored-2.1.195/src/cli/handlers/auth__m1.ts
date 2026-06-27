// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nAo
// matched 2.1.88 source: src/cli/handlers/auth.ts
// class=modified (alt of src/cli/handlers/auth.ts)  jaccard=0.0464  score=0.1283  fileCov=0.0677
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: performLogout, fleetHostLogout, clearAuthRelatedCaches, call
// [unwrapped __esm module nAo] deps: @opentelemetry/sdk-logs/build/src/LogRecordImpl.js, utils/managedEnv.ts, services/api/metricsOptOut.ts, lodash-es/_arrayPush.js, services/analytics/index.ts, utils/http.ts, utils/platform.ts, utils/caCerts.ts, utils/debugFilter.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/telemetryAttributes.ts, utils/sleep.ts, utils/mtls.ts, utils/log.ts, utils/proxy.ts, utils/settings/settings.ts, utils/fsOperations.ts, @ant/claude-for-chrome-mcp/src/mcpSocketClient.ts, follow-redirects/index.js, @opentelemetry/otlp-exporter-base/build/src/otlp-export-delegate.js, utils/telemetry/perfettoTracing.ts, utils/telemetry/logger.ts, XUa, utils/telemetry/sessionTracing.ts, @smithy/core/dist-cjs/submodules/cbor/index.js
((ioe = R(qi(), 1)),
  (F6a = R(Nh(), 1)),
  (NJ = R(Hst(), 1)),
  (kPe = R(e5t(), 1)),
  (xPe = R(Bte(), 1)),
  (j6a = R(require("http"))),
  (G6a = R(require("https"))),
  (W6a = R(_Lt(), 1)));
eAo = class eAo extends Error {};
async function performLogout({
  clearOnboarding: e = false,
  preserveInProcessTokens: t = false,
  preserveNonAnthropicAuth: n = false,
}) {
  let { flushTelemetry: r } = await Promise.resolve().then(() => (nAo(), tAo));
  if ((await r(), Js())) {
    await clearAuthRelatedCaches();
    return;
  }
  if (!t && fr() === "firstParty") {
    let s = wl();
    s.invalidateCache?.();
    let i = await s.readAsync(),
      a = i?.claudeAiOauth;
    if (a?.refreshToken) await t1(a.refreshToken, a.clientId);
    let l = i?.designOauth;
    if (l?.refreshToken) await t1(l.refreshToken, l.clientId);
  }
  if (!t) (delete process.env.CLAUDE_CODE_OAUTH_TOKEN, iee(null));
  await r8r();
  let o = wl();
  if (n) {
    if (fr() === "firstParty") {
      o.invalidateCache?.();
      let s = (await o.readAsync())?.designOauth;
      if (s?.refreshToken) await t1(s.refreshToken, s.clientId);
    }
    await o
      .mutate((s) => {
        let i = {
          ...s,
        };
        return (
          delete i.claudeAiOauth,
          delete i.organizationUuid,
          delete i.trustedDeviceToken,
          delete i.enterpriseGateway,
          delete i.designOauth,
          i
        );
      })
      .catch((s) => {
        ke(s);
      });
  } else await o.delete();
  (xge(null),
    await clearAuthRelatedCaches(),
    gn((s) => {
      let i = {
        ...s,
      };
      if (e) {
        if (
          ((i.hasCompletedOnboarding = false),
          (i.subscriptionNoticeCount = 0),
          (i.hasAvailableSubscription = false),
          i.customApiKeyResponses?.approved)
        )
          i.customApiKeyResponses = {
            ...i.customApiKeyResponses,
            approved: [],
          };
        let a = LWt;
        if (i.seenNotifications?.[a] !== void 0) {
          let { [a]: l, ...c } = i.seenNotifications;
          i.seenNotifications = c;
        }
      }
      return (
        (i.oauthAccount = void 0),
        (i.additionalModelOptionsCache = void 0),
        (i.additionalModelCostsCache = void 0),
        (i.modelAccessCache = void 0),
        (i.clientDataCache = void 0),
        (i.clientDataCacheSlots = void 0),
        (i.autoCompactWindowsCache = void 0),
        i
      );
    }),
    xe("oauth_logout"));
}
async function clearAuthRelatedCaches() {
  (Ws.cache?.clear?.(),
    nL.cache?.clear?.(),
    Jjn(),
    $te(),
    c_e(),
    nke(),
    uS.cache.clear?.(),
    ice(),
    JDe.cache?.clear?.(),
    Fre.cache?.clear?.(),
    await bNa(),
    await oAo());
}
async function call(e) {
  let t = Js();
  if (!t)
    ZGe({
      action: "logout",
      success: true,
      authMethod: "oauth",
    });
  if (
    (await performLogout({
      clearOnboarding: true,
    }),
    t)
  )
    return (
      e(
        "This background session shares credentials with other sessions; /logout here has no effect. Run /logout from your main terminal to sign out.",
        {
          display: "system",
        },
      ),
      null
    );
  let n = eza.jsx(w, {
    children: "Successfully logged out from your Anthropic account.",
  });
  return (
    setTimeout(() => {
      Bc(0, "logout");
    }, 200),
    n
  );
}
async function fleetHostLogout({ exit: e, setError: t, setInfo: n }) {
  (n("Signing out\u2026"),
    ZGe({
      action: "logout",
      success: true,
      authMethod: "oauth",
    }));
  try {
    (await performLogout({
      clearOnboarding: true,
    }),
      e());
  } catch (r) {
    (ke(r), t(`Couldn't sign out \u2014 ${r instanceof Error ? r.message : String(r)}`));
  }
}
var eza;
