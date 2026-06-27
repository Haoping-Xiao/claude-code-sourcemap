// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jOl
// matched 2.1.88 source: src/components/Stats.tsx
// class=modified  jaccard=0.3171  score=0.6308  fileCov=0.3894
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jOl = E(() => {
  je();
  At();
  ys();
  Rd();
  y_();
  _a();
  _m();
  Q1o();
  $fe = require("path");
});
function VOl(e) {
  return new Date(`${e}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
function cPf(e) {
  let t = ztr.indexOf(e);
  return ztr[(t + 1) % ztr.length];
}
function uPf() {
  return rNo("all")
    .then((e) => {
      if (!e || e.totalSessions === 0)
        return {
          type: "empty",
        };
      return {
        type: "success",
        data: e,
      };
    })
    .catch((e) => ({
      type: "error",
      message: e instanceof Error ? e.message : "Failed to load stats",
    }));
}
function pPf() {
  return Promise.resolve(dPf);
}
function zOl(e) {
  let t = mEt.c(8),
    { onClose: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = uPf()), (t[0] = r));
  else r = t[0];
  let o = r,
    s;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) ((s = pPf()), (t[1] = s));
  else s = t[1];
  let i = s,
    { rows: a } = bb(br()),
    l = Math.max(8, Math.min(a - 4, 30)),
    c;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((c = _s.jsxs(U, {
      marginTop: 1,
      children: [
        _s.jsx(Vu, {}),
        _s.jsx(w, {
          children: " Loading your Claude Code stats\u2026",
        }),
      ],
    })),
      (t[2] = c));
  else c = t[2];
  let u;
  if (t[3] !== n)
    ((u = _s.jsx(JF.Suspense, {
      fallback: c,
      children: _s.jsx(fPf, {
        allTimePromise: o,
        activeTimePromise: i,
        onClose: n,
      }),
    })),
      (t[3] = n),
      (t[4] = u));
  else u = t[4];
  let d;
  if (t[5] !== l || t[6] !== u)
    ((d = _s.jsx(U, {
      flexDirection: "column",
      minHeight: l,
      children: u,
    })),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d));
  else d = t[7];
  return d;
}
function fPf(e) {
  let t = mEt.c(50),
    { allTimePromise: n, activeTimePromise: r, onClose: o } = e,
    s = JF.use(n),
    i = JF.use(r),
    [a, l] = JF.useState("all"),
    c;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((c = {}), (t[0] = c));
  else c = t[0];
  let [u, d] = JF.useState(c),
    [p, f] = JF.useState(!1),
    [m, g] = JF.useState("Overview"),
    [h, y] = JF.useState(null),
    b = ks(),
    _,
    S;
  if (t[1] !== a || t[2] !== u)
    ((_ = () => {
      if (a === "all") return;
      if (u[a]) return;
      let Y = !1;
      return (
        f(!0),
        rNo(a)
          .then((z) => {
            if (!Y)
              (d((K) => ({
                ...K,
                [a]: z,
              })),
                f(!1));
          })
          .catch(() => {
            if (!Y) f(!1);
          }),
        () => {
          Y = !0;
        }
      );
    }),
      (S = [a, u]),
      (t[1] = a),
      (t[2] = u),
      (t[3] = _),
      (t[4] = S));
  else ((_ = t[3]), (S = t[4]));
  JF.useEffect(_, S);
  let A =
      a === "all"
        ? s.type === "success"
          ? s.data
          : null
        : (u[a] ?? (s.type === "success" ? s.data : null)),
    v = s.type === "success" ? s.data : null,
    C;
  if (t[5] !== o)
    ((C = () => {
      o("Stats dialog dismissed", {
        display: "system",
      });
    }),
      (t[5] = o),
      (t[6] = C));
  else C = t[6];
  let x = C,
    I;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((I = {
      context: "Settings",
    }),
      (t[7] = I));
  else I = t[7];
  $r("confirm:no", x, I);
  let { headerFocused: k, focusHeader: D } = tx(),
    P;
  if (t[8] !== m || t[9] !== i || t[10] !== b || t[11] !== a || t[12] !== A || t[13] !== D)
    ((P = function (z) {
      if (z.key === "up") {
        (z.preventDefault(), D());
        return;
      }
      if (z.key === "r" && !z.ctrl && !z.meta) {
        (z.preventDefault(), l(cPf(a)));
        return;
      }
      if (z.ctrl && z.key === "s" && A) (z.preventDefault(), TPf(A, i, m, y, b));
    }),
      (t[8] = m),
      (t[9] = i),
      (t[10] = b),
      (t[11] = a),
      (t[12] = A),
      (t[13] = D),
      (t[14] = P));
  else P = t[14];
  let O = P;
  if (s.type === "error") {
    let Y;
    if (t[15] !== s.message)
      ((Y = _s.jsxs(w, {
        color: "error",
        children: ["Failed to load stats: ", s.message],
      })),
        (t[15] = s.message),
        (t[16] = Y));
    else Y = t[16];
    let z;
    if (t[17] !== O || t[18] !== Y)
      ((z = _s.jsx(U, {
        marginTop: 1,
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: O,
        children: Y,
      })),
        (t[17] = O),
        (t[18] = Y),
        (t[19] = z));
    else z = t[19];
    return z;
  }
  if (s.type === "empty") {
    let Y;
    if (t[20] === Symbol.for("react.memo_cache_sentinel"))
      ((Y = _s.jsx(w, {
        color: "warning",
        children: "No stats available yet. Start using Claude Code!",
      })),
        (t[20] = Y));
    else Y = t[20];
    let z;
    if (t[21] !== O)
      ((z = _s.jsx(U, {
        marginTop: 1,
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: O,
        children: Y,
      })),
        (t[21] = O),
        (t[22] = z));
    else z = t[22];
    return z;
  }
  if (!A || !v) {
    let Y, z;
    if (t[23] === Symbol.for("react.memo_cache_sentinel"))
      ((Y = _s.jsx(Vu, {})),
        (z = _s.jsx(w, {
          children: " Loading stats\u2026",
        })),
        (t[23] = Y),
        (t[24] = z));
    else ((Y = t[23]), (z = t[24]));
    let K;
    if (t[25] !== O)
      ((K = _s.jsxs(U, {
        marginTop: 1,
        tabIndex: 0,
        autoFocus: !0,
        onKeyDown: O,
        children: [Y, z],
      })),
        (t[25] = O),
        (t[26] = K));
    else K = t[26];
    return K;
  }
  let L;
  if (t[27] === Symbol.for("react.memo_cache_sentinel")) ((L = (Y) => g(Y)), (t[27] = L));
  else L = t[27];
  let M;
  if (t[28] !== i || t[29] !== v || t[30] !== a || t[31] !== A || t[32] !== p)
    ((M = _s.jsx(sm, {
      title: "Overview",
      children: _s.jsx(mPf, {
        stats: A,
        allTimeStats: v,
        activeTimeStats: i,
        dateRange: a,
        isLoading: p,
      }),
    })),
      (t[28] = i),
      (t[29] = v),
      (t[30] = a),
      (t[31] = A),
      (t[32] = p),
      (t[33] = M));
  else M = t[33];
  let N;
  if (t[34] !== a || t[35] !== A || t[36] !== p)
    ((N = _s.jsx(sm, {
      title: "Models",
      children: _s.jsx(yPf, {
        stats: A,
        dateRange: a,
        isLoading: p,
      }),
    })),
      (t[34] = a),
      (t[35] = A),
      (t[36] = p),
      (t[37] = N));
  else N = t[37];
  let B;
  if (t[38] !== m || t[39] !== k || t[40] !== M || t[41] !== N)
    ((B = _s.jsx(U, {
      flexDirection: "row",
      gap: 1,
      marginBottom: 1,
      children: _s.jsxs(cR, {
        initialHeaderFocused: !0,
        title: null,
        color: "claude",
        selectedTab: m,
        onTabChange: L,
        disableNavigation: k,
        children: [M, N],
      }),
    })),
      (t[38] = m),
      (t[39] = k),
      (t[40] = M),
      (t[41] = N),
      (t[42] = B));
  else B = t[42];
  let $ = k ? "\u2193 stats" : "\u2191 tabs",
    q = h ? ` \xB7 ${h}` : "",
    W;
  if (t[43] !== $ || t[44] !== q)
    ((W = _s.jsx(U, {
      paddingLeft: 2,
      children: _s.jsxs(w, {
        dimColor: !0,
        children: [$, " \xB7 r to cycle dates \xB7 ctrl+s to copy", q],
      }),
    })),
      (t[43] = $),
      (t[44] = q),
      (t[45] = W));
  else W = t[45];
  let V;
  if (t[46] !== O || t[47] !== B || t[48] !== W)
    ((V = _s.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: O,
      children: [B, W],
    })),
      (t[46] = O),
      (t[47] = B),
      (t[48] = W),
      (t[49] = V));
  else V = t[49];
  return V;
}
function KOl(e) {
  let t = mEt.c(9),
    { dateRange: n, isLoading: r } = e,
    o;
  if (t[0] !== n)
    ((o = ztr.map((l, c) =>
      _s.jsxs(
        w,
        {
          children: [
            c > 0 &&
              _s.jsx(w, {
                dimColor: !0,
                children: " \xB7 ",
              }),
            l === n
              ? _s.jsx(w, {
                  bold: !0,
                  color: "claude",
                  children: GOl[l],
                })
              : _s.jsx(w, {
                  dimColor: !0,
                  children: GOl[l],
                }),
          ],
        },
        l,
      ),
    )),
      (t[0] = n),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== o)
    ((s = _s.jsx(U, {
      children: o,
    })),
      (t[2] = o),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== r) ((i = r && _s.jsx(Vu, {})), (t[4] = r), (t[5] = i));
  else i = t[5];
  let a;
  if (t[6] !== s || t[7] !== i)
    ((a = _s.jsxs(U, {
      marginBottom: 1,
      gap: 1,
      children: [s, i],
    })),
      (t[6] = s),
      (t[7] = i),
      (t[8] = a));
  else a = t[8];
  return a;
}
function mPf({ stats: e, allTimeStats: t, activeTimeStats: n, dateRange: r, isLoading: o }) {
  let { columns: s } = br(),
    i = Object.entries(e.modelUsage).sort(
      ([, p], [, f]) => f.inputTokens + f.outputTokens - (p.inputTokens + p.outputTokens),
    ),
    a = i[0],
    l = i.reduce((p, [, f]) => p + f.inputTokens + f.outputTokens, 0),
    c = JF.useMemo(() => YOl(e, l), [e, l]),
    u = r === "7d" ? 7 : r === "30d" ? 30 : e.totalDays,
    d = null;
  return _s.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      t.dailyActivity.length > 0 &&
        _s.jsx(U, {
          flexDirection: "column",
          marginBottom: 1,
          children: _s.jsx(bd, {
            children: Z1o(t.dailyActivity, {
              terminalWidth: s,
            }),
          }),
        }),
      _s.jsx(KOl, {
        dateRange: r,
        isLoading: o,
      }),
      _s.jsxs(U, {
        flexDirection: "row",
        gap: 4,
        marginBottom: 1,
        children: [
          _s.jsx(U, {
            flexDirection: "column",
            width: 28,
            children:
              a &&
              _s.jsxs(w, {
                wrap: "truncate",
                children: [
                  "Favorite model:",
                  " ",
                  _s.jsx(w, {
                    color: "claude",
                    bold: !0,
                    children: wp(a[0]),
                  }),
                ],
              }),
          }),
          _s.jsx(U, {
            flexDirection: "column",
            width: 28,
            children: _s.jsxs(w, {
              wrap: "truncate",
              children: [
                "Total tokens:",
                " ",
                _s.jsx(w, {
                  color: "claude",
                  children: ou(l),
                }),
              ],
            }),
          }),
        ],
      }),
      _s.jsxs(U, {
        flexDirection: "row",
        gap: 4,
        children: [
          _s.jsx(U, {
            flexDirection: "column",
            width: 28,
            children: _s.jsxs(w, {
              wrap: "truncate",
              children: [
                "Sessions:",
                " ",
                _s.jsx(w, {
                  color: "claude",
                  children: ou(e.totalSessions),
                }),
              ],
            }),
          }),
          _s.jsx(U, {
            flexDirection: "column",
            width: 28,
            children:
              e.longestSession &&
              _s.jsxs(w, {
                wrap: "truncate",
                children: [
                  "Longest session:",
                  " ",
                  _s.jsx(w, {
                    color: "claude",
                    children: Yi(e.longestSession.duration),
                  }),
                ],
              }),
          }),
        ],
      }),
      _s.jsxs(U, {
        flexDirection: "row",
        gap: 4,
        children: [
          _s.jsx(U, {
            flexDirection: "column",
            width: 28,
            children: _s.jsxs(w, {
              wrap: "truncate",
              children: [
                "Active days: ",
                _s.jsx(w, {
                  color: "claude",
                  children: e.activeDays,
                }),
                _s.jsxs(w, {
                  color: "subtle",
                  children: ["/", u],
                }),
              ],
            }),
          }),
          _s.jsx(U, {
            flexDirection: "column",
            width: 28,
            children: _s.jsxs(w, {
              wrap: "truncate",
              children: [
                "Longest streak:",
                " ",
                _s.jsx(w, {
                  color: "claude",
                  bold: !0,
                  children: e.streaks.longestStreak,
                }),
                " ",
                e.streaks.longestStreak === 1 ? "day" : "days",
              ],
            }),
          }),
        ],
      }),
      _s.jsxs(U, {
        flexDirection: "row",
        gap: 4,
        children: [
          _s.jsx(U, {
            flexDirection: "column",
            width: 28,
            children:
              e.peakActivityDay &&
              _s.jsxs(w, {
                wrap: "truncate",
                children: [
                  "Most active day:",
                  " ",
                  _s.jsx(w, {
                    color: "claude",
                    children: VOl(e.peakActivityDay),
                  }),
                ],
              }),
          }),
          _s.jsx(U, {
            flexDirection: "column",
            width: 28,
            children: _s.jsxs(w, {
              wrap: "truncate",
              children: [
                "Current streak:",
                " ",
                _s.jsx(w, {
                  color: "claude",
                  bold: !0,
                  children: t.streaks.currentStreak,
                }),
                " ",
                t.streaks.currentStreak === 1 ? "day" : "days",
              ],
            }),
          }),
        ],
      }),
      null,
      !1,
      d &&
        _s.jsxs(_s.Fragment, {
          children: [
            _s.jsx(U, {
              marginTop: 1,
              children: _s.jsx(w, {
                children: "Shot distribution",
              }),
            }),
            _s.jsxs(U, {
              flexDirection: "row",
              gap: 4,
              children: [
                _s.jsx(U, {
                  flexDirection: "column",
                  width: 28,
                  children: _s.jsxs(w, {
                    wrap: "truncate",
                    children: [
                      d.buckets[0].label,
                      ":",
                      " ",
                      _s.jsx(w, {
                        color: "claude",
                        children: d.buckets[0].count,
                      }),
                      _s.jsxs(w, {
                        color: "subtle",
                        children: [" (", d.buckets[0].pct, "%)"],
                      }),
                    ],
                  }),
                }),
                _s.jsx(U, {
                  flexDirection: "column",
                  width: 28,
                  children: _s.jsxs(w, {
                    wrap: "truncate",
                    children: [
                      d.buckets[1].label,
                      ":",
                      " ",
                      _s.jsx(w, {
                        color: "claude",
                        children: d.buckets[1].count,
                      }),
                      _s.jsxs(w, {
                        color: "subtle",
                        children: [" (", d.buckets[1].pct, "%)"],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            _s.jsxs(U, {
              flexDirection: "row",
              gap: 4,
              children: [
                _s.jsx(U, {
                  flexDirection: "column",
                  width: 28,
                  children: _s.jsxs(w, {
                    wrap: "truncate",
                    children: [
                      d.buckets[2].label,
                      ":",
                      " ",
                      _s.jsx(w, {
                        color: "claude",
                        children: d.buckets[2].count,
                      }),
                      _s.jsxs(w, {
                        color: "subtle",
                        children: [" (", d.buckets[2].pct, "%)"],
                      }),
                    ],
                  }),
                }),
                _s.jsx(U, {
                  flexDirection: "column",
                  width: 28,
                  children: _s.jsxs(w, {
                    wrap: "truncate",
                    children: [
                      d.buckets[3].label,
                      ":",
                      " ",
                      _s.jsx(w, {
                        color: "claude",
                        children: d.buckets[3].count,
                      }),
                      _s.jsxs(w, {
                        color: "subtle",
                        children: [" (", d.buckets[3].pct, "%)"],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            _s.jsx(U, {
              flexDirection: "row",
              gap: 4,
              children: _s.jsx(U, {
                flexDirection: "column",
                width: 28,
                children: _s.jsxs(w, {
                  wrap: "truncate",
                  children: [
                    "Avg/session:",
                    " ",
                    _s.jsx(w, {
                      color: "claude",
                      children: d.avgShots,
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      c &&
        _s.jsx(U, {
          marginTop: 1,
          children: _s.jsx(w, {
            color: "suggestion",
            children: c,
          }),
        }),
    ],
  });
}
function YOl(e, t) {
  let n = [];
  if (t > 0) {
    let o = gPf.filter((s) => t >= s.tokens);
    for (let s of o) {
      let i = t / s.tokens;
      if (i >= 2) n.push(`You've used ~${Math.floor(i)}x more tokens than ${s.name}`);
      else n.push(`You've used the same number of tokens as ${s.name}`);
    }
  }
  if (e.longestSession) {
    let o = e.longestSession.duration / 60000;
    for (let s of hPf) {
      let i = o / s.minutes;
      if (i >= 2) n.push(`Your longest session is ~${Math.floor(i)}x longer than ${s.name}`);
    }
  }
  if (n.length === 0) return "";
  let r = Math.floor(Math.random() * n.length);
  return n[r];
}
function yPf(e) {
  let t = mEt.c(61),
    { stats: n, dateRange: r, isLoading: o } = e,
    { headerFocused: s, focusHeader: i } = tx(),
    [a, l] = JF.useState(0),
    { columns: c } = br(),
    u,
    d,
    p,
    f,
    m,
    g,
    h,
    y,
    b,
    _,
    S,
    A,
    v,
    C,
    x,
    I,
    k,
    D,
    P,
    O,
    L;
  if (
    t[0] !== r ||
    t[1] !== i ||
    t[2] !== s ||
    t[3] !== o ||
    t[4] !== a ||
    t[5] !== n.dailyModelTokens ||
    t[6] !== n.modelUsage ||
    t[7] !== c
  ) {
    v = Symbol.for("react.early_return_sentinel");
    e: {
      g = Object.entries(n.modelUsage).sort(APf);
      let q = function (ne) {
        if (s) return;
        if (ne.key === "down" && a < g.length - 4) {
          (ne.preventDefault(), l((oe) => Math.min(oe + 2, g.length - 4)));
          return;
        }
        if (ne.key === "up")
          if ((ne.preventDefault(), a > 0)) l(EPf);
          else i();
      };
      if (g.length === 0) {
        let J;
        if (t[29] === Symbol.for("react.memo_cache_sentinel"))
          ((J = _s.jsx(U, {
            children: _s.jsx(w, {
              color: "subtle",
              children: "No model usage data available",
            }),
          })),
            (t[29] = J));
        else J = t[29];
        v = J;
        break e;
      }
      let W = g.reduce(SPf, 0),
        V = XOl(n.dailyModelTokens, g.map(bPf), c),
        Y = g.slice(a, a + 4),
        z = Math.ceil(Y.length / 2),
        K = Y.slice(0, z),
        Z = Y.slice(z);
      if (
        ((m = a > 0),
        (f = a < g.length - 4),
        (h = g.length > 4),
        (p = U),
        (P = "column"),
        (O = 1),
        (L = 0),
        (b = !0),
        (_ = q),
        (S =
          V &&
          _s.jsxs(U, {
            flexDirection: "column",
            marginBottom: 1,
            children: [
              _s.jsx(w, {
                bold: !0,
                children: "Tokens per Day",
              }),
              _s.jsx(bd, {
                children: V.chart,
              }),
              _s.jsx(w, {
                color: "subtle",
                children: V.xAxisLabels,
              }),
              _s.jsx(U, {
                children: V.legend.map(_Pf),
              }),
            ],
          })),
        t[30] !== r || t[31] !== o)
      )
        ((A = _s.jsx(KOl, {
          dateRange: r,
          isLoading: o,
        })),
          (t[30] = r),
          (t[31] = o),
          (t[32] = A));
      else A = t[32];
      ((d = U),
        (I = "row"),
        (k = 4),
        (D = _s.jsx(U, {
          flexDirection: "column",
          width: 36,
          children: K.map((J) => {
            let [ne, oe] = J;
            return _s.jsx(
              WOl,
              {
                model: ne,
                usage: oe,
                totalTokens: W,
              },
              ne,
            );
          }),
        })),
        (u = U),
        (y = "column"),
        (C = 36),
        (x = Z.map((J) => {
          let [ne, oe] = J;
          return _s.jsx(
            WOl,
            {
              model: ne,
              usage: oe,
              totalTokens: W,
            },
            ne,
          );
        })));
    }
    ((t[0] = r),
      (t[1] = i),
      (t[2] = s),
      (t[3] = o),
      (t[4] = a),
      (t[5] = n.dailyModelTokens),
      (t[6] = n.modelUsage),
      (t[7] = c),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p),
      (t[11] = f),
      (t[12] = m),
      (t[13] = g),
      (t[14] = h),
      (t[15] = y),
      (t[16] = b),
      (t[17] = _),
      (t[18] = S),
      (t[19] = A),
      (t[20] = v),
      (t[21] = C),
      (t[22] = x),
      (t[23] = I),
      (t[24] = k),
      (t[25] = D),
      (t[26] = P),
      (t[27] = O),
      (t[28] = L));
  } else
    ((u = t[8]),
      (d = t[9]),
      (p = t[10]),
      (f = t[11]),
      (m = t[12]),
      (g = t[13]),
      (h = t[14]),
      (y = t[15]),
      (b = t[16]),
      (_ = t[17]),
      (S = t[18]),
      (A = t[19]),
      (v = t[20]),
      (C = t[21]),
      (x = t[22]),
      (I = t[23]),
      (k = t[24]),
      (D = t[25]),
      (P = t[26]),
      (O = t[27]),
      (L = t[28]));
  if (v !== Symbol.for("react.early_return_sentinel")) return v;
  let M;
  if (t[33] !== u || t[34] !== y || t[35] !== C || t[36] !== x)
    ((M = _s.jsx(u, {
      flexDirection: y,
      width: C,
      children: x,
    })),
      (t[33] = u),
      (t[34] = y),
      (t[35] = C),
      (t[36] = x),
      (t[37] = M));
  else M = t[37];
  let N;
  if (t[38] !== d || t[39] !== M || t[40] !== I || t[41] !== k || t[42] !== D)
    ((N = _s.jsxs(d, {
      flexDirection: I,
      gap: k,
      children: [D, M],
    })),
      (t[38] = d),
      (t[39] = M),
      (t[40] = I),
      (t[41] = k),
      (t[42] = D),
      (t[43] = N));
  else N = t[43];
  let B;
  if (t[44] !== f || t[45] !== m || t[46] !== g || t[47] !== a || t[48] !== h)
    ((B =
      h &&
      _s.jsx(U, {
        marginTop: 1,
        children: _s.jsxs(w, {
          color: "subtle",
          children: [
            m ? nt.arrowUp : " ",
            " ",
            f ? nt.arrowDown : " ",
            " ",
            a + 1,
            "-",
            Math.min(a + 4, g.length),
            " of",
            " ",
            g.length,
            " models",
            " ",
            _s.jsx(ht, {
              chord: ["up", "down"],
              action: "scroll",
              parens: !0,
            }),
          ],
        }),
      })),
      (t[44] = f),
      (t[45] = m),
      (t[46] = g),
      (t[47] = a),
      (t[48] = h),
      (t[49] = B));
  else B = t[49];
  let $;
  if (
    t[50] !== p ||
    t[51] !== b ||
    t[52] !== _ ||
    t[53] !== S ||
    t[54] !== A ||
    t[55] !== N ||
    t[56] !== B ||
    t[57] !== P ||
    t[58] !== O ||
    t[59] !== L
  )
    (($ = _s.jsxs(p, {
      flexDirection: P,
      marginTop: O,
      tabIndex: L,
      autoFocus: b,
      onKeyDown: _,
      children: [S, A, N, B],
    })),
      (t[50] = p),
      (t[51] = b),
      (t[52] = _),
      (t[53] = S),
      (t[54] = A),
      (t[55] = N),
      (t[56] = B),
      (t[57] = P),
      (t[58] = O),
      (t[59] = L),
      (t[60] = $));
  else $ = t[60];
  return $;
}
function _Pf(e, t) {
  return _s.jsxs(
    w,
    {
      children: [
        t > 0 ? " \xB7 " : "",
        _s.jsx(bd, {
          children: e.coloredBullet,
        }),
        " ",
        e.model,
      ],
    },
    e.model,
  );
}
function bPf(e) {
  let [t] = e;
  return t;
}
function SPf(e, t) {
  let [, n] = t;
  return e + n.inputTokens + n.outputTokens;
}
function EPf(e) {
  return Math.max(e - 2, 0);
}
function APf(e, t) {
  let [, n] = e,
    [, r] = t;
  return r.inputTokens + r.outputTokens - (n.inputTokens + n.outputTokens);
}
function WOl(e) {
  let t = mEt.c(21),
    { model: n, usage: r, totalTokens: o } = e,
    i = ((r.inputTokens + r.outputTokens) / o) * 100,
    a;
  if (t[0] !== i) ((a = i.toFixed(1)), (t[0] = i), (t[1] = a));
  else a = t[1];
  let l = a,
    c;
  if (t[2] !== n) ((c = wp(n)), (t[2] = n), (t[3] = c));
  else c = t[3];
  let u;
  if (t[4] !== c)
    ((u = _s.jsx(w, {
      bold: !0,
      children: c,
    })),
      (t[4] = c),
      (t[5] = u));
  else u = t[5];
  let d;
  if (t[6] !== l)
    ((d = _s.jsxs(w, {
      color: "subtle",
      children: ["(", l, "%)"],
    })),
      (t[6] = l),
      (t[7] = d));
  else d = t[7];
  let p;
  if (t[8] !== u || t[9] !== d)
    ((p = _s.jsxs(iE, {
      children: [u, " ", d],
    })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p));
  else p = t[10];
  let f;
  if (t[11] !== r.inputTokens) ((f = ou(r.inputTokens)), (t[11] = r.inputTokens), (t[12] = f));
  else f = t[12];
  let m;
  if (t[13] !== r.outputTokens) ((m = ou(r.outputTokens)), (t[13] = r.outputTokens), (t[14] = m));
  else m = t[14];
  let g;
  if (t[15] !== f || t[16] !== m)
    ((g = _s.jsxs(w, {
      color: "subtle",
      children: ["  ", "In: ", f, " \xB7 Out:", " ", m],
    })),
      (t[15] = f),
      (t[16] = m),
      (t[17] = g));
  else g = t[17];
  let h;
  if (t[18] !== p || t[19] !== g)
    ((h = _s.jsxs(U, {
      flexDirection: "column",
      children: [p, g],
    })),
      (t[18] = p),
      (t[19] = g),
      (t[20] = h));
  else h = t[20];
  return h;
}
function XOl(e, t, n) {
  if (e.length < 2 || t.length === 0) return null;
  let r = 7,
    o = n - r,
    s = Math.min(52, Math.max(20, o)),
    i;
  if (e.length >= s) i = e.slice(-s);
  else {
    let m = Math.floor(s / e.length);
    i = [];
    for (let g of e) for (let h = 0; h < m; h++) i.push(g);
  }
  let a = O7(mW(wc("theme", "dark").value)),
    l = [N0n(a.suggestion), N0n(a.success), N0n(a.warning)],
    c = [],
    u = [],
    d = t.slice(0, 3);
  for (let m = 0; m < d.length; m++) {
    let g = d[m],
      h = i.map((y) => y.tokensByModel[g] || 0);
    if (h.some((y) => y > 0)) {
      c.push(h);
      let y = [a.suggestion, a.success, a.warning];
      u.push({
        model: wp(g),
        coloredBullet: V_e(nt.bullet, y[m % y.length]),
      });
    }
  }
  if (c.length === 0) return null;
  let p = qOl.plot(c, {
      height: 8,
      colors: l.slice(0, c.length),
      format: (m) => {
        let g;
        if (m >= 1e6) g = (m / 1e6).toFixed(1) + "M";
        else if (m >= 1000) g = (m / 1000).toFixed(0) + "k";
        else g = m.toFixed(0);
        return g.padStart(6);
      },
    }),
    f = HPf(i, i.length, r);
  return {
    chart: p,
    legend: u,
    xAxisLabels: f,
  };
}
function HPf(e, t, n) {
  if (e.length === 0) return "";
  let r = Math.min(4, Math.max(2, Math.floor(e.length / 8))),
    o = e.length - 6,
    s = Math.floor(o / (r - 1)) || 1,
    i = [];
  for (let c = 0; c < r; c++) {
    let u = Math.min(c * s, e.length - 1),
      d = VOl(e[u].date);
    i.push({
      pos: u,
      label: d,
    });
  }
  let a = " ".repeat(n),
    l = 0;
  for (let { pos: c, label: u } of i) {
    let d = Math.max(1, c - l);
    ((a += " ".repeat(d) + u), (l = c + u.length));
  }
  return a;
}
async function TPf(e, t, n, r, o) {
  r("copying\u2026");
  let s = vPf(e, t, n),
    i = await OOl(s);
  (r(i.success ? "copied!" : "copy failed"), o.setTimeout(() => r(null), 2000));
}
function vPf(e, t, n) {
  let r = [];
  if (n === "Overview") r.push(...wPf(e, t));
  else r.push(...CPf(e));
  while (r.length > 0 && Ja(r.at(-1)).trim() === "") r.pop();
  if (r.length > 0) {
    let o = r.at(-1),
      s = rn(o),
      i = n === "Overview" ? 70 : 80,
      a = "/stats",
      l = Math.max(2, i - s - 6);
    r[r.length - 1] = o + " ".repeat(l) + wt.gray("/stats");
  }
  return r.join(`
`);
}
function wPf(e, t) {
  let n = [],
    r = O7(mW(wc("theme", "dark").value)),
    o = (y) => V_e(y, r.claude),
    s = 18,
    i = 40,
    a = 18,
    l = (y, b, _, S) => {
      let A = (y + ":").padEnd(18),
        v = A.length + b.length,
        C = Math.max(2, 40 - v),
        x = (_ + ":").padEnd(18);
      return A + o(b) + " ".repeat(C) + x + o(S);
    };
  if (e.dailyActivity.length > 0)
    (n.push(
      Z1o(e.dailyActivity, {
        terminalWidth: 56,
      }),
    ),
      n.push(""));
  let c = Object.entries(e.modelUsage).sort(
      ([, y], [, b]) => b.inputTokens + b.outputTokens - (y.inputTokens + y.outputTokens),
    ),
    u = c[0],
    d = c.reduce((y, [, b]) => y + b.inputTokens + b.outputTokens, 0);
  if (u) n.push(l("Favorite model", wp(u[0]), "Total tokens", ou(d)));
  (n.push(""),
    n.push(
      l(
        "Sessions",
        ou(e.totalSessions),
        "Longest session",
        e.longestSession ? Yi(e.longestSession.duration) : "N/A",
      ),
    ));
  let p = `${e.streaks.currentStreak} ${e.streaks.currentStreak === 1 ? "day" : "days"}`,
    f = `${e.streaks.longestStreak} ${e.streaks.longestStreak === 1 ? "day" : "days"}`;
  n.push(l("Current streak", p, "Longest streak", f));
  let m = `${e.activeDays}/${e.totalDays}`,
    g =
      e.peakActivityHour !== null ? `${e.peakActivityHour}:00-${e.peakActivityHour + 1}:00` : "N/A";
  (n.push(l("Active days", m, "Peak hour", g)), n.push(""));
  let h = YOl(e, d);
  return (n.push(o(h)), n.push(wt.gray(`Stats from the last ${e.totalDays} days`)), n);
}
function CPf(e) {
  let t = [],
    n = Object.entries(e.modelUsage).sort(
      ([, a], [, l]) => l.inputTokens + l.outputTokens - (a.inputTokens + a.outputTokens),
    );
  if (n.length === 0) return (t.push(wt.gray("No model usage data available")), t);
  let r = n[0],
    o = n.reduce((a, [, l]) => a + l.inputTokens + l.outputTokens, 0),
    s = XOl(
      e.dailyModelTokens,
      n.map(([a]) => a),
      80,
    );
  if (s) {
    (t.push(wt.bold("Tokens per Day")), t.push(s.chart), t.push(wt.gray(s.xAxisLabels)));
    let a = s.legend.map((l) => `${l.coloredBullet} ${l.model}`).join(" \xB7 ");
    (t.push(a), t.push(""));
  }
  (t.push(
    `${nt.star} Favorite: ${wt.magenta.bold(wp(r?.[0] || ""))} \xB7 ${nt.circle} Total: ${wt.magenta(ou(o))} tokens`,
  ),
    t.push(""));
  let i = n.slice(0, 3);
  for (let [a, l] of i) {
    let u = (((l.inputTokens + l.outputTokens) / o) * 100).toFixed(1);
    (t.push(`${nt.bullet} ${wt.bold(wp(a))} ${wt.gray(`(${u}%)`)}`),
      t.push(wt.dim(`  In: ${ou(l.inputTokens)} \xB7 Out: ${ou(l.outputTokens)}`)));
  }
  return t;
}
var mEt, qOl, JF, _s, GOl, ztr, dPf, gPf, hPf;
