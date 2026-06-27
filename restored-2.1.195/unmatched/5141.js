// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G4o
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0073  score=0.0567  fileCov=0.0083
// note: nearest: src/screens/REPL.tsx (0.0073); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var G4o = E(() => {
  ft();
  EHe();
  Ye();
  uo();
  Cp();
  Fy();
  vi();
  DJl = R(lt(), 1), _Ye = R(se(), 1);
});
function PJt({
  variant: e,
  onDone: t,
  startAtChooseForTesting: n
}) {
  let [r, o] = O1e.useState(n ? {
      s: "choose",
      blocked: !1,
      liveDefinite: !0,
      ...n
    } : {
      s: "loading"
    }),
    s = O1e.useRef(null),
    i = O1e.useRef(null),
    a = O1e.useRef(!1);
  O1e.useEffect(() => {
    if (r.s === "loading") {
      let y = !1;
      return s.current ??= Promise.all([cut().catch(() => null), Y1n().catch(() => "unknown")]).then(([b, _]) => ({
        balance: b,
        overagesEnabled: _ === "enabled" || _ === "blocked" || _ === "unknown" && sLe(),
        blocked: _ === "blocked",
        liveDefinite: _ !== "unknown"
      })), s.current.then(b => {
        if (y) return;
        o({
          s: "choose",
          ...b
        });
      }), () => {
        y = !0;
      };
    }
    if (r.s === "buy-external") {
      let y = !1;
      return i.current ??= Fyt(), i.current.then(b => {
        if (y) return;
        It("model_fable_consent", "overage_enable_deferred"), t("dismiss", b.type === "message" ? b.value : b.opened ? `Opened ${b.url} in your browser to ${r.needsSetup ? "turn on" : "manage"} usage credits. Once ${r.needsSetup ? "enabled" : "topped up"}, run /model to switch to Fable 5.` : `Visit ${b.url} to ${r.needsSetup ? "turn on" : "manage"} usage credits. Once ${r.needsSetup ? "enabled" : "topped up"}, run /model to switch to Fable 5.`);
      }), () => {
        y = !0;
      };
    }
  }, [r.s, t]);
  function l() {
    Xve(), oLe(), xe("model_fable_consent"), t("consent");
  }
  function c(y, b) {
    if (Xve(), I8t()) o({
      s: "buy",
      needsSetup: y,
      skipLiveCheck: y && b
    });else o({
      s: "buy-external",
      needsSetup: y
    });
  }
  function u() {
    Xve(), o({
      s: "reenabling",
      work: Jio()
    });
  }
  function d() {
    Le("model_fable_consent", "declined"), t("switch");
  }
  function p() {
    It("model_fable_consent", "dismissed"), t("dismiss");
  }
  let f = bye(),
    m = e === "mid-session" && f !== null ? `Switch to ${wp(f)} and continue` : e === "mid-session" ? "Not now" : "No, keep my current model",
    g = e === "mid-session" && !jue(),
    h = e === "picker" ? "Switch to Fable 5?" : g ? "You've reached your Fable 5 limit" : "Fable 5 now uses usage credits";
  switch (r.s) {
    case "loading":
      return ax.jsx(zn, {
        title: h,
        color: "warning",
        onCancel: p,
        children: ax.jsx(Vc, {
          message: "Checking usage credits\u2026"
        })
      });
    case "choose":
      {
        let {
            balance: y,
            overagesEnabled: b,
            blocked: _,
            liveDefinite: S
          } = r,
          A = y?.amount ?? 0,
          v = y?.currency ?? "USD",
          C = !b,
          x = C && A > 0,
          I = b && y === null,
          k = b && A > 0,
          D = !_ && (k || I),
          P = I8t(),
          O = eH() ? C ? "Set up usage credits on claude.ai" : "Manage usage credits on claude.ai" : C ? "Request usage credits from your admin" : "Request more from your admin",
          L = g ? "You've used your included Fable 5 usage for this week. Continuing on Fable 5 uses usage credits" : "Fable 5 runs on usage credits",
          M = C && !x || I ? `${L}, purchased separately from your plan.` : `${L} \u2014 you have ${Yy(k || x ? A : 0, v)} in credits.`,
          N = D ? "Continue with Fable 5" : x && P ? "Yes, re-enable and continue" : P ? C ? "Yes, buy usage credits" : "Buy usage credits" : O;
        return ax.jsx(zn, {
          title: h,
          color: "warning",
          onCancel: p,
          children: ax.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            marginBottom: 1,
            children: [ax.jsx(w, {
              children: M
            }), x ? ax.jsx(w, {
              dimColor: !0,
              children: "Usage credits are turned off. Re-enable to use Fable 5."
            }) : C ? ax.jsxs(ax.Fragment, {
              children: [ax.jsx(w, {
                dimColor: !0,
                children: "You don't have usage credits yet."
              }), P && ax.jsxs(ax.Fragment, {
                children: [ax.jsxs(w, {
                  dimColor: !0,
                  children: ["Starts with a", " ", Yy(Xio, "USD", "whole"), " ", "monthly limit \xB7 run /usage-credits to adjust"]
                }), ax.jsxs(w, {
                  dimColor: !0,
                  children: ["By continuing, you agree to turn on usage credits per our Help Center: ", k8t]
                })]
              })]
            }) : ax.jsx(qL, {
              url: k8t
            }), ax.jsx(Sr, {
              options: [{
                label: N,
                value: "confirm"
              }, {
                label: m,
                value: "switch"
              }],
              onChange: B => {
                if (B === "switch") return d();
                if (D) return l();
                if (x && P) return u();
                return c(C && !x, S);
              },
              onFocus: () => {
                if (!a.current) {
                  a.current = !0;
                  return;
                }
                Xve();
              },
              onCancel: p
            })]
          })
        });
      }
    case "buy":
      return ax.jsx(SCo, {
        initialStep: "buy_select",
        entryReason: "fable",
        onBeforePurchase: r.needsSetup ? () => Jio({
          skipLiveCheck: r.skipLiveCheck
        }) : void 0,
        onPurchaseSuccess: y => {
          oLe(), xe("model_fable_consent"), t("consent", y);
        },
        onDone: y => {
          if (typeof y === "string") {
            It("model_fable_consent", "buy_fallback"), t("dismiss", y);
            return;
          }
          s.current = null, o({
            s: "loading"
          });
        }
      });
    case "reenabling":
      return ax.jsx(zn, {
        title: h,
        color: "warning",
        onCancel: p,
        children: ax.jsx(Hzn, {
          message: "Turning on usage credits\u2026",
          work: r.work,
          onDone: y => {
            if (y) oLe(), xe("model_fable_consent"), t("consent");else It("model_fable_consent", "reenable_failed"), t("dismiss", "Couldn't turn on usage credits. Run /usage-credits to try again.");
          }
        })
      });
    case "buy-external":
      return ax.jsx(zn, {
        title: h,
        color: "warning",
        onCancel: p,
        children: ax.jsx(Vc, {
          message: r.needsSetup ? "Setting up usage credits\u2026" : "Opening usage credits\u2026"
        })
      });
  }
}
var O1e, ax;