// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hVn
// matched 2.1.88 source: src/services/api/bootstrap.ts
// class=modified  jaccard=0.2015  score=0.3313  fileCov=0.3398
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hVn] deps: ft, SJ, p4n, S4, Ye, dn, Un, vft, H0, _F, EVe, oo, Vw, Ld, er, Yp, vn, Ls, R9, aS, t1t, Ote
eza = R(se(), 1);
var iAo = {};
_t(iAo, {
  fetchBootstrapData: () => fetchBootstrapData,
  buildBootstrapRequestConfig: () => buildBootstrapRequestConfig,
  buildBootstrapInputs: () => buildBootstrapInputs,
});
function buildBootstrapInputs() {
  return {
    entrypoint: Q2(),
    model: dp(As()),
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
    organizationUuid: Dt().oauthAccount?.organizationUuid ?? null,
  };
}
function buildBootstrapRequestConfig(e) {
  return {
    params: {
      entrypoint: e.entrypoint,
      model: e.model,
    },
    userAgent: `claude-code/${e.ccVersion}`,
  };
}
function tza(e, t) {
  if (!e || !t) return e;
  if (t.account_uuid != null && t.account_uuid !== e.accountUuid) return e;
  let n = {
    organizationType: t.organization_type ?? null,
    organizationRateLimitTier: t.organization_rate_limit_tier ?? null,
    userRateLimitTier: t.user_rate_limit_tier ?? null,
    seatTier: t.seat_tier ?? null,
  };
  if (t.account_email != null) n.emailAddress = t.account_email;
  if (t.organization_uuid != null) n.organizationUuid = t.organization_uuid;
  if (t.organization_name != null) n.organizationName = t.organization_name;
  return {
    ...e,
    ...n,
  };
}
async function Izp(e) {
  if (fr() === "gateway") {
    if (!Oe.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY)
      return (
        T(
          "[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)",
        ),
        {
          additional_model_options: [],
        }
      );
    return kzp();
  }
  if (Vi()) return (T("[Bootstrap] Skipped: Nonessential traffic disabled"), null);
  if (fr() !== "firstParty") return (T("[Bootstrap] Skipped: 3P provider"), null);
  let { params: t, userAgent: n } = buildBootstrapRequestConfig(e),
    r = async (i, a) => {
      T("[Bootstrap] Fetching");
      let l = await po.get(`${i}/api/claude_cli/bootstrap`, {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": n,
            ...E9r(),
            ...a,
          },
          params: t,
          timeout: 5000,
        }),
        c = Czp().safeParse(l.data);
      if (!c.success)
        return (
          T(`[Bootstrap] Response failed validation: ${c.error.message}`),
          It("api_bootstrap_fetch", "parse_failed"),
          null
        );
      return (T("[Bootstrap] Fetch ok"), c.data);
    },
    o = lI();
  if (!o && iH())
    try {
      let [i, a] = await Promise.all([sxe(), prt()]);
      if (i !== null)
        return await r(Oe.ANTHROPIC_BASE_URL || a?.baseURL || $s().BASE_API_URL, {
          ...a?.extraHeaders,
          Authorization: `Bearer ${await i.getToken()}`,
          "anthropic-beta": kw,
        });
    } catch (i) {
      return (
        T(
          `[Bootstrap] WIF fetch failed: ${po.isAxiosError(i) ? (i.response?.status ?? i.code) : i instanceof Error ? i.constructor.name : "unknown"}`,
        ),
        It("api_bootstrap_fetch", "wif_unavailable"),
        null
      );
    }
  if (!(Ws()?.accessToken && cI()) && !o)
    return (T("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), null);
  try {
    return await oL(async () => {
      let i = Ws()?.accessToken,
        a;
      if (i && cI())
        a = {
          Authorization: `Bearer ${i}`,
          "anthropic-beta": kw,
        };
      else if (o)
        a = {
          "x-api-key": o,
        };
      else return (T("[Bootstrap] No auth available on retry, aborting"), null);
      return r($s().BASE_API_URL, a);
    });
  } catch (i) {
    throw (
      T(
        `[Bootstrap] Fetch failed: ${po.isAxiosError(i) ? (i.response?.status ?? i.code) : "unknown"}`,
      ),
      Le("api_bootstrap_fetch", "request_failed"),
      i
    );
  }
}
async function fetchBootstrapData() {
  try {
    let e = buildBootstrapInputs(),
      t = await Izp(e);
    if (!t) return;
    xe("api_bootstrap_fetch");
    let n = t.client_data ?? null,
      r = t.additional_model_options ?? [],
      o = t.additional_model_costs ?? {},
      s = t.model_access ?? [],
      i = t.auto_compact_windows ?? null,
      a = Dt(),
      l = tza(a.oauthAccount, t.oauth_account),
      c = xkn({
        ...e,
        organizationUuid: l?.organizationUuid ?? e.organizationUuid,
      }),
      u = a.clientDataCacheSlots?.[c],
      d = u !== void 0 && "data" in u && typeof u.at === "number",
      p = L_(l, a.oauthAccount),
      f = d && Date.now() - u.at > YOi;
    if (
      (G("tengu_client_data_cache_key", {
        slot_hit: d,
        slot_changed: !d || !L_(u.data ?? null, n),
        legacy_fallback: !d && a.clientDataCache != null,
        slot_stale: f,
      }),
      d &&
        L_(u.data ?? null, n) &&
        !f &&
        L_(a.additionalModelOptionsCache, r) &&
        L_(a.additionalModelCostsCache, o) &&
        L_(a.modelAccessCache ?? [], s) &&
        L_(a.autoCompactWindowsCache ?? null, i) &&
        p)
    ) {
      T("[Bootstrap] Cache unchanged, skipping write");
      return;
    }
    (T("[Bootstrap] Cache updated, persisting to disk"),
      gn((m) => {
        let g = tza(m.oauthAccount, t.oauth_account),
          h = xkn({
            ...e,
            organizationUuid: g?.organizationUuid ?? null,
          });
        return {
          ...m,
          clientDataCacheSlots: JOi(m.clientDataCacheSlots, h, {
            data: n,
            at: Date.now(),
          }),
          additionalModelOptionsCache: r,
          additionalModelCostsCache: o,
          modelAccessCache: s,
          autoCompactWindowsCache: i,
          oauthAccount: g,
        };
      }));
  } catch (e) {
    if (R_(e))
      T(`[Bootstrap] fetchBootstrapData failed: ${e}`, {
        level: "error",
      });
    else ke(e);
  }
}
async function kzp() {
  await oxe();
  let e = km();
  if (!e) return null;
  try {
    let t = await po.get(`${e.url}/v1/models`, {
        headers: {
          Authorization: `Bearer ${e.jwt}`,
          "anthropic-version": "2023-06-01",
          "User-Agent": dy(),
        },
        params: {
          limit: 1000,
        },
        timeout: 5000,
      }),
      n = xzp().safeParse(t.data);
    if (!n.success)
      return (T(`[Bootstrap] Gateway /v1/models failed validation: ${n.error.message}`), null);
    let r = n.data.data
      .filter((o) => /^(claude|anthropic)/i.test(o.id))
      .filter((o) => {
        let s = y9(o.id);
        return s === null || s === MIe;
      })
      .map((o) => ({
        value: o.id,
        label: o.display_name ?? o.id,
        description: o.description ?? "",
      }));
    return (
      T(`[Bootstrap] Gateway /v1/models \u2192 ${r.length} custom options`),
      {
        additional_model_options: r,
      }
    );
  } catch (t) {
    return (
      T(
        `[Bootstrap] Gateway /v1/models fetch failed: ${po.isAxiosError(t) ? (t.response?.status ?? t.code) : "unknown"}`,
      ),
      null
    );
  }
}
var Czp, xzp;
