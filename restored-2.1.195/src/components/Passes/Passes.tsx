// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vzl
// matched 2.1.88 source: src/components/Passes/Passes.tsx
// class=modified  jaccard=0.2454  score=0.3433  fileCov=0.4624
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Vzl = E(() => {
  NE();
  Isr();
  ((Zqf = {
    type: "local-jsx",
    name: "fast",
    get description() {
      return `Toggle fast mode (${FG()})`;
    },
    get isHidden() {
      return !sc();
    },
    argumentHint: "[on|off]",
    get immediate() {
      return GAt();
    },
    requires: {
      ink: !0,
    },
    thinClientDispatch: "control-request",
    load: () => Promise.resolve().then(() => (Wjo(), jzl)),
  }),
    (qzl = {
      type: "local",
      name: "fast",
      supportsNonInteractive: !0,
      get description() {
        return `Toggle fast mode (${FG()})`;
      },
      argumentHint: "[on|off]",
      load: () => Promise.resolve().then(() => (Wzl(), Gzl)),
    }),
    (qjo = Zqf));
});
function Kzl({ onDone: e }) {
  let [t, n] = lme.useState(!0),
    [r, o] = lme.useState([]),
    [s, i] = lme.useState(!1),
    [a, l] = lme.useState(null),
    [c, u] = lme.useState(void 0),
    d = ig(() =>
      e("Guest passes dialog dismissed", {
        display: "system",
      }),
    ),
    p = lme.useCallback(() => {
      e("Guest passes dialog dismissed", {
        display: "system",
      });
    }, [e]);
  $r("confirm:no", p, {
    context: "Confirmation",
  });
  function f(h) {
    if (h.ctrl || h.meta) return;
    if (h.key === "return" && a)
      (h.preventDefault(),
        AI(a).then((y) => {
          if (y) process.stdout.write(y);
          (G("tengu_guest_passes_link_copied", {}), e("Referral link copied to clipboard!"));
        }));
  }
  if (
    (lme.useEffect(() => {
      async function h() {
        try {
          let y = await r2o();
          if (!y || !y.eligible) {
            (i(!1), n(!1));
            return;
          }
          if ((i(!0), y.referral_code_details?.referral_link))
            l(y.referral_code_details.referral_link);
          u(y.referrer_reward);
          let b = y.referral_code_details?.campaign ?? "claude_code_guest_pass",
            _;
          try {
            _ = await eql(b);
          } catch (C) {
            (T(`Failed to fetch referral redemptions: ${C}`, {
              level: "error",
            }),
              i(!1),
              n(!1));
            return;
          }
          let S = _.redemptions || [],
            A = _.limit || 3,
            v = [];
          for (let C = 0; C < A; C++) {
            let x = S[C];
            v.push({
              passNumber: C + 1,
              isAvailable: !x,
            });
          }
          (o(v), n(!1));
        } catch (y) {
          (ke(y), i(!1), n(!1));
        }
      }
      h();
    }, []),
    t)
  )
    return bf.jsx(Fu, {
      children: bf.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: f,
        children: [
          bf.jsx(w, {
            dimColor: !0,
            children: "Loading guest pass information\u2026",
          }),
          bf.jsx(w, {
            dimColor: !0,
            italic: !0,
            children: d.pending
              ? bf.jsxs(bf.Fragment, {
                  children: ["Press ", d.keyName, " again to exit"],
                })
              : bf.jsx(ht, {
                  chord: "escape",
                  action: "cancel",
                }),
          }),
        ],
      }),
    });
  if (!s)
    return bf.jsx(Fu, {
      children: bf.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: f,
        children: [
          bf.jsx(w, {
            children: "Guest passes are not currently available.",
          }),
          bf.jsx(w, {
            dimColor: !0,
            italic: !0,
            children: d.pending
              ? bf.jsxs(bf.Fragment, {
                  children: ["Press ", d.keyName, " again to exit"],
                })
              : bf.jsx(ht, {
                  chord: "escape",
                  action: "cancel",
                }),
          }),
        ],
      }),
    });
  let m = On(r, (h) => h.isAvailable),
    g = [...r].sort((h, y) => +y.isAvailable - +h.isAvailable);
  return bf.jsx(Fu, {
    children: bf.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: f,
      children: [
        bf.jsxs(w, {
          color: "permission",
          children: ["Guest passes \xB7 ", m, " left"],
        }),
        bf.jsx(U, {
          flexDirection: "row",
          marginLeft: 2,
          children: g.slice(0, 3).map((h) =>
            bf.jsx(
              eVf,
              {
                pass: h,
              },
              h.passNumber,
            ),
          ),
        }),
        a &&
          bf.jsx(U, {
            marginLeft: 2,
            children: bf.jsx(w, {
              children: a,
            }),
          }),
        bf.jsx(U, {
          flexDirection: "column",
          marginLeft: 2,
          children: bf.jsxs(w, {
            dimColor: !0,
            children: [
              c
                ? `Share a free week of Claude Code with friends. If they love it and subscribe, you'll get ${bAt(c)} in usage credits to keep building. `
                : "Share a free week of Claude Code with friends. ",
              bf.jsx(xs, {
                url: c
                  ? "https://support.claude.com/en/articles/13456702-claude-code-guest-passes"
                  : "https://support.claude.com/en/articles/12875061-claude-code-guest-passes",
                children: "Terms apply.",
              }),
            ],
          }),
        }),
        bf.jsx(U, {
          children: bf.jsx(w, {
            dimColor: !0,
            italic: !0,
            children: d.pending
              ? bf.jsxs(bf.Fragment, {
                  children: ["Press ", d.keyName, " again to exit"],
                })
              : bf.jsxs(Tn, {
                  children: [
                    bf.jsx(ht, {
                      chord: "enter",
                      action: "copy link",
                    }),
                    bf.jsx(ht, {
                      chord: "escape",
                      action: "cancel",
                    }),
                  ],
                }),
          }),
        }),
      ],
    }),
  });
}
function eVf(e) {
  let t = zzl.c(3),
    { pass: n } = e;
  if (!n.isAvailable) {
    let i;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((i = bf.jsxs(U, {
        flexDirection: "column",
        marginRight: 1,
        children: [
          bf.jsx(w, {
            dimColor: !0,
            children: "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2571",
          }),
          bf.jsx(w, {
            dimColor: !0,
            children: ` ) CC ${Gee} \u250A\u2571`,
          }),
          bf.jsx(w, {
            dimColor: !0,
            children: "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2571",
          }),
        ],
      })),
        (t[0] = i));
    else i = t[0];
    return i;
  }
  let o;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((o = bf.jsx(w, {
      children: "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510",
    })),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((s = bf.jsxs(U, {
      flexDirection: "column",
      marginRight: 1,
      children: [
        o,
        bf.jsxs(w, {
          children: [
            " ) CC ",
            bf.jsx(w, {
              color: "claude",
              children: Gee,
            }),
            " \u250A ( ",
          ],
        }),
        bf.jsx(w, {
          children: "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518",
        }),
      ],
    })),
      (t[2] = s));
  else s = t[2];
  return s;
}
var zzl, lme, bf;
