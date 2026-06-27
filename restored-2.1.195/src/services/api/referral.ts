// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J5l
// matched 2.1.88 source: src/services/api/referral.ts
// class=modified  jaccard=0.2569  score=0.5321  fileCov=0.3318
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module J5l] deps: Ye, oo, er, dr, mVe, SEe
((V5l = R(lt(), 1)), (z5l = R(rt(), 1)), (KXt = R(se(), 1)));
xde(b4f);
async function E4f(e = "claude_code_guest_pass") {
  let t = await Os.get(
    `/api/oauth/organizations/:orgUUID/referral/eligibility?campaign=${encodeURIComponent(e)}`,
    {
      auth: "teleport-org",
      timeout: 5000,
    },
  );
  if (!t.ok)
    throw Error(
      t.reason === "no-auth" ? t.detail : `Referral eligibility unavailable: ${t.reason}`,
    );
  return t.data;
}
async function eql(e = "claude_code_guest_pass") {
  return yl("api_referral_redemptions_fetch", async () => {
    let t = await Os.get(
      `/api/oauth/organizations/:orgUUID/referral/redemptions?campaign=${encodeURIComponent(e)}`,
      {
        auth: "teleport-org",
        timeout: 10000 /* 1e4 */,
      },
    );
    if (!t.ok)
      throw Error(
        t.reason === "no-auth" ? t.detail : `Referral redemptions unavailable: ${t.reason}`,
      );
    return t.data;
  });
}
function tql() {
  let e = Di();
  return !!(Lc()?.organizationUuid && bo() && (e === "max" || e === "pro"));
}
function _At() {
  if (!tql())
    return {
      eligible: false,
      needsRefresh: false,
      hasCache: false,
    };
  let e = Lc()?.organizationUuid;
  if (!e)
    return {
      eligible: false,
      needsRefresh: false,
      hasCache: false,
    };
  let n = Dt().passesEligibilityCache?.[e];
  if (!n)
    return {
      eligible: false,
      needsRefresh: true,
      hasCache: false,
    };
  let { eligible: r, timestamp: o } = n,
    i = Date.now() - o > Z5l;
  return {
    eligible: r,
    needsRefresh: i,
    hasCache: true,
  };
}
function bAt(e) {
  return Yy(e.amount_minor_units, e.currency, "fit");
}
function SAt() {
  let e = Lc()?.organizationUuid;
  if (!e) return null;
  return Dt().passesEligibilityCache?.[e]?.referrer_reward ?? null;
}
function vor() {
  let e = Lc()?.organizationUuid;
  if (!e) return null;
  return Dt().passesEligibilityCache?.[e]?.remaining_passes ?? null;
}
async function Q5l() {
  if (YXt) return (T("Passes: Reusing in-flight eligibility fetch"), YXt);
  let e = Lc()?.organizationUuid;
  if (!e) return null;
  return (
    (YXt = (async () => {
      try {
        let t = await E4f(),
          n = {
            ...t,
            timestamp: Date.now(),
          };
        return (
          gn((r) => ({
            ...r,
            passesEligibilityCache: {
              ...r.passesEligibilityCache,
              [e]: n,
            },
          })),
          T(`Passes eligibility cached for org ${e}: ${t.eligible}`),
          xe("api_referral_eligibility_fetch"),
          t
        );
      } catch (t) {
        return (
          T(
            `Failed to fetch and cache passes eligibility: ${t instanceof Error ? t.message : String(t)}`,
            {
              level: "error",
            },
          ),
          Le("api_referral_eligibility_fetch", "request_failed"),
          null
        );
      } finally {
        YXt = null;
      }
    })()),
    YXt
  );
}
async function r2o() {
  if (!tql()) return null;
  let e = Lc()?.organizationUuid;
  if (!e) return null;
  let n = Dt().passesEligibilityCache?.[e],
    r = Date.now();
  if (!n)
    return (
      T("Passes: No cache, fetching eligibility in background (command unavailable this session)"),
      Q5l(),
      null
    );
  if (r - n.timestamp > Z5l) {
    (T("Passes: Cache stale, returning cached data and refreshing in background"), Q5l());
    let { timestamp: i, ...a } = n;
    return a;
  }
  T("Passes: Using fresh cached eligibility data");
  let { timestamp: o, ...s } = n;
  return s;
}
async function nql() {
  if (Vi()) return;
  r2o();
}
var Z5l = 86400000,
  YXt = null;
