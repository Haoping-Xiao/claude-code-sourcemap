// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module r5l
// matched 2.1.88 source: src/bridge/bridgeApi.ts
// class=new  jaccard=0.0116  score=0.0733  fileCov=0.0136
// note: nearest: src/bridge/bridgeApi.ts (0.0116); dir inferred from dep-graph -> utils; 6 renamed
// ─────────────────────────────────────────────────────────────────────────
var r5l = E(() => {
  si();
  Lo();
  e5l = require("os");
});
var s5l = {};
_t(s5l, {
  startProTrial: () => startProTrial,
  shouldAutoOpenProTrialExpired: () => shouldAutoOpenProTrialExpired,
  getProTrialState: () => getProTrialState,
  getProTrialDurationDays: () => getProTrialDurationDays,
  formatTrialBadge: () => formatTrialBadge,
  PRO_TRIAL_FALLBACK_DAYS: () => PRO_TRIAL_FALLBACK_DAYS
});
function getProTrialDurationDays() {
  return Lc()?.claudeCodeTrialDurationDays ?? null;
}
function getProTrialState() {
  let e = gUr();
  if (e) return por(true, e.endsAt);
  let t = Lc();
  if (!t || Di() !== "pro") return jFo;
  let n = t.ccOnboardingFlags?.e10 === true;
  return por(n, t.claudeCodeTrialEndsAt ?? null);
}
async function startProTrial() {
  return yl("api_pro_trial_start", async () => {
    if (gUr()) {
      let n = new Date(Date.now() + PRO_TRIAL_FALLBACK_DAYS * 24 * 60 * 60 * 1000).toISOString();
      return k7s({
        endsAt: n
      }), por(true, n);
    }
    let t = await Os.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial", {}, {
      auth: "teleport-org"
    });
    if (!t.ok) throw Error(t.reason === "no-auth" ? t.detail : `Pro trial start unavailable: ${t.reason}`);
    return T("Pro trial started", {
      level: "debug"
    }), Kjf(t.data.ends_at), por(true, t.data.ends_at);
  });
}
function shouldAutoOpenProTrialExpired() {
  if (getProTrialState().status !== "expired") return false;
  return Dt().cachedExtraUsageDisabledReason !== null;
}
function formatTrialBadge(e) {
  switch (e.status) {
    case "active":
      {
        let t = e.daysRemaining ?? 0;
        return `Trial: ${t} ${t === 1 ? "day" : "days"} left`;
      }
    case "expired":
      return "Usage credits";
    case "ineligible":
    case "not_started":
      return null;
  }
}
function por(e, t) {
  if (!e) return jFo;
  if (!t) return {
    status: "not_started",
    daysRemaining: null
  };
  let n = new Date(t);
  if (Number.isNaN(n.getTime())) return ke(Error(`Invalid claude_code_trial_ends_at: ${t}`)), jFo;
  let r = n.getTime() - Date.now();
  if (r <= 0) return {
    status: "expired",
    daysRemaining: 0
  };
  return {
    status: "active",
    daysRemaining: Math.ceil(r / 86400000)
  };
}
function Kjf(e) {
  gn(t => {
    if (!t.oauthAccount || t.oauthAccount.claudeCodeTrialEndsAt === e) return t;
    return {
      ...t,
      oauthAccount: {
        ...t.oauthAccount,
        claudeCodeTrialEndsAt: e
      }
    };
  });
}
var PRO_TRIAL_FALLBACK_DAYS = 14,
  jFo;