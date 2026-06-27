// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wAe
// matched 2.1.88 source: src/components/Settings/Usage.tsx
// class=modified (alt of src/components/Settings/Usage.tsx)  jaccard=0.0267  score=0.0353  fileCov=0.0991
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: PlainAwait, ExtraUsageDialog
// [unwrapped __esm module wAe]
((xrf = {
  USD: "$",
  EUR: "\u20AC",
  GBP: "\xA3",
  JPY: "\xA5",
  BRL: "R$",
  CAD: "CA$",
  AUD: "A$",
  NZD: "NZ$",
  SGD: "S$",
}),
  (krf = new Set(["JPY", "KRW", "VND"])));
var k8t = "https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans";
function xsl() {
  if (tH(As()) && jue() && !Gue()) oLe();
}
function ExtraUsageDialog(e) {
  let t = lq.c(8),
    { onDone: n, initialStep: r, entryReason: o, onBeforePurchase: s, onPurchaseSuccess: i } = e,
    a;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((a = {
      s: "loading",
    }),
      (t[0] = a));
  else a = t[0];
  let [l, c] = mg.useState(a),
    u;
  if (t[1] !== o || t[2] !== r || t[3] !== s || t[4] !== n || t[5] !== i || t[6] !== l)
    ((u = is.jsx(Eat, {
      children: is.jsx(Mrf, {
        onDone: n,
        step: l,
        setStep: c,
        initialStep: r,
        entryReason: o,
        onBeforePurchase: s,
        onPurchaseSuccess: i,
      }),
    })),
      (t[1] = o),
      (t[2] = r),
      (t[3] = s),
      (t[4] = n),
      (t[5] = i),
      (t[6] = l),
      (t[7] = u));
  else u = t[7];
  return u;
}
function Mrf({
  onDone: e,
  step: t,
  setStep: n,
  initialStep: r,
  entryReason: o,
  onBeforePurchase: s,
  onPurchaseSuccess: i,
}) {
  let [a, l] = mg.useState("USD"),
    [c, u] = mg.useState([]),
    [d, p] = mg.useState(),
    f = mg.useRef(e);
  mg.useEffect(() => {
    f.current = e;
  });
  let m = mg.useCallback(
    async (C = !0) => {
      if (C)
        n({
          s: "loading",
        });
      try {
        let x = A0(),
          I;
        if (x)
          I = {
            is_enabled: x.isEnabled,
            monthly_limit: x.spendLimitCents,
            used_credits: x.usedCents,
            currency: x.currency,
            utilization:
              x.spendLimitCents && x.spendLimitCents > 0
                ? (x.usedCents / x.spendLimitCents) * 100
                : 0,
          };
        let [k, D, P, O] = await Promise.all([
          I ? Promise.resolve(null) : Wue(),
          cut(),
          gla(),
          mla(),
        ]);
        l((O?.currency ?? D?.currency ?? "USD").toUpperCase());
        let L = O?.bundles ?? [];
        if ((u(L.length > 0 ? L : fla), p(O?.stripe_product_id), !I && k === null)) {
          n({
            s: "error",
            msg: "Couldn't load usage credit status \u2014 try /login if your session expired.",
          });
          return;
        }
        if (
          ((I ??= k?.extra_usage ?? {
            is_enabled: !1,
            monthly_limit: null,
            used_credits: null,
            utilization: null,
          }),
          r === "buy_select")
        ) {
          if (!P) {
            (G("tengu_extra_usage_inline_dialog_fallback_browser", {
              reason: We("no_payment_method"),
            }),
              f.current(`No card on file \u2014 add a payment method at ${oQ}`));
            return;
          }
          n({
            s: "buy_select",
            pm: P,
          });
          return;
        }
        if (!x1n(I)) {
          n({
            s: "not_enabled",
            pm: P,
          });
          return;
        }
        n({
          s: "enabled",
          usage: I,
          balance: D,
          pm: P,
        });
      } catch (x) {
        (T(`Failed to load extra usage status: ${x}`, {
          level: "error",
        }),
          n({
            s: "error",
            msg: "Couldn't load usage credit status",
          }));
      }
    },
    [n, r],
  );
  mg.useEffect(() => {
    (G("tengu_extra_usage_inline_dialog_shown", {
      entry_reason: o ? We(o) : void 0,
    }),
      m());
  }, [m, o]);
  function g(C) {
    (G("tengu_extra_usage_inline_dialog_cancel", {
      from_step: C,
    }),
      e(void 0, {
        display: "skip",
      }));
  }
  function h() {
    (G("tengu_extra_usage_inline_dialog_enable_confirm", {}),
      n({
        s: "enabling",
        work: z1n().then(async (C) => {
          if (
            (G("tengu_extra_usage_inline_dialog_enable_result", {
              success: C,
            }),
            !C)
          )
            return !1;
          if (!A0())
            (xsl(),
              gn((x) => {
                if (!x.oauthAccount) return x;
                if (x.oauthAccount.hasExtraUsageEnabled === !0) return x;
                return {
                  ...x,
                  oauthAccount: {
                    ...x.oauthAccount,
                    hasExtraUsageEnabled: !0,
                  },
                };
              }));
          return (await m(!1), !0);
        }),
      }));
  }
  function y(C) {
    if (!C)
      n({
        s: "error",
        msg: "Couldn't turn on usage credits",
      });
  }
  function b(C, x) {
    switch (C) {
      case "continue":
        e("Continuing with usage credits");
        break;
      case "buy":
        if (!x.pm)
          (G("tengu_extra_usage_inline_dialog_fallback_browser", {
            reason: We("no_payment_method"),
          }),
            e(`No card on file \u2014 add a payment method at ${oQ}`));
        else
          n({
            s: "buy_select",
            pm: x.pm,
          });
        break;
      case "adjust":
        n({
          s: "adjust_limit",
          current: x.usage.monthly_limit,
        });
        break;
      case "auto_reload":
        if (!x.pm)
          (G("tengu_extra_usage_inline_dialog_fallback_browser", {
            reason: We("no_payment_method"),
          }),
            e(`No card on file \u2014 add a payment method at ${oQ}`));
        else
          n({
            s: "auto_reload_config",
            current: x.balance?.auto_reload_settings,
            pm: x.pm,
          });
        break;
      case "manage":
        (ac(oQ), e(`Opening ${oQ}`));
        break;
    }
  }
  function _(C, x, I) {
    G("tengu_extra_usage_inline_dialog_auto_reload", {
      enabled: C,
      threshold_cents: x,
      reload_to_cents: I,
      currency: a,
    });
    let k = pla(C, x, I, a),
      D = C
        ? k.then(async (P) => {
            if (P) await m(!1);
            return P;
          })
        : k;
    n({
      s: "auto_reload_saving",
      enabled: C,
      work: D,
    });
  }
  function S(C, x) {
    if (!C) {
      n({
        s: "error",
        msg: "Failed to update auto-reload",
      });
      return;
    }
    if (!x) m();
  }
  async function A(C, x) {
    if (
      (G("tengu_extra_usage_inline_dialog_buy_confirm", {
        amount_cents: C,
        preset: !!x,
        currency: a,
      }),
      n({
        s: "buy_purchasing",
      }),
      s)
    ) {
      if (!(await s().catch(() => !1))) {
        n({
          s: "error",
          msg: "Couldn't turn on usage credits \u2014 no charge was made.",
        });
        return;
      }
    }
    let I = x?.local_credit_minor_units ?? C;
    try {
      let k = await hla(
        x?.id
          ? {
              kind: "bundle",
              bundle: x,
            }
          : {
              kind: "custom",
              amountCents: C,
            },
      );
      if (k.payment_status === "success")
        (G("tengu_extra_usage_inline_dialog_buy_result", {
          status: We("success"),
        }),
          n({
            s: "buy_success",
            credit: I,
          }));
      else if (k.payment_status === "pending_invoice" && k.purchase_id)
        n({
          s: "buy_polling",
          purchaseId: k.purchase_id,
          credit: I,
        });
      else if (k.payment_status === "requires_action")
        (G("tengu_extra_usage_inline_dialog_buy_result", {
          status: We("3ds_fallback"),
        }),
          n({
            s: "error",
            msg: `Your card requires additional verification \u2014 this purchase was not completed. Try again at ${oQ}`,
          }));
      else
        n({
          s: "error",
          msg: "Unexpected purchase state",
        });
    } catch (k) {
      let D = V1n(k);
      if (R_(k, (P) => V1n(P) !== null))
        T(`Extra usage credit purchase failed: ${D ?? be(k)}`, {
          level: "error",
        });
      else ke(k);
      (G("tengu_extra_usage_inline_dialog_buy_result", {
        status: We("failed"),
      }),
        n({
          s: "error",
          msg: D ? `Purchase failed: ${D}` : "Purchase failed",
        }));
    }
  }
  async function v(C, x) {
    if (
      (G("tengu_extra_usage_inline_dialog_adjust_limit", {
        old_cents: x ?? void 0,
        new_cents: C ?? void 0,
        unlimited: C === null,
        currency: a,
      }),
      n({
        s: "adjusting",
      }),
      !(await K1n(C, a)).ok)
    ) {
      n({
        s: "error",
        msg: "Failed to update spend limit",
      });
      return;
    }
    e(
      C === null
        ? "Monthly limit set to unlimited"
        : `Monthly limit updated to ${Yy(C, a, "whole")}`,
    );
  }
  switch (t.s) {
    case "loading":
      return is.jsx(U, {
        paddingTop: 1,
        children: is.jsx(Vc, {
          message: "Loading usage credit status\u2026",
        }),
      });
    case "enabling":
      return is.jsx(Rsl, {
        message: "Turning on usage credits\u2026",
        work: t.work,
        onDone: y,
      });
    case "adjusting":
      return is.jsx(U, {
        paddingTop: 1,
        children: is.jsx(Vc, {
          message: "Updating spend limit\u2026",
        }),
      });
    case "auto_reload_saving":
      return t.enabled
        ? is.jsx(Rsl, {
            message: "Turning on auto-reload\u2026",
            work: t.work,
            onDone: (C) => S(C, !0),
          })
        : is.jsx(PlainAwait, {
            message: "Turning off auto-reload\u2026",
            work: t.work,
            onDone: (C) => S(C, !1),
          });
    case "buy_purchasing":
      return is.jsx(Lsl, {
        message: "Processing payment\u2026 (may take a few seconds)",
      });
    case "buy_success": {
      let C = `Added ${Yy(t.credit, a)} of usage credits`;
      return is.jsx(Qrf, {
        message: C,
        onDone: () => (xsl(), i ? i(C) : e(C)),
      });
    }
    case "buy_polling":
      return is.jsx(Jrf, {
        purchaseId: t.purchaseId,
        onSuccess: () =>
          n({
            s: "buy_success",
            credit: t.credit,
          }),
        onError: (C) =>
          n({
            s: "error",
            msg: C,
          }),
      });
    case "not_enabled":
      return is.jsx(Orf, {
        pm: t.pm,
        onConfirm: h,
        onCancel: () => g("not_enabled"),
      });
    case "enabled":
      return is.jsx(Nrf, {
        step: t,
        currency: a,
        onAction: (C) => b(C, t),
        onCancel: () => g("enabled"),
      });
    case "buy_select":
      return is.jsx(Brf, {
        pm: t.pm,
        presets: c,
        currency: a,
        onConfirm: (C) =>
          n({
            s: "buy_confirm",
            pm: t.pm,
            cents: C.local_price_minor_units,
            bundle: C,
          }),
        onCustom: () =>
          n({
            s: "buy_custom",
            pm: t.pm,
          }),
        onCancel: () => (r === "buy_select" ? g("buy_select") : void m()),
      });
    case "buy_custom":
      return is.jsx(jrf, {
        pm: t.pm,
        initialCents: t.cents,
        currency: a,
        onConfirm: (C) =>
          n({
            s: "buy_confirm",
            pm: t.pm,
            cents: C,
          }),
        onCancel: () =>
          n({
            s: "buy_select",
            pm: t.pm,
          }),
      });
    case "buy_confirm":
      return is.jsx(Urf, {
        pm: t.pm,
        cents: t.cents,
        bundle: t.bundle,
        currency: a,
        stripeProductId: d,
        onConfirm: () => A(t.cents, t.bundle),
        onCancel: () =>
          n(
            t.bundle
              ? {
                  s: "buy_select",
                  pm: t.pm,
                }
              : {
                  s: "buy_custom",
                  pm: t.pm,
                  cents: t.cents,
                },
          ),
      });
    case "adjust_limit":
      return is.jsx(Grf, {
        current: t.current,
        currency: a,
        onConfirm: (C) => v(C, t.current),
        onCancel: () => void m(),
      });
    case "auto_reload_config":
      return is.jsx(Vrf, {
        current: t.current,
        pm: t.pm,
        currency: a,
        onSave: (C, x) => _(!0, C, x),
        onTurnOff: () => _(!1),
        onCancel: () => void m(),
      });
    case "error":
      return is.jsx($rf, {
        msg: t.msg,
        onClose: () => g("error"),
      });
  }
}
function $rf(e) {
  let t = lq.c(9),
    { msg: n, onClose: r } = e,
    o;
  if (t[0] !== r)
    ((o = {
      "confirm:yes": () => {
        (ac(oQ), r());
      },
    }),
      (t[0] = r),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((s = {
      context: "Confirmation",
    }),
      (t[2] = s));
  else s = t[2];
  No(o, s);
  let i;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((i = is.jsxs(Tn, {
      children: [
        is.jsx(ht, {
          chord: "enter",
          action: `open ${oQ}`,
        }),
        is.jsx(ht, {
          chord: "escape",
          action: "cancel",
        }),
      ],
    })),
      (t[3] = i));
  else i = t[3];
  let a;
  if (t[4] !== n)
    ((a = is.jsx(U, {
      flexDirection: "column",
      gap: 1,
      children: is.jsx(w, {
        color: "error",
        children: n,
      }),
    })),
      (t[4] = n),
      (t[5] = a));
  else a = t[5];
  let l;
  if (t[6] !== r || t[7] !== a)
    ((l = is.jsx(zn, {
      title: "Usage credits",
      onCancel: r,
      color: "error",
      inputGuide: i,
      children: a,
    })),
      (t[6] = r),
      (t[7] = a),
      (t[8] = l));
  else l = t[8];
  return l;
}
function Gyt(e) {
  return `${e.brand ?? e.type} \xB7\xB7\xB7\xB7${e.last4 ?? ""}`;
}
function Orf(e) {
  let t = lq.c(15),
    { pm: n, onConfirm: r, onCancel: o } = e,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((s = is.jsx(w, {
      children: "Keep using Claude when you hit a limit.",
    })),
      (t[0] = s));
  else s = t[0];
  let i;
  if (t[1] !== n)
    ((i = n ? `Card on file: ${Gyt(n)}` : `No card on file \u2014 add one at ${oQ} before buying.`),
      (t[1] = n),
      (t[2] = i));
  else i = t[2];
  let a;
  if (t[3] !== i)
    ((a = is.jsx(w, {
      dimColor: !0,
      children: i,
    })),
      (t[3] = i),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((l = is.jsxs(w, {
      dimColor: !0,
      children: [
        "By turning on, you agree to turn on usage credits as defined in our Help Center article:",
        `
`,
        k8t,
      ],
    })),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] !== o || t[7] !== r)
    ((c = is.jsx(Kl, {
      confirmLabel: "Turn on",
      cancelLabel: "Cancel",
      onConfirm: r,
      onCancel: o,
    })),
      (t[6] = o),
      (t[7] = r),
      (t[8] = c));
  else c = t[8];
  let u;
  if (t[9] !== a || t[10] !== c)
    ((u = is.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [s, a, l, c],
    })),
      (t[9] = a),
      (t[10] = c),
      (t[11] = u));
  else u = t[11];
  let d;
  if (t[12] !== o || t[13] !== u)
    ((d = is.jsx(zn, {
      title: "Turn on usage credits",
      onCancel: o,
      color: "suggestion",
      children: u,
    })),
      (t[12] = o),
      (t[13] = u),
      (t[14] = d));
  else d = t[14];
  return d;
}
function Nrf(e) {
  let t = lq.c(52),
    { step: n, currency: r, onAction: o, onCancel: s } = e,
    { columns: i } = br(),
    a = Math.min(i - 6, 50),
    { usage: l, balance: c } = n,
    u;
  if (t[0] !== r || t[1] !== l.used_credits)
    ((u = l.used_credits !== null ? Yy(l.used_credits, r) : "\u2014"),
      (t[0] = r),
      (t[1] = l.used_credits),
      (t[2] = u));
  else u = t[2];
  let d = u,
    p;
  if (t[3] !== r || t[4] !== l.monthly_limit)
    ((p = l.monthly_limit !== null ? Yy(l.monthly_limit, r, "whole") : "Unlimited"),
      (t[3] = r),
      (t[4] = l.monthly_limit),
      (t[5] = p));
  else p = t[5];
  let f = p,
    m;
  if (t[6] !== l.utilization)
    ((m = l.utilization !== null ? Math.round(l.utilization) : 0),
      (t[6] = l.utilization),
      (t[7] = m));
  else m = t[7];
  let g = m,
    h;
  if (t[8] !== c || t[9] !== r)
    ((h = c ? Yy(c.amount, r) : "\u2014"), (t[8] = c), (t[9] = r), (t[10] = h));
  else h = t[10];
  let y = h,
    b = c?.auto_reload_settings?.enabled === !0,
    _;
  if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
    let Z = new Date();
    ((_ = new Date(Z.getFullYear(), Z.getMonth() + 1, 1).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })),
      (t[11] = _));
  } else _ = t[11];
  let S = _,
    A = l.is_enabled === !1,
    v = `${y} balance \xB7 auto-reload ${b ? "on" : "off"}
`,
    C;
  if (t[12] !== v)
    ((C = {
      label: v,
      value: "auto_reload",
    }),
      (t[12] = v),
      (t[13] = C));
  else C = t[13];
  let x;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((x = {
      label: "Buy more",
      value: "buy",
    }),
      (t[14] = x));
  else x = t[14];
  let I;
  if (t[15] !== A)
    ((I = A
      ? []
      : [
          {
            label: "Continue with usage credits",
            value: "continue",
          },
        ]),
      (t[15] = A),
      (t[16] = I));
  else I = t[16];
  let k, D;
  if (t[17] === Symbol.for("react.memo_cache_sentinel"))
    ((k = {
      label: "Adjust monthly limit",
      value: "adjust",
    }),
      (D = {
        label: "Manage on claude.ai",
        value: "manage",
      }),
      (t[17] = k),
      (t[18] = D));
  else ((k = t[17]), (D = t[18]));
  let P;
  if (t[19] !== C || t[20] !== I) ((P = [C, x, ...I, k, D]), (t[19] = C), (t[20] = I), (t[21] = P));
  else P = t[21];
  let O = P,
    L;
  if (t[22] !== A || t[23] !== l.disabled_reason)
    ((L =
      A &&
      is.jsx(w, {
        color: "warning",
        children:
          l.disabled_reason === "out_of_credits"
            ? "Out of usage credits \u2014 buy more below to keep going."
            : "You've hit your monthly limit \u2014 raise it below, or it resets next month.",
      })),
      (t[22] = A),
      (t[23] = l.disabled_reason),
      (t[24] = L));
  else L = t[24];
  let M;
  if (t[25] !== d)
    ((M = is.jsxs(w, {
      children: [d, " spent"],
    })),
      (t[25] = d),
      (t[26] = M));
  else M = t[26];
  let N = g / 100,
    B;
  if (t[27] !== N || t[28] !== a)
    ((B = is.jsx(ZW, {
      ratio: N,
      width: a,
      fillColor: "rate_limit_fill",
      emptyColor: "rate_limit_empty",
    })),
      (t[27] = N),
      (t[28] = a),
      (t[29] = B));
  else B = t[29];
  let $;
  if (t[30] !== g)
    (($ = is.jsxs(w, {
      children: [g, "% used"],
    })),
      (t[30] = g),
      (t[31] = $));
  else $ = t[31];
  let q;
  if (t[32] !== M || t[33] !== B || t[34] !== $)
    ((q = is.jsxs(U, {
      flexDirection: "row",
      gap: 1,
      children: [M, B, $],
    })),
      (t[32] = M),
      (t[33] = B),
      (t[34] = $),
      (t[35] = q));
  else q = t[35];
  let W;
  if (t[36] !== f)
    ((W = is.jsxs(w, {
      dimColor: !0,
      children: ["Resets ", S, " \xB7 ", f, " monthly limit"],
    })),
      (t[36] = f),
      (t[37] = W));
  else W = t[37];
  let V;
  if (t[38] !== q || t[39] !== W)
    ((V = is.jsxs(U, {
      flexDirection: "column",
      children: [q, W],
    })),
      (t[38] = q),
      (t[39] = W),
      (t[40] = V));
  else V = t[40];
  let Y;
  if (t[41] !== o || t[42] !== s || t[43] !== O)
    ((Y = is.jsx(Sr, {
      options: O,
      onChange: o,
      onCancel: s,
      visibleOptionCount: O.length,
    })),
      (t[41] = o),
      (t[42] = s),
      (t[43] = O),
      (t[44] = Y));
  else Y = t[44];
  let z;
  if (t[45] !== L || t[46] !== V || t[47] !== Y)
    ((z = is.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [L, V, Y],
    })),
      (t[45] = L),
      (t[46] = V),
      (t[47] = Y),
      (t[48] = z));
  else z = t[48];
  let K;
  if (t[49] !== s || t[50] !== z)
    ((K = is.jsx(zn, {
      title: "Usage credits",
      onCancel: s,
      color: "suggestion",
      children: z,
    })),
      (t[49] = s),
      (t[50] = z),
      (t[51] = K));
  else K = t[51];
  return K;
}
function Brf(e) {
  let t = lq.c(27),
    { pm: n, presets: r, currency: o, onConfirm: s, onCustom: i, onCancel: a } = e,
    l;
  if (t[0] !== o || t[1] !== r) {
    let b;
    if (t[3] !== o)
      ((b = (A, v) => {
        let C =
          A.credit_minor_units > 0
            ? Math.round((A.discount_minor_units / A.credit_minor_units) * 100)
            : 0;
        return {
          label: Yy(A.local_credit_minor_units, o, "fit"),
          description: C > 0 ? `Save ${C}%` : void 0,
          value: `p${v}`,
        };
      }),
        (t[3] = o),
        (t[4] = b));
    else b = t[4];
    let _, S;
    if (t[5] === Symbol.for("react.memo_cache_sentinel"))
      ((_ = {
        label: "Custom amount\u2026",
        value: "custom",
      }),
        (S = {
          label: "Cancel",
          value: "cancel",
        }),
        (t[5] = _),
        (t[6] = S));
    else ((_ = t[5]), (S = t[6]));
    ((l = [...r.map(b), _, S]), (t[0] = o), (t[1] = r), (t[2] = l));
  } else l = t[2];
  let c = l,
    u;
  if (t[7] !== a || t[8] !== s || t[9] !== i || t[10] !== r)
    ((u = function (_) {
      if (_ === "custom") return i();
      if (_ === "cancel") return a();
      let S = Number(_.slice(1));
      s(r[S]);
    }),
      (t[7] = a),
      (t[8] = s),
      (t[9] = i),
      (t[10] = r),
      (t[11] = u));
  else u = t[11];
  let d = u,
    p;
  if (t[12] !== n) ((p = Gyt(n)), (t[12] = n), (t[13] = p));
  else p = t[13];
  let f;
  if (t[14] !== p)
    ((f = is.jsxs(w, {
      dimColor: !0,
      children: ["Payment: ", p],
    })),
      (t[14] = p),
      (t[15] = f));
  else f = t[15];
  let m;
  if (t[16] !== d || t[17] !== a || t[18] !== c)
    ((m = is.jsx(Sr, {
      options: c,
      onChange: d,
      onCancel: a,
      visibleOptionCount: c.length,
    })),
      (t[16] = d),
      (t[17] = a),
      (t[18] = c),
      (t[19] = m));
  else m = t[19];
  let g;
  if (t[20] === Symbol.for("react.memo_cache_sentinel"))
    ((g = is.jsx(w, {
      dimColor: !0,
      children: "By confirming, you allow Anthropic to charge your card in the amount above.",
    })),
      (t[20] = g));
  else g = t[20];
  let h;
  if (t[21] !== f || t[22] !== m)
    ((h = is.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [f, m, g],
    })),
      (t[21] = f),
      (t[22] = m),
      (t[23] = h));
  else h = t[23];
  let y;
  if (t[24] !== a || t[25] !== h)
    ((y = is.jsx(zn, {
      title: "Buy usage credits",
      onCancel: a,
      color: "suggestion",
      children: h,
    })),
      (t[24] = a),
      (t[25] = h),
      (t[26] = y));
  else y = t[26];
  return y;
}
function o6e(e) {
  let t = lq.c(11),
    { label: n, value: r, bold: o, dim: s } = e,
    i;
  if (t[0] !== o || t[1] !== s || t[2] !== n)
    ((i = is.jsx(w, {
      dimColor: s,
      bold: o,
      children: n,
    })),
      (t[0] = o),
      (t[1] = s),
      (t[2] = n),
      (t[3] = i));
  else i = t[3];
  let a;
  if (t[4] !== o || t[5] !== s || t[6] !== r)
    ((a = is.jsx(w, {
      dimColor: s,
      bold: o,
      children: r,
    })),
      (t[4] = o),
      (t[5] = s),
      (t[6] = r),
      (t[7] = a));
  else a = t[7];
  let l;
  if (t[8] !== i || t[9] !== a)
    ((l = is.jsxs(U, {
      justifyContent: "space-between",
      children: [i, a],
    })),
      (t[8] = i),
      (t[9] = a),
      (t[10] = l));
  else l = t[10];
  return l;
}
function Urf(e) {
  let t = lq.c(76),
    { pm: n, cents: r, bundle: o, currency: s, stripeProductId: i, onConfirm: a, onCancel: l } = e,
    c = o ? o.local_credit_minor_units : r,
    u = c - r,
    d;
  if (t[0] !== c || t[1] !== u)
    ((d = c > 0 && u > 0 ? Math.round((u / c) * 100) : 0), (t[0] = c), (t[1] = u), (t[2] = d));
  else d = t[2];
  let p = d,
    [f, m] = mg.useState("loading"),
    g,
    h;
  if (t[3] !== r || t[4] !== s || t[5] !== i)
    ((g = () => {
      let ee = !0;
      return (
        yla(r, s, i).then((ce) => {
          if (ee) m(ce);
        }),
        () => {
          ee = !1;
        }
      );
    }),
      (h = [r, s, i]),
      (t[3] = r),
      (t[4] = s),
      (t[5] = i),
      (t[6] = g),
      (t[7] = h));
  else ((g = t[6]), (h = t[7]));
  mg.useEffect(g, h);
  let y = f === "loading",
    b = f === null,
    _ = y || b ? 0 : f.tax_minor_units,
    S = r + _,
    A;
  if (t[8] !== s || t[9] !== y || t[10] !== b || t[11] !== S)
    ((A = b
      ? [
          {
            label: "Go back",
            value: "no",
          },
        ]
      : [
          {
            label: y ? "Pay (calculating\u2026)" : `Pay ${Yy(S, s)} now`,
            value: "yes",
            disabled: y,
          },
          {
            label: "Go back",
            value: "no",
          },
        ]),
      (t[8] = s),
      (t[9] = y),
      (t[10] = b),
      (t[11] = S),
      (t[12] = A));
  else A = t[12];
  let v = A,
    { columns: C } = br(),
    x = Math.max(0, Math.min(C - 6, 44)),
    I = y || b ? "Tax" : (f.tax_label ?? "Tax"),
    k;
  if (t[13] !== x) ((k = "\u2500".repeat(x)), (t[13] = x), (t[14] = k));
  else k = t[14];
  let D;
  if (t[15] !== k)
    ((D = is.jsx(w, {
      dimColor: !0,
      children: k,
    })),
      (t[15] = k),
      (t[16] = D));
  else D = t[16];
  let P = D,
    O;
  if (t[17] !== c || t[18] !== s) ((O = Yy(c, s)), (t[17] = c), (t[18] = s), (t[19] = O));
  else O = t[19];
  let L;
  if (t[20] !== O)
    ((L = is.jsx(o6e, {
      label: "Subtotal",
      value: O,
    })),
      (t[20] = O),
      (t[21] = L));
  else L = t[21];
  let M;
  if (t[22] !== r || t[23] !== s || t[24] !== u || t[25] !== p || t[26] !== P)
    ((M =
      u > 0 &&
      is.jsxs(is.Fragment, {
        children: [
          is.jsx(o6e, {
            label: `Discount${p > 0 ? ` (${p}%)` : ""}`,
            value: `\u2212${Yy(u, s)}`,
          }),
          P,
          is.jsx(o6e, {
            label: "Subtotal after discount",
            value: Yy(r, s),
          }),
        ],
      })),
      (t[22] = r),
      (t[23] = s),
      (t[24] = u),
      (t[25] = p),
      (t[26] = P),
      (t[27] = M));
  else M = t[27];
  let N;
  if (t[28] !== s || t[29] !== f || t[30] !== I || t[31] !== y || t[32] !== b)
    ((N = y
      ? is.jsx(o6e, {
          label: I,
          value: "\u2026",
          dim: !0,
        })
      : b
        ? is.jsx(o6e, {
            label: I,
            value: "\u2014",
            dim: !0,
          })
        : is.jsx(o6e, {
            label: `${I} (${Frf(f.tax_rate_pct)})`,
            value: Yy(f.tax_minor_units, s),
          })),
      (t[28] = s),
      (t[29] = f),
      (t[30] = I),
      (t[31] = y),
      (t[32] = b),
      (t[33] = N));
  else N = t[33];
  let B;
  if (t[34] !== s || t[35] !== y || t[36] !== b || t[37] !== S)
    ((B = y ? "\u2026" : b ? "\u2014" : Yy(S, s)),
      (t[34] = s),
      (t[35] = y),
      (t[36] = b),
      (t[37] = S),
      (t[38] = B));
  else B = t[38];
  let $;
  if (t[39] !== B)
    (($ = is.jsx(o6e, {
      label: "Total due",
      value: B,
      bold: !0,
    })),
      (t[39] = B),
      (t[40] = $));
  else $ = t[40];
  let q;
  if (t[41] !== x || t[42] !== P || t[43] !== N || t[44] !== $ || t[45] !== L || t[46] !== M)
    ((q = is.jsxs(U, {
      flexDirection: "column",
      width: x,
      children: [L, M, N, P, $],
    })),
      (t[41] = x),
      (t[42] = P),
      (t[43] = N),
      (t[44] = $),
      (t[45] = L),
      (t[46] = M),
      (t[47] = q));
  else q = t[47];
  let W;
  if (t[48] === Symbol.for("react.memo_cache_sentinel"))
    ((W = is.jsx(w, {
      children: "Payment ",
    })),
      (t[48] = W));
  else W = t[48];
  let V;
  if (t[49] !== n) ((V = Gyt(n)), (t[49] = n), (t[50] = V));
  else V = t[50];
  let Y;
  if (t[51] !== V)
    ((Y = is.jsx(w, {
      dimColor: !0,
      children: V,
    })),
      (t[51] = V),
      (t[52] = Y));
  else Y = t[52];
  let z;
  if (t[53] !== x || t[54] !== Y)
    ((z = is.jsxs(U, {
      width: x,
      children: [W, Y],
    })),
      (t[53] = x),
      (t[54] = Y),
      (t[55] = z));
  else z = t[55];
  let K;
  if (t[56] !== b)
    ((K =
      b &&
      is.jsx(w, {
        color: "warning",
        children: `Couldn't calculate tax. Try again, or buy at ${oQ}`,
      })),
      (t[56] = b),
      (t[57] = K));
  else K = t[57];
  let Z;
  if (t[58] !== l || t[59] !== a)
    ((Z = (ee) => (ee === "yes" ? a() : l())), (t[58] = l), (t[59] = a), (t[60] = Z));
  else Z = t[60];
  let J;
  if (t[61] !== l || t[62] !== v || t[63] !== Z)
    ((J = is.jsx(Sr, {
      options: v,
      onChange: Z,
      onCancel: l,
      visibleOptionCount: 2,
    })),
      (t[61] = l),
      (t[62] = v),
      (t[63] = Z),
      (t[64] = J));
  else J = t[64];
  let ne;
  if (t[65] !== b)
    ((ne =
      !b &&
      is.jsx(w, {
        dimColor: !0,
        children: "By confirming, you allow Anthropic to charge your card in the amount above.",
      })),
      (t[65] = b),
      (t[66] = ne));
  else ne = t[66];
  let oe;
  if (t[67] !== q || t[68] !== z || t[69] !== K || t[70] !== J || t[71] !== ne)
    ((oe = is.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [q, z, K, J, ne],
    })),
      (t[67] = q),
      (t[68] = z),
      (t[69] = K),
      (t[70] = J),
      (t[71] = ne),
      (t[72] = oe));
  else oe = t[72];
  let re;
  if (t[73] !== l || t[74] !== oe)
    ((re = is.jsx(zn, {
      title: "Buy usage credits",
      onCancel: l,
      color: "suggestion",
      children: oe,
    })),
      (t[73] = l),
      (t[74] = oe),
      (t[75] = re));
  else re = t[75];
  return re;
}
function Frf(e) {
  return `${Number(e.toFixed(2))}%`;
}
function jrf(e) {
  let t = lq.c(9),
    { pm: n, initialCents: r, currency: o, onConfirm: s, onCancel: i } = e,
    a;
  if (t[0] !== n) ((a = Gyt(n)), (t[0] = n), (t[1] = a));
  else a = t[1];
  let l = `Payment: ${a}`,
    c = r ? String(r / 100) : "75",
    u = o === "USD" ? Prf : void 0,
    d;
  if (t[2] !== o || t[3] !== i || t[4] !== s || t[5] !== l || t[6] !== c || t[7] !== u)
    ((d = is.jsx(Xrf, {
      title: "Buy usage credits",
      subtitle: l,
      initial: c,
      minCents: u,
      currency: o,
      footer: "By confirming, you allow Anthropic to charge your card in the amount above.",
      onSubmit: s,
      onCancel: i,
    })),
      (t[2] = o),
      (t[3] = i),
      (t[4] = s),
      (t[5] = l),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d));
  else d = t[8];
  return d;
}
function Grf(e) {
  let t = lq.c(45),
    { current: n, currency: r, onConfirm: o, onCancel: s } = e,
    { columns: i } = br(),
    a;
  if (t[0] !== n) ((a = n !== null ? String(Math.round(n / 100)) : "150"), (t[0] = n), (t[1] = a));
  else a = t[1];
  let l = a,
    [c, u] = mg.useState(l),
    [d, p] = mg.useState(l.length),
    [f, m] = mg.useState(0),
    g;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((g = ["set", "unlimited", "cancel"]), (t[2] = g));
  else g = t[2];
  let h = g,
    [y, b] = mg.useState(0),
    _;
  if (t[3] !== c) {
    let ne;
    if (t[5] === Symbol.for("react.memo_cache_sentinel")) ((ne = /[^0-9.]/g), (t[5] = ne));
    else ne = t[5];
    ((_ = c.replace(ne, "")), (t[3] = c), (t[4] = _));
  } else _ = t[4];
  let S = parseFloat(_),
    A;
  if (t[6] !== S) ((A = isNaN(S) ? 0 : Math.round(S * 100)), (t[6] = S), (t[7] = A));
  else A = t[7];
  let v = A,
    C;
  if (t[8] !== y || t[9] !== v || t[10] !== s || t[11] !== o)
    ((C = function () {
      let oe = h[y];
      if (oe === "set") {
        if (v <= 0) return;
        o(v);
      } else if (oe === "unlimited") o(null);
      else s();
    }),
      (t[8] = y),
      (t[9] = v),
      (t[10] = s),
      (t[11] = o),
      (t[12] = C));
  else C = t[12];
  let x = C,
    I;
  if (t[13] !== x || t[14] !== f)
    ((I = function (oe) {
      if (oe.key === "tab") {
        (oe.preventDefault(), m(qrf));
        return;
      }
      if (f !== 1) return;
      if (oe.key === "up") (oe.preventDefault(), m(0));
      else if (oe.key === "down") oe.preventDefault();
      else if (oe.key === "left") (oe.preventDefault(), b(Wrf));
      else if (oe.key === "right") (oe.preventDefault(), b((re) => Math.min(h.length - 1, re + 1)));
      else if (oe.key === "return") (oe.preventDefault(), x());
    }),
      (t[13] = x),
      (t[14] = f),
      (t[15] = I));
  else I = t[15];
  let k = I,
    D;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((D = {
      set: "Set limit",
      unlimited: "Set to unlimited",
      cancel: "Cancel",
    }),
      (t[16] = D));
  else D = t[16];
  let P = D,
    O;
  if (t[17] === Symbol.for("react.memo_cache_sentinel"))
    ((O = is.jsx(w, {
      children: "You can set a maximum amount you can spend on usage credits per month.",
    })),
      (t[17] = O));
  else O = t[17];
  let L = f === 0 ? "suggestion" : "inactive",
    M;
  if (t[18] !== r) ((M = jyt(r)), (t[18] = r), (t[19] = M));
  else M = t[19];
  let N;
  if (t[20] !== M)
    ((N = is.jsx(w, {
      children: M,
    })),
      (t[20] = M),
      (t[21] = N));
  else N = t[21];
  let B, $;
  if (t[22] === Symbol.for("react.memo_cache_sentinel"))
    ((B = () => m(1)), ($ = () => m(1)), (t[22] = B), (t[23] = $));
  else ((B = t[22]), ($ = t[23]));
  let q = f === 0,
    W = f === 0,
    V;
  if (t[24] !== i || t[25] !== d || t[26] !== q || t[27] !== W || t[28] !== c)
    ((V = is.jsx(Ta, {
      value: c,
      onChange: u,
      onSubmit: B,
      onHistoryDown: $,
      disableCursorMovementForUpDownKeys: !0,
      focus: q,
      showCursor: W,
      columns: i,
      cursorOffset: d,
      onChangeCursorOffset: p,
    })),
      (t[24] = i),
      (t[25] = d),
      (t[26] = q),
      (t[27] = W),
      (t[28] = c),
      (t[29] = V));
  else V = t[29];
  let Y;
  if (t[30] !== N || t[31] !== V || t[32] !== L)
    ((Y = is.jsxs(U, {
      borderStyle: "single",
      borderColor: L,
      paddingX: 1,
      children: [N, V],
    })),
      (t[30] = N),
      (t[31] = V),
      (t[32] = L),
      (t[33] = Y));
  else Y = t[33];
  let z;
  if (t[34] === Symbol.for("react.memo_cache_sentinel"))
    ((z = is.jsx(w, {
      dimColor: !0,
      children: "This spend limit goes into effect immediately.",
    })),
      (t[34] = z));
  else z = t[34];
  let K;
  if (t[35] !== y || t[36] !== f)
    ((K = is.jsx(U, {
      flexDirection: "row",
      gap: 2,
      children: h.map((ne, oe) =>
        is.jsxs(
          w,
          {
            color: f === 1 && y === oe ? "suggestion" : void 0,
            children: [f === 1 && y === oe ? nt.pointer : " ", " ", P[ne]],
          },
          ne,
        ),
      ),
    })),
      (t[35] = y),
      (t[36] = f),
      (t[37] = K));
  else K = t[37];
  let Z;
  if (t[38] !== k || t[39] !== Y || t[40] !== K)
    ((Z = is.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: k,
      children: [O, Y, z, K],
    })),
      (t[38] = k),
      (t[39] = Y),
      (t[40] = K),
      (t[41] = Z));
  else Z = t[41];
  let J;
  if (t[42] !== s || t[43] !== Z)
    ((J = is.jsx(zn, {
      title: "Set monthly spend limit",
      onCancel: s,
      color: "suggestion",
      children: Z,
    })),
      (t[42] = s),
      (t[43] = Z),
      (t[44] = J));
  else J = t[44];
  return J;
}
function Wrf(e) {
  return Math.max(0, e - 1);
}
function qrf(e) {
  return e === 0 ? 1 : 0;
}
function Vrf(e) {
  let t = lq.c(103),
    { current: n, pm: r, currency: o, onSave: s, onTurnOff: i, onCancel: a } = e,
    { columns: l } = br(),
    c = n?.enabled === !0,
    u;
  if (t[0] !== n)
    ((u = n?.threshold_in_minor_units ? String(Math.round(n.threshold_in_minor_units / 100)) : "5"),
      (t[0] = n),
      (t[1] = u));
  else u = t[1];
  let d = u,
    p;
  if (t[2] !== n)
    ((p = n?.reload_to_in_minor_units
      ? String(Math.round(n.reload_to_in_minor_units / 100))
      : "15"),
      (t[2] = n),
      (t[3] = p));
  else p = t[3];
  let f = p,
    [m, g] = mg.useState(d),
    [h, y] = mg.useState(f),
    [b, _] = mg.useState(d.length),
    [S, A] = mg.useState(f.length),
    [v, C] = mg.useState(0),
    x;
  if (t[4] !== c)
    ((x = c ? ["save", "off", "cancel"] : ["save", "cancel"]), (t[4] = c), (t[5] = x));
  else x = t[5];
  let I = x,
    [k, D] = mg.useState(0),
    P;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((P = function (nn) {
      let Ln = parseFloat(nn.replace(/[^0-9.]/g, ""));
      return isNaN(Ln) || Ln <= 0 ? 0 : Math.round(Ln * 100);
    }),
      (t[6] = P));
  else P = t[6];
  let O = P,
    L;
  if (t[7] !== m) ((L = O(m)), (t[7] = m), (t[8] = L));
  else L = t[8];
  let M = L,
    N;
  if (t[9] !== h) ((N = O(h)), (t[9] = h), (t[10] = N));
  else N = t[10];
  let B = N,
    $;
  if (t[11] !== o || t[12] !== B || t[13] !== M)
    (($ =
      M <= 0 || B <= 0
        ? "Enter an amount"
        : B <= M
          ? "Reload-to must be above threshold"
          : o === "USD" && B - M < ksl
            ? `Reload must be at least ${Yy(ksl, o, "whole")} above threshold`
            : ""),
      (t[11] = o),
      (t[12] = B),
      (t[13] = M),
      (t[14] = $));
  else $ = t[14];
  let q = $,
    W = !q,
    V;
  if (
    t[15] !== k ||
    t[16] !== I ||
    t[17] !== a ||
    t[18] !== s ||
    t[19] !== i ||
    t[20] !== B ||
    t[21] !== M ||
    t[22] !== W
  )
    ((V = function () {
      let nn = I[k];
      if (nn === "save") {
        if (!W) return;
        s(M, B);
      } else if (nn === "off") i();
      else a();
    }),
      (t[15] = k),
      (t[16] = I),
      (t[17] = a),
      (t[18] = s),
      (t[19] = i),
      (t[20] = B),
      (t[21] = M),
      (t[22] = W),
      (t[23] = V));
  else V = t[23];
  let Y = V,
    z;
  if (t[24] === Symbol.for("react.memo_cache_sentinel")) ((z = () => C(Yrf)), (t[24] = z));
  else z = t[24];
  let K = z,
    Z;
  if (t[25] === Symbol.for("react.memo_cache_sentinel")) ((Z = () => C(Krf)), (t[25] = Z));
  else Z = t[25];
  let J = Z,
    ne;
  if (t[26] !== Y || t[27] !== I.length || t[28] !== v)
    ((ne = function (nn) {
      if (nn.key === "tab") {
        if ((nn.preventDefault(), nn.shift)) K();
        else J();
        return;
      }
      if (v !== 2) return;
      if (nn.key === "up") (nn.preventDefault(), K());
      else if (nn.key === "down") nn.preventDefault();
      else if (nn.key === "left") (nn.preventDefault(), D(zrf));
      else if (nn.key === "right") (nn.preventDefault(), D((Ln) => Math.min(I.length - 1, Ln + 1)));
      else if (nn.key === "return") (nn.preventDefault(), Y());
    }),
      (t[26] = Y),
      (t[27] = I.length),
      (t[28] = v),
      (t[29] = ne));
  else ne = t[29];
  let oe = ne,
    re = c ? "Agree and save" : "Agree and turn on",
    ee;
  if (t[30] !== re)
    ((ee = {
      save: re,
      off: "Turn off",
      cancel: "Cancel",
    }),
      (t[30] = re),
      (t[31] = ee));
  else ee = t[31];
  let ce = ee,
    ae;
  if (t[32] !== c)
    ((ae =
      c &&
      is.jsx(w, {
        color: "success",
        children: " \xB7 Currently on",
      })),
      (t[32] = c),
      (t[33] = ae));
  else ae = t[33];
  let de;
  if (t[34] !== ae)
    ((de = is.jsxs(w, {
      children: ["Automatically buy more usage credits when your balance is low.", ae],
    })),
      (t[34] = ae),
      (t[35] = de));
  else de = t[35];
  let Ee;
  if (t[36] !== r) ((Ee = Gyt(r)), (t[36] = r), (t[37] = Ee));
  else Ee = t[37];
  let me;
  if (t[38] !== Ee)
    ((me = is.jsxs(w, {
      dimColor: !0,
      children: ["Card on file: ", Ee],
    })),
      (t[38] = Ee),
      (t[39] = me));
  else me = t[39];
  let pe;
  if (t[40] === Symbol.for("react.memo_cache_sentinel"))
    ((pe = is.jsx(w, {
      dimColor: !0,
      children: "When usage credit balance falls below:",
    })),
      (t[40] = pe));
  else pe = t[40];
  let ge = v === 0 ? "suggestion" : "inactive",
    he;
  if (t[41] !== o) ((he = jyt(o)), (t[41] = o), (t[42] = he));
  else he = t[42];
  let ie;
  if (t[43] !== he)
    ((ie = is.jsx(w, {
      children: he,
    })),
      (t[43] = he),
      (t[44] = ie));
  else ie = t[44];
  let le, He;
  if (t[45] === Symbol.for("react.memo_cache_sentinel"))
    ((le = () => C(1)), (He = () => C(1)), (t[45] = le), (t[46] = He));
  else ((le = t[45]), (He = t[46]));
  let ye = v === 0,
    ue = v === 0,
    we;
  if (t[47] !== l || t[48] !== b || t[49] !== ye || t[50] !== ue || t[51] !== m)
    ((we = is.jsx(Ta, {
      value: m,
      onChange: g,
      onSubmit: le,
      onHistoryDown: He,
      disableCursorMovementForUpDownKeys: !0,
      focus: ye,
      showCursor: ue,
      columns: l,
      cursorOffset: b,
      onChangeCursorOffset: _,
    })),
      (t[47] = l),
      (t[48] = b),
      (t[49] = ye),
      (t[50] = ue),
      (t[51] = m),
      (t[52] = we));
  else we = t[52];
  let Ce;
  if (t[53] !== ge || t[54] !== ie || t[55] !== we)
    ((Ce = is.jsxs(U, {
      flexDirection: "column",
      children: [
        pe,
        is.jsxs(U, {
          borderStyle: "single",
          borderColor: ge,
          paddingX: 1,
          children: [ie, we],
        }),
      ],
    })),
      (t[53] = ge),
      (t[54] = ie),
      (t[55] = we),
      (t[56] = Ce));
  else Ce = t[56];
  let Ie;
  if (t[57] === Symbol.for("react.memo_cache_sentinel"))
    ((Ie = is.jsx(w, {
      dimColor: !0,
      children: "Reload balance to:",
    })),
      (t[57] = Ie));
  else Ie = t[57];
  let Ve = v === 1 ? "suggestion" : "inactive",
    Ze;
  if (t[58] !== o) ((Ze = jyt(o)), (t[58] = o), (t[59] = Ze));
  else Ze = t[59];
  let Be;
  if (t[60] !== Ze)
    ((Be = is.jsx(w, {
      children: Ze,
    })),
      (t[60] = Ze),
      (t[61] = Be));
  else Be = t[61];
  let Me, Ue, tt;
  if (t[62] === Symbol.for("react.memo_cache_sentinel"))
    ((Me = () => C(2)),
      (Ue = () => C(0)),
      (tt = () => C(2)),
      (t[62] = Me),
      (t[63] = Ue),
      (t[64] = tt));
  else ((Me = t[62]), (Ue = t[63]), (tt = t[64]));
  let bt = v === 1,
    Ke = v === 1,
    Et;
  if (t[65] !== l || t[66] !== S || t[67] !== h || t[68] !== bt || t[69] !== Ke)
    ((Et = is.jsx(Ta, {
      value: h,
      onChange: y,
      onSubmit: Me,
      onHistoryUp: Ue,
      onHistoryDown: tt,
      disableCursorMovementForUpDownKeys: !0,
      focus: bt,
      showCursor: Ke,
      columns: l,
      cursorOffset: S,
      onChangeCursorOffset: A,
    })),
      (t[65] = l),
      (t[66] = S),
      (t[67] = h),
      (t[68] = bt),
      (t[69] = Ke),
      (t[70] = Et));
  else Et = t[70];
  let ct;
  if (t[71] !== Ve || t[72] !== Be || t[73] !== Et)
    ((ct = is.jsxs(U, {
      flexDirection: "column",
      children: [
        Ie,
        is.jsxs(U, {
          borderStyle: "single",
          borderColor: Ve,
          paddingX: 1,
          children: [Be, Et],
        }),
      ],
    })),
      (t[71] = Ve),
      (t[72] = Be),
      (t[73] = Et),
      (t[74] = ct));
  else ct = t[74];
  let Je;
  if (t[75] !== r) ((Je = Gyt(r)), (t[75] = r), (t[76] = Je));
  else Je = t[76];
  let gt;
  if (t[77] !== Je)
    ((gt = is.jsxs(w, {
      dimColor: !0,
      children: [
        "By selecting Agree, you authorize Anthropic to automatically charge",
        " ",
        Je,
        " on a recurring basis whenever your balance reaches the threshold, per the Consumer Terms (",
        Rrf,
        "). Turn off any time here or at ",
        oQ,
        ".",
      ],
    })),
      (t[77] = Je),
      (t[78] = gt));
  else gt = t[78];
  let st;
  if (t[79] !== k || t[80] !== ce || t[81] !== I || t[82] !== v)
    ((st = I.map((Dn, nn) =>
      is.jsxs(
        w,
        {
          color: v === 2 && k === nn ? "suggestion" : void 0,
          children: [v === 2 && k === nn ? nt.pointer : " ", " ", ce[Dn]],
        },
        Dn,
      ),
    )),
      (t[79] = k),
      (t[80] = ce),
      (t[81] = I),
      (t[82] = v),
      (t[83] = st));
  else st = t[83];
  let xt;
  if (t[84] !== k || t[85] !== I || t[86] !== q || t[87] !== v)
    ((xt =
      q &&
      v === 2 &&
      I[k] === "save" &&
      is.jsxs(w, {
        color: "error",
        children: ["\xB7 ", q],
      })),
      (t[84] = k),
      (t[85] = I),
      (t[86] = q),
      (t[87] = v),
      (t[88] = xt));
  else xt = t[88];
  let vt;
  if (t[89] !== st || t[90] !== xt)
    ((vt = is.jsxs(U, {
      flexDirection: "row",
      gap: 2,
      children: [st, xt],
    })),
      (t[89] = st),
      (t[90] = xt),
      (t[91] = vt));
  else vt = t[91];
  let jt;
  if (
    t[92] !== oe ||
    t[93] !== de ||
    t[94] !== me ||
    t[95] !== Ce ||
    t[96] !== ct ||
    t[97] !== gt ||
    t[98] !== vt
  )
    ((jt = is.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: oe,
      children: [de, me, Ce, ct, gt, vt],
    })),
      (t[92] = oe),
      (t[93] = de),
      (t[94] = me),
      (t[95] = Ce),
      (t[96] = ct),
      (t[97] = gt),
      (t[98] = vt),
      (t[99] = jt));
  else jt = t[99];
  let en;
  if (t[100] !== a || t[101] !== jt)
    ((en = is.jsx(zn, {
      title: "Auto-reload",
      onCancel: a,
      color: "suggestion",
      children: jt,
    })),
      (t[100] = a),
      (t[101] = jt),
      (t[102] = en));
  else en = t[102];
  return en;
}
function zrf(e) {
  return Math.max(0, e - 1);
}
function Krf(e) {
  return e === 2 ? 2 : e + 1;
}
function Yrf(e) {
  return e === 0 ? 0 : e - 1;
}
function Xrf(e) {
  let t = lq.c(39),
    {
      title: n,
      subtitle: r,
      initial: o,
      minCents: s,
      currency: i,
      footer: a,
      onSubmit: l,
      onCancel: c,
    } = e,
    { columns: u } = br(),
    [d, p] = mg.useState(o),
    [f, m] = mg.useState(o.length),
    g;
  if (t[0] !== d) {
    let M;
    if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((M = /[^0-9.]/g), (t[2] = M));
    else M = t[2];
    ((g = d.replace(M, "")), (t[0] = d), (t[1] = g));
  } else g = t[1];
  let h = parseFloat(g),
    y;
  if (t[3] !== h) ((y = isNaN(h) ? 0 : Math.round(h * 100)), (t[3] = h), (t[4] = y));
  else y = t[4];
  let b = y,
    _ = s !== void 0 && b > 0 && b < s,
    S;
  if (t[5] !== b || t[6] !== l || t[7] !== _)
    ((S = function () {
      if (b <= 0 || _) return;
      l(b);
    }),
      (t[5] = b),
      (t[6] = l),
      (t[7] = _),
      (t[8] = S));
  else S = t[8];
  let A = S,
    v;
  if (t[9] !== r)
    ((v = is.jsx(w, {
      dimColor: !0,
      children: r,
    })),
      (t[9] = r),
      (t[10] = v));
  else v = t[10];
  let C;
  if (t[11] !== i) ((C = jyt(i)), (t[11] = i), (t[12] = C));
  else C = t[12];
  let x;
  if (t[13] !== C)
    ((x = is.jsx(w, {
      children: C,
    })),
      (t[13] = C),
      (t[14] = x));
  else x = t[14];
  let I;
  if (t[15] !== u || t[16] !== f || t[17] !== c || t[18] !== A || t[19] !== d)
    ((I = is.jsx(Ta, {
      value: d,
      onChange: p,
      onSubmit: A,
      onExit: c,
      focus: !0,
      showCursor: !0,
      columns: u,
      cursorOffset: f,
      onChangeCursorOffset: m,
    })),
      (t[15] = u),
      (t[16] = f),
      (t[17] = c),
      (t[18] = A),
      (t[19] = d),
      (t[20] = I));
  else I = t[20];
  let k;
  if (t[21] !== x || t[22] !== I)
    ((k = is.jsxs(U, {
      flexDirection: "row",
      gap: 1,
      children: [x, I],
    })),
      (t[21] = x),
      (t[22] = I),
      (t[23] = k));
  else k = t[23];
  let D;
  if (t[24] !== a)
    ((D =
      a &&
      is.jsx(w, {
        dimColor: !0,
        children: a,
      })),
      (t[24] = a),
      (t[25] = D));
  else D = t[25];
  let P;
  if (t[26] !== i || t[27] !== s || t[28] !== _)
    ((P =
      _ &&
      s !== void 0 &&
      is.jsxs(w, {
        color: "error",
        children: ["Minimum is ", Yy(s, i, "whole")],
      })),
      (t[26] = i),
      (t[27] = s),
      (t[28] = _),
      (t[29] = P));
  else P = t[29];
  let O;
  if (t[30] !== P || t[31] !== v || t[32] !== k || t[33] !== D)
    ((O = is.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [v, k, D, P],
    })),
      (t[30] = P),
      (t[31] = v),
      (t[32] = k),
      (t[33] = D),
      (t[34] = O));
  else O = t[34];
  let L;
  if (t[35] !== c || t[36] !== O || t[37] !== n)
    ((L = is.jsx(zn, {
      title: n,
      onCancel: c,
      color: "suggestion",
      children: O,
    })),
      (t[35] = c),
      (t[36] = O),
      (t[37] = n),
      (t[38] = L));
  else L = t[38];
  return L;
}
function Jrf({ purchaseId: e, onSuccess: t, onError: n }) {
  let r = mg.useRef(0),
    o = mg.useRef(t);
  o.current = t;
  let s = mg.useRef(n);
  s.current = n;
  let i = ks();
  return (
    mg.useEffect(() => {
      let a = !1,
        l;
      function c(d) {
        G("tengu_extra_usage_inline_dialog_buy_result", {
          status: d,
        });
      }
      async function u() {
        if (a) return;
        let d = o.current,
          p = s.current;
        if (((r.current += 1), r.current > Drf)) {
          ((a = !0), p("Purchase timed out \u2014 check claude.ai/settings/usage"));
          return;
        }
        try {
          let f = await _la(e);
          if (a) return;
          if (f.status === "paid") ((a = !0), c("success"), d());
          else if (f.status === "failed") ((a = !0), c("failed"), p("Payment failed"));
          else if (f.status === "action_needed")
            ((a = !0),
              c("3ds_fallback"),
              p(
                `Your card requires additional verification \u2014 this purchase was not completed. Try again at ${oQ}`,
              ));
          else l = i.setTimeout(u, Lrf);
        } catch (f) {
          if (a) return;
          if (((a = !0), R_(f)))
            T(`Purchase status poll failed: ${be(f)}`, {
              level: "error",
            });
          else ke(f);
          p("Failed to check purchase status");
        }
      }
      return (
        u(),
        () => {
          ((a = !0), l?.());
        }
      );
    }, [i, e]),
    is.jsx(Lsl, {
      message: "Confirming payment\u2026 (may take a few seconds)",
    })
  );
}
function Lsl(e) {
  let t = lq.c(3),
    { message: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((r = is.jsx(r6e, {
      autoplay: !0,
    })),
      (t[0] = r));
  else r = t[0];
  let o;
  if (t[1] !== n)
    ((o = is.jsxs(U, {
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      paddingTop: 2,
      children: [
        r,
        is.jsx(w, {
          dimColor: !0,
          children: n,
        }),
      ],
    })),
      (t[1] = n),
      (t[2] = o));
  else o = t[2];
  return o;
}
function Qrf(e) {
  let t = lq.c(7),
    { message: n, onDone: r } = e,
    o;
  if (t[0] !== r)
    ((o = is.jsx(r6e, {
      sequence: "celebrate",
      onComplete: r,
    })),
      (t[0] = r),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== n)
    ((s = is.jsx(U, {
      marginTop: 1,
      children: is.jsx(w, {
        color: "success",
        children: n,
      }),
    })),
      (t[2] = n),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== o || t[5] !== s)
    ((i = is.jsxs(U, {
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      paddingTop: 1,
      children: [o, s],
    })),
      (t[4] = o),
      (t[5] = s),
      (t[6] = i));
  else i = t[6];
  return i;
}
function Rsl({ message: e, work: t, onDone: n }) {
  let r = mg.useRef(null),
    o = mg.useRef(!1),
    s = mg.useRef(!1),
    i = mg.useRef(n);
  i.current = n;
  let a = mg.useCallback(() => {
    if (s.current) return;
    if (r.current && o.current) i.current(r.current.value);
  }, []);
  return (
    mg.useEffect(
      () => (
        t
          .then((l) => {
            ((r.current = {
              value: l,
            }),
              a());
          })
          .catch((l) => {
            (ke(l),
              (r.current = {
                value: !1,
              }),
              a());
          }),
        () => {
          s.current = !0;
        }
      ),
      [t, a],
    ),
    is.jsxs(U, {
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      paddingTop: 1,
      children: [
        is.jsx(r6e, {
          sequence: "celebrate",
          onComplete: () => {
            ((o.current = !0), a());
          },
        }),
        is.jsx(U, {
          marginTop: 1,
          children: is.jsx(w, {
            dimColor: !0,
            children: e,
          }),
        }),
      ],
    })
  );
}
function PlainAwait({ message: e, work: t, onDone: n }) {
  let r = mg.useRef(n);
  return (
    (r.current = n),
    mg.useEffect(() => {
      let o = !1;
      return (
        t
          .then((s) => {
            if (!o) r.current(s);
          })
          .catch((s) => {
            if ((ke(s), !o)) r.current(!1);
          }),
        () => {
          o = !0;
        }
      );
    }, [t]),
    is.jsx(U, {
      paddingTop: 1,
      children: is.jsx(Vc, {
        message: e,
      }),
    })
  );
}
var lq,
  mg,
  is,
  oQ = "https://claude.ai/settings/usage",
  Rrf = "https://www.anthropic.com/legal/consumer-terms",
  Lrf = 2000,
  Drf = 30,
  Prf = 500,
  ksl = 1000;
