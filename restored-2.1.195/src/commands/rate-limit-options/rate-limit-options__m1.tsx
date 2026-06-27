// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hQl
// matched 2.1.88 source: src/commands/rate-limit-options/rate-limit-options.tsx
// class=modified (alt of src/commands/rate-limit-options/rate-limit-options.tsx)  jaccard=0.0801  score=0.1232  fileCov=0.1861
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var hQl = E(() => {
  ((G6f = {
    type: "local-jsx",
    name: "pro-trial-expired",
    description: "Options shown when the Pro plan Claude Code trial has ended",
    isEnabled: () => true,
    isHidden: true,
    load: () => Promise.resolve().then(() => (mQl(), pQl)),
  }),
    (gQl = G6f));
});
function W6f() {
  return !FX() && !Oe.DISABLE_UPGRADE_COMMAND && Di() !== "enterprise";
}
function _Ql(e) {
  return e.overageDisabledReason === "org_level_disabled_until" && e.balanceMinorUnits > 0;
}
function yQl(e, t, n = null) {
  let r = e ?? z6f,
    o = t === 1 ? Math.floor(r / EYe + 1) * EYe : Math.ceil(r / EYe - 1) * EYe,
    s = n === null ? EYe : t === 1 ? Math.ceil((n + q6f) / EYe) * EYe : n;
  return Math.min(V6f, Math.max(s, o));
}
function bQl({ balance: e, onDone: t, context: n }) {
  let [r, o] = cZ.useState(null),
    [s] = na(),
    i = Wpe(),
    a = Di(),
    c = !(a === "max" && rW() === "default_claude_max_20x") && W6f(),
    u = e.currency,
    [d, p] = cZ.useState(void 0),
    [f, m] = cZ.useState(void 0),
    [g, h] = cZ.useState(false),
    [y, b] = cZ.useState(0),
    [_, S] = cZ.useState(null);
  cZ.useEffect(() => {
    let O = A0();
    if (O) {
      (p(O.spendLimitCents), m(O.spendLimitCents));
      return;
    }
    let L = false;
    return (
      Wue()
        .then((M) => {
          if (L) return;
          let N = M?.extra_usage?.monthly_limit ?? null,
            B = M?.extra_usage?.used_credits ?? 0,
            $ = N === null ? null : Math.max(N, B);
          (p($), m($));
        })
        .catch(() => {
          if (L) return;
          (p(null), m(null));
        }),
      () => {
        L = true;
      }
    );
  }, []);
  let A = cZ.useMemo(() => {
      if (i.resetsAt) return mee(i.resetsAt, true);
      return;
    }, [i.resetsAt]),
    v = f !== void 0,
    C = !v ? "\u2026" : f === null ? "Unlimited" : Yy(f, u, "fit"),
    x = cZ.useMemo(() => {
      let O = [
        {
          id: "adjust",
          label: `Adjust monthly spend limit: ${C}`,
          hint:
            d === null
              ? "\u2190 or \u2192 to set a limit"
              : "\u2190 or \u2192 to adjust \xB7 Del to remove limit",
        },
        {
          id: "wait",
          label: "Wait for limit to reset",
          hint: A ? `Resets ${A}` : "",
        },
      ];
      if (c) {
        let L = a === "max" ? "Max 20x" : "Max";
        O.push({
          id: "upgrade",
          label: `Upgrade to ${L} for higher session limits every month`,
          hint: "",
        });
      }
      return O;
    }, [C, A, c, a, d]);
  function I() {
    (G("tengu_spend_limit_nudge_cancel", {}),
      t(void 0, {
        display: "skip",
      }));
  }
  async function k() {
    if (!v || g) return;
    if (f === d) {
      S(
        d === null
          ? "Press \u2190 or \u2192 to set a limit."
          : "Press \u2192 to raise the limit, or Del to remove it.",
      );
      return;
    }
    h(true);
    let O = f ?? null,
      L = await K1n(O, u);
    if (!L.ok) {
      (h(false), S("Could not update your spend limit. Press Enter to retry."));
      return;
    }
    let M = L.disabledUntil != null ? new Date(L.disabledUntil) : null,
      N = M != null && (Number.isNaN(M.getTime()) || M > new Date());
    if (
      (G("tengu_spend_limit_nudge_save", {
        removed: O === null,
        reblocked: N,
      }),
      N)
    ) {
      h(false);
      let $ = L.usedCredits !== null ? Math.max(d ?? 0, L.usedCredits) : d;
      (p($ ?? null),
        m((q) => ($ !== null && $ !== void 0 && q !== null ? Math.max(q ?? 0, $) : q)),
        S(
          L.usedCredits !== null
            ? `You've already used ${Yy(L.usedCredits, u, "fit")} this month \u2014 set your limit above that.`
            : "Your current spend is still over the new limit. Raise it higher or remove it.",
        ));
      return;
    }
    S(null);
    let B = {
      ...ck,
      isUsingOverage: true,
    };
    if ((delete B.overageDisabledReason, B.status === "rejected")) B.status = "allowed";
    if ((kjt(B), O === null)) t(Io("success", s)("Removed monthly spend limit"));
    else t(Io("success", s)(`Increased monthly spend limit to ${Yy(O, u, "fit")}`));
  }
  function D(O) {
    if (O === "adjust") k();
    else if (O === "wait")
      (G("tengu_spend_limit_nudge_wait", {}),
        t(void 0, {
          display: "skip",
        }));
    else if (O === "upgrade")
      (G("tengu_spend_limit_nudge_upgrade", {}),
        Promise.resolve()
          .then(() => (BJt(), r3o))
          .then(({ call: L }) => L(t, n))
          .then((L) => {
            if (L) o(L);
          }));
  }
  function P(O) {
    if (g) return;
    if (O.key === "up") {
      (O.preventDefault(), S(null), b((L) => Math.max(0, L - 1)));
      return;
    }
    if (O.key === "down") {
      (O.preventDefault(), S(null), b((L) => Math.min(x.length - 1, L + 1)));
      return;
    }
    if (O.key === "return") {
      O.preventDefault();
      let L = x[y];
      if (L) D(L.id);
      return;
    }
    if (x[y]?.id !== "adjust" || !v) return;
    if (O.key === "left") (O.preventDefault(), S(null), m((L) => yQl(L ?? null, -1, d ?? null)));
    else if (O.key === "right")
      (O.preventDefault(), S(null), m((L) => yQl(L ?? null, 1, d ?? null)));
    else if (O.key === "delete" || O.key === "backspace") (O.preventDefault(), S(null), m(null));
  }
  if (r) return r;
  return Nse.jsx(zn, {
    title: "What do you want to do?",
    titleEnd: `Usage credit balance: ${Yy(e.amount, u)}`,
    onCancel: I,
    isCancelActive: !g,
    color: "suggestion",
    children: Nse.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: P,
      children: [
        Nse.jsx(U, {
          flexDirection: "column",
          children: x.map((O, L) => {
            let M = L === y;
            return Nse.jsxs(
              U,
              {
                justifyContent: "space-between",
                gap: 2,
                children: [
                  Nse.jsxs(w, {
                    color: M ? "suggestion" : void 0,
                    children: [M ? nt.pointer : " ", " ", O.label],
                  }),
                  O.hint
                    ? Nse.jsx(w, {
                        dimColor: true,
                        wrap: "truncate-end",
                        children: O.hint,
                      })
                    : null,
                ],
              },
              O.id,
            );
          }),
        }),
        g
          ? Nse.jsx(Vc, {
              message: "Updating spend limit\u2026",
            })
          : _
            ? Nse.jsx(U, {
                children: Nse.jsx(w, {
                  color: "error",
                  children: _,
                }),
              })
            : null,
      ],
    }),
  });
}
var cZ,
  Nse,
  EYe = 500,
  q6f = 1000,
  V6f = 10000000000,
  z6f = 4000;
