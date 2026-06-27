// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S1l
// matched 2.1.88 source: src/components/ContextVisualization.tsx
// class=modified  jaccard=0.1251  score=0.2662  fileCov=0.1909
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module S1l] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, utils/profilerBase.ts, undici/lib/mock/mock-agent.js
((_1l = R(lt(), 1)), (fse = R(se(), 1)));
function VPf() {
  let e = Xtr.c(2);
  return null;
}
function E1l(e) {
  let t = new Map();
  for (let r of e) {
    let o = Tet(r.source) + (r.pluginName ? ` (${r.pluginName})` : ""),
      s = t.get(o) || [];
    (s.push(r), t.set(o, s));
  }
  for (let [r, o] of t.entries())
    t.set(
      r,
      o.sort((s, i) => i.tokens - s.tokens),
    );
  let n = new Map();
  for (let r of zPf) {
    let o = t.get(r);
    if (o) n.set(r, o);
    let s = [...t.keys()].filter((i) => i.startsWith(r + " (")).sort();
    for (let i of s) n.set(i, t.get(i));
  }
  for (let [r, o] of t) if (!n.has(r)) n.set(r, o);
  return n;
}
function Ytr(e) {
  let t = Xtr.c(9),
    { count: n, noun: r, tokens: o } = e,
    s;
  if (t[0] !== n || t[1] !== r) ((s = bn(n, r)), (t[0] = n), (t[1] = r), (t[2] = s));
  else s = t[2];
  let i;
  if (t[3] !== o) ((i = gl(o)), (t[3] = o), (t[4] = i));
  else i = t[4];
  let a;
  if (t[5] !== n || t[6] !== s || t[7] !== i)
    ((a = Pi.jsx(hs, {
      variant: "tree",
      children: Pi.jsxs(hs.Node, {
        dimColor: true,
        children: [n, " ", s, " \xB7 ", i, " tokens"],
      }),
    })),
      (t[5] = n),
      (t[6] = s),
      (t[7] = i),
      (t[8] = a));
  else a = t[8];
  return a;
}
function ContextVisualization(t0) {
  let t = Xtr.c(116),
    { data: n, isRemote: r, collapseDetailSections: o } = t0,
    s = r === void 0 ? false : r,
    i = o === void 0 ? false : o,
    {
      categories: a,
      totalTokens: l,
      rawMaxTokens: c,
      autocompactSource: u,
      percentage: d,
      gridRows: p,
      model: f,
      memoryFiles: m,
      mcpTools: g,
      deferredBuiltinTools: h,
      systemTools: y,
      systemPromptSections: b,
      agents: _,
      skills: S,
      messageBreakdown: A,
    } = n,
    v,
    C,
    x,
    I,
    k,
    D,
    P,
    O,
    L,
    M,
    N,
    B;
  if (
    t[0] !== _.length ||
    t[1] !== u ||
    t[2] !== a ||
    t[3] !== i ||
    t[4] !== p ||
    t[5] !== s ||
    t[6] !== g ||
    t[7] !== m.length ||
    t[8] !== f ||
    t[9] !== d ||
    t[10] !== c ||
    t[11] !== S?.tokens ||
    t[12] !== b?.length ||
    t[13] !== y ||
    t[14] !== h ||
    t[15] !== l
  ) {
    let oe = h === void 0 ? [] : h,
      re = a.filter(hMf),
      ee;
    if (t[28] !== a) ((ee = a.some(gMf)), (t[28] = a), (t[29] = ee));
    else ee = t[29];
    let ce = ee,
      ae = oe.length > 0,
      de = a.find(mMf);
    if (
      ((x = g.length > 0 || _.length > 0 || m.length > 0 || (S?.tokens ?? 0) > 0 || false),
      (C = U),
      (B = "column"),
      (I = 1),
      t[30] === Symbol.for("react.memo_cache_sentinel"))
    )
      ((k = Pi.jsx(w, {
        bold: true,
        children: "Context Usage",
      })),
        (t[30] = k));
    else k = t[30];
    let Ee;
    if (t[31] !== p) ((Ee = p.map(pMf)), (t[31] = p), (t[32] = Ee));
    else Ee = t[32];
    let me;
    if (t[33] !== Ee)
      ((me = Pi.jsx(U, {
        flexDirection: "column",
        flexShrink: 0,
        children: Ee,
      })),
        (t[33] = Ee),
        (t[34] = me));
    else me = t[34];
    let pe;
    if (t[35] !== f)
      ((pe =
        qY(f) &&
        Pi.jsx(w, {
          children: qY(f),
        })),
        (t[35] = f),
        (t[36] = pe));
    else pe = t[36];
    let ge;
    if (t[37] !== f)
      ((ge = Pi.jsx(w, {
        dimColor: true,
        children: f,
      })),
        (t[37] = f),
        (t[38] = ge));
    else ge = t[38];
    let he;
    if (t[39] !== l) ((he = gl(l)), (t[39] = l), (t[40] = he));
    else he = t[40];
    let ie;
    if (t[41] !== c) ((ie = gl(c)), (t[41] = c), (t[42] = ie));
    else ie = t[42];
    let le;
    if (t[43] !== d || t[44] !== he || t[45] !== ie)
      ((le = Pi.jsxs(w, {
        dimColor: true,
        children: [he, "/", ie, " tokens (", d, "%)"],
      })),
        (t[43] = d),
        (t[44] = he),
        (t[45] = ie),
        (t[46] = le));
    else le = t[46];
    let He;
    if (t[47] !== s) ((He = !s && Pi.jsx(VPf, {})), (t[47] = s), (t[48] = He));
    else He = t[48];
    let ye, ue;
    if (t[49] === Symbol.for("react.memo_cache_sentinel"))
      ((ye = Pi.jsx(w, {
        children: " ",
      })),
        (ue = Pi.jsx(w, {
          dimColor: true,
          italic: true,
          children: "Estimated usage by category",
        })),
        (t[49] = ye),
        (t[50] = ue));
    else ((ye = t[49]), (ue = t[50]));
    let we;
    if (t[51] !== c)
      ((we = (Be, Me) => {
        let Ue = gl(Be.tokens),
          tt = Be.isDeferred ? "N/A" : `${((Be.tokens / c) * 100).toFixed(1)}%`,
          bt = Be.name === RESERVED_CATEGORY_NAME,
          Ke = Be.name,
          Et = Be.isDeferred ? " " : bt ? "\u26DD" : "\u26C1";
        return Pi.jsxs(
          U,
          {
            children: [
              Pi.jsx(w, {
                color: Be.color,
                children: Et,
              }),
              Pi.jsxs(w, {
                children: [" ", Ke, ": "],
              }),
              Pi.jsxs(w, {
                dimColor: true,
                children: [Ue, " tokens (", tt, ")"],
              }),
            ],
          },
          Me,
        );
      }),
        (t[51] = c),
        (t[52] = we));
    else we = t[52];
    let Ce = re.map(we),
      Ie;
    if (t[53] !== a || t[54] !== c)
      ((Ie =
        (a.find(dMf)?.tokens ?? 0) > 0 &&
        Pi.jsxs(U, {
          children: [
            Pi.jsx(w, {
              dimColor: true,
              children: "\u26F6",
            }),
            Pi.jsx(w, {
              children: " Free space: ",
            }),
            Pi.jsxs(w, {
              dimColor: true,
              children: [
                gl(a.find(uMf)?.tokens || 0),
                " ",
                "(",
                (((a.find(cMf)?.tokens || 0) / c) * 100).toFixed(1),
                "%)",
              ],
            }),
          ],
        })),
        (t[53] = a),
        (t[54] = c),
        (t[55] = Ie));
    else Ie = t[55];
    let Ve =
        de &&
        de.tokens > 0 &&
        Pi.jsxs(U, {
          children: [
            Pi.jsx(w, {
              color: de.color,
              children: "\u26DD",
            }),
            Pi.jsxs(w, {
              dimColor: true,
              children: [" ", de.name, ": "],
            }),
            Pi.jsxs(w, {
              dimColor: true,
              children: [gl(de.tokens), " tokens (", ((de.tokens / c) * 100).toFixed(1), "%)"],
            }),
          ],
        }),
      Ze;
    if (
      t[56] !== pe ||
      t[57] !== ge ||
      t[58] !== le ||
      t[59] !== He ||
      t[60] !== Ce ||
      t[61] !== Ie ||
      t[62] !== Ve
    )
      ((Ze = Pi.jsxs(U, {
        flexDirection: "column",
        gap: 0,
        flexShrink: 0,
        children: [pe, ge, le, He, ye, ue, Ce, Ie, Ve],
      })),
        (t[56] = pe),
        (t[57] = ge),
        (t[58] = le),
        (t[59] = He),
        (t[60] = Ce),
        (t[61] = Ie),
        (t[62] = Ve),
        (t[63] = Ze));
    else Ze = t[63];
    if (t[64] !== me || t[65] !== Ze)
      ((D = Pi.jsxs(U, {
        flexDirection: "row",
        gap: 2,
        children: [me, Ze],
      })),
        (t[64] = me),
        (t[65] = Ze),
        (t[66] = D));
    else D = t[66];
    if (((v = U), (P = "column"), (O = -1), t[67] !== u || t[68] !== c))
      ((L =
        u !== "auto" &&
        Pi.jsxs(U, {
          marginTop: 1,
          children: [
            Pi.jsx(w, {
              bold: true,
              children: "Auto-compact window: ",
            }),
            Pi.jsx(w, {
              dimColor: true,
              children:
                u === "experiment" || u === "clientdata"
                  ? `auto (${gl(c)} tokens)`
                  : `${gl(c)} tokens`,
            }),
          ],
        })),
        (t[67] = u),
        (t[68] = c),
        (t[69] = L));
    else L = t[69];
    if (t[70] !== i || t[71] !== ce || t[72] !== g)
      ((M =
        g.length > 0 &&
        Pi.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            Pi.jsxs(U, {
              children: [
                Pi.jsx(w, {
                  bold: true,
                  children: "MCP tools",
                }),
                Pi.jsxs(w, {
                  dimColor: true,
                  children: [" ", "\xB7 /mcp", ce ? " (loaded on-demand)" : ""],
                }),
              ],
            }),
            i
              ? Pi.jsx(Ytr, {
                  count: g.length,
                  noun: "tool",
                  tokens: g.filter((Be) => !ce || Be.isLoaded).reduce(lMf, 0),
                })
              : Pi.jsxs(Pi.Fragment, {
                  children: [
                    g.some(aMf) &&
                      Pi.jsxs(U, {
                        flexDirection: "column",
                        marginTop: 1,
                        children: [
                          Pi.jsx(w, {
                            dimColor: true,
                            children: "Loaded",
                          }),
                          Pi.jsx(hs, {
                            variant: "tree",
                            children: g.filter(iMf).map(sMf),
                          }),
                        ],
                      }),
                    ce &&
                      g.some(oMf) &&
                      Pi.jsxs(U, {
                        flexDirection: "column",
                        marginTop: 1,
                        children: [
                          Pi.jsx(w, {
                            dimColor: true,
                            children: "Available",
                          }),
                          Pi.jsx(hs, {
                            variant: "tree",
                            children: g.filter(rMf).map(nMf),
                          }),
                        ],
                      }),
                    !ce &&
                      Pi.jsx(hs, {
                        variant: "tree",
                        children: g.map(tMf),
                      }),
                  ],
                }),
          ],
        })),
        (t[70] = i),
        (t[71] = ce),
        (t[72] = g),
        (t[73] = M));
    else M = t[73];
    ((N = ((y && y.length > 0) || ae) && false),
      (t[0] = _.length),
      (t[1] = u),
      (t[2] = a),
      (t[3] = i),
      (t[4] = p),
      (t[5] = s),
      (t[6] = g),
      (t[7] = m.length),
      (t[8] = f),
      (t[9] = d),
      (t[10] = c),
      (t[11] = S?.tokens),
      (t[12] = b?.length),
      (t[13] = y),
      (t[14] = h),
      (t[15] = l),
      (t[16] = v),
      (t[17] = C),
      (t[18] = x),
      (t[19] = I),
      (t[20] = k),
      (t[21] = D),
      (t[22] = P),
      (t[23] = O),
      (t[24] = L),
      (t[25] = M),
      (t[26] = N),
      (t[27] = B));
  } else
    ((v = t[16]),
      (C = t[17]),
      (x = t[18]),
      (I = t[19]),
      (k = t[20]),
      (D = t[21]),
      (P = t[22]),
      (O = t[23]),
      (L = t[24]),
      (M = t[25]),
      (N = t[26]),
      (B = t[27]));
  let $;
  if (t[74] !== i || t[75] !== b)
    (($ = b && b.length > 0 && false), (t[74] = i), (t[75] = b), (t[76] = $));
  else $ = t[76];
  let q;
  if (t[77] !== _ || t[78] !== i)
    ((q =
      _.length > 0 &&
      Pi.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          Pi.jsxs(U, {
            children: [
              Pi.jsx(w, {
                bold: true,
                children: "Custom agents",
              }),
              Pi.jsx(w, {
                dimColor: true,
                children: " \xB7 /agents",
              }),
            ],
          }),
          i
            ? Pi.jsx(Ytr, {
                count: _.length,
                noun: "agent",
                tokens: _.reduce(eMf, 0),
              })
            : Array.from(E1l(_).entries()).map(QPf),
        ],
      })),
      (t[77] = _),
      (t[78] = i),
      (t[79] = q));
  else q = t[79];
  let W;
  if (t[80] !== i || t[81] !== m)
    ((W =
      m.length > 0 &&
      Pi.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          Pi.jsxs(U, {
            children: [
              Pi.jsx(w, {
                bold: true,
                children: "Memory files",
              }),
              Pi.jsx(w, {
                dimColor: true,
                children: " \xB7 /memory",
              }),
            ],
          }),
          i
            ? Pi.jsx(Ytr, {
                count: m.length,
                noun: "file",
                tokens: m.reduce(JPf, 0),
              })
            : Pi.jsx(hs, {
                variant: "tree",
                children: m.map(XPf),
              }),
        ],
      })),
      (t[80] = i),
      (t[81] = m),
      (t[82] = W));
  else W = t[82];
  let V;
  if (t[83] !== i || t[84] !== S)
    ((V =
      S &&
      S.tokens > 0 &&
      Pi.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          Pi.jsxs(U, {
            children: [
              Pi.jsx(w, {
                bold: true,
                children: "Skills",
              }),
              Pi.jsx(w, {
                dimColor: true,
                children: " \xB7 /skills",
              }),
            ],
          }),
          i
            ? Pi.jsx(Ytr, {
                count: S.skillFrontmatter.length,
                noun: "skill",
                tokens: S.tokens,
              })
            : Array.from(E1l(S.skillFrontmatter).entries()).map(KPf),
        ],
      })),
      (t[83] = i),
      (t[84] = S),
      (t[85] = V));
  else V = t[85];
  let Y;
  if (t[86] !== A) ((Y = A && false), (t[86] = A), (t[87] = Y));
  else Y = t[87];
  let z;
  if (t[88] !== i || t[89] !== x)
    ((z =
      i &&
      x &&
      Pi.jsx(U, {
        marginTop: 1,
        children: Pi.jsx(w, {
          dimColor: true,
          children: "/context all to expand",
        }),
      })),
      (t[88] = i),
      (t[89] = x),
      (t[90] = z));
  else z = t[90];
  let K;
  if (
    t[91] !== v ||
    t[92] !== $ ||
    t[93] !== q ||
    t[94] !== W ||
    t[95] !== V ||
    t[96] !== Y ||
    t[97] !== z ||
    t[98] !== P ||
    t[99] !== O ||
    t[100] !== L ||
    t[101] !== M ||
    t[102] !== N
  )
    ((K = Pi.jsxs(v, {
      flexDirection: P,
      marginLeft: O,
      children: [L, M, N, $, q, W, V, Y, z],
    })),
      (t[91] = v),
      (t[92] = $),
      (t[93] = q),
      (t[94] = W),
      (t[95] = V),
      (t[96] = Y),
      (t[97] = z),
      (t[98] = P),
      (t[99] = O),
      (t[100] = L),
      (t[101] = M),
      (t[102] = N),
      (t[103] = K));
  else K = t[103];
  let Z;
  if (t[104] !== n) ((Z = h1l(n)), (t[104] = n), (t[105] = Z));
  else Z = t[105];
  let J;
  if (t[106] !== Z)
    ((J = Pi.jsx(b1l, {
      suggestions: Z,
    })),
      (t[106] = Z),
      (t[107] = J));
  else J = t[107];
  let ne;
  if (
    t[108] !== C ||
    t[109] !== I ||
    t[110] !== k ||
    t[111] !== D ||
    t[112] !== K ||
    t[113] !== J ||
    t[114] !== B
  )
    ((ne = Pi.jsxs(C, {
      flexDirection: B,
      paddingLeft: I,
      children: [k, D, K, J],
    })),
      (t[108] = C),
      (t[109] = I),
      (t[110] = k),
      (t[111] = D),
      (t[112] = K),
      (t[113] = J),
      (t[114] = B),
      (t[115] = ne));
  else ne = t[115];
  return ne;
}
function KPf(e) {
  let [t, n] = e;
  return Pi.jsxs(
    U,
    {
      flexDirection: "column",
      marginTop: 1,
      children: [
        Pi.jsx(w, {
          dimColor: true,
          children: t,
        }),
        Pi.jsx(hs, {
          variant: "tree",
          children: n.map(YPf),
        }),
      ],
    },
    t,
  );
}
function YPf(e, t) {
  return Pi.jsx(
    hs.Node,
    {
      children: Pi.jsxs(w, {
        children: [
          e.name,
          ":",
          " ",
          Pi.jsxs(w, {
            dimColor: true,
            children: [sae(e.tokens), " tokens"],
          }),
        ],
      }),
    },
    t,
  );
}
function XPf(e, t) {
  return Pi.jsx(
    hs.Node,
    {
      children: Pi.jsxs(w, {
        children: [
          kd(e.path),
          ":",
          " ",
          Pi.jsxs(w, {
            dimColor: true,
            children: [gl(e.tokens), " tokens"],
          }),
        ],
      }),
    },
    t,
  );
}
function JPf(e, t) {
  return e + t.tokens;
}
function QPf(e) {
  let [t, n] = e;
  return Pi.jsxs(
    U,
    {
      flexDirection: "column",
      marginTop: 1,
      children: [
        Pi.jsx(w, {
          dimColor: true,
          children: t,
        }),
        Pi.jsx(hs, {
          variant: "tree",
          children: n.map(ZPf),
        }),
      ],
    },
    t,
  );
}
function ZPf(e, t) {
  return Pi.jsx(
    hs.Node,
    {
      children: Pi.jsxs(w, {
        children: [
          e.agentType,
          ":",
          " ",
          Pi.jsxs(w, {
            dimColor: true,
            children: [gl(e.tokens), " tokens"],
          }),
        ],
      }),
    },
    t,
  );
}
function eMf(e, t) {
  return e + t.tokens;
}
function tMf(e, t) {
  return Pi.jsx(
    hs.Node,
    {
      children: Pi.jsxs(w, {
        children: [
          e.name,
          ":",
          " ",
          Pi.jsxs(w, {
            dimColor: true,
            children: [gl(e.tokens), " tokens"],
          }),
        ],
      }),
    },
    t,
  );
}
function nMf(e, t) {
  return Pi.jsx(
    hs.Node,
    {
      dimColor: true,
      children: e.name,
    },
    t,
  );
}
function rMf(e) {
  return !e.isLoaded;
}
function oMf(e) {
  return !e.isLoaded;
}
function sMf(e, t) {
  return Pi.jsx(
    hs.Node,
    {
      children: Pi.jsxs(w, {
        children: [
          e.name,
          ":",
          " ",
          Pi.jsxs(w, {
            dimColor: true,
            children: [gl(e.tokens), " tokens"],
          }),
        ],
      }),
    },
    t,
  );
}
function iMf(e) {
  return e.isLoaded;
}
function aMf(e) {
  return e.isLoaded;
}
function lMf(e, t) {
  return e + t.tokens;
}
function cMf(e) {
  return e.name === "Free space";
}
function uMf(e) {
  return e.name === "Free space";
}
function dMf(e) {
  return e.name === "Free space";
}
function pMf(e, t) {
  return Pi.jsx(
    U,
    {
      flexDirection: "row",
      marginLeft: -1,
      children: e.map(fMf),
    },
    t,
  );
}
function fMf(e, t) {
  if (e.categoryName === "Free space")
    return Pi.jsx(
      w,
      {
        dimColor: true,
        children: "\u26F6 ",
      },
      t,
    );
  if (e.categoryName === RESERVED_CATEGORY_NAME)
    return Pi.jsx(
      w,
      {
        color: e.color,
        children: "\u26DD ",
      },
      t,
    );
  return Pi.jsx(
    w,
    {
      color: e.color,
      children: e.squareFullness >= 0.7 ? "\u26C1 " : "\u26C0 ",
    },
    t,
  );
}
function mMf(e) {
  return e.name === RESERVED_CATEGORY_NAME;
}
function gMf(e) {
  return e.isDeferred && e.name.includes("MCP");
}
function hMf(e) {
  return (
    e.tokens > 0 && e.name !== "Free space" && e.name !== RESERVED_CATEGORY_NAME && !e.isDeferred
  );
}
var Xtr,
  Pi,
  RESERVED_CATEGORY_NAME = "Autocompact buffer",
  zPf;
