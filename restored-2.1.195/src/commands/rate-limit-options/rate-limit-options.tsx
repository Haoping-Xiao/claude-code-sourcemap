// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SQl
// matched 2.1.88 source: src/commands/rate-limit-options/rate-limit-options.tsx
// class=modified  jaccard=0.2241  score=0.3786  fileCov=0.3545
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module SQl] deps: si, vi, CH, Ye, kt, uut, mSe, z1, Vyt, ole, oo, wAe, wr, es, d5e
((cZ = R(rt(), 1)), (Nse = R(se(), 1)));
function K6f({ onDone: e, context: t }) {
  let [n, r] = AYe.useState(null),
    o = Wpe(),
    s = Di(),
    i = rW(),
    a = Lc()?.hasExtraUsageEnabled === true,
    l = Lc()?.billingType === "usage_based",
    u = s === "max" && i === "default_claude_max_20x",
    d = s === "team" || s === "enterprise",
    p = at("tengu_jade_anvil_4", false),
    f = at("tengu_coral_beacon", false),
    m = o.upgradePaths,
    h =
      at(wzn, false) &&
      !d &&
      o.overageDisabledReason === "org_level_disabled_until" &&
      eH() &&
      Loe.isEnabled(),
    [y, b] = AYe.useState(null);
  AYe.useEffect(() => {
    if (!h) return;
    let v = false;
    return (
      cut()
        .then((C) => {
          if (v || !C) return;
          if (
            _Ql({
              overageDisabledReason: o.overageDisabledReason,
              balanceMinorUnits: C.amount,
            })
          )
            b(C);
        })
        .catch(() => {}),
      () => {
        v = true;
      }
    );
  }, [h]);
  let _ = AYe.useMemo(() => {
    let v = [],
      C = m !== void 0;
    if (Loe.isEnabled()) {
      let k = eH(),
        D = d && !k;
      if (C ? m.includes("overage") : true) {
        let O = l ? "usage" : "usage credits",
          L;
        if (D) L = "Ask your admin for more usage";
        else L = a ? `Add funds to continue with ${O}` : `Switch to ${O}`;
        v.push({
          label: L,
          value: "extra-usage",
        });
      }
    }
    if (C ? m.includes("upgrade_plan") && N1e.isEnabled() : !u && !d && N1e.isEnabled())
      v.push({
        label: "Upgrade your plan",
        value: "upgrade",
      });
    if (f && !d && N1e.isEnabled())
      v.push({
        label: u ? "Switch to Team plan" : "Upgrade to Team plan",
        value: "team",
      });
    let I = {
      label: l ? "Stop" : "Stop and wait for limit to reset",
      value: "cancel",
    };
    if (p) return [...v, I];
    return [I, ...v];
  }, [p, f, m, u, d, a, l]);
  function S() {
    (G("tengu_rate_limit_options_menu_cancel", {}),
      e(void 0, {
        display: "skip",
      }));
  }
  function A(v) {
    if (v === "upgrade")
      (G("tengu_rate_limit_options_menu_select_upgrade", {}),
        NJt(e, t).then((C) => {
          if (C) r(C);
        }));
    else if (v === "team")
      (G("tengu_rate_limit_options_menu_select_team", {}),
        ac(s3o).then((C) => {
          e(
            C
              ? `Opening ${s3o} in your browser. Run /login after upgrading to use your new plan.`
              : `Could not open a browser. Visit ${s3o} to upgrade, then run /login.`,
          );
        }));
    else if (v === "extra-usage")
      (G("tengu_rate_limit_options_menu_select_extra_usage", {}),
        R8t(e, t).then((C) => {
          if (C) r(C);
        }));
    else if (v === "cancel") S();
  }
  if (n) return n;
  if (y)
    return UJt.jsx(bQl, {
      balance: y,
      onDone: e,
      context: t,
    });
  return UJt.jsx(zn, {
    title: "What do you want to do?",
    onCancel: S,
    color: "suggestion",
    children: UJt.jsx(Sr, {
      options: _,
      onChange: A,
      visibleOptionCount: _.length,
    }),
  });
}
async function call(e, t) {
  return UJt.jsx(K6f, {
    onDone: e,
    context: t,
  });
}
var AYe,
  UJt,
  s3o = "https://claude.ai/create/team";
