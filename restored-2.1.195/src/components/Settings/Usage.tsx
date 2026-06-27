// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gOl
// matched 2.1.88 source: src/components/Settings/Usage.tsx
// class=modified  jaccard=0.1858  score=0.2305  fileCov=0.4894
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gOl = E(() => {
  Ye();
  ps();
  F1o();
  vn();
  Cc();
  Bs();
  ((UOe = R(lt(), 1)),
    (SKe = R(rt(), 1)),
    (pu = R(se(), 1)),
    (bDf = {
      cache_miss: {
        headline: (e) => `${e}% of your usage hit a >100k-token cache miss`,
        body: "Uncached input is expensive, and often happens when sending a message to a session that has gone idle. /compact before stepping away keeps the cold-start small.",
      },
      long_context: {
        headline: (e) => `${e}% of your usage was at >150k context`,
        body: "Longer sessions are more expensive even when cached. /compact mid-task, /clear when switching to new tasks.",
      },
      subagent_heavy: {
        headline: (e) => `${e}% of your usage came from subagent-heavy sessions`,
        body: "Each subagent runs its own requests. Be deliberate about spawning them \u2014 and consider configuring a cheaper model for simpler subagents.",
      },
      high_parallel: {
        headline: (e) => `${e}% of your usage was while 4+ sessions ran in parallel`,
        body: "All sessions share one limit. If you don't need them all at once, queueing uses it more evenly.",
      },
      cron: {
        headline: (e) => `${e}% of your usage came from sessions active for 8+ hours`,
        body: "These are often background/loop sessions. Continuous usage can add up quickly so make sure it is intentional.",
      },
    }),
    (cOl = {
      totalCost: 0,
      requestCount: 0,
      sessionCount: 0,
      behaviors: [],
      agents: [],
      skills: [],
      plugins: [],
      mcpServers: [],
    }));
});
function K1o(e) {
  let t = EKe.c(35),
    {
      title: n,
      limit: r,
      maxWidth: o,
      showTimeInReset: s,
      alwaysShowDateInReset: i,
      extraSubtext: a,
      subtextOverride: l,
    } = e,
    c = s === void 0 ? !0 : s,
    u = i === void 0 ? !1 : i,
    { utilization: d, resets_at: p } = r;
  if (d === null) return null;
  let f = `${Math.floor(d)}% used`,
    m;
  if (p) {
    let g;
    if (t[0] !== u || t[1] !== p || t[2] !== c)
      ((g = XIt(p, !0, c, u)), (t[0] = u), (t[1] = p), (t[2] = c), (t[3] = g));
    else g = t[3];
    m = `Resets ${g}`;
  }
  if (a)
    if (m) m = `${a} \xB7 ${m}`;
    else m = a;
  if (l !== void 0) m = l;
  if (o >= 62) {
    let g;
    if (t[4] !== n)
      ((g = vd.jsx(w, {
        bold: !0,
        children: n,
      })),
        (t[4] = n),
        (t[5] = g));
    else g = t[5];
    let h = d / 100,
      y;
    if (t[6] !== h)
      ((y = vd.jsx(ZW, {
        ratio: h,
        width: 50,
        fillColor: "rate_limit_fill",
        emptyColor: "rate_limit_empty",
      })),
        (t[6] = h),
        (t[7] = y));
    else y = t[7];
    let b;
    if (t[8] !== f)
      ((b = vd.jsx(w, {
        children: f,
      })),
        (t[8] = f),
        (t[9] = b));
    else b = t[9];
    let _;
    if (t[10] !== y || t[11] !== b)
      ((_ = vd.jsxs(U, {
        flexDirection: "row",
        gap: 1,
        children: [y, b],
      })),
        (t[10] = y),
        (t[11] = b),
        (t[12] = _));
    else _ = t[12];
    let S;
    if (t[13] !== m)
      ((S =
        m &&
        vd.jsx(w, {
          dimColor: !0,
          children: m,
        })),
        (t[13] = m),
        (t[14] = S));
    else S = t[14];
    let A;
    if (t[15] !== g || t[16] !== _ || t[17] !== S)
      ((A = vd.jsxs(U, {
        flexDirection: "column",
        flexShrink: 0,
        children: [g, _, S],
      })),
        (t[15] = g),
        (t[16] = _),
        (t[17] = S),
        (t[18] = A));
    else A = t[18];
    return A;
  } else {
    let g;
    if (t[19] !== n)
      ((g = vd.jsx(w, {
        bold: !0,
        children: n,
      })),
        (t[19] = n),
        (t[20] = g));
    else g = t[20];
    let h;
    if (t[21] !== m)
      ((h =
        m &&
        vd.jsxs(vd.Fragment, {
          children: [
            vd.jsx(w, {
              children: " ",
            }),
            vd.jsxs(w, {
              dimColor: !0,
              children: ["\xB7 ", m],
            }),
          ],
        })),
        (t[21] = m),
        (t[22] = h));
    else h = t[22];
    let y;
    if (t[23] !== g || t[24] !== h)
      ((y = vd.jsxs(w, {
        children: [g, h],
      })),
        (t[23] = g),
        (t[24] = h),
        (t[25] = y));
    else y = t[25];
    let b = d / 100,
      _;
    if (t[26] !== o || t[27] !== b)
      ((_ = vd.jsx(ZW, {
        ratio: b,
        width: o,
        fillColor: "rate_limit_fill",
        emptyColor: "rate_limit_empty",
      })),
        (t[26] = o),
        (t[27] = b),
        (t[28] = _));
    else _ = t[28];
    let S;
    if (t[29] !== f)
      ((S = vd.jsx(w, {
        children: f,
      })),
        (t[29] = f),
        (t[30] = S));
    else S = t[30];
    let A;
    if (t[31] !== y || t[32] !== _ || t[33] !== S)
      ((A = vd.jsxs(U, {
        flexDirection: "column",
        flexShrink: 0,
        children: [y, _, S],
      })),
        (t[31] = y),
        (t[32] = _),
        (t[33] = S),
        (t[34] = A));
    else A = t[34];
    return A;
  }
}
function hOl() {
  let e = EKe.c(6),
    { columns: t } = br(),
    n = t - 2,
    r = Math.min(n, 80),
    o;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) ((o = bo()), (e[0] = o));
  else o = e[0];
  let s = o,
    i;
  if (e[1] === Symbol.for("react.memo_cache_sentinel")) ((i = Ju()), (e[1] = i));
  else i = e[1];
  let a = i !== null,
    l,
    c;
  if (e[2] === Symbol.for("react.memo_cache_sentinel"))
    ((l = vd.jsx(kDf, {
      isThinClient: a,
    })),
      (c = null),
      (e[2] = l),
      (e[3] = c));
  else ((l = e[2]), (c = e[3]));
  let u;
  if (e[4] !== r)
    ((u = vd.jsx(U, {
      flexDirection: "column",
      width: "100%",
      children: vd.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        flexShrink: 0,
        children: [
          l,
          c,
          s
            ? vd.jsx(LDf, {
                maxWidth: r,
              })
            : vd.jsx(w, {
                dimColor: !0,
                children: vd.jsx(mr, {
                  action: "confirm:no",
                  context: "Settings",
                  fallback: "Esc",
                  description: "cancel",
                }),
              }),
        ],
      }),
    })),
      (e[4] = r),
      (e[5] = u));
  else u = e[5];
  return u;
}
function kDf(e) {
  let t = EKe.c(8),
    { isThinClient: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = Ja(hMe())), (t[0] = r));
  else r = t[0];
  let o = r,
    s = RDf(n),
    i = n ? " (remote)" : "",
    a;
  if (t[1] !== i)
    ((a = vd.jsxs(LH, {
      children: ["Session", i],
    })),
      (t[1] = i),
      (t[2] = a));
  else a = t[2];
  let l = n ? s : o,
    c;
  if (t[3] !== l)
    ((c = vd.jsx(w, {
      dimColor: !0,
      children: l,
    })),
      (t[3] = l),
      (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] !== a || t[6] !== c)
    ((u = vd.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [a, c],
    })),
      (t[5] = a),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  return u;
}
function RDf(e) {
  let t = EKe.c(3),
    [n, r] = vHe.useState("Loading remote cost\u2026"),
    o,
    s;
  if (t[0] !== e)
    ((o = () => {
      if (!e) return;
      let i = !1,
        a = Ju();
      if (!a) {
        r("Remote cost unavailable");
        return;
      }
      return (
        a
          .sendControlRequest({
            subtype: "get_session_cost",
          })
          .then((l) => {
            if (!i) r(l.text);
          })
          .catch((l) => {
            if (!i) r(`Remote cost unavailable (${be(l)})`);
          }),
        () => {
          i = !0;
        }
      );
    }),
      (s = [e]),
      (t[0] = e),
      (t[1] = o),
      (t[2] = s));
  else ((o = t[1]), (s = t[2]));
  return (vHe.useEffect(o, s), n);
}
function LDf(e) {
  let t = EKe.c(54),
    { maxWidth: n } = e,
    [r, o] = vHe.useState(R7t),
    [s, i] = vHe.useState(null),
    [a, l] = vHe.useState(null),
    [c, u] = vHe.useState(!0),
    d;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((d = async () => {
      (u(!0), i(null), l(null));
      let W = await Otr();
      e: switch (W.status) {
        case "ok": {
          (o(W.utilization), xe("usage_plan_limits"));
          break e;
        }
        case "empty_response": {
          (Le("usage_plan_limits", "empty_response"), i(V1o));
          break e;
        }
        case "seeded": {
          (o((V) => V ?? W.utilization),
            l(
              W.isRateLimited
                ? "Per-model breakdown unavailable (rate limited \u2014 try again in a moment)"
                : "Could not refresh usage data",
            ),
            It(
              "usage_plan_limits",
              W.isRateLimited ? "rate_limited_seeded" : "refresh_failed_seeded",
            ));
          break e;
        }
        case "unavailable":
          if (W.isRateLimited)
            (i("Usage endpoint is rate limited. Please try again in a moment."),
              Le("usage_plan_limits", "rate_limited"));
          else
            (i(W.responseBody ? `${V1o}: ${W.responseBody}` : V1o),
              Le("usage_plan_limits", "load_failed"));
      }
      u(!1);
    }),
      (t[0] = d));
  else d = t[0];
  let p = d,
    f,
    m;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((f = () => {
      p();
    }),
      (m = [p]),
      (t[1] = f),
      (t[2] = m));
  else ((f = t[1]), (m = t[2]));
  vHe.useEffect(f, m);
  let g;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((g = () => {
      p();
    }),
      (t[3] = g));
  else g = t[3];
  let h = (!!s || !!a) && !c,
    y;
  if (t[4] !== h)
    ((y = {
      context: "Settings",
      isActive: h,
    }),
      (t[4] = h),
      (t[5] = y));
  else y = t[5];
  if (($r("settings:retry", g, y), s)) {
    let W;
    if (t[6] !== s)
      ((W = vd.jsxs(w, {
        color: "error",
        children: ["Error: ", s],
      })),
        (t[6] = s),
        (t[7] = W));
    else W = t[7];
    let V;
    if (t[8] === Symbol.for("react.memo_cache_sentinel"))
      ((V = vd.jsx(w, {
        dimColor: !0,
        children: vd.jsxs(Tn, {
          children: [
            vd.jsx(mr, {
              action: "settings:retry",
              context: "Settings",
              fallback: "r",
              description: "retry",
            }),
            vd.jsx(mr, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        }),
      })),
        (t[8] = V));
    else V = t[8];
    let Y;
    if (t[9] !== W)
      ((Y = vd.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [W, V],
      })),
        (t[9] = W),
        (t[10] = Y));
    else Y = t[10];
    return Y;
  }
  if (!r) {
    let W;
    if (t[11] === Symbol.for("react.memo_cache_sentinel"))
      ((W = vd.jsx(w, {
        dimColor: !0,
        children: "Loading usage data\u2026",
      })),
        (t[11] = W));
    else W = t[11];
    let V;
    if (t[12] === Symbol.for("react.memo_cache_sentinel"))
      ((V = vd.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [
          W,
          vd.jsx(w, {
            dimColor: !0,
            children: vd.jsx(mr, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "cancel",
            }),
          }),
        ],
      })),
        (t[12] = V));
    else V = t[12];
    return V;
  }
  let b;
  if (t[13] === Symbol.for("react.memo_cache_sentinel")) ((b = Di()), (t[13] = b));
  else b = t[13];
  let _ = b,
    S = _ === "max" || _ === "team" || _ === null,
    A;
  if (t[14] !== r.five_hour)
    ((A = {
      title: "Current session",
      limit: r.five_hour,
      alwaysShowDateInReset: !1,
    }),
      (t[14] = r.five_hour),
      (t[15] = A));
  else A = t[15];
  let v;
  if (t[16] !== r.seven_day)
    ((v = {
      title: "Current week (all models)",
      limit: r.seven_day,
      alwaysShowDateInReset: !0,
    }),
      (t[16] = r.seven_day),
      (t[17] = v));
  else v = t[17];
  let C;
  if (t[18] !== r.seven_day_sonnet)
    ((C = S
      ? [
          {
            title: "Current week (Sonnet only)",
            limit: r.seven_day_sonnet,
            alwaysShowDateInReset: !0,
          },
        ]
      : []),
      (t[18] = r.seven_day_sonnet),
      (t[19] = C));
  else C = t[19];
  let x;
  if (t[20] !== C || t[21] !== A || t[22] !== v || t[23] !== r.limits)
    ((x = [A, v, ...C, ...nut(r.limits, lLe()).map(DDf)]),
      (t[20] = C),
      (t[21] = A),
      (t[22] = v),
      (t[23] = r.limits),
      (t[24] = x));
  else x = t[24];
  let I = x,
    k;
  if (t[25] !== I || t[26] !== n)
    ((k = I.map((W) => {
      let { title: V, limit: Y, alwaysShowDateInReset: z } = W;
      return (
        Y &&
        vd.jsx(
          K1o,
          {
            title: V,
            limit: Y,
            maxWidth: n,
            alwaysShowDateInReset: z,
          },
          V,
        )
      );
    })),
      (t[25] = I),
      (t[26] = n),
      (t[27] = k));
  else k = t[27];
  let D;
  if (t[28] !== n || t[29] !== r.cinder_cove)
    ((D =
      r.cinder_cove &&
      vd.jsx(K1o, {
        title: "Claude Code and Cowork credit",
        limit: r.cinder_cove,
        maxWidth: n,
        subtextOverride: r.cinder_cove.resets_at
          ? `One-time credit \xB7 Expires ${new Date(r.cinder_cove.resets_at).toLocaleDateString(
              "en-US",
              {
                month: "long",
                day: "numeric",
              },
            )}`
          : "One-time credit",
      })),
      (t[28] = n),
      (t[29] = r.cinder_cove),
      (t[30] = D));
  else D = t[30];
  let P;
  if (t[31] !== n)
    ((P = vd.jsx(fOl, {
      maxWidth: n,
    })),
      (t[31] = n),
      (t[32] = P));
  else P = t[32];
  let O;
  if (t[33] !== n || t[34] !== r.extra_usage)
    ((O =
      r.extra_usage &&
      vd.jsx(PDf, {
        extraUsage: r.extra_usage,
        maxWidth: n,
      })),
      (t[33] = n),
      (t[34] = r.extra_usage),
      (t[35] = O));
  else O = t[35];
  let L;
  if (t[36] !== a)
    ((L =
      a &&
      vd.jsx(w, {
        dimColor: !0,
        children: a,
      })),
      (t[36] = a),
      (t[37] = L));
  else L = t[37];
  let M;
  if (t[38] !== a || t[39] !== c)
    ((M =
      c &&
      !a &&
      vd.jsx(w, {
        dimColor: !0,
        children: "Refreshing\u2026",
      })),
      (t[38] = a),
      (t[39] = c),
      (t[40] = M));
  else M = t[40];
  let N;
  if (t[41] !== a)
    ((N =
      a &&
      vd.jsx(mr, {
        action: "settings:retry",
        context: "Settings",
        fallback: "r",
        description: "retry",
      })),
      (t[41] = a),
      (t[42] = N));
  else N = t[42];
  let B;
  if (t[43] === Symbol.for("react.memo_cache_sentinel"))
    ((B = vd.jsx(mr, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel",
    })),
      (t[43] = B));
  else B = t[43];
  let $;
  if (t[44] !== N)
    (($ = vd.jsx(w, {
      dimColor: !0,
      children: vd.jsxs(Tn, {
        children: [N, B],
      }),
    })),
      (t[44] = N),
      (t[45] = $));
  else $ = t[45];
  let q;
  if (
    t[46] !== k ||
    t[47] !== D ||
    t[48] !== P ||
    t[49] !== O ||
    t[50] !== L ||
    t[51] !== M ||
    t[52] !== $
  )
    ((q = vd.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [k, D, P, O, L, M, $],
    })),
      (t[46] = k),
      (t[47] = D),
      (t[48] = P),
      (t[49] = O),
      (t[50] = L),
      (t[51] = M),
      (t[52] = $),
      (t[53] = q));
  else q = t[53];
  return q;
}
function DDf(e) {
  return {
    ...e,
    alwaysShowDateInReset: !0,
  };
}
function PDf(e) {
  let t = EKe.c(22),
    { extraUsage: n, maxWidth: r } = e,
    o = Di();
  if (!(o === "pro" || o === "max")) return !1;
  if (!n.is_enabled) {
    if (Loe.isEnabled()) {
      let b;
      if (t[0] === Symbol.for("react.memo_cache_sentinel"))
        ((b = vd.jsx(LH, {
          subtitle: "Usage credits are off \xB7 /usage-credits to turn them on",
          children: z1o,
        })),
          (t[0] = b));
      else b = t[0];
      return b;
    }
    return null;
  }
  if (n.monthly_limit === null) {
    let b;
    if (t[1] === Symbol.for("react.memo_cache_sentinel"))
      ((b = vd.jsx(LH, {
        subtitle: "Unlimited",
        children: z1o,
      })),
        (t[1] = b));
    else b = t[1];
    return b;
  }
  if (typeof n.used_credits !== "number" || typeof n.utilization !== "number") return null;
  let i = n.currency ?? "USD",
    a;
  if (t[2] !== i || t[3] !== n.used_credits)
    ((a = Yy(n.used_credits, i)), (t[2] = i), (t[3] = n.used_credits), (t[4] = a));
  else a = t[4];
  let l = a,
    c;
  if (t[5] !== i || t[6] !== n.monthly_limit)
    ((c = Yy(n.monthly_limit, i)), (t[5] = i), (t[6] = n.monthly_limit), (t[7] = c));
  else c = t[7];
  let u = c,
    d,
    p,
    f,
    m;
  if (t[8] !== n.utilization) {
    let b = new Date(),
      _ = new Date(b.getFullYear(), b.getMonth() + 1, 1);
    ((d = K1o),
      (m = z1o),
      (p = n.utilization),
      (f = _.toISOString()),
      (t[8] = n.utilization),
      (t[9] = d),
      (t[10] = p),
      (t[11] = f),
      (t[12] = m));
  } else ((d = t[9]), (p = t[10]), (f = t[11]), (m = t[12]));
  let g;
  if (t[13] !== p || t[14] !== f)
    ((g = {
      utilization: p,
      resets_at: f,
    }),
      (t[13] = p),
      (t[14] = f),
      (t[15] = g));
  else g = t[15];
  let h = `${l} / ${u} spent`,
    y;
  if (t[16] !== d || t[17] !== r || t[18] !== m || t[19] !== g || t[20] !== h)
    ((y = vd.jsx(d, {
      title: m,
      limit: g,
      showTimeInReset: !1,
      alwaysShowDateInReset: !0,
      extraSubtext: h,
      maxWidth: r,
    })),
      (t[16] = d),
      (t[17] = r),
      (t[18] = m),
      (t[19] = g),
      (t[20] = h),
      (t[21] = y));
  else y = t[21];
  return y;
}
var EKe,
  vHe,
  vd,
  V1o = "Failed to load usage data",
  z1o = "Usage credits";
