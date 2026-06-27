// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EJt
// matched 2.1.88 source: src/commands/install-github-app/CheckGitHubStep.tsx
// class=partial  jaccard=0.063  score=0.0715  fileCov=0.3459
// note: low-confidence suggestion: src/commands/install-github-app/CheckGitHubStep.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EJt = E(() => {
  szl = R(lt(), 1), NAt = R(rt(), 1), lzl = R(se(), 1), izl = NAt.createContext({
    getDenials: () => [],
    recordDenial: () => {},
    removeDenial: () => {}
  });
});
function wsr(e) {
  let t = czl.c(9),
    {
      ruleValue: n
    } = e;
  switch (n.toolName) {
    case cl.name:
      if (n.ruleContent) {
        if (n.ruleContent.endsWith(":*") || n.ruleContent.endsWith(" *")) {
          let r;
          if (t[0] !== n.ruleContent) r = n.ruleContent.slice(0, -2), t[0] = n.ruleContent, t[1] = r;else r = t[1];
          let o;
          if (t[2] !== r) o = ZHe.jsxs(w, {
            dimColor: !0,
            children: ["Any Bash command starting with", " ", ZHe.jsx(w, {
              bold: !0,
              children: r
            })]
          }), t[2] = r, t[3] = o;else o = t[3];
          return o;
        } else {
          let r;
          if (t[4] !== n.ruleContent) r = ZHe.jsxs(w, {
            dimColor: !0,
            children: ["The Bash command ", ZHe.jsx(w, {
              bold: !0,
              children: n.ruleContent
            })]
          }), t[4] = n.ruleContent, t[5] = r;else r = t[5];
          return r;
        }
      } else {
        let r;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) r = ZHe.jsx(w, {
          dimColor: !0,
          children: "Any Bash command"
        }), t[6] = r;else r = t[6];
        return r;
      }
    default:
      if (!n.ruleContent) {
        let r;
        if (t[7] !== n.toolName) r = ZHe.jsxs(w, {
          dimColor: !0,
          children: ["Any use of the ", ZHe.jsx(w, {
            bold: !0,
            children: n.toolName
          }), " tool"]
        }), t[7] = n.toolName, t[8] = r;else r = t[8];
        return r;
      } else return null;
  }
}
var czl, ZHe;