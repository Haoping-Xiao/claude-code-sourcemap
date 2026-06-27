// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zzl
// matched 2.1.88 source: src/components/grove/Grove.tsx
// class=modified  jaccard=0.24  score=0.3669  fileCov=0.4097
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Zzl = E(() => {
  ZKe();
  Vjo = {
    type: "local-jsx",
    name: "passes",
    get description() {
      if (SAt()) return "Share a free week of Claude Code with friends and earn usage credits";
      return "Share a free week of Claude Code with friends";
    },
    get isHidden() {
      let { eligible: e, hasCache: t } = _At();
      return !e || !t;
    },
    requires: {
      ink: true,
    },
    load: () => Promise.resolve().then(() => (Qzl(), Xzl)),
  };
});
var eKl = {};
_t(eKl, {
  PrivacySettingsDialog: () => PrivacySettingsDialog,
  GroveDialog: () => GroveDialog,
});
function rVf() {
  let e = AJt.c(9),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = Al.jsxs(w, {
      children: [
        "An update to our Consumer Terms and Privacy Policy will take effect on",
        " ",
        Al.jsx(w, {
          bold: true,
          children: "October 8, 2025",
        }),
        ". You can accept the updated terms today.",
      ],
    })),
      (e[0] = t));
  else t = e[0];
  let n;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((n = Al.jsx(w, {
      children: "What's changing?",
    })),
      (e[1] = n));
  else n = e[1];
  let r, o;
  if (e[2] === Symbol.for("react.memo_cache_sentinel"))
    ((r = Al.jsx(w, {
      children: "\xB7 ",
    })),
      (o = Al.jsx(w, {
        bold: true,
        children: "Help improve our AI models ",
      })),
      (e[2] = r),
      (e[3] = o));
  else ((r = e[2]), (o = e[3]));
  let s;
  if (e[4] === Symbol.for("react.memo_cache_sentinel"))
    ((s = Al.jsx(U, {
      paddingLeft: 1,
      children: Al.jsxs(w, {
        children: [
          r,
          o,
          Al.jsxs(w, {
            children: [
              "\u2014 Allow the use of your chats and coding sessions to train and improve Anthropic AI models. Change anytime in your Privacy Settings (",
              Al.jsx(xs, {
                url: "https://claude.ai/settings/data-privacy-controls",
              }),
              ").",
            ],
          }),
        ],
      }),
    })),
      (e[4] = s));
  else s = e[4];
  let i;
  if (e[5] === Symbol.for("react.memo_cache_sentinel"))
    ((i = Al.jsxs(U, {
      flexDirection: "column",
      children: [
        n,
        s,
        Al.jsx(U, {
          paddingLeft: 1,
          children: Al.jsxs(w, {
            children: [
              Al.jsx(w, {
                children: "\xB7 ",
              }),
              Al.jsx(w, {
                bold: true,
                children: "Updates to data retention ",
              }),
              Al.jsx(w, {
                children:
                  "\u2014 To help us improve our AI models and safety protections, we're extending data retention to 5 years.",
              }),
            ],
          }),
        }),
      ],
    })),
      (e[5] = i));
  else i = e[5];
  let a;
  if (e[6] === Symbol.for("react.memo_cache_sentinel"))
    ((a = Al.jsx(xs, {
      url: "https://www.anthropic.com/news/updates-to-our-consumer-terms",
    })),
      (e[6] = a));
  else a = e[6];
  let l;
  if (e[7] === Symbol.for("react.memo_cache_sentinel"))
    ((l = Al.jsx(xs, {
      url: "https://anthropic.com/legal/terms",
    })),
      (e[7] = l));
  else l = e[7];
  let c;
  if (e[8] === Symbol.for("react.memo_cache_sentinel"))
    ((c = Al.jsxs(Al.Fragment, {
      children: [
        t,
        i,
        Al.jsxs(w, {
          children: [
            "Learn more (",
            a,
            ") or read the updated Consumer Terms (",
            l,
            ") and Privacy Policy (",
            Al.jsx(xs, {
              url: "https://anthropic.com/legal/privacy",
            }),
            ")",
          ],
        }),
      ],
    })),
      (e[8] = c));
  else c = e[8];
  return c;
}
function oVf() {
  let e = AJt.c(7),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = Al.jsx(w, {
      children: "We've updated our Consumer Terms and Privacy Policy.",
    })),
      (e[0] = t));
  else t = e[0];
  let n;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((n = Al.jsx(w, {
      children: "What's changing?",
    })),
      (e[1] = n));
  else n = e[1];
  let r;
  if (e[2] === Symbol.for("react.memo_cache_sentinel"))
    ((r = Al.jsxs(U, {
      flexDirection: "column",
      children: [
        Al.jsx(w, {
          bold: true,
          children: "Help improve our AI models",
        }),
        Al.jsx(w, {
          children:
            "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings",
        }),
        Al.jsx(xs, {
          url: "https://claude.ai/settings/data-privacy-controls",
        }),
      ],
    })),
      (e[2] = r));
  else r = e[2];
  let o;
  if (e[3] === Symbol.for("react.memo_cache_sentinel"))
    ((o = Al.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        n,
        r,
        Al.jsxs(U, {
          flexDirection: "column",
          children: [
            Al.jsx(w, {
              bold: true,
              children: "How this affects data retention",
            }),
            Al.jsx(w, {
              children:
                "Turning ON the improve Claude setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime.",
            }),
          ],
        }),
      ],
    })),
      (e[3] = o));
  else o = e[3];
  let s;
  if (e[4] === Symbol.for("react.memo_cache_sentinel"))
    ((s = Al.jsx(xs, {
      url: "https://www.anthropic.com/news/updates-to-our-consumer-terms",
    })),
      (e[4] = s));
  else s = e[4];
  let i;
  if (e[5] === Symbol.for("react.memo_cache_sentinel"))
    ((i = Al.jsx(xs, {
      url: "https://anthropic.com/legal/terms",
    })),
      (e[5] = i));
  else i = e[5];
  let a;
  if (e[6] === Symbol.for("react.memo_cache_sentinel"))
    ((a = Al.jsxs(Al.Fragment, {
      children: [
        t,
        o,
        Al.jsxs(w, {
          children: [
            "Learn more (",
            s,
            ") or read the updated Consumer Terms (",
            i,
            ") and Privacy Policy (",
            Al.jsx(xs, {
              url: "https://anthropic.com/legal/privacy",
            }),
            ")",
          ],
        }),
      ],
    })),
      (e[6] = a));
  else a = e[6];
  return a;
}
function GroveDialog(e) {
  let t = AJt.c(35),
    { showIfAlreadyViewed: n, location: r, onDone: o } = e,
    [s, i] = fYe.useState(null),
    [a, l] = fYe.useState(null),
    c,
    u;
  if (t[0] !== r || t[1] !== o || t[2] !== n)
    ((c = () => {
      (async function () {
        let [O, L] = await Promise.all([Fre(), JDe()]),
          M = L.success ? L.data : null;
        l(M);
        let N = Lho(O, L, n);
        if ((i(N), !N)) {
          o("skip_rendering");
          return;
        }
        (Rho(),
          G("tengu_grove_policy_viewed", {
            location: $e(r),
            dismissable: M?.notice_is_grace_period,
          }));
      })();
    }),
      (u = [n, r, o]),
      (t[0] = r),
      (t[1] = o),
      (t[2] = n),
      (t[3] = c),
      (t[4] = u));
  else ((c = t[3]), (u = t[4]));
  if ((fYe.useEffect(c, u), s === null)) return null;
  if (!s) return null;
  let d;
  if (t[5] !== a?.notice_is_grace_period || t[6] !== o)
    ((d = async function (P) {
      e: switch (P) {
        case "accept_opt_in": {
          (await f4n(true),
            G("tengu_grove_policy_submitted", {
              state: true,
              dismissable: a?.notice_is_grace_period,
            }));
          break e;
        }
        case "accept_opt_out": {
          (await f4n(false),
            G("tengu_grove_policy_submitted", {
              state: false,
              dismissable: a?.notice_is_grace_period,
            }));
          break e;
        }
        case "defer": {
          G("tengu_grove_policy_dismissed", {
            state: true,
          });
          break e;
        }
        case "escape":
          G("tengu_grove_policy_escaped", {});
      }
      o(P);
    }),
      (t[5] = a?.notice_is_grace_period),
      (t[6] = o),
      (t[7] = d));
  else d = t[7];
  let p = d,
    f;
  if (t[8] !== a?.domain_excluded)
    ((f = a?.domain_excluded
      ? [
          {
            label:
              "Accept terms \xB7 Help improve our AI models: OFF (for emails with your domain)",
            value: "accept_opt_out",
          },
        ]
      : [
          {
            label: "Accept terms \xB7 Help improve our AI models: ON",
            value: "accept_opt_in",
          },
          {
            label: "Accept terms \xB7 Help improve our AI models: OFF",
            value: "accept_opt_out",
          },
        ]),
      (t[8] = a?.domain_excluded),
      (t[9] = f));
  else f = t[9];
  let m = f,
    g;
  if (t[10] !== a?.notice_is_grace_period || t[11] !== p)
    ((g = function () {
      if (a?.notice_is_grace_period) {
        p("defer");
        return;
      }
      p("escape");
    }),
      (t[10] = a?.notice_is_grace_period),
      (t[11] = p),
      (t[12] = g));
  else g = t[12];
  let h = g,
    y;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((y = Al.jsxs(Tn, {
      children: [
        Al.jsx(ht, {
          chord: "enter",
          action: "confirm",
        }),
        Al.jsx(ht, {
          chord: "escape",
          action: "cancel",
        }),
      ],
    })),
      (t[13] = y));
  else y = t[13];
  let b;
  if (t[14] !== a?.notice_is_grace_period)
    ((b = Al.jsx(U, {
      flexDirection: "column",
      gap: 1,
      flexGrow: 1,
      children: a?.notice_is_grace_period ? Al.jsx(rVf, {}) : Al.jsx(oVf, {}),
    })),
      (t[14] = a?.notice_is_grace_period),
      (t[15] = b));
  else b = t[15];
  let _;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = Al.jsx(U, {
      flexShrink: 0,
      children: Al.jsx(w, {
        color: "professionalBlue",
        children: nVf,
      }),
    })),
      (t[16] = _));
  else _ = t[16];
  let S;
  if (t[17] !== b)
    ((S = Al.jsxs(U, {
      flexDirection: "row",
      children: [b, _],
    })),
      (t[17] = b),
      (t[18] = S));
  else S = t[18];
  let A;
  if (t[19] === Symbol.for("react.memo_cache_sentinel"))
    ((A = Al.jsxs(U, {
      flexDirection: "column",
      children: [
        Al.jsx(w, {
          bold: true,
          children: "Please select how you'd like to continue",
        }),
        Al.jsx(w, {
          children: "Your choice takes effect immediately upon confirmation.",
        }),
      ],
    })),
      (t[19] = A));
  else A = t[19];
  let v;
  if (t[20] !== a?.notice_is_grace_period)
    ((v = a?.notice_is_grace_period
      ? [
          {
            label: "Not now",
            value: "defer",
          },
        ]
      : []),
      (t[20] = a?.notice_is_grace_period),
      (t[21] = v));
  else v = t[21];
  let C;
  if (t[22] !== m || t[23] !== v) ((C = [...m, ...v]), (t[22] = m), (t[23] = v), (t[24] = C));
  else C = t[24];
  let x;
  if (t[25] !== p) ((x = (D) => p(D)), (t[25] = p), (t[26] = x));
  else x = t[26];
  let I;
  if (t[27] !== h || t[28] !== C || t[29] !== x)
    ((I = Al.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        A,
        Al.jsx(Sr, {
          options: C,
          onChange: x,
          onCancel: h,
        }),
      ],
    })),
      (t[27] = h),
      (t[28] = C),
      (t[29] = x),
      (t[30] = I));
  else I = t[30];
  let k;
  if (t[31] !== h || t[32] !== I || t[33] !== S)
    ((k = Al.jsxs(zn, {
      title: "Updates to Consumer Terms and Policies",
      color: "professionalBlue",
      onCancel: h,
      inputGuide: y,
      children: [S, I],
    })),
      (t[31] = h),
      (t[32] = I),
      (t[33] = S),
      (t[34] = k));
  else k = t[34];
  return k;
}
function PrivacySettingsDialog(e) {
  let t = AJt.c(20),
    { settings: n, domainExcluded: r, onDone: o } = e,
    [s, i] = fYe.useState(n.grove_enabled),
    a;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((a = []), (t[0] = a));
  else a = t[0];
  fYe.useEffect(sVf, a);
  let l;
  if (t[1] !== r || t[2] !== s)
    ((l = function (_) {
      if (_.ctrl || _.meta) return;
      if (!r && (_.key === "tab" || _.key === "return" || _.key === " ")) {
        _.preventDefault();
        let S = !s;
        (i(S), f4n(S));
      }
    }),
      (t[1] = r),
      (t[2] = s),
      (t[3] = l));
  else l = t[3];
  let c = l,
    u;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((u = Al.jsx(w, {
      color: "error",
      children: "false",
    })),
      (t[4] = u));
  else u = t[4];
  let d = u;
  if (r) {
    let b;
    if (t[5] === Symbol.for("react.memo_cache_sentinel"))
      ((b = Al.jsx(w, {
        color: "error",
        children: "false (for emails with your domain)",
      })),
        (t[5] = b));
    else b = t[5];
    d = b;
  } else if (s) {
    let b;
    if (t[6] === Symbol.for("react.memo_cache_sentinel"))
      ((b = Al.jsx(w, {
        color: "success",
        children: "true",
      })),
        (t[6] = b));
    else b = t[6];
    d = b;
  }
  let p;
  if (t[7] !== r)
    ((p = r
      ? Al.jsx(ht, {
          chord: "escape",
          action: "cancel",
        })
      : Al.jsxs(Tn, {
          children: [
            Al.jsx(ht, {
              chord: ["enter", "tab", "space"],
              action: "toggle",
            }),
            Al.jsx(ht, {
              chord: "escape",
              action: "cancel",
            }),
          ],
        })),
      (t[7] = r),
      (t[8] = p));
  else p = t[8];
  let f;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((f = Al.jsxs(w, {
      children: [
        "Review and manage your privacy settings at",
        " ",
        Al.jsx(xs, {
          url: "https://claude.ai/settings/data-privacy-controls",
        }),
      ],
    })),
      (t[9] = f));
  else f = t[9];
  let m;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((m = Al.jsx(U, {
      width: 44,
      children: Al.jsx(w, {
        bold: true,
        children: "Help improve our AI models",
      }),
    })),
      (t[10] = m));
  else m = t[10];
  let g;
  if (t[11] !== d)
    ((g = Al.jsxs(U, {
      children: [
        m,
        Al.jsx(U, {
          children: d,
        }),
      ],
    })),
      (t[11] = d),
      (t[12] = g));
  else g = t[12];
  let h;
  if (t[13] !== c || t[14] !== g)
    ((h = Al.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: c,
      children: [f, g],
    })),
      (t[13] = c),
      (t[14] = g),
      (t[15] = h));
  else h = t[15];
  let y;
  if (t[16] !== o || t[17] !== p || t[18] !== h)
    ((y = Al.jsx(zn, {
      title: "Data privacy",
      color: "professionalBlue",
      onCancel: o,
      inputGuide: p,
      children: h,
    })),
      (t[16] = o),
      (t[17] = p),
      (t[18] = h),
      (t[19] = y));
  else y = t[19];
  return y;
}
function sVf() {
  G("tengu_grove_privacy_settings_viewed", {});
}
var AJt,
  fYe,
  Al,
  nVf = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`;
