// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lOl
// matched 2.1.88 source: src/utils/status.tsx
// class=modified (alt of src/utils/status.tsx)  jaccard=0.0102  score=0.0381  fileCov=0.0138
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lOl] deps: G1o, Ye, uo, Ao, sr
((_Df = R(lt(), 1)), (aOl = R(se(), 1)));
function fOl(e) {
  let t = UOe.c(2),
    { maxWidth: n } = e,
    r;
  if (t[0] !== n)
    ((r = pu.jsx(SDf, {
      maxWidth: n,
    })),
      (t[0] = n),
      (t[1] = r));
  else r = t[1];
  return r;
}
function SDf(e) {
  let t = UOe.c(5),
    { maxWidth: n } = e,
    [r] = SKe.useState(EDf),
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((o = pu.jsx(mOl, {})), (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((s = pu.jsxs(U, {
      flexDirection: "column",
      children: [
        o,
        pu.jsx(U, {
          marginTop: 1,
          children: pu.jsx(w, {
            dimColor: true,
            children: "Scanning local sessions\u2026",
          }),
        }),
      ],
    })),
      (t[1] = s));
  else s = t[1];
  let i = s,
    a;
  if (t[2] !== n || t[3] !== r)
    ((a = pu.jsx(SKe.Suspense, {
      fallback: i,
      children: pu.jsx(HDf, {
        maxWidth: n,
        scanPromise: r,
      }),
    })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a));
  else a = t[4];
  return a;
}
function EDf() {
  return $tr().catch(ADf);
}
function ADf(e) {
  return (
    ke(e),
    {
      day: cOl,
      week: cOl,
    }
  );
}
function W1o(e) {
  if (e.totalCost === 0) return [];
  return e.behaviors.filter((t) => (t.cost / e.totalCost) * 100 >= q1o);
}
function Btr(e) {
  return (
    e.agents.length > 0 || e.skills.length > 0 || e.plugins.length > 0 || e.mcpServers.length > 0
  );
}
function HDf(e) {
  let t = UOe.c(35),
    { maxWidth: n, scanPromise: r } = e,
    o = SKe.use(r),
    [s, i] = SKe.useState("day"),
    a;
  if (t[0] !== o.day) ((a = W1o(o.day).length > 0 || Btr(o.day)), (t[0] = o.day), (t[1] = a));
  else a = t[1];
  let l = a,
    c;
  if (t[2] !== o.week) ((c = W1o(o.week).length > 0 || Btr(o.week)), (t[2] = o.week), (t[3] = c));
  else c = t[3];
  let u = c,
    d = l || u,
    p;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((p = {
      "settings:periodDay": () => i("day"),
      "settings:periodWeek": () => i("week"),
    }),
      (t[4] = p));
  else p = t[4];
  let f;
  if (t[5] !== d)
    ((f = {
      context: "Settings",
      isActive: d,
    }),
      (t[5] = d),
      (t[6] = f));
  else f = t[6];
  if ((No(p, f), !l && !u)) return null;
  let m = s === "day" ? o.day : o.week,
    g,
    h,
    y,
    b,
    _,
    S,
    A,
    v,
    C;
  if (t[7] !== n || t[8] !== s || t[9] !== m) {
    let D = W1o(m);
    if (((h = U), (C = "column"), t[19] === Symbol.for("react.memo_cache_sentinel")))
      ((y = pu.jsx(mOl, {})), (t[19] = y));
    else y = t[19];
    let P = s === "day" ? "24h" : "7d";
    if (t[20] !== P)
      ((b = pu.jsx(U, {
        marginTop: 1,
        children: pu.jsxs(w, {
          dimColor: true,
          wrap: "wrap",
          children: [
            "Last ",
            P,
            " \xB7 these are independent characteristics of your usage, not a breakdown",
          ],
        }),
      })),
        (t[20] = P),
        (t[21] = b));
    else b = t[21];
    ((g = U),
      (_ = 1),
      (S = "column"),
      (A = 1),
      (v =
        D.length === 0 && !Btr(m)
          ? pu.jsxs(w, {
              dimColor: true,
              children: ["Nothing over ", q1o, "% in this period \u2014 try the other window."],
            })
          : pu.jsxs(pu.Fragment, {
              children: [
                D.map((O) =>
                  pu.jsx(
                    xDf,
                    {
                      stat: O,
                      totalCost: m.totalCost,
                      maxWidth: n,
                    },
                    O.key,
                  ),
                ),
                pu.jsx(Ftr, {
                  top: m.agents[0],
                  maxWidth: n,
                  headline: IDf,
                  body: "If this runs frequently, consider configuring its subagents with a cheaper model or tightening their prompts.",
                }),
                pu.jsx(Ftr, {
                  top: m.skills[0],
                  maxWidth: n,
                  headline: CDf,
                  body: "Heavy skills can be scoped down or run with a cheaper model via skill frontmatter.",
                }),
                pu.jsx(Ftr, {
                  top: m.plugins[0],
                  maxWidth: n,
                  headline: wDf,
                  body: "Review what this plugin contributes \u2014 its agents, skills, and MCP tools all count toward your limit.",
                }),
                pu.jsx(Ftr, {
                  top: m.mcpServers[0],
                  maxWidth: n,
                  headline: vDf,
                  body: "MCP tool results stay in context for the rest of the session. /compact to flush them, or disable servers you don't need.",
                }),
                !Btr(m)
                  ? pu.jsxs(U, {
                      flexDirection: "column",
                      children: [
                        pu.jsx(w, {
                          bold: true,
                          children: "Skills, subagents, plugins, and MCP servers",
                        }),
                        pu.jsx(w, {
                          dimColor: true,
                          wrap: "wrap",
                          children: "No attribution data yet \xB7 accumulates as you use Claude",
                        }),
                      ],
                    })
                  : pu.jsxs(pu.Fragment, {
                      children: [
                        pu.jsx(Utr, {
                          title: "Skills",
                          rows: m.skills,
                          label: TDf,
                        }),
                        pu.jsx(Utr, {
                          title: "Subagents",
                          rows: m.agents,
                        }),
                        pu.jsx(Utr, {
                          title: "Plugins",
                          rows: m.plugins,
                        }),
                        pu.jsx(Utr, {
                          title: "MCP servers",
                          rows: m.mcpServers,
                        }),
                      ],
                    }),
              ],
            })),
      (t[7] = n),
      (t[8] = s),
      (t[9] = m),
      (t[10] = g),
      (t[11] = h),
      (t[12] = y),
      (t[13] = b),
      (t[14] = _),
      (t[15] = S),
      (t[16] = A),
      (t[17] = v),
      (t[18] = C));
  } else
    ((g = t[10]),
      (h = t[11]),
      (y = t[12]),
      (b = t[13]),
      (_ = t[14]),
      (S = t[15]),
      (A = t[16]),
      (v = t[17]),
      (C = t[18]));
  let x;
  if (t[22] !== g || t[23] !== _ || t[24] !== S || t[25] !== A || t[26] !== v)
    ((x = pu.jsx(g, {
      marginTop: _,
      flexDirection: S,
      gap: A,
      children: v,
    })),
      (t[22] = g),
      (t[23] = _),
      (t[24] = S),
      (t[25] = A),
      (t[26] = v),
      (t[27] = x));
  else x = t[27];
  let I;
  if (t[28] === Symbol.for("react.memo_cache_sentinel"))
    ((I = pu.jsx(U, {
      marginTop: 1,
      children: pu.jsx(w, {
        dimColor: true,
        children: pu.jsxs(Tn, {
          children: [
            pu.jsx(mr, {
              action: "settings:periodDay",
              context: "Settings",
              fallback: "d",
              description: "day",
            }),
            pu.jsx(mr, {
              action: "settings:periodWeek",
              context: "Settings",
              fallback: "w",
              description: "week",
            }),
          ],
        }),
      }),
    })),
      (t[28] = I));
  else I = t[28];
  let k;
  if (t[29] !== h || t[30] !== y || t[31] !== b || t[32] !== x || t[33] !== C)
    ((k = pu.jsxs(h, {
      flexDirection: C,
      children: [y, b, x, I],
    })),
      (t[29] = h),
      (t[30] = y),
      (t[31] = b),
      (t[32] = x),
      (t[33] = C),
      (t[34] = k));
  else k = t[34];
  return k;
}
function TDf(e) {
  return `/${e}`;
}
function vDf(e, t) {
  return `${e}% of your usage came from MCP server "${t}"`;
}
function wDf(e, t) {
  return `${e}% of your usage came from plugin "${t}"`;
}
function CDf(e, t) {
  return `${e}% of your usage came from /${t}`;
}
function IDf(e, t) {
  return `${e}% of your usage came from subagents under "${t}"`;
}
function mOl() {
  let e = UOe.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = pu.jsxs(U, {
      flexDirection: "column",
      children: [
        pu.jsx(w, {
          bold: true,
          wrap: "wrap",
          children: "What's contributing to your limits usage?",
        }),
        pu.jsx(w, {
          dimColor: true,
          wrap: "wrap",
          children:
            "Approximate, based on local sessions on this machine \u2014 does not include other devices or claude.ai",
        }),
      ],
    })),
      (e[0] = t));
  else t = e[0];
  return t;
}
function Utr(e) {
  let t = UOe.c(23),
    { title: n, rows: r, label: o } = e;
  if (r.length === 0) return null;
  let s, i, a, l, c;
  if (t[0] !== o || t[1] !== r || t[2] !== n) {
    let p = r.slice(0, uOl);
    ((c = r.length - uOl), (s = U), (i = "column"));
    let f;
    if (t[8] !== n)
      ((f = pu.jsx(w, {
        children: n,
      })),
        (t[8] = n),
        (t[9] = f));
    else f = t[9];
    let m;
    if (t[10] === Symbol.for("react.memo_cache_sentinel"))
      ((m = pu.jsx(w, {
        dimColor: true,
        children: "% of usage",
      })),
        (t[10] = m));
    else m = t[10];
    if (t[11] !== f)
      ((a = pu.jsxs(U, {
        width: dOl + pOl,
        justifyContent: "space-between",
        children: [f, m],
      })),
        (t[11] = f),
        (t[12] = a));
    else a = t[12];
    let g;
    if (t[13] !== o)
      ((g = (h) =>
        pu.jsxs(
          U,
          {
            children: [
              pu.jsx(U, {
                width: dOl,
                children: pu.jsx(w, {
                  dimColor: true,
                  wrap: "truncate-end",
                  children: o ? o(h.name) : h.name,
                }),
              }),
              pu.jsx(U, {
                width: pOl,
                justifyContent: "flex-end",
                children: pu.jsxs(w, {
                  dimColor: true,
                  children: [h.pct, "%"],
                }),
              }),
            ],
          },
          h.name,
        )),
        (t[13] = o),
        (t[14] = g));
    else g = t[14];
    ((l = p.map(g)),
      (t[0] = o),
      (t[1] = r),
      (t[2] = n),
      (t[3] = s),
      (t[4] = i),
      (t[5] = a),
      (t[6] = l),
      (t[7] = c));
  } else ((s = t[3]), (i = t[4]), (a = t[5]), (l = t[6]), (c = t[7]));
  let u;
  if (t[15] !== c)
    ((u =
      c > 0 &&
      pu.jsxs(w, {
        dimColor: true,
        children: ["\u2026 ", c, " more"],
      })),
      (t[15] = c),
      (t[16] = u));
  else u = t[16];
  let d;
  if (t[17] !== s || t[18] !== i || t[19] !== a || t[20] !== l || t[21] !== u)
    ((d = pu.jsxs(s, {
      flexDirection: i,
      children: [a, l, u],
    })),
      (t[17] = s),
      (t[18] = i),
      (t[19] = a),
      (t[20] = l),
      (t[21] = u),
      (t[22] = d));
  else d = t[22];
  return d;
}
function Ftr(e) {
  let t = UOe.c(12),
    { top: n, maxWidth: r, headline: o, body: s } = e;
  if (!n || n.pct < q1o) return null;
  let i;
  if (t[0] !== o || t[1] !== n.name || t[2] !== n.pct)
    ((i = o(n.pct, n.name)), (t[0] = o), (t[1] = n.name), (t[2] = n.pct), (t[3] = i));
  else i = t[3];
  let a;
  if (t[4] !== i)
    ((a = pu.jsx(w, {
      wrap: "wrap",
      children: i,
    })),
      (t[4] = i),
      (t[5] = a));
  else a = t[5];
  let l;
  if (t[6] !== s)
    ((l = pu.jsx(U, {
      paddingLeft: 1,
      children: pu.jsx(w, {
        dimColor: true,
        wrap: "wrap",
        children: s,
      }),
    })),
      (t[6] = s),
      (t[7] = l));
  else l = t[7];
  let c;
  if (t[8] !== r || t[9] !== a || t[10] !== l)
    ((c = pu.jsxs(U, {
      flexDirection: "column",
      width: r,
      children: [a, l],
    })),
      (t[8] = r),
      (t[9] = a),
      (t[10] = l),
      (t[11] = c));
  else c = t[11];
  return c;
}
function xDf(e) {
  let t = UOe.c(22),
    { stat: n, totalCost: r, maxWidth: o } = e,
    s = bDf[n.key],
    i,
    a,
    l,
    c,
    u,
    d;
  if (t[0] !== o || t[1] !== s || t[2] !== n.cost || t[3] !== r) {
    let g = Math.round((n.cost / r) * 100);
    ((a = U),
      (u = "column"),
      (d = o),
      (i = w),
      (l = "wrap"),
      (c = s.headline(g)),
      (t[0] = o),
      (t[1] = s),
      (t[2] = n.cost),
      (t[3] = r),
      (t[4] = i),
      (t[5] = a),
      (t[6] = l),
      (t[7] = c),
      (t[8] = u),
      (t[9] = d));
  } else ((i = t[4]), (a = t[5]), (l = t[6]), (c = t[7]), (u = t[8]), (d = t[9]));
  let p;
  if (t[10] !== i || t[11] !== l || t[12] !== c)
    ((p = pu.jsx(i, {
      wrap: l,
      children: c,
    })),
      (t[10] = i),
      (t[11] = l),
      (t[12] = c),
      (t[13] = p));
  else p = t[13];
  let f;
  if (t[14] !== s.body)
    ((f = pu.jsx(U, {
      paddingLeft: 1,
      children: pu.jsx(w, {
        dimColor: true,
        wrap: "wrap",
        children: s.body,
      }),
    })),
      (t[14] = s.body),
      (t[15] = f));
  else f = t[15];
  let m;
  if (t[16] !== a || t[17] !== u || t[18] !== d || t[19] !== p || t[20] !== f)
    ((m = pu.jsxs(a, {
      flexDirection: u,
      width: d,
      children: [p, f],
    })),
      (t[16] = a),
      (t[17] = u),
      (t[18] = d),
      (t[19] = p),
      (t[20] = f),
      (t[21] = m));
  else m = t[21];
  return m;
}
var UOe,
  SKe,
  pu,
  bDf,
  q1o = 10,
  cOl,
  uOl = 8,
  dOl = 28,
  pOl = 6;
