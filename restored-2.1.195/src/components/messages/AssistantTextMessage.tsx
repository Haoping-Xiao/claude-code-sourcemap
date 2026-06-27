// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Osl
// matched 2.1.88 source: src/components/messages/AssistantTextMessage.tsx
// class=modified  jaccard=0.1203  score=0.2527  fileCov=0.1867
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Osl] deps: qyt, Ye, Un, Vyt, Ijt, oo, e1, wr, d5e, ql
((Msl = R(lt(), 1)), (Izn = R(rt(), 1)), (zyt = R(se(), 1)));
function oof() {
  let e = D8t.c(1);
  if (!xzn.use(Osi())) return null;
  let n;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((n = ld.jsx(w, {
      dimColor: true,
      children: "\xB7 Run in another terminal: security unlock-keychain",
    })),
      (e[0] = n));
  else n = e[0];
  return n;
}
function InvalidApiKeyMessage() {
  let e = D8t.c(2),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = ld.jsx(w, {
      color: "error",
      children: N1n,
    })),
      (e[0] = t));
  else t = e[0];
  let n;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((n = ld.jsx(qn, {
      children: ld.jsxs(U, {
        flexDirection: "column",
        children: [
          t,
          ld.jsx(xzn.Suspense, {
            fallback: null,
            children: ld.jsx(oof, {}),
          }),
        ],
      }),
    })),
      (e[1] = n));
  else n = e[1];
  return n;
}
function RCo(e) {
  let t = D8t.c(32),
    { param: n, addMargin: r, shouldShowDot: o, verbose: s, onOpenRateLimitOptions: i } = e,
    { text: a } = n;
  if (kzn(a)) return null;
  if (vaa(a)) {
    let l;
    if (t[0] !== i || t[1] !== a)
      ((l = ld.jsx($sl, {
        text: a,
        onOpenRateLimitOptions: i,
      })),
        (t[0] = i),
        (t[1] = a),
        (t[2] = l));
    else l = t[2];
    return l;
  }
  switch (a) {
    case zte:
      return null;
    case nF: {
      let l;
      if (t[3] === Symbol.for("react.memo_cache_sentinel")) ((l = J8e("warning")), (t[3] = l));
      else l = t[3];
      let c = l,
        u = Oe.DISABLE_COMPACT ? "/clear to continue" : "/compact or /clear to continue",
        d;
      if (t[4] === Symbol.for("react.memo_cache_sentinel"))
        ((d = ld.jsx(qn, {
          height: 1,
          children: ld.jsxs(w, {
            color: "error",
            children: ["Context limit reached \xB7 ", u, c ? ` \xB7 ${c}` : ""],
          }),
        })),
          (t[4] = d));
      else d = t[4];
      return d;
    }
    case $1n: {
      let l;
      if (t[5] === Symbol.for("react.memo_cache_sentinel"))
        ((l = ld.jsx(qn, {
          height: 1,
          children: ld.jsx(w, {
            color: "error",
            children:
              "Credit balance too low \xB7 Add funds: https://platform.claude.com/settings/billing",
          }),
        })),
          (t[5] = l));
      else l = t[5];
      return l;
    }
    case N1n: {
      let l;
      if (t[6] === Symbol.for("react.memo_cache_sentinel"))
        ((l = ld.jsx(InvalidApiKeyMessage, {})), (t[6] = l));
      else l = t[6];
      return l;
    }
    case B1n: {
      let l;
      if (t[7] === Symbol.for("react.memo_cache_sentinel"))
        ((l = ld.jsx(qn, {
          height: 1,
          children: ld.jsx(w, {
            color: "error",
            children: B1n,
          }),
        })),
          (t[7] = l));
      else l = t[7];
      return l;
    }
    case Uio:
    case Bio:
    case Fio: {
      let l;
      if (t[8] !== a)
        ((l = ld.jsx(qn, {
          children: ld.jsx(w, {
            color: "error",
            children: a,
          }),
        })),
          (t[8] = a),
          (t[9] = l));
      else l = t[9];
      return l;
    }
    case U1n: {
      let l;
      if (t[10] === Symbol.for("react.memo_cache_sentinel"))
        ((l = ld.jsx(qn, {
          height: 1,
          children: ld.jsx(w, {
            color: "error",
            children: U1n,
          }),
        })),
          (t[10] = l));
      else l = t[10];
      return l;
    }
    case aut: {
      let l;
      if (t[11] === Symbol.for("react.memo_cache_sentinel"))
        ((l = ld.jsx(qn, {
          height: 1,
          children: ld.jsxs(w, {
            color: "error",
            children: [
              aut,
              process.env.API_TIMEOUT_MS &&
                ld.jsxs(ld.Fragment, {
                  children: [
                    " ",
                    "(API_TIMEOUT_MS=",
                    process.env.API_TIMEOUT_MS,
                    "ms, try increasing it)",
                  ],
                }),
            ],
          }),
        })),
          (t[11] = l));
      else l = t[11];
      return l;
    }
    case m5e: {
      let l;
      if (t[12] === Symbol.for("react.memo_cache_sentinel"))
        ((l = ld.jsx(w, {
          color: "error",
          children: "We are experiencing high demand for Opus 4.",
        })),
          (t[12] = l));
      else l = t[12];
      let c;
      if (t[13] === Symbol.for("react.memo_cache_sentinel"))
        ((c = ld.jsx(qn, {
          children: ld.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              l,
              ld.jsxs(w, {
                children: [
                  "To continue immediately, use /model to switch to",
                  " ",
                  wp(jx()),
                  " and continue coding.",
                ],
              }),
            ],
          }),
        })),
          (t[13] = c));
      else c = t[13];
      return c;
    }
    case g5e: {
      let l;
      if (t[14] === Symbol.for("react.memo_cache_sentinel"))
        ((l = ld.jsx(w, {
          color: "error",
          children: "We are experiencing high demand for Fable 5.",
        })),
          (t[14] = l));
      else l = t[14];
      let c;
      if (t[15] === Symbol.for("react.memo_cache_sentinel"))
        ((c = ld.jsx(qn, {
          children: ld.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              l,
              ld.jsxs(w, {
                children: [
                  "To continue immediately, use /model to switch to",
                  " ",
                  wp(jx()),
                  " and continue coding.",
                ],
              }),
            ],
          }),
        })),
          (t[15] = c));
      else c = t[15];
      return c;
    }
    case t3: {
      let l;
      if (t[16] === Symbol.for("react.memo_cache_sentinel"))
        ((l = ld.jsx(qn, {
          height: 1,
          children: ld.jsx(Fpe, {}),
        })),
          (t[16] = l));
      else l = t[16];
      return l;
    }
    default: {
      if (a.startsWith(`${nF} \xB7 `)) {
        let p;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) ((p = J8e("warning")), (t[17] = p));
        else p = t[17];
        let f = p,
          m;
        if (t[18] !== a)
          ((m = ld.jsx(qn, {
            children: ld.jsxs(w, {
              color: "error",
              children: [a, " \xB7 /clear to start fresh", f ? ` \xB7 ${f}` : ""],
            }),
          })),
            (t[18] = a),
            (t[19] = m));
        else m = t[19];
        return m;
      }
      if (K1(a)) {
        let p;
        if (t[20] !== r || t[21] !== a || t[22] !== s)
          ((p = ld.jsx(AssistantTextMessage, {
            text: a,
            verbose: s,
            addMargin: r,
          })),
            (t[20] = r),
            (t[21] = a),
            (t[22] = s),
            (t[23] = p));
        else p = t[23];
        return p;
      }
      let l = r ? 1 : 0,
        c;
      if (t[24] !== o)
        ((c =
          o &&
          ld.jsx(wI, {
            fromLeftEdge: true,
            minWidth: 2,
            children: ld.jsx(w, {
              "aria-label": "claude:",
              color: "text",
              children: gc,
            }),
          })),
          (t[24] = o),
          (t[25] = c));
      else c = t[25];
      let u;
      if (t[26] !== a)
        ((u = ld.jsx(U, {
          flexDirection: "column",
          children: ld.jsx(zg, {
            children: a,
          }),
        })),
          (t[26] = a),
          (t[27] = u));
      else u = t[27];
      let d;
      if (t[28] !== l || t[29] !== c || t[30] !== u)
        ((d = ld.jsxs(U, {
          alignItems: "flex-start",
          flexDirection: "row",
          marginTop: l,
          width: "100%",
          children: [c, u],
        })),
          (t[28] = l),
          (t[29] = c),
          (t[30] = u),
          (t[31] = d));
      else d = t[31];
      return d;
    }
  }
}
function AssistantTextMessage(e) {
  let t = D8t.c(23),
    { text: n, verbose: r, addMargin: o } = e,
    { columns: s } = br(),
    i = J5i(),
    a = n === Eb ? `${Eb}: Please wait a moment and try again.` : n,
    l,
    c;
  if (t[0] !== a || t[1] !== r) {
    let b = a.trim();
    ((c = !r && b.length > Nsl),
      (l = c ? b.slice(0, Nsl) + "\u2026" : b),
      (t[0] = a),
      (t[1] = r),
      (t[2] = l),
      (t[3] = c));
  } else ((l = t[2]), (c = t[3]));
  let u = l;
  if (i) {
    let b;
    if (t[4] !== u)
      ((b = ld.jsx(Q8e, {
        color: "warning",
        children: u,
      })),
        (t[4] = u),
        (t[5] = b));
    else b = t[5];
    let _;
    if (t[6] !== c) ((_ = c && ld.jsx(NI, {})), (t[6] = c), (t[7] = _));
    else _ = t[7];
    let S;
    if (t[8] !== b || t[9] !== _)
      ((S = ld.jsxs(U, {
        flexDirection: "column",
        children: [b, _],
      })),
        (t[8] = b),
        (t[9] = _),
        (t[10] = S));
    else S = t[10];
    return S;
  }
  let d = o ? 1 : 0,
    p;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((p = ld.jsx(U, {
      minWidth: 2,
      children: ld.jsx(w, {
        "aria-label": "error:",
        color: "warning",
        children: gc,
      }),
    })),
      (t[11] = p));
  else p = t[11];
  let f = s - 10,
    m;
  if (t[12] !== u)
    ((m = ld.jsx(Q8e, {
      color: "warning",
      children: u,
    })),
      (t[12] = u),
      (t[13] = m));
  else m = t[13];
  let g;
  if (t[14] !== c) ((g = c && ld.jsx(NI, {})), (t[14] = c), (t[15] = g));
  else g = t[15];
  let h;
  if (t[16] !== f || t[17] !== m || t[18] !== g)
    ((h = ld.jsxs(U, {
      flexDirection: "column",
      width: f,
      children: [m, g],
    })),
      (t[16] = f),
      (t[17] = m),
      (t[18] = g),
      (t[19] = h));
  else h = t[19];
  let y;
  if (t[20] !== d || t[21] !== h)
    ((y = ld.jsxs(U, {
      flexDirection: "row",
      marginTop: d,
      width: "100%",
      children: [p, h],
    })),
      (t[20] = d),
      (t[21] = h),
      (t[22] = y));
  else y = t[22];
  return y;
}
var D8t,
  xzn,
  ld,
  Nsl = 1000;
