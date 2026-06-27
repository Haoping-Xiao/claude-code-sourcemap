// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H1e
// matched 2.1.88 source: src/components/tasks/RemoteSessionDetailDialog.tsx
// class=modified  jaccard=0.3413  score=0.5307  fileCov=0.4889
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module H1e] deps: ft, np, co, KI, CLo
w8l = require("crypto");
function formatToolUseSummary(e, t, n) {
  if (e === jD) return "Review the plan in Claude Code on the web";
  if (!t || typeof t !== "object") return e;
  if (e === mf && "questions" in t) {
    let r = t.questions;
    if (Array.isArray(r) && r[0] && typeof r[0] === "object") {
      let o =
        "question" in r[0] && typeof r[0].question === "string" && r[0].question
          ? r[0].question
          : "header" in r[0] && typeof r[0].header === "string"
            ? r[0].header
            : null;
      if (o) {
        let s = o.replace(/\s+/g, " ").trim();
        return `Answer in browser: ${Rs(s, n - 10)}`;
      }
    }
  }
  for (let r of Object.values(t))
    if (typeof r === "string" && r.trim()) {
      let o = r.replace(/\s+/g, " ").trim();
      return `${e} ${Rs(o, n)}`;
    }
  return e;
}
function UltraplanSessionDetail(e) {
  let t = usr.c(78),
    { session: n, onDone: r, onBack: o, onKill: s } = e,
    i = n.status === "running" || n.status === "pending",
    a = n.ultraplanPhase,
    l = i ? (a ? d5f[a] : "running") : n.status,
    c = sQ(n.startTime, i, 1000, 0, n.endTime),
    u = 0,
    d = 0,
    p = null;
  for (let ae of n.log) {
    if (ae.type !== "assistant") continue;
    for (let de of ae.message.content) {
      if (de.type !== "tool_use") continue;
      if ((d++, (p = de), de.name === ss || de.name === r8)) u++;
    }
  }
  let f = 1 + u,
    m;
  if (t[0] !== p)
    ((m = p ? formatToolUseSummary(p.name, p.input, 60) : null), (t[0] = p), (t[1] = m));
  else m = t[1];
  let g;
  if (t[2] !== d || t[3] !== f || t[4] !== m)
    ((g = {
      agentsWorking: f,
      toolCalls: d,
      lastToolCall: m,
    }),
      (t[2] = d),
      (t[3] = f),
      (t[4] = m),
      (t[5] = g));
  else g = t[5];
  let { agentsWorking: h, toolCalls: y, lastToolCall: b } = g,
    _;
  if (t[6] !== n.sessionId) ((_ = xpe(n.sessionId)), (t[6] = n.sessionId), (t[7] = _));
  else _ = t[7];
  let S = _,
    A;
  if (t[8] !== o || t[9] !== r)
    ((A =
      o ??
      (() =>
        r("Cloud session details dismissed", {
          display: "system",
        }))),
      (t[8] = o),
      (t[9] = r),
      (t[10] = A));
  else A = t[10];
  let v = A,
    [C, x] = aYe.useState(false);
  if (C) {
    let ae;
    if (t[11] === Symbol.for("react.memo_cache_sentinel")) ((ae = () => x(false)), (t[11] = ae));
    else ae = t[11];
    let de;
    if (t[12] === Symbol.for("react.memo_cache_sentinel"))
      ((de = fa.jsx(w, {
        dimColor: true,
        children: "This will terminate the Claude Code on the web session.",
      })),
        (t[12] = de));
    else de = t[12];
    let Ee = a === "plan_ready" ? "Terminate session and discard plan" : "Terminate session",
      me;
    if (t[13] !== v || t[14] !== s)
      ((me = () => {
        (s?.(), v());
      }),
        (t[13] = v),
        (t[14] = s),
        (t[15] = me));
    else me = t[15];
    let pe;
    if (t[16] === Symbol.for("react.memo_cache_sentinel")) ((pe = () => x(false)), (t[16] = pe));
    else pe = t[16];
    let ge;
    if (t[17] !== Ee || t[18] !== me)
      ((ge = fa.jsx(zn, {
        title: "Stop ultraplan?",
        onCancel: ae,
        color: "background",
        children: fa.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [
            de,
            fa.jsx(Kl, {
              confirmLabel: Ee,
              cancelLabel: "Back",
              onConfirm: me,
              onCancel: pe,
            }),
          ],
        }),
      })),
        (t[17] = Ee),
        (t[18] = me),
        (t[19] = ge));
    else ge = t[19];
    return ge;
  }
  let I = a === "plan_ready" ? BO : mv,
    k;
  if (t[20] !== I)
    ((k = fa.jsxs(w, {
      color: "background",
      children: [I, " "],
    })),
      (t[20] = I),
      (t[21] = k));
  else k = t[21];
  let D;
  if (t[22] === Symbol.for("react.memo_cache_sentinel"))
    ((D = fa.jsx(w, {
      bold: true,
      children: "ultraplan",
    })),
      (t[22] = D));
  else D = t[22];
  let P;
  if (t[23] !== c || t[24] !== l)
    ((P = fa.jsxs(w, {
      dimColor: true,
      children: [" \xB7 ", c, " \xB7 ", l],
    })),
      (t[23] = c),
      (t[24] = l),
      (t[25] = P));
  else P = t[25];
  let O;
  if (t[26] !== k || t[27] !== P)
    ((O = fa.jsxs(w, {
      children: [k, D, P],
    })),
      (t[26] = k),
      (t[27] = P),
      (t[28] = O));
  else O = t[28];
  let L;
  if (t[29] !== a)
    ((L =
      a === "plan_ready" &&
      fa.jsxs(w, {
        color: "success",
        children: [nt.tick, " "],
      })),
      (t[29] = a),
      (t[30] = L));
  else L = t[30];
  let M;
  if (t[31] !== h) ((M = bn(h, "agent")), (t[31] = h), (t[32] = M));
  else M = t[32];
  let N = a ? p5f[a] : "working",
    B;
  if (t[33] !== y) ((B = bn(y, "call")), (t[33] = y), (t[34] = B));
  else B = t[34];
  let $;
  if (t[35] !== h || t[36] !== L || t[37] !== M || t[38] !== N || t[39] !== B || t[40] !== y)
    (($ = fa.jsxs(w, {
      children: [L, h, " ", M, " ", N, " \xB7 ", y, " tool", " ", B],
    })),
      (t[35] = h),
      (t[36] = L),
      (t[37] = M),
      (t[38] = N),
      (t[39] = B),
      (t[40] = y),
      (t[41] = $));
  else $ = t[41];
  let q;
  if (t[42] !== b)
    ((q =
      b &&
      fa.jsx(w, {
        dimColor: true,
        children: b,
      })),
      (t[42] = b),
      (t[43] = q));
  else q = t[43];
  let W;
  if (t[44] !== S)
    ((W = fa.jsx(w, {
      dimColor: true,
      children: S,
    })),
      (t[44] = S),
      (t[45] = W));
  else W = t[45];
  let V;
  if (t[46] !== S || t[47] !== W)
    ((V = fa.jsx(xs, {
      url: S,
      children: W,
    })),
      (t[46] = S),
      (t[47] = W),
      (t[48] = V));
  else V = t[48];
  let Y =
      a === "plan_ready"
        ? "Review in Claude Code on the web"
        : a === "needs_input"
          ? "Answer in Claude Code on the web"
          : "Open in Claude Code on the web",
    z;
  if (t[49] !== a)
    ((z = a === "plan_ready" && {
      description: "Approve, edit, or comment on the plan",
    }),
      (t[49] = a),
      (t[50] = z));
  else z = t[50];
  let K;
  if (t[51] !== Y || t[52] !== z)
    ((K = {
      label: Y,
      value: "open",
      ...z,
    }),
      (t[51] = Y),
      (t[52] = z),
      (t[53] = K));
  else K = t[53];
  let Z;
  if (t[54] !== s || t[55] !== a || t[56] !== i)
    ((Z =
      s && i
        ? [
            {
              label: "Stop ultraplan",
              value: "stop",
              ...(a === "plan_ready" && {
                description: "Discard the generated plan",
              }),
            },
          ]
        : []),
      (t[54] = s),
      (t[55] = a),
      (t[56] = i),
      (t[57] = Z));
  else Z = t[57];
  let J;
  if (t[58] === Symbol.for("react.memo_cache_sentinel"))
    ((J = {
      label: "Back",
      value: "back",
    }),
      (t[58] = J));
  else J = t[58];
  let ne;
  if (t[59] !== K || t[60] !== Z) ((ne = [K, ...Z, J]), (t[59] = K), (t[60] = Z), (t[61] = ne));
  else ne = t[61];
  let oe;
  if (t[62] !== v || t[63] !== r || t[64] !== S)
    ((oe = (ae) => {
      switch (ae) {
        case "open": {
          (ac(S), r());
          return;
        }
        case "stop": {
          x(true);
          return;
        }
        case "back": {
          v();
          return;
        }
      }
    }),
      (t[62] = v),
      (t[63] = r),
      (t[64] = S),
      (t[65] = oe));
  else oe = t[65];
  let re;
  if (t[66] !== ne || t[67] !== oe)
    ((re = fa.jsx(Sr, {
      options: ne,
      onChange: oe,
    })),
      (t[66] = ne),
      (t[67] = oe),
      (t[68] = re));
  else re = t[68];
  let ee;
  if (t[69] !== $ || t[70] !== q || t[71] !== V || t[72] !== re)
    ((ee = fa.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [$, q, V, re],
    })),
      (t[69] = $),
      (t[70] = q),
      (t[71] = V),
      (t[72] = re),
      (t[73] = ee));
  else ee = t[73];
  let ce;
  if (t[74] !== v || t[75] !== O || t[76] !== ee)
    ((ce = fa.jsx(zn, {
      title: O,
      onCancel: v,
      color: "background",
      children: ee,
    })),
      (t[74] = v),
      (t[75] = O),
      (t[76] = ee),
      (t[77] = ce));
  else ce = t[77];
  return ce;
}
function m5f(e) {
  let t = usr.c(15),
    { stage: n, completed: r, hasProgress: o } = e,
    s;
  if (t[0] !== n) ((s = n ? x8l.indexOf(n) : -1), (t[0] = n), (t[1] = s));
  else s = t[1];
  let i = s,
    a = !r && !o,
    l;
  if (t[2] !== a)
    ((l = a
      ? fa.jsx(w, {
          color: "background",
          children: "Setup",
        })
      : fa.jsx(w, {
          dimColor: true,
          children: "Setup",
        })),
      (t[2] = a),
      (t[3] = l));
  else l = t[3];
  let c;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((c = fa.jsx(w, {
      dimColor: true,
      children: " \u2192 ",
    })),
      (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] !== r || t[6] !== i || t[7] !== a)
    ((u = x8l.map((f, m) => {
      let g = !r && !a && m === i;
      return fa.jsxs(
        R8l.Fragment,
        {
          children: [
            m > 0 &&
              fa.jsx(w, {
                dimColor: true,
                children: " \u2192 ",
              }),
            g
              ? fa.jsx(w, {
                  color: "background",
                  children: k8l[f],
                })
              : fa.jsx(w, {
                  dimColor: true,
                  children: k8l[f],
                }),
          ],
        },
        f,
      );
    })),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = u));
  else u = t[8];
  let d;
  if (t[9] !== r)
    ((d =
      r &&
      fa.jsxs(w, {
        children: [
          " ",
          fa.jsx(Hs, {
            status: "success",
          }),
        ],
      })),
      (t[9] = r),
      (t[10] = d));
  else d = t[10];
  let p;
  if (t[11] !== l || t[12] !== u || t[13] !== d)
    ((p = fa.jsxs(w, {
      children: [l, c, u, d],
    })),
      (t[11] = l),
      (t[12] = u),
      (t[13] = d),
      (t[14] = p));
  else p = t[14];
  return p;
}
function reviewCountsLine(e) {
  let t = e.reviewProgress;
  if (!t) return e.status === "completed" ? "done" : "setting up";
  let n = t.bugsVerified,
    r = t.bugsRefuted ?? 0;
  if (e.status === "completed") {
    let o = [`${n} ${bn(n, "finding")}`];
    if (r > 0) o.push(`${r} refuted`);
    return o.join(" \xB7 ");
  }
  return ajo(t.stage, t.bugsFound, n, r);
}
function ReviewSessionDetail(e) {
  let t = usr.c(57),
    { session: n, onDone: r, onBack: o, onKill: s } = e,
    i = n.status === "completed",
    a = n.status === "running" || n.status === "pending",
    [l, c] = aYe.useState(false),
    u = sQ(n.startTime, a, 1000, 0, n.endTime),
    d;
  if (t[0] !== r)
    ((d = () =>
      r("Cloud session details dismissed", {
        display: "system",
      })),
      (t[0] = r),
      (t[1] = d));
  else d = t[1];
  let p = d,
    f = o ?? p,
    m;
  if (t[2] !== n.sessionId) ((m = xpe(n.sessionId)), (t[2] = n.sessionId), (t[3] = m));
  else m = t[3];
  let g = m,
    h = i ? "ready" : a ? "running" : n.status;
  if (l) {
    let Y;
    if (t[4] === Symbol.for("react.memo_cache_sentinel")) ((Y = () => c(false)), (t[4] = Y));
    else Y = t[4];
    let z;
    if (t[5] === Symbol.for("react.memo_cache_sentinel"))
      ((z = fa.jsx(w, {
        dimColor: true,
        children:
          "This archives the cloud session and stops local tracking. The review will not complete and any findings so far are discarded.",
      })),
        (t[5] = z));
    else z = t[5];
    let K;
    if (t[6] === Symbol.for("react.memo_cache_sentinel"))
      ((K = {
        label: "Stop ultrareview",
        value: "stop",
      }),
        (t[6] = K));
    else K = t[6];
    let Z;
    if (t[7] === Symbol.for("react.memo_cache_sentinel"))
      ((Z = [
        K,
        {
          label: "Back",
          value: "back",
        },
      ]),
        (t[7] = Z));
    else Z = t[7];
    let J;
    if (t[8] !== f || t[9] !== s)
      ((J = fa.jsx(zn, {
        title: "Stop ultrareview?",
        onCancel: Y,
        color: "background",
        children: fa.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [
            z,
            fa.jsx(Sr, {
              options: Z,
              onChange: (ne) => {
                if (ne === "stop") (s?.(), f());
                else c(false);
              },
            }),
          ],
        }),
      })),
        (t[8] = f),
        (t[9] = s),
        (t[10] = J));
    else J = t[10];
    return J;
  }
  let y;
  if (t[11] !== i || t[12] !== s || t[13] !== a)
    ((y = i
      ? [
          {
            label: "Open in Claude Code on the web",
            value: "open",
          },
          {
            label: "Dismiss",
            value: "dismiss",
          },
        ]
      : [
          {
            label: "Open in Claude Code on the web",
            value: "open",
          },
          ...(s && a
            ? [
                {
                  label: "Stop ultrareview",
                  value: "stop",
                },
              ]
            : []),
          {
            label: "Back",
            value: "back",
          },
        ]),
      (t[11] = i),
      (t[12] = s),
      (t[13] = a),
      (t[14] = y));
  else y = t[14];
  let b = y,
    _;
  if (t[15] !== f || t[16] !== p || t[17] !== r || t[18] !== g)
    ((_ = (Y) => {
      e: switch (Y) {
        case "open": {
          (ac(g), r());
          break e;
        }
        case "stop": {
          c(true);
          break e;
        }
        case "back": {
          f();
          break e;
        }
        case "dismiss":
          p();
      }
    }),
      (t[15] = f),
      (t[16] = p),
      (t[17] = r),
      (t[18] = g),
      (t[19] = _));
  else _ = t[19];
  let S = _,
    A = i ? BO : mv,
    v;
  if (t[20] !== A)
    ((v = fa.jsxs(w, {
      color: "background",
      children: [A, " "],
    })),
      (t[20] = A),
      (t[21] = v));
  else v = t[21];
  let C;
  if (t[22] === Symbol.for("react.memo_cache_sentinel"))
    ((C = fa.jsx(w, {
      bold: true,
      children: "ultrareview",
    })),
      (t[22] = C));
  else C = t[22];
  let x;
  if (t[23] !== u || t[24] !== h)
    ((x = fa.jsxs(w, {
      dimColor: true,
      children: [" \xB7 ", u, " \xB7 ", h],
    })),
      (t[23] = u),
      (t[24] = h),
      (t[25] = x));
  else x = t[25];
  let I;
  if (t[26] !== v || t[27] !== x)
    ((I = fa.jsxs(w, {
      children: [v, C, x],
    })),
      (t[26] = v),
      (t[27] = x),
      (t[28] = I));
  else I = t[28];
  let k;
  if (t[29] === Symbol.for("react.memo_cache_sentinel"))
    ((k = fa.jsxs(Tn, {
      children: [
        fa.jsx(ht, {
          chord: "enter",
          action: "select",
        }),
        fa.jsx(ht, {
          chord: "escape",
          action: "go back",
        }),
      ],
    })),
      (t[29] = k));
  else k = t[29];
  let D = n.reviewProgress?.stage,
    P = !!n.reviewProgress,
    O;
  if (t[30] !== i || t[31] !== D || t[32] !== P)
    ((O = fa.jsx(m5f, {
      stage: D,
      completed: i,
      hasProgress: P,
    })),
      (t[30] = i),
      (t[31] = D),
      (t[32] = P),
      (t[33] = O));
  else O = t[33];
  let L;
  if (t[34] !== n) ((L = reviewCountsLine(n)), (t[34] = n), (t[35] = L));
  else L = t[35];
  let M;
  if (t[36] !== L)
    ((M = fa.jsx(w, {
      children: L,
    })),
      (t[36] = L),
      (t[37] = M));
  else M = t[37];
  let N;
  if (t[38] !== g)
    ((N = fa.jsx(w, {
      dimColor: true,
      children: g,
    })),
      (t[38] = g),
      (t[39] = N));
  else N = t[39];
  let B;
  if (t[40] !== g || t[41] !== N)
    ((B = fa.jsx(xs, {
      url: g,
      children: N,
    })),
      (t[40] = g),
      (t[41] = N),
      (t[42] = B));
  else B = t[42];
  let $;
  if (t[43] !== M || t[44] !== B)
    (($ = fa.jsxs(U, {
      flexDirection: "column",
      children: [M, B],
    })),
      (t[43] = M),
      (t[44] = B),
      (t[45] = $));
  else $ = t[45];
  let q;
  if (t[46] !== S || t[47] !== b)
    ((q = fa.jsx(Sr, {
      options: b,
      onChange: S,
    })),
      (t[46] = S),
      (t[47] = b),
      (t[48] = q));
  else q = t[48];
  let W;
  if (t[49] !== O || t[50] !== $ || t[51] !== q)
    ((W = fa.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [O, $, q],
    })),
      (t[49] = O),
      (t[50] = $),
      (t[51] = q),
      (t[52] = W));
  else W = t[52];
  let V;
  if (t[53] !== f || t[54] !== W || t[55] !== I)
    ((V = fa.jsx(zn, {
      title: I,
      onCancel: f,
      color: "background",
      inputGuide: k,
      children: W,
    })),
      (t[53] = f),
      (t[54] = W),
      (t[55] = I),
      (t[56] = V));
  else V = t[56];
  return V;
}
function RemoteSessionDetailDialog({
  session: e,
  toolUseContext: t,
  onDone: n,
  onBack: r,
  onKill: o,
}) {
  let [s, i] = aYe.useState(false),
    [a, l] = aYe.useState(null),
    c = aYe.useMemo(() => {
      if (e.isUltraplan || e.isRemoteReview) return [];
      return mS(csr(e.log))
        .filter((y) => y.type !== "progress")
        .slice(-3);
    }, [e]),
    u = e.status === "running" || e.status === "pending",
    d = sQ(e.startTime, u, 1000, 0, e.endTime);
  if (e.isUltraplan)
    return fa.jsx(UltraplanSessionDetail, {
      session: e,
      onDone: n,
      onBack: r,
      onKill: o,
    });
  if (e.isRemoteReview)
    return fa.jsx(ReviewSessionDetail, {
      session: e,
      onDone: n,
      onBack: r,
      onKill: o,
    });
  let p = () =>
      n("Cloud session details dismissed", {
        display: "system",
      }),
    f = (y) => {
      if (y.key === " ")
        (y.preventDefault(),
          n("Cloud session details dismissed", {
            display: "system",
          }));
      else if (y.key === "left" && r) (y.preventDefault(), r());
      else if (y.key === "t" && !y.ctrl && !y.meta && !s) (y.preventDefault(), m());
      else if (y.key === "return") (y.preventDefault(), p());
    };
  async function m() {
    (i(true), l(null));
    try {
      await i8e(e.sessionId);
    } catch (y) {
      l(be(y));
    } finally {
      i(false);
    }
  }
  let g = Rs(e.title, 50),
    h = e.status === "pending" ? "starting" : e.status;
  return fa.jsx(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: f,
    children: fa.jsxs(zn, {
      title: "Cloud session details",
      onCancel: p,
      color: "background",
      inputGuide: fa.jsxs(Tn, {
        children: [
          r &&
            fa.jsx(ht, {
              chord: "left",
              action: "go back",
            }),
          fa.jsx(ht, {
            chord: ["escape", "enter", "space"],
            action: "close",
          }),
          !s &&
            fa.jsx(ht, {
              chord: "t",
              action: "teleport",
            }),
        ],
      }),
      children: [
        fa.jsxs(U, {
          flexDirection: "column",
          children: [
            fa.jsxs(w, {
              children: [
                fa.jsx(w, {
                  bold: true,
                  children: "Status",
                }),
                ":",
                " ",
                h === "running" || h === "starting"
                  ? fa.jsx(w, {
                      color: "background",
                      children: h,
                    })
                  : h === "completed"
                    ? fa.jsx(w, {
                        color: "success",
                        children: h,
                      })
                    : fa.jsx(w, {
                        color: "error",
                        children: h,
                      }),
              ],
            }),
            fa.jsxs(w, {
              children: [
                fa.jsx(w, {
                  bold: true,
                  children: "Runtime",
                }),
                ": ",
                d,
              ],
            }),
            fa.jsxs(w, {
              wrap: "truncate-end",
              children: [
                fa.jsx(w, {
                  bold: true,
                  children: "Title",
                }),
                ": ",
                g,
              ],
            }),
            fa.jsxs(w, {
              children: [
                fa.jsx(w, {
                  bold: true,
                  children: "Progress",
                }),
                ":",
                " ",
                fa.jsx(pJt, {
                  session: e,
                }),
              ],
            }),
            fa.jsxs(w, {
              children: [
                fa.jsx(w, {
                  bold: true,
                  children: "Session URL",
                }),
                ":",
                " ",
                fa.jsx(xs, {
                  url: xpe(e.sessionId),
                  children: fa.jsx(w, {
                    dimColor: true,
                    children: xpe(e.sessionId),
                  }),
                }),
              ],
            }),
          ],
        }),
        e.log.length > 0 &&
          fa.jsxs(U, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              fa.jsxs(w, {
                children: [
                  fa.jsx(w, {
                    bold: true,
                    children: "Recent messages",
                  }),
                  ":",
                ],
              }),
              fa.jsx(U, {
                flexDirection: "column",
                height: 10,
                overflowY: "hidden",
                children: c.map((y, b) =>
                  fa.jsx(
                    dQ,
                    {
                      message: y,
                      lookups: LAe,
                      addMargin: b > 0,
                      tools: t.options.tools,
                      commands: t.options.commands,
                      verbose: t.options.verbose,
                      inProgressToolUseIDs: new Set(),
                      progressMessagesForMessage: [],
                      shouldAnimate: false,
                      shouldShowDot: false,
                      style: "condensed",
                      isTranscriptMode: false,
                      isStatic: true,
                    },
                    b,
                  ),
                ),
              }),
              fa.jsx(U, {
                marginTop: 1,
                children: fa.jsxs(w, {
                  dimColor: true,
                  italic: true,
                  children: ["Showing last ", c.length, " of ", e.log.length, " ", "messages"],
                }),
              }),
            ],
          }),
        a &&
          fa.jsx(U, {
            marginTop: 1,
            children: fa.jsxs(w, {
              color: "error",
              children: ["Teleport failed: ", a],
            }),
          }),
        s &&
          fa.jsx(w, {
            color: "background",
            children: "Teleporting to session\u2026",
          }),
      ],
    }),
  });
}
var usr, R8l, aYe, fa, d5f, p5f, x8l, k8l;
