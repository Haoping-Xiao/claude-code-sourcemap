// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gor
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0071  score=0.6682  fileCov=0.0071
// note: nearest: src/screens/REPL.tsx (0.0071); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gor = E(() => {
  jh();
  Ye();
  Un();
  wr();
  gm();
  i5l = R(lt(), 1), sZ = R(se(), 1);
});
function c5l() {
  let e = l5l.c(40),
    {
      columns: t
    } = br(),
    n = Ht(Jjf),
    r = Ht(Xjf),
    o = $yt(),
    s,
    i,
    a,
    l,
    c,
    u,
    d,
    p;
  if (e[0] !== n || e[1] !== t || e[2] !== r || e[3] !== o) {
    let I = zo(o),
      k = KY(o),
      {
        version: D,
        cwd: P,
        billingType: O,
        agentName: L
      } = fAt();
    s = n ?? L, p = Oe.CLAUDE_CODE_TUI_JUST_SWITCHED !== void 0;
    let M = Math.max(t - 15, 20);
    d = $a(D, Math.max(M - 13, 6));
    let N = Kst(I, r);
    l = null;
    let B = 0;
    {
      let q, W;
      if (e[12] === Symbol.for("react.memo_cache_sentinel")) W = gAt(), q = WXt(W), e[12] = q, e[13] = W;else q = e[12], W = e[13];
      let V = q;
      if (V) {
        let Y;
        if (e[14] === Symbol.for("react.memo_cache_sentinel")) Y = rn(` \xB7 ${V}`), e[14] = Y;else Y = e[14];
        B = Y;
        let z;
        if (e[15] === Symbol.for("react.memo_cache_sentinel")) z = yE.jsx(w, {
          dimColor: !0,
          children: " \xB7 "
        }), e[15] = z;else z = e[15];
        let K;
        if (e[16] === Symbol.for("react.memo_cache_sentinel")) K = yE.jsxs(w, {
          children: [z, yE.jsx(w, {
            color: W.status === "expired" ? "suggestion" : "warning",
            children: V
          })]
        }), e[16] = K;else K = e[16];
        l = K;
      }
    }
    ({
      shouldSplit: i,
      truncatedModel: u,
      truncatedBilling: c
    } = WWl(k + N, O, M - B));
    let $ = s ? M - 1 - rn(s) - 3 : M;
    a = h1e(P, Math.max($, 10)), e[0] = n, e[1] = t, e[2] = r, e[3] = o, e[4] = s, e[5] = i, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = p;
  } else s = e[4], i = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], p = e[11];
  let f = a,
    m = s && `@${s}`,
    g;
  if (e[17] !== m || e[18] !== f) g = [m, f].filter(Boolean), e[17] = m, e[18] = f, e[19] = g;else g = e[19];
  let h = g.join(" \xB7 "),
    y;
  if (e[20] === Symbol.for("react.memo_cache_sentinel")) y = hor ? yE.jsx(hor.Mascot, {
    fallback: Ns() ? yE.jsx(r6e, {}) : yE.jsx(rQ, {})
  }) : Ns() ? yE.jsx(r6e, {}) : yE.jsx(rQ, {}), e[20] = y;else y = e[20];
  let b;
  if (e[21] === Symbol.for("react.memo_cache_sentinel")) b = hor ? yE.jsx(hor.Title, {}) : yE.jsx(w, {
    bold: !0,
    children: "Claude Code"
  }), e[21] = b;else b = e[21];
  let _;
  if (e[22] !== d) _ = yE.jsxs(w, {
    children: [b, " ", yE.jsxs(w, {
      dimColor: !0,
      children: ["v", d]
    })]
  }), e[22] = d, e[23] = _;else _ = e[23];
  let S;
  if (e[24] !== i || e[25] !== l || e[26] !== c || e[27] !== u) S = i ? yE.jsxs(yE.Fragment, {
    children: [yE.jsx(w, {
      dimColor: !0,
      children: u
    }), yE.jsxs(w, {
      children: [yE.jsx(w, {
        dimColor: !0,
        children: c
      }), l]
    })]
  }) : yE.jsxs(w, {
    children: [yE.jsxs(w, {
      dimColor: !0,
      children: [u, " \xB7 ", c]
    }), l]
  }), e[24] = i, e[25] = l, e[26] = c, e[27] = u, e[28] = S;else S = e[28];
  let A;
  if (e[29] !== h) A = h && yE.jsx(w, {
    dimColor: !0,
    children: h
  }), e[29] = h, e[30] = A;else A = e[30];
  let v;
  if (e[31] !== _ || e[32] !== S || e[33] !== A) v = yE.jsxs(U, {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    children: [y, yE.jsxs(U, {
      flexDirection: "column",
      children: [_, S, A]
    })]
  }), e[31] = _, e[32] = S, e[33] = A, e[34] = v;else v = e[34];
  let C;
  if (e[35] !== p) C = p && yE.jsx(U, {
    paddingLeft: 2,
    flexDirection: "column",
    marginTop: 1,
    children: yE.jsx(a5l, {})
  }), e[35] = p, e[36] = C;else C = e[36];
  let x;
  if (e[37] !== v || e[38] !== C) x = yE.jsx(cP, {
    children: yE.jsxs(U, {
      flexDirection: "column",
      children: [v, C]
    })
  }), e[37] = v, e[38] = C, e[39] = x;else x = e[39];
  return x;
}
function Xjf(e) {
  return e.effortValue;
}
function Jjf(e) {
  return e.agent;
}
var l5l,
  yE,
  hor = null;