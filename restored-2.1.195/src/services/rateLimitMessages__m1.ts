// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xjt
// matched 2.1.88 source: src/services/rateLimitMessages.ts
// class=modified (alt of src/services/rateLimitMessages.ts)  jaccard=0.1148  score=0.161  fileCov=0.2859
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xjt] deps: utils/http.ts, bridge/bridgeApi.ts, utils/tempfile.ts, main.tsx, utils/profilerBase.ts, services/mcp/types.ts, utils/agentContext.ts, services/api/usage.ts, services/analytics/growthbook.ts, services/rateLimitMessages.ts
((Cio = new Set(["org_level_disabled_until", "org_spend_cap_reached"])),
  (Jap = [
    "You've hit your",
    "You've reached your",
    "You've used",
    "You're now using usage credits",
    "You're close to",
    "You're out of usage credits",
    "Your org is out of usage \xB7 add funds to continue",
    "Your org is out of usage \xB7 contact your admin",
    "You're now using your usage allocation",
    "Now using your usage allocation",
    "Now using usage credits",
    "Your seat type doesn't include usage credits",
    "Your seat type doesn't include usage",
    "This service is disabled for your org",
    "Your usage allocation has been disabled by your admin",
    "Your group's usage limit is set to $0",
    "Fable 5 requires usage credits",
    "You're now using extra usage",
    "You're out of extra usage",
    "Now using extra usage",
    "Your seat type doesn't include extra usage",
  ]));
function xaa(e) {
  return slp[e] || e;
}
function ilp(e, t) {
  let n = Date.now() / 1000,
    r = e - t,
    o = n - r;
  return Math.max(0, Math.min(1, o / t));
}
function kaa(e) {
  let t = e.headers?.get?.("anthropic-ratelimit-unified-representative-claim"),
    n = e.headers?.get?.("anthropic-ratelimit-unified-overage-status");
  if (!t && !n) return null;
  let r = {
      status: "rejected",
      unifiedRateLimitFallbackAvailable: !1,
      isUsingOverage: !1,
    },
    o = e.headers?.get?.("anthropic-ratelimit-unified-reset");
  if (o) r.resetsAt = Number(o);
  if (t) r.rateLimitType = t;
  if (n) r.overageStatus = n;
  let s = e.headers?.get?.("anthropic-ratelimit-unified-overage-reset");
  if (s) r.overageResetsAt = Number(s);
  let i = e.headers?.get?.("anthropic-ratelimit-unified-overage-disabled-reason");
  if (i) r.overageDisabledReason = i;
  return r;
}
function f5e() {
  return p5e;
}
function getEarlyWarningText(limits) {
  let t = {};
  for (let [n, r] of [
    ["five_hour", "5h"],
    ["seven_day", "7d"],
    ["seven_day_overage_included", "7d_oi"],
    ["overage", "overage"],
  ]) {
    let o = limits.get(`anthropic-ratelimit-unified-${r}-utilization`),
      s = limits.get(`anthropic-ratelimit-unified-${r}-reset`);
    if (o !== null && s !== null)
      t[n] = {
        utilization: Number(o),
        resets_at: Number(s),
      };
  }
  return t;
}
function kjt(e) {
  let t = ck;
  ((ck = e), cLe.forEach((c) => c(e)));
  let { overagePeriodMonthly: n, overagePeriodChannel: r, ...o } = t,
    { overagePeriodMonthly: s, overagePeriodChannel: i, ...a } = e;
  if (L_(o, a)) return;
  let l = Math.round(((e.resetsAt ? e.resetsAt - Date.now() / 1000 : 0) / 3600) * 10) / 10;
  G("tengu_claudeai_limits_status_changed", {
    status: $e(e.status),
    previousStatus: $e(t.status),
    rateLimitType: Oo(e.rateLimitType),
    isUsingOverage: e.isUsingOverage,
    unifiedRateLimitFallbackAvailable: e.unifiedRateLimitFallbackAvailable,
    hoursTillReset: l,
  });
}
async function alp() {
  let e = Fw(),
    t = await G9({
      maxRetries: 0,
      model: e,
      source: "quota_check",
      agentContext: of(),
    }),
    n = [
      {
        role: "user",
        content: "quota",
      },
    ],
    r = V9(e);
  return t.beta.messages
    .create({
      model: e,
      max_tokens: 1,
      messages: n,
      metadata: uLe(),
      ...(r.length > 0 && {
        betas: fI(r),
      }),
    })
    .asResponse();
}
async function Laa() {
  if (Vi()) return;
  if (!tut(bo())) return;
  if (Ir()) return;
  try {
    let e = await alp();
    R1n(e.headers, Fw());
  } catch (e) {
    if (e instanceof Fo) getLimitReachedText(e);
  }
}
function llp(e, t) {
  for (let [n, r] of Object.entries(olp)) {
    let o = e.get(`anthropic-ratelimit-unified-${n}-surpassed-threshold`);
    if (o !== null) {
      let s = e.get(`anthropic-ratelimit-unified-${n}-utilization`),
        i = e.get(`anthropic-ratelimit-unified-${n}-reset`),
        a = s ? Number(s) : void 0;
      return {
        status: "allowed_warning",
        resetsAt: i ? Number(i) : void 0,
        rateLimitType: r,
        utilization: a,
        unifiedRateLimitFallbackAvailable: t,
        isUsingOverage: !1,
        surpassedThreshold: Number(o),
      };
    }
  }
  return null;
}
function clp(e, t, n) {
  let { rateLimitType: r, claimAbbrev: o, windowSeconds: s, thresholds: i } = t,
    a = e.get(`anthropic-ratelimit-unified-${o}-utilization`),
    l = e.get(`anthropic-ratelimit-unified-${o}-reset`);
  if (a === null || l === null) return null;
  let c = Number(a),
    u = Number(l),
    d = ilp(u, s);
  if (!i.some((f) => c >= f.utilization && d <= f.timePct)) return null;
  return {
    status: "allowed_warning",
    resetsAt: u,
    rateLimitType: r,
    utilization: c,
    unifiedRateLimitFallbackAvailable: n,
    isUsingOverage: !1,
  };
}
function ulp(e, t) {
  let n = llp(e, t);
  if (n) return n;
  for (let r of rlp) {
    let o = clp(e, r, t);
    if (o) return o;
  }
  return null;
}
function getRateLimitMessage(limits) {
  let t = limits.get("anthropic-ratelimit-unified-status") || "allowed",
    n = limits.get("anthropic-ratelimit-unified-reset"),
    r = n ? Number(n) : void 0,
    o = limits.get("anthropic-ratelimit-unified-fallback") === "available",
    s = limits.get("anthropic-ratelimit-unified-representative-claim"),
    i = limits.get("anthropic-ratelimit-unified-overage-status"),
    a = limits.get("anthropic-ratelimit-unified-overage-reset"),
    l = a ? Number(a) : void 0,
    c = limits.get("anthropic-ratelimit-unified-overage-disabled-reason"),
    u = limits.get("anthropic-ratelimit-unified-overage-in-use") === "true",
    d = limits.get("anthropic-ratelimit-unified-upgrade-paths"),
    p = d ? d.split(",").map((A) => A.trim()) : void 0,
    f = limits.get("anthropic-ratelimit-unified-overage-period-monthly-utilization"),
    m = f ? Number(f) : NaN,
    g = Number.isFinite(m)
      ? {
          utilization: m,
        }
      : void 0,
    h = limits.get("anthropic-ratelimit-unified-overage-period-channel-utilization"),
    y = h ? Number(h) : NaN,
    b = Number.isFinite(y)
      ? {
          utilization: y,
        }
      : void 0,
    _ = t === "rejected" && (i === "allowed" || i === "allowed_warning"),
    S = t;
  if (t === "allowed" || t === "allowed_warning") {
    let A = ulp(limits, o);
    if (A)
      return {
        ...A,
        ...(p && {
          upgradePaths: p,
        }),
        ...(u && {
          overageInUse: u,
        }),
        ...(g && {
          overagePeriodMonthly: g,
        }),
        ...(b && {
          overagePeriodChannel: b,
        }),
      };
    S = "allowed";
  }
  return {
    status: S,
    resetsAt: r,
    unifiedRateLimitFallbackAvailable: o,
    ...(s && {
      rateLimitType: s,
    }),
    ...(i && {
      overageStatus: i,
    }),
    ...(l && {
      overageResetsAt: l,
    }),
    ...(c && {
      overageDisabledReason: c,
    }),
    ...(p && {
      upgradePaths: p,
    }),
    isUsingOverage: _,
    ...(u && {
      overageInUse: u,
    }),
    ...(g && {
      overagePeriodMonthly: g,
    }),
    ...(b && {
      overagePeriodChannel: b,
    }),
  };
}
function Rio(e) {
  let t = e.error?.error?.details;
  if (t?.error_code !== "credits_required") return {};
  return {
    errorCode: "credits_required",
    ...(typeof t.disabled_reason === "string" && {
      overageDisabledReason: t.disabled_reason,
    }),
    ...(typeof t.can_user_purchase_credits === "boolean" && {
      canUserPurchaseCredits: t.can_user_purchase_credits,
    }),
    ...(typeof t.has_chargeable_saved_payment_method === "boolean" && {
      hasChargeableSavedPaymentMethod: t.has_chargeable_saved_payment_method,
    }),
  };
}
function rut(e) {
  if (Dt().cachedExtraUsageDisabledReason !== e)
    gn((t) => ({
      ...t,
      cachedExtraUsageDisabledReason: e,
    }));
}
function Paa(e) {
  rut(e.get("anthropic-ratelimit-unified-overage-disabled-reason") ?? null);
}
function R1n(e, t, n = !1) {
  let r = bo();
  if (!tut(r)) {
    if (((p5e = {}), ck.status !== "allowed" || ck.resetsAt))
      kjt({
        status: "allowed",
        unifiedRateLimitFallbackAvailable: !1,
        isUsingOverage: !1,
      });
    return;
  }
  let o = wio(e);
  p5e = getEarlyWarningText(o);
  let s = getRateLimitMessage(o);
  if ((Paa(o), !L_(ck, s))) kjt(s);
  if (s.overageInUse === !0) {
    if (
      !(s.isUsingOverage === !0 && s.rateLimitType !== "seven_day_overage_included") &&
      !n &&
      !zB() &&
      tH(t) &&
      !eF() &&
      !Gue() &&
      !Hjt()
    )
      M_r(!0);
    k1n.forEach((a) => a(t, s.isUsingOverage === !0, n));
  }
}
function getLimitReachedText(limits) {
  if (!tut(bo()) || limits.status !== 429) return;
  try {
    let { status: t, isUsingOverage: n } = ck,
      r = p5e.five_hour?.utilization,
      o = p5e.seven_day?.utilization,
      s = p5e.overage?.utilization,
      i = {
        ...ck,
      };
    if (limits.headers) {
      let l = wio(limits.headers);
      ((p5e = getEarlyWarningText(l)), (i = getRateLimitMessage(l)), Paa(l));
    }
    if (
      ((i.status = "rejected"),
      Object.assign(i, Rio(limits)),
      (t !== "rejected" || n) &&
        !(t === "allowed" && !n && r === void 0 && o === void 0 && s === void 0))
    ) {
      let l =
        i.rateLimitType === "five_hour"
          ? r
          : i.rateLimitType?.startsWith("seven_day")
            ? o
            : i.rateLimitType === "overage"
              ? s
              : Math.max(r ?? 0, o ?? 0, s ?? 0);
      if (l === void 0 || l < 0.8)
        G("tengu_quota_mismatch", {
          priorStatus: $e(t),
          priorIsUsingOverage: n,
          priorFiveHourUtilization: r,
          priorSevenDayUtilization: o,
          priorOverageUtilization: s,
          rateLimitType: Oo(i.rateLimitType) ?? void 0,
          subscriptionType: Oo(Di()) ?? void 0,
          hadPriorUtilizationData: r !== void 0 || o !== void 0 || s !== void 0,
        });
    }
    if (!L_(ck, i)) kjt(i);
  } catch (t) {
    ke(t);
  }
}
var rlp, olp, slp, ck, p5e, cLe, k1n;
