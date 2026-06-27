// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AYl
// matched 2.1.88 source: src/components/agents/AgentsList.tsx
// class=modified  jaccard=0.1788  score=0.2967  fileCov=0.3102
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module AYl] deps: iu, si, uo, Ye, ps, IL, ty, y3, f_, VAt, i4o, a4o, l4o, c4o
((aZ = R(rt(), 1)), (Pse = R(se(), 1)));
function AgentsList(e) {
  let t = XAt.c(75),
    {
      source: n,
      agents: r,
      runningByType: o,
      usedThisSession: s,
      onSelect: i,
      onCreateNew: a,
      changes: l,
    } = e,
    [c, u] = YAt.useState(null),
    [d, p] = YAt.useState(!!a),
    { headerFocused: f, focusHeader: m } = tx(),
    g;
  if (t[0] !== r || t[1] !== n || t[2] !== s) {
    e: {
      let W = [...r].sort(oYl);
      if (n !== "all" || !s || s.size === 0) {
        g = W;
        break e;
      }
      let V;
      if (t[4] !== s)
        ((V = (Y, z) => {
          let K = s.has(Y.agentType) ? 0 : 1,
            Z = s.has(z.agentType) ? 0 : 1;
          return K - Z;
        }),
          (t[4] = s),
          (t[5] = V));
      else V = t[5];
      g = W.sort(V);
    }
    ((t[0] = r), (t[1] = n), (t[2] = s), (t[3] = g));
  } else g = t[3];
  let h = g,
    y = f || d ? null : c,
    b;
  if (t[6] !== h || t[7] !== n) {
    e: {
      let W = h.filter(JVf);
      if (n === "all") {
        b = n4o.filter(XVf).flatMap((V) => {
          let { source: Y } = V;
          return W.filter((z) => z.source === Y);
        });
        break e;
      }
      b = W;
    }
    ((t[6] = h), (t[7] = n), (t[8] = b));
  } else b = t[8];
  let _ = b,
    { rows: S } = br(),
    [A, v] = YAt.useState(0),
    C = Math.max(5, S - 14),
    x;
  if (t[9] !== _) {
    x = new Map();
    for (let W = 0; W < _.length; W++) {
      let V = _[W];
      x.set(`${V.agentType}-${V.source}`, W);
    }
    ((t[9] = _), (t[10] = x));
  } else x = t[10];
  let I = x,
    k;
  if (t[11] !== I || t[12] !== C || t[13] !== A)
    ((k = (W) => {
      let V = I.get(`${W.agentType}-${W.source}`);
      if (V === void 0) return true;
      return V >= A && V < A + C;
    }),
      (t[11] = I),
      (t[12] = C),
      (t[13] = A),
      (t[14] = k));
  else k = t[14];
  let D = k,
    P = A > 0,
    O = A + C < _.length,
    L;
  if (t[15] !== d || t[16] !== a || t[17] !== _[0] || t[18] !== _.length || t[19] !== c)
    ((L = () => {
      if (!c && !d && _.length > 0)
        if (a) p(true);
        else u(_[0] || null);
    }),
      (t[15] = d),
      (t[16] = a),
      (t[17] = _[0]),
      (t[18] = _.length),
      (t[19] = c),
      (t[20] = L));
  else L = t[20];
  let M;
  if (t[21] !== d || t[22] !== a || t[23] !== _ || t[24] !== c)
    ((M = [_, c, d, a]), (t[21] = d), (t[22] = a), (t[23] = _), (t[24] = c), (t[25] = M));
  else M = t[25];
  YAt.useEffect(L, M);
  let N;
  if (
    t[26] !== m ||
    t[27] !== f ||
    t[28] !== d ||
    t[29] !== a ||
    t[30] !== i ||
    t[31] !== _ ||
    t[32] !== c ||
    t[33] !== C ||
    t[34] !== A
  )
    ((N = (W) => {
      if (f) return;
      if (W.key === "return") {
        if ((W.preventDefault(), d && a)) a();
        else if (c) i(c);
        return;
      }
      if (W.key !== "up" && W.key !== "down") return;
      W.preventDefault();
      let V = !!a,
        Y = _.length + (V ? 1 : 0);
      if (Y === 0) {
        if (W.key === "up") m();
        return;
      }
      let z = 0;
      if (!d && c) {
        let Z = _.findIndex((J) => J.agentType === c.agentType && J.source === c.source);
        if (Z >= 0) z = V ? Z + 1 : Z;
      }
      if (W.key === "up" && z === 0) {
        m();
        return;
      }
      let K = W.key === "up" ? z - 1 : Math.min(z + 1, Y - 1);
      if (V && K === 0) (p(true), u(null), v(0));
      else {
        let Z = V ? K - 1 : K,
          J = _[Z];
        if (J) {
          if ((p(false), u(J), Z < A)) v(Z);
          else if (Z >= A + C) v(Z - C + 1);
        }
      }
    }),
      (t[26] = m),
      (t[27] = f),
      (t[28] = d),
      (t[29] = a),
      (t[30] = i),
      (t[31] = _),
      (t[32] = c),
      (t[33] = C),
      (t[34] = A),
      (t[35] = N));
  else N = t[35];
  let B = N,
    $,
    q;
  if (
    t[36] !== y ||
    t[37] !== l ||
    t[38] !== B ||
    t[39] !== P ||
    t[40] !== O ||
    t[41] !== f ||
    t[42] !== D ||
    t[43] !== d ||
    t[44] !== a ||
    t[45] !== o ||
    t[46] !== _.length ||
    t[47] !== h ||
    t[48] !== n ||
    t[49] !== C ||
    t[50] !== A
  ) {
    q = Symbol.for("react.early_return_sentinel");
    e: {
      let W = h.filter(YVf);
      if (!h.length || (n !== "built-in" && !h.some(KVf))) {
        let Z = !f,
          J;
        if (t[53] !== f || t[54] !== d || t[55] !== a)
          ((J =
            a &&
            kl.jsx(U, {
              children: kl.jsx(HYl, {
                active: d && !f,
              }),
            })),
            (t[53] = f),
            (t[54] = d),
            (t[55] = a),
            (t[56] = J));
        else J = t[56];
        let ne;
        if (t[57] !== a)
          ((ne = a
            ? kl.jsxs(kl.Fragment, {
                children: [
                  kl.jsx(w, {
                    dimColor: true,
                    children:
                      "No agents found. Create specialized subagents that Claude can delegate to.",
                  }),
                  kl.jsx(w, {
                    dimColor: true,
                    children:
                      "Each subagent has its own context window, custom system prompt, and specific tools.",
                  }),
                  kl.jsx(w, {
                    dimColor: true,
                    children:
                      "Try creating: Code Reviewer, Code Simplifier, Security Reviewer, Tech Lead, or UX Reviewer.",
                  }),
                ],
              })
            : kl.jsx(w, {
                dimColor: true,
                children: "No agents found.",
              })),
            (t[57] = a),
            (t[58] = ne));
        else ne = t[58];
        let oe =
            n !== "built-in" &&
            W.length > 0 &&
            kl.jsxs(kl.Fragment, {
              children: [
                kl.jsx(qh, {}),
                kl.jsx(TYl, {
                  agents: W,
                  runningByType: o,
                }),
              ],
            }),
          re;
        if (t[59] !== B || t[60] !== J || t[61] !== ne || t[62] !== oe || t[63] !== Z)
          ((re = kl.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            tabIndex: 0,
            autoFocus: Z,
            onKeyDown: B,
            children: [J, ne, oe],
          })),
            (t[59] = B),
            (t[60] = J),
            (t[61] = ne),
            (t[62] = oe),
            (t[63] = Z),
            (t[64] = re));
        else re = t[64];
        q = re;
        break e;
      }
      let Y;
      if (t[65] !== l)
        ((Y =
          l &&
          l.length > 0 &&
          kl.jsx(U, {
            marginBottom: 1,
            children: kl.jsx(w, {
              dimColor: true,
              children: l.at(-1),
            }),
          })),
          (t[65] = l),
          (t[66] = Y));
      else Y = t[66];
      let z;
      if (t[67] !== P || t[68] !== f || t[69] !== d || t[70] !== a)
        ((z =
          a &&
          !P &&
          kl.jsx(U, {
            marginBottom: 1,
            children: kl.jsx(HYl, {
              active: d && !f,
            }),
          })),
          (t[67] = P),
          (t[68] = f),
          (t[69] = d),
          (t[70] = a),
          (t[71] = z));
      else z = t[71];
      let K;
      if (t[72] !== P || t[73] !== A)
        ((K =
          P &&
          kl.jsx(U, {
            paddingLeft: 2,
            children: kl.jsxs(w, {
              dimColor: true,
              children: [
                kl.jsxs(w, {
                  "aria-hidden": true,
                  children: [nt.arrowUp, " "],
                }),
                A,
                " more",
              ],
            }),
          })),
          (t[72] = P),
          (t[73] = A),
          (t[74] = K));
      else K = t[74];
      $ = kl.jsxs(U, {
        flexDirection: "column",
        tabIndex: 0,
        autoFocus: !f,
        onKeyDown: B,
        children: [
          Y,
          z,
          K,
          n === "all"
            ? kl.jsxs(kl.Fragment, {
                children: [
                  n4o.filter(zVf).map((Z) => {
                    let { label: J, source: ne } = Z;
                    return kl.jsx(
                      QVf,
                      {
                        title: J,
                        agents: h.filter((oe) => oe.source === ne).filter(D),
                        activeSelection: y,
                        runningByType: o,
                      },
                      ne,
                    );
                  }),
                  O &&
                    kl.jsx(U, {
                      paddingLeft: 2,
                      children: kl.jsxs(w, {
                        dimColor: true,
                        children: [
                          kl.jsxs(w, {
                            "aria-hidden": true,
                            children: [nt.arrowDown, " "],
                          }),
                          _.length - A - C,
                          " ",
                          "more",
                        ],
                      }),
                    }),
                  !O &&
                    W.length > 0 &&
                    kl.jsxs(U, {
                      flexDirection: "column",
                      marginBottom: 1,
                      paddingLeft: 2,
                      children: [
                        kl.jsxs(w, {
                          dimColor: true,
                          children: [
                            kl.jsx(w, {
                              bold: true,
                              children: "Built-in agents",
                            }),
                            " (always available)",
                          ],
                        }),
                        W.map((Z) =>
                          kl.jsx(
                            vJt,
                            {
                              agent: Z,
                              activeSelection: y,
                              runningByType: o,
                            },
                            `${Z.agentType}-${Z.source}`,
                          ),
                        ),
                      ],
                    }),
                ],
              })
            : n === "built-in"
              ? kl.jsxs(kl.Fragment, {
                  children: [
                    kl.jsx(w, {
                      dimColor: true,
                      italic: true,
                      children: "Built-in agents are provided by default and cannot be modified.",
                    }),
                    kl.jsx(U, {
                      marginTop: 1,
                      flexDirection: "column",
                      children: h.map((Z) =>
                        kl.jsx(
                          vJt,
                          {
                            agent: Z,
                            activeSelection: y,
                            runningByType: o,
                          },
                          `${Z.agentType}-${Z.source}`,
                        ),
                      ),
                    }),
                  ],
                })
              : kl.jsxs(kl.Fragment, {
                  children: [
                    h
                      .filter(VVf)
                      .filter(D)
                      .map((Z) =>
                        kl.jsx(
                          vJt,
                          {
                            agent: Z,
                            activeSelection: y,
                            runningByType: o,
                          },
                          `${Z.agentType}-${Z.source}`,
                        ),
                      ),
                    O &&
                      kl.jsx(U, {
                        paddingLeft: 2,
                        children: kl.jsxs(w, {
                          dimColor: true,
                          children: [
                            kl.jsxs(w, {
                              "aria-hidden": true,
                              children: [nt.arrowDown, " "],
                            }),
                            _.length - A - C,
                            " ",
                            "more",
                          ],
                        }),
                      }),
                    !O &&
                      W.length > 0 &&
                      kl.jsxs(kl.Fragment, {
                        children: [
                          kl.jsx(qh, {}),
                          kl.jsx(TYl, {
                            agents: W,
                            runningByType: o,
                          }),
                        ],
                      }),
                  ],
                }),
        ],
      });
    }
    ((t[36] = y),
      (t[37] = l),
      (t[38] = B),
      (t[39] = P),
      (t[40] = O),
      (t[41] = f),
      (t[42] = D),
      (t[43] = d),
      (t[44] = a),
      (t[45] = o),
      (t[46] = _.length),
      (t[47] = h),
      (t[48] = n),
      (t[49] = C),
      (t[50] = A),
      (t[51] = $),
      (t[52] = q));
  } else (($ = t[51]), (q = t[52]));
  if (q !== Symbol.for("react.early_return_sentinel")) return q;
  return $;
}
function VVf(e) {
  return e.source !== "built-in";
}
function zVf(e) {
  return e.source !== "built-in";
}
function KVf(e) {
  return e.source !== "built-in";
}
function YVf(e) {
  return e.source === "built-in";
}
function XVf(e) {
  return e.source !== "built-in";
}
function JVf(e) {
  return e.source !== "built-in";
}
function HYl(e) {
  let t = XAt.c(9),
    { active: n } = e,
    r = n ? "selected," : "",
    o = n ? "suggestion" : void 0,
    s = n ? `${nt.pointer} ` : "  ",
    i;
  if (t[0] !== r || t[1] !== o || t[2] !== s)
    ((i = kl.jsx(w, {
      "aria-label": r,
      color: o,
      children: s,
    })),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s),
      (t[3] = i));
  else i = t[3];
  let a = n ? "suggestion" : void 0,
    l;
  if (t[4] !== a)
    ((l = kl.jsx(w, {
      color: a,
      children: "Create new agent",
    })),
      (t[4] = a),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] !== i || t[7] !== l)
    ((c = kl.jsxs(U, {
      children: [i, l],
    })),
      (t[6] = i),
      (t[7] = l),
      (t[8] = c));
  else c = t[8];
  return c;
}
function vJt(e) {
  let t = XAt.c(33),
    { agent: n, activeSelection: r, runningByType: o } = e,
    s = n.source === "built-in",
    i = !s && r?.agentType === n.agentType && r?.source === n.source,
    a = n.overriddenBy || null,
    l = !!a,
    c = s || l,
    u = !s && i ? "suggestion" : void 0,
    d;
  if (t[0] !== n) ((d = nYl(n)), (t[0] = n), (t[1] = d));
  else d = t[1];
  let p = d,
    f;
  if (t[2] !== n.agentType || t[3] !== l || t[4] !== o)
    ((f = l ? 0 : (o?.get(n.agentType) ?? 0)),
      (t[2] = n.agentType),
      (t[3] = l),
      (t[4] = o),
      (t[5] = f));
  else f = t[5];
  let m = f,
    g = i ? "selected," : "",
    h = c && !i,
    y = s ? "" : i ? `${nt.pointer} ` : "  ",
    b;
  if (t[6] !== g || t[7] !== h || t[8] !== y || t[9] !== u)
    ((b = kl.jsx(w, {
      "aria-label": g,
      dimColor: h,
      color: u,
      children: y,
    })),
      (t[6] = g),
      (t[7] = h),
      (t[8] = y),
      (t[9] = u),
      (t[10] = b));
  else b = t[10];
  let _ = c && !i,
    S;
  if (t[11] !== n.agentType || t[12] !== _ || t[13] !== u)
    ((S = kl.jsx(w, {
      dimColor: _,
      color: u,
      children: n.agentType,
    })),
      (t[11] = n.agentType),
      (t[12] = _),
      (t[13] = u),
      (t[14] = S));
  else S = t[14];
  let A;
  if (t[15] !== p || t[16] !== u)
    ((A =
      p &&
      kl.jsxs(w, {
        dimColor: true,
        color: u,
        children: [" \xB7 ", p],
      })),
      (t[15] = p),
      (t[16] = u),
      (t[17] = A));
  else A = t[17];
  let v;
  if (t[18] !== n.memory || t[19] !== u)
    ((v =
      n.memory &&
      kl.jsxs(w, {
        dimColor: true,
        color: u,
        children: [" \xB7 ", n.memory, " memory"],
      })),
      (t[18] = n.memory),
      (t[19] = u),
      (t[20] = v));
  else v = t[20];
  let C;
  if (t[21] !== m)
    ((C =
      m > 0 &&
      kl.jsxs(w, {
        color: "success",
        children: [
          " ",
          kl.jsxs(w, {
            "aria-hidden": true,
            children: [gc, " "],
          }),
          m,
          " running",
        ],
      })),
      (t[21] = m),
      (t[22] = C));
  else C = t[22];
  let x;
  if (t[23] !== i || t[24] !== a)
    ((x =
      a &&
      kl.jsxs(w, {
        dimColor: !i,
        color: i ? "warning" : void 0,
        children: [
          " ",
          kl.jsxs(w, {
            "aria-hidden": true,
            children: [nt.warning, " "],
          }),
          "shadowed by",
          " ",
          rYl(a),
        ],
      })),
      (t[23] = i),
      (t[24] = a),
      (t[25] = x));
  else x = t[25];
  let I;
  if (t[26] !== v || t[27] !== C || t[28] !== x || t[29] !== b || t[30] !== S || t[31] !== A)
    ((I = kl.jsxs(U, {
      children: [b, S, A, v, C, x],
    })),
      (t[26] = v),
      (t[27] = C),
      (t[28] = x),
      (t[29] = b),
      (t[30] = S),
      (t[31] = A),
      (t[32] = I));
  else I = t[32];
  return I;
}
function TYl(e) {
  let t = XAt.c(8),
    { agents: n, runningByType: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = kl.jsx(w, {
      bold: true,
      dimColor: true,
      children: "Built-in (always available):",
    })),
      (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] !== n || t[2] !== r) {
    let a;
    if (t[4] !== r)
      ((a = (l) =>
        kl.jsx(
          vJt,
          {
            agent: l,
            activeSelection: null,
            runningByType: r,
          },
          `${l.agentType}-${l.source}`,
        )),
        (t[4] = r),
        (t[5] = a));
    else a = t[5];
    ((s = n.map(a)), (t[1] = n), (t[2] = r), (t[3] = s));
  } else s = t[3];
  let i;
  if (t[6] !== s)
    ((i = kl.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      paddingLeft: 2,
      children: [o, s],
    })),
      (t[6] = s),
      (t[7] = i));
  else i = t[7];
  return i;
}
function QVf(e) {
  let t = XAt.c(18),
    { title: n, agents: r, activeSelection: o, runningByType: s } = e;
  if (!r.length) return null;
  let i = r[0]?.baseDir,
    a;
  if (t[0] !== n)
    ((a = kl.jsx(w, {
      bold: true,
      dimColor: true,
      children: n,
    })),
      (t[0] = n),
      (t[1] = a));
  else a = t[1];
  let l = i ?? false,
    c;
  if (t[2] !== i || t[3] !== l)
    ((c = kl.jsx(mz, {
      when: l,
      children: i,
    })),
      (t[2] = i),
      (t[3] = l),
      (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] !== a || t[6] !== c)
    ((u = kl.jsxs(U, {
      paddingLeft: 2,
      children: [a, c],
    })),
      (t[5] = a),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] !== o || t[9] !== r || t[10] !== s) {
    let f;
    if (t[12] !== o || t[13] !== s)
      ((f = (m) =>
        kl.jsx(
          vJt,
          {
            agent: m,
            activeSelection: o,
            runningByType: s,
          },
          `${m.agentType}-${m.source}`,
        )),
        (t[12] = o),
        (t[13] = s),
        (t[14] = f));
    else f = t[14];
    ((d = r.map(f)), (t[8] = o), (t[9] = r), (t[10] = s), (t[11] = d));
  } else d = t[11];
  let p;
  if (t[15] !== u || t[16] !== d)
    ((p = kl.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [u, d],
    })),
      (t[15] = u),
      (t[16] = d),
      (t[17] = p));
  else p = t[17];
  return p;
}
var XAt, YAt, kl;
