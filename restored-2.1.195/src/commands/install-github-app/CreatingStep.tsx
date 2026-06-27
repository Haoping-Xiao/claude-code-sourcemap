// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KUl
// matched 2.1.88 source: src/commands/install-github-app/CreatingStep.tsx
// class=modified  jaccard=0.778  score=0.852  fileCov=0.8996
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var KUl = E(() => {
  Bs();
  pz();
  Ko();
  Mg();
  _i();
  Ye();
  ps();
  ((VUl = R(lt(), 1)), (lBo = R(rt(), 1)), (fR = R(se(), 1)));
});
function XUl(e) {
  let t = YUl.c(10),
    {
      currentWorkflowInstallStep: n,
      secretExists: r,
      useExistingSecret: o,
      secretName: s,
      skipWorkflow: i,
      selectedWorkflows: a,
    } = e,
    l = i === void 0 ? false : i,
    c;
  if (t[0] !== r || t[1] !== s || t[2] !== a || t[3] !== l || t[4] !== o)
    ((c = l
      ? [
          "Getting repository information",
          r && o ? "Using existing API key secret" : `Setting up ${s} secret`,
        ]
      : [
          "Getting repository information",
          "Creating branch",
          a.length > 1 ? "Creating workflow files" : "Creating workflow file",
          r && o ? "Using existing API key secret" : `Setting up ${s} secret`,
          "Opening pull request page",
        ]),
      (t[0] = r),
      (t[1] = s),
      (t[2] = a),
      (t[3] = l),
      (t[4] = o),
      (t[5] = c));
  else c = t[5];
  let u = c,
    d;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((d = zfe.jsx(U, {
      marginBottom: 1,
      children: zfe.jsx(LH, {
        subtitle: "Create GitHub Actions workflow",
        children: "Install GitHub App",
      }),
    })),
      (t[6] = d));
  else d = t[6];
  let p;
  if (t[7] !== n || t[8] !== u)
    ((p = zfe.jsx(zfe.Fragment, {
      children: zfe.jsxs(cA, {
        children: [
          d,
          u.map((f, m) => {
            let g = "pending";
            if (m < n) g = "completed";
            else if (m === n) g = "in-progress";
            return zfe.jsx(
              U,
              {
                children: zfe.jsxs(w, {
                  color: g === "completed" ? "success" : g === "in-progress" ? "warning" : void 0,
                  children: [
                    g === "completed" ? "\u2713 " : "",
                    f,
                    g === "in-progress" ? "\u2026" : "",
                  ],
                }),
              },
              m,
            );
          }),
        ],
      }),
    })),
      (t[7] = n),
      (t[8] = u),
      (t[9] = p));
  else p = t[9];
  return p;
}
var YUl, zfe;
