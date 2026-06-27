// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nAo
// matched 2.1.88 source: src/commands/logout/logout.tsx
// class=modified  jaccard=0.1715  score=0.2589  fileCov=0.337
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var nAo = E(() => {
  X6r();
  rzr();
  NUa();
  Gwe();
  ft();
  oo();
  Is();
  Vet();
  fd();
  je();
  fn();
  At();
  peo();
  drt();
  u9();
  qd();
  Mh();
  dr();
  Jt();
  sG();
  WSe();
  GUa();
  rpo();
  KUa();
  XUa();
  Xdt();
  m5();
  ((ioe = R(qi(), 1)),
    (F6a = R(Nh(), 1)),
    (NJ = R(Hst(), 1)),
    (kPe = R(e5t(), 1)),
    (xPe = R(Bte(), 1)),
    (j6a = R(require("http"))),
    (G6a = R(require("https"))),
    (W6a = R(_Lt(), 1)));
  eAo = class eAo extends Error {};
});
var rAo = {};
_t(rAo, {
  performLogout: () => performLogout,
  fleetHostLogout: () => fleetHostLogout,
  clearAuthRelatedCaches: () => clearAuthRelatedCaches,
  call: () => call,
});
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
