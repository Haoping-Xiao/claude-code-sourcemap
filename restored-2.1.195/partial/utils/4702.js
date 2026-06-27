// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ONl
// matched 2.1.88 source: src/components/agents/AgentsList.tsx
// class=partial  jaccard=0.1356  score=0.4067  fileCov=0.169
// note: low-confidence suggestion: src/components/agents/AgentsList.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ONl = E(() => {
  SC();
  Ye();
  gm();
  xoe();
  BNo();
  bnr = R(lt(), 1), kEt = R(rt(), 1), pR = R(se(), 1);
});
function BNl() {
  let e = NNl.c(2);
  if (!xo.isSupportedPlatform()) return null;
  if (!xo.isSandboxEnabledInSettings()) return null;
  if (!xo.isPlatformInEnabledList()) return null;
  let t, n;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
    n = Symbol.for("react.early_return_sentinel");
    e: {
      let r = xo.checkDependencies(),
        o = r.errors.length > 0,
        s = r.warnings.length > 0;
      if (!o && !s) {
        n = null;
        break e;
      }
      t = xHe.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [xHe.jsx(nx, {
          title: "Sandbox",
          status: o ? "error" : "warning"
        }), xHe.jsxs(hs, {
          variant: "tree",
          children: [r.errors.map(G$f), r.warnings.map(j$f), o && xHe.jsxs(hs.Node, {
            dimColor: !0,
            children: ["Run ", xHe.jsx(w, {
              color: "suggestion",
              children: "/sandbox"
            }), " for install instructions"]
          })]
        })]
      });
    }
    e[0] = t, e[1] = n;
  } else t = e[0], n = e[1];
  if (n !== Symbol.for("react.early_return_sentinel")) return n;
  return t;
}
function j$f(e, t) {
  return xHe.jsx(hs.Node, {
    color: "warning",
    children: e
  }, t);
}
function G$f(e, t) {
  return xHe.jsx(hs.Node, {
    color: "error",
    children: e
  }, t);
}
var NNl, xHe;