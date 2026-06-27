// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bKn
// matched 2.1.88 source: src/tools/AgentTool/agentToolUtils.ts
// class=new  jaccard=0.0196  score=0.0506  fileCov=0.0311
// note: nearest: src/tools/AgentTool/agentToolUtils.ts (0.0196); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bKn = E(() => {
  Dif = new Set([Y8e, woe]), kab = [/^(?:bun|npm|yarn|pnpm|deno)\s+(?:run\s+)?test\b/, /^(?:\.\/)?(?:go|cargo|make|mvn|gradle|gradlew|dotnet|swift|mix|sbt|lein|rake|zig|bazel|nx|turbo)\s+test\b/, new RegExp(`^${Xll}(?:pytest|jest|vitest|rspec|phpunit|ctest)\\b`), /^(?:bun|npm|yarn|pnpm)\s+run\s+test:\S/], Rab = [/^(?:bun|npm|yarn|pnpm)\s+run\s+typecheck\b/, new RegExp(`^${Xll}(?:tsc|mypy)\\b`)];
});
function fQ() {
  let e = zx(Pif, null);
  if (e === null || e === void 0) return null;
  if (m6e === null || m6e.raw !== e) {
    let n = Mif().safeParse(e);
    if (!n.success) T(`Promo campaign payload failed validation: ${n.error.message}`, {
      level: "warn"
    });
    m6e = n.success ? {
      raw: e,
      campaign: n.data,
      startsAtMs: Date.parse(n.data.startsAt),
      endsAtMs: Date.parse(n.data.endsAt)
    } : {
      raw: e,
      campaign: null,
      startsAtMs: 0,
      endsAtMs: 0
    };
  }
  if (m6e.campaign === null) return null;
  let t = Date.now();
  if (t < m6e.startsAtMs) return null;
  if (t > m6e.endsAtMs) return null;
  return m6e.campaign;
}
function AKn() {
  return fQ()?.command ?? null;
}
function $if(e) {
  if (!bo()) return "excluded";
  let t = Di();
  if (!t) return "excluded";
  if (e.creditless) return "viewer";
  if (Y4e()) return "claimant";
  if (t === "team") {
    if (!Lc()?.organizationRole) return "excluded";
    return eH() ? "claimant" : "viewer";
  }
  return "excluded";
}
function V8t() {
  let e = fQ();
  if (!e) return null;
  let t = Lc()?.organizationUuid;
  if (!t) return null;
  let n = $if(e);
  if (n === "excluded") return null;
  if (n === "claimant" && Uif(t, e.feature)) return null;
  return {
    campaign: e,
    orgId: t,
    audience: n
  };
}
function HKn(e) {
  let t = AKn();
  return t !== null && e === t;
}
function TKn(e) {
  return HKn(e) && QMe();
}
function QMe() {
  let e = V8t();
  if (!e || e.audience !== "claimant") return !1;
  if (!e.campaign.command) return !1;
  let t = EKn(e.orgId, e.campaign.feature);
  return t !== null && t.eligible && t.available;
}
function f_t() {
  let e = V8t();
  if (!e || e.audience !== "viewer") return !1;
  if (!e.campaign.command) return !1;
  return !Fif(e.orgId, e.campaign.feature);
}
function DAe() {
  let e = fQ(),
    t = Lc()?.organizationUuid;
  if (!e || !t) return null;
  let n = EKn(t, e.feature);
  if (!n || n.amount_minor_units === null || !n.currency) return null;
  return {
    amountMinorUnits: n.amount_minor_units,
    currency: n.currency
  };
}
function vKn() {
  return IIo ??= Oif().catch(e => (T(`FotW eligibility refresh failed: ${e}`, {
    level: "warn"
  }), null)).finally(() => {
    IIo = null;
  }), IIo;
}
async function Oif() {
  let e = V8t();
  if (!e || e.audience !== "claimant") return null;
  let {
    campaign: t,
    orgId: n
  } = e;
  if (EKn(n, t.feature) !== null) return null;
  let r;
  try {
    r = await Os.get(`/api/oauth/organizations/:orgUUID/overage_credit_grant?campaign=${Zll}`, {
      auth: "teleport-org",
      timeout: 1e4,
      validateStatus: o => o < 500
    });
  } catch (o) {
    return It("api_fotw_eligibility_fetch", "request_failed"), T(`FotW eligibility fetch failed: ${o}`, {
      level: "warn"
    }), null;
  }
  if (!r.ok || r.status >= 400) return It("api_fotw_eligibility_fetch", "unavailable"), null;
  if (xe("api_fotw_eligibility_fetch"), r.data.granted) ncl(n, t.feature);
  if (r.data.eligible && r.data.needs_payment_setup === !0) {
    if (r.data.amount_minor_units == null || !r.data.currency) return null;
    return {
      amountMinorUnits: r.data.amount_minor_units,
      currency: r.data.currency
    };
  }
  if (EKn(n, t.feature) !== null) return null;
  return ocl(n, t.feature, {
    available: r.data.available,
    eligible: r.data.eligible,
    granted: r.data.granted,
    amount_minor_units: r.data.amount_minor_units ?? null,
    currency: r.data.currency ?? null
  }, {
    onlyIfAbsent: !0
  }), null;
}
function EKn(e, t) {
  let r = Dt().fotwEligibilityCache?.[e]?.[t];
  if (!r) return null;
  if (Date.now() - r.timestamp > ecl) return null;
  return r.info;
}
async function tcl(e) {
  if (!TKn(e)) return {
    outcome: "skipped"
  };
  let t = V8t();
  if (!t) return {
    outcome: "skipped"
  };
  let {
      campaign: n,
      orgId: r
    } = t,
    o = DAe(),
    s;
  try {
    s = await Os.post("/api/oauth/organizations/:orgUUID/overage_credit_grant", {
      campaign: Zll,
      feature: n.feature,
      enable_overages: !0
    }, {
      auth: "teleport-org",
      timeout: 60000,
      validateStatus: i => i < 500
    });
  } catch (i) {
    return Le("api_fotw_claim", "request_failed"), T(`FotW claim failed: ${i}`, {
      level: "warn"
    }), {
      outcome: "failed"
    };
  }
  if (!s.ok) return {
    outcome: "failed"
  };
  if (s.status >= 400) {
    if (Bif(s.data) === "Failed to grant credit") return Le("api_fotw_claim", "grant_failed"), {
      outcome: "failed"
    };
    return It("api_fotw_claim", "not_available"), ocl(r, n.feature, {
      available: !1,
      eligible: !1,
      granted: !1,
      amount_minor_units: null,
      currency: null
    }), {
      outcome: "not_available"
    };
  }
  if (!s.data.success) return Le("api_fotw_claim", "grant_failed"), {
    outcome: "failed"
  };
  return xe("api_fotw_claim"), ncl(r, n.feature), {
    outcome: "granted",
    amountMinorUnits: s.data.amount_minor_units ?? o?.amountMinorUnits ?? 0,
    currency: s.data.currency ?? o?.currency ?? "USD",
    expiresAt: s.data.expires_at ?? null
  };
}
function Bif(e) {
  let t = Nif().safeParse(e);
  return t.success ? t.data.error.message : void 0;
}
function Uif(e, t) {
  let n = Dt().fotwClaimedFeatures;
  return Boolean(n?.[e]?.includes(t));
}
function ncl(e, t) {
  gn(n => {
    let r = n.fotwClaimedFeatures?.[e] ?? [];
    if (r.includes(t)) return n;
    return {
      ...n,
      fotwClaimedFeatures: {
        ...n.fotwClaimedFeatures,
        [e]: [...r, t]
      }
    };
  });
}
function Fif(e, t) {
  let n = Dt().fotwUpsellFulfilled;
  return Boolean(n?.[e]?.includes(t));
}
function rcl(e) {
  let t = V8t();
  if (!t || t.audience !== "viewer" || !HKn(e)) return;
  let {
    orgId: n,
    campaign: r
  } = t;
  gn(o => {
    let s = o.fotwUpsellFulfilled?.[n] ?? [];
    if (s.includes(r.feature)) return o;
    return {
      ...o,
      fotwUpsellFulfilled: {
        ...o.fotwUpsellFulfilled,
        [n]: [...s, r.feature]
      }
    };
  });
}
function ocl(e, t, n, {
  onlyIfAbsent: r = !1
} = {}) {
  gn(o => {
    let s = o.fotwEligibilityCache?.[e]?.[t],
      i = s && Date.now() - s.timestamp <= ecl;
    if (r && i) return o;
    if (s && s.info.available === n.available && s.info.eligible === n.eligible && s.info.granted === n.granted && s.info.amount_minor_units === n.amount_minor_units && s.info.currency === n.currency && i) return o;
    return {
      ...o,
      fotwEligibilityCache: {
        ...o.fotwEligibilityCache,
        [e]: {
          ...o.fotwEligibilityCache?.[e],
          [t]: {
            info: n,
            timestamp: Date.now()
          }
        }
      }
    };
  });
}
var Pif = "tengu_lilac_loom",
  Zll = "feature_of_the_week",
  ecl = 86400000,
  Qll = () => dt.string().refine(e => !Number.isNaN(Date.parse(e)) && /(z|[+-]\d{2}:?\d{2})$/i.test(e), "must be ISO 8601 with timezone, e.g. 2026-06-04T16:00:00Z"),
  SKn = () => dt.string().optional().transform(e => e === "" ? void 0 : e),
  Mif,
  m6e = null,
  IIo = null,
  Nif;