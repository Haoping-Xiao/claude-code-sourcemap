// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bsl
// matched 2.1.88 source: src/commands/extra-usage/extra-usage-core.ts
// class=modified  jaccard=0.1891  score=0.3123  fileCov=0.3241
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var bsl = E(() => {
  dn();
  c_();
});
function Ssl(e) {
  if (!po.isAxiosError(e)) return null;
  let t = e.response?.status;
  if (typeof t !== "number" || t >= 500) return null;
  let n = e.response?.data;
  if (!n || typeof n !== "object") return null;
  let r = n,
    o = r.error;
  if (o && typeof o === "object") {
    let s = o.message;
    if (typeof s === "string" && s.length > 0) return s;
  }
  for (let s of ["message", "detail"]) {
    let i = r[s];
    if (typeof i === "string" && i.length > 0) return i;
  }
  return null;
}
function I8t() {
  {
    let e = Di(),
      t = A0() !== null,
      n = at("tengu_ember_latch", false) || t,
      r = t || ((e === "pro" || e === "max") && eke() && !Vi());
    return n && r;
  }
  return false;
}
async function Fyt(
  e = {
    openInBrowser: true,
  },
) {
  let t = Di(),
    n = t === "team" || t === "enterprise";
  if (!eH() && n) {
    let s;
    try {
      s = (await Wue())?.extra_usage;
    } catch (i) {
      T(`extra-usage: fetchUtilization failed, falling through to ask user: ${i}`, {
        level: "error",
      });
    }
    switch (s?.disabled_reason) {
      case "out_of_credits":
        return {
          type: "message",
          value: "Your organization is out of usage credits. Contact your admin to add more.",
        };
      case "org_level_disabled_until":
      case "org_spend_cap_reached":
        return {
          type: "message",
          value:
            "Your organization's usage credit cap is reached for this period. Contact your admin to raise it.",
        };
      default:
    }
    if (s?.is_enabled && s.monthly_limit === null)
      return {
        type: "message",
        value: "Your organization already has unlimited usage credits. No request needed.",
      };
    try {
      if ((await _sl("limit_increase"))?.is_allowed === false)
        return {
          type: "message",
          value: "Contact your admin to manage usage credit settings.",
        };
    } catch (i) {
      T(`Extra usage eligibility check failed: ${i}`, {
        level: "error",
      });
    }
    try {
      let i = await ysl("limit_increase", ["pending", "dismissed"]);
      if (i && i.length > 0)
        return {
          type: "message",
          value: "You've already sent a usage credit request to your admin.",
        };
    } catch (i) {
      T(`Failed to fetch pending admin requests: ${i}`, {
        level: "error",
      });
    }
    try {
      return (
        await hsl({
          request_type: "limit_increase",
          details: null,
        }),
        {
          type: "message",
          value: s?.is_enabled
            ? "Request sent to your admin to increase your usage credit limit."
            : "Request sent to your admin to turn on usage credits.",
        }
      );
    } catch (i) {
      let a = Ssl(i);
      if (R_(i, (l) => Ssl(l) !== null))
        T(`Admin request rejected: ${a ?? be(i)}`, {
          level: "error",
        });
      else ke(i);
      if (a)
        return {
          type: "message",
          value: a,
        };
    }
    return {
      type: "message",
      value: "Contact your admin to manage usage credit settings.",
    };
  }
  let o = n ? "https://claude.ai/admin-settings/usage" : "https://claude.ai/settings/usage";
  if (!e.openInBrowser)
    return {
      type: "browser-opened",
      url: o,
      opened: false,
    };
  try {
    let s = await ac(o);
    return {
      type: "browser-opened",
      url: o,
      opened: s,
    };
  } catch (s) {
    return (
      T(`Failed to open browser for ${o}: ${s}`, {
        level: "error",
      }),
      {
        type: "message",
        value: `Couldn't open your browser. Visit ${o} to manage usage credits.`,
      }
    );
  }
}
