// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mSe
// matched 2.1.88 source: src/services/rateLimitMessages.ts
// class=modified  jaccard=0.2126  score=0.3235  fileCov=0.3829
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function vaa(e) {
  return Jap.some((t) => e.startsWith(t));
}
function getRateLimitMessage(limits, model) {
  if (limits.isUsingOverage) {
    if (limits.overageStatus === "allowed_warning")
      return {
        message: `You're close to your ${zB() ? "usage limit" : "usage credit limit"}`,
        severity: "warning",
      };
    return null;
  }
  if (limits.status === "rejected")
    return {
      message: Qap(limits, model),
      severity: "error",
    };
  if (limits.status === "allowed_warning") {
    if (limits.utilization !== void 0 && limits.utilization < 0.7) return null;
    let r = Di(),
      o = r === "team" || r === "enterprise",
      s = Lc()?.hasExtraUsageEnabled === !0;
    if (o && s && !eH()) return null;
    let i = getEarlyWarningText(limits);
    if (i)
      return {
        message: i,
        severity: "warning",
      };
  }
  return null;
}
function Iio(e, t) {
  let n = getRateLimitMessage(e, t);
  if (n && n.severity === "error") return n.message;
  return null;
}
function xio(e, t) {
  let n = getRateLimitMessage(e, t);
  if (n && n.severity === "warning") return n.message;
  return null;
}
function Qap(e, t) {
  let n = zB(),
    r = eH(),
    o = r ? "" : " \xB7 contact your admin to increase it",
    s = e.resetsAt,
    i = s ? mee(s, !0) : void 0,
    a = e.overageResetsAt ? mee(e.overageResetsAt, !0) : void 0,
    l = i ? ` \xB7 resets ${i}` : "",
    c = Zap(e, l, t);
  if (
    !n &&
    e.overageDisabledReason &&
    c &&
    !Cio.has(e.overageDisabledReason) &&
    (e.rateLimitType === "seven_day_overage_included" || !(tH(t) && dSe() && !eF()))
  )
    return c;
  if (!n && e.overageDisabledReason && Cio.has(e.overageDisabledReason)) {
    let u = Di();
    if (u === "team" || u === "enterprise")
      return formatLimitReachedText(
        "org's monthly spend limit",
        r
          ? " \xB7 run /usage-credits to raise it, or visit claude.ai/admin-settings/usage"
          : " \xB7 run /usage-credits to ask your admin for a higher limit",
        t,
      );
    return formatLimitReachedText(
      r ? "monthly spend limit" : "org's monthly spend limit",
      r
        ? " \xB7 raise it at claude.ai/settings/usage"
        : " \xB7 ask your admin to raise it at claude.ai/settings/usage",
      t,
    );
  }
  if (e.overageStatus === "rejected") {
    let u = "";
    if (s && e.overageResetsAt) {
      if (s < e.overageResetsAt) u = ` \xB7 resets ${i}`;
      else u = ` \xB7 resets ${a}`;
    } else if (i) u = ` \xB7 resets ${i}`;
    else if (a) u = ` \xB7 resets ${a}`;
    if (e.overageDisabledReason === "out_of_credits") {
      if (n)
        return r
          ? "Your org is out of usage \xB7 add funds to continue"
          : "Your org is out of usage \xB7 contact your admin";
      return `You're out of usage credits${u}`;
    }
    if (e.overageDisabledReason && Cio.has(e.overageDisabledReason)) {
      let d = a ? ` \xB7 resets ${a}` : "";
      return formatLimitReachedText("org's monthly usage limit", d, t);
    }
    if (
      e.overageDisabledReason === "seat_tier_level_disabled" ||
      e.overageDisabledReason === "seat_tier_zero_credit_limit"
    )
      return `Your seat type doesn't include ${n ? "usage" : "usage credits"}`;
    if (e.overageDisabledReason === "org_service_level_disabled")
      return "This service is disabled for your org";
    if (
      e.overageDisabledReason === "member_level_disabled" ||
      e.overageDisabledReason === "member_zero_credit_limit"
    )
      return "Your usage allocation has been disabled by your admin \xB7 run /usage-credits to ask your admin for a higher limit";
    if (e.overageDisabledReason === "group_zero_credit_limit")
      return "Your group's usage limit is set to $0 \xB7 run /usage-credits to ask your admin for a higher limit";
    if (n) return formatLimitReachedText("usage limit", o, t);
    return formatLimitReachedText("limit", u, t);
  }
  if (c) return c;
  if (n) return formatLimitReachedText("usage limit", o, t);
  return formatLimitReachedText("usage limit", l, t);
}
function Zap(e, t, n) {
  if (e.rateLimitType === "seven_day_sonnet") {
    let r = Di();
    return formatLimitReachedText(
      r === "pro" || r === "enterprise" ? "weekly limit" : "Sonnet limit",
      t,
      n,
    );
  }
  if (e.rateLimitType === "seven_day_opus") return formatLimitReachedText("Opus limit", t, n);
  if (e.rateLimitType === "seven_day_overage_included")
    return formatLimitReachedText("Fable 5 limit", t, n);
  if (e.rateLimitType === "seven_day") return formatLimitReachedText("weekly limit", t, n);
  if (e.rateLimitType === "five_hour") return formatLimitReachedText("session limit", t, n);
  return null;
}
function getEarlyWarningText(limits) {
  let t = null;
  switch (limits.rateLimitType) {
    case "seven_day":
      t = "weekly limit";
      break;
    case "five_hour":
      t = "session limit";
      break;
    case "seven_day_opus":
      t = "Opus limit";
      break;
    case "seven_day_sonnet":
      t = "Sonnet limit";
      break;
    case "seven_day_overage_included":
      t = "Fable 5 limit";
      break;
    case "overage":
      t = zB() ? "usage" : "usage credits";
      break;
    case void 0:
      return null;
  }
  let n = limits.utilization ? Math.floor(limits.utilization * 100) : void 0,
    r = limits.rateLimitType === "overage" && zB(),
    o = limits.resetsAt && !r ? mee(limits.resetsAt, !0) : void 0,
    s = getWarningUpsellText(limits.rateLimitType);
  if (n && o) {
    let a = `You've used ${n}% of your ${t} \xB7 resets ${o}`;
    return s ? `${a} \xB7 ${s}` : a;
  }
  if (n) {
    let a = `You've used ${n}% of your ${t}`;
    return s ? `${a} \xB7 ${s}` : a;
  }
  if (limits.rateLimitType === "overage") t = zB() ? "usage limit" : "usage credit limit";
  if (o) {
    let a = `Approaching ${t} \xB7 resets ${o}`;
    return s ? `${a} \xB7 ${s}` : a;
  }
  let i = `Approaching ${t}`;
  return s ? `${i} \xB7 ${s}` : i;
}
function getWarningUpsellText(rateLimitType) {
  let t = Di(),
    n = Lc()?.hasExtraUsageEnabled === !0,
    r = eH();
  if (t === "team" || t === "enterprise") {
    if (!n && eke())
      return r
        ? "Run /usage-credits to turn on extra usage for your org"
        : "Run /usage-credits to ask your admin for more";
    if (n && rateLimitType === "overage")
      return r
        ? "Run /usage-credits to raise the cap"
        : "Run /usage-credits to ask your admin for more";
    return null;
  }
  if (rateLimitType === "five_hour" && (t === "pro" || t === "max") && !FX())
    return "/upgrade to keep using Claude Code";
  return null;
}
function Caa(e) {
  if (!nlp(e)) return null;
  if (!eke() || Oe.DISABLE_EXTRA_USAGE_COMMAND) return "Switch models to keep working.";
  if (!eH()) return "Switch models to keep working.";
  return "Buy more to keep using Fable 5, or switch models to keep working.";
}
function nlp(e) {
  return e !== null && tH(zo(e)) && dSe() && !eF();
}
function Iaa(e, t, n) {
  if (Di() !== "pro") return null;
  if (e.rateLimitType !== "seven_day") return null;
  if (t.includes("fable"))
    return {
      lever: "model",
      text: "try /model opus \xB7 more runway",
    };
  if (t.includes("opus"))
    return {
      lever: "model",
      text: "try /model sonnet \xB7 ~2\xD7 runway",
    };
  if (!Kw(t)) return null;
  let r = RM(t, n);
  if (r === "high" || r === "xhigh" || r === "max")
    return {
      lever: "effort",
      text: "try /effort medium",
    };
  return null;
}
function getUsingOverageText(limits, t) {
  let n = limits.resetsAt ? mee(limits.resetsAt, !0) : "",
    r = "";
  if (limits.rateLimitType === "five_hour") r = "session limit";
  else if (limits.rateLimitType === "seven_day") r = "weekly limit";
  else if (limits.rateLimitType === "seven_day_opus") r = "Opus limit";
  else if (limits.rateLimitType === "seven_day_sonnet") {
    let a = Di();
    r = a === "pro" || a === "enterprise" ? "weekly limit" : "Sonnet limit";
  }
  let o = zB();
  if (!r && !o && t) {
    let a = qY(zo(t));
    if (a && lLe().includes(a)) {
      let l = n ? ` \xB7 Your ${a} limit resets ${n}` : "";
      return `Now using usage credits for ${a}${l}`;
    }
  }
  let s = o ? "your usage allocation" : "usage credits";
  if (!r) return `Now using ${s}`;
  let i = n && !o ? ` \xB7 Your ${r} resets ${n}` : "";
  return `You're now using ${s}${i}`;
}
function formatLimitReachedText(limit, resetMessage, _model) {
  return `You've hit your ${limit}${resetMessage}`;
}
var Cio, Jap;
