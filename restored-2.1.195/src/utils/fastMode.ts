// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mye
// matched 2.1.88 source: src/utils/fastMode.ts
// class=modified  jaccard=0.262  score=0.3149  fileCov=0.6095
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mye] deps: IB, Xr, foi
((jdd = ve(() =>
  H.object({
    first_party: H.string(),
    bedrock: H.string().nullish(),
    vertex: H.string().nullish(),
    foundry: H.string().nullish(),
    anthropic_aws: H.string().nullish(),
    mantle: H.string().nullish(),
    gateway: H.string().nullish(),
  }).loose(),
)),
  (Gdd = ve(() =>
    H.object({
      input: H.number(),
      output: H.number(),
      cache_write_5m: H.number().optional(),
      cache_write_1h: H.number().optional(),
      cache_read: H.number().optional(),
      web_search: H.number().optional(),
    }).loose(),
  )),
  (Wdd = ve(() =>
    H.object({
      id: H.string(),
      family: H.string(),
      display_name: H.string(),
      slogan: H.string().optional(),
      knowledge_cutoff: H.string().optional(),
      provider_ids: jdd(),
      vertex_region_env_var: H.string().optional(),
      context: H.object({
        window: H.number(),
        native_1m: H.boolean().optional(),
        supports_1m_beta: H.boolean().optional(),
      })
        .loose()
        .optional(),
      max_output_tokens: H.object({
        default: H.number(),
        upper: H.number(),
      })
        .loose()
        .optional(),
      pricing: Gdd().optional(),
      capabilities: H.array(H.string()).default([]),
      default_effort: H.enum(["low", "medium", "high", "xhigh", "max"]).optional(),
      image_limits: H.object({
        maxWidth: H.number().optional(),
        maxHeight: H.number().optional(),
        maxBase64Size: H.number().optional(),
      })
        .loose()
        .optional(),
      advisor_rank: H.number().optional(),
      fallback_chain: H.array(H.string()).optional(),
      picker: H.object({
        section: H.enum(["main", "overflow", "deprecated"]).optional(),
        badge: H.string().optional(),
        disabled_reason: H.string().optional(),
        tiers: H.array(H.string()).optional(),
      })
        .loose()
        .optional(),
      deprecation: H.object({
        retirement_dates: H.record(H.string(), H.string()).optional(),
        remapped_to: H.string().optional(),
      })
        .loose()
        .optional(),
      min_cli_version: H.string().optional(),
    }).loose(),
  )),
  (qdd = ve(() =>
    H.object({
      default: H.string(),
      per_provider: H.record(H.string(), H.string()).optional(),
    }).loose(),
  )),
  (Vdd = ve(() =>
    H.object({
      schema_version: H.number(),
      models: H.array(Wdd()),
      aliases: H.record(H.string(), qdd()).default({}),
      defaults: H.record(H.string(), H.string()).default({}),
      best: H.string().optional(),
      latest_per_family: H.record(H.string(), H.string()).default({}),
      alias_migration: H.record(H.string(), H.string()).default({}),
    }).loose(),
  )),
  (zdd = {
    schema_version: 0,
    models: [],
    aliases: {},
    defaults: {},
    latest_per_family: {},
    alias_migration: {},
  }),
  (Kdd = Cn(() => {
    let e = Vdd().safeParse(moi);
    return e.success ? e.data : zdd;
  })),
  (Ydd = Cn(() => {
    let e = new Map();
    for (let t of Kdd().models) e.set(t.id, t);
    return e;
  })));
function sc() {
  if (fr() !== "firstParty") return !1;
  return !ut(process.env.CLAUDE_CODE_DISABLE_FAST_MODE);
}
function dAn() {
  return ut(process.env.CLAUDE_CODE_SKIP_FAST_MODE_ORG_CHECK);
}
function Fx() {
  if (!sc()) return !1;
  return lle() === null;
}
function Xdd(e, t) {
  switch (e) {
    case "free":
      return t === "oauth"
        ? "Fast mode requires a paid subscription"
        : "Fast mode unavailable during evaluation. Please purchase credits.";
    case "preference":
      return "Fast mode has been disabled by your organization";
    case "extra_usage_disabled":
      return "Fast mode requires usage credits \xB7 /usage-credits to turn them on";
    case "network_error":
      return "Fast mode unavailable due to network connectivity issues";
    case "unknown":
      return "Fast mode is currently unavailable";
  }
}
function lle() {
  if (!sc())
    return fr() !== "firstParty"
      ? "Fast mode is only available when using the Anthropic API directly"
      : "Fast mode is not available";
  let e = at("tengu_penguins_off", null);
  if (e !== null) return (T(`Fast mode unavailable: ${e}`), e);
  if (!xa(Q2e())) {
    let n = As();
    if (!(!NA() && rg(n) && xa(n))) {
      let o = `${FG()} is not in your organization's allowed models`;
      return (T(`Fast mode unavailable: ${o}`), o);
    }
  }
  let t = yn("flagSettings")?.fastMode === !0;
  if (Ir() && fJe()) {
    if (!t)
      return (
        T("Fast mode unavailable: Fast mode is not available in the Agent SDK"),
        "Fast mode is not available in the Agent SDK"
      );
  }
  if (s1.status === "pending" && !dAn() && !t)
    return (
      T("Fast mode unavailable: Checking fast mode availability (org status pending)"),
      "Checking fast mode availability"
    );
  if (s1.status === "disabled" && !dAn()) {
    if (s1.reason === "network_error" || s1.reason === "unknown") {
      if (ut(process.env.CLAUDE_CODE_SKIP_FAST_MODE_NETWORK_ERRORS) || t) return null;
    }
    let n = Ws() !== null ? "oauth" : "api-key",
      r = Xdd(s1.reason, n);
    return (T(`Fast mode unavailable: ${r}`), r);
  }
  return null;
}
function FG() {
  return "Opus 4.8";
}
function Q2e() {
  return "opus" + (nT() ? "[1m]" : "");
}
function H2r(e) {
  if (!sc()) return !1;
  if (!Fx()) return !1;
  if (!rg(e)) return !1;
  return T2r(Dr());
}
function T2r(e) {
  if (e.fastMode !== !0) return !1;
  if (!e.fastModePerSessionOptIn) return !0;
  if (yn("policySettings")?.fastModePerSessionOptIn === !0) return !1;
  return yn("flagSettings")?.fastMode === !0;
}
function rg(e) {
  if (!sc()) return !1;
  let t = e ?? Uw(),
    n = zo(t);
  if (JB(mo(n), "fast_mode")) return !0;
  let r = n.toLowerCase();
  return r.includes("opus-4-6") || r.includes("opus-4-7") || r.includes("opus-4-8");
}
function hoi() {
  let e = mo(As()),
    t = Jdd.find((s) => s.canonical === e);
  if (!t) return null;
  let n = at(t.flag, t.defaultDate),
    r = Date.parse(n);
  if (Number.isNaN(r) || Date.now() >= r) return null;
  let o = new Date(r).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
  return {
    label: t.label,
    date: o,
  };
}
function v2r() {
  if (Knt.status === "cooldown" && Date.now() >= Knt.resetAt) {
    if (sc() && !A2r)
      (T("Fast mode cooldown expired, re-enabling fast mode"), (A2r = !0), _oi.emit());
    Knt = {
      status: "active",
    };
  }
  return Knt;
}
function Eoi(e, t) {
  if (!sc()) return;
  ((Knt = {
    status: "cooldown",
    resetAt: e,
    reason: t,
  }),
    (A2r = !1));
  let n = e - Date.now();
  (T(`Fast mode cooldown triggered (${t}), duration ${Math.round(n / 1000)}s`),
    G("tengu_fast_mode_fallback_triggered", {
      cooldown_duration_ms: n,
      cooldown_reason: $e(t),
    }),
    yoi.emit(e, t));
}
function zIe() {
  Knt = {
    status: "active",
  };
}
function Aoi() {
  if (s1.status === "disabled") return;
  ((s1 = {
    status: "disabled",
    reason: "preference",
  }),
    io("userSettings", {
      fastMode: void 0,
    }),
    gn((e) => ({
      ...e,
      penguinModeOrgEnabled: !1,
    })),
    w2r.emit(!1));
}
function Qdd(e) {
  switch (e) {
    case "out_of_credits":
      return "Fast mode disabled \xB7 usage credits exhausted";
    case "org_level_disabled":
    case "org_service_level_disabled":
      return "Fast mode disabled \xB7 usage credits turned off by your organization";
    case "org_level_disabled_until":
    case "org_spend_cap_reached":
      return "Fast mode disabled \xB7 usage credit limit reached";
    case "member_level_disabled":
      return "Fast mode disabled \xB7 usage credits turned off for your account";
    case "seat_tier_level_disabled":
    case "seat_tier_zero_credit_limit":
    case "member_zero_credit_limit":
      return "Fast mode disabled \xB7 usage credits not available for your plan";
    case "overage_not_provisioned":
    case "no_limits_configured":
      return "Fast mode requires usage credits \xB7 /usage-credits to turn them on";
    default:
      return "Fast mode disabled \xB7 usage credits not available";
  }
}
function PPt(e) {
  return (
    e === "org_level_disabled_until" || e === "org_spend_cap_reached" || e === "out_of_credits"
  );
}
function voi(e) {
  let t = Qdd(e);
  if (
    (T(`Fast mode overage rejection: ${e ?? "unknown"} \u2014 ${t}`),
    G("tengu_fast_mode_overage_rejected", {
      overage_disabled_reason: e ?? "unknown",
    }),
    !PPt(e))
  )
    (io("userSettings", {
      fastMode: void 0,
    }),
      gn((n) => ({
        ...n,
        penguinModeOrgEnabled: !1,
      })));
  Hoi.emit(t);
}
function cle() {
  return v2r().status === "cooldown";
}
function QB(e, t) {
  let n = sc() && Fx() && !!t && rg(e);
  if (n && cle()) return "cooldown";
  if (n) return "on";
  return "off";
}
async function Zdd(e) {
  let t = `${$s().BASE_API_URL}/api/claude_code_penguin_mode`,
    n =
      "accessToken" in e
        ? {
            Authorization: `Bearer ${e.accessToken}`,
            "anthropic-beta": kw,
          }
        : {
            "x-api-key": e.apiKey,
          };
  return (
    await po.get(t, {
      headers: n,
    })
  ).data;
}
function C2r() {
  if (!sc()) return;
  if (s1.status !== "pending") return;
  if (dAn()) {
    s1 = {
      status: "enabled",
    };
    return;
  }
  let e = !1,
    t = Dt().penguinModeOrgEnabled === !0;
  s1 =
    e || t
      ? {
          status: "enabled",
        }
      : {
          status: "disabled",
          reason: "unknown",
        };
}
async function Ynt() {
  if ((C2r(), Vi())) return;
  if (!sc()) return;
  if (dAn()) {
    s1 = {
      status: "enabled",
    };
    return;
  }
  if (DPt) return (T("Fast mode prefetch in progress, returning in-flight promise"), DPt);
  let e = lI();
  if (!(Ws()?.accessToken && cI()) && !e) {
    s1 =
      Dt().penguinModeOrgEnabled === !0
        ? {
            status: "enabled",
          }
        : {
            status: "disabled",
            reason: "preference",
          };
    return;
  }
  let n = Date.now();
  if (n - goi < epd) {
    T("Skipping fast mode prefetch, fetched recently");
    return;
  }
  goi = n;
  let r = async () => {
    let s = Ws(),
      i =
        s?.accessToken && cI()
          ? {
              accessToken: s.accessToken,
            }
          : e
            ? {
                apiKey: e,
              }
            : null;
    if (!i) throw Error("No auth available");
    return Zdd(i);
  };
  async function o() {
    try {
      let s;
      try {
        s = await r();
      } catch (a) {
        if (
          po.isAxiosError(a) &&
          (a.response?.status === 401 ||
            (a.response?.status === 403 &&
              typeof a.response?.data === "string" &&
              a.response.data.includes("OAuth token has been revoked")))
        ) {
          let c = Ws()?.accessToken;
          if (c) (await ZB(c), (s = await r()));
          else throw a;
        } else throw a;
      }
      let i = s1.status !== "pending" ? s1.status === "enabled" : Dt().penguinModeOrgEnabled;
      if (
        ((s1 = s.enabled
          ? {
              status: "enabled",
            }
          : {
              status: "disabled",
              reason: s.disabled_reason ?? "preference",
            }),
        i !== s.enabled)
      ) {
        if (!s.enabled)
          io("userSettings", {
            fastMode: void 0,
          });
        (gn((a) => ({
          ...a,
          penguinModeOrgEnabled: s.enabled,
        })),
          w2r.emit(s.enabled));
      }
      T(
        `Org fast mode: ${s.enabled ? "enabled" : `disabled (${s.disabled_reason ?? "preference"})`}`,
      );
    } catch (s) {
      ((s1 =
        Dt().penguinModeOrgEnabled === !0
          ? {
              status: "enabled",
            }
          : {
              status: "disabled",
              reason: "network_error",
            }),
        T(
          `Failed to fetch org fast mode status, defaulting to ${s1.status === "enabled" ? "enabled (cached)" : "disabled (network_error)"}: ${s}`,
          {
            level: "error",
          },
        ),
        G("tengu_org_penguin_mode_fetch_failed", {}));
    } finally {
      DPt = null;
    }
  }
  return ((DPt = o()), DPt);
}
var Jdd,
  Knt,
  A2r = !1,
  yoi,
  _oi,
  boi,
  Soi,
  Hoi,
  Toi,
  s1,
  w2r,
  woi,
  epd = 30000,
  goi = 0,
  DPt = null;
