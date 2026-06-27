// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vyt
// matched 2.1.88 source: src/components/messages/RateLimitMessage.tsx
// class=modified  jaccard=0.2708  score=0.3809  fileCov=0.4838
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vyt] deps: z1
Czn = R(rt(), 1);
function rof({
  shouldShowUpsell: e,
  isMax20x: t,
  isExtraUsageCommandEnabled: n,
  shouldAutoOpenRateLimitOptionsMenu: r,
  isTeamOrEnterprise: o,
  hasBillingAccess: s,
  serverHidesUpgrade: i,
  serverHidesOverage: a,
  spendLimitNudgePath: l,
}) {
  if (!e) return null;
  if (r) return "Opening your options\u2026";
  if (l) return "/usage-credits to adjust your monthly spend limit.";
  let c = n && !a;
  if (t) {
    if (c) return "/usage-credits to finish what you\u2019re working on.";
    return "/login to switch to an API usage-billed account.";
  }
  if (o) {
    if (!c) return "Your admin can enable extra usage at claude.ai/admin-settings/usage.";
    if (s) return "/usage-credits to finish what you\u2019re working on.";
    return "/usage-credits to request more usage from your admin.";
  }
  if (i) {
    if (c) return "/usage-credits to finish what you\u2019re working on.";
    return null;
  }
  if (!c) return "/upgrade to increase your usage limit.";
  return "/upgrade or /usage-credits to finish what you\u2019re working on.";
}
function $sl(e) {
  let t = Msl.c(32),
    { text: n, onOpenRateLimitOptions: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((o = Di()), (t[0] = o));
  else o = t[0];
  let s = o,
    i;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) ((i = rW()), (t[1] = i));
  else i = t[1];
  let a = i,
    l = s === "team" || s === "enterprise",
    c = s === "max" && a === "default_claude_max_20x",
    u;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((u = wnt() || bo()), (t[2] = u));
  else u = t[2];
  let d = u,
    p = Wpe(),
    f = p.upgradePaths,
    m;
  if (t[3] !== f) ((m = f !== void 0 && !f.includes("upgrade_plan")), (t[3] = f), (t[4] = m));
  else m = t[4];
  let g = m,
    h;
  if (t[5] !== f) ((h = f !== void 0 && !f.includes("overage")), (t[5] = f), (t[6] = h));
  else h = t[6];
  let y = h,
    b;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((b = at("tengu_coral_beacon", false)), (t[7] = b));
  else b = t[7];
  let _ = b,
    S;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) ((S = FX()), (t[8] = S));
  else S = t[8];
  let A = S,
    v = _ && !l && !A && !Oe.DISABLE_UPGRADE_COMMAND,
    C;
  if (t[9] === Symbol.for("react.memo_cache_sentinel")) ((C = Loe.isEnabled()), (t[9] = C));
  else C = t[9];
  let x = C,
    I;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) ((I = eH()), (t[10] = I));
  else I = t[10];
  let k = I,
    D;
  if (t[11] !== f)
    ((D =
      f !== void 0 &&
      ((f.includes("upgrade_plan") && !A && !Oe.DISABLE_UPGRADE_COMMAND && s !== "enterprise") ||
        (f.includes("overage") && x))),
      (t[11] = f),
      (t[12] = D));
  else D = t[12];
  let P = D,
    O;
  if (t[13] !== p.overageDisabledReason)
    ((O = at(wzn, false) && !l && p.overageDisabledReason === "org_level_disabled_until" && k && x),
      (t[13] = p.overageDisabledReason),
      (t[14] = O));
  else O = t[14];
  let L = O,
    M = d && (f !== void 0 ? P || v : !c || v),
    [N, B] = Izn.useState("pending"),
    $ = p.status === "rejected" && p.resetsAt !== void 0 && !p.isUsingOverage,
    q = p.rateLimitType === "seven_day_overage_included" || p.errorCode === "credits_required",
    W = M && N === "pending" && $ && !q && r,
    V,
    Y;
  if (t[15] !== r || t[16] !== W)
    ((V = () => {
      if (W) B(r() ? "opened" : "blocked");
    }),
      (Y = [W, r]),
      (t[15] = r),
      (t[16] = W),
      (t[17] = V),
      (t[18] = Y));
  else ((V = t[17]), (Y = t[18]));
  Izn.useEffect(V, Y);
  let z;
  e: {
    if (q) {
      z = null;
      break e;
    }
    let ce = !!W,
      ae = g || A,
      de;
    if (t[19] !== y || t[20] !== L || t[21] !== ce || t[22] !== ae)
      ((de = rof({
        shouldShowUpsell: d,
        isMax20x: c,
        isExtraUsageCommandEnabled: x,
        shouldAutoOpenRateLimitOptionsMenu: ce,
        isTeamOrEnterprise: l,
        hasBillingAccess: k,
        serverHidesUpgrade: ae,
        serverHidesOverage: y,
        spendLimitNudgePath: L,
      })),
        (t[19] = y),
        (t[20] = L),
        (t[21] = ce),
        (t[22] = ae),
        (t[23] = de));
    else de = t[23];
    let Ee = de;
    if (!Ee) {
      z = null;
      break e;
    }
    let me;
    if (t[24] !== Ee)
      ((me = zyt.jsx(w, {
        dimColor: true,
        children: Ee,
      })),
        (t[24] = Ee),
        (t[25] = me));
    else me = t[25];
    z = me;
  }
  let K = z,
    Z = L && $ && !q,
    J = Z ? "You've hit your monthly spend limit." : n,
    ne = Z ? "warning" : "error",
    oe;
  if (t[26] !== J || t[27] !== ne)
    ((oe = zyt.jsx(w, {
      color: ne,
      children: J,
    })),
      (t[26] = J),
      (t[27] = ne),
      (t[28] = oe));
  else oe = t[28];
  let re = N === "opened" ? null : K,
    ee;
  if (t[29] !== oe || t[30] !== re)
    ((ee = zyt.jsx(qn, {
      children: zyt.jsxs(U, {
        flexDirection: "column",
        children: [oe, re],
      }),
    })),
      (t[29] = oe),
      (t[30] = re),
      (t[31] = ee));
  else ee = t[31];
  return ee;
}
var Msl, Izn, zyt;
