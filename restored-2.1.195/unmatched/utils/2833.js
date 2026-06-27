// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dre
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0073  score=0.0431  fileCov=0.0087
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0073); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dre = E(() => {
  Gve();
  ula();
  oE = jlp;
});
function V1n(e) {
  if (!ab(e)) return null;
  let n = e.response?.data?.error;
  if (n?.details?.error_visibility !== "user_facing") return null;
  return n.message ?? null;
}
async function z1n() {
  let e = A0();
  if (e) return e.isEnabled = true, await Nn(300), xe("api_overage_enable"), true;
  try {
    let t = await Os.post("/api/oauth/organizations/:orgUUID/setup_overage_billing", {
      org_monthly_spend_limit: Xio
    }, {
      auth: "teleport-org",
      timeout: 30000
    });
    if (!t.ok) throw Error(`setup_overage_billing unavailable: ${t.reason}`);
    let n = await Os.put("/api/oauth/organizations/:orgUUID/overage_spend_limit", {
      is_enabled: true
    }, {
      auth: "teleport-org"
    });
    if (!n.ok) throw Error(`overage_spend_limit unavailable: ${n.reason}`);
    return xe("api_overage_enable"), true;
  } catch (t) {
    if (Mjt(t)) T(`overage setup failed: ${be(t)}`, {
      level: "error"
    });else ke(t);
    return Le("api_overage_enable", "request_failed"), false;
  }
}
async function K1n(e, t) {
  let n = A0();
  if (n) return n.spendLimitCents = e, await Nn(300), xe("api_spend_limit_update"), {
    ok: true,
    disabledUntil: null,
    usedCredits: n.usedCents ?? 0
  };
  try {
    let r = await Os.put("/api/oauth/organizations/:orgUUID/overage_spend_limit", {
      is_enabled: true,
      monthly_credit_limit: e,
      currency: t
    }, {
      auth: "teleport-org"
    });
    if (!r.ok) throw Error(`overage_spend_limit unavailable: ${r.reason}`);
    return xe("api_spend_limit_update"), {
      ok: true,
      disabledUntil: r.data?.disabled_until ?? null,
      usedCredits: r.data?.used_credits ?? null
    };
  } catch (r) {
    if (Mjt(r)) T(`updateSpendLimit failed: ${be(r)}`, {
      level: "error"
    });else ke(r);
    return Le("api_spend_limit_update", "request_failed"), {
      ok: false,
      disabledUntil: null,
      usedCredits: null
    };
  }
}
async function pla(e, t, n, r) {
  let o = A0();
  if (o) return o.autoReload = e, await Nn(300), xe("api_auto_reload_update"), true;
  try {
    let s = await Os.put("/api/oauth/organizations/:orgUUID/contracts/auto_reload_settings", {
      enabled: e,
      ...(t !== void 0 && {
        threshold_in_minor_units: t
      }),
      ...(n !== void 0 && {
        reload_to_in_minor_units: n
      }),
      currency: r
    }, {
      auth: "teleport-org",
      timeout: 30000
    });
    if (!s.ok) throw Error(`auto_reload_settings unavailable: ${s.reason}`);
    return xe("api_auto_reload_update"), true;
  } catch (s) {
    if (Mjt(s)) T(`auto_reload_settings update failed: ${be(s)}`, {
      level: "error"
    });else ke(s);
    return Le("api_auto_reload_update", "request_failed"), false;
  }
}
async function cut() {
  let e = A0();
  if (e) return xe("api_prepaid_balance_fetch"), {
    amount: e.balanceCents,
    currency: e.currency,
    auto_reload_settings: {
      enabled: e.autoReload
    }
  };
  try {
    let t = await Os.get("/api/oauth/organizations/:orgUUID/prepaid/credits", {
      auth: "teleport-org",
      timeout: 5000
    });
    if (!t.ok) throw Error(`prepaid/credits unavailable: ${t.reason}`);
    if (typeof t.data?.amount !== "number") return It("api_prepaid_balance_fetch", "not_supported"), null;
    return xe("api_prepaid_balance_fetch"), t.data;
  } catch (t) {
    if (Mjt(t)) T(`prepaid balance fetch failed: ${be(t)}`, {
      level: "error"
    });else ke(t);
    return Le("api_prepaid_balance_fetch", "request_failed"), null;
  }
}
function dla(e) {
  return e.map(([t, n], r) => {
    let o = Math.round(t * n / 100);
    return {
      id: `mock-${r}`,
      credit_minor_units: t,
      price_minor_units: t - o,
      discount_minor_units: o,
      local_credit_minor_units: t,
      local_price_minor_units: t - o
    };
  });
}
async function mla() {
  let e = A0();
  if (e) return xe("api_bundles_fetch"), {
    bundles: Glp[e.bundlePreset ?? "default"],
    bundle_paid_this_month_minor_units: 0,
    bundle_monthly_cap_minor_units: null,
    purchases_reset_at: new Date().toISOString(),
    currency: e.currency,
    stripe_product_id: "prod_mock"
  };
  try {
    let t = await Os.get("/api/oauth/organizations/:orgUUID/prepaid/bundles", {
      auth: "teleport-org",
      timeout: 5000
    });
    if (!t.ok) throw Error(`prepaid/bundles unavailable: ${t.reason}`);
    return xe("api_bundles_fetch"), t.data;
  } catch (t) {
    if (ab(t) && t.response?.status === 404) return xe("api_bundles_fetch"), null;
    if (Mjt(t)) T(`getAvailableBundles failed: ${be(t)}`, {
      level: "error"
    });else ke(t);
    return It("api_bundles_fetch", "request_failed"), null;
  }
}
async function gla() {
  return yl("api_payment_method_fetch", async () => {
    let e = A0();
    if (e) return e.paymentMethod;
    let t = await Os.get("/api/oauth/organizations/:orgUUID/payment_method", {
      auth: "teleport-org",
      timeout: 5000
    });
    if (!t.ok) throw Error(`payment_method unavailable: ${t.reason}`);
    return t.data ?? null;
  });
}
async function hla(e) {
  return yl("api_credits_purchase", async () => {
    let t = A0();
    if (t) {
      if (await Nn(500), t.purchaseOutcome === "3ds") return {
        payment_status: "requires_action",
        payment_intent_client_secret: "pi_mock_secret"
      };
      if (t.purchaseOutcome === "poll") return t.pollCount = 0, {
        payment_status: "pending_invoice",
        purchase_id: "mock-purchase-id"
      };
      return t.balanceCents += e.kind === "bundle" ? e.bundle.credit_minor_units : e.amountCents, {
        payment_status: "success"
      };
    }
    let n = e.kind === "bundle" ? {
        amount: e.bundle.credit_minor_units,
        bundle_id: e.bundle.id,
        expected_price_minor_units: e.bundle.price_minor_units
      } : {
        amount: e.amountCents
      },
      r = await Os.post("/api/oauth/organizations/:orgUUID/contracts/prepaid/credits", n, {
        auth: "teleport-org",
        timeout: 30000
      });
    if (!r.ok) throw Error(`prepaid/credits purchase unavailable: ${r.reason}`);
    return r.data;
  });
}
async function yla(e, t, n) {
  let r = A0();
  if (r) {
    if (r.taxBps === void 0) return It("api_purchase_tax_preview", "no_rate"), null;
    return await Nn(200), xe("api_purchase_tax_preview"), {
      tax_minor_units: Math.round(e * r.taxBps / 10000 /* 1e4 */),
      tax_rate_pct: r.taxBps / 100,
      tax_label: r.taxLabel ?? null
    };
  }
  if (!n) return It("api_purchase_tax_preview", "no_product_id"), null;
  try {
    let o = await Os.post("/api/oauth/organizations/:orgUUID/billing/tax_rate", {
      product_id: n,
      price: e,
      currency: t
    }, {
      auth: "teleport-org",
      timeout: 5000
    });
    if (!o.ok) throw Error(`billing/tax_rate unavailable: ${o.reason}`);
    let s = o.data.tax_rate;
    if (s == null) return It("api_purchase_tax_preview", "no_rate"), null;
    return xe("api_purchase_tax_preview"), {
      tax_minor_units: Math.round(e * s / 100),
      tax_rate_pct: s,
      tax_label: o.data.tax_label ?? null
    };
  } catch (o) {
    return T(`tax_rate preview unavailable: ${o}`), Le("api_purchase_tax_preview", "request_failed"), null;
  }
}
async function _la(e) {
  let t = A0();
  if (t) {
    t.pollCount = (t.pollCount ?? 0) + 1;
    let r = t.pollCount >= 2 ? "paid" : "pending";
    return {
      purchase_id: e,
      status: r,
      stripe_payment_intent_client_secret: null
    };
  }
  let n = await Os.get(`/api/oauth/organizations/:orgUUID/prepaid/commits/${e}`, {
    auth: "teleport-org"
  });
  if (!n.ok) throw Error(`prepaid/commits status unavailable: ${n.reason}`);
  return n.data;
}
var Mjt = e => R_(e, t => V1n(t) !== null || !ab(t)),
  Xio = 2000,
  fla,
  Glp;