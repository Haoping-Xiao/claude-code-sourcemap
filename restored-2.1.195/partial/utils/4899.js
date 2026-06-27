// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u5l
// matched 2.1.88 source: src/components/LogoV2/LogoV2.tsx
// class=partial  jaccard=0.0733  score=0.3838  fileCov=0.0831
// note: low-confidence suggestion: src/components/LogoV2/LogoV2.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var u5l = E(() => {
  HN();
  _i();
  Tc();
  Ye();
  hAt();
  uo();
  Cp();
  wr();
  es();
  uf();
  GXt();
  Ao();
  lEe();
  bCo();
  x8t();
  gor();
  l5l = R(lt(), 1), yE = R(se(), 1);
});
function f5l() {
  let e = d5l.c(63),
    t = Lc(),
    n = t?.displayName ?? "",
    r = Sd(),
    {
      columns: o
    } = br(),
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) s = H8i(), e[0] = s;else s = e[0];
  let i = s,
    a = Ht(t4f),
    l = Ht(e4f),
    c = Dt(),
    u;
  try {
    u = qWl(3);
  } catch {
    u = [];
  }
  let {
      hasReleaseNotes: d
    } = FGl(c.lastReleaseNotesSeen),
    p,
    f;
  if (e[1] !== i) p = () => {
    if (Dt().lastReleaseNotesSeen === {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION) return;
    if (gn(Zjf), i) T8i();
  }, f = [c, i], e[1] = i, e[2] = p, e[3] = f;else p = e[2], f = e[3];
  p5l.useEffect(p, f);
  let m = $yt(),
    g = zo(m),
    h = KY(m),
    {
      version: y,
      cwd: b,
      billingType: _,
      agentName: S
    } = fAt(),
    A = a ?? S,
    v = Kst(g, l),
    C = h + v,
    x;
  if (e[4] !== C) x = $a(C, VFo - 20), e[4] = C, e[5] = x;else x = e[5];
  let I = x,
    k = null;
  {
    let Ie, Ve;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) Ve = gAt(), Ie = WXt(Ve), e[6] = Ie, e[7] = Ve;else Ie = e[6], Ve = e[7];
    let Ze = Ie;
    if (Ze) {
      let Be;
      if (e[8] === Symbol.for("react.memo_cache_sentinel")) Be = Qg.jsx(w, {
        color: Ve.status === "expired" ? "suggestion" : "warning",
        children: Ze
      }), e[8] = Be;else Be = e[8];
      k = Be;
    }
  }
  if (!d && !i && !Oe.CLAUDE_CODE_FORCE_FULL_LOGO) {
    let Ie;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) Ie = Qg.jsxs(Qg.Fragment, {
      children: [Qg.jsx(c5l, {}), false]
    }), e[9] = Ie;else Ie = e[9];
    return Ie;
  }
  let D = uor(o),
    P = mW(wc("theme", "dark").value),
    O = ` ${Io("claude", P)("Claude Code")} ${Io("inactive", P)(`v${y}`)} `,
    L = Io("claude", P)(" Claude Code "),
    M = r ? Qg.jsxs(w, {
      children: [Qg.jsxs(w, {
        color: "claude",
        bold: true,
        children: ["Claude Code", " "]
      }), Qg.jsxs(w, {
        dimColor: true,
        children: ["v", y]
      })]
    }) : null,
    N = r ? {} : {
      borderStyle: "round",
      borderColor: "claude",
      borderText: {
        content: D === "compact" ? L : O,
        position: "top",
        align: "start",
        offset: D === "compact" ? 1 : 3
      }
    };
  if (D === "compact") {
    let Ie = dor(n);
    if (rn(Ie) > o - 4) {
      let bt;
      if (e[10] === Symbol.for("react.memo_cache_sentinel")) bt = dor(null), e[10] = bt;else bt = e[10];
      Ie = bt;
    }
    let Ve = A ? o - 4 - 1 - rn(A) - 3 : o - 4,
      Ze = h1e(b, Math.max(Ve, 10)),
      Be = [A && `@${A}`, Ze].filter(Boolean).join(" \xB7 "),
      Me;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) Me = Qg.jsx(U, {
      marginY: 1,
      children: yor ? Qg.jsx(yor.Mascot, {
        fallback: Qg.jsx(rQ, {})
      }) : Qg.jsx(rQ, {})
    }), e[11] = Me;else Me = e[11];
    let Ue;
    if (e[12] !== I) Ue = Qg.jsx(w, {
      dimColor: true,
      children: I
    }), e[12] = I, e[13] = Ue;else Ue = e[13];
    let tt;
    if (e[14] !== Be) tt = Be && Qg.jsx(w, {
      dimColor: true,
      children: Be
    }), e[14] = Be, e[15] = tt;else tt = e[15];
    return Qg.jsx(cP, {
      children: Qg.jsxs(U, {
        flexDirection: "column",
        ...N,
        paddingX: 1,
        paddingY: 1,
        alignItems: r ? void 0 : "center",
        width: o,
        children: [M, Qg.jsx(w, {
          bold: true,
          children: Ie
        }), Me, Ue, Qg.jsx(w, {
          dimColor: true,
          children: _
        }), tt, k]
      })
    });
  }
  let B = dor(n),
    $ = !process.env.IS_DEMO && t?.organizationName ? `${I} \xB7 ${_} \xB7 ${t.organizationName}` : `${I} \xB7 ${_}`,
    q = A ? VFo - 1 - rn(A) - 3 : VFo,
    W = h1e(b, Math.max(q, 10)),
    V = A && `@${A}`,
    Y;
  if (e[16] !== V || e[17] !== W) Y = [V, W].filter(Boolean), e[16] = V, e[17] = W, e[18] = Y;else Y = e[18];
  let z = Y.join(" \xB7 "),
    K = GWl(B, z, $),
    {
      leftWidth: Z,
      rightWidth: J
    } = jWl(o, D, K),
    ne = t5l(u),
    oe;
  if (i) {
    let Ie;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) Ie = n5l(qQr()), e[19] = Ie;else Ie = e[19];
    let Ve;
    if (e[20] !== ne) Ve = [Ie, ne], e[20] = ne, e[21] = Ve;else Ve = e[21];
    oe = Ve;
  } else {
    let Ie;
    if (e[22] !== ne) Ie = [ne], e[22] = ne, e[23] = Ie;else Ie = e[23];
    oe = Ie;
  }
  let re;
  if (e[24] !== M) re = M && Qg.jsx(U, {
    paddingX: 1,
    children: M
  }), e[24] = M, e[25] = re;else re = e[25];
  let ee = D === "horizontal" ? "row" : "column",
    ce = r ? void 0 : "center",
    ae = r ? void 0 : 9,
    de;
  if (e[26] !== B) de = Qg.jsx(U, {
    marginTop: 1,
    children: Qg.jsx(w, {
      bold: true,
      children: B
    })
  }), e[26] = B, e[27] = de;else de = e[27];
  let Ee;
  if (e[28] === Symbol.for("react.memo_cache_sentinel")) Ee = yor ? Qg.jsx(yor.Mascot, {
    fallback: Qg.jsx(rQ, {})
  }) : Qg.jsx(rQ, {}), e[28] = Ee;else Ee = e[28];
  let me = r ? void 0 : "center",
    pe;
  if (e[29] !== $) pe = Qg.jsx(w, {
    dimColor: true,
    children: $
  }), e[29] = $, e[30] = pe;else pe = e[30];
  let ge;
  if (e[31] !== z) ge = z && Qg.jsx(w, {
    dimColor: true,
    children: z
  }), e[31] = z, e[32] = ge;else ge = e[32];
  let he;
  if (e[33] !== me || e[34] !== pe || e[35] !== ge || e[36] !== k) he = Qg.jsxs(U, {
    flexDirection: "column",
    alignItems: me,
    children: [pe, ge, k]
  }), e[33] = me, e[34] = pe, e[35] = ge, e[36] = k, e[37] = he;else he = e[37];
  let ie;
  if (e[38] !== Z || e[39] !== ae || e[40] !== de || e[41] !== he || e[42] !== ce) ie = Qg.jsxs(U, {
    flexDirection: "column",
    width: Z,
    justifyContent: "space-between",
    alignItems: ce,
    minHeight: ae,
    children: [de, Ee, he]
  }), e[38] = Z, e[39] = ae, e[40] = de, e[41] = he, e[42] = ce, e[43] = ie;else ie = e[43];
  let le;
  if (e[44] !== r || e[45] !== D) le = D === "horizontal" && !r && Qg.jsx(U, {
    height: "100%",
    borderStyle: "single",
    borderColor: "claude",
    borderDimColor: true,
    borderTop: false,
    borderBottom: false,
    borderLeft: false
  }), e[44] = r, e[45] = D, e[46] = le;else le = e[46];
  let He;
  if (e[47] !== oe || e[48] !== D || e[49] !== J) He = D === "horizontal" && Qg.jsx(QWl, {
    feeds: oe,
    maxWidth: J
  }), e[47] = oe, e[48] = D, e[49] = J, e[50] = He;else He = e[50];
  let ye;
  if (e[51] !== ie || e[52] !== le || e[53] !== He || e[54] !== ee) ye = Qg.jsxs(U, {
    flexDirection: ee,
    paddingX: 1,
    gap: 1,
    children: [ie, le, He]
  }), e[51] = ie, e[52] = le, e[53] = He, e[54] = ee, e[55] = ye;else ye = e[55];
  let ue;
  if (e[56] !== N || e[57] !== ye || e[58] !== re) ue = Qg.jsx(cP, {
    children: Qg.jsxs(U, {
      flexDirection: "column",
      ...N,
      children: [re, ye]
    })
  }), e[56] = N, e[57] = ye, e[58] = re, e[59] = ue;else ue = e[59];
  let we;
  if (e[60] === Symbol.for("react.memo_cache_sentinel")) we = false, e[60] = we;else we = e[60];
  let Ce;
  if (e[61] !== ue) Ce = Qg.jsxs(Qg.Fragment, {
    children: [ue, we]
  }), e[61] = ue, e[62] = Ce;else Ce = e[62];
  return Ce;
}
function Zjf(e) {
  if (e.lastReleaseNotesSeen === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION) return e;
  return {
    ...e,
    lastReleaseNotesSeen: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION
  };
}
function e4f(e) {
  return e.effortValue;
}
function t4f(e) {
  return e.agent;
}
var d5l,
  p5l,
  Qg,
  yor = null,
  VFo = 50;