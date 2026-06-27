// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JUl
// matched 2.1.88 source: src/commands/install-github-app/install-github-app.tsx
// class=new  jaccard=0.0136  score=0.2144  fileCov=0.0143
// note: nearest: src/commands/install-github-app/install-github-app.tsx (0.0136); dir inferred from dep-graph -> commands; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JUl = E(() => {
  pz();
  R6();
  Ye();
  YUl = R(lt(), 1), zfe = R(se(), 1);
});
function ZUl(e) {
  let t = QUl.c(15),
    {
      error: n,
      errorReason: r,
      errorInstructions: o
    } = e,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) s = KL.jsx(U, {
    marginBottom: 1,
    children: KL.jsx(LH, {
      children: "Install GitHub App"
    })
  }), t[0] = s;else s = t[0];
  let i;
  if (t[1] !== n) i = KL.jsxs(w, {
    color: "error",
    children: ["Error: ", n]
  }), t[1] = n, t[2] = i;else i = t[2];
  let a;
  if (t[3] !== r) a = r && KL.jsx(U, {
    marginTop: 1,
    children: KL.jsxs(w, {
      dimColor: true,
      children: ["Reason: ", r]
    })
  }), t[3] = r, t[4] = a;else a = t[4];
  let l;
  if (t[5] !== o) l = o.length > 0 && KL.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [KL.jsx(w, {
      dimColor: true,
      children: "How to fix:"
    }), KL.jsx(U, {
      flexDirection: "column",
      marginLeft: 2,
      children: o.map(y1f)
    })]
  }), t[5] = o, t[6] = l;else l = t[6];
  let c;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) c = KL.jsx(U, {
    marginTop: 1,
    children: KL.jsxs(w, {
      dimColor: true,
      children: ["For manual setup instructions, see:", " ", KL.jsx(w, {
        color: "claude",
        children: Vfe
      })]
    })
  }), t[7] = c;else c = t[7];
  let u;
  if (t[8] !== i || t[9] !== a || t[10] !== l) u = KL.jsxs(cA, {
    children: [s, i, a, l, c]
  }), t[8] = i, t[9] = a, t[10] = l, t[11] = u;else u = t[11];
  let d;
  if (t[12] === Symbol.for("react.memo_cache_sentinel")) d = KL.jsx(U, {
    marginLeft: 3,
    children: KL.jsx(w, {
      dimColor: true,
      children: "Press any key to exit"
    })
  }), t[12] = d;else d = t[12];
  let p;
  if (t[13] !== u) p = KL.jsxs(KL.Fragment, {
    children: [u, d]
  }), t[13] = u, t[14] = p;else p = t[14];
  return p;
}
function y1f(e, t) {
  return KL.jsx(iE, {
    children: e
  }, t);
}
var QUl, KL;